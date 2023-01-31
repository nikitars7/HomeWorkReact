const Button = (props) =>{
   const {children , countClick} = props;
   
   return <button className= "counter" onClick={countClick} >{children}</button>
}

export default Button