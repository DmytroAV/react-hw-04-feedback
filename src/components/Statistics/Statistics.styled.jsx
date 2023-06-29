import styled from 'styled-components';

export const ContainerStat = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 20px;
  padding: 0 20px;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 5px;
  border-bottom: 1.5px solid #ddd;
`;

export const TitleSpan = styled.span`
  font-size: 16px;
  font-style: italic;
`;

export const ValueSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  justify-self: center;
`;
