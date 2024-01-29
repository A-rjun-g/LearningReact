import { useState } from "react";
export default function Form() {
  const [name, setName] = useState("");

  /*Oru Function Yeluthi athuku aprm summa oru callback
  function Yeluthunatha forms la namalaa la inputs change 
  panna mudiyum!!!!!!!! */
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <form>
      <input onChange={(e) => handleChange(e)} type="text" value={name}></input>
    </form>
    /*  Or */
    /*
    <form>
      <input onChange={(e) => setName(e.target.value)} type="text" value={name}></input>
    </form>
     */
  );
}
