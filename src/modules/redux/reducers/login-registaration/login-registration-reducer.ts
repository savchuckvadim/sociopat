const SET_ERROR = 'SET_ERROR'

const initialState = {
    login: {
        type: 'login',
        fields: [
            {
                name: 'email',
                placeholder: 'E-mail'
            },
            {
                name: 'password',
                placeholder: 'Password'
            },


        ],
        title: 'Log in',
        instruction: 'Use your email and password to continue',
        forgotLink: `Forgot password?`,
        footerInstruction: `Don't you have an account yet? `,
        footerLink: `Sign up`
    },
    registration: {
        type: 'registration',
        fields: [
            {
                name: 'name',
                placeholder: 'Name'
            },
            {
                name: 'surname',
                placeholder: 'Surname'
            },
            {
                name: 'email',
                placeholder: 'E-mail'
            },
            {
                name: 'password',
                placeholder: 'Password'
            },
            {
                name: 'repeatPassword',
                placeholder: 'Repeat Password'
            },


        ],
        title: 'Getting started',
        instruction: 'Create an account to continue and connect with the Sociopaths.',
        privacy: `By pressing Sign Up, you agree to the Terms of Service and Privacy Policy.`,
        footerInstruction: `Already have an account? `,
        footerLink: `Sign In`
    },
    error: ''
}
export type LoginRegistrationType = typeof initialState
export type LoginFieldsType = typeof initialState.login.fields
export type RegistrationFieldsType = typeof initialState.registration.fields

export const setError = (error: string):SetErrorType => {

    return {
        type: SET_ERROR,
        error
    }
}
export type SetErrorType = {
    type: typeof SET_ERROR,
    error: string
}
const LoginRegistrationReducer = (state: LoginRegistrationType = initialState, action: any): LoginRegistrationType => {

    switch (action.type) {
        case SET_ERROR:
            let result = { ...state }
            result.error = action.error
            return result

        default:
            return state
    }

}

export default LoginRegistrationReducer