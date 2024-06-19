import { NavLink } from 'react-router-dom';
import './button.css';

function Button({title, link, target, icon}){
    return(
        <div className="global_btn">
            <NavLink to={link} target={target}>
                {icon}
                {title}
            </NavLink>
        </div>
    )
}

export default Button;