export default (state, action) => {
  switch (action.type) {
    case "SET_LOADER":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_CHARACTERS":
      return {
        ...state,
        characters: action.characters,
      };
    case "ERROR":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
