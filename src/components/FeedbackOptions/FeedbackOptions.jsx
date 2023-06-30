import PropTypes from 'prop-types';
import { FormFeedback, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ onChange }) {
  return (
    <>
      <FormFeedback onClick={onChange}>
        <Button type="button" name="good">
          Good
        </Button>
        <Button type="button" name="neutral">
          Neutral
        </Button>
        <Button type="button" name="bad">
          Bad
        </Button>
      </FormFeedback>
    </>
  );
}

FeedbackOptions.propTypes = {
  onChange: PropTypes.func.isRequired,
};
