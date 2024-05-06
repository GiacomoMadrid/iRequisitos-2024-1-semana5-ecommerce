import axios from "axios";

// const url = "https://web-production-97cf.up.railway.app";
const url = "http://localhost:8000";

export function getCitas() {
    return axios.get(`${url}/cita/`);
}
export function updateCitas(cita) {
    return axios.put(`${url}/cita/${cita.id}/`, cita);
}
export function postCita(cita) {
    return axios.post(`${url}/cita/`, cita);
}
export function deleteCitas(cita) {
    return axios.delete(`${url}/cita/${cita.id}/`, cita);
}