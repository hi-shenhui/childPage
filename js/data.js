var intr = new Vue({
    el: "#intr",

    data: {
        num: 1,
        infors: [

        ],
        isA: true,
        isB: true

    },
    
    created: function() {
        var that = this;
        // console.log('created')
        jQuery.support.cors = true;
        $.ajax({
            url: 'http://120.27.137.151:8585/api/infos-list/',
            type: 'GET',
            dataType: "json",
            crossDomain: true,
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
                // console.log('success')
                that.infors = data.data.infors;
            },
            error: function(err) {
                console.log(err)
            }
        });
    },
    methods: {
        refresh: function(event) {
            // console.log('click')
            var that = this;
            that.num = that.num + 1;
            $.ajax({
                url: 'http://120.27.137.151:8585/api/infos-list?pageNum=' + that.num,
                success: function(data) {
                    // console.log(data);
                    that.infors = that.infors.concat(data.data.infors)

                }

            });
        },
        changeWidth: function() {
            intr.$watch('infors', function() {
                $(".block").each(function() {
                    var firstChildTg = $(this).context.firstElementChild.tagName;
                    var firstChild = $(this)[0].firstElementChild;
                    var width = $(this)[0].firstElementChild.style.width;
                    if (firstChildTg == "IMG") {} else {
                        $(this)[0].firstElementChild.style.width = "92%";
                        $(this)[0].firstElementChild.lastElementChild.style.width = "46.5%";
                    }
                });

            });
        }
    }
});
intr.changeWidth();



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
                    }
                    that.downloads = downloadList;
                }
            });
        }

    }
});
download.show();



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
                    // console.log('success')
                    var pageList = new Array();
                    for (var i = 0; i < 3; i++) {
                        pageList.push(data.data);
                    }
                    layout.$data = pageList[0];
                },
                error: function(err) {
                    // console.log(err)
                }
            });
        }
    }
});
layout.new();
