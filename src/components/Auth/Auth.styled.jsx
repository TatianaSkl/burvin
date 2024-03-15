import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  padding-bottom: 20px;
  padding-top: 8px;
  border-radius: 0 0 6px 6px;
`;
