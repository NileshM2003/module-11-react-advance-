import { useState} from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [send, setSend] = useState({ name: "", email: "", password: "" });
  const [res, setRes] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!send.name || !send.email || !send.password) {
      alert("All fields are required.");
      return;
    }
    try {
      const response = await fetch(
        "https://66e41137d2405277ed12ee41.mockapi.io/find",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(send),
        }
      );
      const serverResponse = await response.json();
      setRes(serverResponse);
  
      setSend({ name: "", email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
    if (handleSubmit) {
      navigate("/log");
      
    } else {
      console.log(err);
      
    }
  }

  return (
    <div className="register-container">
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={send.name}
            onChange={(e) => setSend({ ...send, name: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={send.email}
            onChange={(e) => setSend({ ...send, email: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={send.password}
            onChange={(e) => setSend({ ...send, password: e.target.value })}
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Register;
