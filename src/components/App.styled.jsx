import styled from '@emotion/styled';

export const AppBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const Text = styled.div`
  padding: 15px;
  text-align: center;
  font-size: 16px;
  color: red;
`;

export const ErrorMessage = ({ children }) => {
  return <Text>{children}</Text>
};