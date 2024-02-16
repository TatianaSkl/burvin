import styled from '@emotion/styled';

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
    width: 22px;
    height: 22px;
    fill: ${props => props.theme.colors.black};
  }
`;
export const InputForm = styled.input`
  background-color: transparent;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;
