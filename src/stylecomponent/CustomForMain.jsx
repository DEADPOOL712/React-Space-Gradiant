import styled, { css, keyframes } from "styled-components";

const translateAnimation = keyframes`
  0% {
    transform:translateX(-150px);
  }
  40%{
    transform: translateX(100px);
  }
  to {
    transform: translateX(0px);
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => props.minH};
  width: ${(props) => props.width};
  flex-direction: ${(props) => props.fdirection};
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap};
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    padding-bottom: 7px;
    gap: 1rem;
  }
`;
// flex-direction: column;

export const H1 = styled.h1`
  color: #b37c40;
  font-family: Playfair Display;
  font-size: ${(props) => props.font};
  font-weight: ${(props) => props.weight};
  max-width: ${(props) => props.width};
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 4rem;
  }
`;

export const P = styled.p`
  color: #f6f4f0;
  font-family: "Inter", sans-serif;
  font-size: ${(props) => props.font};
  font-weight: ${(props) => props.weight};
  letter-spacing: ${(props) => props.letterspacing};
  opacity: ${(props) => props.opacity};
`;
export const HR = styled.hr`
  width: 10rem;
  color: #b37c40;
  margin: 0 0 3rem 0;
  animation: ${translateAnimation} 1s;
`;

export const data = () => {
  console.log("This is test function use for font testing of data");
};
