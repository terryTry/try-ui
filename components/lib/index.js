import TryMessage from "./try-message";

const components = [
    TryMessage
]

const install = function (Vue) {
    if(install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    })
    console.log("[try-ui] installed");
};

export default {
    install,
    version: '1.0.0',
    TryMessage,
}
