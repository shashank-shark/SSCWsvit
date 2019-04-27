import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class SubjectScreen1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.TextHere}>SubjectScreen1</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    TextHere: {
        textAlign: 'center',
    }
})