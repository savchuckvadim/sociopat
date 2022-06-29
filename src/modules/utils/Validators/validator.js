
export const symbol = type => value => {

    let error = undefined
    if (value) {
        if (type === 'password') {
            value.length < 8
                ? error = 'Пароль неверный'
                : error = undefined
        } else if (type === 'email') {

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

export const requiredFields = (value) => {
    let error = undefined
    if (!value) {

        error = 'Не заполнено'
    }


       
    return error
}


