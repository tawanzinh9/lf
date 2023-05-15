import  axios from "axios"
import jwt_decode from "jwt-decode"
import router from '@/router';

export default {
    name: "Home",
    data() {
      return {
        username: "",
        password: "",
        baseURL: "https://backend-turtle-pex86ccc5-tiagobonito44-hotmailcom.vercel.app/",
        result: ""
      }
    },
    methods: {
        getLogin() {
            // dados usuario e senha
            const loginData = {
                username: this.username,
                password: this.password
            }

            // vai até a requisição post da api de login e manda os dados
            axios.post(`${this.baseURL}login`, loginData)
            .then((res) => {

                const token =  JSON.stringify(res.data.token)

                const decoded = jwt_decode(token)
                const username = decoded.username 
                const email = decoded.email 
                const phone = decoded.phone 
                const adress = decoded.adress
                const userId = decoded.id 
                localStorage.setItem("username", username )
                localStorage.setItem("email", email)
                localStorage.setItem("adress", adress)
                localStorage.setItem("phone", phone)
                localStorage.setItem("token", token)
                localStorage.setItem("userId", userId)
                
                router.push({name: "forum"})
            })
            .catch((err) => {
                console.log(err.response)
            })

            this.validations()
        },

        validations() {
            if(!this.username || !this.password) {
                this.result = "Please, check all fields."
            } 

            if(!this.token) {
               setTimeout(() => {
                this.result = "Invalid, please check again."
               }, 1500)
            } 
        }
        
    }
}