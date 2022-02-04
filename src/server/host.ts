import axios from "axios";

export const host: String = "https://react-post-app-task-1.herokuapp.com";
export function httpRequest(config: any) {
  return axios({
    ...config,
  });
}
