import { Text, Center } from "@chakra-ui/react";
import Lottie from 'react-lottie-player';
import * as cloudy from '../assets/cloudyAnimation.json';
import PropTypes from 'prop-types';


export default function MainContent(props) {
  const {temp, description} = props;

  function kelvinToFahrenheit(temp) {
    const value = `${Math.trunc((temp - 273.15) * 9 / 5 + 32)} ℉`;

    return value;
  }

  return (
    <>
    <Center>
      <Lottie loop animationData={cloudy} play/>
    </Center>
    <Center display={'block'} textAlign={"center"}>
      <Text>{kelvinToFahrenheit(temp)}</Text>
      <Text>{description}</Text>
    </Center>
    </>
  )
}

MainContent.propTypes = {
  temp: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
};
