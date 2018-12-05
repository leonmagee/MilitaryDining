import React, {Component} from 'react'
import {Platform} from 'react-native'
import {TabNavigator, StackNavigator} from 'react-navigation'
//import {Icon} from 'react-native-elements'
import {Icon} from 'react-native-elements'
import Homepage from './Homepage'
import Settings from './Settings'
//import Profile from './Profile'
import MessHalls from './MessHalls'
import MapPage from './MapPage'
import MenuPage from './MenuPage'
import FavoriteFoods from './FavoriteFoods'
import DailyCalories from './DailyCalories'
import RankStats from './RankStats'
import ApiTester from './ApiTester'
//import AreaChart from './AreaChart'
import {variables} from '../Styles/Variables'

const navigationOptions = ({navigation}) => ({title: `${navigation.state.params.name}`})

const MessHallStack = StackNavigator({
    MessHalls: {
        screen: MessHalls,
        headerMode: 'none',

        // cardStyle: {
        //     backgroundColor: 'transparent',
        // },
        // transitionConfig: (): Object => ({
        //     containerStyle: {
        //         backgroundColor: 'transparent',
        //     },
        // }),


        //transparentCard: true,
        navigationOptions: {
            title: 'Mess Halls',
            headerTitleStyle: {
                color: '#FFF',
                fontFamily: 'BlackOpsOne-Regular',
                fontSize: 30,
                //marginBottom: 15,
                fontWeight: 'normal',
            }
        }
    },
    MenuPage: {
        screen: MenuPage,
        navigationOptions: navigationOptions
    }
}, {
    // Default Options
    navigationOptions: {
        headerStyle: {
            //backgroundColor: variables.brandPrimary,
            backgroundColor: 'transparent',
            //position: 'absolute', 
            //backgroundColor: 'transparent', 
            // zIndex: 100, 
            // top: 0, 
            // left: 0, 
            // right: 0,
            height: 93,
        },
        headerTransparent: true,
        headerTitleStyle: {
            color: '#FFF',
            fontFamily: 'BlackOpsOne-Regular'
        },
        headerTintColor: '#FFF'
    }
    //mode: 'modal', headerMode: 'none',
})

export const Tabs = TabNavigator({
    Homepage: {
        screen: Homepage,
        navigationOptions: {
            tabBarLabel: 'HOME',
            tabBarIcon: ({tintColor}) => <Icon name="home" size={30} color={tintColor}/>
        }
    },
    MessHalls: {
        screen: MessHallStack,
        navigationOptions: {
            tabBarLabel: 'MESS HALLS',
            tabBarIcon: ({tintColor}) => <Icon name="restaurant" size={30} color={tintColor}/>
        }
    },
    Settings: {
        //screen: Settings,
        screen: RankStats,
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({tintColor}) => <Icon name="directions-run" size={30} color={tintColor}/>
        }
    },
    DailyIntake: {
        screen: DailyCalories,
        navigationOptions: {
            tabBarLabel: 'TRACKER',
            tabBarIcon: ({tintColor}) => <Icon name="calendar-check" type="material-community" size={30} color={tintColor}/>
        }
    },
    Favorites: {
        screen: FavoriteFoods,
        navigationOptions: {
            tabBarLabel: 'FAVORITES',
            tabBarIcon: ({tintColor}) => <Icon name="heart-outline" type="material-community" size={30} color={tintColor}/>
        }
    },
    Map: {
        screen: MapPage,
        navigationOptions: {
            tabBarLabel: 'AREA MAP',
            tabBarIcon: ({tintColor}) => <Icon name="person-pin-circle" size={30} color={tintColor}/>
        },
    }
}, {
    tabBarOptions: {
        tabBarPosition: 'bottom',
        activeTintColor: '#FFF',
        inactiveTintColor: '#CCC',
        indicatorStyle: {
            backgroundColor: variables.brandSecond,
            height: 4,
        },
        // tabBarUnderlineStyle: {
        //     borderColor: 'blue'
        // },
        //pressColor: 'red',
        style: {
            //backgroundColor: variables.brandPrimary,
            backgroundColor: 'transparent',
            height: 100,
            //paddingTop: 40,
            paddingTop: 15,
            paddingBottom: 30,
            borderTopColor: '#222',
            borderTopWidth: 1,
            //paddingTop: 65,
        },
        labelStyle: {
            ...Platform.select({
                // ios: {
                //     fontSize: 14,
                // },
                android: {
                    fontSize: 11,
                },
        })
      }
    }
})