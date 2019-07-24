import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Carousel} from 'react-bootstrap'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>I G🏀T NE⛓️T </h1>
  <Link to='/courts'>
  <Carousel>
  <Carousel.Item>
    <img
      className="carousel"
      src="http://sfwallpaper.com/images/basketball-court-hd-wallpapers-1.jpg"
      alt="First slide"
      height="600"
     width="1000"
    />
    <Carousel.Caption>
      <h3>Click To Join</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel"
      src="https://www.downtownmagazinenyc.com/wp-content/uploads/2018/03/SA13-Basketball_revG.jpg"
      alt="Third slide"
      height="600"
     width="1000"
    />

    <Carousel.Caption>
    <h3>Click To Join</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel"
      src="https://www.faburous.com/wp-content/uploads/2015/05/Small-basement-court.jpg"
      alt="Third slide"
      height="600"
     width="1000"
    />

    <Carousel.Caption>
    <h3>Click To Join</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="carousel"
      src="https://static2.mansionglobal.com/production/media/article-images/fd9fbab54ecce5120170b249ef89791d/large_Sky_Basketball_Court.jpg?width=620&height=413"
      alt="First slide"
      height="600"
     width="1000"
    />
    <Carousel.Caption>
      <h3>Click To Join</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Link>
            </div>
        )
    }
}
