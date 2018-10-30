import React, {Component} from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
	elementWrap: {
		backgroundColor: '#CCC',
		padding: 7,
		display: 'flex',
		flexDirection: 'row',
		margin: 5,
		flexGrow: 1,
	},
	textLabel: {
		color: '#444',
	},
	textValue: {
		color: '#222',
		marginLeft: 5,
		fontWeight: 'bold',
	}
})


class FoodDetail extends Component {

	constructor(props) {
		super(props)
	}

	render() {

		if (this.props.value) {
			return(
			<View style={styles.elementWrap}>
				<Text style={styles.textLabel}>{this.props.label}:</Text>
				<Text style={styles.textValue}>{this.props.value}</Text>
			</View>
			)
		} else {
			return(
			<View></View>
			)
		}
	}
}

module.exports = FoodDetail