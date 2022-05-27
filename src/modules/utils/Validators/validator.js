export const required = value => {
   
    if (value) return undefined
    return 'Field is required'
}
export const symbol = () => (value) => {

 
    if (value && value.indexOf('@') !== -1) {
       
        return undefined
    } else {
     
        return 'E-mail ввёден не правильно!'
    }
 
  

}
// export const emailSumbol = value => {
//     if(value && value.indexOf('@') !== -1) return undefined
//     return 'E-mail ввёден не правильно!'
// }