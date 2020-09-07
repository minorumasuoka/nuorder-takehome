import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  position: relative;
`;

export const SearchBox = styled.input`
  margin-top: 50px;
  border: 1px solid #dadce0;
  padding: 14px 20px;
  font-size: 18px;
  width: 100%;
  outline: none;
`;

export const Issues = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 500px;
  overflow: auto;
  position: absolute;
  border: 1px solid #dadce0;
  border-top: none;
`;
