import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { showMessage } from './ShowMessage.js'
import { auth } from './config.js'

const GoogleBotton = document.querySelector("#SigninGoogle")

GoogleBotton.addEventListener ('click', async () => {
    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)

        const Signin = document.querySelector('#SignIn')
        const modal = bootstrap.Modal.getInstance(Signin)
        modal.hide()

        showMessage("Login correct " + credentials.user.displayName)

    } catch (error) {
        console.log(error)
    }
})