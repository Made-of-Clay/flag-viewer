import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import { router } from './router';
import countryService, { SERVICE_KEY as CountryServiceKey } from './services/CountryService';
import { SERVICE_KEY as colorThemeServiceKey, getTheme, setTheme } from './services/ColorThemeService';

createApp(App)
    .use(PrimeVue)
    .use(router)
    .provide(CountryServiceKey, countryService)
    .provide(colorThemeServiceKey, { getTheme, setTheme })
    .mount('#root');
