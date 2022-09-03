

export const followUnfollow = (usersArray, userId, authUser, bool) => {

    if (usersArray.length > 0) {
        let users = usersArray.map(user => {
            if (user.id === userId) {
                user.followed = bool

                if(bool){                       //если подписываемся
                    if(!user.followers.some(follower => follower.id === authUser.id)){
                        user.followers = [...user.followers, authUser]
                    }
                    
                }else{                          //если отписываемся
                    user.followers = user.followers.filter(follower => follower.id !== authUser.id)
                }
                return {...user}

            } else {
                return user
            }
        })
        return users
    }else {
        return usersArray
    }

}