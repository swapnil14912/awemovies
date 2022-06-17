import { Fragment, useState } from "react";
import classes from "./Auth.module.css";
import { useDispatch } from 'react-redux';
import { signin, signup} from "../../actions/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {

    const initialState = { firstName: '', lastName: '', phone: '', email: '', password: ''};
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState(initialState);
    const [showSignUp, setShowSignUp] = useState(false);

    const inputHandler = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    const submitFormHandler = (e) => {
        e.preventDefault();
        if (showSignUp) {
          dispatch(signup(form, navigate));
        } else {
          dispatch(signin(form, navigate));
        };
    };

    const showSignUpHandler = () => {
        setShowSignUp((prevState)=>!prevState);
    }

    return(
        <div className={classes.Auth}>
            <div>
                <p className={classes.Auth__logo}>AweMovies</p>
            </div>
            <form className={classes.Auth__form} onSubmit={submitFormHandler}>
                {
                    showSignUp &&
                    <Fragment>
                        <div className={classes.Form__input}>
                            <label htmlFor="first" className={classes.label}>First Name</label>
                            <input id="first" className={classes.input} type="text" name="firstName" placeholder="first name" onChange={inputHandler}/>
                        </div>
                        <div className={classes.Form__input}>
                            <label htmlFor="last" className={classes.label}>Last Name</label>
                            <input id="last" className={classes.input} type="text" name="lastName" placeholder="last name" onChange={inputHandler}/>
                        </div>
                        <div className={classes.Form__input}>
                            <label htmlFor="email" className={classes.label}>Email</label>
                            <input id="email" className={classes.input} type="email" name="email" placeholder="Email address" onChange={inputHandler}/>
                        </div>
                        <div className={classes.Form__input}>
                            <label htmlFor="phone" className={classes.label}>Phone Number</label>
                            <input id="phone" className={classes.input} type="number" name="phone" placeholder="Phone number" onChange={inputHandler}/>
                        </div>
                    </Fragment>
                }
                {
                    !showSignUp &&
                    <div className={classes.Form__input}>
                        <label htmlFor="email" className={classes.label}>Email</label>
                        <input id="email" className={classes.input} type="email" name="email" placeholder="Email" onChange={inputHandler}/>
                    </div>
                }
                <div className={classes.Form__input}>
                    <label htmlFor="password" className={classes.label}>Password</label>
                    <input id="password" className={classes.input} type="password" name="password" placeholder="Password" onChange={inputHandler}/>
                </div>
                {
                    showSignUp ? (
                        <button className={classes.Auth__button}>SignUp</button>
                    ):(
                        <button className={classes.Auth__button}>LogIn</button>
                    )
                }
            </form>
            <div>
                {
                    !showSignUp ? (
                        <p>Don't have an account? <span onClick={showSignUpHandler} className={classes.Auth__signup}>SignUp</span></p>
                    ):(
                        <p>Have an account already? <span onClick={showSignUpHandler} className={classes.Auth__signup}>SignIn</span></p>
                    )
                }
            </div>
        </div>
    );
}

export default Auth;