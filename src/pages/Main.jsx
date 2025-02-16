import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaThumbsUp, FaShareAlt } from "react-icons/fa";
import BTC from "./BTC";
import ETH from "./ETH";
import BNB from "./BNB";

export function Home() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/earn-with-bitcoin" element={<BTC />} />
        <Route path="/earn-with-ethereum" element={<ETH />} />
        <Route path="/earn-with-bnb" element={<BNB />} />
      </Routes>
    </React.Fragment>
  );
}

function Main() {
  return (
    <React.Fragment>
      <div className="css-1bx211v">
        <div className="css-1rs9glj">
          <div className="css-1uv9avu">
            <article className="css-grc0l3">
              <div className="css-86g58q">
                <div className="css-1vj8tfo">
                  <h1
                    data-bn-type="text"
                    id="binance-connect-partners-with-trust-wallet-to-drive-crypto-adoption-to-drive-more-users-into-web3"
                    className="ib-page-title css-1pv5zum"
                  >
                    Exciting News: Our First Global Crypto Giveaway
                  </h1>
                  <div className="css-4cffwv">
                    <div data-bn-type="text" className="css-ync1um">
                      2023-07-22
                    </div>
                  </div>
                </div>
              </div>
              <div className="richtext-container css-fbxu07" style={{}}>
                <span data-area="img" className="css-jyb3wi">
                  <span className="css-jce7cz">
                    <img
                      src="/img/displayimage.jpg"
                      className="mica-lazy-img css-182lng5"
                      style={{ backgroundColor: "transparent" }}
                      alt="Description of the image"
                    />
                  </span>
                </span>
                <p className="text">
                  We know you’ve been waiting for this—and it’s finally here!
                  Unlike our past giveaways that were limited to our local
                  community, this time, we’re breaking boundaries. The crypto
                  revolution connects us all, no matter where you are, so we’re
                  giving everyone the chance to win BIG!
                  <br />
                  <br />
                  🎁 What’s in it for you? We’re giving away awesome crypto
                  prizes straight to your wallet! Why this giveaway? Because YOU
                  matter. Our goal has always been to give back to our amazing
                  supporters. Crypto enables us to go beyond borders and make
                  this a truly global celebration.
                  <br />
                  follow the links bellow to join the 2x event.
                </p>
                <div
                  style={{
                    color: "#432994",
                  }}
                  className="links"
                >
                  <Link to="/earn-with-bitcoin" className="css-1v1n4ms">
                    Click Here to participate with Bitcoin{" "}
                  </Link>{" "}
                  <br />
                  <Link to="/earn-with-ethereum" className="css-1v1n4ms">
                    Click Here to participate with Ethereum
                  </Link>{" "}
                  <br />
                  <Link to="/earn-with-bnb" className="css-1v1n4ms">
                    Click Here to participate with BNB{" "}
                  </Link>{" "}
                </div>
              </div>
            </article>
            <aside className="css-e8rs0l">
              <div className="css-qlcbj2">
                <div className="css-11mgev0">
                  <div className="css-1kt5q2k">
                    <div className="css-1lx7oj">
                      <div className="css-14p9xwn">
                        <FaThumbsUp />
                      </div>
                      <div data-bn-type="text" className="css-eoeetj">
                        51
                      </div>
                    </div>
                  </div>
                  <div className="css-yfv9mo">
                    <div className="css-1lx7oj">
                      <div className="css-14p9xwn">
                        <FaShareAlt />
                      </div>
                      <div data-bn-type="text" className="css-eoeetj">
                        Share Posts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Main;
