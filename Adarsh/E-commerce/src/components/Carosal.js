import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import img1 from  '../assets/image/img1.jpg'
import img2 from  '../assets/image/img2.jpg'
import img3 from  '../assets/image/img3.jpg'

const Para=styled.p`
    color: black;
`
const Para2=styled.h3`
    color: black;
`

function Carosal() {
  return (
    <Carousel mt-5>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          height="450px"
        />
        <Carousel.Caption>
          <Para2>Women Cloths</Para2>
          <Para>Newly launch Dresses</Para>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          height="450px"
        />
        <Carousel.Caption>
          <Para2>Kids Cloths</Para2>
          <Para>Newly launch Dresses</Para>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          height="450px"
        />
        <Carousel.Caption>
          <Para2>Mens Cloths</Para2>
          <Para> Newly launch Dresses </Para>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosal;