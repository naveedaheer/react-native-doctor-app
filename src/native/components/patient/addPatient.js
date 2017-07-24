import React, { Component } from 'react';
import {
    Container, Content, Form, Item, Input, Label, H2,
    Textarea, Radio, Right, Left, Text, ListItem, Button
} from 'native-base';

export default class FloatingLabelExample extends Component {
    render() {
        return (
            <Container  >
                <Content>
                    <H2 style={{ textAlign: 'center', marginTop: 50 }} >Add Patient</H2>

                    <Form  >
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input maxLength={50} type='text' />
                        </Item>
                        <Item floatingLabel>
                            <Label>Age</Label>
                            <Input type='number' maxLength={2} />
                        </Item>
                        <ListItem >

                            <Label style={{ marginRight: 40 }} >Gender</Label>

                            <Text style={styles.smallerFont} >Male</Text>
                            <Radio style={{ marginRight: 30 }} />

                            <Text style={styles.smallerFont}>Female</Text>

                            <Radio selected={false} />
                        </ListItem>
                        <Item floatingLabel >
                            <Label>Disease</Label>
                            <Input type='text' />
                        </Item>
                        <Item floatingLabel last>
                            <Label style={styles.smallerFont} >History</Label>
                            <Textarea />
                        </Item>
                        <Button type='submit' active full success ><Text> Submit</Text></Button>
                    </Form>

                </Content>
            </Container>
        );
    }
}

const styles = {
    smallerFont: {
        fontSize: 12
    }
}