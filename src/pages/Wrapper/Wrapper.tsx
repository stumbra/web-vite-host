import { useNavigate } from "react-router-dom";
import "./Wrapper.css";

function Wrapper() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/remote")}>
      <h1>{`Navigate from Wrapper (Main) -> Landing (Remote)`}</h1>
    </div>
  );
}

export default Wrapper;
