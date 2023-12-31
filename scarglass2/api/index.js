import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://54.234.70.84:8000/";
const PAIRINGS_LIST_URL = "pairings/";
const SCREEN_CREATE_URL = "screens/create/";
const REFRESH_URL = "users/token/refresh/";
const USER_LIST_URL = "users/";
const QUESTION_LIST_URL = "questions/";
const PHOTO_LIST_URL = "photos/";

function postRequest(url, data, headers) {
  let promise = new Promise((resolve, reject) => {
    axios
      .post(url, data, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
}

function getRequest(url, pars, heads) {
  let promise = new Promise((resolve, reject) => {
    axios
      .get(url, { params: pars, headers: heads })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
}

function putRequest(url, data, headers) {
  let promise = new Promise((resolve, reject) => {
    axios
      .put(url, data, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
}

function deleteRequest(url) {
  let promise = new Promise((resolve, reject) => {
    axios
      .delete(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
}

async function refresh() {
  let url = BASE_URL + REFRESH_URL;

  let refresh = await AsyncStorage.getItem("refresh");

  return postRequest(url, { refresh: refresh }, {});
}

function getAllPairings() {
  let url = BASE_URL + PAIRINGS_LIST_URL;
  return getRequest(url, { pair: true }, {});
}

async function createScreen() {
  let url = BASE_URL + SCREEN_CREATE_URL;

  let access = await AsyncStorage.getItem("access");

  return postRequest(
    url,
    {},
    {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }
  );
}

async function getUser() {
  let url = BASE_URL + USER_LIST_URL;
  let access = await AsyncStorage.getItem("access");
  return getRequest(
    url,
    {},
    {
      Authorization: `Bearer ${access}`,
    }
  );
}

async function getQuestions() {
  let url = BASE_URL + QUESTION_LIST_URL;
  let screen_id = await AsyncStorage.getItem("screen");

  return getRequest(
    url,
    {
      screen_id: screen_id,
    },
    {}
  );
}

async function getPhotos(img_type) {
  let url = BASE_URL + PHOTO_LIST_URL;
  let screen_id = await AsyncStorage.getItem("screen");

  return getRequest(
    url,
    {
      img_type: img_type,
      screen_id: screen_id,
    },
    {}
  );
}

let api = {
  refresh,
  getAllPairings,
  createScreen,
  getUser,
  getQuestions,
  getPhotos,
};
export default api;
