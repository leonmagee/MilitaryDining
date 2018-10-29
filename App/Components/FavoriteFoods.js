import React, {Component} from 'react'
import {connect} from 'react-redux'
import {variables} from '../Styles/Variables'
import {defaults} from '../Styles/Defaults'

/**
* @todo I can have one page which lists all food items (including which mess 
        hall they are available at?) with search functionality - but this 
        might not be in scope - and it could be hard to do with the searching, 
        so it might not be a great idea. If this seems easy I can do it.
*/

import {
	View,
	Text,
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
	foodName: {
		fontSize: 15,
		fontFamily: 'BlackOpsOne-Regular',
	},
	foodDetais: {
		margin: 5,
		padding: 5,
		borderColor: '#DDD',
		borderWidth: 2,
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
			// console.log('xxx')
			console.log(this.props.restData)

			let toggleArray = this.props.restData.length

			//this.setState({'count', toggleArray})

			// console.log('test count')

			// console.log(toggleArray)

			var favFoodList = this.props.restData.map((food, key) => {

				if (this.checkVisibility(key)) {

					var detailSection = <View style={styles.foodDetais}>

						<Text>Calories: {food.cal}</Text>
						<Text>Carbs: {food.carb}</Text>
						<Text>Chart: {food.chart}</Text>
						<Text>Fat: {food.fat}</Text>
						<Text>Carbs: {food.carb}</Text>
						<Text>Portion: {food.portion}</Text>
						<Text>Protein: {food.pro}</Text>
						<Text>Ref: {food.ref}</Text>

					</View>

				} else {

					var detailSection = <View></View>
				}

				return (
					<TouchableHighlight key={key} onPress={() => {this.toggleDetails(key)}} underlayColor="transparent">

						<View>

						<Text style={styles.foodName}>{this.removeQuotes(food.name)}</Text>

						{detailSection}

						</View>

					</TouchableHighlight>
					)
			})

		} 

		// cal: "130"
		// carb: "16.7"
		// chart: "green"
		// fat: "6.5"
		// id: 248
		// name: "DANISH, ASSORTED"
		// portion: "1 danish"
		// pro: "1.9"
		// ref: "D 039 00 / RM"

		//console.log(food_list)

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