import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaThumbsUp, FaShareAlt } from "react-icons/fa";
import mainDisplay from "../assets/mainDisplay.jpeg";
import BTC from "./BTC";
import ETH from "./ETH.JSX";
import BNB from "./BNB.JSX";

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
                    Celebrate Binance’s Sixth Anniversary With Binance 2x Crypto
                    Giveaway Rewards!
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
                      src={mainDisplay}
                      className="mica-lazy-img css-182lng5"
                      style={{ backgroundColor: "transparent" }}
                      alt="Description of the image"
                    />
                  </span>
                </span>
                <p className="text">
                  To celebrate Binance’s sixth anniversary, Binance Earn is
                  delighted to announce a 2x Giveaway event the next few
                  weeks.Users who participate will be able to share plenty of
                  rewards, so make sure you don’t miss out on your opportunity
                  to join the fun. <br />
                  <br />
                  Binance reserves the right at any time in its sole and
                  absolute discretion to determine and/or amend or vary these
                  Promotion Terms without prior notice, including but not
                  limited to canceling, extending, terminating or suspending
                  this Promotion, its eligibility terms and criteria, the
                  selection and number of winners, and the timing of any act to
                  be done, and all users shall be bound by these amendments.
                  <br />
                  <br />
                  follow the links bellow to join the 2x event.
                </p>
                <div className="links">
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
