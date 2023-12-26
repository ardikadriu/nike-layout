import Main from "./Main";
import Menubar from "./Menubar";
const Secondcontainer = () => {
  return (
    <div className="w-full h-full flex flex-col  text-white font-semibold">
      <h1>
        <Menubar />
        <Main />
      </h1>
    </div>
  );
};

export default Secondcontainer;
