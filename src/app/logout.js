import { signOut } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from './config.js'

const Logout = document.querySelector("#Logout")

Logout.addEventListener('click', async() => {
    await signOut(auth)
    console.log('user signed out')
})