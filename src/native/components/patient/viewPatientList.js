import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Body, View, Button, H3, Left, Right } from 'native-base';
import { AsyncStorage } from 'react-native';


let allPatients = [];

export default class ViewPatientList extends Component {
    static navigationOptions = ({ navigation }) => ({
        // title: 'View Screen',
        title: navigation.state.params.name,
    });

    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        this.patientList();
    }

    patientList() {
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
        var { params } = this.props.navigation.state;
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={{ uri: "./../../../../images/p1.png" }} />
                            <Body>
                                {/* <Button
                                    onPress={() => params()}
                                ><Text>Go Back</Text></Button> */}
                                <Text>Dr. App by {params.name}</Text>
                                <Text note>{params.website}</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <H3 style={{ textAlign: 'center', marginTop: 10 }} >View Patients</H3>

                    {allPatients.map((val, i) => {
                        return (
                            <List key={i}>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={{ uri: '../../../../images/naveed.png' }} />
                                    </Left>
                                    <Body>
                                        <Text>{val.patientName}</Text>
                                        <Text note>{val.patientDisease}</Text>
                                    </Body>
                                    <Right>
                                        <Text note>Age: {val.patientAge}</Text>
                                    </Right>
                                </ListItem>
                            </List>
                        )
                    })
                    }

                </Content>
            </Container>
        )
    }
}
