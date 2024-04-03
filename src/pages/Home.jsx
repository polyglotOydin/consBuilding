import React, { useState, useEffect } from 'react';
import cons9 from '../assets/realPc/real_cons.avif';
import cons10 from '../assets/realPc/real_cons2.avif';
import cons11 from '../assets/realPc/real_cons3.avif';
import cons12 from '../assets/realPc/real_cons4.avif';

const Home = () => {
  const [currentItem, setCurrentItem] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem % 4) + 1); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const handleItemClick = (itemId) => {
    setCurrentItem(itemId); 
  };

  return (
    <div className="min-h-screen bg-background-pattern">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={currentItem === 1 ? cons9 : currentItem === 2 ? cons10 : currentItem === 3 ? cons11 : cons12}
            alt="Background"
            className="object-cover w-full h-full transition-opacity duration-500"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-2 ">
            <button onClick={() => handleItemClick(1)} className=" hover:w-8 btn btn-xs bg-white text-black">1</button> 
            <button onClick={() => handleItemClick(2)} className="hover:w-8 btn btn-xs bg-white text-black">2</button> 
            <button onClick={() => handleItemClick(3)} className="hover:w-8 btn btn-xs bg-white text-black">3</button> 
            <button onClick={() => handleItemClick(4)} className="hover:w-8 btn btn-xs bg-white text-black">4</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
