import './input.css';

const Input = ({ type, idFor, label }) => {
  return (
    <div className='componente-input'>
        <input type={type} id={idFor} placeholder=' '/>
        <label htmlFor={idFor} className='fake-placeholder'>{label}</label>
    </div>
  );
};

export default Input;
