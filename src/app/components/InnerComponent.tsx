import React from "react";

interface HeaderProps {
  city: string;
  state: string;
  currentTime: string;
  date: string;
  subText: string;
  main?: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather?: [{
    main: string;
    description: string;
    icon: string;
  }];
  country_name: string;
}

const Header: React.FC<HeaderProps> = ({ city, state, currentTime, date, subText, main, weather, country_name }) => {
  if (!country_name || !state) {
    return <h1>
      Sorry, The location could not be found, the reason could be untraceable ip address. Or a request for a location that does not exist.
    </h1>
  }
  else {
    return (
      <>
        <h1 className="mb-8">
          Weather Report in {country_name || "India"}
        </h1>
        <div className="cardContainer z-[1]">
          <div className="card">
            <div className="time-card mb-8">
              <p className="time-text"><span>{currentTime}</span><span className="time-sub-text">{subText}</span></p>
              <p className="day-text">{date}</p>
              {
                subText === "AM" ?
                  <div className="container">
                    <div className="cloud front">
                      <span className="left-front"></span>
                      <span className="right-front"></span>
                    </div>
                    <span className="sun sunshine"></span>
                    <span className="sun"></span>
                    <div className="cloud back">
                      <span className="left-back"></span>
                      <span className="right-back"></span>
                    </div>
                  </div> :

                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" strokeWidth="0" fill="currentColor" stroke="currentColor" className="moon"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg>
              }
            </div>
            <h1 className="city">{state || "Gujarat"}, {city || "Ahmedabad"}</h1>
            <p className="weather">{weather?.[0].description}</p>

            <img src={`http://openweathermap.org/img/w/${weather?.[0].icon}.png`} alt="Weather API Icon" />
            <p className="temp">{main?.temp}°</p>
            <div className="minmaxContainer">
              <div className="min">
                <p className="minHeading">Min</p>
                <p className="minTemp">{main?.temp_min}°</p>
              </div>
              <div className="max">
                <p className="maxHeading">Max</p>
                <p className="maxTemp">{main?.temp_max}°</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;