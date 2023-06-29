import PropTypes from 'prop-types';
import { ContainerDiv, Message } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <ContainerDiv>
      <Message>{message}</Message>
    </ContainerDiv>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
