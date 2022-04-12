import React from "react";
import styled from "styled-components";

const Info = () => {
  return (
    <div>
      <div>
        {" "}
        <Name>Mawushie Honyah</Name>
        <Work>Frontend Developer</Work>
        <ButtonContainer>
          <Button>
            <img src="email.png" />
            <a href="mailto: afi.mawushie.honyah@gmail.com"> Email</a>
          </Button>

          <Button linkedIn>
            <img src="linkedin.png" />
            <a
              href="https://www.linkedin.com/in/mamh-517229204/"
              target="_blank"
            >
              LinkedIn
            </a>
          </Button>
        </ButtonContainer>
      </div>
      <div>
        <About>About</About>

        <Paragraph>
          I am a Frontend Developer well versed in React. I am very enthusiatic
          about learning new things and constantly improving on my skills.
        </Paragraph>
      </div>

      <div>
        <About>Interests</About>

        <Paragraph>
          Food, Music (I love Karaoke), Movies, Travel and working out...
          (sometimes 🤭).
        </Paragraph>
      </div>
    </div>
  );
};

const Name = styled.h3`
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 5px;
`;

const Work = styled.p`
  font-weight: 400;
  font-size: 12.8px;
  line-height: 15px;
  text-align: center;
  color: #f3bf99;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 33px;
`;

const Button = styled.button`
  /* Adapt the colors based on type prop */
  background: ${(props) => (props.linkedIn ? "#5093e2" : "white")};
  color: ${(props) => (props.linkedIn ? "white" : "#374151")};

  width: 115px;
  height: 34px;
  border: none;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 13px 9px 11px;
  margin-right: 17px;

  img {
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    color: ${(props) => (props.linkedIn ? "white" : "black")};
  }
`;

const About = styled.h3`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const Paragraph = styled.p`
  width: 247px;
  height: 61px;
  margin-top: auto;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #dcdcdc;
  margin-bottom: 30px;
`;

export default Info;
