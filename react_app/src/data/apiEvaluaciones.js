import axios from "axios";

// const url = "https://web-production-97cf.up.railway.app";
const url = "http://localhost:8000";

export function getEvaluaciones() {
    return axios.get(`${url}/evaluacion/`);
}
export function getEvaluacion(evaluacion) {
    return axios.get(`${url}/evaluacion/${evaluacion}/`);
}
export function updateEvaluaciones(evaluacion) {
    return axios.put(`${url}/evaluacion/${evaluacion.id}/`, evaluacion);
}
export function postEvaluaciones(evaluacion) {
    return axios.post(`${url}/evaluacion/`, evaluacion);
}
export function deleteEvaluaciones(evaluacion) {
    return axios.delete(`${url}/evaluacion/${evaluacion.id}/`);
}