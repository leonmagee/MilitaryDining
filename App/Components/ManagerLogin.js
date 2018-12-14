import React, {Component} from 'react'
import {
	View, 
	Text, 
	StyleSheet,
	TextInput,
	TouchableHighlight
} from 'react-native'
import {variables} from '../Styles/Variables'
import {defaults} from '../Styles/Defaults'
import Footer from './Footer'


const styles = StyleSheet.create({
	mainWrap: {
		//justifyContent: 'center',
		//alignItems: 'center',
		paddingTop: 50,
		backgroundColor: variables.backgroundWhite,
		flex: 1,
	},
	textTest: {
		fontSize: 30,
	},
	inputWrap: {
	    paddingHorizontal: 60,
	    marginBottom: 40,
	},
	inputLabel: {
	    color: 'rgba(0, 0, 0, .38)',
	    fontSize: 12
  	},
	textInput: {
	    borderBottomWidth: 0.5,
	    fontSize: 16,
	    borderBottomColor: 'rgba(0, 0, 0, .38)',
	    paddingVertical: 7,
    },
    updateButton: {
	    backgroundColor: variables.brandPrimary,
	    paddingVertical: 8,
	    paddingHorizontal: 15,
	    alignItems: 'center',
	    borderRadius: 8,
	    marginHorizontal: 80,
	    marginTop: 20,
  	},
  	updateButtonText: {
	    fontFamily: 'BlackOpsOne-Regular',
	    color: '#FFF',
	    fontSize: 20
    },
})

class ManagerLogin extends Component {

	constructor(props) {
		super(props)

		this.state = {
			email:'',
			password: ''
		}
	}

	loginManager() {
		console.log('email: ', this.state.email, 'password: ', this.state.password)
	}

	render() {
		return(
			<View style={defaults.defaultMainWrap}>
				<View style={defaults.defaultTitleWrap}>
		          <Text style={defaults.defaultTitle}>Manager Login</Text>
		        </View>
		        <View style={styles.mainWrap}>
					<View style={styles.inputWrap}>
            			<Text style={styles.inputLabel}>Email</Text>
            			<TextInput underlineColorAndroid='transparent' style={styles.textInput} value={this.state.email} onChangeText={(email) => this.setState({email})}/>
          			</View>
          			<View style={styles.inputWrap}>
            			<Text style={styles.inputLabel}>Password</Text>
            			<TextInput underlineColorAndroid='transparent' style={styles.textInput} value={this.state.password} onChangeText={(password) => this.setState({password})}/>
          			</View>
          			<TouchableHighlight style={styles.updateButton} underlayColor={variables.brandPrimary} onPress={() => this.loginManager()}>
          				<Text style={styles.updateButtonText}>LOG IN</Text>
        			</TouchableHighlight>
				</View>
				<Footer navigation={this.props.navigation} />
			</View>
			)
	}
}

module.exports = ManagerLogin