import axios from "axios";

// const url = "https://web-production-97cf.up.railway.app";
const url = "http://localhost:8000";

export function getTerapistas() {
    return axios.get(`${url}/terapista/`);
}
export function updateTerapistas(terapista) {
    return axios.put(`${url}/terapista/${terapista.dni}/`, terapista);
}
export function postTerapistas(terapista) {
    return axios.post(`${url}/terapista/`, terapista);
}
export function deleteTerapistas(terapista) {
    return axios.delete(`${url}/terapista/${terapista.dni}/`);
}