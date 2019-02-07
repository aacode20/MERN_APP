import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component{
    state = { //hardcoded state currently
        items:[
            { id: uuid(), name:"Butt"},
            { id: uuid(), name:"Cheek"}, //uuid is aware of other ids, and calling uuid multiple times ALWAYS generates a unique id
            { id: uuid(), name:"Scrotum"}, //TODO: Figure out why item is id and name, not name and date
            { id: uuid(), name:"Nut"}
        ]
    }

    render(){
        const { items } = this.state; //destructuring, i.e getting a reference to items directly 
        return(
            <Container>
                <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}} 
                    onClick={() => {
                        const name = prompt('Enter item name');  //asking for basic prompt upon pressing butotn
                        if(name){
                            this.setState(state => ({ //if the prompt wasn't empty, create an item like above to add to the state
                                items: [...state.items, { id: uuid(),  name }] //uses the spread operator '...' which allows dynamic addition to arrays/lists like this, TODO: See https://zendev.com/2018/05/09/understanding-spread-operator-in-javascript.html
                            }));
                        }
                    }}>
                    Add Item
                </Button>

                <ListGroup>
                   <TransitionGroup className="shopping-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button 
                                        className="remove-btn" 
                                        color="danger" 
                                        size="sm"
                                        style = {{marginRight:'1rem'}}
                                        onClick={()=>{
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                   </TransitionGroup> 
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList;