import { useState } from 'react';
import { Switch } from '@headlessui/react';
import img from "../assets/images/con3.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex items-center justify-center p-4">
        <div className="bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden max-w-lg w-full">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold mb-2 text-gray-900 text-center">Contact</h2>
            <p className="text-lg text-gray-600 mb-6 text-center">Leave your information</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">First name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">Last name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">Phone number</label>
                  <input
                    type="tel"
                    id="phone-number"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  ></textarea>
                </div>
                <div className="sm:col-span-2 flex items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-indigo-600' : 'bg-gray-200',
                      'relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-6' : 'translate-x-1',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                  <p className="ml-2 text-sm text-gray-600">By selecting this, you agree to our <a href="#" className="font-semibold text-indigo-600">privacy policy</a>.</p>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
