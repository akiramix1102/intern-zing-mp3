import request from "../../plugins/request";

export default {
  async getListHome() {
    try {
      const result = await request.get("home?page=1");
      console.log(result.data);
    } catch (error) {
      return Promise.reject();
    }
  }
};
