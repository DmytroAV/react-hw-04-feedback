import PropTypes from 'prop-types';
import { ContainerBtn, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <ContainerBtn onClick={onLeaveFeedback}>
        <Button type="button" name="good">
          Good
        </Button>
        <Button type="button" name="neutral">
          Neutral
        </Button>
        <Button type="button" name="bad">
          Bad
        </Button>
      </ContainerBtn>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
