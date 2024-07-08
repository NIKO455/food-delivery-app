import {Button} from "../components/Button.tsx";
import {CartContext} from '../contexts/CartContext.tsx'
import {JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useContext, useState} from "react";

export const CartPage = () => {

    const cartState = useContext(CartContext);
    const countItem = cartState.cart;
    const originalP = countItem.reduce((total: number, value: { price: number; }) => {
        return total + value.price;
    }, 0);
    const tax = countItem.length > 0 ? 12 : 0;
    const totalPrice = originalP + tax

    const removeItem = (id: Key | null | undefined) => {
        cartState.discardItem(id)
    }


    return (
        <>
            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">

                        {
                            countItem && countItem.length > 0 ?
                                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                    <div className="space-y-6">
                                        {
                                            countItem.map((item: {
                                                qty: number;
                                                id: Key | null | undefined;
                                                image: string | undefined;
                                                price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                                                name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                                            }, index: number) => (
                                                <div key={index}
                                                     className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-4">
                                                    <div
                                                        className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                        <a href="#" className="shrink-0 md:order-1">
                                                            <img className="h-24 w-24 object-cover dark:block"
                                                                 src={item.image}
                                                                 alt="imac image"/>
                                                        </a>

                                                        <label htmlFor="counter-input" className="sr-only">Choose
                                                            quantity:</label>
                                                        <div
                                                            className="flex items-center justify-between md:order-3 md:justify-end">
                                                            <div className="flex items-center">
                                                                <p>{item.qty}</p>
                                                            </div>
                                                            <div className="text-end md:order-4 md:w-32">
                                                                <p className="text-base font-bold text-gray-900 dark:text-white">${item.price}</p>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                            <a href="#"
                                                               className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.name}</a>

                                                            <div className="flex items-center gap-4">
                                                                <button type="button"
                                                                        onClick={() => removeItem(item.id)}
                                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                                         xmlns="http://www.w3.org/2000/svg" width="24"
                                                                         height="24"
                                                                         fill="none" viewBox="0 0 24 24">
                                                                        <path stroke="currentColor"
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round" strokeWidth="2"
                                                                              d="M6 18 17.94 6M18 18 6.06 6"/>
                                                                    </svg>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                :
                                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                    <div className="space-y-6">
                                        <p className='text-center'>No product in cart</p>
                                    </div>
                                </div>
                        }

                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div
                                className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original
                                                price
                                            </dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">${originalP}</dd>
                                        </dl>
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">${tax}</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd className="text-base font-bold text-gray-900 dark:text-white">${totalPrice}</dd>
                                    </dl>
                                </div>
                                <Button content={'Proceed to Checkout'} className={'w-full'}/>

                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                    <a href="#" title=""
                                       className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                        Continue Shopping
                                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div
                                className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="voucher"
                                               className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do
                                            you have a voucher or gift card? </label>
                                        <input type="text" id="voucher"
                                               className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                               placeholder="" required/>
                                    </div>
                                    <Button content={'Apply Code'} className={'w-full'}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
