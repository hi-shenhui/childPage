
var layout = new Vue({
    el: "#layout",
    data: {},
    methods: {
        new: function() {
            var that = this;
            jQuery.support.cors = true;
            var Url = window.location.href;
            var idNum = Url.split("?")[1]
            var apiUrl = "http://120.27.137.151:8585/api/detail/?" + idNum;
            $.ajax({
                url: apiUrl,
                type: 'GET',
                dataType: "json",
                crossDomain: true,
                contentType: 'application/json; charset=utf-8',
                success: function(data) {

                    var pageList = new Array();
                    for (var i = 0; i < 3; i++) {
                        pageList.push(data.data);
                    }
                    layout.$data = pageList[0];
                },
                error: function(err) {

                }
            });
        }
    }
});
layout.new();
Vue.filter('name', function(value, begin) {
    return begin + value
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
                    var downloadList = new Array();
                    for (var i = 0; i < data.data.downloads.length; i++) {
                        downloadList.push(data.data.downloads[i]);
                        var pushDay = data.data.downloads[i].pushDay;
                        if (pushDay<10) {
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
