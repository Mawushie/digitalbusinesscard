import "./App.css";
import styled from "styled-components";
import Photo from "./components/Photo";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Container>
        <InnerContainer>
          <Photo />
          <Info />
          <Footer />
        </InnerContainer>
      </Container>
    </div>
  );
}

const Container = styled.div`
  min-width: 550px;
  height: 868px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background: #23252c;
`;

const InnerContainer = styled.div`
  width: 317px;
  background-color: #1a1b21;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
