


interface ButtonProps {
    text: string,
    href?: string,
    onClick?: () => void,
    variant: "primary" | "secondary" | "primaryFull" | "outline",
    disabled?: boolean,
    fullWidth?: boolean,
    className?: string,
    icon?: React.ReactNode,
    iconPosition?: "right" | "left"
}

const Button = (props: ButtonProps) => {
    const variantStyles = {
        primary: "bg-[#e1e0e0] hover:bg-[#ededed] text-neutral-200 bg-black/20 backdrop-blur-lg border-mywhite-border shadow-xl rounded-lg ",
        primaryFull: "bg-[#DCDCDC] text-black/80 border border-mywhite-border rounded-full",
        secondary: "bg-black/30 text-white rounded-full ",
        outline: "bg-transparent border border-mywhite-border text-mywhite-bg rounded-full ",
    }
    const defaultStyles = "max-h-25 h-11 min-w-10 my-2 px-4 md:px-8 py-2 font-medium"
    return <>
        <button
            disabled={props.disabled}
            className={`${defaultStyles} ${props.className}   ${props.variant ? variantStyles[props.variant] : variantStyles.primary} ${props.fullWidth && 'w-full md:w-[150px]'}`}
            onClick={props.onClick}
        >
            <span className={"flex justify-center items-center gap-2 " + ` `} >
                {props.iconPosition === 'left' && props.icon}
                {props.text}
                {props.iconPosition !== 'left' && props.icon}
            </span>
        </button>
    </>;
};

export default Button;
