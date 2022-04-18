import greyLogo from '../../../../assets/imgs/grey-logo.svg'
import logo from '../../../../assets/imgs/logo.svg'



const initialState = {
    index: 0,
    black: '#323232',
    white: '#FFFFFF',
    beige: '#F4F4F4',
    grey: '#808080',
    darkGrey: '#595959',
    red: 'rgba(244, 72, 72, 1)',
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