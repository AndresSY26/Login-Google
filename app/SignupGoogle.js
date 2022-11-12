import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { showMessage } from './ShowMessage.js'
import { auth } from './config.js'

const GoogleBotton = document.querySelector("#SignupGoogle")

GoogleBotton.addEventListener ('click', async () => {
    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)

        const Signup = document.querySelector('#SignUp')
        const modal = bootstrap.Modal.getInstance(Signup)
        modal.hide()

        showMessage("Register correct " + credentials.user.displayName)

    } catch (error) {
        console.log(error)
    }
})