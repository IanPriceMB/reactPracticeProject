import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("http://localhost:5000/api/users/" + id);
  },
  // Saves a book to the database
  updateUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
