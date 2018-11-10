import React, {Component} from 'react'
import {
	View,
	TouchableHighlight,
	AsyncStorage
} from 'react-native'
import {dateString} from './HelperFunctions'
import {variables} from '../Styles/Variables'
import {Icon} from 'react-native-elements'

class EatButton extends Component {

	constructor(props) {
		super(props)

		this.state = {
			active: false
		}
	}

	componentDidMount() {

		AsyncStorage.getItem('@CurrentEatsArray').then((value) => {

			if (value) {

				let eatenItems = JSON.parse(value)

				const currentDate = dateString()
				const id = this.props.itemId
				const meal = this.props.meal
				const messHall = this.props.messHallId
				const day = this.props.day

				eatenItems.map((item) => {
					if ((item.day === day) && (item.id === id) && (item.date === currentDate) && (item.meal === meal) && (item.messHall === messHall)) {

						this.setState({
							active: true
						})
					}
				})
			}
		})
	}

	toggleEat() {

		if(this.state.active) {
			this.setState({
				active: false
			})
		} else {
			this.setState({
				active: true
			})
		}

		const currentDate = dateString()
		const id = this.props.itemId
		const meal = this.props.meal
		const messHall = this.props.messHallId
		const messHallName = this.props.messHallName
		const day = this.props.day

		// console.log('togglez')
		// console.log(currentDate)
		// console.log(id)
		// console.log(meal)
		// console.log(messHall)

		AsyncStorage.getItem('@CurrentEatsArray').then((value) => {

			if (value) {

				var foodIsCurrentlyEaten = false

				let eatenItems = JSON.parse(value)

				var currentItemCounter = null

				let counter = 0
				eatenItems.map((item) => {

					// @todo I also need to add a day parameter here... 
					if ((item.day === day) && (item.id === id) && (item.date === currentDate) && (item.meal === meal) && (item.messHall === messHall)) {
						foodIsCurrentlyEaten = true
						currentItemCounter = counter
					}
					counter++
				})

				if(currentItemCounter != null) {

					eatenItems.splice(currentItemCounter, 1)
				}

				if(!foodIsCurrentlyEaten) {
					eatenItems.push({
						date: currentDate,
						id: id,
						meal: meal,
						messHall: messHall,
						messHallName: messHallName
					})
				}

				const finalEaten = JSON.stringify(eatenItems)

				AsyncStorage.setItem('@CurrentEatsArray', finalEaten)

			} else {

				const eatenItems = [
				{
					date: currentDate,
					id: id,
					meal: meal,
					messHall: messHall,
					messHallName: messHallName
				}
				]

				let finalEaten = JSON.stringify(eatenItems)
				AsyncStorage.setItem('@CurrentEatsArray', finalEaten)
			}

		}).done()

	}

	render() {

		if(this.state.active) {
			var iconColor = variables.brandSixth
		} else {
			var iconColor = '#CCC'
		}

		return(
			<TouchableHighlight style={{marginLeft: 5}} onPress={(id) => this.toggleEat()} underlayColor="transparent">
			<View>
			<Icon name="silverware-variant" type="material-community" size={25} color={iconColor} />
			</View>
			</TouchableHighlight>
			)
	}

}

module.exports = EatButton