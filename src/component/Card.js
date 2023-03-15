import { Component } from "react"
import { View, Image } from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View>
                <View>
                    <Image source={require('../img/gatinhooo.jpg')} />
                </View>
            </View>
        )
    }
}