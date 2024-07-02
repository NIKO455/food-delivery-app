export const FoodCard = () => {
    return (
        <>
            <div
                className="w-full max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="p-3" style={{borderRadius:"20px"}} src="https://fmdadmin.foodmandu.com//Images/Vendor/269/Logo/web_240423103631_200624060757.listing-fire-and-ice.png"
                         alt="product image"/>
                </a>

                <div className="px-2 pb-5">
                    <a href="#">
                        <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">Fire And Ice Pizzeria - Thamel</h5>
                    </a>
                    <div className="flex justify-between mt-5 gap-4">
                        <div className='w-[50%]'>
                            <select id="no_of_product"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {
                                    Array.from(Array(6), (_e, i) => {
                                        return (
                                            <option value={i + i} key={i + 1}>{i + 1}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className='w-[50%]'>
                            <select id="food_type"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">$599</span>
                        <a href="#"
                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                            to cart</a>
                    </div>
                </div>
            </div>

        </>
    );
};
