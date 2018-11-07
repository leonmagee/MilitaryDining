import React, {Component} from 'react'
import {
	View,
	TouchableHighlight
} from 'react-native'
import {variables} from '../Styles/Variables'
import {Icon} from 'react-native-elements'

class EatButton extends Component {

	render() {

		if(this.props.currentFavorites) {
			if (this.props.currentFavorites.indexOf(this.props.itemId) > -1) {
				var iconColor = variables.brandSecond
			} else {
				var iconColor = '#CCC'
			} 
		} else {
			var iconColor = '#CCC'
		}

		return(
			<TouchableHighlight style={{marginLeft: 5}} onPress={(id) => this.props.fav()} underlayColor="transparent">
			<View>
			<Icon name="silverware-variant" type="material-community" size={25} color={iconColor} />
			</View>
			</TouchableHighlight>
			)
	}

}

module.exports = EatButton