import React, {Component} from 'react'
import StarRating from 'react-native-star-rating'
import {variables} from '../Styles/Variables'
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'

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
      starCount: 2.5
    };
  }
 
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {

    return (
          <View style={styles.messHallTitleWrap}>
            <View style={styles.starWrap}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                starSize={27}
                fullStarColor={variables.brandSecond}
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