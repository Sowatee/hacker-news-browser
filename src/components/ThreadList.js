import styled from 'styled-components';
import Thread from './Thread';
import { v4 } from 'uuid';


export default function ThreadList ({hits}) {


  if (hits.length > 0) {
    return (
      <Wrapper>
        {
          hits.map((thread) => {
            return <Thread key={v4()} {...thread}/>
          })
        }
      </Wrapper>
    );    
  } else {
    return (
      <Wrapper>
        <h2>No Matching Terms</h2>
      </Wrapper>
    );
  }


}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`