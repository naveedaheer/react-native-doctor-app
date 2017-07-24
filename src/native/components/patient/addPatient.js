import React, { Component } from 'react';
import {
    Container, Content, Form, Item, Input, Label, H2,
    Textarea, Radio, Right, Left, Text, ListItem, Button, Picker
} from 'native-base';
import { StyleSheet, AsyncStorage } from 'react-native';

export default class FloatingLabelExample extends Component {
    constructor() {
        super();
        this.state = {
            patientName: '',
            patientAge: '',
        }
        this.submit = this.submit.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    submit() {

        let patientData = {
            patientName: this.state.patientName,
            patientAge: this.state.patientAge
        }
        console.log("this.state.patientName", this.state.patientName);
    }
    showState(state) {
        let myData;
        let saveData;
        if (state == 'add') {
            saveData = this.state;
            AsyncStorage.setItem("patientData", saveData)
            console.log("added");
        } else {
            AsyncStorage.getItem("patientData").then((data) => {
                console.log("got");
                myData = data;
                console.log("myData", myData);
            })
        }
    }
    inputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
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
                        <Button onPress={() => this.showState('add')} full success ><Text> Submit</Text></Button>
                        <Button onPress={() => this.showState('get')} full ><Text> View</Text></Button>
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