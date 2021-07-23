import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  display: flex;
  max-width: 300px;
  margin: 20px 0 50px 0;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  font-family: "Gordita";

  margin-bottom: 8px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 12px;
  color: #979797;
  font-weight: 400;
  margin-bottom: 32px;
  font-family: "Gordita";
`;

export const FieldName = styled.span`
  display: inline-flex;
  margin: 10px;

  h5 {
    font-weight: 500;
    font-size: 19px;
    color: #249cf2;
  }
`;
