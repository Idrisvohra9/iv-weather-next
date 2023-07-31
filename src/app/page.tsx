import React from 'react'
import InnerComponent from "./components/InnerComponent";
import OuterComponent from "./components/OuterComponent";
import { getLocalTimeData, getCurrentLocation, getWeatherData } from "./api/methods"
export default async function Page() {
  const currentLocation = await getCurrentLocation();
  const weatherData = await getWeatherData(currentLocation.city);
  const data = {
    ...getLocalTimeData(),
    ...currentLocation,
    ...weatherData
  }
  return (
    <OuterComponent>
      <InnerComponent {...data}/>
    </OuterComponent>
  )
}
