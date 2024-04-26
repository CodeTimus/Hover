import { Formik } from "formik";
import  { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [selFile, setSelFile] = useState("");

  const navigate = useNavigate();

  const fetchproductData = async () => {
    const res = await fetch("http://localhost:5000/doctor/getbyid/" + id);
    const data = await res.json();

    console.log(data);
    setProductData(data);
  };

  useEffect(() => {
    fetchproductData();
  }, []);

  const submitForm = async (values) => {
    console.log(values);
    values.simage = selFile;
    const res = await fetch('http://localhost:5000/doctor/update/' + id, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if (res.status === 200) {
    enqueueSnackbar("Successfully Updated")
      navigate('/ProfileCard');
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    <div>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center my-5">Update Service</h3>
            {productData !== null ? (
              <Formik initialValues={productData} onSubmit={submitForm}>

                {(addProductForm) => (

                  <form onSubmit={addProductForm.handleSubmit}>
                    <label>Product Name</label>

                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addProductForm.errors.name}
                    </span>
                    <input
                      id="name"
                      onChange={addProductForm.handleChange}
                      value={addProductForm.values.name}
                      type="text"
                      className="form-control mb-4"
                    />

                    <label>Email</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addProductForm.errors.email}
                    </span>
                    <input
                      id="email"
                      onChange={addProductForm.handleChange}
                      value={addProductForm.values.email}
                      type="email"
                      className="form-control mb-4"
                    />
                      <label>Contact</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addProductForm.errors.contact}
                    </span>
                    <input
                      id="contact"
                      onChange={addProductForm.handleChange}
                      value={addProductForm.values.contact}
                      type="number"
                      className="form-control mb-4"
                    />

                    <label>Latitude</label>
                    <input
                      id="latitude"
                      onChange={addProductForm.handleChange}
                      value={addProductForm.values.latitude}
                      type="number"
                      className="form-control mb-4"
                    />
                    <label>Doctor Image</label>
                    <input
                      id="image"
                      onChange={addProductForm.handleChange}
                      value={addProductForm.values.image}
                      type="file"
                      className="form-control mb-4"
                      onC={uploadFile}
                    />

                

                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            ) : (
              <h1 className="text-center my-5">Loading ... </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;