import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCretors } from "./state/index";
export default function UserList() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.userListLoading);
  const isError = useSelector((state) => state.users.isUserLoadingFail);
  const userList = useSelector((state) => state.users.userList);

  // test comment
  useEffect(() => {
    dispatch(actionCretors.getUserList());
  }, []);

  return (
    <div>
      <h1>Data From Api</h1>
      <div>
        <button
          disabled={userList.page === 1}
          onClick={() => dispatch(actionCretors.getUserList(userList.page - 1))}
        >
          First page
        </button>
        <>
          {loading
            ? "loading..."
            : isError
            ? "something went wrong"
            : userList.data &&
              userList.data.map((el) => (
                <button
                  key={el.id}
                  className="btn btn-primary mx-2"
                  onClick={() => {
                    dispatch(actionCretors.getUserDetils(el.id));
                  }}
                >
                  {el.id}
                </button>
              ))}
        </>
        <button
          disabled={userList.page === userList.total_pages}
          onClick={() => dispatch(actionCretors.getUserList(userList.page + 1))}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
