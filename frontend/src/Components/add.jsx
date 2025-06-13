import React, { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Add() {
    const [form, setForm] = useState({
        name: '', batch: '', quantity: '', mrp: '', ptr: '', expiry: ''
    });

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/products', form);
            setForm({ name: '', batch: '', quantity: '', mrp: '', ptr: '', expiry: '' });
            toast.success("Added Succesfully");
            const audio = new Audio('/noti2.mp3'); 
        audio.play();
            
        } catch (err) {
            console.error('Failed to add product:', err);
            alert('Error adding product');
        }
    };
    return (
        <div>
            <main className="flex motion-preset-blur-right justify-center mt-10 px-6">
                <section className="bg-[#161d4f] rounded-3xl w-full max-w-5xl py-12 px-10">
                    <h1 className="text-white text-5xl text-center mb-12 font-bold">PRODUCTS</h1>

                    <form className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-20"
                        onSubmit={handleAdd}>
                        <input
                            type="text"
                            placeholder="PRODUCT NAME"
                            className="rounded-full bg-white text-black py-3 px-8 text-center text-sm sm:text-base"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="BATCH" 
                            className="rounded-full py-3 bg-white text-black px-8 text-center text-sm sm:text-base"
                            value={form.batch}
                            onChange={(e) => setForm({ ...form, batch: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="QUANTITY"
                            className="rounded-full py-3 bg-white text-black px-8 text-center text-sm sm:text-base"
                            value={form.quantity}
                            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="MRP"
                            className="rounded-full py-3 bg-white text-black px-8 text-center text-sm sm:text-base"
                            value={form.mrp}
                            onChange={(e) => setForm({ ...form, mrp: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="PTR"
                            className="rounded-full py-3 bg-white text-black px-8 text-center text-sm sm:text-base"
                            value={form.ptr}
                            onChange={(e) => setForm({ ...form, ptr: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="EXP DATE"
                            className="rounded-full py-3 bg-white text-black px-8 text-center text-sm sm:text-base"
                            value={form.expiry}
                            onChange={(e) => setForm({ ...form, expiry: e.target.value })}
                        />
                        <div className="sm:col-span-2 flex justify-center mt-4">
                            <button
                                type="submit"
                                className="bg-[#7a2040] text-white rounded-full py-3 px-12 text-sm sm:text-base"
                            >
                                ADD
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Add
