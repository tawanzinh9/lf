import Header from "../../../components/HeaderMyUser.vue"

export default {
    name: "MyUser",
    data() {
        return {
            username: localStorage.getItem("username"),
            emailUser:  localStorage.getItem("email"),
            phone: localStorage.getItem("phone"),
            adress: localStorage.getItem("adress")
        }
    },
    methods : {
        logout() {

            localStorage.removeItem("username")
            localStorage.removeItem("email")
            localStorage.removeItem("phone")
            localStorage.removeItem("adress")
            localStorage.removeItem("token")
            router.push( {name: "home"} )
        }
    },
    components: {
        Header
    }
}