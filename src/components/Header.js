import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="129"
          height="61"
          viewBox="0 0 129 61"
        >
          <text
            id="Boook"
            transform="translate(0 48)"
            fill="#1f0056"
            font-size="50"
            font-family="ScriptMTBold, Script MT"
          >
            <tspan x="0" y="0">
              Boook
            </tspan>
          </text>
        </svg>
      </Link>
      <div className="nav">
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="98"
            height="36"
            viewBox="0 0 98 36"
          >
            <g
              id="Group_17"
              data-name="Group 17"
              transform="translate(-1412 -27)"
            >
              <rect
                id="Rectangle_32"
                data-name="Rectangle 32"
                width="98"
                height="36"
                rx="18"
                transform="translate(1412 27)"
                fill="#5d00ff"
              />
              <path
                id="Icon_awesome-donate"
                data-name="Icon awesome-donate"
                d="M10,16.25A8.125,8.125,0,1,0,1.875,8.125,8.124,8.124,0,0,0,10,16.25ZM9.133,3.8V3.148A.647.647,0,0,1,9.781,2.5h.434a.647.647,0,0,1,.648.648v.664a3.08,3.08,0,0,1,1.68.6.438.438,0,0,1,.047.668l-.637.605a.44.44,0,0,1-.547.039,1.286,1.286,0,0,0-.7-.2H9.191a.679.679,0,0,0-.637.715.706.706,0,0,0,.473.688l2.434.73a2.447,2.447,0,0,1,1.707,2.348,2.409,2.409,0,0,1-2.309,2.437V13.1a.647.647,0,0,1-.648.648H9.777a.647.647,0,0,1-.648-.648v-.664a3.08,3.08,0,0,1-1.68-.6.438.438,0,0,1-.047-.668l.637-.605a.44.44,0,0,1,.547-.039,1.286,1.286,0,0,0,.7.2H10.8a.679.679,0,0,0,.637-.715.706.706,0,0,0-.473-.687L8.531,8.59A2.447,2.447,0,0,1,6.824,6.242,2.411,2.411,0,0,1,9.133,3.8ZM18.75,13.75H17.48a9.467,9.467,0,0,1-2.852,2.5h2.492a.349.349,0,0,1,.375.313v.625a.349.349,0,0,1-.375.313H2.875a.349.349,0,0,1-.375-.312v-.625a.349.349,0,0,1,.375-.312H5.367a9.514,9.514,0,0,1-2.852-2.5H1.25A1.249,1.249,0,0,0,0,15v3.75A1.249,1.249,0,0,0,1.25,20h17.5A1.249,1.249,0,0,0,20,18.75V15A1.249,1.249,0,0,0,18.75,13.75Z"
                transform="translate(1423 34)"
                fill="#f6f6f6"
              />
              <text
                id="Donate"
                transform="translate(1448 51)"
                fill="#fff"
                font-size="16"
                font-family="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  Donate
                </tspan>
              </text>
            </g>
          </svg>
        </Link>
        <button className="nav-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34.147"
            height="24.132"
            viewBox="0 0 34.147 24.132"
          >
            <g
              id="Group_16"
              data-name="Group 16"
              transform="translate(-1551 -32.434)"
            >
              <g id="Group_15" data-name="Group 15">
                <line
                  id="Line_1"
                  data-name="Line 1"
                  x2="31.147"
                  transform="translate(1552.5 33.934)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="3"
                />
                <line
                  id="Line_2"
                  data-name="Line 2"
                  x2="31.147"
                  transform="translate(1552.5 44.5)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="3"
                />
                <line
                  id="Line_3"
                  data-name="Line 3"
                  x2="31.147"
                  transform="translate(1552.5 55.066)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="3"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
