import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';

export default class HeaderComponent extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Aheer Doctor</Title>
                    <Subtitle>Manage All Patients</Subtitle>
                </Body>
                <Right>
                    <Image source={require('./../../images/naveed.png')}
                        style={{ width: 50, height: 50, borderRadius: 30 }} />
                </Right>
            </Header>
        );
    }
}