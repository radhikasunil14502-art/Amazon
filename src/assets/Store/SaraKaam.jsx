import React, { useReducer } from "react";
import { createContext } from "react";
import axios from "axios";
export const DataProvider = createContext();

const intialState = {
  productList: [],
  AllProductList: [],
  inpVal: "",
  userList: [],
  show: false,
  user: {
    name: "",
    age: "",
    email: "",
    address: "",
    image: "",
  },
  emptyUser: {
    name: "",
    age: "",
    email: "",
    address: "",
    image: "",
  },
  checkForm: "Add",
};

const reducerFun = (state, action) => {
  let upadatedStats = state;
  if (action.type == "getProducts") {
    upadatedStats = {
      ...state,
      productList: action.payload,
      AllProductList: action.payload,
    };
  } else if (action.type == "search") {
    upadatedStats = { ...upadatedStats, inpVal: action.payload };
  } else if (action.type == "searchbtn") {
    let afterFiltered = state.AllProductList.filter((elm) =>
      elm.title.toLowerCase().includes(state.inpVal.toLowerCase())
    );
    upadatedStats = { ...upadatedStats, productList: afterFiltered };
  } else if (action.type == "getAllUser") {
    upadatedStats = { ...upadatedStats, userList: action.payload };
  } else if (action.type == "changeShow") {
    upadatedStats = { ...upadatedStats, show: action.payload };
  } else if (action.type == "userInp") {
    upadatedStats = {
      ...upadatedStats,
      user: { ...state.user, ...action.payload },
    };
  } else if (action.type == "clearForm") {
    upadatedStats = { ...upadatedStats, user: action.payload };
  } else if (action.type == "singleUser") {
    console.log(action.type)
    upadatedStats = { ...state, user: action.payload };
  } else if (action.type == "checkForm") {
    upadatedStats = { ...upadatedStats, checkForm: action.payload };
  }
  return upadatedStats;
};

const SaraKaam = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, intialState);

  //   get All Product by api fun
  const getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: "getProducts", payload: res.data });
  };
  // get All User by api fun
  const getAllUser = async () => {
    let res = await axios.get(
      "https://69667537f6de16bde44d7ac9.mockapi.io/fakeuser/fakeUser"
    );
    dispatch({ type: "getAllUser", payload: res.data });
  };
  //  Add User by api fun
  const addUser = async (user) => {
    await axios.post(
      `https://69667537f6de16bde44d7ac9.mockapi.io/fakeuser/fakeUser`,
      user
    );
    getAllUser();
  };
  // get one user by api fun
  const getSingleUser = async (id) => {
    let singleUser = await axios.get(
      `https://69667537f6de16bde44d7ac9.mockapi.io/fakeuser/fakeUser/${id}`
    );
    dispatch({ type:"singleUser", payload:singleUser.data });
  };
  const deleteUser = async (id) => {
    await axios.delete(
      `https://69667537f6de16bde44d7ac9.mockapi.io/fakeuser/fakeUser/${id}`
    );
    getAllUser();
  };
const editUser = async (user) => {
    await axios.put(
      `https://69667537f6de16bde44d7ac9.mockapi.io/fakeuser/fakeUser/${user.id}`,user
    );
    getAllUser();
  };
  const handleOpenForm = (obj) => {
    dispatch({ type: "clearForm", payload: state.emptyUser });
    dispatch({ type: "changeShow", payload: obj.show });
    dispatch({ type: "checkForm", payload: obj.formType });
  };
  const handleCloseForm = () => {
    dispatch({ type: "changeShow", payload: false });
  };
  const handleAddBtn = () => {
    addUser(state.user);
    handleCloseForm();
  };
  const handleEditBtn = (id) => {
    handleOpenForm({show:true,formType:"Edit"});
    getSingleUser(id);
  };
  const handleModelForm = () => {
    if (state.checkForm == "Add") {
      addUser(state.user);
    } else if (state.checkForm == "Edit") {
      editUser(state.user);
    }
    handleOpenForm({show:false,formType:""})
  };

  const handledeleteBtn = (id) => {
    deleteUser(id);
  };
  const handleReadbtn = (id) => {
    handleOpenForm({show:true,formType:"Read"});
    getSingleUser(id);
  };
  return (
    <DataProvider
      value={{
        state,
        dispatch,
        getProducts,
        getAllUser,
        addUser,
        handleAddBtn,
        handleOpenForm,
        handleReadbtn,
        handledeleteBtn,
        handleCloseForm,
        handleEditBtn,
        handleModelForm,
      }}
    >
      {children}
    </DataProvider>
  );
};

export default SaraKaam;
