export const saveVisitedUser = (user) => {
    localStorage.setItem('visitedUser', JSON.stringify(user))
}
export const getVisitedUserFromLocalStorage = () => {
    let user = JSON.parse( localStorage.getItem('visitedUser'))
    return user
}

export const deleteVisitedUserFromLocalStorage = () => {
    localStorage.removeItem('visitedUser')
}