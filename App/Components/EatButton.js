import React, {Component} from 'react'
import {
	View,
	TouchableHighlight
} from 'react-native'
import {variables} from '../Styles/Variables'
import {Icon} from 'react-native-elements'

class EatButton extends Component {

	render() {

		/**
		* how do we know if a food item has been eaten?
		* the most challenging part might be tracking this on a daily basis, and how to keep this storedin the database?
		* one table for each user?
		*/
		if(this.props.currentFavorites) {
			if (this.props.currentFavorites.indexOf(this.props.itemId) > -1) {
				var iconColor = variables.brandPrimary
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