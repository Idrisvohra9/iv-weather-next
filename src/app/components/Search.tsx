"use client"
import Link from 'next/link';
import React, { useState, ChangeEvent } from 'react';

interface Props {
  setLocation?: (newLocation: string) => void
}
const SearchComponent: React.FC<Props> = ({ setLocation }) => {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [showList, setShowList] = useState(true);
  // Dummy search suggestions (replace with your real search data)
  const cityNames = [
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Sydney",
    "Berlin",
    "Rome",
    "Beijing",
    "Cairo",
    "Moscow",
    "Delhi",
    "Rio de Janeiro",
    "Toronto",
    "Amsterdam",
    "Bangkok",
    "Dubai",
    "Singapore",
    "Istanbul",
    "Los Angeles",
    "Chicago",
    "Mumbai",
    "Madrid",
    "Seoul",
    "Barcelona",
    "Vienna",
    "Athens",
    "Stockholm",
    "Buenos Aires",
    "Lisbon",
    "Prague",
    "Helsinki",
    "Oslo",
    "Copenhagen",
    "Warsaw",
    "Brussels",
    "Zurich",
    "Geneva",
    "Venice",
    "Florence",
    "Munich",
    "Sao Paulo",
    "Rio de Janeiro",
    "Johannesburg",
    "Cape Town",
    "Melbourne",
    "Auckland",
    "Wellington",
    "Vancouver",
    "Montreal",
    "Edinburgh",
    "Glasgow",
    "Budapest",
    "Krakow",
    "St. Petersburg",
    "Havana",
    "San Francisco",
    "Seattle",
    "Miami",
    "Houston",
    "Dallas",
    "Denver",
    "Phoenix",
    "Las Vegas",
    "Honolulu",
    "Edinburgh",
    "Cork",
    "Belfast",
    "Cardiff",
    "Manchester",
    "Birmingham",
    "Leeds",
    "Liverpool",
    "Newcastle",
    "Bristol",
    "Sheffield",
    "Leicester",
    "Nottingham",
    "Southampton",
    "Glasgow",
    "Antwerp",
    "Bruges",
    "Ghent",
    "Brussels",
    "Hamburg",
    "Munich",
    "Frankfurt",
    "Cologne",
    "Dresden",
    "Berlin",
    "Athens",
    "Thessaloniki",
    "Heraklion",
    "Patras",
    "Milan",
    "Rome",
    "Naples",
    "Turin",
    "Venice",
    "Florence",
    "Pisa",
    "Genoa",
  ];


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    // Filter search suggestions based on input value
    const filteredResults = cityNames.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults);
  };
  function escClose(e: React.FocusEvent<HTMLInputElement>) {
    setShowList(true);
    let target = e.target;
    target.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        console.log("Escape pressed");
        setShowList(false);
        target.blur();
      }
    });
  }
  return (
    <div className="relative self-end w-100">
      <input
        type="text"
        placeholder="Search places"
        onChange={handleInputChange}
        onFocus={escClose}
        // On blur check if the set location is passed and if it is than hide the list
        // onBlur={() => { setLocation && setShowList(false) }}
        id='search'
        className="border border-gray-300 rounded p-2 w-48 focus:outline-none focus:ring focus:border-blue-300 bg-gray-900 text-gray-400 h-min"
      />
      {searchResults.length > 0 && showList && (
        <ul className="absolute top-10 rounded shadow-lg w-48 bg-gray-900 z-10">
          {searchResults.map((result, index) => (
            <li key={index} className=" hover:bg-gray-700 cursor-pointer text-sm">
              <Link
                href={`/location/${result}`}
                className={'text-gray-100 block py-2 px-4'}
              >
                {result}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {searchResults.length > 0 && showList && setLocation && (
        <ul className="absolute top-10 rounded shadow-lg w-48 bg-gray-900 z-10">
          {searchResults.map((result, index) => (
            <li key={index} className=" hover:bg-gray-700 cursor-pointer text-sm">
              <button
                onClick={() => { setLocation(result); }}
                className={'text-gray-100 block py-2 px-4'}
              >
                {result}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
