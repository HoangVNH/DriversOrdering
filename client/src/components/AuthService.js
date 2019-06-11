import decode from 'jwt-decode';
import axios  from 'axios';

export default class AuthService {
    constructor(domain) {
        this.domain = domain || 'http://localhost:5000'
        
        this.fetch = this.fetch.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    // ! Kiểm tra đăng nhập
    login(PhoneNum, Password) {
        // Get a token
        return axios.post('/account/api/login', {PhoneNum,Password} ).then(res => {
            this.setToken(res.headers.token);
            return Promise.resolve(res);
        })
    }

    // ! Kiểm tra đăng ký
    signup(Name, PhoneNum, Address, Password, RePassword){
        return axios.post('/account/api/signup', {Name, PhoneNum, Address, Password, RePassword}).then(res => {
            return Promise.resolve(res);
        })
    }

    // ! Sửa thông tin driver
    updateDriver(id, Name, PhoneNum, Address, Password){
        return axios.post('/account/api/update', {id, Name, PhoneNum, Address, Password}).then(res => {
            return Promise.resolve(res);
        })
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else
                return false;
        } catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        // Saves user token to loclStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    getProfile() {
        return decode(this.getToken());
    }


    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
                headers,
                ...options
            })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}

