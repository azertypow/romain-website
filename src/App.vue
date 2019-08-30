<template>
    <div>

        <div id="app" ref="app">

            <!--    INTRO-->

            <fullpage-section class="active no-arrow">

                <r-intro v-if="this.$intro" :introData="this.$intro"></r-intro>

                <div class="r-next-slide" @click="nextSection"><div class="r-fotter-next-section-arrow"></div><span>FEATURED PROJECTS</span></div>

            </fullpage-section>

            <!--    PROJECTS-->

            <fullpage-section v-if="$arrayOfProject"
                              v-bind:key="'project' + index"
                              class="r-section-project r-has-background-black"
                              v-for="(project, index) of $arrayOfProject">

                <h2 class="r-section-project__title">{{project.title}}</h2>

                <div class="r-section-project__details">

                    <div class="r-section-project__details__left">
                        <h2 class="r-section-project__details__title">{{project.title}}</h2>
                        <p>
                            <span class="r-section-project__details__subtitle">{{project.subtitle}}</span>
                            &nbsp;
                            <span class="r-section-project__details__date">{{project.date}}</span>
                        </p>
                    </div>

                    <div class="r-section-project__details__right">
                        <div class="r-section-project__details__desc" v-html="project.text"></div>
                    </div>
                </div>

                <fullpage-slide v-bind:key="index + 'imageUrl' + secondIndex"
                                v-for="(imageUrl, secondIndex) of project.arrayOfImageUrl">
                    <img :src="`/img/${imageUrl}`"
                         :alt="`image ${imageUrl}`"
                         class="r-section-project__image">
                </fullpage-slide>

            </fullpage-section>

            <!--    CV SECTION-->

            <fullpage-section v-if="$arrayOfCvSection" class="no-arrow">

                <div class="r-section-cv">

                    <div class="r-scaling-height">
                        <div class="r-scaling-height__child"
                             ref="contentScalingOnScreenHeight">

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
                    </div>

                </div>

                <div class="r-next-slide" @click="nextSection"><div class="r-fotter-next-section-arrow"></div><span>ARCHIVES</span></div>

            </fullpage-section>

            <!--    ARcHIVE-->

            <fullpage-section v-if="$arrayOfArchive"
                              class="no-arrow r-archive-section">

                <div class="r-archive__item-box">

                    <archive-item v-bind:key="'archive' + index"
                                  v-for="(archive, index) of $arrayOfArchive"
                                  :archiveData="archive"
                    ></archive-item>

                </div>


            </fullpage-section>

        </div>

        <div class="r-next-slide r-next-slide--special-archives" >
            <a>GIT</a>
            <a>IG</a>
            <a>MAIL</a>
            <a class="r-arena-logo"><img class="r-list-nav__icon" src="./assets/star.png" alt="icon star"></a>
            <span>THANKS</span></div>

    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {apiGetJsonData, IJsonData} from "@/api/main"
  import FullpageSection from "@/components/FullpageSection.vue"
  import Fullpage from 'fullpage.js'
  import RIntro from "@/components/RIntro.vue"
  import FullpageSlide from "@/components/FullpageSlide.vue"
  import {setScalingOfHtmlElementOnHeightOfHisParent} from "@/setScalingOfHtmlElementOnHeightOfHisParent"
  import ArchiveItem from "@/components/ArchiveItem.vue"

  @Component({
    components: {
      ArchiveItem,
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
                dragAndMove: true,
              });

              this.$store.commit("setFullPageInstance", fullPageInstance)
            }

            this.setElementsToScalingOnScreenHeight()

            window.addEventListener("resize", () => {
              this.setElementsToScalingOnScreenHeight()
            })

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

    setElementsToScalingOnScreenHeight() {

      const refsOfContentScalingOnScreenHeight = this.$refs["contentScalingOnScreenHeight"]

      if( refsOfContentScalingOnScreenHeight instanceof HTMLElement) {
        setScalingOfHtmlElementOnHeightOfHisParent(refsOfContentScalingOnScreenHeight)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
