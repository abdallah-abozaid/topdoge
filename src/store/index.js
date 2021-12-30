import React, { useEffect, useState } from "react";
const Mycontext = React.createContext();
export const Myprovider = (props) => {
  const [filterdogs, setfilterdogs] = useState([]);
  const [filtertext, setfiltertext] = useState("");
  const [alldoges, setalldoges] = useState([]);

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
    setfiltertext,
  };
  return (
    <Mycontext.Provider value={content}>{props.children}</Mycontext.Provider>
  );
};
export default Mycontext;
