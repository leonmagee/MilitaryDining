import React, {Component} from 'react'
import {vw, vh} from '../Utils/helper'
import { Icon } from 'react-native-elements'
//import {connect} from 'react-redux'
//import MenuPage from './MenuPage'
/**
 * Instead load this from index - since it should be active for all componets? 
 * if it matters..
 */
import BackgroundGeofences from './BackgroundGeofences'

import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

let {width, height} = Dimensions.get('window')
height = height - 50; // make space for bottom menu bar

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null, // allows centering of content with image - otherwise image width is imported
    height: null
  },
  mainOuterWrap: {
    flex: 1,
    width: width
  },
  homeWrapOuter: {
    flex: 1
  },
  homeWrap: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'transparent'
  },
  homeTextWrap: {
    position: 'absolute',
    zIndex: 333,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeText: {
    color: 'rgba(255,255,255,1)',
    fontSize: 17 * vw,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    fontFamily: 'Black Ops One',
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
});

class Homepage extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <View style={styles.mainOuterWrap}>
         <View style={styles.homeWrapOuter}>
          <View style={styles.homeWrap}>
            <Image source={require('../Assets/Images/home-image.png')} style={styles.imageContainer}></Image>
            <View style={[
              styles.homeTextWrap, {
                width: width,
                height: height
              }
            ]}>
              <Text style={styles.homeText}>MILITARY</Text>
              <Icon name="star" size={130} color="#FFF" />
              <Text style={styles.homeText}>DINING</Text>
            </View>
          </View>
         </View>
         <BackgroundGeofences />
      </View>
    )
  }
}


/**
 * redux on the homepage is not necessary but it seems to navigate to other pages
 * faster with it active??? test this on the live version
 */
// mapStateToProps = (state) => ({currentPage: state.currentPage})

// mapActionsToProps = (dispatch) => ({
//   setRestData(results) {
//     dispatch({type: 'SET_DATA_VALUE', payload: results})
//   }
// })

//module.exports = connect(mapStateToProps, mapActionsToProps)(Homepage)
module.exports = Homepage
