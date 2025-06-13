import React,{useState,useEffect} from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
function Update() 
     {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', batch: '', quantity: '', mrp: '', ptr: '', expiry: '' });

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5001/api/products');
    setProducts(res.data);
  };

  const handleEdit = (product) => {
    setEditing(product._id);
    setForm(product);
  };

  

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5001/api/products/${editing}`, form);
    setEditing(null);
    setForm({ name: '', batch: '', quantity: '', mrp: '', ptr: '', expiry: '' });
    fetchProducts();
    toast.success("update Succesfully");
    const audio = new Audio('/noti2.mp3'); 
        audio.play();
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <main className="flex justify-center motion-preset-blur-right items-center py-20 px-6">
        <section className="bg-[#161b4e] rounded-3xl w-full max-w-5xl p-12">
          <h1 className="text-white text-5xl text-center mb-12">PRODUCTS</h1>
          
           <ul className="space-y-4">
        {products.map((p) => (
          <li key={p._id} className="text-black p-3 rounded">
            {editing === p._id ? (
              <form onSubmit={handleUpdate} className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-20">
            <input
              type="text"
              placeholder="PRODUCT NAME"
              className="rounded-full bg-white py-3 px-8 text-center text-sm sm:text-base"
              value={form.name}
              onChange={(e)=>setForm({...form,name:e.target.value})}
            />
            <input
              type="text"
              placeholder="BATCH"
              className="rounded-full bg-white py-3 px-8 text-center text-sm sm:text-base"
              value={form.batch}
              onChange={(e)=>setForm({...form,batch:e.target.value})}
            />
            <input
              type="text"
              placeholder="QUANTITY"
              className="rounded-full bg-white py-3 px-8 text-center text-sm sm:text-base"
              value={form.quantity}
              onChange={(e)=>setForm({...form,quantity:e.target.value})}
            />
            <input
              type="text"
              placeholder="MRP"
              className="rounded-full bg-white py-3 px-8 text-center text-sm sm:text-base"
              value={form.mrp}
              onChange={(e)=>setForm({...form,mrp:e.target.value})}
            />
            <input
              type="text"
              placeholder="PTR"
              className="rounded-full bg-white py-3 px-8 text-center text-sm sm:text-base"
              value={form.ptr}
              onChange={(e)=>setForm({...form,ptr:e.target.value})}
            />
            <input
              type="text"
              placeholder="EXP DATE"
              className="rounded-full bg-white py-3 px-8 text-center text-sm sm:text-base"
              value={form.expiry}
              onChange={(e)=>setForm({...form,expiry:e.target.value})}
            />
            <div className="col-span-full flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#6e1f44] text-white rounded-full py-3 px-12 text-sm sm:text-base"
              >
                UPDATE
              </button>
            </div>
          </form>
            ) : (
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
  <div className="text-gray-800">
    <p className="text-lg font-semibold">{p.name}</p>
    <p className="text-sm text-gray-500">Batch: {p.batch}</p>
  </div>

  <button
    onClick={() => handleEdit(p)}
    className="mt-3 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
  >
    Edit
  </button>
</div>
            )}
          </li>
        ))}
      </ul>
        </section>
      </main>
  )
}

export default Update
