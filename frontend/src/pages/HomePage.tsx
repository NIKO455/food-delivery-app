import FoodCard from "./pageComponents/FoodCard.tsx";
import Carousel from "./pageComponents/Carousel.tsx";
import {ButtonIcon} from "../components/ButtonIcon.tsx";
import {FaSearch} from "react-icons/fa";
import {useEffect, useState} from "react";


export const HomePage = () => {
    const [searchFoodItems, setSearchFoodItems] = useState([]);
    const [foodCategories, setFoodCategories] = useState([]);
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            await fetch('http://localhost:5000/foodCategory/all')
                .then((res) => {
                    return res.json()
                }).then((res) => {
                    setFoodCategories(res.data);
                })
        }
        const fetchItem = async () => {
            await fetch('http://localhost:5000/foodItem/all')
                .then((res) => {
                    return res.json()
                }).then((res) => {
                    setFoodItems(res.data);
                })
        }

        fetchCategory();
        fetchItem();
    }, [])


    return (
        <>
            <div>
                <div className="relative">
                    <Carousel/>
                    <div className="absolute bottom-5 text-center z-10 w-full">
                        <div>
                            <form className="flex items-center max-w-lg mx-auto">
                                <label htmlFor="voice-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div
                                        className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
                                        </svg>
                                    </div>
                                    <input type="text" id="voice-search" value={searchFoodItems}
                                        // @ts-ignore
                                           onChange={(e) => setSearchFoodItems(e.target.value)}
                                           className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Search Mockups, Logos, Design Templates..." required/>
                                    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                                        <svg
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 16 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
                                        </svg>
                                    </button>
                                </div>
                                <ButtonIcon content={"Search"}
                                            svgIcon={<FaSearch/>}/>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="m-5">
                    {
                        foodCategories &&
                        foodCategories.map((foodCat) => (
                            // @ts-ignore
                            <div key={foodCat._id}>
                                {/*@ts-ignore*/}
                                <h1 className={'text-2xl capitalize mb-2 font-bold'}>{foodCat.name}</h1>
                                <hr className={'mb-3'}/>
                                <div className={'flex gap-3'}>
                                    {
                                        // @ts-ignore
                                        foodItems.filter((item) => item.categoryId._id === foodCat._id && item.name.toLowerCase().includes(searchFoodItems)).map((foodItem) => (
                                            // @ts-ignore
                                            <div className={'flex gap-3'} key={foodItem._id}>
                                                <FoodCard
                                                          foodInfo={foodItem}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
        ;
};
