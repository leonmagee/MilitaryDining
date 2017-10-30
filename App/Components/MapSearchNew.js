import React, {Component} from 'react'
import {
  View, Text,
  //Animated,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native'
import MapView from 'react-native-maps'
//import SvgElement from './SvgElement'
//import {ForkIcon, CurrentMarker} from '../SVG/SvgIcons'
import {variables} from '../Styles/Variables'
//import SampleData from '../Data/Data'

//const messHallCoordinates = []
// SampleData.map((item) => {
//   item.coordinates.svg_key = ForkIcon
//   messHallCoordinates.push(item.coordinates)
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  // container: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center'
  // },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  radius: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(34,170,161,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: variables.brandSixth,
    borderWidth: 1,
    borderColor: '#FFF'
  }
  // indicatorWrap: {
  //   flex: 1,
  //   backgroundColor: variables.brandPrimary,
  //   alignSelf: 'stretch',
  //   justifyContent: 'center'
  // },
  // sampleTextWrap: {
  //   zIndex: 1000000,
  //   backgroundColor: '#F7F7F7',
  //   alignSelf: 'stretch',
  //   alignItems: 'center',
  //   padding: 5,
  //   borderTopColor: '#ccc',
  //   borderTopWidth: 1
  // },
  // sampleText: {
  //   color: '#333',
  //   fontWeight: 'bold'
  // }
});

const {width, height} = Dimensions.get('window')

const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height
const ASPECT_RATIO = width / height

const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class MapSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initalPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      },
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
      this.setState({initalPosition: initialRegion})
      this.setState({markerPosition: initialRegion})
    }, (error) => alert(JSON.stringify(error)), {
      enableHighAccuracy: true,
      timeout: 2000,
      maximumAge: 1000
    })

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({initalPosition: lastRegion})
      this.setState({markerPosition: lastRegion})
    })
  }


  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.initalPosition}>
          <MapView.Marker coordinate={this.state.markerPosition}>
            <View style={styles.radius}>
              <View style={styles.marker}></View>
            </View>
          </MapView.Marker>
        </MapView>
      </View>
    )
  }
}

module.exports = MapSearch;
