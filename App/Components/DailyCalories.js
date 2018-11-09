import React, {Component} from 'react'
import {connect} from 'react-redux'
import {variables} from '../Styles/Variables'
import {defaults} from '../Styles/Defaults'
import {dateStringName} from './HelperFunctions'

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
      cals: 70,
    }

  }


  render() {
    
    const headerDate = dateStringName()

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
            <Text>Item 1</Text>
            <Text>Item 2</Text>
          </View>

          <Text>Here are you daily calories: {this.state.cals}</Text>

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
