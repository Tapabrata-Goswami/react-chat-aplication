import style from './loginForm.module.css';

function loginForm(){
    return (
        <div className={`container ${style.login_form_container}`}>
            <div className={`card shadow p-3`}>
                <form>
                    <div className={`form-group`}>
                        <input type="text" className={`form-control`}/>
                    </div>
                    <div className={`form-group`}>
                        <input type="password" className={`form-control`}/>
                    </div>
                    <div>
                        <button className={`btn btn-primary`}>login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default loginForm;
