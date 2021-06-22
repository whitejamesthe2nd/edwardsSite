import React from "react";


let FormComponent = () => {
    return (
        <div>
            <h2>Service Center</h2>
            <p>Interested in my services please give me a call or fill out this form</p>
            <div className='form'>
                <label for='email'> Email: </label>
                <input for='email' type='email'></input>

                <label for='name'> Name: </label>
                <input name='name' type='text'></input>

                <label for='telephone'> Phone Number: </label>
                <input name='telephone' type='tel'></input>

                <label for='issue'> Issue: </label>
                <textarea name='issue'></textarea>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default FormComponent;
