import React, {Component} from 'react'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import MenuBar from './MenuBar'
import MenuDetails from './MenuDetails'

import {
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  Animated,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  mainOuterWrap: {
    flex: 1
  },
  scrollViewWrap: {
    marginBottom: 45
  },
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
  menuFoodItemWrapInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuFoodItemIcon: {
    color: '#777',
    fontSize: 9
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
    console.log('menu?', menuz)

    /**
    * @todo I probably need to have a separate state for each item, which will be easier..
    * if each item is it's own component I should be able to do this without a detached array to manage
    * the state...
    **/
    menuz.menus.map((menu, key) => {

      const breakfast_details = menu.breakfast.map((item, key) => ({icon: '(more info)', visible: false, opacity: new Animated.Value(0)}))
      const lunch_details = menu.lunch.map((item, key) => ({icon: '(more info)', visible: false, opacity: new Animated.Value(0)}))
      const dinner_details = menu.dinner.map((item, key) => ({icon: '(more info)', visible: false, opacity: new Animated.Value(0)}))
      const pastry_bar_details = menu.pastry_bar.map((item, key) => ({icon: '(more info)', visible: false, opacity: new Animated.Value(0)}))

      this.state.menuToggle[key] = {
        breakfast: {
          icon: '+',
          visible: false,
          opacity: new Animated.Value(0),
          details: breakfast_details
        },
        lunch: {
          icon: '+',
          visible: false,
          opacity: new Animated.Value(0),
          details: lunch_details
        },
        dinner: {
          icon: '+',
          visible: false,
          opacity: new Animated.Value(0),
          details: dinner_details
        },
        pastry_bar: {
          icon: '+',
          visible: false,
          opacity: new Animated.Value(0),
          details: pastry_bar_details
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

  toggleMenuDetails(key, item_key, item) {
    const newMenuToggle = this.state.menuToggle;
    if (newMenuToggle[key][item].details[item_key].icon === '(more info)') {
      newMenuToggle[key][item].details[item_key].icon = '(less info)'
      newMenuToggle[key][item].details[item_key].visible = true
      this.setState({menuToggle: newMenuToggle})
      this.setState(() => {
        Animated.timing(this.state.menuToggle[key][item].details[item_key].opacity, {
          toValue: 1,
          duration: 300, // use timing for animation
        }).start()
      })
    } else {
      newMenuToggle[key][item].details[item_key].icon = '(more info)'
      newMenuToggle[key][item].details[item_key].visible = false
      newMenuToggle[key][item].details[item_key].opacity = new Animated.Value(0)
      this.setState({menuToggle: newMenuToggle})
    }
  }

  render() {

    const menuz = this.props.currentMenu;

    const menu_days = menuz.menus.map((menu, key) => {

      let breakfast = menu.breakfast.map((item, item_key) => {
        if (this.state.menuToggle[key].breakfast.details[item_key].visible) {
          var menu_details_item = (<MenuDetails portion={item.portion} cal={item.cal} fat={item.fat} pro={item.pro} carb={item.carb}/>)
        } else {
          var menu_details_item = (
            <View></View>
          )
        }
        return (
          <TouchableHighlight onPress={() => this.toggleMenuDetails(key, item_key, 'breakfast')} style={styles.menuFoodItemWrap} key={item_key} underlayColor="transparent">
            <View>
              <View style={styles.menuFoodItemWrapInner}>
                <Text style={styles.menuFoodItem}>{item.name}</Text>
                <Text style={styles.menuFoodItemIcon}>{this.state.menuToggle[key].breakfast.details[item_key].icon}</Text>
              </View>
              {menu_details_item}
            </View>
          </TouchableHighlight>
        )
      })

      let lunch = menu.lunch.map((item, item_key) => {
        if (this.state.menuToggle[key].lunch.details[item_key].visible) {
          var menu_details_item = (<MenuDetails portion={item.portion} cal={item.cal} fat={item.fat} pro={item.pro} carb={item.carb}/>)
        } else {
          var menu_details_item = (
            <View></View>
          )
        }
        return (
          <TouchableHighlight onPress={() => this.toggleMenuDetails(key, item_key, 'lunch')} style={styles.menuFoodItemWrap} key={item_key} underlayColor="transparent">
            <View>
              <View style={styles.menuFoodItemWrapInner}>
                <Text style={styles.menuFoodItem}>{item.name}</Text>
                <Text style={styles.menuFoodItemIcon}>{this.state.menuToggle[key].lunch.details[item_key].icon}</Text>
              </View>
              {menu_details_item}
            </View>
          </TouchableHighlight>
        )
      })

      let dinner = menu.dinner.map((item, item_key) => {
        if (this.state.menuToggle[key].dinner.details[item_key].visible) {
          var menu_details_item = (<MenuDetails portion={item.portion} cal={item.cal} fat={item.fat} pro={item.pro} carb={item.carb}/>)
        } else {
          var menu_details_item = (
            <View></View>
          )
        }
        return (
          <TouchableHighlight onPress={() => this.toggleMenuDetails(key, item_key, 'dinner')} style={styles.menuFoodItemWrap} key={item_key} underlayColor="transparent">
            <View>
              <View style={styles.menuFoodItemWrapInner}>
                <Text style={styles.menuFoodItem}>{item.name}</Text>
                <Text style={styles.menuFoodItemIcon}>{this.state.menuToggle[key].dinner.details[item_key].icon}</Text>
              </View>
              {menu_details_item}
            </View>
          </TouchableHighlight>
        )
      })

      let pastry_bar = menu.pastry_bar.map((item, item_key) => {
        if (this.state.menuToggle[key].pastry_bar.details[item_key].visible) {
          var menu_details_item = (<MenuDetails portion={item.portion} cal={item.cal} fat={item.fat} pro={item.pro} carb={item.carb}/>)
        } else {
          var menu_details_item = (
            <View></View>
          )
        }
        return (
          <TouchableHighlight onPress={() => this.toggleMenuDetails(key, item_key, 'pastry_bar')} style={styles.menuFoodItemWrap} key={item_key} underlayColor="transparent">
            <View>
              <View style={styles.menuFoodItemWrapInner}>
                <Text style={styles.menuFoodItem}>{item.name}</Text>
                <Text style={styles.menuFoodItemIcon}>{this.state.menuToggle[key].pastry_bar.details[item_key].icon}</Text>
              </View>
              {menu_details_item}
            </View>
          </TouchableHighlight>
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
      <View style={styles.mainOuterWrap}>
        <ScrollView style={styles.scrollViewWrap}>
          <View style={styles.mainWrap}>
            <View style={styles.messHallNameWrap}>
              <Text style={styles.messHallName}>{menuz.name}</Text>
            </View>
            <View style={styles.messHallWrap}>
              {menu_days}
            </View>
          </View>
        </ScrollView>
        <MenuBar menuLinks={{
          home: true,
          settings: true,
          mess_halls: true
        }} backgroundStyle='#222'/>
      </View>
    )
  }
}

mapStateToProps = (state) => ({currentMenu: state.currentMenu})

module.exports = connect(mapStateToProps)(MenuPage)
