import React, {Component} from 'react'
import MenuBar from './MenuBar'
import {Dropdown} from 'react-native-material-dropdown'
import {CalorieCounter} from './Math/Calculator'
import {variables} from '../Styles/Variables'

/**
* Returning Daily Carlories here!
**/

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
    paddingHorizontal: 22
  },
  caloriesWrap: {
    paddingHorizontal: 30,
    paddingTop: 5,
    paddingBottom: 15,
    alignItems: 'center'
  },
  caloriesText: {
    color: variables.brandSecond,
    fontFamily: 'Black Ops One',
    fontSize: 40
  },
  inputWrap: {
    paddingHorizontal: 30,
    marginBottom: 20
  },
  inputWrapMultipleItem: {
    flex: 1,
    paddingHorizontal: 4
  },
  dropdownWrap: {
    paddingHorizontal: 30,
    marginBottom: 15
  },
  dropdownWrapMultiple: {
    flex: 1,
    paddingHorizontal: 4
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
    //backgroundColor: '#3E5B3D',
    backgroundColor: variables.brandPrimary,
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
      height_feet: '',
      height_inches: '',
      gender: '',
      age: '',
      activity: ''
    }

    this.getUserName()
    this.getUserWeight()
    this.getUserHeightFeet()
    this.getUserHeightInches()
    this.getUserGender()
    this.getUserAge()
    this.getUserActivity()
  }

  // componentDidMount() {
  //   console.log('mountage?')
  //   console.log('yo')
  //   console.log('gender?', this.state.gender)
  //
  //   if ( this.state.weight && this.state.height_feet && this.state.gender ) {
  //     console.log('conditional working');
  //   //const myCals = CalorieCounter(42, 6, 1, 197, 'male', "3")
  //   const myCals = CalorieCounter(42, 6, 1, 197, 'male', "3")
  //   }
  // }

  /**
  * Process Data when 'Update' link is clicked
  **/
  processUpdate() {
    this.saveUserName(this.state.name)
    this.saveUserWeight(this.state.weight)
    this.saveUserHeightFeet(this.state.height_feet)
    this.saveUserHeightInches(this.state.height_inches)
    this.saveUserGender(this.state.gender)
    this.saveUserAge(this.state.age)
    this.saveUserActivity(this.state.activity)
  }

  saveUserName(value) {
    AsyncStorage.setItem('@UserName', value)
  }
  saveUserWeight(value) {
    AsyncStorage.setItem('@UserWeight', value)
  }
  saveUserHeightFeet(value) {
    AsyncStorage.setItem('@UserHeightFeet', value)
  }
  saveUserHeightInches(value) {
    AsyncStorage.setItem('@UserHeightInches', value)
  }
  saveUserGender(value) {
    AsyncStorage.setItem('@UserGender', value)
  }
  saveUserAge(value) {
    AsyncStorage.setItem('@UserAge', value)
  }
  saveUserActivity(value) {
    AsyncStorage.setItem('@UserActivity', value)
  }

  getUserName() {
    AsyncStorage.getItem('@UserName').then((value) => {
      if (value) {
        this.setState({name: value})
      }
    }).done()
  }
  getUserWeight() {
    AsyncStorage.getItem('@UserWeight').then((value) => {
      if (value) {
        this.setState({weight: value})
      }
    }).done()
  }
  getUserHeightFeet() {
    AsyncStorage.getItem('@UserHeightFeet').then((value) => {
      if (value) {
        this.setState({height_feet: value})
      }
    }).done()
  }
  getUserHeightInches() {
    AsyncStorage.getItem('@UserHeightInches').then((value) => {
      if (value) {
        this.setState({height_inches: value})
      }
    }).done()
  }
  getUserGender() {
    AsyncStorage.getItem('@UserGender').then((value) => {
      if (value) {
        this.setState({gender: value})
      }
    }).done()
  }
  getUserAge() {
    AsyncStorage.getItem('@UserAge').then((value) => {
      if (value) {
        this.setState({age: value})
      }
    }).done()
  }
  getUserActivity() {
    AsyncStorage.getItem('@UserActivity').then((value) => {
      if (value) {
        this.setState({activity: value})
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

    //console.log('renderage')
    //console.log('gender?', this.state.gender)
    var dailyCalories = '?'
    if (this.state.weight && this.state.height_feet && this.state.height_inches && this.state.gender && this.state.age && this.state.activity) {

      //this.setState({daily_calories: 444})

      // console.log('age', this.state.age);
      // console.log('feet', this.state.height_feet);
      // console.log('inches', this.state.height_inches);
      // console.log('weight', this.state.weight);
      // console.log('gender', this.state.gender);
      // console.log('activity', this.state.activity);

      const currentAge = parseInt(this.state.age)
      const currentHeightFeet = parseInt(this.state.height_feet)
      const currentHeightInches = parseInt(this.state.height_inches)
      const currentWeight = parseInt(this.state.weight)
      const currentGender = this.state.gender
      const currentActivity = this.state.activity

      // console.log('age', currentAge);
      // console.log('feet', currentHeightFeet);
      // console.log('inches', currentHeightInches);
      // console.log('weight', currentWeight);
      // console.log('gender', currentGender);
      // console.log('activity', currentActivity);

      //var dailyCalories = CalorieCounter(42, 6, 1, 197, 'male', '3')
      var dailyCalories = CalorieCounter(currentAge, currentHeightFeet, currentHeightInches, currentWeight, currentGender, currentActivity)
      console.log('daily', dailyCalories)

    }

    let height_feet = [
      {
        value: '1',
        label: '1 Foot'
      }, {
        value: '2',
        label: '2 Feet'
      }, {
        value: '3',
        label: '3 Feet'
      }, {
        value: '4',
        label: '4 Feet'
      }, {
        value: '5',
        label: '5 Feet'
      }, {
        value: '6',
        label: '6 Feet'
      }, {
        value: '7',
        label: '7 Feet'
      }
    ]

    let height_inches = [
      {
        value: '0',
        label: '0 Inches'
      }, {
        value: '1',
        label: '1 Inch'
      }, {
        value: '2',
        label: '2 Inches'
      }, {
        value: '3',
        label: '3 Inches'
      }, {
        value: '4',
        label: '4 Inches'
      }, {
        value: '5',
        label: '5 Inches'
      }, {
        value: '6',
        label: '6 Inches'
      }, {
        value: '7',
        label: '7 Inches'
      }, {
        value: '8',
        label: '8 Inches'
      }, {
        value: '9',
        label: '9 Inches'
      }, {
        value: '10',
        label: '10 Inches'
      }, {
        value: '11',
        label: '11 Inches'
      }
    ]

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
        <View style={styles.caloriesWrap}>
          <Text style={styles.inputLabel}>Recommended Daily Calorie Intake</Text>
          <Text style={styles.caloriesText}>{dailyCalories}</Text>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput style={styles.textInput} value={this.state.name} onChangeText={(name) => this.setState({name})}/>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.inputLabel}>Weight (lbs)</Text>
          <TextInput style={styles.textInput} value={this.state.weight} onChangeText={(weight) => this.setState({weight})}/>
        </View>
        <View style={styles.multipleInputWrap}>
          <View style={styles.dropdownWrapMultiple}>
            <Dropdown onChangeText={(height_feet) => this.setState({height_feet})} labelHeight={16} itemCount={4} style={styles.dropdownInput} label='Height Feet' value={this.state.height_feet} data={height_feet}/>
          </View>
          <View style={styles.dropdownWrapMultiple}>
            <Dropdown onChangeText={(height_inches) => this.setState({height_inches})} labelHeight={16} itemCount={6} style={styles.dropdownInput} label='Height Inches' value={this.state.height_inches} data={height_inches}/>
          </View>
        </View>
        <View style={styles.multipleInputWrap}>
          <View style={styles.dropdownWrapMultiple}>
            <Dropdown onChangeText={(gender) => this.setState({gender})} labelHeight={16} style={styles.dropdownInput} label='Gender' value={this.state.gender} data={gender}/>
          </View>
          <View style={[styles.inputWrap, styles.inputWrapMultipleItem]}>
            <Text style={styles.inputLabel}>Age (years)</Text>
            <TextInput value={this.state.age} keyboardType='numeric' style={styles.textInput} onChangeText={(age) => this.setState({age})}/>
          </View>
        </View>
        <View style={styles.dropdownWrap}>
          <Dropdown onChangeText={(activity) => this.setState({activity})} labelHeight={16} style={styles.dropdownInput} label='Activity' value={this.state.activity} itemCount={5} data={activity}/>
        </View>
        <TouchableHighlight style={styles.updateButton} underlayColor={variables.brandPrimary} onPress={() => this.processUpdate()}>
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
