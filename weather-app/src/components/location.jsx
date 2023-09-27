import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Text, Flex } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export default function Location(props) {
  const { name, country } = props
  return (
    <>
    <Flex alignItems={'baseline'} gap={'1rem'}>
      <div>
        <FontAwesomeIcon icon={faMapMarker} />
      </div>
      <Text>{`${country}, ${name}`}</Text>
    </Flex>
    </>
  )
}

Location.propTypes = {
  name: PropTypes.any.isRequired,
  country: PropTypes.any.isRequired,
};
