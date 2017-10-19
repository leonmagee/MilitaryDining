import React, {Component} from 'react'
import {connect} from 'react-redux'

import {View, ScrollView, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  mainWrap: {
    //backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  mainText: {
    fontSize: 22,
    color: '#555',
    fontWeight: 'bold'
  },
  messHallWrap: {
    marginTop: 20
  },
  messHallTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
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
          <Text key={key}>{item}</Text>
        )
      })

      let lunch = menu.lunch.map((item, key) => {
        return (
          <Text key={key}>{item}</Text>
        )
      })

      let dinner = menu.dinner.map((item, key) => {
        return (
          <Text key={key}>{item}</Text>
        )
      })

      let pastry_bar = menu.pastry_bar.map((item, key) => {
        return (
          <Text key={key}>{item}</Text>
        )
      })

      return (
        <View key={key}>
          <Text>Day {menu.day}</Text>
          <Text>Breakfast</Text>
          {breakfast}
          <Text>Lunch</Text>
          {lunch}
          <Text>Dinner</Text>
          {dinner}
          <Text>Pastry Bar</Text>
          {pastry_bar}
        </View>
      )
    })

    return (
      <ScrollView>
        <View style={styles.mainWrap}>
          <Text style={styles.mainText}>{menuz.name}</Text>
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
