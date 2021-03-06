import React from "react";
import { tokenInfo } from "./data/tokens";

function TokenOnChainValidation(props) {
  const token = props.token;
  const vaults = tokenInfo[token].vaults;

  return (
    <>
      <div
        className="validation desktop_only"
        style={{ marginBottom: "-30px", marginTop: "5px" }}
      >
        {vaults &&
          vaults.map((vault, index) => (
            <a
              key={index}
              className="validation__item"
              href={`/dashboard/${vault}`}
              style={{ zIndex: 2 }}
            >
              <div style={{ display: "flex" }}>
                <span>
                  ONCHAIN VALIDATION{vaults.length > 1 ? ` - ${index + 1}` : ""}
                </span>
                {index !== vaults.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      height: "16px",
                      margin: "2px 10px",
                      backgroundColor: "white",
                      opacity: ".8",
                    }}
                  />
                )}
              </div>
            </a>
          ))}
      </div>
    </>
  );
}

export default TokenOnChainValidation;
