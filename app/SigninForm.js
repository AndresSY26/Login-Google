import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { showMessage } from './ShowMessage.js'
import { auth } from './config.js'

const SigninForm = document.querySelector("#Signin-form")

SigninForm.addEventListener('submit', async e => {
    e.preventDefault()

    const Email = SigninForm['Signin-email'].value
    const Pass = SigninForm['Signim-pass'].value

    try {
        const credentials = await signInWithEmailAndPassword(auth, Email, Pass)
        console.log(credentials)

        const Signin = document.querySelector('#SignIn')
        const modal = bootstrap.Modal.getInstance(Signin)
        modal.hide()

        showMessage("Login correct " + credentials.user.email)

    } catch (error) {
        if (error.code === "auth/wrong-password") {
            showMessage("Contraseña incorrecta", "error")
        } else if(error.code === "auth/user-not-found"){
            showMessage("Usuario no existe", "error")
        } else {
            showMessage(error.message, "error")
        }
    }
})