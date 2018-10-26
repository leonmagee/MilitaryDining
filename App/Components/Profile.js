// not being used

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
	inputWrap: {
	    paddingHorizontal: 30,
	    marginBottom: 20,
	},
	textInput: {
	    borderBottomWidth: 0.5,
	    fontSize: 16,
	    borderBottomColor: 'rgba(0, 0, 0, .38)',
	    paddingVertical: 7,
  	},
	dropdownInput: {
	  		fontSize: 16
	},
})

class Profile extends Component {

	constructor(props) {

		super(props)

		this.state = {
			name: 'Start Name',
			color: 'red'
		}
	}

	render() {

		return(
			<View style={styles.mainWrap}>

		        <View style={styles.inputWrap}>
		          <Text style={styles.inputLabel}>Name</Text>
		          <TextInput underlineColorAndroid='transparent' style={styles.textInput} value={this.state.name} onChangeText={(name) => this.setState({name})}/>
		        </View>


			</View>
			)
	}
}

module.exports = Profile

