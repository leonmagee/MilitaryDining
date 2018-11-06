import React, {Component} from 'react'
import StarRating from 'react-native-star-rating'
import {variables} from '../Styles/Variables'
import uniqueId from 'react-native-unique-id'
import {
  View, 
  Text, 
  TouchableHighlight, 
  StyleSheet,
  AsyncStorage
} from 'react-native'

const styles = StyleSheet.create({
  messHallTitleWrap: {
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 13,
    borderBottomColor: '#DDD'
  },
  messHallTitle: {
    fontSize: 23,
    color: '#222',
    fontFamily: 'BlackOpsOne-Regular'
  },
  starWrap: {
    padding: 5,
  }
})

class MessHall extends Component {

   constructor(props) {
    super(props);

    this.state = {
      starCount: 0.5
    };

  }

  componentDidMount() {

    console.log('COMPONENT DID MOUNT?')

    //AsyncStorage.clear()

    AsyncStorage.getItem('@MessHallRating').then((ratings_array) => {
      //console.log('new retrive')
      //console.log(JSON.parse(ratings_array))
      if (ratings_array) {

        const ratings_array_parsed = JSON.parse(ratings_array)


        ratings_array_parsed.map((value) => {

          if(value) {
            if (value.mess_hall_id === this.props.data.id)
            {
              this.setState({
                starCount: value.rating
              })
            }
          }
        })

      } 




    })
  }



  saveRating(rating) {

    AsyncStorage.getItem('@MessHallRating').then((ratings_array) => {

      if (ratings_array) {

        const ratings_array_parsed = JSON.parse(ratings_array)

        var didnt_find_record = true

        ratings_array_parsed.map((value) => {

          if(value) {
            if (value.mess_hall_id === this.props.data.id)
            {
              didnt_find_record = false
              value.rating = rating
            }
          }
        })

        if(didnt_find_record)
        {
          ratings_array_parsed.push({
            mess_hall_id: this.props.data.id,
            rating: rating
          })
        }

        const saved_data = JSON.stringify(ratings_array_parsed)
        AsyncStorage.setItem('@MessHallRating', saved_data)

      } else {

        const ratings_array_new = [
          {
            mess_hall_id: this.props.data.id,
            rating: rating
          }
        ]
        const saved_data = JSON.stringify(ratings_array_new)
        AsyncStorage.setItem('@MessHallRating', saved_data)
      }
    }).done()

  }
 
  onStarRatingPress(rating) {

    this.saveRating(rating)

    uniqueId((error, id) => {
      if (error) return console.error(error)

      console.log('rating info')
      console.log(rating)
      console.log(id)
      console.log(this.props.data.id)

      // 1. save locally with async storage

      // 2. post to api


    })

    this.setState({
      starCount: rating
    })
  }

  render() {

    if (this.state.starCount > 4.5) {
      var starColor = 'gold'
    } else {
      var starColor = variables.brandSecond
    }

    return (
          <View style={styles.messHallTitleWrap}>
            <View style={styles.starWrap}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                starSize={27}
                fullStarColor={starColor}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
              />
            </View>
            <TouchableHighlight onPress={() => this.props.navigate(this.props.data)} underlayColor="transparent">
              <Text style={styles.messHallTitle}>{this.props.name}</Text>
            </TouchableHighlight>
          </View>
      )
  }
}


module.exports = MessHall