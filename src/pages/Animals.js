import React from 'react'
import Animal from '../components/Animal';
import {Container,Card,Row,Col} from 'react-bootstrap'

function AnimalsList(props) {
    const animals = props.myAnimals.map((animal) => <Animal m={animal} key={animal.nom}/>);
   
    return (
        <Container fluid>
     <Row xs={1} md={3} style={{width:'100%',textAlign:'center'}}>{animals}</Row>
     </Container> 
           
            
           
           
       
    )
}

export default AnimalsList
