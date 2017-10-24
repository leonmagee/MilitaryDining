import React, {Component} from 'react'
import {connect} from 'react-redux'
import MenuBar from './MenuBar'
import {variables} from '../Styles/Variables'
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'

import MenuInfo from '../Data/Data.js'

const styles = StyleSheet.create({
  mainWrap: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  pageTitleWrap: {
    paddingTop: 35,
    paddingBottom: 20,
    //backgroundColor: '#555',
    backgroundColor: variables.brandFifth,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  pageTitle: {
    fontSize: 22,
    color: '#FFF',
    fontFamily: 'Black Ops One'
  },
  messHallWrap: {
    alignSelf: 'stretch'
  },
  messHallTitleWrap: {
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 13,
    borderBottomColor: '#DDD'
  },
  messHallTitle: {
    fontSize: 20,
    color: '#222',
    fontFamily: 'Black Ops One'
  }
})

class MessHalls extends Component {

  render() {

    const MessHallMenus = MenuInfo.map((data, key) => {
      return (
        <View key={key} style={styles.messHallTitleWrap}>
          <TouchableHighlight onPress={() => this.props.goToMenuPage(data)} underlayColor="transparent">
            <Text style={styles.messHallTitle}>{data.name}</Text>
          </TouchableHighlight>
        </View>
      )
    })

    return (
      <View style={styles.mainWrap}>
        <View style={styles.pageTitleWrap}>
          <Text style={styles.pageTitle}>Choose Mess Hall</Text>
        </View>
        <View style={styles.messHallWrap}>
          {MessHallMenus}
        </View>
        <MenuBar menuLinks={{
          home: true,
          settings: true,
          mess_halls: false
        }} />
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
  }
})

module.exports = connect(mapStateToProps, mapActionsToProps)(MessHalls)

//module.exports = MessHalls
