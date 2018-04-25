import React, { Component } from "react";
import styled from "styled-components";
import { Carousel, Icon } from "antd";
import "antd/lib/carousel/style/css";
import "antd/lib/icon/style/css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { images, onCarouselChange, activeImage } = this.props;

    let width = this.state.width;
    let height = this.state.height;
    let imageHeight = 0;

    if (width < 576) {
      imageHeight = height * 0.6;
    } else if (width < 768) {
      imageHeight = height * 0.7;
    } else if (width < 992) {
      imageHeight = height * 0.8;
    } else {
      imageHeight = height;
    }

    console.log(height, imageHeight);

    const Container = styled.div`
      width: 100%;
      position: relative;
    `;
    const ArrowContainer = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height: 100%;
      margin-left: 10%;
      z-index: 3;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `;
    const Arrow = styled.span`
      font-size: 4vmin;
      color: rgba(42, 17, 13, 0.7);
      border-radius: 50%;
      padding: 4px 12px;
      background: white;
      &:hover {
        cursor: pointer;
        color: rgba(42, 17, 13, 1);
        font-size: 4.2vmin;
        transition: all 0.5s;
      }
    `;

    const onChange = ix => {
      onCarouselChange(images[ix].id, ix);
    };

    const Image = styled.div`
      width: 100%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    `;
    const Thumbnail = styled.img`
      width: 40px;
      height: auto;
      max-height: 45px;
      &:hover {
        width: 45px;
        height: auto;
        max-height: 50px;
        cursor: pointer;
        transition: all 0.4s ease-out;
      }
    `;
    const ActiveThumbnail = styled.img`
      width: 45px;
      height: auto;
      max-height: 45px;
      &:hover {
        cursor: pointer;
      }
    `;

    /*
    // Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

*/

    const renderCarouselItems = () => {
      return images.map(i => (
        <div key={i.id}>
          <Image
            className="carousel-image"
            id={i.id}
            alt={i.categories[0]}
            key={i.id}
            //src={i.path}
            style={{
              backgroundImage: "url('" + i.path + "')",
              height: imageHeight
            }}
          />
        </div>
      ));
    };

    const renderCarouselThumbnails = dots => {
      return (
        <ul>
          {images.map((img, ix) => {
            return (
              <span
                key={img.id}
                id={img.id}
                onClick={e => {
                  this.refs.carousel.goTo(
                    images.findIndex(i => i.id == e.target.id)
                  );
                }}
              >
                {ix === activeImage ? (
                  <ActiveThumbnail
                    id={img.id}
                    alt={img.categories[0]}
                    src={img.path}
                  />
                ) : (
                  <Thumbnail
                    id={img.id}
                    alt={img.categories[0]}
                    src={img.path}
                  />
                )}
              </span>
            );
          })}
        </ul>
      );
    };

    const renderCarouselThumbnails1 = () => {
      return (
        <ul>
          {images.map(i => {
            <div
              key={i.id}
              id={i.id}
              onClick={e => onChange(images.indexOf(e.target.id))}
            >
              <Thumbnail alt={i.categories[0]} src={i.path} />
            </div>;
          })}
        </ul>
      );
    };

    return (
      <Container>
        <ArrowContainer>
          <Arrow onClick={() => this.refs.carousel.prev()}>
            <Icon type="double-left" />
          </Arrow>
          <Arrow onClick={() => this.refs.carousel.next()}>
            <Icon type="double-right" />
          </Arrow>
        </ArrowContainer>
        <Carousel
          ref="carousel"
          initialSlide={activeImage}
          afterChange={onChange}
          //autoplay
          draggable
          infinite={true}
          dots={false}
          //appendDots={renderCarouselThumbnails}
        >
          {renderCarouselItems()}
        </Carousel>
      </Container>
    );
  }
}

export default Gallery;
