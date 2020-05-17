import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, View, Button } from 'react-native'
import actions from './redux/actions';
import * as NavigationService from '../../services/NavigationService';

class HomeScreen extends Component {
    render() {
        const { navigation, isShowText, toggleText, navigateToAbout } = this.props;
        return (
            <View>
                <Text> Home page </Text>
                <Button 
                    title="Go To About"
                    onPress={navigateToAbout}
                />
                <Button 
                    title="Toggle"
                    onPress={() => toggleText(!isShowText)}
                />
                {
                    isShowText && <Text>React native boilerplate.</Text>
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        isShowText: state.home.isShowText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleText: (value) => dispatch(actions.toggleText(value)),
        navigateToAbout: () => dispatch(actions.navigateToAbout()),
    }
}

const styles = StyleSheet.create({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
