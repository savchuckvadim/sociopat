export const required = value => {

    if (value) return undefined
    return 'Field is required'
}
export const symbol = type => value => {

    let error = undefined
    if (value) {
        if (type === 'password') {
            value.length < 8
                ? error = 'Пароль неверный'
                : error = undefined
        } else {

            if (value && value.indexOf('@') !== -1) {

                error = undefined
            } else {

                error = 'E-mail ввёден не правильно!'
            }
        }

    }
    return error
}

export const emailValidate = symbol('email')
export const passwordValidate = symbol('password')

// export const emailSumbol = value => {
//     if(value && value.indexOf('@') !== -1) return undefined
//     return 'E-mail ввёден не правильно!'
// }