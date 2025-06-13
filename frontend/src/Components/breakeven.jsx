import React,{useState} from 'react'


function Breakeven() {
  const [fixcost, setfixcost] = useState("");
  const [sellingprice, setsellingprice] = useState("");
  const [variablecost, setvariablecost] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const fixcost1 = parseFloat(fixcost);
    const sellingprice1 = parseFloat(sellingprice);
    const varcost = parseFloat(variablecost);

    if (fixcost1 < 0 || sellingprice1 < 0 || varcost < 0) {
      setResult("Please enter valid non-negative values");
      return;
    }

    
    const res = fixcost1/(sellingprice1-varcost);
    setResult(`UNITS: ${res.toFixed(2)}`);
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 relative z-10">
        <h1
          className="text-6xl motion-preset-blur-right text-white mb-12" 
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Break Even Point
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
            name="FC"
            placeholder="FIXED COST"
            required
            value={fixcost}
            onChange={(e) => setfixcost(e.target.value)}
            className="rounded-full bg-white py-3 px-6 text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
            aria-label="MRP"
          />

          <input
            type="number"
            step="any"
            min="0"
            name="SP"
            placeholder="SELLING PRICE"
            required
            value={sellingprice}
            onChange={(e) => setsellingprice(e.target.value)}
            className="rounded-full bg-white py-3 px-6 text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
            aria-label="Retailer Margin"
          />

          <input
            type="number"
            step="any"
            min="0"
            name="VARC"
            placeholder="VARIABLE COST"
            required
            value={variablecost}
            onChange={(e) => setvariablecost(e.target.value)}
            className="rounded-full py-3 bg-white px-6 text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
            aria-label="GST"
          />

          <button
            type="submit"
            className="rounded-full bg-[#702445] text-white py-3 px-8 font-normal hover:bg-pink-700 transition focus:outline-none focus:ring-4 focus:ring-pink-500"
            aria-label="Calculate res"
          >
            Calculate
          </button>

          
        </form>
      </main>
  )
}


export default Breakeven
