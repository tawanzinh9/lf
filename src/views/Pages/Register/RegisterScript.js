import  axios from "axios"
import router from '@/router';


export default {
    name: "Register",
    data() {
        return {
            username : "",
            email: "",
            adress: "",
            phone: "",
            password: "",
            confirmPassword: "",
            validationsRegister: "",
            userCreated: "",
            baseURL: "https://backend-turtle-pex86ccc5-tiagobonito44-hotmailcom.vercel.app/register"
        }
    }, 

    methods: {
        createUser() {
            const fields = {
                username: this.username,
                email: this.email,
                adress: this.adress, 
                phone: this.phone,
                password: this.password,
                userCreated: ""
            }
            axios.post(`${this.baseURL}`, fields)
            .then((res) => {
                console.log(JSON.stringify(res.data))
                this.userCreated = "User created, have fun ✔💚"
                setTimeout(() => {
                    router.push( {name: "login"} )
                }, 5000)
            })
            .catch((err) => {
                console.log(err)
            })
            this.validations()
        },

        validations() {
            if(!this.username || !this.email || !this.adress || !this.phone || !this.password || !this.confirmPassword) {
               return this.validationsRegister = "Check all fields to register"
            }

            if(this.password.length < 8) {
                return this.validationsRegister = "Password needs at least 8 numbers"
            }       

            if(this.phone.length < 6) {
                return this.validationsRegister = "Phone is not valid"
            }

            if(this.password != this.confirmPassword) {
                return this.validationsRegister = "Password and confirm password is not compatible"
            } 
            else {
                this.validationsRegister = ""
            }
        }
    }
}