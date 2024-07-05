import { Button } from "../../components/Button.tsx";
import React from "react";
import {Link} from "react-router-dom";

interface FoodCardProps {
    foodName: string;
    foodImage: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ foodName, foodImage }) => {
    return (
        <div className="w-full max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-3" style={{ borderRadius: "20px" }} src={foodImage} alt="product image" />
            </a>

            <div className="px-2 pb-5">
                <Link to={"/"}>
                    <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">{foodName}</h5>
                </Link>
                <div className="flex justify-between mt-5 gap-4">
                    <div className="w-[50%]">
                        <select
                            id="no_of_product"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            {Array.from(Array(6), (_e, i) => (
                                <option value={i + 1} key={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-[50%]">
                        <select
                            id="food_type"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">$599</span>
                    <Button content="Add to Cart" />
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
