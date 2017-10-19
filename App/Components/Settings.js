import React, {Component} from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  mainWrap: {
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  settingsText: {
    fontSize: 22,
  }
})

class Settings extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return(
      <View style={styles.mainWrap}>
        <Text style={styles.settingsText}>Settings Page</Text>
      </View>
    )
  }
}

module.exports = Settings
