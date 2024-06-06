import "./App.css";
import Scroll from "./Scroll";
import LoginButton from "./components/GoogleAuth";

const Navbar = () => {
  return (
    <>
      <div className="flex w-[100vw] h-[10vh] p-2 bg-gradient-to-l from-blue-300 to-blue-500 ">
        <div className="w-[30%] ">Some Image</div>
        <div className="font-bold text-black animationTitle ">Hi</div>
      </div>
      <div className="circle absolute m-8 ">
        <img src="/src/assets/circle.png" alt="circle" />
      </div>

      <div className="grid w-screen h-[90vh] bg-yellow-100 justify-center items-center overflow-hidden">
        <div className="card bg-red-400 h-[300px] w-[300px] rounded-lg p-1 justify-center items-center flex">
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            commodi dolor tempore placeat aliquid cupiditate perferendis
            provident quas dolorem blanditiis.
          </div>
        </div>
        <div className="card2">
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            commodi dolor tempore placeat aliquid cupiditate perferendis
            provident quas dolorem blanditiis.
          </div>
        </div>
      </div>
      <Scroll />
    </>
    // <div>
    //   <h1>Google Authentication</h1>
    //   <LoginButton />
    // </div>
  );
};

export default Navbar;
