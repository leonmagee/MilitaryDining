import React, {Component} from 'react'
import {variables} from '../Styles/Variables'
import {defaults} from '../Styles/Defaults'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Animated,
} from 'react-native'

const styles = StyleSheet.create({
  innerWrap: {
    backgroundColor: variables.backgroundWhite,
    paddingTop: 10,
    flex: 1,
  },
})

class DailyCalories extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cals: 70,
    }

  }


  render() {

    

    return (
      <View style={defaults.defaultMainWrap}>

        <View style={defaults.defaultTitleWrap}>
          <Text style={defaults.defaultTitle}>Daily Calorie Intake</Text>
        </View>

        <View style={styles.innerWrap}>

          <Text>Here are you daily calories: {this.state.cals}</Text>


        </View>
      </View>
    )
  }
}

module.exports = DailyCalories
