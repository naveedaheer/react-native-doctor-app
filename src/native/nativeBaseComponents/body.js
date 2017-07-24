import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Input, H2, Icon, Header, Item, Button, Text } from 'native-base';

export default class BodyComponent extends Component {
    render() {
        return (
            <Container >
                <Content>
                    <Card>
                        <CardItem>
                            <Icon name="search" /><Input type="text" placeholder='Search by Name' />
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
