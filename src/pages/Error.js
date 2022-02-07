import styled from "styled-components";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Wrapper>
      <div>
        <h1>404 NOT FOUND</h1>
        <h3>
          SORRY, WE CANNOT FIND A PAGE THAT PAGE, IF YOU THINK IT IS A MISTAKE
          YOU ALWAYS CAN REACH OUT TO US
        </h3>
        <Link to="/" className="btn">BACK HOME</Link>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;

export default Error;
