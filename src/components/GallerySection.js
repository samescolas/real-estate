import React, { Component } from "react";
import styled from "styled-components";

import Gallery from "./Gallery";
import TagList from "./TagList";

import { Row, Col } from "antd";
import "antd/lib/grid/style/css";

class GallerySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: {
        id: 0,
        ix: 0
      },
      selectedTags: ["View All Photos"],
      filteredImages: props.images,
      tags: props.images
        /* Map to list of arrays: [['a', 'b', 'c'], ['b', 'd'], [...]] */
        .map(i => i.categories)
        /* Combine arrays into one array: ['a', 'b', 'c', 'b', 'd'] */
        .reduce((i, acc) => [...acc, ...i])
        /* Sort array: ['a', 'b', 'b', 'c', 'd'] */
        .sort()
        /* Remove duplicates: ['a', 'b', 'c', 'd'] */
        .filter((v, i, a) => i === 0 || v !== a[i - 1])
    };
  }

  filterImages = tags => {
    if (tags[0] === "View All Photos") {
      return this.props.images;
    }
    return this.props.images.filter(img => {
      for (var i = 0; i < tags.length; i++) {
        if (img.categories.includes(tags[i])) {
          return true;
        }
      }
      return false;
    });
  };

  selectTag = tag => {
    let newImgs = this.filterImages([tag]);
    this.setState({
      selectedTags: [tag],
      activeImage: { id: newImgs[0].id, ix: 0 },
      filteredImages: newImgs
    });
  };

  unselectTag = tag => {
		let newTags = ["View All Photos"];
    let newImgs = this.filterImages(newTags);
    this.setState({
      selectedTags: newTags,
      activeImage: { id: newImgs[0].id, ix: 0 },
      filteredImages: newImgs
    });
  };

  onChange = (id, ix) => {
    this.setState({ activeImage: { id, ix } });
  };

  render() {
    const { images } = this.props;
    /* const Container = styled.div`
      width: 100%;
      height: 80vh;
      z-index: -2;
      display: flex;
      flex-direction: row;
      margin-top: 20px;
    `;
    const Details = styled.div`
      width: 18%;
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 10vh 2.5% 0 2.5%;
    `;*/

    return (
      <React.Fragment>
        <Row style={{ paddingTop: "10px" }}>
          <Col xs={24}>
            <Gallery
              images={this.state.filteredImages}
              onCarouselChange={this.onChange}
              activeImage={this.state.activeImage.ix}
            />
          </Col>
          <Col xs={24} className="tagList">
            <TagList
              tags={this.state.tags}
              activeTags={images[this.state.activeImage.id].categories}
              selectedTags={this.state.selectedTags}
              selectTag={this.selectTag}
              unselectTag={this.unselectTag}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default GallerySection;
