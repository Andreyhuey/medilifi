import header from "../assets/header-img.png";

const Header = () => {
  return (
    <div className="min-h-screen bg-[#CCE0FF] lg:px-12 md:px-8 px-4 py-10">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:order-1 order-2 ">
          <h1 className="">Find Your Doctor</h1>
        </div>
        <img src={header} alt={header} className="order-1 lg:order-2" />
      </div>
    </div>
  );
};

export default Header;
