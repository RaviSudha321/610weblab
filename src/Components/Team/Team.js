import './team.css';


function Team(){
    return(
        <section className='team_sec'>
            <div className='container'>
                <h2 className='sec_title'>Some of our tech experts</h2>
                <p className='description'>Talent wins games, but teamwork and intelligence win championships.</p>
                <div className='team_content'>
                    <ul className='team_filters'>
                       <li>CEO</li> 
                       <li>Team</li>
                    </ul>
                    <div className='team_members'>
                        <div className='member_box'>
                            <div className='member_img'>
                                <img src="images/sushant-sharma.webp" alt="image" />
                            </div>
                            <h3 className='member_name'>Sushant Sharma</h3>
                            <div className='member_designation'>MD</div>
                        </div>
                        <div className='member_box'>
                            <div className='member_img'>
                                <img src="images/sushant-sharma.webp" alt="image" />
                            </div>
                            <h3 className='member_name'>Sushant Sharma</h3>
                            <div className='member_designation'>MD</div>
                        </div>
                        <div className='member_box'>
                            <div className='member_img'>
                                <img src="images/sushant-sharma.webp" alt="image" />
                            </div>
                            <h3 className='member_name'>Sushant Sharma</h3>
                            <div className='member_designation'>MD</div>
                        </div>
                        <div className='member_box'>
                            <div className='member_img'>
                                <img src="images/sushant-sharma.webp" alt="image" />
                            </div>
                            <h3 className='member_name'>Sushant Sharma</h3>
                            <div className='member_designation'>MD</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;