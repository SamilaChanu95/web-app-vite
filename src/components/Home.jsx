import React from 'react';

function Home() {
    return (
        <div className="flex flex-col items-center h-screen justify-center bg-gray-100">
            <div className="flex flex-wrap gap-5 justify-center">
                <div className="w-70 bg-white border-none rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2.5">
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd" alt="Salad Bowl" className="object-cover w-full h-45" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Fresh Salad Bowl</h3>
                        <p className="text-sm text-gray-600 font-normal mb-3">Mixed greens with cherry tomatoes, cucumber, and balsamic dressing.</p>
                        <div className="flex justify-between items-center mt-4 pt-2 border-t-gray-200 border-t-1">  
                            <span className="font-bold text-amber-600 text-lg">$8.99</span>
                            <span className="text-xs text-green-600">VEG</span>
                        </div>
                        <button className="py-2 px-4 border-none rounded-md text-white bg-amber-600 cursor-pointer font-semibold hover:bg-amber-700">Add to Cart</button>
                    </div>
                </div>

                <div className="w-70 bg-white border-none rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2.5">
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Pasta" className="object-cover w-full h-45" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Creamy Pasta</h3>
                        <p className="text-sm text-gray-600 font-normal mb-3">Penne pasta in rich Alfredo sauce with mushrooms and herbs.</p>
                        <div className="flex justify-between items-center mt-4 pt-2 border-t-gray-200 border-t-1">
                            <span className="font-bold text-amber-600 text-lg">$12.99</span>
                            <span className="text-xs text-amber-600">NON-VEG</span>
                        </div>
                        <button className="py-2 px-4 border-none rounded-md text-white bg-amber-600 cursor-pointer font-semibold hover:bg-amber-700">Add to Cart</button>
                    </div>
                </div>

                <div className="w-70 bg-white border-none rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2.5">
                    <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187" alt="Burger" className="object-cover w-full h-45" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Classic Burger</h3>
                        <p className="text-sm text-gray-600 font-normal mb-3">Beef patty with cheese, lettuce, and special sauce in a brioche bun.</p>
                        <div className="flex justify-between items-center mt-4 pt-2 border-t-gray-200 border-t-1">
                            <span className="font-bold text-amber-600 text-lg">$10.49</span>
                            <span className="text-xs text-amber-600">NON-VEG</span>
                        </div>
                        <button className="py-2 px-4 border-none rounded-md text-white bg-amber-600 cursor-pointer font-semibold hover:bg-amber-700">Add to Cart</button>
                    </div>
                </div>

                <div className="w-70 bg-white border-none rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2.5">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="Pizza" className="object-cover w-full h-45" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Margherita Pizza</h3>
                        <p className="text-sm text-gray-600 font-normal mb-3">Classic pizza with tomato sauce, mozzarella, and fresh basil.</p>
                        <div className="flex justify-between items-center mt-4 pt-2 border-t-gray-200 border-t-1">
                            <span className="font-bold text-amber-600 text-lg">$14.99</span>
                            <span className="text-xs text-green-600">VEG</span>
                        </div>
                        <button className="py-2 px-4 border-none rounded-md text-white bg-amber-600 cursor-pointer font-semibold hover:bg-amber-700">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Home;