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
      if (err.response) {
        const { data } = err.response;
        setWarning(data.msg);
        setTimeout(() => setWarning(""), 3000);
      } else {
        console.log(err);
      }
    });
};
