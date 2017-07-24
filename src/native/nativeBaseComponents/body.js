import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';

export default class BodyComponent extends Component {
    render() {
        return (
            
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                    My Project Text
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            
        );
    }
}
