import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import eberhardImg from '../assets/eberhard.jpg';
import steinImg from '../assets/stein.jpg';
import andyImg from '../assets/andy.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
            <Carousel.Item>
              <img 
              className='d-block w-100'
              src={ eberhardImg }
              alt="Eberhard"
              />

             <Carousel.Caption>
              <h3>Eberhard image</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, assumenda?
              </p>
             </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
              <img 
              className='d-block w-100'
              src={ steinImg }
              alt="Stein"
              />

             <Carousel.Caption>
              <h3>Stein image</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, velit?
              </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img 
              className='d-block w-100'
              src={ andyImg }
              alt="Stein"
              />

             <Carousel.Caption>
              <h3> Andy image</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, velit?
              </p>
              </Carousel.Caption>
            </Carousel.Item>

             
      </Carousel>
    )
  }
}
