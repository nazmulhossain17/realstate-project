import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import SearchFilter from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="py-4 border-b-[1px] ">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <SearchFilter />
            <UserMenu />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
