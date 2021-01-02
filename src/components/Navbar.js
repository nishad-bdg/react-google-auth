import { Avatar, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { GoogleLogout } from 'react-google-login'
import { useSelector, useDispatch } from 'react-redux'
import { selectSignedIn, selectUserData, setUserData, setSignedIn } from '../features/userSlice'

const Navbar = () => {
    const isSignedIn = useSelector(selectSignedIn)
    const [inputValue, setInputValue] = useState("tech")
    const userData = useSelector(selectUserData)

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setUserData(null))
        dispatch(setSignedIn(false))
    }

    const style = {
        "margin-left": "10px",
    }
    return (
        <div className="navbar">
            <h1 className="navbar__header">Blog Mania</h1>
            {isSignedIn && <div className="navSearch">
                <TextField placeholder="Search a blog " variant="outlined" size="small" defaultValue={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className="submit" style={style}>
                    Search
                </button>


            </div>}

            {isSignedIn && <Avatar src={userData?.imageUrl} />}
            {userData?.name}
            {isSignedIn &&
                <GoogleLogout clientId="66196288202-jp2c22tqbmke5gqvdinmu976e7chvklf.apps.googleusercontent.com"
                    onLogoutSuccess={logout}
                />
            }
        </div>
    )
}

export default Navbar
