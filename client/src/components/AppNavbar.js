import React from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,} from 'reactstrap';

export default class AppNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/" style={{color: 'black'}}>Plan</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink style={{color: 'black'}} href="https://github.com/aacode20/MERN_APP">
                    Github Repo
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color: 'black'}} href="https://linkedin.com/in/armand-asnani">
                    LinkedIn
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

