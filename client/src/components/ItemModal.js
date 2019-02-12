import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component{
    state = {
        modal: false,
        name: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault(); //so that the form doesn't submit but that we just take the text from the input box since were using Redux

        const newItem = { //we don't create a new id here or anywhere in our code since mongodb/mlab will create one for us which we will also use
            name: this.state.name
        };

        //Add item via addItem action

        this.props.addItem(newItem);

        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color='dark'
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Add Item
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add To List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='item'>
                                    Name of Item:
                                </Label>
                                <Input type="text" name="name" id="item" placeholder="Enter the" onChange={this.onChange} style={{marginBottom:'1rem'}}/>
                                <Button
                                    color='dark'
                                    style={{ marginBottom: '0.5rem'}}
                                    block
                                > Add Item 
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);