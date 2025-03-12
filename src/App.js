import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const animation = keyframes`
0% {
transform: rotate(0deg);
border-radius: 0px;
}
50%{
  transform: rotate(360deg);
  border-radius: 100px;
}
100%{
  transform: rotate(0deg);
border-radius: 0px;
}
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  width: 200px;
  height: 200px;
  animation: ${animation} 1s linear infinite;
  span {
    font-size: 40px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>Hi</span>
      </Box>
    </Wrapper>
  );
}

export default App;
