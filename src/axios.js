import axios from "axios";

const instance= axios.create({
    baseURL:'https://clamazon.herokuapp.com',
});

export default instance;