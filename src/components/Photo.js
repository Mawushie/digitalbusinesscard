import React from "react";
import styled from "styled-components";

const Photo = () => {
  return (
    <div>
      <Container>
        <img src="mawushie.png" />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  width: 317px;
  height: 317px;
  background-color: lightblue;

  img {
    width: 317px;
    height: 317px;
    object-fit: cover;
  }
`;

export default Photo;
