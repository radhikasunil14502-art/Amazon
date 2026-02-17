import React, { useContext, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
import { DataProvider } from "../assets/Store/SaraKaam";
import ModelForm from "./ModelForm";

const DashBorad = () => {
  const {
    state: { userList, emptyUser },
    getAllUser,
    handleEditBtn,
    handledeleteBtn,
    handleReadbtn,
  } = useContext(DataProvider);
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div>
      <ModelForm />
      <table className="table align-middle text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((elm,ind) => {
            const { name, age, email, address, image, id } = elm;
            return (
              <tr key={id}>
                <th scope="row">{ind + 1}</th>
                <td>{name}</td>
                <td>{age}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>
                  <img
                    className="w-75 rounded"
                    style={{ height: 100 }}
                    src={image}
                    alt=""
                  />
                </td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-danger rounded"
                      onClick={() => handledeleteBtn(id)}
                    >
                      <MdOutlineDeleteForever />
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning mx-2 rounded"
                      onClick={() => handleReadbtn(id)}
                    >
                      <IoMailUnread />
                    </button>
                    <button
                      type="button"
                      className="btn btn-success rounded"
                      onClick={() => handleEditBtn(id)}
                    >
                      <CiEdit />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashBorad;
