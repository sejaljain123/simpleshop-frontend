interface InputProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: any) => void;
    }

const Input = (props: InputProps) => {
    const { label, name, type, value, onChange, ...rest } = props;
    
    return (
        <div className="input">
      
        <input
            className="input input-bordered w-full max-w-xs"
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