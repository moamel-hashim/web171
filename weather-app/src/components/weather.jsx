import { Box, Center } from "@chakra-ui/react";
import Location from "./location";
import PropTypes from 'prop-types';
import MainContent from './mainContent';
export default function Weather(props) {
  const {data} = props;
  console.log(data)
  const sysData = data.sys;
  const sysCountry = sysData.country;
  const temp = data.main.temp;
  const description = data.weather[0].description;
  console.log(description);
    return (
      <>
        <div className="background"></div>
        <Center backgroundColor={"none"} zIndex={"1"} position={'relative'} h={'100vh'}>
          <Box p={"5"} maxW={"320px"} borderWidth={"1px"} background={"whitesmoke"}>
            <Location name={data.name}
                      country={sysCountry}/>
            <MainContent temp={temp}
                          description={description}/>
          </Box>
        </Center>
      </>
    )
  }

Weather.propTypes = {
  data: PropTypes.any.isRequired,
};
