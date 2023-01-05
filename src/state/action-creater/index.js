export const getUserList = (currentPage = 1) => {
  return async (dispatch) => {
    dispatch({
      type: "GET_USER_LIST_LOADING",
    });
    try {
      await fetch(`https://reqres.in/api/users?page=${currentPage}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({
            type: "GET_USER_LIST_SUCCESS",
            payload: res,
          });
        });
    } catch (error) {
      dispatch({
        type: "GET_USER_LIST_FAIL",
      });
    }
  };
};

export const getUserDetils = (selectedUser) => {
  return async (dispatch) => {
    dispatch({
      type: "GET_SELECTED_USER_LOADING",
    });
    try {
      await fetch(`https://reqres.in/api/users/${selectedUser}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({
            type: "GET_SELECTED_USER_SUCCESS",
            payload: res,
          });
        });
    } catch (error) {
      dispatch({
        type: "GET_SELECTED_USER_FAIL",
      });
    }
  };
};
