import React, {Component} from 'react'
import {connect} from 'react-redux'
import {variables} from '../Styles/Variables'

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
	TouchableHightlight,
	AsynchStorage,
	Animated
} from 'react-native'

const styles = StyleSheet.create({
	mainWrap: {
		//backgroundColor: '#F4F4F4',
		display: 'flex',
		flex: 1,
		paddingTop: 40,
		//paddingHorizontal: 20,
	},
	settingsTitleWrap: {
		paddingBottom: 15,
		alignSelf: 'stretch',
		alignItems: 'center',
		marginHorizontal: 30
	},
	settingsTitle: {
		fontSize: 30,
		color: '#EEE',
		backgroundColor: 'transparent',
		fontFamily: 'BlackOpsOne-Regular'
	},
	scrollWrap: {
		backgroundColor: '#FFF',
		paddingHorizontal: 20,
		paddingVertical: 15,
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
	}

	render() {

		var favFoodList = <View></View>

		if (this.props.restData) {
			// console.log('xxx')
			console.log(this.props.restData)

			var favFoodList = this.props.restData.map((food, key) => {
				return (
					<View key={key}>

						<Text style={styles.foodName}>{food.name}</Text>

						<View style={styles.foodDetais}>

							<Text>Calories: {food.cal}</Text>
							<Text>Carbs: {food.carb}</Text>
							<Text>Chart: {food.chart}</Text>
							<Text>Fat: {food.fat}</Text>
							<Text>Carbs: {food.carb}</Text>
							<Text>Portion: {food.portion}</Text>
							<Text>Protein: {food.pro}</Text>
							<Text>Ref: {food.ref}</Text>

						</View>

					</View>
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

				<View style={styles.mainWrap}>

					<View style={styles.foodsWrap}>

						<View style={styles.settingsTitleWrap}>

							<Text style={styles.settingsTitle}>Favorite Foods</Text>

						</View>

						<ScrollView style={styles.scrollWrap}>

							{favFoodList}

						</ScrollView>

					</View>

				</View>

			)
	}
}

mapStateToProps = (state) => ({restData: state.restMenuItemData})

module.exports = connect(mapStateToProps)(FavoriteFoods)