import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
//import {variables} from '../Styles/Variables'

const styles = StyleSheet.create({
	mainWrap: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	textTest: {
		fontSize: 30,
	}
})

class MessHallLogin extends Component {

	// constructor() {
	// 	super()
	// }

	render() {
		return(<View style={styles.mainWrap}>
				<Text style={styles.textTest}>Hello World</Text>
			</View>)
	}
}

module.exports = MessHallLogin