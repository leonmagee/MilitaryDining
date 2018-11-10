import React, {Component} from 'react'
import {connect} from 'react-redux'
import {variables} from '../Styles/Variables'
import {defaults} from '../Styles/Defaults'
import {dateString, dateStringName} from './HelperFunctions'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Animated,
} from 'react-native'

const styles = StyleSheet.create({
  innerWrap: {
    backgroundColor: variables.backgroundWhite,
    padding: 10,
    flex: 1,
  },
  dateTitleWrap: {
    alignItems: 'center',
  },
  dateTitle: {
    fontSize: 23,
    fontFamily: 'BlackOpsOne-Regular'
  },
})

class DailyCalories extends Component {

  constructor(props) {
    super(props)

    this.state = {
      totalCals: 0,
      eatenFoods: []
    }

  }

  componentDidMount() {

    const eatenItemsArray = []

      AsyncStorage.getItem('@CurrentEatsArray').then((value) => {

      if (value) {

        let eatenItems = JSON.parse(value)

        eatenItems.map((item) => {

            const currentDate = dateString()

            if (item.date === currentDate) {

              eatenItemsArray.push({
                'meal': item.meal,
                'id' : item.id
              })
          }
        })

        this.setState({
          eatenFoods: eatenItemsArray
        })


      }
    })
  }


  render() {
    
    const headerDate = dateStringName()

    const eatenItemsElement = this.state.eatenFoods.map((item, key) => {
      return (
          <View key={key}>
            <Text>Meal: {item.meal}</Text>
            <Text>ID: {item.id}</Text>
            <Text>Day: {item.day}</Text>
            <Text>Mess Hall: {item.messHallName}</Text>
          </View>
        )
    })

    return (
      <View style={defaults.defaultMainWrap}>

        <View style={defaults.defaultTitleWrap}>
          <Text style={defaults.defaultTitle}>Daily Calorie Intake</Text>
        </View>

        <View style={styles.innerWrap}>

          <View style={styles.dateTitleWrap}>
            <Text style={styles.dateTitle}>{headerDate}</Text>
          </View>

          <View>
          {eatenItemsElement}
          </View>

          <Text>Here are your total calories: {this.state.totalCals}</Text>

        </View>
      </View>
    )
  }
}

// might need action to remove food?
// mapActionsToProps = (dispatch) => ({
//   setCurrentFavorites(results) {
//     dispatch({type: 'SET_FAVORITES', payload: results})
//   }
// })

mapStateToProps = (state) => ({restData: state.restMenuItemData, currentFavorites: state.currentFavorites})

module.exports = connect(mapStateToProps)(DailyCalories)

//module.exports = DailyCalories
