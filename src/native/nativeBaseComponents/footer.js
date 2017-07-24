import React, { Component } from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class FooterComponents extends Component {
    render() {
        return (
            <Footer >
                <FooterTab>
                    <Button active>
                        <Icon name="egg" />
                        <Text>View Patients</Text>
                    </Button>
                    <Button>
                        <Icon name="paper" />
                        <Text >Add Patients</Text >
                    </Button>

                </FooterTab>
            </Footer>

        );
    }
}
