import Link from 'next/link';

import LogoIcon from 'public/icons/logo.svg';
import UserIcon from 'public/icons/user.svg';
import BasketIcon from 'public/icons/basket.svg';
import BurgerIcon from 'public/icons/burger.svg';

export const HeaderComponent = () => {
    return (
        <nav id="header" className="w-full z-30 top-0 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
                <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                    <BurgerIcon className="fill-current text-gray-900" width={20} height={20} />
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

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
                    <a
                        className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                        href="#"
                    >
                        <LogoIcon className="fill-current text-gray-800 mr-2" width={24} height={24} />
                        UKSHOP
                    </a>
                </div>

                <div className="order-2 md:order-3 flex items-center" id="nav-content">
                    <a className="inline-block no-underline hover:text-black" href="#">
                        <UserIcon className="fill-current hover:text-black" width={24} height={24} />
                    </a>

                    <Link href="/cart">
                        <a className="pl-3 inline-block no-underline hover:text-black">
                            <BasketIcon className="fill-current hover:text-black" width={24} height={24} />
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
