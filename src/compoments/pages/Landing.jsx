

function Landing() {
  return (
    <div className="h-screen bg-blue-300">
      <div className="m-20 flex justify-space-between items-center">
        
        <button className='rounded-2xl text-2xl px-2 py-2 text-white bg-blue-800 hover:bg-gray-600'>Get Started</button>
        <button className='rounded-2xl text-2xl px-2 py-2 text-white bg-blue-800 hover:bg-gray-600'>Learn More</button>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,224C672,235,768,245,864,240C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Landing;
