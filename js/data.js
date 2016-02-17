var intr = new Vue({
	el: "#intr",
	data: {
		num: 1,
		infors: [

		]
		
	},
	created: function() {
		var that = this;
		$.ajax({
			url: 'http://120.27.137.151/api/infos-list/',
			success: function(data) {
				// console.log(data);
				var abc=new Array();
				for(i=0;i<7;i++){
					abc.push(data.data.infors[i]);
				}
				that.infors = abc;			
			}
		});
	},

	methods:{
		refresh: function(event) {
			var that = this;
			that.num=that.num+1;
			$.ajax({
				url: 'http://120.27.137.151/api/infos-list?pageNum='+that.num,
				success: function(data) {
					that.infors = that.infors.concat(data.data.infors);	
				} 				
			});
		},


		changeWidth:function() {
			intr.$watch('infors',function(){
				// console.log($(".block"));
						$(".block").each(function() {
							var firstChildTg = $(this).context.firstElementChild.tagName;
							var firstChild = $(this)[0].firstElementChild;
							var width = $(this)[0].firstElementChild.style.width;
							if (firstChildTg == "IMG") {} else {
								$(this)[0].firstElementChild.style.width = "92%";
								$(this)[0].firstElementChild.lastElementChild.style.width = "48.5%";
							}
						});

					});
				}
	}
});
intr.changeWidth();





/*资料下载下载，*/
var download = new Vue({
	el: "#download",
	data: {
		downloads: [
			// {
				// pushDay: "23",
				// pushMouth: "12",
				// resourceTitle: "我的前半生"
			// }
		]
	},
	methods:{
		show:function(event){
		var that = this;
		$.ajax({
		url: 'http://120.27.137.151/api/download/',
		success: function(data) {
					console.log(data);
					var downloadList=new Array();
					for(var i=0;i<5;i++){
							downloadList.push(data.data.downloads[i]);
							}
							that.downloads = downloadList;				
					},
				});	
			}

	}
});
download.show();











/*校园人物*/
var person = new Vue({
	el: "#person",
	data: {
		persons: [
			]
		},
	methods:{
		show:function(event){
		var that = this;
		$.ajax({
		url: 'http://120.27.137.151/api/person-list/',
		success: function(data) {
					// console.log(data);
					var personNum=new Array();
					for(var i=0;i<4;i++){
							personNum.push(data.data.persons[i]);
							}
							that.persons = personNum;				
					},
				});	
			},

		change:function() {
			person.$watch('persons',function(){
						// console.log($('#person').children());
						// console.log($('#person').children()[0].style.left);
						$('#person').children()[0].style.left='0px';
					});
				}
		}
});
person.show();person.change();





