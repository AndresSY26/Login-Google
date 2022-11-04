import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { showMessage } from './ShowMessage.js'
import { auth } from './config.js'

const SignupForm = document.querySelector('#Signup-form')

SignupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    /*const Nombres = SignupForm['Signup-nombres'].value
    const Genero = SignupForm['Signup-genero'].value*/
    const Email = SignupForm['Signup-email'].value
    const Pass = SignupForm['Signup-pass'].value

    try {
        const CreateUser = await createUserWithEmailAndPassword(auth, /*Nombres, Genero,*/ Email, Pass)
        console.log(CreateUser)

        const Signup = document.querySelector('#Signup')
        const modal = bootstrap.Modal.getInstance(Signup)
        modal.hide()

        showMessage("Usuario registrado" + CreateUser.user.email)

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage("Correo ya esta en uso", "error")
        } else if (error.code === 'auth/invalied-email') {
            showMessage("Correo invalido", "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage("La contraseña es my debil", "error")
        } else if(error.code) {
            showMessage(error.message, "error")
        }
    }
})