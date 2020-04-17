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
    case "SET_MODAL":
      return {
        ...state,
        modal: action.modal,
      };
    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.character],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (character) => character.id !== action.character.id
        ),
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
