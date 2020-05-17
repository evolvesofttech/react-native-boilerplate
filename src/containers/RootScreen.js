import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import AboutScreen from '../screens/About/AboutScreen';
import * as NavigationService from '../services/NavigationService';

const Stack = createStackNavigator();

class RootScreen extends Component {

    componentDidMount() {
        NavigationService.setNavigator(this.navigator);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationContainer ref={nav => { this.navigator = nav; }}>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="About" component={AboutScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default RootScreen;
