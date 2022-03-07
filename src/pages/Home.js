import React from 'react'
import {Carousel,Container,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <Carousel variant="dark" fade>
        
        <Carousel.Item  style={{width:'80%',paddingLeft:'25%'}}>

           <Card style={{width:'100%',height:'480px' ,
         textAlign:'center', border:'solid', borderColor:'black' , backgroundColor:'rgba(230, 154, 154, 0.904)'}}>
        <Card.Img variant="top" style={{height:'50%'}} src="/images/image2.jpg"/>
        <Card.Body style={{height:'50%'}}  >
          <Card.Title  style={{ fontSize:'30px',fontFamily:'bold',height:'10%'}}>Animaux</Card.Title>
          <br></br>  <br></br>  <br></br>
          <Link to="/Animals" > <button className="fa fa-paw"
        style={{ fontSize:'48px',backgroundColor:'rgba(230, 154, 154, 0.904)',height:'25%',borderColor:'rgba(230, 154, 154, 0.904)' ,color:"white"}}
       
      > Clique ici </button></Link>
       
        </Card.Body>
      
      </Card>
        </Carousel.Item>
        <Carousel.Item style={{width:'80%',paddingLeft:'25%'}}>
        <Card style={{width:'100%',height:'480px' ,
         textAlign:'center', border:'solid', borderColor:'black' , backgroundColor:'rgba(230, 154, 154, 0.904)'}}>
        <Card.Img variant="top" style={{height:'50%'}} src="/images/image3.jpg"/>
        <Card.Body style={{height:'50%'}}  >
          <Card.Title  style={{ fontSize:'30px',fontFamily:'bold',height:'10%'}}>Oiseaux</Card.Title>
          <br></br>  <br></br>  <br></br>
          <Link to="/Birds" > <button className="fa fa-twitter"
        style={{ fontSize:'48px',backgroundColor:'rgba(230, 154, 154, 0.904)',height:'25%',borderColor:'rgba(230, 154, 154, 0.904)' ,color:"white"}}
       
      > Clique ici </button></Link>
       
        </Card.Body>
      
      </Card>
        </Carousel.Item>
        
        <Carousel.Item style={{width:'80%',paddingLeft:'25%'}}>
        <Card style={{width:'100%',height:'480px' ,
         textAlign:'center', border:'solid', borderColor:'black' , backgroundColor:'rgba(230, 154, 154, 0.904)'}}>
        <Card.Img variant="top" style={{height:'50%'}} src="/images/food.jpg"/>
        <Card.Body style={{height:'50%'}}  >
          <Card.Title  style={{ fontSize:'30px',fontFamily:'bold',height:'10%'}}>Food</Card.Title>
          <br></br>  <br></br>  <br></br>
          <Link to="/Food" > <button className="fa fa-cutlery"
        style={{ fontSize:'48px',backgroundColor:'rgba(230, 154, 154, 0.904)',height:'25%',borderColor:'rgba(230, 154, 154, 0.904)' ,color:"white"}}
       
      > Clique ici </button></Link>
       
        </Card.Body>
      
      </Card>
      
          
        </Carousel.Item>
         
      </Carousel>
    )
}

export default Home
