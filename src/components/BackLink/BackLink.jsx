import { StyledLink } from './BackLink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ to }) => {
  return <StyledLink to={to}>Go back</StyledLink>;
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
};
