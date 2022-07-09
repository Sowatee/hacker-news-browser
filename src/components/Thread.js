import styled from "styled-components";
import { MdArrowCircleUp, MdOutlineModeComment} from "react-icons/md";


export default function Thread() {

  return (
    <Wrapper>
      <h4>Lorem ipsum dolor sit amet.</h4>
      <footer>
        <div>
          <MdArrowCircleUp />
          <span>345</span>
        </div>
        <button>hide</button>
        <div>
          <MdOutlineModeComment />
          <span>300</span>
        </div> 
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  @media (min-width: 500px) {
    max-width: 500px;
  }
  width: 90vw;
  margin: auto;
  padding: .3rem 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;  
  border: 1px solid black;
  border-radius: .5rem;

  h4 {
    font-size: 1.2rem;
    margin-top: 0;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  footer {
    display: flex;
    gap: 3rem;

    div {
      display: flex;
      gap: .5rem;
    }
  }

  button {
    border: none;
    background: none;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: red;
    }
  }
`