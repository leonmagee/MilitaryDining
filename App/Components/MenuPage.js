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

    const MessHallMenus = MenuInfo.map((data) => {
      return (
        <View key={data.id}>
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


mapStateToProps = (state) => ({currentMenu: state.currentMenu})


module.exports = connect(mapStateToProps)(MenuPage)
