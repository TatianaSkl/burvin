import styled from '@emotion/styled';
import img from 'images/img';
const { bgnews } = img;

export const BgNews = styled.div`
  text-align: center;
  background-image: url(${bgnews});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  line-height: 3em;
  color: #fff;
  font-size: 3em;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  @media (min-width: 768px) {
    font-size: 4.285714em;
  }
  @media (min-width: 1200px) {
    line-height: 3.6666667em;
  }
`;

export const ListNews = styled.ul`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const ItemNews = styled.li`
  height: 400px;
  width: 390px;
`;

export const TextNews = styled.p`
  margin-top: 6px;
  text-align: justify;
`;
