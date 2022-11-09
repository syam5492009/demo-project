import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { ColorContext } from "../App";
import CustomBadge from "../components/CustomBadge";
import { getAPi } from "../constants";

// // Functional component
// const Home=()=>{
//     return(<div>

//     </div>)
// }

// function Home(){
//     return(<div></div>)
// }

function Home() {
  /// Declaration of  Hooks  -- first place

  const history = useNavigate();

  const [emp, setEmp] = useState([]);

  // Access UserContext

  const color = useContext(ColorContext);

  const handleDelete = (id) => {
    // Exclude the id from emp data -- use filter

    setEmp(emp.filter((item) => id !== item.id));
  };

  const add = () => {
    history("/create");
  };

  const fetchData = async () => {
    // Fetch method
    // const result = await fetch(getAPi);

    // return some value from that API -- fulfilled / Rejected based on API status - Promise

    // const resultOne = await result?.json();

    // Axios method

    const result = await axios.get(getAPi);

    console.log("Result from API", result?.data);
    // emp=result?.data
    // optional chaining

    const resultOne = result ? result.data : [];

    setEmp(result?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // []-- dependencies -- it will be called only one time (while loading of page)

  return (
    <Fragment>
      <div style={{ background: color, textAlign: "center" }}>
        <h2>User Details</h2>
        <CustomBadge title="Employee INformation" total={emp?.length} />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>name</th>-
              <th>id</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Rendering List  */}

            {emp &&
              emp?.map((item) => {
                return (
                  <tr>
                    <th>{item.id}</th>
                    <td>{item.name}</td>
                    {/* document.getElementById('button').addEvent */}
                    <td>
                      {/* <Button onClick={() => handleEdit(item.id)}>Edit</Button> */}
                      <Button onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <br />
        <Button onClick={add}>Add</Button>
      </div>
    </Fragment>
  );
}

export default Home;
