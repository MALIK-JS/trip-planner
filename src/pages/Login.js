import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <h1>TRIP PLANNER</h1>
      <button className="btn" onClick={loginWithRedirect}>
        LOGIN / SIGN UP
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  text-align: center;
  margin-top: 6rem;
  h1 {
    font-size: 6rem;
  }
`;
export default Login;
