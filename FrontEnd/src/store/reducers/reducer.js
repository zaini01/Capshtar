const initialState = {
  apps: [],
  app: {},
  error: "",
  loading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH":
      return { ...state, apps: action.payload };
    case "GET_BY_ID":
      return { ...state, app: action.payload[0] };
    case "LOADING_START":
      return { ...state, loading: true };
    case "LOADING_STOP":
      return { ...state, loading: false };
    default:
      return state;
  }
}
export default reducer;
