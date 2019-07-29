import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import CreateCourtForm from './CreateCourtForm'
import {Carousel, Nav, Navbar, Button} from 'react-bootstrap'
export default class AllCourtsPage extends Component {

    state = {
        courts: [],
        newCourt : {
            gymName: '',
            address: '',
            numberOfPlayers: '',
            entryPrice: ''
        }
    }
    componentDidMount() {
        this.getAllCourts()
    }
    getAllCourts = () => {
        axios.get('/api/courts')
            .then((res) => {
                this.setState({courts: res.data})
            })
    }
   
    render() {

        let courtsList = this.state.courts.map((court) => {
            return (
                <div>
                <Link 
                id='text'
                key={court._id}
                to={`/courts/${court._id}`}
                >
                 <div className='chip'>
                   <img src='giphy.gif' width='96' height='96' />
                {court.gymName}
                </div>
               
                </Link>
                
            
                </div>

            )
        })
        return (
            <div>
               <Navbar style={{color: "#FA8320"}} variant="dark">
              <Navbar.Brand style={{color: "#FA8320"}} href="#home">I Got Next <i class="fas fa-basketball-ball"></i></Navbar.Brand>
               <Nav className="mr-auto">
               <Nav.Link style={{color: "#FA8320"}} href="/">Home</Nav.Link>
               <Nav.Link style={{color: "#FA8320"}} href="/courts">Courts</Nav.Link>
            </Nav>
          </Navbar>

            <br></br> 
            <br></br>
       
                <div className='wrapper'>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <hr></hr>
                </div>
                <h1>Open Courts/Parks <i class='far fa-bell'></i>: </h1>
             
                <div className='link'>
                
                <Link to={`/courts/create`} id='text'><Button style={{background: '#FA8320', borderColor: '#FA8320'}} variant="success">Create A Court <i class='fas fa-hands'></i></Button></Link>
                </div>
                <br />
                <h2>{courtsList}</h2>

 

                
  <Carousel interval={3000}>
  <Carousel.Item>
  <div class="video-size">
  <video playsinline='true' autoplay='true' muted='true' loop='true'>
        <source src='slow.mov' type='video/mp4' height='400' width='600'/>
      </video>
    </div>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="carousel"
      src="https://www.downtownmagazinenyc.com/wp-content/uploads/2018/03/SA13-Basketball_revG.jpg"
      alt="Third slide"
      height="600"
     width="1500"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div class="video-size">
  <video playsinline='true' autoplay='true' muted='true' loop='true'>
        <source src='Pexels.mp4' type='video/mp4' />
      </video>
    </div>
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>

  <img
      className="carousel"
      src="https://www.faburous.com/wp-content/uploads/2015/05/Small-basement-court.jpg"
      alt="Third slide"
      height="600"
     width="1500"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            </div>
        )
    }
}

