import { useState } from "react";
import {
  AlignJustify,
  BookOpen,
  FolderPlus,
  LayoutDashboard,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const NavDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Drawer Open Icon  */}

      <button
        className="p-2 rounded-md  border-gray-300 lg:hidden"
        onClick={() => setOpen(true)}
      >
        <AlignJustify className="h-6 w-6" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer Content */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-500 ease-in-out",
          open ? "translate-y-0" : "-translate-y-full"
        )}
        style={{ height: "100vh" }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center ">
            <img src={logo} className="h-16 w-16 rounded-full " alt="logo" />
            <p className="text-xl font-medium">
              {/* <span className="text-primary">Libro</span> */}
              <span>Bokify</span>
            </p>
          </div>
          <button onClick={() => setOpen(false)}>
            <X className="h-5 w-5 " />
          </button>
        </div>

        {/* Drawer Link  */}

        <nav className="flex flex-col space-y-4 p-6 text-base font-medium">
          <Link
            onClick={() => setOpen(false)}
            to="/books"
            className="flex items-center gap-2 hover:text-primary"
          >
            <BookOpen />
            All Books
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/create-book"
            className="flex items-center gap-2 hover:text-primary"
          >
            <FolderPlus />
            Create Book
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/borrow-summary"
            className="flex items-center gap-2 hover:text-primary"
          >
            <LayoutDashboard />
            Borrow Summary
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavDrawer;
