import './style.css';

interface ButtonPrimayProps {
    label: string,
    onClick: () => void
}

export function ButtonPrimay({label, onClick}: ButtonPrimayProps) {
    return(
        <button className="btn-primary" onClick={onClick}>
            {label}
        </button>
    )
}