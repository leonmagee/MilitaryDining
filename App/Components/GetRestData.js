import React, {Component} from 'react'
import {connect} from 'react-redux'
import api from '../Utils/api'

import {View} from 'react-native';


class GetRestData extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

      api.getMenus().then((res) => {
        this.props.setRestData(res)
        console.log('responze working???',res)

        /**
         * Here we call the background geo location component if we have the data
         * since it will be pointless to call it until we have results
         * and we can pass the menus response as a prop - so we don't need redux in 
         * the other component
         */
  

      })

  }

  render() {
    return (
      <View></View>
    )
  }
}

mapActionsToProps = (dispatch) => ({
  setRestData(results) {
    dispatch({type: 'SET_DATA_VALUE', payload: results})
  }
})

module.exports = connect(null, mapActionsToProps)(GetRestData)
