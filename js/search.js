function searchClick() {
	var searchInput =document.getElementById('searchInput');
	var searchKey=searchInput.value;
	if (len(searchKey)>=1) {
		window.open('http://home.ncu.edu.cn/NewIndex2013/Article_search.aspx?KeyWord='+encodeURI(searchInput.value));
		searchInput.value='';
	} 
	else if(len(searchKey)==0){}
	else{
		alert('too short');
	}
}
function len(s) {
	var l=0;
	var a =s.split("");
	for (var i = 0;i<a.length; i++) {
		if (a[i].charCodeAt(0)<299) {
			l++;
		} else {
			l+=2;
		}
	}
	return l;
}
document.getElementById('search').onclick=function () {
	searchClick();
}
function enter(){
	var searchInput =document.getElementById('searchInput');
	var searchKey=searchInput.value;
	if(searchKey!=null){
	
	document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0]; 
		if(e && e.keyCode==13){ 
		searchClick();
				}
			}; 
		}
	};
enter();

