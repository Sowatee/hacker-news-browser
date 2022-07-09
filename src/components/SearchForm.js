import React, {useState} from 'react';
import styled from "styled-components"

export default function SearchForm ({search}) {
  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <input type="text" name="search" onChange={(e) => search(e.target.value)} placeholder="Search..."/>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  margin-top: 5rem;
  text-align: center;
  margin-bottom: 3rem;

  input {
    width: 90%;
    height: 2rem;
    text-transform: uppercase;
    letter-spacing: .2rem;
    border: 1px solid black;
    border-radius: .5rem;

    &:focus {
      outline: none;
    }
  }
`