import React, { Component } from 'react';
import {
    Container, Content, Form, Item, Input, Label, H2,
    Textarea, Radio, Right, Left, Text, ListItem, Button, Picker
} from 'native-base';
import { StyleSheet, AsyncStorage } from 'react-native';

var allPatients = [];

export default class FloatingLabelExample extends Component {

    constructor() {
        super();
        this.state = {
            patientName: '',
            patientAge: '',
        }
    }

    componentDidMount() {
        this.viewPatient();
    }

    addPatient() {

        allPatients.push(this.state);
        console.log("add", allPatients)
        AsyncStorage.setItem("patientData", JSON.stringify(allPatients)).then(() => {
            console.log("Saved");
        })

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

            // for(var prop in Mydata){
            //     allPatients.push((Mydata[prop]));            
            // }

            console.log("allPatients", allPatients);
        })


    }

    render() {
        return (
            <Container style={styles.container} >
                <Content>
                    <H2 style={{ textAlign: 'center', marginTop: 50 }} >Add Patient</H2>

                    <Form {...this.props} >
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input
                                {...this.props}
                                maxLength={50}
                                returnKeyType='next'
                                onChangeText={(name) => this.setState({ patientName: name })}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Age</Label>
                            <Input keyboardType='numeric' type='number' maxLength={2}
                                onChangeText={(age) => this.setState({ patientAge: age })}
                            />
                        </Item>
                        <ListItem >

                            <Label style={{ marginRight: 40 }} >Gender</Label>

                            <Text  >Male</Text>
                            <Radio style={{ marginRight: 30 }} />

                            <Text>Female</Text>

                            <Radio />
                        </ListItem>
                        <Item floatingLabel >
                            <Label>Disease</Label>
                            <Input type='text' />
                        </Item>
                        <Item floatingLabel last>
                            <Label >History</Label>
                            <Textarea />
                        </Item>
                        <Button onPress={() => this.addPatient()} full success ><Text> Submit</Text></Button>
                        <Button onPress={() => this.viewPatient()} full ><Text> View</Text></Button>
                    </Form>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});