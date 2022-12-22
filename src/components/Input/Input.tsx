interface InputProps {
    label: string;
    name?: string;
    type: string;
    value?: string | number;
    onChange?: (e: any) => void;
    styles?: string;
    }

const Input = (props: InputProps) => {
    const { label, name, type, value, onChange, styles, ...rest } = props;
    
    return (
        <div>
        <input
            className={`input w-full bg-slate-100  ${styles}`}
            placeholder={label}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            {...rest}
        />
        </div>
    );
    };

export default Input;