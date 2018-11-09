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

				eatenItems.map((item) => {
					if (item.id === this.props.itemId) {

						this.setState({
							color: variables.brandSixth
						})
					}
				})

			}

		})



	}


toggleEat() {

  //AsyncStorage.clear()

  if(this.state.active) {
  	this.setState({
  		active: false
  	})
  } else {
  	this.setState({
  		active: true
  	})
  }

  const id = this.props.itemId

  const currentDate = dateString()

  AsyncStorage.getItem('@CurrentEatsArray').then((value) => {

    if (value) {

      console.log('NOW THIS HAS HAPPENED...')

      var foodIsCurrentlyEaten = false

      let eatenItems = JSON.parse(value)
      
      console.log(eatenItems)

      var currentItemCounter = null

      let counter = 0
      eatenItems.map((item) => {
        counter++
        if (item.id === id) { // also check that date matches... 
          console.log('WE HAVE A MATCH!')
          foodIsCurrentlyEaten = true
          currentItemCounter = counter
          //item.delete()
        }
      })

      if(currentItemCounter != null) {

        eatenItems.splice(currentItemCounter, 1)
      }

      const finalEaten = JSON.stringify(eatenItems)


      AsyncStorage.setItem('@CurrentEatsArray', finalEaten)

      // @todo add item here again if it doesn't exist


      // if (currentArray.indexOf(id) > -1) {

      //   currentArray.splice(currentArray.indexOf(id), 1);

      //   var reduxArray = currentArray
      //   let finalArray = JSON.stringify(currentArray)

      //   AsyncStorage.setItem('@FavoritesArray', finalArray)

      // } else {

      //   currentArray.push(id)

      //   var reduxArray = currentArray
      //   let finalArray = JSON.stringify(currentArray)

      //   AsyncStorage.setItem('@CurrentEatsArray', finalArray)
      // }

    } else {

      console.log('CREATEING ARRAY FOR THE FIRST TIME')

      const eatenItems = [
        {
          date: currentDate,
          id: id
        }
      ]

      // let newArray = [id]
      // var reduxArray = newArray
      let finalEaten = JSON.stringify(eatenItems)
      AsyncStorage.setItem('@CurrentEatsArray', finalEaten)
    }

    //this.props.setCurrentFavorites(reduxArray)
  }).done()






  /**
  * 1. add this item to async storage with date
  * 2. push this item to the server with date
  */

}

	render() {

		if(this.state.active) {
			var iconColor = variables.brandSixth
		} else {
			var iconColor = '#CCC'
		}

		// eatenItems.map((item) => {
		// 	if (item.id === id) {
		// 		console.log('WE HAVE A MATCH!')
		// 		foodIsCurrentlyEaten = true
		// 	}
		// })

		/**
		* how do we know if a food item has been eaten?
		* the most challenging part might be tracking this on a daily basis, and how to keep this storedin the database?
		* one table for each user?
		*/
		// if(this.props.currentFavorites) {
		// 	if (this.props.currentFavorites.indexOf(this.props.itemId) > -1) {
		// 		var iconColor = variables.brandPrimary
		// 	} else {
		// 		var iconColor = '#CCC'
		// 	} 
		// } else {
		// 	var iconColor = '#CCC'
		// }

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