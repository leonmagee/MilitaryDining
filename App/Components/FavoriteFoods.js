import React, {Component} from 'react'
import {variables} from '../Styles/Variables'

import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableHightlight,
	AsynchStorage,
	Animated
} from 'react-native'

const styles = StyleSheet.create({
	mainWrap: {
	    backgroundColor: '#F4F4F4',
	    display: 'flex',
	    flex: 1,
	    paddingVertical: 40
	},
})

class FavoriteFoods extends Component {

	constructor(props) {

		super(props)

		this.state = {
			color: 'red'
		}
	}

	render() {

		const foods_array = [
			{
				name: 'Donuts',
				cals: 100
			},
			{
				name: 'Donuts',
				cals: 100
			}
		]

		return(
			<View style={styles.mainWrap}>

				<View style={styles.foodsWrap}>

					<Text>Your FavoriteFoods</Text>

				</View>

			</View>
			)
	}
}

module.exports = FavoriteFoods

