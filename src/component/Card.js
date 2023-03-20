import { Component } from "react"
import { View, Image, StyleSheet } from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View>
                <View>
                    <Image style={{width: 40, height: 40}} source={require('../img/gatinhooo.jpg')} />
                </View>
            </View>
        )
    }
}