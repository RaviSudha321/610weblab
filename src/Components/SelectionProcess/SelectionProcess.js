import './selectionProcess.css'


function SelectionProcess(){
    return(
        <section className='selection_process_sec'>
            <div className='container'>
                <h2 className='sec_title'>What is the selection process at Innowise?</h2>
                <div className='selection_process_outer'>
                    <div className='selection_process'>
                        <div className='process_item'>
                            <span className='process_step'>1</span>
                            <h3 className='process_title'>Send your CV</h3>
                            <div className='process_description'>Fill out the form and attach your resume or CV</div>
                        </div>
                        <div className='process_item'>
                            <span className='process_step'>2</span>
                            <h3 className='process_title'>Communicate with a recruiter</h3>
                            <div className='process_description'>You will discuss your level of knowledge and expectations from a new job</div>
                        </div>
                        <div className='process_item'>
                            <span className='process_step'>3</span>
                            <h3 className='process_title'>Meet with a head</h3>
                            <div className='process_description'>If we match, we invite you to a meeting with your future head</div>
                        </div>
                        <div className='process_item'>
                            <span className='process_step'>4</span>
                            <h3 className='process_title'>Get feedback and a job offer</h3>
                            <div className='process_description'>We give you feedback within a few business days. If successful, you get a job offer!</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SelectionProcess;