import axios  from 'axios';

const addUser = (Name, PhoneNum, Address, Password) =>  axios.post('/add', {Name, PhoneNum, Address, Password}).then((res) => res.data);

const redux = require('redux');

const InitialState = {

}

const allReducer = (state = InitialState, action) => {

    switch (action.type) {
        case 'ADD_USER':

            addUser(action.getItem.Name, action.getItem.PhoneNum, action.getItem.Address, action.getItem.Password);

            return state
        default:
            return state
    }

}

const store = redux.createStore(allReducer);

export default store;