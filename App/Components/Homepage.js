import React, {Component} from 'react'
import {vw, vh} from '../Utils/helper'
import {connect} from 'react-redux'
import SampleData from '../Data/Data'
import LinkButton from './LinkButton'
import Settings from './Settings'
import MessHalls from './MessHalls'
import MenuPage from './MenuPage'
import LinearGradient from 'react-native-linear-gradient'
import variables from '../Styles/Variables'

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
    fontSize: 18 * vw,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    fontFamily: 'Black Ops One'
  },
  menuText: {
    fontSize: 27,
    fontFamily: 'Black Ops One',
    color: '#FFF',
    backgroundColor: 'transparent'
  },
  menuBar: {
    position: 'absolute',
    height: 50,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: 'rgba(0,0,0,0.6)',
    //backgroundColor: 'red',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 0,
    width: width
  }
});

class Homepage extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //     started: false,
    // }
  }

  // componentWillMount() {
  // }
  //
  // componentDidMount() {
  // }

  render() {

    if (this.props.currentPage === 'settings') {
      var currentActivePage = (<Settings/>)
    } else if (this.props.currentPage === 'mess_halls') {
      var currentActivePage = (<MessHalls/>)
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
            <View style={styles.menuBar}>
              <LinkButton buttonText="Settings" handleClick={() => this.props.goToSettingsPage()}/>
              <LinkButton buttonText="Mess Halls" handleClick={() => this.props.goToMessHallsPage()}/>
            </View>
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
  goToSettingsPage() {
    dispatch({type: 'SETTINGS_PAGE'})
  },
  goToMessHallsPage() {
    dispatch({type: 'MESS_HALLS_PAGE'})
  }
})

//module.exports = Homepage

module.exports = connect(mapStateToProps, mapActionsToProps)(Homepage)
