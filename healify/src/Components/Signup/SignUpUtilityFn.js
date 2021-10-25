import axios from "axios";
export const postLogin = async ({
  username,
  password,
  setToken,
  setWarning,
  history,
}) => {
  await axios
    .post("/api/v1/login/", { username, password })
    .then((res) => {
      const { token } = res.data.data;
      setToken(token);
      history.push("/");
    })
    .catch((err) => {
      const { msg } = err;
      setWarning(msg);
      setTimeout(() => setWarning(""), 2000);
    });
};
