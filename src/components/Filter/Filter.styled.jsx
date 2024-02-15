import styled from '@emotion/styled';

export const FormFilter = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  gap: 8px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
    gap: 12px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 32px;
    gap: 16px;
  }
`;

export const WrapperView = styled.div`
  width: 174px;
  margin-top: 4px;
  @media (min-width: 768px) {
    width: 224px;
    margin-top: 6px;
  }
  @media (min-width: 1200px) {
    margin-top: 8px;
  }
`;

export const WrapperSize = styled.div`
  width: 95px;
  margin-top: 4px;
  @media (min-width: 768px) {
    width: 125px;
    margin-top: 6px;
  }
  @media (min-width: 1200px) {
    margin-top: 8px;
  }
`;

export const LabelFilter = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 128.571%;
`;

export const SearchButton = styled.button`
  padding: 14px 24px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.grey};
  font-size: 14px;
  font-weight: 600;
  line-height: 142.857%;
  box-shadow: ${props => props.theme.shadows.small};
  transition-property: transform, box-shadow, background-color, color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.medium};
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
  @media (min-width: 768px) {
    margin-top: 26px;
    padding: 14px 44px;
  }
`;

export const customStyles = {
  control: provided => ({
    ...provided,
    backgroundColor: '#F7F7FB',
    borderColor: '#F7F7FB',
    borderRadius: '14px',
    height: '48px',
    color: '#121417',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '111.111% ',
    paddingLeft: '10px',
    '@media screen and (min-width: 768px)': {
      fontSize: '18px',
    },
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '14px',
    padding: '4px 8px 14px 18px',
  }),
  menuList: provided => ({
    ...provided,
    '::-webkit-scrollbar': {
      width: '8px',
      height: '130px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#1214170D',
      borderRadius: '10px',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: 'transparent',
    color: state.isSelected ? '#121417' : 'rgba(18, 20, 23, 0.20)',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '125%',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#121417',
    cursor: 'pointer',
    paddingRight: '14px',
    transform: state.isFocused ? 'rotate(180deg)' : null,
  }),
  indicatorSeparator: base => ({
    ...base,
    display: 'none',
  }),

  placeholder: base => ({
    ...base,
    color: '#121417',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '111.111% ',
    '@media screen and (min-width: 768px)': {
      fontSize: '18px',
    },
  }),
};
