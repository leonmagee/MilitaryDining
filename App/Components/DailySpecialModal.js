import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, Modal} from 'react-native'
import {variables} from '../Styles/Variables'
import {Icon} from 'react-native-elements'

const styles = StyleSheet.create({
  modalOuter: {
    margin: 30,
    padding: 20,
    backgroundColor: variables.backgroundWhite,
    flex: 1,
    borderColor: '#BBB',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  modalTitle: {
    color: '#222',
    textAlign: 'center',
    fontFamily: 'BlackOpsOne-Regular',
    fontSize: 28,
  },
  specialsText: {
  	fontSize: 20,
  	paddingVertical: 15,
  	paddingHorizontal: 10,
  },
  closeButton: {
  	alignSelf: 'flex-end',
  }
})

class DailySpecialModal extends Component {

	constructor(props) {
		super(props)

		this.state = {
			modalVisible: true
		}
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible})
	}

	render() {
		return(
			<Modal
	          animationType="slide"
	          transparent={true}
	          visible={this.state.modalVisible}
	          onRequestClose={() => {
	            Alert.alert('Modal has been closed.');
	          }}>
	          <View style={styles.modalOuter}>
	          	<View>
	              <Text style={styles.modalTitle}>Current Specials</Text>
	              <Text style={styles.specialsText}>{this.props.dailySpecial}</Text>
	            </View>
	              <TouchableHighlight
	              	style={styles.closeButton}
	                onPress={() => {
	                  this.setModalVisible(!this.state.modalVisible)
	                }}>
	                <Icon name="close-circle" type="material-community" size={40} color={variables.brandSecond}/>
	              </TouchableHighlight>
	            </View>
	        </Modal>
        )
	}
}

module.exports = DailySpecialModal








