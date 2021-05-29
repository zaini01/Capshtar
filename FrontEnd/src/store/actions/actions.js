import axios from 'axios';

export function fetch(namaPendiri) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingStart());
      let response
      if (!namaPendiri) {
        response = await axios.get('http://localhost:3000/api/aplikasi').catch(handleErrors);
      } else {
        response = await axios.get(`http://localhost:3000/api/aplikasi?pendiri=${namaPendiri}`).then(handleErrors);
        console.log(response.data);
      }
      const apps = await response.data;
      dispatch(setApps(apps));
      dispatch(setLoadingStop());
    } catch (error) {
      dispatch(setLoadingStop());
    }
  };
}

export function getById(appId) {
  return async (dispatch) => {
    try {
      let response = await axios.get(`http://localhost:3000/api/aplikasi?pendiri/${appId}`).then(handleErrors);
      const app = await response.data;
      dispatch(setApp(app));
    } catch (error) {}
  };
}

export function deleteApp(appId) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingStart());
      let response = await axios.delete(`http://localhost:3000/api/aplikasi/${appId}`).catch(handleErrors)
      if (response.data) {
        dispatch(fetch());
      }
      dispatch(setLoadingStop());
    } catch (error) {
      dispatch(setLoadingStop());
    }
  };
}

export function addApp(data) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingStart());
      let response = await axios.post(`http://localhost:3000/api/aplikasi`,data).catch(handleErrors)
      if (response.data) {
        dispatch(fetch());
      } 
      dispatch(setLoadingStop());
    } catch (error) {
      dispatch(setLoadingStop());
    }
  };
}

export function putApp(data, appId) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingStart());
      let response = await axios.put(`http://localhost:3000/api/aplikasi/${appId}`,data).catch(handleErrors)
      if (response.data) {
        dispatch(fetch());
      } 
      dispatch(setLoadingStop());
    } catch (error) {
      dispatch(setLoadingStop());
    }
  };
}

export function setApps(apps) {
  return {
    type: "FETCH",
    payload: apps,
  };
}

export function setApp(app) {
  return {
    type: "GET_BY_ID",
    payload: app,
  };
}

export function setLoadingStart() {
  return {
    type: "LOADING_START",
  };
}

export function setLoadingStop() {
  return {
    type: "LOADING_STOP",
  };
}

function handleErrors(res) {
  if (!res) throw new Error(res.error);
  return res;
}
