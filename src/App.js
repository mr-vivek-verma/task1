import React, { useState } from "react";
import "./styles.css";
function App() {
  const [check, setCheck] = useState(false);
  const [showValue, setShowValue] = useState();

  return (
    <>
      <div className="container-fluid top ">
        <div className="container mt-5 pb-5 pt-5">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Checkbox"
                    onChange={() => (check ? setCheck(false) : setCheck(true))}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Checkbox
                  </label>
                </div>
              </div>
            </div>
            <div
              className="btn"
              onClick={() => setShowValue(check ? "True" : "False")}
            >
              {showValue === "True" ? "Done" : "Submit"}
            </div>
            <h1>{showValue}</h1>
          </form>
        </div>
      </div>
    </>
  );
}
export default App;
