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
						// alert('213');
					 for(var i=0;i<data.data.infors.length;i++){
					 	that.infors.push(data.data.infors[i])
					 }	
				} 				
			});
		},
		changeWidth:function() {
			intr.$watch('infors',function(){
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
// var download = new Vue({
// 	el: "#down",
// 	data: {
// 		downloads: [

// 		]
// 	},
// 	created:function(){
// 		var that = this;
// 		$.ajax({
// 			url: 'http://120.27.137.151/api/download/',
// 			success: function(data) {
// 						var def=new Array();
// 						for(var d=0;d<data.data.downloads.length;d++){
// 						 	def.push(data.data.downloads[d])
// 						 }					
// 						that.downloads=def;
// 						// alert(def);
// 					}
// 		});	
// 	}
// });

var download = new Vue({
	el: "#down",
	data: {
		downloads: [
		]
	},
	methods:{
		show:function(event){
		var that = this;
		$.ajax({
		url: 'http://120.27.137.151/api/download/',
		success: function(data) {
					// console.log(data);
					var downloadList=new Array();
					for(var i=0;i<data.data.downloads.length;i++){
							downloadList.push(data.data.downloads[i]);
							}
							that.downloads = downloadList;				
					}
				});	
			}

	}
});
download.show();

/*校园人物*/
// var person = new Vue({
// 	el: "#person",
// 	data: {
// 		persons: [
// 			]
// 		},
// 	methods:{
// 		show:function(event){
// 		var that = this;
// 		$.ajax({
// 		url: 'http://120.27.137.151/api/person-list/',
// 		success: function(data) {	
// 					that.persons = that.persons.concat(data.data.persons);			
// 					}
// 				});	
// 			},

// 		change:function() {
// 			person.$watch('persons',function(){
// 						$('#person').children()[0].style.left='0px';
// 					});
// 				}
// 		}
// });
// person.show();person.change();

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
					}
				});	
			},

		change:function() {

			person.$watch('persons',function(){
						$('#person').children()[0].style.left='0px';
						// alert("111");
					});
				}
		}
});
person.show(); person.change();

var layout = new Vue({
	el: "#layout",
	data: {
	},
	methods:{
		new:function(){
		var that=this;
		var Url=window.location.href;
		var idNum=Url.split("?")[1]
		var apiUrl="http://120.27.137.151/api/detail/?"+idNum;
		$.ajax({
			url:apiUrl,	
			success:function(data){
					var pageList=new Array();
					for(var i=0;i<3;i++){
						pageList.push(data.data);
					}
					layout.$data=pageList[0];
			}
		});
		}
	}
});
layout.new();


// person.show();person.change();




