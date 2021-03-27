import axios from "axios";
const url = "https://mealplan-api.herokuapp.com/";

export default class apiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  async signUp(username, password) {
    return await axios({
      method: "post",
      url: `${url}user/add`,
      data: {
        username,
        password,
      },
    });
  }

  async logIn(username, password) {
    return axios({
      method: "post",
      url: `${url}auth`,
      data: {
        username,
        password,
      },
    });
  }
  /* Authenticated Call */
  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }
  /* Secure API calls */
  async getAllRecipes() {
    const res = await this.authenticatedCall("get", `${url}recipe`);
    return res.data;
  }
  createMealPlan(data) {
    return this.authenticatedCall("post", `${url}mealplan/add`, data)
  }
}
  async getAllMealplans() {
    const res = await this.authenticatedCall("get", `${url}mealplan`);
    return res.data;
  }
}