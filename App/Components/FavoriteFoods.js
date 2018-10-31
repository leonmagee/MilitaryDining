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
		backgroundColor: '#EAEAEA',
		borderColor: '#E5E5E5',
		borderWidth: 1,
		borderRadius: 15,
		padding: 15,
		marginBottom: 20,
	},
	foodName: {
		fontSize: 15,
		fontFamily: 'BlackOpsOne-Regular',
	},
	foodDetais: {
		marginTop: 10,
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
	iconStyle: {
		backgroundColor: 'red',
	},
	imageWrap: {
		// backgroundColor: 'blue',
		width: 17,
		height: 40,
	},
	imageElement: {
		width: 17,
		height: 40,
	}
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
						<FoodDetail label="Chart" value={food.chart}/>
						<FoodDetail label="Fat" value={food.fat}/>
						<FoodDetail label="Protein" value={food.pro}/>
						<FoodDetail label="Ref" value={food.ref}/>
						<FoodDetail label="Portion" value={food.portion}/>
					</View>

				} else {

					var detailSection = <View></View>
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

						<View style={styles.imageWrap}>
							<Image source={image_url} style={styles.imageElement} />
						</View>



						<Text style={styles.foodName}>{this.removeQuotes(food.name)}</Text>

						<TouchableHighlight onPress={() => {this.toggleDetails(key)}} underlayColor="transparent">
							<Text>More Info...</Text>
						</TouchableHighlight>



						{detailSection}

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