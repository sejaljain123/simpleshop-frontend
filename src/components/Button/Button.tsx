interface ButtonProps {
    type: "button" | "submit" | "reset" | undefined;
    onClick: (e?: any) => void;
    label: string;

}

const Button = (props: ButtonProps) => {
    const { type, onClick, label, ...rest } = props;
    return (

        <button className="btn btn-primary m-1" type={type} onClick={onClick} {...rest} >
            {label}
        </button>
    );
}
export default Button;