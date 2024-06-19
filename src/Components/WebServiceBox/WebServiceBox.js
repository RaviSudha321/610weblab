import './webServiceBox.css';


function WebServiceBox({title, description, backgroundColor}){
    return(
        <div className='icon_box' style={backgroundColor && {backgroundColor:backgroundColor}}>
            <div className='iconbox_content'>
                {title && <h3 className='iconbox_title'>{title}</h3>}
                {description && <div className='iconbox_description'>{description}</div>}
            </div>
        </div>
    )
}

export default WebServiceBox;