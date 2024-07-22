import React from "react";
import { transactions } from "../../constants";

const Income = () => {
  return (
    <div className="container">
      <div>
        <h2 className="fw-bold">Income</h2>
        <p>
          Last{" "}
          <span className="fw-semibold text-decoration-underline link-offset-2 opacity-75">
            30 days
          </span>
        </p>
        <h2 className="fw-bold">$2,260</h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 98">
        {/* Horizontal axis */}
        <g>
          {/* The dashed lines of the graph */}
          <line
            x1="15"
            y1="84"
            x2="140"
            y2="84"
            strokeWidth="0.1"
            stroke="#000"
            strokeDasharray="3,5"
          />
          <line
            x1="15"
            y1="70"
            x2="140"
            y2="70"
            strokeWidth="0.1"
            stroke="#000"
            strokeDasharray="3,5"
          />
          <line
            x1="15"
            y1="56"
            x2="140"
            y2="56"
            strokeWidth="0.1"
            stroke="#000"
            strokeDasharray="3,5"
          />
          <line
            x1="15"
            y1="56"
            x2="140"
            y2="56"
            strokeWidth="0.1"
            stroke="#000"
            strokeDasharray="3,5"
          />
          <line
            x1="15"
            y1="42"
            x2="140"
            y2="42"
            strokeWidth="0.1"
            stroke="#000"
            strokeDasharray="3,5"
          />
          <line
            x1="15"
            y1="28"
            x2="140"
            y2="28"
            strokeWidth="0.1"
            stroke="#000"
            strokeDasharray="3,5"
          />
          <line
            x1="15"
            y1="14"
            x2="140"
            y2="14"
            strokeWidth="0.1"
            stroke="#000"
            strokeDasharray="3,5"
          />

          {/* The texts on the horizontal axis */}
          <text x="21" y="92" fontSize="0.35em">
            Ju
          </text>
          <text x="42" y="92" fontSize="0.35em">
            Au
          </text>
          <text x="61" y="92" fontSize="0.35em">
            Se
          </text>
          <text x="81" y="92" fontSize="0.35em">
            Oc
          </text>
          <text x="101" y="92" fontSize="0.35em">
            No
          </text>
          <text x="121" y="92" fontSize="0.35em">
            De
          </text>
        </g>

        {/* The bar chart representation */}
        <g>
          <rect x="20" y="28" width="10" height="56" fill="#FFEAD0" />
          <rect x="40" y="63" width="10" height="21" fill="#FFEAD0" />
          <rect x="40" y="63" width="10" height="21" fill="#FFEAD0" />
          <rect x="40" y="63" width="10" height="21" fill="#FFEAD0" />
          <rect x="60" y="42" width="10" height="42" fill="#FFEAD0" />
          <rect x="80" y="49" width="10" height="35" fill="#FFEAD0" />
          <rect x="100" y="63" width="10" height="21" fill="#FF8C38" />
          <rect x="120" y="77" width="10" height="7" fill="#FF8C38" />
        </g>

        {/* Vertical axis */}
        <g>
          {/* Texts on the vertical axis */}
          <text x="0" y="84" fontSize="0.28em">
            $0
          </text>
          <text x="0" y="70" fontSize="0.28em">
            $1k
          </text>
          <text x="0" y="56" fontSize="0.28em">
            $2k
          </text>
          <text x="0" y="42" fontSize="0.28em">
            $3k
          </text>
          <text x="0" y="28" fontSize="0.28em">
            $4k
          </text>
          <text x="0" y="14" fontSize="0.28em">
            $5k
          </text>
        </g>
      </svg>
      <div className="py-5">
        <div className="d-flex justify-content-between">
          <p className="fw-bold">Your transactions (3)</p>
          <p>
            Last{" "}
            <span className="fw-semibold text-decoration-underline link-offset-2 opacity-75">
              30 days
            </span>
          </p>
        </div>
        <div className="d-flex flex-column gap-4">
          {transactions.map((transaction,) => (
            <div
              key={transaction.id}
              className={`p-4 bg-white d-flex justify-content-between `}
            >
              <h5 className="fw-bold">${transaction.amount}</h5>
              <p>{transaction.date}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Income;
