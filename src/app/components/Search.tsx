"use client"
import Link from 'next/link';
import React, { useState, ChangeEvent } from 'react';

const SearchComponent: React.FC = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

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

  return (
    <div className="relative self-end">
      <input
        type="text"
        placeholder="Search places"
        onChange={handleInputChange}
        className="border border-gray-300 rounded p-2 w-48 focus:outline-none focus:ring focus:border-blue-300 bg-gray-900 text-gray-400 h-min"
      />
      {searchResults.length > 0 && (
        <ul className="absolute top-10 rounded shadow-lg w-48 bg-gray-900">
          {searchResults.map((result, index) => (
            <li key={index} className="py-2 px-4 hover:bg-gray-700 cursor-pointer text-sm">
              <Link
                href={`/location/${result}`}
                className={'text-gray-100 block'}
              >
                {result}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
