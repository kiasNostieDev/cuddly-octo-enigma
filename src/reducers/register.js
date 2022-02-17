const register = () => {
    return null
}

const regreducer = (state = false, action) => {
    switch (action) {
        case "REGISTER":
            register()
            break
        default:
            return state
    }
}

export default regreducer