import { Box, Center } from "@chakra-ui/react";
import Location from "./location";
import PropTypes from 'prop-types';
import MainContent from './mainContent';
import Footer from "./footer";
export default function Weather(props) {
  const {data} = props;
  console.log(data)
  const sysData = data.sys;
  const sysCountry = sysData.country;
  const temp = data.main.temp;
  const description = data.weather[0].description;
  const windSpeed = data.wind.speed;
  const humidity = data.main.humidity;
    return (
      <>
        <div className="background"></div>
        <Center  zIndex={"1"} position={'relative'} h={'100vh'}>
          <Box p={"5"} background={"whitesmoke"} width={"15%"} borderRadius={'10px'} boxShadow={"1px 1px 20px 5px black"}>
            <Location name={data.name}
                      country={sysCountry}/>
            <MainContent temp={temp}
                          description={description}/>
            <Footer  windSpeed={windSpeed}
                      humidity={humidity}/>
          </Box>
        </Center>
      </>
    )
  }

Weather.propTypes = {
  data: PropTypes.any.isRequired,
};
