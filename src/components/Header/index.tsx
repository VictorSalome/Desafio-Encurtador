import LogoTopo from "../../assets/react.svg";

export const Header = () => {
  return (
    <header>
      <div className="bg-white flex items-center justify-center md: ">
        <img
          className="w-6 h-8 md:w-10 md:h-10"
          src={LogoTopo}
          alt="Logo-Header"
        />
      </div>
    </header>
  );
};
