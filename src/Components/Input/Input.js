import style from './Input.module.css'
const Input = ({ placeholder, type}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={style.inputAuth}
    ></input>
  );
};
export default Input