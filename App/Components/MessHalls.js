import React, {Component} from 'react'

import {View, Text, StyleSheet} from 'react-native'

import MenuInfo from '../Data/Data.js'

console.log(MenuInfo);

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
    marginTop: 20,
  },
  messHallTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  }
})

class MessHalls extends Component {
  render() {

    const MessHallMenus = MenuInfo.map((data) => {
      return (
        <View key={data.id}>
          <Text style={styles.messHallTitle}>{data.name}</Text>
        </View>
      )
    })

    return (
      <View style={styles.mainWrap}>
        <Text style={styles.mainText}>Mess Halls!</Text>
        <View style={styles.messHallWrap}>
          {MessHallMenus}
        </View>
      </View>
    )
  }
}

module.exports = MessHalls
