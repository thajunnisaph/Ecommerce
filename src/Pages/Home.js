import React from 'react';
import {Container,Row,Col,Table,Button,Navbar} from 'react-bootstrap';


const tourArr = [
    {
      id: "t1",
      date: 'JUL16',
  
      place:'DETROIT, MI',
  
      description:'DTE ENERGY MUSIC THEATRE'
    },
  
    {
      id: "t2",
      date: 'JUL19',
  
      place:'TORONTO,ON',
  
      description:'BUDWEISER STAGE'
    },
  
    {
        id: "t3",
        date: 'JUL22',
    
        place:'BRISTOW, VA',
    
        description:'JIGGY LUBE LIVE',
    },
  
    {
        id: "t4",
        date: 'JUL29',
    
        place:'PHOENIX, AZ',
    
        description:'JIGGY LUBE LIVE',
    },
    {
        id: "t5",
        date: 'AUG2',
    
        place:'LAS VEGAS, NV',
    
        description:'T-MOBILE ARENA',
    },
    {
        id: "t6",
        date: 'AUG7',
    
        place:'CONCORD, CA',
    
        description:'CONCORD PAVILION',
    },
  ];
const Home = () =>{
return(
<>

<Container fluid>
    <Row>
        <Col>
        <Navbar expand='lg' style={{backgroundColor:'gray' }}>
            <Button variant="outline-primary" size='lg'>Get Our Latest Album</Button>
            <Button > </Button>
  </Navbar>
        </Col>
    </Row>
</Container>
<Container className='mt-4'>
    <Row>
        <Col >
        <h2 className="text-center ">Tours</h2>
        </Col>
    </Row>
    
    <Row>
        <Col>
        <Table responsive>
        <tbody>
              {tourArr.map((arr) => {
                return (
                  <tr key={arr.id}>
                    <td>{arr.date}</td>
                    <td>{arr.place}</td>
                    <td>{arr.description}</td>
                    <td> <Button variant="primary" size="sm">
          BUY TICKETS
        </Button></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
    </Row>

</Container>

</>
);
}
export default Home;