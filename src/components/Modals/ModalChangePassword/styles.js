import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: -5px;
  font-size: 14px;
  margin-left: 1rem;
  font-weight: 600;
`

export const InputField = styled.input`
  background: ${({ theme }) => theme.colors.background};
  height: 50px; width: 100%;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 24px;
  padding: 0 10px;
`