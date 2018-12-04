import React, {Component} from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	AsyncStorage
} from 'react-native'
import api from '../Utils/api'
import uniqueId from 'react-native-unique-id'


const styles = StyleSheet.create({
	mainWrap: {
		backgroundColor: '#FFF',
		alignItems: 'center',
		paddingVertical: 40,
	},
	textItem: {
		fontSize: 28,
		fontWeight: 'bold',
		color: 'darkred'
	}
})

class RankStats extends Component {

	constructor(props) {
		super(props)

		this.state = {
			rankStats: []
		}
	}

	componentWillMount() {
		api.getRankStats().then(response => {
			console.log('will mount', response)
			this.setState({
				rankStats: response
			})
		})
	}

	testMethod() {
		// get current user id and rank? From async storage?
		//console.log('button was pressed')
		/**
		* Should we pass rank ID or rank string to api? I suppose I could have the same array of
		* rank values on the WP site and inside the app? Or I could be pulling all possible
		* ranks from the WP site? It probably doesn't matter - I think having matching arrays
		* is fine for now
		*/

		AsyncStorage.getItem('@UserRank').then((rank) => {
			if (rank) {
				uniqueId((error, id) => {
					if (error) return console.error(error)
						console.log(id)
					api.createNewUser(id, rank)
				})
			}
		}).done()

		
	}

	getRankStats() {

	}

	render() {

		const rankStats = this.state.rankStats.map((item, key) => {
			return(
				<Text key={key}>Rank: {item.rank} - Average: {item.average}</Text>
				)
		})


		return(
			<View style={styles.mainWrap}>
			<Text style={styles.textItem}>Rank Stats</Text>
			<TouchableHighlight onPress={() => this.testMethod()}>
			<Text>Button Name</Text>
			</TouchableHighlight>
			<View>
				{rankStats}
			</View>
			</View>
			)
	}
}

module.exports = RankStats