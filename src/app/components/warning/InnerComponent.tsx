"use client";
import React, { Fragment, useEffect } from "react";
import skull from "./skull.png";
import Image from "next/image";
import Search from "../Search";
import { Menu, Transition } from "@headlessui/react";
import { allWarnings, topCities } from "@/app/api/Data";
import { useRouter } from "next/navigation";

interface Props {
    warning: string;
    alertData: any | null;
    location: string;
}
const InnerComponent: React.FC<Props> = ({ warning, alertData, location }) => {
    const router = useRouter();
    useEffect(() => {
        router.push(`?locationName=${location}`);
    }, []);
    const handleLocationChange = (locationName: string) => {
        // Update query parameter
        router.push(`?locationName=${locationName}`);
    };
    // console.log(alertData);
    // console.log(await getWeatherWarning(location, warning));
    if (allWarnings.includes(warning)) {
        return (
            <div className="flex justify-center items-center flex-col">
                <div className="mb-8 flex justify-center items-center">
                    <h1 className="flex items-center">Select <Menu as="div" className="relative ml-3">
                        <Menu.Button className="flex">
                            <span className="sr-only">Open Locations Dropdown</span>
                            Location
                            <svg className="-mr-1 h-10 w-10 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-700 text-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
                                <Menu.Item>
                                    <Search setLocation={handleLocationChange} />
                                </Menu.Item>
                                <div className='w-full flex justify-center text-gray-600 mb-2 mt-2 font-semibold'>
                                    Top Searches
                                </div>
                                {
                                    topCities.map((city, i) =>
                                        <Menu.Item
                                            key={i}
                                        >

                                            <button
                                                onClick={() => handleLocationChange(city)}
                                                className={'text-gray-100 block hover:bg-slate-900 px-4 py-2 w-100 m-auto'}
                                                type="button"
                                            >
                                                {city}
                                            </button>
                                        </Menu.Item>
                                    )
                                }
                            </Menu.Items>
                        </Transition>
                    </Menu></h1>

                </div>
                <div className="container-warning">
                    <div className="box">
                        {
                            alertData === undefined ? (
                                <h1>No current {warning} warnings in {location}.</h1>
                            ) :
                                <div>
                                    <span className="title">{warning} warning in {location}</span>
                                    <strong>Severity: {alertData?.severity}</strong>
                                    <div className="flex justify-center">
                                        <Image
                                            src={skull}
                                            alt="Skull"
                                            width={230}
                                            height={230}
                                            priority
                                            placeholder="blur"
                                        />

                                    </div>
                                    <h2>Date: {alertData?.date}</h2>
                                    <h2>Location: {location}</h2>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <h1>The Weather warning request does not exist.</h1>
        )
    }
};
export default InnerComponent;
