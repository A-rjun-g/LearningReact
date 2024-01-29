import { useState } from "react";

export default function Submission() {
  const [data, setbioData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  function handlesubmit(e) {
    /*  Prevents the default behaivour of the form */
    e.preventDefault();
    console.log(data);
  }
  function setFirstName(e) {
    setbioData({ ...data, firstName: e.target.value });
  }

  function setLastName(e) {
    setbioData({ ...data, lastName: e.target.value });
  }

  function setAge(e) {
    setbioData({ ...data, age: e.target.value });
  }
  return (
    <div>
      <form>
        <p>
          <b>First Name:</b>
        </p>
        <input
          onChange={(e) => setFirstName(e)}
          type="text"
          value={data.firstName}
        ></input>

        <p>
          <b> Last Name:</b>
        </p>
        <input
          onChange={(e) => setLastName(e)}
          type="text"
          value={data.lastName}
        ></input>

        <p>
          <b>Age:</b>
        </p>
        <input onChange={(e) => setAge(e)} type="text" value={data.age}></input>

        <button onClick={(e) => handlesubmit(e)}>
          <b>Submit</b>
        </button>
      </form>
    </div>
  );
}
