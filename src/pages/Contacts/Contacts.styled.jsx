import styled from '@emotion/styled';
import img from 'images/img';
const { t2 } = img;

export const Wrapper = styled.div`
  background-image: url(${t2});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Text = styled.p`
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 18px;
  text-align: justify;
  padding-top: 25px;
  padding-bottom: 25px;
  width: 280px;
  font-weight: 800;
`;

export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexIcon = styled.div`
  display: flex;
  flex-direction: column;
  & svg {
    width: 20px;
    height: 20px;
    margin-bottom: 8px;
  }
`;

export const Link = styled.a`
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 18px;
  margin-left: 8px;
  font-weight: 800;
`;
