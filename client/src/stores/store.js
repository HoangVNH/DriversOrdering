
// axios({
//     url: '/some/api',
//     method: 'post',
//     headers: {
//         authorization: "token"
//     },
//     data: FormData
// }).then((res) => {

// })

const redux = require('redux');


const InitialState = {
    datas: null
}

const allReducer = (state = InitialState, action) => {

    switch (action.type) {
        case 'STATUS_SIGNUP':
            
            
            return state
        default:
            return state
    }

}

const store = redux.createStore(allReducer);

export default store;