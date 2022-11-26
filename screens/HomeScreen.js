import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
} from 'react-native'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0
        }
    }
    render() {
        console.log(this.state.input)
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <TextInput
                        value={this.state.input}
                        placeholder="Input Number"
                        style={styles.input}
                        onChangeText={(e) => this.setState({ input: e })}
                    />
                    <View>
                        <Text>Length (Meter/Feet)</Text>
                        <Text style={styles.text}>
                            {`${this.state.input} meters = ${this.state.input * 3.281} feet | ${this.state.input}  feet = ${this.state.input * 0.3048} meters`}
                        </Text>
                    </View>

                    <View>
                        <Text>Volume (Liters/Gallons)</Text>
                        <Text style={styles.text}>
                            {`${this.state.input} litres = ${this.state.input * 0.264} gallons | ${this.state.input}  gallons = ${this.state.input * 3.78541} litres`}
                        </Text>
                    </View>

                    <View>
                        <Text>Mass (Kilograms/Pounds)</Text>
                        <Text style={styles.text}>
                            {`${this.state.input} kilogram = ${this.state.input * 2.204} pound | ${this.state.input}  pounds = ${this.state.input * 0.453592} kilogram`}
                        </Text>
                    </View>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    input: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        marginVertical: 10,
        color: 'black',
    },
    text: {
        fontSize: 16,
    }
})

export default HomeScreen