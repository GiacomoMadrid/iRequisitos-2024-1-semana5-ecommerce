import axios from "axios";

// const url = "https://web-production-97cf.up.railway.app";
const url = "http://localhost:8000";

export function getDolorInfo() {
    return axios.get(`${url}/dolorInfo/`);
}
export function getDolorInfoId(dolorinfo) {
    return axios.get(`${url}/dolorInfo/${dolorinfo}/`);
}
export function updateDolorInfo(dolorinfo) {
    return axios.put(`${url}/dolorInfo/${dolorinfo.id}/`, dolorinfo);
}
export function postDolorInfo(dolorinfo) {
    return axios.post(`${url}/dolorInfo/`, dolorinfo);
}
export function deleteDolorInfo(dolorinfo) {
    return axios.delete(`${url}/dolorInfo/${dolorinfo.id}/`);
}