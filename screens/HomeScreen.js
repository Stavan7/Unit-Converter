import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
} from 'react-native';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';

let customFonts = {
    'Raleway-Bold': require('../assets/Fonts/Raleway/Raleway-Bold.ttf'),
    'Raleway-Medium': require('../assets/Fonts/Raleway/Raleway-Medium.ttf'),
}

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
            fontsLoaded: false,
        }
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        const inputVal = this.state.input;
        if (!this.state.fontsLoaded) {
            return null;
        }
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
        backgroundColor: '#2c3f50',
    },
    input: {
        borderWidth: 1,
        borderColor: '#018786',
        borderRadius: 5,
        color: '#FFF',
        height: 70,
        width: 160,
        padding: 10,
        fontSize: 17,
        fontFamily: 'Raleway-Bold'
    },
    resultView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultText: {
        fontWeight: "400",
        color: '#018786',
        fontSize: 16,
        marginVertical: 5,
        textTransform: 'capitalize',
        fontFamily: 'Raleway-Medium'
    },
    resultContainer: {
        height: 120,
        width: '80%',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        justifyContent: 'center'
    },
    header: {
        marginBottom: 5,
        color: '#b00020',
        fontSize: 18,
        fontWeight: "600",
        textAlign: 'center',
        fontFamily: 'Raleway-Bold'
    }
})

export default HomeScreen