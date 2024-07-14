import { useState } from 'react';
import style from './loginForm.module.css';

function loginForm(){
    const [UserName, setUserName] = useState("");
    return (
        <div className={`container ${style.login_form_container}`}>
            <div className={`card shadow p-3`}>
                <form>

                </form>
            </div>
        </div>
    );
}

export default loginForm;
