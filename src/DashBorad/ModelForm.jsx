import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DataProvider } from "../assets/Store/SaraKaam";
import USerDetails from "./USerDetails";

const ModelForm = () => {
  const {
    state: { show, user, checkForm },
    dispatch,
    handleCloseForm,
    handleModelForm,
  } = useContext(DataProvider);

  const { name, age, email, address, image } = user;
  return (
    <>
      <Modal show={show} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>{checkForm} User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {checkForm == "Read" ? (
              <USerDetails />
            ) : (
              <form action="">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputName"
                    placeholder="name@example.com"
                    name="name"
                    value={name}
                    onChange={(e) =>
                      dispatch({
                        type: "userInp",
                        payload: { [e.target.name]: e.target.value },
                      })
                    }
                  />
                  <label htmlFor="floatingInputName">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInputAge"
                    placeholder="name@example.com"
                    name="age"
                    value={age}
                    onChange={(e) =>
                      dispatch({
                        type: "userInp",
                        payload: { [e.target.name]: e.target.value },
                      })
                    }
                  />
                  <label htmlFor="floatingInputAge">Age</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputEmale"
                    placeholder="name@example.com"
                    name="email"
                    value={email}
                    onChange={(e) =>
                      dispatch({
                        type: "userInp",
                        payload: { [e.target.name]: e.target.value },
                      })
                    }
                  />
                  <label htmlFor="floatingInputEmail">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputAddress"
                    placeholder="name@example.com"
                    name="address"
                    value={address}
                    onChange={(e) =>
                      dispatch({
                        type: "userInp",
                        payload: { [e.target.name]: e.target.value },
                      })
                    }
                  />
                  <label htmlFor="floatingInputAddress">Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputImage"
                    placeholder="name@example.com"
                    name="image"
                    value={image}
                    onChange={(e) =>
                      dispatch({
                        type: "userInp",
                        payload: { [e.target.name]: e.target.value },
                      })
                    }
                  />
                  <label htmlFor="floatingInputImage">Image</label>
                </div>

                <div className="my-2 text-center">
                  <button
                    className="btn btn-success "
                    type="button"
                    onClick={handleModelForm}
                  >
                    {checkForm} User
                  </button>
                </div>
              </form>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModelForm;
