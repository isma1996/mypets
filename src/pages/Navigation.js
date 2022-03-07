
import React from 'react'

import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'

import {Link} from 'react-router-dom'
function Navigation() {

    const menu = [
      {
        "URL": "/Home",
        "Nom": "Acceuil",
        "icon": "fa fa-home"
      
      },
      {
        "URL": "/Animals",
        "Nom": "Animaux",
        "icon": "fa fa-paw"
      
      },
      {
        "URL": "/Birds",
        "Nom": "Oiseaux",
        "icon": "fa fa-twitter"
      
      },
      {
        "URL": "/Food",
        "Nom": "Nouriture",
        "icon": "fa fa-cutlery"
      
      },
    ];
    
    const nav = menu.map(   (menu) =>  (
    
      
      
      <Link to={menu.URL} key={menu.Nom}> <Nav.Item className={menu.icon} style={{color:'black',marginLeft:'50px',fontSize:'30px'}}>{menu.Nom}</Nav.Item></Link>));
    return (
       <>

<Navbar collapseOnSelect expand="lg" style={{color:'red',backgroundColor:'rgba(230, 154, 154, 0.904)'}} sticky="top">
  <Container fluid>
  <Navbar.Brand className="fa fa-paw" style={{color:'white',fontSize:'48px'}} >My Animalerie</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Container style={{width:'85%'}} >
    <Nav>

      {nav}
    
   
    </Nav>
    </Container>
  </Navbar.Collapse>
  </Container>
</Navbar>


<br></br><br></br><br></br>

</>
    )
}

export default Navigation
