import App from './App.vue';
import { createApp } from 'vue';
import { firebaseApp } from './utils/firebase';
import { VueFire, VueFireAuth } from 'vuefire';
import { router } from './utils/router';

import './style.css';

const app = createApp(App)

app.use(router)

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ],
})

app.mount('#app')
