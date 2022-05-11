
export const required = value => {
    if(value) return undefined
    return 'Field is required'
}
export const symbol = (symbol) => (value) => {
    if(value && value.indexOf(symbol) !== -1) return undefined
    return 'E-mail ввёден не правильно!'
}
// export const emailSumbol = value => {
//     if(value && value.indexOf('@') !== -1) return undefined
//     return 'E-mail ввёден не правильно!'
// }