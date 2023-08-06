"use client"
import Search from './Search';
import Link from 'next/link';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { allWarnings, topCities } from '../api/Data';
export default function NavBar() {

    return (
        <nav className="bg-blue-300/75 z-10 fixed w-screen">
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* {/* Mobile menu button*/}
                        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => { document.querySelector(".nav-main")?.classList.toggle("hidden") }}>
                            <span className="sr-only">Open main menu</span>
                            {/* {/*
                  Icon when menu is closed.

                  Menu open: "hidden", Menu closed: "block"
                */}
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* {/*
                  Icon when menu is open.

                  Menu open: "block", Menu closed: "hidden"
          */}
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/1146/1146869.png?w=740&t=st=1690038121~exp=1690038721~hmac=a7ee890d91d128fe311a6ca286c3fa85468ae227eeb479f0769a4d5f79225b02" alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/" className="text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard
                                </Link>
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex">
                                            <span className="sr-only">Open Locations Dropdown</span>
                                            Locations
                                            <svg className="-mr-1 h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                            </svg>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-700 text-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item key="lol">
                                                <Search />
                                            </Menu.Item>
                                            <div className='w-full flex justify-center text-gray-600 mb-2 mt-2 font-semibold'>
                                                Top Searches
                                            </div>
                                            {
                                                topCities.map((city, i) =>
                                                    <Menu.Item
                                                        key={i}
                                                    >
                                                        <Link
                                                            href={`/location/${city}`}
                                                            className={'text-gray-100 block hover:bg-slate-900 px-4 py-2 text-sm'}
                                                            key={i}

                                                        >
                                                            {city}
                                                        </Link>
                                                    </Menu.Item>
                                                )
                                            }
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex">
                                            <span className="sr-only">Open Warnings Dropdown</span>
                                            Warnings
                                            <svg className="-mr-1 h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                            </svg>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-700 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {
                                                allWarnings.map((warning, i) =>
                                                    <Menu.Item
                                                        key={i}
                                                    >
                                                        <Link
                                                            href={`/warning/${warning}`}
                                                            className={'text-gray-100 block hover:bg-slate-900 px-4 py-2 text-sm'}
                                                        >
                                                            {warning}
                                                        </Link>
                                                    </Menu.Item>)
                                            }
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {/* Mobile menu, show/hide based on menu state. */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 nav-main">
                    <Link href="/" className="text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-3" aria-current="page">Dashboard
                    </Link>
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex">
                                <span className="sr-only">Open Locations Dropdown</span>
                                Locations
                                <svg className="ml-1 h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-700 text-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    <Search />
                                </Menu.Item>
                                <div className='w-full flex justify-center text-gray-600 mb-2 mt-2 font-semibold'>
                                    Top Searches
                                </div>
                                {
                                    topCities.map((city, i) =>
                                        <Menu.Item
                                            key={i}
                                        >
                                            <Link
                                                href={`/location/${city}`}
                                                className={'text-gray-100 block hover:bg-slate-900 px-4 py-2 text-sm'}
                                            >
                                                {city}
                                            </Link>
                                        </Menu.Item>
                                    )
                                }
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex">
                                <span className="sr-only">Open Warnings Dropdown</span>
                                Warnings
                                <svg className="ml-1 h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-700 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {
                                    allWarnings.map((warning, i) => (
                                        <Menu.Item
                                            key={i}
                                        >
                                            <Link
                                                href={`/warning/${warning}`}
                                                className={'text-gray-100 block hover:bg-slate-900 px-4 py-2 text-sm'}
                                            >
                                                {warning}
                                            </Link>
                                        </Menu.Item>
                                    ))
                                }
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}
