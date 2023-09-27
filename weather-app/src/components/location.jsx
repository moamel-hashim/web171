import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export default function Location(props) {
  const { name, country } = props
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faMapMarker} />
      </div>
      <Text>{`${name}, ${country}`}</Text>
    </>
  )
}

Location.propTypes = {
  name: PropTypes.any.isRequired,
  country: PropTypes.any.isRequired,
};
