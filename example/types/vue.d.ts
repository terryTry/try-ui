import Vue, { VNode } from "vue";
import '../../types/global.js';

declare module "vue/types/vue" {
    interface Vue {
        $bus: Vue;
    }
}
