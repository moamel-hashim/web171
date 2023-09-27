import { Box, Center } from "@chakra-ui/react";
import Location from "./location";
import PropTypes from 'prop-types';

export default function Background(props) {
  const {data} = props;
  console.log(data)
  const sysData = data.sys;
  const sysCountry = sysData.country;
  console.log(sysCountry);
    return (
      <>
        <div className="background"></div>
        <Center backgroundColor={"whitesmoke"} zIndex={"1"} position={'relative'}>
          <Box p={"5"} maxW={"320px"} borderWidth={"1px"}>
            <Location name={data.name}
                      country={sysCountry}/>
          </Box>
        </Center>
      </>
    )
  }

Background.propTypes = {
  data: PropTypes.any.isRequired,
};
