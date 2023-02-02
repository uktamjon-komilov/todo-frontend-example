import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/todos/", {
      method: "get",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      {loading == true ? (
        <div className="row">
          <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          Loading...
        </div>
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Comment</th>
              <th scope="col">Status</th>
              <th scope="col">Created</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.comment}</td>
                  <td>{item.status.readable}</td>
                  <td>{item.created_at}</td>
                  <td>
                    <button className="btn btn-info">Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
