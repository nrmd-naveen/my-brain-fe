import React from "react";


type InputProps = {
    placeHolder: string,
    className?: string,
    disabled?: boolean,
    isFullWidth?: boolean,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        const defaultStyles = "my-2 h-9 rounded-md bg-[#e5e5e5] text-black/80 border border-mywhite-border rounded-lg px-3 py-1 font-medium shadow-sm placeholder-black/40 outline-none disabled:cursor-not-allowed disabled:opacity-50";
    return <>
        <input
            className={`${defaultStyles} ${props.className} ${props.isFullWidth && 'w-full '}`}
            type="text"
            placeholder={props.placeHolder}
            ref={ref}
            disabled={props.disabled}
            onKeyDown={props.onKeyDown}
        />
    </>;
    }
)


export default Input;
