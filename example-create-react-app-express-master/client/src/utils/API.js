import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  getSpecificUsers: function(userData) {
    return axios.put("/api/users/specific", userData);
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Saves a book to the database
  updateUser: function(id, userData) {
    return axios.put("/api/users/" + id, userData);
  },
  createUser: function(id, userData){
    return axios.post("/api/users/" + id, userData);
  }
};
