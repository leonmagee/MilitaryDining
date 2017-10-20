import React, {Component} from 'react'
import {connect} from 'react-redux'

import {View, ScrollView, Text, TouchableHighlight, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  mainWrap: {
    //backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  messHallWrap: {
    marginTop: 20,
    flex: 1,
    alignSelf: 'stretch'
  },
  messHallNameWrap: {
    paddingTop: 40,
    paddingBottom: 5
  },
  messHallName: {
    fontSize: 22,
    color: '#111',
    fontFamily: 'Black Ops One'
  },
  dayWrap: {
    backgroundColor: '#111',
    paddingVertical: 10,
    alignItems: 'center'
  },
  dayText: {
    fontFamily: 'Black Ops One',
    fontSize: 17,
    color: '#FFF'
  },
  mealNameWrap: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mealNameText: {
    fontFamily: 'Black Ops One',
    fontSize: 20,
    color: '#333'
  },
  menuFoodItemWrap: {
    //backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD'
  },
  menuFoodItem: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 12
  }
})

class MenuPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      menuToggle: []
    }

    const menuz = this.props.currentMenu;

    menuz.menus.map((menu, key) => {

      this.state.menuToggle[key] = {
        'breakfast': '+',
        'lunch': '+',
        'dinner': '+',
        'pastry_bar': '+'
      }

    })
  }

  /**
* Array syntax working here for accesing object property!
**/
  toggleMenu(key, item) {
    //if (item === 1) {
    const newMenuToggle = this.state.menuToggle;
    if (newMenuToggle[key][item] === '+') {
      newMenuToggle[key][item] = '-'
      this.setState({menuToggle: newMenuToggle})
    } else {
      newMenuToggle[key][item] = '+'
      this.setState({menuToggle: newMenuToggle})
    }
    //}

  }

  render() {

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
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'breakfast')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Breakfast</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].breakfast}</Text>
            </View>
          </TouchableHighlight>
          {breakfast}
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'lunch')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Lunch</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].lunch}</Text>
            </View>
          </TouchableHighlight>
          {lunch}
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'dinner')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Dinner</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].dinner}</Text>
            </View>
          </TouchableHighlight>
          {dinner}
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'pastry_bar')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Pastry Bar</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].pastry_bar}</Text>
            </View>
          </TouchableHighlight>
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
