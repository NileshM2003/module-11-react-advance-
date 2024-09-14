import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function Log() {
  const [data, setData] = useState({ name: "", password: "" });
  // const [send, setSend] = useState({ name: "", email: "", password: "" });

  const [incomingdata, setIncomingData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handlelog();
  }, []);

  async function handlelog() {
    
    try {
      const response = await fetch(
        "https://66e41137d2405277ed12ee41.mockapi.io/find",
        { method: "GET" }
      );
      const incoming = await response.json();
      setIncomingData(incoming);
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick(e) {
    e.preventDefault();

    if (!data.name || !data.password) {
      alert("Both fields are required.");
      return;
    }

    const user = incomingdata.find((e) => e.name === data.name && e.password === data.password);
[]
    if (user) {
      navigate("/home");
    }
    else{
      console.log("error");
      
    }
  }

  return (
    <div className="login-container">
      <h1>Login Form</h1>
      <form onSubmit={handleClick} className="login-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            value={data.password}
            className="form-control"
          />
        </div>
        {/* {error && <p className="error-message">{error}</p>} */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {/* <ul>
        {incomingdata.map((val) => (
          <li key={val.id}>
            <p>{val.name}</p>
            <p>{val.password}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Log;

