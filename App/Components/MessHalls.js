import React, {Component} from 'react'
import {connect} from 'react-redux'

import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'

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
    marginTop: 20
  },
  messHallTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  }
})

class MessHalls extends Component {

  render() {

    const MessHallMenus = MenuInfo.map((data, key) => {
      return (
        <View key={key}>
          <TouchableHighlight onPress={() => this.props.goToMenuPage(data)} underlayColor="transparent">
            <Text style={styles.messHallTitle}>{data.name}</Text>
          </TouchableHighlight>
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


mapStateToProps = (state) => ({currentPage: state.currentPage})

mapActionsToProps = (dispatch) => ({
  goToSettingsPage() {
    dispatch({type: 'SETTINGS_PAGE'})
  },
  goToMessHallsPage() {
    dispatch({type: 'MESS_HALLS_PAGE'})
  },
  goToMenuPage(data) {
    dispatch({type: 'MESS_HALL_MENU', payload: data})
    console.log('datazzz', data)
  }
})


module.exports = connect(mapStateToProps, mapActionsToProps)(MessHalls)


//module.exports = MessHalls
