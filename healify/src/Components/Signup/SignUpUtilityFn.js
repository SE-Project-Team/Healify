import axios from "axios";
export const postLogin = async ({
  username,
  password,
  setToken,
  setWarning,
  history,
  role,
}) => {
  const url = role === "user" ? "/api/v1/login/" : "/api/v1/login/organizer/";
  await axios
    .post(url, { username, password })
    .then((res) => {
      const { token } = res.data.data;
      setToken(token);
      const newUrl = role === "user" ? "/" : "/organizers";
      history.push(newUrl);
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
