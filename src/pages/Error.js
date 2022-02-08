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
        <Link to="/" className="btn">
          BACK HOME
        </Link>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f3f4f6;
  text-align: center;
  h1 {
    font-size: 8rem;
  }
  h3 {
    margin-bottom: 1.5rem;
  }
  .btn{
    text-decoration: none;
  }
`;

export default Error;
