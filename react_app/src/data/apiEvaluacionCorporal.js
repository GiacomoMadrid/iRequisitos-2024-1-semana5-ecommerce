import axios from "axios";

// const url = "https://web-production-97cf.up.railway.app";
const url = "http://localhost:8000";

export function getEvaluacionCorporal() {
    return axios.get(`${url}/evaluacionCorporal/`);
}
export function getEvaluacionCorporalId(evaluacioncorporal) {
    return axios.get(`${url}/evaluacionCorporal/${evaluacioncorporal}/`);
}
export function updateEvaluacionCorporal(evaluacioncorporal) {
    return axios.put(`${url}/evaluacionCorporal/${evaluacioncorporal.id}/`, evaluacioncorporal);
}
export function postEvaluacionCorporal(evaluacioncorporal) {
    return axios.post(`${url}/evaluacionCorporal/`, evaluacioncorporal);
}
export function deleteEvaluacionCorporal(evaluacioncorporal) {
    return axios.delete(`${url}/evaluacionCorporal/${evaluacioncorporal.id}/`);
}