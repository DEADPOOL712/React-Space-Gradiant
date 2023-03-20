import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) => props.border};
  background-color: ${(props) => props.bgColor};
  color: #f8f4f0;
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-family: inter;
  font-weight: 600;
  font-size: 0.625rem;
  line-height: 3.5rem;
  letter-spacing: 0.175rem;
  cursor: pointer;
`;

export const CardTitle = styled.h1`
  margin:${(props) => props.margin};
  padding:${(props) => props.padding}
  font-size: 1.75em;
  color: ${(props) => props.h1color};
  font-family: inter;
  line-height: 1;
`;
