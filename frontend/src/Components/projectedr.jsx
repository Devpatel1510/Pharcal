import React,{useState} from 'react'

function Projectedr(){
  const [mshare, setmshare] = useState("");
  const [msize, setmsize] = useState("");
  const [ppu, setppu] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mshare1 = parseFloat(mshare);
    const msize1 = parseFloat(msize);
    const ppu1 = parseFloat(ppu);

   
    
    const res = mshare1 * msize1 * ppu1 ;
    setResult(`REVENUE: ${res.toFixed(2)}`);
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 relative z-10">
        <h1
          className="text-6xl motion-preset-blur-right text-white mb-12" 
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          PROJECTED REVENUE
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
            name="ms1"
            placeholder="MARKET SHARE"
            required
            value={mshare}
            onChange={(e) => setmshare(e.target.value)}
            className="rounded-full bg-white py-3 px-6 text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
            aria-label="MRP"
          />

          <input
            type="number"
            step="any"
            min="0"
            name="ms2"
            placeholder="MARKET SIZE"
            required
            value={msize}
            onChange={(e) => setmsize(e.target.value)}
            className="rounded-full bg-white py-3 px-6 text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
            aria-label="Retailer Margin"
          />

          <input
            type="number"
            step="any"
            min="0"
            name="PPU"
            placeholder="PRICE PER UNIT"
            required
            value={ppu}
            onChange={(e) => setppu(e.target.value)}
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

export default Projectedr
