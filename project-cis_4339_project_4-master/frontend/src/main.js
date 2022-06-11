import { createApp } from 'vue' //imported to be used to create the application instance
import App from './App.vue' //imports the client root that defines the template
import router from './routers' //imports vue's router module
const bootstrap = require('bootstrap') //load all of Bootstrap’s plugins onto a bootstrap object

const app = createApp(App) //when this is called, application instance is created
//app.use is used to mount or register the modules so they can be used in the app
app.use(bootstrap)
app.use(router)
app.mount('#app')
