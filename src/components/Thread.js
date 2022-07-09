import styled from "styled-components";
import { MdArrowCircleUp, MdOutlineModeComment} from "react-icons/md";


export default function Thread({title, author, num_comments, points, url, objectID}) {

  return (
    <Wrapper>
      <h4>{title}</h4>
      <footer>
        <div>
          <MdArrowCircleUp />
          <span>{points}</span>
        </div>
        <div>
          <MdOutlineModeComment />
          <a className="comments" href={`https://news.ycombinator.com/item?id=${objectID}`} target="_blank">{num_comments}</a>
        </div>
        <div>
          <a href={url || `https://news.ycombinator.com/item?id=${objectID}`} target="_blank">read more</a>
        </div> 
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  @media (min-width: 500px) {
    max-width: 500px;
  }
  width: 80vw;
  height: 15vh;
  margin: auto;
  padding: .5rem 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;  
  border: 1px solid black;
  border-radius: .5rem;

  h4 {
    font-size: 1.2rem;
    margin-top: 0;
  }

  footer {
    display: flex;
    justify-content: space-evenly;
    gap: 3rem;

    div {
      display: flex;
      gap: .5rem;
    }

    .comments {
      color: black;
    }

    a {
      color: blue;
      text-transform: capitalize;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`