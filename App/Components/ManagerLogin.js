import React, {Component} from 'react'
import {
	View, 
	Text, 
	StyleSheet,
	TextInput,
	TouchableHighlight,
	AsyncStorage
} from 'react-native'
import {variables} from '../Styles/Variables'
import {defaults} from '../Styles/Defaults'
import Footer from './Footer'


const styles = StyleSheet.create({
	mainWrap: {
		//justifyContent: 'center',
		//alignItems: 'center',
		paddingTop: 30,
		backgroundColor: variables.backgroundWhite,
		flex: 1,
	},
	headerText: {
		fontSize: 25,
		fontFamily: 'BlackOpsOne-Regular',
		color: '#222',
		marginBottom: 20,
		paddingHorizontal: 30,
		textAlign: 'center',
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
    textAreaInput: {
    	borderWidth: 0.5,
	    fontSize: 16,
	    borderColor: 'rgba(0, 0, 0, .38)',
	    paddingVertical: 5,
	    paddingHorizontal: 9,
	    marginTop: 7,
	    height: 100,
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
  	logOut: {
  		backgroundColor: variables.brandSecond,
  	},
  	updateButtonText: {
	    fontFamily: 'BlackOpsOne-Regular',
	    color: '#FFF',
	    fontSize: 20
    },
})

/**
* I should check to see if there is an authenticated user, and if so, then I
* can display the form to add specials. So an authenticated user can be linked
* to one or more mess halls, and then be able to promote specials for that mess
* hall - so maybe have it be just a 'current special' - which does not denote
* a date, adn when that mess hall is viewed there will be a modal that pops up
* listing the special for that mess hall. I don't think we really need to have
* notifications for this... I should just get this aspect of it done and then
* I can extend the functionality further. If the user is logged in, and has a
* user id key, then this can be combined with the unique user device id to send
* api requests to verify that the user is logged in... 
*/

class ManagerLogin extends Component {

	constructor(props) {
		super(props)

		this.state = {
			email:'',
			password: '',
			isLoggedIn: false,
			correct_email: 'leonmagee33@gmail.com',
			correct_password: '1111',
			message: '',
		}
	}

	loginUserInfo(email, password) {
    	AsyncStorage.setItem('@LoginUserEmail', email)
    	AsyncStorage.setItem('@LoginUserPassword', password)
  	}

	loginManager() {
		//console.log('email: ', this.state.email, 'password: ', this.state.password)
		this.loginUserInfo(this.state.email, this.state.password)
		if ((this.state.email == this.state.correct_email) && (this.state.password == this.state.correct_password)) {
      		this.setState({isLoggedIn: true})
      	}
	}

	logOutManager() {
		AsyncStorage.setItem('@LoginUserEmail', '')
    	AsyncStorage.setItem('@LoginUserPassword', '')
    	this.setState({
    		email: '',
    		password: '',
    		isLoggedIn: false,
    	})
	}

	updateSpecial() {
		const message = this.state.message
		console.log('message: ', message)
	}

	componentDidMount() {
		AsyncStorage.getItem('@LoginUserEmail').then((email) => {
	      if (email) {
			AsyncStorage.getItem('@LoginUserPassword').then((password) => {
		      if (password) {
		      	console.log('set pass', password, 'set email', email)
		      	if ((email == this.state.correct_email) && (password == this.state.correct_password)) {
		      		this.setState({isLoggedIn: true})
		      	}
		      }
		    }).done()
	      }
	    }).done()
	}

	render() {

		if(this.state.isLoggedIn) {
			var pageContent = 
			<View style={styles.mainWrap}>
		  		<Text style={styles.headerText}>Set Message for Current Manager's Special</Text>
				<View style={styles.inputWrap}>
	            	<Text style={styles.inputLabel}>Current Special</Text>
			  		<TextInput
			  			style={styles.textAreaInput}
					    multiline={true}
					    numberOfLines={5}
					    underlineColorAndroid='transparent'
					    onChangeText={(message) => this.setState({message})}
					    value={this.state.message} />
				</View>
				<TouchableHighlight 
	  				style={styles.updateButton} 
	  				underlayColor={variables.brandPrimary} 
	  				onPress={() => this.updateSpecial()}>
	  				<Text style={styles.updateButtonText}>UPDATE</Text>
				</TouchableHighlight>
	  			<TouchableHighlight 
	  				style={[styles.updateButton, styles.logOut]} 
	  				underlayColor={variables.brandPrimary} 
	  				onPress={() => this.logOutManager()}>
	  				<Text style={styles.updateButtonText}>LOG OUT</Text>
				</TouchableHighlight>
			</View>
		} else {
			var pageContent = <View style={styles.mainWrap}>
					<View style={styles.inputWrap}>
            			<Text style={styles.inputLabel}>Email</Text>
            			<TextInput 
            			textContentType="emailAddress" 
            			autoCapitalize='none' 
            			underlineColorAndroid='transparent' 
            			style={styles.textInput} 
            			value={this.state.email} 
            			onChangeText={(email) => this.setState({email})}
            			/>
          			</View>
          			<View style={styles.inputWrap}>
            			<Text style={styles.inputLabel}>Password</Text>
            			<TextInput 
            			secureTextEntry={true} 
            			textContentType="password" 
            			autoCapitalize='none' 
            			underlineColorAndroid='transparent' 
            			style={styles.textInput} 
            			value={this.state.password} 
            			onChangeText={(password) => this.setState({password})}/>
          			</View>
          			<TouchableHighlight 
          				style={styles.updateButton} 
          				underlayColor={variables.brandPrimary} 
          				onPress={() => this.loginManager()}>
          				<Text style={styles.updateButtonText}>LOG IN</Text>
        			</TouchableHighlight>
				</View>
		}
		return(
			<View style={defaults.defaultMainWrap}>
				<View style={defaults.defaultTitleWrap}>
		          <Text style={defaults.defaultTitle}>Manager Login</Text>
		        </View>
		        {pageContent}
				<Footer navigation={this.props.navigation} />
			</View>
			)
	}
}

module.exports = ManagerLogin