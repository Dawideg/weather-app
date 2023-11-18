import React, { useEffect, useState, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ setPhrase }) => {
  const [message, setMessage] = useState("");
  const ref = useRef(null);

  return (
    <div className="search-div">
      <AiOutlineSearch
        className="search-icon"
        size={30}
        onClick={() => {
          setPhrase(ref.current.value);
        }}
      />

      <input
        className="search-bar"
        placeholder="Enter a City..."
        type="text"
        ref={ref}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setPhrase(ref.current.value);
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
