import React, {Component} from 'react'
import {connect} from 'react-redux'
import Settings from './Settings'
import variables from '../Styles/Variables'
import api from '../Utils/api'
import bgGeo from "react-native-background-geolocation";

import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  mainOuterWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class BackgroundGeoTester extends Component {

  constructor(props) {
    super(props)

    this.state = {
      geoFences: []
    }
  }

  componentDidMount() {
    api.getMenus().then((res) => {
      this.props.setRestData(res)

      const myGeoFences = res.map((item, index) => {
        if (item.coordinates.latitude && item.coordinates.longitude) {
          console.log('lat:', item.coordinates.latitude, 'long:', item.coordinates.longitude)
          return ({
            identifier: item.name,
            radius: 200,
            latitude: item.coordinates.latitude,
            longitude: item.coordinates.longitude,
            notifyOnEntry: true,
            notifyOnExit: true
          })



        }
      })

      const geoState = myGeoFences.map((item) => {
        return item.identifier
      })

      this.setState({
        geoFences: geoState,
      })

      bgGeo.addGeofences(myGeoFences);
      bgGeo.getGeofences(function(geofences) {
        console.log('- Geofences: ', geofences);


      });
      //
      // console.log('results res is', res)
    })
  }

  render() {

    if ( this.state.geoFences[0]) {
      var geoDataz = this.state.geoFences.map((item, index) => {
        return (
          <View key={index}><Text>{item}</Text></View>
        )
      })
    } else {
      var geoDataz = <View></View>
    }

    return (
      <View style={styles.mainOuterWrap}>
        <Text>Just Testing</Text>
        <View>{geoDataz}</View>
      </View>
    )
  }
}

mapStateToProps = (state) => ({currentPage: state.currentPage})

mapActionsToProps = (dispatch) => ({
  setRestData(results) {
    dispatch({type: 'SET_DATA_VALUE', payload: results})
  }
})

module.exports = connect(mapStateToProps, mapActionsToProps)(BackgroundGeoTester)
