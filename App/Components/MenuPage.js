import React, {Component} from 'react'
import {connect} from 'react-redux'

import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  mainWrap: {
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  mainText: {
    fontSize: 22,
    color: '#FFF',
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
    console.log('menuzzzzz',menuz)

    return (
      <View style={styles.mainWrap}>
        <Text style={styles.mainText}>{menuz.name}</Text>
        <View style={styles.messHallWrap}>
          <Text>Monday</Text>
          <Text>Breakfast: {menuz.menus.monday.breakfast}</Text>
          <Text>Lunch: {menuz.menus.monday.lunch}</Text>
          <Text>Dinner: {menuz.menus.monday.dinner}</Text>
          <Text>tuesday</Text>
          <Text>Breakfast: {menuz.menus.tuesday.breakfast}</Text>
          <Text>Lunch: {menuz.menus.tuesday.lunch}</Text>
          <Text>Dinner: {menuz.menus.tuesday.dinner}</Text>
        </View>
      </View>
    )
  }
}

mapStateToProps = (state) => ({currentMenu: state.currentMenu})

module.exports = connect(mapStateToProps)(MenuPage)
