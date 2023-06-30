import PropTypes from 'prop-types';
import { ContainerStat, Item, TitleSpan, ValueSpan } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ContainerStat>
      <Item>
        <TitleSpan>Good :</TitleSpan>
        <ValueSpan>{good}</ValueSpan>
      </Item>
      <Item>
        <TitleSpan>Neutral :</TitleSpan>
        <ValueSpan>{neutral}</ValueSpan>
      </Item>
      <Item>
        <TitleSpan>Bad :</TitleSpan>
        <ValueSpan>{bad}</ValueSpan>
      </Item>
      <Item>
        <TitleSpan>Total :</TitleSpan>
        <ValueSpan>{total}</ValueSpan>
      </Item>
      <Item>
        <TitleSpan>Positive feedback :</TitleSpan>
        <ValueSpan>{positivePercentage} %</ValueSpan>
      </Item>
    </ContainerStat>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
