<template>
    <div class="v-archive-item">
        <img :src="`/img/${$imageUrl}`"
             class="v-archive-item__img"
             :alt="this.$title + ' : ' + this.$description">

        <div class="v-archive-item__view" v-if="this.openView">

            <img :src="`/img/${$imageUrl}`"
                 class="v-archive-item__view__img"
                 :alt="this.$title + ' : ' + this.$description">

            <div class="v-archive-item__view__title"    >{{this.$title}}</div>
            <div class="v-archive-item__view__desc"     >{{this.$description}}</div>
            <div class="v-archive-item__view__date"     >{{this.$date}}</div>

        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import {IJsonDataArchive} from "../api/main"

    @Component
    export default class ArchiveItem extends Vue {
      @Prop({required: true, type: Object}) archiveData!: IJsonDataArchive

      openView = false

      get $date() {
        return this.archiveData.date
      }
      get $description() {
        return this.archiveData.description
      }
      get $imageUrl() {
        return this.archiveData.imageUrl
      }
      get $title() {
        return this.archiveData.title
      }
    }
</script>

<style lang="scss" scoped>
    .v-archive-item {
        padding: 5px;
    }

    img {
        display: block;
    }

    .v-archive-item__img {
        height: 35rem;
        width: auto;
    }
</style>