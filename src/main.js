import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimaryBtn from './components/Ui/Buttons/Primary.vue'
import SecondaryBtn from './components/Ui/Buttons/Secondary.vue'
import TertiaryBtn from './components/Ui/Buttons/Tertiary.vue'
import Logo from './components/Navigation/Logo.vue'

import App from './App.vue'
import router from './router'

import './style.css'
import './assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("PrimaryBtn", PrimaryBtn)
app.component("SecondaryBtn", SecondaryBtn)
app.component("TertiaryBtn", TertiaryBtn)
app.component("Logo", Logo)

app.mount('#app')
