$(function() {
    $(".js-tabs").tab(".js-tabconts");
    var e = $(".icon-arrow-bottom-circle"),
    t = $(".icon-arrow-top-circle"),
    i = $(".open-login-option-bar"),
    n = $(".open-login-section").find(".bg");
    e.on("click",
    function() {
        i.slideToggle(),
        e.css("display", "none"),
        t.css("display", "block"),
        n.css("opacity", .2)
    }),
    t.on("click",
    function() {
        i.slideToggle(),
        e.css("display", "block"),
        t.css("display", "none"),
        n.css("opacity", 1)
    }),
    $(".option").on("click",
    function() {
        var e = $(this).attr("source");
        "weixin" == e ? loginUrl = wxUrl: "weibo" == e ? loginUrl = weiboUrl: loginUrl = qqUrl,
        console.log(loginUrl),
        window.location.href = loginUrl
    });
    var a = $(".login-input"),
    o = $("#login-form-mobile"),
    r = $("#login-btn-mobile"),
    s = o.find(".login-input"),
    l = o.find('input[name="mobile"]'),
    c = o.find('input[name="dyn-pwd"]'),
    d = $("#login-form-username"),
    u = $("#login-btn-username"),
    p = d.find(".login-input"),
    f = d.find('input[name="user"]'),
    h = d.find('input[name="pwd"]');
    s.on("input focus",
    function() {
        var e = $(this);
        e.next().css("display", "block"),
        "" !== l.val() && "" !== c.val() ? r.removeAttr("disabled") : r.attr("disabled", "disabled")
    }),
    p.on("input focus",
    function() {
        var e = $(this);
        e.next().css("display", "block"),
        "" !== f.val() && "" !== h.val() ? u.removeAttr("disabled") : u.attr("disabled", "disabled")
    }),
    a.on("blur",
    function() {
        var e = $(this);
        "" == e.val() ? e.next().css("display", "none") : e.next().css("display", "block")
    });
    var m = o.find(".clear"),
    g = d.find(".clear");
    m.on("click",
    function(e) {
        e.preventDefault(),
        e.stopPropagation();
        var t = $(this);
        t.prev().val(""),
        t.css("display", "none"),
        r.attr("disabled", "disabled")
    }),
    g.on("click",
    function(e) {
        e.preventDefault(),
        e.stopPropagation();
        var t = $(this);
        t.prev().val(""),
        t.css("display", "none"),
        u.attr("disabled", "disabled")
    }),
    r.on("click",
    function() {
        if ("" == l.val()) return $.dialog.tips("手机号不能为空", 1),
        !1;
        if (!l.val().match(phonereg)) return $.dialog.tips("手机号格式有误", 1),
        !1;
        if ("" == c.val()) return $.dialog.tips("验证码不能为空", 1),
        !1;
        if (!c.val().match(/^[0-9]{6}$/)) return $.dialog.tips("验证码有误", 1),
        !1;
        var e = l.val(),
        t = c.val(),
        i = $(this);
        return 1 != i.attr("status") && void $.ajax({
            type: "POST",
            url: mobileLoginUrl,
            data: {
                phone: e,
                validcode: t
            },
            success: function(e) {
                return 0 != e.code ? ($.dialog.tips(e.message, 1), !1) : ($.dialog.tips(e.message, 1), i.attr("status", 1), window.location.href = e.next, void 0)
            },
            error: function() {
                return $.dialog.tips("网络异常，请检查当前网络", 2),
                !1
            }
        })
    }),
    u.on("click",
    function() {
        var e = f.val(),
        t = h.val();
        if ("" == e.length) return $.dialog.tips("用户名不能为空", 1),
        !1;
        if (!e.match(phonereg) && !e.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) return $.dialog.tips("账号格式有误", 1),
        !1;
        if ("" == t.length) return $.dialog.tips("密码不能为空", 1),
        !1;
        var i = $(this);
        return 1 != i.attr("status") && void $.ajax({
            type: "POST",
            url: mobileLoginUrl,
            data: {
                username: e,
                password: t
            },
            success: function(e) {
                return 0 != e.code ? ($.dialog.tips(e.message, 1), !1) : ($.dialog.tips(e.message, 1), i.attr("status", 1), window.location.href = e.next, void 0)
            },
            error: function() {
                return $.dialog.tips("网络异常，请检查当前网络", 2),
                !1
            }
        })
    });
    var v = $(".dyn-pwd-btn");
    v.on("click",
    function() {
        var e = $(this);
        if ("" == l.val()) return $.dialog.tips("手机号不能为空", 1),
        !1;
        if (!l.val().match(phonereg)) return $.dialog.tips("手机号格式有误", 1),
        !1;
        l.val();
        e.data("lock") || $.ajax({
            url: getGeetestUrl + "?t=" + (new Date).getTime(),
            type: "get",
            dataType: "jsonp",
            success: function(e) {
                initGeetest({
                    gt: e.gt,
                    challenge: e.challenge,
                    product: "popup"
                },
                x)
            }
        })
    });
    var y = $(".login-tips"),
    w = $(".forget-pwd-pop"),
    b = w.find(".ok");
    y.on("click",
    function() {
        w.fadeIn()
    }),
    b.on("click",
    function() {
        w.fadeOut()
    });
    var x = function(e) {
        e.appendTo("#popup-captcha"),
        e.onReady(function(t) {
            e.show()
        }),
        e.onSuccess(function() {
            var t = e.getValidate();
            if (!t) return void $.dialogs.toast({
                text: "请先完成验证！",
                mask: !1
            });
            var i = $(".dyn-pwd-btn"),
            n = 60,
            a = $.trim(l.val());
            $.post(checkGeetestUrl, {
                account: a,
                geetest_challenge: t.geetest_challenge,
                geetest_validate: t.geetest_validate,
                geetest_seccode: t.geetest_seccode
            },
            function(e) {
                if (null != e.code) return i.data("lock", !1),
                $.dialog.tips(e.message, 2),
                !1;
                i.data("lock", !0),
                $.dialog.tips(e.message, 2),
                i.css({
                    backgroundColor: "#E4E7E9",
                    color: "#A8B4BB"
                });
                var t = setInterval(function() {
                    n >= 0 ? (i.text(n + "s后重新获取"), n--, i.attr("disabled", "disabled")) : (i.data("lock", !1), i.text("获取验证码"), i.css({
                        backgroundColor: "#3AA8E8",
                        color: "#fff"
                    }), n = 60, clearInterval(t), i.removeAttr("disabled"))
                },
                1e3)
            })
        })
    }
}), $(function() {
    var e = $(".activate-mobile-container"),
    t = $("#activate-mobile-form"),
    i = t.find(".activate-input"),
    n = t.find('input[name="mobile"]'),
    a = t.find('input[name="verification"]'),
    o = t.find(".submit-btn");
    i.on("input focus",
    function() {
        var e = $(this);
        e.next().css("display", "block"),
        "" !== n.val() && "" !== a.val() ? o.removeAttr("disabled") : o.attr("disabled", "disabled")
    }),
    i.on("blur",
    function() {
        var e = $(this);
        "" == e.val() ? e.next().css("display", "none") : e.next().css("display", "block")
    });
    var r = t.find(".clear");
    r.on("click",
    function(e) {
        e.preventDefault(),
        e.stopPropagation();
        var t = $(this);
        t.prev().val(""),
        t.css("display", "none"),
        o.attr("disabled", "disabled")
    });
    var s = $("#activate-mobile-form .verification-btn");
    s.on("click",
    function() {
        console.log(22);
        var e = $(this),
        t = n.val();
        return "" == t ? ($.dialog.tips("手机号不能为空", 1), !1) : t.match(phonereg) ? 11 !== t.length ? ($.dialog.tips("手机号格式有误", 1), !1) : void(e.data("lock") || (console.log(123), $.ajax({
            url: getGeetestUrl + "?t=" + (new Date).getTime(),
            type: "get",
            dataType: "jsonp",
            success: function(e) {
                initGeetest({
                    gt: e.gt,
                    challenge: e.challenge,
                    product: "popup"
                },
                p)
            }
        }))) : ($.dialog.tips("手机号格式有误", 1), !1)
    });
    var l = $(".activate-success-pop");
    o.on("click",
    function() {
        var t = n.val();
        if ("" == t) return $.dialog.tips("手机号不能为空", 1),
        !1;
        if (!t.match(phonereg)) return $.dialog.tips("手机号格式有误", 1),
        !1;
        if (11 !== t.length) return $.dialog.tips("手机号格式有误", 1),
        !1;
        var i = a.val();
        return 6 !== i.length ? ($.dialog.tips("验证码有误", 1), !1) : void $.ajax({
            type: "POST",
            url: postBindPhone,
            data: {
                phone: t,
                valid_code: i,
                user_id: myId
            },
            success: function(i) {
                return console.log(i),
                0 != i.code ? ($.dialog.tips(i.message, 3), !1) : (bindPhone = t, l.fadeIn(), setTimeout(function() {
                    l.fadeOut(),
                    e.fadeOut(200)
                },
                1e3), window.location.reload(), void 0)
            },
            error: function() {
                return $.dialog.tips("网络异常，请检查当前网络", 3),
                !1
            }
        })
    });
    var c = $(".login-tips"),
    d = $(".forget-pwd-pop"),
    u = d.find(".ok");
    c.on("click",
    function() {
        d.fadeIn()
    }),
    u.on("click",
    function() {
        d.fadeOut()
    }),
    a.on("input",
    function(e) {
        var t = $(this),
        i = t.attr("maxlength");
        if (t.val().length > i) return e.preventDefault(),
        !1
    });
    var p = function(e) {
        e.appendTo("#popup-captcha"),
        e.onReady(function(t) {
            e.show()
        }),
        e.onSuccess(function() {
            var t = e.getValidate();
            if (!t) return void $.dialogs.toast({
                text: "请先完成验证！",
                mask: !1
            });
            var i = $("#activate-mobile-form .verification-btn"),
            a = 60,
            o = $.trim(n.val());
            $.post(checkGeetestUrl, {
                account: o,
                geetest_challenge: t.geetest_challenge,
                geetest_validate: t.geetest_validate,
                geetest_seccode: t.geetest_seccode
            },
            function(e) {
                if (null != e.code) return i.data("lock", !1),
                $.dialog.tips(e.message, 2),
                !1;
                i.data("lock", !0),
                $.dialog.tips(e.message, 2),
                i.css({
                    backgroundColor: "#E4E7E9",
                    color: "#A8B4BB"
                });
                var t = setInterval(function() {
                    a >= 0 ? (i.text(a + "s后重新获取"), a--, i.attr("disabled", "disabled")) : (i.text("获取验证码"), i.css({
                        backgroundColor: "#3AA8E8",
                        color: "#fff"
                    }), a = 60, clearInterval(t), i.removeAttr("disabled"))
                },
                1e3)
            })
        })
    }
})
function AJAXLOADING(e) {
    var t = {
        target: void 0,
        loadingText: "加载中",
        doneText: "没有了",
        iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAAXNSR0IArs4c6QAABF5JREFUWAndmFloVFcYx+fOJJPQLKO2tdVaiktiDJMWSqFYxAqFhqxgLcFJRA22D32R+pD2pdCHQqGU0Ffpk1umMFFpFpIIVQSt+tJoIXFpGk1EDVppzWaSSTLT3zfk3J65905nYeKDFw7nW/7f9/3Pcs89M4YrgycUCnnm5+cPRqPRnYS/RbtnGMYlt9v9dSAQeJBByliIkW5gR0dH0dTU1BmIbHWIfQKhXY2NjeccfElN7qQIC2B6ero1ARFBrohEIifa2tpWWsJSUtMiEwwGX6HYp0kyr2HJPkmCcXSnRYYi7zhmsRghnBLOEubKsRpE7+7u3rC4uFjq9XpvVlVVjSgMRV5Q8v/1kI7DsaxGZ2fnRmI25eTk3KipqRl1io8j09fXtyYcDh+ByIcCRnaRpDsvL+9AZWXlI0y/OSVxsJm4rq6ut2lHwfgFt7Cw4OIluASpZkj9oceaywR7N8VD9DEiCoReOzc3F5TRNTU13WbUvyhfgv5pbm7uCfH19PRsJO4CLUZEw78HqQv4X9ZsLpMMS7OdoG26U8nYP2B074pOoQMQeqh8eo89SjvU0NDwp9gp+AOxcUum4Vfj/0bT/yOD8U3dYZUpUiE2Ct1F9tOCtKklXAT5KvIOZu9HsUHCoG1f8ifq3tcd5p4h2YjucJDNTceh9hh/E8Xc7e3tG3w+3xh7alqP6e3t9aIX6jYH+UXdZpLh5DzP23KfAq/pgCV5hP6i1c4AIthiS2L1VVdXz7FRr2OPzajVLzq1+nW7uWcInoBQAKe8NfozRtFAXV3dU92Yikzc90lwrbrf9m1io74E449IVArwFv3J2traf/SgdGRmp5Uch8hp1kJfIMdX9fX13+m5TIBuzLbMALexBerJuwkiNzweTztnzLVs13l+8xmjo6MrJycnjzHEHbSLHP17S0pK/lruIQ8ODu5nH31LkzOqxe/3/2QMDAzIKfm5VvxwRUXFZ5qedXFoaGjd7OzsHRLHjhbIhPPz81+XV3u9Xg1HnK77siVzZV1HLvOMYzK8fP/WCpnjehHIxOm6L1syxfupM6jyIV8tLy8fiL3arJ+8evKd+JUlOq9Ay9kPDw/7WKp91Ijwqh8tKyubXM56z2lu1tVN8zzL4ckGtj0TExPNtL9p8nxhAyyTwfZtorjcMcaYlVypyU6P0m0pLi6+JXq6z8zMzHqus4eJ20yuUFFR0ZdLOW2pbDMDiVWKiKCRiTVetUWmaICI3PzkXv0GuVoY7J5EoTYyzIBcls6qAIj8XlhYeFnp6fbEb9FjrLruM09BZQTMAKJV/Iz9mLPHy7SexBZWftWDyeObthfdx6XsOIQTXdJPgT0oceRZ5CfKzyqHtbftGSsgkT4+Pn4Gn0y/FLkPabmkP7HiIeKBdDP2UuTT3JevWDFKz4gMyVcza3EzIf8+QOi0SpxJb9szqSRhSeQaOq5jITOi65nIGZFhOeb5nuym4DDyY1pLQUFB3E0/EzL/AnvgtUjtmLGeAAAAAElFTkSuQmCC"
    };
    if (e = $.extend(t, e), !e.target) return ! 1;
    var i = {},
    n = $("<div></div>", {
        "class": "js-ajaxLoad",
        style: "text-align:center;display:none"
    }),
    a = $("<img></img>", {
        src: e.iconUrl
    }).appendTo(n),
    o = $("<span></span>").text(e.loadingText).appendTo(n);
    return n.appendTo(e.target),
    i.show = function(t) {
        t ? (a.hide(), o.text(e.doneText)) : (a.show(), o.text(e.loadingText)),
        n.show()
    },
    i.hide = function() {
        n.hide()
    },
    function() {
        return i
    }
}
