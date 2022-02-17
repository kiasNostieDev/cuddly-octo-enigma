const login = () => {
    return null
}

const loginReducer = (state = false, action) => {
    switch (action.type) {
        case "LOGIN":
            return state
                // login()
                // break
        default:
            return state
    }
}

export default loginReducer