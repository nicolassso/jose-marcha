import axios from 'axios'

        export default {
            getData: async() =>
            await axios.get("http://localhost:3001/api/cuadros")
}