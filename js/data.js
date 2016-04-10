var intr = new Vue({
    el: "#intr",

    data: {
        num: 1,
        infors: [

        ]
       

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
                    if (firstChildTg == "IMG") {
                        // $(this)[0].firstElementChild.lastElementChild.style.width = "46.5%";
                        // console.log($(this)[0].firstElementChild.lastElementChild);
                    } else {
                        $(this)[0].firstElementChild.style.width = "92%";
                        $(this)[0].firstElementChild.lastElementChild.style.width = "46.5%";
                    }
                });

            });
        }
    }

});
intr.changeWidth();
Vue.filter('wrap', function(value, begin) {
    return begin + value
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
                    }
                    that.downloads = downloadList;
                }
            });
        }

    }
});
download.show();
Vue.filter('month', function(value, begin ,end) {
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

