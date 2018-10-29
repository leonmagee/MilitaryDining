import React, {Component} from 'react'
import {Platform} from 'react-native'
import {TabNavigator, StackNavigator} from 'react-navigation'
//import {Icon} from 'react-native-elements'
import {Icon} from 'react-native-elements'
import Homepage from './Homepage'
import Settings from './Settings'
import Profile from './Profile'
import MessHalls from './MessHalls'
import MapPage from './MapPage'
import MenuPage from './MenuPage'
import FavoriteFoods from './FavoriteFoods'
import {variables} from '../Styles/Variables'

const navigationOptions = ({navigation}) => ({title: `${navigation.state.params.name}`})

const MessHallStack = StackNavigator({
    MessHalls: {
        screen: MessHalls,
        headerMode: 'none',
        navigationOptions: {
            title: 'CHOOSE MESS HALL',
            headerTitleStyle: {
                color: '#FFF',
                fontFamily: 'BlackOpsOne-Regular',
                fontSize: 23,
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
            backgroundColor: variables.brandPrimary
        },
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
            tabBarLabel: 'MD HOME',
            tabBarIcon: ({tintColor}) => <Icon name="home" size={30} color={tintColor}/>
        }
    },
    Settings: {
        screen: Settings,
        //screen: Profile,
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({tintColor}) => <Icon name="directions-run" size={30} color={tintColor}/>
        }
    },
    MessHalls: {
        screen: MessHallStack,
        navigationOptions: {
            tabBarLabel: 'MESS HALLS',
            tabBarIcon: ({tintColor}) => <Icon name="restaurant" size={30} color={tintColor}/>
        }
    },
    Favorites: {
        screen: FavoriteFoods,
        navigationOptions: {
            tabBarLabel: 'FAVORITES',
            tabBarIcon: ({tintColor}) => <Icon name="favorite" size={30} color={tintColor}/>
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
            paddingTop: 65,
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