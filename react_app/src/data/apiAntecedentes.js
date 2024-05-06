import axios from "axios";

// const url = "https://web-production-97cf.up.railway.app";
const url = "http://localhost:8000";

export function getAntecedentes() {
    return axios.get(`${url}/antecedentes/`);
}
export function getAntecedente(antecedente) {
    return axios.get(`${url}/antecedentes/${antecedente}/`);
}
export function updateAntecedentes(antecedentes) {
    return axios.put(`${url}/antecedentes/${antecedentes.id}/`, antecedentes);
}
export function postAntecedentes(antecedentes) {
    return axios.post(`${url}/antecedentes/`, antecedentes);
}
export function deleteAntecedentes(antecedentes) {
    return axios.delete(`${url}/antecedentes/${antecedentes.id}/`, antecedentes);
}