import { createApp } from 'vue'
import App from './App.vue'

import FormText from "./components/FormText.vue"

const app = createApp(App)

app.component("FormText", FormText)

app.mount('#app')
