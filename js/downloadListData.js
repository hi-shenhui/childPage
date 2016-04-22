var intr = new Vue({
    el: '#intr',
    data: {
        num: 1,
        infos: [{
                documentUrl: "#",
                /*查看详细*/
                donloadDirect: "#",
                /*直接下载*/
                documentTitle: "下载资料标题我是标题建筑工程学院干嘛干嘛干嘛",
                documentIntr: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个数",
                pushTime: "2013-12-5 10:33:38",
                readNum: "11520",
                downloadNum: "111520"
            }, {
                documentUrl: "#",
                donloadDirect: "#",
                documentTitle: "下载资料标题我是标题建筑工程学院干嘛干嘛干嘛",
                documentIntr: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数",
                pushTime: "2013-12-5 10:33:38",
                readNum: "11520",
                downloadNum: "111520"
            }, {
                documentUrl: "#",
                donloadDirect: "#",
                documentTitle: "下载资料标题我是标题建筑工程学院干嘛干嘛干嘛",
                documentIntr: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数",
                pushTime: "2013-12-5 10:33:38",
                readNum: "11520",
                downloadNum: "111520"
            }, {
                documentUrl: "#",
                donloadDirect: "#",
                documentTitle: "下载资料标题我是标题建筑工程学院干嘛干嘛干嘛",
                documentIntr: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数",
                pushTime: "2013-12-5 10:33:38",
                readNum: "11520",
                downloadNum: "111520"
            }, {
                documentUrl: "#",
                donloadDirect: "#",
                documentTitle: "下载资料标题我是标题建筑工程学院干嘛干嘛干嘛",
                documentIntr: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数",
                pushTime: "2013-12-5 10:33:38",
                readNum: "11520",
                downloadNum: "111520"
            }, {
                documentUrl: "#",
                donloadDirect: "#",
                documentTitle: "下载资料标题我是标题建筑工程学院干嘛干嘛干嘛",
                documentIntr: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介凑个字数凑个字数凑个字数",
                pushTime: "2013-12-5 10:33:38",
                readNum: "11520",
                downloadNum: "111520"
            }

        ]
    },


});
Vue.filter('noBlank', function(value, end) {
    return value.replace(/(^\s*)|(\s*$)/g, "") + end
});



var download = new Vue({
    el: "#down",
    data: {
        downloads: []
    },
    methods: {
        show: function(event) {
            var that = this;
            jQuery.support.cors = true;
            $.ajax({
                url: 'http://120.27.137.151:8585/api/download/',
                success: function(data) {
                    // console.log(data);
                    var downloadList = new Array();
                    for (var i = 0; i < data.data.downloads.length; i++) {
                        downloadList.push(data.data.downloads[i]);
                        var pushDay = data.data.downloads[i].pushDay;
                        if (pushDay<10) {
                            // alert("111");
                            Vue.filter('concatZero', function(value, input) {
                            return input+value
                        })
                        }
                        
                    }
                    that.downloads = downloadList;
                }
            });
        }
    }
});
download.show();

Vue.filter('month', function(value, begin, end) {
    return begin + value + end
});
var person = new Vue({
    el: "#person",
    data: {
        persons: []
    },
    methods: {
        show: function(event) {
            var that = this;
            $.ajax({
                url: 'http://120.27.137.151:8585/api/person-list/',
                type: 'GET',
                dataType: "json",
                crossDomain: true,
                contentType: 'application/json; charset=utf-8',
                success: function(data) {

                    var personNum = new Array();
                    for (var i = 0; i < 4; i++) {
                        personNum.push(data.data.persons[i]);
                    }
                    that.persons = personNum;
                }
            });
        },
        change: function() {
            person.$watch('persons', function() {
                $('#person').children()[0].style.left = '0px';

            });
        }
    }
});
person.show();
person.change();
