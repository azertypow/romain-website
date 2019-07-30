<template>
    <div class="v-fullpage-slide slide">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class FullpageSlide extends Vue {

    }
</script>

<style lang="scss" scoped>
    .v-fullpage-slide {

    }
</style>
