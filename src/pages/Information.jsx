import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Information() {
  const [images, setImages] = useState([]);
  const API_ENDPOINT = 'https://api.unsplash.com/search/photos?page=1&query=buildings'; 
  const ACCESS_KEY = 'k-TKk9O4MUoh6E7-xvJWKazC7sSjsRVaHy-AA-255I4';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT, {
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setImages(data.results.slice(0, 9)); 
         
          AOS.init();
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-black-400">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl text-center font-bold text-white">OUR WORKS</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-4">
            {images.map((image, index) => (
              <div key={index} className="group relative" data-aos="fade-right">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={image.urls.small}
                    alt={image.alt_description || 'Office Image'}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-2 text-sm text-white">{image.user.name.split(' ').slice(0, 2).join(' ')}</h3>
                <p className="text-base font-semibold text-white">{image.description ? image.description.split(' ').slice(0, 2).join(' ') : ''}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
