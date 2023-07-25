import Vue, { DefineComponent } from "vue";

type TryMessage = DefineComponent<
    {
        title?: string;
    }
>;

export default TryMessage;