import React, {Component} from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	AsyncStorage,
	Animated,
	Easing,
	Dimensions
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
//import Transition from 'react-transition-group/Transition'
import {defaults} from '../Styles/Defaults'
import {variables} from '../Styles/Variables'
import api from '../Utils/api'
import uniqueId from 'react-native-unique-id'
import {rank} from '../Data/Data'
import Footer from './Footer'

const LinearAnimate = Animated.createAnimatedComponent(LinearGradient)

let {width, height} = Dimensions.get('window')
let boxHeight = (height/23)
let barHeightOneHundred = (boxHeight * 10)

const greenGradient = [variables.brandEighth, variables.brandTwelth]
const redGradient = [variables.brandSixth, variables.brandEleventh]
const tomatoGradient = ['#ff7559', '#FC644D']
const yellowGradient = [variables.brandSeventh, variables.brandTenth]
//console.log(boxHeight)
//height = height - 50; // make space for bottom menu bar?


const styles = StyleSheet.create({
	innerWrap: {
		backgroundColor: variables.backgroundWhite,
		alignItems: 'flex-end',
		//justifyContent: 'flex-end',
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		borderBottomColor: '#444',
		borderBottomWidth: 1,
	},
	mainTextWrap: {
		backgroundColor: variables.backgroundWhite,
		paddingVertical: 30,
		alignItems: 'center',
	},
	mainText: {
		fontSize: 29,
		color: '#333',
		fontFamily: variables.mainFont,
		textAlign: 'center'
	},
	gradientText: {
		color: '#FFF',
		//fontWeight: 'bold',
		fontFamily: variables.mainFont,
		marginTop: 15,
		fontSize: 16,
		textAlign: 'center',
	},
	// gradientWrap: {
	// 	flex: 1,
	// 	backgroundColor: 'transparent',
	// 	//alignItems: 'center',
	// },
	// gradientElement: {
	// 	flex: 1,
	// 	flexDirection: 'row'
	// },
	sidebar: {
		//width: 300,
		width: (width / 7),
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginBottom: 30,
		//paddingVertical: 30,
		//backgroundColor: 'blue',
	},
	sidebarBox: {
		height: boxHeight,
		//width: 80,
		//marginLeft: 20,
		alignItems: 'center',
		justifyContent: 'center',
		borderTopWidth: 1,
		//borderTopColor: 'rgba(255,255,255,0.7)',
		borderTopColor: '#AAA',
	},
	sidebarText: {
		color: '#444',
		fontWeight: 'bold',
		//marginVertical: 10,
	},
	barWrap: {
		flex: 1,
		width: ( (width / 7 ) * 5 ),
		marginLeft: ( width / 20 ),
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-around',
	},
	barItem: {
		width: ( width / 5.5 ),
		//height: 300,
		backgroundColor: 'rgba(255,22,255,0.7)',
		//marginHorizontal: 15,	
	},
	// buttonWrap: {
	// 	height: 60,
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// 	backgroundColor: 'tomato',
	// },
	// buttonText: {
	// 	fontSize: 35,
	// 	fontWeight: 'bold',
	// 	color: '#FFF',
	// },
	graphFooter: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginLeft: ( width / 20 ),
	},
	graphFooterItem: {
		//paddingVertical: 5,
		height: 30,
		justifyContent: 'center',
	},
	graphFooterText: {
		fontFamily: variables.mainFont,
		color: '#333',
	}
})

class RankStats extends Component {

	constructor(props) {
		super(props)

		console.log('sdlfjsdlfsjdflsdjfsdfj')

		this.state = {
			rankStats: [],
			barHeightUser: new Animated.Value(0),
			barHeightRank: new Animated.Value(0),
			barHeightAll: new Animated.Value(0),
			rank: '- - -',
			userPercent: 0.88,
			rankPercent: 0,
			allPercent: 0,
		}


	}

	// static navigationOptions = () => {
	//     return {
	//       tabBarOnPress({ jumpToIndex, scene }) {
	//         // perform your logic here
	//         // this is mandatory to perform the actual switch
	//         // you can omit this if you want to prevent it
	//         console.log('this new shit is working?')
	//         jumpToIndex(scene.index);
	//       }
	//     }
 //  }

  componentDidMount() {
	
    AsyncStorage.getItem('@UserRank').then((value) => {
    	console.log('valzzzzz', value)
    	if (value) {
      		const newRank = rank[value - 1].label
        	this.setState({rank: newRank})
	        api.getRankStatsId(value).then(response => {
				this.setState({
					rankPercent: response
				})
			}).done()
    	}
	    api.getRankStats().then(response => {
			this.setState({
				rankStats: response
			})

			api.getTotalStats().then(response => {
			this.setState({
				allPercent: response
			})
			this.callAnimation()
	}).done()
		}).done()
    }).done()



		// console.log('routzzzzz?')
		// console.log(this.props.navigation.state.routeName)

		// if(this.props.navigation.state.routeName === 'Favorites') {
		// 	console.log('working so farz???')
		// 	this.callAnimation()
		// }


  }

	// componentWillMount() {
	// 	api.getRankStats().then(response => {
	// 		console.log('will mount', response)
	// 		this.setState({
	// 			rankStats: response
	// 		})
	// 	})
	// }

	// componentDidMount() {

	// 	Animated.timing(this.state.barHeight, {
	//       toValue: 300,
	//       duration: 1300, // use timing for animation
	//       easing: Easing.linear
	//     }).start()
	// }

	// triggerAnimation() {

	// }

	// getUserRank() {

	// 	AsyncStorage.getItem('@UserRank').then((rank) => {
	// 		if (rank) {
	// 			uniqueId((error, id) => {
	// 				if (error) return console.error(error)
	// 					console.log(id)
	// 				api.createNewUser(id, rank)
	// 			})
	// 		}
	// 	}).done()
	// }

	callAnimation() { // we need different animation for each
		Animated.timing(this.state.barHeightUser, {
	      toValue: barHeightOneHundred * this.state.userPercent,
	      duration: 500, // use timing for animation
	      easing: Easing.linear
	    }).start(),
	    Animated.timing(this.state.barHeightRank, {
	      toValue: barHeightOneHundred * this.state.rankPercent,
	      duration: 500, // use timing for animation
	      easing: Easing.linear
	    }).start(),
	    Animated.timing(this.state.barHeightAll, {
	      toValue: barHeightOneHundred * this.state.allPercent,
	      duration: 500, // use timing for animation
	      easing: Easing.linear
	    }).start()
	    
	}

	render() {



		let {barHeightUser, barHeightRank, barHeightAll} = this.state

		// const rankStats = this.state.rankStats.map((item, key) => {
		// 	return(
		// 		<Text key={key}>Rank: {item.rank} - Average: {item.average}</Text>
		// 		)
		// })

		return(

			<View style={defaults.defaultMainWrap}>
				<View style={defaults.defaultTitleWrap}>
					<Text style={defaults.defaultTitle}>Ranked Stats</Text>
				</View>
				<View style={styles.mainTextWrap}>
					<Text style={styles.mainText}>
					Recommended Daily Calories Percents
					</Text>
				</View>
				<View style={styles.innerWrap}>
	{/*					<Text style={styles.textItem}>Rank Stats</Text>
					<TouchableHighlight onPress={() => this.testMethod()}>
						<Text>Button Name</Text>
					</TouchableHighlight>
					<View>
					{rankStats}
					</View>*/}
						<View style={styles.sidebar}>
							<View style={styles.sidebarBox}>
								<Text style={styles.sidebarText}>100%</Text>
							</View>
							<View style={styles.sidebarBox}>
								<Text style={styles.sidebarText}>90%</Text>
							</View>
							<View style={styles.sidebarBox}>								
								<Text style={styles.sidebarText}>80%</Text>
							</View>
							<View style={styles.sidebarBox}>
								<Text style={styles.sidebarText}>70%</Text>
							</View>
							<View style={styles.sidebarBox}>
								<Text style={styles.sidebarText}>60%</Text>
							</View>
							<View style={styles.sidebarBox}>
								<Text style={styles.sidebarText}>50%</Text>
							</View>
							<View style={styles.sidebarBox}>
								<Text style={styles.sidebarText}>40%</Text>
							</View>
							<View style={styles.sidebarBox}>
								<Text style={styles.sidebarText}>30%</Text>
							</View>
							<View style={styles.sidebarBox}>
								<Text style={styles.sidebarText}>20%</Text>
							</View>
							<View style={styles.sidebarBox}>
								<Text style={styles.sidebarText}>10%</Text>
							</View>
						</View>
						<View style={styles.barWrapOuter}>
							<View style={styles.barWrap}>
								<LinearAnimate colors={greenGradient} style={[styles.barItem, {height: barHeightUser}]}>
									<Text style={styles.gradientText}>{(this.state.userPercent * 100).toFixed(0)}%</Text>
								</LinearAnimate>
								<LinearAnimate colors={tomatoGradient} style={[styles.barItem, {height: barHeightRank}]}>
									<Text style={styles.gradientText}>{(this.state.rankPercent * 100).toFixed(0)}%</Text>
								</LinearAnimate>
								<LinearAnimate colors={redGradient} style={[styles.barItem, {height: barHeightAll}]}>
									<Text style={styles.gradientText}>{(this.state.allPercent * 100).toFixed(0)}%</Text>
								</LinearAnimate>
							</View>
							<View style={styles.graphFooter}>
								<View style={styles.graphFooterItem}>
									<Text style={styles.graphFooterText}>You</Text>
								</View>
								<View style={styles.graphFooterItem}>
									<Text style={styles.graphFooterText}>{this.state.rank}s</Text>
								</View>
								<View style={styles.graphFooterItem}>
									<Text style={styles.graphFooterText}>Soldiers</Text>
								</View>
							</View>
						</View>
				</View>
				<Footer navigation={this.props.navigation} />
			</View>
			)
	}
}

module.exports = RankStats