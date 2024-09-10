
export const Complete = ({clear}) => {

    return (
        <div className="completeState">
            <img className="icon-complete" src="images/icon-complete.svg" alt="" />
            <p className="thanks">THANK YOU!</p>
            <p className="details">We've added your card details</p>
            <button className='submit-button' onClick={clear}>Continue</button>
        </div>
    )

};