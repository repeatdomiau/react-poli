
const Input = ({ label, type, value, onChange }) => {

    return (
        <div>
            {label + ':'}
            <input
                type={type}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default Input;