import me from "../assets/me color.jpeg";
const Home = ({ nav }) => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-[#202020] flex flex-col items-center px-4 mt-10  text-white font-manrope"
    >
      <div className="bg-white mt-10 rounded-full w-56 h-56 flex items-center justify-center">
        <img src={me} className="w-52 h-52 rounded-full grayscale " alt="" />
      </div>
      <div>
        <h1 className="text-[#DEDEDE] text-[28px] mt-5 font-semibold font-manrope text-center">
          Hi, My name is Muhammad Arif, I am Enthusiast of web dev
        </h1>
        <p className="text-[#959595] mt-2 text-center">
          I help create the website{"'"}s user interface and some of the logic,
          make sure the website runs well and continue to learn about the
          field..
        </p>
      </div>
      <button className="bg-[#9D9D9D] gap-2 mt-5 px-4 py-2 flex items-center justify-center rounded-md">
        <svg
          className="text-white filter invert"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 50 50"
        >
          <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
        </svg>
        muh.arhief20@gmail.com
      </button>
      {/* Overlay */}
      <div
        className={
          nav
            ? "fixed z-10  bg-black/50 right-0 top-0 left-0 bottom-0"
            : "hidden z-10 bg-black/50 right-0 top-0 left-0 bottom-0"
        }
      ></div>
    </div>
  );
};

export default Home;
