import TryMessage from "./try-message"

declare module "vue" {
  // Vue.component注册的全局组件需通过 GlobalComponents 接口定义
  export interface GlobalComponents {
      TryMessage: TryMessage; 
  }
}