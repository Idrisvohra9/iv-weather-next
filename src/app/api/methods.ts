export const getLocalTimeData = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const amPm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours || 12; // If hours is 0, make it 12

  const dayOfWeek = daysOfWeek[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  return {
    currentTime: `${hours}:${minutes}`,
    date: `${dayOfWeek}, ${month} ${date}`,
    subText: amPm,
  };
};

export async function getTimeFromCity(country: string, city: string) {
  try {
    console.log(encodeURIComponent(country));
    // Fetch time data from TimezoneDB API
    const timezoneResponse = await fetch(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=${
        process.env.NEXT_PUBLIC_TIMZEONE_KEY
      }&format=json&by=zone&zone=${country}/${encodeURIComponent(city)}`
    );
    if (!timezoneResponse.ok) {
      throw new Error("Failed to fetch time data");
    }
    const data = await timezoneResponse.json();
    console.log(data);
    const currentTime = new Date(data.formatted);
    const timeString = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const dateString = currentTime.toLocaleDateString([], {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    return {
      currentTime: timeString,
      date: dateString,
      subText: currentTime.getHours() >= 12 ? "PM" : "AM",
    };
  } catch (error) {
    console.error("Error fetching data:");
    return null;
  }
}

// export async function get
export const getCurrentLocation = async () => {
  const response = await fetch(
    `https://geolocation-db.com/json/${process.env.NEXT_PUBLIC_GEO_KEY}`
  );
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
  // console.log("in Get location");
  // console.log(firstResult);
  return {
    country_name: firstResult.components.country,
    state: firstResult.components.state,
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
  } catch (error) {}
};
