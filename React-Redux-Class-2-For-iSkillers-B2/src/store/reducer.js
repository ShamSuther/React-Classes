let userObj = 0
let reducer = (state = userObj, action) => {
    switch (action.type) {
        case "DECREMENT": return state - 1
            break;
        case "INCREMENT": return state + 1
            break;
        default: return state
    }
}
export default reducer;

