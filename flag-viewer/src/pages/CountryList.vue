<template>
    <article class="countryList">
        <content-container>
            <div v-if="!countries.length">
                Loading…
            </div>
            <div v-else class="countryList__grid">
                <country-card
                    v-for="country in countries.slice(0, 20)"
                    :key="country.alpha2Code"
                    :image-src="country.flag"
                    :title="country.name"
                    :population="country.population"
                    :region="country.region"
                    :capital="country.capital"
                    class="countryList__card mb-6"
                />
            </div>
        </content-container>
    </article>
</template>

<script setup lang="ts">
import { computed, Ref } from '@vue/reactivity';
import { inject, ref } from 'vue';
import CountryCard from '../components/CountryCard.vue';
import { CountryService, SERVICE_KEY } from '../services/CountryService';
import ContentContainer from '../components/ContentContainer.vue';
// import FlagCard
// query for flag list
// build filter options from data ("Filter by Region")
// search computed starts searching by name, maybe by other related fields

let countries: Ref<any[]> = ref([]);
const countryService = inject<CountryService>(SERVICE_KEY);
countryService?.getAllCountries().then(result => countries.value = result);

const merica = computed(() => countries.value.find(c => c.alpha2Code === 'US'));
</script>

<style lang="scss">
// @import 'primeflex/src/utils';

.countryList {
    font-size: 0.875rem;
}
.countryList__card {
    max-width: 250px;
}
.countryList__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>