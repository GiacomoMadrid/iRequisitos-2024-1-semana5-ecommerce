import axios from "axios";

// const url = "https://web-production-97cf.up.railway.app";
const url = "http://localhost:8000";

export function getExamenFisico() {
    return axios.get(`${url}/examenFisico/`);
}
export function getExamenFisicoId(examenfisico) {
    return axios.get(`${url}/examenFisico/${examenfisico}/`);
}
export function updateExamenFisico(examenfisico) {
    return axios.put(`${url}/examenFisico/${examenfisico.id}/`, examenfisico);
}
export function postExamenFisico(examenfisico) {
    return axios.post(`${url}/examenFisico/`, examenfisico);
}
export function deleteExamenFisico(examenfisico) {
    return axios.delete(`${url}/examenFisico/${examenfisico.id}/`);
}