import Navbar from '../Navbar/Navbar' 

function Home() {
  return (
    <div className="h-screen bg-blue-300">
      <Navbar/>
      <div className="m-20 flex justify-space-between items-center">

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-10 lg:px-20 py-16">
        
        <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4">
          Hello, I'm
            <span className="text-blue-500 ml-4">Your Developer</span>
        </h1>

          <p className="text-gray-700 text-lg md:text-xl mt-6">
            With over 4 years of experience, I specialize in creating stunning websites, modern web apps, and efficient mobile solutions.
          </p>

          <div className="flex justify-center lg:justify-start mt-8 space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-500 transition">
              Learn More
            </button>
            <button className="border-2 border-blue-900 text-blue-800 px-6 py-3 rounded-2xl hover:bg-blue-800 hover:text-white transition">
              My Portfolio
            </button>
          </div>
        <div className='flex justify-between  px-10 py-6 '>
          <button className="border-2 border-blue-900 text-blue-800 px-6 py-3 rounded-2xl hover:bg-blue-800 hover:text-white transition">
            Get in Touch
          </button>


        </div>
          
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-70 h-70 rounded-full bg-white ">
            <img
              src="https://via.placeholder.com/300" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

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
    </div>
  );
}

export default Home;
