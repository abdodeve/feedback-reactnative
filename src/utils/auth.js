import jwt_decode from "jwt-decode";
import * as SecureStore from "expo-secure-store";

/**
 * connect
 */
export const connect = async () => {
  // const res = await refreshToken();
  console.log("++++++++++++ Connect - works ++++++++++++");
  setAuthData({ idToken: "123", refreshToken: "456" });
  const refreshToken = await SecureStore.getItemAsync("refreshToken");
  console.log("refreshToken==>", refreshToken);
};

export const refreshToken = async () => {
  const idToken = await SecureStore.getItemAsync("idToken");
  /*
    If Access token not exist that means
    this is the first http call so we should retrieve it first
  */
  if (!idToken) {
    getAccessToken();
    return true;
  }

  if (!(await isAccessTokenExpired())) {
    try {
      //Refresh the token
      await refreshTheToken();
    } catch (err) {
      throw { error: "Cannot refresh token" };
      // return false;
    }
  }
  return true;
};

const isAccessTokenExpired = async () => {
  // const currentTime = new Date();
  // const idToken = await SecureStore.getItemAsync("idToken");

  // if (
  //   moment(currentTime).add(10, 'm') <
  //   moment(jwt_decode(idToken).exp * 1000)
  // ) {
  //   return true;
  // }
  return false;
};

const getAccessToken = async () => {
  console.log("getAccessToken");
  try {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB36LfiWU7kMNoXzcRQ96ebK-_q68OHVUM",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const resData = await response.json();
    SecureStore.setItemAsync("idToken", resData.idToken);
    SecureStore.setItemAsync("refreshToken", resData.refreshToken);
  } catch (error) {
    console.log("getAccessToken:error====>", error);
  }
};

const refreshTheToken = async () => {
  try {
    const refreshToken = await SecureStore.getItemAsync("refreshToken");
    const params = {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    };

    let formBody = [];
    for (let property in params) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(params[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const response = await fetch(
      "https://securetoken.googleapis.com/v1/token?key=AIzaSyB36LfiWU7kMNoXzcRQ96ebK-_q68OHVUM",
      {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          grant_type: "refresh_token",
        },
        body: formBody,
      }
    );
    const resData = await response.json();
    SecureStore.setItemAsync("idToken", resData.id_token);
    SecureStore.setItemAsync("refreshToken", resData.refresh_token);
  } catch (error) {
    console.log("refreshTheToken:error====>", error);
  }
};

const setAuthData = (authData) => {
  for (let property in authData) {
    SecureStore.setItemAsync(property, authData[property]);
  }
};
