new Vue({
    el: "#app",

    data() {
        return {
            fruits: [],
            newFruit: { id: "", name: "", price: "" },
            editData: { id: "", name: "", price: "" }
        };
    },

    mounted() {
        this.fetchFruits();
    },

    methods: {
        // GET
        fetchFruits() {
            fetch("http://127.0.0.1:5000/fruits")
                .then(res => res.json())
                .then(data => this.fruits = data);
        },

        // POST
        addFruit() {
            fetch("http://127.0.0.1:5000/fruits", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: Number(this.newFruit.id),
                    name: this.newFruit.name,
                    price: Number(this.newFruit.price)
                })
            })
            .then(res => res.json())
            .then(data => {
                this.fruits = data;
                this.newFruit = { id: "", name: "", price: "" };
            });
        },

        // Select fruit for update
        selectFruit(fruit) {
            this.editData = { ...fruit };
        },

        // PATCH
        updateFruit() {
            if (!this.editData.id) {
                alert("Please select a fruit to update");
                return;
            }

            fetch(`http://127.0.0.1:5000/fruits/${Number(this.editData.id)}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: this.editData.name,
                    price: Number(this.editData.price)
                })
            })
            .then(res => res.json())
            .then(() => {
                this.fetchFruits();
                this.editData = { id: "", name: "", price: "" };
            });
        },

        // DELETE ✅
        deleteFruit(id) {
            if (!confirm("Are you sure you want to delete this fruit?")) {
                return;
            }

            fetch(`http://127.0.0.1:5000/fruits/${Number(id)}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                this.fruits = data;

                if (this.editData.id === id) {
                    this.editData = { id: "", name: "", price: "" };
                }
            });
        }
    }
});