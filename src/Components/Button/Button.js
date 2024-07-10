import { NavLink } from 'react-router-dom';
import './button.css';

function Button({title, link, target, icon, buttonClass}){
    return(
        <div className={`global_btn ${buttonClass ? buttonClass : ''}` }>
            <NavLink to={link} target={target}>
                {icon}
                {title}
            </NavLink>
        </div>
    )
}

export default Button;