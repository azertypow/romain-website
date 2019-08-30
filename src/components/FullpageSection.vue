<template>
    <section class="v-fullpage-section section">

        <div :class="{'show-title': viewTitle}"
             class="v-fullpage-section__slot-container"
             @click="viewTitle = !viewTitle">
            <div class="r-arrow"></div>
            <slot></slot>
        </div>

    </section>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import {
      IJsonDataProperty,
      KeyOfIJsonData
    } from "@/api/main"

    @Component
    export default class FullpageSection extends Vue {
      viewTitle = false
    }
</script>

<style lang="scss" scoped>
    .v-fullpage-section {
        position: relative;
        overflow: hidden;
    }

    .v-fullpage-section__slot-container {

    }
</style>
