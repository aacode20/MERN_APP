import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import propTypes from 'prop-types';
//PropTypes are a form of validation for component properties, which we will use for holding our items

class ShoppingList extends Component{


    componentDidMount(){
        this.props.getItems();
    }//this is a react lifecycle method, which runs when this ShoppingList component mounts to our page in App.js
     //TODO: Figure out what a react lifecycle method is

    render(){
        const { items } = this.props.item; //destructuring, i.e getting a reference to items directly 
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

ShoppingList.propTypes = {
    getItems: propTypes.func.isRequired,
    item: propTypes.object.isRequired //It is a prop but were mapping it from the state we brought it to a property using mapStateToProps
}//when you bring in an action from redux like get items, it has to become a react prop

const mapStateToProps = (state) => ({
    item: state.item
}); //this function is going to take the state which we pass onto it and map it to a component property like 'this.props.items' and then load it into the page

export default connect(mapStateToProps, { getItems })(ShoppingList);
//connect is going to allow us to call the function as we're loading the shopping list component to get the item