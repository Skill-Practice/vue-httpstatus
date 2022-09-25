import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';

import BaseCard from './components/ui/BaseCard.vue';
import TextAreas from './components/ui/TextAreas.vue';
import Alert from './components/ui/Alert.vue';
import BaseButton from './components/ui/BaseButton.vue';
import Tables from './components/ui/Tables.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('text-areas', TextAreas);
app.component('alert', Alert);
app.component('tables', Tables);

app.mount('#app');
