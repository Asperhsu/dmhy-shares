<template>
    <div class="nav-container">
        <h3>花園週番</h3>
        <div class="menu">
            <ul class="menu-list">
                <li v-for="(dayName, dayNo) in dayNames" :key="dayNo">
                    <a :class="{'has-background-grey': activeDayNo == dayNo }"
                        @click.stop="activeDayNo = dayNo">
                        {{ dayName }}
                    </a>
                    <ul :class="{'is-hidden': activeDayNo != dayNo }">
                        <li>
                            <a v-for="(program, index) in weekPrograms[dayNo]" :key="index"
                                @click="activeProgram = program"
                                :class="{'is-active': activeProgram == program }">
                                {{ program }}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import weekPrograms from '../programs.js';
    let todayDayNo = (new Date).getDay();

    export default {
        data () {
            return {
                weekPrograms: weekPrograms,
                dayNames: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
                activeProgram: null,
                activeDayNo: todayDayNo
            }
        },

        watch: {
            activeProgram () {
                this.activeProgram && this.$emit('selected', this.activeProgram);
            }
        }
    }
</script>

<style lang="scss">
    .bm-menu {
        padding-top: 10px;


        .cross-style {
            top: 20px;
        }
        .bm-item-list {
            margin-left: 3% !important;
        }
        .menu-list a {
            color: #f5f5f5 !important;

            &:hover {
                color: #363636 !important;
            }
        }
    }

    .bm-burger-bars {
        box-shadow: 0px 0px 8px 2px #333;
        background-color: #eee !important;
    }

    .nav-container {
        flex-direction: column;
        width: 280px;
    }
</style>
