import FilterIcon from 'public/icons/filter.svg';
import SearchIcon from 'public/icons/search.svg';

export const ProductFiltersContainer = () => {
    return (
        <nav id="store" className="w-full top-0 px-6 py-1">
            <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <a
                    className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                    href="#"
                >
                    Mens
                </a>

                <div className="flex items-center" id="store-nav-content">
                    <a className="pl-3 flex no-underline hover:text-black" href="#">
                        <FilterIcon width={24} height={24} />
                    </a>

                    <a className="pl-3 flex no-underline hover:text-black" href="#">
                        <SearchIcon width={24} height={24} className="fill-current hover:text-black" />
                    </a>
                </div>
            </div>
        </nav>
    );
};
