import React, { useEffect, useState } from 'react';
import bannerImage from '../../assets/Images/banner.jpg';

const Banner = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    
    let endTime = localStorage.getItem('countdownEnd');

    if (!endTime) {
      
      const now = new Date().getTime();
      endTime = now + 5 * 60 * 60 * 1000; 
      localStorage.setItem('countdownEnd', endTime);
    } else {
      endTime = parseInt(endTime, 10);
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = endTime - now;

      if (difference <= 0) {
        clearInterval(interval);
        localStorage.removeItem('countdownEnd');
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

 
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const format = (num) => String(num).padStart(2, '0');

  return (
    <section
      className="w-full 
                 mt-[11vh] 
                 min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]
                 bg-blue-600 flex items-center bg-cover bg-top"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="max-w-[1300px] w-full px-4 sm:px-6 md:px-12 mx-auto flex flex-col justify-center gap-3">
        {/* Heading */}
        <h1 className="text-red-600 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                       uppercase font-bold tracking-tight">
          Big Sale !
        </h1>

        {/* Subheading */}
        <h2 className="text-zinc-800 text-base sm:text-xl md:text-2xl lg:text-3xl font-medium">
          Up to 50% OFF - Limited Time only !
        </h2>

        {/* Countdown */}
        <div className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl text-zinc-800 flex gap-x-2 sm:gap-x-3 mt-4">
          <span className="text-white bg-zinc-800 px-2 py-1 sm:px-3 sm:py-2 rounded">
            {format(hours)}
          </span>
          :
          <span className="text-white bg-zinc-800 px-2 py-1 sm:px-3 sm:py-2 rounded">
            {format(minutes)}
          </span>
          :
          <span className="text-white bg-zinc-800 px-2 py-1 sm:px-3 sm:py-2 rounded">
            {format(seconds)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
