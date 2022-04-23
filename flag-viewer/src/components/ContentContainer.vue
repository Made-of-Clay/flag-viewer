<template>
    <div class="contentContainer px-3">
        <slot />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import 'primeflex/src/utils';

.contentContainer {
    @include styleclass('px-1');
    margin: 0 auto;
    max-width: 1200px;
}
</style>