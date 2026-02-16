export default {
  methods: {
    increment() {
      this.$store.commit("increment");
    }
  },
  template: `
    <button @click="increment">
      Increment
    </button>
  `
};
