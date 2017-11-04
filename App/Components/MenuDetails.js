import React, {Component} from 'react'

import {View, Text, Animated, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  menuDetailWrap: {
    //paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    marginTop: 13,
    marginBottom: 8,
    //marginHorizontal: 10,
  },
  menuDetailsItemWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 8,
    paddingHorizontal: 13,
    //paddingHorizontal: 40,
  },
  menuDetailsItemWrapFinal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 13,
  },
  menuDetailsItemLabel: {
    color: '#777',
    //fontSize: 17,
  },
  menuDetailsItem: {
    color: '#333',
    fontWeight: 'bold',
    //backgroundColor: 'red',
    minWidth: 150,
    //fontSize: 17,
  }
})

class MenuDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Animated.View style={styles.menuDetailWrap}>
        <View style={styles.menuDetailsItemWrap}>
          <Text style={styles.menuDetailsItemLabel}>Portion Size</Text>
          <Text style={styles.menuDetailsItem}>{this.props.portion}</Text>
        </View>
        <View style={styles.menuDetailsItemWrap}>
          <Text style={styles.menuDetailsItemLabel}>Carlories</Text>
          <Text style={styles.menuDetailsItem}>{this.props.cal}</Text>
        </View>
        <View style={styles.menuDetailsItemWrap}>
          <Text style={styles.menuDetailsItemLabel}>Fat</Text>
          <Text style={styles.menuDetailsItem}>{this.props.fat}</Text>
        </View>
        <View style={styles.menuDetailsItemWrap}>
          <Text style={styles.menuDetailsItemLabel}>Protein</Text>
          <Text style={styles.menuDetailsItem}>{this.props.pro}</Text>
        </View>
        <View style={styles.menuDetailsItemWrapFinal}>
          <Text style={styles.menuDetailsItemLabel}>Carbs</Text>
          <Text style={styles.menuDetailsItem}>{this.props.carb}</Text>
        </View>
      </Animated.View>
    )
  }
}

module.exports = MenuDetails
