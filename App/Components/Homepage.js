import React, {Component} from 'react'
import {vw, vh} from '../Utils/helper'
import {connect} from 'react-redux'
import Settings from './Settings'
import MessHalls from './MessHalls'
import MenuPage from './MenuPage'
import MapPage from './MapPage'
import MenuBar from './MenuBar'
import LinearGradient from 'react-native-linear-gradient'
import variables from '../Styles/Variables'
import api from '../Utils/api'

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
  menuText: {
    fontSize: 27,
    fontFamily: 'Black Ops One',
    color: '#FFF',
    backgroundColor: 'transparent'
  },
});

class Homepage extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    api.getMenus().then((res)=> {
      this.props.setRestData(res)
    })
  }

  render() {

    if (this.props.currentPage === 'settings') {
      var currentActivePage = (<Settings/>)
    } else if (this.props.currentPage === 'mess_halls') {
      var currentActivePage = (<MessHalls/>)
    } else if (this.props.currentPage === 'map') {
      var currentActivePage = (<MapPage/>)
    } else if (this.props.currentPage === 'menu_page') {
      var currentActivePage = (<MenuPage/>)
    } else {
      var currentActivePage = (
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
              <Text style={styles.homeText}>DINING</Text>
            </View>
            <MenuBar menuLinks={{
              home: false,
              settings: true,
              mess_halls: true,
              map: true,
            }}
            />
          </View>
        </View>
      )
    }

    return (
      <View style={styles.mainOuterWrap}>
        {currentActivePage}
      </View>
    )
  }
}

mapStateToProps = (state) => ({currentPage: state.currentPage})

mapActionsToProps = (dispatch) => ({
  setRestData(results) {
    dispatch({type: 'SET_DATA_VALUE', payload: results})
  },
})

module.exports = connect(mapStateToProps, mapActionsToProps)(Homepage)
