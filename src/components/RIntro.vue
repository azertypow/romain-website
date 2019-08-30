<template>
    <div class="v-r-intro r-container">

        <div class="r-container__large-text"
             v-html="this.introData.text"></div>

        <div class="r-container__right-column">

            <a href="mailto:hello@romaintalou.fr" class="r-logo"><span class="r-font-l r-logo__hello">HELLO @</span> ROMAIN<span style="letter-spacing: -.05em">&nbsp;</span>TALOU<br>
                .FR</a>

            <div>terre</div>

            <ul class="r-list-nav r-list-nav--right">
                <li class="r-list-nav__item r-list-nav__item--with-line">136<img class="r-list-nav__icon" src="../assets/heart.png" alt="icon heart"></li>
                <li class="r-list-nav__item r-list-nav__item--with-line">IG</li>
                <li class="r-list-nav__item r-list-nav__item--with-line"><img class="r-list-nav__icon" src="../assets/star.png" alt="icon star"></li>
                <li class="r-list-nav__item r-list-nav__item--with-line">GIT</li>
            </ul>
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import {IJsonDataIntro} from "@/api/main"

    @Component
    export default class RIntro extends Vue {
      @Prop({required: true, type: Object}) introData!: IJsonDataIntro
    }
</script>

<style lang="scss" scoped>
    .v-r-intro {
        height: 100vh;
    }
</style>
