import styled from '@emotion/styled';

export const WrapperMobil = styled.div`
  margin-bottom: 16px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const WrapperTablet = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 200px;
  background-color: transparent;
  border-radius: 3px;
  overflow: hidden;
`;
export const ButtonForm = styled.button`
  display: inline-block;
  margin-left: auto;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;
export const ButtonLabel = styled.span`
  & svg {
    width: 14px;
    height: 14px;
    fill: ${props => props.theme.colors.black};
    @media (min-width: 768px) {
      width: 22px;
      height: 22px;
    }
  }
`;
export const InputForm = styled.input`
  background-color: transparent;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${props => props.theme.fontSizes.small};
  border-color: transparent;
  border-bottom: 1px solid rgba(239, 237, 232, 0.6);
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: ${props => props.theme.fontSizes.small};
    @media (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.medium};
    }
  }
  @media (min-width: 768px) {
    border: none;
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;
