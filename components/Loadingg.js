import React from "react";

import ReactLoading from "react-loading";
function Loadingg() {
  const mystyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <section className="agb">
        <div style={mystyle}>
      
            <div className="agbcnt">
              <center>
                <ReactLoading
                  type={"bars"}
                  color={"#FF0023"}
                  height={100}
                  width={100}
                />
              </center>
            </div>
        
        </div>
      </section>
    </div>
  );
}

export default Loadingg;
