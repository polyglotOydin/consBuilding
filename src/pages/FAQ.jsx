import React, { useState } from 'react';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('stats');
  const [faqOpen, setFaqOpen] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleFaq = () => {
    setFaqOpen(!faqOpen);
  };

  return (
    <div>
      <div className="w-full bg-black rounded-lg shadow text-white">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select tab
          </label>
          <select
            id="tabs"
            className="bg-black border-b border-gray-300 text-white text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => handleTabClick(e.target.value)}
            value={activeTab}
          >
            <option value="stats">Statistics</option>
            <option value="about">Services</option>
            <option value="faq">FAQ</option>
          </select>
        </div>
        <ul
          className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-300 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
          id="fullWidthTab"
          role="tablist"
        >
          <li className="w-full">
            <button
              onClick={() => handleTabClick('stats')}
              id="stats-tab"
              type="button"
              role="tab"
              aria-controls="stats"
              aria-selected={activeTab === 'stats'}
              className={`inline-block w-full p-4 rounded-ss-lg bg-black hover:bg-gray-700 focus:outline-none ${
                activeTab === 'stats'
                  ? 'bg-gray-700 dark:bg-gray-600'
                  : 'dark:bg-gray-700'
              }`}
            >
              Statistics
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={() => handleTabClick('about')}
              id="about-tab"
              type="button"
              role="tab"
              aria-controls="about"
              aria-selected={activeTab === 'about'}
              className={`inline-block w-full p-4 bg-black hover:bg-gray-700 focus:outline-none ${
                activeTab === 'about'
                  ? 'bg-gray-700 dark:bg-gray-600'
                  : 'dark:bg-gray-700'
              }`}
            >
              Services
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={() => handleTabClick('faq')}
              id="faq-tab"
              type="button"
              role="tab"
              aria-controls="faq"
              aria-selected={activeTab === 'faq'}
              className={`inline-block w-full p-4 rounded-se-lg bg-black hover:bg-gray-700 focus:outline-none ${
                activeTab === 'faq'
                  ? 'bg-gray-700 dark:bg-gray-600'
                  : 'dark:bg-gray-700'
              }`}
            >
              FAQ
            </button>
          </li>
        </ul>
        <div
          id="fullWidthTabContent"
          className="border-t border-gray-300 dark:border-gray-600"
        >
          <div
            className={`${
              activeTab === 'stats' ? 'block' : 'hidden'
            } p-4 bg-black rounded-lg md:p-8`}
            id="stats"
            role="tabpanel"
            aria-labelledby="stats-tab"
          >
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-white sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                <dd className="text-gray-300">Developers</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                <dd className="text-gray-300">
                  Public repositories
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                <dd className="text-gray-300">
                  Open source projects
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                <dd className="text-gray-300">Contributors</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                <dd className="text-gray-300">
                  Top Forbes companies
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
                <dd className="text-gray-300">Organizations</dd>
              </div>
            </dl>
          </div>
          <div
            className={`${
              activeTab === 'about' ? 'block' : 'hidden'
            } p-4 bg-black rounded-lg md:p-8 flex items-center justify-center`}
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
          >
            <div className="text-white text-center">
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight">
                We invest in the world’s potential
              </h2>
              <ul role="list" className="space-y-4 text-gray-300">
                <li className="flex space-x-2 items-center">
                  <svg
                    className="w-3.5 h-3.5 text-blue-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span>Dynamic reports and dashboards</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <svg
                    className="w-3.5 h-3.5 text-blue-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span>Templates for everyone</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <svg
                    className="w-3.5 h-3.5 text-blue-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span>Development workflow</span>
                </li>
                <li className="flex space-x-2 items-center">
                  <svg
                    className="w-3.5 h-3.5 text-blue-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span>Limitless business automation</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${
              activeTab === 'faq' ? 'block' : 'hidden'
            } p-4 bg-black rounded-lg md:p-8`}
            id="faq"
            role="tabpanel"
            aria-labelledby="faq-tab"
          >
            <div className="text-white text-center">
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight">
                Frequently Asked Questions
              </h2>
              <div
                className="text-left space-y-4"
                id="accordion-flush"
                data-accordion="collapse"
              >
                <div className="border border-gray-300 rounded-lg dark:border-gray-600">
                  <h2 className="flex items-center justify-between p-4 cursor-pointer focus:outline-none hover:bg-gray-700">
                    <span>location of our company</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        faqOpen ? 'transform rotate-180' : ''
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </h2>
                  <div
                    className={`${
                      faqOpen ? 'block' : 'hidden'
                    } bg-gray-700 p-4`}
                  >
                    <p className="text-gray-300">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-300">
                      Check out this guide to learn how to{' '}
                      <a
                        href="/docs/getting-started/introduction/"
                        className="text-blue-600 hover:underline"
                      >
                        get started
                      </a>{' '}
                      and start developing websites even faster with components
                      on top of Tailwind CSS.
                    </p>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-lg dark:border-gray-600">
                  <h2 className="flex items-center justify-between p-4 cursor-pointer focus:outline-none hover:bg-gray-700">
                    <span>where can I find catalogue</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        faqOpen ? 'transform rotate-180' : ''
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </h2>
                  <div
                    className={`${
                      faqOpen ? 'block' : 'hidden'
                    } bg-gray-700 p-4`}
                  >
                    <p className="text-gray-300">
                      Flowbite is first conceptualized and designed using the
                      Figma software so everything you see in the library has a
                      design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-300">
                      Check out the{' '}
                      <a
                        href="https://flowbite.com/figma/"
                        className="text-blue-600 hover:underline"
                      >
                        Figma design system
                      </a>{' '}
                      based on the utility classes from Tailwind CSS and
                      components from Flowbite.
                    </p>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-lg dark:border-gray-600">
                  <h2 className="flex items-center justify-between p-4 cursor-pointer focus:outline-none hover:bg-gray-700">
                    <span>
                      What are the differences between your buildings with others?
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        faqOpen ? 'transform rotate-180' : ''
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </h2>
                  <div
                    className={`${
                      faqOpen ? 'block' : 'hidden'
                    } bg-gray-700 p-4`}
                  >
                    <p className="text-gray-300">
                      The main difference is that the core components from
                      Flowbite are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Flowbite relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="text-gray-300">
                      However, we actually recommend using both Flowbite, Flowbite
                      Pro, and even Tailwind UI as there is no technical reason
                      stopping you from using the best of two worlds.
                    </p>
                    <p className="text-gray-300">
                      Learn more about these technologies:
                    </p>
                    <ul className="ps-5 text-gray-300">
                      <li>
                        <a
                          href="https://flowbite.com/pro/"
                          className="text-blue-600 hover:underline"
                        >
                          Flowbite Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/"
                          rel="nofollow"
                          className="text-blue-600 hover:underline"
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
