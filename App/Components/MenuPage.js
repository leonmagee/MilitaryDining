import React, {Component} from 'react'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import MenuDetails from './MenuDetails'
import {variables} from '../Styles/Variables'
//import entities from 'html-entities';


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
    flex: 1,
    alignSelf: 'stretch',
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
    //marginTop: 20,
    flex: 1,
    alignSelf: 'stretch'
  },
  dayWrap: {
    backgroundColor: '#111',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dayText: {
    fontFamily: 'BlackOpsOne-Regular',
    fontWeight: 'normal',
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
    fontFamily: 'BlackOpsOne-Regular',
    fontWeight: 'normal',
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
    alignItems: 'center',
  },
  menuFoodItemIcon: {
    color: '#666',
    fontSize: 9,
    //flex: 0.3,
  },
  menuFoodItem: {
    color: '#444',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: '#222',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 0.9,
  }
})

class MenuPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      menuToggle: [],
    }

    const menuz = this.props.currentMenu;

    menuz.menus.map((menu, key) => {

      if (menu.breakfast) {
        var breakfast_details = menu.breakfast.map((item, key) => ({icon: '(more info)', visible: false, opacity: new Animated.Value(0)}))
      } else {
        var breakfast_details = null;
      }
      if (menu.breakfast_brunch) {
        var breakfast_brunch_details = menu.breakfast_brunch.map((item, key) => ({icon: '(more info)', visible: false, opacity: new Animated.Value(0)}))
      } else {
        var breakfast_brunch_details = null;
      }
      if (menu.lunch) {
        var lunch_details = menu.lunch.map((item, key) => ({icon: '(more info)', visible: false, opacity: new Animated.Value(0)}))
      } else {
        var lunch_details = null;
      }
      if (menu.dinner) {
        var dinner_details = menu.dinner.map((item, key) => ({icon: '(more info)', visible: false, opacity: new Animated.Value(0)}))
      } else {
        var dinner_details = null;
      }
      if (menu.dinner_brunch) {
        var dinner_brunch_details = menu.dinner_brunch.map((item, key) => ({icon: '(more info)', visible: false, opacity: new Animated.Value(0)}))
      } else {
        var dinner_brunch_details = null;
      }
      if (menu.pastry_bar) {
        var pastry_bar_details = menu.pastry_bar.map((item, key) => ({icon: '(more info)', visible: false, opacity: new Animated.Value(0)}))
      } else {
        var pastry_bar_details = null;
      }

      /**
      * @todo this seems like a bad way to do this - can't I render out different components
      * instead of doing it this way?
      * breatfast, breakfast_brunch, etc.. should all be components
      * when I initially set this up there were only 3? then it got more out of hand
      */

      this.state.menuToggle[key] = {
        breakfast: {
          icon: '+',
          visible: false,
          opacity: new Animated.Value(0),
          details: breakfast_details
        },
        breakfast_brunch: {
          icon: '+',
          visible: false,
          opacity: new Animated.Value(0),
          details: breakfast_brunch_details
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
        dinner_brunch: {
          icon: '+',
          visible: false,
          opacity: new Animated.Value(0),
          details: dinner_brunch_details
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

  get_item_color(color) {
    if (color === 'red' ) {
      return '#fb3a3a';
    }
    if (color === 'yellow' ) {
      return 'yellow';
    }
    if (color === 'green' ) {
      return '#31fe31';
    }
  }

/**
 * Array syntax working here for accesing object property
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

      if (menu.breakfast) {
        var breakfast = menu.breakfast.map((item, item_key) => {
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
                  <Text style={[styles.menuFoodItem, {'color': this.get_item_color(item.chart)}]}>{item.name}</Text>
                  <Text style={styles.menuFoodItemIcon}>{this.state.menuToggle[key].breakfast.details[item_key].icon}</Text>
                </View>
                {menu_details_item}
              </View>
            </TouchableHighlight>
          )
        })
      } else {
        var breakfast = <View></View>
      }

      if (menu.breakfast_brunch) {

      //console.log(menu.breakfast_brunch[1].name);
      //console.log(entities.decode(menu.breakfast_brunch[1].name));

        var breakfast_brunch = menu.breakfast_brunch.map((item, item_key) => {
          let menu_item_name = item.name.replace(/xxx/gi, 'yyy')

          if (this.state.menuToggle[key].breakfast_brunch.details[item_key].visible) {
            var menu_details_item = (<MenuDetails portion={item.portion} cal={item.cal} fat={item.fat} pro={item.pro} carb={item.carb}/>)
          } else {
            var menu_details_item = (
              <View></View>
            )
          }
          return (
            <TouchableHighlight onPress={() => this.toggleMenuDetails(key, item_key, 'breakfast_brunch')} style={styles.menuFoodItemWrap} key={item_key} underlayColor="transparent">
              <View>
                <View style={styles.menuFoodItemWrapInner}>
                  <Text style={[styles.menuFoodItem, {'color': this.get_item_color(item.chart)}]}>{menu_item_name}</Text>
                  <Text style={styles.menuFoodItemIcon}>{this.state.menuToggle[key].breakfast_brunch.details[item_key].icon}</Text>
                </View>
                {menu_details_item}
              </View>
            </TouchableHighlight>
          )
        })
      } else {
        var breakfast_brunch = <View></View>
      }

      if (menu.lunch) {
        var lunch = menu.lunch.map((item, item_key) => {
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
                  <Text style={[styles.menuFoodItem, {'color': this.get_item_color(item.chart)}]}>{item.name}</Text>
                  <Text style={styles.menuFoodItemIcon}>{this.state.menuToggle[key].lunch.details[item_key].icon}</Text>
                </View>
                {menu_details_item}
              </View>
            </TouchableHighlight>
          )
        })
      } else {
        var lunch = <View></View>
      }

      if (menu.dinner) {
        var dinner = menu.dinner.map((item, item_key) => {
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
                  <Text style={[styles.menuFoodItem, {'color': this.get_item_color(item.chart)}]}>{item.name}</Text>
                  <Text style={styles.menuFoodItemIcon}>{this.state.menuToggle[key].dinner.details[item_key].icon}</Text>
                </View>
                {menu_details_item}
              </View>
            </TouchableHighlight>
          )
        })
      } else {
        var dinner = <View></View>
      }

      if (menu.dinner_brunch) {
        var dinner_brunch = menu.dinner_brunch.map((item, item_key) => {
          if (this.state.menuToggle[key].dinner_brunch.details[item_key].visible) {
            var menu_details_item = (<MenuDetails portion={item.portion} cal={item.cal} fat={item.fat} pro={item.pro} carb={item.carb}/>)
          } else {
            var menu_details_item = (
              <View></View>
            )
          }
          return (
            <TouchableHighlight onPress={() => this.toggleMenuDetails(key, item_key, 'dinner_brunch')} style={styles.menuFoodItemWrap} key={item_key} underlayColor="transparent">
              <View>
                <View style={styles.menuFoodItemWrapInner}>
                  <Text style={[styles.menuFoodItem, {'color': this.get_item_color(item.chart)}]}>{item.name}</Text>
                  <Text style={styles.menuFoodItemIcon}>{this.state.menuToggle[key].dinner_brunch.details[item_key].icon}</Text>
                </View>
                {menu_details_item}
              </View>
            </TouchableHighlight>
          )
        })
      } else {
        var dinner_brunch = <View></View>
      }

      if (menu.pastry_bar) {
        var pastry_bar = menu.pastry_bar.map((item, item_key) => {
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
                  <Text style={[styles.menuFoodItem, {'color': this.get_item_color(item.chart)}]}>{item.name}</Text>
                  <Text style={styles.menuFoodItemIcon}>{this.state.menuToggle[key].pastry_bar.details[item_key].icon}</Text>
                </View>
                {menu_details_item}
              </View>
            </TouchableHighlight>
          )
        })
      } else {
        var pastry_bar = <View></View>
      }

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

      if (this.state.menuToggle[key].breakfast_brunch.visible) {
        var breakastBrunchContent = (
          <Animated.View style={{
            'opacity': this.state.menuToggle[key].breakfast_brunch.opacity
          }}>
            {breakfast_brunch}
          </Animated.View>
        )
      } else {
        var breakastBrunchContent = (
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

      if (this.state.menuToggle[key].dinner_brunch.visible) {
        var dinnerBrunchContent = (
          <Animated.View style={{
            'opacity': this.state.menuToggle[key].dinner_brunch.opacity
          }}>
            {dinner_brunch}
          </Animated.View>
        )
      } else {
        var dinnerBrunchContent = (
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

      if (menu.breakfast) {
        var breakfastWrap = <View>
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'breakfast')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Breakfast</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].breakfast.icon}</Text>
            </View>
          </TouchableHighlight>
          {breakastContent}
        </View>
      } else {
        var breakfastWrap = <View></View>
      }

      if (menu.breakfast_brunch) {
        var breakfastBrunchWrap = <View>
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'breakfast_brunch')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Breakfast / Brunch</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].breakfast_brunch.icon}</Text>
            </View>
          </TouchableHighlight>
          {breakastBrunchContent}
        </View>
      } else {
        var breakfastBrunchWrap = <View></View>
      }

      if (menu.lunch) {
        var lunchWrap = <View>
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'lunch')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Lunch</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].lunch.icon}</Text>
            </View>
          </TouchableHighlight>
          {lunchContent}
        </View>
      } else {
        var lunchWrap = <View></View>
      }

      if (menu.dinner) {
        var dinnerWrap = <View>
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'dinner')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Dinner</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].dinner.icon}</Text>
            </View>
          </TouchableHighlight>
          {dinnerContent}
        </View>
      } else {
        var dinnerWrap = <View></View>
      }

      if (menu.dinner_brunch) {
        var dinnerBrunchWrap = <View>
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'dinner_brunch')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Dinner / Brunch</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].dinner_brunch.icon}</Text>
            </View>
          </TouchableHighlight>
          {dinnerBrunchContent}
        </View>
      } else {
        var dinnerBrunchWrap = <View></View>
      }

      if (menu.pastry_bar) {
        var pastrybarWrap = <View>
          <TouchableHighlight onPress={() => this.toggleMenu(key, 'pastry_bar')} underlayColor="transparent">
            <View style={styles.mealNameWrap}>
              <Text style={styles.mealNameText}>Pastry Bar</Text>
              <Text style={styles.mealNameText}>{this.state.menuToggle[key].pastry_bar.icon}</Text>
            </View>
          </TouchableHighlight>
          {pastrybarContent}
        </View>
      } else {
        var pastrybarWrap = <View></View>
      }

      if (menu.day && menu.date) {
        return (
          <View key={key}>
            <LinearGradient colors={['#333', '#222', '#333']} style={styles.dayWrap}>
              <Text style={styles.dayText}>Day {menu.day}</Text>
              <Text style={styles.dayText}>{menu.date}</Text>
            </LinearGradient>
            {breakfastWrap}
            {breakfastBrunchWrap}
            {lunchWrap}
            {dinnerWrap}
            {dinnerBrunchWrap}
            {pastrybarWrap}
          </View>
        )
      }
    })

    return (
      <View style={styles.mainOuterWrap}>
        <ScrollView style={styles.scrollViewWrap}>
          <View style={styles.mainWrap}>
            <View style={styles.messHallWrap}>
              {menu_days}
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

mapStateToProps = (state) => ({currentMenu: state.currentMenu})

module.exports = connect(mapStateToProps)(MenuPage)
