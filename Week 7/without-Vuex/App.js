import ButtonComp from "./components/ButtonComp.js";
import DisplayComp from "./components/DisplayComp.js";

new Vue({
  el: "#app",
  components: { ButtonComp, DisplayComp },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  template: `
    <div>
      <ButtonComp @inc="increment" />
      <DisplayComp :count="count" />
    </div>
  `
});
