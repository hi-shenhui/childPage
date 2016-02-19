var before = ['img/share_qq.png', 'img/share_weibo.png', 'img/share_weixin.png'];
var after = ['img/share_qq_after.png', 'img/share_weibo_after.png', 'img/share_weixin_after.png'];
var erSrc = ['img/QQ_code.jpg', 'img/weibo_code.jpg', 'img/weixiner.png'];

function changeer() {
	var erContainer = document.getElementById('erContainer');
	var sss = erContainer.getElementsByTagName('a');
	for (var i = 0; i < sss.length; i++) {
		sss[i].onmouseenter = function() {
			var thisIndex = this.getAttribute('index');
			for (var j = 0; j < sss.length; j++) {
				sss[j].style.backgroundImage = 'url(' + before[j] + ')';
			}
			this.style.backgroundImage = 'url(' + after[thisIndex - 1] + ')';
			erContainer.getElementsByTagName('img')[0].src = erSrc[thisIndex - 1];
		}
	}
}
changeer();


(function($) {
	$("div[data-scro='controler'] b,div[data-scro='controler2'] a").click(function() {
		var T = $(this);
		if (T.attr("class") == "down") return false; //如果class属性值有down
		else j2rolling_animation.st({
			findObject: T, //var T=$(this); 这是选定当前对象
			main: T.parent().parent().find("div[data-scro='list']"), //滚动目标容器窗口对象
			pagSource: T.parent().parent().find("div[data-scro='controler'] b"), //切换按钮对象
			className: "down", //选中的样式
			duration: "slow", //滚动速度 和jquery速度一致
			on: $(this)[0].tagName == "A" ? true : false //用于判断是否开启无限滚动 or 来回切换
		});
		return false;
	});

	var j2setTime = "",
		j2time = true,
		j2rolling_animation = {
			init: function() {
				this.start();
				this.time();
			},
			st: function(o) {
				if (j2time) {
					this.animate(o.findObject, o.main, o.className, o.duration, o.pagSource, o.on);
					j2time = false;
				}
			},
			animate: function(T, M, C, S, P, O) {
				//find()方法获得当前元素集合中每个元素的后代，通过选择器、jQuery 对象或元素来筛选。
				var _prevDown = O ? P.parent().find("*[class='" + C + "']") : T.parent().find(T[0].tagName + "[class='" + C + "']"),
					_prevIndex = _prevDown.index(),
					_thisIndex = O ? (T.attr("class") == "next" ? _prevIndex + 1 : _prevIndex - 1) : T.index(),
					_list = M.find(".item"),
					p2n = 1;
				_prevDown.removeClass(C);
				if (O) {
					if (_thisIndex == -1) _thisIndex = _list.size() - 1;
					if (_thisIndex == _list.size()) _thisIndex = 0;
					P.eq(_thisIndex).addClass(C);
				} else {
					T.addClass(C);
				};
				if (T.attr("class") == "prev" || _thisIndex < _prevIndex) p2n = false;
				if ((T.attr("class") == "next" || _thisIndex > _prevIndex) && (T.attr("class") != "prev")) p2n = true;

				!p2n ? _list.eq(_thisIndex).css("left", -M.width()) : '';
				_list.eq(_prevIndex).animate({
					left: p2n ? -M.width() : M.width()
				}, S, function() {
					$(this).removeAttr("style");
					j2time = true;
				});
				_list.eq(_thisIndex).animate({
					left: "0px"
				}, S);
			},
			start: function() {
				$("#section-focus-pic div[data-scro='controler'] b,#section-focus-pic div[data-scro='controler2'] a").mouseover(function() {
					window.clearInterval(j2setTime);
				}).mouseout(function() {
					j2rolling_animation.time();
				});
			},
			time: function() {
				j2setTime = window.setInterval(function() {
					var num = $("#section-focus-pic div[data-scro='controler'] b[class='down']").index();
					var _list = $("#section-focus-pic div[data-scro='list'] li");

					// _list.eq(num).animate({"left":$("#section-focus-pic div[data-scro='list']").width()},"slow",function(){
					//eq(1) 选取带有指定index的值
					//$(selector).animate(styles,speed,easing,callback)
					_list.eq(num).animate({
						"left": -$("#section-focus-pic div[data-scro='list']").width()
					}, "slow", function() {
						$(this).removeAttr("style");
						$("#section-focus-pic div[data-scro='controler'] b").removeClass("down").eq(num).addClass("down");
					});
					num++;
					//size()输出被jQuery选择器匹配的元素的数量
					if (num == _list.size()) {
						num = 0;
					}
					_list.eq(num).animate({
						"left": "0px"
					}, "slow");
				}, 4000);
			}
		};
	$("a").click(function() {
		$(this).blur(); //blur()是失去焦点			  
	});

	j2rolling_animation.init(); //是否开启自动轮播
})(this.jQuery);

