const Button = ({ onclickHandler, children }) => {
    return <button onClick={onclickHandler}>{children}</button>;
  };

  export default Button;