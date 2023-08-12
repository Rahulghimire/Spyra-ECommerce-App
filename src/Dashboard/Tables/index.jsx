import React from "react";
import DataTable from "react-data-table-component";
const index = () => {
  const columns = [
    {
      name: "Order ID",
      selector: (row) => row.orderId,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
  ];

  const data = [
    {
      id: 1,
      orderId: "Order#65",
      email: "abc@gmail.com",
      status: "New",
      date: "2021-04-26 20:59:00",
    },
    {
      id: 2,
      orderId: "Order#66",
      email: "def@gmail.com",
      status: "Processing",
      date: "2021-04-27 15:30:00",
    },
    {
      id: 3,
      orderId: "Order#67",
      email: "ghi@gmail.com",
      status: "Shipped",
      date: "2021-04-28 10:15:00",
    },
    {
      id: 4,
      orderId: "Order#68",
      email: "jkl@gmail.com",
      status: "Delivered",
      date: "2021-04-29 08:45:00",
    },
    {
      id: 5,
      orderId: "Order#69",
      email: "mno@gmail.com",
      status: "Cancelled",
      date: "2021-04-30 17:20:00",
    },
    {
      id: 6,
      orderId: "Order#70",
      email: "pqr@gmail.com",
      status: "New",
      date: "2021-05-01 12:00:00",
    },
    {
      id: 7,
      orderId: "Order#71",
      email: "stu@gmail.com",
      status: "Processing",
      date: "2021-05-02 09:30:00",
    },
    {
      id: 8,
      orderId: "Order#72",
      email: "vwx@gmail.com",
      status: "Shipped",
      date: "2021-05-03 16:15:00",
    },
    {
      id: 9,
      orderId: "Order#73",
      email: "yz@gmail.com",
      status: "Delivered",
      date: "2021-05-04 14:45:00",
    },
    {
      id: 10,
      orderId: "Order#74",
      email: "abc2@gmail.com",
      status: "Cancelled",
      date: "2021-05-05 11:30:00",
    },
  ];

  return (
    <div
      style={{
        borderTop: "0.25rem solid #23ca99",
        backgroundColor: "#fff",
        borderRadius: "0.3rem",
        padding: "0.7rem",
      }}
    >
      <div>
        <p
          className="m-0"
          style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#4f5573" }}
        >
          Top New Order
        </p>

        {/* <DataTable
          columns={columns}
          data={data}
          title="Top New Order"
          style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#4f5573" }}
          fixedHeader
          fixedHeaderScrollHeight="300px"
          highlightOnHover
          className="custom-data-table"
        ></DataTable> */}
        <table className="table table-striped mt-2">
          <thead className="thead-light">
            <tr>
              <th>Order ID</th>
              <th>Email</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.orderId}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
