const initialState = {
    login: {
        type: 'login',
        fields: [
            'E-mail', 'Password'
        ],
        title: 'Log in',
        instruction: 'Use your email and password to continue',
        footerInstruction: `Don't you have an account yet? `,
        footerLink: `Sign up`
    },
    registration: {
        type:'registration',
        fields: [
            'Name', 'Surname', 'E-mail', 'Password', 'Repeat Password'
        ],
        title: 'Getting started',
        instruction: 'Create an account to continue and connect with the Sociopaths.',
        privacy: `By pressing Sign Up, you agree to the Terms of Service and Privacy Policy.`,
        forgotLink: `Forgot password?`,
        footerInstruction: `Already have an account? `,
        footerLink: `Sign In`
    },
    classesNames: {
        index: 0,
        iconClasses: ['icon', 'iconRed'],
        currentIconClass: 'icon',
        containerClasses: ['container', 'containerFocus'],
        currentContainerClass: 'container',
    }
}

 const LoginRegistrationReducer = (state = initialState, action) => {

    return state
}

export default LoginRegistrationReducer