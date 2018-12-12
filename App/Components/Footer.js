import React, {Component} from 'react'
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  footerWrap: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#FFF',
    fontSize: 23,
  }
})

export default class Footer extends Component {

  constructor(props) {
    super(props)
  }

  openDrawer() {
    console.log('OPENZZZZZZZZ')
    this.props.navigation.openDrawer()
  }


  render() {

    return (

        <View style={styles.footerWrap}>
          <TouchableHighlight onPress={() => this.openDrawer()}>
            <Text style={styles.footerText}>Open Drawer</Text>
          </TouchableHighlight>
        </View>

    )
  }
}

module.exports = Footer