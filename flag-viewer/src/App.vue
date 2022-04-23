<template>
    <div
        class="app fullHeight"
        :class="themeClass"
    >
        <header class="app__header">
            <content-container class="app__contentContainer">
                <h1 class="app__heading">
                    Where in the world?
                </h1>
                <span class="flex-1" />
                <div class="app__themeToggleWrapper">
                    <!-- TODO fix button styles -->
                    <Button
                        class="p-button-text"
                        @click="isDarkMode = !isDarkMode"
                    >
                        <template v-if="isDarkMode">
                            <span class="pi pi-sun" /> Light Mode
                        </template>
                        <template v-else>
                            <span class="pi pi-moon" /> Dark Mode
                        </template>
                    </Button>
                </div>
            </content-container>
        </header>

        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { computed, ref } from '@vue/reactivity';
import Button from 'primevue/button';
import ContentContainer from './components/ContentContainer.vue';
import { inject, watch } from 'vue';
import { SERVICE_KEY as colorThemeServiceKey, ColorThemeService } from './services/ColorThemeService';

const colorThemeService = inject<ColorThemeService>(colorThemeServiceKey);

const isDarkMode = ref(colorThemeService?.getTheme() ?? false);
const themeClass = computed(() => ({
    'theme--dark': isDarkMode.value,
    'theme--light': !isDarkMode.value,
}));
watch(isDarkMode, (isDark) => {
    colorThemeService?.setTheme(isDark);
});
</script>

<style lang="scss">
@import 'primeflex/primeflex.scss';

:root {
    --border-radius: 5px;
    --darkModeElements: hsl(209, 23%, 22%);
    --darkModeBackground: hsl(207, 26%, 17%);
    --darkModeText: hsl(0, 0%, 100%);
    --darkModeBoxShadow: 0 3px 3px hsla(0, 0%, 0%, 0.1);
    --lightModeElements: var(--darkModeText);
    --lightModeText: hsl(200, 15%, 8%);
    --lightModeInput: hsl(0, 0%, 52%);
    --lightModeBackground: hsl(0, 0%, 98%);
    --lightModeBoxShadow: 0 3px 3px #f0f0f0;
}
.app {
    font-family: 'Nunito Sans', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;

    &.theme--dark {
        background-color: var(--darkModeBackground);
        color: var(--darkModeText)
    }
    &.theme--light {
        background-color: var(--lightModeBackground);
        color: var(--lightModeText)
    }
}
.app__header {
    @include styleclass('py-3');

    .theme--dark & {
        background-color: var(--darkModeElements);
        box-shadow: var(--darkModeBoxShadow);
    }
    .theme--light & {
        background-color: var(--lightModeElements);
        box-shadow: 0 3px 3px #f0f0f0;
        box-shadow: var(--lightModeBoxShadow);
    }
}
// .app__themeToggleWrapper {
// }
.app__heading {
    font-size: 0.85rem;
    font-weight: 600;
    margin: 0;
    white-space: nowrap;

    @media (min-width: 500px) {
        font-size: 1.25rem;
        font-weight: 800;
    }
}
.app__contentContainer {
    display: flex;
    align-items: center;
}
</style>
