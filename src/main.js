import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faMoon, faSun,faGlobe,faPencil} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
library.add (faMoon, faSun,faGlobe,faPencil)

createApp(App).component('font-awesome-icon',FontAwesomeIcon).use(router).mount('#app')
