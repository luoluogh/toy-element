import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

// toy-element就是toy-element的core
import ToyElement from 'toy-element';

createApp(App).use(ToyElement).mount('#app')
