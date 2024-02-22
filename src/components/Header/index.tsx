import LogoTopo from "../../assets/react.svg";

export const Header = () => {
  return (
    <header>
      <div className="bg-black flex items-center justify-center">
        <img src={LogoTopo} alt="Logo-Header" className="w-6 h-8" />
      </div>
    </header>
  );
};
