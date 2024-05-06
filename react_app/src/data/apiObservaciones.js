import axios from "axios";

// const url = "https://web-production-97cf.up.railway.app";
const url = "http://localhost:8000";

export function getObservaciones() {
    return axios.get(`${url}/observaciones/`);
}
export function getObservacion(observaciones) {
    return axios.get(`${url}/observaciones/${observaciones}/`);
}
export function updateObservaciones(observaciones) {
    return axios.put(`${url}/observaciones/${observaciones.id}/`, observaciones);
}
export function postObservaciones(observaciones) {
    return axios.post(`${url}/observaciones/`, observaciones);
}
export function deleteObservaciones(observaciones) {
    return axios.delete(`${url}/observaciones/${observaciones.id}/`);
}