import PropTypes from 'prop-types';
import { Container, Heading } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
