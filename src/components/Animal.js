import React, { useState } from 'react'

import {Card,Row,Col} from 'react-bootstrap'
function Animal(props) {
  const [like, setlike] = useState('false');
    var m=props.m
    return (
         <>
         <div className='card' style={{marginLeft: 40,float:'left' ,width:'30%',height:'600px' ,
         textAlign:'center', border:'solid', borderColor:'black' , backgroundColor:'burlywood'}}>
   
      <img src={m.image} style={{width:'100%',height:'300px'}}></img>
     <h3>Nom : {m.nom}</h3>
     <h3>Espece : {m.espece}</h3>
     <h3>Age : {m.age} ans</h3>
     <h3>Description : {m.descr}</h3>
     </div> 
     
 
    <Col>
      <Card style={{width:'100%',height:'480px' ,
         textAlign:'center', border:'solid', borderColor:'black' , backgroundColor:'rgba(230, 154, 154, 0.904)'}}>
        <Card.Img variant="top" style={{height:'50%'}} src= {m.image}/>
        <Card.Body style={{height:'50%'}}  >
          <Card.Title  style={{ fontSize:'30px',fontFamily:'bold',height:'10%'}}>{m.nom}</Card.Title>
          <Card.Text  style={{ fontSize:'18px',height:'50%'}}>
          Espece : {m.espece} <br></br>
          Age : {m.age} ans<br></br>
          Description : {m.descr}
          </Card.Text>
          <button className="fa fa-heart"
        style={{ fontSize:'48px',backgroundColor:'rgba(230, 154, 154, 0.904)',height:'25%',borderColor:'rgba(230, 154, 154, 0.904)' ,color: like ? "white" : "black" }}
        onClick={() => setlike(!like)
         
        }
      >  {like?"wow" :null}  </button>
        </Card.Body>
      
      </Card>
    </Col>
  

     
     
     
     
     
     
     </> );

    
}

export default Animal
