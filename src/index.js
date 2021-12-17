import React from 'react'
import { View, Text } from 'react-native'
import Provider from 'react-redux'
import MainStack from './Navigation/MainStack'

const App = () => {
    return (
                <View style={{ flex: 1 }}>
                    <MainStack />
                </View>
    )
}

export default App
