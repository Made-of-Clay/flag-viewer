<template>
    <Card
        class="countryCard"
        @click="$emit('click')"
    >
        <template #header>
            <template v-if="isImageSourceValidUrl">
                <img :src="imageSrc" :alt="title">
            </template>
        </template>

        <template #title>
            <b class="countryCard__title">
                {{title}}
            </b>
        </template>

        <template #content>
            <div class="countryCard__content">
                <b>Population:</b>
                <span>{{population}}</span>
            </div>
            <div class="countryCard__content">
                <b>Region:</b>
                <span>{{region}}</span>
            </div>
            <div class="countryCard__content">
                <b>Capital:</b>
                <span>{{capital}}</span>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import Card from 'primevue/card';

const props = defineProps<{
    imageSrc: string,
    title: string,
    population: string,
    region: string,
    capital: string,
}>();

const urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
const isImageSourceValidUrl = computed(() => urlRegex.test(props.imageSrc));
</script>

<style lang="scss">
@import 'primeflex/src/utils';

.countryCard {
    overflow: hidden;
    // margin: 10rem; // TODO remove this
    @include styleclass('border-round');

    .theme--dark & {
        background-color: var(--darkModeElements);
        box-shadow: var(--darkModeBoxShadow);
    }
    .theme--light & {
        background-color: var(--lightModeElements);
        box-shadow: var(--lightModeBoxShadow);
    }

    .p-card-body {
        @include styleclass('p-3 mb-3');
    }
}
.countryCard__title {
    @include styleclass('mb-3');
    display: block;
    font-size: 1rem;
}
.countryCard__content {
    @include styleclass('mb-2');

    > b {
        font-weight: 600;
        &::after {
            content: ' ';
        }
    }
    > span {
        font-weight: 300;
        opacity: 0.8;
    }
}
</style>