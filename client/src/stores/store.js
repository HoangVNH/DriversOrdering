import axios  from 'axios';

// axios({
//     url: '/some/api',
//     method: 'post',
//     headers: {
//         authorization: "token"
//     },
//     data: FormData
// }).then((res) => {

// })

const addDriver = (Name, PhoneNum, Address, Password, RePassword) =>  axios.post('/account/api/signup', {Name, PhoneNum, Address, Password, RePassword}).then((res) => console.log(res)).catch(error => console.log(error));

const redux = require('redux');


const InitialState = {
    datas: null
}

const allReducer = (state = InitialState, action) => {

    switch (action.type) {
        case 'USER_SIGNUP':

            addDriver(action.getItem.Name, action.getItem.PhoneNum, action.getItem.Address, action.getItem.Password, action.getItem.RePassword);
            
            return state
        default:
            return state
    }

}

const store = redux.createStore(allReducer);

export default store;