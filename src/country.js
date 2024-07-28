import React, { useState } from "react";
import { useEffect } from "react";
import fetchData from "./Api";
import Card from "./card";
import "./Country.css";

let Country = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const response = await fetchData();
      const jsondata = await response.json();
      // console.log(jsondata);
      setData(jsondata);
      //   console.log(data);
    };
    getdata();
  }, []);
  return (
    <>
      <div>hello country</div>
      <div className="card-container">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              image1={item.flag}
              title={item.name}
              source={item.abbr}
            />
          );
        })}
      </div>
    </>
  );
};
export default Country;
