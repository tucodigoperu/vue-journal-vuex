import axios from 'axios'

const journalApi = axios.create({
    baseURL:'https://vue-demo-90b5d-default-rtdb.firebaseio.com'
})

export default journalApi