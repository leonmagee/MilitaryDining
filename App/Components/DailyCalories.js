import React, {Component} from 'react'
import {connect} from 'react-redux'
import {variables} from '../Styles/Variables'
import {defaults} from '../Styles/Defaults'
import {dateString, dateStringName, removeQuotes} from './HelperFunctions'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Animated,
  ScrollView
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
  foodItemWrap: {
    padding: 10,
    margin: 10,
    backgroundColor: '#EEE',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD'
  },
  foodHeader: {
    color: 'green'
  },
  foodName: {
    fontSize: 18,
    fontFamily: 'BlackOpsOne-Regular'
  },
  calories: {
    color: 'red'
  }
})

/**
* to do
1. we need the calories added to the array
2. name of meal added to array
3. we need to put this data into redux
*/

class DailyCalories extends Component {

  constructor(props) {
    super(props)

    // this.state = {
    //   totalCals: 0,
    //   eatenFoods: []
    // }

  }

  render() {

    if(this.props.currentMeals) {

        var eatenItemsArray = []

        this.props.currentMeals.map((item) => {

            const currentDate = dateString()

            if (item.date === currentDate) {

              eatenItemsArray.push({
                'meal': item.meal,
                'id': item.id,
                'messHallName': item.messHallName,
                'day': item.day,
                'foodName': item.name,
                'cals': item.cals
              })
          }
        })
      } else {
        var eatenItemsArray = false
      }

      // this.setState({
      //   eatenFoods: eatenItemsArray
      // })

    const headerDate = dateStringName()

    if (eatenItemsArray) {

    var eatenItemsElement = eatenItemsArray.map((item, key) => {
      return (
          <View key={key} style={styles.foodItemWrap}>
            <Text style={styles.foodHeader}>{item.messHallName} > {item.meal}</Text>
            <Text style={styles.foodName}>{removeQuotes(item.foodName)}</Text>
            <Text style={styles.calories}>Calories: {item.cals}</Text>
          </View>
        )
    })
  } else {
    var eatenItemsElement = <View></View>
  }

    return (
      <View style={defaults.defaultMainWrap}>

        <View style={defaults.defaultTitleWrap}>
          <Text style={defaults.defaultTitle}>Daily Calorie Intake</Text>
        </View>

        <ScrollView style={styles.innerWrap}>

          <View style={styles.dateTitleWrap}>
            <Text style={styles.dateTitle}>{headerDate}</Text>
          </View>

          <View>
          {eatenItemsElement}
          </View>

          <Text>Here are your total calories: </Text>

        </ScrollView>
      </View>
    )
  }
}

mapStateToProps = (state) => ({currentMeals: state.currentMeals})

module.exports = connect(mapStateToProps)(DailyCalories)