import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      // Check holdings to ensure enough quantity
      const res = await axios.get("http://localhost:3002/allHoldings");
      const holdings = res.data || [];
      const holding = holdings.find((h) => h.name === uid);

      if (!holding) {
        alert("You do not own this stock.");
        return;
      }

      if (holding.qty < Number(stockQuantity)) {
        alert("Insufficient quantity to sell.");
        return;
      }

      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      });

      // notify orders UI
      window.dispatchEvent(new Event("ordersUpdated"));

      // Update holdings on backend (decrease qty or remove)
      await axios.post("http://localhost:3002/updateHolding", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      });

      // notify UI to refresh holdings
      window.dispatchEvent(new Event("holdingsUpdated"));
      alert("Sell order placed");
    } catch (err) {
      alert("Error placing sell order");
      console.error(err);
    }

    closeSellWindow();
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin released on sell</span>
        <div>
          <button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
