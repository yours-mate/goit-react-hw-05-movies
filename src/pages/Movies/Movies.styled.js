import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const SearchBar = styled.input`
  display: inline-block;
  width: 300px;
  height: 30px;
  font-size: 20px;
  padding: 0px;
  border-width: 1px;
`;

export const SearchBtn = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: antiquewhite;

  :hover {
    background-color: lightcoral;
  }
`;
