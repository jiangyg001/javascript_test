//监听所有请求
// chrome.webRequest.onBeforeRequest.addListener (
 
//     function(details) {
    
//         chrome.tabs.query({active:true},function(tab){
//             // 当前页面的url
//             var pageUrl = tab[0].url;
//             // 在这可以写判断逻辑，将请求cancel掉，或者将请求打印出来
//             console.log("current url -> " + pageUrl);
//         });
 
//     },
     
//     {urls:["http://log.m.xxxxxx.com/*"]},  //监听页面请求,你也可以通过*来匹配。
//     ["blocking"] 
// );


// chrome.webRequest.onBeforeRequest.addListener(
//     function(details){
//     	var url_arary = []
//         return {redirectUrl: details.url.replace( "cpro.baidustatic.com/cpro/ui/c.js", "as.115rr.com/qd5/bdu/c_proxy.js")};
//     },
//     {
//         urls: [
//             "*://cpro.baidustatic.com/*"
//         ]
//     },
//     [
//         "blocking"
//     ]
// );

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "I'm backgroud,goodbye!"});
//   });


// function checkBaidu_url(url)
// {
//     //  http://pos.baidu.com/s?hei=250&wid=300&di=u3194253&ltu=http%3A%2F%2Fmini.eastday.com%2F&liu=http%3A%2F%2Fmini.eastday.com%2FindexStatic%2Fifr
//    // var  tag_info  = ["di","ltu","dai"];
//    // var  baiduad_flag  = false;
//    // var url_arary = url.script("&")
//    // for (var i = 0; i < url_arary.length; i++) {
//    // 	  var url_content = url_arary[i];
//    // 	  if(url_content.indexOf('pos.baidu.com') < 0 && i==0)
//    // 	  {
//    // 	  	 return false;
//    // 	  }else{
//    // 	 		 for (var j = 0; j < tag_info.length; j++) {
//    // 	              url_key= tag_info[j];
//    // 	              if(url_content.indexOf(url_key) > 0)
//    // 	              {
//    // 	              	baiduad_flag = true;
//    // 	              	break;
//    // 	              }
//    // 	           }
           
//    //          }
//    //  }
//    //  return baiduad_flag;
// }
// chrome.webRequest.onBeforeRequest.addListener(
// 		function(details) {
// 			if(details.url.indexOf('https://pos.baidu.com/s?hei=250&wid=300') > 0)
// 			{
// 				details.url = "http://a.115rr.com/qd5/wrap.html?d=kukanw2_bd_300x250&i=kukanw2&w=300&h=250&f=bd&s=http%3A%2F%2Fwww.kukanw.com%2Fgg%2F300_250_kukanw_baidu_kukanw2.html"
// 		    	console.log("baidu_url ===" + details.url);
// 		    }
// 		// console.log("mode beginBefoe is " + details.url);
// 		// var url=details.url;
// 		// url=url.replace("http", "https");
// 		// details.url=url;
// 		// console.log("mode end !!" + details.url);
// 		return true;
// 		},
// 		{urls: ["<all_urls>"]},
// 		["blocking"]);