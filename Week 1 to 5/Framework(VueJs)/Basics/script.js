const app = new Vue({ //option object > well defined object
    el: "#app", //el:element connect using id of html
    data: {
        message: "Java",
        myClass: 'green',
        seen: true,
        myArr: ["DSA ", "oops", "dbms", "MLP", "mlt"],
        movie: "",
        // movie:"Onion",
        firstname: "Xaomi",
        lastname: "Redmi",
    },
    // methods: {
    //     logMovie: function(){
    //         console.log(this.movie);
    //     }
    // },
    computed: {
        fullname: function () {
            return this.firstname + " " + this.lastname
        },
        sequel: function () {
            return this.movie + " " + 2
        }
    },
    watch: {
        // movie(new_value, old_value) {
        //     console.log(`movie has changed`);
        // },
        // movie(new_value, old_value) {
        movie(old_value, new_value){
            console.log(`movie has changed from ${old_value} to ${new_value}`);

        }
    }
})