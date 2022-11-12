import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { LoginCheck } from './app/LoginCheck.js'
import { auth } from './app/config.js'

import './app/SignupGoogle.js'
import './app/SigninGoogle.js'
import './app/SignupForm.js'
import './app/SigninForm.js'
import './app/logout.js'

onAuthStateChanged(auth, async (user) => {
    if (user) {
        LoginCheck(user)
    } else {
        LoginCheck(user)
    }
})