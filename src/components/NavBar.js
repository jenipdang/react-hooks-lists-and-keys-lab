import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const page = links.map((link) => (
    <a key={link} href={"#" + link}>{link}</a>
  ))

  return <nav>{page}</nav>;
}

export default NavBar;
