import React from "react";
import path from "path";
import makeClass from "clsx";

import { SidebarActiveItem } from "./sidebar";

const Logo = ({ className, ...props }) => (
  <a
    tabIndex={0}
    className={makeClass(
      "h-full focus:outline-none flex items-center h-full text-gray-800 font-normal hover:font-semibold focus:font-semibold cursor-pointer text-xl",
      className
    )}
    {...props}
  >
    <img
      alt={`${PROJECT_NAME} Logo`}
      src="/logo.svg"
      className="h-full p-3 pl-0"
    />
    {PROJECT_NAME}
  </a>
);

const NavBarWrapper = ({ className, ...props }) => (
  <div
    className={makeClass("border-b border-grey-200 mx-10", className)}
    {...props}
  />
);

const NavBar = ({ className, ...props }) => (
  <div
    className={makeClass(
      "h-16 px-6 max-w-screen-xl mx-auto w-full flex justify-between items-center",
      className
    )}
    {...props}
  />
);

const NavBarItem = ({ className, children, ...props }) => (
  <a
    tabIndex={0}
    className={makeClass(
      "h-full flex items-center px-6 hover:bg-gray-200 hover:text-blue-600 focus:bg-gray-200 focus:text-blue-600 focus:outline-none",
      className
    )}
    {...props}
  >
    <div>{children}</div>
  </a>
);

const Sidebar = ({ className, ...props }) => (
  <div
    className={makeClass(
      className,
      "w-1/5 py-6 sticky top-0 max-h-screen max-w-xs overflow-scroll"
    )}
    {...props}
  />
);
const SidebarDivider = props => (
  <hr className="h-1 border-gray-400 my-8" {...props} />
);
const SidebarTitle = props => (
  <p className="text-xl font-semibold px-4 my-4" {...props} />
);
const SidebarItemWrapper = props => <li className="my-2" {...props} />;
const SidebarList = props => <ul {...props} />;
const SidebarLink = ({ isActive, ...props }) => (
  <a
    className={makeClass(
      "text-base font-light hover:font-normal px-6 flex",
      isActive && "font-normal border-r-4 border-blue-600"
    )}
    {...props}
  />
);

const DEFAULT_SPACING = "my-4";

const h1 = props => (
  <h1
    className="text-gray-900 text-5xl font-semibold leading-loose"
    {...props}
  />
);
const h2 = props => (
  <h2
    className="text-gray-900 text-3xl font-normal border-b border-gray-300 pb-4 mb-8 mt-12"
    {...props}
  />
);
const h3 = props => (
  <h3 className="text-gray-900 text-2xl font-normal mt-8" {...props} />
);
const p = props => (
  <p className={makeClass(DEFAULT_SPACING, "text-gray-800")} {...props} />
);
const li = props => (
  <li className={makeClass(DEFAULT_SPACING, "text-gray-800")} {...props} />
);
const blockquote = props => (
  <blockquote
    className="blockquote bg-gray-200 px-6 py-6 my-8 border-l-4 border-blue-500"
    {...props}
  />
);
const inlineCode = props => (
  <code
    className="text-gray-600 bg-gray-200 rounded"
    style={{ padding: "2px 6px" }}
    {...props}
  />
);

const a = React.forwardRef(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={makeClass(className, "underline cursor-pointer text-gray-700")}
    {...props}
  />
));
const ul = ({ className, ...props }) => (
  <ul className={makeClass(className, DEFAULT_SPACING, "ul")} {...props} />
);
const ol = ({ className, ...props }) => (
  <ol className={makeClass(className, DEFAULT_SPACING, "ol")} {...props} />
);

const code = ({ className, ...props }) => (
  <code
    className={makeClass(className, "text-gray-600 rounded block py-4 px-2")}
    {...props}
  />
);

const pre = ({ className, ...props }) => (
  <pre
    className={makeClass(className, DEFAULT_SPACING, "bg-gray-200 rounded")}
    {...props}
  />
);

export default {
  Logo,
  NavBarWrapper,
  NavBar,
  NavBarItem,

  Sidebar,
  SidebarItemWrapper,
  SidebarLink,
  SidebarTitle,
  SidebarDivider,
  SidebarList,

  h1,
  h2,
  h3,
  p,
  inlineCode,
  code,
  pre,
  a,
  ul,
  ol,
  li,
  blockquote
};
