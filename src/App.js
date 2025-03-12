import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 15px;
  border: 0;
`;
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Btn>Login</Btn>
      <Btn as="a" href="/">
        Login
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
