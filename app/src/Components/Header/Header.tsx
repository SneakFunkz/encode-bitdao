import { useState } from "react";
import { useNavigate } from "react-router";
import "./styles.css";
import { injected } from "../../utils/connectors";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import CollapsedNav from "./Collapse/CollapsedNav";
import profile from "../../static/profile.svg";
import wallet from "../../static/wallet.svg";

import { Popover, Button } from "antd";

export default function Header() {
  let navigate = useNavigate();

  const [menuIsActive, setMenuIsActive] = useState(false);

  const { chainId, account, activate, deactivate, active, library } =
    useWeb3React<Web3Provider>();

  const _connectToMetamask = () => {
    activate(injected);
    console.log(activate(injected));
  };

  const MyxProps = {
    active: menuIsActive,
    menuItems: ["WHITEPAPER", "CREATE DAO"],
  };

  const titleWallet = <span>Wallet</span>;
  const content = (
    <div>
      {account ? (
        <div>
          <p>Account: {account}</p>

          <button onClick={() => deactivate()}>Disconnect</button>
        </div>
      ) : (
        <button onClick={() => _connectToMetamask()}>Connect</button>
      )}
    </div>
  );

  const titleProfile = <span>Account</span>;

  return (
    <div>
      <div className="header">
        <h1 className="header--logo">
          <button
            onClick={() => navigate(`/`)}
            className="header--logo--button"
          >
            bit<span className="header--logo--bolder">Properties</span>
          </button>
        </h1>
        <nav>
          <ul className="header--nav">
            <li>
              <button className="header--nav--actionbutton">MARKETPLACE</button>
            </li>
            <li>
              <button className="header--nav--link">
                <a href="https://app.gitbook.com/o/royHtkR6AKieNQ1UygU7/s/tgIrluxcjOTzLxDW1aVB/">
                  WHITEPAPER
                </a>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate(`../DaoManager`)}
                className="header--nav--link"
              >
                DAO PORTAL
              </button>
            </li>
            {/* <li>
              <div>
                <Popover
                  placement="bottomRight"
                  title={titleProfile}
                  content={content}
                  trigger="click"
                  className="menuuuu"
                >
                  <img src={profile} alt="" />
                </Popover>
              </div>
            </li> */}
            <li>
              <div>
                <Popover
                  placement="bottomRight"
                  title={titleWallet}
                  content={content}
                  trigger="click"
                  className="header--nav--link"
                >
                  <img src={wallet} alt="" />
                </Popover>
              </div>
            </li>

            <div
              className={`burger ${menuIsActive ? `menu--is--active` : null} `}
              onClick={() => setMenuIsActive(!menuIsActive)}
            >
              <span className="menu--line"></span>
              <span className="menu--line"></span>
            </div>
          </ul>
        </nav>
      </div>
      <CollapsedNav {...MyxProps} />
    </div>
  );
}

{
  /* {!account ? (
  <button
    className="header--connect"
    onClick={() => _connectToMetamask()}
  >
    connect wallet
  </button>
) : (
  <button
    className="header--connect"
    onClick={() => deactivate()}
  >
    <div className=" disconnect">Acc: {account}</div>
  </button>
)} */
}
