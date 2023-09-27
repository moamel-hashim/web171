import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Text, Flex, Box } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export default function Location(props) {
  const { name, country } = props
  return (
    <>
    <Flex alignItems={'baseline'} gap={'0.5rem'} p={"5"}>
        <Box fontSize={"1.1rem"} color={"#974d4d"}>
        <FontAwesomeIcon icon={faMapMarker} />
      </Box>
      <Text fontSize={"1.1rem"}>{`${country}, ${name}`}</Text>
    </Flex>
    </>
  )
}

Location.propTypes = {
  name: PropTypes.any.isRequired,
  country: PropTypes.any.isRequired,
};
