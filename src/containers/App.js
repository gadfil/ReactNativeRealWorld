import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import {Container, Title, Text, Card} from 'native-base';
import Explore from '../components/Explore'
import {resetErrorMessage} from '../actions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

class App extends Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        // Injected by React Redux
        errorMessage: PropTypes.string,
        resetErrorMessage: PropTypes.func.isRequired,
        inputValue: PropTypes.string.isRequired,
        // Injected by React Router
        children: PropTypes.node
    };

    handleDismissClick = e => {
        this.props.resetErrorMessage()
        e.preventDefault()
    }

    handleChange = nextValue => {
        browserHistory.push(`/${nextValue}`)
    }


    render() {
        return (
            <Container>
                <Explore value="a" onChange={this.handleChange}/>
                <Text>{'app'}</Text>
                <Title>{JSON.stringify(this.props)}</Title>
            </Container>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    errorMessage: state.errorMessage,
    // inputValue: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps,
    {
        resetErrorMessage
    }
)(App)