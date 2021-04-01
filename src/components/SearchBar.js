import React from "react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <form action="/" method="get" className="search-form">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search Here for books"
        name="s"
        className="search-field"
      />
      <button type="submit" className="search-btn-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27.007"
          viewBox="0 0 27 27.007"
        >
          <path
            id="Icon_ionic-ios-search"
            data-name="Icon ionic-ios-search"
            d="M31.184,29.545l-7.509-7.58a10.7,10.7,0,1,0-1.624,1.645l7.46,7.53a1.156,1.156,0,0,0,1.631.042A1.163,1.163,0,0,0,31.184,29.545ZM15.265,23.7a8.45,8.45,0,1,1,5.977-2.475A8.4,8.4,0,0,1,15.265,23.7Z"
            transform="translate(-4.5 -4.493)"
            fill="#f6f6f6"
          />
        </svg>
      </button>
      <button className="search-btn-audio">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.75"
          height="32"
          viewBox="0 0 20.75 32"
        >
          <path
            id="Icon_awesome-microphone"
            data-name="Icon awesome-microphone"
            d="M10.375,22a5.837,5.837,0,0,0,5.659-6V6a5.837,5.837,0,0,0-5.659-6A5.837,5.837,0,0,0,4.716,6V16A5.837,5.837,0,0,0,10.375,22Zm9.432-10h-.943a.973.973,0,0,0-.943,1v3a7.739,7.739,0,0,1-8.3,7.961C5.7,23.556,2.83,19.819,2.83,15.644V13a.973.973,0,0,0-.943-1H.943A.973.973,0,0,0,0,13v2.51c0,5.6,3.771,10.6,8.96,11.356V29h-3.3a.973.973,0,0,0-.943,1v1a.973.973,0,0,0,.943,1h9.432a.973.973,0,0,0,.943-1V30a.973.973,0,0,0-.943-1h-3.3V26.889A10.818,10.818,0,0,0,20.75,16V13A.973.973,0,0,0,19.807,12Z"
            fill="#f6f6f6"
          />
        </svg>
      </button>
    </form>
  );
}
