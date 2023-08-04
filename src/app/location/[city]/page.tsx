import React from 'react'
import InnerComponent from "../../components/InnerComponent";
import OuterComponent from "../../components/OuterComponent";
import { getLocalTimeData, getWeatherData, getLocation, getTimeFromTimeZone } from "../../api/methods"
export function generateMetadata({ params }: { params: { city: string } }) {
    return {
        title: `Weather in ${clean(params.city)}`
    }
}
function clean(city: string) {
    return city.replace("%20", " ");
}
export default async function Page({ params }: { params: { city: string } }) {
    const weatherData = await getWeatherData(params.city)
    const location = await getLocation(params.city);
    const timeData = getTimeFromTimeZone(location.timezone?.name);
    const data = {
        ...timeData,
        ...weatherData,
        city: clean(params.city),
        ...location,
    }
    return (
        <OuterComponent>
            <InnerComponent {...data} />
        </OuterComponent>
    )
}
