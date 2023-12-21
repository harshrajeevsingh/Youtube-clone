import React, { useState } from "react";
import { countryList } from "../utils/helper";
import { useDispatch } from "react-redux";
import { changeLoaction } from "../utils/LocationSlice";

const Settings = () => {
  const [selectedCountry, setSelectedcountry] = useState("US");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(changeLoaction(selectedCountry));
  }
  return (
    <div className="ml-56 mt-10 w-full h-screen">
      <h2 className=" font-semibold text-2xl dark:text-slate-200">Settings</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-base font-medium text-gray-900 dark:text-slate-200 mt-10">
          Change your location
        </label>
        <div className="flex">
          <select
            name="selectedCountry"
            value={selectedCountry}
            onChange={(e) => setSelectedcountry(e.target.value)}
            id="countries"
            className="bg-gray-50 dark:bg-zinc-700 border border-gray-300 text-gray-900 dark:text-slate-50 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 "
            defaultValue="US"
          >
            {countryList.map((c) => (
              <option value={c.regionCode}>{c.countryName}</option>
            ))}
          </select>
          <button className="ml-10 bg-blue-500 text-white px-5 rounded-lg">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
