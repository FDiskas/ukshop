import React from 'react';

import Link from 'next/link';

import LogoIcon from 'public/icons/logo.svg';
import UserIcon from 'public/icons/user.svg';
import BasketIcon from 'public/icons/basket.svg';
import BurgerIcon from 'public/icons/burger.svg';

import { CartQuickMenuComponent } from 'src/components/cart/CartQuickMenuComponent';
import { definitions } from 'src/types/Api';
import { useGetCart } from 'src/hooks/useGetCart';

interface Props {
    cartItems: definitions['CartItem'][];
}

export const HeaderComponent: React.FC<Props> = ({ cartItems }) => {
    const { data } = useGetCart();

    return (
        <nav id="header" className="w-full z-30 top-0 left-0 right-0 fixed md:relative md:p-y1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3 shadow-md md:shadow-none relative">
                <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                    <BurgerIcon className="fill-current text-gray-900" width={20} height={20} />
                </label>
                <input className="absolute opacity-0 left-0 top-0" type="checkbox" id="menu-toggle" />

                <div
                    className="opacity-0 h-0 md:h-auto md:opacity-100 md:flex md:items-center md:w-auto w-full order-3 md:order-1"
                    id="menu"
                >
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                            <li>
                                <Link href="/">
                                    <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4">
                                        Shop
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4">
                                        About
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="order-1 md:order-2">
                    <Link href="/">
                        <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                            <LogoIcon className="fill-current text-gray-800 mr-2" width={24} height={24} />
                            UKSHOP
                        </a>
                    </Link>
                </div>

                <div className="order-2 md:order-3 flex items-center">
                    <a className="inline-block no-underline hover:text-black" href="#">
                        <UserIcon className="fill-current hover:text-black" width={24} height={24} />
                    </a>

                    <label htmlFor="cart-toggle" className="cursor-pointer block">
                        <div className="pl-3 inline-block no-underline hover:text-black relative">
                            <BasketIcon className="fill-current hover:text-black text-brand" width={24} height={24} />
                            {data != null && data?.length > 0 && (
                                <div className="bg-red-100 text-red-800 w-5 h-5 font-medium text-center border-red-800 border-1 block text-xs opacity-80 rounded-full absolute top-3 left-5">
                                    {data?.length}
                                </div>
                            )}
                        </div>
                    </label>
                    <div>
                        <input className="absolute opacity-0" type="checkbox" id="cart-toggle" />
                        <div id="cart" className="opacity-0">
                            <CartQuickMenuComponent data={cartItems} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
