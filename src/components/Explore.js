import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Header, Item, Input, Icon, Button, Text} from 'native-base';


export default class Explore extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            search: this.props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setInputValue(nextProps.value)
        }
    }

    getInputValue = () => {
        return this.refs.input.value
    }

    setInputValue = (val) => {
        this.setState({search: val})
    }


    handleGoClick = () => {
        this.props.onChange(this.getInputValue())
    }

    render() {
        return (

                <Header searchBar rounded>
                    <Item>
                        {/*<Icon name="ios-search" />*/}
                        <Input placeholder="Search"
                               value={this.state.search}
                               onChangeText={(text) => this.setState({search:text})}
                               onSubmitEditing={()=>this.handleGoClick}
                               defaultValue={this.props.value}/>

                    </Item>
                    <Button transparent
                            onClick={this.handleGoClick}>
                        <Text>Search</Text>
                    </Button>
                </Header>


        )
    }
}
