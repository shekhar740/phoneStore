import axios from "axios";
const Api =  axios.create({
	baseURL : 'http://localhost:8089',
})
export default Api;

