import React, {Component} from 'react'
import MenuBar from './MenuBar'

import {View, Text, TextInput, StyleSheet, TouchableHighlight} from 'react-native'

const styles = StyleSheet.create({
  mainWrap: {
    backgroundColor: '#EEE',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 40
  },
  settingsTitleWrap: {
    marginBottom: 25,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginHorizontal: 30
  },
  settingsTitle: {
    fontSize: 30,
    color: '#111',
    fontFamily: 'Black Ops One'
  },
  inputWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginBottom: 15
  },
  inputLabel: {
    color: '#333',
    fontFamily: 'Black Ops One',
    fontSize: 19
  },
  textInput: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    height: 40,
    width: 200, // change this to be a percentage of screen width
    paddingHorizontal: 15,
    paddingVertical: 7
  },
  updateButton: {
    backgroundColor: '#3E5B3D',
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  updateButtonText: {
    fontFamily: 'Black Ops One',
    color: '#FFF',
    fontSize: 20,
  },
})

class Settings extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <View style={styles.mainWrap}>
        <View style={styles.settingsTitleWrap}>
          <Text style={styles.settingsTitle}>Your Info</Text>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.inputLabel}>Name:</Text>
          <TextInput style={styles.textInput}/>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.inputLabel}>Weight:</Text>
          <TextInput style={styles.textInput}/>
        </View>
        <TouchableHighlight style={styles.updateButton} underlayColor="transparent">
          <Text style={styles.updateButtonText}>UPDATE</Text>
        </TouchableHighlight>
        <MenuBar menuLinks={{
          home: true,
          settings: false,
          mess_halls: true
        }} backgroundStyle='#333'/>
      </View>
    )
  }
}

module.exports = Settings
