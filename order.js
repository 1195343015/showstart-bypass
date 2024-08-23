(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-activity-confirm-confirm"], {
    "0108": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAD1BMVEX29vbw8PDz8/P////5+fkTLnPGAAAAj0lEQVQY012RwRFEIQhDmdUCjN8GcEuwgT1s/zX9QRAHuGVewmggmTmBXpfM1h9mAE218g5gOJ8MmeKchaOLtoAZyALYieGc1ZA4ivGz4KG4sFEMNJO+0P3Mqt1g/F/r1t307+w72jj48uvvRMY1MIhCA096T0nvXfE/bR2p/Hv7SH0yNg59jXV5uhdj6j1f9wAdJ7OZYb8AAAAASUVORK5CYII="
    },
    "06a3": function(e, t, i) {
        "use strict";
        i("6a54");
        var o = i("f5bd").default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        i("4626"),
        i("5ac7");
        var a = o(i("9b1b"))
          , r = o(i("eb11"))
          , n = (i("fbe0"),
        i("4ae5"),
        function(e, t, i) {
            var n = 0
              , s = e.sessionId;
            function d(e) {
                var t = getCurrentPages()
                  , i = t[t.length - 1].route
                  , a = i.includes("/confirm/confirm");
                r.default.ajax({
                    url: "/order/coreOrder",
                    method: "POST",
                    data: {
                        coreOrderKey: e
                    },
                    apiSource: "appnj",
                    apiId: 2,
                    eventId: s,
                    secret: !0,
                    success: function(t) {
                        var i = t.data
                          , o = i.state
                          , a = i.result
                          , r = i.msg;
                        if (o && 1 == o && a)
                            if (a.orderJobKey)
                                c(a.orderJobKey, s);
                            else
                                var n = setTimeout((function() {
                                    d(e),
                                    clearTimeout(n)
                                }
                                ), 2e3);
                        else
                            uni.showToast({
                                title: r || "订单生成失败",
                                icon: "none"
                            })
                    }
                })
            }
            function c(e, o) {
                var a = o
                  , s = getCurrentPages()
                  , d = s[s.length - 1].route
                  , p = d.includes("/confirm/confirm");
                uni.showToast({
                    title: n,
                    icon: "none"
                })
                n++,
                r.default.ajax({
                    url: "/order/getOrderResult",
                    method: "POST",
                    data: {
                        orderJobKey: e
                    },
                    apiSource: "appnj",
                    apiId: 2,
                    eventId: a,
                    secret: !0,
                    success: function(o) {
                        var a = o.data
                          , s = a.state
                          , d = a.result
                          , u = a.msg;
                        if (s && 1 == s && d) {
                            if (d.orderId)
                                p || uni.showModal({
                                    title: "提示",
                                    content: "抢票成功,请立即前往支付",
                                    confirmText: "立即查看",
                                    cancelText: "稍后再看",
                                    success: function(e) {
                                        e.confirm ? uni.redirectTo({
                                            url: i + "?orderId=" + r.default.encodeId(d.orderId)
                                        }) : e.cancel
                                    }
                                }),
                                t && t(d),
                                uni.hideLoading(),
                                n = 0;
                            else if (n < 15)
                                var l = setTimeout((function() {
                                    c(e),
                                    clearTimeout(l)
                                }
                                ), 2e3)
                        } else
                            uni.showToast({
                                title: u || "订单生成失败",
                                icon: "none"
                            })
                    }
                })
            }
            r.default.ajax({
                url: "/order/order",
                method: "POST",
                data: (0,
                a.default)({}, e),
                apiSource: "appnj",
                apiId: 1,
                eventId: s,
                secret: !0,
                success: function(e) {
                    var a = e.data.result
                    setTimeout(function() {
                        d(a.coreOrderKey)
                    }, 1000 * a.sleep)
                },
                fail: function() {
                    uni.hideLoading()
                },
                complete: function() {}
            })
        }
        );
        t.default = n
    },
    "09b5": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAD1BMVEX29vbw8PDz8/P////5+fkTLnPGAAAAhklEQVQY012R0RGEMAhEceYagApCKjjHBkz/TRmzLKj8vXnZJIAcd52u2rvMWrzpLGvkcaOn/+vSnd4XGj20BspMI96CoY0+bku/f3zEieLQRgZq+oy3pzdgevJPAt+sxRvyyaPy9V+r96p91AFvyaN8zcvZL+dZ88IB+NyHKT33RY99dgYuUX4fqMe9BdcAAAAASUVORK5CYII="
    },
    1708: function(e, t, i) {
        var o = i("c86c")
          , a = i("2ec5")
          , r = i("0108")
          , n = i("09b5")
          , s = i("d68f")
          , d = i("4dac");
        t = o(!1);
        var c = a(r)
          , p = a(n)
          , u = a(s)
          , l = a(d);
        t.push([e.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.order-page[data-v-7fe06c89]{background:#f8f8f8;padding:%?40?% %?30?% %?220?% %?30?%}.order-page .top-tips[data-v-7fe06c89]{background:#000;color:#fff;font-size:%?26?%;color:#fff;text-align:center;padding:%?12?%;margin:%?-40?% %?-30?% %?30?% %?-30?%}.order-page .order-group[data-v-7fe06c89]{box-shadow:0 0 %?40?% 0 rgba(0,0,0,.05);border-radius:%?20?%;background:#fff;position:relative;margin-bottom:%?30?%;overflow:hidden}.order-page .order-group.info-base .name[data-v-7fe06c89]{padding:%?40?%;background-image:linear-gradient(90deg,#f65e56,#fc9a69);text-align:center;font-size:%?34?%;color:#fff}.order-page .order-group.info-base .line[data-v-7fe06c89]{color:#f2f2f2;margin:%?-16?% %?20?% 0 %?20?%;font-size:%?30?%;height:%?32?%;line-height:%?32?%;white-space:nowrap;position:relative;text-align:center}.order-page .order-group.info-base .line[data-v-7fe06c89]:before{content:"";position:absolute;width:%?32?%;height:%?32?%;background:url(' + c + ') 50% no-repeat;background-size:100%;left:%?-36?%;top:50%;margin-top:%?-16?%;border-radius:100%}.order-page .order-group.info-base .line[data-v-7fe06c89]:after{content:"";position:absolute;width:%?32?%;height:%?32?%;background:url(' + p + ") 50% no-repeat;background-size:100%;right:%?-36?%;top:50%;margin-top:%?-16?%;border-radius:100%}.order-page .order-group.info-base .info[data-v-7fe06c89]{padding:0 %?40?% %?40?% %?40?%}.order-page .order-group.info-base .info uni-text[data-v-7fe06c89]{margin-top:%?30?%;font-size:%?24?%;color:#999;display:block}.order-page .order-group.info-base .info uni-view[data-v-7fe06c89]{font-size:%?28?%}.order-page .order-group.info-list[data-v-7fe06c89]{padding:0 %?30?%}.order-page .order-group.info-list .info-item[data-v-7fe06c89]{display:flex;justify-content:space-between;align-items:center;align-content:center;border-bottom:%?1?% #ebebeb solid;padding:%?40?% 0}.order-page .order-group.info-list .info-item[data-v-7fe06c89]:last-child{border:0}.order-page .order-group.info-list .info-item .ll[data-v-7fe06c89]{font-size:%?24?%;color:#999}.order-page .order-group.info-list .info-item .rr[data-v-7fe06c89]{font-size:%?32?%;text-align:right;width:calc(100% - %?140?%)}.order-page .order-group.info-list .info-item .rr .viewer-list[data-v-7fe06c89]{margin:%?10?% 0}.order-page .order-group.info-list .info-item .rr.remark[data-v-7fe06c89]{font-size:%?28?%}.order-page .order-group.info-list .info-item .rr.remark .remark-view[data-v-7fe06c89]{white-space:pre-wrap}.order-page .order-group.info-list .info-item .rr.remark uni-input[data-v-7fe06c89], .order-page .order-group.info-list .info-item .rr.remark uni-textarea[data-v-7fe06c89]{width:100%;font-size:%?28?%}.order-page .order-group.info-list .info-item .rr.remark .no-text[data-v-7fe06c89]{color:grey}.order-page .order-group.info-list .info-item .rr .o-input[data-v-7fe06c89]{display:flex;align-items:center;justify-content:flex-end}.order-page .order-group.info-list .info-item .rr .o-input uni-picker[data-v-7fe06c89]{margin-right:%?20?%;padding-right:%?20?%;border-right:%?1?% #ebebeb solid;line-height:%?20?%}.order-page .order-group.info-list .info-item .rr .o-input uni-input[data-v-7fe06c89]{text-align:left;width:%?240?%}.order-page .order-group.info-list .info-item .rr .o-input uni-image[data-v-7fe06c89]{width:%?150?%;height:%?60?%;margin-left:%?10?%}.order-page .order-group.info-list .info-item .rr .o-input .btn[data-v-7fe06c89]{color:#eb484a}.order-page .order-group.info-list .info-item .rr .o-input .btn.disabled[data-v-7fe06c89]{color:#999;font-size:%?28?%}.order-page .order-group.info-list .info-item .rr .tips[data-v-7fe06c89]{color:#999}.order-page .order-group.info-list .info-item .rr .msg[data-v-7fe06c89]{font-size:%?24?%;color:#999}.order-page .order-group.info-list .info-item.link-item .rr[data-v-7fe06c89]{margin-right:%?35?%}.order-page .order-group.info-list .info-item.goods-info[data-v-7fe06c89]{justify-content:flex-start;flex-wrap:nowrap}.order-page .order-group.info-list .info-item .goods-title[data-v-7fe06c89]{font-size:%?28?%}.order-page .order-group.info-list .info-item .goods-title .activity-name[data-v-7fe06c89]{overflow:hidden;text-overflow:ellipsis;margin-bottom:%?20?%;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:%?80?%;line-height:%?40?%}.order-page .order-group.info-list .info-item .goods-poster[data-v-7fe06c89]{width:%?150?%;height:%?150?%;margin:0 %?40?% 0 0;background:#f8f8f8;position:relative}.order-page .order-group.info-list .info-item .goods-poster .vip-icon[data-v-7fe06c89]{position:absolute;bottom:0;right:0;width:%?80?%;height:%?26?%;background:url(" + u + ') 50% no-repeat;background-size:100%}.order-page .order-group.info-list .info-item .goods-poster.raise-poster[data-v-7fe06c89]{width:%?210?%;margin:0 0 0 %?40?%}.order-page .order-group.info-list .info-item .goods-poster.activity-poster[data-v-7fe06c89]{width:%?150?%;height:%?200?%;border-radius:%?8?%;overflow:hidden;position:relative}.order-page .order-group.info-list .info-item .goods-poster uni-image[data-v-7fe06c89]{max-width:100%;max-height:100%}.order-page .order-group.info-list .info-item.ticket-item[data-v-7fe06c89]{display:block}.order-page .order-group.info-list .info-item.ticket-item .ticketInfo[data-v-7fe06c89]{font-size:%?28?%;margin-bottom:%?40?%}.order-page .order-group.info-list .info-item.ticket-item .ticketInfo .ll[data-v-7fe06c89]{margin-bottom:%?10?%}.order-page .order-group.info-list .info-item.ticket-item .ticketInfo[data-v-7fe06c89]:last-child{margin-bottom:0}.order-page .order-group.info-list .info-item .ticketPrice[data-v-7fe06c89]{font-size:%?68?%}.order-page .order-group.info-list .info-item .ticketPrice uni-text[data-v-7fe06c89]{font-size:%?28?%}.order-page .order-group.info-detail[data-v-7fe06c89]{padding:0 %?30?%}.order-page .order-group.info-detail .info-item[data-v-7fe06c89]{flex-wrap:wrap}.order-page .order-group.info-detail .o-info[data-v-7fe06c89]{padding:%?30?% 0}.order-page .order-group.info-detail .o-info .o-item[data-v-7fe06c89]{width:100%;display:flex;justify-content:space-between;align-items:center;padding:%?15?% 0}.order-page .order-group.info-detail .o-info .o-item .ll[data-v-7fe06c89]{font-size:%?24?%;color:#999}.order-page .order-group.info-detail .o-info .o-item .rr[data-v-7fe06c89]{font-size:%?28?%;max-width:60%}.order-page .order-group.info-detail .o-info .o-item .rr.payMoney[data-v-7fe06c89]{font-size:%?36?%}.order-page .order-group.info-detail .o-info .o-item.link-item .rr[data-v-7fe06c89]{margin-right:%?35?%}.order-page .tips[data-v-7fe06c89]{font-size:%?24?%;color:#999;line-height:%?42?%}.order-page .service[data-v-7fe06c89]{font-size:%?24?%;color:#999;padding:%?30?% 0;border-top:%?1?% #ebebeb solid;margin-top:%?30?%}.order-page .link-item[data-v-7fe06c89]{position:relative}.order-page .link-item[data-v-7fe06c89]:after{content:"";position:absolute;width:%?35?%;height:%?34?%;background:url(' + l + ") 50% no-repeat;background-size:100%;top:50%;margin-top:%?-17?%;right:%?-5?%}.order-page .footer-bar[data-v-7fe06c89]{position:fixed;width:100%;left:0;bottom:0;z-index:99;background:#fff}.order-page .footer-bar .tips[data-v-7fe06c89]{padding:%?15?%;background:#fff;color:#999;font-size:%?24?%;line-height:normal;display:flex;justify-content:center}.order-page .footer-bar .payBtn[data-v-7fe06c89]{text-align:center;font-size:%?32?%;font-weight:500;background:linear-gradient(270deg,#eb484a,#fd5f26);box-shadow:0 5px 10px 0 rgba(248,89,47,.1);color:#fff;height:%?90?%;line-height:%?90?%;position:relative;border-radius:%?45?%;margin:0 %?20?%}.order-page .footer-bar .payBtn.disabled[data-v-7fe06c89]{background:#ebebeb;color:#333}.order-page .pop-box[data-v-7fe06c89], .order-page .coupon-pop-box[data-v-7fe06c89]{flex:1;padding:0 %?40?%;display:block;position:relative}.order-page .pop-box .pop-head[data-v-7fe06c89], .order-page .coupon-pop-box .pop-head[data-v-7fe06c89]{display:flex;justify-content:space-between}.order-page .pop-box .pop-head .cancel[data-v-7fe06c89], .order-page .coupon-pop-box .pop-head .cancel[data-v-7fe06c89]{color:#999}.order-page .pop-box .pop-content .viewerTotal[data-v-7fe06c89],\n.order-page .pop-box .pop-content .warning[data-v-7fe06c89],\n.order-page .coupon-pop-box .pop-content .viewerTotal[data-v-7fe06c89],\n.order-page .coupon-pop-box .pop-content .warning[data-v-7fe06c89]{text-align:left;color:#eb484a;line-height:normal;font-size:%?24?%}.order-page .pop-box .pop-content .tips[data-v-7fe06c89], .order-page .coupon-pop-box .pop-content .tips[data-v-7fe06c89]{padding:%?60?% 0}.order-page .pop-box .pop-content .list-wrap[data-v-7fe06c89], .order-page .coupon-pop-box .pop-content .list-wrap[data-v-7fe06c89]{max-height:%?800?%}.order-page .pop-box .pop-content .list-wrap uni-label[data-v-7fe06c89], .order-page .coupon-pop-box .pop-content .list-wrap uni-label[data-v-7fe06c89]{display:flex;justify-content:space-between;align-items:center;border-top:%?1?% #ebebeb solid;line-height:normal;text-align:left;padding:%?20?% 0}.order-page .pop-box .pop-content .list-wrap uni-label .name[data-v-7fe06c89], .order-page .coupon-pop-box .pop-content .list-wrap uni-label .name[data-v-7fe06c89]{font-size:%?28?%}.order-page .pop-box .pop-content .list-wrap uni-label .addr[data-v-7fe06c89], .order-page .coupon-pop-box .pop-content .list-wrap uni-label .addr[data-v-7fe06c89]{font-size:%?24?%;color:#999}.order-page .pop-box .pop-bottom[data-v-7fe06c89], .order-page .coupon-pop-box .pop-bottom[data-v-7fe06c89]{margin:0 %?-40?%;border-top:%?1?% #ebebeb solid}.order-page .pop-box .pop-bottom .btn[data-v-7fe06c89], .order-page .coupon-pop-box .pop-bottom .btn[data-v-7fe06c89]{height:%?100?%;line-height:%?100?%;color:#eb484a;font-size:%?32?%;text-align:center}.order-page .coupon-pop-box[data-v-7fe06c89]{background:#f8f8f8}", ""]),
        e.exports = t
    },
    "4c47": function(e, t, i) {
        var o = i("1708");
        o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[e.i, o, ""]]),
        o.locals && (e.exports = o.locals);
        var a = i("967d").default;
        a("020ad823", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "4dac": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAzCAMAAAAAYbBfAAAAM1BMVEUAAADj4+Pd3d3e3t7e3t7e3t7f39/e3t7f39/i4uLc3Nzd3d3d3d3e3t7f39/d3d3d3d1ArkRtAAAAEHRSTlMAJOQPyoNY9D8sHeq12a14fPQ+uQAAAFBJREFUSMfty0kSgCAMBMBgVFxQ8//XauUHGQsOMH1voQ5sCUl5SkAyCzf9EtBWY2Mbud3eSiwtnvLRKl1ImpWJ6Ud6kCT7CSRvnqKtqFBlL30gDAMy+ta2AAAAAElFTkSuQmCC"
    },
    5425: function(e, t, i) {
        var o = i("a687");
        o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[e.i, o, ""]]),
        o.locals && (e.exports = o.locals);
        var a = i("967d").default;
        a("6e8cc8b8", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    83873: function(e, t, i) {
        "use strict";
        var o = i("4c47")
          , a = i.n(o);
        a.a
    },
    a57e: function(e, t, i) {
        "use strict";
        i.r(t);
        var o = i("c93c")
          , a = i("ec6a");
        for (var r in a)
            ["default"].indexOf(r) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(r);
        i("83873"),
        i("d98a");
        var n = i("828b")
          , s = Object(n["a"])(a["default"], o["b"], o["c"], !1, null, "7fe06c89", null, !1, o["a"], void 0);
        t["default"] = s.exports
    },
    a687: function(e, t, i) {
        var o = i("c86c");
        t = o(!1),
        t.push([e.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.coupons-list[data-v-7fe06c89]{padding:%?10?% 0 %?50?%;max-height:%?1000?%;min-height:%?700?%;overflow-y:auto}.authInfo[data-v-7fe06c89]{text-align:left;line-height:normal;margin-top:%?20?%;font-size:%?24?%}', ""]),
        e.exports = t
    },
    c93c: function(e, t, i) {
        "use strict";
        i.d(t, "b", (function() {
            return a
        }
        )),
        i.d(t, "c", (function() {
            return r
        }
        )),
        i.d(t, "a", (function() {
            return o
        }
        ));
        var o = {
            uniPopup: i("caa8").default
        }
          , a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("v-uni-view", {
                staticClass: "content order-page"
            }, [e.orderInfo ? [i("v-uni-view", {
                staticClass: "order-group info-base"
            }, [i("v-uni-view", {
                staticClass: "name"
            }, [i("v-uni-text", {
                attrs: {
                    decode: "true"
                }
            }, [e._v(e._s(e.orderInfo.title))])], 1), i("v-uni-view", {
                staticClass: "line"
            }, [e._v("• • • • • • • • • • • • • • • • • • • • • • • • • • •")]), i("v-uni-view", {
                staticClass: "info"
            }, [i("v-uni-text", [e._v("时间")]), i("v-uni-view", [e._v(e._s(e.orderInfo.showTime))]), i("v-uni-text", [e._v("场地")]), i("v-uni-view", [e._v(e._s(e.orderInfo.cityName) + " " + e._s(e.orderInfo.siteName))]), e.orderInfo.seatNameList ? [i("v-uni-text", [e._v("座位")]), i("v-uni-view", [e._v(e._s(e.orderInfo.seatNameList.toString()))])] : e._e()], 2)], 1), 2 == e.orderInfo.buyType ? i("v-uni-view", {
                staticClass: "order-group info-list"
            }, [i("v-uni-view", {
                staticClass: "info-item link-item"
            }, [i("v-uni-view", {
                staticClass: "ll"
            }, [e._v("观演人")]), i("v-uni-view", {
                staticClass: "rr",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.viewerPopupShow = !0,
                        e.getViewer()
                    }
                }
            }, [e.viewer.length < 1 ? i("v-uni-view", {
                staticClass: "tips"
            }, [e._v("请选择观演人")]) : i("v-uni-view", e._l(e.viewer, (function(t, o) {
                return i("v-uni-view", {
                    key: o,
                    staticClass: "viewer-list"
                }, [i("v-uni-view", {
                    staticClass: "name"
                }, [e._v(e._s(t.name))]), i("v-uni-view", {
                    staticClass: "msg"
                }, [e._v(e._s(t.documentTypeStr) + " · " + e._s(t.showDocumentNumber))])], 1)
            }
            )), 1)], 1)], 1)], 1) : e._e(), 2 != e.ticketType ? i("v-uni-view", {
                staticClass: "order-group info-list",
                staticStyle: {
                    display: "none"
                }
            }, [i("v-uni-view", {
                staticClass: "info-item"
            }, [i("v-uni-view", {
                staticClass: "ll"
            }, [e._v("联系电话")]), i("v-uni-view", {
                staticClass: "rr"
            }, [i("v-uni-view", {
                staticClass: "o-input"
            }, [i("v-uni-picker", {
                attrs: {
                    range: e.areaCodeArry
                },
                on: {
                    change: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.bindAreaCodeChange.apply(void 0, arguments)
                    }
                }
            }, [e.areaCodeList && e.areaCodeList.length > 0 ? i("v-uni-view", [e._v(e._s(e.areaCodeList[e.areaCodeIndex].codeView))]) : e._e()], 1), i("v-uni-input", {
                attrs: {
                    placeholder: "请输入手机号",
                    type: "number"
                },
                model: {
                    value: e.formData.telephone,
                    callback: function(t) {
                        e.$set(e.formData, "telephone", t)
                    },
                    expression: "formData.telephone"
                }
            })], 1)], 1)], 1)], 1) : e._e(), 1 != e.orderInfo.ticketPriceVo.ticketType ? i("v-uni-view", {
                staticClass: "order-group info-list"
            }, [i("v-uni-view", {
                class: ["info-item", 4 == e.orderInfo.ticketPriceVo.ticketType ? "link-item" : ""]
            }, [i("v-uni-view", {
                staticClass: "ll"
            }, [e._v("取票方式")]), i("v-uni-view", {
                staticClass: "rr"
            }, [4 == e.orderInfo.ticketPriceVo.ticketType ? i("v-uni-picker", {
                attrs: {
                    range: e.ticketTypeView,
                    value: e.ticketType - 2
                },
                on: {
                    change: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.bindTicketTypeChange.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.ticketTypeView[e.ticketType - 2]))]) : [e._v(e._s(e.ticketTypeView[e.ticketType - 2]))]], 2)], 1), 3 == e.ticketType ? [i("v-uni-view", {
                staticClass: "info-item"
            }, [i("v-uni-view", {
                staticClass: "ll"
            }, [e._v("取票地址")]), i("v-uni-view", {
                staticClass: "rr"
            }, [e._v(e._s(e.orderInfo.ticketPriceVo.pickupAddress))])], 1), i("v-uni-view", {
                staticClass: "info-item"
            }, [i("v-uni-view", {
                staticClass: "ll"
            }, [e._v("取票时间")]), i("v-uni-view", {
                staticClass: "rr"
            }, [i("v-uni-view", [e._v(e._s(e.orderInfo.ticketPriceVo.pickupDate))]), i("v-uni-view", {
                staticClass: "msg"
            }, [e._v(e._s(e.orderInfo.ticketPriceVo.pickupTime))])], 1)], 1), i("v-uni-view", {
                staticClass: "info-item"
            }, [i("v-uni-view", {
                staticClass: "ll"
            }, [e._v(e._s(e.orderInfo.ticketPriceVo.instruction) + " " + e._s(e.orderInfo.ticketPriceVo.entityPickupInstruction))])], 1)] : e._e(), 2 == e.ticketType ? [i("v-uni-view", {
                staticClass: "info-item link-item"
            }, [i("v-uni-view", {
                staticClass: "ll"
            }, [e._v("收货地址")]), i("v-uni-view", {
                staticClass: "rr",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.addrPopupShow = !0
                    }
                }
            }, [e.addr ? i("v-uni-view", [i("v-uni-view", {
                staticClass: "name"
            }, [e._v(e._s(e.addr.consignee) + " " + e._s(e.addr.areaCodeView) + " " + e._s(e.addr.telephone))]), i("v-uni-view", {
                staticClass: "msg"
            }, [e._v(e._s(e.addr.provinceName) + e._s(e.addr.cityName) + " " + e._s(e.addr.address))])], 1) : i("v-uni-view", {
                staticClass: "tips"
            }, [e._v("请选择地址")])], 1)], 1), i("v-uni-view", {
                staticClass: "info-item"
            }, [i("v-uni-view", {
                staticClass: "ll"
            }, [e._v(e._s(e.orderInfo.ticketPriceVo.instruction) + " " + e._s(e.orderInfo.ticketPriceVo.entityMailInstruction))])], 1)] : e._e()], 2) : e._e(), i("v-uni-view", {
                staticClass: "order-group info-detail"
            }, [i("v-uni-view", {
                staticClass: "o-info"
            }, [i("v-uni-view", {
                staticClass: "o-item"
            }, [i("v-uni-view", {
                staticClass: "ll"
            }, [e._v(e._s(e.orderInfo.ticketPriceVo.ticketName))]), i("v-uni-view", {
                staticClass: "rr"
            }, [e._v("×" + e._s(e.params.ticketNum))])], 1), i("v-uni-view", {
                staticClass: "o-item"
            }, [i("v-uni-view", {
                staticClass: "ll"
            }, [e._v("总额")]), i("v-uni-view", {
                staticClass: "rr"
            }, [e._v("¥" + e._s(e.totalAmout))])], 1), i("v-uni-view", {
                class: ["o-item", e.linkClass]
            }, [i("v-uni-view", {
                staticClass: "ll"
            }, [e._v("优惠")]), i("v-uni-view", {
                staticClass: "rr"
            }, [e.couponList.length < 1 || e.totalAmout <= 2 ? i("v-uni-view", {
                staticClass: "tips"
            }, [e._v("无可用优惠券")]) : i("v-uni-view", {
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.couponPopupShow = !0
                    }
                }
            }, [e.couponList[e.couponIndex] ? [e._v("-¥" + e._s(e.couponList[e.couponIndex].price))] : [e._v("不使用优惠券")]], 2)], 1)], 1), i("v-uni-view", {
                staticClass: "o-item"
            }, [i("v-uni-view", {
                staticClass: "ll"
            }, [e._v("实付款")]), i("v-uni-view", {
                staticClass: "rr theme-color payMoney"
            }, [e._v("¥" + e._s(e.payMoney))])], 1)], 1)], 1), e.data && e.data.activityTips ? i("v-uni-view", {
                staticClass: "tips"
            }, [i("v-uni-view", [e._v(e._s(e.data.activityTips[0]))]), i("v-uni-view", [e._v(e._s(e.data.activityTips[1]))]), i("v-uni-view", [e._v(e._s(e.data.activityTips[2]))])], 1) : e._e(), i("v-uni-view", {
                staticClass: "service link-item",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.$util.service()
                    }
                }
            }, [e._v("仍有疑问？联系客服")]), i("v-uni-view", {
                staticClass: "footer-bar"
            }, [i("v-uni-view", {
                staticClass: "tips"
            }, [e._v("购票即代表阅读并同意"), i("v-uni-navigator", {
                staticClass: "theme-color",
                attrs: {
                    url: "/pages/helpCenter/help/help?pid=14"
                }
            }, [e._v("秀动购票服务条款")])], 1), e.orderInfo.ticketPriceVo.remainTicket > 0 ? i("v-uni-view", {
                staticClass: "payBtn",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.setOrder.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(0 === e.payMoney ? "免费报名" : "立即支付 ¥" + e.payMoney))]) : i("v-uni-view", {
                staticClass: "payBtn disabled"
            }, [e._v("已售罄")])], 1)] : e._e(), i("uni-popup", {
                attrs: {
                    show: e.viewerPopupShow,
                    position: "bottom",
                    "h5-top": !0
                },
                on: {
                    hidePopup: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.viewerPopupShow = !1
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "pop-box"
            }, [i("v-uni-view", {
                staticClass: "pop-head"
            }, [i("v-uni-view", {
                staticClass: "cancel",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.closeViewerpop.apply(void 0, arguments)
                    }
                }
            }, [e._v("取消")]), i("v-uni-view", {
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.setCurrentViewer(1)
                    }
                }
            }, [e._v("确定")])], 1), i("v-uni-view", {
                staticClass: "pop-content"
            }, [e.memberNum > 1 ? i("v-uni-view", {
                staticClass: "viewerTotal"
            }, [e._v("需绑定" + e._s(e.memberNum) + "位观演人，已绑定" + e._s(e.currentViewer) + "位")]) : i("v-uni-view", {
                staticClass: "viewerTotal"
            }, [e._v("需绑定" + e._s(e.params.ticketNum) + "位观演人，已绑定" + e._s(e.currentViewer) + "位。绑定观演人后不可解绑！")]), e.orderInfo && 1 == e.orderInfo.isCommonPerformerList ? i("v-uni-view", {
                staticClass: "authInfo"
            }, [i("v-uni-view", [e._v("请选择账号实名对应的观演人")]), i("v-uni-view", [e._v(e._s(e.authInfo.name) + " 身份证：" + e._s(e.authInfo.documentNumber))])], 1) : e._e(), e.viewerList.length < 1 ? i("v-uni-view", {
                staticClass: "tips"
            }, [e._v("还没有常用观演人")]) : i("v-uni-scroll-view", {
                staticClass: "list-wrap MT20",
                attrs: {
                    "scroll-y": !0
                }
            }, [e.orderInfo && 2 == e.orderInfo.buyType ? i("v-uni-checkbox-group", {
                on: {
                    change: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.selectViewer.apply(void 0, arguments)
                    }
                }
            }, e._l(e.viewerList, (function(t, o) {
                return i("v-uni-label", {
                    key: o
                }, [i("v-uni-view", [i("v-uni-view", {
                    staticClass: "name"
                }, [e._v(e._s(t.name))]), i("v-uni-view", {
                    staticClass: "addr"
                }, [e._v(e._s(t.documentTypeStr) + " " + e._s(t.showDocumentNumber))])], 1), i("v-uni-checkbox", {
                    attrs: {
                        value: o + "",
                        checked: t.selected,
                        color: "#EB484A",
                        disabled: !(!t.dis && e.orderInfo.commonPerformerDocumentType.includes(t.documentType) && 1 == t.canBuy)
                    }
                })], 1)
            }
            )), 1) : e._e()], 1)], 1), i("v-uni-view", {
                staticClass: "pop-bottom bottom-bar"
            }, [i("v-uni-view", {
                staticClass: "btn",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.newViewer.apply(void 0, arguments)
                    }
                }
            }, [e._v("＋新增观演人")])], 1)], 1)], 1), i("uni-popup", {
                attrs: {
                    show: e.addrPopupShow,
                    position: "bottom",
                    "h5-top": !0
                },
                on: {
                    hidePopup: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.addrPopupShow = !1
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "pop-box"
            }, [i("v-uni-view", {
                staticClass: "pop-head"
            }, [i("v-uni-view", {
                staticClass: "cancel",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.addrPopupShow = !1
                    }
                }
            }, [e._v("取消")]), i("v-uni-view", {
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.setCurrentAddr.apply(void 0, arguments)
                    }
                }
            }, [e._v("确定")])], 1), i("v-uni-view", {
                staticClass: "pop-content"
            }, [e.addrList.length < 1 ? i("v-uni-view", {
                staticClass: "tips"
            }, [e._v("还没有常用地址")]) : i("v-uni-scroll-view", {
                staticClass: "list-wrap",
                attrs: {
                    "scroll-y": !0
                }
            }, [i("v-uni-radio-group", {
                on: {
                    change: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.selectAddr.apply(void 0, arguments)
                    }
                }
            }, e._l(e.addrList, (function(t, o) {
                return i("v-uni-label", {
                    key: o
                }, [i("v-uni-view", [i("v-uni-view", {
                    staticClass: "name"
                }, [e._v(e._s(t.consignee) + " +" + e._s(t.areaCode.split("_")[0]) + " " + e._s(t.telephone))]), i("v-uni-view", {
                    staticClass: "addr"
                }, [1 == t.isDefault ? i("v-uni-text", {
                    staticClass: "theme-color"
                }, [e._v("默认地址")]) : e._e(), e._v(e._s(t.provinceName) + e._s(t.cityName) + " " + e._s(t.address))], 1)], 1), i("v-uni-radio", {
                    attrs: {
                        value: o + "",
                        checked: t.selected,
                        color: "#EB484A"
                    }
                })], 1)
            }
            )), 1)], 1)], 1), i("v-uni-view", {
                staticClass: "pop-bottom bottom-bar"
            }, [i("v-uni-view", {
                staticClass: "btn",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.newAddr.apply(void 0, arguments)
                    }
                }
            }, [e._v("＋新增地址")])], 1)], 1)], 1), i("uni-popup", {
                attrs: {
                    show: e.couponPopupShow,
                    position: "bottom",
                    "h5-top": !0
                },
                on: {
                    hidePopup: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.couponPopupShow = !1
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "coupon-pop-box"
            }, [i("v-uni-view", {
                staticClass: "pop-head"
            }, [i("v-uni-view", {
                staticClass: "cancel",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.couponPopupShow = !1
                    }
                }
            }, [e._v("取消")]), i("v-uni-view", {
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.setCurrentcoupon.apply(void 0, arguments)
                    }
                }
            }, [e._v("确定")])], 1), i("v-uni-view", {
                staticClass: "coupons-list"
            }, [e.couponList && e.couponList.length > 0 ? i("coupon-list-tpl", {
                attrs: {
                    dataList: e.couponList,
                    message: e.message,
                    dataFlag: e.dataFlag,
                    type: e.type,
                    tabIndex: e.tabIndex
                },
                on: {
                    "update:dataList": function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.couponList = t
                    },
                    "update:data-list": function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.couponList = t
                    }
                }
            }) : e._e()], 1)], 1)], 1), e.orderId ? i("pay-center", {
                attrs: {
                    orderId: e.orderId,
                    orderSource: "1",
                    payMoney: e.payMoney,
                    videoId: e.videoId,
                    payVideotype: e.payVideotype,
                    gps: e.gps
                }
            }) : e._e()], 2)
        }
          , r = []
    },
    d68f: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAaCAMAAAAXDCuVAAACE1BMVEUAAAD/6Lz/6Lz/6Lv/6b3/6L3/6bz/677/6bz//7//6bz/4bT/6Lz/6Lz/6b3/6b3/6rz/6Lr/7b//67r/6r0WFhb/6Lw5NS8YFxckIh6ykWJfWEkiIB795rmHb001LycmIx/85Lf64LLv2rDZr3Q+OjI8ODA+Nyzn0aqQhG22lGN+aEhEQDcsJyD34bammH2gjW6Edl50alZkXE01MSswLScvKiP74rT43q/izqftzpvfuoOtkWekjGebgVyCc1p2bVqcf1ZhWUppWkNkVkFVSDYhHx3x1KO1pofPsYTWtIDEo3TVrHO6nXLCoXHDnmqdimqAcViBcFZoYE9jWktjVD5MRTlKQDJIPS48NSofHRreyJ/WvZPfwpLTuY7KsorkwIjIr4bivIXUr3qznXrFpnixm3eulnGwlm/Npm6bhWSAdmKujV+Lck9bTDlCPDL326zo0KbgyqPs0aLZvI7lwozRtorZt4SxooTHq4DBqIC4o3+7onvHoWzAnGiylGeSgmahiWSwkGCliF2hhVyYgFx6cFyJd1qXfViUeVVsYlGOdFBpXUpzYklYUURZUEFtWkBQSDpPQjI6Mynz3bL016bVw57cxZzgxJbSu5Tpx5K/ro2yoYPQrn3bsXaqlnXOp3GUh2+zl26Uhm6nkGyxk2ewkme7mGa6l2Wmh1uNelt0Z1J+a1B3Y0VzYERgUj5UTD7PLHTeAAAAFXRSTlMAvvjmvJOBMy4E+xHy5Laaa04cGm2ZVR3eAAADEklEQVRIx62VZ1caQRiFAUvsNfOCoisIChixQwxoEBMEAgqBgGLvxt57ib1rNKb33ttPzA677C4nJ18kzxfO3QOXu3Nn5uUFiIrkhwngXAjC+JFRvGAuhEOIhF/g2EVHAMgKxcIMdC4yhOJCGUBEdMAvlg8FqjQUEmmqAuDH0vn4oMxHIZOvBD6VMQKUGsRSY6pB/6TxUMOVotwcVmiUEOHvAwryuX7r8nXG8WpdXZ3N1tOzhmjqdaeMF0nOk/HRHIzIn7EAcDPhoEIs6vQVxUqemlYfPl7DvK3FQtHX1zevW+rt7e3u/o0yxsbKy7OzL0szMwGAqlMF4eT+Axmnj/plhxZpHcsNlLyzm4bZ8hueDQw4p1qcziISLxIJc26RlGJGc0VUMzKI4kVCIVvVsHxIQn5KhuREjd9Qr+/sbG+frkU0U07EUIYD+hMKEU0hRPL4IA7Ie/124+c8zKcN+WscUptFocXhrVbrjK5lprW1tbm52YsN3UKSXDdrKAY+L4yV6i9Z6ksUWt8GuRB7XV1dN0hmZwcQynK5XEu6HYOhGFNGJ8QBWQchhPEE8Pf5YEv2eK5jeiqpBwsLiMUrxlST5DNnBgRBhifpDHk/sWEFGbt2FKHblKFG19LR0dHW1laC1TgOKMUdW1AAAO4rIxNB7MmHCII4IIgR2rC+XcEYKm6SGAyLD/axEmEk2w8txyJuQlwKh4N+smbjJvkV2vC7XkQZMtydLMLLVYKpkilVVSS5gTWMp7cNU7QcJ/PZh/1qqwKlvahUKNCOC/kxdH87WzWv4r+rftTU1DQxIZVdwZQiP25ICN7Yin5jg8nzY9jx0kMd3RGb3rc2bf3qo8MVPTabFyWcw3x/EHGYg6Tgo2eUy+2OdCNxsmsnf7Vp03dWKMhejuafvg84nL4yTx7S4vj5s8x9xFImjUkJvhwk6kb6VsHb+teRKRDG5EUM2uLAU827N9sixGKBRM71FTqDEJfKuWBD98uMSQ55BLCUWSDmYqhDip1S7jkpxCX/1zEak5hKe4U+6EEQn5CUQvv8AX+CD/2qo9oKAAAAAElFTkSuQmCC"
    },
    d98a: function(e, t, i) {
        "use strict";
        var o = i("5425")
          , a = i.n(o);
        a.a
    },
    ec6a: function(e, t, i) {
        "use strict";
        i.r(t);
        var o = i("f3d5")
          , a = i.n(o);
        for (var r in o)
            ["default"].indexOf(r) < 0 && function(e) {
                i.d(t, e, (function() {
                    return o[e]
                }
                ))
            }(r);
        t["default"] = a.a
    },
    f3d5: function(e, t, i) {
        "use strict";
        (function(e) {
            i("6a54");
            var o = i("f5bd").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var a = o(i("9b1b"));
            i("e838"),
            i("bf0f"),
            i("2797"),
            i("aa9c"),
            i("c223"),
            i("dc8a"),
            i("8f71"),
            i("e966"),
            i("5c47"),
            i("a1c1"),
            i("45da"),
            i("c9b5"),
            i("ab80");
            var r = o(i("caa8"))
              , n = (o(i("aae4")),
            o(i("06a3")))
              , s = (i("fbe0"),
            o(i("c46d")))
              , d = o(i("4adb"));
            i("fcbe");
            var c = {
                data: function() {
                    return {
                        data: null,
                        orderInfo: null,
                        params: {
                            ticketId: "",
                            sequence: "",
                            ticketNum: 1
                        },
                        viewerList: [],
                        viewer: [],
                        viewerPopupShow: !1,
                        areaCodeList: [],
                        areaCodeArry: [],
                        areaCodeIndex: 0,
                        ticketType: 1,
                        ticketTypeView: ["实体票寄送", "实体票自取"],
                        addrList: [],
                        addr: null,
                        addrPopupShow: !1,
                        couponList: [],
                        couponIndex: 0,
                        imageCode: "",
                        totalAmout: 0,
                        payMoney: "",
                        formData: {
                            orderDetails: [],
                            commonPerfomerIds: [],
                            areaCode: "",
                            telephone: "",
                            addressId: "",
                            teamId: "",
                            couponId: "",
                            checkCode: "",
                            source: 0,
                            discount: 0,
                            sessionId: ""
                        },
                        linkClass: "",
                        orderId: null,
                        videoId: "",
                        payVideotype: "",
                        captchaBar: null,
                        memberNum: 1,
                        currentViewer: 0,
                        dis: !1,
                        provinceCode: "",
                        cityCode: "",
                        params2: {
                            pageNo: 1,
                            pageSize: 100
                        },
                        couponPopupShow: !1,
                        dataFlag: !0,
                        message: "没有可用优惠券",
                        tabIndex: 2,
                        type: 2,
                        gps: null,
                        authInfo: ""
                    }
                },
                components: {
                    uniPopup: r.default,
                    payCenter: s.default,
                    couponListTpl: d.default
                },
                onLoad: function(e) {
                    var t = this;
                    this.params.ticketId = e.ticketId,
                    this.params.sequence = e.sequence,
                    this.params.ticketNum = e.ticketNum || 1,
                    this.videoId = e.videoId || "",
                    this.payVideotype = e.payVideotype || "",
                    e.seatCodeList && (this.params.seatCodeList = e.seatCodeList.split(",")),
                    uni.getLocation({
                        success: function(e) {
                            t.gps = e
                        }
                    }),
                    this.$util.urlReset(),
                    this.$util.accesslog(e)
                },
                onShow: function() {
                    this.getData()
                },
                onUnload: function() {
                    this.captchaBar && this.captchaBar.destroy()
                },
                methods: {
                    getData: function() {
                        var e = this;
                        uni.showLoading({
                            title: "加载中",
                            mask: !0
                        }),
                        this.$util.ajax({
                            url: "/wap/order/confirm.json",
                            method: "POST",
                            data: this.params,
                            apiSource: "order",
                            eventId: this.params.sequence,
                            success: function(t) {
                                var i = t.data
                                  , o = i.state
                                  , a = i.result
                                  , r = i.msg;
                                o && 1 == o ? (e.data = a,
                                e.orderInfo = a.orderInfoVo,
                                e.formData.areaCode = e.orderInfo.areaCode || "86_CN",
                                e.formData.telephone = e.orderInfo.telephone || "",
                                e.formData.sessionId = e.orderInfo.sessionId,
                                e.ticketType = 4 == e.orderInfo.ticketPriceVo.ticketType ? 3 : e.orderInfo.ticketPriceVo.ticketType,
                                e.memberNum = e.orderInfo.memberNum * e.params.ticketNum,
                                e.formData.teamId = e.data.teamId || "",
                                e.totalAmout = e.orderInfo.ticketPriceVo.price * e.params.ticketNum,
                                e.totalAmout = parseFloat(e.totalAmout).toFixed(2),
                                e.getAreaCode(),
                                e.totalAmout > 2 ? e.getCouponDefault() : e.setPayMoney(),
                                2 == e.orderInfo.buyType && 0 != e.orderInfo.isCommonPerformerList && e.getViewer(),
                                2 != e.orderInfo.ticketPriceVo.ticketType && 4 != e.orderInfo.ticketPriceVo.ticketType || e.getAddr(),
                                uni.hideLoading()) : uni.showToast({
                                    title: r || "获取数据失败",
                                    icon: "none"
                                })
                            }
                        })
                    },
                    getAreaCode: function() {
                        var e = this;
                        (!this.areaCodeList || this.areaCodeList.length < 1) && this.$util.ajax({
                            url: "/wap/city/areaCode.json",
                            data: {},
                            success: function(t) {
                                var i = t.data.result;
                                e.areaCodeArry = [],
                                e.areaCodeList = i,
                                e.areaCodeList.forEach((function(t, i) {
                                    e.areaCodeArry.push(t.codeView + " " + t.name),
                                    t.code == e.formData.areaCode && (e.areaCodeIndex = i)
                                }
                                )),
                                e.formData.areaCode = e.areaCodeList[e.areaCodeIndex].code
                            }
                        })
                    },
                    bindAreaCodeChange: function(e) {
                        this.areaCodeIndex = e.detail.value,
                        this.formData.areaCode = this.areaCodeList[this.areaCodeIndex].code
                    },
                    getViewer: function() {
                        var e = this;
                        this.$util.ajax({
                            url: "/wap/cp/list.json",
                            method: "POST",
                            data: {
                                ticketPriceId: this.params.ticketId,
                                audienceWhitelistPolicy: this.orderInfo.isCommonPerformerList
                            },
                            success: function(t) {
                                var i = t.data
                                  , o = i.state
                                  , a = i.result;
                                i.msg;
                                o && 1 == o && (e.viewerList = a || [],
                                e.viewerList.forEach((function(t, i) {
                                    e.viewerList[i].selected = !1,
                                    2 == e.orderInfo.buyType && 1 == e.orderInfo.isCommonPerformerList && 1 == t.canBuy && (e.viewerList[i].selected = !0,
                                    e.currentViewer = 1,
                                    e.selectViewer(null, [i + ""]),
                                    e.setCurrentViewer(2))
                                }
                                )),
                                1 == e.orderInfo.isCommonPerformerList && e.$util.ajax({
                                    url: "/wap/authentication/getInfo",
                                    data: {},
                                    method: "POST",
                                    success: function(t) {
                                        var i = t.data
                                          , o = i.state
                                          , a = i.result
                                          , r = i.msg;
                                        1 == o ? e.authInfo = a : uni.showToast({
                                            title: r || "获取实名信息失败",
                                            icon: "none"
                                        })
                                    }
                                }))
                            }
                        })
                    },
                    newViewer: function() {
                        var e = getCurrentPages()
                          , t = e.length > 0 ? e[e.length - 1].route : "";
                        t = this.$util.objArgs(t, this.params),
                        uni.navigateTo({
                            url: "/pages/user/viewer/edit/edit?redirect=" + t
                        })
                    },
                    selectViewer: function(e) {
                        var t = this
                          , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["0"];
                        e && (i = e.detail.value,
                        this.currentViewer = i.length),
                        2 == this.orderInfo.buyType && (this.viewerList.forEach((function(e, i) {
                            t.viewerList[i].selected = !1
                        }
                        )),
                        "string" === typeof i ? this.viewerList[i].selected = !1 : i.forEach((function(e, i) {
                            t.viewerList[e].selected = !0
                        }
                        )),
                        this.memberNum > 1 ? i.length >= this.memberNum ? this.viewerList.forEach((function(e, i) {
                            0 == t.viewerList[i].selected && (t.viewerList[i].dis = !0,
                            t.$set(t.viewerList, i, t.viewerList[i]))
                        }
                        )) : this.viewerList.forEach((function(e, i) {
                            t.viewerList[i].dis && (t.viewerList[i].dis = !1,
                            t.$set(t.viewerList, i, t.viewerList[i]))
                        }
                        )) : i.length >= this.params.ticketNum && 1 == this.memberNum ? this.viewerList.forEach((function(e, i) {
                            0 == t.viewerList[i].selected && (t.viewerList[i].dis = !0,
                            t.$set(t.viewerList, i, t.viewerList[i]))
                        }
                        )) : this.viewerList.forEach((function(e, i) {
                            t.viewerList[i].dis && (t.viewerList[i].dis = !1,
                            t.$set(t.viewerList, i, t.viewerList[i]))
                        }
                        )))
                    },
                    setCurrentViewer: function() {
                        var e = this
                          , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        if (this.orderInfo && 2 == this.orderInfo.buyType) {
                            this.viewer = [];
                            var i = [];
                            if (this.viewerList.forEach((function(t, o) {
                                t.selected && (e.viewer.push(t),
                                i.push(t.id))
                            }
                            )),
                            this.formData.commonPerfomerIds = [].concat(i),
                            this.memberNum > 1)
                                if (this.formData.commonPerfomerIds.length != this.memberNum) {
                                    var o = this.memberNum - this.formData.commonPerfomerIds.length;
                                    uni.showToast({
                                        title: "还需要选择" + o + "观演人",
                                        icon: "none"
                                    }),
                                    1 == t && (this.viewerPopupShow = !0)
                                } else
                                    1 == t && (this.viewerPopupShow = !1);
                            else if (this.params.ticketNum != this.formData.commonPerfomerIds.length) {
                                var a = this.params.ticketNum - this.formData.commonPerfomerIds.length;
                                uni.showToast({
                                    title: "还需要选择" + a + "观演人",
                                    icon: "none"
                                })
                            } else
                                1 == t && (this.viewerPopupShow = !1,
                                this.currentViewer = 0)
                        }
                    },
                    closeViewerpop: function() {
                        var e = this;
                        this.viewerPopupShow = !1,
                        this.currentViewer = 0,
                        2 == this.orderInfo.buyType && this.viewerList.forEach((function(t, i) {
                            e.viewerList[i].selected = !1
                        }
                        ))
                    },
                    getAddr: function() {
                        var e = this;
                        this.$util.ajax({
                            url: "/wap/address/list.json",
                            method: "POST",
                            data: {},
                            success: function(t) {
                                var i = t.data
                                  , o = i.state
                                  , a = i.result;
                                i.msg;
                                if (o && 1 == o) {
                                    e.addrList = a;
                                    var r = e.$store.state.newAddressId;
                                    e.addrList.forEach((function(t, i) {
                                        e.addrList[i].selected = !1,
                                        r && "" != r ? r == t.id && (e.addrList[i].selected = !0) : 1 == t.isDefault && (e.addrList[i].selected = !0)
                                    }
                                    )),
                                    2 == e.ticketType && e.setCurrentAddr()
                                }
                            }
                        })
                    },
                    newAddr: function() {
                        var e = getCurrentPages()
                          , t = e.length > 0 ? e[e.length - 1].route : "";
                        t = this.$util.objArgs(t, this.params),
                        uni.navigateTo({
                            url: "/pages/user/address/edit/edit?redirect=" + t
                        })
                    },
                    selectAddr: function(e) {
                        var t = this;
                        this.addrList.forEach((function(e, i) {
                            t.addrList[i].selected = !1
                        }
                        )),
                        this.addrList[e.detail.value].selected = !0
                    },
                    setCurrentAddr: function() {
                        var e = this;
                        this.addr = null,
                        this.addrList.forEach((function(t, i) {
                            t.selected && (e.addr = (0,
                            a.default)((0,
                            a.default)({}, t), {}, {
                                addressId: t.addressId || t.id
                            }),
                            e.addr.areaCodeView = "86_CN" != e.addr.areaCode ? "+" + e.addr.areaCode.split("_")[0] : "")
                        }
                        )),
                        this.addrPopupShow = !1,
                        this.formData.addressId = this.addr && this.addr.addressId ? this.addr.addressId : "",
                        this.formData.telephone = void 0,
                        this.formData.areaCode = void 0,
                        this.provinceCode = this.addr && this.addr.provinceCode ? this.addr.provinceCode : "",
                        this.cityCode = this.addr && this.addr.cityCode ? this.addr.cityCode : ""
                    },
                    getCouponDefault: function() {
                        var e = this;
                        this.$util.ajax({
                            url: "/wap/coupon/default",
                            data: {
                                totalAmount: this.totalAmout,
                                goodsId: this.params.sequence,
                                goodsType: 1,
                                ticketId: this.params.ticketId
                            },
                            method: "POST",
                            paramsType: "body",
                            success: function(t) {
                                var i = t.data.result;
                                e.couponList = [],
                                i && Object.keys(i).length > 0 && e.couponList.push(i),
                                e.couponList.length > 0 && (e.couponList[0].selected = 1,
                                e.couponIndex = e.totalAmout > 2 ? 0 : e.couponList.length,
                                e.linkClass = "link-item"),
                                e.setPayMoney(),
                                e.getCouponList()
                            }
                        })
                    },
                    getCouponList: function() {
                        var t = this;
                        this.$util.ajax({
                            url: "/coupon/order_list",
                            data: (0,
                            a.default)((0,
                            a.default)({}, this.params2), {}, {
                                totalAmount: this.totalAmout,
                                goodsId: this.params.sequence,
                                goodsType: 1,
                                ticketId: this.params.ticketId
                            }),
                            method: "POST",
                            apiSource: "appnj",
                            secret: !0,
                            success: function(e) {
                                var i = e.data.result
                                  , o = i.couponList;
                                t.couponList.length > 0 && (o = o.filter((function(e) {
                                    return e.id != t.couponList[t.couponIndex].id
                                }
                                ))),
                                t.couponList = t.couponList.concat(o),
                                t.couponList[t.couponIndex] && t.couponList[t.couponIndex].canntUseMsg && (t.couponIndex = -1),
                                t.setPayMoney()
                            },
                            fail: function(t) {
                                e.log(t)
                            }
                        })
                    },
                    setCurrentcoupon: function() {
                        var e = this;
                        this.formData.couponId = "",
                        this.couponIndex = -1,
                        this.couponList.forEach((function(t, i) {
                            1 == t.selected && (e.formData.couponId = t.id,
                            e.couponIndex = i)
                        }
                        )),
                        this.couponPopupShow = !1,
                        this.setPayMoney()
                    },
                    setPayMoney: function() {
                        var e = this.couponList.length > this.couponIndex
                          , t = 0;
                        e && this.couponList[this.couponIndex] && (this.formData.couponId = this.couponList[this.couponIndex].id,
                        t = this.couponList[this.couponIndex].price),
                        this.formData.discount = t,
                        this.payMoney = this.totalAmout - t,
                        this.payMoney = this.payMoney > this.totalAmout ? this.totalAmout : this.payMoney,
                        this.payMoney = this.payMoney < 0 ? 0 : this.payMoney,
                        this.formData.freight = 3 == this.ticketType ? 0 : this.orderInfo.freight || 0;
                        var i = this.orderInfo.freight <= 0 || 3 != this.ticketType ? 0 : parseFloat(this.orderInfo.freight || 0);
                        this.payMoney += i,
                        this.payMoney = parseFloat(this.payMoney).toFixed(2)
                    },
                    bindTicketTypeChange: function(e) {
                        this.ticketType = parseInt(e.detail.value) + 2,
                        this.setPayMoney()
                    },
                    setOrder: function() {
                        var e = this;
                        if (2 == this.orderInfo.buyType && this.viewer.length < 1)
                            uni.showToast({
                                title: "请选择观演人",
                                icon: "none"
                            });
                        else {
                            if (2 == this.orderInfo.buyType) {
                                if (this.viewer.length < this.params.ticketNum)
                                    return void uni.showToast({
                                        title: "观演人小于购票数量，请添加观演人",
                                        icon: "none"
                                    });
                                if (this.viewer.length > this.params.ticketNum && 1 == this.memberNum)
                                    return void uni.showToast({
                                        title: "观演人大于购票数量，请重新选择观演人",
                                        icon: "none"
                                    })
                            }
                            2 != this.ticketType || "" != this.formData.addressId ? 2 == this.orderInfo.validateType || 4 == this.orderInfo.validateType ? (this.captchaBar = new TencentCaptcha("2032912416",(function(t) {
                                0 === t.ret && (e.formData.randStr = encodeURIComponent(t.randstr),
                                e.formData.checkCode = encodeURIComponent(t.ticket),
                                e.getoken())
                            }
                            )),
                            this.captchaBar.show()) : this.getoken() : uni.showToast({
                                title: "请添加收货地址",
                                icon: "none"
                            })
                        }
                    },
                    getoken: function() {
                        var e = this
                          , t = "";
                        4 == this.orderInfo.validateType ? (t = this.$util.uuid(16),
                        uni.showLoading({
                            title: "加载中",
                            mask: !0
                        }),
                        this.$util.ajax({
                            url: "/order/token/" + this.orderInfo.orderToken + "/" + t,
                            data: {},
                            method: "POST",
                            apiSource: "appnj",
                            success: function(i) {
                                var o = i.data
                                  , a = o.state
                                  , r = o.result
                                  , n = o.msg;
                                a && r ? (e.formData.tokenRand = t,
                                e.formData.tokenCode = r || "",
                                e.order()) : uni.showToast({
                                    title: n || "请求失败,请稍后重试",
                                    icon: "none"
                                })
                            },
                            fail: function(e) {
                                uni.showToast({
                                    title: "请求失败,请稍后重试",
                                    icon: "none"
                                })
                            }
                        })) : this.order()
                    },
                    order: function() {
                        var e = this;
                        this.formData.orderDetails = [{
                            goodsType: 1,
                            skuType: this.ticketType,
                            num: this.params.ticketNum,
                            goodsId: this.orderInfo.activityId,
                            skuId: this.orderInfo.ticketPriceVo.ticketId,
                            price: this.orderInfo.ticketPriceVo.price,
                            goodsPhoto: this.orderInfo.poster,
                            dyPOIType: this.orderInfo.ticketPriceVo.dyPOIType,
                            goodsName: this.orderInfo.title,
                            douyinPoiId: this.orderInfo.douyinPoiId
                        }],
                        this.orderInfo.seatCodeList && (this.formData.orderDetails[0].seatCodeList = this.orderInfo.seatCodeList.toString().replaceAll(",", ";")),
                        (0,
                        n.default)((0,
                        a.default)((0,
                        a.default)({}, this.formData), {}, {
                            amountPayable: this.payMoney,
                            totalAmount: this.totalAmout,
                            partner: uni.getStorageSync("partner") && uni.getStorageSync("partner").value || "",
                            orderSource: 1,
                            videoId: this.videoId,
                            payVideotype: this.payVideotype
                        }), (function(t) {
                            e.orderId = t.orderId,
                            e.$store.commit("setNewAddressId", "")
                        }
                        ), "/pages/order/activity/detail/detail")
                    }
                }
            };
            t.default = c
        }
        ).call(this, i("ba7c")["default"])
    }
}]);
