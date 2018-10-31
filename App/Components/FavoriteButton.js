import React, {Component} from 'react'
import {
	View,
	TouchableHighlight
} from 'react-native'
import {Icon} from 'react-native-elements'

class FavoriteButton extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return(
			<TouchableHighlight onPress={(id) => this.props.fav()} underlayColor="transparent">
              <View>
                <Icon name="favorite" size={23} color="#AAA" />
              </View>
            </TouchableHighlight>
			)
	}

}

module.exports = FavoriteButton