import React from "react";
import styled from "styled-components";

const Details = ({ details }) => {
  const Container = styled.div`
    width: 100%;
    padding-top: 2%;
  `;

  const renderDetails = () => {
    return details.map((d, i) => <p key={i}>{d}</p>);
  };

  return (
    <Container>
      <h2>The Story</h2>
      {renderDetails()}
    </Container>
  );
};

export default Details;
