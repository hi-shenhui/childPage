//返回顶部
var backTopObj = function() {
    // alert("回到顶部");
    this.demo;
    this.bTop;
    this.timer;
    this.speed = 0;
    this.isShowTop = false;
    this.isHideTop = false;
    this.hideTopTimer;
}
backTopObj.prototype.init = function() {
    // alert("回到顶部");
    if (document.documentElement.scrollTop >= 500 || document.body.scrollTop >= 500) {
        this.isShowTop = true;
    } else {
        this.isHideTop = true;
    }
    this.demo = document.getElementById('back_top');
    this.demo.addEventListener('click', back, false);
    document.body.addEventListener('mousewheel', function() { clearInterval(backTop.timer); }, false);
}
backTopObj.prototype.showTop = function() {
    this.isShowTop = false;
    this.isHideTop = true;
    clearInterval(this.hideTopTimer);
    this.demo.style.display = 'block';
    this.demo.style.opacity = 1;
    this.demo.style.transition = 'opacity 0.7s';
}
backTopObj.prototype.hideTop = function() {
    this.isShowTop = true;
    this.isHideTop = false;
    this.demo.style.opacity = 0;
    this.demo.style.transition = 'opacity 0.7s';
    this.hideTopTimer = setInterval(function() {
        backTop.demo.style.display = 'none';
        clearInterval(this.hideTopTimer);
    }, 1000);
}

function back() {
    clearInterval(backTop.timer);
    backTop.timer = setInterval(function() {
        backTop.bTop = document.documentElement.scrollTop || document.body.scrollTop;
        backTop.speed = Math.floor(-backTop.bTop / 6);
        document.documentElement.scrollTop = document.body.scrollTop = backTop.bTop + backTop.speed;
        if (backTop.bTop <= 0) {
            clearInterval(backTop.timer);
        }
    }, 30);
}
//返回顶部按钮和导航栏的显示和隐藏
backTopObj.prototype.backTopBtn = function() {
        // alert("111");
        if (document.documentElement.scrollTop >= 500 || document.body.scrollTop >= 500) {
            if (this.isShowTop) {
                this.showTop();
            }
        } else if (document.documentElement.scrollTop <= 500 || document.body.scrollTop <= 500) {
            if (this.isHideTop) {
                this.hideTop();
            }
        } else {
            return;
        }
    }
//导航栏
var navBarObj = function() {
    this.left;
    this.demo;
    this.navs;
    this.height = 0.000;
}
navBarObj.prototype.init = function() {
    this.position = '';
    this.left = document.documentElement.scrollLeft || document.body.scrollLeft;
    this.demo = getDemo('nav_bar');
    this.navs = getDemo('navs').getElementsByClassName('nav');
    this.height = this.navs[0].offsetHeight;
    for (var i = 1; i < this.navs.length - 1; i++) {
        this.navs[i].getElementsByTagName('ul')[0].style.top = this.height + 'px';
    }
}
navBarObj.prototype.check = function() {
        if (document.documentElement.scrollTop >= 135 || document.body.scrollTop >= 135) {
            this.demo.style.position = 'fixed';
            this.demo.style.left = -this.left + 'px';
        } else {
            this.demo.style.position = '';
        }
    }
    //搜索
var searchObj = function() {
    this.text;
    this.searchInput;
    this.searchBtn;
}
searchObj.prototype.init = function() {
    this.text = '';
    this.searchInput = getDemo('searchInput');
    this.searchBtn = getDemo('search');
    this.searchBtn.addEventListener('click', checkSearch, false);
}

function checkSearch() {
    search.text = search.searchInput.value;
    if (len(search.text) > 2) {
        window.open('http://home.ncu.edu.cn/NewIndex2013/Article_search.aspx?KeyWord=' + encodeURI(search.text));
        searchInput.value = '';
    } else if (len(search.text) == 0) {
        return;
    } else {
        alert('搜索的内容太短了');
    }
}

function len(s) {
    var l = 0;
    var a = s.split('');
    for (var i = 0; i < a.length; i++) {
        if (a[i].charCodeAt(0) < 299) {
            l++;
        } else {
            l += 2;
        }
    }
    return l;
}
//底部二维码
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

//开启功能
var backTop;
var navBar;

var er;
var search;

function getDemo(ID) {
    return document.getElementById(ID);
}
window.onload = function() {
	// alert("1112");
    


    backTop = new backTopObj();
    backTop.init();
    backTop.backTopBtn();

    navBar = new navBarObj();
    navBar.init();
    navBar.check();

    search = new searchObj();
    search.init();


    // er = new erObj();
    // er.init();
    // for (var i = 0; i < er.num; i++) {
    //     er.changeBtn[i].addEventListener('mouseover', changeEr, false);
    // }



    window.onscroll = function() {
        navBar.left = document.documentElement.scrollLeft || document.body.scrollLeft;
        backTop.backTopBtn();
        navBar.check();
    }
}




