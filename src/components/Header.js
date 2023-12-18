import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/SidebarSlice";
import { suggest } from "../api";
import { cacheResults } from "../utils/SearchSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [boxSuggestion, setBoxsuggestion] = useState(false);

  const cachedResults = useSelector((store) => store.search.cachedResults);

  const dispatch = useDispatch();

  useEffect(() => {
    const performSearch = setTimeout(async () => {
      if (cachedResults[term]) {
        setSuggestions(cachedResults[term]);
      } else {
        try {
          const results = await suggest(term);
          dispatch(cacheResults({ term, results }));
          console.log(cachedResults);
          setSuggestions(results);
        } catch (error) {
          console.error("error fetching suggestions:", error.message);
        }
      }
    }, 300);

    return () => {
      clearTimeout(performSearch);
    };
  }, [term, cachedResults, dispatch]);

  const handleInput = (e) => {
    setTerm(e.target.value);
  };

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex col-span-1 gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer"
          onClick={() => handleToggle()}
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
          className="h-6"
        />
      </div>
      <div className="col-span-10 place-self-center">
        <div>
          <input
            className="w-96 border border-gray-400 rounded-l-full p-2 font-medium"
            type="text"
            value={term}
            placeholder="Search"
            onChange={handleInput}
            onFocus={() => setBoxsuggestion(true)}
            onBlur={() => setBoxsuggestion(false)}
          />
          <button className="bg-gray-100 border border-gray-400 rounded-r-full pr-5 pl-3 pt-1 pb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pt-1"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>
        {boxSuggestion && (
          <div className="bg-white w-96 fixed border border-gray-100 rounded-lg shadow-lg">
            <ul className="cursor-pointer">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="py-2 px-3 font-medium hover:bg-gray-100"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
