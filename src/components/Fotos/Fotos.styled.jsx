import styled from '@emotion/styled';

export const ImageItem = styled.img`
  width: auto;
  max-width: 100%;
  max-height: 100%;
  padding: 40px 0 40px;
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ArticleLabel = styled.div`
  position: absolute;
  top: 42px;
  left: 12px;

  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;

  font-size: 18px;
`;
