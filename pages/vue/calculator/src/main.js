import Vue from 'vue'
import App from './App'


new Vue({
  /**render(createElement){
    return createElement(App)
  }*/ 
  render: h => h(App) //Essa linha faz o mesmo das linhas comentadas
}).$mount("#app")