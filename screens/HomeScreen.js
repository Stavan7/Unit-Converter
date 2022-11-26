import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
        }
    }

    render() {
        const inputVal = this.state.input;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={inputVal}
                        placeholder="Input Number"
                        style={styles.input}
                        placeholderTextColor="#FFF"
                        onChangeText={(e) => this.setState({ input: e })}
                    />
                </View>

                <View style={styles.resultView}>
                    <View style={styles.resultContainer}>
                        <Text style={styles.header}>Length (Meter/Feet)</Text>
                        <Text style={styles.resultText}>{`${inputVal} meters = ${Math.round(this.state.input * 3.281 * 1000) / 1000} feet`}</Text>
                        <Text style={styles.resultText}>{`${inputVal} feet = ${Math.round(this.state.input * 0.3048 * 1000) / 1000} meters`}</Text>
                    </View>

                    <View style={styles.resultContainer}>
                        <Text style={styles.header}>Volume (Liters/Gallons)</Text>
                        <Text style={styles.resultText}>{`${inputVal} litres = ${Math.round(this.state.input * 0.264 * 1000) / 1000} gallons`}</Text>
                        <Text style={styles.resultText}>{`${inputVal} gallons = ${Math.round(this.state.input * 3.78541 * 1000) / 1000} litres`}</Text>
                    </View>

                    <View style={styles.resultContainer}>
                        <Text style={styles.header}>Mass (Kilograms/Pounds)</Text>
                        <Text style={styles.resultText}>{`${inputVal} kilogram = ${Math.round(this.state.input * 2.204 * 1000) / 1000} pound`}</Text>
                        <Text style={styles.resultText}>{`${inputVal} pounds = ${Math.round(this.state.input * 0.453592 * 1000) / 1000} kilogram`}</Text>
                    </View>

                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
    },
    inputContainer: {
        height: '25%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F2937',
    },
    input: {
        borderWidth: 1,
        borderColor: '#B295FF',
        borderRadius: 5,
        color: '#FFF',
        height: 70,
        width: 160,
        padding: 10,
        fontSize: 16
    },
    resultView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultText: {
        fontWeight: "400",
        color: '#353535',
        fontSize: 16,
        marginVertical: 5,
        textTransform: 'capitalize'
    },
    resultContainer: {
        height: 100,
        width: '80%',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        justifyContent: 'center'
    },
    header: {
        marginBottom: 5,
        color: '#5A537B',
        fontWeight: "600",
        textAlign: 'center'
    }
})

export default HomeScreen