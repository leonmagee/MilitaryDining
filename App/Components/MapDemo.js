import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MapView from 'react-native-maps'
//var PriceMarker = require('./PriceMarker');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

class MapSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {

      region: {
        latitude: 32.759143,
        longitude: -117.146394,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.region} onRegionChange={this.onRegionChange}>
          <MapView.Marker coordinate={{latitude: this.state.region.latitude, longitude: this.state.region.longitude}} title='marker title' description='marker description'>
            <Text>Marker...</Text>
          </MapView.Marker>
        </MapView>
      </View>
    )
  }
}

module.exports = MapSearch;
