import React, { useEffect ,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
let New_dorps = () => {
  let [data,setData] = useState([])
  let key = 0;
  useEffect(() => {
    let fetch = async () => {
      try {
        let res = await axios.post(
          "http://localhost:8080/api/product/get-products/new-drops"
        );
        setData(res.data.products)
      
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <div className="border-bottom ">
        <h1 className="font-weight-normal font-2 text-center my-4">
          NEW DROPS
        </h1>

        <div className="new_drop mx-5">
          <div className="row">
            {data.map((d) => (
              <div className="col-md-3 mouse-pointer" key={key+1}>
                <Link to={`products/${d.slug}` } className="text-decoration-none text-dark">

                <img
                  src={`http://localhost:8080/${d.image}`}
                  alt=""
                  style={{
                    width:"100%"
                  }}
                />
                <div className="text-container text-center">
                  <p className="font-weight-light new font-1">
                    {d.name}
                  </p>
                  <p className="font-weight-light d font-1">{d.price}</p>
                  <div className="d-flex justify-content-center my-2   ">
                    <div className="size-box p-2 px-3 fs-6 mx-2">S</div>
                    <div className="size-box p-2 px-3 fs-6 mx-2">M</div>
                    <div className="size-box p-2 px-3 fs-6 mx-2">L</div>
                  </div>
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="shine-button font-1 bg-dark text-white p-2 border-none px-4 fs-6">
            VIEW ALL
          </button>
        </div>
      </div>
    </>
  );
};

export default New_dorps;
