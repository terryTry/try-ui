import TryMessage from "./src/main/index.vue";

TryMessage.install = function (Vue) {
    Vue.component(TryMessage.name, TryMessage);
};

export default TryMessage;
