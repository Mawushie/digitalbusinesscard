import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <a href="https://twitter.com/AfiMawushie" target="_blank">
        <img src="twitter.png" />
      </a>

      <a href="https://instagram.com/afi_mawushie" target="_blank">
        <img src="instagram.png" />
      </a>

      <a href="https://github.com/Mawushie" target="_blank">
        <img src="github.png" />
      </a>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 317px;
  height: 64px;
  background-color: #161619;

  img {
    margin-right: 24px;
  }
`;

const Button = styled.button``;

export default Footer;
