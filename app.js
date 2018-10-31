

var todayDayNo = (new Date).getDay();
var app = new Vue({
    el: '#app',

    data: {
        allPrograms: programs,
        dayNames: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
        dmhyUrl: "http://share.dmhy.org/topics/list?keyword=",
        keyword: null,
        dayNo: todayDayNo,
    },

    computed: {
        iframwSrc () {
            return this.dmhyUrl + this.keyword;
        },
        dayPrograms () {
            return this.allPrograms[this.dayNo];
        }
    },
})

Split(['#top', '#down'], {
    sizes: [20, 80],
    direction: 'vertical'
});