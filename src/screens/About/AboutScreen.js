import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, View, Button } from 'react-native'

class AboutScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text> { this.props.home.helloText } </Text>
                <Button 
                    title="Go To Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        home: state.home
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const styles = StyleSheet.create({})

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)
