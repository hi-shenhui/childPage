var intr = new Vue({
	el: "#intr",
	data: {
		infors: [{
			hasPic: true,
			inforHead: "过年啦要过年啦红红火火恍恍惚惚1",
			inforContent: "内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数",
			inforTime: "2016-1-29 12:00",
			inforReadNum: "0",
			imgSrc: "img/img.png"
		}, {
			hasPic: false,
			inforHead: "过年啦要过年啦红红火火恍恍惚惚2",
			inforContent: "内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数",
			inforTime: "2016-1-29 12:00",
			inforReadNum: "0",
			imgSrc: "img/h.png"
		}, {
			hasPic: true,
			inforHead: "过年啦要过年啦红红火火恍恍惚惚3",
			inforContent: "内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数",
			inforTime: "2016-1-29 12:00",
			inforReadNum: "0",
			imgSrc: "img/num_1.png"
		}, {
			hasPic: false,
			inforHead: "过年啦要过年啦红红火火恍恍惚惚4",
			inforContent: "内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数",
			inforTime: "2016-1-29 12:00",
			inforReadNum: "0",
			imgSrc: "img/num_2.png"
		}, {
			hasPic: true,
			inforHead: "过年啦要过年啦红红火火恍恍惚惚5",
			inforContent: "内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数",
			inforTime: "2016-1-29 12:00",
			inforReadNum: "0",
			imgSrc: "img/num_4.png"
		}, {
			hasPic: true,
			inforHead: "过年啦要过年啦红红火火恍恍惚惚6",
			inforContent: "内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数",
			inforTime: "2016-1-29 12:00",
			inforReadNum: "0",
			imgSrc: "img/h.png"
		}, {
			hasPic: false,
			inforHead: "过年啦要过年啦红红火火恍恍惚惚7",
			inforContent: "内容内容内容内容内容内容我是来凑字数的凑字数内容内容内容内容内容内容我是来凑字数的凑字数",
			inforTime: "2016-1-29 12:00",
			inforReadNum: "0",
			imgSrc: "img/h.png"
		}]
	}
});
/*按钮刷新增加*/
var vm = new Vue({
	el: "#reload",
	data: {
		infors: [

		]
	},
	created: function() {
		var that = this;
		$.ajax({
			success: function(data) {
				that.infors = data;
			}
		});

	},
	methods: {
		reload: function(event) {
			var that = this;
			$.ajax({
				url: 'xxx',
				success: function(data) {
					that.infors = that.infors.concat(data);
				}
			});

		}
	}
});

var changeWidth = new Vue({
	el: "#intr",
	ready: function() {
		$(".block").each(function() {
			var firstChildTg = $(this).context.firstElementChild.tagName;
			if (firstChildTg == "IMG") {} else {
				$(this)[0].firstElementChild.style.width = "92%";
				$(this)[0].firstElementChild.lastElementChild.style.width = "48.5%";
			}

		});

	}

});
/*资料下载下载，*/
var download = new Vue({
	el: "#download",
	data: {
		downloads: [{
				pushDay: "23",
				pushMouth: "12",
				resourceTitle: "我的前半生"
			}, {
				pushDay: "23",
				pushMouth: "12",
				resourceTitle: "这个世界会好么"
			}, {
				pushDay: "23",
				pushMouth: "12",
				resourceTitle: "给青年诗人的信"
			}, {
				pushDay: "23",
				pushMouth: "12",
				resourceTitle: "杜诗详注"
			}, {
				pushDay: "23",
				pushMouth: "12",
				resourceTitle: "无人生还"
			}


		]
	}
});