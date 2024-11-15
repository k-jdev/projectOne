import $api from "../http";

export default class AuthService {
  static async login(email, password) {
    return $api.post("/login", { email, password });
  }
  static async logout() {
    return $api.post("/login");
  }
  static async registration(username, password) {
    return $api.post("/registration", { email, password });
  }
}
