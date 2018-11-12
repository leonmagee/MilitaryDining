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
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  foodItem: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'BlackOpsOne-Regular',
    paddingRight: 5,
  },
  foodName: {
    flex: 4,
  },
  messHallName: {
    flex: 2,
    //color: 'orange'
  },
  mealName: {
    flex: 2,
    //color: 'pink'
  },
  calories: {
    color: variables.brandSecond,
    fontSize: 18,
  },
  tableWrap: {
    paddingTop: 30,
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  tableHeaderText: {
    flex: 1,
    paddingVertical: 5,
    paddingRight: 5,
    fontSize: 12,
    fontFamily: 'BlackOpsOne-Regular',
  },
  tableHeader1: {
    flex: 4,
  },
  tableHeader2: {
    flex: 2,
  },
  tableHeader3: {
    flex: 2,
  },
  totalCalsWrap: {
    backgroundColor: variables.brandPrimary,
    paddingVertical: 5,
    marginTop: 15,
  },
  totalCalsText: {
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'BlackOpsOne-Regular',
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

      var totalCals = 0

      var eatenItemsElement = this.props.currentMeals.map((item, key) => {

        const currentDate = dateString()

        if (item.date === currentDate) {

              totalCals = (parseInt(totalCals) + parseInt(item.cals))

              //item.id //item.day
              return (
                <View key={key} style={styles.foodItemWrap}>
                <Text style={[styles.foodItem, styles.foodName]}>{removeQuotes(item.name)}</Text>
                <Text style={[styles.foodItem, styles.messHallName]}>{item.messHallName}</Text>
                <Text style={[styles.foodItem, styles.mealName]}>{item.meal}</Text>
                <Text style={[styles.foodItem, styles.calories]}>{item.cals}</Text>
                </View>
                )
            }
          })
    } else {

      var eatenItemsElement = <View></View>
    }

    const headerDate = dateStringName()

    return (
      <View style={defaults.defaultMainWrap}>

      <View style={defaults.defaultTitleWrap}>
      <Text style={defaults.defaultTitle}>Daily Calorie Intake</Text>
      </View>

      <ScrollView style={styles.innerWrap}>

      <View style={styles.dateTitleWrap}>
        <Text style={styles.dateTitle}>{headerDate}</Text>
      </View>

      <View style={styles.tableWrap}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.tableHeader1]}>Food Choice</Text>
          <Text style={[styles.tableHeaderText, styles.tableHeader2]}>Mess Hall</Text>
          <Text style={[styles.tableHeaderText, styles.tableHeader3]}>Meal</Text>
          <Text style={[styles.tableHeaderText, styles.tableHeader4]}>Cals</Text>
        </View>
      {eatenItemsElement}
      </View>

      <View style={styles.totalCalsWrap}>
        <Text style={styles.totalCalsText}>{totalCals} Calories</Text>
      </View>

      </ScrollView>
      </View>
      )
  }
}

mapStateToProps = (state) => ({currentMeals: state.currentMeals})

module.exports = connect(mapStateToProps)(DailyCalories)