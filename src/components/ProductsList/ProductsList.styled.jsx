import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    gap: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;
