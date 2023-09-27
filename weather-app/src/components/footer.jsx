import { Text, Box,} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

export default function Footer(props) {
  const {humidity, windSpeed} = props;
  return (
    <Box display={"flex"} alignItems={"baseline"} justifyContent={"space-around"}>
      <Box>
        <FontAwesomeIcon icon={faWater} />
      </Box>
      <Box>
        <Text fontSize={"1.1rem"}>{`${humidity}%`}<br /><Text fontSize={"0.8rem"} margin={"0"}> Humidity</Text></Text>
      </Box>
      <Box>
        <FontAwesomeIcon icon={faWind}/>
      </Box>
      <Box>
        <Text fontSize={"1.1rem"}>{`${windSpeed} km/h`}<br/> <Text margin={"0"} fontSize={"0.8rem"}>Wind Speed</Text></Text>
      </Box>
    </Box>
  )
}

Footer.propTypes = {
  humidity: PropTypes.any.isRequired,
  windSpeed: PropTypes.any.isRequired,
};
