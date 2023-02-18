import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <header>
        <div>
          <a class="Main_Logo" href="">
            Bottle Shop
          </a>
        </div>
        <nav class="navbar">
          <div>
            <ul>
              <ol>
                <a>Wine</a>
                <ol>
                  <a>RedWine</a>
                </ol>
                <ol>
                  <a>WhiteWine</a>
                </ol>
                <ol>
                  <a>Champane</a>
                </ol>
              </ol>
              <ol>
                <a>Cheeses</a>
              </ol>
              <ol>
                <a>Q&A</a>
              </ol>
            </ul>
          </div>
        </nav>
        <h3>header</h3>
      </header>
      <main>{children}</main>
      <footer>
        <h3>footer</h3>
      </footer>
    </div>
  );
};

export default Layout;
