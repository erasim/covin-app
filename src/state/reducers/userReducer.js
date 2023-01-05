const initialState = {
  userList: {},
  userListLoading: false,
  isUserLoadingFail: false,
  selectedUser: {},
  selectedUserLoading: false,
  isSelectedUserLoadingFail: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_LIST_LOADING":
      return {
        ...state,
        isUserLoadingFail: false,
        userListLoading: true,
      };
    case "GET_USER_LIST_FAIL":
      return {
        ...state,
        isUserLoadingFail: true,
        userListLoading: false,
      };
    case "GET_USER_LIST_SUCCESS":
      return {
        ...state,
        isUserLoadingFail: false,
        userListLoading: false,
        userList: action.payload,
      };

    case "GET_SELECTED_USER_LOADING":
      return {
        ...state,
        selectedUser: {},
        selectedUserLoading: true,
        isSelectedUserLoadingFail: false,
      };
    case "GET_SELECTED_USER_FAIL":
      return {
        ...state,
        selectedUser: {},
        selectedUserLoading: false,
        isSelectedUserLoadingFail: true,
      };
    case "GET_SELECTED_USER_SUCCESS":
      return {
        ...state,
        selectedUser: action.payload,
        selectedUserLoading: false,
        isSelectedUserLoadingFail: false,
      };
    default:
      return { ...state };
  }
};
export default reducer;
