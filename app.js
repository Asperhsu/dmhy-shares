

// console.log(programs)
var dmhyUrl = "http://share.dmhy.org/topics/list?keyword=";
var app = new Vue({
    el: '#app',

    data: {
        programs: programs,
        dayNames: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
        dmhyUrl: "http://share.dmhy.org/topics/list?keyword=",
        keyword: null,
    },

    computed: {
        weekNo () {
            return (new Date).getDay();
        },
        iframwSrc () {
            return this.dmhyUrl + this.keyword;
        }
    },

    methods: {
        getDayPrograms(dayNo) {
            return this.programs[dayNo];
        }
    }
})

Split(['#top', '#down'], {
    sizes: [25, 75],
    direction: 'vertical'
});