import React, {Component} from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	AsyncStorage
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {defaults} from '../Styles/Defaults'
import {variables} from '../Styles/Variables'
import api from '../Utils/api'
import uniqueId from 'react-native-unique-id'


const styles = StyleSheet.create({
	innerWrap: {
		backgroundColor: variables.backgroundWhite,
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	gradientWrap: {
		flex: 1,
		backgroundColor: 'transparent',
		//alignItems: 'center',
	},
	gradientElement: {
		flex: 1,
		flexDirection: 'row'
	},
	sidebar: {
		//width: 300,
		width: 60,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingVertical: 30,
		//backgroundColor: 'blue',
	},
	sidebarText: {
		color: '#FFF',
		fontWeight: 'bold',
		marginVertical: 10,
	},
	barWrap: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	barItem: {
		width: 80,
		height: 300,
		backgroundColor: 'rgba(255,255,255,0.7)',
		marginHorizontal: 15,	
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

			<View style={defaults.defaultMainWrap}>
				<View style={defaults.defaultTitleWrap}>
					<Text style={defaults.defaultTitle}>Ranked Stats</Text>
				</View>
				<View style={styles.innerWrap}>
{/*					<Text style={styles.textItem}>Rank Stats</Text>
					<TouchableHighlight onPress={() => this.testMethod()}>
						<Text>Button Name</Text>
					</TouchableHighlight>
					<View>
					{rankStats}
					</View>*/}
					<View style={styles.gradientWrap}>
						<LinearGradient 
						start={{x: 0.0, y: 0.10}} end={{x: 0.6, y: 1.0}}
						colors={[variables.brandSecond, variables.brandEighth]} 
						style={styles.gradientElement}
						>
						<View style={styles.sidebar}>
							<Text style={styles.sidebarText}>100%</Text>
							<Text style={styles.sidebarText}>90%</Text>
							<Text style={styles.sidebarText}>80%</Text>
							<Text style={styles.sidebarText}>70%</Text>
							<Text style={styles.sidebarText}>60%</Text>
							<Text style={styles.sidebarText}>50%</Text>
							<Text style={styles.sidebarText}>40%</Text>
							<Text style={styles.sidebarText}>30%</Text>
							<Text style={styles.sidebarText}>20%</Text>
							<Text style={styles.sidebarText}>10%</Text>
						</View>
						<View style={styles.barWrap}>
							<View style={styles.barItem}></View>
							<View style={styles.barItem}></View>
							<View style={styles.barItem}></View>
						</View>
						</LinearGradient>
					</View>
				</View>
			</View>
			)
	}
}

module.exports = RankStats