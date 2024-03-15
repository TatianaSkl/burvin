import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background: #f6f6f6;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Button = styled.button`
  & svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.colors.black};
    @media (min-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }
`;
