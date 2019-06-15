
const redux = require('redux');


const InitialState = {
    isEdit: false, // không hiển thị NAV
    userName: null
}

const allReducer = (state = InitialState, action) => {

    switch (action.type) {

        case "CHANGE_EDIT_STATUS":
            // copy state ra sau đó ghi đè
            return {...state, isEdit: !state.isEdit}

        case "CHECK_USER":
            // copy state ra sau đó ghi đè
            return {...state, userName: action.userName}
        default:
            return state
    }

}

const store = redux.createStore(allReducer);

export default store;