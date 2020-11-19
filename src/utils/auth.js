import jwt_decode from "jwt-decode";
import * as SecureStore from "expo-secure-store";
import moment from "moment";

/**
 * connect
 */
export const connect = async () => {
  const res = await refreshToken();
};

/**
 * refresh the token if expired
 */
export const refreshToken = async () => {
  const idToken = await SecureStore.getItemAsync("idToken");
  /*
    If Access token not exist that means
    this is the first http call so we should retrieve it first
  */
  try {
    const decoded_idToken = jwt_decode(idToken);
    if (!idToken || !decoded_idToken) {
      await getAccessToken();
      return true;
    }
  } catch (error) {
    await getAccessToken();
    return true;
  }
  const isAccessExpired = await isAccessTokenExpired();
  if (!isAccessExpired) {
    try {
      //Refresh the token
      const refreshedToken = await refreshTheToken();
      return true;
    } catch (err) {
      console.log("isAccessExpired===>", err);
      return false;
    }
  }
  return false;
};

/**
 * Check validity of access-token
 */
const isAccessTokenExpired = async () => {
  try {
    const currentTime = new Date();
    const idToken = await SecureStore.getItemAsync("idToken");
    if (
      moment(currentTime).add(10, "m") < moment(jwt_decode(idToken).exp * 1000)
    ) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * Retrieve access token
 */
const getAccessToken = async () => {
  console.log(
    "----------------------- Get Access token - first time -----------------------"
  );
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
    setAuthData({
      idToken: resData.idToken,
      refreshToken: resData.refreshToken,
    });
  } catch (error) {
    console.log("getAccessToken:error====>", error);
  }
};

/**
 * If token expired retrieve new access-token by refreshing
 */
const refreshTheToken = async () => {
  console.log(
    "----------------------- Get Access token - By refresh token -----------------------"
  );
  try {
    // Get refresh-token
    const refreshToken = await SecureStore.getItemAsync("refreshToken");
    // Params of request
    const params = {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    };
    let formBody = [];

    // Encode params (application/x-www-form-urlencoded)
    for (let property in params) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(params[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    // Fetch refresh_token
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
    if (resData.error && resData.error.code === 400) return false;
    // Set new tokens
    setAuthData({
      idToken: resData.id_token,
      refreshToken: resData.refresh_token,
    });
    return true;
  } catch (error) {
    console.log("refreshTheToken:error====>", error);
    return false;
  }
};

/**
 * Set Tokens in SecureStore
 * @param {*} authData
 */
const setAuthData = (authData) => {
  for (let property in authData) {
    SecureStore.setItemAsync(property, authData[property]);
  }
};

/**
 * Reset Tokens from SecureStore
 * @param {*} authData
 */
const resetAuthData = (authData) => {
  for (let property in authData) {
    SecureStore.deleteItemAsync(authData[property]);
  }
};
