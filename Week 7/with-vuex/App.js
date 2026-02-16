import { store } from "./store.js";
import ButtonComp from "./components/ButtonComp.js";
import DisplayComp from "./components/DisplayComp.js";

new Vue({
  el: "#app",
  store,
  components: {
    ButtonComp,
    DisplayComp
  },
  template: `
    <div>
      <h2>Vuex Example</h2>
      <ButtonComp />
      <DisplayComp />
    </div>
  `
});
