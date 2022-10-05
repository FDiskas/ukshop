import * as React from 'react';
import { useState } from 'react';

interface Props {
    value?: number;
    onChange?: (value: number) => void;
}
export const NumberInputComponent: React.FC<Props> = ({ value = 0, onChange }) => {
    const [number, setNumber] = useState(value);

    const addValue = React.useCallback(() => {
        setNumber((latest_number) => {
            const mew_number = isNaN(latest_number) ? 0 : latest_number + 1;
            if (onChange) {
                onChange(mew_number);
            }

            return mew_number;
        });
    }, [onChange]);

    const removeValue = React.useCallback(() => {
        setNumber((latest_number) => {
            const new_number = latest_number > 0 ? latest_number - 1 : 0;

            if (onChange) {
                onChange(new_number);
            }

            return new_number;
        });
    }, [onChange]);

    return (
        <div className="flex flex-row h-10 w-full relative bg-transparent mt-1">
            <button
                data-action="decrement"
                className=" hover:text-gray-400 h-full w-20 cursor-pointer outline-none"
                onClick={removeValue}
            >
                <span className="m-auto text-2xl font-thin">﹤</span>
            </button>
            <input
                type="number"
                className="outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                name="custom-input-number"
                value={number}
                min="0"
                readOnly
            ></input>
            <button
                data-action="increment"
                className=" hover:text-gray-400 h-full w-20 cursor-pointer outline-none"
                onClick={addValue}
            >
                <span className="m-auto text-2xl font-thin">﹥</span>
            </button>
        </div>
    );
};
