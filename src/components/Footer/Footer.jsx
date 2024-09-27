import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p className="text-center bg-skobeloff-500">Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;
