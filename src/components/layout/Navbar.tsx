import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

import NavDrawer from "./Drawer";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-999 w-full bg-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} className="h-14 w-14 rounded-full " alt="logo" />
          <p className="text-2xl font-semibold">
            {/* <span className="text-primary">Libro</span> */}
            <span>Bokify</span>
          </p>
        </div>

        <div>
          <div className="flex items-center gap-10">
            <div className="lg:flex items-center gap-5 font-medium hidden lg:block">
              <Link
                className="hover:text-primary transition ease-in-out delay-200"
                to="/books"
              >
                All Books
              </Link>
              <Link
                className="hover:text-primary transition ease-in-out delay-200"
                to="/create-book"
              >
                Add Book
              </Link>
              <Link
                className="hover:text-primary transition ease-in-out delay-200"
                to="/borrow-summary"
              >
                Borrows Summary
              </Link>
            </div>
            <div className="hidden lg:block">
              <Avatar>
                <AvatarImage
                  src="https://github.com/leerob.png"
                  alt="@leerob"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="lg:hidden">
            {/* <AlignJustify /> */}

            <NavDrawer />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
