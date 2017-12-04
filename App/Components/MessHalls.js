import React, {Component} from 'react'
import {connect} from 'react-redux'
//import MenuBar from './MenuBar'
import MenuPage from './MenuPage'
import {variables} from '../Styles/Variables'
import {View, ScrollView, Text, TouchableHighlight, StyleSheet} from 'react-native'
//import api from '../Utils/api'

//import MenuInfo from '../Data/Data.js'



const styles = StyleSheet.create({
  mainWrapOuter: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  mainWrap: {
    display: 'flex',
    alignSelf: 'stretch',
    flex: 1,
  },
  pageTitleWrap: {
    paddingVertical: 20,
    backgroundColor: variables.brandPrimary,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  pageTitle: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Black Ops One'
  },
  messHallWrap: {
    alignSelf: 'stretch'
  },
  messHallTitleWrap: {
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 13,
    borderBottomColor: '#DDD'
  },
  messHallTitle: {
    fontSize: 20,
    color: '#222',
    fontFamily: 'Black Ops One'
  }
})

class MessHalls extends Component {

  constructor(props) {
    super(props)
  }

  navigateToPage(data) {
    this.props.goToMenuPage(data)
    this.props.navigation.navigate('MenuPage', data)
  }

  render() {

      if (this.props.restData) {
        
              const MessHallMenus = this.props.restData.map((data, key) => {
                return (
                  <View key={key} style={styles.messHallTitleWrap}>
                    <TouchableHighlight onPress={() => this.navigateToPage(data)} underlayColor="transparent">
                      <Text style={styles.messHallTitle}>{data.name}</Text>
                    </TouchableHighlight>
                  </View>
                )
              })
        
               currentActivePage = (
                <View style={styles.mainWrap}>
                  <View style={styles.pageTitleWrap}>
                    <Text style={styles.pageTitle}>Choose Mess Hall</Text>
                  </View>
                  <ScrollView style={styles.messHallWrap}>
                    {MessHallMenus}
                  </ScrollView>
                </View>
              )
            } else {
              var currentActivePage = <View></View>  
            } 


    return (
      <View style={styles.mainWrapOuter}>
        {currentActivePage}
      </View>
    )

    //   if (this.props.restData) {

    //   const MessHallMenus = this.props.restData.map((data, key) => {
    //     return (
    //       <View key={key} style={styles.messHallTitleWrap}>
    //         <TouchableHighlight onPress={() => this.props.goToMenuPage(data)} underlayColor="transparent">
    //           <Text style={styles.messHallTitle}>{data.name}</Text>
    //         </TouchableHighlight>
    //       </View>
    //     )
    //   })

    //   return (
    //     <View style={styles.mainWrap}>
    //       <View style={styles.pageTitleWrap}>
    //         <Text style={styles.pageTitle}>Choose Mess Hall</Text>
    //       </View>
    //       <ScrollView style={styles.messHallWrap}>
    //         {MessHallMenus}
    //       </ScrollViewa>
    //     </View>
    //   )
    // } else {
    //   return (
    //     <View></View>
    //   )
    // }



  }
}

mapStateToProps = (state) => ({currentPage: state.currentPage, restData: state.restData})

mapActionsToProps = (dispatch) => ({
  // goToSettingsPage() {
  //   dispatch({type: 'SETTINGS_PAGE'})
  // },
  // goToMessHallsPage() {
  //   dispatch({type: 'MESS_HALLS_PAGE'})
  // },
  goToMenuPage(data) {
    dispatch({type: 'MESS_HALL_MENU', payload: data})
   }
})

module.exports = connect(mapStateToProps, mapActionsToProps)(MessHalls)

//module.exports = MessHalls
