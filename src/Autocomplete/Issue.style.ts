import styled from 'styled-components';

type WrapperProps = {
  selected: boolean
};

export const Wrapper = styled.li<WrapperProps>`
  text-align: left;
  padding: 12px 24px;
  border-bottom: 1px solid #dadce0;
  outline: none;
  ${({ selected }) => selected && 'background-color: #f6f8fa;'}

  p {
    margin: 0 0 10px 0;
  }
`;

type LabelProps = {
  bgColor: string
};

export const Label = styled.span<LabelProps>`
  background-color: ${({ bgColor }) => `#${bgColor}`};
  margin-left: 5px;
  padding: 3px 5px;
  font-size: 10px;
  color: white;
  font-weight: bold;
  border-radius: 3px;
`;