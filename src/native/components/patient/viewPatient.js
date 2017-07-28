import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Body, View } from 'native-base';
import { AsyncStorage } from 'react-native';


var allPatients = [];

export default class ListThumbnailExample extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    componentDidMount() {
        this.viewPatient();
    }

    viewPatient() {
        allPatients = [];
        let Mydata;
        AsyncStorage.getItem("patientData").then((data) => {
            Mydata = JSON.parse(data);
            console.log("data", Mydata);

            for (var i = 0; i < Mydata.length; i++) {
                allPatients.push(Mydata[i]);
            }
            console.log("allPatients", allPatients);
        })
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={{ uri: "./../../../images/naveed.png" }} />
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}
