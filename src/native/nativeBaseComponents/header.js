import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';

export default class HeaderComponent extends Component { 
    render() {
        return (
            <Container>
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
                </Header>
            </Container>
        );
    }
}