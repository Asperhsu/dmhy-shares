<template>
    <div id="app">
        <Push isOpen noOverlay >
            <program-menu @selected="changeProgram"></program-menu>
        </Push>

        <main id="page-wrap">

            <section class="hero is-fullheight is-dark has-text-centered">
                <content-frame
                    v-if="contentSrc" :src="contentSrc"
                    style="height: calc(100vh - 22px);"
                ></content-frame>

                <div v-else class="hero-body" style="justify-content: center;">
                    <h3 class="title is-3 has-text-grey-light">
                        左邊選單選擇新番名稱
                    </h3>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import { Push } from 'vue-burger-menu'
    import ContentFrame from './components/ContentFrame.vue';
    import ProgramMenu from './components/ProgramMenu.vue';

    let dmhyUrl = "http://share.dmhy.org/topics/list?keyword=";

    export default {
        name: 'app',

        components: { Push, ContentFrame, ProgramMenu },

        created () {
            if (location.protocol == 'https:') {
                location.href = location.href.replace('https:', 'http:');
            }
        },

        data () {
            return {
                keyword: null,
            }
        },

        computed: {
            contentSrc () {
                if (!this.keyword) { return null; }
                return dmhyUrl + this.keyword;
            }
        },

        methods: {
            changeProgram (program) {
                this.keyword = program;
            }
        }
    }
</script>

<style>
    html, body {
        overflow: hidden !important;
        background-color: #2e2e2e;
        color: #bcbcbc;
    }

    .bm-burger-bars {
        background-color: #eee;
    }

    #app {
        height: 100vh;
    }

    p {
        font-size: 1rem;
    }

    a, a:hover, a:visited { color: #68acce !important; }

    hr { margin: 1rem 0 !important; background-color: #858585; }
</style>
