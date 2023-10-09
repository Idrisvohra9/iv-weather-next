import { DateTime } from "luxon";
export const getLocalTimeData = () => {
  const now = DateTime.now();
  return {
    currentTime: now.toLocaleString(DateTime.TIME_24_SIMPLE),
    date: now.toFormat("MMMM dd, yyyy"),
    subText: now.toFormat("a"),
  };
};

export function getTimeFromTimeZone(timezone: string) {
  // console.log(timezone);
  const now = DateTime.local().setZone(timezone);
  return {
    currentTime: now.toLocaleString(DateTime.TIME_24_SIMPLE),
    date: now.toFormat("MMMM dd, yyyy"),
    subText: now.toFormat("a"),
  };
}

export const getLocation = async (cityName: string) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${process.env.NEXT_PUBLIC_OPENCAGE_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const firstResult = data.results[0];
  return {
    country_name: firstResult.components.country,
    state: firstResult.components.state,
    timezone: firstResult.annotations.timezone,
  };
};

export async function getWeatherWarning(location: string, alertType: string) {
  const apiKey = process.env.NEXT_PUBLIC_ACCUWEATHER_KEY;
  let returnData: any | null;
  try {
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${location}`
    );
    const data = await response.json();

    if (data.length > 0) {
      const locationKey = data[1].Key;
      if (locationKey) {
        try {
          const response = await fetch(
            `http://dataservice.accuweather.com/alarms/v1/1day/${locationKey}?apikey=${apiKey}`
          );
          const data = await response.json();
          const internal = data[0].Alarms[0];
          // console.log(internal);
          const alarmType = internal.AlarmType;
          if (alarmType === alertType) {
            // console.log("similar");
            returnData = {
              date: data[0].Date,
              severity: internal.Value.Imperial.Value,
            };
          }
        } catch (error) {
          console.error("Error fetching weather alerts:", error);
        }
      }
    } else {
      console.log("Location not found.");
    }
  } catch (error) {
    console.error("Error fetching location data:", error);
  } finally {
    return returnData;
  }
}

export const getWeatherData = async (address: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error();
    const { main, weather } = await response.json();
    // console.log(main, weather);
    return { main, weather };
  } catch (error) {
    console.log(error);
  }
};
