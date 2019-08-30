<template>
    <div id="app" ref="app">

        <!--    INTRO-->

        <fullpage-section class="active">

            <r-intro v-if="this.$intro" :introData="this.$intro"></r-intro>

            <div class="r-next-slide" @click="nextSection"><span>next section</span><span>FEATURED PROJECTS</span></div>

        </fullpage-section>

        <!--    PROJECTS-->

        <fullpage-section v-if="$arrayOfProject"
                          v-bind:key="'project' + index"
                          class="r-section-project"
                          v-for="(project, index) of $arrayOfProject">

            <div class="r-text-container">
                <h2 class="r-section-project__title">{{project.title}}</h2>

                <div class="r-section-project__desc">{{project.text}}</div>
            </div>

            <fullpage-slide v-bind:key="index + 'imageUrl' + secondIndex"
                            v-for="(imageUrl, secondIndex) of project.arrayOfImageUrl">
                <img :src="`/img/${imageUrl}`"
                     :alt="`image ${imageUrl}`"
                     class="r-section-project__image">
            </fullpage-slide>

        </fullpage-section>

        <!--    CV SECTION-->

        <fullpage-section v-if="$arrayOfCvSection">

            <div class="r-section-cv">

                <div class="r-section-cv__item"
                     v-for="(cvSection, index) of $arrayOfCvSection">

                    <h4 class="r-section-cv__item__title r-font-is-uppercase r-font-l">{{cvSection.title}}</h4>

                    <ul class="r-section-cv__item__list r-list">
                        <li class="r-list__item r-list__item--with-line"
                            v-for="project of cvSection.arrayOfProject">
                            <a class="r-link-no-style" :href="project.url">{{project.name}}</a>
                        </li>
                    </ul>

                </div>

            </div>



        </fullpage-section>

        <!--    ARcHIVE-->

        <fullpage-section v-if="$arrayOfArchive"
                          v-bind:key="'archive' + index"
                          v-for="(archive, index) of $arrayOfArchive">

            <div>{{archive.imageUrl}}</div>
            <div>{{archive.date}}</div>
            <div>{{archive.title}}</div>

        </fullpage-section>

    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {apiGetJsonData, IJsonData} from "@/api/main"
  import FullpageSection from "@/components/FullpageSection.vue"
  import Fullpage from 'fullpage.js'
  import RIntro from "@/components/RIntro.vue"
  import FullpageSlide from "@/components/FullpageSlide.vue"

  @Component({
    components: {
      FullpageSlide,
      RIntro,
      FullpageSection,
    },
    mounted(this: App): void {

      this.$nextTick(function () {

        apiGetJsonData().then(jsonData => {

          this.siteContent = jsonData

          window.setTimeout(() => {

            if (this.$store.state.fullPageInstance === null) {
              const fullPageInstance = new Fullpage(this.$refs["app"], {
                navigation: true,
                autoScrolling: true,
                slidesNavigation: true,
                scrollOverflow: true,
              });

              this.$store.commit("setFullPageInstance", fullPageInstance)
            }

          }, 500)

        })

      })
    }
  })
  export default class App extends Vue {
    siteContent: IJsonData | null = null

    get $intro() {
      return this.siteContent ? this.siteContent.intro : null
    }

    get $arrayOfProject() {
      return this.siteContent ? this.siteContent.arrayOfProject : null
    }

    get $arrayOfCvSection() {
      return this.siteContent ? this.siteContent.arrayOfCvSection : null
    }

    get $arrayOfArchive() {
      return this.siteContent ? this.siteContent.arrayOfArchive : null
    }

    nextSection() {
      if (this.$store.state.fullPageInstance) this.$store.state.fullPageInstance.moveSectionDown()
    }
  }
</script>

<style lang="scss" scoped>

</style>
