import React from "react";
import Layout from "../../components/Layout";

const Checkout = () => {
  return (
    <Layout>
      <div className="p-12 grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="col-span-4">left</div>

        {/* right side */}
        <div className="col-span-2">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Cart Total</h2>
              <p>Sub Total: Tk</p>
              <p>Discount: Tk</p>
              <p>Total: Tk</p>
              <div className="card-actions justify-end mt-2">
                <button className="btn bg-light w-full">Paid</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
