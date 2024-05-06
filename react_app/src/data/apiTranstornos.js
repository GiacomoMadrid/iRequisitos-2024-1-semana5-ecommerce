import axios from "axios";

// const url = "https://web-production-97cf.up.railway.app";
const url = "http://localhost:8000";

export function getTranstornos() {
    return axios.get(`${url}/trastornos/`);
}
export function getTranstorno(trastornos) {
    return axios.get(`${url}/trastornos/${trastornos}/`);
}
export function updateTranstornos(trastornos) {
    return axios.put(`${url}/trastornos/${trastornos.id}/`, trastornos);
}
export function postTranstornos(trastornos) {
    return axios.post(`${url}/trastornos/`, trastornos);
}
export function deleteTranstornos(trastornos) {
    return axios.delete(`${url}/trastornos/${trastornos.id}/`);
}