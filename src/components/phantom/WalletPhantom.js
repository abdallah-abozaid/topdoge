import React, { useState, useEffect } from "react";
import * as solanaWeb3 from "@solana/web3.js";

const PhantomConnect = () => {
  const [phantom, setPhantom] = useState(null);
  useEffect(() => {
    if (window["solana"]?.isPhantom) {
      setPhantom(window["solana"]);
    }
  }, []);
  const connectHandler = async () => {
    await phantom.connect();
    console.log("Wallet Connected: " + phantom.isConnected);
    if (phantom.isConnected == true) {
      const wallet = phantom.publicKey.toString();
      console.log("key: " + wallet);
      var connection = new solanaWeb3.Connection(
        solanaWeb3.clusterApiUrl("devnet"),
        "confirmed"
      );
      const balance = await connection.getBalance(phantom.publicKey);
      console.log(parseFloat(balance));
      console.log();
    }
  };

  return (
    <div>
      <button onClick={connectHandler}>Connect to Phantom</button>
    </div>
  );
};

export default PhantomConnect;
