import axios from "axios";

export default async (state, action) => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(state);
  switch (action.type) {
    case "REMOVE_USER":
      await axios
        .post(
          "/api/v1/mailer/remove-contact",
          {
            user: action.payload.user,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data);
          }
        });
      return {
        users: state.users.filter((user) => {
          return user.name !== action.name && user.emailId !== action.emailId;
        }),
      };
    case "ADD_USER":
      console.log("Addign a user");
      console.log(action.payload);
      await axios
        .post(
          "/api/v1/mailer/add-contact",
          {
            user: action.payload.user,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data);
          }
        });

      if (state.users) {
        console.log("case 1");
        return { users: [action.payload, ...state.users] };
      } else {
        console.log("case 2");

        return { users: [action.payload] };
      }
    case "GET_USERS":
      let allFriends;
      await axios
        .get("/api/v1/mailer/get-all-contacts", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          //   console.log("here", res.data.data);
          allFriends = res.data.data;
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.body);
          }
          allFriends = {};
        });

      console.log(allFriends);
      return {
        users: allFriends,
      };

    default:
      return state;
  }
};
