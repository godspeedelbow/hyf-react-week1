import React from 'react';

export default Header;

function Header() {
  return (
    <header className="App-header">
      <HeaderItem>about me</HeaderItem>
      <HeaderItem>HN articles</HeaderItem>
    </header>
  );
}

function HeaderItem({ children }) {
  return (
    <span className="headerItem">
      {children}
    </span>
  );
}
