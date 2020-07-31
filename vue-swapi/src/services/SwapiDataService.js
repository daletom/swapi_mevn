import http from "../http-common";

class SwapiDataService {
  getAll() {
    return http.get("/swapi");
  }

  get(id) {
    return http.get(`/swapi/${id}`);
  }

  create(data) {
    return http.post("/swapi", data);
  }
//may need to change put to patch
  update(id, data) {
    return http.put(`/swapi/${id}`, data);
  }

  delete(id) {
    return http.delete(`/swapi/${id}`);
  }

  findByTitle(title) {
    return http.get(`/swapi?title=${title}`);
  }
}

export default new SwapiDataService();