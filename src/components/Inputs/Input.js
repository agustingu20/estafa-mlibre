import './input.css';

const Input = ({
  type, idFor, label, hookForm, errorMensaje,
}) => {
  return (
    <div className='componente-input'>
        <input type={type} id={idFor} placeholder=' ' autoComplete='current-password' {...hookForm}/>
        <label htmlFor={idFor} className='fake-placeholder'>{label}</label>
        {errorMensaje && <p className='mensaje-error'>{errorMensaje}</p>}
    </div>
  );
};

export default Input;
