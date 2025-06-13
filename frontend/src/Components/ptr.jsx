import React,{useState} from 'react'


function PTRCalculator() {
  const [mrp, setMrp] = useState("");
  const [retailerMargin, setRetailerMargin] = useState("");
  const [gst, setGst] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mrpVal = parseFloat(mrp);
    const marginVal = parseFloat(retailerMargin);
    const gstVal = parseFloat(gst);

    if (mrpVal < 0 || marginVal < 0 || gstVal < 0) {
      setResult("Please enter valid non-negative values");
      return;
    }

    

   

    const ptr =(mrpVal - (mrpVal * (marginVal / 100))) / (1 + gstVal / 100);
    setResult(`PTR: ₹${ptr.toFixed(2)}`);
  };

  return (
    <main className="flex-grow flex flex-col w-338 justify-center items-center px-5 py-12">
        <h1
          className="text-6xl motion-preset-blur-right text-white mb-12"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          PTR
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1e3b] motion-preset-blur-right rounded-3xl p-8 w-full max-w-sm shadow-lg flex flex-col gap-6"
        >
           <div className="h-12 rounded-xl bg-[#702445] flex items-center justify-center text-white font-semibold text-lg px-4">
          {result || "Result will appear here"}
        </div>

          <input
            type="number"
            step="any"
            min="0"
            name="mrp"
            placeholder="MRP"
            required
            value={mrp}
            onChange={(e) => setMrp(e.target.value)}
            className="rounded-full bg-white py-3 px-6 text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
            aria-label="MRP"
          />

          <input
            type="number"
            step="any"
            min="0"
            name="retailerMargin"
            placeholder="Retailer Margin"
            required
            value={retailerMargin}
            onChange={(e) => setRetailerMargin(e.target.value)}
            className="rounded-full bg-white py-3 px-6 text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
            aria-label="Retailer Margin"
          />

          <input
            type="number"
            step="any"
            min="0"
            name="gst"
            placeholder="GST"
            required
            value={gst}
            onChange={(e) => setGst(e.target.value)}
            className="rounded-full bg-white py-3 px-6 text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
            aria-label="GST"
          />

          <button
            type="submit"
            className="rounded-full bg-[#702445] text-white py-3 px-8 font-normal hover:bg-pink-700 transition focus:outline-none focus:ring-4 focus:ring-pink-500"
            aria-label="Calculate PTR"
          >
            Calculate
          </button>

          
        </form>
      </main>
  )
}


export default PTRCalculator
