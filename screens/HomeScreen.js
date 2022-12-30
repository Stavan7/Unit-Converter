import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';

const customFonts = {
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
            <SafeAreaView style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={inputVal}
                        style={styles.input}
                        keyboardType="phone-pad"
                        placeholder="Input Number"
                        placeholderTextColor="#FFF"
                        textBreakStrategy='highQuality'
                        onChangeText={(e) => this.setState({ input: e })}
                    />
                </View>

                <View style={styles.resultView}>
                    <View style={styles.resultContainer}>
                        <Text style={styles.header}>Length (Meter/Feet)</Text>
                        <Text style={styles.resultText}>{`${inputVal} meters = ${Math.round(inputVal * 3.281 * 1000) / 1000} feet`}</Text>
                        <Text style={styles.resultText}>{`${inputVal} feet = ${Math.round(inputVal * 0.3048 * 1000) / 1000} meters`}</Text>
                    </View>

                    <View style={styles.resultContainer}>
                        <Text style={styles.header}>Volume (Liters/Gallons)</Text>
                        <Text style={styles.resultText}>{`${inputVal} litres = ${Math.round(inputVal * 0.264 * 1000) / 1000} gallons`}</Text>
                        <Text style={styles.resultText}>{`${inputVal} gallons = ${Math.round(inputVal * 3.78541 * 1000) / 1000} litres`}</Text>
                    </View>

                    <View style={styles.resultContainer}>
                        <Text style={styles.header}>Mass (Kilograms/Pounds)</Text>
                        <Text style={styles.resultText}>{`${inputVal} kilogram = ${Math.round(inputVal * 2.204 * 1000) / 1000} pound`}</Text>
                        <Text style={styles.resultText}>{`${inputVal} pounds = ${Math.round(this.state.input * 0.453592 * 1000) / 1000} kilogram`}</Text>
                    </View>

                </View>
            </SafeAreaView>
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
        height: 70,
        width: 160,
        padding: 10,
        fontSize: 17,
        color: '#FFF',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#018786',
        fontFamily: 'Raleway-Bold'
    },
    resultView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultContainer: {
        height: 120,
        width: '80%',
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    header: {
        fontSize: 18,
        marginBottom: 5,
        color: '#b00020',
        fontWeight: "600",
        textAlign: 'center',
        fontFamily: 'Raleway-Bold'
    },
    resultText: {
        fontSize: 16,
        color: '#018786',
        marginVertical: 5,
        fontWeight: "400",
        textTransform: 'capitalize',
        fontFamily: 'Raleway-Medium'
    },
})

export default HomeScreen