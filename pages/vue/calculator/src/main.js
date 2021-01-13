import { createApp } from 'vue'
import App from './App.vue'

export const eventBus = createApp(App)

createApp(App).mount('#app')


/**
import Vue from 'vue'       \\versao 3.0 do Vue
import App from './App'


new Vue({
  render(createElement){
    return createElement(App)
  }
  render: h => h(App) //Essa linha faz o mesmo das linhas comentadas
}).$mount("#app")
*/