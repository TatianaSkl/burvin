import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 16px;
  }
`;
