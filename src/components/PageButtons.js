import styled from 'styled-components';
import { ImArrowRight, ImArrowLeft } from "react-icons/im";


export default function PageButtons({ handlePage }) {

  return (
    <Wrapper>
      <div>
        <ImArrowLeft onClick={() => handlePage("prev")} size="40px" />
        <p>prev</p>
      </div>
      <div>
        <ImArrowRight onClick={() => handlePage("next")} size="40px" />
        <p>next</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem;
  text-align: center;
`