import React, { useState } from "react";
import './Cal.css';

const Cal = () => {
  const [mrp, setMrp] = useState("");
  const [gst, setGst] = useState("");
  const [margin, setMargin] = useState("");
  const [result, setResult] = useState("");

  function cal() {
    const m = parseFloat(mrp);
    const g = parseFloat(gst);
    const r = parseFloat(margin);

    if (isNaN(m) || isNaN(g) || isNaN(r)) {
      setResult("Please enter valid numbers");
      return;
    }

    const ptr = (m - (m * (r / 100))) / (1 + (g / 100));
    setResult(ptr.toFixed(2));
  }

  return (
    <div className="Caldiv">
    <div className="calculator" role="main" aria-label="Ptr Calculator">
      <h1>Ptr Calculator</h1>
      <input
        id="display"
        value={result}
        disabled
        aria-live="polite"
        aria-label="Result display"
      />
      <div className="input-group" id="important">
        <label htmlFor="mrp">
          <span>MRP</span>
          <input
            id="mrp"
            type="number"
            step="0.01"
            placeholder="Enter MRP"
            min="0"
            aria-required="true"
            value={mrp}
            onChange={(e) => setMrp(e.target.value)}
          />
        </label>
        <label htmlFor="gst">
          <span>GST %</span>
          <input
            id="gst"
            type="number"
            step="0.01"
            placeholder="Enter GST %"
            min="0"
            max="100"
            value={gst}
            onChange={(e) => setGst(e.target.value)}
          />
        </label>
        <label htmlFor="margin">
          <span>Retailer Margin %</span>
          <input
            id="margin"
            type="number"
            step="0.01"
            placeholder="Enter Margin %"
            min="0"
            max="100"
            value={margin}
            onChange={(e) => setMargin(e.target.value)}
          />
        </label>
      </div>
      <div id="button">
        <button type="button" onClick={cal}>
          Calculate
        </button>
      </div>
    </div>
    </div>
  );
};

export default Cal;
