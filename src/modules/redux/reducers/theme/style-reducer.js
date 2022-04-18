import greyLogo from '../../../../assets/grey-logo.svg'
import logo from '../../../../assets/logo.svg'



const initialState = {
    index: 0,
    black: '#323232',
    white: '#FFFFFF',
    beige: '#F4F4F4',
    grey: '#808080',
    darkGrey: '#595959',
    greyLogo: greyLogo,
    logo: logo,
    lightTheme: {
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF'
    }
}

export const themeReducer = (state = initialState, action) => {

    return state
}