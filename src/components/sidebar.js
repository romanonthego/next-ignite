import React from "react";
import path from "path";
import { useMDXComponents } from "@mdx-js/react";
import { MDXProvider } from "@mdx-js/react";

import { formatPath } from "../format-path";

export const SidebarActiveItem = React.createContext({
  pathname: "",
  href: "",
  sidebarFileLocation: ""
});

export const Sidebar = ({ links, folder }) => {
  const sidebarFileLocation = `/${folder}`;
  let CustomSideBar;

  try {
    CustomSideBar = require(PAGES_DIR + sidebarFileLocation + "/_sidebar.mdx")
      .default;
  } catch (error) {
    try {
      CustomSideBar = require(PAGES_DIR + sidebarFileLocation + "/_sidebar.js")
        .default;
    } catch (error) {
      // TODO handle more file types
    }
  }

  const [active, setActive] = React.useState({ pathname: "", href: "" });

  React.useLayoutEffect(() => {
    const newActive = links.find(link =>
      window.location.pathname.includes(link.__resourcePath.replace(".mdx", ""))
    );

    setActive({
      href: window.location.href,
      pathname: formatPath(newActive.__resourcePath)
    });
  }, []);

  const {
    SidebarItem,
    SidebarLink,
    SidebarTitle,
    SidebarDivider,
    SidebarList,
    Sidebar,
    ...components
  } = useMDXComponents();

  return (
    <SidebarActiveItem.Provider
      value={{
        ...active,
        sidebarFileLocation: CustomSideBar ? sidebarFileLocation : ""
      }}
    >
      <MDXProvider
        components={{
          ...components,
          li: SidebarItem,
          ul: SidebarList,
          a: SidebarLink,
          p: SidebarTitle,
          hr: SidebarDivider
        }}
      >
        <Sidebar>
          {CustomSideBar ? (
            <CustomSideBar />
          ) : (
            <SidebarList>
              {links.map(page => (
                <SidebarItem key={page.__resourcePath}>
                  <SidebarLink href={formatPath(page.__resourcePath)}>
                    {page.title}
                  </SidebarLink>
                </SidebarItem>
              ))}
            </SidebarList>
          )}
        </Sidebar>
      </MDXProvider>
    </SidebarActiveItem.Provider>
  );
};
