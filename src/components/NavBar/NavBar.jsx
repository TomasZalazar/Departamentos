import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../../../public/logo-nbg.png"
import { Link } from 'react-router-dom'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [navigation, setNavigation] = useState([
    { name: 'Central Av', href: '/CentralAv', current: true },
    { name: 'San Nicolas', href: '/SanNicolas', current: false },
  ]);

  const handleNavigationClick = (clickedIndex) => {
    const updatedNavigation = navigation.map((item, index) => ({
      ...item,
      current: index === clickedIndex,
    }));

    setNavigation(updatedNavigation);
  };
  return (
    <Disclosure as="nav" className="bg-[#1F1F1F] h-24">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden pt-8">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center pt-8 sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-32 w-auto"
                      src={logo}
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex">
                  <div className="flex flex-row justify-center items-center space-x-4">
                    {navigation.map((item,index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => handleNavigationClick(index)}
                        className={classNames(
                          item.current
                            ? "bg-hueso-800  text-white "
                            : "text-gray-300 hover:bg-hueso-800 hover:text-white",
                          "rounded-md px-3 py-2 text-xl "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden pt-8">
            <div className="space-y-1 px-2 pb-3 pt-4 bg-[#1F1F1F]">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-hueso-800 text-white"
                      : "text-gray-300 hover:bg-hueso-800 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
