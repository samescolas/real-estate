import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import "antd/lib/button/style/css";

const Title = ({ address, city, state }) => {
  const Container = styled.div`
    height: 60px;
    width: 100%;
    background-color: #fafafa;
    position: fixed;
    top: 0;
    left: 0;
    font-family: "Raleway", sans-serif;
    font-size: 1.8vmin;
    color: #2e2e2e;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    z-index: 100;
    box-shadow: 0px 0px 2px #333;
  `;
  const City = styled.h3`
    display: inline;
  `;
  const State = styled.h3`
    display: inline;
  `;

  return (
    <Container>
      <h1>{address}</h1>
      <div>
        <a href="#film">
          <Button type="primary" icon="play-circle">
            Property Film
          </Button>
        </a>
      </div>
    </Container>
  );
};

export default Title;
