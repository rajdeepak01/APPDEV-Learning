const Register = {
    template: `
    <div>
        <h1>This is a register component</h1>
        <h2>Your credentials are added, click on register</h2>
        <button @click="register">Register</button>
    </div>
    `,
    data: function() {
        return {
            username: "Raj"
        }
    },
    methods:{
        register: function() {
            //actual addition of data to db happend
            this.$router.push({name: "dash", params: {user: this.username}, query: {role: this.role}})
            // redirect(`/home/${"Raj"}/dashboard`)
        }
    }
}

export default Register;