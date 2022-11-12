const LoggedOut = document.querySelectorAll(".logged-out")
const LoggedIn = document.querySelectorAll(".logged-in")

export const LoginCheck = user => {
    if (user) {
        LoggedOut.forEach(link => link.style.display = 'none')
        LoggedIn.forEach(link => link.style.display = 'block')
    } else {
        LoggedOut.forEach(link => link.style.display = 'block')
        LoggedIn.forEach(link => link.style.display = 'none')
    }
}