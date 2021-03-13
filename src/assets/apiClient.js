import axios from 'axios';
const url = "https://mealplan-api.herokuapp.com/";

export default class apiClient {


    async signUp(username, password) {
        return await axios({
            methd: 'post',
            url: `${url}user/add`,
            data: {
                username,
                password
            }
        })
            .catch(err => {
                console.log(err);
                alert(err);
        })
    }

    async logIn(username, password) {
        return axios({
            method: 'post',
            url: `${url}auth`,
            data: {
                username,
                password
            }
        })
    }


}