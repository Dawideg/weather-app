import React, { useEffect, useState, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";

const SearchBar = ({ setPhrase }) => {
  const [message, setMessage] = useState("");
  const [hoverAnim, setHoverAnim] = useState(false);
  const ref = useRef(null);

  return (
    <motion.div
      className="search-div"
      onFocus={() => setHoverAnim(true)}
      onBlur={() => setHoverAnim(false)}
      animate={{ scale: hoverAnim ? 1.1 : 1 }}
    >
      <AiOutlineSearch
        className="search-icon"
        size={30}
        onClick={() => {
          setPhrase(ref.current.value);
        }}
      />

      <motion.input
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
    </motion.div>
  );
};

export default SearchBar;
