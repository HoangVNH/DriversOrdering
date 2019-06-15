
const redux = require('redux');


const InitialState = {
    isEdit: false // không hiển thị NAV
}

const allReducer = (state = InitialState, action) => {

    switch (action.type) {

        case "CHANGE_EDIT_STATUS":
            // copy state ra sau đó ghi đè
            return {...state, isEdit: !state.isEdit}

        default:
            return state
    }

}

const store = redux.createStore(allReducer);

export default store;