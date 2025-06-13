import React ,{useState}from 'react'

function Dosage() {
  const [dpk, setdpk] = useState("");
  const [pw, setpw] = useState("");
  
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dpkVal = parseFloat(dpk);
    const pw1 = parseFloat(pw);
    

  

   

    const res = dpkVal * pw1;
    setResult(`DOSAGE: ${res.toFixed(2)} mg`);
  };

  return (
    <main className="flex-grow flex flex-col w-338 justify-center items-center px-5 py-12">
        <h1
          className="text-6xl motion-preset-blur-right text-white mb-12"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          DOSAGE
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
            name="dpk"
            placeholder="DOSE PER KG"
            required
            value={dpk}
            onChange={(e) => setdpk(e.target.value)}
            className="rounded-full bg-white py-3 px-6 text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
            aria-label="dpk"
          />

          <input
            type="number"
            step="any"
            min="0"
            name="pw"
            placeholder="PERSON WEIGHT"
            required
            value={pw}
            onChange={(e) => setpw(e.target.value)}
            className="rounded-full bg-white py-3 px-6 text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
            
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

export default Dosage
