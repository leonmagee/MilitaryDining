import React, {Component} from 'react'
import {connect} from 'react-redux'
import {variables} from '../Styles/Variables'
import {defaults} from '../Styles/Defaults'
import {Icon} from 'react-native-elements'
//import {StreetLight, history} from '../SVG/SvgIcons.js'
//import SvgElementPath from './SvgElementPath.js'
import FoodDetail from './FoodDetail'
import Svg, {
    Path,
} from 'react-native-svg';



/**
* @todo I can have one page which lists all food items (including which mess 
        hall they are available at?) with search functionality - but this 
        might not be in scope - and it could be hard to do with the searching, 
        so it might not be a great idea. If this seems easy I can do it.
*/

import {
	View,
	Text,
	Image,
	TextInput,
	StyleSheet,
	ScrollView,
	TouchableHighlight,
	AsynchStorage,
	Animated
} from 'react-native'

const styles = StyleSheet.create({
	scrollWrap: {
		backgroundColor: variables.backgroundWhite,
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	foodWrap: {
		backgroundColor: '#FDFDFD',
		borderColor: '#E5E5E5',
		borderWidth: 1,
		borderRadius: 15,
		paddingTop: 15,
		paddingLeft: 15,
		paddingRight: 15,
		paddingBottom: 12,
		marginBottom: 20,
	},
	headerWrap: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	imageWrap: {
		width: 17,
		height: 40,
		marginRight: 8,
		//flexGrow: 0,

	},
	imageElement: {
		width: 17,
		height: 40,
	},
	foodNameWrap: {
		flex: 1,
	},
	foodName: {
		fontSize: 16,
		fontFamily: 'BlackOpsOne-Regular',
	},
	subHeaderWrap: {
		//backgroundColor: 'tomato',
	},
	moreInfoWrap: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	moreInfoText: {
		fontWeight: 'bold',
		marginLeft: 3,
		color: '#333'
	},
	foodDetais: {
		marginTop: 10,
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
})

class FavoriteFoods extends Component {

	constructor(props) {
		super(props)

		this.state = {
			detailsToggle: []
		}
	}

	toggleDetails(index) {
		let currentArray = this.state.detailsToggle
		if(currentArray[index]) {
			currentArray[index] = false
		} else {
			currentArray[index] = true
		}
		this.setState({
			detailsToggle:  currentArray
		})
	}

	checkVisibility(index) {
		let currentArray = this.state.detailsToggle
		if (currentArray[index]) {
			return true
		} else {
			return false
		}
	}

	// helper functions?
	removeQuotes(name) {
    	return name.replace('&#8220;', '"').replace('&#8221;', '"')
  	}

	render() {

		var favFoodList = <View></View>

		if (this.props.restData) {

			let toggleArray = this.props.restData.length

			var favFoodList = this.props.restData.map((food, key) => {

				if (this.checkVisibility(key)) {

					var detailSection = 
					<View style={styles.foodDetais}>
						<FoodDetail label="Calories" value={food.cal}/>
						<FoodDetail label="Carbs" value={food.carb}/>
						<FoodDetail label="Fat" value={food.fat}/>
						<FoodDetail label="Protein" value={food.pro}/>
						<FoodDetail label="Ref" value={food.ref}/>
						<FoodDetail label="Portion" value={food.portion}/>
					</View>

					var more_less_info = 'LESS INFO'
					var icon_name = 'circle-with-minus'

				} else {

					var detailSection = <View></View>
					var more_less_info = 'MORE INFO'
					var icon_name = 'circle-with-plus'
				}

				if ( food.chart === 'red' ) {
					var image_url = require('../Assets/Images/red-light.png')
				} else if (food.chart === 'yellow') {
					var image_url = require('../Assets/Images/yellow-light.png')
				} else {
					var image_url = require('../Assets/Images/green-light.png')
				}

				return (
					<View style={styles.foodWrap} key={key}>

						<View style={styles.headerWrap}>

							<View style={styles.imageWrap}>
								<Image source={image_url} style={styles.imageElement} />
							</View>

							<View style={styles.foodNameWrap}>
								<Text style={styles.foodName}>{this.removeQuotes(food.name)}</Text>
							</View>

						</View>

						<View style={styles.subHeaderWrap}>


							<TouchableHighlight onPress={() => {this.toggleDetails(key)}} underlayColor="transparent">
								<View style={styles.moreInfoWrap}>
									<Icon name={icon_name} type='entypo' size={16} color="#333"/>
									<Text style={styles.moreInfoText}>{more_less_info}</Text>
								</View>
							</TouchableHighlight>

							{detailSection}

						</View>

					</View>
					)
			})

		} 

		return(

				<View style={defaults.defaultMainWrap}>

					<View style={defaults.defaultTitleWrap}>

						<Text style={defaults.defaultTitle}>Favorite Foods</Text>

					</View>

					<ScrollView style={styles.scrollWrap}>

						{favFoodList}

					</ScrollView>

				</View>

			)
	}
}

mapStateToProps = (state) => ({restData: state.restMenuItemData})

module.exports = connect(mapStateToProps)(FavoriteFoods)