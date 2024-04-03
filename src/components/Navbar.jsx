import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar({ changeLang }) {
  const [currentPage, setCurrentPage] = useState('Home');
  const { t, i18n } = useTranslation();

  const changeLangHandler = (event) => {
    console.log("Language changed to:", event.target.value);
    const value = event.target.value;
    changeLang(value);
  };

  const handleNavigation = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <Disclosure as="nav" className="absolute inset-x-0 top-0 z-50 bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className=' '>BEST BUILDING</h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleNavigation('Home')}
                      className={classNames(
                        currentPage === 'Home' ? 'text-white' : 'text-gray-400',
                        'rounded-lg px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {t('Home')}
                    </button>
                    <button
                      onClick={() => handleNavigation('About')}
                      className={classNames(
                        currentPage === 'About' ? 'text-white' : 'text-gray-400',
                        'rounded-lg px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {t('About')}
                    </button>
                    <button
                      onClick={() => handleNavigation('Projects')}
                      className={classNames(
                        currentPage === 'Projects' ? 'text-white' : 'text-gray-400',
                        'rounded-lg px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {t('Projects')}
                    </button>
                    <button
                      onClick={() => handleNavigation('Contact')}
                      className={classNames(
                        currentPage === 'Contact' ? 'text-white' : 'text-gray-400',
                        'rounded-lg px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {t('Contact')}
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <select onChange={changeLangHandler} className="select select-info w-full max-w-xs mx-4">
                  <option>English</option>
                  <option>Russian</option>
                  <option>Uzbek</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
