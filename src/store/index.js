import React, { useEffect, useState } from "react";
const Mycontext = React.createContext();

const Api_Key = "4CE94B8F-29A6-4DE2-8D11-1A3C15CAD930";

export const Myprovider = (props) => {
  const [filterdogs, setfilterdogs] = useState([]);
  const [filtertext, setfiltertext] = useState("");
  const [alldoges, setalldoges] = useState([]);
  const [PriceSol, setPriceSol] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch("./dogelist.json");
      const data = await res.json();
      setfilterdogs(Object.values(data));
      setalldoges(Object.values(data));
    };
    fetching();
  }, []);
  useEffect(() => {
    const fetching = async () => {
      const res = await fetch(
        "https://rest.coinapi.io/v1/exchangerate/SOL/USD?apikey=4CE94B8F-29A6-4DE2-8D11-1A3C15CAD930"
      );
      const data = await res.json();
      setPriceSol(data.rate);
    };
    fetching();
  }, []);

  useEffect(() => {
    if (filtertext === "") {
      setfilterdogs(alldoges);
    } else {
      const text = filtertext.toLowerCase();
      const fst = text.charAt(0);
      const upper = fst.toUpperCase();
      const lasttext = text.slice(1);
      const alltext = upper + lasttext;
      const filtering = alldoges.filter((item) => {
        return item.name === alltext;
      });
      setfilterdogs(filtering);
    }
  }, [filtertext]);

  const content = {
    filterdogs,
    filtertext,
    alldoges,
    setfiltertext,
    PriceSol,
  };
  return (
    <Mycontext.Provider value={content}>{props.children}</Mycontext.Provider>
  );
};
export default Mycontext;
