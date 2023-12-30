import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { MotionPlugin } from "@vueuse/motion";

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

library.add(faSun, faMoon);

createApp(App)
  .use(MotionPlugin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
