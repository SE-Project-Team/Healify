import axios from "axios";
export const postLogin = async ({
  username,
  password,
  setToken,
  setWarning,
  history,
  role,
}) => {
  if(role=="user")
  {
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
  }
  else
  {
    await axios
    .post("/api/v1/login/", { username, password })
    .then((res) => {
      const { token } = res.data.data;
      setToken(token);
      history.push("/Organizers");
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
  }
};
