import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";



export default function Navbar () {
  return (
    <Wrapper>
      <h1>Hacker News Browser</h1>
      <a href="https://github.com/Sowatee/hacker-news-browser" target="_blank"><AiOutlineGithub size="2rem"/></a>
    </Wrapper>
  );
}

const Wrapper = styled.nav`

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }

  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ccc;
  -webkit-box-shadow: 2px 1px 21px 10px rgba(0,0,0,0.42); 
  box-shadow: 2px 1px 21px 10px rgba(0,0,0,0.42);

  a {
    color: black;
  }
`