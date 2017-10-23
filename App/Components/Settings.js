import React, {Component} from 'react'
import MenuBar from './MenuBar'
import {Dropdown} from 'react-native-material-dropdown'
import {CalorieCounter} from './Math/Calculator'

/**
* Returning Daily Carlories here!
**/
const myCals = CalorieCounter(42, 6, 1, 197, 'male', "3")

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage
} from 'react-native'

const styles = StyleSheet.create({
  mainWrap: {
    backgroundColor: '#F4F4F4',
    display: 'flex',
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
  multipleInputWrap: {
    flexDirection: 'row',
    paddingHorizontal: 22,
  },
  inputWrap: {
    paddingHorizontal: 30,
    marginBottom: 20
  },
  inputWrapMultipleItem: {
    flex: 1,
    paddingHorizontal: 4,
  },
  dropdownWrap: {
    paddingHorizontal: 30,
    marginBottom: 15
  },
  inputLabel: {
    color: 'rgba(0, 0, 0, .38)',
    fontSize: 12
  },
  textInput: {
    borderBottomWidth: 0.5,
    fontSize: 16,
    borderBottomColor: 'rgba(0, 0, 0, .38)',
    paddingVertical: 7
  },
  dropdownInput: {
    fontSize: 16
  },
  updateButton: {
    backgroundColor: '#3E5B3D',
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 80
  },
  updateButtonText: {
    fontFamily: 'Black Ops One',
    color: '#FFF',
    fontSize: 20
  }
})

class Settings extends Component {

  constructor(props) {
    super(props)

    //const userName = this.getUserName

    this.state = {
      name: '',
      weight: '',
      gender: '',
      height_feet: '',
      height_inches: '',
      age: ''
    }

    this.getUserName()
  }

  processUpdate() {
    //console.log('process update')
    this.saveUserName(this.state.name)
  }

  saveUserName(name) {
    AsyncStorage.setItem('@UserName', name)
  }

  getUserName() {
    AsyncStorage.getItem('@UserName').then((value) => {
      if (value) {
        this.setState({name: value})
      }
    }).done()
  }

  //   AsyncStorage.getItem('@QuestionAnswers:' + storageKey).then((value) => {
  //       if (value) {
  //           const valueNew = Number(value) + 1
  //           const valueNewString = valueNew.toString()
  //           AsyncStorage.setItem('@QuestionAnswers:' + storageKey, valueNewString)
  //       } else {
  //           AsyncStorage.setItem('@QuestionAnswers:' + storageKey, "1")
  //       }
  //   }).done()

  render() {

    let gender = [
      {
        value: 'male',
        label: 'Male'
      }, {
        value: 'female',
        label: 'Female'
      }
    ]

    let activity = [
      {
        value: '1',
        label: 'Sedentary'
      }, {
        value: '2',
        label: 'Lighly Active'
      }, {
        value: '3',
        label: 'Moderately Active'
      }, {
        value: '4',
        label: 'Very Active'
      }, {
        value: '5',
        label: 'Extra Active'
      }
    ]

    return (
      <View style={styles.mainWrap}>
        <View style={styles.settingsTitleWrap}>
          <Text style={styles.settingsTitle}>Your Info</Text>
        </View>
        <View style={styles.currentInfoBox}>
          <Text>name: {this.state.name}</Text>
          <Text>weight: {this.state.weight}
            lbs</Text>
          <Text>gender: {this.state.gender}</Text>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput style={styles.textInput} onChangeText={(name) => this.setState({name})}/>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.inputLabel}>Weight (lbs)</Text>
          <TextInput style={styles.textInput} onChangeText={(weight) => this.setState({weight})}/>
        </View>
        <View style={styles.multipleInputWrap}>
          <View style={[styles.inputWrap, styles.inputWrapMultipleItem]}>
            <Text style={styles.inputLabel}>Height (feet)</Text>
            <TextInput keyboardType='numeric' style={styles.textInput} onChangeText={(height_feet) => this.setState({height_feet})}/>
          </View>
          <View style={[styles.inputWrap, styles.inputWrapMultipleItem]}>
            <Text style={styles.inputLabel}>Height (inches)</Text>
            <TextInput keyboardType='numeric' style={styles.textInput} onChangeText={(height_inches) => this.setState({height_inches})}/>
          </View>
          <View style={[styles.inputWrap, styles.inputWrapMultipleItem]}>
            <Text style={styles.inputLabel}>Age (years)</Text>
            <TextInput keyboardType='numeric' style={styles.textInput} onChangeText={(age) => this.setState({age})}/>
          </View>
        </View>
        <View style={styles.dropdownWrap}>
          <Dropdown labelHeight={16} style={styles.dropdownInput} label='Gender' value='male' data={gender}/>
        </View>
        <View style={styles.dropdownWrap}>
          <Dropdown labelHeight={16} style={styles.dropdownInput} label='Activity' value='3' itemCount={5} data={activity}/>
        </View>
        <TouchableHighlight style={styles.updateButton} underlayColor="#3E5B3D" onPress={() => this.processUpdate()}>
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
