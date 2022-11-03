import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from './config.js'

const SignupForm = document.querySelector('#Signin-form')

SignupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const Nombres = SignupForm['Signup-nombres'].value
    const Genero = SignupForm['Signup-genero'].value
    const Email = SignupForm['Signup-email'].value
    const Pass = SignupForm['Signup-pass'].value

    console.log(Nombres, Genero, Email, Pass)

    try {
        const CreateUser = await createUserWithEmailAndPassword(auth, Nombres, Genero, Email, Pass)
        console.log(CreateUser)

        const Signup = document.querySelector('#Signup')
        const modal = bootstrap.Modal.getInstance(Signup)
        modal.hide()

    } catch (error) {
        console.log(error)
    }
})