import React, {Component} from 'react'
import {connect} from 'react-redux'

import {View, ScrollView, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  mainWrap: {
    //backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  messHallWrap: {
    marginTop: 20,
    flex: 1,
    alignSelf: 'stretch',
  },
  messHallNameWrap: {
    paddingTop: 40,
    paddingBottom: 5,
  },
  messHallName: {
    fontSize: 22,
    color: '#111',
    fontFamily: 'Black Ops One',
  },
  dayWrap: {
    backgroundColor: '#111',
    paddingVertical: 10,
    alignItems: 'center',
  },
  dayText: {
    fontFamily: 'Black Ops One',
    fontSize: 17,
    color: '#FFF',
  },
  mealNameWrap: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  mealNameText: {
    fontFamily: 'Black Ops One',
    fontSize: 20,
    color: '#333',
  },
  menuFoodItemWrap: {
    //backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  menuFoodItem: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 12,
  }
})

class MenuPage extends Component {

  render() {

    // const MessHallMenu = this.state.currentMenu.menus.map((data) => {
    //   return (
    //     <View key={data.id}>
    //       <TouchableHighlight onPress={() => this.props.goToMenuPage(data)} underlayColor="transparent">
    //         <Text style={styles.messHallTitle}>{data.name}</Text>
    //       </TouchableHighlight>
    //     </View>
    //   )
    // })
    const menuz = this.props.currentMenu;

    const menu_days = menuz.menus.map((menu, key) => {

      let breakfast = menu.breakfast.map((item, key) => {
        return (
          <View style={styles.menuFoodItemWrap} key={key}>
            <Text style={styles.menuFoodItem}>{item}</Text>
          </View>
        )
      })

      let lunch = menu.lunch.map((item, key) => {
        return (
          <View style={styles.menuFoodItemWrap} key={key}>
            <Text style={styles.menuFoodItem}>{item}</Text>
          </View>
        )
      })

      let dinner = menu.dinner.map((item, key) => {
        return (
          <View style={styles.menuFoodItemWrap} key={key}>
            <Text style={styles.menuFoodItem}>{item}</Text>
          </View>
        )
      })

      let pastry_bar = menu.pastry_bar.map((item, key) => {
        return (
          <View style={styles.menuFoodItemWrap} key={key}>
            <Text style={styles.menuFoodItem}>{item}</Text>
          </View>
        )
      })

      return (
        <View key={key}>
          <View style={styles.dayWrap}>
            <Text style={styles.dayText}>Day {menu.day}</Text>
          </View>
          <View style={styles.mealNameWrap}>
            <Text style={styles.mealNameText}>Breakfast</Text>
          </View>
          {breakfast}
          <View style={styles.mealNameWrap}>
            <Text style={styles.mealNameText}>Lunch</Text>
          </View>
          {lunch}
          <View style={styles.mealNameWrap}>
            <Text style={styles.mealNameText}>Dinner</Text>
          </View>
          {dinner}
          <View style={styles.mealNameWrap}>
            <Text style={styles.mealNameText}>Pastry Bar</Text>
          </View>
          {pastry_bar}
        </View>
      )
    })

    return (
      <ScrollView>
        <View style={styles.mainWrap}>
          <View style={styles.messHallNameWrap}>
            <Text style={styles.messHallName}>{menuz.name}</Text>
          </View>
          <View style={styles.messHallWrap}>
            {menu_days}
          </View>
        </View>
      </ScrollView>
    )
  }
}

mapStateToProps = (state) => ({currentMenu: state.currentMenu})

module.exports = connect(mapStateToProps)(MenuPage)
