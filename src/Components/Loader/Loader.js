import './loader.css';


function Loader(){
    return(
        <section className='loader_sec'>
            <div className='container'>
                <div className='loader_logo' style={{marginBottom:'50px'}}>
                    <img src="images/logo.png" alt="logo" style={{width:'220px'}} />
                </div>
                <div className="loader"></div>
            </div>
        </section>
    )
}

export default Loader;