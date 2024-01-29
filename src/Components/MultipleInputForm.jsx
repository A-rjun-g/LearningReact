import { useState } from "react";

export default function MultipleInputForm() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  /*Here the ...name assigns the value of firstName and lastName to its previous
  value. Then corresponding value is overridden */

  function handleFirstName(e) {
    setName({ ...name, firstName: e.target.value });
  }
  function handleLastName(e) {
    setName({ ...name, lastName: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form>
        <input
          onChange={(e) => handleFirstName(e)}
          type="text"
          value={name.firstName}
        ></input>
        <input
          onChange={(e) => handleLastName(e)}
          type="text"
          value={name.lastName}
        ></input>
        <button onClick={(e) => handleSubmit(e)}>
          <b>Submit</b>
        </button>
      </form>
    </div>
  );
}
