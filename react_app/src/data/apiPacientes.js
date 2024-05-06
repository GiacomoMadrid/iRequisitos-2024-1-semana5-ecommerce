import axios from "axios";

// const url = "https://web-production-97cf.up.railway.app";
const url = "http://localhost:8000";

export function getPacientes() {
    return axios.get(`${url}/paciente/`);
}
export function getPaciente(paciente) {
    return axios.get(`${url}/paciente/${paciente}/`);
}
export function updatePaciente(paciente) {
    return axios.put(`${url}/paciente/${paciente.dni}/`, paciente);
}
export function postPaciente(paciente) {
    return axios.post(`${url}/paciente/`, paciente);
}
export function deletePaciente(paciente) {
    return axios.delete(`${url}/paciente/${paciente.dni}/`);
}