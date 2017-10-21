import React, {Component} from 'react'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'

import {
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  Animated,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  mainWrap: {
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
    color: '#FFF',
    backgroundColor: 'transparent'
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD'
  },
  menuFoodItem: {
    color: '#444',
    fontWeight: 'bold',
    fontSize: 12
  }
})

class MenuPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      menuToggle: [],
      //animatedOpacity: new Animated.Value(0)
    }

    const menuz = this.props.currentMenu;

    menuz.menus.map((menu, key) => {

      this.state.menuToggle[key] = {
        'breakfast': {
          'icon': '+',
          'visible': false,
          'opacity': new Animated.Value(0)
        },
        'lunch': {
          'icon': '+',
          'visible': false,
          'opacity': new Animated.Value(0)
        },
        'dinner': {
          'icon': '+',
          'visible': false,
          'opacity': new Animated.Value(0)
        },
        'pastry_bar': {
          'icon': '+',
          'visible': false,
          'opacity': new Animated.Value(0)
        }
      }
    })
  }

  /**
* Array syntax working here for accesing object property!
**/
  toggleMenu(key, item) {
    const newMenuToggle = this.state.menuToggle;
    if (newMenuToggle[key][item].icon === '+') {
      newMenuToggle[key][item].icon = '-'
      newMenuToggle[key][item].visible = true
      this.setState({menuToggle: newMenuToggle})
      this.setState(() => {
        Animated.timing(this.state.menuToggle[key][item].opacity, {
          toValue: 1,
          duration: 300, // use timing for animation
        }).start()
      })
    } else {
      newMenuToggle[key][item].icon = '+'
      newMenuToggle[key][item].visible = false
      newMenuToggle[key][item].opacity = new Animated.Value(0)
      this.setState({menuToggle: newMenuToggle})
    }
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

      if (this.state.menuToggle[key].breakfast.visible) {
        var breakastContent = (
          <Animated.View style={{
            'opacity': this.state.menuToggle[key].breakfast.opacity
          }}>
            {breakfast}
          </Animated.View>
        )
      } else {
        var breakastContent = (
          <View></View>
        )
      }

      if (this.state.menuToggle[key].lunch.visible) {
        var lunchContent = (
          <Animated.View style={{
            'opacity': this.state.menuToggle[key].lunch.opacity
          }}>
            {lunch}
          </Animated.View>
        )
      } else {
        var lunchContent = (
          <View></View>
        )
      }

      if (this.state.menuToggle[key].dinner.visible) {
        var dinnerContent = (
          <Animated.View style={{
            'opacity': this.state.menuToggle[key].dinner.opacity
          }}>
            {dinner}
          </Animated.View>
        )
      } else {
        var dinnerContent = (
          <View></View>
        )
      }

      if (this.state.menuToggle[key].pastry_bar.visible) {
        var pastrybarContent = (
          <Animated.View style={{
            'opacity': this.state.menuToggle[key].pastry_bar.opacity
          }}>
            {pastry_bar}
          </Animated.View>
        )
      } else {
        var pastrybarContent = (
          <View></View>
        )
      }

      return (
        <View key={key}>
          <LinearGradient colors={['#333', '#222', '#333']} style={styles.dayWrap}>
            <Text style={styles.dayText}>Day {menu.day}</Text>
          </LinearGradient>
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'breakfast')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Breakfast</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].breakfast.icon}</Text>
            </View>
          </TouchableHighlight>
          {breakastContent}
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'lunch')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Lunch</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].lunch.icon}</Text>
            </View>
          </TouchableHighlight>
          {lunchContent}
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'dinner')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Dinner</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].dinner.icon}</Text>
            </View>
          </TouchableHighlight>
          {dinnerContent}
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'pastry_bar')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Pastry Bar</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].pastry_bar.icon}</Text>
            </View>
          </TouchableHighlight>
          {pastrybarContent}
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
