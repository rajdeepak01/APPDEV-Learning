export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  template: `
    <h3>Count: {{ count }}</h3>
  `
};
