import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import Homepage from './Homepage'
import Settings from './Settings'
import MessHalls from './MessHalls'
import MapPage from './MapPage'
import MenuPage from './MenuPage'
import {variables} from '../Styles/Variables'

const MessHallStack = StackNavigator({
    MessHalls: {
        screen: MessHalls,
        navigationOptions: {
            title: 'xxxx',
            tabBarLabel: 'MESS HALLS',
            tabBarIcon: ({ tintColor }) => <Icon name="restaurant" size={30} color={tintColor}/>
        }
    },
    MenuPage: {
        screen: MenuPage,
        navigationOptions: {
            tabBarLabel: 'MESS HALLS',
            tabBarIcon: ({ tintColor }) => <Icon name="restaurant" size={30} color={tintColor}/>
        } 
    }
})

export const Tabs = TabNavigator({
    Homepage: {
        screen: Homepage,
        navigationOptions: {
            tabBarLabel: 'MD HOME',
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor}/>
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'HEALTH',
            tabBarIcon: ({ tintColor }) => <Icon name="directions-run" size={30} color={tintColor}/>
        }
    },
    MessHalls: {
        screen: MessHalls,
        navigationOptions: {
            tabBarLabel: 'MESS HALLS',
            tabBarIcon: ({ tintColor }) => <Icon name="restaurant" size={30} color={tintColor}/>
        }
    },
    Map: {
        screen: MapPage,
        navigationOptions: {
            tabBarLabel: 'AREA MAP',
            tabBarIcon: ({ tintColor }) => <Icon name="person-pin-circle" size={30} color={tintColor}/>
        }
    }
}, 
{tabBarOptions: {
    activeTintColor: '#FFF',
    inactiveTintColor: '#AAA',
    style: {
        backgroundColor: variables.brandPrimary,
        //paddingVertical: 5,
    }
}})