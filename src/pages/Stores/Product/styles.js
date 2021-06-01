import styled from 'styled-components';
import Form from '../../../components/Form';


export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const Head = styled.div``;

export const SearchContainer = styled(Form)`
display: flex;
margin-top: 30px;
width: auto;
height: 32px;
justify-content: right;
`;
export const Content =  styled.div`
display: flex;
flex-direction: column;
margin-left: 16px;  
`;