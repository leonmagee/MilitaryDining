import React from 'react'
import {
    Dimensions,
    AsyncStorage
} from 'react-native'

/**
 * Helper Functions
 */


// export const setAsyncIndex = (key, array) => {
//     const dataString = JSON.stringify(array)
//     AsyncStorage.setItem('@QuestionIndex:' + key, dataString).then(() => {
//     }).done()
// }

/**
 * react-native-viewport-units package
 */
let {width, height} = Dimensions.get('window')

const units = {
    vw: width/100,
    vh: height/100
}

export const {vw, vh} = units
