import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: .4rem;
`;

export const FormInput = styled.input`
  display: flex;
  border: 1px solid grey;
  border-radius: 5%;
  cursor: text;
  &:hover {
    background: #EEE;
    transition: .5s;
  }
  &:focus {
    border: 1px solid black;
  }
  
`;

export const FormTitle = styled.h4`
  font-size: 1.6rem;
  width: 15rem;
  min-width: 11rem;
`;