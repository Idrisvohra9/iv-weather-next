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

// export async function get
export const getCurrentLocation = async () => {
  const response = await fetch(
    `https://geolocation-db.com/json/${process.env.NEXT_PUBLIC_GEO_KEY}`,
    {
      method: "GET",
    }
  );
  // console.log(process.env.NEXT_PUBLIC_GEO_KEY)
  const data = await response.json();
  // console.log(data)
  return {
    city: data.city,
    state: data.state,
    country_name: data.country_name,
  };
};
export const getLocation = async (cityName: string) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${process.env.NEXT_PUBLIC_OPENCAGE_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const firstResult = data.results[0];
  return {
    country_name: firstResult.components.country,
    state: firstResult.components.state,
    timezone: firstResult.annotations.timezone
  };
};

export async function getWeatherWarning(state: string, warning: string) {
  const apiKey = "YOUR_NWS_API_KEY";
  const location = "New York"; // Replace 'New York' with the desired location

  // Fetch flood warnings
  fetch(
    `https://api.weather.gov/alerts/active?point=${encodeURIComponent(
      location
    )}`,
    {
      headers: {
        "User-Agent": "your-app-name", // Provide a user-agent header for identification (replace 'your-app-name' with your app's name)
        Accept: "application/geo+json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Process the data containing flood warnings
      const floodWarnings = data.features.filter(
        (feature: { properties: { event: string } }) =>
          feature.properties.event === "Flood Warning"
      );
      console.log(floodWarnings);
    })
    .catch((error) => {
      console.error("Error fetching flood warnings:", error);
    });
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
