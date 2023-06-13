import MoonIcon from "./icons/MoonIcon";

const Header = () => {
  return (
    <header className="container mx-auto px-4">
      <div className="flex justify-between py-6">
        <h1 className="text-2xl font-semibold uppercase tracking-[0.4em] text-white">
          Todo
        </h1>
        <button className="">
          <MoonIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
