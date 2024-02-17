import './style.css';

interface PrimaryInputProps {
    label: string,
    value: string,
    onChange: (value: string) => void,
    onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function PrimaryInput({label, value, onChange, onKeyPress}: PrimaryInputProps) {
    return (
        <div className='input-wrapper'>
            <input 
                className='primary-input' 
                value={value} 
                type="text" 
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={onKeyPress}
                placeholder={label}
            ></input>
        </div>
    )
}