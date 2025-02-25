import { NavLink } from 'react-router-dom';
import './button.css';

function Button({title='Click Here', link="#", target="_self", icon, buttonClass=""}){
    return(
        <div className={`global_btn ${buttonClass ? buttonClass : null}` }>
            <NavLink to={link} target={target}>
                {icon}
                {title}
            </NavLink>
        </div>
    )
}

export default Button;