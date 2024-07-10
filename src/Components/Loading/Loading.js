import './loading.css';

function Loading(){
    return(
        <div className="loading_item">
            <div className="container">
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
        </div>
    )
}

export default Loading;