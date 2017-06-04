!
function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    }: t(e)
} ("undefined" != typeof window ? window: this,
function(e, t) {
    var i = [],
    n = i.slice,
    a = i.concat,
    o = i.push,
    r = i.indexOf,
    s = {},
    l = s.toString,
    c = s.hasOwnProperty,
    d = {},
    u = "1.11.2",
    p = function(e, t) {
        return new p.fn.init(e, t)
    },
    f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    h = /^-ms-/,
    m = /-([\da-z])/gi,
    g = function(e, t) {
        return t.toUpperCase()
    };
    p.fn = p.prototype = {
        jquery: u,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return n.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : n.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return p.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(p.map(this,
            function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(n.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            i = +e + (0 > e ? t: 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: o,
        sort: i.sort,
        splice: i.splice
    },
    p.extend = p.fn.extend = function() {
        var e, t, i, n, a, o, r = arguments[0] || {},
        s = 1,
        l = arguments.length,
        c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[s] || {},
        s++), "object" == typeof r || p.isFunction(r) || (r = {}), s === l && (r = this, s--); l > s; s++) if (null != (a = arguments[s])) for (n in a) e = r[n],
        i = a[n],
        r !== i && (c && i && (p.isPlainObject(i) || (t = p.isArray(i))) ? (t ? (t = !1, o = e && p.isArray(e) ? e: []) : o = e && p.isPlainObject(e) ? e: {},
        r[n] = p.extend(c, o, i)) : void 0 !== i && (r[n] = i));
        return r
    },
    p.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === p.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === p.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! p.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !c.call(e, "constructor") && !c.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(i) {
                return ! 1
            }
            if (d.ownLast) for (t in e) return c.call(e, t);
            for (t in e);
            return void 0 === t || c.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? s[l.call(e)] || "object": typeof e
        },
        globalEval: function(t) {
            t && p.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(h, "ms-").replace(m, g)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var n, a = 0,
            o = e.length,
            r = v(e);
            if (i) {
                if (r) for (; o > a && (n = t.apply(e[a], i), n !== !1); a++);
                else for (a in e) if (n = t.apply(e[a], i), n === !1) break
            } else if (r) for (; o > a && (n = t.call(e[a], a, e[a]), n !== !1); a++);
            else for (a in e) if (n = t.call(e[a], a, e[a]), n === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "": (e + "").replace(f, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (v(Object(e)) ? p.merge(i, "string" == typeof e ? [e] : e) : o.call(i, e)),
            i
        },
        inArray: function(e, t, i) {
            var n;
            if (t) {
                if (r) return r.call(t, e, i);
                for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i: 0; n > i; i++) if (i in t && t[i] === e) return i
            }
            return - 1
        },
        merge: function(e, t) {
            for (var i = +t.length,
            n = 0,
            a = e.length; i > n;) e[a++] = t[n++];
            if (i !== i) for (; void 0 !== t[n];) e[a++] = t[n++];
            return e.length = a,
            e
        },
        grep: function(e, t, i) {
            for (var n, a = [], o = 0, r = e.length, s = !i; r > o; o++) n = !t(e[o], o),
            n !== s && a.push(e[o]);
            return a
        },
        map: function(e, t, i) {
            var n, o = 0,
            r = e.length,
            s = v(e),
            l = [];
            if (s) for (; r > o; o++) n = t(e[o], o, i),
            null != n && l.push(n);
            else for (o in e) n = t(e[o], o, i),
            null != n && l.push(n);
            return a.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, a, o;
            return "string" == typeof t && (o = e[t], t = e, e = o),
            p.isFunction(e) ? (i = n.call(arguments, 2), a = function() {
                return e.apply(t || this, i.concat(n.call(arguments)))
            },
            a.guid = e.guid = e.guid || p.guid++, a) : void 0
        },
        now: function() {
            return + new Date
        },
        support: d
    }),
    p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        s["[object " + t + "]"] = t.toLowerCase()
    });
    function v(e) {
        var t = e.length,
        i = p.type(e);
        return "function" !== i && !p.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    var y = function(e) {
        var t, i, n, a, o, r, s, l, c, d, u, p, f, h, m, g, v, y, w, b = "sizzle" + 1 * new Date,
        x = e.document,
        k = 0,
        T = 0,
        C = se(),
        $ = se(),
        S = se(),
        E = function(e, t) {
            return e === t && (u = !0),
            0
        },
        P = 1 << 31,
        _ = {}.hasOwnProperty,
        A = [],
        I = A.pop,
        L = A.push,
        D = A.push,
        O = A.slice,
        M = function(e, t) {
            for (var i = 0,
            n = e.length; n > i; i++) if (e[i] === t) return i;
            return - 1
        },
        N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        j = "[\\x20\\t\\r\\n\\f]",
        z = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        R = z.replace("w", "w#"),
        F = "\\[" + j + "*(" + z + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + j + "*\\]",
        H = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        V = new RegExp(j + "+", "g"),
        U = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
        B = new RegExp("^" + j + "*," + j + "*"),
        q = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
        W = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
        G = new RegExp(H),
        Y = new RegExp("^" + R + "$"),
        X = {
            ID: new RegExp("^#(" + z + ")"),
            CLASS: new RegExp("^\\.(" + z + ")"),
            TAG: new RegExp("^(" + z.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + F),
            PSEUDO: new RegExp("^" + H),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + N + ")$", "i"),
            needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
        },
        K = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = /'|\\/g,
        ie = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
        ne = function(e, t, i) {
            var n = "0x" + t - 65536;
            return n !== n || i ? t: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        },
        ae = function() {
            p()
        };
        try {
            D.apply(A = O.call(x.childNodes), x.childNodes),
            A[x.childNodes.length].nodeType
        } catch(oe) {
            D = {
                apply: A.length ?
                function(e, t) {
                    L.apply(e, O.call(t))
                }: function(e, t) {
                    for (var i = e.length,
                    n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        function re(e, t, n, a) {
            var o, s, c, d, u, h, v, y, k, T;
            if ((t ? t.ownerDocument || t: x) !== f && p(t), t = t || f, n = n || [], d = t.nodeType, "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!a && m) {
                if (11 !== d && (o = Z.exec(e))) if (c = o[1]) {
                    if (9 === d) {
                        if (s = t.getElementById(c), !s || !s.parentNode) return n;
                        if (s.id === c) return n.push(s),
                        n
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(c)) && w(t, s) && s.id === c) return n.push(s),
                    n
                } else {
                    if (o[2]) return D.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((c = o[3]) && i.getElementsByClassName) return D.apply(n, t.getElementsByClassName(c)),
                    n
                }
                if (i.qsa && (!g || !g.test(e))) {
                    if (y = v = b, k = t, T = 1 !== d && e, 1 === d && "object" !== t.nodeName.toLowerCase()) {
                        for (h = r(e), (v = t.getAttribute("id")) ? y = v.replace(te, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", u = h.length; u--;) h[u] = y + ve(h[u]);
                        k = ee.test(e) && me(t.parentNode) || t,
                        T = h.join(",")
                    }
                    if (T) try {
                        return D.apply(n, k.querySelectorAll(T)),
                        n
                    } catch(C) {} finally {
                        v || t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(U, "$1"), t, n, a)
        }
        function se() {
            var e = [];
            function t(i, a) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()],
                t[i + " "] = a
            }
            return t
        }
        function le(e) {
            return e[b] = !0,
            e
        }
        function ce(e) {
            var t = f.createElement("div");
            try {
                return !! e(t)
            } catch(i) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function de(e, t) {
            for (var i = e.split("|"), a = e.length; a--;) n.attrHandle[i[a]] = t
        }
        function ue(e, t) {
            var i = t && e,
            n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || P) - (~e.sourceIndex || P);
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === t) return - 1;
            return e ? 1 : -1
        }
        function pe(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }
        function fe(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }
        function he(e) {
            return le(function(t) {
                return t = +t,
                le(function(i, n) {
                    for (var a, o = e([], i.length, t), r = o.length; r--;) i[a = o[r]] && (i[a] = !(n[a] = i[a]))
                })
            })
        }
        function me(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        i = re.support = {},
        o = re.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !! t && "HTML" !== t.nodeName
        },
        p = re.setDocument = function(e) {
            var t, a, r = e ? e.ownerDocument || e: x;
            return r !== f && 9 === r.nodeType && r.documentElement ? (f = r, h = r.documentElement, a = r.defaultView, a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", ae, !1) : a.attachEvent && a.attachEvent("onunload", ae)), m = !o(r), i.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), i.getElementsByTagName = ce(function(e) {
                return e.appendChild(r.createComment("")),
                !e.getElementsByTagName("*").length
            }), i.getElementsByClassName = Q.test(r.getElementsByClassName), i.getById = ce(function(e) {
                return h.appendChild(e).id = b,
                !r.getElementsByName || !r.getElementsByName(b).length
            }), i.getById ? (n.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && m) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : []
                }
            },
            n.filter.ID = function(e) {
                var t = e.replace(ie, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete n.find.ID, n.filter.ID = function(e) {
                var t = e.replace(ie, ne);
                return function(e) {
                    var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), n.find.TAG = i.getElementsByTagName ?
            function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
            }: function(e, t) {
                var i, n = [],
                a = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = o[a++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            },
            n.find.CLASS = i.getElementsByClassName &&
            function(e, t) {
                return m ? t.getElementsByClassName(e) : void 0
            },
            v = [], g = [], (i.qsa = Q.test(r.querySelectorAll)) && (ce(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\f]' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + j + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || g.push("\\[" + j + "*(?:value|" + N + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                e.querySelectorAll(":checked").length || g.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
            }), ce(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && g.push("name" + j + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })), (i.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                i.disconnectedMatch = y.call(e, "div"),
                y.call(e, "[s!='']:x"),
                v.push("!=", H)
            }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), w = t || Q.test(h.contains) ?
            function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement: e,
                n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            E = t ?
            function(e, t) {
                if (e === t) return u = !0,
                0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n: (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === x && w(x, e) ? -1 : t === r || t.ownerDocument === x && w(x, t) ? 1 : d ? M(d, e) - M(d, t) : 0 : 4 & n ? -1 : 1)
            }: function(e, t) {
                if (e === t) return u = !0,
                0;
                var i, n = 0,
                a = e.parentNode,
                o = t.parentNode,
                s = [e],
                l = [t];
                if (!a || !o) return e === r ? -1 : t === r ? 1 : a ? -1 : o ? 1 : d ? M(d, e) - M(d, t) : 0;
                if (a === o) return ue(e, t);
                for (i = e; i = i.parentNode;) s.unshift(i);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (; s[n] === l[n];) n++;
                return n ? ue(s[n], l[n]) : s[n] === x ? -1 : l[n] === x ? 1 : 0
            },
            r) : f
        },
        re.matches = function(e, t) {
            return re(e, null, null, t)
        },
        re.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(W, "='$1']"), !(!i.matchesSelector || !m || v && v.test(t) || g && g.test(t))) try {
                var n = y.call(e, t);
                if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch(a) {}
            return re(t, f, null, [e]).length > 0
        },
        re.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e),
            w(e, t)
        },
        re.attr = function(e, t) { (e.ownerDocument || e) !== f && p(e);
            var a = n.attrHandle[t.toLowerCase()],
            o = a && _.call(n.attrHandle, t.toLowerCase()) ? a(e, t, !m) : void 0;
            return void 0 !== o ? o: i.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value: null
        },
        re.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        re.uniqueSort = function(e) {
            var t, n = [],
            a = 0,
            o = 0;
            if (u = !i.detectDuplicates, d = !i.sortStable && e.slice(0), e.sort(E), u) {
                for (; t = e[o++];) t === e[o] && (a = n.push(o));
                for (; a--;) e.splice(n[a], 1)
            }
            return d = null,
            e
        },
        a = re.getText = function(e) {
            var t, i = "",
            n = 0,
            o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += a(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[n++];) i += a(t);
            return i
        },
        n = re.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ie, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ie, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return X.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": i && G.test(i) && (t = r(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ie, ne).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = C[e + " "];
                    return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && C(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, i) {
                    return function(n) {
                        var a = re.attr(n, e);
                        return null == a ? "!=" === t: !t || (a += "", "=" === t ? a === i: "!=" === t ? a !== i: "^=" === t ? i && 0 === a.indexOf(i) : "*=" === t ? i && a.indexOf(i) > -1 : "$=" === t ? i && a.slice( - i.length) === i: "~=" === t ? (" " + a.replace(V, " ") + " ").indexOf(i) > -1 : "|=" === t && (a === i || a.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, i, n, a) {
                    var o = "nth" !== e.slice(0, 3),
                    r = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === n && 0 === a ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, i, l) {
                        var c, d, u, p, f, h, m = o !== r ? "nextSibling": "previousSibling",
                        g = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (u = t; u = u[m];) if (s ? u.nodeName.toLowerCase() === v: 1 === u.nodeType) return ! 1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [r ? g.firstChild: g.lastChild], r && y) {
                                for (d = g[b] || (g[b] = {}), c = d[e] || [], f = c[0] === k && c[1], p = c[0] === k && c[2], u = f && g.childNodes[f]; u = ++f && u && u[m] || (p = f = 0) || h.pop();) if (1 === u.nodeType && ++p && u === t) {
                                    d[e] = [k, f, p];
                                    break
                                }
                            } else if (y && (c = (t[b] || (t[b] = {}))[e]) && c[0] === k) p = c[1];
                            else for (; (u = ++f && u && u[m] || (p = f = 0) || h.pop()) && ((s ? u.nodeName.toLowerCase() !== v: 1 !== u.nodeType) || !++p || (y && ((u[b] || (u[b] = {}))[e] = [k, p]), u !== t)););
                            return p -= a,
                            p === n || p % n === 0 && p / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var i, a = n.pseudos[e] || n.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                    return a[b] ? a(t) : a.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, i) {
                        for (var n, o = a(e, t), r = o.length; r--;) n = M(e, o[r]),
                        e[n] = !(i[n] = o[r])
                    }) : function(e) {
                        return a(e, 0, i)
                    }) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var t = [],
                    i = [],
                    n = s(e.replace(U, "$1"));
                    return n[b] ? le(function(e, t, i, a) {
                        for (var o, r = n(e, null, a, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, a, o) {
                        return t[0] = e,
                        n(t, null, o, i),
                        t[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(e) {
                    return function(t) {
                        return re(e, t).length > 0
                    }
                }),
                contains: le(function(e) {
                    return e = e.replace(ie, ne),
                    function(t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }),
                lang: le(function(e) {
                    return Y.test(e || "") || re.error("unsupported lang: " + e),
                    e = e.replace(ie, ne).toLowerCase(),
                    function(t) {
                        var i;
                        do
                        if (i = m ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(),
                        i === e || 0 === i.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! n.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return K.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, i) {
                    return [0 > i ? i + t: i]
                }),
                even: he(function(e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: he(function(e, t, i) {
                    for (var n = 0 > i ? i + t: i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: he(function(e, t, i) {
                    for (var n = 0 > i ? i + t: i; ++n < t;) e.push(n);
                    return e
                })
            }
        },
        n.pseudos.nth = n.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) n.pseudos[t] = pe(t);
        for (t in {
            submit: !0,
            reset: !0
        }) n.pseudos[t] = fe(t);
        function ge() {}
        ge.prototype = n.filters = n.pseudos,
        n.setFilters = new ge,
        r = re.tokenize = function(e, t) {
            var i, a, o, r, s, l, c, d = $[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (s = e, l = [], c = n.preFilter; s;) { (!i || (a = B.exec(s))) && (a && (s = s.slice(a[0].length) || s), l.push(o = [])),
                i = !1,
                (a = q.exec(s)) && (i = a.shift(), o.push({
                    value: i,
                    type: a[0].replace(U, " ")
                }), s = s.slice(i.length));
                for (r in n.filter) ! (a = X[r].exec(s)) || c[r] && !(a = c[r](a)) || (i = a.shift(), o.push({
                    value: i,
                    type: r,
                    matches: a
                }), s = s.slice(i.length));
                if (!i) break
            }
            return t ? s.length: s ? re.error(e) : $(e, l).slice(0)
        };
        function ve(e) {
            for (var t = 0,
            i = e.length,
            n = ""; i > t; t++) n += e[t].value;
            return n
        }
        function ye(e, t, i) {
            var n = t.dir,
            a = i && "parentNode" === n,
            o = T++;
            return t.first ?
            function(t, i, o) {
                for (; t = t[n];) if (1 === t.nodeType || a) return e(t, i, o)
            }: function(t, i, r) {
                var s, l, c = [k, o];
                if (r) {
                    for (; t = t[n];) if ((1 === t.nodeType || a) && e(t, i, r)) return ! 0
                } else for (; t = t[n];) if (1 === t.nodeType || a) {
                    if (l = t[b] || (t[b] = {}), (s = l[n]) && s[0] === k && s[1] === o) return c[2] = s[2];
                    if (l[n] = c, c[2] = e(t, i, r)) return ! 0
                }
            }
        }
        function we(e) {
            return e.length > 1 ?
            function(t, i, n) {
                for (var a = e.length; a--;) if (!e[a](t, i, n)) return ! 1;
                return ! 0
            }: e[0]
        }
        function be(e, t, i) {
            for (var n = 0,
            a = t.length; a > n; n++) re(e, t[n], i);
            return i
        }
        function xe(e, t, i, n, a) {
            for (var o, r = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!i || i(o, n, a)) && (r.push(o), c && t.push(s));
            return r
        }
        function ke(e, t, i, n, a, o) {
            return n && !n[b] && (n = ke(n)),
            a && !a[b] && (a = ke(a, o)),
            le(function(o, r, s, l) {
                var c, d, u, p = [],
                f = [],
                h = r.length,
                m = o || be(t || "*", s.nodeType ? [s] : s, []),
                g = !e || !o && t ? m: xe(m, p, e, s, l),
                v = i ? a || (o ? e: h || n) ? [] : r: g;
                if (i && i(g, v, s, l), n) for (c = xe(v, f), n(c, [], s, l), d = c.length; d--;)(u = c[d]) && (v[f[d]] = !(g[f[d]] = u));
                if (o) {
                    if (a || e) {
                        if (a) {
                            for (c = [], d = v.length; d--;)(u = v[d]) && c.push(g[d] = u);
                            a(null, v = [], c, l)
                        }
                        for (d = v.length; d--;)(u = v[d]) && (c = a ? M(o, u) : p[d]) > -1 && (o[c] = !(r[c] = u))
                    }
                } else v = xe(v === r ? v.splice(h, v.length) : v),
                a ? a(null, r, v, l) : D.apply(r, v)
            })
        }
        function Te(e) {
            for (var t, i, a, o = e.length,
            r = n.relative[e[0].type], s = r || n.relative[" "], l = r ? 1 : 0, d = ye(function(e) {
                return e === t
            },
            s, !0), u = ye(function(e) {
                return M(t, e) > -1
            },
            s, !0), p = [function(e, i, n) {
                var a = !r && (n || i !== c) || ((t = i).nodeType ? d(e, i, n) : u(e, i, n));
                return t = null,
                a
            }]; o > l; l++) if (i = n.relative[e[l].type]) p = [ye(we(p), i)];
            else {
                if (i = n.filter[e[l].type].apply(null, e[l].matches), i[b]) {
                    for (a = ++l; o > a && !n.relative[e[a].type]; a++);
                    return ke(l > 1 && we(p), l > 1 && ve(e.slice(0, l - 1).concat({
                        value: " " === e[l - 2].type ? "*": ""
                    })).replace(U, "$1"), i, a > l && Te(e.slice(l, a)), o > a && Te(e = e.slice(a)), o > a && ve(e))
                }
                p.push(i)
            }
            return we(p)
        }
        function Ce(e, t) {
            var i = t.length > 0,
            a = e.length > 0,
            o = function(o, r, s, l, d) {
                var u, p, h, m = 0,
                g = "0",
                v = o && [],
                y = [],
                w = c,
                b = o || a && n.find.TAG("*", d),
                x = k += null == w ? 1 : Math.random() || .1,
                T = b.length;
                for (d && (c = r !== f && r); g !== T && null != (u = b[g]); g++) {
                    if (a && u) {
                        for (p = 0; h = e[p++];) if (h(u, r, s)) {
                            l.push(u);
                            break
                        }
                        d && (k = x)
                    }
                    i && ((u = !h && u) && m--, o && v.push(u))
                }
                if (m += g, i && g !== m) {
                    for (p = 0; h = t[p++];) h(v, y, r, s);
                    if (o) {
                        if (m > 0) for (; g--;) v[g] || y[g] || (y[g] = I.call(l));
                        y = xe(y)
                    }
                    D.apply(l, y),
                    d && !o && y.length > 0 && m + t.length > 1 && re.uniqueSort(l)
                }
                return d && (k = x, c = w),
                v
            };
            return i ? le(o) : o
        }
        return s = re.compile = function(e, t) {
            var i, n = [],
            a = [],
            o = S[e + " "];
            if (!o) {
                for (t || (t = r(e)), i = t.length; i--;) o = Te(t[i]),
                o[b] ? n.push(o) : a.push(o);
                o = S(e, Ce(a, n)),
                o.selector = e
            }
            return o
        },
        l = re.select = function(e, t, a, o) {
            var l, c, d, u, p, f = "function" == typeof e && e,
            h = !o && r(e = f.selector || e);
            if (a = a || [], 1 === h.length) {
                if (c = h[0] = h[0].slice(0), c.length > 2 && "ID" === (d = c[0]).type && i.getById && 9 === t.nodeType && m && n.relative[c[1].type]) {
                    if (t = (n.find.ID(d.matches[0].replace(ie, ne), t) || [])[0], !t) return a;
                    f && (t = t.parentNode),
                    e = e.slice(c.shift().value.length)
                }
                for (l = X.needsContext.test(e) ? 0 : c.length; l--&&(d = c[l], !n.relative[u = d.type]);) if ((p = n.find[u]) && (o = p(d.matches[0].replace(ie, ne), ee.test(c[0].type) && me(t.parentNode) || t))) {
                    if (c.splice(l, 1), e = o.length && ve(c), !e) return D.apply(a, o),
                    a;
                    break
                }
            }
            return (f || s(e, h))(o, t, !m, a, ee.test(e) && me(t.parentNode) || t),
            a
        },
        i.sortStable = b.split("").sort(E).join("") === b,
        i.detectDuplicates = !!u,
        p(),
        i.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width",
        function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        i.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || de("value",
        function(e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(N,
        function(e, t, i) {
            var n;
            return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value: null
        }),
        re
    } (e);
    p.find = y,
    p.expr = y.selectors,
    p.expr[":"] = p.expr.pseudos,
    p.unique = y.uniqueSort,
    p.text = y.getText,
    p.isXMLDoc = y.isXML,
    p.contains = y.contains;
    var w = p.expr.match.needsContext,
    b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    x = /^.[^:#\[\.,]*$/;
    function k(e, t, i) {
        if (p.isFunction(t)) return p.grep(e,
        function(e, n) {
            return !! t.call(e, n, e) !== i
        });
        if (t.nodeType) return p.grep(e,
        function(e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (x.test(t)) return p.filter(t, e, i);
            t = p.filter(t, e)
        }
        return p.grep(e,
        function(e) {
            return p.inArray(e, t) >= 0 !== i
        })
    }
    p.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"),
        1 === t.length && 1 === n.nodeType ? p.find.matchesSelector(n, e) ? [n] : [] : p.find.matches(e, p.grep(t,
        function(e) {
            return 1 === e.nodeType
        }))
    },
    p.fn.extend({
        find: function(e) {
            var t, i = [],
            n = this,
            a = n.length;
            if ("string" != typeof e) return this.pushStack(p(e).filter(function() {
                for (t = 0; a > t; t++) if (p.contains(n[t], this)) return ! 0
            }));
            for (t = 0; a > t; t++) p.find(e, n[t], i);
            return i = this.pushStack(a > 1 ? p.unique(i) : i),
            i.selector = this.selector ? this.selector + " " + e: e,
            i
        },
        filter: function(e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(k(this, e || [], !0))
        },
        is: function(e) {
            return !! k(this, "string" == typeof e && w.test(e) ? p(e) : e || [], !1).length
        }
    });
    var T, C = e.document,
    $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    S = p.fn.init = function(e, t) {
        var i, n;
        if (!e) return this;
        if ("string" == typeof e) {
            if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : $.exec(e), !i || !i[1] && t) return ! t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t: C, !0)), b.test(i[1]) && p.isPlainObject(t)) for (i in t) p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            if (n = C.getElementById(i[2]), n && n.parentNode) {
                if (n.id !== i[2]) return T.find(e);
                this.length = 1,
                this[0] = n
            }
            return this.context = C,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? "undefined" != typeof T.ready ? T.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
    };
    S.prototype = p.fn,
    T = p(C);
    var E = /^(?:parents|prev(?:Until|All))/,
    P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    p.extend({
        dir: function(e, t, i) {
            for (var n = [], a = e[t]; a && 9 !== a.nodeType && (void 0 === i || 1 !== a.nodeType || !p(a).is(i));) 1 === a.nodeType && n.push(a),
            a = a[t];
            return n
        },
        sibling: function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    }),
    p.fn.extend({
        has: function(e) {
            var t, i = p(e, this),
            n = i.length;
            return this.filter(function() {
                for (t = 0; n > t; t++) if (p.contains(this, i[t])) return ! 0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0,
            a = this.length,
            o = [], r = w.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; a > n; n++) for (i = this[n]; i && i !== t; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && p.find.matchesSelector(i, e))) {
                o.push(i);
                break
            }
            return this.pushStack(o.length > 1 ? p.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    });
    function _(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return p.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return p.dir(e, "parentNode", i)
        },
        next: function(e) {
            return _(e, "nextSibling")
        },
        prev: function(e) {
            return _(e, "previousSibling")
        },
        nextAll: function(e) {
            return p.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return p.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return p.dir(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return p.dir(e, "previousSibling", i)
        },
        siblings: function(e) {
            return p.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return p.sibling(e.firstChild)
        },
        contents: function(e) {
            return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: p.merge([], e.childNodes)
        }
    },
    function(e, t) {
        p.fn[e] = function(i, n) {
            var a = p.map(this, t, i);
            return "Until" !== e.slice( - 5) && (n = i),
            n && "string" == typeof n && (a = p.filter(n, a)),
            this.length > 1 && (P[e] || (a = p.unique(a)), E.test(e) && (a = a.reverse())),
            this.pushStack(a)
        }
    });
    var A = /\S+/g,
    I = {};
    function L(e) {
        var t = I[e] = {};
        return p.each(e.match(A) || [],
        function(e, i) {
            t[i] = !0
        }),
        t
    }
    p.Callbacks = function(e) {
        e = "string" == typeof e ? I[e] || L(e) : p.extend({},
        e);
        var t, i, n, a, o, r, s = [],
        l = !e.once && [],
        c = function(u) {
            for (i = e.memory && u, n = !0, o = r || 0, r = 0, a = s.length, t = !0; s && a > o; o++) if (s[o].apply(u[0], u[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break
            }
            t = !1,
            s && (l ? l.length && c(l.shift()) : i ? s = [] : d.disable())
        },
        d = {
            add: function() {
                if (s) {
                    var n = s.length; !
                    function o(t) {
                        p.each(t,
                        function(t, i) {
                            var n = p.type(i);
                            "function" === n ? e.unique && d.has(i) || s.push(i) : i && i.length && "string" !== n && o(i)
                        })
                    } (arguments),
                    t ? a = s.length: i && (r = n, c(i))
                }
                return this
            },
            remove: function() {
                return s && p.each(arguments,
                function(e, i) {
                    for (var n; (n = p.inArray(i, s, n)) > -1;) s.splice(n, 1),
                    t && (a >= n && a--, o >= n && o--)
                }),
                this
            },
            has: function(e) {
                return e ? p.inArray(e, s) > -1 : !(!s || !s.length)
            },
            empty: function() {
                return s = [],
                a = 0,
                this
            },
            disable: function() {
                return s = l = i = void 0,
                this
            },
            disabled: function() {
                return ! s
            },
            lock: function() {
                return l = void 0,
                i || d.disable(),
                this
            },
            locked: function() {
                return ! l
            },
            fireWith: function(e, i) {
                return ! s || n && !l || (i = i || [], i = [e, i.slice ? i.slice() : i], t ? l.push(i) : c(i)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! n
            }
        };
        return d
    },
    p.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", p.Callbacks("once memory"), "resolved"], ["reject", "fail", p.Callbacks("once memory"), "rejected"], ["notify", "progress", p.Callbacks("memory")]],
            i = "pending",
            n = {
                state: function() {
                    return i
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return p.Deferred(function(i) {
                        p.each(t,
                        function(t, o) {
                            var r = p.isFunction(e[t]) && e[t];
                            a[o[1]](function() {
                                var e = r && r.apply(this, arguments);
                                e && p.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? p.extend(e, n) : n
                }
            },
            a = {};
            return n.pipe = n.then,
            p.each(t,
            function(e, o) {
                var r = o[2],
                s = o[3];
                n[o[1]] = r.add,
                s && r.add(function() {
                    i = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                a[o[0]] = function() {
                    return a[o[0] + "With"](this === a ? n: this, arguments),
                    this
                },
                a[o[0] + "With"] = r.fireWith
            }),
            n.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            var t, i, a, o = 0,
            r = n.call(arguments),
            s = r.length,
            l = 1 !== s || e && p.isFunction(e.promise) ? s: 0,
            c = 1 === l ? e: p.Deferred(),
            d = function(e, i, a) {
                return function(o) {
                    i[e] = this,
                    a[e] = arguments.length > 1 ? n.call(arguments) : o,
                    a === t ? c.notifyWith(i, a) : --l || c.resolveWith(i, a)
                }
            };
            if (s > 1) for (t = new Array(s), i = new Array(s), a = new Array(s); s > o; o++) r[o] && p.isFunction(r[o].promise) ? r[o].promise().done(d(o, a, r)).fail(c.reject).progress(d(o, i, t)) : --l;
            return l || c.resolveWith(a, r),
            c.promise()
        }
    });
    var D;
    p.fn.ready = function(e) {
        return p.ready.promise().done(e),
        this
    },
    p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? p.readyWait++:p.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--p.readyWait: !p.isReady) {
                if (!C.body) return setTimeout(p.ready);
                p.isReady = !0,
                e !== !0 && --p.readyWait > 0 || (D.resolveWith(C, [p]), p.fn.triggerHandler && (p(C).triggerHandler("ready"), p(C).off("ready")))
            }
        }
    });
    function O() {
        C.addEventListener ? (C.removeEventListener("DOMContentLoaded", M, !1), e.removeEventListener("load", M, !1)) : (C.detachEvent("onreadystatechange", M), e.detachEvent("onload", M))
    }
    function M() { (C.addEventListener || "load" === event.type || "complete" === C.readyState) && (O(), p.ready())
    }
    p.ready.promise = function(t) {
        if (!D) if (D = p.Deferred(), "complete" === C.readyState) setTimeout(p.ready);
        else if (C.addEventListener) C.addEventListener("DOMContentLoaded", M, !1),
        e.addEventListener("load", M, !1);
        else {
            C.attachEvent("onreadystatechange", M),
            e.attachEvent("onload", M);
            var i = !1;
            try {
                i = null == e.frameElement && C.documentElement
            } catch(n) {}
            i && i.doScroll && !
            function a() {
                if (!p.isReady) {
                    try {
                        i.doScroll("left")
                    } catch(e) {
                        return setTimeout(a, 50)
                    }
                    O(),
                    p.ready()
                }
            } ()
        }
        return D.promise(t)
    };
    var N, j = "undefined";
    for (N in p(d)) break;
    d.ownLast = "0" !== N,
    d.inlineBlockNeedsLayout = !1,
    p(function() {
        var e, t, i, n;
        i = C.getElementsByTagName("body")[0],
        i && i.style && (t = C.createElement("div"), n = C.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== j && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", d.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(n))
    }),
    function() {
        var e = C.createElement("div");
        if (null == d.deleteExpando) {
            d.deleteExpando = !0;
            try {
                delete e.test
            } catch(t) {
                d.deleteExpando = !1
            }
        }
        e = null
    } (),
    p.acceptData = function(e) {
        var t = p.noData[(e.nodeName + " ").toLowerCase()],
        i = +e.nodeType || 1;
        return (1 === i || 9 === i) && (!t || t !== !0 && e.getAttribute("classid") === t)
    };
    var z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    R = /([A-Z])/g;
    function F(e, t, i) {
        if (void 0 === i && 1 === e.nodeType) {
            var n = "data-" + t.replace(R, "-$1").toLowerCase();
            if (i = e.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null: +i + "" === i ? +i: z.test(i) ? p.parseJSON(i) : i)
                } catch(a) {}
                p.data(e, t, i)
            } else i = void 0
        }
        return i
    }
    function H(e) {
        var t;
        for (t in e) if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function V(e, t, n, a) {
        if (p.acceptData(e)) {
            var o, r, s = p.expando,
            l = e.nodeType,
            c = l ? p.cache: e,
            d = l ? e[s] : e[s] && s;
            if (d && c[d] && (a || c[d].data) || void 0 !== n || "string" != typeof t) return d || (d = l ? e[s] = i.pop() || p.guid++:s),
            c[d] || (c[d] = l ? {}: {
                toJSON: p.noop
            }),
            ("object" == typeof t || "function" == typeof t) && (a ? c[d] = p.extend(c[d], t) : c[d].data = p.extend(c[d].data, t)),
            r = c[d],
            a || (r.data || (r.data = {}), r = r.data),
            void 0 !== n && (r[p.camelCase(t)] = n),
            "string" == typeof t ? (o = r[t], null == o && (o = r[p.camelCase(t)])) : o = r,
            o
        }
    }
    function U(e, t, i) {
        if (p.acceptData(e)) {
            var n, a, o = e.nodeType,
            r = o ? p.cache: e,
            s = o ? e[p.expando] : p.expando;
            if (r[s]) {
                if (t && (n = i ? r[s] : r[s].data)) {
                    p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in n ? t = [t] : (t = p.camelCase(t), t = t in n ? [t] : t.split(" ")),
                    a = t.length;
                    for (; a--;) delete n[t[a]];
                    if (i ? !H(n) : !p.isEmptyObject(n)) return
                } (i || (delete r[s].data, H(r[s]))) && (o ? p.cleanData([e], !0) : d.deleteExpando || r != r.window ? delete r[s] : r[s] = null)
            }
        }
    }
    p.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando],
            !!e && !H(e)
        },
        data: function(e, t, i) {
            return V(e, t, i)
        },
        removeData: function(e, t) {
            return U(e, t)
        },
        _data: function(e, t, i) {
            return V(e, t, i, !0)
        },
        _removeData: function(e, t) {
            return U(e, t, !0)
        }
    }),
    p.fn.extend({
        data: function(e, t) {
            var i, n, a, o = this[0],
            r = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (a = p.data(o), 1 === o.nodeType && !p._data(o, "parsedAttrs"))) {
                    for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = p.camelCase(n.slice(5)), F(o, n, a[n])));
                    p._data(o, "parsedAttrs", !0)
                }
                return a
            }
            return "object" == typeof e ? this.each(function() {
                p.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                p.data(this, e, t)
            }) : o ? F(o, e, p.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                p.removeData(this, e)
            })
        }
    }),
    p.extend({
        queue: function(e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = p._data(e, t), i && (!n || p.isArray(i) ? n = p._data(e, t, p.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = p.queue(e, t),
            n = i.length,
            a = i.shift(),
            o = p._queueHooks(e, t),
            r = function() {
                p.dequeue(e, t)
            };
            "inprogress" === a && (a = i.shift(), n--),
            a && ("fx" === t && i.unshift("inprogress"), delete o.stop, a.call(e, r, o)),
            !n && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return p._data(e, i) || p._data(e, i, {
                empty: p.Callbacks("once memory").add(function() {
                    p._removeData(e, t + "queue"),
                    p._removeData(e, i)
                })
            })
        }
    }),
    p.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--),
            arguments.length < i ? p.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                var i = p.queue(this, e, t);
                p._queueHooks(this, e),
                "fx" === e && "inprogress" !== i[0] && p.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                p.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
            a = p.Deferred(),
            o = this,
            r = this.length,
            s = function() {--n || a.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) i = p._data(o[r], e + "queueHooks"),
            i && i.empty && (n++, i.empty.add(s));
            return s(),
            a.promise(t)
        }
    });
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    q = ["Top", "Right", "Bottom", "Left"],
    W = function(e, t) {
        return e = t || e,
        "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
    },
    G = p.access = function(e, t, i, n, a, o, r) {
        var s = 0,
        l = e.length,
        c = null == i;
        if ("object" === p.type(i)) {
            a = !0;
            for (s in i) p.access(e, t, s, i[s], !0, o, r)
        } else if (void 0 !== n && (a = !0, p.isFunction(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
            return c.call(p(e), i)
        })), t)) for (; l > s; s++) t(e[s], i, r ? n: n.call(e[s], s, t(e[s], i)));
        return a ? e: c ? t.call(e) : l ? t(e[0], i) : o
    },
    Y = /^(?:checkbox|radio)$/i; !
    function() {
        var e = C.createElement("input"),
        t = C.createElement("div"),
        i = C.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d.leadingWhitespace = 3 === t.firstChild.nodeType, d.tbody = !t.getElementsByTagName("tbody").length, d.htmlSerialize = !!t.getElementsByTagName("link").length, d.html5Clone = "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, i.appendChild(e), d.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, i.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, d.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick",
        function() {
            d.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == d.deleteExpando) {
            d.deleteExpando = !0;
            try {
                delete t.test
            } catch(n) {
                d.deleteExpando = !1
            }
        }
    } (),
    function() {
        var t, i, n = C.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) i = "on" + t,
        (d[t + "Bubbles"] = i in e) || (n.setAttribute(i, "t"), d[t + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    } ();
    var X = /^(?:input|select|textarea)$/i,
    K = /^key/,
    J = /^(?:mouse|pointer|contextmenu)|click/,
    Q = /^(?:focusinfocus|focusoutblur)$/,
    Z = /^([^.]*)(?:\.(.+)|)$/;
    function ee() {
        return ! 0
    }
    function te() {
        return ! 1
    }
    function ie() {
        try {
            return C.activeElement
        } catch(e) {}
    }
    p.event = {
        global: {},
        add: function(e, t, i, n, a) {
            var o, r, s, l, c, d, u, f, h, m, g, v = p._data(e);
            if (v) {
                for (i.handler && (l = i, i = l.handler, a = l.selector), i.guid || (i.guid = p.guid++), (r = v.events) || (r = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                    return typeof p === j || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(d.elem, arguments)
                },
                d.elem = e), t = (t || "").match(A) || [""], s = t.length; s--;) o = Z.exec(t[s]) || [],
                h = g = o[1],
                m = (o[2] || "").split(".").sort(),
                h && (c = p.event.special[h] || {},
                h = (a ? c.delegateType: c.bindType) || h, c = p.event.special[h] || {},
                u = p.extend({
                    type: h,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: a,
                    needsContext: a && p.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                },
                l), (f = r[h]) || (f = r[h] = [], f.delegateCount = 0, c.setup && c.setup.call(e, n, m, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), a ? f.splice(f.delegateCount++, 0, u) : f.push(u), p.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, i, n, a) {
            var o, r, s, l, c, d, u, f, h, m, g, v = p.hasData(e) && p._data(e);
            if (v && (d = v.events)) {
                for (t = (t || "").match(A) || [""], c = t.length; c--;) if (s = Z.exec(t[c]) || [], h = g = s[1], m = (s[2] || "").split(".").sort(), h) {
                    for (u = p.event.special[h] || {},
                    h = (n ? u.delegateType: u.bindType) || h, f = d[h] || [], s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) r = f[o],
                    !a && g !== r.origType || i && i.guid !== r.guid || s && !s.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (f.splice(o, 1), r.selector && f.delegateCount--, u.remove && u.remove.call(e, r));
                    l && !f.length && (u.teardown && u.teardown.call(e, m, v.handle) !== !1 || p.removeEvent(e, h, v.handle), delete d[h])
                } else for (h in d) p.event.remove(e, h + t[c], i, n, !0);
                p.isEmptyObject(d) && (delete v.handle, p._removeData(e, "events"))
            }
        },
        trigger: function(t, i, n, a) {
            var o, r, s, l, d, u, f, h = [n || C],
            m = c.call(t, "type") ? t.type: t,
            g = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Q.test(m + p.event.triggered) && (m.indexOf(".") >= 0 && (g = m.split("."), m = g.shift(), g.sort()), r = m.indexOf(":") < 0 && "on" + m, t = t[p.expando] ? t: new p.Event(m, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : p.makeArray(i, [t]), d = p.event.special[m] || {},
            a || !d.trigger || d.trigger.apply(n, i) !== !1)) {
                if (!a && !d.noBubble && !p.isWindow(n)) {
                    for (l = d.delegateType || m, Q.test(l + m) || (s = s.parentNode); s; s = s.parentNode) h.push(s),
                    u = s;
                    u === (n.ownerDocument || C) && h.push(u.defaultView || u.parentWindow || e)
                }
                for (f = 0; (s = h[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? l: d.bindType || m,
                o = (p._data(s, "events") || {})[t.type] && p._data(s, "handle"),
                o && o.apply(s, i),
                o = r && s[r],
                o && o.apply && p.acceptData(s) && (t.result = o.apply(s, i), t.result === !1 && t.preventDefault());
                if (t.type = m, !a && !t.isDefaultPrevented() && (!d._default || d._default.apply(h.pop(), i) === !1) && p.acceptData(n) && r && n[m] && !p.isWindow(n)) {
                    u = n[r],
                    u && (n[r] = null),
                    p.event.triggered = m;
                    try {
                        n[m]()
                    } catch(v) {}
                    p.event.triggered = void 0,
                    u && (n[r] = u)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t, i, a, o, r, s = [],
            l = n.call(arguments),
            c = (p._data(this, "events") || {})[e.type] || [],
            d = p.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
                for (s = p.event.handlers.call(this, e, c), t = 0; (o = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, r = 0; (a = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, i = ((p.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, l), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var i, n, a, o, r = [],
            s = t.delegateCount,
            l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (a = [], o = 0; s > o; o++) n = t[o],
                i = n.selector + " ",
                void 0 === a[i] && (a[i] = n.needsContext ? p(i, this).index(l) >= 0 : p.find(i, this, null, [l]).length),
                a[i] && a.push(n);
                a.length && r.push({
                    elem: l,
                    handlers: a
                })
            }
            return s < t.length && r.push({
                elem: this,
                handlers: t.slice(s)
            }),
            r
        },
        fix: function(e) {
            if (e[p.expando]) return e;
            var t, i, n, a = e.type,
            o = e,
            r = this.fixHooks[a];
            for (r || (this.fixHooks[a] = r = J.test(a) ? this.mouseHooks: K.test(a) ? this.keyHooks: {}), n = r.props ? this.props.concat(r.props) : this.props, e = new p.Event(o), t = n.length; t--;) i = n[t],
            e[i] = o[i];
            return e.target || (e.target = o.srcElement || C),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            r.filter ? r.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, n, a, o = t.button,
                r = t.fromElement;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || C, a = n.documentElement, i = n.body, e.pageX = t.clientX + (a && a.scrollLeft || i && i.scrollLeft || 0) - (a && a.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || i && i.scrollTop || 0) - (a && a.clientTop || i && i.clientTop || 0)),
                !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement: r),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ie() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ie() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, i, n) {
            var a = p.extend(new p.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? p.event.trigger(a, null, t) : p.event.dispatch.call(t, a),
            a.isDefaultPrevented() && i.preventDefault()
        }
    },
    p.removeEvent = C.removeEventListener ?
    function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    }: function(e, t, i) {
        var n = "on" + t;
        e.detachEvent && (typeof e[n] === j && (e[n] = null), e.detachEvent(n, i))
    },
    p.Event = function(e, t) {
        return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? ee: te) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    },
    p.Event.prototype = {
        isDefaultPrevented: te,
        isPropagationStopped: te,
        isImmediatePropagationStopped: te,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ee,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ee,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ee,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                a = e.relatedTarget,
                o = e.handleObj;
                return (!a || a !== n && !p.contains(n, a)) && (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t),
                i
            }
        }
    }),
    d.submitBubbles || (p.event.special.submit = {
        setup: function() {
            return ! p.nodeName(this, "form") && void p.event.add(this, "click._submit keypress._submit",
            function(e) {
                var t = e.target,
                i = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form: void 0;
                i && !p._data(i, "submitBubbles") && (p.event.add(i, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), p._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ! p.nodeName(this, "form") && void p.event.remove(this, "._submit")
        }
    }),
    d.changeBubbles || (p.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (p.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), p.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                p.event.simulate("change", this, e, !0)
            })), !1) : void p.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                X.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e, !0)
                }), p._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return p.event.remove(this, "._change"),
            !X.test(this.nodeName)
        }
    }),
    d.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var i = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e), !0)
        };
        p.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                a = p._data(n, t);
                a || n.addEventListener(e, i, !0),
                p._data(n, t, (a || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                a = p._data(n, t) - 1;
                a ? p._data(n, t, a) : (n.removeEventListener(e, i, !0), p._removeData(n, t))
            }
        }
    }),
    p.fn.extend({
        on: function(e, t, i, n, a) {
            var o, r;
            if ("object" == typeof e) {
                "string" != typeof t && (i = i || t, t = void 0);
                for (o in e) this.on(o, t, i, e[o], a);
                return this
            }
            if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), n === !1) n = te;
            else if (!n) return this;
            return 1 === a && (r = n, n = function(e) {
                return p().off(e),
                r.apply(this, arguments)
            },
            n.guid = r.guid || (r.guid = p.guid++)),
            this.each(function() {
                p.event.add(this, e, n, i, t)
            })
        },
        one: function(e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, a;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj,
            p(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace: n.origType, n.selector, n.handler),
            this;
            if ("object" == typeof e) {
                for (a in e) this.off(a, t, e[a]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (i = t, t = void 0),
            i === !1 && (i = te),
            this.each(function() {
                p.event.remove(this, e, i, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                p.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? p.event.trigger(e, t, i, !0) : void 0
        }
    });
    function ne(e) {
        var t = ae.split("|"),
        i = e.createDocumentFragment();
        if (i.createElement) for (; t.length;) i.createElement(t.pop());
        return i
    }
    var ae = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    oe = / jQuery\d+="(?:null|\d+)"/g,
    re = new RegExp("<(?:" + ae + ")[\\s/>]", "i"),
    se = /^\s+/,
    le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ce = /<([\w:]+)/,
    de = /<tbody/i,
    ue = /<|&#?\w+;/,
    pe = /<(?:script|style|link)/i,
    fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    he = /^$|\/(?:java|ecma)script/i,
    me = /^true\/(.*)/,
    ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ve = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: d.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    ye = ne(C),
    we = ye.appendChild(C.createElement("div"));
    ve.optgroup = ve.option,
    ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead,
    ve.th = ve.td;
    function be(e, t) {
        var i, n, a = 0,
        o = typeof e.getElementsByTagName !== j ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== j ? e.querySelectorAll(t || "*") : void 0;
        if (!o) for (o = [], i = e.childNodes || e; null != (n = i[a]); a++) ! t || p.nodeName(n, t) ? o.push(n) : p.merge(o, be(n, t));
        return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], o) : o
    }
    function xe(e) {
        Y.test(e.type) && (e.defaultChecked = e.checked)
    }
    function ke(e, t) {
        return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Te(e) {
        return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function Ce(e) {
        var t = me.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function $e(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++) p._data(i, "globalEval", !t || p._data(t[n], "globalEval"))
    }
    function Se(e, t) {
        if (1 === t.nodeType && p.hasData(e)) {
            var i, n, a, o = p._data(e),
            r = p._data(t, o),
            s = o.events;
            if (s) {
                delete r.handle,
                r.events = {};
                for (i in s) for (n = 0, a = s[i].length; a > n; n++) p.event.add(t, i, s[i][n])
            }
            r.data && (r.data = p.extend({},
            r.data))
        }
    }
    function Ee(e, t) {
        var i, n, a;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(), !d.noCloneEvent && t[p.expando]) {
                a = p._data(t);
                for (n in a.events) p.removeEvent(t, n, a.handle);
                t.removeAttribute(p.expando)
            }
            "script" === i && t.text !== e.text ? (Te(t).text = e.text, Ce(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), d.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Y.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
        }
    }
    p.extend({
        clone: function(e, t, i) {
            var n, a, o, r, s, l = p.contains(e.ownerDocument, e);
            if (d.html5Clone || p.isXMLDoc(e) || !re.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (we.innerHTML = e.outerHTML, we.removeChild(o = we.firstChild)), !(d.noCloneEvent && d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e))) for (n = be(o), s = be(e), r = 0; null != (a = s[r]); ++r) n[r] && Ee(a, n[r]);
            if (t) if (i) for (s = s || be(e), n = n || be(o), r = 0; null != (a = s[r]); r++) Se(a, n[r]);
            else Se(e, o);
            return n = be(o, "script"),
            n.length > 0 && $e(n, !l && be(e, "script")),
            n = s = a = null,
            o
        },
        buildFragment: function(e, t, i, n) {
            for (var a, o, r, s, l, c, u, f = e.length,
            h = ne(t), m = [], g = 0; f > g; g++) if (o = e[g], o || 0 === o) if ("object" === p.type(o)) p.merge(m, o.nodeType ? [o] : o);
            else if (ue.test(o)) {
                for (s = s || h.appendChild(t.createElement("div")), l = (ce.exec(o) || ["", ""])[1].toLowerCase(), u = ve[l] || ve._default, s.innerHTML = u[1] + o.replace(le, "<$1></$2>") + u[2], a = u[0]; a--;) s = s.lastChild;
                if (!d.leadingWhitespace && se.test(o) && m.push(t.createTextNode(se.exec(o)[0])), !d.tbody) for (o = "table" !== l || de.test(o) ? "<table>" !== u[1] || de.test(o) ? 0 : s: s.firstChild, a = o && o.childNodes.length; a--;) p.nodeName(c = o.childNodes[a], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (p.merge(m, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = h.lastChild
            } else m.push(t.createTextNode(o));
            for (s && h.removeChild(s), d.appendChecked || p.grep(be(m, "input"), xe), g = 0; o = m[g++];) if ((!n || -1 === p.inArray(o, n)) && (r = p.contains(o.ownerDocument, o), s = be(h.appendChild(o), "script"), r && $e(s), i)) for (a = 0; o = s[a++];) he.test(o.type || "") && i.push(o);
            return s = null,
            h
        },
        cleanData: function(e, t) {
            for (var n, a, o, r, s = 0,
            l = p.expando,
            c = p.cache,
            u = d.deleteExpando,
            f = p.event.special; null != (n = e[s]); s++) if ((t || p.acceptData(n)) && (o = n[l], r = o && c[o])) {
                if (r.events) for (a in r.events) f[a] ? p.event.remove(n, a) : p.removeEvent(n, a, r.handle);
                c[o] && (delete c[o], u ? delete n[l] : typeof n.removeAttribute !== j ? n.removeAttribute(l) : n[l] = null, i.push(o))
            }
        }
    }),
    p.fn.extend({
        text: function(e) {
            return G(this,
            function(e) {
                return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(e))
            },
            null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var i, n = e ? p.filter(e, this) : this, a = 0; null != (i = n[a]); a++) t || 1 !== i.nodeType || p.cleanData(be(i)),
            i.parentNode && (t && p.contains(i.ownerDocument, i) && $e(be(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && p.cleanData(be(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && p.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e: t,
            this.map(function() {
                return p.clone(this, e, t)
            })
        },
        html: function(e) {
            return G(this,
            function(e) {
                var t = this[0] || {},
                i = 0,
                n = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(oe, "") : void 0;
                if (! ("string" != typeof e || pe.test(e) || !d.htmlSerialize && re.test(e) || !d.leadingWhitespace && se.test(e) || ve[(ce.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(le, "<$1></$2>");
                    try {
                        for (; n > i; i++) t = this[i] || {},
                        1 === t.nodeType && (p.cleanData(be(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch(a) {}
                }
                t && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments,
            function(t) {
                e = this.parentNode,
                p.cleanData(be(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this: this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = a.apply([], e);
            var i, n, o, r, s, l, c = 0,
            u = this.length,
            f = this,
            h = u - 1,
            m = e[0],
            g = p.isFunction(m);
            if (g || u > 1 && "string" == typeof m && !d.checkClone && fe.test(m)) return this.each(function(i) {
                var n = f.eq(i);
                g && (e[0] = m.call(this, i, n.html())),
                n.domManip(e, t)
            });
            if (u && (l = p.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (r = p.map(be(l, "script"), Te), o = r.length; u > c; c++) n = l,
                c !== h && (n = p.clone(n, !0, !0), o && p.merge(r, be(n, "script"))),
                t.call(this[c], n, c);
                if (o) for (s = r[r.length - 1].ownerDocument, p.map(r, Ce), c = 0; o > c; c++) n = r[c],
                he.test(n.type || "") && !p._data(n, "globalEval") && p.contains(s, n) && (n.src ? p._evalUrl && p._evalUrl(n.src) : p.globalEval((n.text || n.textContent || n.innerHTML || "").replace(ge, "")));
                l = i = null
            }
            return this
        }
    }),
    p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        p.fn[e] = function(e) {
            for (var i, n = 0,
            a = [], r = p(e), s = r.length - 1; s >= n; n++) i = n === s ? this: this.clone(!0),
            p(r[n])[t](i),
            o.apply(a, i.get());
            return this.pushStack(a)
        }
    });
    var Pe, _e = {};
    function Ae(t, i) {
        var n, a = p(i.createElement(t)).appendTo(i.body),
        o = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(a[0])) ? n.display: p.css(a[0], "display");
        return a.detach(),
        o
    }
    function Ie(e) {
        var t = C,
        i = _e[e];
        return i || (i = Ae(e, t), "none" !== i && i || (Pe = (Pe || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Pe[0].contentWindow || Pe[0].contentDocument).document, t.write(), t.close(), i = Ae(e, t), Pe.detach()), _e[e] = i),
        i
    } !
    function() {
        var e;
        d.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, i, n;
            return i = C.getElementsByTagName("body")[0],
            i && i.style ? (t = C.createElement("div"), n = C.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== j && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(C.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), i.removeChild(n), e) : void 0
        }
    } ();
    var Le, De, Oe = /^margin/,
    Me = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i"),
    Ne = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (Le = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    },
    De = function(e, t, i) {
        var n, a, o, r, s = e.style;
        return i = i || Le(e),
        r = i ? i.getPropertyValue(t) || i[t] : void 0,
        i && ("" !== r || p.contains(e.ownerDocument, e) || (r = p.style(e, t)), Me.test(r) && Oe.test(t) && (n = s.width, a = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = r, r = i.width, s.width = n, s.minWidth = a, s.maxWidth = o)),
        void 0 === r ? r: r + ""
    }) : C.documentElement.currentStyle && (Le = function(e) {
        return e.currentStyle
    },
    De = function(e, t, i) {
        var n, a, o, r, s = e.style;
        return i = i || Le(e),
        r = i ? i[t] : void 0,
        null == r && s && s[t] && (r = s[t]),
        Me.test(r) && !Ne.test(t) && (n = s.left, a = e.runtimeStyle, o = a && a.left, o && (a.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em": r, r = s.pixelLeft + "px", s.left = n, o && (a.left = o)),
        void 0 === r ? r: r + "" || "auto"
    });
    function je(e, t) {
        return {
            get: function() {
                var i = e();
                if (null != i) return i ? void delete this.get: (this.get = t).apply(this, arguments)
            }
        }
    } !
    function() {
        var t, i, n, a, o, r, s;
        if (t = C.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = t.getElementsByTagName("a")[0], i = n && n.style) {
            i.cssText = "float:left;opacity:.5",
            d.opacity = "0.5" === i.opacity,
            d.cssFloat = !!i.cssFloat,
            t.style.backgroundClip = "content-box",
            t.cloneNode(!0).style.backgroundClip = "",
            d.clearCloneStyle = "content-box" === t.style.backgroundClip,
            d.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing,
            p.extend(d, {
                reliableHiddenOffsets: function() {
                    return null == r && l(),
                    r
                },
                boxSizingReliable: function() {
                    return null == o && l(),
                    o
                },
                pixelPosition: function() {
                    return null == a && l(),
                    a
                },
                reliableMarginRight: function() {
                    return null == s && l(),
                    s
                }
            });
            function l() {
                var t, i, n, l;
                i = C.getElementsByTagName("body")[0],
                i && i.style && (t = C.createElement("div"), n = C.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = o = !1, s = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(t, null) || {}).top, o = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, l = t.appendChild(C.createElement("div")), l.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", t.style.width = "1px", s = !parseFloat((e.getComputedStyle(l, null) || {}).marginRight), t.removeChild(l)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l = t.getElementsByTagName("td"), l[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === l[0].offsetHeight, r && (l[0].style.display = "", l[1].style.display = "none", r = 0 === l[0].offsetHeight), i.removeChild(n))
            }
        }
    } (),
    p.swap = function(e, t, i, n) {
        var a, o, r = {};
        for (o in t) r[o] = e.style[o],
        e.style[o] = t[o];
        a = i.apply(e, n || []);
        for (o in t) e.style[o] = r[o];
        return a
    };
    var ze = /alpha\([^)]*\)/i,
    Re = /opacity\s*=\s*([^)]*)/,
    Fe = /^(none|table(?!-c[ea]).+)/,
    He = new RegExp("^(" + B + ")(.*)$", "i"),
    Ve = new RegExp("^([+-])=(" + B + ")", "i"),
    Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Be = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    qe = ["Webkit", "O", "Moz", "ms"];
    function We(e, t) {
        if (t in e) return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, a = qe.length; a--;) if (t = qe[a] + i, t in e) return t;
        return n
    }
    function Ge(e, t) {
        for (var i, n, a, o = [], r = 0, s = e.length; s > r; r++) n = e[r],
        n.style && (o[r] = p._data(n, "olddisplay"), i = n.style.display, t ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && W(n) && (o[r] = p._data(n, "olddisplay", Ie(n.nodeName)))) : (a = W(n), (i && "none" !== i || !a) && p._data(n, "olddisplay", a ? i: p.css(n, "display"))));
        for (r = 0; s > r; r++) n = e[r],
        n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? o[r] || "": "none"));
        return e
    }
    function Ye(e, t, i) {
        var n = He.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }
    function Xe(e, t, i, n, a) {
        for (var o = i === (n ? "border": "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > o; o += 2)"margin" === i && (r += p.css(e, i + q[o], !0, a)),
        n ? ("content" === i && (r -= p.css(e, "padding" + q[o], !0, a)), "margin" !== i && (r -= p.css(e, "border" + q[o] + "Width", !0, a))) : (r += p.css(e, "padding" + q[o], !0, a), "padding" !== i && (r += p.css(e, "border" + q[o] + "Width", !0, a)));
        return r
    }
    function Ke(e, t, i) {
        var n = !0,
        a = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = Le(e),
        r = d.boxSizing && "border-box" === p.css(e, "boxSizing", !1, o);
        if (0 >= a || null == a) {
            if (a = De(e, t, o), (0 > a || null == a) && (a = e.style[t]), Me.test(a)) return a;
            n = r && (d.boxSizingReliable() || a === e.style[t]),
            a = parseFloat(a) || 0
        }
        return a + Xe(e, t, i || (r ? "border": "content"), n, o) + "px"
    }
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = De(e, "opacity");
                        return "" === i ? "1": i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": d.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a, o, r, s = p.camelCase(t),
                l = e.style;
                if (t = p.cssProps[s] || (p.cssProps[s] = We(l, s)), r = p.cssHooks[t] || p.cssHooks[s], void 0 === i) return r && "get" in r && void 0 !== (a = r.get(e, !1, n)) ? a: l[t];
                if (o = typeof i, "string" === o && (a = Ve.exec(i)) && (i = (a[1] + 1) * a[2] + parseFloat(p.css(e, t)), o = "number"), null != i && i === i && ("number" !== o || p.cssNumber[s] || (i += "px"), d.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(e, i, n))))) try {
                    l[t] = i
                } catch(c) {}
            }
        },
        css: function(e, t, i, n) {
            var a, o, r, s = p.camelCase(t);
            return t = p.cssProps[s] || (p.cssProps[s] = We(e.style, s)),
            r = p.cssHooks[t] || p.cssHooks[s],
            r && "get" in r && (o = r.get(e, !0, i)),
            void 0 === o && (o = De(e, t, n)),
            "normal" === o && t in Be && (o = Be[t]),
            "" === i || i ? (a = parseFloat(o), i === !0 || p.isNumeric(a) ? a || 0 : o) : o
        }
    }),
    p.each(["height", "width"],
    function(e, t) {
        p.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? Fe.test(p.css(e, "display")) && 0 === e.offsetWidth ? p.swap(e, Ue,
                function() {
                    return Ke(e, t, n)
                }) : Ke(e, t, n) : void 0
            },
            set: function(e, i, n) {
                var a = n && Le(e);
                return Ye(e, i, n ? Xe(e, t, n, d.boxSizing && "border-box" === p.css(e, "boxSizing", !1, a), a) : 0)
            }
        }
    }),
    d.opacity || (p.cssHooks.opacity = {
        get: function(e, t) {
            return Re.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var i = e.style,
            n = e.currentStyle,
            a = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = n && n.filter || i.filter || "";
            i.zoom = 1,
            (t >= 1 || "" === t) && "" === p.trim(o.replace(ze, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = ze.test(o) ? o.replace(ze, a) : o + " " + a)
        }
    }),
    p.cssHooks.marginRight = je(d.reliableMarginRight,
    function(e, t) {
        return t ? p.swap(e, {
            display: "inline-block"
        },
        De, [e, "marginRight"]) : void 0
    }),
    p.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0,
                a = {},
                o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) a[e + q[n] + t] = o[n] || o[n - 2] || o[0];
                return a
            }
        },
        Oe.test(e) || (p.cssHooks[e + t].set = Ye)
    }),
    p.fn.extend({
        css: function(e, t) {
            return G(this,
            function(e, t, i) {
                var n, a, o = {},
                r = 0;
                if (p.isArray(t)) {
                    for (n = Le(e), a = t.length; a > r; r++) o[t[r]] = p.css(e, t[r], !1, n);
                    return o
                }
                return void 0 !== i ? p.style(e, t, i) : p.css(e, t)
            },
            e, t, arguments.length > 1)
        },
        show: function() {
            return Ge(this, !0)
        },
        hide: function() {
            return Ge(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                W(this) ? p(this).show() : p(this).hide()
            })
        }
    });
    function Je(e, t, i, n, a) {
        return new Je.prototype.init(e, t, i, n, a)
    }
    p.Tween = Je,
    Je.prototype = {
        constructor: Je,
        init: function(e, t, i, n, a, o) {
            this.elem = e,
            this.prop = i,
            this.easing = a || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = o || (p.cssNumber[i] ? "": "px")
        },
        cur: function() {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = Je.propHooks[this.prop];
            return this.pos = t = this.options.duration ? p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : Je.propHooks._default.set(this),
            this
        }
    },
    Je.prototype.init.prototype = Je.prototype,
    Je.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = p.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    Je.propHooks.scrollTop = Je.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    p.fx = Je.prototype.init,
    p.fx.step = {};
    var Qe, Ze, et = /^(?:toggle|show|hide)$/,
    tt = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"),
    it = /queueHooks$/,
    nt = [lt],
    at = {
        "*": [function(e, t) {
            var i = this.createTween(e, t),
            n = i.cur(),
            a = tt.exec(t),
            o = a && a[3] || (p.cssNumber[e] ? "": "px"),
            r = (p.cssNumber[e] || "px" !== o && +n) && tt.exec(p.css(i.elem, e)),
            s = 1,
            l = 20;
            if (r && r[3] !== o) {
                o = o || r[3],
                a = a || [],
                r = +n || 1;
                do s = s || ".5",
                r /= s,
                p.style(i.elem, e, r + o);
                while (s !== (s = i.cur() / n) && 1 !== s && --l)
            }
            return a && (r = i.start = +r || +n || 0, i.unit = o, i.end = a[1] ? r + (a[1] + 1) * a[2] : +a[2]),
            i
        }]
    };
    function ot() {
        return setTimeout(function() {
            Qe = void 0
        }),
        Qe = p.now()
    }
    function rt(e, t) {
        var i, n = {
            height: e
        },
        a = 0;
        for (t = t ? 1 : 0; 4 > a; a += 2 - t) i = q[a],
        n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e),
        n
    }
    function st(e, t, i) {
        for (var n, a = (at[t] || []).concat(at["*"]), o = 0, r = a.length; r > o; o++) if (n = a[o].call(i, t, e)) return n
    }
    function lt(e, t, i) {
        var n, a, o, r, s, l, c, u, f = this,
        h = {},
        m = e.style,
        g = e.nodeType && W(e),
        v = p._data(e, "fxshow");
        i.queue || (s = p._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--,
                p.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [m.overflow, m.overflowX, m.overflowY], c = p.css(e, "display"), u = "none" === c ? p._data(e, "olddisplay") || Ie(e.nodeName) : c, "inline" === u && "none" === p.css(e, "float") && (d.inlineBlockNeedsLayout && "inline" !== Ie(e.nodeName) ? m.zoom = 1 : m.display = "inline-block")),
        i.overflow && (m.overflow = "hidden", d.shrinkWrapBlocks() || f.always(function() {
            m.overflow = i.overflow[0],
            m.overflowX = i.overflow[1],
            m.overflowY = i.overflow[2]
        }));
        for (n in t) if (a = t[n], et.exec(a)) {
            if (delete t[n], o = o || "toggle" === a, a === (g ? "hide": "show")) {
                if ("show" !== a || !v || void 0 === v[n]) continue;
                g = !0
            }
            h[n] = v && v[n] || p.style(e, n)
        } else c = void 0;
        if (p.isEmptyObject(h))"inline" === ("none" === c ? Ie(e.nodeName) : c) && (m.display = c);
        else {
            v ? "hidden" in v && (g = v.hidden) : v = p._data(e, "fxshow", {}),
            o && (v.hidden = !g),
            g ? p(e).show() : f.done(function() {
                p(e).hide()
            }),
            f.done(function() {
                var t;
                p._removeData(e, "fxshow");
                for (t in h) p.style(e, t, h[t])
            });
            for (n in h) r = st(g ? v[n] : 0, n, f),
            n in v || (v[n] = r.start, g && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }
    }
    function ct(e, t) {
        var i, n, a, o, r;
        for (i in e) if (n = p.camelCase(i), a = t[n], o = e[i], p.isArray(o) && (a = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), r = p.cssHooks[n], r && "expand" in r) {
            o = r.expand(o),
            delete e[n];
            for (i in o) i in e || (e[i] = o[i], t[i] = a)
        } else t[n] = a
    }
    function dt(e, t, i) {
        var n, a, o = 0,
        r = nt.length,
        s = p.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (a) return ! 1;
            for (var t = Qe || ot(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, o = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(o);
            return s.notifyWith(e, [c, o, i]),
            1 > o && l ? i: (s.resolveWith(e, [c]), !1)
        },
        c = s.promise({
            elem: e,
            props: p.extend({},
            t),
            opts: p.extend(!0, {
                specialEasing: {}
            },
            i),
            originalProperties: t,
            originalOptions: i,
            startTime: Qe || ot(),
            duration: i.duration,
            tweens: [],
            createTween: function(t, i) {
                var n = p.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(n),
                n
            },
            stop: function(t) {
                var i = 0,
                n = t ? c.tweens.length: 0;
                if (a) return this;
                for (a = !0; n > i; i++) c.tweens[i].run(1);
                return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]),
                this
            }
        }),
        d = c.props;
        for (ct(d, c.opts.specialEasing); r > o; o++) if (n = nt[o].call(c, e, d, c.opts)) return n;
        return p.map(d, st, c),
        p.isFunction(c.opts.start) && c.opts.start.call(e, c),
        p.fx.timer(p.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    p.Animation = p.extend(dt, {
        tweener: function(e, t) {
            p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var i, n = 0,
            a = e.length; a > n; n++) i = e[n],
            at[i] = at[i] || [],
            at[i].unshift(t)
        },
        prefilter: function(e, t) {
            t ? nt.unshift(e) : nt.push(e)
        }
    }),
    p.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? p.extend({},
        e) : {
            complete: i || !i && t || p.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !p.isFunction(t) && t
        };
        return n.duration = p.fx.off ? 0 : "number" == typeof n.duration ? n.duration: n.duration in p.fx.speeds ? p.fx.speeds[n.duration] : p.fx.speeds._default,
        (null == n.queue || n.queue === !0) && (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            p.isFunction(n.old) && n.old.call(this),
            n.queue && p.dequeue(this, n.queue)
        },
        n
    },
    p.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, i, n)
        },
        animate: function(e, t, i, n) {
            var a = p.isEmptyObject(e),
            o = p.speed(t, i, n),
            r = function() {
                var t = dt(this, p.extend({},
                e), o); (a || p._data(this, "finish")) && t.stop(!0)
            };
            return r.finish = r,
            a || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            };
            return "string" != typeof e && (i = t, t = e, e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                a = null != e && e + "queueHooks",
                o = p.timers,
                r = p._data(this);
                if (a) r[a] && r[a].stop && n(r[a]);
                else for (a in r) r[a] && r[a].stop && it.test(a) && n(r[a]);
                for (a = o.length; a--;) o[a].elem !== this || null != e && o[a].queue !== e || (o[a].anim.stop(i), t = !1, o.splice(a, 1)); (t || !i) && p.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, i = p._data(this),
                n = i[e + "queue"],
                a = i[e + "queueHooks"],
                o = p.timers,
                r = n ? n.length: 0;
                for (i.finish = !0, p.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; r > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }),
    p.each(["toggle", "show", "hide"],
    function(e, t) {
        var i = p.fn[t];
        p.fn[t] = function(e, n, a) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(rt(t, !0), e, n, a)
        }
    }),
    p.each({
        slideDown: rt("show"),
        slideUp: rt("hide"),
        slideToggle: rt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        p.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }),
    p.timers = [],
    p.fx.tick = function() {
        var e, t = p.timers,
        i = 0;
        for (Qe = p.now(); i < t.length; i++) e = t[i],
        e() || t[i] !== e || t.splice(i--, 1);
        t.length || p.fx.stop(),
        Qe = void 0
    },
    p.fx.timer = function(e) {
        p.timers.push(e),
        e() ? p.fx.start() : p.timers.pop()
    },
    p.fx.interval = 13,
    p.fx.start = function() {
        Ze || (Ze = setInterval(p.fx.tick, p.fx.interval))
    },
    p.fx.stop = function() {
        clearInterval(Ze),
        Ze = null
    },
    p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    p.fn.delay = function(e, t) {
        return e = p.fx ? p.fx.speeds[e] || e: e,
        t = t || "fx",
        this.queue(t,
        function(t, i) {
            var n = setTimeout(t, e);
            i.stop = function() {
                clearTimeout(n)
            }
        })
    },
    function() {
        var e, t, i, n, a;
        t = C.createElement("div"),
        t.setAttribute("className", "t"),
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = t.getElementsByTagName("a")[0],
        i = C.createElement("select"),
        a = i.appendChild(C.createElement("option")),
        e = t.getElementsByTagName("input")[0],
        n.style.cssText = "top:1px",
        d.getSetAttribute = "t" !== t.className,
        d.style = /top/.test(n.getAttribute("style")),
        d.hrefNormalized = "/a" === n.getAttribute("href"),
        d.checkOn = !!e.value,
        d.optSelected = a.selected,
        d.enctype = !!C.createElement("form").enctype,
        i.disabled = !0,
        d.optDisabled = !a.disabled,
        e = C.createElement("input"),
        e.setAttribute("value", ""),
        d.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        d.radioValue = "t" === e.value
    } ();
    var ut = /\r/g;
    p.fn.extend({
        val: function(e) {
            var t, i, n, a = this[0];
            return arguments.length ? (n = p.isFunction(e), this.each(function(i) {
                var a;
                1 === this.nodeType && (a = n ? e.call(this, i, p(this).val()) : e, null == a ? a = "": "number" == typeof a ? a += "": p.isArray(a) && (a = p.map(a,
                function(e) {
                    return null == e ? "": e + ""
                })), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
            })) : a ? (t = p.valHooks[a.type] || p.valHooks[a.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(a, "value")) ? i: (i = a.value, "string" == typeof i ? i.replace(ut, "") : null == i ? "": i)) : void 0
        }
    }),
    p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return null != t ? t: p.trim(p.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options,
                    a = e.selectedIndex,
                    o = "select-one" === e.type || 0 > a,
                    r = o ? null: [], s = o ? a + 1 : n.length, l = 0 > a ? s: o ? a: 0; s > l; l++) if (i = n[l], !(!i.selected && l !== a || (d.optDisabled ? i.disabled: null !== i.getAttribute("disabled")) || i.parentNode.disabled && p.nodeName(i.parentNode, "optgroup"))) {
                        if (t = p(i).val(), o) return t;
                        r.push(t)
                    }
                    return r
                },
                set: function(e, t) {
                    for (var i, n, a = e.options,
                    o = p.makeArray(t), r = a.length; r--;) if (n = a[r], p.inArray(p.valHooks.option.get(n), o) >= 0) try {
                        n.selected = i = !0
                    } catch(s) {
                        n.scrollHeight
                    } else n.selected = !1;
                    return i || (e.selectedIndex = -1),
                    a
                }
            }
        }
    }),
    p.each(["radio", "checkbox"],
    function() {
        p.valHooks[this] = {
            set: function(e, t) {
                return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) >= 0 : void 0
            }
        },
        d.checkOn || (p.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var pt, ft, ht = p.expr.attrHandle,
    mt = /^(?:checked|selected)$/i,
    gt = d.getSetAttribute,
    vt = d.input;
    p.fn.extend({
        attr: function(e, t) {
            return G(this, p.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                p.removeAttr(this, e)
            })
        }
    }),
    p.extend({
        attr: function(e, t, i) {
            var n, a, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === j ? p.prop(e, t, i) : (1 === o && p.isXMLDoc(e) || (t = t.toLowerCase(), n = p.attrHooks[t] || (p.expr.match.bool.test(t) ? ft: pt)), void 0 === i ? n && "get" in n && null !== (a = n.get(e, t)) ? a: (a = p.find.attr(e, t), null == a ? void 0 : a) : null !== i ? n && "set" in n && void 0 !== (a = n.set(e, i, t)) ? a: (e.setAttribute(t, i + ""), i) : void p.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var i, n, a = 0,
            o = t && t.match(A);
            if (o && 1 === e.nodeType) for (; i = o[a++];) n = p.propFix[i] || i,
            p.expr.match.bool.test(i) ? vt && gt || !mt.test(i) ? e[n] = !1 : e[p.camelCase("default-" + i)] = e[n] = !1 : p.attr(e, i, ""),
            e.removeAttribute(gt ? i: n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!d.radioValue && "radio" === t && p.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t),
                        i && (e.value = i),
                        t
                    }
                }
            }
        }
    }),
    ft = {
        set: function(e, t, i) {
            return t === !1 ? p.removeAttr(e, i) : vt && gt || !mt.test(i) ? e.setAttribute(!gt && p.propFix[i] || i, i) : e[p.camelCase("default-" + i)] = e[i] = !0,
            i
        }
    },
    p.each(p.expr.match.bool.source.match(/\w+/g),
    function(e, t) {
        var i = ht[t] || p.find.attr;
        ht[t] = vt && gt || !mt.test(t) ?
        function(e, t, n) {
            var a, o;
            return n || (o = ht[t], ht[t] = a, a = null != i(e, t, n) ? t.toLowerCase() : null, ht[t] = o),
            a
        }: function(e, t, i) {
            return i ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    vt && gt || (p.attrHooks.value = {
        set: function(e, t, i) {
            return p.nodeName(e, "input") ? void(e.defaultValue = t) : pt && pt.set(e, t, i)
        }
    }),
    gt || (pt = {
        set: function(e, t, i) {
            var n = e.getAttributeNode(i);
            return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)),
            n.value = t += "",
            "value" === i || t === e.getAttribute(i) ? t: void 0
        }
    },
    ht.id = ht.name = ht.coords = function(e, t, i) {
        var n;
        return i ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value: null
    },
    p.valHooks.button = {
        get: function(e, t) {
            var i = e.getAttributeNode(t);
            return i && i.specified ? i.value: void 0
        },
        set: pt.set
    },
    p.attrHooks.contenteditable = {
        set: function(e, t, i) {
            pt.set(e, "" !== t && t, i)
        }
    },
    p.each(["width", "height"],
    function(e, t) {
        p.attrHooks[t] = {
            set: function(e, i) {
                return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
            }
        }
    })),
    d.style || (p.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var yt = /^(?:input|select|textarea|button|object)$/i,
    wt = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return G(this, p.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = p.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch(t) {}
            })
        }
    }),
    p.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, i) {
            var n, a, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return o = 1 !== r || !p.isXMLDoc(e),
            o && (t = p.propFix[t] || t, a = p.propHooks[t]),
            void 0 !== i ? a && "set" in a && void 0 !== (n = a.set(e, i, t)) ? n: e[t] = i: a && "get" in a && null !== (n = a.get(e, t)) ? n: e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : yt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    d.hrefNormalized || p.each(["href", "src"],
    function(e, t) {
        p.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    d.optSelected || (p.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        p.propFix[this.toLowerCase()] = this
    }),
    d.enctype || (p.propFix.enctype = "encoding");
    var bt = /[\t\r\n\f]/g;
    p.fn.extend({
        addClass: function(e) {
            var t, i, n, a, o, r, s = 0,
            l = this.length,
            c = "string" == typeof e && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).addClass(e.call(this, t, this.className))
            });
            if (c) for (t = (e || "").match(A) || []; l > s; s++) if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(bt, " ") : " ")) {
                for (o = 0; a = t[o++];) n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                r = p.trim(n),
                i.className !== r && (i.className = r)
            }
            return this
        },
        removeClass: function(e) {
            var t, i, n, a, o, r, s = 0,
            l = this.length,
            c = 0 === arguments.length || "string" == typeof e && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).removeClass(e.call(this, t, this.className))
            });
            if (c) for (t = (e || "").match(A) || []; l > s; s++) if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(bt, " ") : "")) {
                for (o = 0; a = t[o++];) for (; n.indexOf(" " + a + " ") >= 0;) n = n.replace(" " + a + " ", " ");
                r = e ? p.trim(n) : "",
                i.className !== r && (i.className = r)
            }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : this.each(p.isFunction(e) ?
            function(i) {
                p(this).toggleClass(e.call(this, i, this.className, t), t)
            }: function() {
                if ("string" === i) for (var t, n = 0,
                a = p(this), o = e.match(A) || []; t = o[n++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                else(i === j || "boolean" === i) && (this.className && p._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": p._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            i = 0,
            n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(bt, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        }
    }),
    p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        p.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }),
    p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var xt = p.now(),
    kt = /\?/,
    Tt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var i, n = null,
        a = p.trim(t + "");
        return a && !p.trim(a.replace(Tt,
        function(e, t, a, o) {
            return i && t && (n = 0),
            0 === n ? e: (i = a || t, n += !o - !a, "")
        })) ? Function("return " + a)() : p.error("Invalid JSON: " + t)
    },
    p.parseXML = function(t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (n = new DOMParser, i = n.parseFromString(t, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(t))
        } catch(a) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t),
        i
    };
    var Ct, $t, St = /#.*$/,
    Et = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    _t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    At = /^(?:GET|HEAD)$/,
    It = /^\/\//,
    Lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Dt = {},
    Ot = {},
    Mt = "*/".concat("*");
    try {
        $t = location.href
    } catch(Nt) {
        $t = C.createElement("a"),
        $t.href = "",
        $t = $t.href
    }
    Ct = Lt.exec($t.toLowerCase()) || [];
    function jt(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, a = 0,
            o = t.toLowerCase().match(A) || [];
            if (p.isFunction(i)) for (; n = o[a++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }
    function zt(e, t, i, n) {
        var a = {},
        o = e === Ot;
        function r(s) {
            var l;
            return a[s] = !0,
            p.each(e[s] || [],
            function(e, s) {
                var c = s(t, i, n);
                return "string" != typeof c || o || a[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }),
            l
        }
        return r(t.dataTypes[0]) || !a["*"] && r("*")
    }
    function Rt(e, t) {
        var i, n, a = p.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((a[n] ? e: i || (i = {}))[n] = t[n]);
        return i && p.extend(!0, e, i),
        e
    }
    function Ft(e, t, i) {
        for (var n, a, o, r, s = e.contents,
        l = e.dataTypes;
        "*" === l[0];) l.shift(),
        void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
        if (a) for (r in s) if (s[r] && s[r].test(a)) {
            l.unshift(r);
            break
        }
        if (l[0] in i) o = l[0];
        else {
            for (r in i) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                n || (n = r)
            }
            o = o || n
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }
    function Ht(e, t, i, n) {
        var a, o, r, s, l, c = {},
        d = e.dataTypes.slice();
        if (d[1]) for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
        for (o = d.shift(); o;) if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = d.shift()) if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
            if (r = c[l + " " + o] || c["* " + o], !r) for (a in c) if (s = a.split(" "), s[1] === o && (r = c[l + " " + s[0]] || c["* " + s[0]])) {
                r === !0 ? r = c[a] : c[a] !== !0 && (o = s[0], d.unshift(s[1]));
                break
            }
            if (r !== !0) if (r && e["throws"]) t = r(t);
            else try {
                t = r(t)
            } catch(u) {
                return {
                    state: "parsererror",
                    error: r ? u: "No conversion from " + l + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: $t,
            type: "GET",
            isLocal: _t.test(Ct[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rt(Rt(e, p.ajaxSettings), t) : Rt(p.ajaxSettings, e)
        },
        ajaxPrefilter: jt(Dt),
        ajaxTransport: jt(Ot),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0),
            t = t || {};
            var i, n, a, o, r, s, l, c, d = p.ajaxSetup({},
            t),
            u = d.context || d,
            f = d.context && (u.nodeType || u.jquery) ? p(u) : p.event,
            h = p.Deferred(),
            m = p.Callbacks("once memory"),
            g = d.statusCode || {},
            v = {},
            y = {},
            w = 0,
            b = "canceled",
            x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!c) for (c = {}; t = Pt.exec(o);) c[t[1].toLowerCase()] = t[2];
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? o: null
                },
                setRequestHeader: function(e, t) {
                    var i = e.toLowerCase();
                    return w || (e = y[i] = y[i] || e, v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > w) for (t in e) g[t] = [g[t], e[t]];
                    else x.always(e[x.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || b;
                    return l && l.abort(t),
                    T(0, t),
                    this
                }
            };
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || $t) + "").replace(St, "").replace(It, Ct[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = p.trim(d.dataType || "*").toLowerCase().match(A) || [""], null == d.crossDomain && (i = Lt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ct[1] && i[2] === Ct[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (Ct[3] || ("http:" === Ct[1] ? "80": "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = p.param(d.data, d.traditional)), zt(Dt, d, t, x), 2 === w) return x;
            s = p.event && d.global,
            s && 0 === p.active++&&p.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !At.test(d.type),
            a = d.url,
            d.hasContent || (d.data && (a = d.url += (kt.test(a) ? "&": "?") + d.data, delete d.data), d.cache === !1 && (d.url = Et.test(a) ? a.replace(Et, "$1_=" + xt++) : a + (kt.test(a) ? "&": "?") + "_=" + xt++)),
            d.ifModified && (p.lastModified[a] && x.setRequestHeader("If-Modified-Since", p.lastModified[a]), p.etag[a] && x.setRequestHeader("If-None-Match", p.etag[a])),
            (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType),
            x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Mt + "; q=0.01": "") : d.accepts["*"]);
            for (n in d.headers) x.setRequestHeader(n, d.headers[n]);
            if (d.beforeSend && (d.beforeSend.call(u, x, d) === !1 || 2 === w)) return x.abort();
            b = "abort";
            for (n in {
                success: 1,
                error: 1,
                complete: 1
            }) x[n](d[n]);
            if (l = zt(Ot, d, t, x)) {
                x.readyState = 1,
                s && f.trigger("ajaxSend", [x, d]),
                d.async && d.timeout > 0 && (r = setTimeout(function() {
                    x.abort("timeout")
                },
                d.timeout));
                try {
                    w = 1,
                    l.send(v, T)
                } catch(k) {
                    if (! (2 > w)) throw k;
                    T( - 1, k)
                }
            } else T( - 1, "No Transport");
            function T(e, t, i, n) {
                var c, v, y, b, k, T = t;
                2 !== w && (w = 2, r && clearTimeout(r), l = void 0, o = n || "", x.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, i && (b = Ft(d, x, i)), b = Ht(d, b, x, c), c ? (d.ifModified && (k = x.getResponseHeader("Last-Modified"), k && (p.lastModified[a] = k), k = x.getResponseHeader("etag"), k && (p.etag[a] = k)), 204 === e || "HEAD" === d.type ? T = "nocontent": 304 === e ? T = "notmodified": (T = b.state, v = b.data, y = b.error, c = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || T) + "", c ? h.resolveWith(u, [v, T, x]) : h.rejectWith(u, [x, T, y]), x.statusCode(g), g = void 0, s && f.trigger(c ? "ajaxSuccess": "ajaxError", [x, d, c ? v: y]), m.fireWith(u, [x, T]), s && (f.trigger("ajaxComplete", [x, d]), --p.active || p.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, i) {
            return p.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return p.get(e, void 0, t, "script")
        }
    }),
    p.each(["get", "post"],
    function(e, t) {
        p[t] = function(e, i, n, a) {
            return p.isFunction(i) && (a = a || n, n = i, i = void 0),
            p.ajax({
                url: e,
                type: t,
                dataType: a,
                data: i,
                success: n
            })
        }
    }),
    p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    p.fn.extend({
        wrapAll: function(e) {
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(p.isFunction(e) ?
            function(t) {
                p(this).wrapInner(e.call(this, t))
            }: function() {
                var t = p(this),
                i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each(function(i) {
                p(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    p.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !d.reliableHiddenOffsets() && "none" === (e.style && e.style.display || p.css(e, "display"))
    },
    p.expr.filters.visible = function(e) {
        return ! p.expr.filters.hidden(e)
    };
    var Vt = /%20/g,
    Ut = /\[\]$/,
    Bt = /\r?\n/g,
    qt = /^(?:submit|button|image|reset|file)$/i,
    Wt = /^(?:input|select|textarea|keygen)/i;
    function Gt(e, t, i, n) {
        var a;
        if (p.isArray(t)) p.each(t,
        function(t, a) {
            i || Ut.test(e) ? n(e, a) : Gt(e + "[" + ("object" == typeof a ? t: "") + "]", a, i, n)
        });
        else if (i || "object" !== p.type(t)) n(e, t);
        else for (a in t) Gt(e + "[" + a + "]", t[a], i, n)
    }
    p.param = function(e, t) {
        var i, n = [],
        a = function(e, t) {
            t = p.isFunction(t) ? t() : null == t ? "": t,
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e,
        function() {
            a(this.name, this.value)
        });
        else for (i in e) Gt(i, e[i], t, a);
        return n.join("&").replace(Vt, "+")
    },
    p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && Wt.test(this.nodeName) && !qt.test(e) && (this.checked || !Y.test(e))
            }).map(function(e, t) {
                var i = p(this).val();
                return null == i ? null: p.isArray(i) ? p.map(i,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Bt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Bt, "\r\n")
                }
            }).get()
        }
    }),
    p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ?
    function() {
        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Jt() || Qt()
    }: Jt;
    var Yt = 0,
    Xt = {},
    Kt = p.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload",
    function() {
        for (var e in Xt) Xt[e](void 0, !0)
    }),
    d.cors = !!Kt && "withCredentials" in Kt,
    Kt = d.ajax = !!Kt,
    Kt && p.ajaxTransport(function(e) {
        if (!e.crossDomain || d.cors) {
            var t;
            return {
                send: function(i, n) {
                    var a, o = e.xhr(),
                    r = ++Yt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) o[a] = e.xhrFields[a];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                    e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i) void 0 !== i[a] && o.setRequestHeader(a, i[a] + "");
                    o.send(e.hasContent && e.data || null),
                    t = function(i, a) {
                        var s, l, c;
                        if (t && (a || 4 === o.readyState)) if (delete Xt[r], t = void 0, o.onreadystatechange = p.noop, a) 4 !== o.readyState && o.abort();
                        else {
                            c = {},
                            s = o.status,
                            "string" == typeof o.responseText && (c.text = o.responseText);
                            try {
                                l = o.statusText
                            } catch(d) {
                                l = ""
                            }
                            s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                        }
                        c && n(s, l, c, o.getAllResponseHeaders())
                    },
                    e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Xt[r] = t: t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    });
    function Jt() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function Qt() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e),
                e
            }
        }
    }),
    p.ajaxPrefilter("script",
    function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    p.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var t, i = C.head || p("head")[0] || C.documentElement;
            return {
                send: function(n, a) {
                    t = C.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, i) { (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || a(200, "success"))
                    },
                    i.insertBefore(t, i.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var Zt = [],
    ei = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Zt.pop() || p.expando + "_" + xt++;
            return this[e] = !0,
            e
        }
    }),
    p.ajaxPrefilter("json jsonp",
    function(t, i, n) {
        var a, o, r, s = t.jsonp !== !1 && (ei.test(t.url) ? "url": "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ei.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (a = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ei, "$1" + a) : t.jsonp !== !1 && (t.url += (kt.test(t.url) ? "&": "?") + t.jsonp + "=" + a), t.converters["script json"] = function() {
            return r || p.error(a + " was not called"),
            r[0]
        },
        t.dataTypes[0] = "json", o = e[a], e[a] = function() {
            r = arguments
        },
        n.always(function() {
            e[a] = o,
            t[a] && (t.jsonpCallback = i.jsonpCallback, Zt.push(a)),
            r && p.isFunction(o) && o(r[0]),
            r = o = void 0
        }), "script") : void 0
    }),
    p.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1),
        t = t || C;
        var n = b.exec(e),
        a = !i && [];
        return n ? [t.createElement(n[1])] : (n = p.buildFragment([e], t, a), a && a.length && p(a).remove(), p.merge([], n.childNodes))
    };
    var ti = p.fn.load;
    p.fn.load = function(e, t, i) {
        if ("string" != typeof e && ti) return ti.apply(this, arguments);
        var n, a, o, r = this,
        s = e.indexOf(" ");
        return s >= 0 && (n = p.trim(e.slice(s, e.length)), e = e.slice(0, s)),
        p.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"),
        r.length > 0 && p.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments,
            r.html(n ? p("<div>").append(p.parseHTML(e)).find(n) : e)
        }).complete(i &&
        function(e, t) {
            r.each(i, a || [e.responseText, t, e])
        }),
        this
    },
    p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    p.expr.filters.animated = function(e) {
        return p.grep(p.timers,
        function(t) {
            return e === t.elem
        }).length
    };
    var ii = e.document.documentElement;
    function ni(e) {
        return p.isWindow(e) ? e: 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    p.offset = {
        setOffset: function(e, t, i) {
            var n, a, o, r, s, l, c, d = p.css(e, "position"),
            u = p(e),
            f = {};
            "static" === d && (e.style.position = "relative"),
            s = u.offset(),
            o = p.css(e, "top"),
            l = p.css(e, "left"),
            c = ("absolute" === d || "fixed" === d) && p.inArray("auto", [o, l]) > -1,
            c ? (n = u.position(), r = n.top, a = n.left) : (r = parseFloat(o) || 0, a = parseFloat(l) || 0),
            p.isFunction(t) && (t = t.call(e, i, s)),
            null != t.top && (f.top = t.top - s.top + r),
            null != t.left && (f.left = t.left - s.left + a),
            "using" in t ? t.using.call(e, f) : u.css(f)
        }
    },
    p.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                p.offset.setOffset(this, e, t)
            });
            var t, i, n = {
                top: 0,
                left: 0
            },
            a = this[0],
            o = a && a.ownerDocument;
            return o ? (t = o.documentElement, p.contains(t, a) ? (typeof a.getBoundingClientRect !== j && (n = a.getBoundingClientRect()), i = ni(o), {
                top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : n) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = {
                    top: 0,
                    left: 0
                },
                n = this[0];
                return "fixed" === p.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (i = e.offset()), i.top += p.css(e[0], "borderTopWidth", !0), i.left += p.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - i.top - p.css(n, "marginTop", !0),
                    left: t.left - i.left - p.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ii; e && !p.nodeName(e, "html") && "static" === p.css(e, "position");) e = e.offsetParent;
                return e || ii
            })
        }
    }),
    p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, t) {
        var i = /Y/.test(t);
        p.fn[e] = function(n) {
            return G(this,
            function(e, n, a) {
                var o = ni(e);
                return void 0 === a ? o ? t in o ? o[t] : o.document.documentElement[n] : e[n] : void(o ? o.scrollTo(i ? p(o).scrollLeft() : a, i ? a: p(o).scrollTop()) : e[n] = a)
            },
            e, n, arguments.length, null)
        }
    }),
    p.each(["top", "left"],
    function(e, t) {
        p.cssHooks[t] = je(d.pixelPosition,
        function(e, i) {
            return i ? (i = De(e, t), Me.test(i) ? p(e).position()[t] + "px": i) : void 0
        })
    }),
    p.each({
        Height: "height",
        Width: "width"
    },
    function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        },
        function(i, n) {
            p.fn[n] = function(n, a) {
                var o = arguments.length && (i || "boolean" != typeof n),
                r = i || (n === !0 || a === !0 ? "margin": "border");
                return G(this,
                function(t, i, n) {
                    var a;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === n ? p.css(t, i, r) : p.style(t, i, n, r)
                },
                t, o ? n: void 0, o, null)
            }
        })
    }),
    p.fn.size = function() {
        return this.length
    },
    p.fn.andSelf = p.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return p
    });
    var ai = e.jQuery,
    oi = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = oi),
        t && e.jQuery === p && (e.jQuery = ai),
        p
    },
    typeof t === j && (e.jQuery = e.$ = p),
    p
}),
!
function(e, t, i) {
    "use strict"; !
    function n(e, t, i) {
        function a(r, s) {
            if (!t[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(r, !0);
                    if (o) return o(r, !0);
                    var c = new Error("Cannot find module '" + r + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c
                }
                var d = t[r] = {
                    exports: {}
                };
                e[r][0].call(d.exports,
                function(t) {
                    var i = e[r][1][t];
                    return a(i ? i: t)
                },
                d, d.exports, n, e, t, i)
            }
            return t[r].exports
        }
        for (var o = "function" == typeof require && require,
        r = 0; r < i.length; r++) a(i[r]);
        return a
    } ({
        1 : [function(n) {
            var a, o, r, s, l = function(e) {
                return e && e.__esModule ? e: {
                    "default": e
                }
            },
            c = n("./modules/handle-dom"),
            d = n("./modules/utils"),
            u = n("./modules/handle-swal-dom"),
            p = n("./modules/handle-click"),
            f = n("./modules/handle-key"),
            h = l(f),
            m = n("./modules/default-params"),
            g = l(m),
            v = n("./modules/set-params"),
            y = l(v);
            r = s = function() {
                function n(e) {
                    var t = r;
                    return t[e] === i ? g["default"][e] : t[e]
                }
                var r = arguments[0];
                if (c.addClass(t.body, "stop-scrolling"), u.resetInput(), r === i) return d.logStr("SweetAlert expects at least 1 attribute!"),
                !1;
                var l = d.extend({},
                g["default"]);
                switch (typeof r) {
                case "string":
                    l.title = r,
                    l.text = arguments[1] || "",
                    l.type = arguments[2] || "";
                    break;
                case "object":
                    if (r.title === i) return d.logStr('Missing "title" argument!'),
                    !1;
                    l.title = r.title;
                    for (var f in g["default"]) l[f] = n(f);
                    l.confirmButtonText = l.showCancelButton ? "Confirm": g["default"].confirmButtonText,
                    l.confirmButtonText = n("confirmButtonText"),
                    l.doneFunction = arguments[1] || null;
                    break;
                default:
                    return d.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof r),
                    !1
                }
                y["default"](l),
                u.fixVerticalPosition(),
                u.openModal(arguments[1]);
                for (var m = u.getModal(), v = m.querySelectorAll("button"), w = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], b = function(e) {
                    return p.handleButton(e, l, m)
                },
                x = 0; x < v.length; x++) for (var k = 0; k < w.length; k++) {
                    var T = w[k];
                    v[x][T] = b
                }
                u.getOverlay().onclick = b,
                a = e.onkeydown;
                var C = function(e) {
                    return h["default"](e, l, m)
                };
                e.onkeydown = C,
                e.onfocus = function() {
                    setTimeout(function() {
                        o !== i && (o.focus(), o = i)
                    },
                    0)
                },
                s.enableButtons()
            },
            r.setDefaults = s.setDefaults = function(e) {
                if (!e) throw new Error("userParams is required");
                if ("object" != typeof e) throw new Error("userParams has to be a object");
                d.extend(g["default"], e)
            },
            r.close = s.close = function() {
                var n = u.getModal();
                c.fadeOut(u.getOverlay(), 5),
                c.fadeOut(n, 5),
                c.removeClass(n, "showSweetAlert"),
                c.addClass(n, "hideSweetAlert"),
                c.removeClass(n, "visible");
                var r = n.querySelector(".sa-icon.sa-success");
                c.removeClass(r, "animate"),
                c.removeClass(r.querySelector(".sa-tip"), "animateSuccessTip"),
                c.removeClass(r.querySelector(".sa-long"), "animateSuccessLong");
                var s = n.querySelector(".sa-icon.sa-error");
                c.removeClass(s, "animateErrorIcon"),
                c.removeClass(s.querySelector(".sa-x-mark"), "animateXMark");
                var l = n.querySelector(".sa-icon.sa-warning");
                return c.removeClass(l, "pulseWarning"),
                c.removeClass(l.querySelector(".sa-body"), "pulseWarningIns"),
                c.removeClass(l.querySelector(".sa-dot"), "pulseWarningIns"),
                setTimeout(function() {
                    var e = n.getAttribute("data-custom-class");
                    c.removeClass(n, e)
                },
                300),
                c.removeClass(t.body, "stop-scrolling"),
                e.onkeydown = a,
                e.previousActiveElement && e.previousActiveElement.focus(),
                o = i,
                clearTimeout(n.timeout),
                !0
            },
            r.showInputError = s.showInputError = function(e) {
                var t = u.getModal(),
                i = t.querySelector(".sa-input-error");
                c.addClass(i, "show");
                var n = t.querySelector(".sa-error-container");
                c.addClass(n, "show"),
                n.querySelector("p").innerHTML = e,
                setTimeout(function() {
                    r.enableButtons()
                },
                1),
                t.querySelector("input").focus()
            },
            r.resetInputError = s.resetInputError = function(e) {
                if (e && 13 === e.keyCode) return ! 1;
                var t = u.getModal(),
                i = t.querySelector(".sa-input-error");
                c.removeClass(i, "show");
                var n = t.querySelector(".sa-error-container");
                c.removeClass(n, "show")
            },
            r.disableButtons = s.disableButtons = function() {
                var e = u.getModal(),
                t = e.querySelector("button.confirm"),
                i = e.querySelector("button.cancel");
                t.disabled = !0,
                i.disabled = !0
            },
            r.enableButtons = s.enableButtons = function() {
                var e = u.getModal(),
                t = e.querySelector("button.confirm"),
                i = e.querySelector("button.cancel");
                t.disabled = !1,
                i.disabled = !1
            },
            "undefined" != typeof e ? e.sweetAlert = e.swal = r: d.logStr("SweetAlert is a frontend module!")
        },
        {
            "./modules/default-params": 2,
            "./modules/handle-click": 3,
            "./modules/handle-dom": 4,
            "./modules/handle-key": 5,
            "./modules/handle-swal-dom": 6,
            "./modules/set-params": 8,
            "./modules/utils": 9
        }],
        2 : [function(e, t, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var n = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#8CD4F5",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            };
            i["default"] = n,
            t.exports = i["default"]
        },
        {}],
        3 : [function(t, i, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = t("./utils"),
            o = (t("./handle-swal-dom"), t("./handle-dom")),
            r = function(t, i, n) {
                function r(e) {
                    h && i.confirmButtonColor && (f.style.backgroundColor = e)
                }
                var c, d, u, p = t || e.event,
                f = p.target || p.srcElement,
                h = -1 !== f.className.indexOf("confirm"),
                m = -1 !== f.className.indexOf("sweet-overlay"),
                g = o.hasClass(n, "visible"),
                v = i.doneFunction && "true" === n.getAttribute("data-has-done-function");
                switch (h && i.confirmButtonColor && (c = i.confirmButtonColor, d = a.colorLuminance(c, -.04), u = a.colorLuminance(c, -.14)), p.type) {
                case "mouseover":
                    r(d);
                    break;
                case "mouseout":
                    r(c);
                    break;
                case "mousedown":
                    r(u);
                    break;
                case "mouseup":
                    r(d);
                    break;
                case "focus":
                    var y = n.querySelector("button.confirm"),
                    w = n.querySelector("button.cancel");
                    h ? w.style.boxShadow = "none": y.style.boxShadow = "none";
                    break;
                case "click":
                    var b = n === f,
                    x = o.isDescendant(n, f);
                    if (!b && !x && g && !i.allowOutsideClick) break;
                    h && v && g ? s(n, i) : v && g || m ? l(n, i) : o.isDescendant(n, f) && "BUTTON" === f.tagName && sweetAlert.close()
                }
            },
            s = function(e, t) {
                var i = !0;
                o.hasClass(e, "show-input") && (i = e.querySelector("input").value, i || (i = "")),
                t.doneFunction(i),
                t.closeOnConfirm && sweetAlert.close(),
                t.showLoaderOnConfirm && sweetAlert.disableButtons()
            },
            l = function(e, t) {
                var i = String(t.doneFunction).replace(/\s/g, ""),
                n = "function(" === i.substring(0, 9) && ")" !== i.substring(9, 10);
                n && t.doneFunction(!1),
                t.closeOnCancel && sweetAlert.close()
            };
            n["default"] = {
                handleButton: r,
                handleConfirm: s,
                handleCancel: l
            },
            i.exports = n["default"]
        },
        {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        4 : [function(i, n, a) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var o = function(e, t) {
                return new RegExp(" " + t + " ").test(" " + e.className + " ")
            },
            r = function(e, t) {
                o(e, t) || (e.className += " " + t)
            },
            s = function(e, t) {
                var i = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                if (o(e, t)) {
                    for (; i.indexOf(" " + t + " ") >= 0;) i = i.replace(" " + t + " ", " ");
                    e.className = i.replace(/^\s+|\s+$/g, "")
                }
            },
            l = function(e) {
                var i = t.createElement("div");
                return i.appendChild(t.createTextNode(e)),
                i.innerHTML
            },
            c = function(e) {
                e.style.opacity = "",
                e.style.display = "block"
            },
            d = function(e) {
                if (e && !e.length) return c(e);
                for (var t = 0; t < e.length; ++t) c(e[t])
            },
            u = function(e) {
                e.style.opacity = "",
                e.style.display = "none"
            },
            p = function(e) {
                if (e && !e.length) return u(e);
                for (var t = 0; t < e.length; ++t) u(e[t])
            },
            f = function(e, t) {
                for (var i = t.parentNode; null !== i;) {
                    if (i === e) return ! 0;
                    i = i.parentNode
                }
                return ! 1
            },
            h = function(e) {
                e.style.left = "-9999px",
                e.style.display = "block";
                var t, i = e.clientHeight;
                return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding),
                e.style.left = "",
                e.style.display = "none",
                "-" + parseInt((i + t) / 2) + "px"
            },
            m = function(e, t) {
                if ( + e.style.opacity < 1) {
                    t = t || 16,
                    e.style.opacity = 0,
                    e.style.display = "block";
                    var i = +new Date,
                    n = function(e) {
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t.toString = function() {
                            return e.toString()
                        },
                        t
                    } (function() {
                        e.style.opacity = +e.style.opacity + (new Date - i) / 100,
                        i = +new Date,
                        +e.style.opacity < 1 && setTimeout(n, t)
                    });
                    n()
                }
                e.style.display = "block"
            },
            g = function(e, t) {
                t = t || 16,
                e.style.opacity = 1;
                var i = +new Date,
                n = function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    },
                    t
                } (function() {
                    e.style.opacity = +e.style.opacity - (new Date - i) / 100,
                    i = +new Date,
                    +e.style.opacity > 0 ? setTimeout(n, t) : e.style.display = "none"
                });
                n()
            },
            v = function(i) {
                if ("function" == typeof MouseEvent) {
                    var n = new MouseEvent("click", {
                        view: e,
                        bubbles: !1,
                        cancelable: !0
                    });
                    i.dispatchEvent(n)
                } else if (t.createEvent) {
                    var a = t.createEvent("MouseEvents");
                    a.initEvent("click", !1, !1),
                    i.dispatchEvent(a)
                } else t.createEventObject ? i.fireEvent("onclick") : "function" == typeof i.onclick && i.onclick()
            },
            y = function(t) {
                "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
            };
            a.hasClass = o,
            a.addClass = r,
            a.removeClass = s,
            a.escapeHtml = l,
            a._show = c,
            a.show = d,
            a._hide = u,
            a.hide = p,
            a.isDescendant = f,
            a.getTopMargin = h,
            a.fadeIn = m,
            a.fadeOut = g,
            a.fireClick = v,
            a.stopEventPropagation = y
        },
        {}],
        5 : [function(t, n, a) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var o = t("./handle-dom"),
            r = t("./handle-swal-dom"),
            s = function(t, n, a) {
                var s = t || e.event,
                l = s.keyCode || s.which,
                c = a.querySelector("button.confirm"),
                d = a.querySelector("button.cancel"),
                u = a.querySelectorAll("button[tabindex]");
                if ( - 1 !== [9, 13, 32, 27].indexOf(l)) {
                    for (var p = s.target || s.srcElement,
                    f = -1,
                    h = 0; h < u.length; h++) if (p === u[h]) {
                        f = h;
                        break
                    }
                    9 === l ? (p = -1 === f ? c: f === u.length - 1 ? u[0] : u[f + 1], o.stopEventPropagation(s), p.focus(), n.confirmButtonColor && r.setFocusStyle(p, n.confirmButtonColor)) : 13 === l ? ("INPUT" === p.tagName && (p = c, c.focus()), p = -1 === f ? c: i) : 27 === l && n.allowEscapeKey === !0 ? (p = d, o.fireClick(p, s)) : p = i
                }
            };
            a["default"] = s,
            n.exports = a["default"]
        },
        {
            "./handle-dom": 4,
            "./handle-swal-dom": 6
        }],
        6 : [function(i, n, a) {
            var o = function(e) {
                return e && e.__esModule ? e: {
                    "default": e
                }
            };
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var r = i("./utils"),
            s = i("./handle-dom"),
            l = i("./default-params"),
            c = o(l),
            d = i("./injected-html"),
            u = o(d),
            p = ".sweet-alert",
            f = ".sweet-overlay",
            h = function() {
                var e = t.createElement("div");
                for (e.innerHTML = u["default"]; e.firstChild;) t.body.appendChild(e.firstChild)
            },
            m = function(e) {
                function t() {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                },
                t
            } (function() {
                var e = t.querySelector(p);
                return e || (h(), e = m()),
                e
            }),
            g = function() {
                var e = m();
                return e ? e.querySelector("input") : void 0
            },
            v = function() {
                return t.querySelector(f)
            },
            y = function(e, t) {
                var i = r.hexToRgb(t);
                e.style.boxShadow = "0 0 2px rgba(" + i + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
            },
            w = function(i) {
                var n = m();
                s.fadeIn(v(), 10),
                s.show(n),
                s.addClass(n, "showSweetAlert"),
                s.removeClass(n, "hideSweetAlert"),
                e.previousActiveElement = t.activeElement;
                var a = n.querySelector("button.confirm");
                a.focus(),
                setTimeout(function() {
                    s.addClass(n, "visible")
                },
                500);
                var o = n.getAttribute("data-timer");
                if ("null" !== o && "" !== o) {
                    var r = i;
                    n.timeout = setTimeout(function() {
                        var e = (r || null) && "true" === n.getAttribute("data-has-done-function");
                        e ? r(null) : sweetAlert.close()
                    },
                    o)
                }
            },
            b = function() {
                var e = m(),
                t = g();
                s.removeClass(e, "show-input"),
                t.value = c["default"].inputValue,
                t.setAttribute("type", c["default"].inputType),
                t.setAttribute("placeholder", c["default"].inputPlaceholder),
                x()
            },
            x = function(e) {
                if (e && 13 === e.keyCode) return ! 1;
                var t = m(),
                i = t.querySelector(".sa-input-error");
                s.removeClass(i, "show");
                var n = t.querySelector(".sa-error-container");
                s.removeClass(n, "show")
            },
            k = function() {
                var e = m();
                e.style.marginTop = s.getTopMargin(m())
            };
            a.sweetAlertInitialize = h,
            a.getModal = m,
            a.getOverlay = v,
            a.getInput = g,
            a.setFocusStyle = y,
            a.openModal = w,
            a.resetInput = b,
            a.resetInputError = x,
            a.fixVerticalPosition = k
        },
        {
            "./default-params": 2,
            "./handle-dom": 4,
            "./injected-html": 7,
            "./utils": 9
        }],
        7 : [function(e, t, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var n = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
            i["default"] = n,
            t.exports = i["default"]
        },
        {}],
        8 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = e("./utils"),
            o = e("./handle-swal-dom"),
            r = e("./handle-dom"),
            s = ["error", "warning", "info", "success", "input", "prompt"],
            l = function(e) {
                var t = o.getModal(),
                n = t.querySelector("h2"),
                l = t.querySelector("p"),
                c = t.querySelector("button.cancel"),
                d = t.querySelector("button.confirm");
                if (n.innerHTML = e.html ? e.title: r.escapeHtml(e.title).split("\n").join("<br>"), l.innerHTML = e.html ? e.text: r.escapeHtml(e.text || "").split("\n").join("<br>"), e.text && r.show(l), e.customClass) r.addClass(t, e.customClass),
                t.setAttribute("data-custom-class", e.customClass);
                else {
                    var u = t.getAttribute("data-custom-class");
                    r.removeClass(t, u),
                    t.setAttribute("data-custom-class", "")
                }
                if (r.hide(t.querySelectorAll(".sa-icon")), e.type && !a.isIE8()) {
                    var p = function() {
                        for (var n = !1,
                        a = 0; a < s.length; a++) if (e.type === s[a]) {
                            n = !0;
                            break
                        }
                        if (!n) return logStr("Unknown alert type: " + e.type),
                        {
                            v: !1
                        };
                        var l = ["success", "error", "warning", "info"],
                        c = i; - 1 !== l.indexOf(e.type) && (c = t.querySelector(".sa-icon.sa-" + e.type), r.show(c));
                        var d = o.getInput();
                        switch (e.type) {
                        case "success":
                            r.addClass(c, "animate"),
                            r.addClass(c.querySelector(".sa-tip"), "animateSuccessTip"),
                            r.addClass(c.querySelector(".sa-long"), "animateSuccessLong");
                            break;
                        case "error":
                            r.addClass(c, "animateErrorIcon"),
                            r.addClass(c.querySelector(".sa-x-mark"), "animateXMark");
                            break;
                        case "warning":
                            r.addClass(c, "pulseWarning"),
                            r.addClass(c.querySelector(".sa-body"), "pulseWarningIns"),
                            r.addClass(c.querySelector(".sa-dot"), "pulseWarningIns");
                            break;
                        case "input":
                        case "prompt":
                            d.setAttribute("type", e.inputType),
                            d.value = e.inputValue,
                            d.setAttribute("placeholder", e.inputPlaceholder),
                            r.addClass(t, "show-input"),
                            setTimeout(function() {
                                d.focus(),
                                d.addEventListener("keyup", swal.resetInputError)
                            },
                            400)
                        }
                    } ();
                    if ("object" == typeof p) return p.v
                }
                if (e.imageUrl) {
                    var f = t.querySelector(".sa-icon.sa-custom");
                    f.style.backgroundImage = "url(" + e.imageUrl + ")",
                    r.show(f);
                    var h = 80,
                    m = 80;
                    if (e.imageSize) {
                        var g = e.imageSize.toString().split("x"),
                        v = g[0],
                        y = g[1];
                        v && y ? (h = v, m = y) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize)
                    }
                    f.setAttribute("style", f.getAttribute("style") + "width:" + h + "px; height:" + m + "px")
                }
                t.setAttribute("data-has-cancel-button", e.showCancelButton),
                e.showCancelButton ? c.style.display = "inline-block": r.hide(c),
                t.setAttribute("data-has-confirm-button", e.showConfirmButton),
                e.showConfirmButton ? d.style.display = "inline-block": r.hide(d),
                e.cancelButtonText && (c.innerHTML = r.escapeHtml(e.cancelButtonText)),
                e.confirmButtonText && (d.innerHTML = r.escapeHtml(e.confirmButtonText)),
                e.confirmButtonColor && (d.style.backgroundColor = e.confirmButtonColor, d.style.borderLeftColor = e.confirmLoadingButtonColor, d.style.borderRightColor = e.confirmLoadingButtonColor, o.setFocusStyle(d, e.confirmButtonColor)),
                t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
                var w = !!e.doneFunction;
                t.setAttribute("data-has-done-function", w),
                e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"),
                t.setAttribute("data-timer", e.timer)
            };
            n["default"] = l,
            t.exports = n["default"]
        },
        {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        9 : [function(t, i, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                return e
            },
            o = function(e) {
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
            },
            r = function() {
                return e.attachEvent && !e.addEventListener
            },
            s = function(t) {
                e.console && e.console.log("SweetAlert: " + t)
            },
            l = function(e, t) {
                e = String(e).replace(/[^0-9a-f]/gi, ""),
                e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                t = t || 0;
                var i, n, a = "#";
                for (n = 0; 3 > n; n++) i = parseInt(e.substr(2 * n, 2), 16),
                i = Math.round(Math.min(Math.max(0, i + i * t), 255)).toString(16),
                a += ("00" + i).substr(i.length);
                return a
            };
            n.extend = a,
            n.hexToRgb = o,
            n.isIE8 = r,
            n.logStr = s,
            n.colorLuminance = l
        },
        {}]
    },
    {},
    [1]),
    "function" == typeof define && define.amd ? define(function() {
        return sweetAlert
    }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
} (window, document),
function(e, t, i, n) {
    var a = "glide",
    o = {
        autoplay: 4e3,
        animationTime: 500,
        arrows: !0,
        arrowsWrapperClass: "slider-arrows",
        arrowMainClass: "slider-arrow",
        arrowRightClass: "slider-arrow--right",
        arrowRightText: "next",
        arrowLeftClass: "slider-arrow--left",
        arrowLeftText: "prev",
        nav: !0,
        navCenter: !0,
        navClass: "slider-nav",
        navItemClass: "slider-nav__item",
        navCurrentItemClass: "slider-nav__item--current",
        touchDistance: 60,
        slideCurrentItemClass: "slide__item--current"
    };
    function r(n, a) {
        var r = this;
        return r.options = e.extend({},
        o, a),
        r.parent = n,
        r.wrapper = r.parent.children(),
        r.slides = r.wrapper.children(),
        r.currentSlide = 0,
        r.CSS3support = !0,
        r.init(),
        r.build(),
        r.play(),
        r.options.touchDistance && r.swipe(),
        e(i).on("keyup",
        function(e) {
            39 === e.keyCode && r.slide(1),
            37 === e.keyCode && r.slide( - 1)
        }),
        r.parent.add(r.arrows).add(r.nav).on("mouseover mouseout",
        function(e) {
            r.pause(),
            "mouseout" === e.type && r.play()
        }),
        e(t).on("resize",
        function() {
            r.init(),
            r.slide(0)
        }),
        {
            current: function() {
                return - r.currentSlide + 1
            },
            play: function() {
                r.play()
            },
            pause: function() {
                r.pause()
            },
            next: function(e) {
                r.slide(1, !1, e)
            },
            prev: function(e) {
                r.slide( - 1, !1, e)
            },
            jump: function(e, t) {
                r.slide(e - 1, !0, t)
            },
            nav: function(e) {
                r.navWrapper && r.navWrapper.remove(),
                r.options.nav = e ? e: r.options.nav,
                r.navigation()
            },
            arrows: function(e) {
                r.arrowsWrapper && r.arrowsWrapper.remove(),
                r.options.arrows = e ? e: r.options.arrows,
                r.arrows()
            }
        }
    }
    r.prototype.build = function() {
        var e = this;
        e.options.arrows && e.arrows(),
        e.options.nav && e.navigation()
    },
    r.prototype.navigation = function() {
        var t = this;
        try {
            if (t.slides.length > 1) {
                var i = t.options,
                n = t.options.nav === !0 ? t.parent: t.options.nav;
                t.navWrapper = e("<div />", {
                    "class": i.navClass
                }).appendTo(n);
                for (var a, o = t.navWrapper,
                r = 0; r < t.slides.length; r++) a = e("<a />", {
                    href: "#",
                    "class": i.navItemClass,
                    "data-distance": r
                }).appendTo(o),
                o[r + 1] = a;
                var s = o.children();
                s.eq(0).addClass(i.navCurrentItemClass),
                t.slides.eq(0).addClass(i.slideCurrentItemClass),
                i.navCenter && o.css({
                    left: "50%",
                    width: s.outerWidth(!0) * s.length,
                    "margin-left": -o.outerWidth(!0) / 2
                }),
                s.on("click touchstart",
                function(i) {
                    i.preventDefault(),
                    t.slide(e(this).data("distance"), !0)
                })
            }
        } catch(l) {}
    },
    r.prototype.arrows = function() {
        var t = this;
        try {
            if (t.slides.length > 1) {
                var i = t.options,
                n = t.options.arrows === !0 ? t.parent: t.options.arrows;
                t.arrowsWrapper = e("<div />", {
                    "class": i.arrowsWrapperClass
                }).appendTo(n);
                var a = t.arrowsWrapper;
                a.right = e("<a />", {
                    href: "#",
                    "class": i.arrowMainClass + " " + i.arrowRightClass,
                    "data-distance": "1",
                    html: i.arrowRightText
                }).appendTo(a),
                a.left = e("<a />", {
                    href: "#",
                    "class": i.arrowMainClass + " " + i.arrowLeftClass,
                    "data-distance": "-1",
                    html: i.arrowLeftText
                }).appendTo(a),
                a.children().on("click touchstart",
                function(i) {
                    i.preventDefault(),
                    t.slide(e(this).data("distance"), !1)
                })
            }
        } catch(o) {}
    },
    r.prototype.slide = function(e, t, i) {
        var n = this,
        a = t ? 0 : n.currentSlide,
        o = -(n.slides.length - 1),
        r = n.options.navCurrentItemClass,
        s = n.slides.spread;
        slideCurrentClass = n.options.slideCurrentItemClass,
        n.pause(),
        0 === a && e === -1 ? a = o: a === o && 1 === e ? a = 0 : a += -e;
        var l = s * a + "px";
        n.CSS3support ? n.wrapper.css({
            "-webkit-transform": "translate3d(" + l + ", 0px, 0px)",
            "-moz-transform": "translate3d(" + l + ", 0px, 0px)",
            "-ms-transform": "translate3d(" + l + ", 0px, 0px)",
            "-o-transform": "translate3d(" + l + ", 0px, 0px)",
            transform: "translate3d(" + l + ", 0px, 0px)"
        }) : n.wrapper.stop().animate({
            "margin-left": l
        },
        n.options.animationTime),
        n.options.nav && n.navWrapper.children().eq( - a).addClass(r).siblings().removeClass(r),
        n.currentSlide = a,
        n.slides.eq( - a).addClass(slideCurrentClass).siblings().removeClass(slideCurrentClass),
        "undefined" !== i && "function" == typeof i && i(),
        n.play()
    },
    r.prototype.play = function() {
        var e = this;
        e.options.autoplay && (e.auto = setInterval(function() {
            e.slide(1, !1)
        },
        e.options.autoplay))
    },
    r.prototype.pause = function() {
        this.options.autoplay && (this.auto = clearInterval(this.auto))
    },
    r.prototype.swipe = function() {
        var e, t, i, n, a, o, r, s, l, c, d, u, p, f = this,
        h = 180 / Math.PI;
        f.parent.on("touchstart",
        function(t) {
            e = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
            i = e.pageX,
            n = e.pageY
        }),
        f.parent.on("touchmove",
        function(t) {
            e = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
            a = e.pageX,
            o = e.pageY,
            c = a - i,
            d = o - n,
            u = Math.abs(c << 2),
            p = Math.abs(d << 2),
            r = Math.sqrt(u + p),
            s = Math.sqrt(p),
            l = Math.asin(s / r),
            l * h < 32 && t.preventDefault()
        }),
        f.parent.on("touchend",
        function(n) {
            e = n.originalEvent.touches[0] || n.originalEvent.changedTouches[0],
            t = e.pageX - i,
            t > f.options.touchDistance ? f.slide( - 1) : t < -f.options.touchDistance && f.slide(1)
        })
    },
    r.prototype.init = function() {
        var e = this,
        t = e.parent.width();
        e.slides.spread = t,
        e.wrapper.width(t * e.slides.length),
        e.slides.width(e.slides.spread),
        s("transition") && s("transform") || (e.CSS3support = !1)
    };
    function s(e) {
        var a = !1,
        o = "Khtml ms O Moz Webkit".split(" "),
        r = i.createElement("div"),
        s = null;
        if (e = e.toLowerCase(), r.style[e] !== n && (a = !0), a === !1) {
            s = e.charAt(0).toUpperCase() + e.substr(1);
            for (var l = 0; l < o.length; l++) if (r.style[o[l] + s] !== n) {
                a = !0;
                break
            }
        }
        return t.opera && t.opera.version() < 13 && (a = !1),
        a
    }
    e.fn[a] = function(t) {
        return this.each(function() {
            e.data(this, "api_" + a) || e.data(this, "api_" + a, new r(e(this), t))
        })
    }
} (jQuery, window, document),
!
function(e, t, i, n) {
    var a = function(e, t) {
        function i() {}
        var n;
        return i.prototype.make = function(t) {
            return n = "undefined" != typeof t ? parseInt(t) : 0,
            this[e.options.type](),
            this
        },
        i.prototype.after = function(t) {
            return setTimeout(function() {
                t()
            },
            e.options.animationDuration + 20)
        },
        i.prototype.slider = function() {
            var i = e[e.size] * (e.current - 1),
            a = t.Clones.shift - e.paddings;
            t.Run.isStart() ? (a = e.options.centered ? Math.abs(a) : 0, t.Arrows.disable("prev")) : t.Run.isEnd() ? (a = e.options.centered ? Math.abs(a) : Math.abs(2 * a), t.Arrows.disable("next")) : (a = Math.abs(a), t.Arrows.enable()),
            e.track.css({
                transition: t.Transition.get("all"),
                transform: t.Translate.set(e.axis, i - a - n)
            })
        },
        i.prototype.carousel = function() {
            var i, a = e[e.size] * e.current;
            i = e.options.centered ? t.Clones.shift - e.paddings: t.Clones.shift,
            t.Run.isOffset("<") && (a = 0, t.Run.flag = !1, this.after(function() {
                e.track.css({
                    transition: t.Transition.clear("all"),
                    transform: t.Translate.set(e.axis, e[e.size] * e.length + i)
                })
            })),
            t.Run.isOffset(">") && (a = e[e.size] * e.length + e[e.size], t.Run.flag = !1, this.after(function() {
                e.track.css({
                    transition: t.Transition.clear("all"),
                    transform: t.Translate.set(e.axis, e[e.size] + i)
                })
            })),
            e.track.css({
                transition: t.Transition.get("all"),
                transform: t.Translate.set(e.axis, a + i - n)
            })
        },
        i.prototype.slideshow = function() {
            e.slides.css("transition", t.Transition.get("opacity")).eq(e.current - 1).css("opacity", 1).siblings().css("opacity", 0)
        },
        new i
    },
    o = function(e, t) {
        function i() {}
        return i.prototype.instance = function() {
            return {
                current: function() {
                    return e.current
                },
                go: function(e, i) {
                    t.Run.pause(),
                    t.Run.make(e, i),
                    t.Run.play()
                },
                jump: function(e, i) {
                    return t.Transition.jumping = !0,
                    t.Animation.after(function() {
                        t.Transition.jumping = !1
                    }),
                    t.Run.make(e, i)
                },
                animate: function(e) {
                    t.Transition.jumping = !0,
                    t.Animation.make(e),
                    t.Transition.jumping = !1
                },
                start: function(i) {
                    return t.Run.running = !0,
                    e.options.autoplay = parseInt(i),
                    t.Run.play()
                },
                play: function() {
                    return t.Run.play()
                },
                pause: function() {
                    return t.Run.pause()
                },
                destroy: function() {
                    t.Run.pause(),
                    t.Clones.remove(),
                    t.Helper.removeStyles([e.track, e.slides]),
                    t.Bullets.remove(),
                    e.slider.removeData("glide_api"),
                    t.Events.unbind(),
                    t.Touch.unbind(),
                    t.Arrows.unbind(),
                    t.Bullets.unbind(),
                    delete e.slider,
                    delete e.track,
                    delete e.slides,
                    delete e.width,
                    delete e.length
                },
                refresh: function() {
                    t.Run.pause(),
                    e.collect(),
                    e.setup(),
                    t.Clones.remove().init(),
                    t.Bullets.remove().init(),
                    t.Build.init(),
                    t.Run.make("=" + parseInt(e.options.startAt), t.Run.play())
                }
            }
        },
        new i
    },
    r = function(t, i) {
        function n() {
            this.build(),
            this.bind()
        }
        return n.prototype.build = function() {
            this.wrapper = t.slider.find("." + t.options.classes.arrows),
            this.items = this.wrapper.children()
        },
        n.prototype.disable = function(e) {
            var n = t.options.classes;
            return this.items.filter("." + n["arrow" + i.Helper.capitalise(e)]).unbind("click.glide touchstart.glide").addClass(n.disabled).siblings().bind("click.glide touchstart.glide", this.click).removeClass(n.disabled)
        },
        n.prototype.enable = function() {
            return this.bind(),
            this.items.removeClass(t.options.classes.disabled)
        },
        n.prototype.click = function(t) {
            t.preventDefault(),
            i.Events.disabled || (i.Run.pause(), i.Run.make(e(this).data("glide-dir")), i.Animation.after(function() {
                i.Run.play()
            }))
        },
        n.prototype.bind = function() {
            return this.items.on("click.glide touchstart.glide", this.click)
        },
        n.prototype.unbind = function() {
            return this.items.off("click.glide touchstart.glide")
        },
        new n
    },
    s = function(e, t) {
        function i() {
            this.init()
        }
        return i.prototype.init = function() {
            this[e.options.type](),
            this.active(),
            t.Height.set()
        },
        i.prototype.isType = function(t) {
            return e.options.type === t
        },
        i.prototype.isMode = function(t) {
            return e.options.mode === t
        },
        i.prototype.slider = function() {
            t.Transition.jumping = !0,
            e.slides[e.size](e[e.size]),
            e.track.css(e.size, e[e.size] * e.length),
            this.isMode("vertical") && t.Height.set(!0),
            t.Animation.make(),
            t.Transition.jumping = !1
        },
        i.prototype.carousel = function() {
            t.Transition.jumping = !0,
            t.Clones.shift = e[e.size] * t.Clones.items.length / 2 - e[e.size],
            e.slides[e.size](e[e.size]),
            e.track.css(e.size, e[e.size] * e.length + t.Clones.getGrowth()),
            this.isMode("vertical") && t.Height.set(!0),
            t.Animation.make(),
            t.Clones.append(),
            t.Transition.jumping = !1
        },
        i.prototype.slideshow = function() {
            t.Transition.jumping = !0,
            t.Animation.make(),
            t.Transition.jumping = !1
        },
        i.prototype.active = function() {
            e.slides.eq(e.current - 1).addClass(e.options.classes.active).siblings().removeClass(e.options.classes.active)
        },
        new i
    },
    l = function(t, i) {
        function n() {
            this.init(),
            this.bind()
        }
        return n.prototype.init = function() {
            return this.build(),
            this.active(),
            this
        },
        n.prototype.build = function() {
            this.wrapper = t.slider.children("." + t.options.classes.bullets);
            for (var i = 1; i <= t.length; i++) e("<button>", {
                "class": t.options.classes.bullet,
                "data-glide-dir": "=" + i
            }).appendTo(this.wrapper);
            this.items = this.wrapper.children()
        },
        n.prototype.active = function() {
            return this.items.eq(t.current - 1).addClass("active").siblings().removeClass("active")
        },
        n.prototype.remove = function() {
            return this.items.remove(),
            this
        },
        n.prototype.click = function(t) {
            t.preventDefault(),
            i.Events.disabled || (i.Run.pause(), i.Run.make(e(this).data("glide-dir")), i.Animation.after(function() {
                i.Run.play()
            }))
        },
        n.prototype.bind = function() {
            return this.wrapper.on("click.glide touchstart.glide", "button", this.click)
        },
        n.prototype.unbind = function() {
            return this.wrapper.off("click.glide touchstart.glide", "button")
        },
        new n
    },
    c = function(e, t) {
        function i() {
            this.init()
        }
        var n, a = [0, 1];
        return i.prototype.init = function() {
            return this.items = [],
            this.map(),
            this.collect(),
            this.shift = 0,
            this
        },
        i.prototype.map = function() {
            var e;
            for (n = [], e = 0; e < a.length; e++) n.push( - 1 - e, e)
        },
        i.prototype.collect = function() {
            var t, i;
            for (i = 0; i < n.length; i++) t = e.slides.eq(n[i]).clone().addClass(e.options.classes.clone),
            this.items.push(t)
        },
        i.prototype.append = function() {
            var t, i;
            for (i = 0; i < this.items.length; i++) t = this.items[i][e.size](e[e.size]),
            n[i] >= 0 ? t.appendTo(e.track) : t.prependTo(e.track)
        },
        i.prototype.remove = function() {
            var e;
            for (e = 0; e < this.items.length; e++) this.items[e].remove();
            return this
        },
        i.prototype.getGrowth = function() {
            return e.width * this.items.length
        },
        new i
    },
    d = function(e, t) {
        function i() {
            for (var i in t) this[i] = new t[i](e, this)
        }
        return new i
    },
    u = function(i, n) {
        function a() {
            this.disabled = !1,
            this.keyboard(),
            this.hoverpause(),
            this.resize(),
            this.bindTriggers()
        }
        var o = e("[data-glide-trigger]");
        return a.prototype.keyboard = function() {
            i.options.keyboard && e(t).on("keyup.glide",
            function(e) {
                39 === e.keyCode && n.Run.make(">"),
                37 === e.keyCode && n.Run.make("<")
            })
        },
        a.prototype.hoverpause = function() {
            i.options.hoverpause && i.track.on("mouseover.glide",
            function() {
                n.Run.pause(),
                n.Events.trigger("mouseOver")
            }).on("mouseout.glide",
            function() {
                n.Run.play(),
                n.Events.trigger("mouseOut")
            })
        },
        a.prototype.resize = function() {
            e(t).on("resize.glide." + i._uid, n.Helper.throttle(function() {
                n.Transition.jumping = !0,
                i.setup(),
                n.Build.init(),
                n.Run.make("=" + i.current, !1),
                n.Run.play(),
                n.Transition.jumping = !1
            },
            i.options.throttle))
        },
        a.prototype.bindTriggers = function() {
            o.length && o.off("click.glide touchstart.glide").on("click.glide touchstart.glide", this.handleTrigger)
        },
        a.prototype.handleTrigger = function(t) {
            t.preventDefault();
            var i = e(this).data("glide-trigger").split(" ");
            if (!this.disabled) for (var n in i) {
                var a = e(i[n]).data("glide_api");
                a.pause(),
                a.go(e(this).data("glide-dir"), this.activeTrigger),
                a.play()
            }
        },
        a.prototype.disable = function() {
            return this.disabled = !0,
            this
        },
        a.prototype.enable = function() {
            return this.disabled = !1,
            this
        },
        a.prototype.detachClicks = function() {
            return i.track.find("a").each(function(t, i) {
                e(i).attr("data-href", e(i).attr("href")).removeAttr("href")
            }),
            this
        },
        a.prototype.attachClicks = function() {
            return i.track.find("a").each(function(t, i) {
                e(i).attr("href", e(i).attr("data-href"))
            }),
            this
        },
        a.prototype.preventClicks = function(e) {
            return "mousemove" === e.type && i.track.one("click", "a",
            function(e) {
                e.preventDefault()
            }),
            this
        },
        a.prototype.call = function(e) {
            return "undefined" !== e && "function" == typeof e && e(this.getParams()),
            this
        },
        a.prototype.trigger = function(e) {
            return i.slider.trigger(e + ".glide", [this.getParams()]),
            this
        },
        a.prototype.getParams = function() {
            return {
                index: i.current,
                length: i.slides.length,
                current: i.slides.eq(i.current - 1),
                slider: i.slider,
                swipe: {
                    distance: n.Touch.distance || 0
                }
            }
        },
        a.prototype.unbind = function() {
            i.track.off("keyup.glide").off("mouseover.glide").off("mouseout.glide"),
            o.off("click.glide touchstart.glide"),
            e(t).off("keyup.glide").off("resize.glide." + i._uid)
        },
        new a
    },
    p = function(e, t) {
        function i() {
            e.options.autoheight && e.wrapper.css({
                transition: t.Transition.get("height")
            })
        }
        return i.prototype.get = function() {
            var t = "y" === e.axis ? 2 * e.paddings: 0;
            return e.slides.eq(e.current - 1).height() + t
        },
        i.prototype.set = function(t) {
            return ! (!e.options.autoheight && !t) && e.wrapper.height(this.get())
        },
        new i
    },
    f = function(e, t) {
        function i() {}
        return i.prototype.byAxis = function(t, i) {
            return "y" === e.axis ? i: t
        },
        i.prototype.capitalise = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        },
        i.prototype.now = Date.now ||
        function() {
            return (new Date).getTime()
        },
        i.prototype.throttle = function(e, t, i) {
            var n, a, o, r = this,
            s = null,
            l = 0;
            i || (i = {});
            var c = function() {
                l = i.leading === !1 ? 0 : r.now(),
                s = null,
                o = e.apply(n, a),
                s || (n = a = null)
            };
            return function() {
                var d = r.now();
                l || i.leading !== !1 || (l = d);
                var u = t - (d - l);
                return n = this,
                a = arguments,
                0 >= u || u > t ? (s && (clearTimeout(s), s = null), l = d, o = e.apply(n, a), s || (n = a = null)) : s || i.trailing === !1 || (s = setTimeout(c, u)),
                o
            }
        },
        i.prototype.removeStyles = function(e) {
            for (var t = 0; t < e.length; t++) e[t].removeAttr("style")
        },
        new i
    },
    h = function(e, t) {
        function i() {
            this.running = !1,
            this.flag = !1,
            this.play()
        }
        return i.prototype.play = function() {
            var t = this;
            return (e.options.autoplay || this.running) && "undefined" == typeof this.interval && (this.interval = setInterval(function() {
                t.pause(),
                t.make(">"),
                t.play()
            },
            this.getInterval())),
            this.interval
        },
        i.prototype.getInterval = function() {
            return e.slides.eq(e.current - 1).data("glide-autoplay") || e.options.autoplay
        },
        i.prototype.pause = function() {
            return (e.options.autoplay || this.running) && this.interval >= 0 && (this.interval = clearInterval(this.interval)),
            this.interval
        },
        i.prototype.isStart = function() {
            return 1 === e.current
        },
        i.prototype.isEnd = function() {
            return e.current === e.length
        },
        i.prototype.isOffset = function(e) {
            return this.flag && this.direction === e
        },
        i.prototype.make = function(i, n) {
            var a = this;
            switch (this.direction = i.substr(0, 1), this.steps = i.substr(1) ? i.substr(1) : 0, e.options.hoverpause || this.pause(), n !== !1 && t.Events.disable().call(e.options.beforeTransition).trigger("beforeTransition"), this.direction) {
            case ">":
                this.isEnd() ? (e.current = 1, this.flag = !0) : ">" === this.steps ? e.current = e.length: e.current = e.current + 1;
                break;
            case "<":
                this.isStart() ? (e.current = e.length, this.flag = !0) : "<" === this.steps ? e.current = 1 : e.current = e.current - 1;
                break;
            case "=":
                e.current = parseInt(this.steps)
            }
            t.Height.set(),
            t.Bullets.active(),
            t.Animation.make().after(function() {
                t.Build.active(),
                n !== !1 && t.Events.enable().call(n).call(e.options.afterTransition).trigger("afterTransition"),
                e.options.hoverpause || a.play()
            }),
            t.Events.call(e.options.duringTransition).trigger("duringTransition")
        },
        new i
    },
    m = function(t, i) {
        function n() {
            this.dragging = !1,
            t.options.touchDistance && t.track.on({
                "touchstart.glide": e.proxy(this.start, this)
            }),
            t.options.dragDistance && t.track.on({
                "mousedown.glide": e.proxy(this.start, this)
            })
        }
        var a;
        return n.prototype.unbind = function() {
            t.track.off("touchstart.glide mousedown.glide").off("touchmove.glide mousemove.glide").off("touchend.glide touchcancel.glide mouseup.glide mouseleave.glide")
        },
        n.prototype.start = function(n) {
            i.Events.disabled || this.dragging || (a = "mousedown" === n.type ? n.originalEvent: n.originalEvent.touches[0] || n.originalEvent.changedTouches[0], i.Transition.jumping = !0, this.touchStartX = parseInt(a.pageX), this.touchStartY = parseInt(a.pageY), this.touchSin = null, this.dragging = !0, t.track.on({
                "touchmove.glide mousemove.glide": i.Helper.throttle(e.proxy(this.move, this), t.options.throttle),
                "touchend.glide touchcancel.glide mouseup.glide mouseleave.glide": e.proxy(this.end, this)
            }), i.Events.detachClicks().call(t.options.swipeStart).trigger("swipeStart"), i.Run.pause())
        },
        n.prototype.move = function(e) {
            if (!i.Events.disabled && this.dragging) {
                a = "mousemove" === e.type ? e.originalEvent: e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                var n = parseInt(a.pageX) - this.touchStartX,
                o = parseInt(a.pageY) - this.touchStartY,
                r = Math.abs(n << 2),
                s = Math.abs(o << 2),
                l = Math.sqrt(r + s),
                c = Math.sqrt(i.Helper.byAxis(s, r));
                if (this.touchSin = Math.asin(c / l), this.distance = i.Helper.byAxis(a.pageX - this.touchStartX, a.pageY - this.touchStartY), 180 * this.touchSin / Math.PI < 45 && i.Animation.make(i.Helper.byAxis(n, o)), i.Events.preventClicks(e).call(t.options.swipeMove).trigger("swipeMove"), i.Build.isMode("vertical")) {
                    if (i.Run.isStart() && o > 0) return;
                    if (i.Run.isEnd() && 0 > o) return
                }
                if (! (180 * this.touchSin / Math.PI < 45)) return;
                e.stopPropagation(),
                e.preventDefault(),
                t.track.addClass(t.options.classes.dragging)
            }
        },
        n.prototype.end = function(e) {
            if (!i.Events.disabled && this.dragging) {
                a = "mouseup" === e.type || "mouseleave" === e.type ? e.originalEvent: e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                var n = i.Helper.byAxis(a.pageX - this.touchStartX, a.pageY - this.touchStartY),
                o = 180 * this.touchSin / Math.PI;
                i.Transition.jumping = !1,
                i.Build.isType("slider") && (i.Run.isStart() && n > 0 && (n = 0), i.Run.isEnd() && 0 > n && (n = 0)),
                "mouseup" === e.type || "mouseleave" === e.type ? distanceLimiter = t.options.dragDistance: distanceLimiter = t.options.touchDistance,
                n > distanceLimiter && 45 > o ? i.Run.make("<") : n < -distanceLimiter && 45 > o ? i.Run.make(">") : i.Animation.make(),
                i.Animation.after(function() {
                    i.Events.enable(),
                    i.Run.play()
                }),
                this.dragging = !1,
                i.Events.attachClicks().disable().call(t.options.swipeEnd).trigger("swipeEnd"),
                t.track.removeClass(t.options.classes.dragging).off("touchmove.glide mousemove.glide").off("touchend.glide touchcancel.glide mouseup.glide mouseleave.glide")
            }
        },
        new n
    },
    g = function(e, t) {
        function i() {
            this.jumping = !1
        }
        return i.prototype.get = function(t) {
            return this.jumping ? this.clear("all") : t + " " + e.options.animationDuration + "ms " + e.options.animationTimingFunc
        },
        i.prototype.clear = function(t) {
            return t + " 0ms " + e.options.animationTimingFunc
        },
        new i
    },
    v = function(e, t) {
        function i() {}
        var n = {
            x: 0,
            y: 0,
            z: 0
        };
        return i.prototype.set = function(e, t) {
            return n[e] = parseInt(t),
            "translate3d(" + -1 * n.x + "px, " + -1 * n.y + "px, " + -1 * n.z + "px)"
        },
        new i
    },
    y = function(t, i) {
        var n = {
            autoplay: 4e3,
            type: "carousel",
            mode: "horizontal",
            startAt: 1,
            hoverpause: !0,
            keyboard: !0,
            touchDistance: 80,
            dragDistance: 120,
            animationDuration: 400,
            animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
            throttle: 16,
            autoheight: !1,
            paddings: 0,
            centered: !0,
            classes: {
                base: "glide",
                wrapper: "glide__wrapper",
                track: "glide__track",
                slide: "glide__slide",
                arrows: "glide__arrows",
                arrow: "glide__arrow",
                arrowNext: "next",
                arrowPrev: "prev",
                bullets: "glide__bullets",
                bullet: "glide__bullet",
                clone: "clone",
                active: "active",
                dragging: "dragging",
                disabled: "disabled"
            },
            beforeInit: function(e) {},
            afterInit: function(e) {},
            beforeTransition: function(e) {},
            duringTransition: function(e) {},
            afterTransition: function(e) {},
            swipeStart: function(e) {},
            swipeEnd: function(e) {},
            swipeMove: function(e) {}
        };
        this.options = e.extend({},
        n, i),
        this._uid = Math.floor(1e3 * Math.random()),
        this.current = parseInt(this.options.startAt),
        this.element = t,
        this.collect(),
        this.setup(),
        this.options.beforeInit({
            index: this.current,
            length: this.slides.length,
            current: this.slides.eq(this.current - 1),
            slider: this.slider
        });
        var y = new d(this, {
            Helper: f,
            Translate: v,
            Transition: g,
            Run: h,
            Animation: a,
            Clones: c,
            Arrows: r,
            Bullets: l,
            Height: p,
            Build: s,
            Events: u,
            Touch: m,
            Api: o
        });
        return y.Events.call(this.options.afterInit),
        y.Api.instance()
    };
    y.prototype.collect = function() {
        var e = this.options,
        t = e.classes;
        this.slider = this.element.addClass(t.base + "--" + e.type).addClass(t.base + "--" + e.mode),
        this.track = this.slider.find("." + t.track),
        this.wrapper = this.slider.find("." + t.wrapper),
        this.slides = this.track.find("." + t.slide).not("." + t.clone)
    },
    y.prototype.setup = function() {
        var e = {
            horizontal: ["width", "x"],
            vertical: ["height", "y"]
        };
        this.size = e[this.options.mode][0],
        this.axis = e[this.options.mode][1],
        this.length = this.slides.length,
        this.paddings = this.getPaddings(),
        this[this.size] = this.getSize()
    },
    y.prototype.getPaddings = function() {
        var e = this.options.paddings;
        if ("string" == typeof e) {
            var t = parseInt(e, 10),
            i = e.indexOf("%") >= 0;
            return i ? parseInt(this.slider[this.size]() * (t / 100)) : t
        }
        return e
    },
    y.prototype.getSize = function() {
        return this.slider[this.size]() - 2 * this.paddings
    },
    e.fn.glide2 = function(t) {
        return this.each(function() {
            e.data(this, "glide_api") || e.data(this, "glide_api", new y(e(this), t))
        })
    }
} (jQuery, window, document),
/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent),
$(function() {
    $("body").on("click", ".fx",
    function() {
        $(".share").hasClass("on") ? ($(".share").slideUp(), $(".share").removeClass("on")) : ($(".share").slideDown(), $(".share").addClass("on"))
    }),
    $(".a5_1").click(function() {
        $(".tc").hasClass("on") ? ($(".tc").slideUp(), $(".tc").removeClass("on")) : ($(".tc").slideDown(), $(".tc").addClass("on"))
    }),
    $(".footnav li,.hdxq .nav li,.wzxq .nav li,.pl .list li .info dd a").click(function() {
        $(this).addClass("selected")
    }),
    $(".footnav .a5").click(function() {
        return $(".tc").is(":visible") ? ($(".tc").hide(), $(this).parent().removeClass("selected")) : ($(".tc").show(), $(this).parent().addClass("selected")),
        !1
    }),
    $(".sharejs").click(function() {
        return $(".share").is(":visible") ? ($(".share").hide(), $(this).removeClass("selected")) : ($(".share").show(), $(this).addClass("selected")),
        !1
    });
    var e = $(".sy-nav li");
    $(".sy-nav ul").css("width", e.size() * (e.width() + 40));
    var t = $(".sy .hd-list li");
    $(".sy .hd-list ul").css("width", t.size() * (t.width() + 40));
    var i = $(".sy .sy-imgs li");
    $(".sy .sy-imgs ul").css("width", i.size() * (i.width() + 20));
    var t = $(".sy .activity .body li");
    if ($(".sy .activity .body ul").css("width", t.size() * (t.width() + 34)), $(".list .tags .btn").click(function() {
        return $(".list .tags").hasClass("selected") ? $(".list .tags").removeClass("selected") : $(".list .tags").addClass("selected"),
        !1
    }), $(".sy-nav li a").click(function() {
        $(this).parent().addClass("on")
    }), $(".article-new .tags .btn").click(function() {
        return $(".article-new .tags").hasClass("selected") ? $(".article-new .tags").removeClass("selected") : $(".article-new .tags").addClass("selected"),
        !1
    }), $(".selectr select").change(function() {
        $(this).parent().find("strong").html($(this).val())
    }), $(".wzxq .card .body em").click(function() {
        $(this).parent().hasClass("selected") ? $(this).parent().removeClass("selected") : $(this).parent().addClass("selected")
    }), $(".wz-banner").size() > 0 || $(".sy-banner").size() > 0 || $(".topic-slide").size() > 0) {
        $(".wz-banner,.sy-banner,.topic-slide").glide({
            animationTime: 500,
            arrows: !1,
            arrowRightText: "",
            arrowLeftText: "",
            nav: !0,
            navCenter: !0,
            navClass: "slider-nav",
            navItemClass: "slider-nav__item",
            navCurrentItemClass: "slider-nav__item--current"
        })
    }
    $(".nav-select li h2").click(function() {
        return $(this).parent().hasClass("selected") ? ($(this).parent().removeClass("selected"), $("body").css("overflow", "auto"), !1) : ($(this).parent().parent().find("li").removeClass("selected"), $(this).parent().addClass("selected"), $("body").css("overflow", "hidden"), !1)
    }),
    $(".nav-select li dd").click(function() {
        return $(this).addClass("selected"),
        $(this).parent().parent().find("h2").html($(this).html()),
        $(this).parent().parent().removeClass("selected"),
        $(this).parent().parent().parent().find("dd").removeClass("selected"),
        $(this).addClass("selected"),
        $("body").css("overflow", "auto"),
        !1
    }),
    $(".grzy .zx-foot .a1").click(function() {
        return $(this).parent().addClass("on"),
        !1
    }),
    $(".sy-new-nav li .more").click(function() {
        return $(".dialog").css("display", "block"),
        !1
    }),
    $(".dialog .close").click(function() {
        $(this).parent().parent().css("display", "none")
    }),
    $(".info-nav li").click(function() {
        return $(".info-nav li").removeClass("selected").eq($(this).index()).addClass("selected"),
        $(".info-tab").hide().eq($(this).index()).show(),
        !1
    }),
    $("#share-mask").click(function() {
        return $("#share-mask").css("display", "none"),
        $("html").removeClass("noscroll"),
        $("body").removeClass("noscroll"),
        !1
    });
    var n = 0,
    a = 0;
    $(window).scroll(function(e) {
        n = $(this).scrollTop(),
        a <= n ? ($(".wzxq .nav,.grzy .foot,.grzy .zx-foot").addClass("hide"), $(".sharejs").removeClass("selected")) : $(".wzxq .nav,.grzy .foot,.grzy .zx-foot").removeClass("hide"),
        setTimeout(function() {
            a = n
        },
        0)
    }),
    $(".reserve_detail .detail .more a").click(function() {
        var e = $(".reserve_detail .detail");
        return e.hasClass("on") ? (e.removeClass("on"), !1) : (e.addClass("on"), !1)
    }),
    $(".expert_c_detail .more a").click(function() {
        var e = $(".expert_c_detail");
        return e.hasClass("on") ? (e.removeClass("on"), !1) : (e.addClass("on"), !1)
    }),
    $("#sixin").click(function() {
        var e = $(this);
        if ("" == myId || myId <= 0) return window.location.href = "/account/login/?next=" + window.location.href,
        !1;
        var t = $(".activate-mobile-container"),
        i = $(".activate-mobile-header").find(".cancel");
        return i.on("touchend click",
        function() {
            t.fadeOut(200)
        }),
        "" == bindPhone ? void t.fadeIn(200) : void $.dialog({
            title: "发送私信",
            content: '<form id="message-form" action="" method="post"><p><textarea id="content" class="content" placeholder="@' + e.data("nickname") + '：" name="content" style="width: 225px;padding:3px 5px; height:65px;margin:5px 0;resize:none;"></textarea></p></form>',
            ok: function() {
                var t = $(this.DOM.content).find("#content").val();
                if ("" == t) return $.dialog.tips("内容不能为空！", 1, ""),
                !1;
                var i = {
                    other_id: e.attr("target"),
                    content: t
                };
                $.ajax({
                    url: postUserMessageUrl,
                    type: "POST",
                    data: i,
                    success: function(e) {
                        0 == e.code ? $.dialog.tips(e.message, 1, "success.png") : $.dialog.tips(e.message, 1)
                    }
                })
            },
            cancel: !0,
            lock: !0,
            min: !1,
            max: !1,
            fixed: !1
        })
    })
}),
$(function() {
    var e = $(window).height();
    $(".md-screen .wrap").css({
        height: e,
        "overflow-y": "auto",
        "overflow-x": "hidden"
    }),
    $(".md-screen .section .hd").click(function() {
        var e = $(this).parent();
        e.hasClass("selected") ? e.removeClass("selected") : e.addClass("selected")
    }),
    $(".md-screen .close").click(function() {
        $(".md-screen").hide(),
        $("body").css("overflow-y", "auto")
    }),
    $(".details .head .arrow").click(function() {
        var e, t = $(this),
        i = $(".details-pull-down"),
        n = $(".details-pull-down .wrap"),
        a = $(".details-pull-down .mask"),
        o = function() {
            t.addClass("selected"),
            i.css({
                display: "block"
            }),
            a.css("height", "auto").fadeIn(500).one("click", r),
            n.animate({
                height: n.data().h + "px"
            },
            500)
        },
        r = function() {
            t.removeClass("selected"),
            e = n.height(),
            a.fadeOut(500),
            n.data({
                h: e
            }),
            n.animate({
                height: 0
            },
            500,
            function() {
                i.css({
                    display: "none"
                })
            })
        };
        $(this).hasClass("selected") ? r().call($(this)) : o().call($(this))
    }),
    $(".h_expert_texts_1 .h_expert_btn").click(function() {
        return $(this).hasClass("on") ? ($(".text-wrap").css({
            height: 570
        }), $(this).find("a").html("展开更多"), $(this).removeClass("on")) : ($(this).addClass("on"), $(".text-wrap").css({
            height: "auto"
        }), $(this).find("a").html("收起详情")),
        !1
    })
});
function isWeiXin() {
    var e = window.navigator.userAgent.toLowerCase();
    return "micromessenger" == e.match(/MicroMessenger/i)
} !
function(e, t, i) {
    var n, a, o, r, s = t.ActiveXObject && !t.XMLHttpRequest,
    l = function() {},
    c = 0,
    d = /^url:/,
    u = t.document,
    p = "JDG" + +new Date,
    f = '<table class="ui_border"><tbody><tr><td class="ui_lt"></td><td class="ui_t"></td><td class="ui_rt"></td></tr><tr><td class="ui_l"></td><td class="ui_c"><div class="ui_inner"><table class="ui_dialog"><tbody><tr><td colspan="2"><div class="ui_title_bar"><div class="ui_title" unselectable="on"></div><div class="ui_title_buttons"><a class="ui_min" href="javascript:void(0);" title="最小化"><b class="ui_min_b"></b></a><a class="ui_max" href="javascript:void(0);" title="最大化"><b class="ui_max_b"></b></a><a class="ui_res" href="javascript:void(0);" title="还原"><b class="ui_res_b"></b><b class="ui_res_t"></b></a><a class="ui_close" href="javascript:void(0);" title="关闭(esc键)">×</a></div></div></td></tr><tr><td class="ui_icon"></td><td class="ui_main"><div class="ui_content"></div></td></tr><tr><td colspan="2"><div class="ui_buttons"></div></td></tr></tbody></table></div></td><td class="ui_r"></td></tr><tr><td class="ui_lb"></td><td class="ui_b"></td><td class="ui_rb"></td></tr></tbody></table>',
    h = (function(e, t, i) {
        for (var n = e.length; t < n && (i = u.querySelector ? e[t].src: e[t].getAttribute("src", 4), i.substr(i.lastIndexOf("/")).indexOf("lhgdialog") === -1); t++);
        return i = i.split("?"),
        o = i[1],
        i[0].substr(0, i[0].lastIndexOf("/") + 1)
    } (u.getElementsByTagName("script"), 0), "mobile_xinli001.re"),
    m = function(e) {
        try {
            r = e.top.document,
            r.getElementsByTagName
        } catch(t) {
            return r = e.document,
            e
        }
        return r.getElementsByTagName("frameset").length > 0 ? (r = e.document, e) : e.top
    } (t),
    g = r.documentElement,
    v = "BackCompat" === r.compatMode;
    _$doc = e(r),
    _$top = e(m),
    _$html = e(r.getElementsByTagName("html")[0]);
    try {
        r.execCommand("BackgroundImageCache", !1, !0)
    } catch(y) {} !
    function(e) {
        if (!e) {
            var t = r.getElementsByTagName("head")[0],
            i = r.createElement("link");
            i.href = "http://lapp.xinli001.com/skins/" + h + ".css",
            i.rel = "stylesheet",
            i.id = "lhgdialoglink",
            t.insertBefore(i, t.lastChild)
        }
    } (r.getElementById("lhgdialoglink")),
    s &&
    function(e) {
        "fixed" !== _$html.css(e) && _$html.css({
            zoom: 1,
            backgroundImage: "url(about:blank)",
            backgroundAttachment: "fixed"
        })
    } ("backgroundAttachment");
    var w = function(e) {
        e = e || {};
        var t, a = w.setting;
        for (var o in a) e[o] === i && (e[o] = a[o]);
        return e.id = e.id || p + c,
        (t = w.list[e.id]) ? t.zindex().focus() : (e.button = e.button || [], e.ok && e.button.push({
            id: "ok",
            name: e.okVal,
            callback: e.ok,
            focus: e.focus
        }), e.cancel && e.button.push({
            id: "cancel",
            name: e.cancelVal,
            callback: e.cancel
        }), w.setting.zIndex = e.zIndex, c++, w.list[e.id] = n ? n._init(e) : new w.fn._init(e))
    };
    w.fn = w.prototype = {
        constructor: w,
        _init: function(e) {
            var i, a = this,
            o = e.content,
            r = d.test(o);
            return a.opener = t,
            a.config = e,
            a.DOM = i = a.DOM || a._getDOM(),
            a.closed = !1,
            a.data = e.data,
            e.icon && !r ? (e.min = !1, e.max = !1, i.icon[0].style.display = "", i.icon[0].innerHTML = '<img src="' + e.path + "skins/icons/" + e.icon + '" class="ui_icon_bg"/>') : i.icon[0].style.display = "none",
            i.wrap.addClass(e.skin),
            i.rb[0].style.cursor = e.resize ? "se-resize": "auto",
            i.title[0].style.cursor = e.drag ? "move": "auto",
            i.max[0].style.display = e.max ? "inline-block": "none",
            i.min[0].style.display = e.min ? "inline-block": "none",
            i.close[0].style.display = e.cancel === !1 ? "none": "inline-block",
            i.content[0].style.padding = e.padding,
            a.button.apply(a, e.button),
            a.title(e.title).content(o, !0, r).size(e.width, e.height).position(e.left, e.top).time(e.time)[e.show ? "show": "hide"](!0).zindex(),
            e.focus && a.focus(),
            e.lock && a.lock(),
            a._ie6PngFix()._addEvent(),
            n = null,
            !r && e.init && e.init.call(a, t),
            a
        },
        button: function() {
            for (var t, i, n, a, o, s = this,
            l = s.DOM,
            c = l.buttons[0], d = "ui_state_highlight", u = s._listeners = s._listeners || {},
            f = [].slice.call(arguments), h = 0; h < f.length; h++) t = f[h],
            i = t.name,
            n = t.id || i,
            a = !u[n],
            o = a ? r.createElement("input") : u[n].elem,
            o.type = "button",
            u[n] || (u[n] = {}),
            i && (o.value = i),
            t.callback && (u[n].callback = t.callback),
            t.focus && (s._focus && s._focus.removeClass(d), s._focus = e(o).addClass(d), s.focus()),
            o[p + "callback"] = n,
            o.disabled = !!t.disabled,
            a && (u[n].elem = o, c.appendChild(o));
            return c.style.display = f.length ? "": "none",
            s._ie6SelectFix(),
            s
        },
        title: function(e) {
            if (e === i) return this;
            var t = this.DOM,
            n = t.border,
            a = t.title[0];
            return e === !1 ? (a.style.display = "none", a.innerHTML = "", n.addClass("ui_state_tips")) : (a.style.display = "", a.innerHTML = e, n.removeClass("ui_state_tips")),
            this
        },
        content: function(e, t, n) {
            if (e === i) return this;
            var a = this,
            o = a.DOM,
            r = o.wrap[0],
            s = r.offsetWidth,
            l = r.offsetHeight,
            c = parseInt(r.style.left),
            d = parseInt(r.style.top),
            u = r.style.width,
            p = o.content,
            f = w.setting.content;
            return n ? (p[0].innerHTML = f, a._iframe(e.split("url:")[1])) : p.html(e),
            t || (r.style.left = "0px", s = r.offsetWidth - s, l = r.offsetHeight - l, c -= s / 2, d -= l / 2, r.style.left = Math.max(c, 0) + "px", r.style.top = Math.max(d, 0) + "px", u && "auto" !== u && (r.style.width = r.offsetWidth + "px"), a._autoPositionType()),
            a._ie6SelectFix(),
            a
        },
        size: function(e, t) {
            var i = this,
            n = i.DOM,
            a = n.wrap[0],
            o = n.main[0].style;
            return a.style.width = "auto",
            "number" == typeof e && (e += "px"),
            "number" == typeof t && (t += "px"),
            o.width = e,
            o.height = t,
            "auto" !== e && (a.style.width = a.offsetWidth + "px"),
            i._ie6SelectFix(),
            i
        },
        position: function(e, t) {
            var n = this,
            a = n.config,
            o = n.DOM.wrap[0],
            r = o.style,
            l = !s && a.fixed,
            c = s && a.fixed,
            d = _$top.scrollLeft(),
            u = _$top.scrollTop(),
            p = l ? 0 : d,
            f = l ? 0 : u,
            h = _$top.width(),
            m = _$top.height(),
            g = o.offsetWidth,
            v = o.offsetHeight;
            return (e || 0 === e) && (n._left = e.toString().indexOf("%") !== -1 ? e: null, e = n._toNumber(e, h - g), "number" == typeof e && (e = c ? e += d: e + p, e = Math.max(e, p) + "px"), r.left = e),
            (t || 0 === t) && (n._top = t.toString().indexOf("%") !== -1 ? t: null, t = n._toNumber(t, m - v), "number" == typeof t && (t = c ? t += u: t + f, t = Math.max(t, f) + "px"), r.top = t),
            e !== i && t !== i && n._autoPositionType(),
            n
        },
        time: function(e, t) {
            var i = this,
            n = i._timer;
            return n && clearTimeout(n),
            t && t.call(i),
            e && (i._timer = setTimeout(function() {
                i._click("cancel")
            },
            1e3 * e)),
            i
        },
        show: function(t) {
            return this.DOM.wrap[0].style.visibility = "visible",
            this.DOM.border.addClass("ui_state_visible"),
            !t && this._lock && (e("#ldg_lockmask", r)[0].style.display = ""),
            this
        },
        hide: function(t) {
            return this.DOM.wrap[0].style.visibility = "hidden",
            this.DOM.border.removeClass("ui_state_visible"),
            !t && this._lock && (e("#ldg_lockmask", r)[0].style.display = "none"),
            this
        },
        zindex: function() {
            var e = this,
            t = e.DOM,
            i = e._load,
            n = w.focus,
            a = w.setting.zIndex++;
            return t.wrap[0].style.zIndex = a,
            n && n.DOM.border.removeClass("ui_state_focus"),
            w.focus = e,
            t.border.addClass("ui_state_focus"),
            i && i.style.zIndex && (i.style.display = "none"),
            n && n !== e && n.iframe && (n._load.style.display = ""),
            e
        },
        focus: function() {
            try {
                elemFocus = this._focus && this._focus[0] || this.DOM.close[0],
                elemFocus && elemFocus.focus()
            } catch(e) {}
            return this
        },
        lock: function() {
            var t, i = this,
            n = w.setting.zIndex - 1,
            a = (i.config, e("#ldg_lockmask", r)[0]),
            o = a ? a.style: "",
            l = s ? "absolute": "fixed";
            return a || (t = '<iframe src="javascript:\'\'" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>', a = r.createElement("div"), a.id = "ldg_lockmask", a.style.cssText = "position:" + l + ";left:0;top:0;width:100%;height:100%;overflow:hidden;", o = a.style, s && (a.innerHTML = t), r.body.appendChild(a)),
            "absolute" === l && (o.width = _$top.width(), o.height = _$top.height(), o.top = _$top.scrollTop(), o.left = _$top.scrollLeft(), i._setFixed(a)),
            o.zIndex = n,
            o.display = "",
            i.zindex(),
            i.DOM.border.addClass("ui_state_lock"),
            i._lock = !0,
            i
        },
        unlock: function() {
            var t = this,
            i = t.config,
            n = e("#ldg_lockmask", r)[0];
            if (n && t._lock) {
                if (i.parent && i.parent._lock) {
                    var a = i.parent.DOM.wrap[0].style.zIndex;
                    n.style.zIndex = parseInt(a, 10) - 1
                } else n.style.display = "none";
                t.DOM.border.removeClass("ui_state_lock")
            }
            return t._lock = !1,
            t
        },
        close: function() {
            var i = this,
            a = i.DOM,
            o = a.wrap,
            r = w.list,
            s = i.config.close;
            if (i.time(), i.iframe) {
                if ("function" == typeof s && s.call(i, i.iframe.contentWindow, t) === !1) return i;
                e(i.iframe).unbind("load", i._fmLoad).attr("src", "javascript:''").remove(),
                a.content.removeClass("ui_state_full"),
                i._frmTimer && clearTimeout(i._frmTimer)
            } else if ("function" == typeof s && s.call(i, t) === !1) return i;
            if (i.unlock(), i._maxState && (_$html.removeClass("ui_lock_scroll"), a.res[0].style.display = "none"), w.focus === i && (w.focus = null), i._removeEvent(), delete r[i.config.id], n) o.remove();
            else {
                n = i,
                i._minState && (a.main[0].style.display = "", a.buttons[0].style.display = "", a.dialog[0].style.width = ""),
                a.wrap[0].style.cssText = "left:0;top:0;",
                a.wrap[0].className = "",
                a.border.removeClass("ui_state_focus"),
                a.title[0].innerHTML = "",
                a.content.html(""),
                a.icon[0].innerHTML = "",
                a.buttons[0].innerHTML = "",
                i.hide(!0)._setAbsolute();
                for (var l in i) i.hasOwnProperty(l) && "DOM" !== l && delete i[l]
            }
            return i.closed = !0,
            i
        },
        max: function() {
            var e, t = this,
            i = t.DOM,
            n = i.wrap[0].style,
            a = i.main[0].style,
            o = i.rb[0].style,
            r = i.title[0].style,
            l = t.config,
            c = _$top.scrollTop(),
            d = _$top.scrollLeft();
            return t._maxState ? (_$html.removeClass("ui_lock_scroll"), n.top = t._or.t, n.left = t._or.l, t.size(t._or.w, t._or.h)._autoPositionType(), l.drag = t._or.d, l.resize = t._or.r, o.cursor = t._or.rc, r.cursor = t._or.tc, i.res[0].style.display = "none", i.max[0].style.display = "inline-block", delete t._or, t._maxState = !1) : (_$html.addClass("ui_lock_scroll"), t._minState && t.min(), t._or = {
                t: n.top,
                l: n.left,
                w: a.width,
                h: a.height,
                d: l.drag,
                r: l.resize,
                rc: o.cursor,
                tc: r.cursor
            },
            n.top = c + "px", n.left = d + "px", e = t._maxSize(), t.size(e.w, e.h)._setAbsolute(), s && v && (n.width = _$top.width() + "px"), l.drag = !1, l.resize = !1, o.cursor = "auto", r.cursor = "auto", i.max[0].style.display = "none", i.res[0].style.display = "inline-block", t._maxState = !0),
            t
        },
        min: function() {
            var e = this,
            t = e.DOM,
            i = t.main[0].style,
            n = t.buttons[0].style,
            a = t.dialog[0].style,
            o = t.rb[0].style.cursor,
            r = e.config.resize;
            return e._minState ? (i.display = "", n.display = e._minRz.btn, a.width = "", r = e._minRz, o.cursor = e._minRz.rzs ? "se-resize": "auto", delete e._minRz, e._minState = !1) : (e._maxState && e.max(), e._minRz = {
                rzs: r,
                btn: n.display
            },
            i.display = "none", n.display = "none", a.width = i.width, o.cursor = "auto", r = !1, e._minState = !0),
            e._ie6SelectFix(),
            e
        },
        get: function(e, t) {
            return w.list[e] ? 1 === t ? w.list[e] : w.list[e].content || null: null
        },
        reload: function(i, n, a) {
            i = i || t;
            try {
                i.location.href = n ? n: i.location.href
            } catch(o) {
                n = this.iframe.src,
                e(this.iframe).attr("src", n)
            }
            return a && a.call(this),
            this
        },
        _iframe: function(t) {
            var i, n, a, o, l, c, d, u = this,
            p = u.DOM.content,
            f = u.config,
            h = u._load = e(".ui_loading", p[0])[0],
            g = "position:absolute;left:-9999em;border:none 0;background:transparent",
            v = "width:100%;height:100%;border:none 0;";
            if (f.cache === !1) {
                var y = (new Date).getTime(),
                w = t.replace(/([?&])_=[^&]*/, "$1_=" + y);
                t = w + (w === t ? (/\?/.test(t) ? "&": "?") + "_=" + y: "")
            }
            i = u.iframe = r.createElement("iframe"),
            i.name = f.id,
            i.style.cssText = g,
            i.setAttribute("frameborder", 0, 0),
            n = e(i),
            p[0].appendChild(i),
            u._frmTimer = setTimeout(function() {
                n.attr("src", t)
            },
            1);
            var b = u._fmLoad = function() {
                p.addClass("ui_state_full");
                var t = u.DOM,
                n = (t.lt[0].offsetHeight, t.main[0].style);
                h.style.cssText = "display:none;position:absolute;background:#FFF;opacity:0;filter:alpha(opacity=0);z-index:1;width:" + n.width + ";height:" + n.height + ";";
                try {
                    a = u.content = i.contentWindow,
                    o = e(a.document),
                    l = e(a.document.body)
                } catch(r) {
                    return void(i.style.cssText = v)
                }
                c = "auto" === f.width ? o.width() + (s ? 0 : parseInt(l.css("marginLeft"))) : f.width,
                d = "auto" === f.height ? o.height() : f.height,
                setTimeout(function() {
                    i.style.cssText = v
                },
                0),
                u._maxState || u.size(c, d).position(f.left, f.top),
                h.style.width = n.width,
                h.style.height = n.height,
                f.init && f.init.call(u, a, m)
            };
            u.iframe.api = u,
            n.bind("load", b)
        },
        _getDOM: function() {
            var t = r.createElement("div"),
            i = r.body;
            t.style.cssText = "position:absolute;left:0;top:0;visibility:hidden;",
            t.innerHTML = f;
            for (var n, a = 0,
            o = {
                wrap: e(t)
            },
            s = t.getElementsByTagName("*"), l = s.length; a < l; a++) n = s[a].className.split("ui_")[1],
            n && (o[n] = e(s[a]));
            return i.insertBefore(t, i.firstChild),
            o
        },
        _toNumber: function(e, t) {
            return "number" == typeof e ? e: (e.indexOf("%") !== -1 && (e = parseInt(t * e.split("%")[0] / 100)), e)
        },
        _maxSize: function() {
            var e, t, i = this,
            n = i.DOM,
            a = n.wrap[0],
            o = n.main[0];
            return e = _$top.width() - a.offsetWidth + o.offsetWidth,
            t = _$top.height() - a.offsetHeight + o.offsetHeight,
            {
                w: e,
                h: t
            }
        },
        _ie6PngFix: function() {
            if (s) for (var e, t, i, n, a = 0,
            o = w.setting.path + "/skins/",
            r = this.DOM.wrap[0].getElementsByTagName("*"); a < r.length; a++) e = r[a],
            t = e.currentStyle.png,
            t && (i = o + t, n = e.runtimeStyle, n.backgroundImage = "none", n.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + i + "',sizingMethod='scale')");
            return this
        },
        _ie6SelectFix: s ?
        function() {
            var e = this.DOM.wrap,
            t = e[0],
            i = i + "iframeMask",
            n = e[i],
            a = t.offsetWidth,
            o = t.offsetHeight;
            a += "px",
            o += "px",
            n ? (n.style.width = a, n.style.height = o) : (n = t.appendChild(r.createElement("iframe")), e[i] = n, n.src = "javascript:''", n.style.cssText = "position:absolute;z-index:-1;left:0;top:0;filter:alpha(opacity=0);width:" + a + ";height:" + o)
        }: l,
        _autoPositionType: function() {
            this[this.config.fixed ? "_setFixed": "_setAbsolute"]()
        },
        _setFixed: function(e) {
            var t = e ? e.style: this.DOM.wrap[0].style;
            if (s) {
                var i = _$top.scrollLeft(),
                n = _$top.scrollTop(),
                a = parseInt(t.left) - i,
                o = parseInt(t.top) - n,
                r = v ? "this.ownerDocument.body": "this.ownerDocument.documentElement";
                this._setAbsolute(),
                t.setExpression("left", r + ".scrollLeft +" + a),
                t.setExpression("top", r + ".scrollTop +" + o)
            } else t.position = "fixed"
        },
        _setAbsolute: function() {
            var e = this.DOM.wrap[0].style;
            s && (e.removeExpression("left"), e.removeExpression("top")),
            e.position = "absolute"
        },
        _click: function(e) {
            var i = this,
            n = i._listeners[e] && i._listeners[e].callback;
            return "function" != typeof n || n.call(i, t) !== !1 ? i.close() : i
        },
        _reset: function() {
            var i, n = !!t.ActiveXObject,
            a = this,
            o = _$top.width(),
            l = _$top.height(),
            c = a._winSize || o * l,
            d = a._lockDocW || o,
            u = a._left,
            p = a._top;
            if (!n || (a._lock && s && e("#ldg_lockmask", r).css({
                width: o + "px",
                height: l + 17 + "px"
            }), newWidth = a._lockDocW = o, i = a._winSize = o * l, c !== i)) {
                if (a._maxState) {
                    var f = a._maxSize();
                    a.size(f.w, f.h)
                }
                n && 17 === Math.abs(d - newWidth) || (u || p) && a.position(u, p)
            }
        },
        _addEvent: function() {
            var e, t = this,
            i = t.config,
            n = t.DOM;
            t._winResize = function() {
                e && clearTimeout(e),
                e = setTimeout(function() {
                    t._reset()
                },
                140)
            },
            _$top.bind("resize", t._winResize),
            n.wrap.bind("click",
            function(e) {
                var i, a = e.target;
                return ! a.disabled && (a === n.close[0] ? (t._click("cancel"), !1) : a === n.max[0] || a === n.res[0] || a === n.max_b[0] || a === n.res_b[0] || a === n.res_t[0] ? (t.max(), !1) : a === n.min[0] || a === n.min_b[0] ? (t.min(), !1) : (i = a[p + "callback"], void(i && t._click(i))))
            }).bind("mousedown",
            function(e) {
                t.zindex();
                var a = e.target;
                if (i.drag !== !1 && a === n.title[0] || i.resize !== !1 && a === n.rb[0]) return b(e),
                !1
            }),
            i.max && n.title.bind("dblclick",
            function() {
                return t.max(),
                !1
            })
        },
        _removeEvent: function() {
            var e = this,
            t = e.DOM;
            t.wrap.unbind(),
            t.title.unbind(),
            _$top.unbind("resize", e._winResize)
        }
    },
    w.fn._init.prototype = w.fn,
    w.focus = null,
    w.list = {},
    a = function(e) {
        var t = (e.target, w.focus),
        i = e.keyCode;
        t && t.config.esc && t.config.cancel !== !1 && 27 === i && t._click(t.config.cancelVal)
    },
    _$doc.bind("keydown", a),
    m != t && e(t).bind("unload",
    function() {
        var t = w.list;
        for (var i in t) t[i] && t[i].close();
        n && n.DOM.wrap.remove(),
        _$doc.unbind("keydown", a),
        e("#ldg_lockmask", r)[0] && e("#ldg_lockmask", r).remove(),
        e("#ldg_dragmask", r)[0] && e("#ldg_dragmask", r).remove()
    }),
    w.setting = {
        content: '<div class="ui_loading"><span>loading...</span></div>',
        title: "视窗 ",
        button: null,
        ok: null,
        cancel: null,
        init: null,
        close: null,
        okVal: "确定",
        cancelVal: "取消",
        skin: "",
        esc: !0,
        show: !0,
        width: "auto",
        height: "auto",
        icon: null,
        path: "http://lapp.xinli001.com/",
        lock: !1,
        focus: !0,
        parent: null,
        padding: "10px",
        fixed: !1,
        left: "50%",
        top: "38.2%",
        max: !0,
        min: !0,
        zIndex: 1976,
        resize: !0,
        drag: !0,
        cache: !0,
        data: null,
        extendDrag: !1
    };
    var b, x = "setCapture" in g,
    k = "onlosecapture" in g;
    w.dragEvent = {
        onstart: l,
        start: function(e) {
            var t = w.dragEvent;
            return _$doc.bind("mousemove", t.move).bind("mouseup", t.end),
            t._sClientX = e.clientX,
            t._sClientY = e.clientY,
            t.onstart(e.clientX, e.clientY),
            !1
        },
        onmove: l,
        move: function(e) {
            var t = w.dragEvent;
            return t.onmove(e.clientX - t._sClientX, e.clientY - t._sClientY),
            !1
        },
        onend: l,
        end: function(e) {
            var t = w.dragEvent;
            return _$doc.unbind("mousemove", t.move).unbind("mouseup", t.end),
            t.onend(e.clientX, e.clientY),
            !1
        }
    },
    b = function(t) {
        var i, n, a, o, l, c, d = w.focus,
        u = d.config,
        p = d.DOM,
        f = p.wrap[0],
        h = p.title,
        g = p.main[0],
        v = w.dragEvent,
        y = "getSelection" in m ?
        function() {
            m.getSelection().removeAllRanges()
        }: function() {
            try {
                r.selection.empty()
            } catch(e) {}
        };
        v.onstart = function(e, t) {
            c ? (n = g.offsetWidth, a = g.offsetHeight) : (o = f.offsetLeft, l = f.offsetTop),
            _$doc.bind("dblclick", v.end),
            !s && k ? h.bind("losecapture", v.end) : _$top.bind("blur", v.end),
            x && h[0].setCapture(),
            p.border.addClass("ui_state_drag"),
            d.focus()
        },
        v.onmove = function(t, r) {
            if (c) {
                var s = f.style,
                p = g.style,
                h = t + n,
                m = r + a;
                s.width = "auto",
                u.width = p.width = Math.max(0, h) + "px",
                s.width = f.offsetWidth + "px",
                u.height = p.height = Math.max(0, m) + "px",
                d._load && e(d._load).css({
                    width: p.width,
                    height: p.height
                })
            } else {
                var p = f.style,
                v = t + o,
                w = r + l;
                u.left = Math.max(i.minX, Math.min(i.maxX, v)),
                u.top = Math.max(i.minY, Math.min(i.maxY, w)),
                p.left = u.left + "px",
                p.top = u.top + "px"
            }
            y()
        },
        v.onend = function(e, t) {
            _$doc.unbind("dblclick", v.end),
            !s && k ? h.unbind("losecapture", v.end) : _$top.unbind("blur", v.end),
            x && h[0].releaseCapture(),
            s && d._autoPositionType(),
            p.border.removeClass("ui_state_drag")
        },
        c = t.target === p.rb[0],
        i = function(e) {
            var t = f.offsetWidth,
            i = h[0].offsetHeight || 20,
            n = _$top.width(),
            a = _$top.height(),
            o = e ? 0 : _$top.scrollLeft(),
            r = e ? 0 : _$top.scrollTop();
            return maxX = n - t + o,
            maxY = a - i + r,
            {
                minX: o,
                minY: r,
                maxX: maxX,
                maxY: maxY
            }
        } ("fixed" === f.style.position),
        v.start(t)
    },
    e(function() {
        setTimeout(function() {
            c || w({
                left: "-9999em",
                time: 9,
                fixed: !1,
                lock: !1,
                focus: !1
            })
        },
        150),
        w.setting.extendDrag &&
        function(e) {
            var t = r.createElement("div"),
            i = t.style,
            n = s ? "absolute": "fixed";
            t.id = "ldg_dragmask",
            i.cssText = "display:none;position:" + n + ";left:0;top:0;width:100%;height:100%;cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF;pointer-events:none;",
            r.body.appendChild(t),
            e._start = e.start,
            e._end = e.end,
            e.start = function() {
                var t = w.focus,
                a = t.DOM.main[0],
                o = t.iframe;
                e._start.apply(this, arguments),
                i.display = "block",
                i.zIndex = w.setting.zIndex + 3,
                "absolute" === n && (i.width = _$top.width() + "px", i.height = _$top.height() + "px", i.left = _$doc.scrollLeft() + "px", i.top = _$doc.scrollTop() + "px"),
                o && a.offsetWidth * a.offsetHeight > 307200 && (a.style.visibility = "hidden")
            },
            e.end = function() {
                var t = w.focus;
                e._end.apply(this, arguments),
                i.display = "none",
                t && (t.DOM.main[0].style.visibility = "visible")
            }
        } (w.dragEvent)
    }),
    e.fn.dialog = function() {
        var e = arguments;
        return this.bind("click",
        function() {
            return w.apply(this, e),
            !1
        }),
        this
    },
    t.lhgdialog = e.dialog = w
} (this.jQuery || this.lhgcore, this),
function(e, t, i) {
    var n = function() {
        return t.setting.zIndex
    };
    t.alert = function(e, i, a) {
        return t({
            title: e.title || "警告",
            id: e.id || "Alert",
            zIndex: n(),
            icon: e.icon || "alert.gif",
            fixed: e.fixed || !0,
            lock: e.lock || !0,
            content: e.content || "",
            ok: !0,
            resize: !1,
            close: i,
            parent: a || null
        })
    },
    t.confirm = function(e, i, a, o) {
        return t({
            title: e.title || "确认",
            id: "confirm.gif",
            zIndex: n(),
            icon: e.icon,
            fixed: !0,
            lock: !0,
            content: e.content,
            resize: !1,
            min: !1,
            max: !1,
            okVal: e.okVal || "确认",
            cancelVal: e.cancelVal || "取消",
            parent: o || null,
            ok: function(e) {
                return i.call(this, e)
            },
            cancel: function(e) {
                return a && a.call(this, e)
            }
        })
    },
    t.prompt = function(e, i, a, o) {
        a = a || "";
        var r;
        return t({
            title: "提问",
            id: "Prompt",
            zIndex: n(),
            icon: "prompt.gif",
            fixed: !0,
            lock: !0,
            parent: o || null,
            content: ['<div style="margin-bottom:5px;font-size:12px">', e, "</div>", "<div>", '<input value="', a, '" style="width:18em;padding:6px 4px" />', "</div>"].join(""),
            init: function() {
                r = this.DOM.content[0].getElementsByTagName("input")[0],
                r.select(),
                r.focus()
            },
            ok: function(e) {
                return i && i.call(this, r.value, e)
            },
            cancel: !0
        })
    },
    t.tips = function(e, i, a, o) {
        var r = a ?
        function() {
            this.DOM.icon[0].innerHTML = '<img src="' + this.config.path + "skins/icons/" + a + '" class="ui_icon_bg"/>',
            this.DOM.icon[0].style.display = "",
            o && (this.config.close = o)
        }: function() {
            this.DOM.icon[0].style.display = "none",
            o && (this.config.close = o)
        };
        return t({
            id: "Tips",
            zIndex: n(),
            title: !1,
            cancel: !1,
            fixed: !0,
            lock: !1,
            resize: !1
        }).content(e).time(i || 1.5, r)
    }
} (this.jQuery || this.lhgcore, this.lhgdialog),
window.zhuge = window.zhuge || [],
window.zhuge.methods = "_init debug identify track trackLink trackForm page".split(" "),
window.zhuge.factory = function(e) {
    return function() {
        var t = Array.prototype.slice.call(arguments);
        return t.unshift(e),
        window.zhuge.push(t),
        window.zhuge
    }
};
for (var i = 0; i < window.zhuge.methods.length; i++) {
    var key = window.zhuge.methods[i];
    window.zhuge[key] = window.zhuge.factory(key)
}
window.zhuge.load = function(e, t) {
    if (!document.getElementById("zhuge-js")) {
        var i = document.createElement("script"),
        n = new Date,
        a = n.getFullYear().toString() + n.getMonth().toString() + n.getDate().toString();
        i.type = "text/javascript",
        i.id = "zhuge-js",
        i.async = !0,
        i.src = ("http:" == location.protocol ? "http://sdk.zhugeio.com/zhuge-lastest.min.js?v=": "https://zgsdk.zhugeio.com/zhuge-lastest.min.js?v=") + a;
        var o = document.getElementsByTagName("script")[0];
        o.parentNode.insertBefore(i, o),
        window.zhuge._init(e, t)
    }
},
window.zhuge.load("18f5038ab49c4ae4918641ae36d67496"),
window.loginUserId && (zhuge.identify(String(window.loginUserId)), console.log(window.loginUserId)),
function(e, t, i, n) {
    var a = e(t);
    e.fn.lazyload = function(o) {
        var r, s = this,
        l = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: t,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        function c() {
            var t = 0;
            s.each(function() {
                var i = e(this);
                if (!l.skip_invisible || i.is(":visible")) if (e.abovethetop(this, l) || e.leftofbegin(this, l));
                else if (e.belowthefold(this, l) || e.rightoffold(this, l)) {
                    if (++t > l.failure_limit) return ! 1
                } else i.trigger("appear"),
                t = 0
            })
        }
        return o && (n !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), n !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), e.extend(l, o)),
        r = l.container === n || l.container === t ? a: e(l.container),
        0 === l.event.indexOf("scroll") && r.bind(l.event,
        function() {
            return c()
        }),
        this.each(function() {
            var t = this,
            i = e(t);
            t.loaded = !1,
            i.attr("src") !== n && i.attr("src") !== !1 || i.is("img") && i.attr("src", l.placeholder),
            i.one("appear",
            function() {
                if (!this.loaded) {
                    if (l.appear) {
                        var n = s.length;
                        l.appear.call(t, n, l)
                    }
                    e("<img />").bind("load",
                    function() {
                        var n = i.attr("data-" + l.data_attribute);
                        i.hide(),
                        i.is("img") ? i.attr("src", n) : i.css("background-image", "url('" + n + "')"),
                        i[l.effect](l.effect_speed),
                        t.loaded = !0;
                        var a = e.grep(s,
                        function(e) {
                            return ! e.loaded
                        });
                        if (s = e(a), l.load) {
                            var o = s.length;
                            l.load.call(t, o, l)
                        }
                    }).attr("src", i.attr("data-" + l.data_attribute))
                }
            }),
            0 !== l.event.indexOf("scroll") && i.bind(l.event,
            function() {
                t.loaded || i.trigger("appear")
            })
        }),
        a.bind("resize",
        function() {
            c()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && a.bind("pageshow",
        function(t) {
            t.originalEvent && t.originalEvent.persisted && s.each(function() {
                e(this).trigger("appear")
            })
        }),
        e(i).ready(function() {
            c()
        }),
        this
    },
    e.belowthefold = function(i, o) {
        var r;
        return r = o.container === n || o.container === t ? (t.innerHeight ? t.innerHeight: a.height()) + a.scrollTop() : e(o.container).offset().top + e(o.container).height(),
        r <= e(i).offset().top - o.threshold
    },
    e.rightoffold = function(i, o) {
        var r;
        return r = o.container === n || o.container === t ? a.width() + a.scrollLeft() : e(o.container).offset().left + e(o.container).width(),
        r <= e(i).offset().left - o.threshold
    },
    e.abovethetop = function(i, o) {
        var r;
        return r = o.container === n || o.container === t ? a.scrollTop() : e(o.container).offset().top,
        r >= e(i).offset().top + o.threshold + e(i).height()
    },
    e.leftofbegin = function(i, o) {
        var r;
        return r = o.container === n || o.container === t ? a.scrollLeft() : e(o.container).offset().left,
        r >= e(i).offset().left + o.threshold + e(i).width()
    },
    e.inviewport = function(t, i) {
        return ! (e.rightoffold(t, i) || e.leftofbegin(t, i) || e.belowthefold(t, i) || e.abovethetop(t, i))
    },
    e.extend(e.expr[":"], {
        "below-the-fold": function(t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function(t) {
            return ! e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function(t) {
            return ! e.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function(t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function(t) {
            return ! e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function(t) {
            return ! e.rightoffold(t, {
                threshold: 0
            })
        }
    })
} (jQuery, window, document),
$.fn.rankStar = function(e, t, i) {
    var n = $(this),
    a = n.find("ul");
    void 0 == e ? e = 0 : "number" == typeof e ? e: e = 1 * e;
    for (var o = e % 1 != 0,
    r = (e - e % 1) / 1, s = "", l = 0, c = 0; c < r; c++) s += '<li class="full"></li>',
    l++;
    if (o && (s += '<li class="half"></li>', l++), l < t) for (var d = t - l,
    c = 0; c < d; c++) s += '<li class="empty"></li>',
    l++;
    a.html(s),
    1 == i && n.on("touchend", "li", {
        root: n
    },
    function(e) {
        var t = $(this),
        i = t.parent().find("li"),
        n = i.index(t);
        i.removeClass("full").addClass("empty");
        for (var a = 0; a <= n; a++) i.eq(a).removeClass("empty").addClass("full");
        e.data.root.attr("data-star", 1 * n + 1)
    })
},
!
function() {
    "use strict";
    function e(e) {
        e.fn.swiper = function(t) {
            var n;
            return e(this).each(function() {
                var e = new i(this, t);
                n || (n = e)
            }),
            n
        }
    }
    var t, i = function(e, n) {
        function a() {
            return "horizontal" === v.params.direction
        }
        function o(e) {
            return Math.floor(e)
        }
        function r() {
            v.autoplayTimeoutId = setTimeout(function() {
                v.params.loop ? (v.fixLoop(), v._slideNext()) : v.isEnd ? n.autoplayStopOnLast ? v.stopAutoplay() : v._slideTo(0) : v._slideNext()
            },
            v.params.autoplay)
        }
        function s(e, i) {
            var n = t(e.target);
            if (!n.is(i)) if ("string" == typeof i) n = n.parents(i);
            else if (i.nodeType) {
                var a;
                return n.parents().each(function(e, t) {
                    t === i && (a = i)
                }),
                a ? i: void 0
            }
            return 0 === n.length ? void 0 : n[0]
        }
        function l(e, t) {
            t = t || {};
            var i = window.MutationObserver || window.WebkitMutationObserver,
            n = new i(function(e) {
                e.forEach(function(e) {
                    v.onResize(!0),
                    v.emit("onObserverUpdate", v, e)
                })
            });
            n.observe(e, {
                attributes: "undefined" == typeof t.attributes || t.attributes,
                childList: "undefined" == typeof t.childList || t.childList,
                characterData: "undefined" == typeof t.characterData || t.characterData
            }),
            v.observers.push(n)
        }
        function c(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!v.params.allowSwipeToNext && (a() && 39 === t || !a() && 40 === t)) return ! 1;
            if (!v.params.allowSwipeToPrev && (a() && 37 === t || !a() && 38 === t)) return ! 1;
            if (! (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var i = !1;
                    if (v.container.parents(".swiper-slide").length > 0 && 0 === v.container.parents(".swiper-slide-active").length) return;
                    var n = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    },
                    o = window.innerWidth,
                    r = window.innerHeight,
                    s = v.container.offset();
                    v.rtl && (s.left = s.left - v.container[0].scrollLeft);
                    for (var l = [[s.left, s.top], [s.left + v.width, s.top], [s.left, s.top + v.height], [s.left + v.width, s.top + v.height]], c = 0; c < l.length; c++) {
                        var d = l[c];
                        d[0] >= n.left && d[0] <= n.left + o && d[1] >= n.top && d[1] <= n.top + r && (i = !0)
                    }
                    if (!i) return
                }
                a() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !v.rtl || 37 === t && v.rtl) && v.slideNext(), (37 === t && !v.rtl || 39 === t && v.rtl) && v.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && v.slideNext(), 38 === t && v.slidePrev())
            }
        }
        function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = v.mousewheel.event,
            i = 0;
            if (e.detail) i = -e.detail;
            else if ("mousewheel" === t) if (v.params.mousewheelForceToAxis) if (a()) {
                if (! (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                i = e.wheelDeltaX
            } else {
                if (! (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                i = e.wheelDeltaY
            } else i = e.wheelDelta;
            else if ("DOMMouseScroll" === t) i = -e.detail;
            else if ("wheel" === t) if (v.params.mousewheelForceToAxis) if (a()) {
                if (! (Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                i = -e.deltaX
            } else {
                if (! (Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                i = -e.deltaY
            } else i = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX: -e.deltaY;
            if (v.params.mousewheelInvert && (i = -i), v.params.freeMode) {
                var n = v.getWrapperTranslate() + i * v.params.mousewheelSensitivity;
                if (n > 0 && (n = 0), n < v.maxTranslate() && (n = v.maxTranslate()), v.setWrapperTransition(0), v.setWrapperTranslate(n), v.updateProgress(), v.updateActiveIndex(), v.params.freeModeSticky && (clearTimeout(v.mousewheel.timeout), v.mousewheel.timeout = setTimeout(function() {
                    v.slideReset()
                },
                300)), 0 === n || n === v.maxTranslate()) return
            } else {
                if ((new window.Date).getTime() - v.mousewheel.lastScrollTime > 60) if (0 > i) if (v.isEnd && !v.params.loop || v.animating) {
                    if (v.params.mousewheelReleaseOnEdges) return ! 0
                } else v.slideNext();
                else if (v.isBeginning && !v.params.loop || v.animating) {
                    if (v.params.mousewheelReleaseOnEdges) return ! 0
                } else v.slidePrev();
                v.mousewheel.lastScrollTime = (new window.Date).getTime()
            }
            return v.params.autoplay && v.stopAutoplay(),
            e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            !1
        }
        function u(e, i) {
            e = t(e);
            var n, o, r;
            n = e.attr("data-swiper-parallax") || "0",
            o = e.attr("data-swiper-parallax-x"),
            r = e.attr("data-swiper-parallax-y"),
            o || r ? (o = o || "0", r = r || "0") : a() ? (o = n, r = "0") : (r = n, o = "0"),
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i + "%": o * i + "px",
            r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i + "%": r * i + "px",
            e.transform("translate3d(" + o + ", " + r + ",0px)")
        }
        function p(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
            e
        }
        if (! (this instanceof i)) return new i(e, n);
        var f = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            scrollbar: null,
            scrollbarHide: !0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            hashnav: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationHiddenClass: "swiper-pagination-hidden",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        },
        h = n && n.virtualTranslate;
        n = n || {};
        for (var m in f) if ("undefined" == typeof n[m]) n[m] = f[m];
        else if ("object" == typeof n[m]) for (var g in f[m])"undefined" == typeof n[m][g] && (n[m][g] = f[m][g]);
        var v = this;
        if (v.version = "3.1.0", v.params = n, v.classNames = [], "undefined" != typeof t && "undefined" != typeof Dom7 && (t = Dom7), ("undefined" != typeof t || (t = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery: Dom7)) && (v.$ = t, v.container = t(e), 0 !== v.container.length)) {
            if (v.container.length > 1) return void v.container.each(function() {
                new i(this, n)
            });
            v.container[0].swiper = v,
            v.container.data("swiper", v),
            v.classNames.push("swiper-container-" + v.params.direction),
            v.params.freeMode && v.classNames.push("swiper-container-free-mode"),
            v.support.flexbox || (v.classNames.push("swiper-container-no-flexbox"), v.params.slidesPerColumn = 1),
            (v.params.parallax || v.params.watchSlidesVisibility) && (v.params.watchSlidesProgress = !0),
            ["cube", "coverflow"].indexOf(v.params.effect) >= 0 && (v.support.transforms3d ? (v.params.watchSlidesProgress = !0, v.classNames.push("swiper-container-3d")) : v.params.effect = "slide"),
            "slide" !== v.params.effect && v.classNames.push("swiper-container-" + v.params.effect),
            "cube" === v.params.effect && (v.params.resistanceRatio = 0, v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.centeredSlides = !1, v.params.spaceBetween = 0, v.params.virtualTranslate = !0, v.params.setWrapperSize = !1),
            "fade" === v.params.effect && (v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.watchSlidesProgress = !0, v.params.spaceBetween = 0, "undefined" == typeof h && (v.params.virtualTranslate = !0)),
            v.params.grabCursor && v.support.touch && (v.params.grabCursor = !1),
            v.wrapper = v.container.children("." + v.params.wrapperClass),
            v.params.pagination && (v.paginationContainer = t(v.params.pagination), v.params.paginationClickable && v.paginationContainer.addClass("swiper-pagination-clickable")),
            v.rtl = a() && ("rtl" === v.container[0].dir.toLowerCase() || "rtl" === v.container.css("direction")),
            v.rtl && v.classNames.push("swiper-container-rtl"),
            v.rtl && (v.wrongRTL = "-webkit-box" === v.wrapper.css("display")),
            v.params.slidesPerColumn > 1 && v.classNames.push("swiper-container-multirow"),
            v.device.android && v.classNames.push("swiper-container-android"),
            v.container.addClass(v.classNames.join(" ")),
            v.translate = 0,
            v.progress = 0,
            v.velocity = 0,
            v.lockSwipeToNext = function() {
                v.params.allowSwipeToNext = !1
            },
            v.lockSwipeToPrev = function() {
                v.params.allowSwipeToPrev = !1
            },
            v.lockSwipes = function() {
                v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !1
            },
            v.unlockSwipeToNext = function() {
                v.params.allowSwipeToNext = !0
            },
            v.unlockSwipeToPrev = function() {
                v.params.allowSwipeToPrev = !0
            },
            v.unlockSwipes = function() {
                v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !0
            },
            v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab"),
            v.imagesToLoad = [],
            v.imagesLoaded = 0,
            v.loadImage = function(e, t, i, n) {
                function a() {
                    n && n()
                }
                var o;
                e.complete && i ? a() : t ? (o = new window.Image, o.onload = a, o.onerror = a, o.src = t) : a()
            },
            v.preloadImages = function() {
                function e() {
                    "undefined" != typeof v && null !== v && (void 0 !== v.imagesLoaded && v.imagesLoaded++, v.imagesLoaded === v.imagesToLoad.length && (v.params.updateOnImagesReady && v.update(), v.emit("onImagesReady", v)))
                }
                v.imagesToLoad = v.container.find("img");
                for (var t = 0; t < v.imagesToLoad.length; t++) v.loadImage(v.imagesToLoad[t], v.imagesToLoad[t].currentSrc || v.imagesToLoad[t].getAttribute("src"), !0, e)
            },
            v.autoplayTimeoutId = void 0,
            v.autoplaying = !1,
            v.autoplayPaused = !1,
            v.startAutoplay = function() {
                return "undefined" == typeof v.autoplayTimeoutId && ( !! v.params.autoplay && (!v.autoplaying && (v.autoplaying = !0, v.emit("onAutoplayStart", v), void r())))
            },
            v.stopAutoplay = function(e) {
                v.autoplayTimeoutId && (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplaying = !1, v.autoplayTimeoutId = void 0, v.emit("onAutoplayStop", v))
            },
            v.pauseAutoplay = function(e) {
                v.autoplayPaused || (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplayPaused = !0, 0 === e ? (v.autoplayPaused = !1, r()) : v.wrapper.transitionEnd(function() {
                    v && (v.autoplayPaused = !1, v.autoplaying ? r() : v.stopAutoplay())
                }))
            },
            v.minTranslate = function() {
                return - v.snapGrid[0]
            },
            v.maxTranslate = function() {
                return - v.snapGrid[v.snapGrid.length - 1]
            },
            v.updateContainerSize = function() {
                var e, t;
                e = "undefined" != typeof v.params.width ? v.params.width: v.container[0].clientWidth,
                t = "undefined" != typeof v.params.height ? v.params.height: v.container[0].clientHeight,
                0 === e && a() || 0 === t && !a() || (e = e - parseInt(v.container.css("padding-left"), 10) - parseInt(v.container.css("padding-right"), 10), t = t - parseInt(v.container.css("padding-top"), 10) - parseInt(v.container.css("padding-bottom"), 10), v.width = e, v.height = t, v.size = a() ? v.width: v.height)
            },
            v.updateSlidesSize = function() {
                v.slides = v.wrapper.children("." + v.params.slideClass),
                v.snapGrid = [],
                v.slidesGrid = [],
                v.slidesSizesGrid = [];
                var e, t = v.params.spaceBetween,
                i = -v.params.slidesOffsetBefore,
                n = 0,
                r = 0;
                "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * v.size),
                v.virtualSize = -t,
                v.slides.css(v.rtl ? {
                    marginLeft: "",
                    marginTop: ""
                }: {
                    marginRight: "",
                    marginBottom: ""
                });
                var s;
                v.params.slidesPerColumn > 1 && (s = Math.floor(v.slides.length / v.params.slidesPerColumn) === v.slides.length / v.params.slidesPerColumn ? v.slides.length: Math.ceil(v.slides.length / v.params.slidesPerColumn) * v.params.slidesPerColumn);
                var l, c = v.params.slidesPerColumn,
                d = s / c,
                u = d - (v.params.slidesPerColumn * d - v.slides.length);
                for (e = 0; e < v.slides.length; e++) {
                    l = 0;
                    var p = v.slides.eq(e);
                    if (v.params.slidesPerColumn > 1) {
                        var f, h, m;
                        "column" === v.params.slidesPerColumnFill ? (h = Math.floor(e / c), m = e - h * c, (h > u || h === u && m === c - 1) && ++m >= c && (m = 0, h++), f = h + m * s / c, p.css({
                            "-webkit-box-ordinal-group": f,
                            "-moz-box-ordinal-group": f,
                            "-ms-flex-order": f,
                            "-webkit-order": f,
                            order: f
                        })) : (m = Math.floor(e / d), h = e - m * d),
                        p.css({
                            "margin-top": 0 !== m && v.params.spaceBetween && v.params.spaceBetween + "px"
                        }).attr("data-swiper-column", h).attr("data-swiper-row", m)
                    }
                    "none" !== p.css("display") && ("auto" === v.params.slidesPerView ? (l = a() ? p.outerWidth(!0) : p.outerHeight(!0), v.params.roundLengths && (l = o(l))) : (l = (v.size - (v.params.slidesPerView - 1) * t) / v.params.slidesPerView, v.params.roundLengths && (l = o(l)), a() ? v.slides[e].style.width = l + "px": v.slides[e].style.height = l + "px"), v.slides[e].swiperSlideSize = l, v.slidesSizesGrid.push(l), v.params.centeredSlides ? (i = i + l / 2 + n / 2 + t, 0 === e && (i = i - v.size / 2 - t), Math.abs(i) < .001 && (i = 0), r % v.params.slidesPerGroup === 0 && v.snapGrid.push(i), v.slidesGrid.push(i)) : (r % v.params.slidesPerGroup === 0 && v.snapGrid.push(i), v.slidesGrid.push(i), i = i + l + t), v.virtualSize += l + t, n = l, r++)
                }
                v.virtualSize = Math.max(v.virtualSize, v.size) + v.params.slidesOffsetAfter;
                var g;
                if (v.rtl && v.wrongRTL && ("slide" === v.params.effect || "coverflow" === v.params.effect) && v.wrapper.css({
                    width: v.virtualSize + v.params.spaceBetween + "px"
                }), (!v.support.flexbox || v.params.setWrapperSize) && v.wrapper.css(a() ? {
                    width: v.virtualSize + v.params.spaceBetween + "px"
                }: {
                    height: v.virtualSize + v.params.spaceBetween + "px"
                }), v.params.slidesPerColumn > 1 && (v.virtualSize = (l + v.params.spaceBetween) * s, v.virtualSize = Math.ceil(v.virtualSize / v.params.slidesPerColumn) - v.params.spaceBetween, v.wrapper.css({
                    width: v.virtualSize + v.params.spaceBetween + "px"
                }), v.params.centeredSlides)) {
                    for (g = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] < v.virtualSize + v.snapGrid[0] && g.push(v.snapGrid[e]);
                    v.snapGrid = g
                }
                if (!v.params.centeredSlides) {
                    for (g = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] <= v.virtualSize - v.size && g.push(v.snapGrid[e]);
                    v.snapGrid = g,
                    Math.floor(v.virtualSize - v.size) > Math.floor(v.snapGrid[v.snapGrid.length - 1]) && v.snapGrid.push(v.virtualSize - v.size)
                }
                0 === v.snapGrid.length && (v.snapGrid = [0]),
                0 !== v.params.spaceBetween && v.slides.css(a() ? v.rtl ? {
                    marginLeft: t + "px"
                }: {
                    marginRight: t + "px"
                }: {
                    marginBottom: t + "px"
                }),
                v.params.watchSlidesProgress && v.updateSlidesOffset()
            },
            v.updateSlidesOffset = function() {
                for (var e = 0; e < v.slides.length; e++) v.slides[e].swiperSlideOffset = a() ? v.slides[e].offsetLeft: v.slides[e].offsetTop
            },
            v.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = v.translate || 0), 0 !== v.slides.length) {
                    "undefined" == typeof v.slides[0].swiperSlideOffset && v.updateSlidesOffset();
                    var t = -e;
                    v.rtl && (t = e),
                    v.container[0].getBoundingClientRect(),
                    a() ? "left": "top",
                    a() ? "right": "bottom",
                    v.slides.removeClass(v.params.slideVisibleClass);
                    for (var i = 0; i < v.slides.length; i++) {
                        var n = v.slides[i],
                        o = (t - n.swiperSlideOffset) / (n.swiperSlideSize + v.params.spaceBetween);
                        if (v.params.watchSlidesVisibility) {
                            var r = -(t - n.swiperSlideOffset),
                            s = r + v.slidesSizesGrid[i],
                            l = r >= 0 && r < v.size || s > 0 && s <= v.size || 0 >= r && s >= v.size;
                            l && v.slides.eq(i).addClass(v.params.slideVisibleClass)
                        }
                        n.progress = v.rtl ? -o: o
                    }
                }
            },
            v.updateProgress = function(e) {
                "undefined" == typeof e && (e = v.translate || 0);
                var t = v.maxTranslate() - v.minTranslate();
                0 === t ? (v.progress = 0, v.isBeginning = v.isEnd = !0) : (v.progress = (e - v.minTranslate()) / t, v.isBeginning = v.progress <= 0, v.isEnd = v.progress >= 1),
                v.isBeginning && v.emit("onReachBeginning", v),
                v.isEnd && v.emit("onReachEnd", v),
                v.params.watchSlidesProgress && v.updateSlidesProgress(e),
                v.emit("onProgress", v, v.progress)
            },
            v.updateActiveIndex = function() {
                var e, t, i, n = v.rtl ? v.translate: -v.translate;
                for (t = 0; t < v.slidesGrid.length; t++)"undefined" != typeof v.slidesGrid[t + 1] ? n >= v.slidesGrid[t] && n < v.slidesGrid[t + 1] - (v.slidesGrid[t + 1] - v.slidesGrid[t]) / 2 ? e = t: n >= v.slidesGrid[t] && n < v.slidesGrid[t + 1] && (e = t + 1) : n >= v.slidesGrid[t] && (e = t); (0 > e || "undefined" == typeof e) && (e = 0),
                i = Math.floor(e / v.params.slidesPerGroup),
                i >= v.snapGrid.length && (i = v.snapGrid.length - 1),
                e !== v.activeIndex && (v.snapIndex = i, v.previousIndex = v.activeIndex, v.activeIndex = e, v.updateClasses())
            },
            v.updateClasses = function() {
                v.slides.removeClass(v.params.slideActiveClass + " " + v.params.slideNextClass + " " + v.params.slidePrevClass);
                var e = v.slides.eq(v.activeIndex);
                if (e.addClass(v.params.slideActiveClass), e.next("." + v.params.slideClass).addClass(v.params.slideNextClass), e.prev("." + v.params.slideClass).addClass(v.params.slidePrevClass), v.bullets && v.bullets.length > 0) {
                    v.bullets.removeClass(v.params.bulletActiveClass);
                    var i;
                    v.params.loop ? (i = Math.ceil(v.activeIndex - v.loopedSlides) / v.params.slidesPerGroup, i > v.slides.length - 1 - 2 * v.loopedSlides && (i -= v.slides.length - 2 * v.loopedSlides), i > v.bullets.length - 1 && (i -= v.bullets.length)) : i = "undefined" != typeof v.snapIndex ? v.snapIndex: v.activeIndex || 0,
                    v.paginationContainer.length > 1 ? v.bullets.each(function() {
                        t(this).index() === i && t(this).addClass(v.params.bulletActiveClass)
                    }) : v.bullets.eq(i).addClass(v.params.bulletActiveClass)
                }
                v.params.loop || (v.params.prevButton && (v.isBeginning ? (t(v.params.prevButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(t(v.params.prevButton))) : (t(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(t(v.params.prevButton)))), v.params.nextButton && (v.isEnd ? (t(v.params.nextButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(t(v.params.nextButton))) : (t(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(t(v.params.nextButton)))))
            },
            v.updatePagination = function() {
                if (v.params.pagination && v.paginationContainer && v.paginationContainer.length > 0) {
                    for (var e = "",
                    t = v.params.loop ? Math.ceil((v.slides.length - 2 * v.loopedSlides) / v.params.slidesPerGroup) : v.snapGrid.length, i = 0; t > i; i++) e += v.params.paginationBulletRender ? v.params.paginationBulletRender(i, v.params.bulletClass) : "<" + v.params.paginationElement + ' class="' + v.params.bulletClass + '"></' + v.params.paginationElement + ">";
                    v.paginationContainer.html(e),
                    v.bullets = v.paginationContainer.find("." + v.params.bulletClass),
                    v.params.paginationClickable && v.params.a11y && v.a11y && v.a11y.initPagination()
                }
            },
            v.update = function(e) {
                function t() {
                    n = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate()),
                    v.setWrapperTranslate(n),
                    v.updateActiveIndex(),
                    v.updateClasses()
                }
                if (v.updateContainerSize(), v.updateSlidesSize(), v.updateProgress(), v.updatePagination(), v.updateClasses(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), e) {
                    var i, n;
                    v.controller && v.controller.spline && (v.controller.spline = void 0),
                    v.params.freeMode ? t() : (i = ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0), i || t())
                }
            },
            v.onResize = function(e) {
                var t = v.params.allowSwipeToPrev,
                i = v.params.allowSwipeToNext;
                if (v.params.allowSwipeToPrev = v.params.allowSwipeToNext = !0, v.updateContainerSize(), v.updateSlidesSize(), ("auto" === v.params.slidesPerView || v.params.freeMode || e) && v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode) {
                    var n = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate());
                    v.setWrapperTranslate(n),
                    v.updateActiveIndex(),
                    v.updateClasses()
                } else v.updateClasses(),
                ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0);
                v.params.allowSwipeToPrev = t,
                v.params.allowSwipeToNext = i
            };
            var y = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? y = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (y = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
            v.touchEvents = {
                start: v.support.touch || !v.params.simulateTouch ? "touchstart": y[0],
                move: v.support.touch || !v.params.simulateTouch ? "touchmove": y[1],
                end: v.support.touch || !v.params.simulateTouch ? "touchend": y[2]
            },
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === v.params.touchEventsTarget ? v.container: v.wrapper).addClass("swiper-wp8-" + v.params.direction),
            v.initEvents = function(e) {
                var i = e ? "off": "on",
                a = e ? "removeEventListener": "addEventListener",
                o = "container" === v.params.touchEventsTarget ? v.container[0] : v.wrapper[0],
                r = v.support.touch ? o: document,
                s = !!v.params.nested;
                v.browser.ie ? (o[a](v.touchEvents.start, v.onTouchStart, !1), r[a](v.touchEvents.move, v.onTouchMove, s), r[a](v.touchEvents.end, v.onTouchEnd, !1)) : (v.support.touch && (o[a](v.touchEvents.start, v.onTouchStart, !1), o[a](v.touchEvents.move, v.onTouchMove, s), o[a](v.touchEvents.end, v.onTouchEnd, !1)), !n.simulateTouch || v.device.ios || v.device.android || (o[a]("mousedown", v.onTouchStart, !1), document[a]("mousemove", v.onTouchMove, s), document[a]("mouseup", v.onTouchEnd, !1))),
                window[a]("resize", v.onResize),
                v.params.nextButton && (t(v.params.nextButton)[i]("click", v.onClickNext), v.params.a11y && v.a11y && t(v.params.nextButton)[i]("keydown", v.a11y.onEnterKey)),
                v.params.prevButton && (t(v.params.prevButton)[i]("click", v.onClickPrev), v.params.a11y && v.a11y && t(v.params.prevButton)[i]("keydown", v.a11y.onEnterKey)),
                v.params.pagination && v.params.paginationClickable && (t(v.paginationContainer)[i]("click", "." + v.params.bulletClass, v.onClickIndex), v.params.a11y && v.a11y && t(v.paginationContainer)[i]("keydown", "." + v.params.bulletClass, v.a11y.onEnterKey)),
                (v.params.preventClicks || v.params.preventClicksPropagation) && o[a]("click", v.preventClicks, !0)
            },
            v.attachEvents = function(e) {
                v.initEvents()
            },
            v.detachEvents = function() {
                v.initEvents(!0)
            },
            v.allowClick = !0,
            v.preventClicks = function(e) {
                v.allowClick || (v.params.preventClicks && e.preventDefault(), v.params.preventClicksPropagation && v.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            },
            v.onClickNext = function(e) {
                e.preventDefault(),
                (!v.isEnd || v.params.loop) && v.slideNext()
            },
            v.onClickPrev = function(e) {
                e.preventDefault(),
                (!v.isBeginning || v.params.loop) && v.slidePrev()
            },
            v.onClickIndex = function(e) {
                e.preventDefault();
                var i = t(this).index() * v.params.slidesPerGroup;
                v.params.loop && (i += v.loopedSlides),
                v.slideTo(i)
            },
            v.updateClickedSlide = function(e) {
                var i = s(e, "." + v.params.slideClass),
                n = !1;
                if (i) for (var a = 0; a < v.slides.length; a++) v.slides[a] === i && (n = !0);
                if (!i || !n) return v.clickedSlide = void 0,
                void(v.clickedIndex = void 0);
                if (v.clickedSlide = i, v.clickedIndex = t(i).index(), v.params.slideToClickedSlide && void 0 !== v.clickedIndex && v.clickedIndex !== v.activeIndex) {
                    var o, r = v.clickedIndex;
                    if (v.params.loop) if (o = t(v.clickedSlide).attr("data-swiper-slide-index"), r > v.slides.length - v.params.slidesPerView) v.fixLoop(),
                    r = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + o + '"]').eq(0).index(),
                    setTimeout(function() {
                        v.slideTo(r)
                    },
                    0);
                    else if (r < v.params.slidesPerView - 1) {
                        v.fixLoop();
                        var l = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + o + '"]');
                        r = l.eq(l.length - 1).index(),
                        setTimeout(function() {
                            v.slideTo(r)
                        },
                        0)
                    } else v.slideTo(r);
                    else v.slideTo(r)
                }
            };
            var w, b, x, k, T, C, $, S, E, P = "input, select, textarea, button",
            _ = Date.now(),
            A = [];
            v.animating = !1,
            v.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var I, L;
            if (v.onTouchStart = function(e) {
                if (e.originalEvent && (e = e.originalEvent), I = "touchstart" === e.type, I || !("which" in e) || 3 !== e.which) {
                    if (v.params.noSwiping && s(e, "." + v.params.noSwipingClass)) return void(v.allowClick = !0);
                    if (!v.params.swipeHandler || s(e, v.params.swipeHandler)) {
                        var i = v.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX: e.pageX,
                        n = v.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY: e.pageY;
                        if (! (v.device.ios && v.params.iOSEdgeSwipeDetection && i <= v.params.iOSEdgeSwipeThreshold)) {
                            if (w = !0, b = !1, k = void 0, L = void 0, v.touches.startX = i, v.touches.startY = n, x = Date.now(), v.allowClick = !0, v.updateContainerSize(), v.swipeDirection = void 0, v.params.threshold > 0 && ($ = !1), "touchstart" !== e.type) {
                                var a = !0;
                                t(e.target).is(P) && (a = !1),
                                document.activeElement && t(document.activeElement).is(P) && document.activeElement.blur(),
                                a && e.preventDefault()
                            }
                            v.emit("onTouchStart", v, e)
                        }
                    }
                }
            },
            v.onTouchMove = function(e) {
                if (e.originalEvent && (e = e.originalEvent), !(I && "mousemove" === e.type || e.preventedByNestedSwiper)) {
                    if (v.params.onlyExternal) return v.allowClick = !1,
                    void(w && (v.touches.startX = v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX, v.touches.startY = v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY, x = Date.now()));
                    if (I && document.activeElement && e.target === document.activeElement && t(e.target).is(P)) return b = !0,
                    void(v.allowClick = !1);
                    if (v.emit("onTouchMove", v, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                        if (v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX, v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY, "undefined" == typeof k) {
                            var i = 180 * Math.atan2(Math.abs(v.touches.currentY - v.touches.startY), Math.abs(v.touches.currentX - v.touches.startX)) / Math.PI;
                            k = a() ? i > v.params.touchAngle: 90 - i > v.params.touchAngle
                        }
                        if (k && v.emit("onTouchMoveOpposite", v, e), "undefined" == typeof L && v.browser.ieTouch && (v.touches.currentX !== v.touches.startX || v.touches.currentY !== v.touches.startY) && (L = !0), w) {
                            if (k) return void(w = !1);
                            if (L || !v.browser.ieTouch) {
                                v.allowClick = !1,
                                v.emit("onSliderMove", v, e),
                                e.preventDefault(),
                                v.params.touchMoveStopPropagation && !v.params.nested && e.stopPropagation(),
                                b || (n.loop && v.fixLoop(), C = v.getWrapperTranslate(), v.setWrapperTransition(0), v.animating && v.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), v.params.autoplay && v.autoplaying && (v.params.autoplayDisableOnInteraction ? v.stopAutoplay() : v.pauseAutoplay()), E = !1, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grabbing", v.container[0].style.cursor = "-moz-grabbin", v.container[0].style.cursor = "grabbing")),
                                b = !0;
                                var o = v.touches.diff = a() ? v.touches.currentX - v.touches.startX: v.touches.currentY - v.touches.startY;
                                o *= v.params.touchRatio,
                                v.rtl && (o = -o),
                                v.swipeDirection = o > 0 ? "prev": "next",
                                T = o + C;
                                var r = !0;
                                if (o > 0 && T > v.minTranslate() ? (r = !1, v.params.resistance && (T = v.minTranslate() - 1 + Math.pow( - v.minTranslate() + C + o, v.params.resistanceRatio))) : 0 > o && T < v.maxTranslate() && (r = !1, v.params.resistance && (T = v.maxTranslate() + 1 - Math.pow(v.maxTranslate() - C - o, v.params.resistanceRatio))), r && (e.preventedByNestedSwiper = !0), !v.params.allowSwipeToNext && "next" === v.swipeDirection && C > T && (T = C), !v.params.allowSwipeToPrev && "prev" === v.swipeDirection && T > C && (T = C), v.params.followFinger) {
                                    if (v.params.threshold > 0) {
                                        if (! (Math.abs(o) > v.params.threshold || $)) return void(T = C);
                                        if (!$) return $ = !0,
                                        v.touches.startX = v.touches.currentX,
                                        v.touches.startY = v.touches.currentY,
                                        T = C,
                                        void(v.touches.diff = a() ? v.touches.currentX - v.touches.startX: v.touches.currentY - v.touches.startY)
                                    } (v.params.freeMode || v.params.watchSlidesProgress) && v.updateActiveIndex(),
                                    v.params.freeMode && (0 === A.length && A.push({
                                        position: v.touches[a() ? "startX": "startY"],
                                        time: x
                                    }), A.push({
                                        position: v.touches[a() ? "currentX": "currentY"],
                                        time: (new window.Date).getTime()
                                    })),
                                    v.updateProgress(T),
                                    v.setWrapperTranslate(T)
                                }
                            }
                        }
                    }
                }
            },
            v.onTouchEnd = function(e) {
                if (e.originalEvent && (e = e.originalEvent), v.emit("onTouchEnd", v, e), w) {
                    v.params.grabCursor && b && w && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab");
                    var i = Date.now(),
                    n = i - x;
                    if (v.allowClick && (v.updateClickedSlide(e), v.emit("onTap", v, e), 300 > n && i - _ > 300 && (S && clearTimeout(S), S = setTimeout(function() {
                        v && (v.params.paginationHide && v.paginationContainer.length > 0 && !t(e.target).hasClass(v.params.bulletClass) && v.paginationContainer.toggleClass(v.params.paginationHiddenClass), v.emit("onClick", v, e))
                    },
                    300)), 300 > n && 300 > i - _ && (S && clearTimeout(S), v.emit("onDoubleTap", v, e))), _ = Date.now(), setTimeout(function() {
                        v && (v.allowClick = !0)
                    },
                    0), !w || !b || !v.swipeDirection || 0 === v.touches.diff || T === C) return void(w = b = !1);
                    w = b = !1;
                    var a;
                    if (a = v.params.followFinger ? v.rtl ? v.translate: -v.translate: -T, v.params.freeMode) {
                        if (a < -v.minTranslate()) return void v.slideTo(v.activeIndex);
                        if (a > -v.maxTranslate()) return void v.slideTo(v.slides.length < v.snapGrid.length ? v.snapGrid.length - 1 : v.slides.length - 1);
                        if (v.params.freeModeMomentum) {
                            if (A.length > 1) {
                                var o = A.pop(),
                                r = A.pop(),
                                s = o.position - r.position,
                                l = o.time - r.time;
                                v.velocity = s / l,
                                v.velocity = v.velocity / 2,
                                Math.abs(v.velocity) < .02 && (v.velocity = 0),
                                (l > 150 || (new window.Date).getTime() - o.time > 300) && (v.velocity = 0)
                            } else v.velocity = 0;
                            A.length = 0;
                            var c = 1e3 * v.params.freeModeMomentumRatio,
                            d = v.velocity * c,
                            u = v.translate + d;
                            v.rtl && (u = -u);
                            var p, f = !1,
                            h = 20 * Math.abs(v.velocity) * v.params.freeModeMomentumBounceRatio;
                            if (u < v.maxTranslate()) v.params.freeModeMomentumBounce ? (u + v.maxTranslate() < -h && (u = v.maxTranslate() - h), p = v.maxTranslate(), f = !0, E = !0) : u = v.maxTranslate();
                            else if (u > v.minTranslate()) v.params.freeModeMomentumBounce ? (u - v.minTranslate() > h && (u = v.minTranslate() + h), p = v.minTranslate(), f = !0, E = !0) : u = v.minTranslate();
                            else if (v.params.freeModeSticky) {
                                var m, g = 0;
                                for (g = 0; g < v.snapGrid.length; g += 1) if (v.snapGrid[g] > -u) {
                                    m = g;
                                    break
                                }
                                u = Math.abs(v.snapGrid[m] - u) < Math.abs(v.snapGrid[m - 1] - u) || "next" === v.swipeDirection ? v.snapGrid[m] : v.snapGrid[m - 1],
                                v.rtl || (u = -u)
                            }
                            if (0 !== v.velocity) c = Math.abs(v.rtl ? ( - u - v.translate) / v.velocity: (u - v.translate) / v.velocity);
                            else if (v.params.freeModeSticky) return void v.slideReset();
                            v.params.freeModeMomentumBounce && f ? (v.updateProgress(p), v.setWrapperTransition(c), v.setWrapperTranslate(u), v.onTransitionStart(), v.animating = !0, v.wrapper.transitionEnd(function() {
                                v && E && (v.emit("onMomentumBounce", v), v.setWrapperTransition(v.params.speed), v.setWrapperTranslate(p), v.wrapper.transitionEnd(function() {
                                    v && v.onTransitionEnd()
                                }))
                            })) : v.velocity ? (v.updateProgress(u), v.setWrapperTransition(c), v.setWrapperTranslate(u), v.onTransitionStart(), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() {
                                v && v.onTransitionEnd()
                            }))) : v.updateProgress(u),
                            v.updateActiveIndex()
                        }
                        return void((!v.params.freeModeMomentum || n >= v.params.longSwipesMs) && (v.updateProgress(), v.updateActiveIndex()))
                    }
                    var y, k = 0,
                    $ = v.slidesSizesGrid[0];
                    for (y = 0; y < v.slidesGrid.length; y += v.params.slidesPerGroup)"undefined" != typeof v.slidesGrid[y + v.params.slidesPerGroup] ? a >= v.slidesGrid[y] && a < v.slidesGrid[y + v.params.slidesPerGroup] && (k = y, $ = v.slidesGrid[y + v.params.slidesPerGroup] - v.slidesGrid[y]) : a >= v.slidesGrid[y] && (k = y, $ = v.slidesGrid[v.slidesGrid.length - 1] - v.slidesGrid[v.slidesGrid.length - 2]);
                    var P = (a - v.slidesGrid[k]) / $;
                    if (n > v.params.longSwipesMs) {
                        if (!v.params.longSwipes) return void v.slideTo(v.activeIndex);
                        "next" === v.swipeDirection && v.slideTo(P >= v.params.longSwipesRatio ? k + v.params.slidesPerGroup: k),
                        "prev" === v.swipeDirection && v.slideTo(P > 1 - v.params.longSwipesRatio ? k + v.params.slidesPerGroup: k)
                    } else {
                        if (!v.params.shortSwipes) return void v.slideTo(v.activeIndex);
                        "next" === v.swipeDirection && v.slideTo(k + v.params.slidesPerGroup),
                        "prev" === v.swipeDirection && v.slideTo(k)
                    }
                }
            },
            v._slideTo = function(e, t) {
                return v.slideTo(e, t, !0, !0)
            },
            v.slideTo = function(e, t, i, n) {
                "undefined" == typeof i && (i = !0),
                "undefined" == typeof e && (e = 0),
                0 > e && (e = 0),
                v.snapIndex = Math.floor(e / v.params.slidesPerGroup),
                v.snapIndex >= v.snapGrid.length && (v.snapIndex = v.snapGrid.length - 1);
                var o = -v.snapGrid[v.snapIndex];
                v.params.autoplay && v.autoplaying && (n || !v.params.autoplayDisableOnInteraction ? v.pauseAutoplay(t) : v.stopAutoplay()),
                v.updateProgress(o);
                for (var r = 0; r < v.slidesGrid.length; r++) - Math.floor(100 * o) >= Math.floor(100 * v.slidesGrid[r]) && (e = r);
                return ! (!v.params.allowSwipeToNext && o < v.translate && o < v.minTranslate()) && (!(!v.params.allowSwipeToPrev && o > v.translate && o > v.maxTranslate() && (v.activeIndex || 0) !== e) && ("undefined" == typeof t && (t = v.params.speed), v.previousIndex = v.activeIndex || 0, v.activeIndex = e, o === v.translate ? (v.updateClasses(), !1) : (v.updateClasses(), v.onTransitionStart(i), a() ? o: 0, a() ? 0 : o, 0 === t ? (v.setWrapperTransition(0), v.setWrapperTranslate(o), v.onTransitionEnd(i)) : (v.setWrapperTransition(t), v.setWrapperTranslate(o), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() {
                    v && v.onTransitionEnd(i)
                }))), !0)))
            },
            v.onTransitionStart = function(e) {
                "undefined" == typeof e && (e = !0),
                v.lazy && v.lazy.onTransitionStart(),
                e && (v.emit("onTransitionStart", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeStart", v))
            },
            v.onTransitionEnd = function(e) {
                v.animating = !1,
                v.setWrapperTransition(0),
                "undefined" == typeof e && (e = !0),
                v.lazy && v.lazy.onTransitionEnd(),
                e && (v.emit("onTransitionEnd", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeEnd", v)),
                v.params.hashnav && v.hashnav && v.hashnav.setHash()
            },
            v.slideNext = function(e, t, i) {
                return v.params.loop ? !v.animating && (v.fixLoop(), v.container[0].clientLeft, v.slideTo(v.activeIndex + v.params.slidesPerGroup, t, e, i)) : v.slideTo(v.activeIndex + v.params.slidesPerGroup, t, e, i)
            },
            v._slideNext = function(e) {
                return v.slideNext(!0, e, !0)
            },
            v.slidePrev = function(e, t, i) {
                return v.params.loop ? !v.animating && (v.fixLoop(), v.container[0].clientLeft, v.slideTo(v.activeIndex - 1, t, e, i)) : v.slideTo(v.activeIndex - 1, t, e, i)
            },
            v._slidePrev = function(e) {
                return v.slidePrev(!0, e, !0)
            },
            v.slideReset = function(e, t, i) {
                return v.slideTo(v.activeIndex, t, e)
            },
            v.setWrapperTransition = function(e, t) {
                v.wrapper.transition(e),
                "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTransition(e),
                v.params.parallax && v.parallax && v.parallax.setTransition(e),
                v.params.scrollbar && v.scrollbar && v.scrollbar.setTransition(e),
                v.params.control && v.controller && v.controller.setTransition(e, t),
                v.emit("onSetTransition", v, e)
            },
            v.setWrapperTranslate = function(e, t, i) {
                var n = 0,
                o = 0,
                r = 0;
                a() ? n = v.rtl ? -e: e: o = e,
                v.params.virtualTranslate || v.wrapper.transform(v.support.transforms3d ? "translate3d(" + n + "px, " + o + "px, " + r + "px)": "translate(" + n + "px, " + o + "px)"),
                v.translate = a() ? n: o,
                t && v.updateActiveIndex(),
                "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTranslate(v.translate),
                v.params.parallax && v.parallax && v.parallax.setTranslate(v.translate),
                v.params.scrollbar && v.scrollbar && v.scrollbar.setTranslate(v.translate),
                v.params.control && v.controller && v.controller.setTranslate(v.translate, i),
                v.emit("onSetTranslate", v, v.translate)
            },
            v.getTranslate = function(e, t) {
                var i, n, a, o;
                return "undefined" == typeof t && (t = "x"),
                v.params.virtualTranslate ? v.rtl ? -v.translate: v.translate: (a = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? o = new window.WebKitCSSMatrix("none" === a.webkitTransform ? "": a.webkitTransform) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = o.toString().split(",")), "x" === t && (n = window.WebKitCSSMatrix ? o.m41: parseFloat(16 === i.length ? i[12] : i[4])), "y" === t && (n = window.WebKitCSSMatrix ? o.m42: parseFloat(16 === i.length ? i[13] : i[5])), v.rtl && n && (n = -n), n || 0)
            },
            v.getWrapperTranslate = function(e) {
                return "undefined" == typeof e && (e = a() ? "x": "y"),
                v.getTranslate(v.wrapper[0], e)
            },
            v.observers = [], v.initObservers = function() {
                if (v.params.observeParents) for (var e = v.container.parents(), t = 0; t < e.length; t++) l(e[t]);
                l(v.container[0], {
                    childList: !1
                }),
                l(v.wrapper[0], {
                    attributes: !1
                })
            },
            v.disconnectObservers = function() {
                for (var e = 0; e < v.observers.length; e++) v.observers[e].disconnect();
                v.observers = []
            },
            v.createLoop = function() {
                v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove();
                var e = v.wrapper.children("." + v.params.slideClass);
                "auto" !== v.params.slidesPerView || v.params.loopedSlides || (v.params.loopedSlides = e.length),
                v.loopedSlides = parseInt(v.params.loopedSlides || v.params.slidesPerView, 10),
                v.loopedSlides = v.loopedSlides + v.params.loopAdditionalSlides,
                v.loopedSlides > e.length && (v.loopedSlides = e.length);
                var i, n = [],
                a = [];
                for (e.each(function(i, o) {
                    var r = t(this);
                    i < v.loopedSlides && a.push(o),
                    i < e.length && i >= e.length - v.loopedSlides && n.push(o),
                    r.attr("data-swiper-slide-index", i)
                }), i = 0; i < a.length; i++) v.wrapper.append(t(a[i].cloneNode(!0)).addClass(v.params.slideDuplicateClass));
                for (i = n.length - 1; i >= 0; i--) v.wrapper.prepend(t(n[i].cloneNode(!0)).addClass(v.params.slideDuplicateClass))
            },
            v.destroyLoop = function() {
                v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove(),
                v.slides.removeAttr("data-swiper-slide-index")
            },
            v.fixLoop = function() {
                var e;
                v.activeIndex < v.loopedSlides ? (e = v.slides.length - 3 * v.loopedSlides + v.activeIndex, e += v.loopedSlides, v.slideTo(e, 0, !1, !0)) : ("auto" === v.params.slidesPerView && v.activeIndex >= 2 * v.loopedSlides || v.activeIndex > v.slides.length - 2 * v.params.slidesPerView) && (e = -v.slides.length + v.activeIndex + v.loopedSlides, e += v.loopedSlides, v.slideTo(e, 0, !1, !0))
            },
            v.appendSlide = function(e) {
                if (v.params.loop && v.destroyLoop(), "object" == typeof e && e.length) for (var t = 0; t < e.length; t++) e[t] && v.wrapper.append(e[t]);
                else v.wrapper.append(e);
                v.params.loop && v.createLoop(),
                v.params.observer && v.support.observer || v.update(!0)
            },
            v.prependSlide = function(e) {
                v.params.loop && v.destroyLoop();
                var t = v.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var i = 0; i < e.length; i++) e[i] && v.wrapper.prepend(e[i]);
                    t = v.activeIndex + e.length
                } else v.wrapper.prepend(e);
                v.params.loop && v.createLoop(),
                v.params.observer && v.support.observer || v.update(!0),
                v.slideTo(t, 0, !1)
            },
            v.removeSlide = function(e) {
                v.params.loop && (v.destroyLoop(), v.slides = v.wrapper.children("." + v.params.slideClass));
                var t, i = v.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var n = 0; n < e.length; n++) t = e[n],
                    v.slides[t] && v.slides.eq(t).remove(),
                    i > t && i--;
                    i = Math.max(i, 0)
                } else t = e,
                v.slides[t] && v.slides.eq(t).remove(),
                i > t && i--,
                i = Math.max(i, 0);
                v.params.loop && v.createLoop(),
                v.params.observer && v.support.observer || v.update(!0),
                v.params.loop ? v.slideTo(i + v.loopedSlides, 0, !1) : v.slideTo(i, 0, !1)
            },
            v.removeAllSlides = function() {
                for (var e = [], t = 0; t < v.slides.length; t++) e.push(t);
                v.removeSlide(e)
            },
            v.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < v.slides.length; e++) {
                            var t = v.slides.eq(e),
                            i = t[0].swiperSlideOffset,
                            n = -i;
                            v.params.virtualTranslate || (n -= v.translate);
                            var o = 0;
                            a() || (o = n, n = 0);
                            var r = v.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: r
                            }).transform("translate3d(" + n + "px, " + o + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (v.slides.transition(e), v.params.virtualTranslate && 0 !== e) {
                            var t = !1;
                            v.slides.transitionEnd(function() {
                                if (!t && v) {
                                    t = !0,
                                    v.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) v.wrapper.trigger(e[i])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var e, i = 0;
                        v.params.cube.shadow && (a() ? (e = v.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), v.wrapper.append(e)), e.css({
                            height: v.width + "px"
                        })) : (e = v.container.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), v.container.append(e))));
                        for (var n = 0; n < v.slides.length; n++) {
                            var o = v.slides.eq(n),
                            r = 90 * n,
                            s = Math.floor(r / 360);
                            v.rtl && (r = -r, s = Math.floor( - r / 360));
                            var l = Math.max(Math.min(o[0].progress, 1), -1),
                            c = 0,
                            d = 0,
                            u = 0;
                            n % 4 === 0 ? (c = 4 * -s * v.size, u = 0) : (n - 1) % 4 === 0 ? (c = 0, u = 4 * -s * v.size) : (n - 2) % 4 === 0 ? (c = v.size + 4 * s * v.size, u = v.size) : (n - 3) % 4 === 0 && (c = -v.size, u = 3 * v.size + 4 * v.size * s),
                            v.rtl && (c = -c),
                            a() || (d = c, c = 0);
                            var p = "rotateX(" + (a() ? 0 : -r) + "deg) rotateY(" + (a() ? r: 0) + "deg) translate3d(" + c + "px, " + d + "px, " + u + "px)";
                            if (1 >= l && l > -1 && (i = 90 * n + 90 * l, v.rtl && (i = 90 * -n - 90 * l)), o.transform(p), v.params.cube.slideShadows) {
                                var f = o.find(a() ? ".swiper-slide-shadow-left": ".swiper-slide-shadow-top"),
                                h = o.find(a() ? ".swiper-slide-shadow-right": ".swiper-slide-shadow-bottom");
                                0 === f.length && (f = t('<div class="swiper-slide-shadow-' + (a() ? "left": "top") + '"></div>'), o.append(f)),
                                0 === h.length && (h = t('<div class="swiper-slide-shadow-' + (a() ? "right": "bottom") + '"></div>'), o.append(h)),
                                o[0].progress,
                                f.length && (f[0].style.opacity = -o[0].progress),
                                h.length && (h[0].style.opacity = o[0].progress)
                            }
                        }
                        if (v.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + v.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + v.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + v.size / 2 + "px",
                            "transform-origin": "50% 50% -" + v.size / 2 + "px"
                        }), v.params.cube.shadow) if (a()) e.transform("translate3d(0px, " + (v.width / 2 + v.params.cube.shadowOffset) + "px, " + -v.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + v.params.cube.shadowScale + ")");
                        else {
                            var m = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                            g = 1.5 - (Math.sin(2 * m * Math.PI / 360) / 2 + Math.cos(2 * m * Math.PI / 360) / 2),
                            y = v.params.cube.shadowScale,
                            w = v.params.cube.shadowScale / g,
                            b = v.params.cube.shadowOffset;
                            e.transform("scale3d(" + y + ", 1, " + w + ") translate3d(0px, " + (v.height / 2 + b) + "px, " + -v.height / 2 / w + "px) rotateX(-90deg)")
                        }
                        var x = v.isSafari || v.isUiWebView ? -v.size / 2 : 0;
                        v.wrapper.transform("translate3d(0px,0," + x + "px) rotateX(" + (a() ? 0 : i) + "deg) rotateY(" + (a() ? -i: 0) + "deg)")
                    },
                    setTransition: function(e) {
                        v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        v.params.cube.shadow && !a() && v.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var e = v.translate,
                        i = a() ? -e + v.width / 2 : -e + v.height / 2, n = a() ? v.params.coverflow.rotate: -v.params.coverflow.rotate, o = v.params.coverflow.depth, r = 0, s = v.slides.length; s > r; r++) {
                            var l = v.slides.eq(r),
                            c = v.slidesSizesGrid[r],
                            d = l[0].swiperSlideOffset,
                            u = (i - d - c / 2) / c * v.params.coverflow.modifier,
                            p = a() ? n * u: 0,
                            f = a() ? 0 : n * u,
                            h = -o * Math.abs(u),
                            m = a() ? 0 : v.params.coverflow.stretch * u,
                            g = a() ? v.params.coverflow.stretch * u: 0;
                            Math.abs(g) < .001 && (g = 0),
                            Math.abs(m) < .001 && (m = 0),
                            Math.abs(h) < .001 && (h = 0),
                            Math.abs(p) < .001 && (p = 0),
                            Math.abs(f) < .001 && (f = 0);
                            var y = "translate3d(" + g + "px," + m + "px," + h + "px)  rotateX(" + f + "deg) rotateY(" + p + "deg)";
                            if (l.transform(y), l[0].style.zIndex = -Math.abs(Math.round(u)) + 1, v.params.coverflow.slideShadows) {
                                var w = l.find(a() ? ".swiper-slide-shadow-left": ".swiper-slide-shadow-top"),
                                b = l.find(a() ? ".swiper-slide-shadow-right": ".swiper-slide-shadow-bottom");
                                0 === w.length && (w = t('<div class="swiper-slide-shadow-' + (a() ? "left": "top") + '"></div>'), l.append(w)),
                                0 === b.length && (b = t('<div class="swiper-slide-shadow-' + (a() ? "right": "bottom") + '"></div>'), l.append(b)),
                                w.length && (w[0].style.opacity = u > 0 ? u: 0),
                                b.length && (b[0].style.opacity = -u > 0 ? -u: 0)
                            }
                        }
                        if (v.browser.ie) {
                            var x = v.wrapper[0].style;
                            x.perspectiveOrigin = i + "px 50%"
                        }
                    },
                    setTransition: function(e) {
                        v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            },
            v.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(e, i) {
                    if ("undefined" != typeof e && ("undefined" == typeof i && (i = !0), 0 !== v.slides.length)) {
                        var n = v.slides.eq(e),
                        a = n.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)"); ! n.hasClass("swiper-lazy") || n.hasClass("swiper-lazy-loaded") || n.hasClass("swiper-lazy-loading") || a.add(n[0]),
                        0 !== a.length && a.each(function() {
                            var e = t(this);
                            e.addClass("swiper-lazy-loading");
                            var a = e.attr("data-background"),
                            o = e.attr("data-src");
                            v.loadImage(e[0], o || a, !1,
                            function() {
                                if (a ? (e.css("background-image", "url(" + a + ")"), e.removeAttr("data-background")) : (e.attr("src", o), e.removeAttr("data-src")), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), n.find(".swiper-lazy-preloader, .preloader").remove(), v.params.loop && i) {
                                    var t = n.attr("data-swiper-slide-index");
                                    if (n.hasClass(v.params.slideDuplicateClass)) {
                                        var r = v.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + v.params.slideDuplicateClass + ")");
                                        v.lazy.loadImageInSlide(r.index(), !1)
                                    } else {
                                        var s = v.wrapper.children("." + v.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                        v.lazy.loadImageInSlide(s.index(), !1)
                                    }
                                }
                                v.emit("onLazyImageReady", v, n[0], e[0])
                            }),
                            v.emit("onLazyImageLoad", v, n[0], e[0])
                        })
                    }
                },
                load: function() {
                    var e;
                    if (v.params.watchSlidesVisibility) v.wrapper.children("." + v.params.slideVisibleClass).each(function() {
                        v.lazy.loadImageInSlide(t(this).index())
                    });
                    else if (v.params.slidesPerView > 1) for (e = v.activeIndex; e < v.activeIndex + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
                    else v.lazy.loadImageInSlide(v.activeIndex);
                    if (v.params.lazyLoadingInPrevNext) if (v.params.slidesPerView > 1) {
                        for (e = v.activeIndex + v.params.slidesPerView; e < v.activeIndex + v.params.slidesPerView + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
                        for (e = v.activeIndex - v.params.slidesPerView; e < v.activeIndex; e++) v.slides[e] && v.lazy.loadImageInSlide(e)
                    } else {
                        var i = v.wrapper.children("." + v.params.slideNextClass);
                        i.length > 0 && v.lazy.loadImageInSlide(i.index());
                        var n = v.wrapper.children("." + v.params.slidePrevClass);
                        n.length > 0 && v.lazy.loadImageInSlide(n.index())
                    }
                },
                onTransitionStart: function() {
                    v.params.lazyLoading && (v.params.lazyLoadingOnTransitionStart || !v.params.lazyLoadingOnTransitionStart && !v.lazy.initialImageLoaded) && v.lazy.load()
                },
                onTransitionEnd: function() {
                    v.params.lazyLoading && !v.params.lazyLoadingOnTransitionStart && v.lazy.load()
                }
            },
            v.scrollbar = {
                set: function() {
                    if (v.params.scrollbar) {
                        var e = v.scrollbar;
                        e.track = t(v.params.scrollbar),
                        e.drag = e.track.find(".swiper-scrollbar-drag"),
                        0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)),
                        e.drag[0].style.width = "",
                        e.drag[0].style.height = "",
                        e.trackSize = a() ? e.track[0].offsetWidth: e.track[0].offsetHeight,
                        e.divider = v.size / v.virtualSize,
                        e.moveDivider = e.divider * (e.trackSize / v.size),
                        e.dragSize = e.trackSize * e.divider,
                        a() ? e.drag[0].style.width = e.dragSize + "px": e.drag[0].style.height = e.dragSize + "px",
                        e.track[0].style.display = e.divider >= 1 ? "none": "",
                        v.params.scrollbarHide && (e.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (v.params.scrollbar) {
                        var e, t = v.scrollbar,
                        i = (v.translate || 0, t.dragSize);
                        e = (t.trackSize - t.dragSize) * v.progress,
                        v.rtl && a() ? (e = -e, e > 0 ? (i = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e)) : 0 > e ? (i = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e),
                        a() ? (t.drag.transform(v.support.transforms3d ? "translate3d(" + e + "px, 0, 0)": "translateX(" + e + "px)"), t.drag[0].style.width = i + "px") : (t.drag.transform(v.support.transforms3d ? "translate3d(0px, " + e + "px, 0)": "translateY(" + e + "px)"), t.drag[0].style.height = i + "px"),
                        v.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                            t.track[0].style.opacity = 0,
                            t.track.transition(400)
                        },
                        1e3))
                    }
                },
                setTransition: function(e) {
                    v.params.scrollbar && v.scrollbar.drag.transition(e)
                }
            },
            v.controller = {
                LinearSpline: function(e, t) {
                    this.x = e,
                    this.y = t,
                    this.lastIndex = e.length - 1;
                    var i, n;
                    this.x.length,
                    this.interpolate = function(e) {
                        return e ? (n = a(this.x, e), i = n - 1, (e - this.x[i]) * (this.y[n] - this.y[i]) / (this.x[n] - this.x[i]) + this.y[i]) : 0
                    };
                    var a = function() {
                        var e, t, i;
                        return function(n, a) {
                            for (t = -1, e = n.length; e - t > 1;) n[i = e + t >> 1] <= a ? t = i: e = i;
                            return e
                        }
                    } ()
                },
                getInterpolateFunction: function(e) {
                    v.controller.spline || (v.controller.spline = v.params.loop ? new v.controller.LinearSpline(v.slidesGrid, e.slidesGrid) : new v.controller.LinearSpline(v.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    function n(t) {
                        e = t.rtl && "horizontal" === t.params.direction ? -v.translate: v.translate,
                        "slide" === v.params.controlBy && (v.controller.getInterpolateFunction(t), o = -v.controller.spline.interpolate( - e)),
                        o && "container" !== v.params.controlBy || (a = (t.maxTranslate() - t.minTranslate()) / (v.maxTranslate() - v.minTranslate()), o = (e - v.minTranslate()) * a + t.minTranslate()),
                        v.params.controlInverse && (o = t.maxTranslate() - o),
                        t.updateProgress(o),
                        t.setWrapperTranslate(o, !1, v),
                        t.updateActiveIndex()
                    }
                    var a, o, r = v.params.control;
                    if (v.isArray(r)) for (var s = 0; s < r.length; s++) r[s] !== t && r[s] instanceof i && n(r[s]);
                    else r instanceof i && t !== r && n(r)
                },
                setTransition: function(e, t) {
                    function n(t) {
                        t.setWrapperTransition(e, v),
                        0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                            o && (t.params.loop && "slide" === v.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                        }))
                    }
                    var a, o = v.params.control;
                    if (v.isArray(o)) for (a = 0; a < o.length; a++) o[a] !== t && o[a] instanceof i && n(o[a]);
                    else o instanceof i && t !== o && n(o)
                }
            },
            v.hashnav = {
                init: function() {
                    if (v.params.hashnav) {
                        v.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e) for (var t = 0,
                        i = 0,
                        n = v.slides.length; n > i; i++) {
                            var a = v.slides.eq(i),
                            o = a.attr("data-hash");
                            if (o === e && !a.hasClass(v.params.slideDuplicateClass)) {
                                var r = a.index();
                                v.slideTo(r, t, v.params.runCallbacksOnInit, !0)
                            }
                        }
                    }
                },
                setHash: function() {
                    v.hashnav.initialized && v.params.hashnav && (document.location.hash = v.slides.eq(v.activeIndex).attr("data-hash") || "")
                }
            },
            v.disableKeyboardControl = function() {
                t(document).off("keydown", c)
            },
            v.enableKeyboardControl = function() {
                t(document).on("keydown", c)
            },
            v.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            },
            v.params.mousewheelControl) {
                try {
                    new window.WheelEvent("wheel"),
                    v.mousewheel.event = "wheel"
                } catch(D) {}
                v.mousewheel.event || void 0 === document.onmousewheel || (v.mousewheel.event = "mousewheel"),
                v.mousewheel.event || (v.mousewheel.event = "DOMMouseScroll")
            }
            v.disableMousewheelControl = function() {
                return !! v.mousewheel.event && (v.container.off(v.mousewheel.event, d), !0)
            },
            v.enableMousewheelControl = function() {
                return !! v.mousewheel.event && (v.container.on(v.mousewheel.event, d), !0)
            },
            v.parallax = {
                setTranslate: function() {
                    v.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        u(this, v.progress)
                    }),
                    v.slides.each(function() {
                        var e = t(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var t = Math.min(Math.max(e[0].progress, -1), 1);
                            u(this, t)
                        })
                    })
                },
                setTransition: function(e) {
                    "undefined" == typeof e && (e = v.params.speed),
                    v.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var i = t(this),
                        n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (n = 0),
                        i.transition(n)
                    })
                }
            },
            v._plugins = [];
            for (var O in v.plugins) {
                var M = v.plugins[O](v, v.params[O]);
                M && v._plugins.push(M)
            }
            return v.callPlugins = function(e) {
                for (var t = 0; t < v._plugins.length; t++) e in v._plugins[t] && v._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            },
            v.emitterEventListeners = {},
            v.emit = function(e) {
                v.params[e] && v.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (v.emitterEventListeners[e]) for (t = 0; t < v.emitterEventListeners[e].length; t++) v.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                v.callPlugins && v.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            },
            v.on = function(e, t) {
                return e = p(e),
                v.emitterEventListeners[e] || (v.emitterEventListeners[e] = []),
                v.emitterEventListeners[e].push(t),
                v
            },
            v.off = function(e, t) {
                var i;
                if (e = p(e), "undefined" == typeof t) return v.emitterEventListeners[e] = [],
                v;
                if (v.emitterEventListeners[e] && 0 !== v.emitterEventListeners[e].length) {
                    for (i = 0; i < v.emitterEventListeners[e].length; i++) v.emitterEventListeners[e][i] === t && v.emitterEventListeners[e].splice(i, 1);
                    return v
                }
            },
            v.once = function(e, t) {
                e = p(e);
                var i = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                    v.off(e, i)
                };
                return v.on(e, i),
                v
            },
            v.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"),
                    e
                },
                addRole: function(e, t) {
                    return e.attr("role", t),
                    e
                },
                addLabel: function(e, t) {
                    return e.attr("aria-label", t),
                    e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0),
                    e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1),
                    e
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && (t(e.target).is(v.params.nextButton) ? (v.onClickNext(e), v.a11y.notify(v.isEnd ? v.params.lastSlideMessage: v.params.nextSlideMessage)) : t(e.target).is(v.params.prevButton) && (v.onClickPrev(e), v.a11y.notify(v.isBeginning ? v.params.firstSlideMessage: v.params.prevSlideMessage)), t(e.target).is("." + v.params.bulletClass) && t(e.target)[0].click())
                },
                liveRegion: t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var t = v.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                init: function() {
                    if (v.params.nextButton) {
                        var e = t(v.params.nextButton);
                        v.a11y.makeFocusable(e),
                        v.a11y.addRole(e, "button"),
                        v.a11y.addLabel(e, v.params.nextSlideMessage)
                    }
                    if (v.params.prevButton) {
                        var i = t(v.params.prevButton);
                        v.a11y.makeFocusable(i),
                        v.a11y.addRole(i, "button"),
                        v.a11y.addLabel(i, v.params.prevSlideMessage)
                    }
                    t(v.container).append(v.a11y.liveRegion)
                },
                initPagination: function() {
                    v.params.pagination && v.params.paginationClickable && v.bullets && v.bullets.length && v.bullets.each(function() {
                        var e = t(this);
                        v.a11y.makeFocusable(e),
                        v.a11y.addRole(e, "button"),
                        v.a11y.addLabel(e, v.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function() {
                    v.a11y.liveRegion && v.a11y.liveRegion.length > 0 && v.a11y.liveRegion.remove()
                }
            },
            v.init = function() {
                v.params.loop && v.createLoop(),
                v.updateContainerSize(),
                v.updateSlidesSize(),
                v.updatePagination(),
                v.params.scrollbar && v.scrollbar && v.scrollbar.set(),
                "slide" !== v.params.effect && v.effects[v.params.effect] && (v.params.loop || v.updateProgress(), v.effects[v.params.effect].setTranslate()),
                v.params.loop ? v.slideTo(v.params.initialSlide + v.loopedSlides, 0, v.params.runCallbacksOnInit) : (v.slideTo(v.params.initialSlide, 0, v.params.runCallbacksOnInit), 0 === v.params.initialSlide && (v.parallax && v.params.parallax && v.parallax.setTranslate(), v.lazy && v.params.lazyLoading && (v.lazy.load(), v.lazy.initialImageLoaded = !0))),
                v.attachEvents(),
                v.params.observer && v.support.observer && v.initObservers(),
                v.params.preloadImages && !v.params.lazyLoading && v.preloadImages(),
                v.params.autoplay && v.startAutoplay(),
                v.params.keyboardControl && v.enableKeyboardControl && v.enableKeyboardControl(),
                v.params.mousewheelControl && v.enableMousewheelControl && v.enableMousewheelControl(),
                v.params.hashnav && v.hashnav && v.hashnav.init(),
                v.params.a11y && v.a11y && v.a11y.init(),
                v.emit("onInit", v)
            },
            v.cleanupStyles = function() {
                v.container.removeClass(v.classNames.join(" ")).removeAttr("style"),
                v.wrapper.removeAttr("style"),
                v.slides && v.slides.length && v.slides.removeClass([v.params.slideVisibleClass, v.params.slideActiveClass, v.params.slideNextClass, v.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                v.paginationContainer && v.paginationContainer.length && v.paginationContainer.removeClass(v.params.paginationHiddenClass),
                v.bullets && v.bullets.length && v.bullets.removeClass(v.params.bulletActiveClass),
                v.params.prevButton && t(v.params.prevButton).removeClass(v.params.buttonDisabledClass),
                v.params.nextButton && t(v.params.nextButton).removeClass(v.params.buttonDisabledClass),
                v.params.scrollbar && v.scrollbar && (v.scrollbar.track && v.scrollbar.track.length && v.scrollbar.track.removeAttr("style"), v.scrollbar.drag && v.scrollbar.drag.length && v.scrollbar.drag.removeAttr("style"))
            },
            v.destroy = function(e, t) {
                v.detachEvents(),
                v.stopAutoplay(),
                v.params.loop && v.destroyLoop(),
                t && v.cleanupStyles(),
                v.disconnectObservers(),
                v.params.keyboardControl && v.disableKeyboardControl && v.disableKeyboardControl(),
                v.params.mousewheelControl && v.disableMousewheelControl && v.disableMousewheelControl(),
                v.params.a11y && v.a11y && v.a11y.destroy(),
                v.emit("onDestroy"),
                e !== !1 && (v = null)
            },
            v.init(),
            v
        }
    };
    i.prototype = {
        isSafari: function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        } (),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function() {
            var e = navigator.userAgent,
            t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            i = e.match(/(iPad).*OS\s([\d_]+)/),
            n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            a = !i && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: i || a || n,
                android: t
            }
        } (),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 ||
            function() {
                return !! ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            } (),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 ||
            function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            } (),
            flexbox: function() {
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++) if (t[i] in e) return ! 0
            } (),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            } ()
        },
        plugins: {}
    };
    for (var n = ["jQuery", "Zepto", "Dom7"], a = 0; a < n.length; a++) window[n[a]] && e(window[n[a]]);
    var o;
    o = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery: Dom7,
    o && ("transitionEnd" in o.fn || (o.fn.transitionEnd = function(e) {
        function t(o) {
            if (o.target === this) for (e.call(this, o), i = 0; i < n.length; i++) a.off(n[i], t)
        }
        var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
        a = this;
        if (e) for (i = 0; i < n.length; i++) a.on(n[i], t);
        return this
    }), "transform" in o.fn || (o.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
            var i = this[t].style;
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
        }
        return this
    }), "transition" in o.fn || (o.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var i = this[t].style;
            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
        }
        return this
    })),
    window.Swiper = i
} (),
"undefined" != typeof module ? module.exports = window.Swiper: "function" == typeof define && define.amd && define([],
function() {
    "use strict";
    return window.Swiper
}),
!
function(e, t) {
    function i() {
        var t = o.getBoundingClientRect().width;
        t / l > 540 && (t = 540 * l);
        var i = t / 10;
        o.style.fontSize = i + "px",
        d.rem = e.rem = i
    }
    var n, a = e.document,
    o = a.documentElement,
    r = a.querySelector('meta[name="viewport"]'),
    s = a.querySelector('meta[name="flexible"]'),
    l = 0,
    c = 0,
    d = t.flexible || (t.flexible = {});
    if (r) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var u = r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        u && (c = parseFloat(u[1]), l = parseInt(1 / c))
    } else if (s) {
        var p = s.getAttribute("content");
        if (p) {
            var f = p.match(/initial\-dpr=([\d\.]+)/),
            h = p.match(/maximum\-dpr=([\d\.]+)/);
            f && (l = parseFloat(f[1]), c = parseFloat((1 / l).toFixed(2))),
            h && (l = parseFloat(h[1]), c = parseFloat((1 / l).toFixed(2)))
        }
    }
    if (!l && !c) {
        var m = e.navigator.userAgent,
        g = ( !! m.match(/android/gi), !!m.match(/iphone/gi)),
        v = g && !!m.match(/OS 9_3/),
        y = e.devicePixelRatio;
        l = g && !v ? y >= 3 && (!l || l >= 3) ? 3 : y >= 2 && (!l || l >= 2) ? 2 : 1 : 1,
        c = 1 / l
    }
    if (o.setAttribute("data-dpr", l), !r) if (r = a.createElement("meta"), r.setAttribute("name", "viewport"), r.setAttribute("content", "initial-scale=" + c + ", maximum-scale=" + c + ", minimum-scale=" + c + ", user-scalable=no"), o.firstElementChild) o.firstElementChild.appendChild(r);
    else {
        var w = a.createElement("div");
        w.appendChild(r),
        a.write(w.innerHTML)
    }
    e.addEventListener("resize",
    function() {
        clearTimeout(n),
        n = setTimeout(i, 300)
    },
    !1),
    e.addEventListener("pageshow",
    function(e) {
        e.persisted && (clearTimeout(n), n = setTimeout(i, 300))
    },
    !1),
    "complete" === a.readyState ? a.body.style.fontSize = 12 * l + "px": a.addEventListener("DOMContentLoaded",
    function() {
        a.body.style.fontSize = 12 * l + "px"
    },
    !1),
    i(),
    d.dpr = e.dpr = l,
    d.refreshRem = i,
    d.rem2px = function(e) {
        var t = parseFloat(e) * this.rem;
        return "string" == typeof e && e.match(/rem$/) && (t += "px"),
        t
    },
    d.px2rem = function(e) {
        var t = parseFloat(e) / this.rem;
        return "string" == typeof e && e.match(/px$/) && (t += "rem"),
        t
    }
} (window, window.lib || (window.lib = {})),
function() {
    "use strict";
    function e(t, n) {
        var a;
        n = n || {},
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        this.targetElement = null,
        this.touchStartX = 0,
        this.touchStartY = 0,
        this.lastTouchIdentifier = 0,
        this.touchBoundary = n.touchBoundary || 10,
        this.layer = t,
        this.tapDelay = n.tapDelay || 200,
        this.tapTimeout = n.tapTimeout || 700;
        function o(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        if (!e.notNeeded(t)) {
            for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, l = 0, c = r.length; l < c; l++) s[r[l]] = o(s[r[l]], s);
            i && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)),
            t.addEventListener("click", this.onClick, !0),
            t.addEventListener("touchstart", this.onTouchStart, !1),
            t.addEventListener("touchmove", this.onTouchMove, !1),
            t.addEventListener("touchend", this.onTouchEnd, !1),
            t.addEventListener("touchcancel", this.onTouchCancel, !1),
            Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, i, n) {
                var a = Node.prototype.removeEventListener;
                "click" === e ? a.call(t, e, i.hijacked || i, n) : a.call(t, e, i, n)
            },
            t.addEventListener = function(e, i, n) {
                var a = Node.prototype.addEventListener;
                "click" === e ? a.call(t, e, i.hijacked || (i.hijacked = function(e) {
                    e.propagationStopped || i(e)
                }), n) : a.call(t, e, i, n)
            }),
            "function" == typeof t.onclick && (a = t.onclick, t.addEventListener("click",
            function(e) {
                a(e)
            },
            !1), t.onclick = null)
        }
    }
    var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
    i = navigator.userAgent.indexOf("Android") > 0 && !t,
    n = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
    a = n && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    o = n && /OS [6-7]_\d/.test(navigator.userAgent),
    r = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function(e) {
        switch (e.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (e.disabled) return ! 0;
            break;
        case "input":
            if (n && "file" === e.type || e.disabled) return ! 0;
            break;
        case "label":
        case "iframe":
        case "video":
            return ! 0
        }
        return /\bneedsclick\b/.test(e.className)
    },
    e.prototype.needsFocus = function(e) {
        switch (e.nodeName.toLowerCase()) {
        case "textarea":
            return ! 0;
        case "select":
            return ! i;
        case "input":
            switch (e.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return ! 1
            }
            return ! e.disabled && !e.readOnly;
        default:
            return /\bneedsfocus\b/.test(e.className)
        }
    },
    e.prototype.sendClick = function(e, t) {
        var i, n;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(),
        n = t.changedTouches[0],
        i = document.createEvent("MouseEvents"),
        i.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
        i.forwardedTouchEvent = !0,
        e.dispatchEvent(i)
    },
    e.prototype.determineEventType = function(e) {
        return i && "select" === e.tagName.toLowerCase() ? "mousedown": "click"
    },
    e.prototype.focus = function(e) {
        var t;
        n && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    },
    e.prototype.updateScrollParent = function(e) {
        var t, i;
        if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
            i = e;
            do {
                if (i.scrollHeight > i.offsetHeight) {
                    t = i,
                    e.fastClickScrollParent = i;
                    break
                }
                i = i.parentElement
            } while ( i )
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    },
    e.prototype.getTargetElementFromEventTarget = function(e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode: e
    },
    e.prototype.onTouchStart = function(e) {
        var t, i, o;
        if (e.targetTouches.length > 1) return ! 0;
        if (t = this.getTargetElementFromEventTarget(e.target), i = e.targetTouches[0], n) {
            if (o = window.getSelection(), o.rangeCount && !o.isCollapsed) return ! 0;
            if (!a) {
                if (i.identifier && i.identifier === this.lastTouchIdentifier) return e.preventDefault(),
                !1;
                this.lastTouchIdentifier = i.identifier,
                this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0,
        this.trackingClickStart = e.timeStamp,
        this.targetElement = t,
        this.touchStartX = i.pageX,
        this.touchStartY = i.pageY,
        e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(),
        !0
    },
    e.prototype.touchHasMoved = function(e) {
        var t = e.changedTouches[0],
        i = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > i || Math.abs(t.pageY - this.touchStartY) > i
    },
    e.prototype.onTouchMove = function(e) {
        return ! this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
    },
    e.prototype.findControl = function(e) {
        return void 0 !== e.control ? e.control: e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    },
    e.prototype.onTouchEnd = function(e) {
        var t, r, s, l, c, d = this.targetElement;
        if (!this.trackingClick) return ! 0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0,
        !0;
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return ! 0;
        if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, r = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, o && (c = e.changedTouches[0], d = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || d, d.fastClickScrollParent = this.targetElement.fastClickScrollParent), s = d.tagName.toLowerCase(), "label" === s) {
            if (t = this.findControl(d)) {
                if (this.focus(d), i) return ! 1;
                d = t
            }
        } else if (this.needsFocus(d)) return e.timeStamp - r > 100 || n && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(d), this.sendClick(d, e), n && "select" === s || (this.targetElement = null, e.preventDefault()), !1);
        return ! (!n || a || (l = d.fastClickScrollParent, !l || l.fastClickLastScrollTop === l.scrollTop)) || (this.needsClick(d) || (e.preventDefault(), this.sendClick(d, e)), !1)
    },
    e.prototype.onTouchCancel = function() {
        this.trackingClick = !1,
        this.targetElement = null
    },
    e.prototype.onMouse = function(e) {
        return ! this.targetElement || ( !! e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
    },
    e.prototype.onClick = function(e) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
    },
    e.prototype.destroy = function() {
        var e = this.layer;
        i && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)),
        e.removeEventListener("click", this.onClick, !0),
        e.removeEventListener("touchstart", this.onTouchStart, !1),
        e.removeEventListener("touchmove", this.onTouchMove, !1),
        e.removeEventListener("touchend", this.onTouchEnd, !1),
        e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    },
    e.notNeeded = function(e) {
        var t, n, a, o;
        if ("undefined" == typeof window.ontouchstart) return ! 0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!i) return ! 0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (t.content.indexOf("user-scalable=no") !== -1) return ! 0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return ! 0
            }
        }
        if (r && (a = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), a[1] >= 10 && a[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (t.content.indexOf("user-scalable=no") !== -1) return ! 0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return ! 0
        }
        return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(o >= 27 && (t = document.querySelector("meta[name=viewport]"), t && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
    },
    e.attach = function(t, i) {
        return new e(t, i)
    },
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
} (),
!
function(e, t) {
    if ("undefined" == typeof i) var i = {},
    i = {
        PluginStack: {},
        shareObj: function(e, t) {
            "undefined" == typeof window.CloudSdkPlugin && (window.CloudSdkPlugin = {}),
            window.CloudSdkPlugin.hasOwnProperty("STK") || (window.CloudSdkPlugin.STK = {}),
            window.CloudSdkPlugin.STK[e] = t
        },
        getObj: function(e) {
            if ("undefined" == typeof window.CloudSdkPlugin && (window.CloudSdkPlugin = {}), !window.CloudSdkPlugin.hasOwnProperty("STK")) throw Error("no " + e + " Obj");
            return window.CloudSdkPlugin.STK[e]
        },
        creatPlugin: function(e, t) {
            "undefined" == typeof window.CloudSdkPlugin && (window.CloudSdkPlugin = {}),
            window.CloudSdkPlugin[e] = t
        },
        getPlugin: function(e, t) {
            if ("STK" == e) throw Error(e + " is not support");
            window.CloudSdkPlugin && "undefined" != typeof window.CloudSdkPlugin[e] ? t && t(window.CloudSdkPlugin[e]) : o.getJS(i.PluginStack[e],
            function() {
                t && t(window.CloudSdkPlugin[e])
            },
            function() {
                t && t(null)
            },
            this, "utf-8")
        },
        setPluginStack: function(e, t) {
            if (o.isArray(e)) for (var n = 0; n < e.length; n++) arguments.callee(e[n], t);
            else {
                if (!e.hasOwnProperty("name") || !e.hasOwnProperty("url")) throw Error(e + "must has name and url");
                i.PluginStack[e.name] = e.url,
                "http" != e.url.substr(0, 4) && (i.PluginStack[e.name] = "https:" == window.location.protocol ? window.location.protocol + i.PluginStack[e.name].replace(/{domain}/g, "s.yuntv.letv.com") : "http:" + i.PluginStack[e.name].replace(/{domain}/g, "yuntv.letv.com"), i.PluginStack[e.name] = i.PluginStack[e.name].replace(/{LANG}/g, t))
            }
        },
        preload: function() {
            for (var e = arguments,
            t = 0; t < e.length; t++) i.getPlugin(e[t])
        }
    };
    i.shareObj("common.SOTool", i);
    var n = function() {
        return {
            NoSupportPano: 0,
            Drm: 1,
            NoStart: 2,
            INTERRUPT: 3,
            END: 4
        }
    } ();
    i.shareObj("model.Message", n);
    var a = function() {
        var e, t = !1;
        return {
            loadLang: t,
            toMessage: function(n, a, o) {
                return t ? e.hasOwnProperty(o) ? {
                    message: e[o]
                }: {
                    message: o
                }: (i.getPlugin("lang.message.plugin." + a,
                function(i) {
                    i && (e = i, t = !0),
                    n()
                }), !1)
            },
            ms: e
        }
    } ();
    i.shareObj("common.LangTool", a);
    var o = function() {
        function t(e) {
            for (var t = [{
                name: "ie",
                test: /msie/
            },
            {
                name: "opera",
                test: /opera/
            },
            {
                name: "firefox",
                test: /firefox/
            },
            {
                name: "safari",
                test: /safari.*(?!chrome)/
            },
            {
                name: "chrome",
                test: /chrome/
            },
            {
                name: "wph",
                test: /windows phone/
            },
            {
                name: "ps",
                test: /playstation/
            },
            {
                name: "uc",
                test: /ucbrowser|ucweb/
            },
            {
                name: "ps",
                test: /playstation/
            },
            {
                name: "xiaomi",
                test: /xiaomi/
            },
            {
                name: "qq",
                test: /qqbrowser/
            },
            {
                name: "weixin",
                test: /micromessenger/
            },
            {
                name: "360",
                test: /360browser/
            },
            {
                name: "baidu",
                test: /baidu/
            },
            {
                name: "qqwebview",
                test: / qq/
            },
            {
                name: "sougou",
                test: /sougou/
            },
            {
                name: "liebao",
                test: /liebaofast/
            },
            {
                name: "letv",
                test: /eui browser/
            }], i = "un", n = 0; n < t.length; n++) {
                var a = t[n];
                a.test.test(e) && (i = a.name)
            }
            return i
        }
        function i(e) {
            var t = "Win32" == navigator.platform || "Windows" == navigator.platform,
            i = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
            if (i) return "mac";
            if (t) {
                if ( - 1 < e.indexOf("windows nt 5.0") || -1 < e.indexOf("windows 2000")) return "win2000";
                if ( - 1 < e.indexOf("windows nt 5.1") || -1 < e.indexOf("windows XP")) return "winXP";
                if ( - 1 < e.indexOf("windows nt 5.2") || -1 < e.indexOf("windows 2003")) return "win2003";
                if ( - 1 < e.indexOf("windows nt 6.0") || -1 < e.indexOf("windows vista")) return "winVista";
                if ( - 1 < e.indexOf("windows nt 6.1") || -1 < e.indexOf("windows 7")) return "win7"
            }
            return /android/.test(e) ? "android": e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || e.match(/iphone/) || e.match(/ipad/) ? "ios": "X11" != navigator.platform || t || i ? -1 < String(navigator.platform).indexOf("Linux") ? "linux": "un": "unix"
        }
        var n = navigator.userAgent.toLowerCase(),
        a = {
            br: "",
            device: "",
            ver: "",
            params: null,
            os: ""
        };
        return {
            br: a,
            getOs: function() {
                return "" == a.os && (a.os = i(n)),
                a.os
            },
            getUrlParams: function(e) {
                if (null == a.params) {
                    var t = window.location.search,
                    i = {};
                    if ( - 1 != t.indexOf("?")) for (var t = t.substr(1).split("&"), n = 0; n < t.length; n++) {
                        var o = t[n].substr(0, t[n].indexOf("=")),
                        r = t[n].substr(t[n].indexOf("=") + 1);
                        i[o] = r
                    }
                    a.params = i
                }
                return ! (!a.params || !a.params.hasOwnProperty(e)) && a.params[e]
            },
            getDevice: function() {
                if ("" == a.device) {
                    var e;
                    e: {
                        e = [{
                            name: "wph",
                            test: /windows phone/
                        },
                        {
                            name: "ipad",
                            test: /ipad/
                        },
                        {
                            name: "iphone",
                            test: /iphone/
                        },
                        {
                            name: "androidPad",
                            test: /(?!.*mobile)android/
                        },
                        {
                            name: "androidPhone",
                            test: /android.*mobile/
                        },
                        {
                            name: "android",
                            test: /android/
                        },
                        {
                            name: "pc",
                            test: /windows/
                        },
                        {
                            name: "mac",
                            test: /macintosh|mac os x/
                        }];
                        for (var t = 0; t < e.length; t++) {
                            var i = e[t];
                            if (i.test.test(n)) {
                                e = i.name;
                                break e
                            }
                        }
                        e = "un"
                    }
                    a.device = e
                }
                return a.device
            },
            getBrowser: function() {
                return "" == a.br && (a.br = t(n)),
                a.br
            },
            getBrowserVersion: function() {
                if ("" == a.br && (a.br = t(n)), "" == a.ver) {
                    var e, i = {}; (e = n.match(/msie ([\d.]+)/)) ? i.msie = e[1] : (e = n.match(/firefox\/([\d.]+)/)) ? i.firefox = e[1] : (e = n.match(/360browser/)) ? i.b360 = e[1] ? e[1] : "-": (e = n.match(/qqbrowser\/([\d.]+)/)) ? i.bqq = e[1] : (e = n.match(/ucbrowser\/([\d.]+)/)) ? i.buc = e[1] : (e = n.match(/baidubrowser\/([\d.]+)/)) ? i.bbaidu = e[1] : (e = n.match(/sogoumobilebrowser\/([\d.]+)/)) ? i.bsgm = e[1] : (e = n.match(/liebaofast\/([\d.]+)/)) ? i.blbfast = e[1] : (e = n.match(/mb2345browser\/([\d.]+)/)) ? i.b2345 = e[1] : (e = n.match(/4g explorer\/([\d.]+)/)) ? i.b4g = e[1] : (e = n.match(/huohoubrowser\/([\d.]+)/)) ? i.bhuohou = e[1] : (e = n.match(/maxthon[\/ ]([\d.]+)/)) ? i.maxthon = e[1] : (e = n.match(/(opera)|(opr)\/([\d.]+)/)) ? i.opera = e[3] : (e = n.match(/chrome\/([\d.]+)/)) ? i.chrome = e[1] : (e = n.match(/version\/([\d.]+).*safari/)) ? i.safari = e[1] : i.other = "-",
                    e = "";
                    for (var o in i) e = i[o];
                    a.ver = e
                }
                return a.br + a.ver
            },
            now: Date.now ||
            function() {
                return + new Date
            },
            getJS: function(t, i, n, a, o, r) {
                if ("undefined" != typeof t) {
                    var s, l = e.head || e.getElementsByTagName("head")[0] || e.documentElement,
                    c = e.createElement("script");
                    c.type = "text/javascript",
                    o && (c.charset = o),
                    c.onload = c.onreadystatechange = function() {
                        c.readyState && "loaded" != c.readyState && "complete" != c.readyState || (c = c.onreadystatechange = c.onload = c.onerror = null, clearTimeout(s), "function" == typeof i && i.call(a))
                    },
                    c.onerror = function() {
                        c = c.onload = c.onreadystatechange = c.onerror = null,
                        clearTimeout(s),
                        "function" == typeof n && n.call(a)
                    },
                    c.src = t,
                    l.appendChild(c),
                    r || (r = 1e4),
                    s = setTimeout(function() {
                        clearTimeout(s),
                        "function" == typeof n && n()
                    },
                    r)
                }
            },
            getJSON: function(t, i, n, a, o, r) {
                var s, l = this.now(),
                c = "letvcloud" + l + Math.floor(100 * Math.random()),
                d = "$1" + c + "$2",
                u = 0,
                p = 0,
                f = this,
                h = -1,
                m = e.head || e.getElementsByTagName("head")[0] || e.documentElement,
                g = this.urlToObj(t);
                g.hasOwnProperty("callback") ? c = g.callback: (/_r=/i.test(t) || (t += "&callback=?"), t = t.replace(/(\=)\?(&|$)|\?\?/i, d)),
                a = a || 5e3;
                var v = o || 2,
                y = r || 1e3;
                window[c] = function(e) {
                    w(),
                    window[c] = null,
                    h = -1,
                    i.call(this, e, {
                        responseTime: f.now() - l,
                        retryCount: u
                    })
                };
                var w = function() {
                    clearTimeout(p),
                    s && s.parentNode && (m.removeChild(s), s.onload = s.onreadystatechange = null, s.onerror = null, s = void 0)
                },
                b = function() {
                    w(),
                    u >= v ? (clearTimeout(p), window[c] = null, n && n.call(this, null, {
                        responseTime: f.now() - l,
                        retryCount: u,
                        error: h
                    })) : setTimeout(x, y)
                },
                x = function() {
                    w(),
                    u++,
                    t = t.replace(/&_r=[\d|\?]+/i, "&_r=" + u),
                    s = e.createElement("script"),
                    s.setAttribute("type", "text/javascript"),
                    s.setAttribute("src", t),
                    s.setAttribute("charset", "utf-8"),
                    s.onload = s.onreadystatechange = function(e) {
                        s.onload = s.onreadystatechange = null,
                        clearTimeout(p)
                    },
                    m.insertBefore(s, m.firstChild),
                    h = 1,
                    p = setTimeout(b, a)
                };
                x()
            },
            getJSONbyAjax: function(e, t, i, n, a, o) {
                var r, s = this.now(),
                l = 0,
                c = this,
                d = -1;
                n = n || 5e3;
                var u = a || 2,
                p = o || 1e3,
                f = function() {
                    clearTimeout(0),
                    r && (r.onreadystatechange = null)
                },
                h = function() {
                    f(),
                    l >= u ? (clearTimeout(0), i && i.call(this, null, {
                        responseTime: c.now() - s,
                        retryCount: l,
                        error: d
                    })) : setTimeout(m, p)
                },
                m = function() {
                    f(),
                    l++,
                    r = new XMLHttpRequest,
                    r.timeout = n,
                    r.onreadystatechange = function(e) {
                        4 == r.readyState && (200 == r.status ? (e = r.responseText, f(), d = -1, t.call(this, e, {
                            responseTime: c.now() - s,
                            retryCount: l
                        })) : h())
                    },
                    r.ontimeout = h,
                    r.open("GET", e, !0),
                    r.send(),
                    d = 1
                };
                m()
            },
            creatUuid: function() {
                var e, t, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                n = [];
                for (t = 16, e = 0; 32 > e; e++) n[e] = i[0 | Math.random() * t];
                return n.join("")
            },
            urlToObj: function(e) {
                var t = {},
                i = e;
                for ( - 1 != e.indexOf("?") && (i = e.substr(1)), e = i.split("&"), i = 0; i < e.length; i++) {
                    var n = e[i].substr(0, e[i].indexOf("=")),
                    a = e[i].substr(e[i].indexOf("=") + 1);
                    t[n] = a
                }
                return t
            },
            objectParseToString: function(e) {
                if (null == e) return "";
                var t, i = "",
                n = 0;
                for (t in e) i = 0 < n ? i + ("&" + t + "=" + e[t]) : i + (t + "=" + e[t]),
                n++;
                return i
            },
            cookie: function(t, i, n) {
                if ("undefined" == typeof i) {
                    if (i = null, e.cookie && "" != e.cookie) for (n = e.cookie.split(";"), a = 0; a < n.length; a++) if (o = n[a], o.substring(0, t.length + 1) == t + "=") {
                        i = decodeURIComponent(o.substring(t.length + 1));
                        break
                    }
                    return i
                }
                n = n || {},
                null === i && (i = "", n.expires = -1);
                var a = "";
                n.expires && ("number" == typeof n.expires || n.expires.toUTCString) && ("number" == typeof n.expires ? (a = new Date, a.setTime(a.getTime() + 864e5 * n.expires)) : a = n.expires, a = "; expires=" + a.toUTCString());
                var o = n.path ? "; path=" + n.path: "",
                r = n.domain ? "; domain=" + n.domain: "";
                return n = n.secure ? "; secure": "",
                e.cookie = [t, "=", encodeURIComponent(i), a, o, r, n].join(""),
                null
            },
            setLocal: function(e, t, i) {
                if ("undefined" == typeof i && (i = !0), window.localStorage) try {
                    localStorage.setItem(e, t)
                } catch(n) {}
                i && this.cookie(e, t, i)
            },
            getLocal: function(e, t) {
                if ("undefined" == typeof t && (t = !0), window.localStorage) try {
                    if (localStorage.getItem(e)) return localStorage.getItem(e)
                } catch(i) {}
                return t ? this.cookie(e) : -1
            },
            num2Time: function(e) {
                var t;
                return t = 10 > parseInt(e / 60) ? "0" + parseInt(e / 60) + ":": parseInt(e / 60) + ":",
                e = 10 > parseInt(e % 60) ? "0" + parseInt(e % 60) : parseInt(e % 60) + "",
                t + e
            },
            clone: function(e) {
                var t, i, n;
                if ("object" != typeof e || null === e) return e;
                if (e instanceof Array) for (t = [], i = 0, n = e.length; i < n; i++) t[i] = "object" == typeof e[i] && null != e[i] ? arguments.callee(e[i]) : e[i];
                else for (i in t = {},
                e) t[i] = "object" == typeof e[i] && null != e[i] ? arguments.callee(e[i]) : e[i];
                return t
            },
            isHttps: function() {
                try {
                    return "https:" == window.location.protocol
                } catch(e) {}
                return ! 1
            },
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            isFunction: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            },
            addUrlParams: function(e, t) {
                for (var i = 0; i < e.length; i++) {
                    var n, a = e[i];
                    for (n in t) - 1 == a.indexOf("&" + n + "=") && -1 == a.indexOf("?" + n + "=") && (a = -1 != a.indexOf("?") ? a + ("&" + n + "=" + t[n]) : a + ("?" + n + "=" + t[n]));
                    e[i] = a
                }
            },
            bindFun: function(e, t) {
                return e.bind ? e.bind(t) : function() {
                    return e.apply(t, arguments)
                }
            },
            split: function(e, t, i) {
                e = e.split(t);
                var n = [];
                if ("undefined" == typeof i || i >= e.length) return e;
                for (; n.length < i - 1;) n.push(e[0]),
                e.shift();
                return n[i - 1] = e.join(t),
                n
            }
        }
    } ();
    i.shareObj("common.videoSdkTool", o),
    o.checkPano = function() {
        try {
            var t = e.createElement("canvas");
            if (window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))) switch (o.getDevice()) {
            case "androidPad":
            case "androidPhone":
            case "android":
                if ("chrome" == o.getBrowser() || "firefox" == o.getBrowser()) return ! 0;
                break;
            case "pc":
                return ! 0
            }
        } catch(i) {}
        return ! 1
    },
    i.shareObj("common.videoSdkTool", o);
    var r = window,
    s = e,
    l = "playNewId getVideoSetting getVideoTime pauseVideo resumeVideo seekTo replayVideo closeVideo setVolume shutDown startUp getBufferPercent setDefinition getDefinition getDefaultDefinition getDefinitionList getDefList setVideoPercent getVideoPercent setVideoScale getVideoScale resetVideoScale fullVideoScale setVideoRect getLoadPercent getDownloadSpeed getPlayRecord getPlayState setVideoColor getVideoColor getVersion setAutoReplay feedback getLog getServerTime setTipInfo setPlayerInfo setHorseRaceLampInfo barrageInput barrageStop barrageStart barrageResume barragePause callFlash".split(" "),
    c = {
        decode: function(e) {
            var t, i, n, a, o, r = 0,
            s = 0;
            a = "";
            var l = [];
            if (!e) return e;
            e += "";
            do t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(r++)),
            i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(r++)),
            a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(r++)),
            o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(r++)),
            n = t << 18 | i << 12 | a << 6 | o,
            t = n >> 16 & 255,
            i = n >> 8 & 255,
            n &= 255,
            64 == a ? l[s++] = String.fromCharCode(t) : 64 == o ? l[s++] = String.fromCharCode(t, i) : l[s++] = String.fromCharCode(t, i, n);
            while (r < e.length);
            return a = l.join("")
        },
        encode: function(e) {
            var t, i, n, a, o = 0,
            r = 0,
            s = "",
            s = [];
            if (!e) return e;
            e = this.utf8_encode(e + "");
            do t = e.charCodeAt(o++),
            i = e.charCodeAt(o++),
            n = e.charCodeAt(o++),
            a = t << 16 | i << 8 | n,
            t = a >> 18 & 63,
            i = a >> 12 & 63,
            n = a >> 6 & 63,
            a &= 63,
            s[r++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);
            while (o < e.length);
            switch (s = s.join(""), e.length % 3) {
            case 1:
                s = s.slice(0, -2) + "==";
                break;
            case 2:
                s = s.slice(0, -1) + "="
            }
            return s
        },
        utf8to16: function(e) {
            var t, i, n, a, o, r;
            for (t = "", n = e.length, i = 0; i < n;) switch (a = e.charCodeAt(i++), a >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                t += e.charAt(i - 1);
                break;
            case 12:
            case 13:
                o = e.charCodeAt(i++),
                t += String.fromCharCode((31 & a) << 6 | 63 & o);
                break;
            case 14:
                o = e.charCodeAt(i++),
                r = e.charCodeAt(i++),
                t += String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | (63 & r) << 0)
            }
            return t
        }
    },
    d = function() {
        function e(e, t, i, n, o, r) {
            return e = a(a(t, e), a(n, r)),
            a(e << o | e >>> 32 - o, i)
        }
        function t(t, i, n, a, o, r, s) {
            return e(i & n | ~i & a, t, i, o, r, s)
        }
        function i(t, i, n, a, o, r, s) {
            return e(i & a | n & ~a, t, i, o, r, s)
        }
        function n(t, i, n, a, o, r, s) {
            return e(n ^ (i | ~a), t, i, o, r, s)
        }
        function a(e, t) {
            var i = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
        }
        return {
            hash: function(o) {
                for (var r = [], s = 0; s < 8 * o.length; s += 8) r[s >> 5] |= (255 & o.charCodeAt(s / 8)) << s % 32;
                o = 8 * o.length,
                r[o >> 5] |= 128 << o % 32,
                r[(o + 64 >>> 9 << 4) + 14] = o,
                o = 1732584193;
                for (var s = -271733879,
                l = -1732584194,
                c = 271733878,
                d = 0; d < r.length; d += 16) {
                    var u = o,
                    p = s,
                    f = l,
                    h = c;
                    o = t(o, s, l, c, r[d + 0], 7, -680876936),
                    c = t(c, o, s, l, r[d + 1], 12, -389564586),
                    l = t(l, c, o, s, r[d + 2], 17, 606105819),
                    s = t(s, l, c, o, r[d + 3], 22, -1044525330),
                    o = t(o, s, l, c, r[d + 4], 7, -176418897),
                    c = t(c, o, s, l, r[d + 5], 12, 1200080426),
                    l = t(l, c, o, s, r[d + 6], 17, -1473231341),
                    s = t(s, l, c, o, r[d + 7], 22, -45705983),
                    o = t(o, s, l, c, r[d + 8], 7, 1770035416),
                    c = t(c, o, s, l, r[d + 9], 12, -1958414417),
                    l = t(l, c, o, s, r[d + 10], 17, -42063),
                    s = t(s, l, c, o, r[d + 11], 22, -1990404162),
                    o = t(o, s, l, c, r[d + 12], 7, 1804603682),
                    c = t(c, o, s, l, r[d + 13], 12, -40341101),
                    l = t(l, c, o, s, r[d + 14], 17, -1502002290),
                    s = t(s, l, c, o, r[d + 15], 22, 1236535329),
                    o = i(o, s, l, c, r[d + 1], 5, -165796510),
                    c = i(c, o, s, l, r[d + 6], 9, -1069501632),
                    l = i(l, c, o, s, r[d + 11], 14, 643717713),
                    s = i(s, l, c, o, r[d + 0], 20, -373897302),
                    o = i(o, s, l, c, r[d + 5], 5, -701558691),
                    c = i(c, o, s, l, r[d + 10], 9, 38016083),
                    l = i(l, c, o, s, r[d + 15], 14, -660478335),
                    s = i(s, l, c, o, r[d + 4], 20, -405537848),
                    o = i(o, s, l, c, r[d + 9], 5, 568446438),
                    c = i(c, o, s, l, r[d + 14], 9, -1019803690),
                    l = i(l, c, o, s, r[d + 3], 14, -187363961),
                    s = i(s, l, c, o, r[d + 8], 20, 1163531501),
                    o = i(o, s, l, c, r[d + 13], 5, -1444681467),
                    c = i(c, o, s, l, r[d + 2], 9, -51403784),
                    l = i(l, c, o, s, r[d + 7], 14, 1735328473),
                    s = i(s, l, c, o, r[d + 12], 20, -1926607734),
                    o = e(s ^ l ^ c, o, s, r[d + 5], 4, -378558),
                    c = e(o ^ s ^ l, c, o, r[d + 8], 11, -2022574463),
                    l = e(c ^ o ^ s, l, c, r[d + 11], 16, 1839030562),
                    s = e(l ^ c ^ o, s, l, r[d + 14], 23, -35309556),
                    o = e(s ^ l ^ c, o, s, r[d + 1], 4, -1530992060),
                    c = e(o ^ s ^ l, c, o, r[d + 4], 11, 1272893353),
                    l = e(c ^ o ^ s, l, c, r[d + 7], 16, -155497632),
                    s = e(l ^ c ^ o, s, l, r[d + 10], 23, -1094730640),
                    o = e(s ^ l ^ c, o, s, r[d + 13], 4, 681279174),
                    c = e(o ^ s ^ l, c, o, r[d + 0], 11, -358537222),
                    l = e(c ^ o ^ s, l, c, r[d + 3], 16, -722521979),
                    s = e(l ^ c ^ o, s, l, r[d + 6], 23, 76029189),
                    o = e(s ^ l ^ c, o, s, r[d + 9], 4, -640364487),
                    c = e(o ^ s ^ l, c, o, r[d + 12], 11, -421815835),
                    l = e(c ^ o ^ s, l, c, r[d + 15], 16, 530742520),
                    s = e(l ^ c ^ o, s, l, r[d + 2], 23, -995338651),
                    o = n(o, s, l, c, r[d + 0], 6, -198630844),
                    c = n(c, o, s, l, r[d + 7], 10, 1126891415),
                    l = n(l, c, o, s, r[d + 14], 15, -1416354905),
                    s = n(s, l, c, o, r[d + 5], 21, -57434055),
                    o = n(o, s, l, c, r[d + 12], 6, 1700485571),
                    c = n(c, o, s, l, r[d + 3], 10, -1894986606),
                    l = n(l, c, o, s, r[d + 10], 15, -1051523),
                    s = n(s, l, c, o, r[d + 1], 21, -2054922799),
                    o = n(o, s, l, c, r[d + 8], 6, 1873313359),
                    c = n(c, o, s, l, r[d + 15], 10, -30611744),
                    l = n(l, c, o, s, r[d + 6], 15, -1560198380),
                    s = n(s, l, c, o, r[d + 13], 21, 1309151649),
                    o = n(o, s, l, c, r[d + 4], 6, -145523070),
                    c = n(c, o, s, l, r[d + 11], 10, -1120210379),
                    l = n(l, c, o, s, r[d + 2], 15, 718787259),
                    s = n(s, l, c, o, r[d + 9], 21, -343485551),
                    o = a(o, u),
                    s = a(s, p),
                    l = a(l, f),
                    c = a(c, h)
                }
                for (r = [o, s, l, c], o = "", s = 0; s < 4 * r.length; s++) o += "0123456789abcdef".charAt(r[s >> 2] >> s % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(r[s >> 2] >> s % 4 * 8 & 15);
                return o
            }
        }
    } (),
    u = {
        getTemplate: function(e, t, i, n) {
            "undefined" != typeof i && (i = i.replace(/{#}/g, n), t = t.replace(/{#}/g, n), u.loadCss(i)),
            i = (new Date).getTime(),
            n = t.match(/#{[a-z_A-Z0-9]{1,}}/g) || [];
            for (var a = [], o = 0; o < n.length; o++) {
                var r = n[o].replace(/^#{?|}$/g, "");
                t = t.replace(n[o], r + i),
                a.push(r)
            }
            for (e.innerHTML = t, o = 0; o < a.length; o++) r = a[o],
            e[r] = u.$E(r + i);
            return a
        },
        loadCss: function(t) {
            var i = e.head || e.getElementsByTagName("head")[0] || e.documentElement,
            n = e.createElement("style");
            n.setAttribute("type", "text/css"),
            n.innerHTML = t,
            i.appendChild(n)
        },
        $E: function(t) {
            return t = "string" == typeof t ? e.getElementById(t) : t,
            null != t ? t: null
        },
        $C: function(t) {
            return e.createElement(t)
        },
        hasClassName: function(e, t) {
            if (e) {
                var i = e.className;
                return 0 != i.length && !(i != t && !i.match(new RegExp("(^|\\s)" + t + "(\\s|$)")))
            }
        },
        addClassName: function(e, t) {
            if (e) {
                var i = e.className;
                0 == i.length ? e.className = i: i == t || i.match(new RegExp("(^|\\s)" + t + "(\\s|$)")) || (e.className = i + " " + t)
            }
        },
        removeClassName: function(e, t) {
            if (e) {
                var i = e.className;
                0 != i.length && (i == t ? e.className = "": i.match(new RegExp("(^|\\s)" + t + "(\\s|$)")) && (e.className = i.replace(new RegExp("(^|\\s)" + t + "(\\s|$)"), " ")))
            }
        },
        addEvent: function(e, t, i) {
            if ( - 1 != t.indexOf(",")) {
                t = t.split(",");
                for (var n = 0,
                a = t.length; n < a; n++) {
                    var o = t[n];
                    if ("" == o) break;
                    e.attachEvent ? e.attachEvent("on" + o, i) : e.addEventListener(o, i, !1)
                }
            } else e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i, !1)
        },
        removeEvent: function(e, t, i) {
            if (e = this.$E(e), null != e && "function" == typeof i && "undefined" != typeof t) if ( - 1 != t.indexOf(",")) {
                t = t.split(",");
                for (var n = 0,
                a = t.length; n < a; n++) {
                    var o = t[n];
                    if ("" == o) break;
                    e.addEventListener ? e.removeEventListener(o, i, !1) : e.attachEvent && e.detachEvent("on" + o, i)
                }
            } else e.addEventListener ? e.removeEventListener(t, i, !1) : e.attachEvent && e.detachEvent("on" + t, i)
        },
        getPos: function(t) {
            if (t = this.$E(t), t.getBoundingClientRect) {
                var i = "CSS1Compat" == e.compatMode ? e.documentElement: e.body;
                return t = t.getBoundingClientRect(),
                {
                    x: t.left + i.scrollLeft,
                    y: t.top + i.scrollTop
                }
            }
            for (i = y_ = 0; t.offsetParent;) i += t.offsetLeft,
            y_ += t.offsetTop,
            t = t.offsetParent;
            return i += t.offsetLeft,
            y_ += t.offsetTop,
            {
                x: i,
                y: y_
            }
        },
        getMousePoint: function(t) {
            var i = "createTouch" in e,
            n = y = 0,
            a = e.documentElement,
            o = e.body;
            return t || (t = window.event),
            window.pageYOffset ? (n = window.pageXOffset, y = window.pageYOffset) : (n = (a && a.scrollLeft || o && o.scrollLeft || 0) - (a && a.clientLeft || o && o.clientLeft || 0), y = (a && a.scrollTop || o && o.scrollTop || 0) - (a && a.clientTop || o && o.clientTop || 0)),
            i ? (t = t.touches.item(0), n = t.pageX, y = t.pageY) : (n += t.clientX, y += t.clientY),
            {
                x: n,
                y: y
            }
        },
        preventDefault: function(e) {
            e ? e.preventDefault() : window.event.returnValue = !1
        },
        turnEvent: function(e) {
            var t = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend",
                mouseover: "touchstart",
                mouseout: "-",
                click: "touchstart"
            };
            return u.isSupportsTouches() && t.hasOwnProperty(e) ? t[e] : e
        },
        isSupportsTouches: function(t) {
            return "createTouch" in e
        },
        drag: function(t, i) {
            var n = "createTouch" in e,
            a = u.turnEvent("mousedown"),
            o = u.turnEvent("mousemove"),
            r = u.turnEvent("mouseup");
            "string" == typeof t && (t = e.getElementById(t)),
            t.orig_index = t.style.zIndex,
            t.startX = 0,
            t.startY = 0,
            t["on" + a] = function(a) {
                var s, l;
                function c(a) {
                    return a || (a = window.event),
                    n ? (a = a.touches.item(0), s = a.pageX - f, l = a.pageY - h) : (s = a.pageX ? a.pageX - f: a.clientX + e.body.scrollLeft - f, l = a.pageY ? a.pageY - h: a.clientY + e.body.scrollTop - h),
                    s = g.x + s,
                    l = g.x + l,
                    m && (s < m.x ? s = m.x: s > m.x + m.w && (s = m.x + m.w), l < m.y ? l = m.y: l > m.y + 0 + m.h && (l = m.y + m.h)),
                    t.style.left = s + "px",
                    t.style.top = l + "px",
                    i.onMove && i.onMove((parseInt(t.style.left) - m.x) / m.w),
                    !1
                }
                function d() {
                    t.releaseCapture ? t.releaseCapture() : window.captureEvents && window.captureEvents(k.MOUSEMOVE | k.MOUSEUP),
                    u.removeEvent(p, o, c),
                    u.removeEvent(p, r, d),
                    t.style.zIndex = t.orig_index,
                    i.onUp && i.onUp((parseInt(t.style.left) - m.x) / m.w)
                }
                var p = e;
                l = s = void 0;
                var f, h, m;
                this.style.zIndex = 1e4,
                i.rect && (m = i.rect()),
                a || (a = window.event),
                a.preventDefault(),
                n ? (a = a.touches.item(0), f = a.pageX, h = a.pageY) : (f = a.clientX + p.body.scrollLeft, h = a.clientY + p.body.scrollTop);
                var g = {
                    x: parseInt(t.offsetLeft),
                    y: parseInt(t.offsetTop)
                };
                return p.ondragstart = "return false;",
                p.onselectstart = "return false;",
                p.onselect = "document.selection.empty();",
                t.setCapture ? t.setCapture() : window.captureEvents && window.captureEvents(k.MOUSEMOVE | k.MOUSEUP),
                i.onDown && i.onDown((parseInt(t.style.left) - m.x) / m.w),
                u.addEvent(p, o, c),
                u.addEvent(p, r, d),
                !1
            }
        },
        fullScreen: function(e) {
            return e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.oRequestFullscreen ? e.oRequestFullscreen() : void 0
        },
        isFullScreen: function() {
            return !! (e.webkitIsFullScreen || e.fullscreen || e.mozFullScreen || e.msFullscreenElement)
        },
        cancelFullScreen: function() {
            e.cancelFullscreen ? e.cancelFullscreen() : e.exitFullscreen ? e.exitFullscreen() : e.msExitFullscreen ? e.msExitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.webkitExitFullscreen ? e.webkitExitFullscreen() : e.webkitCancelFullScreen && element.webkitCancelFullScreen()
        },
        supportFullScreen: function() {
            var t = e.documentElement;
            return "requestFullscreen" in t || "mozRequestFullScreen" in t && e.mozFullScreenEnabled || "webkitRequestFullscreen" in t || "msRequestFullscreen" in t
        },
        getClientWidth: function() {
            return e.body.clientWidth
        },
        getImgRealRect: function(e) {
            var t = e.width,
            i = e.height;
            return "undefined" != typeof e.naturalWidth && (t = e.naturalWidth, i = e.naturalHeight),
            {
                width: t,
                height: i
            }
        },
        isMobileEvent: function(e) {
            return - 1 != ["touchstart", "touchmove", "touchend"].indexOf(e)
        },
        hexToRgba: function(e, t) {
            var i = e.toLowerCase(),
            n = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            if (i && n.test(i)) {
                if (4 === i.length) {
                    for (var a = "#",
                    n = 1; 4 > n; n += 1) a += i.slice(n, n + 1).concat(i.slice(n, n + 1));
                    i = a
                }
                for (a = [], n = 1; 7 > n; n += 2) a.push(parseInt("0x" + i.slice(n, n + 2)));
                return "RGBA(" + a.join(",") + "," + t + ")"
            }
            return i
        },
        setCanvasColor: function(e, t) {
            for (var i = e.getContext("2d"), n = i.getImageData(0, 0, e.width, e.height), a = 0; a < n.data.length; a += 4) if (0 != n.data[a + 3]) {
                var o = t.toLocaleLowerCase(),
                o = o.replace(/rgba\(|\)/g, "").split(",");
                n.data[a] = o[0],
                n.data[a + 1] = o[1],
                n.data[a + 2] = o[2]
            }
            i.putImageData(n, 0, 0)
        }
    };
    i.shareObj("common.UiTool", u);
    var p = {
        isString: function(e) {
            return "string" == typeof e
        },
        stringToJson: function(e) {
            if (!this.isString(e)) return e;
            try {
                return window.JSON.parse(e)
            } catch(t) {
                return {}
            }
        },
        isJson: function(e) {
            return ! (!e || "object" != typeof e || "Object" !== e.constructor)
        },
        jsonToString: function(e) {
            var t = "";
            try {
                t = window.JSON.stringify(e)
            } catch(i) {
                t = i
            }
            return t
        }
    },
    f = function() {
        var t = "",
        i = [];
        return {
            log: function(n, a, o) {
                if (a = "undefined" != typeof a ? "[" + a.constructor.name + "]": "-", o = "undefined" != typeof o ? o: "-", t != n) try {
                    var r = new Date,
                    s = "[" + r.getFullYear() + "-" + r.getMonth() + "-" + r.getDate() + " " + r.getHours() + ":" + r.getMinutes() + ":" + r.getSeconds() + ":" + r.getMilliseconds() + "]";
                    if (i.push(s + n + "  target-->" + a), 1e3 < i.length && i.shift(), -1 == window.location.href.indexOf("#dSDK=1") && "file" != window.location.href.substr(0, 4).toLocaleLowerCase() || ( - 1 != window.location.href.indexOf("#stack=1") && console.log(Error().stack), window.console && window.console.log(n, a, o, s)), -1 != window.location.href.indexOf("#dSDK=2")) {
                        if (e.getElementById("log")) var l = e.createElement("DIV");
                        else {
                            var c = e.createElement("DIV");
                            c.id = "log",
                            e.body.appendChild(c),
                            l = e.createElement("DIV")
                        }
                        l.innerHTML = n + a + s,
                        e.getElementById("log").appendChild(l),
                        t = n
                    }
                } catch(d) {}
            },
            getLog: function(e) {
                return i.join("<br>\r\n")
            }
        }
    } ();
    f.log("js 加载成功  ua:" + window.navigator.userAgent);
    var h = function() {
        var t = e.createElement("DIV");
        t.style.cssText = "width:85%;height:80%;position:fixed;left:0px;top:0px;z-index: 3000;background-color:rgba(255, 255, 255, 1);";
        var i = e.createElement("IFRAME");
        i.name = "submit",
        i.style.cssText = "display:none;position:absolute;";
        var n = e.createElement("form");
        return {
            print: function(i, n) {
                t.innerHTML = '<div style="width:100%;"><span>用户id:</span><input type="text" style="width:300px;"><input style="float:right;" type="button" value="关闭"></div><textarea class="input" style="width: 100%;height: 100%"  placeholder="Once upon a time..."></textarea>',
                e.body.appendChild(t),
                t.style.display = "",
                t.getElementsByTagName("textarea")[0].innerHTML = i;
                var a = t.getElementsByTagName("input")[0];
                t.getElementsByTagName("input")[1].onclick = function() {
                    t.style.display = "none"
                },
                a.value = n
            },
            report: function(t, a) {
                e.body.appendChild(i),
                n.innerHTML = "",
                n.action = t,
                n.method = "post",
                n.target = "submit",
                n.style.display = "none";
                for (var o in a) {
                    var r = e.createElement("textarea");
                    r.name = o,
                    r.value = a[o],
                    n.appendChild(r)
                }
                e.body.appendChild(n),
                n.submit()
            }
        }
    } (),
    m = {
        isSupportFlash: !1,
        isEmdbed: !1,
        num: 0,
        check: function(e) {
            var t = "";
            if ("undefined" != typeof window.ActiveXObject) try {
                t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
            } catch(i) {}
            if (window.navigator.plugins && window.navigator.plugins["Shockwave Flash"]) try {
                t = window.navigator.plugins["Shockwave Flash"].description,
                this.isEmdbed = !0
            } catch(n) {}
            "" == t && (this.isSupportFlash = !1);
            for (var t = t.split(/\s+/), a = 0, o = t.length; a < o; a++) parseInt(t[a]) > e && (this.isSupportFlash = !0);
            return this.isSupportFlash
        },
        getPlayer: function(t) {
            return this.isEmdbed ? e[t] || window[t] : e.getElementById(t)
        },
        create: function(t, i, n) {
            var a = "cloudPlayer" + (new Date).getTime() + this.num;
            this.num++;
            var o, r = {
                bgcolor: "#000000",
                allowscriptaccess: "always",
                wmode: "Opaque",
                width: "100%",
                height: "100%",
                align: "middle",
                quality: "high",
                allowFullScreen: !0,
                version: 10
            };
            for (o in i) r[o] = i[o];
            if (r.flashvars = n, i = "", this.check(r.version)) {
                if (this.isEmdbed) for (o in n = ["<embed name='" + a + "'src='" + r.url + "' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='" + r.width + "' height='" + r.height + "' ", " />"], i = "", r)"width" != o && "height" != o && "url" != o && (i += o + "='" + r[o] + "' ");
                else for (o in i = "", n = ["<object id='" + a + "' classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,45,0' type='application/x-shockwave-flash' width='" + r.width + "' height='" + r.height + "'><param name='movie' value='" + r.url + "'/>", "</object>"], r)"width" != o && "height" != o && "url" != o && (i += "<param name='" + o + "' value='" + r[o] + "'/>");
                i = n.join(i)
            } else i = '<div style="width:' + r.width + "px; height:" + r.height + 'px; text-align:center;"><span style="line-height:200%; font-size:18px">安装或者更新版本不小于<b style="color:red">' + r.version + '</b>的flash播放器, 请点击<a href="http://get.adobe.com/cn/flashplayer/" target="_blank">这里</a>安装</span></div>';
            return "string" == typeof t && "" != t && e.getElementById(t) ? e.getElementById(t).innerHTML = i: e.write(i),
            a
        }
    },
    g = function() {
        var e = {};
        return {
            inherits: function(e, t) {
                function i() {}
                try {
                    i.prototype = t.prototype,
                    e.prototype = new i,
                    e.prototype.constructor = e,
                    e.prototype.superClass = t.prototype
                } catch(n) {}
            },
            provideClass: function(e, t) {
                var i = e.split(".");
                if (1 < i.length) for (var n = 0; n < i.length - 1; n++) {
                    var a = i[n];
                    last.hasOwnProperty(a) || (last[a] = {}),
                    last = last[a]
                }
                last[i[i.length - 1]] = t
            },
            importClass: function(t) {
                for (var i = t.split("."), n = e, a = 0; a < i.length - 1; a++) {
                    var o = i[a];
                    if (!n.hasOwnProperty(o)) throw "the " + t + "--" + o + " class is not provide";
                    n = n[o]
                }
                return n
            }
        }
    } ();
    i.shareObj("common.ClassTool", g);
    var v = function() {
        var t = "cid pid vid mmsid pic title url nextvid nextpic nexttitle nexturl nextchapter duration total percent rotation fullscreen color volume jump continuePlay gpu gpuing definition defaultDefinition trylook fullScale originalScale originalRect".split(" "),
        i = {
            57 : "180",
            58 : "180",
            1 : "350",
            21 : "350",
            9 : "350",
            161 : "350",
            16 : "1000",
            13 : "1000",
            162 : "1000",
            17 : "1300",
            22 : "1300",
            163 : "1300",
            27 : "yuanhua",
            28 : "yuanhua",
            18 : "720p",
            51 : "720p",
            35 : "1080p",
            52 : "1080p",
            20 : "1080p",
            36 : "1080p",
            54 : "k4"
        };
        return {
            defList: "180 350 1000 1300 yuanhua 720p 1080p k4".split(" "),
            settingList: function() {
                return t
            },
            getHttpsDomain: function(e) {
                if ("https:" == window.location.protocol) {
                    e = e.split("://")[1];
                    var t = {
                        "yuntv.letv.com": "s.yuntv.letv.com",
                        "ark.letv.com": "arkletv.lecloud.com",
                        "api.letvcloud.com": "apiletv.lecloud.com",
                        "sdk.lecloud.com": "sdkletv.lecloud.com"
                    };
                    return t.hasOwnProperty(e) && (e = t[e]),
                    "https://" + e
                }
                return e
            },
            checkPlayType: function() {
                var t = "samsung-sm-n9009__weibo__5.1.2__android__android4.3;HUAWEI MT1-T00 Build/HuaweiMT1-T00;cpqb;360zqb;p6-t00;sm-n9008;sm-;samsung;huawei;android.+chrome".split(";");
                switch (o.getDevice()) {
                case "ipad":
                case "iphone":
                    return "ios";
                case "androidPad":
                case "androidPhone":
                case "android":
                    if ("mp4" == o.getLocal("playType")) break;
                    for (var i = navigator.userAgent.toLowerCase(), n = 0; n < t.length; n++) if ( - 1 != i.indexOf(t[n].toLowerCase())) return "mp4";
                    if (/samsung/i.test(i) && /weibo/i.test(i)) break;
                    if (e.createElement("video") && "" == e.createElement("video").canPlayType("application/x-mpegURL")) break;
                    return "ios"
                }
                return "mp4"
            },
            def2Type: function(e, t) {
                return t.hasOwnProperty(e) ? t[e] : e
            },
            type2Def: function(e) {
                return i.hasOwnProperty(e) ? i[e] : e
            },
            initTypeDefObj: function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    i.hasOwnProperty(a) && (t[i[a]] = a)
                }
            }
        }
    } (),
    w = {
        PARAMS: "1",
        NOSTART: "2",
        INTERRUPT: "3",
        END: "7",
        NOPLAN: "4",
        PEOPLE_OUT: "5",
        WHITE_LIST: "6",
        ACTIVITY_IO: "60",
        ACTIVITY_TIMEOUT: "61",
        ACTIVITY_ANALY: "63",
        NOSTREAM: "64",
        LIVE_ANALY: "50",
        LIVE_IO: "51",
        LIVE_TIMEOUT: "53",
        PLAY_IO: "480",
        PLAY_TIMEOUT: "481",
        VOD_CONFIG_IO: "150",
        VOD_CONFIG_TIMEOUT: "152",
        VOD_MMSID_ANALY: "153",
        VOD_CONFIG_DRM: "154",
        GSLB_IO: "470",
        GSLB_ANALY: "473",
        NOSupport: "490"
    };
    i.shareObj("manager.ColorManager",
    function() {
        function e() {
            this.managerDsipayList = [],
            this.cList = [],
            this.colorConfig = {
                bgColor: "#000000",
                fault: "#aaaaaa",
                active: "#208ac3"
            }
        }
        var t = i.getObj("common.UiTool");
        return e.prototype.setColor = function(e, i, n, a) {
            "undefined" == typeof n && (n = "bg"),
            "undefined" == typeof a && (a = 1),
            e.setColor(t.hexToRgba(this.colorConfig[i], a), n);
            var o = this.managerDsipayList.indexOf(e); - 1 == o ? (this.managerDsipayList.push(e), this.cList.push({
                display: e,
                key: i,
                type: n,
                alpha: a
            })) : (this.cList[o].key = i, this.cList[o].type = n, this.cList[o].alpha = a)
        },
        e.prototype.register = function(e) {
            for (var t in e) this.colorConfig.hasOwnProperty(t) && ("0x" == e[t].substr(0, 2) && (e[t] = e[t].substr(2)), "#" != e[t].substr(0, 1) ? this.colorConfig[t] = "#" + e[t] : this.colorConfig[t] = e[t])
        },
        e.prototype.refresh = function(e) {
            for (this.register(e), e = 0; e < this.cList.length; e++) this.cList[e].display.setColor(t.hexToRgba(this.colorConfig[this.cList[e].key], this.cList[e].alpha), this.cList[e].type)
        },
        e
    } ());
    var b = function() {
        function e() {
            this.init()
        }
        return e.prototype = {
            init: function() {},
            addEventListener: function(e, t, i, n) {
                if ("undefined" == typeof e) throw this.log(e),
                Error("type is undefined");
                if ("undefined" == typeof t) throw this.log(t),
                Error("handler is undefined");
                "undefined" == typeof i && (i = this),
                this.hasOwnProperty("EventMap") || (this.EventMap = {}),
                this.EventMap.hasOwnProperty(e) || (this.EventMap[e] = []),
                this.hasEventListener(e, t, i) || this.EventMap[e].push({
                    fun: t,
                    target: i
                })
            },
            hasEventListener: function(e, t, i) {
                if ("undefined" == typeof e) throw this.log(e),
                Error("type is undefined");
                if ("undefined" == typeof t) throw this.log(t),
                Error("handler is undefined");
                if ("undefined" == typeof i) throw this.log(i),
                Error("handlerThis is undefined");
                if (this.hasOwnProperty("EventMap") && this.EventMap.hasOwnProperty(e)) for (var n = 0; n < this.EventMap[e].length; n++) {
                    var a = this.EventMap[e][n];
                    if (a.fun == t && a.target == i) return ! 0
                }
                return ! 1
            },
            dispatchEvent: function(e) {
                var t = e.type;
                if (e.target = this, this.hasOwnProperty("EventMap") || (this.EventMap = {}), this.EventMap.hasOwnProperty(t)) {
                    for (var i = [], n = 0; n < this.EventMap[t].length; n++) i.push(this.EventMap[t][n]);
                    for (n = 0; n < i.length; n++) i[n].fun.call(this.EventMap[t][n].target, e)
                }
            },
            removeEventListener: function(e, t, i) {
                if (this.hasOwnProperty("EventMap") || (this.EventMap = {}), this.EventMap.hasOwnProperty(e)) for (var n = 0; n < this.EventMap[e].length; n++) if (this.EventMap[e][n].fun == t && this.EventMap[e][n].target == i) {
                    this.EventMap[e].splice(n, 1),
                    0 == this.EventMap[e].length && delete this.EventMap[e];
                    break
                }
            },
            destroy: function() {
                for (var e in this.EventMap) delete this.EventMap[e];
                this.EventMap = null
            },
            log: function(e) {
                f.log(e, this)
            }
        },
        e
    } ();
    i.shareObj("core.ClassObject", b);
    var x = function() {
        function e(e, t) {
            this.init(e, t)
        }
        return g.inherits(e, b),
        e.prototype.init = function(e, t) {
            this.facade = e,
            this.model = t
        },
        e
    } (),
    k = function() {
        return function() {
            this.type = arguments[0],
            this.args = arguments
        }
    } ();
    i.shareObj("core.Event", k);
    var T = function() {
        function e() {}
        var t = i.getObj("manager.ColorManager");
        return g.inherits(e, i.getObj("core.ClassObject")),
        e.prototype.init = function(e) {
            this.color = new t,
            this.color.register(e)
        },
        e
    } ();
    i.shareObj("core.Facade", T);
    var C = function() {
        function e() {}
        return g.inherits(e, b),
        e.prototype.load = function(e) {
            this.loader = new _,
            this.isClose = !1,
            e = this.getRequestList(),
            2 == this.requestType ? this.loader.load2(e, this.loadCmp, this.loadError, this) : this.loader.load(e, this.loadCmp, this.loadError, this)
        },
        e.prototype.getUrl = function(e) {
            return 1 < this.loader.urlList.length ? this.loader.urlList[0].url: ""
        },
        e.prototype.getRequestList = function(e) {
            return []
        },
        e.prototype.unload = function(e) {
            this.loader && this.loader.destroy(),
            this.isClose = !0
        },
        e.prototype.loadCmp = function(e, t) { ! this.isClose && this.dispatchEvent(new k(D.LOADCMP, [e, t]))
        },
        e.prototype.loadError = function(e, t) { ! this.isClose && this.dispatchEvent(new k(D.LOADERROR, [e, t]))
        },
        e
    } (),
    $ = function() {
        function e() {}
        return g.inherits(e, b),
        e.prototype.initPlugin = function(e, t, i) {
            this.pluginCmpFun = t,
            this.REConf = i,
            this.REConf.hasOwnProperty(e.type) ? (t = this.REConf[e.type], t.hasOwnProperty("check") ? "function" == typeof t.check ? t.check() ? this.load(e) : e.onerror(t.err) : t.check ? this.load(e) : e.onerror(t.err) : this.load(e)) : (this.pluginCmpFun(null), e.onstart())
        },
        e.prototype.load = function(e) {
            var t = this;
            t.pl = this.REConf[e.type],
            i.getPlugin(t.pl.name,
            function(e) {
                e ? t.pluginCmpFun(e) : t.onerror({
                    code: 420,
                    message: "插件加载错误"
                })
            })
        },
        e
    } (),
    S = function() {
        function e(e, t) {
            this.facade = e,
            this.model = t,
            this.init()
        }
        return g.inherits(e, b),
        e.prototype.init = function() {
            this.tplKey = "view",
            this.addEvent = !0
        },
        e.prototype.setUp = function(e, t, i) {
            if ("undefined" == typeof i && (i = ""), i = I.SkinTpl[this.tplKey] || i, this.el = u.$E(e), this.skin = new E(this.el), e = u.getTemplate(this.el, i), t) for (t = 0; t < e.length; t++) this.el[e[t]] = new E(this.el[e[t]]);
            this.addEvent && this.facade.addEventListener(N.EVENT, this.skinHandler, this)
        },
        e.prototype.skinHandler = function(e) {},
        e.prototype.setSize = function(e, t) {},
        e.prototype.show = function() {
            this.skin.setVisible(!0)
        },
        e.prototype.hide = function() {
            this.skin.setVisible(!1)
        },
        e
    } ();
    i.shareObj("core.View", S);
    var E = function() {
        function t(e, t) {
            this.init(e),
            "undefined" == typeof t && (t = window.CloudSdkPlugin.skinUuid),
            this.sid = t
        }
        var n = i.getObj("common.ClassTool"),
        a = i.getObj("core.ClassObject"),
        r = i.getObj("common.UiTool");
        return n.inherits(t, a),
        t.prototype.init = function(e) {
            this.el = e
        },
        t.prototype.render = function(t) {
            if (this.el.hasAttribute("render-data")) {
                var i = o.split(this.el.getAttribute("render-data"), ";", 3),
                n = i[1],
                a = i[2];
                switch (i[0]) {
                case "canvas":
                    if ("img" == n) if (this.renderCanvas) this.el.hasOwnProperty("renderOption") ? this.el.renderOption = t: r.setCanvasColor(this.renderCanvas, t.color);
                    else {
                        var i = o.split(a, ";", 3),
                        s = e.createElement("img"),
                        l = e.createElement("canvas");
                        s.width = i[0],
                        s.height = i[1],
                        this.el.appendChild(l),
                        l.width = s.width,
                        l.height = s.height,
                        this.renderCanvas = l,
                        this.el.renderOption = t,
                        s.onload = o.bindFun(function() {
                            l.getContext("2d").drawImage(s, 0, 0),
                            r.setCanvasColor(l, this.el.renderOption.color),
                            delete this.el.renderOption
                        },
                        this),
                        s.src = i[2]
                    }
                }
            }
        },
        t.prototype.addEventListener = function(e, t, i) {
            e = r.turnEvent(e),
            "-" != e && r.addEvent(this.el, e, t)
        },
        t.prototype.removeEventListener = function(e, t, i) {
            e = r.turnEvent(e),
            r.removeEvent(this.el, e, t)
        },
        t.prototype.drag = function(e) {
            r.drag(this.el, e)
        },
        t.prototype.setButtonMode = function(e) {
            this.el.style.cursor = e ? "pointer": "default"
        },
        t.prototype.setEnabled = function(e) {
            this.el.style.pointerEvents = e ? "auto": "none"
        },
        t.prototype.setVisible = function(e) {
            e ? (this.el.style.display = "block", this.setAttribute({
                orgwidth: this.el.offsetWidth,
                orgheight: this.el.offsetHeight
            })) : this.el.style.display = "none"
        },
        t.prototype.getVisible = function() {
            return "none" != this.el.style.display
        },
        t.prototype.setWidth = function(e) {
            e += "",
            -1 != e.indexOf("%") ? this.el.style.width = e: this.el.style.width = e + "px"
        },
        t.prototype.getWidth = function() {
            return 0 == this.el.offsetWidth ? this.getAttribute("orgwidth") : this.el.offsetWidth
        },
        t.prototype.setHeight = function(e) {
            e += "",
            -1 != e.indexOf("%") ? this.el.style.height = e: this.el.style.height = e + "px"
        },
        t.prototype.getHeight = function() {
            return 0 == this.el.offsetHeight ? this.getAttribute("orgheight") : this.el.offsetHeight
        },
        t.prototype.setX = function(e) {
            e += "",
            -1 != e.indexOf("%") ? this.el.style.left = e: this.el.style.left = e + "px"
        },
        t.prototype.getX = function() {
            return this.el.offsetLeft
        },
        t.prototype.setY = function(e) {
            e += "",
            -1 != e.indexOf("%") ? this.el.style.top = e: this.el.style.top = e + "px"
        },
        t.prototype.getY = function() {
            return this.el.offsetTop
        },
        t.prototype.appendChild = function(e) {
            e.hasOwnProperty("el") && (e = e.el),
            this.el.appendChild(e)
        },
        t.prototype.setColor = function(e, t) {
            "bg" == t ? this.el.hasAttribute("render-data") ? this.render({
                color: e
            }) : this.el.style.backgroundColor = e: "text" == t && (this.el.style.color = e)
        },
        t.prototype.html = function(e) {
            this.el.innerHTML = e
        },
        t.prototype.gethtml = function(e) {
            return this.el.innerHTML
        },
        t.prototype.setClassName = function(e) {
            e = e.split(" ").join(this.sid + " "),
            e += this.sid,
            this.el.className = e
        },
        t.prototype.hasClassName = function(e) {
            return e = e.split(" ").join(this.sid + " "),
            e += this.sid,
            r.hasClassName(this.el, e)
        },
        t.prototype.addClassName = function(e) {
            e = e.split(" ").join(this.sid + " "),
            e += this.sid,
            r.addClassName(this.el, e)
        },
        t.prototype.removeClassName = function(e) {
            e = e.split(" ").join(this.sid + " "),
            e += this.sid,
            r.removeClassName(this.el, e)
        },
        t.prototype.getAttribute = function(e) {
            return this.el.getAttribute(e)
        },
        t.prototype.hasAttribute = function(e) {
            return this.el.hasAttribute(e)
        },
        t.prototype.setAttribute = function(e) {
            for (var t in e) this.el.setAttribute(t, e[t])
        },
        t.prototype.removeAttribute = function(e) {
            if (o.isArray(e)) for (var t = 0; t < e.length; t++) this.el.removeAttribute(e[t]);
            else this.el.removeAttribute(e)
        },
        t.prototype.setStyle = function(e) {
            for (var t in e) this.el.style[t] = e[t]
        },
        t
    } ();
    i.shareObj("core.view.DisplayObject", E),
    i.shareObj("core.view.display.DisplayObject", E);
    var P = function() {
        function e(e, t, i) {
            this.init(e, i),
            "undefined" == typeof t && (t = window.CloudSdkPlugin.skinUuid),
            this.sid = t
        }
        var t = i.getObj("common.ClassTool"),
        n = i.getObj("core.ClassObject");
        return i.getObj("common.UiTool"),
        t.inherits(e, n),
        e.prototype.init = function(e, t) {
            this.percent = 0,
            this.view = e,
            this.rect = {
                x: .5 * -this.view.el.sliderOver.getWidth(),
                y: this.view.el.sliderOver.getY(),
                w: this.view.el.trackBg.getWidth(),
                h: 0
            },
            this.addEvents()
        },
        e.prototype.render = function(e) {},
        e.prototype.setPercent = function(e) {
            this.percent = e,
            this.updateView()
        },
        e.prototype.updateView = function(e) {
            e = this.percent * this.view.el.trackBg.getWidth(),
            this.view.el.track.setWidth(e),
            this.view.el.sliderOver.setX(this.rect.x + e)
        },
        e.prototype.addEvents = function(e, t, i) {
            var n = this;
            this.view.el.sliderOver.drag({
                rect: function() {
                    return n.rect
                },
                onDown: function(e) {
                    n.isSeeking = !0
                },
                onMove: function(e) {
                    n.seekHanler.apply(n, [!1])
                },
                onUp: function(e) {
                    n.seekHanler.apply(n, [!0]),
                    n.isSeeking = !1
                }
            })
        },
        e.prototype.seekHanler = function(e) {
            this.percent = (this.view.el.sliderOver.getX() - this.rect.x) / this.view.el.trackBg.getWidth(),
            this.updateView(),
            this.dispatchEvent(new k("change", this.percent))
        },
        e
    } ();
    i.shareObj("core.view.conttrols.DragBar", P);
    var _ = function() {
        function e() {}
        return e.prototype = {
            load: function(e, t, i, n) {
                this.urlList = e;
                var a = this,
                r = 0,
                s = o.now(),
                l = function() {
                    clearTimeout(a.delayID);
                    var e = a.getRealUrl(a.urlList[0]);
                    a.log("load url:" + e),
                    o.getJSON(e,
                    function(e, i) {
                        r += i.retryCount,
                        t && t.call(n, e, {
                            responseTime: o.now() - s,
                            retryCount: r
                        })
                    },
                    function(e, t) {
                        1 < a.urlList.length ? (r += a.urlList[0].maxCount, a.urlList.shift(), a.delayID = setTimeout(l, a.urlList[0].retryTime)) : (r += t.retryCount, i && i.call(n, null, {
                            responseTime: o.now() - s,
                            retryCount: r
                        }))
                    },
                    a.urlList[0].timeout, a.urlList[0].maxCount, a.urlList[0].retryTime)
                };
                l()
            },
            load2: function(e, t, i, n) {
                this.urlList = e;
                var a = this,
                r = 0,
                s = o.now(),
                l = function() {
                    clearTimeout(a.delayID);
                    var e = a.getRealUrl(a.urlList[0]);
                    a.log("load url:" + e),
                    o.getJSONbyAjax(e,
                    function(e, i) {
                        r += i.retryCount,
                        t && t.call(n, e, {
                            responseTime: o.now() - s,
                            retryCount: r
                        })
                    },
                    function(e, t) {
                        1 < a.urlList.length ? (r += a.urlList[0].maxCount, a.urlList.shift(), a.delayID = setTimeout(l, a.urlList[0].retryTime)) : (r += t.retryCount, i && i.call(n, null, {
                            responseTime: o.now() - s,
                            retryCount: r
                        }))
                    },
                    a.urlList[0].timeout, a.urlList[0].maxCount, a.urlList[0].retryTime)
                };
                l()
            },
            getRealUrl: function(e) {
                return o.isFunction(e.url) ? e.hasOwnProperty("args") ? e.url(e.args) : e.url() : e.url
            },
            destroy: function() {
                clearTimeout(this.delayID)
            },
            log: function(e) {
                f.log(e, this)
            }
        },
        e
    } (),
    A = function() {
        function e(e, t, i, n) {
            this.delay = e,
            this.timerHandler = i,
            this.handlerThis = t,
            "undefined" == typeof n && (n = 0),
            this.max = n,
            this.currentCount = this.T = 0,
            this.running = !0
        }
        return e.prototype = {
            start: function() {
                this.running = !0,
                this.checkTime(!1)
            },
            checkTime: function(e) {
                var t = this;
                return clearTimeout(this.T),
                e && (t.currentCount++, t.timerHandler.call(t.handlerThis), 0 < t.max && t.currentCount >= t.max) ? void t.stop() : void(t.T = setTimeout(function() {
                    t.checkTime.call(t, !0)
                },
                t.delay))
            },
            stop: function() {
                this.running = !1,
                clearTimeout(this.T)
            },
            reset: function() {
                this.stop(),
                this.currentCount = 0
            },
            clear: function() {
                this.handlerThis = this.timerHandler = this.delay = null,
                this.T = 0
            }
        },
        e
    } ();
    i.shareObj("core.util.Timer", A);
    var I = {
        SkinTpl: "",
        setPlayerCss: function(e) {
            "" != e && (e = "." + e + " "),
            e = "{id} img{width: auto !important;height: auto !important;}".replace(/{id}/g, e),
            u.loadCss(e)
        },
        setMediacontrols: function(e, t) {
            var i;
            "" != e && (e = "." + e + " "),
            i = "{id}video::-webkit-media-controls-enclosure,{id}video::-webkit-media-controls {display: {dislay} !important;}".replace(/{id}/g, e),
            i = t ? i.replace("{dislay}", "") : i.replace("{dislay}", "none"),
            u.loadCss(i)
        },
        setMediafullscreen: function(e, t) {
            var i;
            "" != e && (e = "." + e + " "),
            i = "{id}video::-webkit-media-controls-fullscreen-button {display: {dislay} !important;}".replace(/{id}/g, e),
            i = t ? i.replace("{dislay}", "") : i.replace("{dislay}", "none"),
            u.loadCss(i)
        },
        getSkinTpl: function(e, t, i, n) {
            "undefined" == typeof window.CloudSdkPlugin && (window.CloudSdkPlugin = {}),
            window.CloudSdkPlugin.skinUuid = o.creatUuid();
            var a = window.CloudSdkPlugin.skinUuid;
            if ("" == I.SkinTpl) {
                t = t.replace(/{#BGP}/g, i),
                t = t.replace(/{#}/g, a),
                u.loadCss(t);
                for (var r in e) for (e[r] = e[r].replace(/{#}/g, a), t = e[r].match(/{[a-z_A-Z0-9]{1,}\.[a-z_A-Z0-9]{1,}}/g) || [], i = 0; i < t.length; i++) {
                    var s = t[i].replace(/{|}/g, "").split("."),
                    l = s[0],
                    s = s[1];
                    n && n.hasOwnProperty(l) && n[l].hasOwnProperty(s) && (l = [l, n[l][s].width, n[l][s].height, n[l][s].src].join(";"), e[r] = e[r].replace(t[i], l))
                }
                I.SkinTpl = e
            }
        }
    };
    i.shareObj("core.SkinRender", I);
    var L = function() {
        return {
            EVENT: "adEvent",
            HEADSTART: "adHeadPlayStart",
            HEADEND: "adHeadPlayComplete",
            NOAD: "adHeadPlayNone"
        }
    } ();
    i.shareObj("event.AdEvent", L);
    var D = function() {
        return {
            LOADCMP: "loadcmp",
            LOADERROR: "loaderror"
        }
    } ();
    i.shareObj("event.LoadEvent", D);
    var O = function() {
        return {
            EVENT: "playerEvent",
            INIT: "playerInit",
            VIDEO_AUTH_VALID: "videoAuthValid",
            VIDEO_DATA_START: "videoDataStart",
            VIDEO_DATA_CMP: "videoDataCmp",
            GSLB_START: "gslbStart",
            GSLB_CMP: "gslbCmp",
            VPH: "videoPageHide",
            VPS: "videoPageShow",
            WPH: "webPageHide",
            ERROR: "playerError",
            RESIZE: "playerResize",
            VIDEO_INFO: "videoInfo",
            FULLSCREEN: "fullscreen",
            PRESIZE: "resize",
            VIDEO_LIVESTOP: "videoLiveStop",
            VIDEO_INTERRUPT: "videoLiveInterupt"
        }
    } ();
    i.shareObj("event.PlayerEvent", O);
    var M = function() {
        return {
            EVENT: "MediaEvent",
            CONNECT: "videoConnect",
            START: "videoStart",
            PLAY: "videoResume",
            STOP: "videoStop",
            PAUSE: "videoPause",
            BUFFEREMPTY: "videoEmpty",
            BUFFEREFULL: "videoFull",
            SEEK: "videoSeek",
            SEEKEMPTY: "videoSeekEmpty",
            PLAYING: "videoPlaying",
            LODING: "videoLoading",
            METADATA: "MetaData",
            DURATION: "videoDuration",
            DEFSTART: "swapDefinition",
            ERROR: "videoError",
            VOL: "vol",
            REPLAY: "videoReplay"
        }
    } ();
    i.shareObj("event.MediaEvent", M);
    var N = function() {
        return {
            EVENT: "skinEvent",
            PLAY: "skinPlay",
            PAUSE: "skinPause",
            SETDEFINITION: "setDefinition",
            SEEK: "skinSeek",
            VOLUME: "skinVolume",
            FULLSCREEN: "skinFullScreen",
            REPLAY: "skinReplay"
        }
    } ();
    i.shareObj("event.SkinEvent", N);
    var j = function() {
        function e() {
            for (var e = "mac nt os osv app bd xh ro cs ssid lo la".split(" "), t = this, i = 0; i < e.length; i++) this[e[i]] = "";
            this.refresh = function(e) {
                for (var i in e) t[i] = e[i]
            }
        }
        function t() {
            var e = this;
            this.autoplay = 0,
            this.refresh = function(t) {
                for (var i in t) e[i] = t[i]
            }
        }
        function i() {
            var e = this;
            this.refresh = function(t) {
                for (var i in t) e[i] = t[i]
            }
        }
        function n() {
            for (var e = ["userId"], t = this, i = 0; i < e.length; i++) this[e[i]] = "";
            this.refresh = function(e) {
                for (var i in e) t[i] = e[i]
            }
        }
        function a() {
            for (var e = "title duration volume definition defaultDefinition fullscreen percent time url videoWidth videoHeight".split(" "), t = this, i = 0; i < e.length; i++) this[e[i]] = "";
            this.definitionCount = 0,
            this.refresh = function(e) {
                for (var i in e) t[i] = e[i]
            }
        }
        function r() {
            this.systemData = new e,
            this.config = new t,
            this.reportParam = {},
            this.clear()
        }
        return r.prototype = {
            init: function(e) {
                switch (this.platform) {
                case "sdk":
                    this._uuid = "",
                    this.playType = e.ptype,
                    delete e.ptype;
                    for (var t = "autoplay uu vu liveId streamId activityId".split(" "), i = 0; i < t.length; i++) {
                        var n = t[i];
                        e.hasOwnProperty(n) && (this.config[n] = e[n], delete e[n])
                    }
                    this.systemData.refresh(e),
                    f.log("[Stat K]  model init:" + this.systemData.deviceId + "  _2016-07-13 14:48:05.201"),
                    this._apprunid = this.systemData.deviceId + "_" + o.now();
                    break;
                case "html5":
                    this.systemData.refresh(e),
                    this._apprunid = this.lc() + "_" + o.now()
                }
            },
            clear: function() {
                this._uuid = "",
                this._lc = o.getLocal("lc"),
                this.userData = new n,
                this.videoSetting = new a,
                this.playerConfig = new i,
                this.platform = "html5",
                this.playType = "vod"
            },
            uuid: function() {
                if ("sdk" == this.platform) {
                    if (this.videoSetting.hasOwnProperty("uuid") && 6 < this.videoSetting.uuid.length) return this.videoSetting.uuid;
                    var e = ExternalInterface.callSDK(this.systemData.os, "getVideoSetting", "");
                    if (this.videoSetting.refresh(e), this.videoSetting.hasOwnProperty("uuid") && 6 < this.videoSetting.uuid.length) return this.videoSetting.uuid
                }
                return "" == this._uuid && (this._uuid = o.creatUuid()),
                this._uuid + "_" + this.videoSetting.definitionCount
            },
            clearUuid: function() {
                this._uuid = ""
            },
            lc: function() {
                return null == this._lc && (this._lc = o.creatUuid(), o.setLocal("lc", this._lc)),
                this._lc
            },
            getTypeFrom: function() {
                var e = o.getUrlParams("ch");
                if (e) return e.toString();
                try {
                    if ("" != this.userInfo().userId) return "bcloud_" + this.userInfo().userId
                } catch(t) {}
                return "letv"
            },
            apprunid: function() {
                return this._apprunid
            },
            auid: function() {
                return this.systemData.deviceId
            },
            pcode: function() {
                return "-"
            },
            videoInfo: function() {
                switch (this.platform) {
                case "sdk":
                    var e = ExternalInterface.callSDK(this.systemData.os, "getVideoSetting", "");
                    return e.hasOwnProperty("cid") && "" != e.cid || (e.cid = 100),
                    e.hasOwnProperty("liveid") && (e.lid = e.liveid, delete e.liveid),
                    e.hasOwnProperty("time") && "" == e.time && (e.time = "0"),
                    this.videoSetting.refresh(e),
                    e;
                case "html5":
                    return e = this.api.getVideoInfo(),
                    this.videoSetting.refresh(e),
                    e
                }
            },
            userInfo: function() {
                switch (this.platform) {
                case "sdk":
                    if ("" == this.userData.userId) {
                        var e = ExternalInterface.callSDK(this.systemData.os, "getUserSetting", "");
                        this.userData.refresh(e)
                    }
                    return this.userData;
                case "html5":
                    return this.userData
                }
            }
        },
        r
    } (),
    z = function() {
        function e(e) {
            this.model = e,
            this.model.defaultDefinitionList = []
        }
        var t = d.hash("gpc_pet"),
        i = d.hash("gpc_playerInfo");
        return g.inherits(e, C),
        e.prototype.load = function(e) {
            this.curTime = 0,
            this.superClass.load.call(this, e)
        },
        e.prototype.getRequestList = function() {
            for (var e = [], i = ["//106.39.244.239/", "//111.206.211.221/", "//223.95.79.18/"], n = {
                cf: this.getCf(),
                ran: this.getCurTime(),
                pver: this.model.playerConfig.version,
                bver: encodeURIComponent(o.getBrowserVersion()),
                uuid: this.model.uuid(),
                pf: "html5",
                spf: this.getSpf(),
                p: this.getP()
            },
            a = v.getHttpsDomain("http://api.letvcloud.com") + "/gpc.php?format=jsonp&ver=2.4", r = "ark uu vu payer_name check_code pu".split(" "), s = 0; s < r.length; s++) {
                var l = r[s];
                this.model.config.hasOwnProperty(l) && (n[l] = this.model.config[l])
            }
            n.pet = Math.max(0, o.getLocal(t, !1) + 0),
            n.sign = this.getSign([n.cf, n.uu, n.vu, n.ran]);
            for (l in n) a += "&" + l + "=" + n[l];
            for (a += "&page_url=" + encodeURIComponent(window.location.href), e.push({
                url: a,
                timeout: 5e3,
                maxCount: 3,
                retryTime: 0
            }), s = 0; s < i.length; s++) - 1 != e[0].url.indexOf("//api.letvcloud.com/") && (n = a.replace("//api.letvcloud.com/", i[s]), e.push({
                url: n,
                timeout: 5e3,
                maxCount: 3,
                retryTime: 0
            }));
            return e
        },
        e.prototype.getP = function(e) {
            return this.model.config.hasOwnProperty("p") || (this.model.config.p = 101),
            this.model.config.p
        },
        e.prototype.getSign = function(e) {
            return d.hash(e.join("") + "fbeh5player12c43eccf2bec3300344")
        },
        e.prototype.getCurTime = function(e) {
            return 0 != this.curTime ? this.curTime: parseInt(.001 * o.now())
        },
        e.prototype.getCf = function() {
            switch (o.getDevice()) {
            case "ipad":
            case "iphone":
                return "html5_ios"
            }
            return "html5"
        },
        e.prototype.getSpf = function() {
            var e = o.getDevice(),
            t = {
                androidPhone: 0,
                iphone: 1,
                letvTv: 2,
                ipad: 3,
                androidPad: 4
            };
            return t.hasOwnProperty(e) ? t[e] : 0
        },
        e.prototype.loadCmp = function(e, n) {
            if (!this.isClose) {
                var a = this.model;
                if (this.log("gpc ok data:" + p.jsonToString(e) + "----time:" + p.jsonToString(n)), 0 == e.code) {
                    e = e.data;
                    var r = {};
                    r.userId = e.userinfo.userid,
                    a.userData.refresh(r),
                    r = {},
                    o.getLocal(t, !1) != e.playerinfo.pet && e.playerinfo.hasOwnProperty("logo") ? o.setLocal(i, p.jsonToString(e.playerinfo), !1) : (r = p.stringToJson(o.getLocal(i)), e.playerinfo = r);
                    var s = {
                        buttonColor: "fault",
                        progressBarColor: "active"
                    },
                    r = {};
                    r.mloadingUrl = "",
                    r.logo = e.playerinfo.logo,
                    r.watermark = e.playerinfo.watermark,
                    a.playerConfig.refresh(r),
                    !a.outConfig.hasOwnProperty("nskin") && e.playerinfo.hasOwnProperty("nskin") && (a.config.nskin = e.playerinfo.nskin);
                    for (var l in e.playerinfo.onoff) s.hasOwnProperty(l) && (e.playerinfo.onoff[s[l]] = e.playerinfo.onoff[l], delete e.playerinfo.onoff[l], l = s[l]),
                    a.outConfig.hasOwnProperty(l) || (a.config.hasOwnProperty(l) ? "boolean" == a.config[l] && (a.config[l] = "1" == e.playerinfo.onoff[l]) : a.config[l] = e.playerinfo.onoff[l]);
                    r = {},
                    r.pic = e.videoinfo.pic,
                    r.vid = e.videoinfo.vid,
                    r.cid = e.videoinfo.cid,
                    r.pid = e.videoinfo.pid,
                    r.title = e.videoinfo.name,
                    r.duration = e.videoinfo.duration,
                    r.defaultDefinition = e.videoinfo.medialist[0].vtype,
                    r.isdrm = e.videoinfo.isdrm,
                    r.ark = e.videoinfo.ark,
                    r.mmsid = e.videoinfo.mmsid,
                    r.pano = e.videoinfo.pa,
                    e.videoinfo.hasOwnProperty("businessline") && (r.p = e.videoinfo.businessline);
                    for (var s = {},
                    d = 0; d < e.videoinfo.medialist.length; d++) {
                        var u = e.videoinfo.medialist[d];
                        l = u.vtype,
                        s[l] = {},
                        s[l].urls = [];
                        for (var f = 0; f < u.urllist.length; f++) s[l].urls.push(this.checkGslbUrl(c.decode(u.urllist[f].url)));
                        s[l].videoWidth = u.vwidth,
                        s[l].videoHeight = u.vheight,
                        s[l].gbr = u.gbr,
                        s[l].vtype = u.vtype,
                        s[l].definition = u.definition,
                        s[l].videoType = u.urllist[0].videotype,
                        a.defaultDefinitionList.push(l)
                    }
                    r.media = s,
                    o.setLocal(t, e.playerinfo.pet, !1),
                    a.videoSetting.refresh(r),
                    this.dispatchEvent(new k(D.LOADCMP, [e, n]))
                } else "10071" == e.code ? (this.curTime = e.timestamp, this.reload()) : this.dispatchEvent(new k(D.LOADERROR, [{
                    code: w.VOD_MMSID_ANALY,
                    message: e.message
                },
                n]))
            }
        },
        e.prototype.reload = function() {
            this.unload(),
            this.superClass.load.call(this)
        },
        e.prototype.checkGslbUrl = function(e) {
            switch (o.getDevice()) {
            case "ipad":
            case "iphone":
                -1 == e.indexOf("&tss=ios&") && (e = -1 != e.indexOf("&tss=no&") ? e.replace("&tss=no&", "&tss=ios&") : e + "&tss=ios")
            }
            return e
        },
        e.prototype.loadError = function(e, t) {
            this.isClose || this.dispatchEvent(new k(D.LOADERROR, [{
                code: w.VOD_CONFIG_IO,
                errInfo: "url:" + this.getUrl()
            },
            t]))
        },
        e
    } (),
    R = function() {
        function e(e) {
            this.model = e,
            this.model.defaultDefinitionList = []
        }
        var t = d.hash("mms_pet"),
        i = d.hash("mms_playerInfo");
        return g.inherits(e, C),
        e.prototype.getRequestList = function() {
            for (var e = [], i = [], n = "cf uu vu format callback pageurl pver ran ver p pu pet userId utoken".split(" "), a = {},
            r = 0; r < n.length; r++) {
                var s = n[r];
                this.model.config.hasOwnProperty(s) && (a[s] = this.model.config[s])
            }
            for (a.cf = this.getCf(), a.p = this.model.config.p, a.format = "jsonp", a.pver = this.model.playerConfig.version, a.ran = this.getCurTime(), a.pet = Math.max(0, o.getLocal(t, !1) + 0), a.ver = "1.0", e.push({
                url: o.bindFun(function(e) {
                    a.callback = "vbk" + o.now() + Math.floor(100 * Math.random());
                    var t;
                    t = "http://api.mms.lecloud.com/v2/mms/play?cf=" + a.cf;
                    for (var i in a)"cf" != i && (t += "&" + i + "=" + encodeURIComponent(a[i]));
                    return a.pageurl = window.location.href,
                    i = this.getSign(a),
                    t += "&sign=" + i + "&pageurl=" + encodeURIComponent(a.pageurl),
                    "undefined" != typeof e && (t = t.replace("//api.mms.lecloud.com/", e)),
                    t
                },
                this),
                timeout: 5e3,
                maxCount: 3,
                retryTime: 0
            }), r = 0; r < i.length; r++) e.push({
                url: e[0].url,
                timeout: 5e3,
                maxCount: 3,
                retryTime: 0,
                args: i[r]
            });
            return e
        },
        e.prototype.getSign = function(e) {
            var t, i = [];
            for (t in e) i.push(t);
            i.sort(),
            t = "";
            for (var n = 0; n < i.length; n++) t += e[i[n]];
            return d.hash(t + "04c5e1e616f668bc559af2afa98b9a25")
        },
        e.prototype.getCf = function() {
            switch (o.getDevice()) {
            case "ipad":
                return "h5-ipad";
            case "iphone":
                return "h5-ios";
            case "androidPad":
                return "h5-androidpad";
            case "androidPhone":
                return "h5-android";
            case "wph":
            case "pc":
                return "h5-win";
            case "mac":
                return "h5-mac"
            }
            return this.model.config.hasOwnProperty("cf") ? this.model.config.cf: "other"
        },
        e.prototype.getSpf = function() {
            var e = o.getDevice(),
            t = {
                androidPhone: 0,
                iphone: 1,
                letvTv: 2,
                ipad: 3,
                androidPad: 4
            };
            return t.hasOwnProperty(e) ? t[e] : 0
        },
        e.prototype.getCurTime = function(e) {
            return this.curTime ? this.curTime: parseInt(.001 * o.now())
        },
        e.prototype.loadCmp = function(e, n) {
            if (!this.isClose) {
                var a = this.model;
                if (0 == e.code) {
                    e = e.data;
                    var r = {};
                    r.userId = e.userinfo.userid,
                    a.userData.refresh(r),
                    o.getLocal(t, !1) != e.playerinfo.pet && e.playerinfo.hasOwnProperty("logo") ? o.setLocal(i, p.jsonToString(e.playerinfo), !1) : (r = p.stringToJson(o.getLocal(i)), e.playerinfo = r),
                    r = {},
                    r.logo = e.playerinfo.logo,
                    r.watermark = e.playerinfo.watermark,
                    a.playerConfig.refresh(r);
                    var s, r = {
                        buttonColor: "fault",
                        progressBarColor: "active"
                    };
                    for (s in e.playerinfo.onoff) r.hasOwnProperty(s) && (e.playerinfo.onoff[r[s]] = e.playerinfo.onoff[s], delete e.playerinfo.onoff[s], s = r[s]),
                    a.outConfig.hasOwnProperty(s) || (a.config[s] = e.playerinfo.onoff[s]);
                    r = {},
                    r.vid = e.videoinfo.vid,
                    r.cid = e.videoinfo.cid,
                    r.pid = e.videoinfo.pid,
                    r.title = e.videoinfo.name,
                    r.duration = e.videoinfo.duration,
                    r.defaultDefinition = e.videoinfo.medialist[0].vtype,
                    r.isdrm = e.videoinfo.isdrm,
                    r.ark = e.videoinfo.ark,
                    r.mmsid = e.videoinfo.mmsid,
                    e.videoinfo.hasOwnProperty("businessline") && (r.p = e.videoinfo.businessline);
                    for (var l = {},
                    c = 0; c < e.videoinfo.medialist.length; c++) {
                        var d = e.videoinfo.medialist[c];
                        s = d.vtype,
                        l[s] = {},
                        l[s].urls = [];
                        for (var u = 0; u < d.urllist.length; u++) l[s].urls.push(d.urllist[u].url);
                        l[s].videoWidth = d.vwidth,
                        l[s].videoHeight = d.vheight,
                        l[s].gbr = d.gbr,
                        l[s].vtype = d.vtype,
                        l[s].definition = d.definition,
                        l[s].videoType = d.urllist[0].videotype,
                        a.defaultDefinitionList.push(s)
                    }
                    r.media = l,
                    r.pic = e.videoinfo.pic["485*303"],
                    a.videoSetting.refresh(r),
                    o.setLocal(t, e.playerinfo.pet, !1),
                    this.dispatchEvent(new k(D.LOADCMP, [e, n]))
                } else "10071" == e.code ? (this.curTime = e.timestamp, this.reload()) : this.dispatchEvent(new k(D.LOADERROR, [{
                    code: w.VOD_MMSID_ANALY,
                    message: e.message
                },
                n]))
            }
        },
        e.prototype.reload = function() {
            this.unload(),
            this.superClass.load.call(this)
        },
        e.prototype.checkGslbUrl = function(e) {
            switch (o.getDevice()) {
            case "ipad":
            case "iphone":
                -1 == e.indexOf("&tss=ios&") && (e = -1 != e.indexOf("&tss=no&") ? e.replace("&tss=no&", "&tss=ios&") : e + "&tss=ios")
            }
            return e
        },
        e.prototype.loadError = function(e, t) {
            this.isClose || this.dispatchEvent(new k(D.LOADERROR, [{
                code: w.VOD_CONFIG_IO
            },
            t]))
        },
        e
    } (),
    F = function() {
        function e(e) {
            this.model = e
        }
        return g.inherits(e, C),
        e.prototype.getRequestList = function() {
            var e = [],
            t = o.clone(this.model.videoSetting.urls);
            o.addUrlParams(t, {
                jsonp: "?",
                _r: "jsonp",
                format: 1,
                expect: 3
            });
            for (var i = 0; i < t.length; i++) {
                var n = this.checkGslbUrl(t[i]);
                e.push({
                    url: n,
                    timeout: 1e4,
                    maxCount: 3,
                    retryTime: 0
                })
            }
            return e
        },
        e.prototype.checkGslbUrl = function(e) {
            return "ios" == this.model.vodPlayType && -1 == e.indexOf("&tss=ios&") && (e = -1 != e.indexOf("&tss=no&") ? e.replace("&tss=no&", "&tss=ios&") : e + "&tss=ios"),
            "mp4" == this.model.vodPlayType && -1 == e.indexOf("&tss=no&") && (e = -1 != e.indexOf("&tss=ios&") ? e.replace("&tss=ios&", "&tss=no&") : e + "&tss=no"),
            e
        },
        e.prototype.loadCmp = function(e, t) {
            if (!this.isClose) if (this.log("gslb data:" + p.jsonToString(e) + " time" + p.jsonToString(t)), 200 == e.status) {
                e.ercode = "0";
                for (var i = [e.location], n = 0; n < e.nodelist.length; n++) e.nodelist[n].location != i[0] && i.push(e.nodelist[n].location);
                this.dispatchEvent(new k(D.LOADCMP, i))
            } else this.dispatchEvent(new k(D.LOADERROR, [{
                code: w.GSLB_ANALY,
                message: "调度错误"
            },
            t]))
        },
        e.prototype.loadError = function(e, t) {
            this.isClose || this.dispatchEvent(new k(D.LOADERROR, [{
                code: w.GSLB_IO,
                errInfo: "url:" + this.getUrl()
            },
            t]))
        },
        e
    } (),
    H = function() {
        function t() {
            this.lastTime = this.pt = 0,
            this.isStartPlay = this.isPauseRecord = !1,
            this.state = "",
            this.replaytype = 1
        }
        function i(e) {
            this.model = e,
            this.reset()
        }
        var n = {
            pc: {
                value: 30,
                sub: {
                    value: 300
                }
            },
            sdk: {
                value: 32,
                sub: {
                    value: 321,
                    ios: {
                        value: 321
                    },
                    android: {
                        value: 322
                    }
                }
            },
            html5: {
                value: 31,
                sub: {
                    value: 310,
                    ios: {
                        value: 311
                    },
                    android: {
                        value: 312
                    },
                    pc: {
                        value: 310
                    }
                }
            }
        },
        a = {
            android: 600,
            ios: 601
        };
        return i.prototype = {
            init: function() {
                this.model.reportParam.p1 = 3,
                this.model.reportParam.p2 = n[this.model.platform.toLowerCase()].value,
                n[this.model.platform.toLowerCase()].sub.hasOwnProperty(this.model.systemData.os.toLowerCase()) ? this.model.reportParam.p3 = n[this.model.platform.toLowerCase()].sub[this.model.systemData.os.toLowerCase()].value: this.model.reportParam.p3 = n[this.model.platform.toLowerCase()].sub.value
            },
            reset: function() {
                this.heartTimer && (this.heartTimer.stop(), this.heartTimer = null),
                this.reportParam = new t
            },
            onStateChanged: function(e, t) {
                switch (t = p.stringToJson(t), f.log("[Stat K 日志数据]  type:" + e + " data:" + t), e) {
                case "init":
                    this.reportParam.isStartPlay = !1,
                    this.model.init(t),
                    this.init(),
                    this.sendEnvStat();
                    break;
                case "start":
                    this.reportParam.isStartPlay = !1,
                    this.sendPlayStat("init");
                    break;
                case "play":
                    this.reportParam.isStartPlay || (this.sendPlayStat("play", t), this.startHeartTimer(), this.resumePtStat(), this.reportParam.isStartPlay = !0);
                    break;
                case "bufferEmpty":
                    this.reportParam.state != e && this.reportParam.isStartPlay && (this.pausePtStat(), this.sendPlayStat("block"));
                    break;
                case "bufferFull":
                    "bufferEmpty" == this.reportParam.state && this.reportParam.isStartPlay && (this.resumePtStat(), this.sendPlayStat("eblock")),
                    this.reportParam.isStartPlay || (this.reportParam.isStartPlay = !0);
                    break;
                case "seek":
                    this.reportParam.isStartPlay && (this.pausePtStat(), this.sendPlayStat("drag", {
                        py: {
                            dr: this.model.videoInfo().time + "_" + t.time
                        }
                    }));
                    break;
                case "pause":
                    this.reportParam.state != e && this.reportParam.isStartPlay && (this.pausePtStat(), this.sendPlayStat("pa"));
                    break;
                case "resume":
                    this.reportParam.isStartPlay && this.resumePtStat();
                    break;
                case "definition":
                    this.reportParam.isStartPlay && (this.pausePtStat(), this.model.videoSetting.definitionCount++, this.reportParam.replaytype = 2, this.sendPlayStat("tg"));
                    break;
                case "stopPlay":
                    this.reportParam.isStartPlay && (this.reportParam.isStartPlay = !1, this.pausePtStat(), this.pauseHeadStat(), this.sendPlayStat("end"));
                    break;
                case "playStop":
                    this.reportParam.isStartPlay && (this.reportParam.isStartPlay = !1, this.pauseHeadStat(), this.sendPlayStat("end"), this.sendPlayStat("finish"));
                    break;
                case "hide":
                    null != this.heartTimer && this.reportParam.isStartPlay && (this.pausePtStat(!0), this.heartTimer.stop());
                    break;
                case "show":
                    null != this.heartTimer && this.reportParam.isStartPlay && (this.resumePtStat(!0), this.heartTimer.start());
                    break;
                case "error":
                    this.reportParam.isStartPlay = !1,
                    this.sendErrorStat(t),
                    null != this.heartTimer && this.heartTimer.stop()
                }
                this.reportParam.state = e
            },
            startHeartTimer: function() {
                this.heartTimer ? this.heartTimer.running || (this.setDelay(), this.heartTimer.start()) : (this.heartTimer = new A(18e4, this, this.heartHanlder), this.setDelay(), this.heartTimer.start())
            },
            pauseHeadStat: function() {
                this.heartHanlder(),
                this.heartTimer && this.heartTimer.stop()
            },
            setDelay: function() {
                if (this.heartTimer) switch (this.heartTimer.currentCount) {
                case 0:
                    this.heartTimer.delay = 15e3;
                    break;
                case 1:
                    this.heartTimer.delay = 6e4;
                    break;
                default:
                    this.heartTimer.delay = 18e4
                }
            },
            heartHanlder: function() {
                this.pausePtStat(!0),
                this.resumePtStat(!0),
                this.setDelay(),
                this.sendPlayStat("time"),
                this.reportParam.pt = 0
            },
            pausePtStat: function(e) {
                "undefined" == typeof e && (e = !1);
                var t = o.now();
                this.reportParam.isPauseRecord || 0 == this.reportParam.lastTime || (this.reportParam.pt += t - this.reportParam.lastTime),
                0 == this.reportParam.lastTime && (this.reportParam.pt = 0),
                this.reportParam.lastTime = t,
                e || (this.reportParam.isPauseRecord = !0)
            },
            resumePtStat: function(e) {
                "undefined" == typeof e && (e = !1);
                var t = o.now();
                this.reportParam.lastTime = t,
                e || (this.reportParam.isPauseRecord = !1)
            },
            sendEnvStat: function() {
                var e, t = this.model;
                e = "http://apple.www.letv.com/env/?ver=3.0.5&p1=" + this.model.reportParam.p1,
                e += "&p2=" + this.model.reportParam.p2,
                e += "&p3=" + this.model.reportParam.p3,
                "html5" == this.model.platform && (e += "&lc=" + t.lc()),
                "sdk" == this.model.platform && (e += "&auid=" + t.auid()),
                e += "&uuid=" + t.uuid(),
                e += "&mac=" + t.systemData.mac,
                e += "&nt=" + t.systemData.nt,
                e += "&os=" + t.systemData.os,
                e += "&osv=" + t.systemData.osv,
                e += "&app=" + t.systemData.appv,
                e += "&bd=" + encodeURIComponent(t.systemData.bd),
                e += "&xh=" + encodeURIComponent(t.systemData.xh),
                e += "&ro=" + encodeURIComponent(t.systemData.ro),
                e += "&src=pl",
                e += "&ch=" + t.getTypeFrom(),
                e += "&cs=" + encodeURIComponent(t.systemData.cs),
                e += "&ssid=" + encodeURIComponent(t.systemData.ssid),
                e += "&lo=" + encodeURIComponent(t.systemData.lo),
                e += "&la=" + encodeURIComponent(t.systemData.la),
                e += "&apprunid=" + t.apprunid(),
                e += "&r=" + Math.random(),
                this.report(e)
            },
            sendPlayStat: function(t, i) {
                var n, r = this.model;
                n = "http://apple.www.letv.com/cloud_pl/?ver=3.0.5&p1=" + this.model.reportParam.p1,
                n += "&p2=" + this.model.reportParam.p2,
                n += "&p3=" + this.model.reportParam.p3,
                n += "&ac=" + t,
                n += "&prg=" + r.videoInfo().time,
                "time" == t && (18e4 < this.reportParam.pt && (this.reportParam.pt = 18e4), n += "&pt=" + Math.abs(Math.round(.001 * this.reportParam.pt))),
                "html5" == this.model.platform && (n += "&lc=" + r.lc()),
                "sdk" == this.model.platform && (n += "&auid=" + r.auid()),
                n += "&uuid=" + r.uuid(),
                "vod" == r.playType && (n += "&cid=" + r.videoSetting.cid, "" != r.videoSetting.pid && (n += "&pid=" + r.videoSetting.pid), n += "&vid=" + r.videoSetting.vid, n += "&ty=0", n += "&vlen=" + r.videoSetting.duration),
                "live" == r.playType && (n += "&lid=" + r.videoSetting.lid, n += "&sid=" + r.videoSetting.sid, n += "&ty=1", n += "&vlen=6000", r.videoSetting.hasOwnProperty("activityId") && (n += "&zid=" + r.videoSetting.activityId)),
                n += "&ch=" + r.getTypeFrom(),
                n += "&vt=" + r.videoSetting.vtype,
                n += "&pv=" + encodeURIComponent(this.model.systemData.appv),
                "sdk" == this.model.platform && (i || (i = {}), i.hasOwnProperty("py") || (i.py = {}), i.py.replaytype = this.reportParam.replaytype),
                this.model.videoSetting.hasOwnProperty("p") && (i || (i = {}), i.hasOwnProperty("py") || (i.py = {}), i.py.p = this.model.videoSetting.p),
                null != i && i.hasOwnProperty("py") && (n += "&py=" + encodeURIComponent(o.objectParseToString(i.py))),
                "sdk" == this.model.platform && (n += "&pcode=" + this.model.pcode(), n += "&nt=" + r.systemData.nt),
                n += "&ap=" + this.model.config.autoplay,
                "init" == t && "sdk" == this.model.platform && (n += "&cdev=" + r.systemData.cdev, n += "&caid=" + a[r.systemData.os.toLowerCase()]),
                "play" == t && (n += "&pay=0", i && i.hasOwnProperty("cv") && (n += "&stc=" + encodeURIComponent(o.objectParseToString(i.cv.stc)), n += "&joint=" + i.cv.joint)),
                n += "&prl=0",
                n += "&ctime=" + o.now(),
                n += "&custid=" + r.userInfo().userId,
                n += "&ipt=0",
                n += "&owner=1",
                n += "&apprunid=" + r.apprunid(),
                "sdk" != this.model.platform && (n += "&url=" + encodeURIComponent(window.location.href), n += "&ref=" + encodeURIComponent(e.referrer)),
                n += "&r=" + Math.random(),
                this.report(n)
            },
            sendErrorStat: function(e) {
                var t, i = this.model;
                t = "http://apple.www.letv.com/er/?ver=3.0.5&p1=" + this.model.reportParam.p1,
                t += "&p2=" + this.model.reportParam.p2,
                t += "&p3=" + this.model.reportParam.p3,
                t += "&et=pl",
                t += "&err=" + e.errcode,
                "html5" == this.model.platform && (t += "&lc=" + i.lc()),
                "sdk" == this.model.platform && (t += "&auid=" + i.auid()),
                t += "&mac=" + i.systemData.mac,
                t += "&nt=" + i.systemData.nt,
                t += "&os=" + i.systemData.os,
                t += "&osv=" + i.systemData.osv,
                t += "&app=" + i.systemData.appv,
                t += "&bd=" + i.systemData.bd,
                t += "&xh=" + i.systemData.xh,
                t += "&ro=" + i.systemData.ro,
                "vod" == i.playType && (t += "&cid=" + i.videoSetting.cid, "" != i.videoSetting.pid && (t += "&pid=" + i.videoSetting.pid), t += "&vid=" + i.videoSetting.vid),
                "live" == i.playType && (t += "&lid=" + i.videoSetting.lid, t += "&sid=" + i.videoSetting.sid),
                e = {
                    ch: i.getTypeFrom(),
                    custid: i.userInfo().userId
                },
                this.model.videoSetting.hasOwnProperty("p") && (e.p = this.model.videoSetting.p);
                for (var n = ["uu", "vu", "liveId", "streamId", "activityId"], a = 0; a < n.length; a++) i.config.hasOwnProperty(n[a]) && (e[n[a]] = i.config[n[a]]);
                t += "&ep=" + encodeURIComponent(o.objectParseToString(e)),
                t += "&ap=" + i.config.autoplay,
                t += "&uuid=" + i.uuid(),
                t += "&apprunid=" + i.apprunid(),
                t += "&r=" + Math.random(),
                this.report(t)
            },
            report: function(e) {
                if ("html5" == this.model.platform) {
                    f.log("[Stat K]  url:" + e);
                    var t = new Image(1, 1);
                    t.onload = t.onerror = t.onabort = function() {
                        t = t.onload = t.onerror = t.onabort = null
                    },
                    t.src = e
                }
                "sdk" == this.model.platform && ExternalInterface.callSDK(this.model.systemData.os, "logRequest", {
                    url: e
                })
            }
        },
        i
    } (),
    V = function() {
        function e(e) {
            this.model = e
        }
        return g.inherits(e, b),
        e.prototype.setUp = function(e, t) {
            e.hasOwnProperty("uu") && e.hasOwnProperty("vu") ? (this.vodproxy = "101" == this.getP(e) ? new z(this.model) : new R(this.model), this.vodproxy.addEventListener(D.LOADCMP, this.gpcCmp, this), this.vodproxy.addEventListener(D.LOADERROR, this.errorHanlder, this), this.vodproxy.load()) : this.dispatchEvent(new k(D.LOADERROR, [{
                code: w.PARAMS
            }]))
        },
        e.prototype.getP = function(e) {
            return e.hasOwnProperty("p") ? e.p: "101"
        },
        e.prototype.destroy = function(e) {
            this.vodproxy.unload()
        },
        e.prototype.errorHanlder = function(e) {
            this.dispatchEvent(new k(D.LOADERROR, e.args[1]))
        },
        e.prototype.gpcCmp = function(e) {
            this.refreshLoadingData(e),
            this.model.vodPlayType = v.checkPlayType(),
            this.dispatchEvent(new k(D.LOADCMP, e))
        },
        e.prototype.refreshLoadingData = function() {},
        e
    } (),
    U = function() {
        function e() {}
        return g.inherits(e, b),
        e.prototype.init = function() {
            this.playUrlList = [],
            this.isFtc = this.startPlay = this.autoplay = !1,
            this.playState = 0,
            this.render = null,
            this.emptyDelay = 1e3
        },
        e.prototype.setConfig = function(e) {},
        e.prototype.errorHandler = function(e) {
            1 < this.playUrlList.length && e && e.code && 4 != e.code ? (this.playUrlList.shift(), this.log("播放失败， errCode:" + e.code + ",切换下一个地址:" + this.playUrlList[0]), this.changeurl(this.playUrlList[0])) : (e.hasOwnProperty("retryCdn") || (e.retryCdn = !0), e.hasOwnProperty("code") || (e.code = w.PLAY_TIMEOUT), this.log("播放失败: errCode:" + e.code + ",url:" + this.playUrlList[0]), this.dispatchEvent(new k(M.EVENT, M.ERROR, [e])))
        },
        e.prototype.onPlaySeekHandler = function() {
            this.emptyST && clearTimeout(this.emptyST),
            this.startPlay && (this.playState = 5, this.dispatchEvent(new k(M.EVENT, M.SEEK, this.getTime())))
        },
        e.prototype.onPlayFullHandler = function() {
            this.startPlay || (this.startPlay = !0, this.dispatchEvent(new k(M.EVENT, M.START)), this.render && this.render.start()),
            1 != this.playState && (this.playState = 1, this.dispatchEvent(new k(M.EVENT, M.BUFFEREFULL, this.getTime()))),
            this.emptyST && clearTimeout(this.emptyST)
        },
        e.prototype.onPlayEmptyHandler = function() {
            var e = this;
            e.emptyST && clearTimeout(e.emptyST),
            e.startPlay && 3 != e.playState && (5 != e.playState ? (e.playState = 3, e.emptyST = setTimeout(function() {
                e.dispatchEvent(new k(M.EVENT, M.BUFFEREMPTY, e.getTime()))
            },
            e.emptyDelay)) : (e.playState = 3, e.dispatchEvent(new k(M.EVENT, M.SEEKEMPTY, e.getTime()))))
        },
        e.prototype.onPlaStopHandler = function() {
            this.emptyST && clearTimeout(this.emptyST),
            4 != this.playState && (this.playState = 4, this.dispatchEvent(new k(M.EVENT, M.STOP, (!0))))
        },
        e.prototype.onPlayHandler = function() {
            this.emptyST && clearTimeout(this.emptyST),
            this.playState = 1,
            this.dispatchEvent(new k(M.EVENT, M.PLAY, this.getTime()))
        },
        e.prototype.onPauseHandler = function() {
            this.emptyST && clearTimeout(this.emptyST),
            this.playState = 2,
            this.dispatchEvent(new k(M.EVENT, M.PAUSE, this.getTime()))
        },
        e.prototype.onPlayIngHandler = function() {
            var e = this.getTime();
            0 <= e && !this.isFtc && (0 < e ? (this.log("第一次获得非0的播放时间" + e), this.isFtc = !0, this.onPlayFullHandler()) : "iphone" == o.getDevice() && "qq" == o.getBrowser() && this.onPlayFullHandler()),
            this.startPlay && this.dispatchEvent(new k(M.EVENT, M.PLAYING, e))
        },
        e.prototype.onLoadIngHandler = function() {
            this.dispatchEvent(new k(M.EVENT, M.LODING, this.getLoadPercent()))
        },
        e.prototype.onMetaDataHandler = function(e) {
            this.videoWidth = e.width || 0,
            this.videoHeight = e.height || 0,
            0 < this.videoWidth && 0 < this.videoHeight & !this.hasMetadata && (this.setSize(), this.hasMetadata = !0, this.dispatchEvent(new k(M.EVENT, M.METADATA, {
                videoWidth: this.videoWidth,
                videoHeight: this.videoHeight,
                duration: this.duration
            }))),
            this.mduration && 0 == e.duration && (e.duration = this.mduration),
            0 < e.duration && this.duration != e.duration && (this.duration = e.duration, this.dispatchEvent(new k(M.EVENT, M.DURATION, {
                duration: this.duration
            })))
        },
        e
    } (),
    B = function() {
        function t() {
            var e = this;
            this.type = "video",
            this._videoRect = {},
            this.videoHandlerBack = function() {
                e.videoHandler.apply(e, arguments)
            }
        }
        var i = 0,
        n = "error emptied abort playing play pause ended canplay waiting loadeddata loadedmetadata timeupdate seeked seeking progress durationchange".split(" ");
        return g.inherits(t, U),
        t.prototype.destroy = function() {
            this.removeEvents(),
            this.video.pause(),
            this.video.src = "",
            this.render && this.render.close()
        },
        t.prototype.setPoster = function(e) {
            this.video.poster = e
        },
        t.prototype.setUp = function(t, n) {
            i++;
            var a, o = "LecoudPlayer" + (new Date).getTime() + i,
            r = ["preload", "controls", "width", "height"];
            for (a = '<div id="v{id}" style="left:0px;top:0px;width:100%;height:100%;display: block;position: relative;"><video  id="{id}" controls="controls"  style="width:100%;height:100%;"></video></div>'.replace(/{id}/g, o), n.innerHTML = a, this.outEl = n, this.video = e.getElementById(o), this.videoBox = e.getElementById("v" + o), this.config = t, this.isEndStartSeek = !(0 < this.config.start), t.hasOwnProperty("pic") && (this.video.poster = t.pic), t.hasOwnProperty("autoplay") && "1" == t.autoplay ? (this.video.autoplay = "autoplay", this.autoplay = !0) : this.autoplay = !1, t.hasOwnProperty("playsinline") && "1" == t.playsinline && (this.video.WebKitPlaysInline ? this.video.WebKitPlaysInline = !0 : (this.video.setAttribute("webkit-playsinline", ""), this.video.setAttribute("playsinline", ""))), o = 0; o < r.length; o++) t.hasOwnProperty(r[o]) && "width" != r[o] && "height" != r[o] && (this.video[r[o]] = t[r[o]]);
            this.isShow = !0,
            this.vArea = this.videoBox,
            this.renderType = "",
            0 < this.outEl.offsetWidth & 0 < this.outEl.offsetHeight || (this.videoBox.style.width = "99.5%", this.videoBox.style.height = "99.5%"),
            this._videoRect = {
                x: 0,
                y: 0,
                width: this.outEl.offsetWidth,
                height: this.outEl.offsetHeight
            }
        },
        t.prototype.enableControls = function() {
            this.video.controls = !0
        },
        t.prototype.disableControls = function() {
            this.video.controls = !1
        },
        t.prototype.setContainer = function(e) {
            this.vArea = e
        },
        t.prototype.setLoop = function(e) {},
        t.prototype.hide = function(e) {
            this.isShow && (e ? this.video.style.display = "none": (this.tmpwidth = this.videoBox.style.width, this.tmpheight = this.videoBox.style.height, this.videoBox.style.width = "1px", this.videoBox.style.height = "1px", this.videoBox.style.left = "-1000px", this.videoBox.style.top = "-1000px"), this.isShow = !1)
        },
        t.prototype.show = function() {
            this.isShow || (this.videoBox.style.display = "", this.videoBox.style.width = this.tmpwidth, this.videoBox.style.height = this.tmpheight, this.videoBox.style.left = "0px", this.videoBox.style.top = "0px", this.isShow = !0)
        },
        t.prototype.setSize = function() {
            this.display = !!(0 < this.outEl.offsetWidth & 0 < this.outEl.offsetHeight),
            this.setVideoRect(),
            this.isShow && (this.config.dvideoSize ? this.display && (this.videoBox.style.width = "100%", this.videoBox.style.height = "100%") : 0 < this.videoWidth && 0 < this.videoHeight & 0 < this.outEl.offsetWidth & 0 < this.outEl.offsetHeight && (this.videoBox.style.width = this._videoRect.width + "px", this.videoBox.style.height = this._videoRect.height + "px", this.videoBox.style.top = this._videoRect.y + "px", this.videoBox.style.left = this._videoRect.x + "px")),
            this.render && this.render.setSize(this.vArea.offsetWidth, this.vArea.offsetHeight)
        },
        t.prototype.setVideoRect = function() {
            if ("pano" == this.renderType) this._videoRect = {
                x: 0,
                y: 0,
                width: this.vArea.offsetWidth,
                height: this.vArea.offsetHeight
            };
            else if (0 < this.videoWidth && 0 < this.videoHeight & 0 < this.outEl.offsetWidth & 0 < this.outEl.offsetHeight) {
                var e, t;
                this.videoWidth / this.videoHeight > this.outEl.offsetWidth / this.outEl.offsetHeight ? (e = this.outEl.offsetWidth, t = this.videoHeight * this.outEl.offsetWidth / this.videoWidth) : (t = this.outEl.offsetHeight, e = this.videoWidth * this.outEl.offsetHeight / this.videoHeight),
                this._videoRect = {
                    x: .5 * (this.outEl.offsetWidth - e),
                    y: .5 * (this.outEl.offsetHeight - t),
                    width: e,
                    height: t
                }
            }
        },
        t.prototype.addEvents = function() {
            for (var e = this.video,
            t = 0; t < n.length; t++) e.addEventListener(n[t], this.videoHandlerBack, !0)
        },
        t.prototype.removeEvents = function() {
            for (var e = this.video,
            t = 0; t < n.length; t++) e.removeEventListener(n[t], this.videoHandlerBack, !0)
        },
        t.prototype.videoHandler = function(e) {
            switch (this.log(e.type + "- ---" + this.getTime() + "m.video.videoWidth:" + this.video.videoWidth + " m.video.duration" + this.video.duration), e.type) {
            case "error":
                if ("firefox" == o.getBrowser() && null == this.video.error) break;
                if (this.video.error && 4 == this.video.error.code && 0 < this.getTime()) break;
                e = {
                    code: w.PLAY_TIMEOUT
                },
                this.video.error && this.video.error.code && (e.code = "49" + this.video.error.code),
                this.errorHandler(e);
                break;
            case "playing":
                this.startPlay || this.onMetaDataHandler({
                    width: this.video.videoWidth,
                    height: this.video.videoHeight,
                    duration: this.video.duration
                }),
                this.autoSeek(),
                this.isEndStartSeek && this.onPlayFullHandler(),
                this.isStartSeek && (this.isEndStartSeek = !0);
                break;
            case "emptied":
            case "waiting":
                this.onPlayEmptyHandler();
                break;
            case "seeked":
                this.isEndStartSeek = !0,
                this.onPlayFullHandler();
                break;
            case "seeking":
                this.onPlaySeekHandler();
                break;
            case "play":
                this.onPlayHandler();
                break;
            case "pause":
                this.onPauseHandler();
                break;
            case "ended":
                this.onPlaStopHandler();
                break;
            case "timeupdate":
                this.display || this.setSize(),
                this.isEndStartSeek && this.onPlayIngHandler();
                break;
            case "progress":
                this.onLoadIngHandler();
                break;
            case "durationchange":
            case "loadedmetadata":
                this.onMetaDataHandler({
                    width:
                    this.video.videoWidth,
                    height: this.video.videoHeight,
                    duration: this.video.duration
                })
            }
        },
        t.prototype.autoSeek = function() {
            var e = this;
            this.log("autoSeek:" + e.config.start + "--" + e.startPlay + "-" + e.isEndStartSeek),
            0 != e.config.start ? e.startPlay || e.isEndStartSeek ? e.isStartSeek = !0 : setTimeout(function() {
                e.isStartSeek = !0,
                e.seek(e.config.start)
            },
            500) : e.isStartSeek = !0
        },
        t.prototype.getLoadPercent = function() {
            for (var e = this.video.buffered,
            t = 0; t < e.length; t++) if (this.getTime() < e.end(t)) return Math.min(1, e.end(t) / this.video.duration);
            return 0
        },
        t.prototype.play = function(e, t, i, n, a) {
            var o = this;
            o.renderType = n,
            o.hasMetadata = !1,
            o.playUrlList = e,
            o.config.start = t,
            o.url = o.playUrlList[0],
            o.isEndStartSeek = !(0 < o.config.start),
            o.isStartSeek = !1,
            this.isFtc = o.startPlay = !1,
            this.render || (this.render = new q),
            this.render.init({
                type: n,
                video: this.video,
                el: this.vArea,
                onstart: function() {
                    o.log("渲染引擎初始化完毕，回调播放, url:" + o.url),
                    o.addEvents(),
                    o.video.src = o.url,
                    (o.autoplay || i) && (o.video.load && o.video.load(), o.resume(a))
                },
                onerror: function(e) {
                    o.log("渲染引擎初始化失败"),
                    e.retryCdn = !1,
                    o.errorHandler(e)
                }
            })
        },
        t.prototype.resume = function(e) {
            this.video.play && (this.video.play(), e && e())
        },
        t.prototype.pause = function() {
            this.video.pause()
        },
        t.prototype.getTime = function() {
            return this.video.currentTime
        },
        t.prototype.seek = function(e) {
            this.log("seek:" + e),
            this.video.currentTime = e
        },
        t.prototype.changeurl = function(e) {
            this.url = e,
            this.video.src = this.url,
            this.config.start = this.getTime(),
            this.isEndStartSeek = !(0 < this.config.start),
            this.video.load(),
            this.resume()
        },
        t.prototype.setVol = function(e) {
            this.video.volume = e
        },
        t.prototype.getVol = function(e) {
            return this.video.volume
        },
        t.prototype.stop = function() {
            this.destroy()
        },
        t.prototype.getVideoRect = function(e) {
            return "wh" == e ? {
                w: this.video.offsetWidth,
                h: this.video.offsetHeight
            }: this._videoRect
        },
        t
    } (),
    q = function() {
        function e(e) {}
        var t = {
            pano: {
                name: "PanoRender",
                check: o.checkPano,
                err: {
                    code: "",
                    message: ""
                }
            }
        };
        return g.inherits(e, $),
        e.prototype.init = function(e) {
            this.isStart = !1,
            this.options = e,
            this.log("初始化渲染引擎" + this.eg),
            this.eg ? e.type != this.eg.type ? this.eg = null: this.eg.reset(e) : this.eg = this.initPlugin(e, this.pluginOk, t)
        },
        e.prototype.pluginOk = function(e) {
            this.eg = e ? new e(this.options) : null
        },
        e.prototype.start = function() {
            this.isStart || (this.isStart = !0, this.eg && this.eg.start())
        },
        e.prototype.close = function() {
            this.log("关闭渲染引擎" + this.eg),
            this.eg && this.eg.close(),
            this.isStart = !1
        },
        e.prototype.setSize = function(e, t) {
            this.eg && this.eg.setSize(e, t)
        },
        e
    } (),
    W = function() {
        function e(e) {
            this.init(e)
        }
        return g.inherits(e, b),
        e.prototype.init = function(e) {
            this.time = 0,
            this.config = e
        },
        e.prototype.setUp = function(e, t) {
            var i = o.clone(this.config),
            n = ["pic", "volume"];
            this.loop = !1,
            this.el = t,
            this.volume = e.volume;
            for (var a = 0; a < n.length; a++) {
                var r = n[a]; ! i.hasOwnProperty(r) && e.hasOwnProperty(r) && (i[r] = e[r])
            }
            this.creatPlayer(i, t),
            this.player.duration = e.duration
        },
        e.prototype.creatPlayer = function(e, t) {
            this.player && (this.player.removeEventListener(M.EVENT, this.MediaHanlder, this), this.player.destroy(), this.player = null),
            this.player = this.getPlayer(e),
            this.player.init(),
            this.player.setUp(e, t)
        },
        e.prototype.setMedia = function(e) {},
        e.prototype.hide = function(e) {
            this.player.hide(e)
        },
        e.prototype.show = function() {
            this.player.show()
        },
        e.prototype.setConfig = function(e) {},
        e.prototype.setContainer = function(e) {
            null != e && this.player.setContainer(e)
        },
        e.prototype.getPlayer = function(e) {
            return new B
        },
        e.prototype.startPlay = function(e, t, i, n, a) {
            "undefined" == typeof t && (t = 0),
            "undefined" == typeof i && (i = !1),
            "undefined" == typeof n && (n = ""),
            this.destroy(),
            this.setVol(this.volume),
            this.player.addEventListener(M.EVENT, this.MediaHanlder, this),
            this.player.mduration = e.duration,
            this.player.play(e.urls, t, i, n)
        },
        e.prototype.setSize = function() {
            this.player.setSize()
        },
        e.prototype.play = function(e) {
            this.player.resume(e)
        },
        e.prototype.setVol = function(e) {
            this.player.setVol(e),
            this.volume = e,
            this.dispatchEvent(new k(M.EVENT, M.VOL, e))
        },
        e.prototype.pause = function() {
            this.player.pause()
        },
        e.prototype.destroy = function() {
            this.closeVideo(),
            this.loop = !1,
            this.player.setLoop(!1),
            this.player.destroy()
        },
        e.prototype.closeVideo = function() {
            this.player.removeEventListener(M.EVENT, this.MediaHanlder, this),
            this.player.stop()
        },
        e.prototype.getTime = function() {
            return parseInt(this.player.getTime())
        },
        e.prototype.seek = function(e) {
            0 <= e && 0 > e - this.player.duration && (this.player.seek(e), this.player.resume())
        },
        e.prototype.getBufferPercent = function(e) {
            return 1
        },
        e.prototype.getLoadPercent = function(e) {
            return this.player.getLoadPercent()
        },
        e.prototype.setLoop = function(e) {
            this.loop = e,
            this.player.setLoop(e)
        },
        e.prototype.MediaHanlder = function(e) {
            switch (e.args[1]) {
            case M.STOP:
                if (this.loop) return void this.seek(0)
            }
            this.dispatchEvent(e)
        },
        e.prototype.changeurl = function(e) {
            this.player.changeurl(e)
        },
        e.prototype.getVideoRect = function(e) {
            return this.player.getVideoRect(e)
        },
        e.prototype.replay = function() {
            this.player.seek(0),
            this.dispatchEvent(new k(M.EVENT, M.REPLAY, this.getTime()))
        },
        e.prototype.getVideoEl = function() {
            return this.player.video
        },
        e.prototype.setPoster = function(e) {
            return this.player.setPoster(e)
        },
        e
    } ();
    i.shareObj("media.watermask",
    function() {
        function e(e) {
            this.init(e),
            this.model = e
        }
        return g.inherits(e, b),
        e.prototype.init = function(e) {
            this.waterList = [],
            this.config = {
                chackTime: 6e4
            },
            this.model = e,
            this._index = 0
        },
        e.prototype.setUp = function(e) {
            this.setWaterData();
            var t = this.model.playerConfig.watermark;
            this.clear(),
            this.player = e,
            this.el = e.getVideoEl().parentNode.parentNode,
            this.waterData = o.clone(t),
            this._index = 0;
            var i = this;
            if (this.waterData) for (e = 0; e < this.waterData.length; e++) t = u.$C("img"),
            t.num = e,
            this.waterData[e].hasOwnProperty("position") && this.waterData[e].hasOwnProperty("url") && (this.waterData[e].hasOwnProperty("x") || (this.waterData[e].x = 15), this.waterData[e].hasOwnProperty("y") || (this.waterData[e].y = 15), this.waterData[e].hasOwnProperty("width") || (this.waterData[e].width = 640), this.waterData[e].hasOwnProperty("height") || (this.waterData[e].height = 360), t.onload = function() {
                var e = u.$C("canvas");
                i.waterData[this.num].img = this,
                i._renderWater(e, i.waterData[this.num]),
                i.waterList.push(e),
                i.start()
            },
            t.src = this.waterData[e].url)
        },
        e.prototype.isPano = function() {
            return !! (this.model.config.hasOwnProperty("pano") && "1" == this.model.config.pano || "1" == this.model.videoSetting.pano)
        },
        e.prototype.setWaterData = function() {
            this.isPano() ? (this.model.videoSetting.videoOrgHeight = this.model.playerConfig.pHeight, this.model.videoSetting.videoOrgWidth = this.model.playerConfig.pWidth) : this.model.videoSetting.videoWidth / this.model.videoSetting.videoHeight < this.model.playerConfig.pWidth / this.model.playerConfig.pHeight ? (this.model.videoSetting.videoOrgHeight = this.model.playerConfig.pHeight, this.model.videoSetting.videoOrgWidth = this.model.videoSetting.videoWidth * this.model.playerConfig.pHeight / this.model.videoSetting.videoHeight) : (this.model.videoSetting.videoOrgWidth = this.model.playerConfig.pWidth, this.model.videoSetting.videoOrgHeight = this.model.videoSetting.videoHeight * this.model.playerConfig.pWidth / this.model.videoSetting.videoWidth)
        },
        e.prototype.clear = function() {
            if (this.waterList) {
                for (var e = 0; e < this.waterList.length; e++) this.waterList[e].parentNode == this.el && (this.el.removeChild(this.waterList[e]), this.waterList[e] = null);
                this.waterList = []
            }
        },
        e.prototype.start = function() {
            function e() {
                _self = this;
                for (var e = 0; e < _self.waterList.length; e++) _self.waterList[e].style.display = e != _self._index ? "none": "";
                _self._index++,
                _self._index == _self.waterList.length && (_self._index = 0)
            }
            1 < this.waterList.length && (this.changeTimer = new A(this.config.chackTime, this, e), this.changeTimer.start()),
            e.call(this)
        },
        e.prototype.setSize = function(e, t) {
            for (var i = 0; i < this.waterList.length; i++) this._renderWater(this.waterList[i], this.waterData[i])
        },
        e.prototype.destroy = function(e, t) {
            this.clear(),
            this.waterData = null
        },
        e.prototype._renderWater = function(e, t) {
            var i = t.img,
            n = 1,
            n = this.model.playerConfig.pWidth / this.model.playerConfig.pHeight < t.width / t.height ? Math.min(1, this.model.playerConfig.pWidth / t.width) : Math.min(1, this.model.playerConfig.pHeight / t.height),
            a = this.player.getVideoRect();
            if (this.isPano()) var o = 1,
            r = 1;
            else o = a.width / this.model.videoSetting.videoOrgWidth,
            r = a.height / this.model.videoSetting.videoOrgHeight;
            switch (n = e.fScale ? e.fScale: this.model.playerConfig.pWidth / this.model.playerConfig.pHeight < o * i.width / (r * i.height) ? Math.min(n, .5 * a.width / i.width) : Math.min(n, .5 * a.height / i.height), e.style.position = "absolute", t.position + "") {
            case "1":
                e.style.top = a.y + r * n * t.y + "px",
                e.style.left = a.x + o * n * t.x + "px";
                break;
            case "2":
                e.style.top = a.y + r * n * t.y + "px",
                e.style.right = .5 * (this.el.offsetWidth - a.width) + o * n * t.x + "px";
                break;
            case "3":
                e.style.bottom = .5 * (this.el.offsetHeight - a.height) + r * n * t.y + "px",
                e.style.left = a.x + o * n * t.x + "px";
                break;
            case "4":
                e.style.bottom = .5 * (this.el.offsetHeight - a.height) + r * n * t.y + "px",
                e.style.right = .5 * (this.el.offsetWidth - a.width) + o * n * t.x + "px"
            }
            e.fScale = n,
            e.width = o * n * i.width,
            e.height = r * n * i.height,
            e.getContext("2d").drawImage(i, 0, 0, i.width, i.height, 0, 0, e.width, e.height),
            this.el.appendChild(e)
        },
        e
    } ());
    var G = function() {
        function e(e) {
            this.model = e
        }
        return g.inherits(e, b),
        e.prototype.translate = function() {
            this.gslbLoader = new F(this.model),
            this.model.videoSetting.gslb ? (this.gslbLoader.addEventListener(D.LOADCMP, this.gslbCmp, this), this.gslbLoader.addEventListener(D.LOADERROR, this.gslbErr, this), this.gslbLoader.load()) : this.dispatchEvent(new k(D.LOADCMP, this.leUrlsHandler()))
        },
        e.prototype.gslbCmp = function(e) {
            this.dispatchEvent(new k(D.LOADCMP, e.args[1]))
        },
        e.prototype.gslbErr = function(e) {
            this.dispatchEvent(new k(D.LOADCMP, this.leUrlsHandler()))
        },
        e.prototype.leUrlsHandler = function(e) {
            e = o.clone(this.model.videoSetting.urls);
            for (var t = 0; t < e.length; t++) e[t] = this.gslbLoader.checkGslbUrl(e[t]);
            return e
        },
        e
    } (),
    Y = function() {
        function e() {
            this.superClass.constructor.apply(this, arguments)
        }
        return g.inherits(e, x),
        e.prototype.init = function(e, t) {
            this.facade = e,
            this.model = t,
            this.model.record = {},
            this.reportApi = new H(t),
            this.reportApi.onStateChanged("init", {
                deviceId: this.model.lc(),
                os: o.getOs(),
                osv: "-",
                width: window.screen.width,
                height: window.screen.height,
                appv: this.model.playerConfig.version
            })
        },
        e.prototype.setUp = function(e, t) {
            this.model.videoSetting.errCode = 0,
            this.facade.addEventListener(O.EVENT, this.videoSateHandler, this)
        },
        e.prototype.destroy = function() {
            this.superClass.destroy.apply(this, arguments),
            this.reportApi.reset(),
            this.facade.removeEventListener(O.EVENT, this.videoSateHandler, this)
        },
        e.prototype.videoSateHandler = function(e) {
            switch (e.args[1]) {
            case O.VIDEO_DATA_CMP:
                0 != this.model.record.ms && (this.model.record.mr = o.now() - this.model.record.ms, this.model.record.ms = 0),
                this.reportApi.onStateChanged("start", {});
                break;
            case M.BUFFEREMPTY:
                this.reportApi.onStateChanged("bufferEmpty");
                break;
            case M.BUFFEREFULL:
                this.reportApi.onStateChanged("bufferFull");
                break;
            case M.PLAY:
                this.reportApi.onStateChanged("resume");
                break;
            case M.START:
                0 != this.model.record.vs && (this.model.record.pr = o.now() - this.model.record.vs, this.model.record.vs = 0),
                this.reportApi.onStateChanged("play", {
                    cv: {
                        stc: {
                            mr: this.model.record.mr,
                            adr: this.model.record.adr,
                            pr: this.model.record.pr,
                            gslbr: this.model.record.gslbr
                        },
                        joint: this.model.joint
                    }
                });
                break;
            case M.STOP:
                e.args[2] ? this.reportApi.onStateChanged("playStop") : this.reportApi.onStateChanged("stopPlay");
                break;
            case M.PAUSE:
                this.reportApi.onStateChanged("pause");
                break;
            case M.SEEK:
                this.reportApi.onStateChanged("seek", {
                    time: e.args[2]
                });
                break;
            case O.VPH:
                this.reportApi.onStateChanged("hide");
                break;
            case O.VPS:
                this.reportApi.onStateChanged("show");
                break;
            case M.DEFSTART:
                this.reportApi.onStateChanged("definition");
                break;
            case O.ERROR:
            case M.ERROR:
                e = e.args[2][0],
                this.model.videoSetting.errCode = e.code,
                this.reportApi.onStateChanged("error", {
                    errcode: e.code
                }),
                this.report({
                    logcontent: e.errInfo || ""
                });
                break;
            case L.HEADEND:
            case L.NOAD:
                0 != this.model.record.as && (this.model.record.adr = o.now() - this.model.record.as, this.model.record.as = 0),
                this.model.record.vs = o.now();
                break;
            case O.VIDEO_DATA_START:
                this.model.record.ms = o.now();
                break;
            case O.GSLB_START:
                this.model.record.gslbs = o.now();
                break;
            case O.GSLB_CMP:
                0 != this.model.record.gslbs && (this.model.record.gslbr = o.now() - this.model.record.gslbs, this.model.record.gslbs = 0),
                this.model.record.vs = o.now()
            }
        },
        e.prototype.report = function(e) {
            var t = this.model.videoSetting.errCode;
            e && e.hasOwnProperty("code") && (t = e.code);
            var i = {
                ver: "1.0"
            };
            i.uuid = this.model.uuid(),
            i.ec = t,
            i.p3 = "h5",
            i.cvid = "vod" == this.model.playType ? this.model.videoSetting.vid: this.model.videoSetting.sid,
            i.vtyp = this.model.playType,
            i.mtyp = "cloud",
            i.cuid = this.model.userData.userId,
            i.leid = this.model.lc(),
            i.pver = this.model.playerConfig.version,
            i.type = 1,
            i.logcontent = "";
            for (var n in e) i[n] = e[n];
            h.report("http://log.cdn.letvcloud.com/sdk/epl", i)
        },
        e.prototype.showLog = function() {
            h.print(f.getLog(), this.model.lc())
        },
        e.prototype.getLog = function() {
            return f.getLog()
        },
        e
    } (),
    X = function() {
        function e() {
            this.up = this.isvip = 0,
            this.isTrylook = !1,
            this.pname = "",
            this.ark = this.gdur = 0
        }
        function t() {
            this.superClass.constructor.apply(this, arguments)
        }
        return g.inherits(t, x),
        t.prototype.setUp = function(e, t) {
            var i = this;
            if (i.player = e, i.videoOutEl = t, i.model.config.hasOwnProperty("onPlayerReady")) if ("function" != typeof i.model.config.onPlayerReady && (i.model.config.onPlayerReady = window[i.model.config.onPlayerReady]), "function" == typeof i.model.config.onPlayerReady) try {
                var n = setTimeout(function() {
                    i.startLeAd.call(i)
                },
                5e3);
                i.model.config.onPlayerReady({
                    video: i.player.player.video,
                    el: this.videoOutEl
                },
                function(e, t) {
                    switch (e) {
                    case "adstart":
                        clearTimeout(n);
                        break;
                    case "adend":
                        i.startLeAd.call(i)
                    }
                })
            } catch(a) {
                i.startLeAd.call(i)
            } else i.startLeAd.call(i);
            else i.startLeAd.call(i)
        },
        t.prototype.startLeAd = function() {
            this.checkAd() ? "undefined" == typeof H5AD || "function" != typeof H5AD.initAD ? o.getJS(i.PluginStack.Ad, this.initAd, this.initAd, this, "utf-8") : this.initAd() : this.facade.dispatchEvent(new k(L.EVENT, L.NOAD, "skip"))
        },
        t.prototype.checkAd = function() {
            return ! (this.model.config.hasOwnProperty("letvad") && "0" == this.model.config.letvad.toString() || this.model.videoSetting.hasOwnProperty("ark") && "0" == this.model.videoSetting.ark.toString())
        },
        t.prototype.initAd = function(i, n) {
            function a(e, t) {
                if (o.player) switch (e) {
                case "playAD":
                    o.adList = t,
                    o.adList && 0 == o.adList.length ? setTimeout(function() {
                        o.destroy(),
                        o.facade.dispatchEvent(new k(L.EVENT, L.NOAD))
                    },
                    0) : (o.curAdIndex = 0, o.playAD(), o.facade.dispatchEvent(new k(L.EVENT, L.HEADSTART)));
                    break;
                case "stopAD":
                    setTimeout(function() {
                        o.destroy(),
                        o.facade.dispatchEvent(new k(L.EVENT, L.HEADEND))
                    },
                    0);
                    break;
                case "resumeAD":
                    o.videoPlay();
                    break;
                case "pauseAD":
                    o.videoPause();
                    break;
                case "getCurrTime":
                    return o.getTime() || 0;
                case "getVideoRect":
                    return o.getVideoRect()
                }
            }
            var o = this;
            if ("undefined" != typeof H5AD && "function" == typeof H5AD.initAD) {
                var r = new e;
                r.p1 = this.model.reportParam.p1,
                r.p2 = this.model.reportParam.p2,
                r.p3 = this.model.reportParam.p2,
                r.lc = this.model.lc(),
                r.uuid = this.model.uuid(),
                r.ver = this.model.playerConfig.version,
                r.gdur = this.model.videoSetting.duration,
                r.cont = this.videoOutEl.id,
                "vod" == this.model.playType ? (r.islive = !1, r.cid = this.model.videoSetting.cid, r.vid = this.model.videoSetting.vid, r.mmsid = this.model.videoSetting.mmsid, this.model.videoSetting.hasOwnProperty("pid") && (r.pid = this.model.videoSetting.pid)) : "live" == this.model.playType && (r.islive = !0, r.sid = this.model.config.activityId),
                r.ch = this.model.getTypeFrom(),
                r.ark = this.model.videoSetting.ark,
                r.useui = 1,
                this.model.videoSetting.hasOwnProperty("p") && (r.ext = "" == this.model.userData.userId ? this.model.videoSetting.p: this.model.videoSetting.p + "|" + this.model.userData.userId),
                H5AD.initAD(r, a)
            } else this.facade.dispatchEvent(new k(L.EVENT, L.NOAD, "error"));
            t.prototype.playAD = function() {
                if (this.curAdIndex < this.adList.length) {
                    this.curAd = this.adList[this.curAdIndex],
                    this.player.addEventListener(M.EVENT, this.mediaHandler, this);
                    var e = !0;
                    0 == this.curAdIndex && -2 == this.model.config.posterType && (e = "1" == this.model.config.autoplay),
                    this.player.startPlay({
                        urls: [this.curAd.url]
                    },
                    0, e)
                } else this.destroy(),
                this.facade.dispatchEvent(new k(L.EVENT, L.HEADEND))
            },
            t.prototype.mediaHandler = function(e) {
                switch (e.args[1]) {
                case M.PLAY:
                    H5AD.sendEvent("AD_PLAY", {
                        curAD: this.curAd,
                        curIndex: this.curAdIndex
                    });
                    break;
                case M.PAUSE:
                    H5AD.sendEvent("AD_PAUSE", {
                        curAD: this.curAd,
                        curIndex: this.curAdIndex
                    });
                    break;
                case M.STOP:
                    H5AD.sendEvent("AD_ENDED", {
                        curAD: this.curAd,
                        curIndex: this.curAdIndex
                    }),
                    this.curAdIndex++,
                    H5AD.destory(this.curAd),
                    this.playAD();
                    break;
                case M.ERROR:
                    H5AD.sendEvent("AD_ERROR", {
                        curAD: this.curAd,
                        curIndex: this.curAdIndex
                    }),
                    this.curAdIndex++,
                    H5AD.destory(this.curAd),
                    this.playAD()
                }
            },
            t.prototype.videoPlay = function() {
                this.player && this.player.play()
            },
            t.prototype.getTime = function() {
                return this.player ? this.player.getTime() : 0
            },
            t.prototype.videoPause = function() {
                this.player && this.player.pause()
            },
            t.prototype.getVideoRect = function() {
                return this.player ? this.player.getVideoRect("wh") : {
                    w: 0,
                    h: 0
                }
            },
            t.prototype.destroy = function() {
                this.player && (this.player.removeEventListener(M.EVENT, this.mediaHandler, this), this.player.closeVideo(), this.player = null);
                try {
                    H5AD && this.curAd && H5AD.destory(this.curAd)
                } catch(e) {
                    this.log("ad error " + e)
                }
            }
        },
        t
    } (),
    K = function() {
        function e() {
            this.superClass.constructor.apply(this, arguments)
        }
        var t = {
            7 : "//{domain}/player/plugin/skin/skin.js"
        };
        return g.inherits(e, x),
        e.prototype.setUp = function(e, t, i) {
            e = '<div id="#{video}" style="left:0px;top:0px;position: absolute;width:{width};height:{height};z-index:1;display: block;background-color: #000000;overflow:hidden"></div><div id="#{skin}" style="left:0px;top:0px;position: relative;width:{width};height:{height};z-index:2;overflow: hidden;"></div><div id="#{error}" style="left:0px;top:0px;position: absolute;width:{width};height:{height};z-index:3;overflow: hidden;display:none;"></div>'.replace(/{width}/g, "100%"),
            e = e.replace(/{height}/g, "100%"),
            this.el = u.$E(t),
            this.outEl = u.$E(i),
            this.setStylebyConfig(this.model.config),
            this.skin = new E(this.el),
            u.getTemplate(this.el, e),
            this.facade.addEventListener(O.EVENT, this.videoSateHandler, this)
        },
        e.prototype.load = function(e) {
            var t = this;
            i.setPluginStack({
                name: "view.skin",
                url: t.getSkinUrl()
            }),
            t.model.config.skinnable ? i.getPlugin("view.skin",
            function(e) {
                e ? (t.skinView = new e(t.facade, t.model), t.skinView.addEventListener(N.EVENT, t.skinHandler, t), t.skinView.setUp(t.el.skin)) : t.el.removeChild(t.el.skin),
                t.dispatchEvent(new k(D.LOADCMP))
            }) : (t.el.removeChild(t.el.skin), t.facade.removeEventListener(O.EVENT, t.videoSateHandler, t), t.dispatchEvent(new k(D.LOADCMP)))
        },
        e.prototype.getSkinUrl = function() {
            return this.model.config.hasOwnProperty("nskin") && t.hasOwnProperty(this.model.config.nskin) ? t[this.model.config.nskin] : "//{domain}/player/plugin/skin/oldskin.js"
        },
        e.prototype.setStylebyConfig = function(e) {
            var t = ["controls", "fullscreen"],
            i = "vb" + o.creatUuid();
            this.el.className = i;
            for (var n = 0; n < t.length; n++) e[t[n]] || (e.pageControls ? I["setMedia" + t[n]]("", !1) : I["setMedia" + t[n]](i, !1))
        },
        e.prototype.getVideArea = function() {
            return this.el.skin.videoArea || null
        },
        e.prototype.autoSize = function() {
            var e = this.model.videoSetting.videoWidth,
            t = this.model.videoSetting.videoHeight;
            if (0 != e && 0 != t) switch (e /= t, this.model.config.autoSize + "") {
            case "1":
                t = u.$E(this.el).offsetWidth,
                this.log("获得容器的宽度==============================" + t),
                0 == t && (t = u.$E(this.outEl).style.width, t = -1 == t.indexOf("%") ? parseInt(t) : 0),
                this.log("获得容器的宽度==============================" + t),
                0 < t && (this.model.config.changeParent && (this.outEl.style.height = t / e + "px"), this.el.style.height = t / e + "px");
                break;
            case "2":
                t = u.$E(this.el).offsetHeight,
                0 == t && (t = u.$E(this.outEl).style.height, t = -1 == t.indexOf("%") ? parseInt(t) : 0),
                0 < t && (this.model.config.changeParent && (this.outEl.style.width = t * e + "px"), this.el.style.width = t * e + "px")
            }
        },
        e.prototype.setSize = function() {
            this.display = 0 < this.el.offsetWidth && 0 < this.el.offsetHeight
        },
        e.prototype.addEvents = function() {},
        e.prototype.removeEvents = function() {},
        e.prototype.destroy = function() {
            this.shutDown(),
            this.skinView && (this.facade.removeEventListener(O.EVENT, this.videoSateHandler, this), this.skinView.removeEventListener(N.EVENT, this.skinHandler, this), this.skinView = null)
        },
        e.prototype.skinHandler = function(e) {
            this.facade.dispatchEvent(e)
        },
        e.prototype.shutDown = function() {
            this.skinView && this.skinView.shutDown()
        },
        e.prototype.videoSateHandler = function(e) {
            e.args[1] !== M.LODING && e.args[1] != M.PLAYING && this.log(e.args[1]),
            this.skinView && this.skinView.listNotification(e.args[1], e.args[2])
        },
        e.prototype.setVideoPercent = function(e) {},
        e.prototype.setVideoScale = function(e) {},
        e.prototype.setVideoRect = function(e) {},
        e.prototype.refreshPlayerInfo = function(e) {
            this.skinView && this.skinView.refreshPlayerInfo(e)
        },
        e
    } (),
    J = function() {
        function e() {
            this.superClass.constructor.apply(this, arguments)
        }
        var t = i.getObj("media.watermask");
        return g.inherits(e, x),
        e.prototype.setUp = function(e, i) {
            this.log("开始创建视频模块"),
            this.el = i,
            this.skin = new E(i),
            this.mediaPlayer = new W(this.getConfig()),
            this.water = new t(this.model),
            this.model.videoSetting.volume = .8,
            this.model.videoSetting.fullscreen = !1,
            this.setDefinitionList(),
            this.getDefaultConfig(this.model.config),
            this.changeVideoInfo(this.definition),
            this.mediaPlayer.setUp(this.model.videoSetting, i),
            this.facade.color.setColor(this.skin, "bgColor"),
            this.facade.dispatchEvent(new k(O.EVENT, O.INIT))
        },
        e.prototype.getConfig = function(e) {
            switch (e = o.clone(this.model.config), e.posterType) {
            case "-1":
            case "-2":
                break;
            default:
                e.autoplay = "1",
                e.pic = ""
            }
            return e
        },
        e.prototype.changeVideoInfo = function(e) {
            this.videoInfo = o.clone(this.model.videoSetting.media[e]),
            this.videoInfo.definitionName = this.videoInfo.definition,
            this.videoInfo.definition = e,
            e = {
                uuid: this.model.uuid(),
                p1: this.model.reportParam.p1,
                p2: this.model.reportParam.p2,
                p3: this.model.reportParam.p3
            },
            this.model.videoSetting.hasOwnProperty("liveId") && (e.liveid = this.model.videoSetting.liveId, this.videoInfo.lid = this.model.videoSetting.liveId),
            this.model.videoSetting.hasOwnProperty("vid") && (e.vid = this.model.videoSetting.vid),
            e.ajax = 1,
            o.addUrlParams(this.videoInfo.urls, e),
            this.model.videoSetting.refresh(this.videoInfo)
        },
        e.prototype.setDefinitionList = function() {
            var e, t = [],
            i = this.model;
            for (e in i.videoSetting.media) t.push(e);
            i.definition2TypeObj = {},
            v.initTypeDefObj(i.defaultDefinitionList, i.definition2TypeObj),
            t.sort(function(e, t) {
                return v.defList.indexOf(v.type2Def(t)) - v.defList.indexOf(v.type2Def(e))
            }),
            i.videoSetting.refresh({
                definitionList: t
            })
        },
        e.prototype.getDefaultConfig = function(e) {
            this.definition = this.model.videoSetting.defaultDefinition || this.model.videoSetting.definitionList[0],
            e.hasOwnProperty("rate") && (e.rate = v.def2Type(e.rate, this.model.definition2TypeObj)),
            e.hasOwnProperty("rate") && -1 != this.model.videoSetting.definitionList.indexOf(e.rate) && (this.definition = e.rate),
            this.startime = 0,
            e.hasOwnProperty("start") && (this.startime = e.start)
        },
        e.prototype.setSize = function(e, t, i) {
            this.mediaPlayer.setSize(),
            this.water && this.water.setSize()
        },
        e.prototype.showPoster = function(e) {
            var t = this;
            switch (t.hidePoster(), t.poster = null, t.mediaPlayer.hide(!1), this.model.config.posterType) {
            case "-2":
            case "-1":
                t.mediaPlayer.show();
                break;
            case "0":
                break;
            default:
                t.addPoster()
            } - 2 == t.model.config.posterType ? (t.mediaPlayer.setPoster(t.getPosterUrl()), t.facade.dispatchEvent(new k(O.EVENT, O.VIDEO_AUTH_VALID))) : (this.model.config.skinnable || t.model.config.controls) && ("7" == this.model.config.nskin ? (t.playBtn = u.$C("canvas"), t.playBtn.style.cssText = "position:absolute;width:80px;height:80px;left:50%;top:50%;z-index:2;cursor:pointer;margin-left:-40px;margin-top:-40px;", t.playBtn.width = 80, t.playBtn.height = 80, t.render()) : (t.playBtn = u.$C("DIV"), t.playBtn.style.cssText = "position:absolute;width:75px;height:75px;left:50%;top:50%;background:rgba(1, 1, 1, 0) url(http://yuntv.letv.com/assets/img/skin.png?v=1901) no-repeat -111px -101px;margin: -40px 0 0 -38px;z-index:2;cursor:pointer;"), t.el.appendChild(t.playBtn), u.addEvent(t.playBtn, "click",
            function(e) {
                t.startAuth.call(t)
            }))
        },
        e.prototype.render = function() {
            if (this.playBtn) {
                var e = this.playBtn.getContext("2d");
                e.beginPath(),
                e.arc(40, 40, 37, 0, 2 * Math.PI, !0),
                e.closePath(),
                e.fillStyle = u.hexToRgba("#000000", .5),
                e.fill(),
                e.lineWidth = 5,
                e.strokeStyle = this.facade.color.colorConfig.active,
                e.lineWidth = 1,
                e.strokeStyle = this.facade.color.colorConfig.fault,
                e.beginPath(),
                e.moveTo(32, 25),
                e.lineTo(55, 40),
                e.lineTo(32, 55),
                e.closePath(),
                e.stroke(),
                e.fillStyle = u.hexToRgba(this.facade.color.colorConfig.fault, 1),
                e.fill()
            }
        },
        e.prototype.addPoster = function(e) {
            this.poster ? this.poster.style.display = "": (this.poster = u.$C("DIV"), this.poster.src = this.getPosterUrl(), this.poster.style.cssText = "position:absolute;width:100%;height:100%; top: 0px;left: 0px;background:rgba(1, 1, 1, 0) url(" + this.poster.src + ") no-repeat 50% 50%;background-size:" + ["", "contain", "cover", "100% 100%"][this.model.config.posterType] + ";z-index:2;cursor:pointer;"),
            this.el.appendChild(this.poster)
        },
        e.prototype.hidePoster = function(e) {
            this.poster && this.el && this.poster.parentNode == this.el && (this.el.removeChild(this.poster), this.poster = null),
            this.playBtn && this.el && this.playBtn.parentNode == this.el && (this.el.removeChild(this.playBtn), this.playBtn = null)
        },
        e.prototype.startAuth = function(e) {
            var t = this;
            t.hidePoster(),
            t.model.config.onlyPic ? t.mediaPlayer.hide() : t.mediaPlayer.show(),
            0 > t.model.config.posterType + 0 ? t.mediaPlayer.setPoster(t.getPosterUrl()) : t.mediaPlayer.setPoster(""),
            t.mediaPlayer.play(function() {
                t.facade.dispatchEvent(new k(O.EVENT, O.VIDEO_AUTH_VALID))
            })
        },
        e.prototype.startPlay = function(e) {
            this.log("开始尝试播放"),
            this.isStartPlay = !1,
            this.setDefinitionList(),
            this.getDefaultConfig(this.model.config),
            this.mediaPlayer.addEventListener(M.EVENT, this.mediaHandler, this),
            this.facade.addEventListener(N.EVENT, this.skinSateHandler, this),
            this.facade.addEventListener(O.EVENT, this.videoSateHandler, this),
            this.mediaPlayer.setContainer(e),
            this.mediaPlayer.setLoop(this.model.config.loop),
            this.playVideo(this.start),
            this.facade.dispatchEvent(new k(O.EVENT, M.CONNECT))
        },
        e.prototype.startGslb = function(e) {
            this.gslbplayTime = e,
            this.gslbLoader = new G(this.model),
            this.gslbLoader.addEventListener(D.LOADCMP, this.gslbCmp, this),
            this.gslbLoader.addEventListener(D.LOADERROR, this.gslbErr, this),
            this.gslbLoader.translate(),
            this.facade.dispatchEvent(new k(O.EVENT, O.GSLB_START))
        },
        e.prototype.gslbCmp = function(e) {
            var t = this;
            t.videoInfo.urls = e.args[1];
            var i = !0;
            0 != t.model.joint || t.isStartPlay || -2 != t.model.config.posterType || (i = "1" == t.model.config.autoplay),
            t.model.config.onlyPic ? (t.mediaPlayer.show(), setTimeout(function() {
                t.mediaPlayer.startPlay(t.videoInfo, t.gslbplayTime, i, t.getPlayerType(),
                function() {
                    t.facade.dispatchEvent(new k(O.EVENT, O.GSLB_CMP))
                })
            },
            10)) : t.mediaPlayer.startPlay(t.videoInfo, t.gslbplayTime, i, t.getPlayerType(),
            function() {
                t.facade.dispatchEvent(new k(O.EVENT, O.GSLB_CMP))
            })
        },
        e.prototype.gslbErr = function(e) {
            this.facade.dispatchEvent(new k(O.EVENT, O.ERROR, e.args[2]))
        },
        e.prototype.setAutoReplay = function(e) {
            this.mediaPlayer.setLoop(e)
        },
        e.prototype.setDefinition = function(e) {
            this.definition != e && -1 != this.model.videoSetting.definitionList.indexOf(e) && (this.log("切换码流-----------------------------" + e), this.definition = e, this.isStartPlay = !1, this.playVideo(this.mediaPlayer.getTime()), this.facade.dispatchEvent(new k(O.EVENT, M.DEFSTART)))
        },
        e.prototype.playVideo = function(e) {
            "pano" != this.getPlayerType() || o.checkPano() ? (this.changeVideoInfo(this.definition), this.mediaPlayer.getVideoEl() && this.mediaPlayer.getVideoEl().setAttribute("data-rate", v.type2Def(this.model.videoSetting.definition)), this.startGslb(e)) : this.facade.dispatchEvent(new k(O.EVENT, O.VIDEO_INFO, [{
                code: 490,
                message: "该设备还不支持3d功能,建议使用windows和安卓系统下的谷歌浏览器体验该功能"
            }]))
        },
        e.prototype.getDefinitionList = function() {
            return this.model.videoSetting.definitionList
        },
        e.prototype.videoSateHandler = function(e) {
            switch (e.args[1]) {
            case O.VPH:
                this.isStartPlay && this.mediaPlayer.pause();
                break;
            case M.START:
                this.isStartPlay = !0,
                this.mediaPlayer.show(),
                this.model.config.onlyPic && this.addPoster(),
                this.water.setUp(this.mediaPlayer);
                break;
            case M.STOP:
                this.isStartPlay = !1;
                break;
            case O.ERROR:
            case M.ERROR:
                this.isStartPlay = !1;
            case O.VIDEO_INFO:
                this.model.config.skinnable && this.mediaPlayer.hide(!1);
                break;
            case O.FULLSCREEN:
                this.model.config.onlyPic && !this.model.videoSetting.fullscreen && this.mediaPlayer.hide();
                break;
            case O.PRESIZE:
                this.setSize()
            }
        },
        e.prototype.skinSateHandler = function(e) {
            switch (e.args[1]) {
            case N.PLAY:
                if (this.model.config.onlyPic) {
                    var t = this;
                    t.mediaPlayer.show(),
                    setTimeout(function() {
                        t.mediaPlayer.play()
                    },
                    10)
                } else this.mediaPlayer.play();
                break;
            case N.PAUSE:
                this.mediaPlayer.pause();
                break;
            case N.SEEK:
                this.mediaPlayer.seek(e.args[2]);
                break;
            case N.VOLUME:
                this.model.videoSetting.volume = e.args[2],
                this.mediaPlayer.setVol(this.model.videoSetting.volume);
                break;
            case N.SETDEFINITION:
                this.setDefinition(e.args[2]);
                break;
            case N.REPLAY:
                this.mediaPlayer.replay()
            }
        },
        e.prototype.getPlayerType = function() {
            return this.model.config.hasOwnProperty("pano") && "1" == this.model.config.pano || "1" == this.model.videoSetting.pano ? "pano": ""
        },
        e.prototype.mediaHandler = function(e) {
            switch (e.args[1]) {
            case M.ERROR:
                if ("vod" == this.model.playType && this.model.vodPlayType && "ios" == this.model.vodPlayType && e.args[2][0].retryCdn) return this.model.vodPlayType = "mp4",
                o.setLocal("playType", this.model.vodPlayType),
                this.log("重新调度"),
                void this.startGslb(0)
            }
            this.facade.dispatchEvent(new k(O.EVENT, e.args[1], e.args[2]))
        },
        e.prototype.getPosterUrl = function(e) {
            return this.model.config.hasOwnProperty("pic") ? this.model.config.pic: this.model.videoSetting.pic
        },
        e.prototype.destroy = function(e) {
            this.facade.removeEventListener(N.EVENT, this.skinSateHandler, this),
            this.facade.removeEventListener(O.EVENT, this.videoSateHandler, this),
            this.mediaPlayer.removeEventListener(M.EVENT, this.mediaHandler, this),
            this.mediaPlayer.destroy(),
            this.facade.dispatchEvent(new k(O.EVENT, M.STOP, (!1)))
        },
        e.prototype.refreshPlayerInfo = function(e) {
            "7" == this.model.config.nskin && this.render(),
            this.water.setUp(this.mediaPlayer)
        },
        e
    } (),
    Q = function() {
        function t() {
            this.superClass.constructor.apply(this, arguments)
        }
        return g.inherits(t, x),
        t.prototype.setUp = function(e) {
            this.player = e,
            this.addEvents()
        },
        t.prototype.addEvents = function() {
            var t = this;
            t.addVideoEvent = !1,
            t.facade.addEventListener(N.EVENT, t.skinSateHandler, t),
            t.facade.addEventListener(O.EVENT, t.videoSateHandler, t),
            t.fullChangeFun = o.bindFun(t.fullChange, t),
            t.resizeFun = o.bindFun(t.resize, t),
            u.addEvent(e, "fullscreenchange,webkitfullscreenchange,mozfullscreenchange,MSFullscreenChange", t.fullChangeFun),
            u.addEvent(window, "resize", this.resizeFun),
            u.addEvent(window, "pagehide", o.bindFun(this.pageHide, this));
            var i; ["webkit", "moz", "o", "ms"].forEach(function(t) {
                "undefined" != typeof e[t + "Hidden"] && (i = t)
            }),
            u.addEvent(e, i + "visibilitychange",
            function() {
                "hidden" == e[i + "VisibilityState"] ? t.facade.dispatchEvent(new k(O.EVENT, O.VPH)) : "visible" == e[i + "VisibilityState"] && t.facade.dispatchEvent(new k(O.EVENT, O.VPS))
            })
        },
        t.prototype.videoSateHandler = function(e) {
            switch (e.args[1]) {
            case O.INIT:
                this.addVideoEvents()
            }
        },
        t.prototype.pageHide = function(e) {
            this.facade.dispatchEvent(new k(O.EVENT, O.WPH))
        },
        t.prototype.fullChange = function() {
            this.model.videoSetting && (this.model.videoSetting.fullscreen = u.isFullScreen(), this.model.videoSetting.fullscreen || (this.cancelFullscreen(), this.resizeFun()), this.facade.dispatchEvent(new k(O.EVENT, O.FULLSCREEN, this.model.videoSetting.fullscreen)))
        },
        t.prototype.resize = function() {
            this.facade.dispatchEvent(new k(O.EVENT, O.PRESIZE))
        },
        t.prototype.cancelFullscreen = function() {
            var t = this.player.skinplugin.skin;
            t.hasAttribute("tmpStyle") && (t.setStyle({
                cssText: t.getAttribute("tmpStyle")
            }), t.removeAttribute("tmpStyle")),
            this.bodyTmpOverFlow && (e.body.style.overflow = this.bodyTmpOverFlow)
        },
        t.prototype.addVideoEvents = function(e) {
            e = this.player.videoplugin.mediaPlayer.getVideoEl();
            var t = this;
            t.addVideoEvent || (e.addEventListener("webkitbeginfullscreen",
            function() {
                t.model.videoSetting.fullscreen = !0,
                t.facade.dispatchEvent(new k(O.EVENT, O.FULLSCREEN, t.model.videoSetting.fullscreen))
            }), e.addEventListener("webkitendfullscreen",
            function() {
                t.model.videoSetting.fullscreen = !1,
                t.facade.dispatchEvent(new k(O.EVENT, O.FULLSCREEN, t.model.videoSetting.fullscreen)),
                t.resizeFun()
            }), t.addVideoEvent = !0)
        },
        t.prototype.skinSateHandler = function(t) {
            switch (t.args[1]) {
            case N.FULLSCREEN:
                if (t = this.player.videoplugin.mediaPlayer.getVideoEl(), this.model.config.dfull && t && t.webkitEnterFullscreen && "chrome" != o.getBrowser()) {
                    t.webkitEnterFullscreen();
                    break
                }
                this.model.videoSetting.fullscreen ? (this.model.videoSetting.fullscreen = !1, this.cancelFullscreen(), u.supportFullScreen() && this.model.config.dfull && u.cancelFullScreen()) : (this.model.videoSetting.fullscreen = !0, this.player.skinplugin.skin.setAttribute({
                    tmpStyle: this.player.skinplugin.el.style.cssText
                }), u.supportFullScreen() && this.model.config.dfull ? u.fullScreen(this.player.skinplugin.el) : (this.bodyTmpOverFlow = e.body.style.overflow, e.body.style.overflow = "hidden"), this.player.skinplugin.skin.setStyle({
                    cssText: "background: #000;width:100%;height:100%;position:fixed;top:0;left:0;z-index:1000;overflow:hidden;"
                })),
                this.resizeFun()
            }
        },
        t
    } (),
    Z = function() {
        function e() {
            this.superClass.constructor.apply(this, arguments)
        }
        return g.inherits(e, x),
        e.prototype.setUp = function(e, t, i) {
            this.el = t,
            this._api = i,
            this.skin = new E(this.el),
            this.playingStop = !1,
            this.error = null,
            this.facade.addEventListener(O.EVENT, this.videoSateHandler, this)
        },
        e.prototype.videoSateHandler = function(e) {
            switch (e.args[1]) {
            case M.START:
            case M.BUFFEREFULL:
                this.skin.setVisible(!1);
                break;
            case M.ERROR:
            case O.ERROR:
            case O.VIDEO_INFO:
                if (this.skin.setVisible(!0), !this.model.config.skinnable) break;
                this.show(e.args[2]);
                break;
            case M.STOP:
                this.playingStop = !0,
                this.skin.setVisible(!1);
                break;
            case M.PLAYING:
                this.playingStop && this.skin.setVisible(!1),
                this.playingStop = !1;
                break;
            case O.VIDEO_LIVESTOP:
                this.playingStop = !0
            }
        },
        e.prototype.show = function(e) {
            var t = this;
            t.error ? t.error.show(e, t.el, {
                api: t._api,
                model: t.model
            }) : i.getPlugin("ErrorInfo",
            function(i) {
                i && (t.error = new i, t.error.show(e, t.el, {
                    api: t._api,
                    model: t.model
                }))
            })
        },
        e.prototype.report = function() {},
        e
    } (),
    ee = function() {
        function e(e, t, i) {
            "undefined" != typeof i.api[e] && (t[e] = function() {
                return i.api[e].apply(i.api, arguments)
            })
        }
        return function(t) {
            for (var i = 0; i < l.length; i++) e(l[i], this, t)
        }
    } (),
    te = function() {
        function e(e, i, n) {
            t.prototype[e] = function() {
                return n[e].apply(n, arguments)
            }
        }
        function t(i) {
            for (this.player = i, i = 0; i < l.length; i++) e(l[i], t, this.player.plugin);
            t.prototype.playNewId = function(e) {
                return this.player.plugin.setLejuData(e)
            },
            t.prototype.getDefinitionList = function() {
                return this.player.plugin.getDefinitionList()
            },
            t.prototype.callFlash = function(e) {
                return this.player.plugin[e.action](e.value)
            }
        }
        return t
    } (),
    ie = function() {
        function e(e) {
            this._pl = e
        }
        return e.prototype.playNewId = function(e) {
            return this._pl.playNewId(e)
        },
        e.prototype.getVideoSetting = function() {
            for (var e = o.clone(this._pl.model.videoSetting), t = {},
            i = 0; i < v.settingList().length; i++) {
                var n = v.settingList()[i];
                e.hasOwnProperty(n) ? t[n] = "definition" == n ? this.getDefinition() : "defaultDefinition" == n ? this.getDefaultDefinition() : e[n] : t[n] = ""
            }
            return t
        },
        e.prototype.getVideoTime = function() {
            return this._pl.videoplugin ? this._pl.videoplugin.mediaPlayer.getTime() : 0
        },
        e.prototype.pauseVideo = function() {
            this._pl.facade.dispatchEvent(new k(N.EVENT, N.PAUSE))
        },
        e.prototype.resumeVideo = function() {
            this._pl.facade.dispatchEvent(new k(N.EVENT, N.PLAY))
        },
        e.prototype.seekTo = function(e) {
            this._pl.facade.dispatchEvent(new k(N.EVENT, N.SEEK, e))
        },
        e.prototype.replayVideo = function() {
            this._pl.facade.dispatchEvent(new k(N.EVENT, N.REPLAY))
        },
        e.prototype.closeVideo = function() {
            this._pl.closeVideo()
        },
        e.prototype.setVolume = function(e) {
            this._pl.facade.dispatchEvent(new k(N.EVENT, N.VOLUME, e))
        },
        e.prototype.shutDown = function() {
            this._pl.shutDown()
        },
        e.prototype.startUp = function() {
            this._pl.startUp()
        },
        e.prototype.getBufferPercent = function() {
            return this._pl.videoplugin ? this._pl.videoplugin.mediaPlayer.getBufferPercent() : 0
        },
        e.prototype.setDefinition = function(e) {
            e = v.def2Type(e, this._pl.model.definition2TypeObj),
            this._pl.facade.dispatchEvent(new k(N.EVENT, N.SETDEFINITION, e))
        },
        e.prototype.getDefinition = function() {
            return v.type2Def(this._pl.model.videoSetting.definition)
        },
        e.prototype.getDefaultDefinition = function() {
            return v.type2Def(this._pl.model.videoSetting.defaultDefinition)
        },
        e.prototype.getDefList = function() {
            for (var e = [], t = 0; t < this._pl.model.defaultDefinitionList.length; t++) {
                var i = v.type2Def(this._pl.model.defaultDefinitionList[t]);
                e.push(i)
            }
            return e
        },
        e.prototype.getDefinitionList = function() {
            for (var e = [], t = 0; t < this._pl.model.videoSetting.definitionList.length; t++) {
                var i = v.type2Def(this._pl.model.videoSetting.definitionList[t]);
                e.push(i)
            }
            return e
        },
        e.prototype.setVideoPercent = function(e) {
            this._pl.skinplugin.setVideoPercent(e)
        },
        e.prototype.getVideoPercent = function() {},
        e.prototype.setVideoScale = function(e) {
            return this._pl.skinplugin.setVideoScale(e),
            0
        },
        e.prototype.getVideoScale = function() {
            return 0
        },
        e.prototype.resetVideoScale = function() {
            return this._pl.skinplugin.setVideoScale(0),
            0
        },
        e.prototype.fullVideoScale = function() {
            this._pl.skinplugin.setVideoScale(1)
        },
        e.prototype.setVideoRect = function(e) {
            this._pl.skinplugin.setVideoScale(e)
        },
        e.prototype.getLoadPercent = function() {
            if (this._pl.videoplugin) return this._pl.videoplugin.mediaPlayer.getLoadPercent()
        },
        e.prototype.getDownloadSpeed = function() {
            return 0
        },
        e.prototype.getPlayRecord = function() {
            if (this._pl.videoplugin) return this._pl.videoplugin.getPlayRecord()
        },
        e.prototype.getPlayState = function() {
            if (this._pl.videoplugin) return this._pl.videoplugin.getPlayState()
        },
        e.prototype.setVideoColor = function() {
            return - 1
        },
        e.prototype.getVideoColor = function() {
            return - 1
        },
        e.prototype.getVersion = function() {
            return this._pl.version
        },
        e.prototype.setAutoReplay = function(e) {
            return this._pl.videoplugin.setAutoReplay(e)
        },
        e.prototype.feedback = function(e) {
            return this._pl.feedback(e)
        },
        e.prototype.getLog = function(e) {
            return this._pl.getLog(e)
        },
        e.prototype.getServerTime = function(e) {},
        e.prototype.setPlayerInfo = function(e) {
            this._pl.setPlayerInfo(e)
        },
        e.prototype.setHorseRaceLampInfo = function(e) {},
        e
    } (),
    ne = {
        configConver: function(e, t) {
            var i = {
                dfull: !0,
                fullscreen: !0,
                skinnable: !0,
                controls: !1,
                loop: !1,
                definition: !0,
                autoSize: "0",
                changeParent: !1,
                posterType: "1",
                playsinline: "1",
                autoplay: "0",
                onlyPic: !1,
                playIngBg: !1,
                dvideoSize: !0,
                mustAutoplay: !1,
                next: !1,
                setBtn: !1,
                seek: !0,
                share: !1,
                controlBarVisible: !0,
                bigPlayBtnVisible: !0,
                lang: "zh_CN",
                pageControls: !1
            };
            e.setBtn = !1,
            e.share = !1,
            e.hasOwnProperty("pa") && (e.pano = e.pa, delete e.pa),
            e.hasOwnProperty("auto_play") && (e.autoplay = e.auto_play, delete e.auto_play),
            e.hasOwnProperty("autoReplay") && (e.loop = "1" == e.autoReplay, delete e.autoReplay),
            0 > parseInt(e.posterType) && !e.hasOwnProperty("controls") && !e.hasOwnProperty("skinnable") && (e.controls = "1", e.skinnable = "0"),
            t.skinnable = 1,
            t.controls = 1;
            for (var n in e) t[n] = e[n];
            for (n in i) e.hasOwnProperty(n) ? "boolean" == typeof i[n] && (e[n] = "1" == e[n]) : e[n] = i[n];
            switch ((1 < parseInt(e.autoplay) || 0 > parseInt(e.autoplay)) && (e.autoplay = "0"), (3 < parseInt(e.posterType) || -2 > parseInt(e.posterType)) && (e.posterType = "1"), e.autoplay += "", e.posterType += "", e.onlyPic = !1, e.playIngBg = !0, o.getDevice()) {
            case "androidPhone":
            case "androidPad":
            case "android":
                switch (o.getBrowser()) {
                case "uc":
                    e.skinnable = !1,
                    e.controls = !0;
                    break;
                default:
                    e.mustAutoplay || (e.autoplay = "0")
                }
                e.soundVisible = !1,
                t.soundVisible = !1;
                break;
            case "iphone":
                switch (o.getBrowser()) {
                case "uc":
                    e.dfull = !1;
                    break;
                case "qq":
                    e.onlyPic = !0;
                    break;
                default:
                    var i = navigator.userAgent.toLowerCase(),
                    a = [/cpu iphone os 8_/];
                    for (n = 0; n < a.length; n++) if (a[n].test(i)) {
                        e.dvideoSize = !1;
                        break
                    }
                    if (0 <= parseInt(e.posterType) && (a = [/cpu iphone os 6_/], e.skinnable)) for (n = 0; n < a.length; n++) if (a[n].test(i)) {
                        e.onlyPic = !0;
                        break
                    }
                }
                e.soundVisible = !1,
                t.soundVisible = !1;
            case "ipad":
                switch (o.getBrowser()) {
                case "qqwebview":
                case "weixin":
                    i = navigator.userAgent.toLowerCase(),
                    /cpu iphone os 8_/.test(i) && !e.mustAutoplay && (e.autoplay = "0");
                    break;
                default:
                    e.mustAutoplay || (e.autoplay = "0")
                }
                break;
            case "pc":
                e.playIngBg = !1
            }
        }
    },
    ae = function() {
        function e() {
            this.init()
        }
        return g.inherits(e, b),
        e.prototype.init = function() {
            this.api = new ie(this)
        },
        e.prototype.setUp = function(e, t, i) {
            this.vModelInit = this.canplay = !1,
            this.model = new j,
            this.setModelByEnv(),
            this.model.api = this.getVideoApi(),
            this.model.outConfig = {},
            this.configHanlder(e, this.model.outConfig),
            this.model.config.refresh(e),
            this.model.playerConfig.refresh({
                version: this.version
            }),
            this.initPlugin(),
            this.facade = new T,
            this.facade.init(this.model.config),
            this.reportplugin = new Y(this.facade, this.model),
            this.reportplugin.setUp(),
            this.globalplugin = new Q(this.facade, this.model),
            this.globalplugin.setUp(this),
            this.skinplugin = new K(this.facade, this.model),
            this.skinplugin.setUp(e, t, i),
            this.errorplugin = new Z(this.facade, this.model),
            this.errorplugin.setUp(this, this.skinplugin.el.error, this.api),
            this.addEvents(),
            this.envCheck() && this.startGetData()
        },
        e.prototype.initPlugin = function() {},
        e.prototype.envCheck = function() {
            return ! ("1" == this.model.config.pano && !o.checkPano()) || (this.facade.dispatchEvent(new k(O.EVENT, O.VIDEO_INFO, [{
                code: w.NOSupport,
                message: n.NoSupportPano
            }])), !1)
        },
        e.prototype.setModelByEnv = function() {
            switch (o.getDevice()) {
            case "pc":
            case "mac":
                this.model.systemData.refresh({
                    pc:
                    !0
                });
                break;
            default:
                this.model.systemData.refresh({
                    pc:
                    !1
                })
            }
        },
        e.prototype.configHanlder = function(e, t) {
            ne.configConver(e, t)
        },
        e.prototype.addEvents = function() {
            this.facade.addEventListener(N.EVENT, this.skinHandler, this),
            this.facade.addEventListener(O.EVENT, this.videoHandler, this)
        },
        e.prototype.removedEvents = function() {
            this.facade.removeEventListener(N.EVENT, this.skinHandler, this),
            this.facade.removeEventListener(O.EVENT, this.videoHandler, this)
        },
        e.prototype.startGetData = function() {
            this.log("开始请求数据"),
            this.vModel = new V(this.model),
            this.vModel.addEventListener(D.LOADCMP, this.dataCmp, this),
            this.vModel.addEventListener(D.LOADERROR, this.errorHanlder, this),
            this.vModel.setUp(this.model.config, this.skinplugin),
            this.facade.dispatchEvent(new k(O.EVENT, O.VIDEO_DATA_START))
        },
        e.prototype.dataCmp = function() {
            this.log("请求GpC成功");
            var e = this;
            "0" == e.model.videoSetting.isdrm ? (e.setupPlayer(), e.vModelInit = !0, e.skinplugin.addEventListener(D.LOADCMP,
            function() {
                "0" == e.model.config.autoplay ? e.videoplugin.showPoster() : e.videoplugin.startAuth()
            },
            this), e.facade.color.register(this.model.config), e.facade.dispatchEvent(new k(O.EVENT, O.VIDEO_DATA_CMP)), e.skinplugin.load()) : e.facade.dispatchEvent(new k(O.EVENT, O.ERROR, [{
                code: w.VOD_CONFIG_DRM,
                message: n.Drm
            }]))
        },
        e.prototype.setupPlayer = function() {
            this.log("开始创建播放器"),
            this.videoplugin || (this.videoplugin = new J(this.facade, this.model), this.videoplugin.setUp(this.model.videoSetting, this.skinplugin.el.video))
        },
        e.prototype.creatVideo = function() {
            this.log("开始创建视频"),
            this.videoplugin.startPlay(this.skinplugin.getVideArea())
        },
        e.prototype.setupAdplugin = function() {
            this.model.record.as = o.now(),
            this.log("开始请求广告"),
            this.adplugin = new X(this.facade, this.model),
            this.facade.addEventListener(L.EVENT, this.adHandler, this),
            this.adplugin.setUp(this.videoplugin.mediaPlayer, this.skinplugin.el)
        },
        e.prototype.errorHanlder = function(e) {
            this.log("数据请求失败"),
            this.facade.dispatchEvent(new k(O.EVENT, O.ERROR, e.args[1]))
        },
        e.prototype.adHandler = function(e) {
            switch (this.log("广告返回" + e.args[1]), e.args[1]) {
            case L.HEADSTART:
                this.model.joint = 2,
                this.facade.dispatchEvent(new k(O.EVENT, L.HEADSTART));
                break;
            case L.HEADEND:
                this.model.joint = 2;
            case L.NOAD:
                this.model.joint = 0,
                this.facade.removeEventListener(L.EVENT, this.adHandler, this),
                this.facade.dispatchEvent(new k(O.EVENT, e.args[1], e.args[2])),
                this.creatVideo()
            }
        },
        e.prototype.videoHandler = function(e) {
            switch (this.vStateHandler(e), e.args[1]) {
            case O.VIDEO_AUTH_VALID:
                this.canplay = !0,
                this.setupAdplugin();
                break;
            case O.VIDEO_DATA_START:
            case O.GSLB_START:
            case O.GSLB_CMP:
            case O.VIDEO_DATA_CMP:
            case M.PLAYING:
            case M.LODING:
                return;
            case O.INIT:
                "0" != this.model.config.autoSize && this.skinplugin.autoSize(),
                this.model.playerConfig.refresh({
                    pWidth: this.skinplugin.el.offsetWidth,
                    pHeight: this.skinplugin.el.offsetHeight
                });
                break;
            case O.WPH:
                return void this.destroy()
            }
            if (this.model.config.hasOwnProperty("callbackJs")) {
                var t = e.args[1];
                e = e.args[2],
                t == O.ERROR && (t = M.ERROR),
                r[this.model.config.callbackJs] && r[this.model.config.callbackJs](t, e)
            }
        },
        e.prototype.vStateHandler = function(e) {},
        e.prototype.skinHandler = function(e) {},
        e.prototype.destroy = function() {
            this.skinplugin && this.skinplugin.shutDown(),
            this.globalplugin && this.globalplugin.destroy(),
            this.videoplugin && this.videoplugin.destroy(),
            this.removedEvents(),
            this.vModel && (this.vModel.destroy(), this.vModel = null),
            this.adplugin && (this.adplugin.destroy(), this.adplugin = null),
            this.reportplugin && this.reportplugin.destroy()
        },
        e.prototype.closeVideo = function() {
            this.videoplugin.destroy()
        },
        e.prototype.shutDown = function() {
            this.destroy(),
            this.addEvents(),
            this.videoplugin && this.videoplugin.showPoster()
        },
        e.prototype.startUp = function() {
            this.log("call startUp -vModelInit:" + this.vModelInit),
            this.destroy(),
            this.vModelInit ? (this.reportplugin.setUp(), this.addEvents(), this.videoplugin && this.videoplugin.startAuth()) : (this.model.config.autoplay = "1", this.reportplugin.setUp(), this.addEvents(), this.startGetData())
        },
        e.prototype.playNewId = function(e) {
            var t = "";
            this.destroy(),
            this.model.clear(),
            this.setModelByEnv(),
            this.model.playerConfig.refresh({
                version: this.version
            }),
            this.model.init({
                deviceId: this.model.lc(),
                os: o.getOs(),
                osv: "-",
                width: window.screen.width,
                height: window.screen.height,
                appv: this.version
            }),
            this.vModelInit = !1,
            this.canplay && !e.hasOwnProperty("autoplay") && (t = "1"),
            this.configHanlder(e, this.model.outConfig),
            "" != t && (e.autoplay = t),
            this.model.config.refresh(e),
            this.reportplugin.setUp(),
            this.addEvents(),
            this.startGetData()
        },
        e.prototype.feedback = function(e) {
            "undefined" == typeof e && (e = {}),
            e.type = "0",
            e.logcontent = api.getLog(),
            this.reportplugin.report(e)
        },
        e.prototype.getLog = function() {
            return this.reportplugin.getLog()
        },
        e.prototype.getVideoApi = function() {
            var e = this;
            return {
                getVideoInfo: function() {
                    return {
                        time: e.videoplugin.mediaPlayer.getTime()
                    }
                }
            }
        },
        e.prototype.setPlayerInfo = function(e) {
            var t = {
                buttonColor: "fault",
                progressBarColor: "active"
            };
            if (e.hasOwnProperty("onoff")) {
                for (var i in e.onoff) e[i] = e.onoff[i];
                delete e.onoff
            }
            for (i in e) t.hasOwnProperty(i) && (e[t[i]] = e[i], delete e[i]),
            "boolean" == typeof this.model.config[i] && (e[i] = "1" == e[i] + "");
            t = {},
            t.logo = e.logo,
            t.watermark = e.watermark,
            this.model.playerConfig.refresh(t),
            this.model.config.refresh(e),
            this.facade.color.refresh(e),
            this.skinplugin.refreshPlayerInfo(e),
            this.videoplugin.refreshPlayerInfo(e)
        },
        e
    } (),
    oe = function() {
        function e() {
            this.superClass.constructor.apply(this, arguments)
        }
        return g.inherits(e, ae),
        e.prototype.init = function() {
            this.superClass.init.apply(this, arguments),
            this.version = "H5_Vod_20160713_4.5.4"
        },
        e.prototype.setModelByEnv = function() {
            this.superClass.setModelByEnv.apply(this, arguments),
            this.model.playType = "vod",
            this.model.videoSetting.gslb = !0,
            o.isHttps() && (this.model.videoSetting.gslb = !1)
        },
        e.prototype.initPlugin = function() {
            i.setPluginStack([{
                name: "ErrorInfo",
                url: "//{domain}/p/{LANG}/plugin/errorRender.js"
            },
            {
                name: "FeedbackInfo",
                url: "//{domain}/p/{LANG}/plugin/feedbackRender.js"
            },
            {
                name: "PanoRender",
                url: "//{domain}/p/{LANG}/plugin/panoRender1.1.js"
            },
            {
                name: "Ad",
                url: "//{domain}/p/{LANG}/plugin/a.js"
            },
            {
                name: "lang.message.plugin.vod",
                url: "//{domain}/p/{LANG}/plugin/lang/lang_vod.js"
            }], this.model.config.lang),
            i.preload("lang.message.plugin.vod", "ErrorInfo")
        },
        e
    } (),
    re = function() {
        function e(e) {
            this.minVer = e
        }
        return e.prototype = {
            setUp: function(e, t) {
                var i = "http://yuntv.letv.com/bcloud.swf";
                o.isHttps() && (i = "https://s.yuntv.letv.com/bclouds.swf"),
                e.hasOwnProperty("p") && 101 != e.p && (i = "http://yuntv.letv.com/player/vrp/vrp.swf"),
                e.hasOwnProperty("callback") && (e.callbackJs = e.callback, delete e.callback);
                var n = "Opaque";
                e.hasOwnProperty("wmode") && (n = e.wmode, delete e.wmode),
                "Opaque" == n && (e.panoType = 1),
                this.id = m.create(t, {
                    url: i,
                    version: this.minVer,
                    wmode: n
                },
                this.flashvarsToString(e)),
                this.plugin = m.getPlayer(this.id),
                this.api = new te(this)
            },
            flashvarsToString: function(e) {
                var t, i = "";
                for (t in e) i += t + "=" + e[t] + "&";
                return i
            }
        },
        e
    } (),
    se = function() {
        function t(e) {
            this.init(e)
        }
        return t.prototype = {
            init: function(e) {
                switch (this.check(e)) {
                case "swf":
                    this.player = new re(10);
                    break;
                default:
                    this.player = new oe
                }
            },
            setUp: function(e, t, i) {
                this.player.setUp.apply(this.player, arguments)
            },
            check: function(t) {
                return t.hasOwnProperty("type") ? t.type: t.hasOwnProperty("dbd") && "LETV" == t.dbd ? "h5": "android" != o.getOs() && "iphone" != o.getDevice() && "ipad" != o.getDevice() && m.check(10) ? "swf": e.createElement("video").canPlayType ? "h5": "swf"
            }
        },
        t
    } (),
    le = function() {
        function e(e, t) {
            var i = "100%",
            n = "100%",
            a = "player" + o.creatUuid();
            return e.hasOwnProperty("width") && (isNaN(e.width) ? -1 != i.indexOf("%") && (i = e.width) : i = e.width + "px"),
            e.hasOwnProperty("height") && (isNaN(e.height) ? -1 != n.indexOf("%") && (n = e.height) : n = e.height + "px"),
            i = '<div id="#{player}" style="position: relative;width: {width};height:{height};margin-right:auto;margin-left:auto"></div>'.replace(/{width}/g, i),
            i = i.replace(/{height}/g, n),
            i = i.replace(/#{player}/g, a),
            "string" == typeof t && "" != t && u.$E(t) ? u.$E(t).innerHTML = i: s.write(i),
            a
        }
        function t(e, t, i) {
            var n = new se(e);
            return n.setUp(e, t, i),
            n.player
        }
        function i() {}
        return g.inherits(i, b),
        i.prototype.init = function(i, n, a) {
            var o = e(i, n),
            s = t(i, o, n);
            if (this.sdk = new ee(s), a) {
                var l = function(e) {
                    switch (e.args[1]) {
                    case O.INIT:
                        s.facade.removeEventListener(O.EVENT, l, this),
                        i.hasOwnProperty("callback") && ("function" == typeof i.callback ? i.callback && i.callback(s.videoplugin.mediaPlayer.player.video) : i.callback && r[i.callback] && r[i.callback](s.videoplugin.mediaPlayer.player.video));
                    }
                };
                s.facade && s.facade.addEventListener(O.EVENT, l, this)
            }
        },
        i
    } ();
    if (r.CloudVodPlayer = le, "undefined" != typeof r.letvcloud_player_conf) {
        var ce = new CloudVodPlayer;
        if (r.letvcloud_player_conf.hasOwnProperty("callbackJs") && (r.letvcloud_player_conf.callback = r.letvcloud_player_conf.callbackJs, delete r.letvcloud_player_conf.callbackJs), !r.letvcloud_player_conf.hasOwnProperty("posterType")) {
            r.letvcloud_player_conf.posterType = "-1";
            var de = navigator.userAgent.toLowerCase(); - 1 < de.indexOf("iphone") && -1 < de.indexOf("mac") && -1 < de.indexOf("7.0") && (r.letvcloud_player_conf.posterType = "-2")
        }
        ce.init(r.letvcloud_player_conf, "", !0),
        r.letvcloud_player_conf = void 0,
        r.Util = {
            setRate: function(e) {
                ce.sdk.setDefinition(e)
            },
            getRate: function() {
                return ce.sdk.getDefinition()
            }
        }
    }
} (document, void 0),
!
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define([],
    function() {
        return t(e, document)
    }) : e.plyr = t(e, document)
} ("undefined" != typeof window ? window: this,
function(e, t) {
    "use strict";
    function i() {
        var e, i, n, a = navigator.userAgent,
        o = navigator.appName,
        r = "" + parseFloat(navigator.appVersion),
        s = parseInt(navigator.appVersion, 10),
        l = !1,
        c = !1,
        d = !1,
        u = !1;
        return - 1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (l = !0, o = "IE", r = "11") : -1 !== (i = a.indexOf("MSIE")) ? (l = !0, o = "IE", r = a.substring(i + 5)) : -1 !== (i = a.indexOf("Chrome")) ? (d = !0, o = "Chrome", r = a.substring(i + 7)) : -1 !== (i = a.indexOf("Safari")) ? (u = !0, o = "Safari", r = a.substring(i + 7), -1 !== (i = a.indexOf("Version")) && (r = a.substring(i + 8))) : -1 !== (i = a.indexOf("Firefox")) ? (c = !0, o = "Firefox", r = a.substring(i + 8)) : (e = a.lastIndexOf(" ") + 1) < (i = a.lastIndexOf("/")) && (o = a.substring(e, i), r = a.substring(i + 1), o.toLowerCase() === o.toUpperCase() && (o = navigator.appName)),
        -1 !== (n = r.indexOf(";")) && (r = r.substring(0, n)),
        -1 !== (n = r.indexOf(" ")) && (r = r.substring(0, n)),
        s = parseInt("" + r, 10),
        isNaN(s) && (r = "" + parseFloat(navigator.appVersion), s = parseInt(navigator.appVersion, 10)),
        {
            name: o,
            version: s,
            isIE: l,
            isFirefox: c,
            isChrome: d,
            isSafari: u,
            isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
            isTouch: "ontouchstart" in t.documentElement
        }
    }
    function n(e, t) {
        var i = e.media;
        if ("video" === e.type) switch (t) {
        case "video/webm":
            return ! (!i.canPlayType || !i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
        case "video/mp4":
            return ! (!i.canPlayType || !i.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
        case "video/ogg":
            return ! (!i.canPlayType || !i.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
        } else if ("audio" === e.type) switch (t) {
        case "audio/mpeg":
            return ! (!i.canPlayType || !i.canPlayType("audio/mpeg;").replace(/no/, ""));
        case "audio/ogg":
            return ! (!i.canPlayType || !i.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
        case "audio/wav":
            return ! (!i.canPlayType || !i.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
        }
        return ! 1
    }
    function a(e) {
        if (!t.querySelectorAll('script[src="' + e + '"]').length) {
            var i = t.createElement("script");
            i.src = e;
            var n = t.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(i, n)
        }
    }
    function o(e, t) {
        return Array.prototype.indexOf && -1 !== e.indexOf(t)
    }
    function r(e, t, i) {
        return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), i)
    }
    function s(e, t) {
        e.length || (e = [e]);
        for (var i = e.length - 1; i >= 0; i--) {
            var n = i > 0 ? t.cloneNode(!0) : t,
            a = e[i],
            o = a.parentNode,
            r = a.nextSibling;
            return n.appendChild(a),
            r ? o.insertBefore(n, r) : o.appendChild(n),
            n
        }
    }
    function l(e) {
        e && e.parentNode.removeChild(e)
    }
    function c(e, t) {
        e.insertBefore(t, e.firstChild)
    }
    function d(e, t) {
        for (var i in t) e.setAttribute(i, L["boolean"](t[i]) && t[i] ? "": t[i])
    }
    function u(e, i, n) {
        var a = t.createElement(e);
        d(a, n),
        c(i, a)
    }
    function p(e) {
        return e.replace(".", "")
    }
    function f(e, t, i) {
        if (e) if (e.classList) e.classList[i ? "add": "remove"](t);
        else {
            var n = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
            e.className = n + (i ? " " + t: "")
        }
    }
    function h(e, t) {
        return !! e && (e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className))
    }
    function m(e, i) {
        var n = Element.prototype,
        a = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector ||
        function(e) {
            return - 1 !== [].indexOf.call(t.querySelectorAll(e), this)
        };
        return a.call(e, i)
    }
    function g(e, t, i, n, a) {
        y(e, t,
        function(t) {
            i && i.apply(e, [t]),
            n.apply(e, [t])
        },
        a)
    }
    function v(e, t, i, n, a) {
        var o = t.split(" ");
        if (L["boolean"](a) || (a = !1), e instanceof NodeList) for (var r = 0; r < e.length; r++) e[r] instanceof Node && v(e[r], arguments[1], arguments[2], arguments[3]);
        else for (var s = 0; s < o.length; s++) e[n ? "addEventListener": "removeEventListener"](o[s], i, a)
    }
    function y(e, t, i, n) {
        e && v(e, t, i, !0, n)
    }
    function w(e, t, i, n) {
        if (e && t) {
            L["boolean"](i) || (i = !1);
            var a = new CustomEvent(t, {
                bubbles: i,
                detail: n
            });
            e.dispatchEvent(a)
        }
    }
    function b(e, t) {
        return e ? (t = L["boolean"](t) ? t: !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t) : void 0
    }
    function x(e, t) {
        return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
    }
    function k() {
        var e = arguments;
        if (e.length) {
            if (1 === e.length) return e[0];
            for (var t = Array.prototype.shift.call(e), i = e.length, n = 0; i > n; n++) {
                var a = e[n];
                for (var o in a) a[o] && a[o].constructor && a[o].constructor === Object ? (t[o] = t[o] || {},
                k(t[o], a[o])) : t[o] = a[o]
            }
            return t
        }
    }
    function T() {
        var e = {
            supportsFullScreen: !1,
            isFullScreen: function() {
                return ! 1
            },
            requestFullScreen: function() {},
            cancelFullScreen: function() {},
            fullScreenEventName: "",
            element: null,
            prefix: ""
        },
        i = "webkit o moz ms khtml".split(" ");
        if (L.undefined(t.cancelFullScreen)) for (var n = 0,
        a = i.length; a > n; n++) {
            if (e.prefix = i[n], !L.undefined(t[e.prefix + "CancelFullScreen"])) {
                e.supportsFullScreen = !0;
                break
            }
            if (!L.undefined(t.msExitFullscreen) && t.msFullscreenEnabled) {
                e.prefix = "ms",
                e.supportsFullScreen = !0;
                break
            }
        } else e.supportsFullScreen = !0;
        return e.supportsFullScreen && (e.fullScreenEventName = "ms" === e.prefix ? "MSFullscreenChange": e.prefix + "fullscreenchange", e.isFullScreen = function(e) {
            switch (L.undefined(e) && (e = t.body), this.prefix) {
            case "":
                return t.fullscreenElement === e;
            case "moz":
                return t.mozFullScreenElement === e;
            default:
                return t[this.prefix + "FullscreenElement"] === e
            }
        },
        e.requestFullScreen = function(e) {
            return L.undefined(e) && (e = t.body),
            "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" === this.prefix ? "RequestFullscreen": "RequestFullScreen")]()
        },
        e.cancelFullScreen = function() {
            return "" === this.prefix ? t.cancelFullScreen() : t[this.prefix + ("ms" === this.prefix ? "ExitFullscreen": "CancelFullScreen")]()
        },
        e.element = function() {
            return "" === this.prefix ? t.fullscreenElement: t[this.prefix + "FullscreenElement"]
        }),
        e
    }
    function C(v, C) {
        function E(e, t, i, n) {
            w(e, t, i, k({},
            n, {
                plyr: Ve
            }))
        }
        function O(t, i) {
            C.debug && e.console && (i = Array.prototype.slice.call(i), L.string(C.logPrefix) && C.logPrefix.length && i.unshift(C.logPrefix), console[t].apply(console, i))
        }
        function M() {
            return {
                url: C.iconUrl,
                absolute: 0 === C.iconUrl.indexOf("http") || Ue.browser.isIE
            }
        }
        function N() {
            var e = [],
            t = M(),
            i = (t.absolute ? "": t.url) + "#" + C.iconPrefix;
            return o(C.controls, "play-large") && e.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + i + '-play" /></svg>', '<span class="plyr__sr-only">' + C.i18n.play + "</span>", "</button>"),
            e.push('<div class="plyr__controls">'),
            o(C.controls, "restart") && e.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + i + '-restart" /></svg>', '<span class="plyr__sr-only">' + C.i18n.restart + "</span>", "</button>"),
            o(C.controls, "rewind") && e.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + i + '-rewind" /></svg>', '<span class="plyr__sr-only">' + C.i18n.rewind + "</span>", "</button>"),
            o(C.controls, "play") && e.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + i + '-play" /></svg>', '<span class="plyr__sr-only">' + C.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + i + '-pause" /></svg>', '<span class="plyr__sr-only">' + C.i18n.pause + "</span>", "</button>"),
            o(C.controls, "fast-forward") && e.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + i + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + C.i18n.forward + "</span>", "</button>"),
            o(C.controls, "progress") && (e.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + C.i18n.buffered, "</progress>"), C.tooltips.seek && e.push('<span class="plyr__tooltip">00:00</span>'), e.push("</span>")),
            o(C.controls, "current-time") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + C.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"),
            o(C.controls, "duration") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + C.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"),
            o(C.controls, "mute") && e.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + i + '-muted" /></svg>', '<svg><use xlink:href="' + i + '-volume" /></svg>', '<span class="plyr__sr-only">' + C.i18n.toggleMute + "</span>", "</button>"),
            o(C.controls, "volume") && e.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + C.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + C.volumeMin + '" max="' + C.volumeMax + '" value="' + C.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + C.volumeMax + '" value="' + C.volumeMin + '" role="presentation"></progress>', "</span>"),
            o(C.controls, "captions") && e.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + i + '-captions-on" /></svg>', '<svg><use xlink:href="' + i + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + C.i18n.toggleCaptions + "</span>", "</button>"),
            o(C.controls, "fullscreen") && e.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + i + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + i + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + C.i18n.toggleFullscreen + "</span>", "</button>"),
            e.push("</div>"),
            e.join("")
        }
        function j() {
            if (Ue.supported.full && ("audio" !== Ue.type || C.fullscreen.allowAudio) && C.fullscreen.enabled) {
                var e = _.supportsFullScreen;
                e || C.fullscreen.fallback && !B() ? (We((e ? "Native": "Fallback") + " fullscreen enabled"), f(Ue.container, C.classes.fullscreen.enabled, !0)) : We("Fullscreen not supported and fallback disabled"),
                Ue.buttons && Ue.buttons.fullscreen && b(Ue.buttons.fullscreen, !1),
                q()
            }
        }
        function z() {
            if ("video" === Ue.type) {
                U(C.selectors.captions) || Ue.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + p(C.selectors.captions) + '"></div>'),
                Ue.usingTextTracks = !1,
                Ue.media.textTracks && (Ue.usingTextTracks = !0);
                for (var e, t = "",
                i = Ue.media.childNodes,
                n = 0; n < i.length; n++)"track" === i[n].nodeName.toLowerCase() && (e = i[n].kind, "captions" !== e && "subtitles" !== e || (t = i[n].getAttribute("src")));
                if (Ue.captionExists = !0, "" === t ? (Ue.captionExists = !1, We("No caption track found")) : We("Caption track found; URI: " + t), Ue.captionExists) {
                    for (var a = Ue.media.textTracks,
                    o = 0; o < a.length; o++) a[o].mode = "hidden";
                    if (H(Ue), (Ue.browser.isIE && Ue.browser.version >= 10 || Ue.browser.isFirefox && Ue.browser.version >= 31) && (We("Detected browser with known TextTrack issues - using manual fallback"), Ue.usingTextTracks = !1), Ue.usingTextTracks) {
                        We("TextTracks supported");
                        for (var r = 0; r < a.length; r++) {
                            var s = a[r];
                            "captions" !== s.kind && "subtitles" !== s.kind || y(s, "cuechange",
                            function() {
                                this.activeCues[0] && "text" in this.activeCues[0] ? R(this.activeCues[0].getCueAsHTML()) : R()
                            })
                        }
                    } else if (We("TextTracks not supported so rendering captions manually"), Ue.currentCaption = "", Ue.captions = [], "" !== t) {
                        var l = new XMLHttpRequest;
                        l.onreadystatechange = function() {
                            if (4 === l.readyState) if (200 === l.status) {
                                var e, t = [],
                                i = l.responseText;
                                t = i.split("\n\n");
                                for (var n = 0; n < t.length; n++) {
                                    e = t[n],
                                    Ue.captions[n] = [];
                                    var a = e.split("\n"),
                                    o = 0; - 1 === a[o].indexOf(":") && (o = 1),
                                    Ue.captions[n] = [a[o], a[o + 1]]
                                }
                                Ue.captions.shift(),
                                We("Successfully loaded the caption file via AJAX")
                            } else Ge(C.logPrefix + "There was a problem loading the caption file via AJAX")
                        },
                        l.open("get", t, !0),
                        l.send()
                    }
                } else f(Ue.container, C.classes.captions.enabled)
            }
        }
        function R(e) {
            var i = U(C.selectors.captions),
            n = t.createElement("span");
            i.innerHTML = "",
            L.undefined(e) && (e = ""),
            L.string(e) ? n.innerHTML = e.trim() : n.appendChild(e),
            i.appendChild(n),
            i.offsetHeight
        }
        function F(e) {
            function t(e, t) {
                var i = [];
                i = e.split(" --> ");
                for (var n = 0; n < i.length; n++) i[n] = i[n].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                return a(i[t])
            }
            function i(e) {
                return t(e, 0)
            }
            function n(e) {
                return t(e, 1)
            }
            function a(e) {
                if (null === e || void 0 === e) return 0;
                var t, i = [],
                n = [];
                return i = e.split(","),
                n = i[0].split(":"),
                t = Math.floor(60 * n[0] * 60) + Math.floor(60 * n[1]) + Math.floor(n[2])
            }
            if (!Ue.usingTextTracks && "video" === Ue.type && Ue.supported.full && (Ue.subcount = 0, e = L.number(e) ? e: Ue.media.currentTime, Ue.captions[Ue.subcount])) {
                for (; n(Ue.captions[Ue.subcount][0]) < e.toFixed(1);) if (Ue.subcount++, Ue.subcount > Ue.captions.length - 1) {
                    Ue.subcount = Ue.captions.length - 1;
                    break
                }
                Ue.media.currentTime.toFixed(1) >= i(Ue.captions[Ue.subcount][0]) && Ue.media.currentTime.toFixed(1) <= n(Ue.captions[Ue.subcount][0]) ? (Ue.currentCaption = Ue.captions[Ue.subcount][1], R(Ue.currentCaption)) : R()
            }
        }
        function H() {
            if (Ue.buttons.captions) {
                f(Ue.container, C.classes.captions.enabled, !0);
                var e = Ue.storage.captionsEnabled;
                L["boolean"](e) || (e = C.captions.defaultActive),
                e && (f(Ue.container, C.classes.captions.active, !0), b(Ue.buttons.captions, !0))
            }
        }
        function V(e) {
            return Ue.container.querySelectorAll(e)
        }
        function U(e) {
            return V(e)[0]
        }
        function B() {
            try {
                return e.self !== e.top
            } catch(t) {
                return ! 0
            }
        }
        function q() {
            function e(e) {
                9 === e.which && Ue.isFullscreen && (e.target !== n || e.shiftKey ? e.target === i && e.shiftKey && (e.preventDefault(), n.focus()) : (e.preventDefault(), i.focus()))
            }
            var t = V("input:not([disabled]), button:not([disabled])"),
            i = t[0],
            n = t[t.length - 1];
            y(Ue.container, "keydown", e)
        }
        function W(e, t) {
            if (L.string(t)) u(e, Ue.media, {
                src: t
            });
            else if (t.constructor === Array) for (var i = t.length - 1; i >= 0; i--) u(e, Ue.media, t[i])
        }
        function G() {
            if (C.loadSprite) {
                var e = M();
                e.absolute ? (We("AJAX loading absolute SVG sprite" + (Ue.browser.isIE ? " (due to IE)": "")), $(e.url, "sprite-plyr")) : We("Sprite will be used as external resource directly")
            }
            var i = C.html;
            We("Injecting custom controls"),
            i || (i = N()),
            i = r(i, "{seektime}", C.seekTime),
            i = r(i, "{id}", Math.floor(1e4 * Math.random()));
            var n;
            if (L.string(C.selectors.controls.container) && (n = t.querySelector(C.selectors.controls.container)), L.htmlElement(n) || (n = Ue.container), n.insertAdjacentHTML("beforeend", i), C.tooltips.controls) for (var a = V([C.selectors.controls.wrapper, " ", C.selectors.labels, " .", C.classes.hidden].join("")), o = a.length - 1; o >= 0; o--) {
                var s = a[o];
                f(s, C.classes.hidden, !1),
                f(s, C.classes.tooltip, !0)
            }
        }
        function Y() {
            try {
                return Ue.controls = U(C.selectors.controls.wrapper),
                Ue.buttons = {},
                Ue.buttons.seek = U(C.selectors.buttons.seek),
                Ue.buttons.play = V(C.selectors.buttons.play),
                Ue.buttons.pause = U(C.selectors.buttons.pause),
                Ue.buttons.restart = U(C.selectors.buttons.restart),
                Ue.buttons.rewind = U(C.selectors.buttons.rewind),
                Ue.buttons.forward = U(C.selectors.buttons.forward),
                Ue.buttons.fullscreen = U(C.selectors.buttons.fullscreen),
                Ue.buttons.mute = U(C.selectors.buttons.mute),
                Ue.buttons.captions = U(C.selectors.buttons.captions),
                Ue.progress = {},
                Ue.progress.container = U(C.selectors.progress.container),
                Ue.progress.buffer = {},
                Ue.progress.buffer.bar = U(C.selectors.progress.buffer),
                Ue.progress.buffer.text = Ue.progress.buffer.bar && Ue.progress.buffer.bar.getElementsByTagName("span")[0],
                Ue.progress.played = U(C.selectors.progress.played),
                Ue.progress.tooltip = Ue.progress.container && Ue.progress.container.querySelector("." + C.classes.tooltip),
                Ue.volume = {},
                Ue.volume.input = U(C.selectors.volume.input),
                Ue.volume.display = U(C.selectors.volume.display),
                Ue.duration = U(C.selectors.duration),
                Ue.currentTime = U(C.selectors.currentTime),
                Ue.seekTime = V(C.selectors.seekTime),
                !0
            } catch(e) {
                return Ge("It looks like there is a problem with your controls HTML"),
                K(!0),
                !1
            }
        }
        function X() {
            f(Ue.container, C.selectors.container.replace(".", ""), Ue.supported.full)
        }
        function K(e) {
            e && o(C.types.html5, Ue.type) ? Ue.media.setAttribute("controls", "") : Ue.media.removeAttribute("controls")
        }
        function J(e) {
            var t = C.i18n.play;
            if (L.string(C.title) && C.title.length && (t += ", " + C.title, Ue.container.setAttribute("aria-label", C.title)), Ue.supported.full && Ue.buttons.play) for (var i = Ue.buttons.play.length - 1; i >= 0; i--) Ue.buttons.play[i].setAttribute("aria-label", t);
            L.htmlElement(e) && e.setAttribute("title", C.i18n.frameTitle.replace("{title}", C.title))
        }
        function Q() {
            var t = null;
            Ue.storage = {},
            D.supported && C.storage.enabled && (e.localStorage.removeItem("plyr-volume"), t = e.localStorage.getItem(C.storage.key), t && (/^\d+(\.\d+)?$/.test(t) ? Z({
                volume: parseFloat(t)
            }) : Ue.storage = JSON.parse(t)))
        }
        function Z(t) {
            D.supported && C.storage.enabled && (k(Ue.storage, t), e.localStorage.setItem(C.storage.key, JSON.stringify(Ue.storage)))
        }
        function ee() {
            if (!Ue.media) return void Ge("No media element found!");
            if (Ue.supported.full && (f(Ue.container, C.classes.type.replace("{0}", Ue.type), !0), o(C.types.embed, Ue.type) && f(Ue.container, C.classes.type.replace("{0}", "video"), !0), f(Ue.container, C.classes.stopped, C.autoplay), f(Ue.ontainer, C.classes.isIos, Ue.browser.isIos), f(Ue.container, C.classes.isTouch, Ue.browser.isTouch), "video" === Ue.type)) {
                var e = t.createElement("div");
                e.setAttribute("class", C.classes.videoWrapper),
                s(Ue.media, e),
                Ue.videoContainer = e
            }
            o(C.types.embed, Ue.type) && te()
        }
        function te() {
            for (var i = t.createElement("div"), n = Ue.embedId, o = Ue.type + "-" + Math.floor(1e4 * Math.random()), r = V('[id^="' + Ue.type + '-"]'), s = r.length - 1; s >= 0; s--) l(r[s]);
            if (f(Ue.media, C.classes.videoWrapper, !0), f(Ue.media, C.classes.embedWrapper, !0), "youtube" === Ue.type) Ue.media.appendChild(i),
            i.setAttribute("id", o),
            L.object(e.YT) ? ne(n, i) : (a(C.urls.youtube.api), e.onYouTubeReadyCallbacks = e.onYouTubeReadyCallbacks || [], e.onYouTubeReadyCallbacks.push(function() {
                ne(n, i)
            }), e.onYouTubeIframeAPIReady = function() {
                e.onYouTubeReadyCallbacks.forEach(function(e) {
                    e()
                })
            });
            else if ("vimeo" === Ue.type) if (Ue.supported.full ? Ue.media.appendChild(i) : i = Ue.media, i.setAttribute("id", o), L.object(e.Vimeo)) ae(n, i);
            else {
                a(C.urls.vimeo.api);
                var c = e.setInterval(function() {
                    L.object(e.Vimeo) && (e.clearInterval(c), ae(n, i))
                },
                50)
            } else if ("soundcloud" === Ue.type) {
                var u = t.createElement("iframe");
                u.loaded = !1,
                y(u, "load",
                function() {
                    u.loaded = !0
                }),
                d(u, {
                    src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + n,
                    id: o
                }),
                i.appendChild(u),
                Ue.media.appendChild(i),
                e.SC || a(C.urls.soundcloud.api);
                var p = e.setInterval(function() {
                    e.SC && u.loaded && (e.clearInterval(p), oe.call(u))
                },
                50)
            }
        }
        function ie() {
            Ue.supported.full && (Fe(), He()),
            J(U("iframe"))
        }
        function ne(t, i) {
            Ue.embed = new e.YT.Player(i.id, {
                videoId: t,
                playerVars: {
                    autoplay: C.autoplay ? 1 : 0,
                    controls: Ue.supported.full ? 0 : 1,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    cc_load_policy: C.captions.defaultActive ? 1 : 0,
                    cc_lang_pref: "en",
                    wmode: "transparent",
                    modestbranding: 1,
                    disablekb: 1,
                    origin: "*"
                },
                events: {
                    onError: function(e) {
                        E(Ue.container, "error", !0, {
                            code: e.data,
                            embed: e.target
                        })
                    },
                    onReady: function(t) {
                        var i = t.target;
                        Ue.media.play = function() {
                            i.playVideo(),
                            Ue.media.paused = !1
                        },
                        Ue.media.pause = function() {
                            i.pauseVideo(),
                            Ue.media.paused = !0
                        },
                        Ue.media.stop = function() {
                            i.stopVideo(),
                            Ue.media.paused = !0
                        },
                        Ue.media.duration = i.getDuration(),
                        Ue.media.paused = !0,
                        Ue.media.currentTime = 0,
                        Ue.media.muted = i.isMuted(),
                        C.title = i.getVideoData().title,
                        Ue.supported.full && Ue.media.querySelector("iframe").setAttribute("tabindex", "-1"),
                        ie(),
                        E(Ue.media, "timeupdate"),
                        E(Ue.media, "durationchange"),
                        e.clearInterval(Be.buffering),
                        Be.buffering = e.setInterval(function() {
                            Ue.media.buffered = i.getVideoLoadedFraction(),
                            (null === Ue.media.lastBuffered || Ue.media.lastBuffered < Ue.media.buffered) && E(Ue.media, "progress"),
                            Ue.media.lastBuffered = Ue.media.buffered,
                            1 === Ue.media.buffered && (e.clearInterval(Be.buffering), E(Ue.media, "canplaythrough"))
                        },
                        200)
                    },
                    onStateChange: function(t) {
                        var i = t.target;
                        switch (e.clearInterval(Be.playing), t.data) {
                        case 0:
                            Ue.media.paused = !0,
                            E(Ue.media, "ended");
                            break;
                        case 1:
                            Ue.media.paused = !1,
                            Ue.media.seeking = !1,
                            E(Ue.media, "play"),
                            E(Ue.media, "playing"),
                            Be.playing = e.setInterval(function() {
                                Ue.media.currentTime = i.getCurrentTime(),
                                E(Ue.media, "timeupdate")
                            },
                            100);
                            break;
                        case 2:
                            Ue.media.paused = !0,
                            E(Ue.media, "pause")
                        }
                        E(Ue.container, "statechange", !1, {
                            code: t.data
                        })
                    }
                }
            })
        }
        function ae(t, i) {
            Ue.embed = new e.Vimeo.Player(i, {
                id: parseInt(t),
                loop: C.loop,
                autoplay: C.autoplay,
                byline: !1,
                portrait: !1,
                title: !1
            }),
            Ue.media.play = function() {
                Ue.embed.play(),
                Ue.media.paused = !1
            },
            Ue.media.pause = function() {
                Ue.embed.pause(),
                Ue.media.paused = !0
            },
            Ue.media.stop = function() {
                Ue.embed.stop(),
                Ue.media.paused = !0
            },
            Ue.media.paused = !0,
            Ue.media.currentTime = 0,
            ie(),
            Ue.embed.getCurrentTime().then(function(e) {
                Ue.media.currentTime = e,
                E(Ue.media, "timeupdate")
            }),
            Ue.embed.getDuration().then(function(e) {
                Ue.media.duration = e,
                E(Ue.media, "durationchange")
            }),
            Ue.embed.on("loaded",
            function() {
                L.htmlElement(Ue.embed.element) && Ue.supported.full && Ue.embed.element.setAttribute("tabindex", "-1")
            }),
            Ue.embed.on("play",
            function() {
                Ue.media.paused = !1,
                E(Ue.media, "play"),
                E(Ue.media, "playing")
            }),
            Ue.embed.on("pause",
            function() {
                Ue.media.paused = !0,
                E(Ue.media, "pause")
            }),
            Ue.embed.on("timeupdate",
            function(e) {
                Ue.media.seeking = !1,
                Ue.media.currentTime = e.seconds,
                E(Ue.media, "timeupdate")
            }),
            Ue.embed.on("progress",
            function(e) {
                Ue.media.buffered = e.percent,
                E(Ue.media, "progress"),
                1 === parseInt(e.percent) && E(Ue.media, "canplaythrough")
            }),
            Ue.embed.on("ended",
            function() {
                Ue.media.paused = !0,
                E(Ue.media, "ended")
            })
        }
        function oe() {
            Ue.embed = e.SC.Widget(this),
            Ue.embed.bind(e.SC.Widget.Events.READY,
            function() {
                Ue.media.play = function() {
                    Ue.embed.play(),
                    Ue.media.paused = !1
                },
                Ue.media.pause = function() {
                    Ue.embed.pause(),
                    Ue.media.paused = !0
                },
                Ue.media.stop = function() {
                    Ue.embed.seekTo(0),
                    Ue.embed.pause(),
                    Ue.media.paused = !0
                },
                Ue.media.paused = !0,
                Ue.media.currentTime = 0,
                Ue.embed.getDuration(function(e) {
                    Ue.media.duration = e / 1e3,
                    ie()
                }),
                Ue.embed.getPosition(function(e) {
                    Ue.media.currentTime = e,
                    E(Ue.media, "timeupdate")
                }),
                Ue.embed.bind(e.SC.Widget.Events.PLAY,
                function() {
                    Ue.media.paused = !1,
                    E(Ue.media, "play"),
                    E(Ue.media, "playing")
                }),
                Ue.embed.bind(e.SC.Widget.Events.PAUSE,
                function() {
                    Ue.media.paused = !0,
                    E(Ue.media, "pause")
                }),
                Ue.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS,
                function(e) {
                    Ue.media.seeking = !1,
                    Ue.media.currentTime = e.currentPosition / 1e3,
                    E(Ue.media, "timeupdate")
                }),
                Ue.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS,
                function(e) {
                    Ue.media.buffered = e.loadProgress,
                    E(Ue.media, "progress"),
                    1 === parseInt(e.loadProgress) && E(Ue.media, "canplaythrough")
                }),
                Ue.embed.bind(e.SC.Widget.Events.FINISH,
                function() {
                    Ue.media.paused = !0,
                    E(Ue.media, "ended")
                })
            })
        }
        function re() {
            "play" in Ue.media && Ue.media.play()
        }
        function se() {
            "pause" in Ue.media && Ue.media.pause()
        }
        function le(e) {
            return L["boolean"](e) || (e = Ue.media.paused),
            e ? re() : se(),
            e
        }
        function ce(e) {
            L.number(e) || (e = C.seekTime),
            ue(Ue.media.currentTime - e)
        }
        function de(e) {
            L.number(e) || (e = C.seekTime),
            ue(Ue.media.currentTime + e)
        }
        function ue(e) {
            var t = 0,
            i = Ue.media.paused,
            n = pe();
            L.number(e) ? t = e: L.object(e) && o(["input", "change"], e.type) && (t = e.target.value / e.target.max * n),
            0 > t ? t = 0 : t > n && (t = n),
            _e(t);
            try {
                Ue.media.currentTime = t.toFixed(4)
            } catch(a) {}
            if (o(C.types.embed, Ue.type)) {
                switch (Ue.type) {
                case "youtube":
                    Ue.embed.seekTo(t);
                    break;
                case "vimeo":
                    Ue.embed.setCurrentTime(t.toFixed(0));
                    break;
                case "soundcloud":
                    Ue.embed.seekTo(1e3 * t)
                }
                i && se(),
                E(Ue.media, "timeupdate"),
                Ue.media.seeking = !0
            }
            We("Seeking to " + Ue.media.currentTime + " seconds"),
            F(t)
        }
        function pe() {
            var e = parseInt(C.duration),
            t = 0;
            return null === Ue.media.duration || isNaN(Ue.media.duration) || (t = Ue.media.duration),
            isNaN(e) ? t: e
        }
        function fe() {
            f(Ue.container, C.classes.playing, !Ue.media.paused),
            f(Ue.container, C.classes.stopped, Ue.media.paused),
            Ie(Ue.media.paused)
        }
        function he() {
            A = {
                x: e.pageXOffset || 0,
                y: e.pageYOffset || 0
            }
        }
        function me() {
            e.scrollTo(A.x, A.y)
        }
        function ge(e) {
            var i = _.supportsFullScreen;
            if (i) {
                if (!e || e.type !== _.fullScreenEventName) return _.isFullScreen(Ue.container) ? _.cancelFullScreen() : (he(), _.requestFullScreen(Ue.container)),
                void(Ue.isFullscreen = _.isFullScreen(Ue.container));
                Ue.isFullscreen = _.isFullScreen(Ue.container)
            } else Ue.isFullscreen = !Ue.isFullscreen,
            t.body.style.overflow = Ue.isFullscreen ? "hidden": "";
            f(Ue.container, C.classes.fullscreen.active, Ue.isFullscreen),
            q(Ue.isFullscreen),
            Ue.buttons && Ue.buttons.fullscreen && b(Ue.buttons.fullscreen, Ue.isFullscreen),
            E(Ue.container, Ue.isFullscreen ? "enterfullscreen": "exitfullscreen", !0),
            !Ue.isFullscreen && i && me()
        }
        function ve(e) {
            if (L["boolean"](e) || (e = !Ue.media.muted), b(Ue.buttons.mute, e), Ue.media.muted = e, 0 === Ue.media.volume && ye(C.volume), o(C.types.embed, Ue.type)) {
                switch (Ue.type) {
                case "youtube":
                    Ue.embed[Ue.media.muted ? "mute": "unMute"]();
                    break;
                case "vimeo":
                case "soundcloud":
                    Ue.embed.setVolume(Ue.media.muted ? 0 : parseFloat(C.volume / C.volumeMax))
                }
                E(Ue.media, "volumechange")
            }
        }
        function ye(e) {
            var t = C.volumeMax,
            i = C.volumeMin;
            if (L.undefined(e) && (e = Ue.storage.volume), (null === e || isNaN(e)) && (e = C.volume), e > t && (e = t), i > e && (e = i), Ue.media.volume = parseFloat(e / t), Ue.volume.display && (Ue.volume.display.value = e), o(C.types.embed, Ue.type)) {
                switch (Ue.type) {
                case "youtube":
                    Ue.embed.setVolume(100 * Ue.media.volume);
                    break;
                case "vimeo":
                case "soundcloud":
                    Ue.embed.setVolume(Ue.media.volume)
                }
                E(Ue.media, "volumechange")
            }
            0 === e ? Ue.media.muted = !0 : Ue.media.muted && e > 0 && ve()
        }
        function we(e) {
            var t = Ue.media.muted ? 0 : Ue.media.volume * C.volumeMax;
            L.number(e) || (e = C.volumeStep),
            ye(t + e)
        }
        function be(e) {
            var t = Ue.media.muted ? 0 : Ue.media.volume * C.volumeMax;
            L.number(e) || (e = C.volumeStep),
            ye(t - e)
        }
        function xe() {
            var e = Ue.media.muted ? 0 : Ue.media.volume * C.volumeMax;
            Ue.supported.full && (Ue.volume.input && (Ue.volume.input.value = e), Ue.volume.display && (Ue.volume.display.value = e)),
            Z({
                volume: e
            }),
            f(Ue.container, C.classes.muted, 0 === e),
            Ue.supported.full && Ue.buttons.mute && b(Ue.buttons.mute, 0 === e)
        }
        function ke(e) {
            Ue.supported.full && Ue.buttons.captions && (L["boolean"](e) || (e = -1 === Ue.container.className.indexOf(C.classes.captions.active)), Ue.captionsEnabled = e, b(Ue.buttons.captions, Ue.captionsEnabled), f(Ue.container, C.classes.captions.active, Ue.captionsEnabled), E(Ue.container, Ue.captionsEnabled ? "captionsenabled": "captionsdisabled", !0), Z({
                captionsEnabled: Ue.captionsEnabled
            }))
        }
        function Te(e) {
            var t = "waiting" === e.type;
            clearTimeout(Be.loading),
            Be.loading = setTimeout(function() {
                f(Ue.container, C.classes.loading, t),
                Ie(t)
            },
            t ? 250 : 0)
        }
        function Ce(e) {
            if (Ue.supported.full) {
                var t = Ue.progress.played,
                i = 0,
                n = pe();
                if (e) switch (e.type) {
                case "timeupdate":
                case "seeking":
                    if (Ue.controls.pressed) return;
                    i = x(Ue.media.currentTime, n),
                    "timeupdate" === e.type && Ue.buttons.seek && (Ue.buttons.seek.value = i);
                    break;
                case "playing":
                case "progress":
                    t = Ue.progress.buffer,
                    i = function() {
                        var e = Ue.media.buffered;
                        return e && e.length ? x(e.end(0), n) : L.number(e) ? 100 * e: 0
                    } ()
                }
                $e(t, i)
            }
        }
        function $e(e, t) {
            if (Ue.supported.full) {
                if (L.undefined(t) && (t = 0), L.undefined(e)) {
                    if (!Ue.progress || !Ue.progress.buffer) return;
                    e = Ue.progress.buffer
                }
                L.htmlElement(e) ? e.value = t: e && (e.bar && (e.bar.value = t), e.text && (e.text.innerHTML = t))
            }
        }
        function Se(e, t) {
            if (t) {
                isNaN(e) && (e = 0),
                Ue.secs = parseInt(e % 60),
                Ue.mins = parseInt(e / 60 % 60),
                Ue.hours = parseInt(e / 60 / 60 % 60);
                var i = parseInt(pe() / 60 / 60 % 60) > 0;
                Ue.secs = ("0" + Ue.secs).slice( - 2),
                Ue.mins = ("0" + Ue.mins).slice( - 2),
                t.innerHTML = (i ? Ue.hours + ":": "") + Ue.mins + ":" + Ue.secs
            }
        }
        function Ee() {
            if (Ue.supported.full) {
                var e = pe() || 0; ! Ue.duration && C.displayDuration && Ue.media.paused && Se(e, Ue.currentTime),
                Ue.duration && Se(e, Ue.duration),
                Ae()
            }
        }
        function Pe(e) {
            Se(Ue.media.currentTime, Ue.currentTime),
            e && "timeupdate" === e.type && Ue.media.seeking || Ce(e)
        }
        function _e(e) {
            L.number(e) || (e = 0);
            var t = pe(),
            i = x(e, t);
            Ue.progress && Ue.progress.played && (Ue.progress.played.value = i),
            Ue.buttons && Ue.buttons.seek && (Ue.buttons.seek.value = i)
        }
        function Ae(e) {
            var t = pe();
            if (C.tooltips.seek && Ue.progress.container && 0 !== t) {
                var i = Ue.progress.container.getBoundingClientRect(),
                n = 0,
                a = C.classes.tooltip + "--visible";
                if (e) n = 100 / i.width * (e.pageX - i.left);
                else {
                    if (!h(Ue.progress.tooltip, a)) return;
                    n = Ue.progress.tooltip.style.left.replace("%", "")
                }
                0 > n ? n = 0 : n > 100 && (n = 100),
                Se(t / 100 * n, Ue.progress.tooltip),
                Ue.progress.tooltip.style.left = n + "%",
                e && o(["mouseenter", "mouseleave"], e.type) && f(Ue.progress.tooltip, a, "mouseenter" === e.type)
            }
        }
        function Ie(t) {
            if (C.hideControls && "audio" !== Ue.type) {
                var i = 0,
                n = !1,
                a = t,
                r = h(Ue.container, C.classes.loading);
                if (L["boolean"](t) || (t && t.type ? (n = "enterfullscreen" === t.type, a = o(["mousemove", "touchstart", "mouseenter", "focus"], t.type), o(["mousemove", "touchmove"], t.type) && (i = 2e3), "focus" === t.type && (i = 3e3)) : a = h(Ue.container, C.classes.hideControls)), e.clearTimeout(Be.hover), a || Ue.media.paused || r) {
                    if (f(Ue.container, C.classes.hideControls, !1), Ue.media.paused || r) return;
                    Ue.browser.isTouch && (i = 3e3)
                }
                a && Ue.media.paused || (Be.hover = e.setTimeout(function() { (!Ue.controls.pressed && !Ue.controls.hover || n) && f(Ue.container, C.classes.hideControls, !0)
                },
                i))
            }
        }
        function Le(e) {
            if (!L.undefined(e)) return void De(e);
            var t;
            switch (Ue.type) {
            case "youtube":
                t = Ue.embed.getVideoUrl();
                break;
            case "vimeo":
                Ue.embed.getVideoUrl.then(function(e) {
                    t = e
                });
                break;
            case "soundcloud":
                Ue.embed.getCurrentSound(function(e) {
                    t = e.permalink_url
                });
                break;
            default:
                t = Ue.media.currentSrc
            }
            return t || ""
        }
        function De(e) {
            function i() {
                if (Ue.embed = null, l(Ue.media), "video" === Ue.type && Ue.videoContainer && l(Ue.videoContainer), Ue.container && Ue.container.removeAttribute("class"), "type" in e && (Ue.type = e.type, "video" === Ue.type)) {
                    var i = e.sources[0];
                    "type" in i && o(C.types.embed, i.type) && (Ue.type = i.type)
                }
                switch (Ue.supported = S(Ue.type), Ue.type) {
                case "video":
                    Ue.media = t.createElement("video");
                    break;
                case "audio":
                    Ue.media = t.createElement("audio");
                    break;
                case "youtube":
                case "vimeo":
                case "soundcloud":
                    Ue.media = t.createElement("div"),
                    Ue.embedId = e.sources[0].src
                }
                c(Ue.container, Ue.media),
                L["boolean"](e.autoplay) && (C.autoplay = e.autoplay),
                o(C.types.html5, Ue.type) && (C.crossorigin && Ue.media.setAttribute("crossorigin", ""), C.autoplay && Ue.media.setAttribute("autoplay", ""), "poster" in e && Ue.media.setAttribute("poster", e.poster), C.loop && Ue.media.setAttribute("loop", "")),
                f(Ue.container, C.classes.fullscreen.active, Ue.isFullscreen),
                f(Ue.container, C.classes.captions.active, Ue.captionsEnabled),
                X(),
                o(C.types.html5, Ue.type) && W("source", e.sources),
                ee(),
                o(C.types.html5, Ue.type) && ("tracks" in e && W("track", e.tracks), Ue.media.load()),
                (o(C.types.html5, Ue.type) || o(C.types.embed, Ue.type) && !Ue.supported.full) && (Fe(), He()),
                C.title = e.title,
                J()
            }
            return L.object(e) && "sources" in e && e.sources.length ? (f(Ue.container, C.classes.ready, !1), se(), _e(), $e(), je(), void ze(i, !1)) : void Ge("Invalid source format")
        }
        function Oe(e) {
            "video" === Ue.type && Ue.media.setAttribute("poster", e)
        }
        function Me() {
            function i() {
                var e = le(),
                t = Ue.buttons[e ? "play": "pause"],
                i = Ue.buttons[e ? "pause": "play"];
                if (i = i && i.length > 1 ? i[i.length - 1] : i[0]) {
                    var n = h(t, C.classes.tabFocus);
                    setTimeout(function() {
                        i.focus(),
                        n && (f(t, C.classes.tabFocus, !1), f(i, C.classes.tabFocus, !0))
                    },
                    100)
                }
            }
            function n() {
                var e = t.activeElement;
                return e = e && e !== t.body ? t.querySelector(":focus") : null
            }
            function a(e) {
                return e.keyCode ? e.keyCode: e.which
            }
            function r(e) {
                for (var t in Ue.buttons) {
                    var i = Ue.buttons[t];
                    if (L.nodeList(i)) for (var n = 0; n < i.length; n++) f(i[n], C.classes.tabFocus, i[n] === e);
                    else f(i, C.classes.tabFocus, i === e)
                }
            }
            function s(e) {
                function t() {
                    var e = Ue.media.duration;
                    L.number(e) && ue(e / 10 * (i - 48))
                }
                var i = a(e),
                n = "keydown" === e.type,
                r = n && i === c;
                if (L.number(i)) if (n) {
                    var s = [48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67];
                    switch (o(s, i) && (e.preventDefault(), e.stopPropagation()), i) {
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        r || t();
                        break;
                    case 32:
                    case 75:
                        r || le();
                        break;
                    case 38:
                        we();
                        break;
                    case 40:
                        be();
                        break;
                    case 77:
                        r || ve();
                        break;
                    case 39:
                        de();
                        break;
                    case 37:
                        ce();
                        break;
                    case 70:
                        ge();
                        break;
                    case 67:
                        r || ke()
                    } ! _.supportsFullScreen && Ue.isFullscreen && 27 === i && ge(),
                    c = i
                } else c = null
            }
            var l = Ue.browser.isIE ? "change": "input";
            if (C.keyboardShorcuts.focused) {
                var c = null;
                C.keyboardShorcuts.global && y(e, "keydown keyup",
                function(e) {
                    var t = a(e),
                    i = n(),
                    r = [48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67],
                    l = P().length;
                    1 !== l || !o(r, t) || L.htmlElement(i) && m(i, C.selectors.editable) || s(e)
                }),
                y(Ue.container, "keydown keyup", s)
            }
            y(e, "keyup",
            function(e) {
                var t = a(e),
                i = n();
                9 === t && r(i)
            }),
            y(t.body, "click",
            function() {
                f(U("." + C.classes.tabFocus), C.classes.tabFocus, !1);
            });
            for (var d in Ue.buttons) {
                var u = Ue.buttons[d];
                y(u, "blur",
                function() {
                    f(u, "tab-focus", !1)
                })
            }
            g(Ue.buttons.play, "click", C.listeners.play, i),
            g(Ue.buttons.pause, "click", C.listeners.pause, i),
            g(Ue.buttons.restart, "click", C.listeners.restart, ue),
            g(Ue.buttons.rewind, "click", C.listeners.rewind, ce),
            g(Ue.buttons.forward, "click", C.listeners.forward, de),
            g(Ue.buttons.seek, l, C.listeners.seek, ue),
            g(Ue.volume.input, l, C.listeners.volume,
            function() {
                ye(Ue.volume.input.value)
            }),
            g(Ue.buttons.mute, "click", C.listeners.mute, ve),
            g(Ue.buttons.fullscreen, "click", C.listeners.fullscreen, ge),
            _.supportsFullScreen && y(t, _.fullScreenEventName, ge),
            y(Ue.buttons.captions, "click", ke),
            y(Ue.progress.container, "mouseenter mouseleave mousemove", Ae),
            C.hideControls && (y(Ue.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", Ie), y(Ue.controls, "mouseenter mouseleave",
            function(e) {
                Ue.controls.hover = "mouseenter" === e.type
            }), y(Ue.controls, "mousedown mouseup touchstart touchend touchcancel",
            function(e) {
                Ue.controls.pressed = o(["mousedown", "touchstart"], e.type)
            }), y(Ue.controls, "focus blur", Ie, !0)),
            y(Ue.volume.input, "wheel",
            function(e) {
                e.preventDefault();
                var t = e.webkitDirectionInvertedFromDevice,
                i = C.volumeStep / 5; (e.deltaY < 0 || e.deltaX > 0) && (t ? be(i) : we(i)),
                (e.deltaY > 0 || e.deltaX < 0) && (t ? we(i) : be(i))
            })
        }
        function Ne() {
            if (y(Ue.media, "timeupdate seeking", Pe), y(Ue.media, "timeupdate", F), y(Ue.media, "durationchange loadedmetadata", Ee), y(Ue.media, "ended",
            function() {
                "video" === Ue.type && C.showPosterOnEnd && ("video" === Ue.type && R(), ue(), Ue.media.load())
            }), y(Ue.media, "progress playing", Ce), y(Ue.media, "volumechange", xe), y(Ue.media, "play pause ended", fe), y(Ue.media, "waiting canplay seeked", Te), C.clickToPlay && "audio" !== Ue.type) {
                var e = U("." + C.classes.videoWrapper);
                if (!e) return;
                e.style.cursor = "pointer",
                y(e, "click",
                function() {
                    C.hideControls && Ue.browser.isTouch && !Ue.media.paused || (Ue.media.paused ? re() : Ue.media.ended ? (ue(), re()) : se())
                })
            }
            C.disableContextMenu && y(Ue.media, "contextmenu",
            function(e) {
                e.preventDefault()
            }),
            y(Ue.media, C.events.concat(["keyup", "keydown"]).join(" "),
            function(e) {
                E(Ue.container, e.type, !0)
            })
        }
        function je() {
            if (o(C.types.html5, Ue.type)) {
                for (var e = Ue.media.querySelectorAll("source"), t = 0; t < e.length; t++) l(e[t]);
                Ue.media.setAttribute("src", "https://cdn.selz.com/plyr/blank.mp4"),
                Ue.media.load(),
                We("Cancelled network requests")
            }
        }
        function ze(t, i) {
            function n() {
                L["boolean"](i) || (i = !0),
                L["function"](t) && t.call(qe),
                i && (Ue.init = !1, Ue.container.parentNode.replaceChild(qe, Ue.container), E(qe, "destroyed", !0))
            }
            if (!Ue.init) return null;
            switch (Ue.type) {
            case "youtube":
                e.clearInterval(Be.buffering),
                e.clearInterval(Be.playing),
                Ue.embed.destroy(),
                n();
                break;
            case "vimeo":
                Ue.embed.unload().then(n),
                e.setTimeout(n, 200);
                break;
            case "video":
            case "audio":
                K(!0),
                n()
            }
        }
        function Re() {
            if (Ue.init) return null;
            if (_ = T(), Ue.browser = i(), L.htmlElement(Ue.media)) {
                Q();
                var e = v.tagName.toLowerCase();
                "div" === e ? (Ue.type = v.getAttribute("data-type"), Ue.embedId = v.getAttribute("data-video-id"), v.removeAttribute("data-type"), v.removeAttribute("data-video-id")) : (Ue.type = e, C.crossorigin = null !== v.getAttribute("crossorigin"), C.autoplay = C.autoplay || null !== v.getAttribute("autoplay"), C.loop = C.loop || null !== v.getAttribute("loop")),
                Ue.supported = S(Ue.type),
                Ue.supported.basic && (Ue.container = s(v, t.createElement("div")), Ue.container.setAttribute("tabindex", 0), X(), We("" + Ue.browser.name + " " + Ue.browser.version), ee(), (o(C.types.html5, Ue.type) || o(C.types.embed, Ue.type) && !Ue.supported.full) && (Fe(), He(), J()), Ue.init = !0)
            }
        }
        function Fe() {
            if (!Ue.supported.full) return Ge("Basic support only", Ue.type),
            l(U(C.selectors.controls.wrapper)),
            l(U(C.selectors.buttons.play)),
            void K(!0);
            var e = !V(C.selectors.controls.wrapper).length;
            e && G(),
            Y() && (e && Me(), Ne(), K(), j(), z(), ye(), xe(), Pe(), fe())
        }
        function He() {
            e.setTimeout(function() {
                E(Ue.media, "ready")
            },
            0),
            f(Ue.media, I.classes.setup, !0),
            f(Ue.container, C.classes.ready, !0),
            Ue.media.plyr = Ve,
            C.autoplay && re()
        }
        var Ve, Ue = this,
        Be = {};
        Ue.media = v;
        var qe = v.cloneNode(!0),
        We = function() {
            O("log", arguments)
        },
        Ge = function() {
            O("warn", arguments)
        };
        return We("Config", C),
        Ve = {
            getOriginal: function() {
                return qe
            },
            getContainer: function() {
                return Ue.container
            },
            getEmbed: function() {
                return Ue.embed
            },
            getMedia: function() {
                return Ue.media
            },
            getType: function() {
                return Ue.type
            },
            getDuration: pe,
            getCurrentTime: function() {
                return Ue.media.currentTime
            },
            getVolume: function() {
                return Ue.media.volume
            },
            isMuted: function() {
                return Ue.media.muted
            },
            isReady: function() {
                return h(Ue.container, C.classes.ready)
            },
            isLoading: function() {
                return h(Ue.container, C.classes.loading)
            },
            on: function(e, t) {
                y(Ue.container, e, t)
            },
            play: re,
            pause: se,
            stop: function() {
                se(),
                ue()
            },
            restart: ue,
            rewind: ce,
            forward: de,
            seek: ue,
            source: Le,
            poster: Oe,
            setVolume: ye,
            togglePlay: le,
            toggleMute: ve,
            toggleCaptions: ke,
            toggleFullscreen: ge,
            toggleControls: Ie,
            isFullscreen: function() {
                return Ue.isFullscreen || !1
            },
            support: function(e) {
                return n(Ue, e)
            },
            destroy: ze
        },
        Re(),
        Ue.init ? Ve: null
    }
    function $(e, i) {
        var n = new XMLHttpRequest;
        if (!L.string(i) || !L.htmlElement(t.querySelector("#" + i))) {
            var a = t.createElement("div");
            a.setAttribute("hidden", ""),
            L.string(i) && a.setAttribute("id", i),
            t.body.insertBefore(a, t.body.childNodes[0]),
            "withCredentials" in n && (n.open("GET", e, !0), n.onload = function() {
                a.innerHTML = n.responseText
            },
            n.send())
        }
    }
    function S(e) {
        var n, a, o = i(),
        r = o.isIE && o.version <= 9,
        s = o.isIos,
        l = /iPhone|iPod/i.test(navigator.userAgent),
        c = !!t.createElement("audio").canPlayType,
        d = !!t.createElement("video").canPlayType;
        switch (e) {
        case "video":
            n = d,
            a = n && !r && !l;
            break;
        case "audio":
            n = c,
            a = n && !r;
            break;
        case "vimeo":
        case "youtube":
        case "soundcloud":
            n = !0,
            a = !r && !s;
            break;
        default:
            n = c && d,
            a = n && !r
        }
        return {
            basic: n,
            full: a
        }
    }
    function E(e, i) {
        function n(e, t) {
            h(t, I.classes.hook) || a.push({
                target: e,
                media: t
            })
        }
        var a = [],
        o = [],
        r = [I.selectors.html5, I.selectors.embed].join(",");
        if (L.string(e) ? e = t.querySelectorAll(e) : L.htmlElement(e) ? e = [e] : L.nodeList(e) || L.array(e) || L.string(e) || (L.undefined(i) && L.object(e) && (i = e), e = t.querySelectorAll(r)), L.nodeList(e) && (e = Array.prototype.slice.call(e)), !S().basic || !e.length) return ! 1;
        for (var s = 0; s < e.length; s++) {
            var l = e[s],
            c = l.querySelectorAll(r);
            if (c.length) for (var d = 0; d < c.length; d++) n(l, c[d]);
            else m(l, r) && n(l, l)
        }
        return a.forEach(function(e) {
            var t = e.target,
            n = e.media,
            a = !1;
            n === t && (a = !0);
            var r = {};
            try {
                r = JSON.parse(t.getAttribute("data-plyr"))
            } catch(s) {}
            var l = k({},
            I, i, r);
            if (!l.enabled) return null;
            var c = new C(n, l);
            if (L.object(c)) {
                if (l.debug) {
                    var d = l.events.concat(["setup", "statechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled"]);
                    y(c.getContainer(), d.join(" "),
                    function(e) {
                        console.log([l.logPrefix, "event:", e.type].join(" "), e.detail.plyr)
                    })
                }
                w(c.getContainer(), "setup", !0, {
                    plyr: c
                }),
                o.push(c)
            }
        }),
        o
    }
    function P(e) {
        if (L.string(e) ? e = t.querySelector(e) : L.undefined(e) && (e = t.body), L.htmlElement(e)) {
            var i = e.querySelectorAll("." + I.classes.setup),
            n = [];
            return Array.prototype.slice.call(i).forEach(function(e) {
                L.object(e.plyr) && n.push(e.plyr)
            }),
            n
        }
        return []
    }
    var _, A = {
        x: 0,
        y: 0
    },
    I = {
        enabled: !0,
        debug: !1,
        autoplay: !1,
        loop: !1,
        seekTime: 10,
        volume: 10,
        volumeMin: 0,
        volumeMax: 10,
        volumeStep: 1,
        duration: null,
        displayDuration: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/2.0.6/plyr.svg",
        clickToPlay: !0,
        hideControls: !0,
        showPosterOnEnd: !1,
        disableContextMenu: !0,
        keyboardShorcuts: {
            focused: !0,
            global: !1
        },
        tooltips: {
            controls: !1,
            seek: !0
        },
        selectors: {
            html5: "video, audio",
            embed: "[data-type]",
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
                container: null,
                wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
                seek: '[data-plyr="seek"]',
                play: '[data-plyr="play"]',
                pause: '[data-plyr="pause"]',
                restart: '[data-plyr="restart"]',
                rewind: '[data-plyr="rewind"]',
                forward: '[data-plyr="fast-forward"]',
                mute: '[data-plyr="mute"]',
                captions: '[data-plyr="captions"]',
                fullscreen: '[data-plyr="fullscreen"]'
            },
            volume: {
                input: '[data-plyr="volume"]',
                display: ".plyr__volume--display"
            },
            progress: {
                container: ".plyr__progress",
                buffer: ".plyr__progress--buffer",
                played: ".plyr__progress--played"
            },
            captions: ".plyr__captions",
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration"
        },
        classes: {
            setup: "plyr--setup",
            ready: "plyr--ready",
            videoWrapper: "plyr__video-wrapper",
            embedWrapper: "plyr__video-embed",
            type: "plyr--{0}",
            stopped: "plyr--stopped",
            playing: "plyr--playing",
            muted: "plyr--muted",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isIos: "plyr--is-ios",
            isTouch: "plyr--is-touch",
            captions: {
                enabled: "plyr--captions-enabled",
                active: "plyr--captions-active"
            },
            fullscreen: {
                enabled: "plyr--fullscreen-enabled",
                active: "plyr--fullscreen-active"
            },
            tabFocus: "tab-focus"
        },
        captions: {
            defaultActive: !1
        },
        fullscreen: {
            enabled: !0,
            fallback: !0,
            allowAudio: !1
        },
        storage: {
            enabled: !0,
            key: "plyr"
        },
        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
        i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime} secs",
            play: "Play",
            pause: "Pause",
            forward: "Forward {seektime} secs",
            played: "played",
            buffered: "buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            toggleMute: "Toggle Mute",
            toggleCaptions: "Toggle Captions",
            toggleFullscreen: "Toggle Fullscreen",
            frameTitle: "Player for {title}"
        },
        types: {
            embed: ["youtube", "vimeo", "soundcloud"],
            html5: ["video", "audio"]
        },
        urls: {
            vimeo: {
                api: "https://player.vimeo.com/api/player.js"
            },
            youtube: {
                api: "https://www.youtube.com/iframe_api"
            },
            soundcloud: {
                api: "https://w.soundcloud.com/player/api.js"
            }
        },
        listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            forward: null,
            mute: null,
            volume: null,
            captions: null,
            fullscreen: null
        },
        events: ["ready", "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "emptied"],
        logPrefix: "[Plyr]"
    },
    L = {
        object: function(e) {
            return null !== e && "object" == typeof e
        },
        array: function(e) {
            return null !== e && "object" == typeof e && e.constructor === Array
        },
        number: function(e) {
            return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" == typeof e && e.constructor === Number)
        },
        string: function(e) {
            return null !== e && ("string" == typeof e || "object" == typeof e && e.constructor === String)
        },
        "boolean": function(e) {
            return null !== e && "boolean" == typeof e
        },
        nodeList: function(e) {
            return null !== e && e instanceof NodeList
        },
        htmlElement: function(e) {
            return null !== e && e instanceof HTMLElement
        },
        "function": function(e) {
            return null !== e && "function" == typeof e
        },
        undefined: function(e) {
            return null !== e && "undefined" == typeof e
        }
    },
    D = {
        supported: function() {
            if (! ("localStorage" in e)) return ! 1;
            try {
                e.localStorage.setItem("___test", "OK");
                var t = e.localStorage.getItem("___test");
                return e.localStorage.removeItem("___test"),
                "OK" === t
            } catch(i) {
                return ! 1
            }
            return ! 1
        } ()
    };
    return {
        setup: E,
        supported: S,
        loadSprite: $,
        get: P
    }
}),
function() {
    function e(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var i = document.createEvent("CustomEvent");
        return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
        i
    }
    "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
} (),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
} (function(e) {
    var t = /\+/g;
    function i(e) {
        return s.raw ? e: encodeURIComponent(e)
    }
    function n(e) {
        return s.raw ? e: decodeURIComponent(e)
    }
    function a(e) {
        return i(s.json ? JSON.stringify(e) : String(e))
    }
    function o(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(t, " ")),
            s.json ? JSON.parse(e) : e
        } catch(i) {}
    }
    function r(t, i) {
        var n = s.raw ? t: o(t);
        return e.isFunction(i) ? i(n) : n
    }
    var s = e.cookie = function(t, o, l) {
        if (void 0 !== o && !e.isFunction(o)) {
            if (l = e.extend({},
            s.defaults, l), "number" == typeof l.expires) {
                var c = l.expires,
                d = l.expires = new Date;
                d.setTime( + d + 864e5 * c)
            }
            return document.cookie = [i(t), "=", a(o), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path: "", l.domain ? "; domain=" + l.domain: "", l.secure ? "; secure": ""].join("")
        }
        for (var u = t ? void 0 : {},
        p = document.cookie ? document.cookie.split("; ") : [], f = 0, h = p.length; f < h; f++) {
            var m = p[f].split("="),
            g = n(m.shift()),
            v = m.join("=");
            if (t && t === g) {
                u = r(v, o);
                break
            }
            t || void 0 === (v = r(v)) || (u[g] = v)
        }
        return u
    };
    s.defaults = {},
    e.removeCookie = function(t, i) {
        return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({},
        i, {
            expires: -1
        })), !e.cookie(t))
    }
}),
$.fn.extend({
    tab: function(e) {
        var t = ($(this), $(this).find(".js-tab")),
        i = $(e).find(".js-tabcont");
        t.on("click", {
            tabconts: i
        },
        function(e) {
            var i = t.index($(this));
            return t.removeClass("selected"),
            $(this).addClass("selected"),
            e.data.tabconts.removeClass("selected"),
            e.data.tabconts.eq(i).addClass("selected"),
            !1
        })
    }
}),
function(e) {
    "use strict";
    if ("undefined" == typeof e) throw new Error("Geetest requires browser environment");
    function t(e) {
        this._obj = e
    }
    t.prototype = {
        _each: function(e) {
            var t = this._obj;
            for (var i in t) t.hasOwnProperty(i) && e(i, t[i]);
            return this
        }
    };
    function i(e) {
        var i = this;
        new t(e)._each(function(e, t) {
            i[e] = t
        })
    }
    i.prototype = {
        api_server: "api.geetest.com",
        protocol: "http://",
        typePath: "/gettype.php",
        fallback_config: {
            static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
            type: "slide",
            slide: "/static/js/geetest.0.0.0.js"
        },
        _extend: function(e) {
            var i = this;
            new t(e)._each(function(e, t) {
                i[e] = t
            })
        }
    };
    var n = function(e) {
        return "number" == typeof e
    },
    a = function(e) {
        return "string" == typeof e
    },
    o = function(e) {
        return "boolean" == typeof e
    },
    r = function(e) {
        return "object" == typeof e && null !== e
    },
    s = function(e) {
        return "function" == typeof e
    },
    l = e.document,
    c = e.Math,
    d = e.location,
    u = l.getElementsByTagName("head")[0],
    p = {},
    f = {},
    h = function() {
        return parseInt(1e4 * c.random()) + (new Date).valueOf()
    },
    m = function(e, t) {
        var i = l.createElement("script");
        i.charset = "UTF-8",
        i.async = !0,
        i.onerror = function() {
            t(!0)
        };
        var n = !1;
        i.onload = i.onreadystatechange = function() {
            n || i.readyState && "loaded" !== i.readyState && "complete" !== i.readyState || (n = !0, setTimeout(function() {
                t(!1)
            },
            0))
        },
        i.src = e,
        u.appendChild(i)
    },
    g = function(e) {
        return e.replace(/^https?:\/\/|\/$/g, "")
    },
    v = function(e) {
        return e = e.replace(/\/+/g, "/"),
        0 !== e.indexOf("/") && (e = "/" + e),
        e
    },
    y = function(e) {
        if (!e) return "";
        var i = "?";
        return new t(e)._each(function(e, t) { (a(t) || n(t) || o(t)) && (i = i + encodeURIComponent(e) + "=" + encodeURIComponent(t) + "&")
        }),
        "?" === i && (i = ""),
        i.replace(/&$/, "")
    },
    w = function(e, t, i, n) {
        t = g(t);
        var a = v(i) + y(n);
        return t && (a = e + t + a),
        a
    },
    b = function(e, t, i, n, a) {
        var o = function(r) {
            var s = w(e, t[r], i, n);
            m(s,
            function(e) {
                e ? r >= t.length - 1 ? a(!0) : o(r + 1) : a(!1)
            })
        };
        o(0)
    },
    x = function(t, i, n, a) {
        if (r(n.getLib)) return n._extend(n.getLib),
        void a(n);
        var o = "geetest_" + h();
        e[o] = function(t) {
            a(t),
            e[o] = void 0;
            try {
                delete e[o]
            } catch(i) {}
        },
        b(n.protocol, t, i, {
            gt: n.gt,
            callback: o
        },
        function(e) {
            e && a(n.fallback_config)
        })
    },
    k = function(e, t) {
        var i = {
            networkError: "网络错误",
            gtTypeError: "gt字段不是字符串类型"
        };
        if ("function" != typeof t.onError) throw new Error(i[e]);
        t.onError(i[e])
    },
    T = function() {
        return e.Geetest || l.getElementById("gt_lib")
    };
    T() && (f.slide = "loaded"),
    e.initGeetest = function(t, n) {
        var a = new i(t);
        t.https ? a.protocol = "https://": t.protocol || (a.protocol = d.protocol + "//"),
        "050cffef4ae57b5d5e529fea9540b0d1" !== t.gt && "3bd38408ae4af923ed36e13819b14d42" !== t.gt || (a.apiserver = "yumchina.geetest.com/", a.api_server = "yumchina.geetest.com"),
        r(t.getType) && a._extend(t.getType),
        x([a.api_server || a.apiserver], a.typePath, a,
        function(t) {
            var i = t.type,
            o = function() {
                a._extend(t),
                n(new e.Geetest(a))
            };
            p[i] = p[i] || [];
            var r = f[i] || "init";
            "init" === r ? (f[i] = "loading", p[i].push(o), b(a.protocol, t.static_servers || t.domains, t[i] || t.path, null,
            function(e) {
                if (e) f[i] = "fail",
                k("networkError", a);
                else {
                    f[i] = "loaded";
                    for (var t = p[i], n = 0, o = t.length; n < o; n += 1) {
                        var r = t[n];
                        s(r) && r()
                    }
                    p[i] = []
                }
            })) : "loaded" === r ? o() : "fail" === r ? k("networkError", a) : "loading" === r && p[i].push(o)
        })
    }
} (window)