import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice'

const HomePage = () => {
    const dispatch = useDispatch();

    const login = (response) => {
        console.log(response)
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))
    };

    const isSignedIn = useSelector(selectSignedIn);

    return (
        <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
            {!isSignedIn ? <div className="login__message">
                <h2>A Heades Favourite Place</h2>
                <p class>We will provide the high quality online resource for reading books. Just sign up and start reding some quality books.</p>
                <GoogleLogin
                    clientId="66196288202-jp2c22tqbmke5gqvdinmu976e7chvklf.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="login__button"
                        >

                            Login With Google
                        </button>
                    )}
                    onSuccess={login}
                    onFailure={login}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}
                />
            </div> : ""}
        </div>
    )
}

export default HomePage
