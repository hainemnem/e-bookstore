import React, {useState} from 'react';

function UserInputForm(pros) {


    const [content, setContent] = useState('')

    const userCreate = () => {

        if (content !== "") {
            pros.input(content)
            setContent('')
        }
    }


    return (
        <div>
                <input type="text" placeholder="User input" required

                 onChange={e => setContent(e.target.value)}
                 value = {content}


                ></input>
                <button onClick={userCreate}> Add a row from user </button>
        </div>
    );

}

export default UserInputForm