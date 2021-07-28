/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                    if (+o[i] < +n[i]) return 1;
                    if (+n[i] < +o[i]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var r = {};

        function u(e) {
            var t = n.console;
            s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
        }

        function t(e, t, r, n) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return u(n), r
                },
                set: function(e) {
                    u(n), r = e
                }
            })
        }

        function o(e, t, r, n) {
            e[t] = function() {
                return u(n), r.apply(this, arguments)
            }
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            r = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
        var i, a, c, d = {},
            l = s.fn.init,
            p = s.find,
            f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (i in s.fn.init = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t)
            }, s.fn.init.prototype = s.fn, s.find = function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && f.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(y, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        u("Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return p.apply(this, r)
            }, p) Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
        o(s.fn, "size", function() {
            return this.length
        }, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(m, "")
        }, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }), o(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "jQuery.type is deprecated"), o(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function() {
            var e = a.apply(this, arguments);
            return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
        }, e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
        }));
        var g = s.fn.removeAttr,
            h = s.fn.toggleClass,
            v = /\S+/g;

        function j(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        s.fn.removeAttr = function(e) {
            var r = this;
            return s.each(e.match(v), function(e, t) {
                s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), g.apply(this, arguments)
        };
        var Q, b = !(s.fn.toggleClass = function(t) {
                return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                    var e = this.getAttribute && this.getAttribute("class") || "";
                    e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
                }))
            }),
            w = /^[a-z]/,
            x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return b = !0, e = r.apply(this, arguments), b = !1, e
            })
        }), s.swap = function(e, t, r, n) {
            var o, i, a = {};
            for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) a[i] = e.style[i], e.style[i] = t[i];
            for (i in o = r.apply(e, n || []), t) e.style[i] = a[i];
            return o
        }, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function(e, t) {
            var r, n, o = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(o, e, t)
            }), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
        };
        var A, k, S, M, N = s.data;
        s.data = function(e, t, r) {
            var n, o, i;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i];
                return N.call(this, e, o), t
            }
            return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments)
        }, s.fx && (S = s.Tween.prototype.run, M = function(e) {
            return e
        }, s.Tween.prototype.run = function() {
            1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments)
        }, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.document.hidden || u(k), A
            },
            set: function(e) {
                u(k), A = e
            }
        }));
        var R = s.fn.load,
            H = s.event.add,
            C = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function(e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                o = s.event.props;
            if (o.length) {
                u("jQuery.event.props are deprecated and removed: " + o.join());
                while (o.length) s.event.addProp(o.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
                while (o.length) s.event.addProp(o.pop());
            return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, s.event.add = function(e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments)
        }, s.each(["load", "unload", "error"], function(e, t) {
            s.fn[t] = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }
        }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
            s.fn[r] = function(e, t) {
                return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }
        }), s(function() {
            s(n.document).triggerHandler("ready")
        }), s.event.special.ready = {
            setup: function() {
                this === n.document && u("'ready' event is deprecated")
            }
        }, s.fn.extend({
            bind: function(e, t, r) {
                return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
            },
            unbind: function(e, t) {
                return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
            },
            delegate: function(e, t, r, n) {
                return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
            },
            undelegate: function(e, t, r) {
                return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
            },
            hover: function(e, t) {
                return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
            }
        });

        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }

        function P(e) {
            var t = e.replace(O, "<$1></$2>");
            t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
        }
        var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            q = s.htmlPrefilter;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
            s.htmlPrefilter = function(e) {
                return P(e), e.replace(O, "<$1></$2>")
            }
        }, s.htmlPrefilter = function(e) {
            return P(e), q(e)
        };
        var D, _ = s.fn.offset;
        s.fn.offset = function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, s.ajax && (D = s.param, s.param = function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
        });
        var E, F, J = s.fn.andSelf || s.fn.addBack;
        return s.fn.andSelf = function() {
            return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments)
        }, s.Deferred && (E = s.Deferred, F = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], s.Deferred = function(e) {
            var i = E(),
                a = i.promise();
            return i.pipe = a.pipe = function() {
                var o = arguments;
                return u("deferred.pipe() is deprecated"), s.Deferred(function(n) {
                    s.each(F, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }, e && e.call(i, i), i
        }, s.Deferred.exceptionHook = E.exceptionHook), s
    });
"function" == typeof jQuery && jQuery(document).ready(function(a) {
    a("body").on("post-load", function() {
        window.a2a && a2a.init_all()
    })
});
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});
/*!
 * jQuery Mousewheel 
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
var headerEl = document.getElementById('header-outer');
var headerSpaceEl = document.getElementById('header-space');
if (typeof(headerEl) != 'undefined' && headerEl != null && typeof(headerSpaceEl) != 'undefined' && headerSpaceEl != null && headerSpaceEl.hasAttribute('data-secondary-header-display')) {
    headerSpaceEl.style.height = headerEl.clientHeight + 'px';
}
jQuery(function($) {
    "use strict";
    var using_mobile_browser = false;
    if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
        using_mobile_browser = true;
    }
    var nectarPageHeader;

    function fullscreenHeightCalc() {
        var pageHeaderOffset = nectarPageHeader.offset().top;
        nectarPageHeader.css('height', (parseInt(window.innerHeight) - parseInt(pageHeaderOffset)) + 'px');
    }
    if (using_mobile_browser && $('#page-header-bg.fullscreen-header').length > 0) {
        nectarPageHeader = $('#page-header-bg');
        fullscreenHeightCalc();
        var $windowDOMWidth = window.innerWidth,
            $windowDOMHeight = window.innerHeight;
        $(window).resize(function() {
            if (($(window).width() != $windowDOMWidth && $(window).height != $windowDOMHeight)) {
                fullscreenHeightCalc();
                $windowDOMWidth = window.innerWidth;
                $windowDOMHeight = window.innerHeight;
            }
        });
    }

    function portfolioFullScreenSliderCalcs() {
        var $bodyBorderSize = ($('.body-border-top').length > 0 && $(window).width() > 1000) ? $('.body-border-top').height() : 0;
        $('.nectar_fullscreen_zoom_recent_projects').each(function() {
            if ($(this).parents('.first-section').length > 0) {
                $(this).css('height', $(window).height() - $(this).offset().top - $bodyBorderSize);
            } else {
                $(this).css('height', $(window).height());
            }
        });
    }
    if (using_mobile_browser && $('.nectar_fullscreen_zoom_recent_projects').length > 0) {
        portfolioFullScreenSliderCalcs();
    }

    function centeredNavBottomBarReposition() {
        var $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
        var $headerSpan3 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3');
        var $secondaryHeader = $('#header-secondary-outer');
        var $logoLinkClone = $headerSpan3.find('#logo').clone();
        if ($logoLinkClone.is('[data-supplied-ml="true"]')) {
            $logoLinkClone.find('img:not(.mobile-only-logo)').remove();
        }
        $logoLinkClone.find('img.starting-logo').remove();
        if ($secondaryHeader.length > 0) {
            $secondaryHeader.addClass('centered-menu-bottom-bar');
        }
        if ($('#header-outer[data-condense="true"]').length > 0) {
            $headerSpan9.prepend($logoLinkClone);
        }
    }
    if ($('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0) {
        centeredNavBottomBarReposition();
    }
    $('#page-header-bg[data-animate-in-effect="zoom-out"]').addClass('loaded');

    function sliderFontOverrides() {
        var $overrideCSS = '';
        $('.nectar-slider-wrap').each(function() {
            if ($(this).find('.swiper-container[data-tho]').length > 0) {
                var $tho = $(this).find('.swiper-container').attr('data-tho');
                var $tco = $(this).find('.swiper-container').attr('data-tco');
                var $pho = $(this).find('.swiper-container').attr('data-pho');
                var $pco = $(this).find('.swiper-container').attr('data-pco');
                if ($tho != 'auto' || $tco != 'auto') {
                    $overrideCSS += '@media only screen and (max-width: 1000px) and (min-width: 690px) {';
                    if ($tho != 'auto')
                        $overrideCSS += '#' + $(this).attr('id') + '.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content h2, #boxed .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content h2, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="true"] .swiper-slide .content h2, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="boxed-full-width"] .swiper-slide .content h2, body .full-width-content .vc_span12 .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content h2 { font-size:' + $tho + 'px!important; line-height:' + (parseInt($tho) + 10) + 'px!important;  }';
                    if ($pho != 'auto')
                        $overrideCSS += '#' + $(this).attr('id') + '.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content p, #boxed .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content p, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="true"] .swiper-slide .content p, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="boxed-full-width"] .swiper-slide .content p, body .full-width-content .vc_span12 .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content p { font-size:' + $tco + 'px!important; line-height:' + (parseInt($tco) + 10) + 'px!important;  }';
                    $overrideCSS += '}';
                }
                if ($pho != 'auto' || $pco != 'auto') {
                    $overrideCSS += '@media only screen and (max-width: 690px) {';
                    if ($pho != 'auto')
                        $overrideCSS += '#' + $(this).attr('id') + '.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content h2, #boxed .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content h2, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="true"] .swiper-slide .content h2, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="boxed-full-width"] .swiper-slide .content h2, body .full-width-content .vc_span12 .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content h2 { font-size:' + $pho + 'px!important; line-height:' + (parseInt($pho) + 10) + 'px!important;  }';
                    if ($pho != 'auto')
                        $overrideCSS += '#' + $(this).attr('id') + '.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content p, #boxed .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content p,  body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="true"] .swiper-slide .content p, body .nectar-slider-wrap#' + $(this).attr('id') + '[data-full-width="boxed-full-width"] .swiper-slide .content p, body .full-width-content .vc_span12 .nectar-slider-wrap#' + $(this).attr('id') + ' .swiper-slide .content p { font-size:' + $pco + 'px!important; line-height:' + (parseInt($pco) + 10) + 'px!important;  }';
                    $overrideCSS += '}';
                }
            }
        });
        if ($overrideCSS.length > 1) {
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = $overrideCSS;
            } else {
                style.appendChild(document.createTextNode($overrideCSS));
            }
            head.appendChild(style);
            $('.nectar-slider-wrap .content').css('visibility', 'visible');
        }
    }
    sliderFontOverrides();
});
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 */
(function(k) {
    k.transit = {
        version: "0.9.9",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: true,
        useTransitionEnd: false
    };
    var d = document.createElement("div");
    var q = {};

    function b(v) {
        if (v in d.style) {
            return v
        }
        var u = ["Moz", "Webkit", "O", "ms"];
        var r = v.charAt(0).toUpperCase() + v.substr(1);
        if (v in d.style) {
            return v
        }
        for (var t = 0; t < u.length; ++t) {
            var s = u[t] + r;
            if (s in d.style) {
                return s
            }
        }
    }

    function e() {
        d.style[q.transform] = "";
        d.style[q.transform] = "rotateY(90deg)";
        return d.style[q.transform] !== ""
    }
    var a = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    q.transition = b("transition");
    q.transitionDelay = b("transitionDelay");
    q.transform = b("transform");
    q.transformOrigin = b("transformOrigin");
    q.transform3d = e();
    var i = {
        transition: "transitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    };
    var f = q.transitionEnd = i[q.transition] || null;
    for (var p in q) {
        if (q.hasOwnProperty(p) && typeof k.support[p] === "undefined") {
            k.support[p] = q[p]
        }
    }
    d = null;
    k.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    k.cssHooks["transit:transform"] = {
        get: function(r) {
            return k(r).data("transform") || new j()
        },
        set: function(s, r) {
            var t = r;
            if (!(t instanceof j)) {
                t = new j(t)
            }
            if (q.transform === "WebkitTransform" && !a) {
                s.style[q.transform] = t.toString(true)
            } else {
                s.style[q.transform] = t.toString()
            }
            k(s).data("transform", t)
        }
    };
    k.cssHooks.transform = {
        set: k.cssHooks["transit:transform"].set
    };
    if (k.fn.jquery < "1.8") {
        k.cssHooks.transformOrigin = {
            get: function(r) {
                return r.style[q.transformOrigin]
            },
            set: function(r, s) {
                r.style[q.transformOrigin] = s
            }
        };
        k.cssHooks.transition = {
            get: function(r) {
                return r.style[q.transition]
            },
            set: function(r, s) {
                r.style[q.transition] = s
            }
        }
    }
    n("scale");
    n("translate");
    n("rotate");
    n("rotateX");
    n("rotateY");
    n("rotate3d");
    n("perspective");
    n("skewX");
    n("skewY");
    n("x", true);
    n("y", true);

    function j(r) {
        if (typeof r === "string") {
            this.parse(r)
        }
        return this
    }
    j.prototype = {
        setFromString: function(t, s) {
            var r = (typeof s === "string") ? s.split(",") : (s.constructor === Array) ? s : [s];
            r.unshift(t);
            j.prototype.set.apply(this, r)
        },
        set: function(s) {
            var r = Array.prototype.slice.apply(arguments, [1]);
            if (this.setter[s]) {
                this.setter[s].apply(this, r)
            } else {
                this[s] = r.join(",")
            }
        },
        get: function(r) {
            if (this.getter[r]) {
                return this.getter[r].apply(this)
            } else {
                return this[r] || 0
            }
        },
        setter: {
            rotate: function(r) {
                this.rotate = o(r, "deg")
            },
            rotateX: function(r) {
                this.rotateX = o(r, "deg")
            },
            rotateY: function(r) {
                this.rotateY = o(r, "deg")
            },
            scale: function(r, s) {
                if (s === undefined) {
                    s = r
                }
                this.scale = r + "," + s
            },
            skewX: function(r) {
                this.skewX = o(r, "deg")
            },
            skewY: function(r) {
                this.skewY = o(r, "deg")
            },
            perspective: function(r) {
                this.perspective = o(r, "px")
            },
            x: function(r) {
                this.set("translate", r, null)
            },
            y: function(r) {
                this.set("translate", null, r)
            },
            translate: function(r, s) {
                if (this._translateX === undefined) {
                    this._translateX = 0
                }
                if (this._translateY === undefined) {
                    this._translateY = 0
                }
                if (r !== null && r !== undefined) {
                    this._translateX = o(r, "px")
                }
                if (s !== null && s !== undefined) {
                    this._translateY = o(s, "px")
                }
                this.translate = this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0
            },
            y: function() {
                return this._translateY || 0
            },
            scale: function() {
                var r = (this.scale || "1,1").split(",");
                if (r[0]) {
                    r[0] = parseFloat(r[0])
                }
                if (r[1]) {
                    r[1] = parseFloat(r[1])
                }
                return (r[0] === r[1]) ? r[0] : r
            },
            rotate3d: function() {
                var t = (this.rotate3d || "0,0,0,0deg").split(",");
                for (var r = 0; r <= 3; ++r) {
                    if (t[r]) {
                        t[r] = parseFloat(t[r])
                    }
                }
                if (t[3]) {
                    t[3] = o(t[3], "deg")
                }
                return t
            }
        },
        parse: function(s) {
            var r = this;
            s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, v, u) {
                r.setFromString(v, u)
            })
        },
        toString: function(t) {
            var s = [];
            for (var r in this) {
                if (this.hasOwnProperty(r)) {
                    if ((!q.transform3d) && ((r === "rotateX") || (r === "rotateY") || (r === "perspective") || (r === "transformOrigin"))) {
                        continue
                    }
                    if (r[0] !== "_") {
                        if (t && (r === "scale")) {
                            s.push(r + "3d(" + this[r] + ",1)")
                        } else {
                            if (t && (r === "translate")) {
                                s.push(r + "3d(" + this[r] + ",0)")
                            } else {
                                s.push(r + "(" + this[r] + ")")
                            }
                        }
                    }
                }
            }
            return s.join(" ")
        }
    };

    function m(s, r, t) {
        if (r === true) {
            s.queue(t)
        } else {
            if (r) {
                s.queue(r, t)
            } else {
                t()
            }
        }
    }

    function h(s) {
        var r = [];
        k.each(s, function(t) {
            t = k.camelCase(t);
            t = k.transit.propertyMap[t] || k.cssProps[t] || t;
            t = c(t);
            if (k.inArray(t, r) === -1) {
                r.push(t)
            }
        });
        return r
    }

    function g(s, v, x, r) {
        var t = h(s);
        if (k.cssEase[x]) {
            x = k.cssEase[x]
        }
        var w = "" + l(v) + " " + x;
        if (parseInt(r, 10) > 0) {
            w += " " + l(r)
        }
        var u = [];
        k.each(t, function(z, y) {
            u.push(y + " " + w)
        });
        return u.join(", ")
    }
    k.fn.transition = k.fn.transit = function(z, s, y, C) {
        var D = this;
        var u = 0;
        var w = true;
        if (typeof s === "function") {
            C = s;
            s = undefined
        }
        if (typeof y === "function") {
            C = y;
            y = undefined
        }
        if (typeof z.easing !== "undefined") {
            y = z.easing;
            delete z.easing
        }
        if (typeof z.duration !== "undefined") {
            s = z.duration;
            delete z.duration
        }
        if (typeof z.complete !== "undefined") {
            C = z.complete;
            delete z.complete
        }
        if (typeof z.queue !== "undefined") {
            w = z.queue;
            delete z.queue
        }
        if (typeof z.delay !== "undefined") {
            u = z.delay;
            delete z.delay
        }
        if (typeof s === "undefined") {
            s = k.fx.speeds._default
        }
        if (typeof y === "undefined") {
            y = k.cssEase._default
        }
        s = l(s);
        var E = g(z, s, y, u);
        var B = k.transit.enabled && q.transition;
        var t = B ? (parseInt(s, 10) + parseInt(u, 10)) : 0;
        if (t === 0) {
            var A = function(F) {
                D.css(z);
                if (C) {
                    C.apply(D)
                }
                if (F) {
                    F()
                }
            };
            m(D, w, A);
            return D
        }
        var x = {};
        var r = function(H) {
            var G = false;
            var F = function() {
                if (G) {
                    D.unbind(f, F)
                }
                if (t > 0) {
                    D.each(function() {
                        this.style[q.transition] = (x[this] || null)
                    })
                }
                if (typeof C === "function") {
                    C.apply(D)
                }
                if (typeof H === "function") {
                    H()
                }
            };
            if ((t > 0) && (f) && (k.transit.useTransitionEnd)) {
                G = true;
                D.bind(f, F)
            } else {
                window.setTimeout(F, t)
            }
            D.each(function() {
                if (t > 0) {
                    this.style[q.transition] = E
                }
                k(this).css(z)
            })
        };
        var v = function(F) {
            this.offsetWidth;
            r(F)
        };
        m(D, w, v);
        return this
    };

    function n(s, r) {
        if (!r) {
            k.cssNumber[s] = true
        }
        k.transit.propertyMap[s] = q.transform;
        k.cssHooks[s] = {
            get: function(v) {
                var u = k(v).css("transit:transform");
                return u.get(s)
            },
            set: function(v, w) {
                var u = k(v).css("transit:transform");
                u.setFromString(s, w);
                k(v).css({
                    "transit:transform": u
                })
            }
        }
    }

    function c(r) {
        return r.replace(/([A-Z])/g, function(s) {
            return "-" + s.toLowerCase()
        })
    }

    function o(s, r) {
        if ((typeof s === "string") && (!s.match(/^[\-0-9\.]+$/))) {
            return s
        } else {
            return "" + s + r
        }
    }

    function l(s) {
        var r = s;
        if (k.fx.speeds[r]) {
            r = k.fx.speeds[r]
        }
        return o(r, "ms")
    }
    k.transit.getTransitionValue = g
})(jQuery);
/*!
Waypoints - 4.0.1
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.Context.refreshAll();
        for (var e in i) i[e].enabled = !0;
        return this
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s];
                if (null !== a.triggerPoint) {
                    var l = o.oldScroll < a.triggerPoint,
                        h = o.newScroll >= a.triggerPoint,
                        p = l && h,
                        u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-csspositionsticky-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-flexboxlegacy-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-websqldatabase-webworkers-domprefixes-hasevent-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function a() {
        var e, t, n, a, o, i, s;
        for (var c in b)
            if (b.hasOwnProperty(c)) {
                if (e = [], t = b[c], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = a : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = a), y.push((a ? "" : "no-") + s.join("-"))
            }
    }

    function o(e) {
        var t = C.className,
            n = Modernizr._config.classPrefix || "";
        if (E && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), E ? C.className.baseVal = t : C.className = t)
    }

    function i() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : E ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function s(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function c(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function d() {
        var e = t.body;
        return e || (e = i(E ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, n, r, a) {
        var o, s, c, l, u = "modernizr",
            f = i("div"),
            p = d();
        if (parseInt(r, 10))
            for (; r--;) c = i("div"), c.id = a ? a[r] : u + (r + 1), f.appendChild(c);
        return o = i("style"), o.type = "text/css", o.id = "s" + u, (p.fake ? p : f).appendChild(o), p.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), f.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = C.style.overflow, C.style.overflow = "hidden", C.appendChild(p)), s = n(f, e), p.fake ? (p.parentNode.removeChild(p), C.style.overflow = l, C.offsetHeight) : f.parentNode.removeChild(f), !!s
    }

    function u(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function f(e, t, n) {
        var a;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (a = t[e[o]], r(a, "function") ? u(a, n || t) : a);
        return !1
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m(t, r) {
        var a = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; a--;)
                if (e.CSS.supports(p(t[a]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; a--;) o.push("(" + p(t[a]) + ":" + r + ")");
            return o = o.join(" or "), l("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function g(e, t, a, o) {
        function d() {
            u && (delete W.style, delete W.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(a, "undefined")) {
            var l = m(e, a);
            if (!r(l, "undefined")) return l
        }
        for (var u, f, p, g, h, v = ["modernizr", "tspan", "samp"]; !W.style && v.length;) u = !0, W.modElem = i(v.shift()), W.style = W.modElem.style;
        for (p = e.length, f = 0; p > f; f++)
            if (g = e[f], h = W.style[g], c(g, "-") && (g = s(g)), W.style[g] !== n) {
                if (o || r(a, "undefined")) return d(), "pfx" == t ? g : !0;
                try {
                    W.style[g] = a
                } catch (y) {}
                if (W.style[g] != h) return d(), "pfx" == t ? g : !0
            }
        return d(), !1
    }

    function h(e, t, n, a, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + B.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? g(s, t, a, o) : (s = (e + " " + P.join(i + " ") + i).split(" "), f(s, t, n))
    }

    function v(e, t, r) {
        return h(e, n, n, t, r)
    }
    var y = [],
        b = [],
        x = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                b.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = x, Modernizr = new Modernizr, Modernizr.addTest("applicationcache", "applicationCache" in e), Modernizr.addTest("geolocation", "geolocation" in navigator), Modernizr.addTest("history", function() {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? e.history && "pushState" in e.history : !1
    }), Modernizr.addTest("postmessage", "postMessage" in e), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var T = !1;
    try {
        T = "WebSocket" in e && 2 === e.WebSocket.CLOSING
    } catch (w) {}
    Modernizr.addTest("websockets", T), Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("sessionstorage", function() {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("websqldatabase", "openDatabase" in e), Modernizr.addTest("webworkers", "Worker" in e);
    var S = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    x._prefixes = S;
    var C = t.documentElement,
        E = "svg" === C.nodeName.toLowerCase();
    E || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = b.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function a(e, t) {
            var n = b.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), b.elements = n + " " + e, d(t)
        }

        function o(e) {
            var t = y[e[h]];
            return t || (t = {}, v++, e[h] = v, y[v] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), u) return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : g.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }

        function s(e, n) {
            if (e || (e = t), u) return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, s = r(), c = s.length; c > i; i++) a.createElement(s[i]);
            return a
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return b.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(b, t.frag)
        }

        function d(e) {
            e || (e = t);
            var r = o(e);
            return !b.shivCSS || l || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || c(e, r), e
        }
        var l, u, f = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            g = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv",
            v = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", l = "hidden" in e, u = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                l = !0, u = !0
            }
        }();
        var b = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: f,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: d,
            createElement: i,
            createDocumentFragment: s,
            addElements: a
        };
        e.html5 = b, d(t), "object" == typeof module && module.exports && (module.exports = b)
    }("undefined" != typeof e ? e : this, t);
    var k = "Moz O ms Webkit",
        P = x._config.usePrefixes ? k.toLowerCase().split(" ") : [];
    x._domPrefixes = P;
    var _ = function() {
        function e(e, t) {
            var a;
            return e ? (t && "string" != typeof t || (t = i(t || "div")), e = "on" + e, a = e in t, !a && r && (t.setAttribute || (t = i("div")), t.setAttribute(e, ""), a = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), a) : !1
        }
        var r = !("onblur" in t.documentElement);
        return e
    }();
    x.hasEvent = _, Modernizr.addTest("hashchange", function() {
        return _("hashchange", e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7
    }), Modernizr.addTest("audio", function() {
        var e = i("audio"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("canvas", function() {
        var e = i("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("canvastext", function() {
        return Modernizr.canvas === !1 ? !1 : "function" == typeof i("canvas").getContext("2d").fillText
    }), Modernizr.addTest("video", function() {
        var e = i("video"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("webgl", function() {
        var t = i("canvas"),
            n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
        return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
    }), Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", a = 0, o = S.length - 1; o > a; a++) e = 0 === a ? "to " : "", r += t + S[a] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
        var s = i("a"),
            c = s.style;
        return c.cssText = r, ("" + c.backgroundImage).indexOf("gradient") > -1
    }), Modernizr.addTest("multiplebgs", function() {
        var e = i("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    }), Modernizr.addTest("opacity", function() {
        var e = i("a").style;
        return e.cssText = S.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    }), Modernizr.addTest("rgba", function() {
        var e = i("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    }), Modernizr.addTest("inlinesvg", function() {
        var e = i("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    }), Modernizr.addTest("csspositionsticky", function() {
        var e = "position:",
            t = "sticky",
            n = i("a"),
            r = n.style;
        return r.cssText = e + S.join(t + ";" + e).slice(0, -e.length), -1 !== r.position.indexOf(t)
    });
    var N = i("input"),
        R = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        z = {};
    Modernizr.input = function(t) {
        for (var n = 0, r = t.length; r > n; n++) z[t[n]] = !!(t[n] in N);
        return z.list && (z.list = !(!i("datalist") || !e.HTMLDataListElement)), z
    }(R);
    var $ = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        A = {};
    Modernizr.inputtypes = function(e) {
        for (var r, a, o, i = e.length, s = "1)", c = 0; i > c; c++) N.setAttribute("type", r = e[c]), o = "text" !== N.type && "style" in N, o && (N.value = s, N.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && N.style.WebkitAppearance !== n ? (C.appendChild(N), a = t.defaultView, o = a.getComputedStyle && "textfield" !== a.getComputedStyle(N, null).WebkitAppearance && 0 !== N.offsetHeight, C.removeChild(N)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? N.checkValidity && N.checkValidity() === !1 : N.value != s)), A[e[c]] = !!o;
        return A
    }($), Modernizr.addTest("hsla", function() {
        var e = i("a").style;
        return e.cssText = "background-color:hsla(120,40%,100%,.5)", c(e.backgroundColor, "rgba") || c(e.backgroundColor, "hsla")
    });
    var O = "CSS" in e && "supports" in e.CSS,
        L = "supportsCSS" in e;
    Modernizr.addTest("supports", O || L);
    var j = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test(j.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    }), Modernizr.addTest("smil", function() {
        return !!t.createElementNS && /SVGAnimate/.test(j.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")))
    });
    var B = x._config.usePrefixes ? k.split(" ") : [];
    x._cssomPrefixes = B;
    var F = function(t) {
        var r, a = S.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var i = 0; a > i; i++) {
            var s = S[i],
                c = s.toUpperCase() + "_" + r;
            if (c in o) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    x.atRule = F;
    var M = x.testStyles = l,
        D = function() {
            var e = navigator.userAgent,
                t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
                n = e.match(/w(eb)?osbrowser/gi),
                r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
                a = 533 > t && e.match(/android/gi);
            return n || a || r
        }();
    D ? Modernizr.addTest("fontface", !1) : M('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
        var r = t.getElementById("smodernizr"),
            a = r.sheet || r.styleSheet,
            o = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "",
            i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", i)
    }), M('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 7)
    });
    var I = {
        elem: i("modernizr")
    };
    Modernizr._q.push(function() {
        delete I.elem
    });
    var W = {
        style: I.elem.style
    };
    Modernizr._q.unshift(function() {
        delete W.style
    });
    var V = x.testProp = function(e, t, r) {
        return g([e], n, t, r)
    };
    Modernizr.addTest("textshadow", V("textShadow", "1px 1px")), x.testAllProps = h;
    var H, U = x.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? F(e) : (-1 != e.indexOf("-") && (e = s(e)), t ? h(e, t, n) : h(e, "pfx"))
    };
    try {
        H = U("indexedDB", e)
    } catch (w) {}
    Modernizr.addTest("indexeddb", !!H), H && Modernizr.addTest("indexeddb.deletedatabase", "deleteDatabase" in H), x.testAllProps = v, Modernizr.addTest("cssanimations", v("animationName", "a", !0)), Modernizr.addTest("backgroundsize", v("backgroundSize", "100%", !0)), Modernizr.addTest("borderimage", v("borderImage", "url() 1", !0)), Modernizr.addTest("borderradius", v("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", v("boxShadow", "1px 1px", !0)),
        function() {
            Modernizr.addTest("csscolumns", function() {
                var e = !1,
                    t = v("columnCount");
                try {
                    (e = !!t) && (e = new Boolean(e))
                } catch (n) {}
                return e
            });
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = v("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || v(n[r])), Modernizr.addTest("csscolumns." + e, t)
        }(), Modernizr.addTest("flexbox", v("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", v("boxDirection", "reverse", !0)), Modernizr.addTest("cssreflections", v("boxReflect", "above", !0)), Modernizr.addTest("csstransforms", function() {
            return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0)
        }), Modernizr.addTest("csstransforms3d", function() {
            var e = !!v("perspective", "1px", !0),
                t = Modernizr._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in C.style)) {
                var n, r = "#modernizr{width:0;height:0}";
                Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", M(r + n, function(t) {
                    e = 7 === t.offsetWidth && 18 === t.offsetHeight
                })
            }
            return e
        }), Modernizr.addTest("csstransitions", v("transition", "all", !0)), a(), o(y), delete x.addTest, delete x.addAsyncTest;
    for (var q = 0; q < Modernizr._q.length; q++) Modernizr._q[q]();
    e.Modernizr = Modernizr
}(window, document);
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});
/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */
! function(factory) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], factory) : jQuery && !jQuery.fn.hoverIntent && factory(jQuery)
}(function($) {
    "use strict";
    var cX, cY, _cfg = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        },
        INSTANCE_COUNT = 0,
        track = function(ev) {
            cX = ev.pageX, cY = ev.pageY
        },
        compare = function(ev, $el, s, cfg) {
            if (Math.sqrt((s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY)) < cfg.sensitivity) return $el.off(s.event, track), delete s.timeoutId, s.isActive = !0, ev.pageX = cX, ev.pageY = cY, delete s.pX, delete s.pY, cfg.over.apply($el[0], [ev]);
            s.pX = cX, s.pY = cY, s.timeoutId = setTimeout(function() {
                compare(ev, $el, s, cfg)
            }, cfg.interval)
        },
        delay = function(ev, $el, s, out) {
            return delete $el.data("hoverIntent")[s.id], out.apply($el[0], [ev])
        };
    $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
        var instanceId = INSTANCE_COUNT++,
            cfg = $.extend({}, _cfg);
        $.isPlainObject(handlerIn) ? (cfg = $.extend(cfg, handlerIn), $.isFunction(cfg.out) || (cfg.out = cfg.over)) : cfg = $.isFunction(handlerOut) ? $.extend(cfg, {
            over: handlerIn,
            out: handlerOut,
            selector: selector
        }) : $.extend(cfg, {
            over: handlerIn,
            out: handlerIn,
            selector: handlerOut
        });
        var handleHover = function(e) {
            var ev = $.extend({}, e),
                $el = $(this),
                hoverIntentData = $el.data("hoverIntent");
            hoverIntentData || $el.data("hoverIntent", hoverIntentData = {});
            var state = hoverIntentData[instanceId];
            state || (hoverIntentData[instanceId] = state = {
                id: instanceId
            }), state.timeoutId && (state.timeoutId = clearTimeout(state.timeoutId));
            var mousemove = state.event = "mousemove.hoverIntent.hoverIntent" + instanceId;
            if ("mouseenter" === e.type) {
                if (state.isActive) return;
                state.pX = ev.pageX, state.pY = ev.pageY, $el.off(mousemove, track).on(mousemove, track), state.timeoutId = setTimeout(function() {
                    compare(ev, $el, state, cfg)
                }, cfg.interval)
            } else {
                if (!state.isActive) return;
                $el.off(mousemove, track), state.timeoutId = setTimeout(function() {
                    delay(ev, $el, state, cfg.out)
                }, cfg.timeout)
            }
        };
        return this.on({
            "mouseenter.hoverIntent": handleHover,
            "mouseleave.hoverIntent": handleHover
        }, cfg.selector)
    }
});

! function(t, e, n, o) {
    "use strict";

    function i(t, e) {
        var o, i, a, s = [],
            r = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), (a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "", i ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), a = n.fancybox.open(s, e, r), a.$trigger = o))
    }
    if (t.console = t.console || {
            info: function(t) {}
        }, n) {
        if (n.fn.fancybox) return void console.info("fancyBox already initialized");
        var a = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function(t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function(t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function(t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            },
            s = n(t),
            r = n(e),
            c = 0,
            l = function(t) {
                return t && t.hasOwnProperty && t instanceof n
            },
            d = function() {
                return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                    return t.setTimeout(e, 1e3 / 60)
                }
            }(),
            u = function() {
                return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                    t.clearTimeout(e)
                }
            }(),
            f = function() {
                var t, n = e.createElement("fakeelement"),
                    o = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in o)
                    if (void 0 !== n.style[t]) return o[t];
                return "transitionend"
            }(),
            p = function(t) {
                return t && t.length && t[0].offsetHeight
            },
            h = function(t, e) {
                var o = n.extend(!0, {}, t, e);
                return n.each(e, function(t, e) {
                    n.isArray(e) && (o[t] = e)
                }), o
            },
            g = function(t) {
                var o, i;
                return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = {
                    x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                    y: t.getBoundingClientRect().top + t.offsetHeight / 2
                }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i)
            },
            b = function(t, e, o) {
                var i = this;
                i.opts = h({
                    index: o
                }, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = h(i.opts, e)), n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)), i.id = i.opts.id || ++c, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init()
            };
        n.extend(b.prototype, {
                init: function() {
                    var o, i, a = this,
                        s = a.group[a.currIndex],
                        r = s.opts;
                    r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(r.buttons, function(t, e) {
                        i += r.btnTpl[e] || ""
                    }), o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(r.baseClass).data("FancyBox", a).appendTo(r.parentEl), a.$refs = {
                        container: o
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                        a.$refs[t] = o.find(".fancybox-" + t)
                    }), a.trigger("onInit"), a.activate(), a.jumpTo(a.currIndex)
                },
                translate: function(t, e) {
                    var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                    return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                        return void 0 === n[e] ? t : n[e]
                    })
                },
                addContent: function(t) {
                    var e, o = this,
                        i = n.makeArray(t);
                    n.each(i, function(t, e) {
                        var i, a, s, r, c, l = {},
                            d = {};
                        n.isPlainObject(e) ? (l = e, d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), d = i.data() || {}, d = n.extend(!0, {}, d, d.options), d.$orig = i, l.src = o.opts.src || d.src || i.attr("href"), l.type || l.src || (l.type = "inline", l.src = e)) : l = {
                            type: "html",
                            src: e + ""
                        }, l.opts = n.extend(!0, {}, o.opts, d), n.isArray(d.buttons) && (l.opts.buttons = d.buttons), n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)), a = l.type || l.opts.type, r = l.src || "", !a && r && ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", l = n.extend(!0, l, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === r.charAt(0) && (a = "inline")), a ? l.type = a : o.trigger("objectNeedsType", l), l.contentType || (l.contentType = n.inArray(l.type, ["html", "inline", "ajax"]) > -1 ? "html" : l.type), l.index = o.group.length, "auto" == l.opts.smallBtn && (l.opts.smallBtn = n.inArray(l.type, ["html", "inline", "ajax"]) > -1), "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn), l.$thumb = l.opts.$thumb || null, l.opts.$trigger && l.index === o.opts.index && (l.$thumb = l.opts.$trigger.find("img:first"), l.$thumb.length && (l.opts.$orig = l.opts.$trigger)), l.$thumb && l.$thumb.length || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")), l.$thumb && !l.$thumb.length && (l.$thumb = null), l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null), "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [o, l])), "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [o, l])), l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""), "ajax" === l.type && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.filter = c.shift())), l.opts.modal && (l.opts = n.extend(!0, l.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), o.group.push(l)
                    }), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()))
                },
                addEvents: function() {
                    var e = this;
                    e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                        t.stopPropagation(), t.preventDefault(), e.close(t)
                    }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                        t.stopPropagation(), t.preventDefault(), e.previous()
                    }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                        t.stopPropagation(), t.preventDefault(), e.next()
                    }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                        e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    }), s.on("orientationchange.fb resize.fb", function(t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = d(function() {
                            e.update(t)
                        })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function() {
                            e.$refs.stage.show(), e.update(t)
                        }, n.fancybox.isMobile ? 600 : 250))
                    }), r.on("keydown.fb", function(t) {
                        var o = n.fancybox ? n.fancybox.getInstance() : null,
                            i = o.current,
                            a = t.keyCode || t.which;
                        if (9 == a) return void(i.opts.trapFocus && e.focus(t));
                        if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === a || 27 === a ? (t.preventDefault(), void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, a)
                    }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                        e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                    }), e.idleInterval = t.setInterval(function() {
                        ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                    }, 1e3))
                },
                removeEvents: function() {
                    var e = this;
                    s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
                },
                previous: function(t) {
                    return this.jumpTo(this.currPos - 1, t)
                },
                next: function(t) {
                    return this.jumpTo(this.currPos + 1, t)
                },
                jumpTo: function(t, e) {
                    var o, i, a, s, r, c, l, d, u, f = this,
                        h = f.group.length;
                    if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                        if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= h)) return !1;
                        if (o = f.firstRun = !Object.keys(f.slides).length, r = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, s = f.createSlide(t), h > 1 && ((a || s.index < h - 1) && f.createSlide(t + 1), (a || s.index > 0) && f.createSlide(t - 1)), f.current = s, f.currIndex = s.index, f.currPos = s.pos, f.trigger("beforeShow", o), f.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = f.isMoved(s), s.$slide.addClass("fancybox-slide--current"), o) return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(s), void f.preload("image");
                        c = n.fancybox.getTranslate(r.$slide), l = n.fancybox.getTranslate(f.$refs.stage), n.each(f.slides, function(t, e) {
                            n.fancybox.stop(e.$slide, !0)
                        }), r.pos !== s.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (u = c.left - (r.pos * c.width + r.pos * r.opts.gutter), n.each(f.slides, function(t, o) {
                            o.$slide.removeClass("fancybox-animated").removeClass(function(t, e) {
                                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                            });
                            var i = o.pos * c.width + o.pos * o.opts.gutter;
                            n.fancybox.setTranslate(o.$slide, {
                                top: 0,
                                left: i - l.left + u
                            }), o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")), p(o.$slide), n.fancybox.animate(o.$slide, {
                                top: 0,
                                left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter
                            }, e, function() {
                                o.$slide.css({
                                    transform: "",
                                    opacity: ""
                                }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === f.currPos && f.complete()
                            })
                        })) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")), n.fancybox.animate(r.$slide, d, e, function() {
                            r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")
                        }, !1)), s.isLoaded ? f.revealContent(s) : f.loadSlide(s), f.preload("image")
                    }
                },
                createSlide: function(t) {
                    var e, o, i = this;
                    return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), i.updateSlide(i.slides[t])), i.slides[t]
                },
                scaleToActual: function(t, e, o) {
                    var i, a, s, r, c, l = this,
                        d = l.current,
                        u = d.$content,
                        f = n.fancybox.getTranslate(d.$slide).width,
                        p = n.fancybox.getTranslate(d.$slide).height,
                        h = d.width,
                        g = d.height;
                    l.isAnimating || l.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (l.isAnimating = !0, n.fancybox.stop(u), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, i = n.fancybox.getTranslate(u), i.top -= n.fancybox.getTranslate(d.$slide).top, i.left -= n.fancybox.getTranslate(d.$slide).left, r = h / i.width, c = g / i.height, a = .5 * f - .5 * h, s = .5 * p - .5 * g, h > f && (a = i.left * r - (t * r - t), a > 0 && (a = 0), a < f - h && (a = f - h)), g > p && (s = i.top * c - (e * c - e), s > 0 && (s = 0), s < p - g && (s = p - g)), l.updateCursor(h, g), n.fancybox.animate(u, {
                        top: s,
                        left: a,
                        scaleX: r,
                        scaleY: c
                    }, o || 366, function() {
                        l.isAnimating = !1
                    }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
                },
                scaleToFit: function(t) {
                    var e, o = this,
                        i = o.current,
                        a = i.$content;
                    o.isAnimating || o.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, n.fancybox.stop(a), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / a.width(),
                        scaleY: e.height / a.height()
                    }, t || 366, function() {
                        o.isAnimating = !1
                    }))
                },
                getFitPos: function(t) {
                    var e, o, i, a, s = this,
                        r = t.$content,
                        c = t.$slide,
                        l = t.width || t.opts.width,
                        d = t.height || t.opts.height,
                        u = {};
                    return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && d || (l = e, d = o), i = Math.min(1, e / l, o / d), l *= i, d *= i, l > e - .5 && (l = e), d > o - .5 && (d = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9, d > l / a ? d = l / a : l > d * a && (l = d * a)), u.width = l, u.height = d, u)
                },
                update: function(t) {
                    var e = this;
                    n.each(e.slides, function(n, o) {
                        e.updateSlide(o, t)
                    })
                },
                updateSlide: function(t, e) {
                    var o = this,
                        i = t && t.$content,
                        a = t.width || t.opts.width,
                        s = t.height || t.opts.height,
                        r = t.$slide;
                    o.adjustCaption(t), i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t, e)
                },
                centerSlide: function(t) {
                    var e = this,
                        o = e.current,
                        i = o.$slide;
                    !e.isClosing && o && (i.siblings().css({
                        transform: "",
                        opacity: ""
                    }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, void 0 === t ? 0 : t, function() {
                        i.css({
                            transform: "",
                            opacity: ""
                        }), o.isComplete || e.complete()
                    }, !1))
                },
                isMoved: function(t) {
                    var e, o, i = t || this.current;
                    return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5))
                },
                updateCursor: function(t, e) {
                    var o, i, a = this,
                        s = a.current,
                        r = a.$refs.container;
                    s && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = a.canPan(t, e), i = !!o || a.isZoomable(), r.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? r.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || a.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"))
                },
                isZoomable: function() {
                    var t, e = this,
                        n = e.current;
                    if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                        if (!n.isLoaded) return !0;
                        if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0
                    }
                    return !1
                },
                isScaledDown: function(t, e) {
                    var o = this,
                        i = !1,
                        a = o.current,
                        s = a.$content;
                    return void 0 !== t && void 0 !== e ? i = t < a.width && e < a.height : s && (i = n.fancybox.getTranslate(s), i = i.width < a.width && i.height < a.height), i
                },
                canPan: function(t, e) {
                    var o = this,
                        i = o.current,
                        a = null,
                        s = !1;
                    return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = o.getFitPos(i), void 0 !== t && void 0 !== e ? a = {
                        width: t,
                        height: e
                    } : i.isComplete && (a = n.fancybox.getTranslate(i.$content)), a && s && (s = Math.abs(a.width - s.width) > 1.5 || Math.abs(a.height - s.height) > 1.5)), s
                },
                loadSlide: function(t) {
                    var e, o, i, a = this;
                    if (!t.isLoading && !t.isLoaded) {
                        if (t.isLoading = !0, !1 === a.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                        switch (e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                            case "image":
                                a.setImage(t);
                                break;
                            case "iframe":
                                a.setIframe(t);
                                break;
                            case "html":
                                a.setContent(t, t.src || t.content);
                                break;
                            case "video":
                                a.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                break;
                            case "inline":
                                n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                                break;
                            case "ajax":
                                a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                    url: t.src,
                                    success: function(e, n) {
                                        "success" === n && a.setContent(t, e)
                                    },
                                    error: function(e, n) {
                                        e && "abort" !== n && a.setError(t)
                                    }
                                })), o.one("onReset", function() {
                                    i.abort()
                                });
                                break;
                            default:
                                a.setError(t)
                        }
                        return !0
                    }
                },
                setImage: function(t) {
                    var o, i = this;
                    setTimeout(function() {
                        var e = t.$image;
                        i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t)
                    }, 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, o = e.createElement("img"), o.onerror = function() {
                        n(this).remove(), t.$ghost = null
                    }, o.onload = function() {
                        i.afterLoad(t)
                    }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t)
                },
                checkSrcset: function(e) {
                    var n, o, i, a, s = e.opts.srcset || e.opts.image.srcset;
                    if (s) {
                        i = t.devicePixelRatio || 1, a = t.innerWidth * i, o = s.split(",").map(function(t) {
                            var e = {};
                            return t.trim().split(/\s+/).forEach(function(t, n) {
                                var o = parseInt(t.substring(0, t.length - 1), 10);
                                if (0 === n) return e.url = t;
                                o && (e.value = o, e.postfix = t[t.length - 1])
                            }), e
                        }), o.sort(function(t, e) {
                            return t.value - e.value
                        });
                        for (var r = 0; r < o.length; r++) {
                            var c = o[r];
                            if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= i) {
                                n = c;
                                break
                            }
                        }!n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s)
                    }
                },
                setBigImage: function(t) {
                    var o = this,
                        i = e.createElement("img"),
                        a = n(i);
                    t.$image = a.one("error", function() {
                        o.setError(t)
                    }).one("load", function() {
                        var e;
                        t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && (e = t.opts.sizes, e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), a.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function() {
                            t.$ghost && !o.isClosing && t.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t))
                    }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error")
                },
                resolveImageSlideSize: function(t, e, n) {
                    var o = parseInt(t.opts.width, 10),
                        i = parseInt(t.opts.height, 10);
                    t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i)
                },
                setIframe: function(t) {
                    var e, o = this,
                        i = t.opts.iframe,
                        a = t.$slide;
                    t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (o.showLoading(t), e.on("load.fb error.fb", function(e) {
                        this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
                    }), a.on("refresh.fb", function() {
                        var n, o, s = t.$content,
                            r = i.css.width,
                            c = i.css.height;
                        if (1 === e[0].isReady) {
                            try {
                                n = e.contents(), o = n.find("body")
                            } catch (t) {}
                            o && o.length && o.children().length && (a.css("overflow", "visible"), s.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))), s.css("width", r || "").css("max-width", ""), void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))), s.css("height", c || ""), a.css("overflow", "auto")), s.removeClass("fancybox-is-hidden")
                        }
                    })) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", function() {
                        try {
                            n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                        } catch (t) {}
                        n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                    })
                },
                setContent: function(t, e) {
                    var o = this;
                    o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                        n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                    }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t))
                },
                setError: function(t) {
                    t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                },
                showLoading: function(t) {
                    var e = this;
                    (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                },
                hideLoading: function(t) {
                    var e = this;
                    (t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                },
                afterLoad: function(t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                        return 2 == t.button && t.preventDefault(), !0
                    }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
                },
                adjustCaption: function(t) {
                    var e, n = this,
                        o = t || n.current,
                        i = o.opts.caption,
                        a = o.opts.preventCaptionOverlap,
                        s = n.$refs.caption,
                        r = !1;
                    s.toggleClass("fancybox-caption--separate", a), a && i && i.length && (o.pos !== n.currPos ? (e = s.clone().appendTo(s.parent()), e.children().eq(0).empty().html(i), r = e.outerHeight(!0), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)), o.$slide.css("padding-bottom", r || ""))
                },
                adjustLayout: function(t) {
                    var e, n, o, i, a = this,
                        s = t || a.current;
                    s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], i = s.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n))
                },
                revealContent: function(t) {
                    var e, o, i, a, s = this,
                        r = t.$slide,
                        c = !1,
                        l = !1,
                        d = s.isMoved(t),
                        u = t.isRevealed;
                    return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), !d && t.pos === s.currPos && i || (e = !1), "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? c = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, c.scaleX = c.width / l.width, c.scaleY = c.height / l.height, a = t.opts.zoomOpacity, "auto" == a && (a = Math.abs(t.width / t.height - l.width / l.height) > .1), a && (l.opacity = .1, c.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), p(t.$content), void n.fancybox.animate(t.$content, c, i, function() {
                        s.isAnimating = !1, s.complete()
                    })) : (s.updateSlide(t), e ? (n.fancybox.stop(r), o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(r), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(r, "fancybox-slide--current", i, function() {
                        r.removeClass(o).css({
                            transform: "",
                            opacity: ""
                        }), t.pos === s.currPos && s.complete()
                    }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === s.currPos && s.complete())))
                },
                getThumbPos: function(t) {
                    var e, o, i, a, s, r = !1,
                        c = t.$thumb;
                    return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), i = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), s = parseFloat(c.css("border-left-width") || 0), r = {
                        top: e.top + o,
                        left: e.left + s,
                        width: e.width - i - s,
                        height: e.height - o - a,
                        scaleX: 1,
                        scaleY: 1
                    }, e.width > 0 && e.height > 0 && r)
                },
                complete: function() {
                    var t, e = this,
                        o = e.current,
                        i = {};
                    !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), p(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function(t, o) {
                        o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
                    }), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                    }), o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"), t.length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0))
                },
                preload: function(t) {
                    var e, n, o = this;
                    o.group.length < 2 || (n = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n))
                },
                focus: function(t, o) {
                    var i, a, s = this,
                        r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                    s.isClosing || (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"), i = i.filter(r).filter(function() {
                        return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                    }), i.length ? (a = i.index(e.activeElement), t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"))
                },
                activate: function() {
                    var t = this;
                    n(".fancybox-container").each(function() {
                        var e = n(this).data("FancyBox");
                        e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                    }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                },
                close: function(t, e) {
                    var o, i, a, s, r, c, l, u = this,
                        f = u.current,
                        h = function() {
                            u.cleanUp(t)
                        };
                    return !u.isClosing && (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, d(function() {
                        u.update()
                    }), !1) : (u.removeEvents(), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = {
                            top: s.top,
                            left: s.left,
                            scaleX: s.width / l.width,
                            scaleY: s.height / l.height,
                            width: l.width,
                            height: l.height
                        }, r = f.opts.zoomOpacity,
                        "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), p(a), n.fancybox.animate(a, l, i, h), !0) : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), !0)))
                },
                cleanUp: function(e) {
                    var o, i, a, s = this,
                        r = s.current.opts.$orig;
                    s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (i = t.scrollX, a = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
                },
                trigger: function(t, e) {
                    var o, i = Array.prototype.slice.call(arguments, 1),
                        a = this,
                        s = e && e.opts ? e : a.current;
                    if (s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o) return o;
                    "afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i)
                },
                updateControls: function() {
                    var t = this,
                        o = t.current,
                        i = o.index,
                        a = t.$refs.container,
                        s = t.$refs.caption,
                        r = o.opts.caption;
                    o.$slide.trigger("refresh"), r && r.length ? (t.$caption = s, s.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), a.find("[data-fancybox-count]").html(t.group.length), a.find("[data-fancybox-index]").html(i + 1), a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
                },
                hideControls: function(t) {
                    var e = this,
                        n = ["infobar", "toolbar", "nav"];
                    !t && e.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map(function(t) {
                        return "fancybox-show-" + t
                    }).join(" ")), this.hasHiddenControls = !0
                },
                showControls: function() {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        n = t.$refs.container;
                    t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
                },
                toggleControls: function() {
                    this.hasHiddenControls ? this.showControls() : this.hideControls()
                }
            }), n.fancybox = {
                version: "3.5.7",
                defaults: a,
                getInstance: function(t) {
                    var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        o = Array.prototype.slice.call(arguments, 1);
                    return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
                },
                open: function(t, e, n) {
                    return new b(t, e, n)
                },
                close: function(t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close(t))
                },
                destroy: function() {
                    this.close(!0), r.add("body").off("click.fb-start", "**")
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: function() {
                    var n = e.createElement("div");
                    return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
                }(),
                getTranslate: function(t) {
                    var e;
                    return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
                        top: e.top || 0,
                        left: e.left || 0,
                        width: e.width,
                        height: e.height,
                        opacity: parseFloat(t.css("opacity"))
                    })
                },
                setTranslate: function(t, e) {
                    var n = "",
                        o = {};
                    if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o)
                },
                animate: function(t, e, o, i, a) {
                    var s, r = this;
                    n.isFunction(o) && (i = o, o = null), r.stop(t), s = r.getTranslate(t), t.on(f, function(c) {
                        (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (r.stop(t), n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, {
                            top: e.top,
                            left: e.left,
                            width: s.width * e.scaleX,
                            height: s.height * e.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== a && t.removeClass(e), n.isFunction(i) && i(c))
                    }), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function() {
                        t.trigger(f)
                    }, o + 33))
                },
                stop: function(t, e) {
                    t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                }
            }, n.fn.fancybox = function(t) {
                var e;
                return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, i) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, i), this
            }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
                n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: n(this)
                })
            }),
            function() {
                var t = null;
                r.on("mousedown mouseup focus blur", ".fancybox-button", function(e) {
                    switch (e.type) {
                        case "mousedown":
                            t = n(this);
                            break;
                        case "mouseup":
                            t = null;
                            break;
                        case "focusin":
                            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            n(".fancybox-button").removeClass("fancybox-focus")
                    }
                })
            }()
    }
}(window, document, jQuery),
function(t) {
    "use strict";
    var e = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        },
        n = function(e, n, o) {
            if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function(t, n) {
                e = e.replace("$" + t, n || "")
            }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
        };
    t(document).on("objectNeedsType.fb", function(o, i, a) {
        var s, r, c, l, d, u, f, p = a.src || "",
            h = !1;
        s = t.extend(!0, {}, e, a.opts.media), t.each(s, function(e, o) {
            if (c = p.match(o.matcher)) {
                if (h = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
                    d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");
                    for (var i = 0; i < d.length; ++i) {
                        var s = d[i].split("=", 2);
                        2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return l = t.extend(!0, {}, o.params, a.opts[e], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1
            }
        }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), t.extend(a, {
            type: h,
            src: p,
            origSrc: a.src,
            contentSource: f,
            contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
        })) : p && (a.type = a.opts.defaultType)
    });
    var o = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(t) {
            var e, n = this;
            if (this[t].loaded) return void setTimeout(function() {
                n.done(t)
            });
            this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                n[t].loaded = !0, n.done(t)
            } : e.onload = function() {
                n[t].loaded = !0, n.done(t)
            }, document.body.appendChild(e))
        },
        done: function(e) {
            var n, o, i;
            "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? i = new YT.Player(o.attr("id"), {
                events: {
                    onStateChange: function(t) {
                        0 == t.data && n.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (i = new Vimeo.Player(o), i.on("ended", function() {
                n.next()
            })))
        }
    };
    t(document).on({
        "afterShow.fb": function(t, e, n) {
            e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
        }
    })
}(jQuery),
function(t, e, n) {
    "use strict";
    var o = function() {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            }
        }(),
        i = function() {
            return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                t.clearTimeout(e)
            }
        }(),
        a = function(e) {
            var n = [];
            e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
            for (var o in e) e[o].pageX ? n.push({
                x: e[o].pageX,
                y: e[o].pageY
            }) : e[o].clientX && n.push({
                x: e[o].clientX,
                y: e[o].clientY
            });
            return n
        },
        s = function(t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        r = function(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
                if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        c = function(e) {
            var n = t.getComputedStyle(e)["overflow-y"],
                o = t.getComputedStyle(e)["overflow-x"],
                i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
            return i || a
        },
        l = function(t) {
            for (var e = !1;;) {
                if (e = c(t.get(0))) break;
                if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break
            }
            return e
        },
        d = function(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
        };
    d.prototype.destroy = function() {
        var t = this;
        t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
    }, d.prototype.ontouchstart = function(o) {
        var i = this,
            c = n(o.target),
            d = i.instance,
            u = d.current,
            f = u.$slide,
            p = u.$content,
            h = "touchstart" == o.type;
        if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
            i.realPoints = i.startPoints = a(o), i.startPoints.length && (u.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = p, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                top: 0,
                left: 0
            }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))))
        }
    }, d.prototype.onscroll = function(t) {
        var n = this;
        n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0)
    }, d.prototype.ontouchmove = function(t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void(e.canTap = !1) : (e.newPoints = a(t), void((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, d.prototype.onSwipe = function(e) {
        var a, s = this,
            r = s.instance,
            c = s.isSwiping,
            l = s.sliderStartPos.left || 0;
        if (!0 !== c) "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), s.sliderLastPos = {
            top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
            left: l
        }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function() {
            s.sliderLastPos && (n.each(s.instance.slides, function(t, e) {
                var o = e.pos - s.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
                })
            }), s.$container.addClass("fancybox-is-sliding"))
        });
        else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1, r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void(s.isScrolling = !0);
            r.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(r.slides, function(t, e) {
                var o, i;
                n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function(t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }), e.pos === r.current.pos && (s.sliderStartPos.top = o.top - i.top, s.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, {
                    top: o.top - i.top,
                    left: o.left - i.left
                })
            }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
        }
    }, d.prototype.onPan = function() {
        var t = this;
        if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)) return void(t.startPoints = t.newPoints);
        t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o(function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, d.prototype.limitMovement = function() {
        var t, e, n, o, i, a, s = this,
            r = s.canvasWidth,
            c = s.canvasHeight,
            l = s.distanceX,
            d = s.distanceY,
            u = s.contentStartPos,
            f = u.left,
            p = u.top,
            h = u.width,
            g = u.height;
        return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
            top: a,
            left: i
        }
    }, d.prototype.limitPosition = function(t, e, n, o) {
        var i = this,
            a = i.canvasWidth,
            s = i.canvasHeight;
        return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
            top: e,
            left: t
        }
    }, d.prototype.onZoom = function() {
        var e = this,
            a = e.contentStartPos,
            r = a.width,
            c = a.height,
            l = a.left,
            d = a.top,
            u = s(e.newPoints[0], e.newPoints[1]),
            f = u / e.startDistanceBetweenFingers,
            p = Math.floor(r * f),
            h = Math.floor(c * f),
            g = (r - p) * e.percentageOfImageAtPinchPointX,
            b = (c - h) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            y = m - e.centerPointStartX,
            x = v - e.centerPointStartY,
            w = l + (g + y),
            $ = d + (b + x),
            S = {
                top: $,
                left: w,
                scaleX: f,
                scaleY: f
            };
        e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && i(e.requestId), e.requestId = o(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, d.prototype.ontouchend = function(t) {
        var o = this,
            s = o.isSwiping,
            r = o.isPanning,
            c = o.isZooming,
            l = o.isScrolling;
        if (o.endPoints = a(t), o.dMs = Math.max((new Date).getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);
        o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l)
    }, d.prototype.endSwiping = function(t, e) {
        var o = this,
            i = !1,
            a = o.instance.group.length,
            s = Math.abs(o.distanceX),
            r = "x" == t && a > 1 && (o.dMs > 130 && s > 10 || s > 50);
        o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
            top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
            opacity: 0
        }, 200), i = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)), !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding")
    }, d.prototype.endPanning = function() {
        var t, e, o, i = this;
        i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, e = i.contentLastPos.top + 500 * i.velocityY), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 366))
    }, d.prototype.endZooming = function() {
        var t, e, o, i, a = this,
            s = a.instance.current,
            r = a.newWidth,
            c = a.newHeight;
        a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
            top: e,
            left: t,
            width: r,
            height: c,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.animate(a.$content, o, 150)))
    }, d.prototype.onTap = function(e) {
        var o, i = this,
            s = n(e.target),
            r = i.instance,
            c = r.current,
            l = e && a(e) || i.startPoints,
            d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
            u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
            f = function(t) {
                var o = c.opts[t];
                if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
                    case "close":
                        r.close(i.startEvent);
                        break;
                    case "toggleControls":
                        r.toggleControls();
                        break;
                    case "next":
                        r.next();
                        break;
                    case "nextOrClose":
                        r.group.length > 1 ? r.next() : r.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent))
                }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
            else if (s.is(".fancybox-slide")) o = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
                o = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
                f("dblclick" + o)
            } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function() {
                i.tapped = null, r.isAnimating || f("click" + o)
            }, 500) : f("click" + o);
            return this
        }
    }, n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new d(e))
    }).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var n = function(t) {
        this.instance = t, this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this,
                n = t.instance,
                o = n.group[n.currIndex].opts.slideShow;
            t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
        },
        set: function(t) {
            var n = this,
                o = n.instance,
                i = o.current;
            i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
                scaleX: 1
            }, i.opts.slideShow.speed), n.timer = setTimeout(function() {
                o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0)
            }, i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls())
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
        },
        start: function() {
            var t = this,
                e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var t = this,
                e = t.instance.current;
            t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        },
        "afterKeydown.fb": function(n, o, i, a, s) {
            var r = o && o.SlideShow;
            !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance(),
            o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set())
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        for (var e = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], n = {}, o = 0; o < e.length; o++) {
            var i = e[o];
            if (i && i[1] in t) {
                for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
                return n
            }
        }
        return !1
    }();
    if (n) {
        var o = {
            request: function(e) {
                e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                t[n.exitFullscreen]()
            },
            toggle: function(e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function() {
                return Boolean(t[n.fullscreenElement])
            },
            enabled: function() {
                return Boolean(t[n.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), e(t).on(n.fullscreenchange, function() {
            var t = o.isFullscreen(),
                n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })
    }
    e(t).on({
        "onInit.fb": function(t, e) {
            var i;
            if (!n) return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
            e && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                t.stopPropagation(), t.preventDefault(), o.toggle()
            }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle())
        },
        "beforeClose.fb": function(t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var n = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var o = function(t) {
        this.init(t)
    };
    e.extend(o.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this,
                n = t.group,
                o = 0;
            e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(o > 1)); i++);
            o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function() {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var t, o = this,
                i = o.instance,
                a = o.opts.parentEl,
                s = [];
            o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), o.$grid.on("click", "a", function() {
                i.jumpTo(e(this).attr("data-index"))
            })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, function(e, n) {
                t = n.thumb, t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(t) {
            var e, n, o = this,
                i = o.$list,
                a = o.$grid;
            o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = e.position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
                scrollTop: i.scrollTop() + n.top
            }, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function() {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            var n;
            e && !e.Thumbs && (n = new o(e), n.isActive && !0 === n.opts.autoStart && n.show())
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            var a = e && e.Thumbs;
            a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";

    function n(t) {
        var e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(t).replace(/[&<>"'`=\/]/g, function(t) {
            return e[t]
        })
    }
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", function() {
        var t, o, i = e.fancybox.getInstance(),
            a = i.current || null;
        a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
            src: i.translate(i, o),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(t, e) {
                    i.$refs.container.one("beforeClose.fb", function() {
                        t.close(null, 0)
                    }), e.$content.find(".fancybox-share__button").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function(t, e, n) {
    "use strict";

    function o() {
        var e = t.location.hash.substr(1),
            n = e.split("-"),
            o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
            i = n.join("-");
        return {
            hash: e,
            index: o < 1 ? 1 : o,
            gallery: i
        }
    }

    function i(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }

    function a(t) {
        var e, n;
        return !!t && (e = t.current ? t.current.opts : t.opts, "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n)
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    }), n(function() {
        !1 !== n.fancybox.defaults.hash && (n(e).on({
            "onInit.fb": function(t, e) {
                var n, i;
                !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, o, i, s) {
                var r;
                i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function() {
                    "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function(n, o, i) {
                i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null)
            }
        }), n(t).on("hashchange.fb", function() {
            var t = o(),
                e = null;
            n.each(n(".fancybox-container").get().reverse(), function(t, o) {
                var i = n(o).data("FancyBox");
                if (i && i.currentHash) return e = i, !1
            }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t)
        }), setTimeout(function() {
            n.fancybox.getInstance() || i(o())
        }, 50))
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, e, o) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var o = e.current,
                    i = (new Date).getTime();
                e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery);;
(function($) {
    "use strict";
    var methods = (function() {
        var c = {
                bcClass: 'sf-breadcrumb',
                menuClass: 'sf-js-enabled',
                anchorClass: 'sf-with-ul',
                menuArrowClass: 'sf-arrows'
            },
            ios = (function() {
                var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                if (ios) {
                    $('html').css('cursor', 'pointer').on('click', $.noop);
                }
                return ios;
            })(),
            wp7 = (function() {
                var style = document.documentElement.style;
                return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
            })(),
            toggleMenuClasses = function($menu, o) {
                var classes = c.menuClass;
                if (o.cssArrows) {
                    classes += ' ' + c.menuArrowClass;
                }
                $menu.toggleClass(classes);
            },
            setPathToCurrent = function($menu, o) {
                return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + ' ' + c.bcClass).filter(function() {
                    return ($(this).children(o.popUpSelector).hide().show().length);
                }).removeClass(o.pathClass);
            },
            toggleAnchorClass = function($li) {
                $li.children('a').toggleClass(c.anchorClass);
            },
            toggleTouchAction = function($menu) {
                var touchAction = $menu.css('ms-touch-action');
                touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
                $menu.css('ms-touch-action', touchAction);
            },
            applyHandlers = function($menu, o) {
                var targets = 'li:has(' + o.popUpSelector + ')';
                if ($.fn.hoverIntent && !o.disableHI) {
                    $menu.hoverIntent(over, out, targets);
                } else {
                    $menu.on('mouseenter.superfish', targets, over).on('mouseleave.superfish', targets, out);
                }
                var touchevent = 'MSPointerDown.superfish';
                if (!ios) {
                    touchevent += ' touchend.superfish';
                }
                if (wp7) {
                    touchevent += ' mousedown.superfish';
                }
                $menu.on('focusin.superfish', 'li', over).on('focusout.superfish', 'li', out).on(touchevent, 'a', o, touchHandler);
            },
            touchHandler = function(e) {
                var $this = $(this),
                    $ul = $this.siblings(e.data.popUpSelector);
                if ($ul.length > 0 && $ul.is(':hidden')) {
                    $this.one('click.superfish', false);
                    if (e.type === 'MSPointerDown') {
                        $this.trigger('focus');
                    } else {
                        $.proxy(over, $this.parent('li'))();
                    }
                }
            },
            over = function() {
                var $this = $(this),
                    o = getOptions($this);
                if ($(this).parents('.megamenu').length > 0) return;
                clearTimeout(o.sfTimer);
                $this.siblings().superfish('hide').end().superfish('show');
            },
            out = function() {
                var $this = $(this),
                    o = getOptions($this);
                if (ios) {
                    $.proxy(close, $this, o)();
                } else {
                    clearTimeout(o.sfTimer);
                    o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
                }
            },
            close = function(o) {
                o.retainPath = ($.inArray(this[0], o.$path) > -1);
                this.superfish('hide');
                if (!this.parents('.' + o.hoverClass).length) {
                    o.onIdle.call(getMenu(this));
                    if (o.$path.length) {
                        $.proxy(over, o.$path)();
                    }
                }
            },
            getMenu = function($el) {
                return $el.closest('.' + c.menuClass);
            },
            getOptions = function($el) {
                return getMenu($el).data('sf-options');
            };
        return {
            hide: function(instant) {
                if (this.length) {
                    var $this = this,
                        o = getOptions($this);
                    if (!o) {
                        return this;
                    }
                    if ($(this).hasClass('menu-item-over') && $(this).hasClass('megamenu')) {
                        return true;
                    }
                    var not = (o.retainPath === true) ? o.$path : '',
                        $ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
                        speed = o.speedOut;
                    if (instant) {
                        $ul.show();
                        speed = 0;
                    }
                    o.retainPath = false;
                    o.onBeforeHide.call($ul);
                    if (o.dropdownStyle == 'minimal') {
                        var $this = $(this);
                        o.onHide.call($this);
                    } else {
                        $ul.stop(true, true).animate(o.animationOut, speed, function() {
                            var $this = $(this);
                            o.onHide.call($this);
                        });
                    }
                    if ($(this).parents('.megamenu').length > 0) return;
                    if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0) {
                        if ($('#header-outer.scrolled-down').length == 0 && $('#header-outer.small-nav').length == 0 && $('#header-outer.detached').length == 0 && $('#header-outer.fixed-menu').length == 0) {
                            $('#header-outer').addClass('transparent');
                        }
                        if ($('#header-outer[data-permanent-transparent="1"][data-transparent-header="true"]').length > 0) {
                            $('#header-outer').addClass('transparent');
                        }
                    }
                }
                return this;
            },
            show: function() {
                if ($(this).parents('.megamenu').length > 0) return;
                var o = getOptions(this);
                if (!o) {
                    return this;
                }
                var $this = this.addClass(o.hoverClass),
                    $ul = $this.children(o.popUpSelector);
                if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $(this).hasClass('megamenu') && $('#header-outer').attr('data-transparent-header') == 'true') {
                    $('#header-outer').addClass('no-transition');
                    $('#header-outer').removeClass('transparent');
                }
                o.onBeforeShow.call($ul);
                if (!$($ul).parents('li').hasClass('megamenu') && !$($ul).parents('ul').hasClass('sub-menu') && $ul.offset()) {
                    $ul.addClass('temp-hidden-display');
                    var docW = $("#top .container").width();
                    var elm = $ul;
                    var off = elm.offset();
                    var l = off.left - ($(window).width() - docW) / 2;
                    var w = elm.width();
                    var isEntirelyVisible = (l + w <= $(window).width() - 100);
                    if (!isEntirelyVisible) {
                        $ul.parents('li').addClass('edge');
                    } else {
                        $ul.parents('li').removeClass('edge');
                    }
                    $ul.removeClass('temp-hidden-display');
                }
                if (o.dropdownStyle == 'minimal') {
                    o.onShow.call($ul);
                } else {
                    $ul.stop(true, true).animate(o.animation, o.speed, function() {
                        o.onShow.call($ul);
                    });
                }
                if ($ul.length > 0 && $ul.parents('.sub-menu').length > 0 && $ul.parents('.sf-menu').length > 0) {
                    if ($ul.offset().left + $ul.outerWidth() > $(window).width()) {
                        $ul.addClass('on-left-side');
                        $ul.find('ul').addClass('on-left-side');
                    }
                }
                return this;
            },
            destroy: function() {
                return this.each(function() {
                    var $this = $(this),
                        o = $this.data('sf-options'),
                        $hasPopUp;
                    if (!o) {
                        return false;
                    }
                    $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    clearTimeout(o.sfTimer);
                    toggleMenuClasses($this, o);
                    toggleAnchorClass($hasPopUp);
                    toggleTouchAction($this);
                    $this.off('.superfish').off('.hoverIntent');
                    $hasPopUp.children(o.popUpSelector).attr('style', function(i, style) {
                        return style.replace(/display[^;]+;?/g, '');
                    });
                    o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
                    $this.find('.' + o.hoverClass).removeClass(o.hoverClass);
                    o.onDestroy.call($this);
                    $this.removeData('sf-options');
                });
            },
            init: function(op) {
                return this.each(function() {
                    var $this = $(this);
                    if ($this.data('sf-options')) {
                        return false;
                    }
                    var o = $.extend({}, $.fn.superfish.defaults, op),
                        $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    o.$path = setPathToCurrent($this, o);
                    $this.data('sf-options', o);
                    toggleMenuClasses($this, o);
                    toggleAnchorClass($hasPopUp);
                    toggleTouchAction($this);
                    applyHandlers($this, o);
                    $hasPopUp.not('.' + c.bcClass).superfish('hide', true);
                    o.onInit.call(this);
                });
            }
        };
    })();
    $.fn.superfish = function(method, args) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            return $.error('Method ' + method + ' does not exist on jQuery.fn.superfish');
        }
    };
    $.fn.superfish.defaults = {
        popUpSelector: 'ul,.sf-mega',
        hoverClass: 'sfHover',
        pathClass: 'overrideThisToUse',
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: 'show'
        },
        animationOut: {
            opacity: 'hide'
        },
        speed: 'normal',
        speedOut: 'fast',
        cssArrows: true,
        disableHI: false,
        onInit: $.noop,
        onBeforeShow: $.noop,
        onShow: $.noop,
        onBeforeHide: $.noop,
        onHide: $.noop,
        onIdle: $.noop,
        onDestroy: $.noop,
        dropdownStyle: ($('body[data-dropdown-style="minimal"]').length > 0) ? 'minimal' : 'classic'
    };
    $.fn.extend({
        hideSuperfishUl: methods.hide,
        showSuperfishUl: methods.show
    });
})(jQuery);
(function($, window, document) {
    "use strict";
    var $window = $(window),
        $body = $('body'),
        $offCanvasEl = $('#slide-out-widget-area'),
        $offCanvasBG = $('#slide-out-widget-area-bg'),
        $headerOuterEl = $('#header-outer'),
        $headerSecondaryEl = $('#header-secondary-outer'),
        $searchButtonEl = $('#header-outer #search-btn a'),
        $wpAdminBar = $('#wpadminbar'),
        $loadingScreenEl = $('#ajax-loading-screen'),
        $bodyBorderTop = $('.body-border-top'),
        $pageHeaderBG = $('#page-header-bg'),
        $bodyBorderWidth = ($('.body-border-right').length > 0) ? $('.body-border-right').width() : 0,
        $logoHeight = ($headerOuterEl.is('[data-logo-height]')) ? parseInt($headerOuterEl.attr('data-logo-height')) : 30,
        headerPadding = ($headerOuterEl.is('[data-padding]')) ? parseInt($headerOuterEl.attr('data-padding')) : 28,
        logoShrinkNum = ($headerOuterEl.is('[data-shrink-num]')) ? $headerOuterEl.attr('data-shrink-num') : 6,
        condenseHeaderLayout = ($headerOuterEl.is('[data-condense="true"]')) ? true : false,
        usingLogoImage = ($headerOuterEl.is('[data-using-logo="1"]')) ? true : false,
        headerResize = ($headerOuterEl.is('[data-header-resize="1"]')) ? true : false,
        headerHideUntilNeeded = ($body.is('[data-hhun]')) ? $body.attr('data-hhun') : '',
        $animationEasing = ($body.is('[data-cae]') && $body.attr('data-cae') !== 'swing') ? $body.attr('data-cae') : 'easeOutCubic',
        $animationDuration = ($body.is('[data-cad]')) ? $body.attr('data-cad') : '650',
        $portfolio_containers = [],
        $svgIcons = [],
        $nectarCustomSliderRotate = [],
        $flickitySliders = [],
        flickityDragArr = [],
        viewIndicatorArr = [],
        iconMouseFollowArr = [],
        $fsProjectSliderArr = [],
        $wooFlickityCarousels = [],
        $liquidBG_EL = [],
        $testimonialSliders = [],
        $mouseParallaxScenes = [],
        $nectarMasonryBlogs = [],
        $standAnimatedColTimeout = [],
        $animatedSVGIconTimeout = [],
        $projectCarouselSliderArr = [],
        $nectarPostGridArr = [],
        $tabbedClickCount = 0,
        $fullscreenSelector = '',
        $bodyBorderHeaderColorMatch = false,
        nectarBoxRoll = {
            animating: 'false',
            perspect: 'not-rolled'
        },
        $nectarFullPage = {
            $usingFullScreenRows: false
        },
        $svgResizeTimeout, $bodyBorderSizeToRemove;
    if ($bodyBorderTop.length > 0) {
        if ($bodyBorderTop.css('background-color') == '#ffffff' && $body.attr('data-header-color') == 'light' || $bodyBorderTop.css('background-color') == 'rgb(255, 255, 255)' && $body.attr('data-header-color') == 'light' || $bodyBorderTop.css('background-color') == $headerOuterEl.attr('data-user-set-bg')) {
            $bodyBorderHeaderColorMatch = true;
        }
    }
    var nectarDOMInfo = {
        usingMobileBrowser: (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) ? true : false,
        usingFrontEndEditor: (typeof window.vc_iframe === 'undefined') ? false : true,
        getWindowSize: function() {
            nectarDOMInfo.winH = window.innerHeight;
            nectarDOMInfo.winW = window.innerWidth;
            nectarDOMInfo.adminBarHeight = ($wpAdminBar.length > 0) ? $wpAdminBar.height() : 0;
            nectarDOMInfo.secondaryHeaderHeight = ($headerSecondaryEl.length > 0 && $headerSecondaryEl.css('display') != 'none') ? $headerSecondaryEl.outerHeight() : 0;
        },
        scrollTop: 0,
        clientX: 0,
        clientY: 0,
        scrollPosMouse: function() {
            return $window.scrollTop();
        },
        scrollPosRAF: function() {
            nectarDOMInfo.scrollTop = $window.scrollTop();
            requestAnimationFrame(nectarDOMInfo.scrollPosRAF);
        },
        bindEvents: function() {
            if (!nectarDOMInfo.usingMobileBrowser) {
                $window.on('scroll', function() {
                    nectarDOMInfo.scrollTop = nectarDOMInfo.scrollPosMouse();
                });
            } else {
                requestAnimationFrame(nectarDOMInfo.scrollPosRAF);
            }
            document.addEventListener("mousemove", function(e) {
                nectarDOMInfo.clientX = e.clientX;
                nectarDOMInfo.clientY = e.clientY;
            });
            $window.on('resize', nectarDOMInfo.getWindowSize);
        },
        init: function() {
            $wpAdminBar = $('#wpadminbar');
            this.getWindowSize();
            this.scrollTop = this.scrollPosMouse();
            this.bindEvents();
            this.usingFrontEndEditor = (typeof window.vc_iframe === 'undefined') ? false : true;
        }
    };

    function smartResizeInit() {
        fullWidthContentColumns();
        parallaxRowsBGCals();
        headerSpace();
        OCM_overflowState();
        showOnLeftSubMenu();
    }

    function resizeInit() {
        fullWidthSections();
        fullWidthContentColumns();
        addOrRemoveSF();
        responsiveVideoIframes();
        if (!nectarDOMInfo.usingMobileBrowser) {
            parallaxRowsBGCals();
        }
    }

    function flexsliderInit() {
        $('.flex-gallery').each(function() {
            if (!$().flexslider) {
                return;
            }
            var $that = $(this);
            imagesLoaded($(this), function() {
                $that.flexslider({
                    animation: 'fade',
                    smoothHeight: false,
                    animationSpeed: 500,
                    useCSS: false,
                    touch: true
                });
                $('.flex-gallery .flex-direction-nav li a.flex-next').html('<i class="fa fa-angle-right"></i>');
                $('.flex-gallery .flex-direction-nav li a.flex-prev').html('<i class="fa fa-angle-left"></i>');
            });
        });
    }

    function NectarIconMouseFollow($el, iconType) {
        this.lastX = 0;
        this.lastY = 0;
        this.$el = $el;
        this.iconType = iconType;
        this.timeout = false;
        this.overEl = false;
        this.$dragEl = '';
        this.$viewEl = '';
        this.$closeEl = '';
        this.createMarkup();
        this.mouseBind();
    }
    NectarIconMouseFollow.prototype.createMarkup = function() {
        if (this.iconType === 'horizontal-movement') {
            if ($('.nectar-drag-indicator').length == 0) {
                $('body').append('<div class="nectar-drag-indicator"><span><i class="fa fa-angle-left"></i><i class="fa fa-angle-right"></i></span></div>');
                this.$dragEl = $('.nectar-drag-indicator');
                this.dragRAF();
            } else {
                this.$dragEl = $('.nectar-drag-indicator');
            }
        }
        if (this.iconType === 'view-indicator') {
            if ($('.nectar-view-indicator').length == 0) {
                $('body').append('<div class="nectar-view-indicator"><div class="color-circle"></div><span></span></div>');
                $('.nectar-view-indicator span').text($('.nectar-post-grid').attr('data-indicator-text'));
                this.$viewEl = $('.nectar-view-indicator');
                this.viewRAF();
            } else {
                this.$viewEl = $('.nectar-view-indicator');
            }
        }
        if (this.iconType === 'close-indicator') {
            if ($('.nectar-view-indicator').length == 0) {
                var $usingBoxedClass = ($('body > #boxed').length > 0) ? 'in-boxed' : '';
                $('body').append('<div class="nectar-close-indicator ' + $usingBoxedClass + '"><div class="inner"></div></div>');
                this.$closeEl = $('.nectar-close-indicator');
                this.closeRAF();
            } else {
                this.$closeEl = $('.nectar-close-indicator');
            }
        }
    }
    NectarIconMouseFollow.prototype.mouseBind = function() {
        var that = this;
        if (this.iconType === 'horizontal-movement') {
            that.$el.find('.flickity-viewport').on('mouseenter', function() {
                that.$dragEl.addClass('visible');
            });
            that.$el.find('.flickity-viewport').on('mouseleave', function() {
                that.$dragEl.removeClass('visible');
            });
        } else if (this.iconType === 'close-indicator') {
            $('body').on('click', '.team-member[data-style*="bio_fullscreen"]', function() {
                if ($('.nectar_team_member_overlay:not(.open)').length > 0) {
                    return;
                }
                that.$closeEl.addClass('visible');
                that.$closeEl.find('.inner').addClass('visible');
            });
            $('body').on('click', '.nectar_team_member_overlay:not(.animating)', function() {
                that.$closeEl.removeClass('visible');
                that.$closeEl.find('.inner').removeClass('visible');
            });
            $('body').on('mouseenter', '.nectar_team_member_overlay .bottom_meta a', function() {
                that.$closeEl.removeClass('visible');
            });
            $('body').on('mouseleave', '.nectar_team_member_overlay .bottom_meta a', function() {
                that.$closeEl.addClass('visible');
            });
        } else if (this.iconType === 'view-indicator') {
            var $color = that.$el.attr('data-indicator-color');
            var $style = that.$el.attr('data-indicator-style');
            that.$el.find('.nectar-post-grid-item').off();
            that.$el.find('.nectar-post-grid-item').on('mouseenter', function() {
                that.$viewEl.addClass('visible');
                that.$viewEl.attr('class', function(i, c) {
                    return c.replace(/(^|\s)style-\S+/g, '');
                });
                that.$viewEl.addClass('style-' + $style);
                if ($style !== 'see-through') {
                    that.$viewEl.find('.color-circle').css('background-color', $color);
                }
                clearTimeout(that.timeout);
            });
            that.$el.find('.nectar-post-grid-item').on('mouseleave', function() {
                that.timeout = setTimeout(function() {
                    that.$viewEl.removeClass('visible');
                }, 100);
            });
            that.$el.find('.nectar-post-grid-item .meta-category a').on('mouseenter', function() {
                that.$viewEl.removeClass('visible');
            });
            that.$el.find('.nectar-post-grid-item .meta-category a').on('mouseleave', function() {
                that.$viewEl.addClass('visible');
            });
        }
    };
    NectarIconMouseFollow.prototype.dragRAF = function() {
        this.lastY = linearInterpolate(this.lastY, nectarDOMInfo.clientY, 0.21);
        this.lastX = linearInterpolate(this.lastX, nectarDOMInfo.clientX, 0.21);
        this.$dragEl.css({
            'transform': 'translateX(' + this.lastX + 'px) translateY(' + this.lastY + 'px)'
        });
        requestAnimationFrame(this.dragRAF.bind(this));
    };
    NectarIconMouseFollow.prototype.viewRAF = function() {
        this.lastY = linearInterpolate(this.lastY, nectarDOMInfo.clientY, 0.21);
        this.lastX = linearInterpolate(this.lastX, nectarDOMInfo.clientX, 0.21);
        this.$viewEl.css({
            'transform': 'translateX(' + this.lastX + 'px) translateY(' + this.lastY + 'px)'
        });
        requestAnimationFrame(this.viewRAF.bind(this));
    };
    NectarIconMouseFollow.prototype.closeRAF = function() {
        this.lastY = linearInterpolate(this.lastY, nectarDOMInfo.clientY, 0.21);
        this.lastX = linearInterpolate(this.lastX, nectarDOMInfo.clientX, 0.21);
        this.$closeEl.css({
            'transform': 'translateX(' + this.lastX + 'px) translateY(' + this.lastY + 'px)'
        });
        requestAnimationFrame(this.closeRAF.bind(this));
    };

    function flickityLazyCalcs() {
        $('.wpb_gallery_slidesflickity_static_height_style .cell[data-lazy="true"]').each(function() {
            $(this).css({
                'height': '',
                'width': ''
            });
            var heightAttr = parseInt($(this).find('img').attr('height'));
            var widthAttr = parseInt($(this).find('img').attr('width'));
            var dimensions = calculateAspectRatio(widthAttr, heightAttr, 2000, parseInt($(this).find('img').height()));
            $(this).css({
                'height': dimensions.height + 'px',
                'width': dimensions.width + 'px'
            });
        });
    }

    function flickityLazyInit() {
        if ($('.wpb_gallery_slidesflickity_static_height_style .cell[data-lazy="true"]').length > 0) {
            flickityLazyCalcs();
            $window.on('smartresize', flickityLazyCalcs);
        }
    }

    function flickityInit() {
        if ($('.nectar-flickity:not(.masonry)').length == 0) {
            return false;
        }
        $flickitySliders = [];
        flickityDragArr = [];
        $('.nectar-flickity:not(.masonry)').each(function(i) {
            $(this).removeClass(function(index, className) {
                return (className.match(/(^|\s)instance-\S+/g) || []).join(' ');
            });
            $(this).addClass('instance-' + i);
            var $freeScrollBool = ($(this).is('[data-free-scroll]') && $(this).attr('data-free-scroll') == 'true') ? true : false,
                $groupCellsBool = true,
                $flickContainBool = true,
                $flcikAttr = 0.025,
                $paginationBool = false,
                $nextPrevArrowBool = true,
                $flickCellAlign = 'center';
            if ($(this).is('[data-format="fixed_text_content_fullwidth"]')) {
                $flickCellAlign = 'left';
                $groupCellsBool = false;
                $flickContainBool = false;
                $flcikAttr = 0.02;
            }
            if ($freeScrollBool == true) {
                $groupCellsBool = false;
            }
            if ($(this).attr('data-controls').length > 0 && $(this).attr('data-controls') == 'next_prev_arrows' || $(this).attr('data-controls').length > 0 && $(this).attr('data-controls') == 'next_prev_arrows_overlaid') {
                $paginationBool = false;
                $nextPrevArrowBool = true;
            } else {
                $paginationBool = true;
                $nextPrevArrowBool = false;
            }
            if ($(this).attr('data-controls').length > 0 && $(this).attr('data-controls') == 'none') {
                $paginationBool = false;
                $nextPrevArrowBool = false;
            }
            var $flickity_autoplay = false;
            if ($(this).is('[data-autoplay]') && $(this).attr('data-autoplay') == 'true') {
                $flickity_autoplay = true;
                if ($(this).is('[data-autoplay-dur]') && $(this).attr('data-autoplay-dur').length > 0) {
                    if (parseInt($(this).attr('data-autoplay-dur')) > 100 && parseInt($(this).attr('data-autoplay-dur')) < 30000) {
                        $flickity_autoplay = parseInt($(this).attr('data-autoplay-dur'));
                    }
                }
            }
            var $that = $(this);
            var $frontEndEditorDrag = ($('body.vc_editor').length > 0) ? false : true;
            var $frontEndEditorPause = ($('body.vc_editor').length > 0) ? true : false;
            var $arrowShape = '';
            var $wrapAround = ($(this).is('[data-wrap]') && $(this).attr('data-wrap') == 'no-wrap') ? false : true;
            var $lazyload = ($(this).find('img[data-flickity-lazyload]')) ? 1 : false;
            if ($(this).find('img[data-flickity-lazyload]') && $(this).is('[data-overflow="visible"]') && $(this).is('[data-wrap="no-wrap"]')) {
                $lazyload = 2;
            }
            if ($(this).attr('data-controls').length > 0 && $(this).attr('data-controls') == 'next_prev_arrows_overlaid' || $(this).attr('data-controls').length > 0 && $(this).attr('data-controls') == 'touch_total') {
                $arrowShape = {
                    x0: 10,
                    x1: 60,
                    y1: 50,
                    x2: 70,
                    y2: 40,
                    x3: 30
                }
            } else {
                $arrowShape = {
                    x0: 20,
                    x1: 70,
                    y1: 30,
                    x2: 70,
                    y2: 25,
                    x3: 70
                }
            }
            $flickitySliders[i] = new Flickity('.nectar-flickity.instance-' + i, {
                contain: $flickContainBool,
                draggable: $frontEndEditorDrag,
                lazyLoad: $lazyload,
                imagesLoaded: true,
                percentPosition: true,
                cellAlign: $flickCellAlign,
                groupCells: $groupCellsBool,
                prevNextButtons: $nextPrevArrowBool,
                freeScroll: $freeScrollBool,
                pageDots: $paginationBool,
                resize: true,
                selectedAttraction: $flcikAttr,
                autoPlay: $flickity_autoplay,
                pauseAutoPlayOnHover: $frontEndEditorPause,
                setGallerySize: true,
                wrapAround: $wrapAround,
                accessibility: false,
                arrowShape: $arrowShape
            });
            if ($(this).is('[data-controls="touch_total"]')) {
                if ($(this).find('.visualized-total').length == 0) {
                    if ($(this).parents('.full-width-content').length > 0 && $(this).parents('.vc_col-sm-12').length > 0) {
                        $(this).append('<div class="container normal-container"><div class="visualized-total"><span></span></div></div>');
                    } else {
                        $(this).append('<div class="visualized-total"><span></span></div>');
                    }
                }
                if (!nectarDOMInfo.usingMobileBrowser) {
                    flickityDragArr[i] = new NectarIconMouseFollow($(this), 'horizontal-movement');
                    $flickitySliders[i].on('dragMove', function(event, pointer) {
                        nectarDOMInfo.clientY = pointer.clientY;
                        nectarDOMInfo.clientX = pointer.clientX;
                    });
                }
                var $totalImgs = $(this).find('.flickity-page-dots li').length;
                var $totalIndicator = $(this).find('.visualized-total span');
                var $totalPosition = 1;
                var $totalWidth = $(this).find('.visualized-total').width();
                $window.on('smartresize', function() {
                    setTimeout(function() {
                        $totalImgs = $that.find('.flickity-page-dots li').length;
                        $totalWidth = $that.find('.visualized-total').width();
                        $totalPosition = ($totalWidth / $totalImgs) * $that.find('.flickity-page-dots .is-selected').index();
                        $totalIndicator.css('width', 100 / $totalImgs + '%');
                        $totalIndicator.css({
                            'x': $totalPosition + 'px'
                        });
                    }, 200);
                });
                setTimeout(function() {
                    $totalImgs = $that.find('.flickity-page-dots li').length;
                    $totalWidth = $that.find('.visualized-total').width();
                    $totalIndicator.css('width', 100 / $totalImgs + '%');
                }, 200);
                $flickitySliders[i].on('change', function(event, progress) {
                    $totalPosition = ($totalWidth / $totalImgs) * $that.find('.flickity-page-dots .is-selected').index();
                    $totalIndicator.css({
                        'x': $totalPosition + 'px'
                    });
                });
            }
            if ($(this).is('[data-format="fixed_text_content_fullwidth"]') && !nectarDOMInfo.usingFrontEndEditor) {
                var $onMobileBrowser = nectarDOMInfo.usingMobileBrowser;
                $flickitySliders[i].on('scroll', function() {
                    if ($onMobileBrowser) {
                        return;
                    }
                    var $flkSlideWidth = $that.find('.cell').outerWidth() + 25,
                        $leftHeaderSize = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 275 : 0,
                        $extraWindowSpace = (($window.width() + $leftHeaderSize) - $that.parents('.main-content').width()) / 2;
                    $extraWindowSpace += parseInt($that.css('margin-left')) + 2;
                    $flickitySliders[i].slides.forEach(function(slide, j) {
                        var $scaleAmt = 1,
                            $translateXAmt = 0,
                            $rotateAmt = 0,
                            $slideZIndex = 10,
                            $opacityAmt = 1,
                            $slideOffset = $(slide.cells[0].element).offset().left,
                            flkInstanceSlide = $('.nectar-flickity.instance-' + i + ' .cell:nth-child(' + (j + 1) + ')');
                        if ($slideOffset - $extraWindowSpace < 0 && $slideOffset - $extraWindowSpace > $flkSlideWidth * -1) {
                            $scaleAmt = 1 + (($slideOffset - $extraWindowSpace) / 1500);
                            $opacityAmt = 1 + (($slideOffset - $extraWindowSpace + 70) / 550);
                            $translateXAmt = (($slideOffset - $extraWindowSpace)) * -1;
                            $rotateAmt = (($slideOffset - $extraWindowSpace) / 25) * -1;
                        } else {
                            $scaleAmt = 1;
                            $opacityAmt = 1;
                            $translateXAmt = 0;
                            $rotateAmt = 0;
                        }
                        if ($slideOffset + 5 - $extraWindowSpace < 0 && $slideOffset - $extraWindowSpace > $flkSlideWidth * -1) {
                            $slideZIndex = 5;
                        } else {
                            $slideZIndex = 10;
                        }
                        flkInstanceSlide.css({
                            'z-index': $slideZIndex
                        });
                        flkInstanceSlide.find('.inner-wrap-outer').css({
                            'transform': 'perspective(800px) translateX(' + $translateXAmt + 'px) rotateY(' + $rotateAmt + 'deg) translateZ(0)',
                            'opacity': $opacityAmt
                        });
                        flkInstanceSlide.find('.inner-wrap').css({
                            'transform': 'scale(' + $scaleAmt + ') translateZ(0)'
                        });
                    });
                });
            }
            var $removeHiddenTimeout;
            var $removeMovingTimeout;
            $flickitySliders[i].on('dragStart', function() {
                clearTimeout($removeHiddenTimeout);
                clearTimeout($removeMovingTimeout);
                $that.addClass('is-dragging');
                $that.addClass('is-moving');
                $that.find('.flickity-prev-next-button').addClass('hidden');
            });
            $flickitySliders[i].on('dragEnd', function() {
                $that.removeClass('is-dragging');
                $removeHiddenTimeout = setTimeout(function() {
                    $that.removeClass('is-moving');
                    $that.find('.flickity-prev-next-button').removeClass('hidden');
                }, 600);
                $removeMovingTimeout = setTimeout(function() {
                    $that.removeClass('is-moving');
                }, 300);
            });
            $('.flickity-prev-next-button').on('click', function() {
                clearTimeout($removeHiddenTimeout);
                $(this).parents('.nectar-flickity').find('.flickity-prev-next-button').addClass('hidden');
                $removeHiddenTimeout = setTimeout(function() {
                    $that.find('.flickity-prev-next-button').removeClass('hidden');
                }, 600);
            });
            if ($that.hasClass('nectar-carousel')) {
                imagesLoaded($that, function() {
                    nectarCarouselFlkEH($that);
                });
            }
        });
        var $usingNectarCarouselFlk = ($('.nectar-carousel.nectar-flickity:not(.masonry)').length > 0) ? true : false;
        if ($usingNectarCarouselFlk) {
            $window.on('resize', setNectarCarouselFlkEH);
        }
    }

    function setNectarCarouselFlkEH() {
        $('.nectar-carousel.nectar-flickity:not(.masonry)').each(function() {
            nectarCarouselFlkEH($(this));
        });
    }

    function nectarCarouselFlkEH($slider_instance) {
        var $tallestSlideCol = 0;
        $slider_instance.find('.flickity-slider > .cell').css('height', 'auto');
        $slider_instance.find('.flickity-slider > .cell').each(function() {
            if ($(this).height() > $tallestSlideCol) {
                $tallestSlideCol = $(this).height();
            }
        });
        if ($tallestSlideCol < 10) {
            $tallestSlideCol = 'auto';
        }
        $slider_instance.find('.flickity-slider > .cell').css('height', $tallestSlideCol + 'px');
    }

    function twentytwentyInit() {
        $('.twentytwenty-container').each(function() {
            var $that = $(this);
            if ($that.find('.twentytwenty-handle').length == 0) {
                $(this).imagesLoaded(function() {
                    $that.twentytwenty();
                });
            }
        });
    }

    function initSF() {
        addOrRemoveSF();
        if ($('body[data-header-format="left-header"]').length == 0) {
            var $disableHI;
            if (!($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0)) {
                $disableHI = true;
            } else {
                $disableHI = false;
            }
            $(".sf-menu:not(.buttons)").superfish({
                delay: 650,
                speed: 'fast',
                disableHI: $disableHI,
                speedOut: 'fast',
                animation: {
                    opacity: 'show'
                }
            });
            $('#header-outer .sf-menu.buttons li.menu-item').on('mouseover', function() {
                $(this).addClass('sfHover');
            });
            $('#header-outer .sf-menu.buttons li.menu-item').on('mouseleave', function() {
                var $that = $(this);
                if ($that.is('.menu-item-has-children')) {
                    setTimeout(function() {
                        if (!$that.is(':hover')) {
                            $that.removeClass('sfHover');
                        }
                    }, 200);
                } else {
                    $that.removeClass('sfHover');
                }
            });
            $('#header-secondary-outer li.megamenu, .sf-menu.buttons li.megamenu').removeClass('megamenu');
            $('#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul').each(function() {
                if ($(this).offset().left + $(this).outerWidth() > $window.width()) {
                    $(this).addClass('on-left-side');
                    $(this).find('ul').addClass('on-left-side');
                }
            });
            $('body:not([data-header-format="left-header"]) header#top nav > ul > li.megamenu > ul > li > ul > li:has("> ul")').addClass('has-ul');
            if ($('body[data-megamenu-width="full-width"]').length > 0 && $('ul.sub-menu').length > 0) {
                megamenuFullwidth();
                $window.on('smartresize', megamenuFullwidth);
                $('header#top nav > ul > li.megamenu > .sub-menu').css('box-sizing', 'content-box');
            }
            $('header#top nav > ul.sf-menu > li.menu-item').on('mouseenter', function() {
                $(this).addClass('menu-item-over');
            });
            $('header#top nav > ul.sf-menu > li.menu-item').on('mouseleave', function() {
                $(this).removeClass('menu-item-over');
            });
            $('header#top nav .megamenu .sub-menu a.sf-with-ul .sf-sub-indicator, header#top .megamenu .sub-menu a .sf-sub-indicator').remove();
            $('header#top nav > ul > li.megamenu > ul.sub-menu > li > a').each(function() {
                if ($(this).text() == '-' || $(this).text() == '–' || $(this).parent().hasClass('hide-title')) {
                    $(this).remove();
                }
            });
        }
        if (nectarDOMInfo.usingMobileBrowser && $('#header-outer[data-remove-fixed="1"]').length == 0) {
            $body.attr('data-hhun', '0');
        }
    }

    function megamenuFullwidth() {
        var $windowWidth = $window.width();
        var $headerContainerWidth = $('header#top > .container').width();
        $('header#top nav > ul > li.megamenu > .sub-menu').css({
            'padding-left': ($windowWidth - $headerContainerWidth) / 2 + 'px',
            'padding-right': ($windowWidth + 2 - $headerContainerWidth) / 2 + 'px',
            'width': $headerContainerWidth,
            'left': '-' + ($windowWidth - $headerContainerWidth) / 2 + 'px'
        });
    }

    function addOrRemoveSF() {
        if (nectarDOMInfo.winW < 1000 && $body.attr('data-responsive') == '1') {
            $body.addClass('mobile');
            $('header#top nav').css('display', 'none');
        } else {
            $body.removeClass('mobile');
            $('header#top nav').css('display', '');
            $('.slide-out-widget-area-toggle #toggle-nav .lines-button').removeClass('close');
        }
    }

    function showOnLeftSubMenu() {
        $('#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul').each(function() {
            $(this).removeClass('on-left-side');
            if ($(this).offset().left + $(this).outerWidth() > $window.width()) {
                $(this).addClass('on-left-side');
                $(this).find('ul').addClass('on-left-side');
            } else {
                $(this).removeClass('on-left-side');
                $(this).find('ul').removeClass('on-left-side');
            }
        });
    }

    function standardCarouselInit() {
        if ($('.carousel').length == 0) {
            return;
        }
        if (typeof SalientRecentProjectsCarousel !== 'undefined') {
            $('ul.carousel.portfolio-items').each(function(i) {
                $projectCarouselSliderArr[i] = new SalientRecentProjectsCarousel($(this));
            });
        }
        $('ul.carousel:not(".clients"):not(.portfolio-items)').each(function() {
            var $that = $(this),
                maxCols = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true') ? 'auto' : 3,
                scrollNum = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true') ? 'auto' : '',
                colWidth = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true') ? 500 : 453,
                $autoplayBool = ($(this).attr('data-autorotate') == 'true') ? true : false,
                $themeSkin = true,
                $themeSkin2 = true;
            var scrollSpeed, easing;
            if ($('body.ascend').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true' || $('body.material').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true') {
                if ($(this).find('li').length % 3 === 0) {
                    $themeSkin = true;
                    $themeSkin2 = true;
                } else {
                    $themeSkin = false;
                    $themeSkin2 = true;
                }
            } else {
                $themeSkin = true;
                $themeSkin2 = true;
            }
            scrollSpeed = (parseInt($(this).attr('data-scroll-speed'))) ? parseInt($(this).attr('data-scroll-speed')) : 700;
            easing = ($(this).is('[data-easing]')) ? $(this).attr('data-easing') : 'linear';
            var $element = $that;
            if ($that.find('img').length == 0) {
                $element = $body;
            }
            imagesLoaded($element, function() {
                $that.carouFredSel({
                    circular: $themeSkin,
                    infinite: $themeSkin2,
                    height: 'auto',
                    responsive: true,
                    items: {
                        width: colWidth,
                        visible: {
                            min: 1,
                            max: maxCols
                        }
                    },
                    swipe: {
                        onTouch: true,
                        onMouse: true,
                        options: {
                            excludedElements: "button, input, select, textarea, .noSwipe",
                            tap: function(event, target) {
                                if ($(target).attr('href') && !$(target).is('[target="_blank"]') && !$(target).is('[rel^="prettyPhoto"]') && !$(target).is('.magnific-popup') && !$(target).is('.magnific')) {
                                    window.open($(target).attr('href'), '_self');
                                }
                            }
                        },
                        onBefore: function() {
                            $that.find('.work-item').trigger('mouseleave');
                            $that.find('.work-item .work-info a').trigger('mouseup');
                        }
                    },
                    scroll: {
                        items: scrollNum,
                        easing: easing,
                        duration: scrollSpeed,
                        onBefore: function() {
                            if ($('body.ascend').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true' || $('body.material').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true') {
                                $that.parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($that.find('> li').length / $that.triggerHandler("currentVisible").length));
                            }
                        },
                        onAfter: function() {
                            if ($('body.ascend').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true' || $('body.material').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true') {
                                $that.parents('.carousel-wrap').find('.item-count .current').html($that.triggerHandler('currentPage') + 1);
                                $that.parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($that.find('> li').length / $that.triggerHandler("currentVisible").length));
                            }
                        }
                    },
                    prev: {
                        button: function() {
                            return $that.parents('.carousel-wrap').find('.carousel-prev');
                        }
                    },
                    next: {
                        button: function() {
                            return $that.parents('.carousel-wrap').find('.carousel-next');
                        }
                    },
                    auto: {
                        play: $autoplayBool
                    }
                }, {
                    transition: true
                }).animate({
                    'opacity': 1
                }, 1300);
                $that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');
                if ($that.parents('.carousel-wrap').attr('data-full-width') == 'true') {
                    $that.parents('.carousel-outer').css('overflow', 'visible');
                }
                if ($('body.ascend').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true' || $('body.material').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true') {
                    $('<div class="item-count"><span class="current">1</span>/<span class="total">' + ($that.find('> li').length / $that.triggerHandler("currentVisible").length) + '</span></div>').insertAfter($that.parents('.carousel-wrap').find('.carousel-prev'));
                }
                $that.addClass('finished-loading');
                carouselHeightCalcs();
            });
        });
        $window.off('smartresize.carouselHeightCalcs');
        $window.on('smartresize.carouselHeightCalcs', carouselHeightCalcs);
    }

    function fwCarouselLinkFix() {
        var $mousePosStart = 0,
            $mousePosEnd = 0,
            fwCarouselLinkSelector = '.carousel-wrap .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a';
        $(fwCarouselLinkSelector).on('mousedown', function(e) {
            $mousePosStart = e.clientX;
        });
        $(fwCarouselLinkSelector).on('mouseup', function(e) {
            $mousePosEnd = e.clientX;
        });
        $(fwCarouselLinkSelector).on('click', function() {
            if (Math.abs($mousePosStart - $mousePosEnd) > 10) {
                return false;
            }
        });
    }

    function owlCarouselInit() {
        if ($('.owl-carousel').length === 0) {
            return;
        }
        $('.owl-carousel').each(function() {
            $(this).addClass('owl-theme');
            var $that = $(this),
                $autoRotateBool = $that.attr('data-autorotate'),
                $autoRotateSpeed = $that.attr('data-autorotation-speed'),
                $owlLoopBool = ($that.is('[data-loop="true"]')) ? true : false;
            $(this).owlCarousel({
                responsive: {
                    0: {
                        items: $(this).attr('data-mobile-cols')
                    },
                    690: {
                        items: $(this).attr('data-tablet-cols')
                    },
                    1000: {
                        items: $(this).attr('data-desktop-small-cols')
                    },
                    1300: {
                        items: $(this).attr('data-desktop-cols')
                    }
                },
                autoplay: $autoRotateBool,
                autoplayTimeout: $autoRotateSpeed,
                loop: $owlLoopBool,
                smartSpeed: 350,
                onTranslate: function() {
                    $that.addClass('moving');
                },
                onTranslated: function() {
                    $that.removeClass('moving');
                }
            });
            $(this).on('changed.owl.carousel', function(event) {
                if (event.item.count - event.page.size == event.item.index) {
                    $(event.target).find('.owl-dots div:last').addClass('active').siblings().removeClass('active');
                }
            });
        });
    }

    function owl_carousel_animate() {
        $($fullscreenSelector + '.owl-carousel[data-enable-animation="true"]').each(function() {
            var $owlOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
            var $animationDelay = 0;
            if ($(this).is('[data-animation-delay]') && $(this).attr('data-animation-delay').length > 0 && $(this).attr('data-animation') != 'false') {
                $animationDelay = $(this).attr('data-animation-delay');
            }
            var $that = $(this);
            var waypoint = new Waypoint({
                element: $that,
                handler: function() {
                    if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
                        waypoint.destroy();
                        return;
                    }
                    setTimeout(function() {
                        $that.find('.owl-stage > .owl-item').each(function(i) {
                            var $that = $(this);
                            $that.delay(i * 200).transition({
                                'opacity': '1',
                                'y': '0'
                            }, 600, 'easeOutQuart');
                        });
                        $that.addClass('animated-in');
                    }, $animationDelay);
                    waypoint.destroy();
                },
                offset: $owlOffsetPos
            });
        });
    }

    function updateWooFlickityCount(e) {
        var slideNumber = e.data.wooFlickity.selectedIndex + 1;
        e.data.wooFlickityCount.text(slideNumber + '/' + e.data.wooFlickity.slides.length);
    }

    function productCarouselInit() {
        if ($('.products-carousel').length === 0 && $('.nectar-woo-flickity').length === 0) {
            return;
        }
        $('.products-carousel').each(function() {
            var $that = $(this).find('ul'),
                maxCols = 'auto',
                scrollNum = 'auto',
                colWidth = ($(this).parents('.full-width-content ').length > 0) ? 400 : 353,
                scrollSpeed = 800,
                easing = 'easeInOutQuart';
            var $element = $that;
            if ($that.find('img').length == 0) {
                $element = $body;
            }
            $(this).append('<a class="carousel-prev" href="#"><i class="icon-salient-left-arrow"></i></a> <a class="carousel-next" href="#"><i class="icon-salient-right-arrow"></i></a>');
            imagesLoaded($element, function() {
                $that.carouFredSel({
                    circular: true,
                    responsive: true,
                    items: {
                        width: colWidth,
                        visible: {
                            min: 1,
                            max: maxCols
                        }
                    },
                    swipe: {
                        onTouch: true,
                        onMouse: true,
                        options: {
                            excludedElements: "button, input, select, textarea, .noSwipe",
                            tap: function(event, target) {
                                if ($(target).attr('href') && !$(target).is('[target="_blank"]') && !$(target).hasClass('add_to_wishlist') && !$(target).hasClass('add_to_cart_button') && !$(target).is('[rel^="prettyPhoto"]')) {
                                    window.open($(target).attr('href'), '_self');
                                }
                                if ($(target).parent().attr('href') && !$(target).parent().is('[target="_blank"]') && !$(target).parent().hasClass('add_to_wishlist') && !$(target).parent().hasClass('add_to_cart_button') && !$(target).parent().is('[rel^="prettyPhoto"]')) {
                                    window.open($(target).parent().attr('href'), '_self');
                                }
                            }
                        },
                        onBefore: function() {
                            $that.find('.product-wrap').trigger('mouseleave');
                            $that.find('.product a').trigger('mouseup');
                        }
                    },
                    scroll: {
                        items: scrollNum,
                        easing: easing,
                        duration: scrollSpeed
                    },
                    prev: {
                        button: function() {
                            return $that.parents('.carousel-wrap').find('.carousel-prev');
                        }
                    },
                    next: {
                        button: function() {
                            return $that.parents('.carousel-wrap').find('.carousel-next');
                        }
                    },
                    auto: {
                        play: false
                    }
                }).animate({
                    'opacity': 1
                }, 1300);
                $that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');
                $that.addClass('finished-loading');
                fullWidthContentColumns();
                $window.trigger('resize');
            });
        });
        $wooFlickityCarousels = [];
        $('.nectar-woo-flickity').each(function(i) {
            var $that = $(this);
            $(this).find('.products > li').each(function() {
                $(this).wrap('<div class="flickity-cell"></div>');
            });
            fullWidthSections();
            var pageDotsBool = ($that.is('[data-controls="bottom-pagination"]')) ? true : false,
                arrowsBool = ($that.is('[data-controls="bottom-pagination"]')) ? false : true,
                $autoplay = ($that.is('[data-autorotate-speed]') && parseInt($that.attr('data-autorotate-speed')) > 800) ? parseInt($that.attr('data-autorotate-speed')) : 5000;
            if (!$that.is('[data-autorotate="true"]')) {
                $autoplay = false;
            }
            $(this).find('ul').addClass('generate-markup');
            $wooFlickityCarousels[i] = $(this).find('ul');
            if (arrowsBool == true) {
                $wooFlickityCarousels[i].on('ready.flickity', function() {
                    var flickityPrv = $that.find('.flickity-prev-next-button.previous').detach();
                    var flickityNxt = $that.find('.flickity-prev-next-button.next').detach();
                    $that.find('.nectar-woo-carousel-top').append(flickityPrv).append(flickityNxt);
                });
            }
            $wooFlickityCarousels[i].flickity({
                draggable: true,
                lazyLoad: false,
                imagesLoaded: true,
                cellAlign: 'left',
                groupCells: pageDotsBool,
                prevNextButtons: arrowsBool,
                pageDots: pageDotsBool,
                resize: true,
                percentPosition: true,
                setGallerySize: true,
                wrapAround: true,
                autoPlay: $autoplay,
                accessibility: false
            });
            if (arrowsBool == true) {
                $that.find('.flickity-prev-next-button').append('<svg width="65px" height="65px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><circle stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle> <circle class="time" stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>');
                var $wooFlickityCount = $('<div class="woo-flickity-count" />');
                $that.append($wooFlickityCount);
                var $wooFlickityData = $wooFlickityCarousels[i].data('flickity');
                var $eventData = {
                    data: {
                        wooFlickity: $wooFlickityData,
                        wooFlickityCount: $wooFlickityCount
                    }
                };
                updateWooFlickityCount($eventData);
                $wooFlickityCarousels[i].on('select.flickity', {
                    wooFlickity: $wooFlickityData,
                    wooFlickityCount: $wooFlickityCount
                }, updateWooFlickityCount);
            }
        });
    }

    function carouselHeightCalcs() {
        $('.carousel.finished-loading:not(".portfolio-items, .clients"), .caroufredsel_wrapper .products.finished-loading').each(function() {
            var tallestColumn = 0;
            $(this).find('> li').each(function() {
                if ($(this).height() > tallestColumn) {
                    tallestColumn = $(this).height();
                }
            });
            $(this).css('height', tallestColumn + 5);
            $(this).parents('.caroufredsel_wrapper').css('height', tallestColumn + 5);
            if ($('body.ascend').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true' || $('body.material').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true') {
                $(this).parents('.carousel-wrap').find('.item-count .current').html(Math.ceil(($(this).triggerHandler("currentPosition") + 1) / $(this).triggerHandler("currentVisible").length));
                $(this).parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($(this).find('> li').length / $(this).triggerHandler("currentVisible").length));
            }
        });
    }

    function clientsCarouselInit() {
        if ($('.carousel.clients').length === 0) {
            return;
        }
        $('.carousel.clients').each(function() {
            var $that = $(this);
            var $autoRotate = (!$(this).hasClass('disable-autorotate')) ? true : false;
            var columns;
            columns = (parseInt($(this).attr('data-max'))) ? parseInt($(this).attr('data-max')) : 5;
            if ($window.width() < 690 && $body.attr('data-responsive') == '1') {
                columns = 2;
                $(this).addClass('phone');
            }
            var $element = $that;
            if ($that.find('img').length == 0) {
                $element = $body;
            }
            imagesLoaded($element, function() {
                $that.carouFredSel({
                    circular: true,
                    responsive: true,
                    items: {
                        height: $that.find('> div:first').height(),
                        width: $that.find('> div:first').width(),
                        visible: {
                            min: 1,
                            max: columns
                        }
                    },
                    swipe: {
                        onTouch: true,
                        onMouse: true
                    },
                    scroll: {
                        items: 1,
                        easing: 'easeInOutCubic',
                        duration: '800',
                        pauseOnHover: true
                    },
                    auto: {
                        play: $autoRotate,
                        timeoutDuration: 2700
                    }
                }).animate({
                    'opacity': 1
                }, 1300);
                $that.addClass('finished-loading');
                $that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');
                $window.trigger('resize');
            });
        });
        $window.off('smartresize.clientsCarouselHeight', clientsCarouselHeightRecalc);
        $window.on('smartresize.clientsCarouselHeight', clientsCarouselHeightRecalc);
    }

    function clientsCarouselHeightRecalc() {
        var tallestImage = 0;
        $('.carousel.clients.finished-loading').each(function() {
            $(this).find('> div').each(function() {
                if ($(this).height() > tallestImage) {
                    tallestImage = $(this).height();
                }
            });
            $(this).css('height', tallestImage);
            $(this).parent().css('height', tallestImage);
        });
    }
    $window.on("orientationchange", function() {
        setTimeout(clientsCarouselHeightRecalc, 200);
    });

    function carouselfGrabbingClass() {
        $body.on('mousedown', '.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a', function() {
            $(this).addClass('active');
        });
        $body.on('mouseup', '.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a', function() {
            $(this).removeClass('active');
        });
        $('body.ascend, body.material').on('mouseover', '.carousel-next', function() {
            $(this).parent().find('.carousel-prev, .item-count').addClass('next-hovered');
        });
        $('body.ascend, body.material').on('mouseleave', '.carousel-next', function() {
            $(this).parent().find('.carousel-prev, .item-count').removeClass('next-hovered');
        });
    }

    function clientsFadeIn() {
        var $clientsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
        $($fullscreenSelector + '.clients.fade-in-animation').each(function() {
            var $that = $(this),
                waypoint = new Waypoint({
                    element: $that,
                    handler: function() {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
                            waypoint.destroy();
                            return;
                        }
                        $that.find('> div').each(function(i) {
                            $(this).delay(i * 80).transition({
                                'opacity': "1"
                            }, 450);
                        });
                        setTimeout(function() {
                            $that.addClass('completed');
                        }, ($that.find('> div').length * 80) + 450);
                        $that.addClass('animated-in');
                        waypoint.destroy();
                    },
                    offset: $clientsOffsetPos
                });
        });
    }
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f) {
        setTimeout(f, 1000 / 60);
    }
    var $event = $.event,
        dispatchMethod = $.event.handle ? 'handle' : 'dispatch',
        resizeTimeout;
    $event.special.smartresize = {
        setup: function() {
            $(this).on("resize", $event.special.smartresize.handler);
        },
        teardown: function() {
            $(this).off("resize", $event.special.smartresize.handler);
        },
        handler: function(event, execAsap) {
            var context = this,
                args = arguments;
            event.type = "smartresize";
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
            resizeTimeout = setTimeout(function() {
                $event[dispatchMethod].apply(context, args);
            }, execAsap === "execAsap" ? 0 : 100);
        }
    };
    $.fn.smartresize = function(fn) {
        return fn ? this.on("smartresize", fn) : this.trigger("smartresize", ["execAsap"]);
    };

    function linearInterpolate(a, b, n) {
        return (1 - n) * a + n * b;
    }

    function calculateAspectRatio(srcWidth, srcHeight, maxWidth, maxHeight) {
        var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
        return {
            width: srcWidth * ratio,
            height: srcHeight * ratio
        };
    }

    function calcHeaderNavHeight() {
        var navHeight;
        if (($body.is('[data-header-format="left-header"]') && nectarDOMInfo.winW >= 1000) || $body.is('[data-hhun="1"]') && nectarDOMInfo.winW >= 1000 || $('.page-template-template-no-header-footer').length > 0 || $('.page-template-template-no-header').length > 0) {
            navHeight = 0;
        } else {
            var headerPadding2 = headerPadding - headerPadding / 1.8;
            var $headerNavSpace = $headerOuterEl.outerHeight();
            if ($headerSecondaryEl.length > 0 && $body.is('.material') || $headerSecondaryEl.length > 0 && !$body.is('.material') && nectarDOMInfo.winW < 1000) {
                $headerNavSpace -= nectarDOMInfo.secondaryHeaderHeight;
            }
            if ($headerOuterEl.is('[data-header-resize="1"]') && !$headerOuterEl.is('.small-nav') && nectarDOMInfo.winW >= 1000) {
                navHeight = $headerNavSpace - (parseInt(logoShrinkNum) + headerPadding2 * 2);
            } else {
                navHeight = $headerNavSpace;
            }
        }
        if (nectarDOMInfo.winW >= 1000 && $('#header-outer[data-condense="true"]').length > 0) {
            var $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
            navHeight = $headerOuterEl.height() - (parseInt($headerSpan9.position().top) - parseInt($headerOuterEl.find('#logo').css('margin-top'))) - parseInt(nectarDOMInfo.secondaryHeaderHeight);
        }
        return navHeight;
    }
    (function(d) {
        var style_element = d.createElement('STYLE'),
            dom_events = 'addEventListener' in d,
            add_event_listener = function(type, callback) {
                if (dom_events) {
                    d.addEventListener(type, callback);
                } else {
                    d.attachEvent('on' + type, callback);
                }
            },
            set_css = function(css_text) {
                !!style_element.styleSheet ? style_element.styleSheet.cssText = css_text : style_element.innerHTML = css_text;
            };
        d.getElementsByTagName('HEAD')[0].appendChild(style_element);
        add_event_listener('mousedown', function() {
            set_css(':focus{outline:0}::-moz-focus-inner{border:0;}');
        });
        add_event_listener('keydown', function() {
            set_css('');
        });
    })(document);
    jQuery.fn.setCursorPosition = function(position) {
        if (this.length == 0) {
            return this;
        }
        return $(this).setSelection(position, position);
    };
    jQuery.fn.setSelection = function(selectionStart, selectionEnd) {
        if (this.length == 0) {
            return this;
        }
        var input = this[0];
        if (input.createTextRange) {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        } else if (input.setSelectionRange) {
            input.focus();
            input.setSelectionRange(selectionStart, selectionEnd);
        }
        return this;
    };
    $.extend($.expr[':'], {
        transparent: function(elem, i, attr) {
            return ($(elem).css("opacity") === "0");
        }
    });

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    $.cssHooks.color = {
        get: function(elem) {
            var color;
            if (elem.currentStyle) {
                color = elem.currentStyle["color"];
            } else if (window.getComputedStyle) {
                color = document.defaultView.getComputedStyle(elem, null).getPropertyValue("color");
            }
            if (color.search("rgb") == -1) {
                return color;
            } else {
                color = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                if (color) {
                    return "#" + hex(color[1]) + hex(color[2]) + hex(color[3]);
                }
            }
        }
    };
    $.cssHooks.backgroundColor = {
        get: function(elem) {
            var bg;
            if (elem.currentStyle) {
                bg = elem.currentStyle["backgroundColor"];
            } else if (window.getComputedStyle) {
                bg = document.defaultView.getComputedStyle(elem, null).getPropertyValue("background-color");
            }
            if (bg.search("rgb") == -1) {
                return bg;
            } else {
                bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                if (bg) {
                    return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
                }
            }
        }
    };

    function uniqueIdGenerate() {
        return Math.floor(Math.random() * 10000);
    }

    function nectar_scrollToY(scrollTargetY, speed, easing) {
        var scrollY = window.scrollY || document.documentElement.scrollTop,
            scrollTargetY = scrollTargetY || 0,
            speed = speed || 2000,
            easing = easing || 'easeOutSine',
            currentTime = 0;
        var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));
        var easingEquations = {
            easeInOutQuint: function(pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

        function tick() {
            currentTime += 1 / 60;
            var p = currentTime / time;
            var t = easingEquations[easing](p);
            if (p < 1) {
                requestAnimationFrame(tick);
                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
            } else {
                window.scrollTo(0, scrollTargetY);
            }
        }
        tick();
    }
    (function($) {
        function s(e, i) {
            var r = $.proxy(this.process, this);
            this.$body = $("body"), this.$scrollElement = $($(e).is("body") ? window : e), this.options = $.extend({}, s.DEFAULTS, i), this.selector = (this.options.target || "") + " ul li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r), this.refresh(), this.process();
        }

        function e(e) {
            return this.each(function() {
                var i = $(this),
                    r = i.data("bs.scrollspy"),
                    o = "object" == typeof e && e;
                r || i.data("bs.scrollspy", r = new s(this, o)), "string" == typeof e && r[e]()
            })
        }
        s.VERSION = "3.2.0", s.DEFAULTS = {
            offset: 10
        }, s.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, s.prototype.refresh = function() {
            var s = "offset",
                e = 0;
            $.isWindow(this.$scrollElement[0]) || (s = "position", e = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
            var i = this;
            this.$body.find(this.selector).map(function() {
                var i = $(this),
                    r = i.data("target") || i.attr("href"),
                    o = /^#./.test(r) && $(r);
                return o && o.length && o.is(":visible") && [
                    [o[s]().top + e, r]
                ] || null
            }).sort(function(t, s) {
                return t[0] - s[0]
            }).each(function() {
                i.offsets.push(this[0]), i.targets.push(this[1])
            })
        }, s.prototype.process = function() {
            var $pageSubMenu = 0;
            if ($('.page-submenu[data-sticky="true"]').length > 0 && $('body[data-hhun="1"]').length == 0 || $('.page-submenu[data-sticky="true"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length > 0) {
                $pageSubMenu = $('.page-submenu').height();
            }
            var t, s = this.$scrollElement.scrollTop() + this.options.offset + $pageSubMenu,
                e = this.getScrollHeight(),
                i = this.options.offset + e - this.$scrollElement.height() - $pageSubMenu,
                r = this.offsets,
                o = this.targets,
                l = this.activeTarget;
            if (this.activeTarget && s < this.offsets[0] && this.offsets[0] > 0) {
                this.activeTarget = null;
                $(this.selector).parentsUntil(this.options.target, ".current-menu-item").removeClass("current-menu-item").removeClass('sfHover');
                return;
            }
            if (this.scrollHeight != e && this.refresh(), s >= i) {
                return l != (t = o[o.length - 1]) && this.activate(t);
            }
            if (l && s <= r[0]) {
                return l != (t = o[0]) && this.activate(t);
            }
            for (t = r.length; t--;) l != o[t] && s >= r[t] && (!r[t + 1] || s <= r[t + 1]) && this.activate(o[t])
        }, s.prototype.activate = function(s) {
            this.activeTarget = s, $(this.selector).parentsUntil(this.options.target, ".current-menu-item").removeClass("current-menu-item").removeClass('sfHover');
            var e = this.selector + '[data-target="' + s + '"],' + this.selector + '[href="' + s + '"]',
                i = $(e).parents("li").addClass("current-menu-item");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("current-menu-item")), i.trigger("activate.bs.scrollspy")
        };
        var i = $.fn.scrollspy;
        $.fn.scrollspy = e, $.fn.scrollspy.Constructor = s, $.fn.scrollspy.noConflict = function() {
            return $.fn.scrollspy = i, this
        }
    }(jQuery));

    function mobileBreakPointCheck() {
        var $mobileBreakpoint = ($('body[data-header-breakpoint]').length > 0 && $body.attr('data-header-breakpoint') != '1000') ? parseInt($body.attr('data-header-breakpoint')) : 1000;
        var $withinCustomBreakpoint = false;
        if ($mobileBreakpoint != 1000) {
            if ($('body[data-user-set-ocm="1"][data-slide-out-widget-area-style="slide-out-from-right-hover"]').length == 0 && nectarDOMInfo.winW > 1000 && nectarDOMInfo.winW <= $mobileBreakpoint) {
                $withinCustomBreakpoint = true;
            }
        }
        return $withinCustomBreakpoint;
    }

    function extractUrl(input) {
        return input.replace(/"/g, "").replace(/url\(|\)$/ig, "");
    }

    function getQueryParams(qs) {
        qs = qs.split("+").join(" ");
        var params = {},
            tokens, re = /[?&]?([^=]+)=([^&]*)/g;
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
    }
    var nectarGetQueryParam = getQueryParams(document.location.search);
    (function(t) {
        var i = t(window);
        t.fn.visible = function(t, e, o) {
            if (!(this.length < 1)) {
                var r = this.length > 1 ? this.eq(0) : this,
                    n = r.get(0),
                    f = i.width(),
                    h = i.height(),
                    o = o ? o : "both",
                    l = e === !0 ? n.offsetWidth * n.offsetHeight : !0;
                if ("function" == typeof n.getBoundingClientRect) {
                    var g = n.getBoundingClientRect(),
                        u = g.top >= 0 && g.top < h,
                        s = g.bottom > 0 && g.bottom <= h,
                        c = g.left >= 0 && g.left < f,
                        a = g.right > 0 && g.right <= f,
                        v = t ? u || s : u && s,
                        b = t ? c || a : c && a;
                    if ("both" === o) {
                        return l && v && b;
                    }
                    if ("vertical" === o) {
                        return l && v;
                    }
                    if ("horizontal" === o) {
                        return l && b
                    }
                } else {
                    var d = i.scrollTop(),
                        p = d + h,
                        w = i.scrollLeft(),
                        m = w + f,
                        y = r.offset(),
                        z = y.top,
                        B = z + r.height(),
                        C = y.left,
                        R = C + r.width(),
                        j = t === !0 ? B : z,
                        q = t === !0 ? z : B,
                        H = t === !0 ? R : C,
                        L = t === !0 ? C : R;
                    if ("both" === o) {
                        return !!l && p >= q && j >= d && m >= L && H >= w;
                    }
                    if ("vertical" === o) {
                        return !!l && p >= q && j >= d;
                    }
                    if ("horizontal" === o) {
                        return !!l && m >= L && H >= w;
                    }
                }
            }
        };
    }(jQuery));
    var CountUp = function(target, startVal, endVal, decimals, duration, options) {
        var lastTime = 0;
        var vendors = ['webkit', 'moz', 'ms', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(callback) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }
        var self = this;
        self.options = {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            easingFn: null,
            formattingFn: null
        };
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                self.options[key] = options[key];
            }
        }
        if (self.options.separator === '') {
            self.options.useGrouping = false;
        }
        if (!self.options.prefix) {
            self.options.prefix = '';
        }
        if (!self.options.suffix) {
            self.options.suffix = '';
        }
        self.d = (typeof target === 'string') ? document.getElementById(target) : target;
        self.startVal = Number(startVal);
        self.endVal = Number(endVal);
        self.countDown = (self.startVal > self.endVal);
        self.frameVal = self.startVal;
        self.decimals = Math.max(0, decimals || 0);
        self.dec = Math.pow(10, self.decimals);
        self.duration = Number(duration) * 1000 || 2000;
        self.formatNumber = function(nStr) {
            nStr = nStr.toFixed(self.decimals);
            nStr += '';
            var x, x1, x2, rgx;
            x = nStr.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? self.options.decimal + x[1] : '';
            rgx = /(\d+)(\d{3})/;
            if (self.options.useGrouping) {
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
                }
            }
            return self.options.prefix + x1 + x2 + self.options.suffix;
        };
        self.easeOutExpo = function(t, b, c, d) {
            return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
        };
        self.easingFn = self.options.easingFn ? self.options.easingFn : self.easeOutExpo;
        self.formattingFn = self.options.formattingFn ? self.options.formattingFn : self.formatNumber;
        self.version = function() {
            return '1.7.1';
        };
        self.printValue = function(value) {
            var result = self.formattingFn(value);
            if (self.d.tagName === 'INPUT') {
                this.d.value = result;
            } else if (self.d.tagName === 'text' || self.d.tagName === 'tspan') {
                this.d.textContent = result;
            } else {
                this.d.innerHTML = result;
            }
        };
        self.count = function(timestamp) {
            if (!self.startTime) {
                self.startTime = timestamp;
            }
            self.timestamp = timestamp;
            var progress = timestamp - self.startTime;
            self.remaining = self.duration - progress;
            if (self.options.useEasing) {
                if (self.countDown) {
                    self.frameVal = self.startVal - self.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
                } else {
                    self.frameVal = self.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
                }
            } else {
                if (self.countDown) {
                    self.frameVal = self.startVal - ((self.startVal - self.endVal) * (progress / self.duration));
                } else {
                    self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
                }
            }
            if (self.countDown) {
                self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal;
            } else {
                self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal;
            }
            self.frameVal = Math.round(self.frameVal * self.dec) / self.dec;
            self.printValue(self.frameVal);
            if (progress < self.duration) {
                self.rAF = requestAnimationFrame(self.count);
            } else {
                if (self.callback) {
                    self.callback();
                }
            }
        };
        self.start = function(callback) {
            self.callback = callback;
            self.rAF = requestAnimationFrame(self.count);
            return false;
        };
        self.pauseResume = function() {
            if (!self.paused) {
                self.paused = true;
                cancelAnimationFrame(self.rAF);
            } else {
                self.paused = false;
                delete self.startTime;
                self.duration = self.remaining;
                self.startVal = self.frameVal;
                requestAnimationFrame(self.count);
            }
        };
        self.reset = function() {
            self.paused = false;
            delete self.startTime;
            self.startVal = startVal;
            cancelAnimationFrame(self.rAF);
            self.printValue(self.startVal);
        };
        self.update = function(newEndVal) {
            cancelAnimationFrame(self.rAF);
            self.paused = false;
            delete self.startTime;
            self.startVal = self.frameVal;
            self.endVal = Number(newEndVal);
            self.countDown = (self.startVal > self.endVal);
            self.rAF = requestAnimationFrame(self.count);
        };
        self.printValue(self.startVal);
    };
    var easeOutCubic = function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };

    function nectarCreateStyle(styles, name) {
        if (styles.length > 0) {
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = styles;
            } else {
                style.appendChild(document.createTextNode(styles));
            }
            $(style).attr('id', name);
            $('head').find('#' + name).remove();
            head.appendChild(style);
        }
    }

    function fancyBoxInit() {
        $('a.pp').removeClass('pp').attr('data-fancybox', '');
        $("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])").removeAttr('rel').attr('data-fancybox', '');
        var $unique_id = uniqueIdGenerate();
        $('.wpb_gallery .wpb_gallery_slidesnectarslider_style').each(function() {
            $unique_id = uniqueIdGenerate();
            $(this).find('.swiper-slide a:not(.ext-url-link)').attr('data-fancybox', 'group_' + $unique_id);
        });
        $('.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])').each(function() {
            $unique_id = uniqueIdGenerate();
            $(this).find('.slides > li > a').attr('data-fancybox', 'group_' + $unique_id);
        });
        $('.wpb_gallery_slidesflickity_style, .wpb_gallery_slidesflickity_static_height_style').each(function() {
            $unique_id = uniqueIdGenerate();
            $(this).find('.cell > a:not(.ext-url-link)').attr('data-fancybox', 'group_' + $unique_id);
        });
        $('.portfolio-items, .wpb_gallery_slidesparallax_image_grid').each(function() {
            $unique_id = uniqueIdGenerate();
            if ($(this).find('.pretty_photo').length > 0) {
                $(this).find('.pretty_photo').removeClass('pretty_photo').attr('data-fancybox', 'group_' + $unique_id);
            } else if ($(this).find('a[rel*="prettyPhoto["]').length > 0) {
                $(this).find('a[rel*="prettyPhoto["]').removeAttr('rel').attr('data-fancybox', 'group_' + $unique_id);
            }
        });
        if ($body.hasClass('nectar-auto-lightbox')) {
            $('.gallery').each(function() {
                if ($(this).find('.gallery-icon a[rel^="prettyPhoto"]').length == 0) {
                    var $unique_id = uniqueIdGenerate();
                    $(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').attr('data-fancybox', 'group_' + $unique_id).removeClass('pretty_photo');
                }
            });
            $('.main-content img').each(function() {
                if ($(this).parent().is("[href]") && !$(this).parent().is(".magnific-popup") && $(this).parents('.tiled-gallery').length == 0 && $(this).parents('.product-image').length == 0 && $(this).parents('.iosSlider.product-slider').length == 0) {
                    var match = $(this).parent().attr('href').match(/\.(jpg|png|gif)\b/);
                    if (match) {
                        $(this).parent().attr('data-fancybox', '');
                    }
                }
            });
        }
        var fbMarginArr = ($('body.admin-bar').length > 0) ? [60, 100] : [60, 100];
        if (nectarDOMInfo.winW < 1000) {
            fbMarginArr = [0, 0];
        }
        $("[data-fancybox]").fancybox({
            animationEffect: "zoom-in-out",
            animationDuration: 350,
            buttons: ['fullScreen', 'zoom', 'close'],
            margin: fbMarginArr,
            loop: true,
            caption: function() {
                return $(this).attr('title');
            },
            beforeLoad: function(instance) {
                if (typeof instance.current.src !== 'string') {
                    $.fancybox.close(true);
                }
            },
            mobile: {
                margin: 0
            }
        });
    }

    function magnificInit() {
        $('a.pp').removeClass('pp').addClass('magnific-popup');
        $("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])").removeAttr('rel').addClass('magnific-popup');
        $('.wpb_gallery .wpb_gallery_slidesnectarslider_style').each(function() {
            $(this).find('.swiper-slide a:not(.ext-url-link)').addClass('pretty_photo');
        });
        $('.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])').each(function() {
            $(this).find('.slides > li > a').addClass('pretty_photo');
        });
        $('.wpb_gallery_slidesflickity_style, .wpb_gallery_slidesflickity_static_height_style').each(function() {
            $(this).find('.cell > a:not(.ext-url-link)').addClass('pretty_photo');
        });
        $('.portfolio-items, .wpb_gallery .swiper-slide, .wpb_gallery_slidesflickity_style .cell, .wpb_gallery_slidesflickity_static_height_style .cell, .wpb_gallery_slides.wpb_flexslider ul > li, .wpb_gallery .parallax-grid-item').each(function() {
            if ($(this).find('.pretty_photo').length > 0) {
                $(this).find('.pretty_photo').removeClass('pretty_photo').addClass('gallery').addClass('magnific');
            } else if ($(this).find('a[rel*="prettyPhoto["]').length > 0) {
                $(this).find('a[rel*="prettyPhoto["]').removeAttr('rel').addClass('gallery').addClass('magnific');
            }
        });
        $("a[data-rel='prettyPhoto[product-gallery]']").each(function() {
            $(this).removeAttr('data-rel').addClass('magnific').addClass('gallery');
        });
        if ($body.hasClass('nectar-auto-lightbox')) {
            $('.gallery').each(function() {
                if ($(this).find('.gallery-icon a[rel^="prettyPhoto"]').length == 0) {
                    $(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').addClass('magnific').addClass('gallery').removeClass('pretty_photo');
                }
            });
            $('.main-content img').each(function() {
                if ($(this).parent().is("[href]") && !$(this).parent().is(".magnific-popup") && $(this).parents('.tiled-gallery').length == 0 && $(this).parents('.product-image').length == 0 && $(this).parents('.iosSlider.product-slider').length == 0) {
                    var match = $(this).parent().attr('href').match(/\.(jpg|png|gif)\b/);
                    if (match) {
                        $(this).parent().addClass('magnific-popup').addClass('image-link');
                    }
                }
            });
        }
        $('a.magnific-popup:not(.gallery):not(.nectar_video_lightbox)').magnificPopup({
            type: 'image',
            callbacks: {
                imageLoadComplete: function() {
                    var $that = this;
                    setTimeout(function() {
                        $that.wrap.addClass('mfp-image-loaded');
                    }, 10);
                },
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                },
                open: function() {
                    $.magnificPopup.instance.next = function() {
                        var $that = this;
                        this.wrap.removeClass('mfp-image-loaded');
                        setTimeout(function() {
                            $.magnificPopup.proto.next.call($that);
                        }, 100);
                    };
                    $.magnificPopup.instance.prev = function() {
                        var $that = this;
                        this.wrap.removeClass('mfp-image-loaded');
                        setTimeout(function() {
                            $.magnificPopup.proto.prev.call($that);
                        }, 100);
                    };
                }
            },
            fixedContentPos: false,
            mainClass: 'mfp-zoom-in',
            removalDelay: 400
        });
        $('a.magnific-popup.nectar_video_lightbox, .magnific_nectar_video_lightbox a.link_text, .swiper-slide a[href*=youtube], .swiper-slide a[href*=vimeo], .nectar-video-box a.full-link.magnific-popup').magnificPopup({
            type: 'iframe',
            fixedContentPos: false,
            mainClass: 'mfp-zoom-in',
            removalDelay: 400
        });
        $('a.magnific.gallery').each(function() {
            var $parentRow = ($(this).closest('.wpb_column').length > 0) ? $(this).closest('.wpb_column') : $(this).parents('.row');
            if ($parentRow.length > 0 && !$parentRow.hasClass('lightbox-col')) {
                $parentRow.magnificPopup({
                    type: 'image',
                    delegate: 'a.magnific',
                    mainClass: 'mfp-zoom-in',
                    fixedContentPos: false,
                    callbacks: {
                        elementParse: function(item) {
                            if ($(item.el.context).is('[href]') && $(item.el.context).attr('href').indexOf('iframe=true') != -1 || $(item.el.context).is('[href]') && $(item.el.context).attr('href').indexOf('https://www.youtube.com/watch') != -1) {
                                item.type = 'iframe';
                            } else if ($(item.el.context).is('[href]') && $(item.el.context).attr('href').indexOf('video-popup-') != -1) {
                                item.type = 'inline';
                            } else {
                                item.type = 'image';
                            }
                        },
                        imageLoadComplete: function() {
                            var $that = this;
                            setTimeout(function() {
                                $that.wrap.addClass('mfp-image-loaded');
                            }, 10);
                        },
                        beforeOpen: function() {
                            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        },
                        open: function() {
                            if ($(this.content).find('.mejs-video video').length > 0 && $().mediaelementplayer) {
                                $(this.content).find('.mejs-video video')[0].player.remove();
                                var $that = this;
                                setTimeout(function() {
                                    $($that.content).find('video').mediaelementplayer();
                                    $($that.content).find('.mejs-video video')[0].player.play();
                                }, 50);
                            }
                            $.magnificPopup.instance.next = function() {
                                var $that = this;
                                this.wrap.removeClass('mfp-image-loaded');
                                setTimeout(function() {
                                    $.magnificPopup.proto.next.call($that);
                                    if ($($that.content).find('.mejs-video video').length > 0) {
                                        $($that.content).find('.mejs-video video')[0].play();
                                    }
                                }, 100);
                            };
                            $.magnificPopup.instance.prev = function() {
                                var $that = this;
                                this.wrap.removeClass('mfp-image-loaded');
                                setTimeout(function() {
                                    $.magnificPopup.proto.prev.call($that);
                                    if ($($that.content).find('.mejs-video video').length > 0) {
                                        $($that.content).find('.mejs-video video')[0].play();
                                    }
                                }, 100);
                            };
                        },
                        close: function() {
                            if ($(this.content).find('.mejs-video video').length > 0) {
                                $(this.content).find('.mejs-video video')[0].load();
                            }
                        }
                    },
                    removalDelay: 400,
                    gallery: {
                        enabled: true
                    }
                });
                $parentRow.addClass('lightbox-col');
            }
        });
    }

    function lightBoxInit() {
        setTimeout(function() {
            if ($('body[data-ls="magnific"]').length > 0 || $('body[data-ls="pretty_photo"]').length > 0) {
                magnificInit();
            } else if ($('body[data-ls="fancybox"]').length > 0) {
                fancyBoxInit();
            }
        }, 100);
    }

    function vcWaypoints() {
        $($fullscreenSelector + ' .wpb_animate_when_almost_visible').each(function() {
            var $that = $(this),
                $vcOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '90%',
                waypoint = new Waypoint({
                    element: $that,
                    handler: function() {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated')) {
                            waypoint.destroy();
                            return;
                        }
                        $that.addClass("animated");
                        $that.addClass("wpb_start_animation");
                        waypoint.destroy();
                        if ($that.is('.nectar-button') && $('body[data-button-style*="rounded_shadow"]').length > 0) {
                            setTimeout(function() {
                                $that.removeClass('wpb_start_animation');
                            }, 1100);
                        }
                    },
                    offset: $vcOffsetPos
                });
        });
    }

    function milestoneInit() {
        $('.nectar-milestone').each(function() {
            if ($(this).is('[data-symbol]')) {
                if ($(this).find('.symbol-wrap').length == 0) {
                    if ($(this).attr('data-symbol-pos') == 'before') {
                        $(this).find('.number').prepend('<div class="symbol-wrap"><span class="symbol">' + $(this).attr('data-symbol') + '</span></div>');
                    } else {
                        $(this).find('.number').append('<div class="symbol-wrap"><span class="symbol">' + $(this).attr('data-symbol') + '</span></div>');
                    }
                }
                var $symbol_size;
                if ($(this).attr('data-symbol-size') == $(this).find('.number').attr('data-number-size') && $(this).attr('data-symbol-alignment') == 'superscript') {
                    $symbol_size = 32;
                } else {
                    $symbol_size = parseInt($(this).attr('data-symbol-size'));
                }
                $(this).find('.symbol-wrap').css({
                    'font-size': $symbol_size + 'px',
                    'line-height': $symbol_size + 'px'
                });
            }
            $(this).find('.number').css({
                'font-size': $(this).find('.number').attr('data-number-size') + 'px',
                'line-height': $(this).find('.number').attr('data-number-size') + 'px'
            });
        });
        if (!$body.hasClass('mobile') && $('.nectar-milestone').length > 0 || $body.hasClass('rtl') && $('.nectar-milestone').length > 0) {
            var $blurCssString = '';
            $($fullscreenSelector + '.nectar-milestone.motion_blur').each(function(i) {
                $(this).removeClass(function(index, className) {
                    return (className.match(/(^|\s)instance-\S+/g) || []).join(' ');
                });
                $(this).addClass('instance-' + i);
                var $currentColor = $(this).find('.number').css('color'),
                    colorInt = parseInt($currentColor.substring(1), 16);
                var R = (colorInt & 0xFF0000) >> 16,
                    G = (colorInt & 0x00FF00) >> 8,
                    B = (colorInt & 0x0000FF) >> 0;
                var $rgbaColorStart = 'rgba(' + R + ',' + G + ',' + B + ',0.2)',
                    $rgbaColorEnd = 'rgba(' + R + ',' + G + ',' + B + ',1)',
                    $numberSize = parseInt($(this).find('.number').attr('data-number-size'));
                $blurCssString += '@keyframes motion-blur-number-' + i + ' { ' + ' 0% { ' + 'opacity: 0;' + 'color: ' + $rgbaColorStart + '; ' + 'text-shadow: 0 ' + $numberSize / 20 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 10 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 6 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 5 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 4 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 20 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 10 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 6 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 5 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 4 + 'px 0 ' + $rgbaColorStart + '; ' + 'transform: translateZ(0px) translateY(-100%); ' + '-webkit-transform: translateZ(0px) translateY(-100%); ' + '} ' + '33% { opacity: 1 }' + '100% { ' + 'color: ' + $rgbaColorEnd + '; ' + 'text-shadow: none; ' + 'transform: translateZ(0px) translateY(0px); ' + '-webkit-transform: translateZ(0px) translateY(0px); ' + '} ' + '} ' + '@-webkit-keyframes motion-blur-number-' + i + ' { ' + ' 0% { ' + 'opacity: 0;' + 'color: ' + $rgbaColorStart + '; ' + 'text-shadow: 0 ' + $numberSize / 20 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 10 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 6 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 5 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 4 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 20 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 10 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 6 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 5 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 4 + 'px 0 ' + $rgbaColorStart + '; ' + 'transform: translateZ(0px) translateY(-100%); ' + '-webkit-transform: translateZ(0px) translateY(-100%); ' + '} ' + '33% { opacity: 1 }' + '100% { ' + 'color: ' + $rgbaColorEnd + '; ' + 'text-shadow: none; ' + 'transform: translateZ(0px) translateY(0px); ' + '-webkit-transform: translateZ(0px) translateY(0px); ' + '} ' + '} ' + '.nectar-milestone.motion_blur.instance-' + i + ' .number span.in-sight { animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-' + i + '; -webkit-animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-' + i + '; } ';
                var $symbol = $(this).find('.symbol-wrap').clone();
                $(this).find('.symbol-wrap').remove();
                var characters = $(this).find('.number').text().split("");
                var $this = $(this).find('.number');
                $this.empty();
                $.each(characters, function(i, el) {
                    $this.append("<span>" + el + "</span");
                });
                if ($(this).has('[data-symbol]')) {
                    if ($(this).attr('data-symbol-pos') == 'after') {
                        $this.append($symbol);
                    } else {
                        $this.prepend($symbol);
                    }
                }
            });
            nectarCreateStyle($blurCssString, 'milestone-blur');
            milestoneWaypoint();
        }
    }

    function milestoneWaypoint() {
        $($fullscreenSelector + '.nectar-milestone').each(function() {
            var $offset = ($('#nectar_fullscreen_rows').length > 0) ? '250%' : '98%',
                $that = $(this),
                waypoint = new Waypoint({
                    element: $that,
                    handler: function() {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
                            waypoint.destroy();
                            return;
                        }
                        var $endNum = parseInt($that.find('.number span:not(.symbol)').text().replace(/,/g, ''));
                        if (!$that.hasClass('motion_blur')) {
                            var countOptions = {
                                easingFn: easeOutCubic
                            };
                            var $countEle = $that.find('.number span:not(.symbol)')[0];
                            var numAnim = new CountUp($countEle, 0, $endNum, 0, 2.2, countOptions);
                            numAnim.start();
                        } else {
                            $that.find('span').each(function(i) {
                                var $that = $(this);
                                setTimeout(function() {
                                    $that.addClass('in-sight');
                                }, 200 * i);
                            });
                        }
                        $that.addClass('animated-in');
                        waypoint.destroy();
                    },
                    offset: $offset
                });
        });
    }

    function tabbedChangeSection(clickedTab) {
        var $id = clickedTab.parents('li').index() + 1;
        var $frontEndEditorTabDiv = ($('body.vc_editor').length > 0) ? '> .wpb_tab ' : '';
        if (!clickedTab.hasClass('active-tab') && !clickedTab.hasClass('loading')) {
            clickedTab.parents('ul').find('a').removeClass('active-tab');
            clickedTab.addClass('active-tab');
            clickedTab.parents('.tabbed').find('> div:not(.clear)' + $frontEndEditorTabDiv).css({
                'visibility': 'hidden',
                'position': 'absolute',
                'opacity': '0',
                'left': '-9999px',
                'display': 'none'
            }).removeClass('visible-tab');
            if ($('body.vc_editor').length > 0) {
                var $data_m_id = (clickedTab.parent().is('[data-m-id]')) ? clickedTab.parent().attr('data-m-id') : '';
                clickedTab.parents('.tabbed').find('> div[data-model-id="' + $data_m_id + '"]' + $frontEndEditorTabDiv).css({
                    'visibility': 'visible',
                    'position': 'relative',
                    'left': '0',
                    'display': 'block'
                }).stop().transition({
                    'opacity': 1
                }, 400).addClass('visible-tab');
                if (!$body.is('[data-flex-cols="true"]')) {
                    convertFrontEndPadding();
                }
            } else {
                clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ')' + $frontEndEditorTabDiv).css({
                    'visibility': 'visible',
                    'position': 'relative',
                    'left': '0',
                    'display': 'block'
                }).stop().transition({
                    'opacity': 1
                }, 400).addClass('visible-tab');
            }
            if (clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ') .iframe-embed').length > 0 || clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ') .portfolio-items').length > 0) {
                setTimeout(function() {
                    $window.trigger('resize');
                }, 10);
            }
        }
        if ($tabbedClickCount != 0) {
            var $currentVisTab = clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ')' + $frontEndEditorTabDiv);
            if ($currentVisTab.find('.nectar-progress-bar').length > 0) {
                progressBars();
            }
            if ($currentVisTab.find('.divider-small-border [data-animate="yes"]').length > 0 || $currentVisTab.find('.divider-border [data-animate="yes"]').length > 0) {
                dividers();
            }
            if ($currentVisTab.find('img.img-with-animation').length > 0 || $currentVisTab.find('.col.has-animation').length > 0 || $currentVisTab.find('.nectar_cascading_images').length > 0 || $currentVisTab.find('.wpb_column.has-animation').length > 0) {
                colAndImgAnimations();
                cascadingImageBGSizing();
            }
            if ($currentVisTab.find('.column-image-bg-wrap[data-bg-animation="displace-filter-fade"]').length > 0) {
                for (var k = 0; k < $liquidBG_EL.length; k++) {
                    if ($($liquidBG_EL[k].canvasContainer).parents('.wpb_tab').length > 0 && $($liquidBG_EL[k].canvasContainer).parents('.wpb_tab').css('visibility') != 'hidden') {
                        if ($($liquidBG_EL[k].canvasContainer).find('.image-added-to-stage').length == 0) {
                            $liquidBG_EL[k].imgContainer.addChild($liquidBG_EL[k].bg);
                        }
                        $($liquidBG_EL[k].canvasContainer).find('.nectar-liquid-bg').addClass('image-added-to-stage');
                        $liquidBG_EL[k].resize();
                        if ($($liquidBG_EL[k].canvasContainer).find('.nectar-liquid-bg.animated-in').length == 0) {
                            $liquidBG_EL[k].animateProps($liquidBG_EL[k]);
                        }
                    }
                }
            }
            if ($currentVisTab.find('.nectar-milestone').length > 0) {
                milestoneWaypoint();
            }
            if ($currentVisTab.find('.nectar_image_with_hotspots[data-animation="true"]').length > 0) {
                imageWithHotspots();
                setTimeout(function() {
                    $window.trigger('resize');
                }, 100);
            }
            if ($currentVisTab.find('.nectar-fancy-ul').length > 0) {
                nectarFancyUlInit();
            }
            if ($currentVisTab.find('.nectar-split-heading').length > 0) {
                splitLineHeadings();
            }
            if ($currentVisTab.find('.wpb_column[data-border-animation="true"]').length > 0) {
                animatedColBorders();
            }
            if ($currentVisTab.find('.wpb_animate_when_almost_visible').length > 0) {
                vcWaypoints();
            }
            if ($currentVisTab.find('.nectar-animated-title').length > 0) {
                animatedTitles();
            }
            if ($currentVisTab.find('.nectar-highlighted-text').length > 0) {
                highlightedText();
            }
            if ($currentVisTab.find('.nectar_food_menu_item').length > 0) {
                foodMenuItems();
            }
            if (clickedTab.parents('.wpb_row').length > 0) {
                if ($currentVisTab.find('.vc_pie_chart').length > 0 || $currentVisTab.find('.wp-video-shortcode').length > 0 || $currentVisTab.find('.post-area.masonry .posts-container').length > 0 || $currentVisTab.find('.twentytwenty-container').length > 0 || clickedTab.parents('#nectar_fullscreen_rows[data-content-overflow="scrollbar"]').length > 0 || clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.wpb_gallery').length > 0 || clickedTab.parents('.wpb_row').next().hasClass('parallax_section')) {
                    $window.trigger('resize');
                }
                if ($currentVisTab.find('.nectar-flickity').length > 0 && typeof Flickity != 'undefined') {
                    var tabbedFlkty = Flickity.data(clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar-flickity')[0]);
                    tabbedFlkty.resize();
                }
                if ($currentVisTab.find('.nectar-woo-flickity').length > 0 && typeof Flickity != 'undefined') {
                    var wootabbedFlkty = Flickity.data(clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar-woo-flickity > ul')[0]);
                    wootabbedFlkty.resize();
                }
            }
            $currentVisTab.find('.svg-icon-holder').each(function(i) {
                var $that = $(this);
                setTimeout(function() {
                    var $animationDelay = 0;
                    if ($that.is('[data-animation-delay]') && $that.attr('data-animation-delay').length > 0 && $that.attr('data-animation') != 'false') {
                        $animationDelay = $that.attr('data-animation-delay');
                    }
                    clearTimeout($animatedSVGIconTimeout[i]);
                    if ($that.attr('data-animation') == 'false') {
                        $that.css('opacity', '1');
                        $svgIcons[$that.find('svg').attr('id').slice(-1)].finish();
                    } else {
                        $svgIcons[$that.find('svg').attr('id').slice(-1)].reset();
                        $animatedSVGIconTimeout[i] = setTimeout(function() {
                            $svgIcons[$that.find('svg').attr('id').slice(-1)].play();
                        }, $animationDelay);
                    }
                }, 150);
            });
        }
        clickedTab.parents('.tabbed').find('.wpb_row').each(function() {
            if (typeof $(this).find('[class*="vc_col-"]').first().offset() != 'undefined') {
                var $firstChildOffset = $(this).find('[class*="vc_col-"]').first().offset().left;
                $(this).find('[class*="vc_col-"]').each(function() {
                    $(this).removeClass('no-left-margin');
                    if ($(this).offset().left < $firstChildOffset + 15) {
                        $(this).addClass('no-left-margin');
                    } else {
                        $(this).removeClass('no-left-margin');
                    }
                });
            }
        });
        $tabbedClickCount++;
        if (clickedTab.parent().parent().find('.magic-line').length > 0) {
            magicLineCalc(clickedTab);
        }
    }

    function magicLineCalc($ele) {
        var el, leftPos, ratio;
        el = $ele.parent();
        if (el.length) {
            leftPos = el.position().left;
            ratio = el.width();
        } else {
            leftPos = ratio = 0;
        }
        $ele.parent().parent().find('.magic-line').css('transform', 'translateX(' + leftPos + 'px) scaleX(' + ratio + ')');
    }

    function tabbbedDeepLinking() {
        if (typeof nectarGetQueryParam['tab'] != 'undefined') {
            $('.wpb_tabs_nav').each(function() {
                $(this).find('li').each(function() {
                    var $currentText = $(this).find('a').clone(),
                        $getText = nectarGetQueryParam['tab'],
                        $that = $(this);
                    $currentText.find('svg').remove();
                    $currentText = $currentText.text();
                    $currentText = $currentText.replace(/\s+/g, '-').toLowerCase();
                    if ($currentText.length > 0 && $currentText.substring(0, 1) === '-') {
                        $currentText = $currentText.substring(1);
                    }
                    $getText = $getText.replace(/\s+/g, '-').replace(/</g, '&lt;').replace(/"/g, '&quot;').toLowerCase();
                    if ($currentText == $getText) {
                        $(this).find('a').trigger('click');
                        setTimeout(function() {
                            $that.find('a').trigger('click');
                        }, 501);
                    }
                });
            });
        }
    }

    function tabbedInit() {
        $body.on('click', '.tabbed > ul li:not(.cta-button) a', function() {
            tabbedChangeSection($(this));
            return false;
        });
        $('.tabbed').each(function() {
            var $that;
            $(this).find('.wpb_tab').each(function(i) {
                if ($(this).is('[data-tab-icon]') && $(this).attr('data-tab-icon').length > 0) {
                    $(this).parents('.tabbed').addClass('using-icons');
                    $(this).parents('.tabbed').find('.wpb_tabs_nav li:nth-child(' + (i + 1) + ') > a').prepend('<i class="' + $(this).attr("data-tab-icon") + '"></i>');
                }
                if ($(this).find('.im-icon-wrap.tab-icon').length > 0) {
                    var $svg_icon_markup = $(this).find('.im-icon-wrap.tab-icon').detach();
                    $(this).parents('.tabbed').find('.wpb_tabs_nav li:nth-child(' + (i + 1) + ') > a').prepend($svg_icon_markup);
                }
            });
            if ($(this).find('.swiper-container').length == 0 && $(this).find('.testimonial_slider').length == 0 && $(this).find('.portfolio-items:not(".carousel")').length == 0 && $(this).find('.wpb_gallery .portfolio-items').length == 0 && $(this).find('iframe').length == 0) {
                $(this).find('> ul li:first-child a').trigger('click');
            }
            if ($(this).find('.testimonial_slider').length > 0 || $(this).find('.portfolio-items:not(".carousel")').length > 0 || $(this).find('.wpb_gallery .portfolio-items').length > 0 || $(this).find('iframe').length > 0) {
                $that = $(this);
                $(this).find('.wpb_tab').show().css({
                    'opacity': 0,
                    'height': '1px'
                });
                $(this).find('> ul li a').addClass('loading');
                setTimeout(function() {
                    $that.find('.wpb_tab').hide().css({
                        'opacity': 1,
                        'height': 'auto'
                    });
                    $that.find('> ul li a').removeClass('loading');
                    $that.find('> ul li:first-child a').trigger('click');
                    tabbbedDeepLinking();
                }, 900);
            }
            $that = $(this);
            setTimeout(function() {
                if ($that.is('[data-style="minimal_alt"]')) {
                    $that.find('> ul').append('<li class="magic-line" />');
                    magicLineCalc($that.find('> ul > li:first-child > a'));
                }
            }, 100);
        });
        if ($('.tabbed[data-style="minimal_alt"]').length > 0) {
            $window.on('smartresize', function() {
                magicLineCalc($('.tabbed[data-style="minimal_alt"] > ul > li > a.active-tab'));
            });
        }
        tabbbedDeepLinking();
    }

    function accordionDeepLinking() {
        if (typeof nectarGetQueryParam['toggle'] != 'undefined') {
            $('.toggles').each(function() {
                $(this).find('.toggle').each(function() {
                    var $currentText = $(this).find('h3 a').clone();
                    var $getText = nectarGetQueryParam['toggle'];
                    $($currentText).find('i').remove();
                    $currentText = $currentText.text();
                    $currentText = $currentText.replace(/\s+/g, '-').toLowerCase();
                    $getText = $getText.replace(/\s+/g, '-').replace(/</g, '&lt;').replace(/"/g, '&quot;').toLowerCase();
                    if ($currentText == $getText) {
                        $(this).find('h3 a').trigger('click');
                    }
                });
            });
        }
    }

    function accordionInit() {
        $body.on('click', '.toggle h3 a', function() {
            if (!$(this).parents('.toggles').hasClass('accordion')) {
                $(this).parents('.toggle').find('> div').slideToggle(300);
                $(this).parents('.toggle').toggleClass('open');
                if ($(this).parents('.toggle').hasClass('open')) {
                    $(this).find('i').attr('class', 'icon-minus-sign');
                } else {
                    $(this).find('i').attr('class', 'icon-plus-sign');
                }
                if ($(this).parents('.toggle').find('> div .iframe-embed').length > 0 && $(this).parents('.toggle').find('> div iframe.iframe-embed').height() == '0') {
                    responsiveVideoIframes();
                }
                if ($(this).parents('.full-width-content').length > 0) {
                    setTimeout(function() {
                        fullWidthContentColumns();
                    }, 300);
                }
                if ($('#nectar_fullscreen_rows').length > 0) {
                    setTimeout(function() {
                        $window.trigger('smartresize');
                    }, 300);
                }
                return false;
            }
        });
        $body.on('click', '.accordion .toggle h3 a', function() {
            if ($(this).parents('.toggle').hasClass('open')) {
                return false;
            }
            var $t;
            var $parentToggles = $(this).parents('.toggles');
            var $parentToggle = $(this).parents('.toggle');
            $parentToggles.find('.toggle > div').slideUp(300);
            $parentToggles.find('.toggle h3 a i').attr('class', 'icon-plus-sign');
            $parentToggles.find('.toggle').removeClass('open');
            $parentToggle.find('> div').slideDown(300);
            $parentToggle.addClass('open');
            if ($parentToggle.hasClass('open')) {
                $(this).find('i').attr('class', 'icon-minus-sign');
            } else {
                $(this).find('i').attr('class', 'icon-plus-sign');
            }
            if ($(this).parents('.full-width-content').length > 0) {
                clearTimeout($t);
                $t = setTimeout(function() {
                    fullWidthContentColumns();
                }, 400);
            }
            if ($('#nectar_fullscreen_rows').length > 0) {
                clearTimeout($t);
                $t = setTimeout(function() {
                    $window.trigger('smartresize');
                }, 400);
            }
            return false;
        });
        $('.accordion').each(function() {
            $(this).find('> .toggle').first().addClass('open').find('> div').show();
            $(this).find('> .toggle').first().find('a i').attr('class', 'icon-minus-sign');
        });
        $('.toggles').each(function() {
            var $isAccordion = ($(this).hasClass('accordion')) ? true : false;
            $(this).find('.toggle').each(function() {
                if ($(this).find('> div .testimonial_slider').length > 0 || $(this).find('> div iframe').length > 0) {
                    var $that = $(this);
                    $(this).find('> div').show().css({
                        'opacity': 0,
                        'height': '1px',
                        'padding': '0'
                    });
                    for (var i = 0; i < $testimonialSliders.length; i++) {
                        $testimonialSliders[i].testimonialHeightResize();
                    }
                    setTimeout(function() {
                        $that.find('> div').hide().css({
                            'opacity': 1,
                            'height': 'auto',
                            'padding': '10px 14px'
                        });
                        if ($isAccordion == true && $that.index() == 0) {
                            $that.find('> div').slideDown(300);
                        }
                    }, 900);
                }
            });
        });
        accordionDeepLinking();
    }

    function shadeColor(hex, lum) {
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        var rgb = "#",
            c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    }

    function createExtraJumboSize() {
        $('.nectar-3d-transparent-button').each(function() {
            if ($(this).css('visibility') != 'visible') {
                return;
            }
            var $that = $(this),
                $size = $that.attr('data-size'),
                $padding = 0;
            var $vert_height_divider = 1.7;
            if ($size == 'extra_jumbo') {
                var $font_size;
                if (nectarDOMInfo.winW < 1000 && nectarDOMInfo.winW > 690) {
                    $padding = 64;
                    $font_size = 34;
                    $that.find('.back-3d rect').attr('stroke-width', '12');
                    $vert_height_divider = 1.7;
                } else if (nectarDOMInfo.winW <= 690) {
                    $padding = 46;
                    $font_size = 16;
                    $that.find('.back-3d rect').attr('stroke-width', '10');
                    $vert_height_divider = 1.7;
                } else {
                    $padding = 100;
                    $font_size = 64;
                    $that.find('.back-3d rect').attr('stroke-width', '20');
                    $vert_height_divider = 1.6;
                }
                $that.find('svg text').attr('font-size', $font_size);
                var $boundingRect = $(this).find('.back-3d .button-text')[0].getBoundingClientRect(),
                    $text_width = $boundingRect.width,
                    $text_height = $font_size * 1.5;
                $that.css({
                    'width': ($text_width + $padding * 1.5) + 'px',
                    'height': ($text_height + $padding) + 'px'
                });
                $that.find('> a').css({
                    'height': ($text_height + $padding) + 'px'
                });
                $that.find('.back-3d svg, .front-3d svg').css({
                    'width': ($text_width + $padding * 1.5) + 'px',
                    'height': ($text_height + $padding) + 'px'
                }).attr('viewBox', '0 0 ' + ($text_width + $padding) + ' ' + ($text_height + $padding));
                $that.find('svg text').attr('transform', 'matrix(1 0 0 1 ' + ($text_width + $padding * 1.6) / 2 + ' ' + (($text_height + $padding) / $vert_height_divider) + ')');
                $that.find('.front-3d ').css('transform-origin', '50% 50% -' + ($text_height + $padding) / 2 + 'px');
                $that.find('.back-3d').css('transform-origin', '50% 50% -' + ($text_height + $padding) / 2 + 'px');
            }
        });
    }

    function coloredButtons() {
        $('.nectar-button.see-through[data-color-override], .nectar-button.see-through-2[data-color-override], .nectar-button.see-through-3[data-color-override]').each(function() {
            var $usingMaterialSkin = ($('body.material[data-button-style^="rounded"]').length > 0) ? true : false;
            $(this).css('visibility', 'visible');
            if ($(this).hasClass('see-through-3') && $(this).attr('data-color-override') == 'false') {
                return true;
            }
            var $color;
            var $that;
            if ($(this).attr('data-color-override') != 'false') {
                $color = $(this).attr('data-color-override');
            } else {
                if ($(this).parents('.dark').length > 0) {
                    $color = '#000000';
                } else {
                    $color = '#ffffff';
                }
            }
            if (!$(this).hasClass('see-through-3')) {
                $(this).css('color', $color);
            }
            $(this).find('i').css('color', $color);
            var colorInt = parseInt($color.substring(1), 16);
            var $hoverColor = ($(this).has('[data-hover-color-override]')) ? $(this).attr('data-hover-color-override') : 'no-override';
            var $hoverTextColor = ($(this).has('[data-hover-text-color-override]')) ? $(this).attr('data-hover-text-color-override') : '#fff';
            var R = (colorInt & 0xFF0000) >> 16;
            var G = (colorInt & 0x00FF00) >> 8;
            var B = (colorInt & 0x0000FF) >> 0;
            var $opacityStr = ($(this).hasClass('see-through-3')) ? '1' : '0.75';
            $(this).css('border-color', 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')');
            if ($usingMaterialSkin) {
                $(this).find('i').css({
                    'background-color': 'rgba(' + R + ',' + G + ',' + B + ',1)',
                    'box-shadow': '0px 8px 15px rgba(' + R + ',' + G + ',' + B + ',0.24)'
                });
            }
            if ($(this).hasClass('see-through')) {
                $that = $(this);
                $(this).on('mouseenter touchstart', function() {
                    $that.css('border-color', 'rgba(' + R + ',' + G + ',' + B + ',1)');
                });
                $(this).on('mouseleave touchtouchend', function() {
                    $that.css('border-color', 'rgba(' + R + ',' + G + ',' + B + ',1)');
                    $opacityStr = ($(this).hasClass('see-through-3')) ? '1' : '0.75';
                    $that.css('border-color', 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')');
                });
            } else {
                $(this).find('i').css('color', $hoverTextColor);
                if ($hoverColor != 'no-override') {
                    $that = $(this);
                    $(this).on('mouseenter touchstart', function() {
                        $that.css({
                            'border-color': $hoverColor,
                            'background-color': $hoverColor,
                            'color': $hoverTextColor
                        });
                        if ($usingMaterialSkin) {
                            $that.find('i').css({
                                'background-color': '',
                                'box-shadow': ''
                            });
                        }
                    });
                    $(this).on('mouseleave touchtouchend', function() {
                        $opacityStr = ($(this).hasClass('see-through-3')) ? '1' : '0.75';
                        if ($usingMaterialSkin) {
                            $that.find('i').css({
                                'background-color': 'rgba(' + R + ',' + G + ',' + B + ',1)',
                                'box-shadow': '0px 8px 15px rgba(' + R + ',' + G + ',' + B + ',0.24)'
                            });
                        }
                        if (!$that.hasClass('see-through-3')) {
                            $that.css({
                                'border-color': 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')',
                                'background-color': 'transparent',
                                'color': $color
                            });
                        } else {
                            $that.css({
                                'border-color': 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')',
                                'background-color': 'transparent'
                            });
                        }
                    });
                } else {
                    $that = $(this);
                    $(this).on('mouseenter touchstart', function() {
                        $that.css({
                            'border-color': $hoverColor,
                            'color': $hoverTextColor
                        });
                    });
                    $(this).on('mouseleave touchtouchend', function() {
                        $opacityStr = ($that.hasClass('see-through-3')) ? '1' : '0.75';
                        $that.css({
                            'border-color': 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')',
                            'color': $hoverTextColor
                        });
                    });
                }
            }
        });
        $('.nectar-button:not(.see-through):not(.see-through-2):not(.see-through-3)[data-color-override]').each(function() {
            $(this).css('visibility', 'visible');
            if ($(this).attr('data-color-override') != 'false') {
                var $color = $(this).attr('data-color-override');
                $(this).removeClass('accent-color').removeClass('extra-color-1').removeClass('extra-color-2').removeClass('extra-color-3').css('background-color', $color);
            }
        });
        if ($('.swiper-slide .solid_color_2').length > 0 || $('.tilt-button-inner').length > 0) {
            var $tiltButtonCssString = '';
            var $color;
            $('.swiper-slide .solid_color_2 a').each(function(i) {
                $(this).addClass('instance-' + i);
                if ($(this).attr('data-color-override') != 'false') {
                    $color = $(this).attr('data-color-override');
                } else {
                    if ($(this).parents('.dark').length > 0) {
                        $color = '#000000';
                    } else {
                        $color = '#ffffff';
                    }
                }
                $(this).css('color', $color);
                $(this).find('i').css('color', $color);
                var $currentColor = $(this).css('background-color'),
                    $topColor = shadeColor($currentColor, 0.13),
                    $bottomColor = shadeColor($currentColor, -0.15);
                $tiltButtonCssString += '.swiper-slide .solid_color_2 a.instance-' + i + ':after { background-color: ' + $topColor + ';  }' + ' .swiper-slide .solid_color_2 a.instance-' + i + ':before { background-color: ' + $bottomColor + '; } ';
            });
            $('.tilt-button-wrap a').each(function(i) {
                $(this).addClass('instance-' + i);
                var $currentColor = $(this).css('background-color');
                var $color;
                if ($(this).attr('data-color-override') != 'false') {
                    $color = $(this).attr('data-color-override');
                    $(this).css('background-color', $color);
                    $currentColor = $color;
                }
                var $topColor = shadeColor($currentColor, 0.13),
                    $bottomColor = shadeColor($currentColor, -0.15);
                $tiltButtonCssString += '.tilt-button-wrap a.instance-' + i + ':after { background-color: ' + $topColor + ';  }' + ' .tilt-button-wrap a.instance-' + i + ':before { background-color: ' + $bottomColor + '; } ';
            });
            nectarCreateStyle($tiltButtonCssString, 'tilt-button');
        }
        if ($('.nectar-3d-transparent-button').length > 0) {
            var $3dTransButtonCssString = '';
            $('.nectar-3d-transparent-button').each(function(i) {
                var $that = $(this),
                    $size = $that.attr('data-size'),
                    $padding = 0,
                    v1 = 1.5,
                    v2 = 1.65,
                    $font_size;
                if ($size == 'large') {
                    $padding = 46;
                    $font_size = 16;
                    v1 = 1.5;
                    v2 = 1.7;
                } else if ($size == 'medium') {
                    $padding = 30;
                    $font_size = 16;
                } else if ($size == 'small') {
                    $padding = 20;
                    $font_size = 12;
                } else if ($size == 'jumbo') {
                    $padding = 54;
                    $font_size = 24;
                    v1 = 1.5;
                    v2 = 1.68;
                } else if ($size == 'extra_jumbo') {
                    $padding = 100;
                    $font_size = 64;
                    v1 = 1.6;
                    v2 = 1.6;
                }
                $that.find('svg text').attr('font-size', $font_size);
                var $boundingRect = $(this).find('.back-3d .button-text')[0].getBoundingClientRect(),
                    $text_width = $boundingRect.width,
                    $text_height = $font_size * 1.5;
                $that.css({
                    'width': ($text_width + $padding * 1.5) + 'px',
                    'height': ($text_height + $padding) + 'px'
                });
                $that.find('> a').css({
                    'height': ($text_height + $padding) + 'px'
                });
                $that.find('.back-3d svg, .front-3d svg').css({
                    'width': ($text_width + $padding * 1.5) + 'px',
                    'height': ($text_height + $padding) + 'px'
                }).attr('viewBox', '0 0 ' + ($text_width + $padding) + ' ' + ($text_height + $padding));
                $that.find('svg text').attr('transform', 'matrix(1 0 0 1 ' + ($text_width + $padding * v1) / 2 + ' ' + (($text_height + $padding) / v2) + ')');
                $that.find('.front-3d, .back-3d').css('transform-origin', '50% 50% -' + ($text_height + $padding) / 2 + 'px');
                $(this).find('.front-3d svg > rect').attr('id', 'masked-rect-id-' + i);
                $(this).find('.front-3d defs mask').attr('id', 'button-text-mask-' + i);
                $that.css('visibility', 'visible');
                $3dTransButtonCssString += '#masked-rect-id-' + i + ' { mask: url(#button-text-mask-' + i + '); -webkit-mask: url(#button-text-mask-' + i + ')} ';
            });
            createExtraJumboSize();
            $window.on('smartresize', createExtraJumboSize);
            nectarCreateStyle($3dTransButtonCssString, 'nectar-td-button');
        }
        setTimeout(function() {
            $('.nectar-button[class*="color-gradient"] .start').removeClass('loading');
        }, 150);
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.match(/Trident\/7\./)) {
            $('.nectar-button[class*="color-gradient"] .start').addClass('no-text-grad');
        }
    }

    function largeIconHover() {
        $('.icon-3x').each(function() {
            $(this).closest('.col').on('mouseenter', function() {
                $(this).find('.icon-3x').addClass('hovered');
            });
            $(this).closest('.col').on('mouseleave', function() {
                $(this).find('.icon-3x').removeClass('hovered');
            });
        });
        if (navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.match(/Trident\/7\./)) {
            $('[class^="icon-"][class*="color-gradient"], .nectar_icon_wrap[data-color*="extra-color-gradient"] .nectar_icon, .nectar-gradient-text').addClass('no-grad');
        }
    }

    function teamMemberFullscreen() {
        if ($('.team-member').length === 0) {
            return;
        }
        $body.on('click', '.team-member[data-style="bio_fullscreen"], .team-member[data-style="bio_fullscreen_alt"]', function() {
            if ($('.nectar_team_member_overlay').length > 0) {
                return;
            }
            var $usingBoxedClass = ($('body > #boxed').length > 0) ? 'in-boxed' : '',
                $teamMemberMeta = $(this).find('.nectar_team_bio').html(),
                $teamMemberTitle = ($(this).is('[data-style="bio_fullscreen_alt"]')) ? $(this).find('.team-meta h5').html() : $(this).find('.team-meta p').html(),
                $teamMemberImg = ($(this).find('.nectar_team_bio_img[data-img-src]').length > 0) ? $(this).find('.nectar_team_bio_img').attr('data-img-src') : '',
                $teamMemberStyle = ($(this).is('[data-style="bio_fullscreen_alt"]')) ? 'bio-fullscreen-alt' : 'bio-fullscreen',
                $teamName = '';
            if ($(this).is('[data-style="bio_fullscreen_alt"]')) {
                $teamName = '<div class="title">' + $teamMemberTitle + '</div><h2>' + $(this).find('.team-meta h3').html() + '</h2>';
            } else {
                $teamName = '<h2>' + $(this).find('.team-meta h3').html() + '</h2><div class="title">' + $teamMemberTitle + '</div>';
            }
            $body.append('<div class="nectar_team_member_overlay ' + $usingBoxedClass + '" data-style="' + $teamMemberStyle + '"><div class="inner-wrap"><div class="team_member_details"><div class="bio-inner"><span class="mobile-close"></span>' + $teamName + '<div class="team-desc">' + $teamMemberMeta + '</div></div></div><div class="team_member_picture"><div class="team_member_image_bg_cover"></div><div class="team_member_picture_wrap"><div class="team_member_image"></div></div></div></div></div>');
            if ($teamMemberImg.length > 0) {
                var teamTmpImg = new Image();
                teamTmpImg.src = $teamMemberImg;
                teamTmpImg.onload = function() {
                    $('.nectar_team_member_overlay .team_member_image').css('opacity', '1');
                };
                $('.nectar_team_member_overlay .team_member_image').css({
                    'background-image': 'url("' + $teamMemberImg + '")'
                });
            }
            var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 0 : $headerOuterEl.height();
            $('.nectar_team_member_overlay .inner-wrap').css({
                'padding-top': $headerNavSpace
            });
            if ($('.using-mobile-browser').length > 0) {
                $('body,html').addClass('nectar-no-scrolling');
            }
            teamFullscreenResize();
            $('.nectar_team_member_overlay').addClass('open').addClass('animating');
            setTimeout(function() {
                $('.nectar_team_member_close').addClass('visible');
                $('.nectar_team_member_overlay').removeClass('animating');
            }, 500);
            if ($('.using-mobile-browser').length == 0) {
                fullscreenBioScrolling();
            }
            if ($('.team-member[data-style="bio_fullscreen"]').length > 0 && nectarDOMInfo.usingMobileBrowser) {
                $('.nectar_team_member_overlay').addClass('on-mobile');
            }
        });
        $body.on('click', '.nectar_team_member_overlay', function() {
            if (!$(this).hasClass('animating')) {
                $('.nectar_team_member_overlay').removeClass('open');
                $('.nectar_team_member_close').removeClass('visible');
                if ($('.using-mobile-browser').length > 0) {
                    $('body,html').removeClass('nectar-no-scrolling');
                }
                setTimeout(function() {
                    $('.nectar_team_member_overlay, .nectar_team_member_close').remove();
                }, 820);
            }
        });
        if ($('.team-member[data-style="bio_fullscreen"]').length > 0 || $('.team-member[data-style="bio_fullscreen_alt"]').length > 0) {
            $window.on('resize', teamFullscreenResize);
            if (!nectarDOMInfo.usingMobileBrowser) {
                var closeIndicator = new NectarIconMouseFollow('', 'close-indicator');
            }
        }
    }

    function teamFullscreenResize() {
        var $leftHeaderSize = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 275 : 0;
        $('.nectar_team_member_overlay').css({
            'width': $window.width() - $leftHeaderSize,
            'left': $leftHeaderSize
        });
    }

    function fullscreenBioScrolling() {
        $('.nectar_team_member_overlay .inner-wrap').mousewheel(function(event, delta) {
            this.scrollTop -= (delta * 30);
            event.preventDefault();
        });
    }

    function columnBGColors() {
        var $columnColorCSS = '';
        $('.wpb_column').each(function(i) {
            $(this).removeClass(function(index, className) {
                return (className.match(/(^|\s)instance-\S+/g) || []).join(' ');
            });
            $(this).addClass('instance-' + i);
            var $innerSelector = ($(this).find('> .vc_column-inner > .column-bg-overlay-wrap').length > 0 || $(this).find('> .vc_column-inner > .column-bg-overlay').length > 0) ? ' > .vc_column-inner ' : '';
            var $innerWrapSelector = ($(this).find($innerSelector + ' > .column-bg-overlay-wrap').length > 0) ? '> .column-bg-overlay-wrap ' : '';
            if ($(this).attr('data-has-bg-color') == 'true') {
                $columnColorCSS += '.wpb_column.instance-' + i + $innerSelector + $innerWrapSelector + ' > .column-bg-overlay { background-color:' + $(this).attr('data-bg-color') + ';  opacity: ' + $(this).attr('data-bg-opacity') + '; }';
            }
            if ($(this).is('[data-hover-bg^="#"]')) {
                $columnColorCSS += '.wpb_column.instance-' + i + ':hover ' + $innerSelector + $innerWrapSelector + ' > .column-bg-overlay { background-color: ' + $(this).attr('data-hover-bg') + '!important; opacity: ' + $(this).attr('data-hover-bg-opacity') + '!important; }';
            }
        });
        nectarCreateStyle($columnColorCSS, 'column-bg-colors');
    }

    function nectarLiquidBGs() {
        $liquidBG_EL = [];
        if (typeof NectarLiquid == 'undefined' || nectarDOMInfo.usingFrontEndEditor) {
            return;
        }
        $('.row-bg-wrap[data-bg-animation*="displace-filter"] .row-bg.using-image, .column-image-bg-wrap[data-bg-animation*="displace-filter"] .column-image-bg').each(function(i) {
            var $that_el = $(this);
            var $type;
            var $el_type;
            if ($(this).is('.row-bg')) {
                $type = $(this).parents('.row-bg-wrap').attr('data-bg-animation');
                $el_type = 'row';
            } else if ($(this).is('.column-image-bg')) {
                $type = $(this).parents('.column-image-bg-wrap').attr('data-bg-animation');
                $el_type = 'col';
            }
            $liquidBG_EL[i] = new NectarLiquid($that_el, $type, $el_type);
        });
    }

    function morphingOutlines() {
        if ($('.morphing-outline').length > 0) {
            var $morphingOutlineCSS = '',
                $frontEndEditorMOSelector = ($('body.vc_editor').length > 0) ? '' : '>';
            $('.morphing-outline').each(function(i) {
                $(this).removeClass(function(index, className) {
                    return (className.match(/(^|\s)instance-\S+/g) || []).join(' ');
                });
                $(this).addClass('instance-' + i).css({
                    'visibility': 'visible'
                });
                var $width = $(this).find('.inner').width(),
                    $height = $(this).find('.inner').height(),
                    $border = parseInt($(this).attr("data-border-thickness")),
                    $hover = ($('body[data-button-style*="rounded"]').length > 0) ? ':hover' : '',
                    $hover2 = ($('body[data-button-style*="rounded"]').length > 0) ? '' : ':hover';
                $morphingOutlineCSS += 'body .morphing-outline.instance-' + i + ' .inner > * { color: ' + $(this).attr("data-starting-color") + '; } ';
                $morphingOutlineCSS += 'body .morphing-outline.instance-' + i + ' .inner:after  { border-width:' + $(this).attr("data-border-thickness") + 'px ; border-color: ' + $(this).attr("data-starting-color") + '; } ';
                $morphingOutlineCSS += 'body .wpb_column:hover > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner > *, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner > * { color: ' + $(this).attr("data-hover-color") + '; } ';
                $morphingOutlineCSS += 'body .wpb_column:hover > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after  { border-color: ' + $(this).attr("data-hover-color") + '; } ';
                $morphingOutlineCSS += 'body .wpb_column' + $hover2 + ' > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column' + $hover2 + ' > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after { padding: ' + (($width + 100 + $border * 2 - $height) / 2 - $border) + 'px 50px}';
                $morphingOutlineCSS += '.morphing-outline.instance-' + i + ' { padding: ' + (30 + ($width + 80 + $border * 2 - $height) / 2 - $border) + 'px 50px}';
                $morphingOutlineCSS += 'body .wpb_column' + $hover2 + ' > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column' + $hover2 + ' > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after { top: -' + parseInt((($width + 100 + $border * 2 - $height) / 2 - $border) + $border) + 'px }';
                $morphingOutlineCSS += 'body .wpb_column > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after { left: -' + parseInt(50 + $border) + 'px }';
                $morphingOutlineCSS += 'body .wpb_column' + $hover + ' > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column' + $hover + ' > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after { padding: 50px 50px}';
                $morphingOutlineCSS += 'body .wpb_column' + $hover + ' > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column' + $hover + ' > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after { top: -' + parseInt(50 + $border) + 'px }';
            });
            nectarCreateStyle($morphingOutlineCSS, 'morphing-outlines');
        }
    }

    function morphingOutlinesInit() {
        if ($('.morphing-outline').length > 0) {
            setTimeout(morphingOutlines, 100);
            setTimeout(fullWidthContentColumns, 125);
            $window.on('smartresize', morphingOutlines);
        }
    }

    function svgAnimations() {
        var $svgOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
        if ($svgIcons.length == 0) {
            $('.svg-icon-holder:not(.animated-in)').has('svg').each(function(i) {
                var $that = $(this);
                if (nectarDOMInfo.usingMobileBrowser) {
                    $that.attr('data-animation', 'false');
                }
                $that.find('svg').css({
                    'height': parseInt($that.attr('data-size')) + 'px',
                    'width': parseInt($that.attr('data-size')) + 'px'
                });
                $(this).find('svg').attr('id', 'nectar-svg-animation-instance-' + i);
                var $animationSpeed = ($that.is('[data-animation-speed]') && $that.attr('data-animation-speed').length > 0) ? $that.attr('data-animation-speed') : 200;
                if ($that.attr('data-animation') == 'false') {
                    $animationSpeed = 1;
                    $that.css('opacity', '1');
                }
                if (!$that.hasClass('bound')) {
                    $svgIcons[i] = new Vivus($that.find('svg').attr('id'), {
                        type: 'delayed',
                        pathTimingFunction: Vivus.EASE_OUT,
                        animTimingFunction: Vivus.LINEAR,
                        duration: $animationSpeed,
                        onReady: svgInit
                    });
                }
                if ($animationSpeed !== 1) {
                    var waypoint = new Waypoint({
                        element: $that,
                        handler: function() {
                            if ($that.hasClass('animated-in')) {
                                waypoint.destroy();
                                return;
                            }
                            checkIfReady();
                            $that.addClass('animated-in');
                            waypoint.destroy();
                        },
                        offset: $svgOffsetPos
                    });
                } else {
                    checkIfReady();
                }

                function checkIfReady() {
                    var $animationDelay = 0;
                    if ($that.is('[data-animation-delay]') && $that.attr('data-animation-delay').length > 0 && $that.attr('data-animation') != 'false') {
                        $animationDelay = $that.attr('data-animation-delay');
                    }
                    var $iconID = $that.find('svg').attr('id').replace(/[^0-9]/g, '');
                    if ($svgIcons[$iconID].isReady == true) {
                        setTimeout(function() {
                            $that.css('opacity', '1');
                            $svgIcons[$iconID].reset().play();
                        }, $animationDelay);
                    } else {
                        setTimeout(checkIfReady, 50);
                    }
                }

                function svgInit() {
                    $that.css({
                        'height': parseInt($that.attr('data-size')) + 'px',
                        'width': parseInt($that.attr('data-size')) + 'px'
                    });
                }
                $that.addClass('bound');
            });
            if ($('.vc_row-o-equal-height .svg-icon-holder[data-animation="true"]').length > 0 && $('#nectar_fullscreen_rows').length == 0) {
                $window.on('smartresize', function() {
                    clearTimeout($svgResizeTimeout);
                    $svgResizeTimeout = setTimeout(function() {
                        if ($svgIcons.length > 0) {
                            $('.svg-icon-holder.animated-in').each(function() {
                                $(this).css('opacity', '1');
                                if ($(this).is('[id]')) {
                                    var $iconID = $(this).attr('id').replace(/[^0-9]/g, '');
                                    $svgIcons[$iconID].finish();
                                }
                            });
                        }
                    }, 300);
                });
            }
        } else {
            $('.svg-icon-holder').addClass('animated-in').css('opacity', '1');
        }
        $('#nectar_fullscreen_rows .svg-icon-holder.animated-in').has('svg').each(function(i) {
            var $animationDelay = 0;
            if ($(this).is('[data-animation-delay]') && $(this).attr('data-animation-delay').length > 0 && $(this).attr('data-animation') != 'false') {
                $animationDelay = $(this).attr('data-animation-delay');
            }
            var $that = $(this);
            var $iconID = $that.find('svg').attr('id').replace(/[^0-9]/g, '');
            clearTimeout($animatedSVGIconTimeout[i]);
            if ($that.attr('data-animation') == 'false') {
                $that.css('opacity', '1');
                $svgIcons[$iconID].finish();
            } else {
                if ($(this).parents('.active').length > 0 || $(this).parents('#footer-outer').length > 0 || $('body.mobile').length > 0) {
                    $svgIcons[$iconID].reset();
                    $animatedSVGIconTimeout[i] = setTimeout(function() {
                        $svgIcons[$iconID].play();
                    }, $animationDelay);
                } else {
                    $svgIcons[$iconID].reset().stop();
                }
            }
        });
    }

    function nectarFancyUlInit() {
        $($fullscreenSelector + '.nectar-fancy-ul').each(function() {
            var $animation = $(this).attr('data-animation'),
                $animationDelay = 0;
            if ($(this).is('[data-animation-delay]') && $(this).attr('data-animation-delay').length > 0 && $(this).attr('data-animation') != 'false') {
                $animationDelay = $(this).attr('data-animation-delay');
            }
            if ($animation == 'true') {
                var $that = $(this),
                    waypoint = new Waypoint({
                        element: $that,
                        handler: function() {
                            if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
                                waypoint.destroy();
                                return;
                            }
                            setTimeout(function() {
                                $that.find('li').each(function(i) {
                                    var $that = $(this);
                                    $that.delay(i * 220).transition({
                                        'opacity': '1',
                                        'left': '0'
                                    }, 220, 'easeOutCubic');
                                });
                            }, $animationDelay);
                            $that.addClass('animated-in');
                            waypoint.destroy();
                        },
                        offset: 'bottom-in-view'
                    });
            }
        });
    }

    function nectarFancyUlIcons() {
        $('.nectar-fancy-ul:not([data-list-icon="dot"])').each(function() {
            var $icon = $(this).attr('data-list-icon'),
                $color = $(this).attr('data-color');
            $(this).find('li').each(function() {
                $(this).find('> i').remove();
                $(this).prepend('<i class="icon-default-style ' + $icon + ' ' + $color + '"></i> ');
            });
        });
    }

    function flipBoxHeights() {
        $('.nectar-flip-box').each(function() {
            var $flipBoxMinHeight = parseInt($(this).attr('data-min-height')),
                $flipBoxHeight = $(this).find('.flip-box-front .inner').height();
            if ($(this).find('.flip-box-back .inner').height() > $(this).find('.flip-box-front .inner').height()) {
                $flipBoxHeight = $(this).find('.flip-box-back .inner').height();
            }
            if ($flipBoxHeight >= $flipBoxMinHeight - 80) {
                $(this).find('> div').css('height', $flipBoxHeight + 80);
            } else {
                $(this).find('> div').css('height', 'auto');
            }
            if ($(this).parent().hasClass('wpb_wrapper')) {
                $(this).parent().css('transform', 'translateZ(0)');
            }
        });
    }

    function flipBoxInit() {
        if ($('.nectar-flip-box').length > 0) {
            if (nectarDOMInfo.usingMobileBrowser) {
                $body.on('click', '.nectar-flip-box', function() {
                    $(this).toggleClass('flipped');
                });
            }
            flipBoxHeights();
            $window.on('smartresize', flipBoxHeights);
        }
    }
    $.fn.parallaxScroll = function(xpos, speedFactor, outerHeight) {
        var $windowDOMWidth = nectarDOMInfo.winW,
            $windowDOMHeight = nectarDOMInfo.winH,
            $orientationChange = 0,
            $this = $(this),
            firstTop = $this.offset().top;
        $this.each(function() {
            firstTop = $this.offset().top;
        });
        var getHeight = function(jqo) {
            return jqo.outerHeight(true);
        };
        if (arguments.length < 1 || xpos === null) {
            xpos = "50%";
        }
        if (arguments.length < 2 || speedFactor === null) {
            speedFactor = 0.25;
        }
        if (arguments.length < 3 || outerHeight === null) {
            outerHeight = true;
        }
        var $onMobileBrowser = nectarDOMInfo.usingMobileBrowser,
            classic_mobile_menu_open = false,
            firstSection = false,
            $element = $this,
            height = getHeight($element);
        $this.find('.row-bg.using-image, .page-header-bg-image, .image-bg, .video-wrap').addClass('translate');
        setInterval(function() {
            height = getHeight($element);
            classic_mobile_menu_open = ($('body.classic_mobile_menu_open.mobile').length > 0) ? true : false;
        }, 600);
        if ($element.parents('.top-level').length > 0 && $element.parents('.parallax_slider_outer').length > 0 || $element.parents('.top-level').length > 0 && $element.is('.nectar-recent-posts-single_featured') || $element.is('.wpb_row.top-level') || $('.wpb_row').length == 0) {
            firstSection = true;
        }
        if ($('.wpb_row').length == 0 && $element.parents('.parallax_slider_outer').length > 0 && $element.is('[data-full-width="true"]') || ($('#portfolio-extra').length > 0 && $element.parents('.parallax_slider_outer').length > 0 && $element.parents('.wpb_row').length > 0 && $element.parents('.wpb_row').index() == '0')) {
            firstSection = true;
        }
        if (nectarDOMInfo.usingFrontEndEditor) {
            firstSection = false;
        }
        var nectarSliderElBool = $this.is('.nectar-slider-wrap');
        var pageHeaderBool = ($this.find('.page-header-bg-image').length > 0) ? true : false;
        var $elToParallax = false;
        if (nectarSliderElBool) {
            if ($this.find('.video-wrap').length > 0 || $this.find('.image-bg').length > 0) {
                $elToParallax = $this.find('.video-wrap, .image-bg');
            }
        } else {
            if ($this.find('.row-bg.using-image').length > 0) {
                $elToParallax = $this.find('.row-bg.using-image');
            } else if ($this.find('.page-header-bg-image').length > 0) {
                $elToParallax = $this.find('.page-header-bg-image');
            }
        }

        function update() {
            firstTop = $element.offset().top;
            if ($elToParallax == false || firstTop + height < nectarDOMInfo.scrollTop || firstTop > nectarDOMInfo.scrollTop + nectarDOMInfo.winH || $('body.material-ocm-open').length > 0) {} else {
                if (nectarSliderElBool) {
                    if (firstSection) {
                        if (!classic_mobile_menu_open) {
                            $this.find('.video-wrap, .image-bg').css({
                                'transform': 'translate3d(0, ' + parseFloat(nectarDOMInfo.scrollTop * speedFactor) + 'px, 0)'
                            });
                        }
                    } else {
                        $this.find('.video-wrap, .image-bg').css({
                            'transform': 'translate3d(0, ' + parseFloat((($windowDOMHeight + nectarDOMInfo.scrollTop - firstTop) * speedFactor)) + 'px, 0)'
                        });
                    }
                } else {
                    if (firstSection) {
                        if (!classic_mobile_menu_open) {
                            $elToParallax.css({
                                'transform': 'translate3d(0, ' + parseFloat(nectarDOMInfo.scrollTop * speedFactor) + 'px, 0)'
                            });
                        }
                    } else {
                        $elToParallax.css({
                            'transform': 'translate3d(0, ' + parseFloat((($windowDOMHeight + nectarDOMInfo.scrollTop - firstTop) * speedFactor)) + 'px, 0), scale(1.005)'
                        });
                    }
                    if (pageHeaderBool && !classic_mobile_menu_open) {
                        $elToParallax.css({
                            'transform': 'translate3d(0, ' + parseFloat(nectarDOMInfo.scrollTop * speedFactor) + 'px, 0)'
                        });
                    }
                }
            }
            if ($onMobileBrowser) {
                requestAnimationFrame(update);
            }
        }
        if (window.addEventListener) {
            if (nectarDOMInfo.usingFrontEndEditor || !nectarDOMInfo.usingMobileBrowser) {
                $window.on('resize', function() {
                    $windowDOMWidth = nectarDOMInfo.winW;
                    $windowDOMHeight = nectarDOMInfo.winH;
                });
            }
            if (nectarDOMInfo.usingFrontEndEditor) {
                $window.on('scroll.parallaxSections', update);
            } else if (!nectarDOMInfo.usingMobileBrowser) {
                window.addEventListener('scroll', function() {
                    requestAnimationFrame(update);
                }, false);
            } else {
                requestAnimationFrame(update);
                window.addEventListener("orientationchange", function() {
                    $orientationChange = 1;
                });
                $window.on('resize', function() {
                    if (($window.width() != $windowDOMWidth && $window.height != $windowDOMHeight) || $orientationChange == 1) {
                        $windowDOMWidth = nectarDOMInfo.winW;
                        $windowDOMHeight = nectarDOMInfo.winH;
                        $orientationChange = 0;
                    }
                });
            }
        }
        $window.on('resize.parallaxSections', update);
        update();
    };

    function fullWidthSectionsPreInit() {
        $('.wpb_row .vc_col-sm-12 .nectar-slider-wrap[data-full-width="true"]').each(function() {
            if ($(this).parents('.wpb_row.full-width-section').length == 0 && $(this).parents('.wpb_row.full-width-content').length == 0) {
                $(this).parents('.wpb_row').addClass('full-width-section');
            }
        });
    }

    function fullWidthSections() {
        var $windowInnerWidth = nectarDOMInfo.winW,
            $bodyBorderWidth = ($('.body-border-right').length > 0 && $windowInnerWidth > 1000) ? parseInt($('.body-border-right').width()) * 2 : 0,
            $container_width = ($('.container-wrap').length > 0) ? parseInt($('.container-wrap').outerWidth()) : $window.width();
        var $windowWidth, $justOutOfSight, $mainContentWidth;
        if ($('#boxed').length == 1) {
            $justOutOfSight = ((parseInt($('.container-wrap').width()) - parseInt($('.main-content').width())) / 2) + 4;
        } else {
            var $extResponsivePadding = ($('body[data-ext-responsive="true"]').length > 0 && $windowInnerWidth >= 1000) ? 180 : 0;
            if ($container_width - $bodyBorderWidth <= parseInt($('.main-content').css('max-width'))) {
                $windowWidth = parseInt($('.main-content').css('max-width'));
            } else {
                $windowWidth = $container_width - $bodyBorderWidth;
            }
            var $contentWidth = parseInt($('.main-content').css('max-width'));
            if ($('body.single-post[data-ext-responsive="true"]').length > 0 && $('.container-wrap.no-sidebar').length > 0) {
                $contentWidth = $('.post-area').width();
                $extResponsivePadding = 0;
            }
            $justOutOfSight = Math.ceil((($windowWidth + $extResponsivePadding - $contentWidth) / 2));
        }
        $('.carousel-outer').has('.carousel-wrap[data-full-width="true"]').css('overflow', 'visible');
        $('.carousel-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), .full-width-content').each(function() {
            var $leftHeaderSize = ($('#header-outer[data-format="left-header"]').length > 0 && $windowInnerWidth >= 1000) ? parseInt($('#header-outer[data-format="left-header"]').width()) : 0;
            var $bodyBorderWidth = ($('.body-border-right').length > 0 && $windowInnerWidth > 1000) ? (parseInt($('.body-border-right').width()) * 2) - 2 : 0;
            if ($('#boxed').length == 1) {
                $mainContentWidth = ($('#nectar_fullscreen_rows').length == 0) ? parseInt($('.main-content').width()) : parseInt($(this).parents('.container').width());
                if ($('body.single-post[data-ext-responsive="true"]').length > 0 && $('.container-wrap.no-sidebar').length > 0 && $(this).parents('.post-area').length > 0) {
                    $contentWidth = $('.post-area').width();
                    $extResponsivePadding = 0;
                    $windowWidth = $container_width - $bodyBorderWidth;
                    $justOutOfSight = Math.ceil((($windowWidth + $extResponsivePadding - $contentWidth) / 2));
                } else {
                    if ($(this).parents('.page-submenu').length > 0) {
                        $justOutOfSight = ((parseInt($('.container-wrap').width()) - $mainContentWidth) / 2);
                    } else {
                        $justOutOfSight = ((parseInt($('.container-wrap').width()) - $mainContentWidth) / 2) + 4;
                    }
                }
            } else {
                if ($('body.single-post[data-ext-responsive="true"]').length > 0 && $('.container-wrap.no-sidebar').length > 0 && $(this).parents('.post-area').length > 0) {
                    $contentWidth = $('.post-area').width();
                    $extResponsivePadding = 0;
                    $windowWidth = $container_width - $bodyBorderWidth;
                } else {
                    var $mainContentMaxWidth = ($('#nectar_fullscreen_rows').length == 0) ? parseInt($('.main-content').css('max-width')) : parseInt($(this).parents('.container').css('max-width'));
                    if ($container_width - $bodyBorderWidth <= $mainContentMaxWidth) {
                        $windowWidth = $mainContentMaxWidth;
                    }
                    $contentWidth = $mainContentMaxWidth;
                    $extResponsivePadding = ($('body[data-ext-responsive="true"]').length > 0 && nectarDOMInfo.winW >= 1000) ? 180 : 0;
                    if ($leftHeaderSize > 0) {
                        $extResponsivePadding = ($('body[data-ext-responsive="true"]').length > 0 && nectarDOMInfo.winW >= 1000) ? 120 : 0;
                    }
                }
                $justOutOfSight = Math.ceil((($windowWidth + $extResponsivePadding - $contentWidth) / 2));
            }
            var $extraSpace = 0;
            if ($(this).hasClass('carousel-wrap')) {
                $extraSpace = 1;
            }
            if ($(this).hasClass('portfolio-items')) {
                $extraSpace = 5;
            }
            var $carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) : $container_width - $bodyBorderWidth + $extraSpace;
            if ($('#boxed').length == 0 && $(this).hasClass('portfolio-items') && $(this).is('[data-gutter*="px"]') && $(this).attr('data-gutter').length > 0 && $(this).attr('data-gutter') != 'none') {
                if ($container_width > 1000) {
                    $carouselWidth = $container_width - $bodyBorderWidth + 3;
                } else {
                    $carouselWidth = $container_width - $bodyBorderWidth;
                }
            }
            if ($(this).parent().hasClass('default-style')) {
                $mainContentWidth = ($('#nectar_fullscreen_rows').length == 0) ? parseInt($('.main-content').width()) : parseInt($(this).parents('.container').width());
                if ($('#boxed').length != 0) {
                    $carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) : $container_width + $extraSpace;
                } else {
                    $carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) : ($container_width - $bodyBorderWidth) - (($container_width - $bodyBorderWidth) * 0.025) + $extraSpace;
                    $windowWidth = ($container_width - $bodyBorderWidth <= $mainContentWidth) ? $mainContentWidth : ($container_width - $bodyBorderWidth) - (($container_width - $bodyBorderWidth) * 0.025);
                    $justOutOfSight = Math.ceil((($windowWidth - $mainContentWidth) / 2));
                }
            } else if ($(this).parent().hasClass('spaced')) {
                $mainContentWidth = ($('#nectar_fullscreen_rows').length == 0) ? parseInt($('.main-content').width()) : parseInt($(this).parents('.container').width());
                if ($('#boxed').length != 0) {
                    $carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) - ($container_width * 0.02) : $container_width + $extraSpace;
                } else {
                    $carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) : ($container_width - $bodyBorderWidth) - Math.ceil(($container_width - $bodyBorderWidth) * 0.02) + $extraSpace;
                    var $windowWidth2 = ($container_width - $bodyBorderWidth <= $mainContentWidth) ? $mainContentWidth : ($container_width - $bodyBorderWidth) - (($container_width - $bodyBorderWidth) * 0.02);
                    $justOutOfSight = Math.ceil((($windowWidth2 - $mainContentWidth) / 2) + 2);
                }
            }
            if (!$(this).parents('.span_9').length > 0 && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner' && $(this).parent().attr('id') != 'portfolio-extra' && !$(this).find('.carousel-wrap[data-full-width="true"]').length > 0 && !$(this).find('.nectar-carousel-flickity-fixed-content').length > 0 && !$(this).find('.portfolio-items:not(".carousel")[data-col-num="elastic"]').length > 0) {
                if ($('.single-product').length > 0 && $(this).parents('#tab-description').length > 0 && $(this).parents('.full-width-tabs').length == 0) {
                    $(this).css({
                        'visibility': 'visible'
                    });
                } else {
                    if ($(this).hasClass('portfolio-items')) {
                        $(this).css({
                            'margin-left': -$justOutOfSight,
                            'left': 0,
                            'width': $carouselWidth,
                            'visibility': 'visible'
                        });
                    } else {
                        if ($('#nectar_fullscreen_rows').length > 0 && $(this).hasClass('wpb_row')) {
                            $(this).css({
                                'margin-left': -$justOutOfSight,
                                'width': $carouselWidth,
                                'visibility': 'visible'
                            });
                        } else {
                            $(this).css({
                                'left': 0,
                                'margin-left': -$justOutOfSight,
                                'width': $carouselWidth,
                                'visibility': 'visible'
                            });
                        }
                    }
                }
            } else if ($(this).parent().attr('id') == 'portfolio-extra' && $('#full_width_portfolio').length != 0) {
                $(this).css({
                    'left': 0,
                    'margin-left': -$justOutOfSight,
                    'width': $carouselWidth,
                    'visibility': 'visible'
                });
            } else {
                $(this).css({
                    'margin-left': 0,
                    'width': 'auto',
                    'left': '0',
                    'visibility': 'visible'
                });
            }
        });
    }

    function parallaxSrollSpeed(speedString) {
        var speed;
        switch (speedString) {
            case 'slow':
                speed = 0.6;
                break;
            case 'medium':
                speed = 0.4;
                break;
            case 'fast':
                speed = 0.25;
                break;
        }
        return speed;
    }

    function parallaxScrollInit() {
        if (nectarDOMInfo.usingMobileBrowser && $('body[data-remove-m-parallax="1"]').length > 0) {
            return;
        }
        parallaxRowsBGCals();
        $('.nectar-recent-posts-single_featured, .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap').each(function() {
            var $id = $(this).attr('id');
            if ($(this).find('[data-parallax-speed="fixed"]').length == 0) {
                if ($(this).find('.row-bg').length == 0) {
                    $('#' + $id).parallaxScroll("50%", 0.25);
                } else {
                    $('#' + $id + ".parallax_section").parallaxScroll("50%", parallaxSrollSpeed($(this).find('.row-bg').attr('data-parallax-speed')));
                }
            }
            $(this).addClass('nectar-parallax-enabled');
        });
    }

    function firstFWSection() {
        $('.full-width-section.wpb_row, .full-width-content.wpb_row').each(function() {
            if (!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner') {
                if ($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) {
                    return false;
                }
                if ($(this).index() == '0' && $pageHeaderBG.length == 0 && $('.page-header-no-bg').length == 0 && $('.project-title').length == 0 && $('body.single').length == 0 && $('.project-title').length == 0) {
                    $(this).addClass('first-section');
                    var $that = $(this);
                    setTimeout(function() {
                        $that.addClass('loaded');
                    }, 50);
                }
            }
        });
    }

    function parallaxRowsBGCals() {
        if (nectarDOMInfo.usingMobileBrowser && $('body[data-remove-m-parallax="1"]').length > 0) {
            return;
        }
        $('.nectar-recent-posts-single_featured, .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap .slide-bg-wrap').each(function() {
            var $non_page_builder_slider;
            if ($(this).find('.row-bg').length == 0 && $(this).find('.page-header-bg-image').length > 0) {} else if ($(this).find('.row-bg').length == 0 && $(this).find('.image-bg').length > 0) {
                $non_page_builder_slider = false;
                if ($('.wpb_row').length == 0 && $(this).parents('.nectar-slider-wrap[data-full-width="true"]').length > 0 && $(this).parents('.parallax_slider_outer').length > 0 && $(this).parents('.parallax_slider_outer').index() == '1') {
                    $non_page_builder_slider = true;
                }
                if ($('#portfolio-extra').length > 0 && $(this).parents('.wpb_row').length > 0 && $(this).parents('.parallax_slider_outer').length > 0 && $(this).parents('.wpb_row').index() == '0') {
                    $non_page_builder_slider = true;
                }
                if ($(this).parents('.top-level').length > 0 && !nectarDOMInfo.usingFrontEndEditor || $non_page_builder_slider && !nectarDOMInfo.usingFrontEndEditor) {
                    $(this).find('.image-bg').css({
                        'height': Math.ceil($(this).parent().offset().top * 0.25) + $(this).outerHeight(true)
                    });
                } else {
                    $(this).find('.image-bg').css({
                        'height': Math.ceil($window.height() * 0.25) + $(this).outerHeight(true)
                    });
                }
            } else if ($(this).find('.row-bg').length == 0 && $(this).find('.video-wrap').length > 0) {
                $non_page_builder_slider = false;
                if ($('.wpb_row').length == 0 && $(this).parents('.nectar-slider-wrap[data-full-width="true"]').length > 0 && $(this).parents('.parallax_slider_outer').length > 0 && $(this).parents('.parallax_slider_outer').index() == '1') {
                    $non_page_builder_slider = true;
                }
                if ($('#portfolio-extra').length > 0 && $(this).parents('.wpb_row').length > 0 && $(this).parents('.parallax_slider_outer').length > 0 && $(this).parents('.wpb_row').index() == '0') {
                    $non_page_builder_slider = true;
                }
                if ($(this).parents('.top-level').length > 0 && !nectarDOMInfo.usingFrontEndEditor || $non_page_builder_slider && !nectarDOMInfo.usingFrontEndEditor) {
                    $(this).find('.video-wrap').css({
                        'height': Math.ceil($(this).parent().offset().top * 0.25) + $(this).outerHeight(true)
                    });
                } else {
                    $(this).find('.video-wrap').css({
                        'height': Math.ceil($window.height() * 0.25) + $(this).outerHeight(true)
                    });
                }
                var vid = $(this).find('.video-wrap video'),
                    vid_w_orig = 1280,
                    vid_h_orig = 720;
                var container_w = vid.parent().width(),
                    container_h = vid.parent().height(),
                    scale_w = container_w / vid_w_orig,
                    scale_h = container_h / vid_h_orig;
                var scale = scale_w > scale_h ? scale_w : scale_h;
                vid.width(scale * vid_w_orig);
                vid.height(scale * vid_h_orig);
            } else {
                if ($(this).is('.nectar-recent-posts-single_featured') && $(this).parents('.top-level').length > 0 && !nectarDOMInfo.usingFrontEndEditor) {} else if (!$(this).hasClass('top-level') || nectarDOMInfo.usingFrontEndEditor) {
                    var $ifFast = ($(this).find('.row-bg[data-parallax-speed="fast"]').length > 0) ? 60 : 0;
                    $(this).find('.row-bg').css({
                        'height': Math.ceil($window.height() * parallaxSrollSpeed($(this).find('.row-bg').attr('data-parallax-speed'))) + $(this).outerHeight(true) + $ifFast
                    });
                }
            }
        });
    }

    function fwsClasses() {
        $('.wpb_wrapper > .nectar-slider-wrap[data-full-width="true"]').each(function() {
            if (!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner') {
                if ($(this).parents('.wpb_row').index() == '0') {
                    $(this).addClass('first-nectar-slider');
                }
            }
        });
        var $contentElementsNum = ($('#portfolio-extra').length == 0) ? $('.main-content > .row > *').length : $('.main-content > .row #portfolio-extra > *').length;
        if ($('#portfolio-extra').length == 0) {
            $contentElementsNum = ($('.main-content > .row > .wpb_row').length > 0) ? $('.main-content > .row > .wpb_row').length : $('.main-content > .row > *').length;
        } else {
            $contentElementsNum = $('.main-content > .row #portfolio-extra > *').length;
        }
        $('.full-width-section, .full-width-content:not(.page-submenu .full-width-content):not(.blog-fullwidth-wrap), .row > .nectar-slider-wrap[data-full-width="true"], .wpb_wrapper > .nectar-slider-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]').each(function() {
            if (!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner') {
                if ($(this).parents('.wpb_row').length > 0) {
                    if ($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) {
                        return false;
                    }
                    if ($(this).parents('.wpb_row').index() == '0' && $pageHeaderBG.length != 0) {} else if ($(this).parents('.wpb_row').index() == '0' && $pageHeaderBG.length == 0 && $('.page-header-no-bg').length == 0 && $('.project-title').length == 0 && $(this).parents('.wpb_row').index() == '0' && $('.project-title').length == 0 && $('body[data-bg-header="true"]').length == 0) {
                        if ($('.single').length == 0) {
                            $('.container-wrap').css('padding-top', '0px');
                        } else {
                            $(this).addClass('first-section');
                        }
                    }
                    if ($(this).parents('.wpb_row').index() == $contentElementsNum - 1 && $('#respond').length == 0) {
                        if ($(this).attr('id') != 'portfolio-filters-inline') {
                            $('.container-wrap').css('padding-bottom', '0px');
                            $('#call-to-action .triangle').remove();
                        }
                    }
                } else {
                    if ($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) {
                        return false;
                    }
                    if ($(this).find('.portfolio-filters-inline').length == 0 && $(this).attr('id') != 'post-area') {
                        if ($(this).index() == '0' && $pageHeaderBG.length != 0) {} else if ($(this).index() == '0' && $pageHeaderBG.length == 0 && $(this).index() == '0' && $('.page-header-no-bg').length == 0 && $(this).index() == '0' && !$(this).hasClass('blog_next_prev_buttons') && !$(this).hasClass('nectar-shop-outer') && $(this).parents('.pum-container').length == 0) {
                            if ($('body[data-header-resize="0"]').length == 1 && $('.single').length == 0 || $('body.material').length > 0 && $('.single').length == 0) {
                                if (!$('body.blog .blog-fullwidth-wrap > .masonry:not(.meta-overlaid)').length > 0) {
                                    $('.container-wrap').css('padding-top', '0px');
                                }
                            } else {
                                $(this).addClass('first-section');
                            }
                        }
                        if ($(this).index() == $contentElementsNum - 1 && $('#respond').length == 0 && $('body.woocommerce-checkout').length == 0) {
                            $('.container-wrap').css('padding-bottom', '0px');
                            $('.bottom_controls').css('margin-top', '0px');
                            $('#call-to-action .triangle').remove();
                        }
                    }
                }
            }
        });
        $('#portfolio-extra > .nectar-slider-wrap[data-full-width="true"], .portfolio-wrap').each(function() {
            if ($(this).index() == $contentElementsNum - 1 && $('#commentform').length == 0 && $('#pagination').length == 0) {
                if (parseInt($('.container-wrap').css('padding-bottom')) > 0) {
                    $(this).css('margin-bottom', '-40px');
                }
                $('#call-to-action .triangle').remove();
            }
        });
        $('.portfolio-filters').each(function() {
            if ($(this).index() == '0' && $pageHeaderBG.length != 0 || $(this).index() == '0') {
                $(this).addClass('first-section nder-page-header');
            } else if ($(this).index() == '0' && $pageHeaderBG.length == 0 || $(this).index() == '0') {
                $(this).css({
                    'margin-top': '0px'
                }).addClass('first-section');
            }
        });
        $('.portfolio-filters-inline').each(function() {
            if ($(this).parents('.wpb_row').length > 0) {} else {
                if ($(this).index() == '0' && $pageHeaderBG.length != 0 || $(this).index() == '0') {
                    $(this).addClass('first-section nder-page-header');
                } else if ($(this).index() == '0' && $pageHeaderBG.length == 0 || $(this).index() == '0') {
                    $(this).css({
                        'margin-top': '-30px',
                        'padding-top': '50px'
                    }).addClass('first-section');
                }
            }
        });
    }

    function fullWidthRowPaddingAdjustCalc() {
        if ($('#boxed').length == 0) {
            $('.full-width-section[data-top-percent], .full-width-section[data-bottom-percent], .full-width-content[data-top-percent], .full-width-content[data-bottom-percent]').each(function() {
                var $windowHeight = $window.width(),
                    $topPadding = ($(this).attr('data-top-percent')) ? $(this).attr('data-top-percent') : 'skip',
                    $bottomPadding = ($(this).attr('data-bottom-percent')) ? $(this).attr('data-bottom-percent') : 'skip';
                if ($topPadding != 'skip') {
                    $(this).css('padding-top', $windowHeight * (parseInt($topPadding) / 100));
                }
                if ($bottomPadding != 'skip') {
                    $(this).css('padding-bottom', $windowHeight * (parseInt($bottomPadding) / 100));
                }
            });
        }
    }

    function fullWidthRowPaddingAdjust() {
        if (nectarDOMInfo.usingMobileBrowser) {
            fullWidthRowPaddingAdjustCalc();
        }
        $window.on('resize', fullWidthRowPaddingAdjustCalc);
    }

    function fullWidthContentColumns() {
        var $frontEndEditorElDiv = ($('body.vc_editor').length > 0) ? '.vc_element > ' : '';
        $('.main-content > .row > ' + $frontEndEditorElDiv + ' .full-width-content, #portfolio-extra > ' + $frontEndEditorElDiv + ' .full-width-content, .woocommerce-tabs #tab-description > .full-width-content, .post-area.span_12 article .content-inner > .full-width-content').each(function() {
            if ($(this).find('> .span_12 > ' + $frontEndEditorElDiv + ' .col').length > 1) {
                var tallestColumn = 0;
                var $columnInnerHeight = 0;
                var $column_inner_selector;
                $(this).find('> .span_12 > ' + $frontEndEditorElDiv + '  .col').each(function() {
                    $column_inner_selector = ($(this).find('> .vc_column-inner > .wpb_wrapper').length > 0) ? '.vc_column-inner' : '.column-inner-wrap > .column-inner';
                    var $padding = ($body.is('[data-flex-cols="true"]')) ? parseInt($(this).find('> .vc_column-inner').css('padding-top')) : parseInt($(this).css('padding-top'));
                    var $frontEndEditorElPadding = ($frontEndEditorElDiv.length > 2 && $(this).find('> .vc_column-inner').length > 0) ? parseInt($(this).find('> .vc_column-inner').css('padding-top')) : 0;
                    if ($(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper').height() + ($padding * 2) + $frontEndEditorElPadding > tallestColumn) {
                        tallestColumn = $(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper').height() + ($padding * 2) + $frontEndEditorElPadding;
                    }
                });
                $(this).find('> .span_12 > ' + $frontEndEditorElDiv + ' .col').each(function() {
                    $column_inner_selector = ($(this).find('> .vc_column-inner > .wpb_wrapper').length > 0) ? '.vc_column-inner' : '.column-inner-wrap > .column-inner';
                    if ($(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper > *').length > 0) {
                        if ($frontEndEditorElDiv.length < 2 && !$(this).parent().parent().hasClass('vc_row-o-equal-height')) {
                            $(this).css('height', tallestColumn);
                            if ($body.is('[data-flex-cols="true"]')) {
                                $(this).find('> .vc_column-inner').css('height', tallestColumn);
                            }
                        } else if ($frontEndEditorElDiv.length > 2 && !$(this).parent().parent().parent().hasClass('vc_row-o-equal-height')) {
                            $(this).css('height', tallestColumn);
                            if ($body.is('[data-flex-cols="true"]')) {
                                $(this).find('> .vc_column-inner').css('height', tallestColumn);
                            }
                        }
                    } else {
                        if ($(this).is('[data-using-bg="true"]')) {
                            $(this).css('min-height', tallestColumn);
                            if ($body.is('[data-flex-cols="true"]')) {
                                $(this).find('> .vc_column-inner').css('min-height', tallestColumn);
                            }
                            if ($(this).is('[data-animation*="reveal"]')) {
                                $(this).find('.column-inner').css('min-height', tallestColumn);
                            }
                        }
                    }
                });
                if (nectarDOMInfo.winW < 1000) {
                    $(this).find('> .span_12 > ' + $frontEndEditorElDiv + ' .col .wpb_row .col').css('min-height', '0px');
                }
                if ($(this).hasClass('vertically-align-columns') && nectarDOMInfo.winW > 1000 && !$(this).hasClass('vc_row-o-equal-height')) {
                    $(this).find('> .span_12 > ' + $frontEndEditorElDiv + ' .col').each(function() {
                        $column_inner_selector = ($(this).find('> .vc_column-inner > .wpb_wrapper').length > 0) ? '.vc_column-inner' : '.column-inner-wrap > .column-inner';
                        $columnInnerHeight = $(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper').height();
                        var $marginCalc = ($(this).height() / 2) - ($columnInnerHeight / 2);
                        if ($marginCalc <= 0) {
                            $marginCalc = 0;
                        }
                        $(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper').css('margin-top', $marginCalc).css('margin-bottom', $marginCalc);
                    });
                }
            }
        });
        if ($('body[data-flex-cols="true"]').length == 0) {
            $('.main-content > .row > .wpb_row:not(.full-width-content).vc_row-o-equal-height').each(function() {
                if ($(this).find('>.span_12 > ' + $frontEndEditorElDiv + ' .wpb_column[data-animation*="reveal"]').length > 0) {
                    var tallestColumn = 0;
                    $(this).find('> .span_12 > ' + $frontEndEditorElDiv + ' .col').each(function() {
                        var $padding = parseInt($(this).find('> .column-inner-wrap > .column-inner').css('padding-top'));
                        if ($(this).find('> .column-inner-wrap > .column-inner').height() + ($padding * 2) > tallestColumn) {
                            tallestColumn = $(this).find('> .column-inner-wrap > .column-inner').height() + ($padding * 2);
                        }
                    });
                    $(this).find('> .span_12 > ' + $frontEndEditorElDiv + ' .col').each(function() {
                        if ($(this).find('> .column-inner-wrap > .column-inner .wpb_wrapper > *').length > 0) {
                            $(this).find('> .column-inner-wrap').css('height', tallestColumn);
                        } else {
                            $(this).css('min-height', tallestColumn);
                            if ($(this).is('[data-animation*="reveal"]')) {
                                $(this).find('.column-inner').css('min-height', tallestColumn);
                            }
                        }
                    });
                }
            });
            $('.wpb_row.vc_row-o-equal-height>.span_12> ' + $frontEndEditorElDiv + '.wpb_column[class*="padding-"][data-padding-pos="all"]').each(function() {
                if ($(this).parents('.tabbed').length == 0) {
                    $(this).css({
                        'padding-top': $(this).css('padding-left'),
                        'padding-bottom': $(this).css('padding-left')
                    });
                }
            });
        }
    }

    function mouseParallaxInit() {
        $('.wpb_row:has(.nectar-parallax-scene)').each(function(i) {
            var $strength = parseInt($(this).find('.nectar-parallax-scene').attr('data-scene-strength'));
            $mouseParallaxScenes[i] = $(this).find('.nectar-parallax-scene').parallax({
                scalarX: $strength,
                scalarY: $strength
            });
            var images = $(this).find('.nectar-parallax-scene li');
            $.each(images, function() {
                if ($(this).find('div').length > 0) {
                    var el = $(this).find('div'),
                        image = el.css('background-image').replace(/"/g, '').replace(/url\(|\)$/ig, '');
                    if (image && image !== '' && image !== 'none') {
                        images = images.add($('<img>').attr('src', image));
                    }
                }
            });
        });
    }

    function ulCheckmarks() {
        $('ul.checks li').each(function() {
            if ($(this).find('i.icon-ok-sign').length == 0) {
                $(this).prepend('<i class="icon-ok-sign"></i>');
            }
        });
    }

    function ctaLinkBG() {
        $body.on('click', '.nectar-cta[data-using-bg="true"]:not([data-style="material"]) .link_wrap', function() {
            $(this).find('a.link_text')[0].click();
        });
    }

    function nectarKeyframeAssist() {
        $('.nectar-cta[data-style="arrow-animation"]').addClass('loaded');
    }

    function rowBGAnimations() {
        var $rowBGAnimationsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '93%';
        var $rowBGAnimationsRevealOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '75%';
        var $rowBGOffset;
        $($fullscreenSelector + '.row-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]):not([data-bg-animation*="displace-filter"]) .row-bg').each(function() {
            if (!$(this).parents('.row-bg-wrap').is('[data-bg-animation="zoom-out-reveal"]')) {
                $rowBGOffset = $rowBGAnimationsOffsetPos;
            } else {
                $rowBGOffset = $rowBGAnimationsRevealOffsetPos;
            }
            if (!$(this).hasClass('using-image') && !$(this).parents('.row-bg-wrap').is('[data-bg-animation="zoom-out-reveal"]')) {
                return;
            }
            var $that = $(this);
            var waypoint = new Waypoint({
                element: $that.parents('.row-bg-wrap'),
                handler: function() {
                    if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
                        waypoint.destroy();
                        return;
                    }
                    $that.parents('.inner-wrap').addClass('animated-in');
                    if ($that.parents('.row-bg-wrap').is('[data-bg-animation="zoom-out-reveal"]')) {
                        $that.parents('.row-bg-wrap').addClass('animated-in');
                    }
                    waypoint.destroy();
                },
                offset: $rowBGOffset
            });
        });
    }

    function columnBGAnimations() {
        var $colBGAnimationsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '93%';
        var $colBGAnimationsRevealOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '80%';
        var $colBGOffset;
        $($fullscreenSelector + '.column-image-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]):not([data-bg-animation*="displace-filter"]) .column-image-bg').each(function() {
            if (!$(this).parents('.column-image-bg-wrap').is('[data-bg-animation="zoom-out-reveal"]')) {
                $colBGOffset = $colBGAnimationsOffsetPos;
            } else {
                $colBGOffset = $colBGAnimationsRevealOffsetPos;
            }
            var $that = $(this);
            var waypoint = new Waypoint({
                element: $that.parents('.column-image-bg-wrap'),
                handler: function() {
                    if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
                        waypoint.destroy();
                        return;
                    }
                    $that.parents('.inner-wrap').addClass('animated-in');
                    if ($that.parents('.column-image-bg-wrap').is('[data-bg-animation="zoom-out-reveal"]')) {
                        $that.parents('.column-image-bg-wrap').addClass('animated-in');
                        $that.parents('.column-image-bg-wrap').siblings('.column-bg-overlay-wrap').addClass('animated-in');
                    }
                    waypoint.destroy();
                },
                offset: $colBGOffset
            });
        });
        $($fullscreenSelector + '.column-bg-overlay-wrap[data-bg-animation="zoom-out-reveal"]').each(function() {
            $colBGOffset = $colBGAnimationsRevealOffsetPos;
            var $that = $(this);
            if ($that.parent().find('.column-image-bg-wrap').length == 0) {
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function() {
                        if ($that.hasClass('animated-in')) {
                            waypoint.destroy();
                            return;
                        }
                        $that.addClass('animated-in');
                        waypoint.destroy();
                    },
                    offset: $colBGOffset
                });
            }
        });
    }

    function colAndImgAnimations() {
        var $colAndImgOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '88%';
        var $cascadingOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '70%';
        var $colAndImgRevealOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '70%';
        $($fullscreenSelector + 'img.img-with-animation').each(function() {
            var $that = $(this);
            var waypoint = new Waypoint({
                element: $that,
                handler: function() {
                    if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
                        waypoint.destroy();
                        return;
                    }
                    if (!nectarDOMInfo.usingMobileBrowser || $('body[data-responsive="0"]').length > 0) {
                        var $delay = $that.attr('data-delay');
                        var $elToAnimate = ($that.parents('.hover-wrap').length > 0) ? $that.parents('.hover-wrap') : $that;
                        if ($that.attr('data-animation') == 'fade-in-from-left' || $that.attr('data-animation') == 'fade-in-from-right') {
                            $elToAnimate.delay($delay).transition({
                                'opacity': 1,
                                'x': '0px'
                            }, $animationDuration, $animationEasing);
                        } else if ($that.attr('data-animation') == 'fade-in-from-bottom') {
                            $elToAnimate.delay($delay).transition({
                                'opacity': 1,
                                'y': '0px'
                            }, $animationDuration, $animationEasing);
                        } else if ($that.attr('data-animation') == 'fade-in') {
                            $elToAnimate.delay($delay).transition({
                                'opacity': 1
                            }, $animationDuration, $animationEasing);
                        } else if ($that.attr('data-animation') == 'grow-in') {
                            setTimeout(function() {
                                $elToAnimate.transition({
                                    scale: 1,
                                    'opacity': 1
                                }, $animationDuration, $animationEasing);
                            }, $delay);
                        } else if ($that.attr('data-animation') == 'flip-in') {
                            setTimeout(function() {
                                $elToAnimate.transition({
                                    rotateY: 0,
                                    'opacity': 1
                                }, $animationDuration, $animationEasing);
                            }, $delay);
                        } else if ($that.attr('data-animation') == 'flip-in-vertical') {
                            setTimeout(function() {
                                $elToAnimate.transition({
                                    rotateX: 0,
                                    'opacity': 1
                                }, $animationDuration, $animationEasing);
                            }, $delay);
                        }
                        $that.addClass('animated-in');
                    }
                    waypoint.destroy();
                },
                offset: $colAndImgOffsetPos
            });
        });
        $($fullscreenSelector + '.nectar_cascading_images').each(function() {
            var $that = $(this);
            var $animationDelay = ($(this).is('[data-animation-timing]')) ? $(this).attr('data-animation-timing') : 175;
            $animationDelay = parseInt($animationDelay);
            var waypoint = new Waypoint({
                element: $that,
                handler: function() {
                    if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
                        waypoint.destroy();
                        return;
                    }
                    if (!nectarDOMInfo.usingMobileBrowser || $('body[data-responsive="0"]').length > 0) {
                        $that.find('.cascading-image').each(function(i) {
                            var $that2 = $(this);
                            if ($that2.attr('data-animation') == 'flip-in' || $that2.attr('data-animation') == 'flip-in-vertical') {
                                setTimeout(function() {
                                    $that2.find('.inner-wrap').css({
                                        'opacity': 1,
                                        'transform': 'rotate(0deg) translateZ(0px)'
                                    });
                                }, i * $animationDelay);
                            } else if ($that2.attr('data-animation') == 'grow-in-reveal') {
                                setTimeout(function() {
                                    $that2.find('.inner-wrap').css({
                                        'opacity': 1,
                                        'transform': 'translateX(0px) translateY(0px) scale(1,1) translateZ(0px)'
                                    });
                                    $that2.find('.inner-wrap img').css({
                                        'transform': 'translateX(0px) translateY(0px) scale(1,1) translateZ(0px)'
                                    });
                                }, i * $animationDelay);
                            } else {
                                setTimeout(function() {
                                    $that2.find('.inner-wrap').css({
                                        'opacity': 1,
                                        'transform': 'translateX(0px) translateY(0px) scale(1,1) translateZ(0px)'
                                    });
                                }, i * $animationDelay);
                            }
                        });
                        $that.addClass('animated-in');
                    }
                    waypoint.destroy();
                },
                offset: $cascadingOffsetPos
            });
        });
        $($fullscreenSelector + '.col.has-animation:not([data-animation*="reveal"]), ' + $fullscreenSelector + '.wpb_column.has-animation:not([data-animation*="reveal"]), ' + $fullscreenSelector + '.nectar-fancy-box.has-animation').each(function(i) {
            var $that = $(this);
            if ($that.is('[data-animation="flip-in-vertical"]') || $that.is('[data-animation="slight-twist"]')) {
                $that.parents('.col.span_12').addClass('flip-in-vertical-wrap');
            }
            var waypoint = new Waypoint({
                element: $that,
                handler: function() {
                    if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
                        waypoint.destroy();
                        return;
                    }
                    if (!nectarDOMInfo.usingMobileBrowser || $('body[data-responsive="0"]').length > 0) {
                        var $delay = $that.attr('data-delay');
                        if ($that.attr('data-animation') == 'fade-in-from-left' || $that.attr('data-animation') == 'fade-in-from-right') {
                            $standAnimatedColTimeout[i] = setTimeout(function() {
                                $that.transition({
                                    'opacity': 1,
                                    'x': '0px'
                                }, $animationDuration, $animationEasing);
                            }, $delay);
                        } else if ($that.attr('data-animation') == 'fade-in-from-bottom') {
                            $standAnimatedColTimeout[i] = setTimeout(function() {
                                $that.transition({
                                    'opacity': 1,
                                    'y': '0px'
                                }, $animationDuration, $animationEasing);
                            }, $delay);
                        } else if ($that.attr('data-animation') == 'fade-in') {
                            $standAnimatedColTimeout[i] = setTimeout(function() {
                                $that.transition({
                                    'opacity': 1
                                }, $animationDuration, $animationEasing);
                            }, $delay);
                        } else if ($that.attr('data-animation') == 'grow-in' || $that.attr('data-animation') == 'zoom-out') {
                            $standAnimatedColTimeout[i] = setTimeout(function() {
                                $that.transition({
                                    scale: 1,
                                    'opacity': 1
                                }, $animationDuration, $animationEasing);
                            }, $delay);
                        } else if ($that.attr('data-animation') == 'flip-in') {
                            $standAnimatedColTimeout[i] = setTimeout(function() {
                                $that.transition({
                                    rotateY: 0,
                                    'opacity': 1
                                }, $animationDuration, $animationEasing);
                            }, $delay);
                        } else if ($that.attr('data-animation') == 'flip-in-vertical') {
                            $standAnimatedColTimeout[i] = setTimeout(function() {
                                $that.transition({
                                    rotateX: 0,
                                    y: 0,
                                    'opacity': 1
                                }, $animationDuration, $animationEasing);
                            }, $delay);
                        } else if ($that.attr('data-animation') == 'slight-twist') {
                            $standAnimatedColTimeout[i] = setTimeout(function() {
                                anime({
                                    targets: $that[0],
                                    rotateY: [20, 0],
                                    rotateZ: [-4, 0],
                                    opacity: 1,
                                    easing: $animationEasing,
                                    duration: $animationDuration
                                });
                            }, $delay);
                        }
                        if ($that.hasClass('boxed')) {
                            $that.addClass('no-pointer-events');
                            setTimeout(function() {
                                $that.removeClass('no-pointer-events');
                            }, parseInt($animationDuration) + parseInt($delay) + 30);
                        }
                        $that.addClass('animated-in');
                    }
                    waypoint.destroy();
                },
                offset: $colAndImgOffsetPos
            });
        });
        $($fullscreenSelector + '.wpb_column.has-animation[data-animation*="reveal"]').each(function() {
            var $that = $(this),
                waypoint = new Waypoint({
                    element: $that,
                    handler: function() {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
                            waypoint.destroy();
                            return;
                        }
                        var $delay = $that.attr('data-delay');
                        if (!nectarDOMInfo.usingMobileBrowser || $('body[data-responsive="0"]').length > 0) {
                            var $columnInnerSelector = ($that.find('> .vc_column-inner').length > 0) ? true : false;
                            if ($that.attr('data-animation') == 'reveal-from-bottom' || $that.attr('data-animation') == 'reveal-from-top') {
                                setTimeout(function() {
                                    if ($that.hasClass('animated-in')) {
                                        if ($columnInnerSelector == true) {
                                            $that.find('> .vc_column-inner').transition({
                                                'y': 0
                                            }, $animationDuration, $animationEasing);
                                        } else {
                                            $that.find('.column-inner-wrap, .column-inner').transition({
                                                'y': 0
                                            }, $animationDuration, $animationEasing, function() {
                                                $that.find('.column-inner-wrap, .column-inner').addClass('no-transform');
                                            });
                                        }
                                    }
                                }, $delay);
                            } else if ($that.attr('data-animation') == 'reveal-from-right' || $that.attr('data-animation') == 'reveal-from-left') {
                                setTimeout(function() {
                                    if ($that.hasClass('animated-in')) {
                                        if ($columnInnerSelector == true) {
                                            $that.find('> .vc_column-inner').transition({
                                                'x': 0
                                            }, $animationDuration, $animationEasing);
                                        } else {
                                            $that.find('.column-inner-wrap, .column-inner').transition({
                                                'x': 0
                                            }, $animationDuration, $animationEasing, function() {
                                                $that.find('.column-inner-wrap, .column-inner').addClass('no-transform');
                                            });
                                        }
                                    }
                                }, $delay);
                            }
                            $that.addClass('animated-in');
                        }
                        waypoint.destroy();
                    },
                    offset: $colAndImgRevealOffsetPos
                });
        });
    }

    function cascadingImageBGSizing() {
        $('.nectar_cascading_images').each(function() {
            if ($(this).parents('.vc_row-o-equal-height').length > 0 && $(this).parents('.wpb_column').length > 0) {
                $(this).css('max-width', $(this).parents('.wpb_column').width());
            }
            $(this).find('.bg-color').each(function() {
                var $bgColorHeight = 0;
                var $bgColorWidth = 0;
                if ($(this).parent().find('.img-wrap').length == 0) {
                    var $firstSibling = $(this).parents('.cascading-image').siblings('.cascading-image[data-has-img="true"]').first();
                    $firstSibling.css({
                        'position': 'relative',
                        'visiblity': 'hidden'
                    });
                    $bgColorHeight = $firstSibling.find('.img-wrap').height();
                    $bgColorWidth = $firstSibling.find('.img-wrap').width();
                    if ($firstSibling.index() == 0) {
                        $firstSibling.css({
                            'visiblity': 'visible'
                        });
                    } else {
                        $firstSibling.css({
                            'position': 'absolute',
                            'visiblity': 'visible'
                        });
                    }
                } else {
                    $bgColorHeight = $(this).parent().find('.img-wrap').height();
                    $bgColorWidth = $(this).parent().find('.img-wrap').width();
                }
                $(this).css({
                    'height': $bgColorHeight,
                    'width': $bgColorWidth
                });
            });
        });
    }

    function cascadingImageInit() {
        if ($('.nectar_cascading_images').length > 0) {
            var cascadingParallax = [];
            $('.nectar_cascading_images').each(function(i) {
                imagesLoaded($(this), function(instance) {
                    cascadingImageBGSizing();
                    if ($(instance.elements[0]).is('[data-parallax="yes"]') && !nectarDOMInfo.usingMobileBrowser && $('#nectar_fullscreen_rows').length == 0) {
                        cascadingParallax[i] = new CascadingParallax($(instance.elements[0]), $(instance.elements[0]).attr('data-parallax-intensity'));
                    }
                });
            });
            $window.on('resize', cascadingImageBGSizing);
        }
    }

    function CascadingParallax(el, intensity) {
        this.$element = el;
        this.inView = false;
        this.topLevel = false;
        this.lastY = 0;
        switch (intensity) {
            case 'subtle':
                this.intensity = 0.09;
                break;
            case 'medium':
                this.intensity = 0.15;
                break;
            case 'high':
                this.intensity = 0.25;
                break;
        }
        this.calculatePos();
        this.trackView();
        this.animate();
        $window.on('resize', this.calculatePos.bind(this));
    }
    CascadingParallax.prototype.calculatePos = function() {
        this.offsetTop = this.$element.offset().top;
        this.height = this.$element.outerHeight();
        this.vertCenter = nectarDOMInfo.winH / 2 - this.height / 2;
    };
    CascadingParallax.prototype.trackView = function() {
        var that = this;
        if (this.$element.parents('.top-level').length > 0) {
            this.topLevel = true;
        }
        if ('IntersectionObserver' in window) {
            var options = {
                rootMargin: '250px',
            }
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        that.inView = true;
                    } else {
                        that.inView = false;
                    }
                });
            }, options);
            observer.observe(this.$element[0]);
        }
    };
    CascadingParallax.prototype.animate = function() {
        if (this.inView) {
            var that = this;
            this.lastY = linearInterpolate(this.lastY, nectarDOMInfo.scrollTop, 0.19);
            this.$element.find('.bg-layer').each(function(i) {
                var $scale = $(this).attr('data-scale');
                if (that.topLevel === true && nectarDOMInfo.winW > 1000) {
                    $(this).css('transform', 'translateY(' + -(that.lastY * that.intensity * i) + 'px) translateZ(0) scale(' + $scale + ')');
                } else {
                    $(this).css('transform', 'translateY(' + -((that.lastY - that.offsetTop + that.vertCenter) * that.intensity * i) + 'px) translateZ(0) scale(' + $scale + ')');
                }
            });
        }
        window.requestAnimationFrame(this.animate.bind(this));
    };

    function splitLineHeadings() {
        var $splitLineOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
        $($fullscreenSelector + '.nectar-split-heading').each(function() {
            var $that = $(this);
            var $delay = ($that.is('[data-animation-delay]')) ? parseInt($that.attr('data-animation-delay')) : 0;
            var waypoint = new Waypoint({
                element: $that,
                handler: function() {
                    if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
                        waypoint.destroy();
                        return;
                    }
                    if (!nectarDOMInfo.usingMobileBrowser || $('body[data-responsive="0"]').length > 0) {
                        var $animationDurationCap;
                        setTimeout(function() {
                            if ($that.is('[data-animation-type="line-reveal-by-space"]')) {
                                $animationDurationCap = (parseInt($animationDuration) < 900) ? $animationDuration : '900';
                                $that.find('> * > span').each(function(i) {
                                    $(this).find('> .inner').transition({
                                        'y': '0px'
                                    }, $animationDuration, $animationEasing);
                                });
                            } else if ($that.is('[data-animation-type="letter-fade-reveal"]')) {
                                $animationDurationCap = (parseInt($animationDuration) < 1000) ? $animationDuration : '1000';
                                $that.find('> * > span span').each(function(i) {
                                    $(this).delay(i * 8).transition({
                                        'y': '0px',
                                        'opacity': '1'
                                    }, $animationDurationCap, $animationEasing);
                                });
                            } else {
                                $that.find('.heading-line').each(function(i) {
                                    $(this).find('> div').delay(i * 70).transition({
                                        'y': '0px'
                                    }, $animationDuration, $animationEasing);
                                });
                            }
                            $that.addClass('animated-in');
                        }, $delay);
                    }
                    waypoint.destroy();
                },
                offset: $splitLineOffsetPos
            });
        });
    }

    function progressBars() {
        var $progressBarsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
        var $progressSelector = ($('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && nectarDOMInfo.usingMobileBrowser) ? '.nectar-progress-bar' : $fullscreenSelector + '.nectar-progress-bar';
        $($progressSelector).parent().each(function() {
            var $that = $(this),
                waypoint = new Waypoint({
                    element: $that,
                    handler: function() {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
                            waypoint.destroy();
                            return;
                        }
                        if ($progressBarsOffsetPos == '100%') {
                            $that.find('.nectar-progress-bar .bar-wrap').css('opacity', '1');
                        }
                        $that.find('.nectar-progress-bar').each(function(i) {
                            var percent = $(this).find('span').attr('data-width'),
                                $endNum = parseInt($(this).find('span strong i').text()),
                                $that = $(this);
                            $that.find('span').delay(i * 90).transition({
                                'width': percent + '%'
                            }, 1050, 'easeInOutQuint', function() {});
                            setTimeout(function() {
                                var countOptions = {
                                    useEasing: false
                                };
                                var $countEle = $that.find('span strong i')[0];
                                var numAnim = new CountUp($countEle, 0, $endNum, 0, 1, countOptions);
                                numAnim.start();
                                $that.find('span strong').transition({
                                    'opacity': 1
                                }, 550, 'easeInCirc');
                            }, (i * 90));
                            if (percent == '100') {
                                $that.find('span strong').addClass('full');
                            }
                        });
                        $that.addClass('completed');
                        waypoint.destroy();
                    },
                    offset: $progressBarsOffsetPos
                });
        });
    }

    function animatedColBorders() {
        var $progressBarsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '75%';
        $($fullscreenSelector + '.wpb_column[data-border-animation="true"]').each(function() {
            var $that = $(this),
                waypoint = new Waypoint({
                    element: $that,
                    handler: function() {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
                            waypoint.destroy();
                            return;
                        }
                        var $borderDelay = ($that.attr('data-border-animation-delay').length > 0) ? parseInt($that.attr('data-border-animation-delay')) : 0;
                        setTimeout(function() {
                            $that.find('.border-wrap').addClass('animation');
                            $that.find('.border-wrap').addClass('completed');
                        }, $borderDelay);
                        waypoint.destroy();
                    },
                    offset: $progressBarsOffsetPos
                });
        });
    }

    function foodMenuItems() {
        var $foodItemOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '80%';
        $($fullscreenSelector + '.nectar_food_menu_item').parent().each(function() {
            var $that = $(this),
                waypoint = new Waypoint({
                    element: $that,
                    handler: function() {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
                            waypoint.destroy();
                            return;
                        }
                        $that.find('.nectar_food_menu_item').each(function(i) {
                            var $that = $(this);
                            setTimeout(function() {
                                $that.addClass('animated-in');
                            }, i * 150);
                        });
                        waypoint.destroy();
                    },
                    offset: $foodItemOffsetPos
                });
        });
    }

    function dividers() {
        var $dividerOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
        $($fullscreenSelector + '.divider-small-border[data-animate="yes"], ' + $fullscreenSelector + '.divider-border[data-animate="yes"]').each(function() {
            var $lineDur = ($(this).hasClass('divider-small-border')) ? 1300 : 1500,
                $that = $(this),
                waypoint = new Waypoint({
                    element: $that,
                    handler: function() {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
                            waypoint.destroy();
                            return;
                        }
                        $that.each(function() {
                            $(this).css({
                                'transform': 'scale(0,1)',
                                'visibility': 'visible'
                            });
                            var $that = $(this);
                            $that.delay($that.attr('data-animation-delay')).transition({
                                'transform': 'scale(1, 1)'
                            }, $lineDur, 'cubic-bezier(.18,1,.22,1)');
                        });
                        $that.addClass('completed');
                        waypoint.destroy();
                    },
                    offset: $dividerOffsetPos
                });
        });
    }

    function hotSpotHoverBind() {
        $('.nectar_image_with_hotspots[data-hotspot-icon="numerical"]').each(function() {
            $(this).find('.nectar_hotspot_wrap').each(function(i) {
                var $that = $(this);
                setTimeout(function() {
                    $that.find('.nectar_hotspot').addClass('pulse');
                }, i * 300);
            });
        });
        var hotSpotHoverTimeout = [];
        $('.nectar_image_with_hotspots:not([data-tooltip-func="click"]) .nectar_hotspot').each(function(i) {
            hotSpotHoverTimeout[i] = '';
            $(this).on('mouseover', function() {
                clearTimeout(hotSpotHoverTimeout[i]);
                $(this).parent().css({
                    'z-index': '400',
                    'height': 'auto',
                    'width': 'auto'
                });
            });
            $(this).on('mouseleave', function() {
                var $that = $(this);
                $that.parent().css({
                    'z-index': 'auto'
                });
                hotSpotHoverTimeout[i] = setTimeout(function() {
                    $that.parent().css({
                        'height': '30px',
                        'width': '30px'
                    });
                }, 300);
            });
        });
    }

    function responsiveTooltips() {
        $('.nectar_image_with_hotspots').each(function() {
            $(this).find('.nectar_hotspot_wrap').each(function() {
                if (nectarDOMInfo.winW > 690) {
                    if ($(this).parents('.nectar_image_with_hotspots[data-tooltip-func="hover"]').length > 0) {
                        $(this).find('.nectar_hotspot').removeClass('click');
                        $(this).find('.nttip').removeClass('open');
                    }
                    $(this).find('.nttip .inner a.tipclose').remove();
                    $('.nttip').css('height', 'auto');
                    $(this).css({
                        'width': 'auto',
                        'height': 'auto'
                    });
                    $(this).find('.nttip').removeClass('force-right').removeClass('force-left').removeClass('force-top').css('width', 'auto');
                    var $tipOffset = $(this).find('.nttip').offset();
                    if ($tipOffset.left > $(this).parents('.nectar_image_with_hotspots').width() - 200) {
                        $(this).find('.nttip').css('width', '250px');
                    } else {
                        $(this).find('.nttip').css('width', 'auto');
                    }
                    if ($tipOffset.left < 0) {
                        $(this).find('.nttip').addClass('force-right');
                    } else if ($tipOffset.left + $(this).find('.nttip').outerWidth(true) > nectarDOMInfo.winW) {
                        $(this).find('.nttip').addClass('force-left').css('width', '250px');
                    } else if ($tipOffset.top + $(this).find('.nttip').height() + 35 > $window.height() && $('#nectar_fullscreen_rows').length > 0) {
                        $(this).find('.nttip').addClass('force-top');
                    }
                    if ($(this).find('> .open').length == 0) {
                        $(this).css({
                            'width': '30px',
                            'height': '30px'
                        });
                    }
                } else {
                    $(this).find('.nttip').removeClass('force-left').removeClass('force-right').removeClass('force-top');
                    $(this).find('.nectar_hotspot').addClass('click');
                    if ($(this).find('.nttip a.tipclose').length == 0) {
                        $(this).find('.nttip .inner').append('<a href="#" class="tipclose"><span></span></a>');
                    }
                    $('.nttip').css('height', $window.height());
                }
            });
        });
    }

    function imageWithHotspotEvents() {
        if ($('.nectar_image_with_hotspots').length == 0) {
            return;
        }
        hotSpotHoverBind();
        $body.on('click', '.nectar_hotspot.click', function() {
            $(this).parents('.nectar_image_with_hotspots').find('.nttip').removeClass('open');
            $(this).parent().find('.nttip').addClass('open');
            $(this).parents('.nectar_image_with_hotspots').find('.nectar_hotspot').removeClass('open');
            $(this).parent().find('.nectar_hotspot').addClass('open');
            if (nectarDOMInfo.winW > 690) {
                $(this).parent().css({
                    'z-index': '120',
                    'height': 'auto',
                    'width': 'auto'
                });
                var $that = $(this);
                setTimeout(function() {
                    $that.parents('.nectar_image_with_hotspots').find('.nectar_hotspot_wrap').each(function() {
                        if ($(this).find('> .open').length == 0) {
                            $(this).css({
                                'height': '30px',
                                'width': '30px',
                                'z-index': 'auto'
                            });
                        }
                    });
                }, 300);
            }
            if (nectarDOMInfo.winW <= 690) {
                $(this).parents('.wpb_row, [class*="vc_col-"]').css('z-index', '200');
            }
            return false;
        });
        $body.on('click', '.nectar_hotspot.open', function() {
            $(this).parent().find('.nttip').removeClass('open');
            $(this).parent().find('.nectar_hotspot').removeClass('open');
            $(this).parents('.wpb_row').css('z-index', 'auto');
            return false;
        });
        $body.on('click', '.nttip.open', function() {
            if (nectarDOMInfo.winW < 690) {
                $(this).parents('.nectar_image_with_hotspots').find('.nttip').removeClass('open');
                $(this).parents('.nectar_image_with_hotspots').find('.nectar_hotspot').removeClass('open');
                $(this).parents('.wpb_row').css('z-index', 'auto');
                return false;
            }
        });
        responsiveTooltips();
        $window.on('resize', responsiveTooltips);
    }

    function imageWithHotspots() {
        var $imageWithHotspotsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '50%';
        $($fullscreenSelector + '.nectar_image_with_hotspots[data-animation="true"]').each(function() {
            var $that = $(this);
            var waypoint = new Waypoint({
                element: $that,
                handler: function() {
                    if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
                        waypoint.destroy();
                        return;
                    }
                    $that.addClass('completed');
                    $that.find('.nectar_hotspot_wrap').each(function(i) {
                        var $that2 = $(this);
                        var $extrai = ($that2.parents('.col.has-animation').length > 0) ? 1 : 0;
                        setTimeout(function() {
                            $that2.addClass('animated-in');
                        }, 175 * (i + $extrai));
                    });
                    waypoint.destroy();
                },
                offset: $imageWithHotspotsOffsetPos
            });
        });
    }

    function nectarLazyImageLoading() {
        var lazyItems = [].slice.call(document.querySelectorAll('[data-nectar-img-src]'));
        if ('IntersectionObserver' in window) {
            var options = {
                rootMargin: '75px',
            }
            nectarLazyImageSizing();
            $window.on('resize', nectarLazyImageSizing);
            var lazyItemObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var lazyItem = entry.target;
                        var imgSrc = lazyItem.getAttribute('data-nectar-img-src');
                        if (lazyItem.classList.contains('nectar-lazy')) {
                            lazyItem.addEventListener('load', function() {
                                lazyItem.style.height = "";
                                lazyItem.style.width = "";
                                lazyItem.classList.add('loaded');
                                lazyItem.removeAttribute('data-nectar-img-src');
                                lazyItemObserver.unobserve(lazyItem);
                            });
                            lazyItem.src = imgSrc;
                            var srcset = lazyItem.getAttribute('data-nectar-img-srcset');
                            if (srcset) {
                                lazyItem.setAttribute('srcset', srcset);
                                lazyItem.removeAttribute('data-nectar-img-srcset');
                            }
                        } else {
                            lazyItem.style.backgroundImage = "url('" + imgSrc + "')";
                            lazyItem.classList.add('loaded');
                            lazyItem.removeAttribute('data-nectar-img-src');
                            lazyItemObserver.unobserve(lazyItem);
                        }
                    }
                });
            }, options);
            lazyItems.forEach(function(lazyItem) {
                lazyItemObserver.observe(lazyItem);
            });
        } else {
            lazyItems.forEach(function(lazyItem) {
                if (lazyItem.classList.contains('nectar-lazy')) {
                    lazyItem.style.height = "";
                    lazyItem.style.width = "";
                    lazyItem.src = lazyItem.getAttribute('data-nectar-img-src');
                    var srcset = lazyItem.getAttribute('data-nectar-img-srcset');
                    if (srcset) {
                        lazyItem.setAttribute('srcset', srcset);
                        lazyItem.removeAttribute('data-nectar-img-srcset');
                    }
                    lazyItem.classList.add('loaded');
                    lazyItem.removeAttribute('data-nectar-img-src');
                } else {
                    lazyItem.style.backgroundImage = "url('" + lazyItem.getAttribute('data-nectar-img-src') + "')";
                    lazyItem.classList.add('loaded');
                    lazyItem.removeAttribute('data-nectar-img-src');
                }
            });
        }
    }

    function nectarLazyImageSizing() {
        $('img.nectar-lazy:not(.loaded)').each(function() {
            $(this).css({
                'height': '',
                'width': ''
            });
            var heightAttr = parseInt($(this).attr('height'));
            var widthAttr = parseInt($(this).attr('width'));
            var width = ($(this).parents('.nectar_cascading_images').length > 0) ? $(this).parents('.bg-layer').width() : $(this).width();
            var dimensions = calculateAspectRatio(widthAttr, heightAttr, width, 2000);
            $(this).css({
                'height': dimensions.height + 'px',
                'width': dimensions.width + 'px'
            });
        });
    }

    function nectarPostGridMouse() {
        viewIndicatorArr = [];
        if (!nectarDOMInfo.usingMobileBrowser) {
            $('.nectar-post-grid[data-indicator="yes"]').each(function(i) {
                viewIndicatorArr[i] = new NectarIconMouseFollow($(this), 'view-indicator');
            });
        }
    }

    function nectarPostGridInit() {
        $nectarPostGridArr = [];
        nectarPostGridMouse();
        $('.nectar-post-grid-wrap').each(function(i) {
            $nectarPostGridArr[i] = new NectarPostGrid($(this));
        });
    }

    function NectarPostGrid(el) {
        this.el = el;
        this.currentPage = 0;
        this.activeFilter = 1;
        this.activeCatTotal = 0;
        this.settingsData = JSON.parse(this.el.attr('data-el-settings'));
        this.queryData = JSON.parse(this.el.attr('data-query'));
        this.sortable = this.el.find('.nectar-post-grid-filters').attr('data-sortable');
        this.initialMarkup();
        this.clickEvents();
    }
    NectarPostGrid.prototype.initialMarkup = function() {
        if (this.el.find('.nectar-post-grid-filters a.active').length == 0) {
            this.el.find('.nectar-post-grid-filters a:first-child').addClass('active');
        }
        if (this.settingsData.pagination === 'load-more' && this.el.find('.load-more-wrap').length == 0) {
            this.activeCatTotal = parseInt(this.el.find('.nectar-post-grid-filters a:nth-child(' + this.activeFilter + ')').attr('data-total-count'));
            if (this.el.find('.nectar-post-grid-item').length >= this.activeCatTotal) {
                this.el.append('<div class="load-more-wrap inactive"><a href="#" class="load-more">' + this.el.attr('data-load-more-text') + '</a></div>');
            } else {
                this.el.append('<div class="load-more-wrap"><a href="#" class="load-more">' + this.el.attr('data-load-more-text') + '</a></div>');
            }
        }
    };
    NectarPostGrid.prototype.clickEvents = function() {
        this.el.find('.nectar-post-grid-filters h4').on('click', function() {
            $(this).parent().find('div').toggleClass('visible');
            $(this).toggleClass('visible');
        });
        var settingsData = this.settingsData;
        var queryData = this.queryData;
        var instance = this;
        this.el.find('.nectar-post-grid-filters a, .load-more-wrap:not(.inactive) .load-more').on('click', function() {
            var $that = $(this);
            if ($that.parents('.nectar-post-grid-wrap.loading').length > 0 || $(this).hasClass('active')) {
                return false;
            }
            if ($(this).parents('.nectar-post-grid-filters').length > 0) {
                $that.parent().find('a').removeClass('active');
                $that.addClass('active');
                instance.currentPage = 0;
                instance.activeFilter = $that.index() + 1;
            } else {
                instance.currentPage++;
            }
            var $gridEl = $that.parents('.nectar-post-grid-wrap').find('.nectar-post-grid')
            var $pagination = settingsData.pagination;
            var $action = ($that.hasClass('load-more') && $pagination === 'load-more') ? 'load-more' : 'filter';
            var $category = '';
            if (instance.sortable === 'yes') {
                $category = $that.parents('.nectar-post-grid-wrap').find('.nectar-post-grid-filters a.active').attr('data-filter');
            } else {
                var skipAll = ($that.parents('.nectar-post-grid-wrap').find('.nectar-post-grid-filters a').length > 1) ? ':not(.all-filter)' : '';
                $that.parents('.nectar-post-grid-wrap').find('.nectar-post-grid-filters a' + skipAll).each(function() {
                    $category += $(this).attr('data-filter') + ', ';
                });
                $category = $category.substring(0, $category.length - 2);
            }
            var $dataToPass = {
                action: 'nectar_get_post_grid_segment',
                post_type: queryData.post_type,
                category: $category,
                posts_per_page: queryData.posts_per_page,
                current_page: instance.currentPage,
                offset: queryData.offset,
                order: queryData.order,
                orderby: queryData.orderby,
                load_action: $action,
                settings: {
                    pagination: $pagination,
                    post_type: settingsData.post_type,
                    image_size: settingsData.image_size,
                    display_categories: settingsData.display_categories,
                    display_excerpt: settingsData.display_excerpt,
                    display_date: settingsData.display_date,
                    color_overlay: settingsData.color_overlay,
                    color_overlay_opacity: settingsData.color_overlay_opacity,
                    color_overlay_hover_opacity: settingsData.color_overlay_hover_opacity
                }
            };
            $that.parents('.nectar-post-grid-wrap').addClass('loading');
            $.post(window.nectarLove.ajaxurl, $dataToPass, function(data) {
                $that.parents('.nectar-post-grid-wrap').removeClass('loading');
                if ($action === 'load-more') {
                    $gridEl.append(data);
                } else {
                    $gridEl.html(data);
                }
                if ($pagination === 'load-more') {
                    instance.activeCatTotal = parseInt(instance.el.find('.nectar-post-grid-filters a:nth-child(' + instance.activeFilter + ')').attr('data-total-count'));
                    if ($gridEl.find('.nectar-post-grid-item').length >= instance.activeCatTotal) {
                        instance.el.find('.load-more-wrap').addClass('inactive');
                    } else {
                        instance.el.find('.load-more-wrap').removeClass('inactive');
                    }
                }
                $window.trigger('resize');
                nectarPostGridMouse();
            });
            return false;
        });
    };

    function animatedTitles() {
        var $animatedTitlesOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
        $($fullscreenSelector + '.nectar-animated-title').each(function() {
            var $that = $(this),
                waypoint = new Waypoint({
                    element: $that,
                    handler: function() {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
                            waypoint.destroy();
                            return;
                        }
                        $that.addClass('completed');
                        waypoint.destroy();
                    },
                    offset: $animatedTitlesOffsetPos
                });
        });
    }

    function highlightedText() {
        var $highlightedTextOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
        var highlightedColorCss = '';
        $($fullscreenSelector + '.nectar-highlighted-text').each(function(i) {
            var $animationDelay = 0;
            if ($(this).is('[data-animation-delay]') && $(this).attr('data-animation-delay').length > 0 && $(this).attr('data-animation') != 'false') {
                $animationDelay = $(this).attr('data-animation-delay');
            }
            if ($(this).is('[data-using-custom-color="true"]')) {
                var $custom_highlight_color = $(this).attr('data-color');
                var $custom_highlight_color_2 = ($(this).is('[data-color-gradient]') && $(this).attr('data-color-gradient').length > 0) ? $(this).attr('data-color-gradient') : false;
                $(this).addClass('instance-' + i);
                if ($custom_highlight_color_2 !== false && $custom_highlight_color_2.length > 0) {
                    highlightedColorCss += '.nectar-highlighted-text.instance-' + i + ' em:before { background: linear-gradient(90deg, ' + $custom_highlight_color + ', ' + $custom_highlight_color_2 + '); }';
                } else {
                    highlightedColorCss += '.nectar-highlighted-text.instance-' + i + ' em:before { background-color: ' + $custom_highlight_color + '; }';
                }
            }
            if (nectarDOMInfo.usingMobileBrowser) {
                $(this).find('em').addClass('animated');
            }
            var $that = $(this);
            var waypoint = new Waypoint({
                element: $that,
                handler: function() {
                    if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated')) {
                        waypoint.destroy();
                        return;
                    }
                    setTimeout(function() {
                        $that.find('em').each(function(i) {
                            var $highlighted_em = $(this);
                            setTimeout(function() {
                                $highlighted_em.addClass('animated');
                            }, i * 300);
                        });
                    }, $animationDelay);
                    waypoint.destroy();
                },
                offset: $highlightedTextOffsetPos
            });
        });
        nectarCreateStyle(highlightedColorCss, 'highlighted-text');
    }

    function pricingTableHeight() {
        var $tallestCol;
        $('.pricing-table[data-style="default"]').each(function() {
            $tallestCol = 0;
            $(this).find('> div ul').each(function() {
                if ($(this).height() > $tallestCol) {
                    $tallestCol = $(this).height();
                }
            });
            if ($tallestCol == 0) {
                $tallestCol = 'auto';
            }
            $(this).find('> div ul').css('height', $tallestCol);
        });
    }

    function nectarTestimonialSliders() {
        $testimonialSliders = [];
        if (typeof NectarTestimonialSlider == 'undefined') {
            return;
        }
        $('.testimonial_slider').each(function(i) {
            var $that_el = $(this),
                $type = ($(this).is('[data-style]')) ? $(this).attr('data-style') : 'none';
            $testimonialSliders[i] = new NectarTestimonialSlider($that_el, $type, resizeVideoToCover, fullWidthContentColumns);
            if ($(this).is('.disable-height-animation:not([data-style*="multiple_visible"])')) {
                $testimonialSliders[i].testimonialSliderHeight();
                setTimeout($testimonialSliders[i].testimonialSliderHeight.bind($testimonialSliders[i]), 500);
            }
            if ($(this).is('.testimonial_slider[data-style="multiple_visible_minimal"]')) {
                $testimonialSliders[i].testimonialSliderHeightMinimalMult();
                setTimeout($testimonialSliders[i].testimonialSliderHeightMinimalMult.bind($testimonialSliders[i]), 500);
            }
        });
    }

    function nectarTestimonialSlidersEvents() {
        $window.off('smartresize.nectarTestimonials');
        $window.off('resize.nectarTestimonialsMin');
        if ($testimonialSliders.length > 0) {
            $window.on('smartresize.nectarTestimonials', nectarTestimonialMainResize);
        }
        if ($('.testimonial_slider[data-style="multiple_visible_minimal"]').length > 0) {
            $window.on('resize.nectarTestimonialsMin', nectarTestimonialMiniamlResize);
        }
    }

    function nectarTestimonialMainResize() {
        for (var i = 0; i < $testimonialSliders.length; i++) {
            $testimonialSliders[i].testimonialSliderHeight();
            $testimonialSliders[i].testimonialHeightResize();
        }
    }

    function nectarTestimonialMiniamlResize() {
        for (var i = 0; i < $testimonialSliders.length; i++) {
            $testimonialSliders[i].testimonialSliderHeightMinimalMult();
        }
    }

    function iconList() {
        var $iconListOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '250%' : '75%';
        $($fullscreenSelector + '.nectar-icon-list[data-animate="true"]').each(function() {
            var $that = $(this),
                waypoint = new Waypoint({
                    element: $that,
                    handler: function() {
                        if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
                            waypoint.destroy();
                            return;
                        }
                        $that.each(function() {
                            var $listItemAnimationDelay = ($that.is('[data-direction="horizontal"]')) ? 100 : 300;
                            $(this).find('.nectar-icon-list-item').each(function(i) {
                                var $thatt = $(this);
                                setTimeout(function() {
                                    $thatt.addClass('animated');
                                }, i * $listItemAnimationDelay);
                            });
                        });
                        $that.addClass('completed');
                        waypoint.destroy();
                    },
                    offset: $iconListOffsetPos
                });
        });
    }

    function narrowParentBGC(element) {
        var narrowedBGC;
        if (element.parents('.wpb_column[data-bg-color*="#"]').length > 0 && element.parents('.wpb_column[data-bg-opacity="1"]').length > 0) {
            narrowedBGC = element.parents('.wpb_column').attr('data-bg-color');
        } else if (element.parents('.wpb_row').length > 0 && element.parents('.wpb_row').find('.row-bg.using-bg-color').length > 0 || element.parents('.wpb_row').length > 0 && element.parents('.wpb_row').find('.row-bg.using-bg-color-excluded').length > 0) {
            narrowedBGC = element.parents('.wpb_row').find('.row-bg').css('background-color');
        } else {
            if ($('#nectar_fullscreen_rows').length > 0) {
                narrowedBGC = $('#nectar_fullscreen_rows > .wpb_row .full-page-inner-wrap').css('background-color');
            } else {
                narrowedBGC = $('.container-wrap').css('background-color');
            }
        }
        return narrowedBGC;
    }

    function nectarIconMatchColoring() {
        var nectarMatchingBGCss = '';
        $('.nectar-icon-list[data-icon-style="border"], .nectar_icon_wrap[data-style="border-animation"][data-color*="extra-color-gradient-"]').each(function(i) {
            var $bgColorToSet = narrowParentBGC($(this));
            if ($(this).hasClass('nectar-icon-list')) {
                $(this).find('.list-icon-holder').css('background-color', $bgColorToSet);
            } else {
                $(this).removeClass(function(index, className) {
                    return (className.match(/(^|\s)instance-\S+/g) || []).join(' ');
                });
                $(this).addClass('instance-' + i);
                nectarMatchingBGCss += '.nectar_icon_wrap.instance-' + i + ' .nectar_icon:before { background-color: ' + $bgColorToSet + '!important; }';
            }
        });
        $('body.material .nectar-button.see-through[class*="m-extra-color-gradient"]').each(function(i) {
            var $bgColorToSet = narrowParentBGC($(this));
            $(this).removeClass(function(index, className) {
                return (className.match(/(^|\s)instance-\S+/g) || []).join(' ');
            });
            $(this).addClass('instance-' + i);
            nectarMatchingBGCss += '.nectar-button.see-through.instance-' + i + ':after { background-color: ' + $bgColorToSet + '!important; }';
        });
        nectarCreateStyle(nectarMatchingBGCss, 'nectaricon-color-match');
    }

    function oneFourthClasses() {
        $('.col.span_3, .vc_span3, .vc_col-sm-3').each(function() {
            if (!$(this).is('[data-t-w-inherits="small_desktop"]')) {
                var $currentDiv = $(this);
                var $nextDiv = $(this).next('div');
                if ($nextDiv.hasClass('span_3') && !$currentDiv.hasClass('one-fourths') || $nextDiv.hasClass('vc_span3') && !$currentDiv.hasClass('one-fourths') || $nextDiv.hasClass('vc_col-sm-3') && !$currentDiv.hasClass('one-fourths')) {
                    $currentDiv.addClass('one-fourths clear-both');
                    $nextDiv.addClass('one-fourths right-edge');
                }
            }
        });
        $('.span_12 .col.span_6').each(function() {
            if ($(this).next('div').hasClass('span_6') && $.trim($(this).next('div').html()).length == 0) {
                $(this).addClass('empty-second');
            }
        });
    }

    function responsiveVideoIframesInit() {
        $('iframe').each(function() {
            if (typeof $(this).attr('src') != 'undefined' && !$(this).hasClass('skip-nectar-video-size') && !$(this).hasClass('iframe-embed') && $(this).parents('.ult_modal').length == 0 && $(this).parents('.ls-slide').length == 0 && $(this).parents('.esg-entry-media').length == 0 && $(this).parents('.wpb_video_widget.wpb_content_element').length == 0) {
                var embedSrcLower = $(this).attr('src').toLowerCase();
                if (embedSrcLower.indexOf("youtube") >= 0 || embedSrcLower.indexOf("vimeo") >= 0 || embedSrcLower.indexOf("twitch.tv") >= 0 || embedSrcLower.indexOf("kickstarter") >= 0 || embedSrcLower.indexOf("embed-ssl.ted") >= 0 || embedSrcLower.indexOf("dailymotion") >= 0) {
                    $(this).addClass('iframe-embed');
                    if ($(this).width() < $(this).parent().width()) {
                        $(this).attr('data-aspectRatio', $(this).height() / $(this).width()).removeAttr('height').removeAttr('width');
                    } else {
                        $(this).attr('data-aspectRatio', '0.56').removeAttr('height').removeAttr('width');
                    }
                    if ($(this).parents('.post-area.masonry.classic').length > 0) {
                        $(this).attr('data-aspectRatio', '0.56').removeAttr('height').removeAttr('width');
                    }
                }
            }
        });
    }

    function responsiveVideoIframes() {
        $('iframe[data-aspectRatio]').each(function() {
            var $el = $(this),
                newWidth = $el.parent().width();
            if ($(this).parents('.swiper-slide').length > 0) {
                if ($(this).is(':visible')) {
                    $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'));
                }
            } else {
                $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'));
            }
        });
    }

    function audioVideoVis() {
        $('.video-wrap iframe').unwrap();
        $('#sidebar iframe[src]').unwrap();
        $('audio').attr('width', '100%').attr('height', '100%').css('visibility', 'visible');
        if ($body.hasClass('mobile')) {
            $('video').css('visibility', 'hidden');
        } else {
            $('video').css('visibility', 'visible');
        }
        $('.wp-video').each(function() {
            var video = $(this).find('video').get(0);
            video.addEventListener('loadeddata', function() {
                $window.trigger('resize');
            }, false);
        });
        $('.main-content iframe[src]').each(function() {
            $(this).css({
                'opacity': '1',
                'visibility': 'visible'
            });
        });
    }

    function resizeVideoToCover() {
        var vid_w_orig = 1280,
            vid_h_orig = 720,
            min_w = 1200;
        $('.nectar-video-wrap').each(function() {
            var $containerHeight, $containerWidth;
            if ($(this).find('video').length == 0) {
                return;
            }
            if ($(this).parents('#page-header-bg').length > 0) {
                if ($('.container-wrap.auto-height').length > 0) {
                    return false;
                }
                $containerHeight = $(this).parents('#page-header-bg').outerHeight();
                $containerWidth = $(this).parents('#page-header-bg').outerWidth();
            } else {
                if ($(this).hasClass('column-video')) {
                    if ($body.is('[data-flex-cols="true"]')) {
                        $containerHeight = $(this).parents('.vc_column-inner').outerHeight();
                        $containerWidth = $(this).parents('.vc_column-inner').outerWidth();
                    } else {
                        $containerHeight = $(this).parents('.wpb_column').outerHeight();
                        $containerWidth = $(this).parents('.wpb_column').outerWidth();
                    }
                } else {
                    $containerHeight = $(this).parents('.wpb_row').outerHeight();
                    $containerWidth = ($(this).parents('.full-width-section').length > 0) ? nectarDOMInfo.winW : $(this).parents('.wpb_row').outerWidth();
                }
            }
            $(this).width($containerWidth);
            if ($(this).parents('#page-header-bg').length > 0) {
                $(this).height($containerHeight);
            }
            var scale_h = $containerWidth / vid_w_orig,
                scale_v = ($containerHeight - $containerHeight) / vid_h_orig,
                scale = scale_h > scale_v ? scale_h : scale_v;
            min_w = 1280 / 720 * ($containerHeight + 40);
            if (scale * vid_w_orig < min_w) {
                scale = min_w / vid_w_orig;
            }
            $(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * vid_w_orig + 0));
            $(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * vid_h_orig + 0));
            $(this).scrollLeft(($(this).find('video').width() - $containerWidth) / 2);
            $(this).scrollTop(($(this).find('video').height() - ($containerHeight)) / 2);
            $(this).find('.mejs-overlay, .mejs-poster').scrollTop(($(this).find('video').height() - ($containerHeight)) / 2);
            if ($(this).attr('data-bg-alignment') == 'center bottom' || $(this).attr('data-bg-alignment') == 'bottom') {
                $(this).scrollTop(($(this).find('video').height() - ($containerHeight + 6)));
            } else if ($(this).attr('data-bg-alignment') == 'center top' || $(this).attr('data-bg-alignment') == 'top') {
                $(this).scrollTop(0);
            }
            $(this).addClass('position-loaded');
        });
    }

    function videoBGInit() {
        if ($('.nectar-video-wrap').length == 0 && $('.nectar-youtube-bg').length == 0) {
            return;
        }
        setTimeout(function() {
            resizeVideoToCover();
            $window.on('resize', resizeVideoToCover);
            $('.video-color-overlay').each(function() {
                $(this).css('background-color', $(this).attr('data-color'));
            });
            $('.nectar-video-wrap').each(function() {
                if ($(this).find('video').length == 0) {
                    return;
                }
                var $headerVideo = ($(this).parents('#page-header-bg').length > 0) ? true : false;
                var $that = $(this);
                var videoReady = setInterval(function() {
                    if ($that.find('video').get(0).readyState > 3) {
                        if (!nectarDOMInfo.usingMobileBrowser) {
                            $that.transition({
                                'opacity': '1'
                            }, 400);
                            $that.find('video').transition({
                                'opacity': '1'
                            }, 400);
                            $that.parent().find('.video-color-overlay').transition({
                                'opacity': '0.7'
                            }, 400);
                            if ($headerVideo == true) {
                                pageHeaderTextEffect();
                            }
                        }
                        $loadingScreenEl.addClass('loaded');
                        setTimeout(function() {
                            $loadingScreenEl.addClass('hidden');
                        }, 1000);
                        clearInterval(videoReady);
                    }
                }, 60);
                if (nectarDOMInfo.usingMobileBrowser) {
                    if ($that.parents('.full-width-section').length > 0 && $that.parents('#nectar_fullscreen_rows').length == 0) {
                        $that.css('left', '50%');
                    } else {
                        $that.css('left', '0px');
                    }
                    if ($headerVideo == true) {
                        pageHeaderTextEffect();
                    }
                    $that.find('video')[0].onplay = function() {
                        $that.transition({
                            'opacity': '1'
                        }, 400);
                        $that.find('video').transition({
                            'opacity': '1'
                        }, 400);
                        $that.parent().find('.video-color-overlay').transition({
                            'opacity': '0.7'
                        }, 400);
                    };
                }
            });
        }, 300);
        if (nectarDOMInfo.usingMobileBrowser) {
            $('.nectar-video-wrap').each(function() {
                if (!$(this).find('video').is('[muted]')) {
                    $(this).parent().find('.mobile-video-image').show();
                    $(this).remove();
                }
            });
        }
        $('.wpb_row:has(".nectar-video-wrap"):not(.fp-section)').each(function(i) {
            $(this).css('z-index', 100 + i);
        });
        $(".vc_row").each(function() {
            var youtubeUrl, youtubeId, $row = jQuery(this);
            $row.find('.nectar-youtube-bg').length > 0 ? (youtubeUrl = $row.find('.nectar-youtube-bg span').text(), youtubeId = nectarExtractYoutubeId(youtubeUrl), youtubeId && ($row.find(".vc_video-bg").remove(), nectarInsertYoutubeVideoAsBackground($row.find('.nectar-youtube-bg'), youtubeId))) : $row.find(".nectar-youtube-bg").remove();
            $row.find('.nectar-youtube-bg span').remove();
            if (!nectarDOMInfo.usingMobileBrowser) {
                $row.find('.nectar-video-wrap, .nectar-youtube-bg').css({
                    'opacity': '1',
                    'width': '100%',
                    'height': '100%'
                });
            }
            $row.find('.video-color-overlay').transition({
                'opacity': '0.7'
            }, 400);
        });

        function nectarInsertYoutubeVideoAsBackground($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
                nectarInsertYoutubeVideoAsBackground($element, youtubeId, counter++)
            }, 100);
            var $container = $element.prepend('<div class="vc_video-bg"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], {
                width: "100%",
                height: "100%",
                videoId: youtubeId,
                playerVars: {
                    playlist: youtubeId,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1
                },
                events: {
                    onReady: function(event) {
                        event.target.mute().setLoop(!0);
                        nectarResizeVideoBackground($element);
                    }
                }
            }), nectarResizeVideoBackground($element), jQuery(window).on("resize", function() {
                nectarResizeVideoBackground($element);
            });
            setTimeout(function() {
                nectarResizeVideoBackground($element);
            }, 100);
        }

        function nectarResizeVideoBackground($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight(),
                ratio1 = 16,
                ratio2 = 9;
            ratio1 / ratio2 > containerW / containerH ? (iframeW = containerH * (ratio1 / ratio2), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px", iframeW += "px", iframeH += "px") : (iframeW = containerW, iframeH = containerW * (ratio2 / ratio1), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px", iframeW += "px", iframeH += "px"), $element.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            });
        }

        function nectarExtractYoutubeId(url) {
            if ("undefined" == typeof url) {
                return !1;
            }
            var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            return null !== id ? id[1] : !1
        }
    }

    function blogSingle() {
        if ($body.hasClass('single-post') && $('.content-inner[data-has-gallery]').length > 0) {
            if ($('.wp-block-gallery').length > 0) {
                $('.content-inner').find('.wp-block-gallery').each(function(i) {
                    if (i !== 0) {
                        $(this).css('display', 'flex');
                    }
                });
            } else {
                $('.content-inner').find('.gallery').each(function(i) {
                    if (i !== 0) {
                        $(this).css('display', 'block');
                    }
                });
            }
        }
    }

    function mobileNavMegamenuCorrect() {
        var $mobileNavSelector = ($('#top #mobile-menu').length > 0) ? '#top #mobile-menu ' : '.off-canvas-menu-container.mobile-only ';
        $($mobileNavSelector + '.megamenu > ul > li > a').each(function() {
            if ($(this).text() == '-' || $(this).text() == '–' || $(this).parent().hasClass('hide-title')) {
                var $navLIs = $(this).parent().find('> ul > li').clone();
                $(this).parent().find('ul').remove();
                $(this).parent().parent().append($navLIs);
                $(this).parent().remove();
            }
        });
    }

    function materialSkinOCM_Init() {
        if ($('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0) {
            OCM_materialWidth();
            if ($wpAdminBar.length > 0) {
                var $topToolBar = $wpAdminBar.detach();
                $('.ocm-effect-wrap-inner').append($topToolBar);
            }
        }
        OCM_materialIconMarkup();
        materialSkinTransition();
        $window.on('resize', OCM_materialSize);
    }

    function materialSkinTransition() {
        if ($('body.material[data-header-search="true"]').length > 0 || $('body.material .ocm-effect-wrap').length > 0) {
            var materialTransTO, allowMaterialResizeCalc = false,
                orientTrack = 0,
                $winDOMWidth = nectarDOMInfo.winW,
                $winDOMHeight = nectarDOMInfo.winH;
            window.addEventListener("orientationchange", function() {
                orientTrack = 1;
            });
            $window.on('resize', function() {
                if (nectarDOMInfo.usingMobileBrowser) {
                    if (($window.width() != $winDOMWidth && $window.height != $winDOMHeight) || orientTrack === 1) {
                        $winDOMWidth = nectarDOMInfo.winW;
                        $winDOMHeight = nectarDOMInfo.winH;
                        orientTrack = 0;
                        allowMaterialResizeCalc = true;
                    }
                } else {
                    allowMaterialResizeCalc = true;
                }
                if (allowMaterialResizeCalc) {
                    clearTimeout(materialTransTO);
                    $('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow').addClass('no-material-transition');
                    materialTransTO = setTimeout(function() {
                        $('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow').removeClass('no-material-transition');
                    }, 250);
                    OCM_materialWidth();
                    allowMaterialResizeCalc = false;
                }
            });
        }
    }

    function calculateHoverNavMinHeight() {
        var $widgetHeights = 0;
        $('#slide-out-widget-area > .widget').each(function() {
            $widgetHeights += $(this).height();
        });
        var $menuHeight;
        if (($offCanvasEl.height() - 25 - $('.bottom-meta-wrap').outerHeight(true) - $widgetHeights) > $('#slide-out-widget-area .off-canvas-menu-container:last-child').height()) {
            $menuHeight = $offCanvasEl.height() - 25 - $('.bottom-meta-wrap').outerHeight(true) - $widgetHeights;
        } else {
            $menuHeight = $('#slide-out-widget-area .off-canvas-menu-container:last-child').height();
        }
        $('#slide-out-widget-area .inner').css({
            'height': 'auto',
            'min-height': $menuHeight
        });
        $('#slide-out-widget-area > .inner .off-canvas-menu-container').transition({
            y: '-' + ($('#slide-out-widget-area > .inner .off-canvas-menu-container:last-child').height() / 2) + 'px'
        }, 0);
    }

    function OCM_materialWidth() {
        $('#slide-out-widget-area.slide-out-from-right').css({
            'padding-top': $window.height() * 0.1,
            'padding-bottom': $window.height() * 0.1
        });
        OCM_overflowState();
    }

    function OCM_materialIconMarkup() {
        if ($('body.material').length > 0 && $('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length == 0) {
            if ($('body[data-slide-out-widget-area-style*="fullscreen"]').length == 0 && $('#mobile-menu').length == 0) {
                var $menuIconClone = $('header#top nav ul .slide-out-widget-area-toggle a > span > i').clone();
                $menuIconClone.addClass('hover-effect');
                $('header#top nav ul .slide-out-widget-area-toggle a > span').append($menuIconClone);
                var $menuIconClone2 = $('header#top .slide-out-widget-area-toggle.mobile-icon a > span > i').clone();
                $menuIconClone2.addClass('hover-effect');
                $('header#top .slide-out-widget-area-toggle.mobile-icon a > span').append($menuIconClone2);
            }
            $('body:not([data-slide-out-widget-area-style="slide-out-from-right"]) header#top .slide-out-widget-area-toggle a > span').append($('<span class="close-wrap"> <span class="close-line close-line1"></span> <span class="close-line close-line2"></span> </span>'));
        }
        if ($('body.material #boxed').length > 0 && $('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length > 0) {
            $('#ajax-content-wrap > .slide-out-widget-area-toggle.slide-out-hover-icon-effect').insertAfter('.ocm-effect-wrap');
        }
        if ($('body.material').length > 0 && $('body[data-slide-out-widget-area-style*="fullscreen"]').length == 0) {
            $('body.material #slide-out-widget-area.slide-out-from-right .slide_out_area_close').insertAfter('.ocm-effect-wrap');
            $('#slide-out-widget-area-bg').insertAfter('.ocm-effect-wrap');
            $offCanvasEl.insertAfter('.ocm-effect-wrap');
        }
    }

    function OCM_materialSize() {
        if ($('.ocm-effect-wrap.material-ocm-open').length > 0) {
            $('.ocm-effect-wrap').css({
                'height': $window.height()
            });
            $('.ocm-effect-wrap-inner').css({
                'padding-top': nectarDOMInfo.adminBarHeight
            });
        }
    }

    function OCM_dropdownMarkup() {
        var $nectar_ocm_dropdown_func = ($('#slide-out-widget-area[data-dropdown-func]').length > 0) ? $offCanvasEl.attr('data-dropdown-func') : 'default';
        if ($nectar_ocm_dropdown_func == 'separate-dropdown-parent-link') {
            $('#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children').append('<span class="ocm-dropdown-arrow"><i class="fa fa-angle-down"></i></span>');
        }
    }

    function OCM_dropdownIconPos() {
        $('#slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children').each(function() {
            $(this).find('.ocm-dropdown-arrow').css({
                'top': $(this).find('a').height() / 2
            });
        });
    }

    function OCM_overflowState() {
        if (nectarDOMInfo.winW < 1000 || $('body > #boxed').length > 0 || $('.ocm-effect-wrap-inner > #boxed').length > 0) {
            $('#slide-out-widget-area.fullscreen .off-canvas-social-links, #slide-out-widget-area.fullscreen-alt .off-canvas-social-links').appendTo('#slide-out-widget-area .inner');
            $('#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text').appendTo('#slide-out-widget-area .inner');
        } else {
            $('#slide-out-widget-area.fullscreen .off-canvas-social-links,#slide-out-widget-area.fullscreen-alt .off-canvas-social-links').appendTo('#slide-out-widget-area .inner-wrap');
            $('#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text').appendTo('#slide-out-widget-area .inner-wrap');
        }
        if ($('#slide-out-widget-area[class*="fullscreen"] .inner').height() >= $window.height() - 100) {
            $('#slide-out-widget-area[class*="fullscreen"] .inner, #slide-out-widget-area[class*="fullscreen"]').addClass('overflow-state');
        } else {
            $('#slide-out-widget-area[class*="fullscreen"] .inner, #slide-out-widget-area[class*="fullscreen"]').removeClass('overflow-state');
        }
        $('#slide-out-widget-area[class*="fullscreen"] .inner').transition({
            y: '-' + ($('#slide-out-widget-area[class*="fullscreen"] .inner').height() / 2) + 'px'
        }, 0);
        if ($('.slide-out-from-right.open .off-canvas-menu-container.mobile-only').length > 0 && $('body.mobile').length == 0) {
            $('#slide-out-widget-area .slide_out_area_close').trigger('click');
        }
        OCM_dropdownIconPos();
    }

    function OCM_slideOutRightHoverOpen() {
        calculateHoverNavMinHeight();
        if (nectarDOMInfo.usingMobileBrowser && $('#slide-out-widget-area.open').length > 0) {
            OCM_mobileSlideOutRightHoverCloseCheck();
            return;
        }
        if (nectarDOMInfo.usingMobileBrowser) {
            $('.slide-out-widget-area-toggle a').attr('aria-expanded', 'true');
        }
        $offCanvasEl.css({
            'transform': 'translate3d(0,0,0)'
        }).addClass('open');
        if ($('header#top .container .span_9 > .slide-out-widget-area-toggle').length > 0) {
            var $hIconEl = $('.slide-out-hover-icon-effect'),
                secondaryBarHeight = nectarDOMInfo.secondaryHeaderHeight;
            var $nectarHamMenuPos;
            if ($('body.mobile').length > 0) {
                $hIconEl.css({
                    'top': $('header#top .span_9 > .slide-out-widget-area-toggle a').offset().top - nectarDOMInfo.scrollTop,
                    'right': parseInt($('#header-outer header > .container').css('padding-right')) + 1
                });
            } else {
                if ($bodyBorderHeaderColorMatch) {
                    var $extraCushion = ($('#header-outer[data-has-menu="false"]').length > 0) ? 2 : 1;
                    $hIconEl.css({
                        'top': nectarDOMInfo.adminBarHeight + secondaryBarHeight + parseInt($('header#top nav >ul .slide-out-widget-area-toggle a').css('padding-top')),
                        'right': 29 + $extraCushion
                    });
                } else {
                    if ($('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0) {
                        $nectarHamMenuPos = ($('header#top .span_9 > .slide-out-widget-area-toggle').css('display') == 'block') ? $('header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon').position() : $('header#top .span_3 .right-side .slide-out-widget-area-toggle > div').offset();
                        $hIconEl.css({
                            'top': parseInt($nectarHamMenuPos.top) - nectarDOMInfo.scrollTop,
                            'right': parseInt($('#header-outer header >.container').css('padding-right')) + 2
                        });
                    } else {
                        if ($body.hasClass('ascend')) {
                            $nectarHamMenuPos = ($('header#top .span_9 > .slide-out-widget-area-toggle').css('display') == 'block') ? $('header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon').position() : $('header#top nav .buttons .slide-out-widget-area-toggle > div a > span').position();
                        } else {
                            $nectarHamMenuPos = ($('header#top .span_9 > .slide-out-widget-area-toggle').css('display') == 'block') ? $('header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon').position() : $('header#top nav .buttons .slide-out-widget-area-toggle > div').position();
                        }
                        if ($('#header-secondary-outer.hide-up').length > 0) {
                            secondaryBarHeight = 0;
                        }
                        $hIconEl.css({
                            'top': nectarDOMInfo.adminBarHeight + secondaryBarHeight + parseInt($nectarHamMenuPos.top),
                            'right': parseInt($('#header-outer header >.container').css('padding-right')) + 2
                        });
                    }
                }
            }
        }
        $('.slide-out-hover-icon-effect .lines-button').removeClass('no-delay').addClass('unhidden-line');
        if ($('#header-outer[data-permanent-transparent="1"]').length == 0 && $('#nectar_fullscreen_rows').length == 0 && !nectarDOMInfo.usingFrontEndEditor && nectarDOMInfo.winW > 1000) {
            if (!(nectarDOMInfo.scrollTop == 0 && $('#header-outer.transparent').length > 0)) {
                if ($('body.mobile').length == 0 && $bodyBorderHeaderColorMatch) {
                    $headerOuterEl.attr('data-transparent', 'true').addClass('no-bg-color').addClass('slide-out-hover');
                    $('#header-outer header, #header-outer > .cart-outer').addClass('all-hidden');
                }
            }
            if ($('#header-outer[data-remove-fixed="1"]').length == 0 && $('body.mobile').length == 0 && $bodyBorderHeaderColorMatch) {
                if (headerResize == true) {
                    $window.off('scroll', bigNav);
                    $window.off('scroll', smallNav);
                } else {
                    $window.off('scroll', opaqueCheck);
                    $window.off('scroll', transparentCheck);
                }
            }
        }
        if (!nectarDOMInfo.usingMobileBrowser) {
            $window.on('mousemove.rightOffsetCheck', OCM_slideOutRightHoverCloseCheck);
        }
    }

    function OCM_slideOutRightHoverCloseCheck(e) {
        var $windowWidth = $window.width();
        if (e.clientX < $windowWidth - 340 - $bodyBorderWidth && $offCanvasEl.hasClass('mouse-accessed')) {
            $offCanvasEl.removeClass('mouse-accessed');
            $window.off('mousemove.rightOffsetCheck', OCM_slideOutRightHoverCloseCheck);
            $offCanvasEl.css({
                'transform': 'translate3d(341px,0,0)'
            }).removeClass('open');
            $headerOuterEl.removeClass('style-slide-out-from-right');
            $('.slide-out-hover-icon-effect .lines-button').removeClass('unhidden-line').addClass('no-delay');
            if ($('#header-outer[data-permanent-transparent="1"]').length == 0) {
                if ($('#header-outer[data-remove-fixed="1"]').length == 0 && $('body.mobile').length == 0 && $bodyBorderHeaderColorMatch) {
                    if ($('body.mobile').length == 0) {
                        $headerOuterEl.removeClass('no-bg-color');
                        $('#header-outer header, #header-outer > .cart-outer').removeClass('all-hidden');
                    }
                }
                if ($('#header-outer[data-remove-fixed="1"]').length == 0 && $('body.mobile').length == 0 && $bodyBorderHeaderColorMatch) {
                    if (headerResize == true) {
                        $window.off('scroll.headerResizeEffect');
                        if (nectarDOMInfo.scrollTop == 0) {
                            $window.on('scroll.headerResizeEffect', smallNav);
                            if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && $bodyBorderTop.length > 0 && $bodyBorderHeaderColorMatch == true && $('#header-outer.pseudo-data-transparent').length > 0) {
                                $('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({
                                    'padding': '0'
                                }, {
                                    queue: false,
                                    duration: 250,
                                    easing: 'easeOutCubic'
                                });
                            }
                        } else {
                            $window.on('scroll.headerResizeEffect', bigNav);
                        }
                    } else {
                        $window.off('scroll.headerResizeEffectOpaque');
                        $window.on('scroll.headerResizeEffectOpaque', opaqueCheck);
                    }
                }
            }
        }
    }

    function OCM_mobileSlideOutRightHoverCloseCheck() {
        if (nectarDOMInfo.usingMobileBrowser) {
            $('.slide-out-widget-area-toggle a').attr('aria-expanded', 'false');
        }
        $offCanvasEl.css({
            'transform': 'translate3d(341px,0,0)'
        }).removeClass('open');
        $headerOuterEl.removeClass('style-slide-out-from-right');
        $('.slide-out-hover-icon-effect .lines-button').removeClass('unhidden-line').addClass('no-delay');
        if ($('#header-outer[data-permanent-transparent="1"]').length == 0) {
            $headerOuterEl.removeClass('no-bg-color');
            $('#header-outer header').removeClass('all-hidden');
        }
        if ($('#header-outer[data-remove-fixed="1"]').length == 0 && $('body.mobile').length == 0 && $bodyBorderHeaderColorMatch) {
            if (headerResize == true) {
                $window.off('scroll.headerResizeEffect');
                if (nectarDOMInfo.scrollTop == 0) {
                    $window.on('scroll.headerResizeEffect', smallNav);
                    if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && $bodyBorderTop.length > 0 && $bodyBorderHeaderColorMatch == true && $('#header-outer.pseudo-data-transparent').length > 0) {
                        $('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({
                            'padding': '0'
                        }, {
                            queue: false,
                            duration: 250,
                            easing: 'easeOutCubic'
                        });
                    }
                } else {
                    $window.on('scroll.headerResizeEffect', bigNav);
                }
            } else {
                $window.off('scroll.headerResizeEffectOpaque');
                $window.on('scroll.headerResizeEffectOpaque', opaqueCheck);
            }
        }
    }

    function OCM_slideOutRightHoverInit() {
        if ($('#ajax-content-wrap > .slide-out-widget-area-toggle').length == 0) {
            $('<div class="slide-out-widget-area-toggle slide-out-hover-icon-effect" data-icon-animation="simple-transform"><div> <a href="#sidewidgetarea" class="closed"> <span> <i class="lines-button x2"> <i class="lines"></i> </i> </span> </a> </div> </div>').insertAfter('#slide-out-widget-area');
            if ($('#header-outer[data-has-menu="true"]').length > 0 || $('body[data-header-search="true"]').length > 0 || $('.slide-out-widget-area-toggle a.using-label').length > 0) {
                $('.slide-out-widget-area-toggle').addClass('small');
            }
        }
        if (!nectarDOMInfo.usingMobileBrowser) {
            $body.on('mouseenter', '#header-outer .slide-out-widget-area-toggle:not(.std-menu) a', OCM_slideOutRightHoverOpen);
            $offCanvasEl.on('mouseenter', function() {
                $(this).addClass('mouse-accessed');
            });
        } else {
            $body.on('click', '.slide-out-widget-area-toggle:not(.std-menu) a', OCM_slideOutRightHoverOpen);
        }
        $window.on('smartresize', calculateHoverNavMinHeight);
    }

    function OCM_slideOutRightOpen() {
        var $slideOutAmount = ($bodyBorderTop.length > 0 && $('body.mobile').length == 0) ? $bodyBorderTop.height() : 0;
        if ($('body.material').length == 0) {
            $('#slide-out-widget-area .inner').css({
                'height': 'auto',
                'min-height': $offCanvasEl.height() - 25 - $('.bottom-meta-wrap').height()
            });
            if ($('#boxed').length == 0) {
                $('.container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image, #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title').stop(true).transition({
                    x: '-300px'
                }, 700, 'easeInOutCubic');
                var $withinCustomBreakpoint = mobileBreakPointCheck();
                if ($('#header-outer[data-format="centered-logo-between-menu"]').length == 0 || $withinCustomBreakpoint) {
                    if ($('#header-outer[data-transparency-option="1"]').length == 0 || ($('#header-outer[data-transparency-option="1"]').length > 0 && $('#header-outer[data-full-width="true"]').length == 0) || $('body.mobile').length > 0) {
                        $headerOuterEl.stop(true).css('transform', 'translateY(0)').transition({
                            x: '-' + (300 + $slideOutAmount) + 'px'
                        }, 700, 'easeInOutCubic');
                    } else {
                        $headerOuterEl.stop(true).css('transform', 'translateY(0)').transition({
                            x: '-' + (300 + $slideOutAmount) + 'px',
                            'background-color': 'transparent',
                            'border-bottom': '1px solid rgba(255,255,255,0.22)'
                        }, 700, 'easeInOutCubic');
                    }
                } else {
                    $('#header-outer header#top nav > ul.buttons, body:not(.material) #header-outer .cart-outer .cart-menu-wrap').transition({
                        x: '-300px'
                    }, 700, 'easeInOutCubic');
                }
            }
            $offCanvasEl.stop(true).transition({
                x: '-' + $slideOutAmount + 'px'
            }, 700, 'easeInOutCubic').addClass('open');
            if ($('#boxed').length == 0) {
                if ($('#header-outer[data-full-width="true"]').length > 0 && !$body.hasClass('mobile')) {
                    $headerOuterEl.addClass('highzI');
                    $('#ascrail2000').addClass('z-index-adj');
                    if ($('#header-outer[data-format="centered-logo-between-menu"]').length == 0) {
                        if ($bodyBorderWidth == 0) {
                            $('header#top #logo').stop(true).transition({
                                x: (300 + $slideOutAmount) + 'px'
                            }, 700, 'easeInOutCubic');
                        }
                    }
                    $('header#top .slide-out-widget-area-toggle .lines-button').addClass('close');
                    $('body #header-outer nav > ul > li > a').css({
                        'margin-bottom': '0'
                    });
                }
            }
            $headerOuterEl.addClass('style-slide-out-from-right');
            $offCanvasBG.css({
                'height': '100%',
                'width': '100%'
            }).stop(true).transition({
                'opacity': 1
            }, 700, 'easeInOutCubic', function() {
                $('.slide-out-widget-area-toggle:not(.std-menu) > div > a').removeClass('animating');
            });
            if ($('#header-outer[data-format="centered-logo-between-menu"]').length == 0) {
                var $logoWidth = ($('#logo img:visible').length > 0) ? $('#logo img:visible').width() : $('#logo').width();
                if ($('header#top nav > .sf-menu').offset().left - $logoWidth - 300 < 20) {
                    $headerOuterEl.addClass('hidden-menu');
                }
            } else {
                $headerOuterEl.addClass('hidden-menu-items');
            }
            if ($('#header-outer[data-remove-fixed="1"]').length == 0 && nectarDOMInfo.winW > 1000) {
                if ($bodyBorderHeaderColorMatch == true && headerResize == true) {
                    $headerOuterEl.stop(true).transition({
                        y: '0'
                    }, 0).addClass('transparent').css('transition', 'transform');
                    if ($headerOuterEl.attr('data-transparent-header') != 'true') {
                        $headerOuterEl.attr('data-transparent-header', 'true').addClass('pseudo-data-transparent');
                    }
                    $window.off('scroll', bigNav);
                    $window.off('scroll', smallNav);
                } else if ($bodyBorderHeaderColorMatch == true) {
                    $headerOuterEl.addClass('transparent');
                    $window.off('scroll', opaqueCheck);
                    $window.off('scroll', transparentCheck);
                    if ($headerOuterEl.attr('data-transparent-header') != 'true') {
                        $headerOuterEl.attr('data-transparent-header', 'true').addClass('pseudo-data-transparent');
                    }
                }
            }
        } else if ($('body.material').length > 0) {
            if ($loadingScreenEl.length > 0 && $('.ocm-effect-wrap #ajax-loading-screen').length > 0) {
                $loadingScreenEl.insertBefore('.ocm-effect-wrap');
            }
            if (nectarDOMInfo.scrollTop > 40) {
                $('body[data-hhun="1"] #header-secondary-outer').addClass('hidden');
            }
            setTimeout(function() {
                $('.slide-out-widget-area-toggle:not(.std-menu) > div > a').removeClass('animating');
            }, 300);
            $('#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle').addClass('material-open');
            if ($('body:not(.mobile) #header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && $('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css('display') != 'none') {
                $('#header-outer:not(.fixed-menu)').css('top', nectarDOMInfo.adminBarHeight - nectarDOMInfo.scrollTop + 'px');
                if ($headerSecondaryEl.length > 0 && $('#header-outer.fixed-menu').length > 0) {
                    $headerSecondaryEl.css('visibility', 'hidden');
                }
            }
            $('#ajax-content-wrap').css({
                'position': 'relative',
                'top': '-' + nectarDOMInfo.scrollTop + 'px'
            });
            $('.ocm-effect-wrap-inner').css({
                'padding-top': nectarDOMInfo.adminBarHeight
            });
            $('#fp-nav').addClass('material-ocm-open');
            $body.addClass('material-ocm-open');
            $body.addClass('nectar-no-flex-height');
            $('.ocm-effect-wrap').css({
                'height': nectarDOMInfo.winH
            });
            setTimeout(function() {
                $('.ocm-effect-wrap').addClass('material-ocm-open');
            }, 40);
            $('body > .slide_out_area_close').addClass('follow-body');
            $('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass('effect-shown');
            $('body[data-hhun="1"]:not(.no-scroll):not(.mobile) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({
                'transition': 'none',
                'transform': 'translateY(' + nectarDOMInfo.adminBarHeight + 'px)'
            });
            setTimeout(function() {
                $('body > .slide_out_area_close').addClass('material-ocm-open');
            }, 350);
        }
    }

    function OCM_slideOutRightClose() {
        if ($('body.material').length == 0) {
            $('.container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image,  #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title').stop(true).transition({
                x: '0px'
            }, 700, 'easeInOutCubic');
            if ($('#header-outer[data-transparency-option="1"]').length > 0 && $('#boxed').length == 0) {
                var $currentRowBG = ($('#header-outer[data-current-row-bg-color]').length > 0) ? $headerOuterEl.attr('data-current-row-bg-color') : $headerOuterEl.attr('data-user-set-bg');
                $headerOuterEl.stop(true).transition({
                    x: '0px',
                    'background-color': $currentRowBG
                }, 700, 'easeInOutCubic');
            } else {
                $headerOuterEl.stop(true).transition({
                    x: '0px'
                }, 700, 'easeInOutCubic');
            }
            $offCanvasEl.stop(true).transition({
                x: '301px'
            }, 700, 'easeInOutCubic').removeClass('open');
            if ($('#boxed').length == 0) {
                if ($('#header-outer[data-full-width="true"]').length > 0) {
                    $headerOuterEl.removeClass('highzI');
                    $('header#top #logo').stop(true).transition({
                        x: '0px'
                    }, 700, 'easeInOutCubic');
                    $('.lines-button').removeClass('close');
                }
            }
            if ($('#header-outer[data-format="centered-logo-between-menu"]').length > 0) {
                $('#header-outer header#top nav > ul.buttons, #header-outer .cart-outer .cart-menu-wrap').stop(true).transition({
                    x: '0px'
                }, 700, 'easeInOutCubic');
            }
            $offCanvasBG.stop(true).transition({
                'opacity': 0
            }, 700, 'easeInOutCubic', function() {
                $('.slide-out-widget-area-toggle a').removeClass('animating');
                $(this).css({
                    'height': '1px',
                    'width': '1px'
                });
                if ($('#header-outer[data-remove-fixed="1"]').length == 0) {
                    if ($headerOuterEl.hasClass('parallax-contained') && nectarDOMInfo.scrollTop > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) {
                        $headerOuterEl.removeClass('parallax-contained').addClass('detached').removeClass('transparent');
                    } else if (nectarDOMInfo.scrollTop == 0 && $('body[data-hhun="1"]').length > 0 && $('#page-header-bg[data-parallax="1"]').length > 0 || nectarDOMInfo.scrollTop == 0 && $('body[data-hhun="1"]').length > 0 && $('.parallax_slider_outer').length > 0) {
                        if ($('#header-outer[data-transparency-option="1"]').length > 0) {
                            $headerOuterEl.addClass('transparent');
                        }
                        $headerOuterEl.addClass('parallax-contained').removeClass('detached');
                    }
                }
                $('.container-wrap').css('transform', 'none');
            });
            $headerOuterEl.removeClass('style-slide-out-from-right');
            if ($('#header-outer[data-remove-fixed="1"]').length == 0) {
                if ($bodyBorderHeaderColorMatch == true && headerResize == true && nectarDOMInfo.winW > 1000) {
                    $window.off('scroll.headerResizeEffect');
                    if (nectarDOMInfo.scrollTop == 0) {
                        $window.on('scroll.headerResizeEffect', smallNav);
                        if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && $bodyBorderTop.length > 0 && $bodyBorderHeaderColorMatch == true && $('#header-outer.pseudo-data-transparent').length > 0) {
                            $('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({
                                'padding': '0'
                            }, {
                                queue: false,
                                duration: 250,
                                easing: 'easeOutCubic'
                            });
                        }
                    } else {
                        $window.on('scroll.headerResizeEffect', bigNav);
                    }
                    if ($headerOuterEl.hasClass('pseudo-data-transparent')) {
                        $headerOuterEl.attr('data-transparent-header', 'false').removeClass('pseudo-data-transparent').removeClass('transparent');
                    }
                    $headerOuterEl.css('transition', 'transform');
                } else if ($bodyBorderHeaderColorMatch == true && nectarDOMInfo.winW > 1000) {
                    $window.off('scroll.headerResizeEffectOpaque');
                    $window.on('scroll.headerResizeEffectOpaque', opaqueCheck);
                    $headerOuterEl.css('transition', 'transform');
                    if ($headerOuterEl.hasClass('pseudo-data-transparent')) {
                        $headerOuterEl.attr('data-transparent-header', 'false').removeClass('pseudo-data-transparent').removeClass('transparent');
                    }
                }
            }
        } else if ($('body.material').length > 0) {
            $offCanvasEl.removeClass('open');
            $('#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle').removeClass('material-open');
            $('.ocm-effect-wrap, .ocm-effect-wrap-shadow, body > .slide_out_area_close, #fp-nav').removeClass('material-ocm-open');
            $('body > .slide_out_area_close').removeClass('follow-body');
            setTimeout(function() {
                $('.slide-out-widget-area-toggle a').removeClass('animating');
                $body.removeClass('material-ocm-open');
                $body.removeClass('nectar-no-flex-height');
                $('.ocm-effect-wrap').css({
                    'height': '100%'
                });
                $('.ocm-effect-wrap-inner').css({
                    'padding-top': '0'
                });
                $window.scrollTop(Math.abs(parseInt($('#ajax-content-wrap').css('top'))));
                $('#ajax-content-wrap').css({
                    'position': '',
                    'top': ''
                });
                if ($('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0 && $('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css('display') != 'none' && $('body.mobile').length == 0) {
                    $('#header-outer:not(.fixed-menu)').css('top', '');
                    $headerSecondaryEl.css('visibility', '');
                }
                $('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({
                    'transform': ''
                });
                setTimeout(function() {
                    $('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({
                        'transition': ''
                    });
                }, 30);
                $('body[data-hhun="1"] #header-secondary-outer.hidden').removeClass('hidden');
            }, 900);
            setTimeout(function() {
                $('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass('no-trans').removeClass('effect-shown');
            }, 200);
            setTimeout(function() {
                $('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').removeClass('no-trans');
            }, 500);
        }
    }

    function OCM_fullscreenOpen() {
        if ($('body.material').length > 0) {
            $('header#top .slide-out-widget-area-toggle a').addClass('menu-push-out');
        }
        var $scrollDelay = 0;
        var $scrollDelay2 = 0;
        if (nectarDOMInfo.scrollTop + $window.height() > $('.blurred-wrap').height() && $('#nectar_fullscreen_rows').length == 0) {
            $('body,html').stop().animate({
                scrollTop: $('.blurred-wrap').height() - $window.height()
            }, 600, 'easeInOutCubic');
            $scrollDelay = 550;
            $scrollDelay2 = 200;
        }
        $('header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button').addClass('close');
        setTimeout(function() {
            $('.blurred-wrap').addClass('blurred');
        }, $scrollDelay);
        $('#slide-out-widget-area.fullscreen').show().addClass('open');
        if ($('.nectar-social.fixed').length == 0) {
            hideToTop();
        }
        $('.container-wrap').addClass('no-shadow');
        $headerOuterEl.stop(true).css('transform', 'translateY(0)');
        setTimeout(function() {
            $('.off-canvas-menu-container .menu > li').each(function(i) {
                $(this).delay(i * 50).transition({
                    y: 0,
                    'opacity': 1
                }, 800, 'easeOutExpo');
            });
            $('#slide-out-widget-area.fullscreen .widget').each(function(i) {
                $(this).delay(i * 100).transition({
                    y: 0,
                    'opacity': 1
                }, 800, 'easeOutExpo');
            });
        }, 370 + $scrollDelay2);
        setTimeout(function() {
            $('#slide-out-widget-area .off-canvas-social-links').addClass('line-shown');
            $('#slide-out-widget-area .off-canvas-social-links li').each(function(i) {
                $(this).delay(i * 50).transition({
                    'scale': 1
                }, 400, 'easeOutCubic');
            });
            $('#slide-out-widget-area .bottom-text').transition({
                'opacity': 0.7
            }, 400, 'easeOutCubic');
        }, 750 + $scrollDelay2);
        setTimeout(function() {
            var $easing = ($('body.mobile').length > 0) ? 'easeOutCubic' : 'easeInOutQuint';
            $offCanvasBG.css({
                'height': '100%',
                'width': '100%'
            }).show().stop(true).transition({
                'y': '0%'
            }, 920, $easing, function() {
                $('.slide-out-widget-area-toggle > div > a').removeClass('animating');
            });
        }, 50 + $scrollDelay2);
        OCM_overflowState();
        if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) {
            $('#ajax-content-wrap').addClass('at-content');
        }
        if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 || $('.mobile').length == 0 && $('#header-outer.transparent').length == 0) {
            $('#slide-out-widget-area.fullscreen .inner-wrap').css('padding-top', $headerOuterEl.height());
        }
    }

    function OCM_fullscreenClose() {
        if ($('body.material').length > 0) {
            setTimeout(function() {
                $('header#top .slide-out-widget-area-toggle a').removeClass('menu-push-out');
            }, 350);
        }
        $('.slide-out-widget-area-toggle:not(.std-menu) .lines-button').removeClass('close');
        $('.blurred-wrap').removeClass('blurred');
        $('#slide-out-widget-area.fullscreen').transition({
            'opacity': 0
        }, 700, 'easeOutQuad', function() {
            $('#slide-out-widget-area.fullscreen').hide().css('opacity', '1');
        }).removeClass('open');
        $('#slide-out-widget-area.fullscreen .widget').transition({
            'opacity': 0
        }, 700, 'easeOutQuad', function() {
            $(this).transition({
                y: '110px'
            }, 0);
        });
        setTimeout(function() {
            $('.off-canvas-menu-container .menu > li').transition({
                y: '80px',
                'opacity': 0
            }, 0);
            $('#slide-out-widget-area .off-canvas-social-links li').transition({
                'scale': 0
            }, 0);
            $('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');
            $('#slide-out-widget-area .bottom-text').transition({
                'opacity': 0
            }, 0);
            $('#slide-out-widget-area .menuwrapper .menu').removeClass('subview');
            $('#slide-out-widget-area .menuwrapper .menu li').removeClass('subview subviewopen');
            $('#slide-out-widget-area.fullscreen .inner .off-canvas-menu-container').css('height', 'auto');
        }, 800);
        setTimeout(function() {
            if ($('.nectar-social.fixed').length == 0) {
                showToTop();
            }
            $('.container-wrap').removeClass('no-shadow');
        }, 500);
        $offCanvasBG.stop(true).transition({
            'opacity': 0
        }, 900, 'easeOutQuad', function() {
            if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) {
                $('#ajax-content-wrap').removeClass('at-content');
            }
            if ($('.mobile #header-outer[data-permanent-transparent="false"]').length == 0) {
                $('#slide-out-widget-area.fullscreen .inner-wrap').css('padding-top', '0');
            }
            $('.slide-out-widget-area-toggle a').removeClass('animating');
            var $opacity = 0.4;
            if ($offCanvasBG.hasClass('solid')) {
                $opacity = 1;
            }
            if ($offCanvasBG.hasClass('dark')) {
                $opacity = 0.93;
            }
            if ($offCanvasBG.hasClass('medium')) {
                $opacity = 0.6;
            }
            if ($offCanvasBG.hasClass('light')) {
                $opacity = 0.4;
            }
            $(this).css({
                'height': '1px',
                'width': '1px',
                'opacity': $opacity
            }).transition({
                y: '-100%'
            }, 0);
        });
    }

    function OCM_fullscreenAltOpen() {
        if ($('body.material').length > 0) {
            $('header#top .slide-out-widget-area-toggle a').addClass('menu-push-out');
        }
        $('header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button').addClass('close');
        $('#slide-out-widget-area.fullscreen-alt').show().addClass('open');
        $offCanvasBG.addClass('open');
        $('body > div[class*="body-border"]').css('z-index', '9995');
        $('.off-canvas-menu-container .menu').transition({
            y: '0px',
            'opacity': 1
        }, 0);
        if ($('.nectar-social.fixed').length == 0) {
            hideToTop();
        }
        if ($('#header-outer.transparent').length > 0) {
            if ($bodyBorderTop.length > 0) {
                $('.admin-bar #slide-out-widget-area-bg.fullscreen-alt').css({
                    'padding-top': ($bodyBorderTop.outerHeight(true) + 32) + 'px'
                });
                $('body:not(.admin-bar) #slide-out-widget-area-bg.fullscreen-alt').css({
                    'padding-top': ($bodyBorderTop.outerHeight(true)) + 'px'
                });
            }
        }
        $headerOuterEl.stop(true).css('transform', 'translateY(0)');
        if ($('#logo .starting-logo').length > 0 && $window.width() > 1000 && $('#header-outer[data-format="centered-menu-bottom-bar"].fixed-menu').length == 0 && $('body.material #header-outer[data-condense="true"]').length == 0 && !nectarDOMInfo.usingFrontEndEditor) {
            $headerOuterEl.stop(true).css('transform', 'translateY(0)').addClass('transparent');
            if ($headerOuterEl.attr('data-transparent-header') != 'true') {
                $headerOuterEl.attr('data-transparent-header', 'true').addClass('pseudo-data-transparent');
            }
        }
        $('.off-canvas-menu-container .clip-wrap').css('transition-duration', '0s');
        setTimeout(function() {
            $('.off-canvas-menu-container .menu > li').each(function(i) {
                $(this).delay(i * 50).transition({
                    y: 0,
                    'opacity': 1
                }, 750, 'easeOutCubic').addClass('no-pointer-events');
            });
            setTimeout(function() {
                $('.off-canvas-menu-container .menu > li').removeClass('no-pointer-events');
                $('.off-canvas-menu-container .clip-wrap').css('transition-duration', '.45s');
            }, 500);
            $('#slide-out-widget-area.fullscreen-alt .widget').each(function(i) {
                $(this).delay(i * 100).transition({
                    y: 0,
                    'opacity': 1
                }, 650, 'easeOutCubic');
            });
        }, 200);
        setTimeout(function() {
            $('#slide-out-widget-area .off-canvas-social-links').addClass('line-shown');
            $('#slide-out-widget-area .off-canvas-social-links li').css('opacity', '1').each(function(i) {
                $(this).delay(i * 50).transition({
                    'scale': 1
                }, 400, 'easeOutCubic');
            });
            $('#slide-out-widget-area .bottom-text').transition({
                'opacity': 1
            }, 600, 'easeOutCubic');
        }, 200);
        var $opacity = 0.4;
        if ($offCanvasBG.hasClass('solid')) {
            $opacity = 1;
        }
        if ($offCanvasBG.hasClass('dark')) {
            $opacity = 0.97;
        }
        if ($offCanvasBG.hasClass('medium')) {
            $opacity = 0.6;
        }
        if ($offCanvasBG.hasClass('light')) {
            $opacity = 0.4;
        }
        $offCanvasBG.removeClass('no-transition');
        $offCanvasBG.addClass('padding-removed').css({
            'height': '100%',
            'width': '100%',
            'left': '0',
            'opacity': $opacity
        });
        setTimeout(function() {
            $('.slide-out-widget-area-toggle > div > a').removeClass('animating');
        }, 600);
        OCM_overflowState();
        if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) {
            $('#ajax-content-wrap').addClass('at-content');
        }
        if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 || $('.mobile').length == 0 && $('#header-outer.transparent').length == 0) {
            $('#slide-out-widget-area.fullscreen-alt .inner-wrap').css('padding-top', $headerOuterEl.height());
        }
    }

    function OCM_fullscreenAltClose() {
        if ($('body.material').length > 0) {
            setTimeout(function() {
                $('header#top .slide-out-widget-area-toggle a').removeClass('menu-push-out');
            }, 350);
        }
        $('.slide-out-widget-area-toggle:not(.std-menu) .lines-button').removeClass('close');
        $('.blurred-wrap').removeClass('blurred');
        $offCanvasBG.removeClass('open');
        $('#slide-out-widget-area.fullscreen-alt .widget').transition({
            'opacity': 0
        }, 500, 'easeOutQuad', function() {
            $(this).transition({
                y: '40px'
            }, 0);
        });
        $('#slide-out-widget-area .bottom-text, #slide-out-widget-area .off-canvas-social-links li').transition({
            'opacity': 0
        }, 250, 'easeOutQuad');
        $('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');
        $('.off-canvas-menu-container .menu').transition({
            y: '-13px',
            'opacity': 0
        }, 400);
        setTimeout(function() {
            $('.off-canvas-menu-container .menu > li').stop(true, true).transition({
                y: '40px',
                'opacity': 0
            }, 0);
            $('#slide-out-widget-area .off-canvas-social-links li').transition({
                'scale': 0
            }, 0);
            $('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');
            $('#slide-out-widget-area .menuwrapper .menu').removeClass('subview');
            $('#slide-out-widget-area .menuwrapper .menu li').removeClass('subview subviewopen');
            $('#slide-out-widget-area.fullscreen-alt .inner .off-canvas-menu-container').css('height', 'auto');
            if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) {
                $('#ajax-content-wrap').removeClass('at-content');
            }
            if ($('.mobile #header-outer[data-permanent-transparent="false"]').length == 0) {
                $('#slide-out-widget-area.fullscreen-alt .inner-wrap').css('padding-top', '0');
            }
            $('.slide-out-widget-area-toggle a').removeClass('animating');
            $offCanvasBG.css({
                'height': '1px',
                'width': '1px',
                'left': '-100%'
            });
            $('#slide-out-widget-area.fullscreen-alt').hide().removeClass('open');
        }, 550);
        setTimeout(function() {
            if ($('.nectar-social.fixed').length == 0) {
                showToTop();
            }
        }, 600);
        setTimeout(function() {
            $offCanvasBG.removeClass('padding-removed');
        }, 50);
        var borderDelay = ($bodyBorderHeaderColorMatch == true) ? 150 : 50;
        setTimeout(function() {
            $offCanvasBG.stop(true).css({
                'opacity': 0
            });
            if ($('#header-outer[data-transparent-header="true"]').length > 0) {
                $('body > div[class*="body-border"]').css('z-index', '10000');
            }
        }, borderDelay);
        setTimeout(function() {
            $('#header-outer.transparent.small-nav, #header-outer.transparent.detached, #header-outer:not([data-permanent-transparent="1"]).transparent.scrolled-down').removeClass('transparent');
            if ($headerOuterEl.hasClass('pseudo-data-transparent')) {
                $headerOuterEl.attr('data-transparent-header', 'false').removeClass('pseudo-data-transparent').removeClass('transparent');
            }
        }, 100);
    }

    function OCM_simpleDropdownOpen() {
        $('#mobile-menu').show();
        $('header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button').addClass('close');
        if ($('body.material').length > 0) {
            $('header#top .slide-out-widget-area-toggle a').addClass('menu-push-out');
        }
        setTimeout(function() {
            $('.slide-out-widget-area-toggle > div > a').removeClass('animating');
        }, 100);
    }

    function OCM_simpleDropdownClose() {
        $('#mobile-menu').hide();
        $('.slide-out-widget-area-toggle:not(.std-menu) .lines-button').removeClass('close');
        setTimeout(function() {
            if ($('body.material').length > 0) {
                $('header#top .slide-out-widget-area-toggle a').removeClass('menu-push-out');
            }
            $('.slide-out-widget-area-toggle a').removeClass('animating');
        }, 350);
    }

    function OCM_simpleStyleInit() {
        if ($('#header-outer #mobile-menu').length == 0) {
            return;
        }
        $('#header-outer #mobile-menu li.megamenu').removeClass('megamenu');
        $('#header-outer #mobile-menu ul li').each(function() {
            $(this).find('a').wrapInner('<span></span>');
            if ($(this).find('> ul').length > 0) {
                $(this).find('> a').append('<span class="sf-sub-indicator"><i class="fa fa-angle-down"></i></span>');
            }
        });
        $('#header-outer #mobile-menu .sf-sub-indicator').on('click', function() {
            var $parentLI = $(this).parent().parent();
            $parentLI.toggleClass('current-open-item');
            if ($parentLI.hasClass('current-open-item')) {
                $parentLI.find('> ul').show();
                setTimeout(function() {
                    $parentLI.addClass('visible');
                }, 30);
            } else {
                $parentLI.find('ul').hide();
                $parentLI.find('li').removeClass('visible').removeClass('current-open-item');
                $parentLI.removeClass('visible');
            }
            return false;
        });
        $window.on('smartresize', function() {
            if (nectarDOMInfo.winW > 1000 && $('.slide-out-widget-area-toggle.mobile-icon a.open').length > 0) {
                $('.slide-out-widget-area-toggle.mobile-icon a').addClass('non-human-allowed').trigger('click');
                setTimeout(function() {
                    $('.slide-out-widget-area-toggle.mobile-icon a').removeClass('non-human-allowed');
                }, 100);
            }
        });
    }

    function OCM_clickTriggeredStylesInit() {
        $body.on('click', '.slide-out-widget-area-toggle:not(.std-menu) a.closed:not(.animating), .nectar-ocm-trigger-open', function() {
            if (nectarBoxRoll.animating == 'true' || $('.slide-out-from-right-hover').length > 0) {
                return false;
            }
            $headerOuterEl.removeClass('no-transition');
            if ($offCanvasEl.hasClass('slide-out-from-right')) {
                OCM_slideOutRightOpen();
            } else if ($offCanvasEl.hasClass('fullscreen')) {
                OCM_fullscreenOpen();
            } else if ($offCanvasEl.hasClass('fullscreen-alt')) {
                OCM_fullscreenAltOpen();
            } else if ($('#header-outer #mobile-menu').length > 0) {
                OCM_simpleDropdownOpen();
            }
            if ($('#header-outer #mobile-menu').length == 0) {
                $headerOuterEl.removeClass('side-widget-closed').addClass('side-widget-open');
                if ($('#header-outer[data-transparency-option="1"]').length > 0 && $('#boxed').length == 0 && $('#header-outer[data-full-width="true"]').length > 0 && !nectarDOMInfo.usingFrontEndEditor) {
                    if ($('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length == 0 && $('body.material #header-outer[data-condense="true"]').length == 0) {
                        $headerOuterEl.addClass('transparent');
                    }
                }
                if ($('#header-outer.dark-slide.transparent').length > 0 && $('#boxed').length == 0 && $('body.material-ocm-open').length == 0) {
                    $headerOuterEl.removeClass('dark-slide').addClass('temp-removed-dark-slide');
                }
            }
            $('.slide-out-widget-area-toggle > div > a').removeClass('closed').addClass('open').attr('aria-expanded', 'true');
            $('.slide-out-widget-area-toggle > div > a').addClass('animating');
            return false;
        });
        $body.on('click', '.slide-out-widget-area-toggle:not(.std-menu) a.open:not(.animating), #slide-out-widget-area .slide_out_area_close, > .slide_out_area_close, #slide-out-widget-area-bg.slide-out-from-right, .material-ocm-open #ajax-content-wrap', function(e) {
            if (e.originalEvent == undefined && $('.slide_out_area_close.non-human-allowed').length == 0 && $('.slide-out-widget-area-toggle.mobile-icon a.non-human-allowed').length == 0) {
                return;
            }
            if ($('.slide-out-widget-area-toggle:not(.std-menu) a.animating').length > 0) {
                return;
            }
            $headerOuterEl.removeClass('no-transition');
            $('.slide-out-widget-area-toggle:not(.std-menu) a').removeClass('open').addClass('closed').attr('aria-expanded', 'false');
            $('.slide-out-widget-area-toggle:not(.std-menu) a').addClass('animating');
            if ($offCanvasEl.hasClass('slide-out-from-right')) {
                OCM_slideOutRightClose();
            } else if ($offCanvasEl.hasClass('fullscreen')) {
                OCM_fullscreenClose();
            } else if ($offCanvasEl.hasClass('fullscreen-alt')) {
                OCM_fullscreenAltClose();
            } else if ($('#header-outer #mobile-menu').length > 0) {
                OCM_simpleDropdownClose();
            }
            if ($('#header-outer #mobile-menu').length == 0) {
                if ($('#header-outer.temp-removed-dark-slide.transparent').length > 0 && $('#boxed').length == 0) {
                    $headerOuterEl.removeClass('temp-removed-dark-slide').addClass('dark-slide');
                }
                if ($('#header-outer[data-permanent-transparent="1"]').length == 0 && $('#slide-out-widget-area.fullscreen-alt').length == 0) {
                    if ($('.nectar-box-roll').length == 0) {
                        if ($('#header-outer.small-nav').length > 0 || $('#header-outer.scrolled-down').length > 0) {
                            $headerOuterEl.removeClass('transparent');
                        }
                    } else {
                        if ($('#header-outer.small-nav').length > 0 || $('#header-outer.scrolled-down').length > 0 || $('.container-wrap.auto-height').length > 0) {
                            $headerOuterEl.removeClass('transparent');
                        }
                    }
                }
                $headerOuterEl.removeClass('hidden-menu');
                $headerOuterEl.removeClass('side-widget-open').addClass('side-widget-closed');
            }
            return false;
        });
    }

    function OCM_init() {
        if ($('#slide-out-widget-area.slide-out-from-right-hover').length > 0) {
            OCM_slideOutRightHoverInit();
        } else {
            OCM_clickTriggeredStylesInit();
            OCM_simpleStyleInit();
        }
        if ($('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length == 0 && $('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length == 0) {
            fullscreenMenuInit();
        } else if ($('body.using-mobile-browser[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length > 0) {
            $('body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]').on('click', function() {
                if ($(this).attr('href') != '#') {
                    OCM_close($(this).parent());
                }
            });
        }
        if ($('#nectar_fullscreen_rows').length > 0 && $('body[data-slide-out-widget-area-style*="fullscreen"]').length > 0) {
            $('body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]').on('click', function() {
                var $link_href = ($(this).is('[href*="#"]')) ? $(this).attr('href') : '';
                if ($link_href != '#' && $('div[data-fullscreen-anchor-id="' + $link_href.substr($link_href.indexOf("#") + 1) + '"]').length > 0) {
                    setTimeout(function() {
                        $('#slide-out-widget-area .slide_out_area_close').addClass('non-human-allowed').trigger('click');
                    }, 100);
                    setTimeout(function() {
                        $('#slide-out-widget-area .slide_out_area_close').removeClass('non-human-allowed');
                    }, 150);
                }
            });
        }
        $body.on('mouseover', '#slide-out-widget-area .off-canvas-menu-container .menuwrapper > .sub-menu li > a', function() {
            var $currentTxt = $(this).text();
            $('.off-canvas-menu-container .menuwrapper .menu li > a').removeClass('hovered');
            $('.off-canvas-menu-container .menuwrapper .menu li > a:contains(' + $currentTxt + ')').addClass('hovered');
        });
        $body.on('mouseover', '.off-canvas-menu-container .menuwrapper .menu li > a', function() {
            $('.off-canvas-menu-container .menuwrapper .menu li > a').removeClass('hovered');
        });
        setTimeout(OCM_scrolling, 500);
        if (nectarDOMInfo.usingMobileBrowser) {
            $offCanvasEl.addClass('mobile');
        }
    }

    function OCM_scrolling() {
        $offCanvasEl.mousewheel(function(event, delta) {
            this.scrollTop -= (delta * 30);
            event.preventDefault();
        });
    }

    function OCM_close(item) {
        if ($('#slide-out-widget-area.open').length > 0) {
            var $windowCurrentLocation = window.location.href.split("#")[0];
            var $windowClickedLocation = item.find('> a').attr('href').split("#")[0];
            if ($windowCurrentLocation == $windowClickedLocation || item.find('a[href^="#"]').length > 0) {
                if (item.parents('.slide-out-from-right-hover').length > 0) {
                    $('.slide-out-widget-area-toggle.slide-out-hover-icon-effect a').trigger('click');
                } else {
                    $('.slide-out-widget-area-toggle a').trigger('click');
                }
            }
        }
    }

    function clickToggleSubmenus() {
        if (!$('#header-outer[data-format="left-header"]').length > 0 && !$('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length > 0 && !$('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length > 0) {
            return;
        }
        $('#header-outer[data-format="left-header"] nav li.megamenu').removeClass('megamenu');
        var $ocm_link_selector;
        if ($('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length > 0) {
            $ocm_link_selector = '#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children > .ocm-dropdown-arrow';
        } else {
            $ocm_link_selector = 'body.material #slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children > a';
        }
        $('#header-outer[data-format="left-header"] nav li.menu-item-has-children > a, ' + $ocm_link_selector).on('click', function() {
            if ($(this).parent().hasClass('open-submenu')) {
                $(this).parent().find('.sub-menu').css({
                    'max-height': '0'
                });
                $(this).parent().removeClass('open-submenu');
            } else {
                var $that = $(this);
                var $maxSubMenuHeight;
                $that.parent().find('> .sub-menu').addClass('no-trans');
                setTimeout(function() {
                    $that.parent().find('> .sub-menu').css({
                        'max-height': 'none',
                        'position': 'absolute',
                        'visibility': 'hidden'
                    });
                    $maxSubMenuHeight = $that.parent().find('> .sub-menu').height();
                    $that.parent().find('> .sub-menu').removeClass('no-trans');
                    $that.parent().find('> .sub-menu').css({
                        'max-height': '0',
                        'position': 'relative',
                        'visibility': 'visible'
                    });
                }, 25);
                setTimeout(function() {
                    $that.closest('ul').find('li.menu-item-has-children').removeClass('open-submenu');
                    $that.closest('ul').find('li.menu-item-has-children > .sub-menu').css({
                        'max-height': '0'
                    });
                    $that.parent().addClass('open-submenu');
                    $that.parent().find('> .sub-menu').css('max-height', $maxSubMenuHeight);
                    if ($that.parents('ul').length > 0) {
                        $that.parents('ul:not(.sf-menu)').each(function() {
                            $(this).css('max-height');
                            $(this).css('max-height', parseInt($(this).height() + parseInt($(this).css('padding-top')) * 2 + $maxSubMenuHeight) + 'px');
                        });
                    }
                }, 50);
            }
            return false;
        });
        if ($('#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children > ul > li.current-menu-item').length > 0) {
            $('#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children > a').trigger('click');
        }
    }
    $.DLMenu = function(options, element) {
        this.$el = $(element);
        this._init(options);
    };
    $.DLMenu.defaults = {
        animationClasses: {
            classin: 'dl-animate-in-1',
            classout: 'dl-animate-out-1'
        },
        onLevelClick: function() {
            return false;
        },
        onLinkClick: function() {
            return false;
        }
    };
    $.DLMenu.prototype = {
        _init: function(options) {
            this.options = $.extend(true, {}, $.DLMenu.defaults, options);
            this._config();
            var animEndEventNames = {
                    'WebkitAnimation': 'webkitAnimationEnd',
                    'OAnimation': 'oAnimationEnd',
                    'msAnimation': 'MSAnimationEnd',
                    'animation': 'animationend'
                },
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                };
            this.animEndEventName = animEndEventNames['animation'] + '.menu';
            this.transEndEventName = transEndEventNames['transition'] + '.menu', this.supportAnimations = true, this.supportTransitions = true;
            this._initEvents();
        },
        _config: function() {
            this.open = false;
            this.$trigger = this.$el.children('.trigger');
            this.$menu = this.$el.children('ul.menu');
            this.$menuitems = this.$menu.find('li:not(.back) > a');
            this.$el.find('ul.sub-menu').prepend('<li class="back"><a href="#"> ' + $offCanvasEl.attr('data-back-txt') + ' </a></li>');
            this.$back = this.$menu.find('li.back');
        },
        _initEvents: function() {
            var self = this;
            this.$trigger.on('click.menu', function() {
                if (self.open) {
                    self._closeMenu();
                } else {
                    self._openMenu();
                }
                return false;
            });
            this.$menuitems.on('click.menu', function(event) {
                var $item = $(this).parent('li'),
                    $submenu = $item.children('ul.sub-menu');
                $('.fullscreen-alt .off-canvas-menu-container .clip-wrap, .fullscreen-alt .off-canvas-menu-container .clip-wrap span').css('transition-duration', '0s');
                if ($submenu.length > 0) {
                    var $flyin = $submenu.clone().css('opacity', 0).insertAfter(self.$menu),
                        onAnimationEndFn = function() {
                            self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classout).addClass('subview');
                            $item.addClass('subviewopen').parents('.subviewopen:first').removeClass('subviewopen').addClass('subview');
                            $flyin.remove();
                            setTimeout(function() {
                                $('.off-canvas-menu-container .menu > li').removeClass('no-pointer-events');
                                $('.off-canvas-menu-container .clip-wrap, .off-canvas-menu-container .clip-wrap span').css('transition-duration', '.45s');
                            }, 300);
                        };
                    setTimeout(function() {
                        $flyin.addClass(self.options.animationClasses.classin);
                        self.$menu.addClass(self.options.animationClasses.classout);
                        if (self.supportAnimations) {
                            self.$menu.on(self.animEndEventName, onAnimationEndFn);
                        } else {
                            onAnimationEndFn.call();
                        }
                        self.options.onLevelClick($item, $item.children('a:first').text());
                    });
                    $item.parents('.off-canvas-menu-container').css('height', $item.parents('.off-canvas-menu-container').find('.menuwrapper .menu').height()).transition({
                        'height': $flyin.height()
                    }, 500, 'easeInOutQuad');
                    return false;
                } else {
                    self.options.onLinkClick($item.find('> a'), event);
                }
                OCM_close($item);
            });
            this.$back.on('click.menu', function() {
                var $this = $(this),
                    $submenu = $this.parents('ul.sub-menu:first'),
                    $item = $submenu.parent(),
                    $flyin = $submenu.clone().insertAfter(self.$menu);
                var onAnimationEndFn = function() {
                    self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classin);
                    $flyin.remove();
                };
                setTimeout(function() {
                    $flyin.addClass(self.options.animationClasses.classout);
                    self.$menu.addClass(self.options.animationClasses.classin);
                    if (self.supportAnimations) {
                        self.$menu.on(self.animEndEventName, onAnimationEndFn);
                    } else {
                        onAnimationEndFn.call();
                    }
                    $item.removeClass('subviewopen');
                    var $subview = $this.parents('.subview:first');
                    if ($subview.is('li')) {
                        $subview.addClass('subviewopen');
                    }
                    $subview.removeClass('subview');
                });
                $item.parents('.off-canvas-menu-container').css('height', $item.parents('.off-canvas-menu-container').find('.menuwrapper .menu').height());
                setTimeout(function() {
                    $item.parents('.off-canvas-menu-container').transition({
                        'height': $item.parent().height()
                    }, 500, 'easeInOutQuad');
                }, 50);
                return false;
            });
        },
        closeMenu: function() {
            if (this.open) {
                this._closeMenu();
            }
        },
        _closeMenu: function() {
            var self = this,
                onTransitionEndFn = function() {
                    self.$menu.off(self.transEndEventName);
                    self._resetMenu();
                };
            this.$menu.removeClass('menuopen');
            this.$menu.addClass('menu-toggle');
            this.$trigger.removeClass('active');
            if (this.supportTransitions) {
                this.$menu.on(this.transEndEventName, onTransitionEndFn);
            } else {
                onTransitionEndFn.call();
            }
            this.open = false;
        },
        openMenu: function() {
            if (!this.open) {
                this._openMenu();
            }
        },
        _openMenu: function() {
            var self = this;
            $body.off('click').on('click.menu', function() {
                self._closeMenu();
            });
            this.$menu.addClass('menuopen menu-toggle').on(this.transEndEventName, function() {
                $(this).removeClass('menu-toggle');
            });
            this.$trigger.addClass('active');
            this.open = true;
        },
        _resetMenu: function() {
            this.$menu.removeClass('subview');
            this.$menuitems.removeClass('subview subviewopen');
        }
    };
    var logError = function(message) {
        if (window.console) {
            window.console.error(message);
        }
    };
    $.fn.dlmenu = function(options) {
        if (typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var instance = $.data(this, 'menu');
                if (!instance) {
                    logError("cannot call methods on menu prior to initialization; " + "attempted to call method '" + options + "'");
                    return;
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    logError("no such method '" + options + "' for menu instance");
                    return;
                }
                instance[options].apply(instance, args);
            });
        } else {
            this.each(function() {
                var instance = $.data(this, 'menu');
                if (instance) {
                    instance._init();
                } else {
                    instance = $.data(this, 'menu', new $.DLMenu(options, this));
                }
            });
        }
        return this;
    };

    function fullscreenMenuInit() {
        $('#slide-out-widget-area .off-canvas-menu-container .menu').wrap('<div class="menu-wrap menuwrapper" />');
        $('#slide-out-widget-area .off-canvas-menu-container .menu').addClass('menuopen');
        var $ocmAnimationClassNum = ($('#slide-out-widget-area.fullscreen-alt').length > 0) ? '4' : '5';
        $('#slide-out-widget-area .off-canvas-menu-container .menu-wrap').dlmenu({
            animationClasses: {
                classin: 'dl-animate-in-' + $ocmAnimationClassNum,
                classout: 'dl-animate-out-' + $ocmAnimationClassNum
            }
        });
    }

    function pageHeaderSlideInHeight() {
        var pageHeaderHeight = parseInt($pageHeaderBG.height());
        $('body[data-aie="slide-down"] #page-header-wrap:not(.fullscreen-header)').css('height', pageHeaderHeight + 'px');
    }

    function pageHeaderAfterLoad() {
        if ($('#header-outer[data-transparent-header="true"]').length > 0) {
            $('#page-header-bg[data-parallax="1"]').css({
                'top': nectarDOMInfo.adminBarHeight
            });
        } else {
            if ($('body[data-header-resize="0"]').length == 0 && $('body.material').length == 0) {
                $('#page-header-bg[data-parallax="1"]').css({
                    'top': ($('#page-header-wrap').offset().top) + 'px'
                });
            }
        }
        if ($('#ajax-content-wrap').length == 0 || !$body.hasClass('ajax-loaded')) {
            $('#page-header-bg[data-parallax="1"]').animate({
                'opacity': 1
            }, 350, 'easeInCubic');
        } else if ($('#ajax-content-wrap').length == 1) {
            $('#page-header-bg[data-parallax="1"]').css({
                'opacity': 1
            });
        }
        $('#page-header-bg[data-parallax="1"] .nectar-particles').append('<div class="fade-out" />');
    }

    function pageHeaderUnload() {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
            window.onunload = function() {
                pageHeaderInit();
                $('#page-header-bg[data-parallax="1"] .span_6').css({
                    'opacity': 1
                });
            };
        }
    }

    function pageHeaderInit() {
        var $headerRemoveStickyness = ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length > 0) ? 1 : 0;
        if ($('#page-header-bg[data-parallax="1"]').length > 0) {
            var img = new Image(),
                pageHeaderHeight = parseInt($pageHeaderBG.height()),
                $initialImgCheck = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
            if ($initialImgCheck && $initialImgCheck.indexOf('.') !== -1) {
                img.onload = function() {
                    pageHeaderAfterLoad();
                };
                img.src = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
            } else {
                pageHeaderAfterLoad();
            }
            if ($('body[data-hhun="1"]').length > 0 && !$('#header-outer[data-remove-fixed="1"]').length > 0) {
                $headerOuterEl.addClass('parallax-contained');
            }
            window.addEventListener('scroll', function() {
                if (nectarDOMInfo.winW > 1000) {
                    window.requestAnimationFrame(parallaxPageHeaderCalc);
                }
            }, false);
        }
        var $pt_timeout = ($('body[data-ajax-transitions="true"]').length > 0 && $('#page-header-bg[data-animate-in-effect="slide-down"]').length > 0) ? 350 : 0;
        if ($pageHeaderBG.length > 0) {
            setTimeout(function() {
                pageHeaderSlideInHeight();
            }, $pt_timeout);
            $('#page-header-bg[data-animate-in-effect="fade-in"]').addClass('loaded');
            var $initialImgCheckAscend = extractUrl($pageHeaderBG.css('background-image'));
            if ($initialImgCheckAscend && $initialImgCheckAscend.indexOf('.') !== -1) {
                $pageHeaderBG.addClass('has-bg');
            }
            $window.on('smartresize', pageHeaderSlideInHeight);
        }

        function parallaxPageHeaderCalc() {
            var $scrollTop = nectarDOMInfo.scrollTop,
                $multiplier1 = 0.4,
                $multiplier2 = 0.09;
            if (!$body.hasClass('mobile') && navigator.userAgent.match(/iPad/i) == null && $('body.material-ocm-open').length == 0) {
                if (nectarDOMInfo.winW > 1000) {
                    $('body:not("[data-header-format=\'left-header\']") #page-header-bg').css('top', $('#ajax-content-wrap').offset().top);
                } else {
                    $('body:not("[data-header-format=\'left-header\']") #page-header-bg').css('top', '0');
                }
                if ($('#page-header-bg.out-of-sight').length == 0) {
                    if ($headerRemoveStickyness) {
                        $pageHeaderBG.css({
                            'transform': 'translateY(' + $scrollTop * -0.55 + 'px)'
                        });
                        $('#page-header-bg .span_6 .inner-wrap, body[data-button-style="rounded"] #page-header-bg .scroll-down-wrap, #page-header-bg[data-post-hs="default_minimal"] .author-section').css({
                            'transform': 'translateY(' + $scrollTop * -0.45 + 'px)'
                        });
                    } else {
                        $pageHeaderBG.css({
                            'transform': 'translateY(' + $scrollTop * -$multiplier1 + 'px)'
                        });
                        $('#page-header-bg .span_6 .inner-wrap, body[data-button-style="rounded"] #page-header-bg .section-down-arrow, #page-header-bg[data-post-hs="default_minimal"] .author-section').css({
                            'transform': 'translateY(' + $scrollTop * -$multiplier2 + 'px)'
                        });
                        $('#page-header-bg .span_6 .inner-wrap,  #page-header-bg[data-post-hs="default_minimal"] .author-section').css({
                            'opacity': 1 - ($scrollTop / (pageHeaderHeight - 60))
                        });
                    }
                    if ($('#page-header-bg .span_6 .inner-wrap').css('opacity') == 0) {
                        $('#page-header-bg .span_6 .inner-wrap, #page-header-bg .portfolio-filters').hide();
                    } else {
                        $('#page-header-bg .span_6 .inner-wrap, #page-header-bg .portfolio-filters').show();
                    }
                }
                if (($scrollTop / (pageHeaderHeight + $('#header-space').height() + nectarDOMInfo.adminBarHeight)) > 1) {
                    $('#page-header-bg, .nectar-particles, #page-header-bg .fade-out').css('visibility', 'hidden').hide().addClass('out-of-sight');
                } else {
                    $('#page-header-bg, .nectar-particles, #page-header-bg .fade-out').css('visibility', 'visible').show().removeClass('out-of-sight');
                    pageHeaderHeight = parseInt($pageHeaderBG.height());
                    $('#page-header-bg .container > .row').css('top', 0);
                }
            }
        }
        if ($pageHeaderBG.length > 0) {
            pageHeaderUnload();
            if ($('.nectar-box-roll').length == 0) {
                pageHeaderTextEffectInit();
            }
        }
    }

    function pageHeaderTextEffectMarkup() {
        $pageHeaderBG.each(function() {
            if ($(this).attr('data-text-effect') == 'rotate_in') {
                var $topHeading = 'none';
                if ($(this).find('.span_6 h1').length > 0) {
                    $topHeading = 'h1';
                }
                if ($topHeading != 'none') {
                    var $selector = ($(this).find('.nectar-particles').length > 0) ? '.inner-wrap.shape-1' : '.span_6';
                    $(this).find($selector).find($topHeading).addClass('top-heading').contents().filter(function() {
                        return this.nodeType === 3 && typeof this.data != 'undefined' && this.data.replace(/\s+/, "");
                    }).wrap('<span class="wraped"></span>');
                    $(this).find($selector).find('.wraped').each(function() {
                        var textNode = $(this),
                            text = textNode.text().split(' '),
                            replace = '';
                        $.each(text, function(index, value) {
                            if (value.replace(/\s+/, "")) {
                                replace += '<span class="wraped"><span>' + value + '</span></span> ';
                            }
                        });
                        textNode.replaceWith($(replace));
                    });
                }
            }
        });
    }

    function pageHeaderTextEffect() {
        if ($('#page-header-bg .nectar-particles').length == 0 && $('#page-header-bg[data-text-effect="none"]').length == 0 || $('.nectar-box-roll').length > 0 && $('#page-header-bg .nectar-particles').length == 0) {
            var $selector = ($('.nectar-box-roll').length == 0) ? '#page-header-bg .span_6' : '.nectar-box-roll .overlaid-content .span_6';
            $($selector).find('.wraped').each(function(i) {
                $(this).find('span').delay(i * 370).transition({
                    rotateX: '0',
                    'opacity': 1,
                    y: 0
                }, 400, 'easeOutQuad');
            });
            setTimeout(function() {
                $($selector).find('.inner-wrap > *:not(.top-heading)').each(function(i) {
                    $(this).delay(i * 370).transition({
                        rotateX: '0',
                        'opacity': 1,
                        y: 0
                    }, 650, 'easeOutQuad');
                });
                $('.scroll-down-wrap, .scroll-down-wrap .section-down-arrow').removeClass('hidden');
            }, $($selector).find('.wraped').length * 370);
        }
    }

    function pageHeaderTextEffectInit() {
        pageHeaderTextEffectMarkup();
        var $effectTimeout = ($loadingScreenEl.length > 0) ? 800 : 0;
        if ($('#page-header-bg .nectar-video-wrap video').length == 0) {
            setTimeout(pageHeaderTextEffect, $effectTimeout);
        }
    }

    function midnightInit() {
        if ($('#header-outer[data-permanent-transparent="1"]').length > 0 && $('body[data-bg-header="true"]').length > 0) {
            if ($('.container-wrap div[data-midnight]').length == 0) {
                $('.container-wrap').attr('data-midnight', 'dark');
            }
            var $midnightCompatArr = [];
            $('div[data-midnight]').each(function() {
                if ($(this).attr('data-midnight') == 'light' && $(this).parents('.pum-content').length == 0 || $(this).attr('data-midnight') == 'dark' && $(this).parents('.pum-content').length == 0) {
                    if ($(this).is('#page-header-bg') && $(this).parents('#page-header-wrap[data-midnight]').length > 0) {} else {
                        $midnightCompatArr.push($(this));
                    }
                }
            });
            if ($midnightCompatArr.length > 0) {
                $.each($midnightCompatArr, function(k, v) {
                    if (v.attr('data-midnight') == 'light' || v.attr('data-midnight') == 'dark') {
                        var $that = v;
                        var waypoint = new Waypoint({
                            element: $that,
                            handler: function(direction) {
                                if ($('body.material-ocm-open').length > 0) {
                                    return;
                                }
                                var $textColor;
                                if (direction == 'down') {
                                    $textColor = ($that.attr('data-midnight') == 'light') ? '' : 'dark-slide';
                                    $headerOuterEl.removeClass('dark-slide').addClass($textColor);
                                } else {
                                    var $prevMidItem;
                                    if (k - 1 >= 0) {
                                        $prevMidItem = k - 1;
                                    } else {
                                        $prevMidItem = k;
                                    }
                                    $textColor = ($midnightCompatArr[$prevMidItem].attr('data-midnight') == 'light') ? '' : 'dark-slide';
                                    $headerOuterEl.removeClass('dark-slide').addClass($textColor);
                                }
                            },
                            offset: $headerOuterEl.height()
                        });
                    }
                });
            }
        }
    }

    function nectarBoxRollInit() {
        if ($('.nectar-box-roll').length > 0 && typeof NectarBoxRoll !== 'undefined') {
            pageHeaderTextEffectInit();
            nectarBoxRoll = new NectarBoxRoll(nectarDOMInfo, waypoints, midnightInit, pageLoadHash, resizeVideoToCover);
        }
    }

    function waypoints() {
        rowBGAnimations();
        columnBGAnimations();
        colAndImgAnimations();
        progressBars();
        dividers();
        iconList();
        animatedTitles();
        highlightedText();
        imageWithHotspots();
        clientsFadeIn();
        splitLineHeadings();
        svgAnimations();
        milestoneInit();
        nectarFancyUlInit();
        owl_carousel_animate();
        headerRowColorInheritInit();
        morphingOutlines();
        animatedColBorders();
        foodMenuItems();
        vcWaypoints();
    }

    function salientPageBuilderElInit() {
        flexsliderInit();
        flickityLazyInit();
        setTimeout(flickityInit, 100);
        twentytwentyInit();
        standardCarouselInit();
        productCarouselInit();
        clientsCarouselInit();
        carouselfGrabbingClass();
        setTimeout(tabbedInit, 60);
        accordionInit();
        largeIconHover();
        nectarIconMatchColoring();
        coloredButtons();
        ctaLinkBG();
        teamMemberFullscreen();
        flipBoxInit();
        owlCarouselInit();
        mouseParallaxInit();
        ulCheckmarks();
        nectarFancyUlIcons();
        nectarFancyBoxHover();
        nectarVideoLightbox();
        nectarKeyframeAssist();
        morphingOutlinesInit();
        nectarPostGridInit();
        cascadingImageInit();
        imageWithHotspotEvents();
        pricingTableHeight();
        pageSubmenuInit();
        nectarLiquidBGs();
        nectarTestimonialSliders();
        nectarTestimonialSlidersEvents();
        recentPostsTitleOnlyEqualHeight();
        recentPostsInit();
        parallaxItemHoverEffect();
        fsProjectSliderInit();
        postMouseEvents();
        masonryPortfolioInit();
        masonryBlogInit();
        portfolioCustomColoring();
        searchResultMasonryInit();
        stickySidebarInit();
        portfolioSidebarFollow();
        splitLineHeadingInit();
    }

    function wooQauntityBtns() {
        jQuery(document.body).on('updated_cart_totals', function() {
            if ($('.plus').length == 0) {
                $('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added').append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />');
            }
        });
        if ($('.plus').length == 0) {
            $('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added').append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />');
            $(document).on('click', '.plus, .minus', function() {
                var $qty = $(this).closest('.quantity').find('.qty'),
                    currentVal = parseFloat($qty.val()),
                    max = parseFloat($qty.attr('max')),
                    min = parseFloat($qty.attr('min')),
                    step = $qty.attr('step');
                if (!currentVal || currentVal === '' || currentVal === 'NaN') {
                    currentVal = 0;
                }
                if (max === '' || max === 'NaN') {
                    max = '';
                }
                if (min === '' || min === 'NaN') {
                    min = 0;
                }
                if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') {
                    step = 1;
                }
                if ($(this).is('.plus')) {
                    if (max && (max == currentVal || currentVal > max)) {
                        $qty.val(max);
                    } else {
                        $qty.val(currentVal + parseFloat(step));
                    }
                } else {
                    if (min && (min == currentVal || currentVal < min)) {
                        $qty.val(min);
                    } else if (currentVal > 0) {
                        $qty.val(currentVal - parseFloat(step));
                    }
                }
                $qty.trigger('change');
            });
        }
    }

    function wooCommerceEvents() {
        var wooCartTimeout;
        $body.on('click', '.product .add_to_cart_button', function() {
            var $productHeading = ($(this).parents('li').find('h2').length > 0) ? 'h2' : 'h3',
                productToAdd = $(this).parents('li').find($productHeading).text();
            $('#header-outer .cart-notification span.item-name').html(productToAdd);
        });
        $body.on('mouseenter', '#header-outer .cart-notification', function() {
            $(this).hide();
            $('#header-outer .widget_shopping_cart').addClass('open').stop(true, true).show();
            $('#header-outer .cart_list').stop(true, true).show();
            clearTimeout(wooCartTimeout);
        });
        var $headerCartSelector = '#header-outer .nectar-woo-cart';
        if ($($headerCartSelector).length > 0) {
            $($headerCartSelector).hoverIntent(function() {
                $('#header-outer .widget_shopping_cart').addClass('open').stop(true, true).show();
                $('#header-outer .cart_list').stop(true, true).show();
                clearTimeout(wooCartTimeout);
                $('#header-outer .cart-notification').hide();
            });
        }
        $body.on('mouseleave', $headerCartSelector, function() {
            var $that = $(this);
            setTimeout(function() {
                if (!$that.is(':hover')) {
                    $('#header-outer .widget_shopping_cart').removeClass('open').stop(true, true).fadeOut(300);
                    $('#header-outer .cart_list').stop(true, true).fadeOut(300);
                }
            }, 200);
        });
        if ($('#header-outer[data-cart="false"]').length == 0) {
            $body.on('added_to_cart', shopping_cart_dropdown_show);
            $body.on('added_to_cart', shopping_cart_dropdown);
            $body.on('removed_from_cart', wooCartImgPos);
        }

        function shopping_cart_dropdown() {
            if (!$('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length && $('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length > 0) {
                $('.cart-menu-wrap').addClass('has_products');
                $('header#top nav > ul, #search-outer #search #close a, header#top .span_9 >.slide-out-widget-area-toggle').addClass('product_added');
                if (!$('.cart-menu-wrap').hasClass('static')) {
                    $('.cart-menu-wrap, #mobile-cart-link').addClass('first-load');
                }
                wooCartImgPos();
            }
        }

        function shopping_cart_dropdown_show(e) {
            clearTimeout(wooCartTimeout);
            if (!$('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length && $('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length > 0 && typeof e.type != 'undefined') {
                if ($('#header-outer .cart-notification .item-name').length > 0 && $('#header-outer .cart-notification .item-name').text().length == 0) {
                    return;
                }
                if (!$('#header-outer .cart-menu-wrap').hasClass('has_products')) {
                    setTimeout(function() {
                        $('#header-outer .cart-notification').fadeIn(400);
                    }, 400);
                } else if (!$('#header-outer .cart-notification').is(':visible')) {
                    $('#header-outer .cart-notification').fadeIn(400);
                } else {
                    $('#header-outer .cart-notification').show();
                }
                wooCartTimeout = setTimeout(hideCart, 2700);
            }
        }

        function hideCart() {
            $('#header-outer .cart-notification').stop(true, true).fadeOut();
        }

        function checkForWooItems() {
            var checkForCartItems = setInterval(shopping_cart_dropdown, 250);
            setTimeout(function() {
                clearInterval(checkForCartItems);
            }, 4500);
        }

        function wooCartImgPos() {
            $('#header-outer .widget_shopping_cart .cart_list li, #slide-out-widget-area .widget_shopping_cart .cart_list li').each(function() {
                if ($(this).find('> img').length == 0 && $(this).find('.product-meta').length == 0) {
                    var productCartImgLinkSrc = ($(this).find('> a[href]:not(.remove)').length > 0) ? $(this).find('> a[href]:not(.remove)').attr('href') : '';
                    var productCartImg = $(this).find('> a > img').clone();
                    $(this).wrapInner('<div class="product-meta" />');
                    $(this).prepend(productCartImg);
                    if (productCartImgLinkSrc.length > 0) {
                        productCartImg.wrap('<a href="' + productCartImgLinkSrc + '"></a>');
                    }
                }
            });
        }
        if ($('#header-outer[data-cart="false"]').length == 0) {
            checkForWooItems();
        }

        function nectarAccountPageTabs() {
            if ($('body.woocommerce-account #customer_login').length == 0) {
                return;
            }
            $('.woocommerce-account .woocommerce > #customer_login').prepend('<div class="nectar-form-controls" />');
            $('.woocommerce-account .woocommerce > #customer_login > div:not(.nectar-form-controls)').each(function() {
                var $title = $(this).find('> h2').text();
                $('#customer_login .nectar-form-controls').append('<div class="control">' + $title + '</div>');
            });
            $('.woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control').on('click', function() {
                $('.woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control').removeClass('active');
                $(this).addClass('active');
                var formIndex = $(this).index() + 1;
                $('#customer_login div[class*="u-column"]').hide();
                $('#customer_login div[class*="u-column"].col-' + formIndex).show();
                setTimeout(function() {
                    $('#customer_login div[class*="u-column"]').removeClass('visible');
                    $('#customer_login div[class*="u-column"].col-' + formIndex).addClass('visible');
                }, 30);
            });
            $('.woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control:nth-child(1)').trigger('click');
        }
        nectarAccountPageTabs();
        $body.on('mouseover', '.text_on_hover .product-wrap, .text_on_hover > a:first-child', function() {
            $(this).parent().addClass('hovered');
        });
        $body.on('mouseout', '.text_on_hover .product-wrap, .text_on_hover > a:first-child', function() {
            $(this).parent().removeClass('hovered');
        });
        if ($('.material.product').length > 0 || $('.minimal.product').length > 0 || $('.nectar-fancy-box[data-style="parallax_hover"]').length > 0 || $('.nectar-category-grid[data-shadow-hover="yes"]').length > 0) {
            var $productZindex = 101;
            $body.on('mouseenter', '.material.product, .minimal.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item', function() {
                $productZindex++;
                $(this).css('z-index', $productZindex + 1);
            });
            $body.on('mouseleave', '.material.product, .minimal.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item', function() {
                var $that = $(this);
                setTimeout(function() {
                    if (!$that.is(':hover')) {
                        $that.css('z-index', 100);
                    }
                }, 350);
            });
            setInterval(function() {
                if ($('.nectar-fancy-box[data-style="parallax_hover"]:hover').length > 0 || $('.minimal.product:hover').length > 0) {
                    return;
                }
                $('.material.product:not(:hover), .minimal.product:not(:hover), .nectar-fancy-box[data-style="parallax_hover"]:not(:hover), .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item:not(:hover)').css('z-index', 100);
                $productZindex = 101;
            }, 10000);
        }

        function minimalProductHover() {
            $('.products .classic .product-wrap .add_to_cart_button').wrapInner('<span />');
            $('.products .classic .product-wrap .add_to_cart_button').prepend('<i class="normal icon-salient-cart"></i>');
            $body.on('mouseover', '.products .minimal.product', function() {
                minimalProductCalc($(this));
            });
            $body.on('mouseleave', '.products .minimal.product', function() {
                $(this).find('.background-color-expand').css({
                    'transform': 'scale(1)'
                });
            });
            $('.products .minimal.product').each(function() {
                if ($(this).is(':hover')) {
                    $(this).trigger('mouseover');
                }
            });
        }

        function minimalProductCalc(el) {
            var $item = el,
                $itemWidth = $item.width(),
                $itemHeight = $item.height(),
                $wChange = (parseInt($itemWidth) + 40) / parseInt($itemWidth),
                $hChange = (parseInt($itemHeight) + 40) / parseInt($itemHeight);
            $item.addClass('hover-bound');
            $item.find('.background-color-expand').css({
                'transform': 'scale(' + $wChange + ',' + $hChange + ') translateY(0px)'
            });
        }
        minimalProductHover();
        $('.woocommerce #sidebar .widget.woocommerce').each(function() {
            if ($(this).find('> h4').length == 0) {
                $(this).addClass('no-widget-title');
            }
        });
        $body.on('click', '#sidebar .widget.woocommerce:not(.widget_price_filter) h4', function() {
            if ($window.width() < 1000) {
                if ($(this).parent().is('.widget_product_tag_cloud')) {
                    $(this).parent().find('> div').slideToggle();
                }
                if ($(this).parent().is('.woocommerce-widget-layered-nav') && $(this).parent().find('> .woocommerce-widget-layered-nav-dropdown').length > 0) {
                    $(this).parent().find('> .woocommerce-widget-layered-nav-dropdown').slideToggle();
                }
                $(this).parent().find('> ul').slideToggle();
                $(this).parent().toggleClass('open-filter');
            }
        });
        $body.on('mouseenter', '#header-outer [data-cart-style="slide_in"] .cart-menu-wrap', openRightCart);

        function openRightCart() {
            if ($('.nectar-slide-in-cart ul.cart_list li:not(.empty)').length > 0) {
                $('.nectar-slide-in-cart').addClass('open');
                $window.on('mousemove.rightCartOffsetCheck', closeCartCheck);
            }
        }

        function closeCartCheck(e) {
            var $windowWidth = $window.width();
            if (e.clientX < $windowWidth - 370 - $bodyBorderWidth) {
                $window.off('mousemove.rightCartOffsetCheck', closeCartCheck);
                $('.nectar-slide-in-cart').removeClass('open');
            }
        }
        wooQauntityBtns();
    }

    function navigationSearchInit() {
        var $placeholder = ($('#search-outer #search input[type=text][data-placeholder]').length > 0) ? $('#search-outer #search input[type=text]').attr('data-placeholder') : '';
        if ($body.hasClass('material') && $('#header-outer .bg-color-stripe').length == 0) {
            $headerOuterEl.append('<div class="bg-color-stripe" />');
        }
        $body.on('click', '#search-btn a', function() {
            return false;
        });
        $body.on('click', '#search-btn a:not(.inactive), #header-outer .mobile-search', function() {
            if ($(this).hasClass('open-search')) {
                return false;
            }
            if ($body.hasClass('original') && $('.slide-out-widget-area-toggle.mobile-icon a.open').length > 0) {
                $('.slide-out-widget-area-toggle.mobile-icon a').addClass('non-human-allowed').trigger('click');
                setTimeout(function() {
                    $('.slide-out-widget-area-toggle.mobile-icon a').removeClass('non-human-allowed');
                }, 100);
            }
            if ($body.hasClass('ascend') || $('body[data-header-format="left-header"]').length > 0 && $('body.material').length == 0) {
                $('#search-outer > #search form, #search-outer #search .span_12 span, #search-outer #search #close').css('opacity', 0);
                $('#search-outer > #search form').css('transform', 'translateY(-30px)');
                $('#search-outer #search .span_12 span').css('transform', 'translateY(20px)');
                $('#search-outer').show();
                $('#search-outer').stop().transition({
                    scale: '1,0',
                    'opacity': 1
                }, 0).transition({
                    scale: '1,1'
                }, 700, 'cubic-bezier(0.2, 1, 0.3, 1)');
                $('#search-outer > #search form').delay(350).transition({
                    'opacity': 1,
                    'transform': 'translateY(0)'
                }, 700, 'cubic-bezier(0.2, 1, 0.3, 1)');
                $('#search-outer #search #close').delay(500).transition({
                    'opacity': 1
                }, 700, 'cubic-bezier(0.2, 1, 0.3, 1)');
                $('#search-outer #search .span_12 span').delay(450).transition({
                    'opacity': 1,
                    'transform': 'translateY(0)'
                }, 700, 'cubic-bezier(0.2, 1, 0.3, 1)');
            } else if (!$body.hasClass('material')) {
                $('#search-outer').stop(true).fadeIn(600, 'easeOutExpo');
            } else {
                $('#header-outer[data-transparent-header="true"] .bg-color-stripe').css('transition', '');
                $('#search-outer, #ajax-content-wrap').addClass('material-open');
                $headerOuterEl.addClass('material-search-open');
                $('#fp-nav').addClass('material-ocm-open');
            }
            setTimeout(function() {
                $('#search input[type=text]').trigger('focus');
                if ($('#search input[type=text]').attr('value') == $placeholder) {
                    $('#search input[type=text]').setCursorPosition(0);
                }
            }, 300);
            $(this).toggleClass('open-search');
            $('.slide-out-widget-area-toggle a:not(#toggle-nav).open:not(.animating)').trigger('click');
            return false;
        });
        $('body:not(.material)').on('keydown', '#search input[type=text]', function() {
            if ($(this).attr('value') == $placeholder) {
                $(this).attr('value', '');
            }
        });
        $('body:not(.material)').on('keyup', '#search input[type=text]', function() {
            if ($(this).attr('value') == '') {
                $(this).attr('value', $placeholder);
                $(this).setCursorPosition(0);
            }
        });
        $body.on('click', '#close', function() {
            closeSearch();
            $searchButtonEl.removeClass('open-search');
            $('#header-outer .mobile-search').removeClass('open-search');
            return false;
        });
        $('body:not(.material)').on('blur', '#search-box input[type=text]', function() {
            closeSearch();
            $searchButtonEl.removeClass('open-search');
            $('#header-outer .mobile-search').removeClass('open-search');
        });
        $('body.material').on('click', '#ajax-content-wrap', function(e) {
            if (e.originalEvent !== undefined) {
                closeSearch();
                $searchButtonEl.removeClass('open-search');
                $('#header-outer .mobile-search').removeClass('open-search');
            }
        });
        if ($('body.material').length > 0) {
            $(document).on('keyup', function(e) {
                if (e.keyCode == 27) {
                    closeSearch();
                    $searchButtonEl.removeClass('open-search');
                    if ($('.ocm-effect-wrap.material-ocm-open').length > 0) {
                        $('.slide-out-widget-area-toggle.material-open a').trigger('click');
                    }
                }
            });
        }

        function closeSearch() {
            if ($body.hasClass('ascend') || $('body[data-header-format="left-header"]').length > 0 && $('body.material').length == 0) {
                $('#search-outer').stop().transition({
                    'opacity': 0
                }, 300, 'cubic-bezier(0.2, 1, 0.3, 1)');
                $searchButtonEl.addClass('inactive');
                setTimeout(function() {
                    $('#search-outer').hide();
                    $searchButtonEl.removeClass('inactive');
                }, 300);
            } else if ($('body.material').length == 0) {
                $('#search-outer').stop(true).fadeOut(450, 'easeOutExpo');
            }
            if ($body.hasClass('material')) {
                $('#ajax-content-wrap').removeClass('material-open');
                $headerOuterEl.removeClass('material-search-open');
                $('#search-outer').removeClass('material-open');
                $('#fp-nav').removeClass('material-ocm-open');
            }
        }
    }

    function centeredNavBottomBarReposition() {
        var $headerOuter = $headerOuterEl,
            $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),
            $headerSpan3 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3'),
            $secondaryHeader = $headerSecondaryEl,
            $headerBtns = $headerSpan3.find('nav >ul.buttons'),
            $navLogoMargin = parseInt($('body.material #header-outer').attr('data-padding')),
            $navLogoHeight = parseInt($('body.material #header-outer').attr('data-logo-height')),
            $triggerCondition = ($navLogoMargin * 2) + $navLogoHeight - parseInt(nectarDOMInfo.adminBarHeight) + parseInt(nectarDOMInfo.secondaryHeaderHeight);
        if ($secondaryHeader.length > 0) {
            if ($('#header-outer[data-remove-fixed="1"]').length == 0 && $('#header-outer[data-condense="true"]').length > 0) {
                setTimeout(function() {
                    nectarDOMInfo.secondaryHeaderHeight = $headerSecondaryEl.outerHeight();
                }, 50);
            }
        }

        function condenseCustomBreakPointHelper() {
            var $withinCustomBreakpoint = mobileBreakPointCheck();
            if ($withinCustomBreakpoint) {
                $headerOuterEl.addClass('within-custom-breakpoint');
            } else {
                $headerOuterEl.removeClass('within-custom-breakpoint');
            }
        }
        if ($('#header-outer[data-condense="true"]').length > 0) {
            $window.on('scroll.centeredNavCondense', centeredNavBottomFixed_Scroll);
            $window.trigger('scroll');
            $window.on('resize', function() {
                if (nectarDOMInfo.winW < 1000) {
                    $headerOuter.addClass('force-condense-remove');
                    $window.off('scroll.centeredNavCondense');
                }
            });
            $window.smartresize(function() {
                condenseCustomBreakPointHelper();
                if (nectarDOMInfo.winW >= 1000) {
                    if ($headerOuter.hasClass('force-condense-remove')) {
                        centeredNavBottomFixed_Scroll();
                        $headerOuter.removeClass('force-condense-remove');
                        setTimeout(function() {
                            if (nectarDOMInfo.scrollTop >= $triggerCondition) {
                                $headerOuter.addClass('force-condense');
                                centeredNavBottomFixed_Scroll();
                                $headerOuter.removeClass('force-condense');
                            }
                            $window.on('scroll.centeredNavCondense', centeredNavBottomFixed_Scroll);
                        }, 200);
                    }
                }
            });
            condenseCustomBreakPointHelper();
        }

        function centeredNavBottomFixed_Scroll() {
            if (nectarDOMInfo.winW < 1000 || $('body.material-ocm-open').length > 0 || $('#header-outer[data-has-menu="true"][data-format="centered-menu-bottom-bar"] .span_9').css('display') == 'none') {
                return;
            }
            $bodyBorderTop = ($bodyBorderTop.length > 0 && nectarDOMInfo.secondaryHeaderHeight > 0) ? $bodyBorderTop.height() : 0;
            if ($headerOuter.hasClass('force-condense') || !$headerOuter.hasClass('fixed-menu') && nectarDOMInfo.scrollTop >= $triggerCondition) {
                var amountToMove = (parseInt($headerSpan9.position().top) - $navLogoMargin - parseInt(nectarDOMInfo.adminBarHeight)) + parseInt(nectarDOMInfo.secondaryHeaderHeight) - $bodyBorderTop;
                if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer .megamenu').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0) {
                    $headerOuterEl.removeClass('no-transition');
                }
                $headerOuter.addClass('fixed-menu').removeClass('transparent').css({
                    'top': '-' + amountToMove + 'px',
                    'position': 'fixed'
                });
                var $headerNavBarOffset = $('header#top .span_9 nav >ul').offset().top;
                var $headerButtonsOffset = $headerBtns.offset().top;
                var $headerButtonsHeight = ($headerSpan9.find('.sf-menu > li > a').length > 0) ? (20 - parseInt($headerSpan9.find('.sf-menu > li > a').height())) / 2 : 2;
                $headerBtns.css('transform', 'translateY(' + (parseInt($headerNavBarOffset) - parseInt($headerButtonsOffset) - $headerButtonsHeight - 1) + 'px)');
                $headerBtns.find('.nectar-woo-cart').css('height', $headerOuter.height() + parseInt($headerOuter.css('top')) - parseInt(nectarDOMInfo.adminBarHeight));
            } else if ($headerOuter.hasClass('force-condense-remove') || $headerOuter.hasClass('fixed-menu') && nectarDOMInfo.scrollTop < $triggerCondition) {
                $headerOuter.removeClass('fixed-menu').css({
                    'top': '0',
                    'position': 'absolute'
                });
                $headerBtns.css('transform', 'translateY(0px)');
                $headerBtns.find('.nectar-woo-cart').css('height', '');
                if ($('#header-outer.transparent').length == 0) {
                    if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer .megamenu').length > 0) {
                        $headerOuterEl.removeClass('no-transition');
                    }
                    if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0 && $('#header-outer .megamenu').length > 0) {
                        if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('.nectar-box-roll').length == 0 && $('.megamenu.sfHover').length == 0) {
                            $headerOuterEl.addClass('transparent');
                            $headerOuterEl.removeClass('no-transition');
                        } else if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('.nectar-box-roll').length == 0 && $('.megamenu.sfHover').length > 0) {
                            $headerOuterEl.addClass('no-transition');
                        }
                    } else {
                        if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('.nectar-box-roll').length == 0) {
                            $headerOuterEl.addClass('transparent');
                        }
                    }
                }
            }
        }
    }

    function centeredNavBottomBarInit() {
        if ($('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0) {
            centeredNavBottomBarReposition();
        }
    }

    function centeredLogoMargins() {
        if (nectarDOMInfo.winW > 1000) {
            var $navItemLength = $('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li').length;
            if ($('#header-outer #social-in-menu').length > 0) {
                $navItemLength--;
            }
            var $centerLogoWidth, $extraMenuSpace;
            if ($('#header-outer #top .row .col.span_3 #logo img:visible').length == 0) {
                $centerLogoWidth = parseInt($('#header-outer #top .row .col.span_3').width());
            } else {
                $centerLogoWidth = parseInt($('#header-outer #top .row .col.span_3 img:visible').width());
            }
            if ($('#header-outer[data-lhe="animated_underline"]').length > 0) {
                $extraMenuSpace = parseInt($('header#top nav > ul > li:first-child > a').css('margin-right'));
            } else {
                $extraMenuSpace = parseInt($('header#top nav > ul > li:first-child > a').css('padding-right'));
            }
            if ($extraMenuSpace > 30) {
                $extraMenuSpace += 45;
            } else if ($extraMenuSpace > 20) {
                $extraMenuSpace += 40;
            } else {
                $extraMenuSpace += 30;
            }
            if (!$body.hasClass('rtl')) {
                $('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child(' + Math.floor($navItemLength / 2) + ')').css({
                    'margin-right': ($centerLogoWidth + $extraMenuSpace) + 'px'
                }).addClass('menu-item-with-margin');
            } else {
                $('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child(' + Math.floor($navItemLength / 2) + ')').css({
                    'margin-left': ($centerLogoWidth + $extraMenuSpace) + 'px'
                }).addClass('menu-item-with-margin');
            }
            var $leftMenuWidth = 0;
            var $rightMenuWidth = 0;
            $('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:not(#social-in-menu)').each(function(i) {
                if (i + 1 <= Math.floor($navItemLength / 2)) {
                    $leftMenuWidth += $(this).width();
                } else {
                    $rightMenuWidth += $(this).width();
                }
            });
            var $menuDiff = Math.abs($rightMenuWidth - $leftMenuWidth);
            if ($leftMenuWidth > $rightMenuWidth || ($body.hasClass('rtl') && $leftMenuWidth < $rightMenuWidth)) {
                $('#header-outer #top .row > .col.span_9').css('padding-right', $menuDiff);
            } else {
                $('#header-outer #top .row > .col.span_9').css('padding-left', $menuDiff);
            }
            $('#header-outer[data-format="centered-logo-between-menu"] nav').css('visibility', 'visible');
        } else if ($('#header-outer[data-format="centered-logo-between-menu"]').length > 0 && nectarDOMInfo.winW < 1000) {
            $('#header-outer .row > .col.span_9').css({
                'padding-right': '0',
                'padding-left': '0'
            });
        }
    }

    function centeredLogoHeaderInit() {
        if ($('#header-outer[data-format="centered-logo-between-menu"]').length > 0) {
            if (!usingLogoImage) {
                centeredLogoMargins();
            } else if (usingLogoImage && $('#header-outer[data-format="centered-logo-between-menu"]').length > 0 && $('header#top #logo img:first[src]').length > 0) {
                var tempLogoImg = new Image();
                tempLogoImg.src = $('header#top #logo img:first').attr('src');
                tempLogoImg.onload = function() {
                    centeredLogoMargins();
                };
            }
            $window.on('smartresize', centeredLogoMargins);
        }
    }

    function headerNavPreInit() {
        if (nectarDOMInfo.usingMobileBrowser && $('#header-outer[data-remove-fixed="1"]').length == 0) {
            $body.attr('data-hhun', '0');
        }
        if ($('#nectar_fullscreen_rows').length > 0) {
            ($headerOuterEl.attr('data-permanent-transparent', 'false'));
        }
        if (nectarDOMInfo.usingMobileBrowser && $('#header-outer[data-mobile-fixed="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length == 0) {
            $('#header-space').css('height', $headerOuterEl.outerHeight());
        }
    }

    function hhunHeaderEffect() {
        var previousScroll = 0,
            menuOffset = 250,
            hideShowOffset = 6;

        function hhunCalcs() {
            $headerOuterEl.addClass('detached');
            var currentScroll = nectarDOMInfo.scrollTop,
                scrollDifference = Math.abs(currentScroll - previousScroll);
            if ($('body.animated-scrolling').length > 0 && $('#header-outer.detached').length > 0 || $('body.no-scroll').length > 0) {
                if (nectarDOMInfo.winW > 999) {
                    if (currentScroll > menuOffset) {
                        previousScroll = nectarDOMInfo.scrollTop;
                        currentScroll = nectarDOMInfo.scrollTop;
                    }
                    requestAnimationFrame(hhunCalcs);
                    return;
                }
            }
            if ($('body.material-ocm-open').length > 0 || $('#search-outer.material-open').length > 0) {
                if (nectarDOMInfo.winW > 999) {
                    requestAnimationFrame(hhunCalcs);
                    return;
                }
            }
            if ($('#header-outer[data-mobile-fixed="false"]').length > 0 && $('body.mobile').length > 0) {
                $headerOuterEl.removeClass('detached');
                return;
            }
            if (!$headerOuterEl.hasClass('side-widget-open') && !$('#header-outer .slide-out-widget-area-toggle a').hasClass('animating')) {
                var heightToAdjust;
                if (currentScroll > 1) {
                    if ($('#header-outer[data-permanent-transparent="1"]').length == 0) {
                        $headerOuterEl.removeClass('transparent');
                        $headerOuterEl.addClass('scrolling');
                    }
                    if ($headerSecondaryEl.length > 0) {
                        if (currentScroll > menuOffset) {
                            $headerSecondaryEl.addClass('hide-up');
                            $headerOuterEl.css('transform', 'translateY(-' + nectarDOMInfo.secondaryHeaderHeight + 'px)');
                        } else {
                            $headerSecondaryEl.removeClass('hide-up');
                            $headerOuterEl.css('transform', '0px)');
                        }
                    }
                }
                if (currentScroll > menuOffset) {
                    if (!$headerOuterEl.hasClass('detached')) {
                        $headerOuterEl.addClass('detached').removeClass('parallax-contained');
                    }
                    $headerOuterEl.removeClass('no-transition');
                    if (scrollDifference >= hideShowOffset) {
                        if (currentScroll > previousScroll) {
                            if (!$headerOuterEl.hasClass('invisible')) {
                                $headerOuterEl.addClass('invisible').removeClass('at-top');
                                if ($(".sf-menu").length > 0 && $().superfish) {
                                    $(".sf-menu").superfish('hide');
                                    $('header#top nav > ul.sf-menu > li.menu-item-over').removeClass('menu-item-over');
                                }
                            }
                            $('.page-submenu.stuck').css('transform', 'translateY(0px)').addClass('header-not-visible');
                        } else {
                            if ($headerOuterEl.hasClass('invisible')) {
                                $headerOuterEl.removeClass('invisible');
                            }
                            heightToAdjust = $headerOuterEl.outerHeight();
                            if ($headerSecondaryEl.length > 0) {
                                heightToAdjust -= nectarDOMInfo.secondaryHeaderHeight;
                            }
                            if ($bodyBorderTop.length > 0 && $('body.mobile').length == 0) {
                                $bodyBorderSizeToRemove = ($bodyBorderHeaderColorMatch) ? $bodyBorderTop.height() : 0;
                                $('.page-submenu.stuck').css('transform', 'translateY(' + (heightToAdjust - $bodyBorderSizeToRemove) + 'px)').removeClass('header-not-visible');
                            } else {
                                $('.page-submenu.stuck').css('transform', 'translateY(' + heightToAdjust + 'px)').removeClass('header-not-visible');
                            }
                        }
                    }
                } else {
                    var $topDetachNum = ($('#header-outer[data-using-secondary="1"]').length > 0) ? 32 : 0;
                    if ($bodyBorderTop.length > 0) {
                        $topDetachNum = ($('#header-outer[data-using-secondary="1"]').length > 0) ? 32 + $bodyBorderTop.height() : $bodyBorderTop.height();
                    }
                    if (currentScroll <= $topDetachNum) {
                        $headerOuterEl.addClass('at-top').removeClass('invisible').removeClass('scrolling');
                        if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0 && $('#header-outer .megamenu').length > 0) {
                            if ($('#header-outer[data-transparent-header="true"]').length > 0 && $('.nectar-box-roll').length == 0 && $('.megamenu.sfHover').length == 0) {
                                $headerOuterEl.addClass('transparent').css('transform', 'translateY(0)').removeClass('no-transition');
                            } else if ($('.nectar-box-roll').length > 0) {
                                $headerOuterEl.css('transform', 'translateY(0)').addClass('at-top-before-box');
                            }
                        } else {
                            if ($('#header-outer[data-transparent-header="true"]').length > 0 && $('.nectar-box-roll').length == 0) {
                                $headerOuterEl.addClass('transparent').css('transform', 'translateY(0)');
                            } else if ($('.nectar-box-roll').length > 0) {
                                $headerOuterEl.css('transform', 'translateY(0)').addClass('at-top-before-box');
                            }
                        }
                        if ($('#page-header-bg[data-parallax="1"]').length > 0) {
                            $headerOuterEl.addClass('parallax-contained').css('transform', 'translateY(0)');
                        }
                    }
                }
                if ((nectarDOMInfo.winH + window.scrollY) >= document.body.offsetHeight) {
                    $headerOuterEl.removeClass('invisible');
                    heightToAdjust = $headerOuterEl.outerHeight();
                    if ($headerSecondaryEl.length > 0) {
                        heightToAdjust -= nectarDOMInfo.secondaryHeaderHeight;
                    }
                    if ($bodyBorderTop.length > 0 && $('body.mobile').length == 0) {
                        $bodyBorderSizeToRemove = ($bodyBorderHeaderColorMatch) ? $bodyBorderTop.height() : 0;
                        $('.page-submenu.stuck').css('transform', 'translateY(' + (heightToAdjust - $bodyBorderSizeToRemove) + 'px)').removeClass('header-not-visible');
                    } else {
                        $('.page-submenu.stuck').css('transform', 'translateY(' + heightToAdjust + 'px)').removeClass('header-not-visible');
                    }
                }
            }
            previousScroll = currentScroll;
            if (nectarDOMInfo.winW > 999) {
                requestAnimationFrame(hhunCalcs);
            }
        }
        hhunCalcs();
    }

    function smallNav() {
        var $offset = nectarDOMInfo.scrollTop,
            $windowWidth = nectarDOMInfo.winW,
            $scrollTriggerOffset = ($body.is('.material')) ? 150 : 30;
        if ($offset > $scrollTriggerOffset && $windowWidth >= 1000 && $('body.material-ocm-open').length == 0) {
            if ($body.is('.material')) {
                if ($('#search-outer.material-open').length == 0) {
                    $('#header-outer[data-transparent-header="true"] .bg-color-stripe').css('transition', 'none');
                }
                if ($headerSecondaryEl.length > 0) {
                    $headerSecondaryEl.addClass('hide-up');
                    $headerOuterEl.css('transform', 'translateY(-' + nectarDOMInfo.secondaryHeaderHeight + 'px)');
                }
            }
            if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0 && $('#header-outer .megamenu').length > 0) {
                if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('#header-outer.side-widget-open').length == 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0 && $('.megamenu.sfHover').length == 0) {
                    $headerOuterEl.removeClass('transparent');
                    $headerOuterEl.removeClass('no-transition');
                }
            } else {
                if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('#header-outer.side-widget-open').length == 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) {
                    $headerOuterEl.removeClass('transparent');
                }
            }
            $('#header-outer, #search-outer').addClass('small-nav');
            if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && $bodyBorderTop.length > 0 && $bodyBorderHeaderColorMatch == true) {
                $('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({
                    'padding': '0'
                }, {
                    queue: false,
                    duration: 250,
                    easing: 'easeOutCubic'
                });
            }
            if ($('body.material').length > 0) {
                $('header#top nav > ul > li.menu-item-with-margin').stop(true, true).animate({
                    'margin-right': (parseInt($('header#top nav > ul > li.menu-item-with-margin').css('margin-right')) - parseInt(logoShrinkNum) * 3) + 'px'
                }, {
                    queue: false,
                    duration: 310,
                    easing: 'easeOutQuad'
                });
            }
            if ($('.nectar-box-roll').length > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) {
                $('#ajax-content-wrap').animate({
                    'margin-top': (Math.floor(($logoHeight - logoShrinkNum) + (headerPadding * 2) / 1.8 + nectarDOMInfo.adminBarHeight + nectarDOMInfo.secondaryHeaderHeight))
                }, {
                    queue: false,
                    duration: 250,
                    easing: 'easeOutCubic'
                });
            }
            $window.off('scroll.headerResizeEffect', smallNav);
            $window.on('scroll.headerResizeEffect', bigNav);
            $('#header-outer[data-transparent-header="true"]').css('transition', 'transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out');
            $('#header-outer[data-transparent-header="true"] .cart-menu').css('transition', 'none');
            setTimeout(function() {
                $('#header-outer[data-transparent-header="true"]').css('transition', 'transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out');
                $('#header-outer[data-transparent-header="true"] .cart-menu').css('transition', 'border-color 0.30s ease');
            }, 300);
        }
    }

    function bigNav() {
        var $offset = nectarDOMInfo.scrollTop,
            $windowWidth = nectarDOMInfo.winW,
            $scrollTriggerOffset = ($body.is('.material')) ? 150 : 30;
        if ($body.is('.material-ocm-open')) {
            return false;
        }
        if ($offset <= $scrollTriggerOffset && $windowWidth >= 1000 || $('.small-nav').length > 0 && $('#ajax-content-wrap.no-scroll').length > 0) {
            $('#header-outer, #search-outer').removeClass('small-nav');
            if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0 && $('#header-outer .megamenu').length > 0) {
                if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('.nectar-box-roll').length == 0 && $('.megamenu.sfHover').length == 0) {
                    $headerOuterEl.addClass('transparent');
                    $headerOuterEl.removeClass('no-transition');
                }
            } else {
                if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('.nectar-box-roll').length == 0) {
                    $headerOuterEl.addClass('transparent');
                }
            }
            if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && $bodyBorderTop.length > 0 && $bodyBorderHeaderColorMatch == true) {
                $('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({
                    'padding': '0 28px'
                }, {
                    queue: false,
                    duration: 250,
                    easing: 'easeOutCubic'
                });
            }
            if ($('body.material').length > 0) {
                $('header#top nav > ul > li.menu-item-with-margin').stop(true, true).animate({
                    'margin-right': (parseInt($('header#top nav > ul > li.menu-item-with-margin').css('margin-right')) + parseInt(logoShrinkNum) * 3) + 'px'
                }, {
                    queue: false,
                    duration: 140,
                    easing: 'easeOutQuad'
                });
            }
            if ($headerSecondaryEl.length > 0) {
                $headerSecondaryEl.removeClass('hide-up');
                $headerOuterEl.removeClass('hide-up').css('transform', 'translateY(0%)');
            }
            if ($('.nectar-box-roll').length > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) {
                $('#ajax-content-wrap').animate({
                    'margin-top': (Math.floor(($logoHeight) + (headerPadding * 2) + nectarDOMInfo.adminBarHeight + nectarDOMInfo.secondaryHeaderHeight))
                }, {
                    queue: false,
                    duration: 250,
                    easing: 'easeOutCubic'
                });
            }
            $window.off('scroll.headerResizeEffect', bigNav);
            $window.on('scroll.headerResizeEffect', smallNav);
            $('#header-outer[data-transparent-header="true"]').css('transition', 'transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out');
            $('#header-outer[data-transparent-header="true"] .cart-menu').css('transition', 'none');
            setTimeout(function() {
                $('#header-outer[data-transparent-header="true"]').css('transition', 'transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out');
                $('#header-outer[data-transparent-header="true"] .cart-menu').css('transition', 'border-color 0.30s ease');
            }, 300);
        }
    }

    function opaqueCheck() {
        if ($('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && !$headerOuterEl.hasClass('within-custom-breakpoint')) {
            return;
        }
        if (nectarDOMInfo.scrollTop > 0) {
            if ($('body.material').length > 0) {
                $headerOuterEl.addClass('scrolled-down');
                if ($headerSecondaryEl.length > 0 && nectarDOMInfo.winW > 1000) {
                    $headerSecondaryEl.addClass('hide-up');
                    $headerOuterEl.css('transform', 'translateY(-' + nectarDOMInfo.secondaryHeaderHeight + 'px)');
                }
            }
            if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('#header-outer[data-permanent-transparent="1"]').length == 0) {
                $headerOuterEl.removeClass('transparent').addClass('scrolled-down');
            }
            $window.off('scroll.headerResizeEffectOpaque', opaqueCheck);
            $window.on('scroll.headerResizeEffectOpaque', transparentCheck);
        }
    }

    function transparentCheck() {
        if ($('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && !$headerOuterEl.hasClass('within-custom-breakpoint')) {
            return;
        }
        if (nectarDOMInfo.scrollTop == 0 && $('body.material-ocm-open').length == 0) {
            if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0 && $('#header-outer .megamenu').length > 0) {
                if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('.megamenu.sfHover').length == 0) {
                    $headerOuterEl.addClass('transparent').removeClass('scrolled-down');
                    $headerOuterEl.removeClass('no-transition');
                } else if ($headerOuterEl.attr('data-transparent-header') == 'true') {
                    $headerOuterEl.removeClass('scrolled-down');
                }
            } else {
                if ($headerOuterEl.attr('data-transparent-header') == 'true') {
                    $headerOuterEl.addClass('transparent').removeClass('scrolled-down');
                }
            }
            if ($('body.material').length > 0) {
                $headerOuterEl.removeClass('scrolled-down');
                if ($headerSecondaryEl.length > 0 && nectarDOMInfo.winW > 1000) {
                    $headerSecondaryEl.removeClass('hide-up');
                    $headerOuterEl.removeClass('hide-up').css('transform', 'translateY(0%)');
                }
            }
            $window.off('scroll.headerResizeEffectOpaque', transparentCheck);
            $window.on('scroll.headerResizeEffectOpaque', opaqueCheck);
        }
    }

    function mobileHeaderRAF() {
        if ($('body.material-ocm-open').length > 0) {
            requestAnimationFrame(mobileHeaderRAF);
            return;
        }
        if (nectarDOMInfo.scrollTop > 80) {
            if (!$headerOuterEl.is('[data-permanent-transparent="1"]')) {
                $headerOuterEl.removeClass('transparent');
            }
            if (nectarDOMInfo.secondaryHeaderHeight > 0) {
                $headerSecondaryEl.addClass('hide-up');
                $headerOuterEl.css('transform', 'translateY(-' + nectarDOMInfo.secondaryHeaderHeight + 'px)').addClass('hidden-secondary');
            } else {
                $headerOuterEl.removeClass('hidden-secondary');
            }
        } else {
            if ($headerOuterEl.is('[data-transparent-header="true"]')) {
                $headerOuterEl.addClass('transparent');
            }
            if (nectarDOMInfo.secondaryHeaderHeight > 0) {
                $headerSecondaryEl.removeClass('hide-up');
                $headerOuterEl.css('transform', 'translateY(0px)');
            }
            $headerOuterEl.removeClass('hidden-secondary');
        }
        if (nectarDOMInfo.winW < 1000) {
            requestAnimationFrame(mobileHeaderRAF);
        }
    }

    function bindScrollEffectsMobile() {
        if (nectarDOMInfo.winW > 999) {
            return;
        }
        $window.off('scroll.headerResizeEffect');
        $window.off('scroll.headerResizeEffectOpaque');
        $headerOuterEl.removeClass('scrolled-down').removeClass('detached').removeClass('invisible').removeClass('at-top').css('transform', 'none');
        if ($('#header-outer[data-mobile-fixed="1"]').length > 0) {
            requestAnimationFrame(mobileHeaderRAF);
        } else if ($headerOuterEl.attr('data-transparent-header') == 'true') {
            $headerOuterEl.addClass('transparent');
        }
        $window.off('smartresize.nectarNavScrollEffects');
        $window.on('smartresize.nectarNavScrollEffects', bindScrollEffectsDesktop);
    }

    function bindScrollEffectsDesktop() {
        if (nectarDOMInfo.winW < 1000) {
            return;
        }
        if (headerResize == true && headerHideUntilNeeded != '1') {
            $window.off('scroll.headerResizeEffect');
            if ($('#nectar_fullscreen_rows').length == 0) {
                $window.on('scroll.headerResizeEffect', smallNav);
            } else if ($('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && nectarDOMInfo.usingMobileBrowser) {
                $window.on('scroll.headerResizeEffect', smallNav);
            }
        } else if (headerHideUntilNeeded != '1') {
            $window.off('scroll.headerResizeEffectOpaque');
            $window.on('scroll.headerResizeEffectOpaque', opaqueCheck);
        } else if (headerHideUntilNeeded == '1') {
            if ($('.nectar-box-roll').length > 0) {
                $headerOuterEl.addClass('at-top-before-box');
            }
            if ($('#header-outer[data-remove-fixed="1"]').length == 0) {
                hhunHeaderEffect();
            }
        }
        if ($('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0) {
            if ($headerSecondaryEl.length > 0) {
                $headerOuterEl.css('transform', '');
            }
            if (nectarDOMInfo.scrollTop > 200 && !$headerOuterEl.hasClass('fixed-menu')) {
                $headerOuterEl.addClass('fixed-menu');
            }
        }
        $window.off('smartresize.nectarNavScrollEffects');
        $window.on('smartresize.nectarNavScrollEffects', bindScrollEffectsMobile);
    }

    function headerNavScrollInit() {
        if ($('#header-outer[data-remove-fixed="1"]').length == 0 && nectarDOMInfo.winW > 1000) {
            if ($(window).scrollTop() != 0 && $('#header-outer.transparent[data-permanent-transparent="false"]').length == 1) {
                $headerOuterEl.removeClass('transparent');
            }
        }
        if ($('#nectar_fullscreen_rows').length == 0 && $('.nectar-box-roll').length == 0) {
            midnightInit();
        }
        if (nectarDOMInfo.winW < 1000 && $('.nectar-box-roll').length == 0) {
            bindScrollEffectsMobile();
            $window.on('smartresize.nectarNavScrollEffects', bindScrollEffectsMobile);
        } else {
            bindScrollEffectsDesktop();
            $window.on('smartresize.nectarNavScrollEffects', bindScrollEffectsDesktop);
        }
    }

    function headerSpace() {
        if ($('.mobile').length > 0) {
            if (nectarDOMInfo.winH < nectarDOMInfo.winW && nectarDOMInfo.winW > 1000) {
                if ($('#header-outer.small-nav').length == 0) {
                    $('#header-space').css('height', $headerOuterEl.outerHeight());
                }
            } else {
                $('#header-space').css('height', $headerOuterEl.outerHeight());
            }
        } else {
            if ($('.nectar-parallax-scene.first-section').length == 0) {
                var headerPadding2 = headerPadding - headerPadding / 1.8;
                var $headerHeight = ($('#header-outer[data-header-resize="1"]').length > 0 && $('.small-nav').length > 0) ? $headerOuterEl.outerHeight() + (parseInt(logoShrinkNum) + headerPadding2 * 2) : $headerOuterEl.outerHeight();
                $('#header-space').css('height', $headerHeight);
            }
        }
    }

    function headerNavOffsetInit() {
        var lastPosition = -1;
        var $headerScrollTop = nectarDOMInfo.scrollTop;

        function headerOffsetAdjust() {
            if ($('body.compose-mode').length > 0) {
                return;
            }
            $headerScrollTop = nectarDOMInfo.scrollTop;
            if (lastPosition == $headerScrollTop) {
                requestAnimationFrame(headerOffsetAdjust);
                return false;
            } else {
                lastPosition = $headerScrollTop;
            }
            headerOffsetAdjustCalc();
            requestAnimationFrame(headerOffsetAdjust);
        }

        function headerOffsetAdjustCalc() {
            var $eleHeight = 0;
            if ($('body.mobile').length > 0 || (condenseHeaderLayout == true && $('#header-outer .span_9').css('display') == 'none')) {
                $eleHeight = 0;
                var $endOffset = ($wpAdminBar.css('position') == 'fixed') ? $wpAdminBar.height() : 0;
                $eleHeight += nectarDOMInfo.adminBarHeight;
                if ($eleHeight - $headerScrollTop > $endOffset) {
                    $headerOuterEl.css('top', $eleHeight - $headerScrollTop + 'px');
                } else {
                    $headerOuterEl.css('top', $endOffset);
                }
            } else {
                if (condenseHeaderLayout == false) {
                    $eleHeight = 0;
                    if (!$headerOuterEl.is('[data-remove-fixed="1"]')) {
                        $eleHeight += nectarDOMInfo.adminBarHeight;
                    }
                    $headerOuterEl.css('top', $eleHeight + 'px');
                }
            }
        }
        if ($('#header-outer[data-mobile-fixed="1"]').length > 0 && $wpAdminBar.length > 0) {
            if ($('#nectar_fullscreen_rows').length == 0) {
                requestAnimationFrame(headerOffsetAdjust);
            } else if ($('#nectar_fullscreen_rows').length > 0 && nectarDOMInfo.usingMobileBrowser) {
                requestAnimationFrame(headerOffsetAdjust);
            }
            $window.smartresize(headerOffsetAdjustCalc);
        }
    }

    function footerRevealCalcs() {
        var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 0 : $headerOuterEl.outerHeight();
        if ($window.height() - $wpAdminBar.height() - $headerNavSpace - $('#footer-outer').height() - 1 - $pageHeaderBG.height() - $('.page-header-no-bg').height() > 0) {
            var $resizeExtra = ($('body:not(.material) #header-outer[data-header-resize="1"]').length > 0) ? 55 : 0;
            $('body[data-footer-reveal="1"] .container-wrap').css({
                'margin-bottom': $('#footer-outer').height() - 1
            });
            $('.container-wrap').css({
                'min-height': $window.height() - $wpAdminBar.height() - $headerNavSpace - $('#footer-outer').height() - 1 - $('.page-header-no-bg').height() - $pageHeaderBG.height() + $resizeExtra
            });
        } else {
            $('body[data-footer-reveal="1"] .container-wrap').css({
                'margin-bottom': $('#footer-outer').height() - 1
            });
        }
        if ($window.width() < 1000) {
            $('#footer-outer').attr('data-midnight', 'light');
        } else {
            $('#footer-outer').removeAttr('data-midnight');
        }
    }

    function footerRevealInit() {
        if ($('body[data-footer-reveal="1"]').length > 0 || $('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0) {
            $body.addClass('nectar-no-flex-height');
            setTimeout(function() {
                footerRevealCalcs();
            }, 60);
            footerRevealCalcs();
            $window.on('resize', footerRevealCalcs);
            if ($('bodybody[data-footer-reveal="1"][data-footer-reveal-shadow="large_2"]').length > 0) $('.container-wrap').css({
                boxShadow: '0 70px 110px -30px ' + $('#footer-outer').css('backgroundColor')
            });
        }
    }

    function headerRowColorInheritInit() {
        if ($('body[data-header-inherit-rc="true"]').length > 0 && $('.mobile').length == 0 && $('#header-outer[data-transparent-header="true"]').length > 0) {
            var headerOffset = $logoHeight / 2 + headerPadding + nectarDOMInfo.adminBarHeight;
            if ($('#header-outer[data-permanent-transparent="1"]').length == 0) {
                headerOffset = ($logoHeight - logoShrinkNum) + Math.ceil((headerPadding * 2) / 1.8) + nectarDOMInfo.adminBarHeight;
            }
            $('.main-content > .row > .wpb_row').each(function() {
                var $that = $(this);
                var $textColor;
                var waypoint = new Waypoint({
                    element: $that,
                    handler: function(direction) {
                        if (direction == 'down') {
                            if ($that.find('.row-bg.using-bg-color').length > 0) {
                                $textColor = ($that.find('> .col.span_12.light').length > 0) ? 'light-text' : 'dark-text';
                                $headerOuterEl.css('background-color', $that.find('.row-bg').css('background-color')).removeClass('light-text').removeClass('dark-text').addClass($textColor);
                                $headerOuterEl.attr('data-current-row-bg-color', $that.find('.row-bg').css('background-color'));
                                $('body.material #header-outer .bg-color-stripe').css('background-color', $that.find('.row-bg').css('background-color'));
                            } else {
                                $headerOuterEl.css('background-color', $headerOuterEl.attr('data-user-set-bg')).removeClass('light-text').removeClass('dark-text');
                                $headerOuterEl.attr('data-current-row-bg-color', $headerOuterEl.attr('data-user-set-bg'));
                                $('body.material #header-outer .bg-color-stripe').css('background-color', '');
                            }
                        } else {
                            if ($that.prev('div.wpb_row').find('.row-bg.using-bg-color').length > 0) {
                                $textColor = ($that.prev('div.wpb_row').find('> .col.span_12.light').length > 0) ? 'light-text' : 'dark-text';
                                $headerOuterEl.css('background-color', $that.prev('div.wpb_row').find('.row-bg').css('background-color')).removeClass('light-text').removeClass('dark-text').addClass($textColor);
                                $headerOuterEl.attr('data-current-row-bg-color', $that.prev('div.wpb_row').find('.row-bg').css('background-color'));
                                $('body.material #header-outer .bg-color-stripe').css('background-color', $that.prev('div.wpb_row').find('.row-bg').css('background-color'));
                            } else {
                                $headerOuterEl.css('background-color', $headerOuterEl.attr('data-user-set-bg')).removeClass('light-text').removeClass('dark-text');
                                $headerOuterEl.attr('data-current-row-bg-color', $headerOuterEl.attr('data-user-set-bg'));
                                $('body.material #header-outer .bg-color-stripe').css('background-color', '');
                            }
                        }
                    },
                    offset: headerOffset
                });
            });
        }
    }

    function stickyPageSubmenuInit() {
        var $ = window.jQuery,
            Waypoint = window.Waypoint,
            $offsetHeight = calcHeaderNavHeight(),
            $headerHeight = calcHeaderNavHeight();
        $window.on('smartresize', function() {
            $offsetHeight = calcHeaderNavHeight();
            if ($wpAdminBar.length > 0 && $wpAdminBar.css('position') == 'fixed') {
                $offsetHeight += $wpAdminBar.height();
            }
            if ($bodyBorderTop.length > 0 && $window.width() > 1000 && $('body[data-hhun="1"]').length > 0) {
                $offsetHeight += $bodyBorderTop.height();
            }
            if ($('.page-submenu.stuck').length > 0) {
                $('.page-submenu.stuck').addClass('no-trans').css('top', $offsetHeight).css('transform', 'translateY(0)').addClass('stuck');
                setTimeout(function() {
                    $('.page-submenu.stuck').removeClass('no-trans');
                }, 50);
                $('.page-submenu.stuck').parents('.wpb_row').css('z-index', 10000);
                if ($('#boxed').length > 0) {
                    var $negMargin = ($window.width() > 1000) ? $('.container-wrap').width() * 0.04 : 39;
                    $('.page-submenu.stuck').css({
                        'margin-left': '-' + $negMargin + 'px',
                        'width': $('.container-wrap').width()
                    });
                }
            } else {
                $('.page-submenu.stuck').css('top', '0').removeClass('stuck');
                $('.page-submenu.stuck').parents('.wpb_row').css('z-index', 'auto');
                if ($('#boxed').length > 0) {
                    $('.page-submenu.stuck').css({
                        'margin-left': '0px',
                        'width': '100%'
                    });
                }
            }
        });

        function Sticky(options) {
            this.options = $.extend({}, Waypoint.defaults, Sticky.defaults, options);
            this.element = this.options.element;
            this.$element = $(this.element);
            this.createWrapper();
            this.createWaypoint();
        }
        Sticky.prototype.createWaypoint = function() {
            var originalHandler = this.options.handler;
            $offsetHeight = calcHeaderNavHeight();
            if ($wpAdminBar.length > 0 && $wpAdminBar.css('position') == 'fixed') {
                $offsetHeight += $wpAdminBar.height();
            }
            if ($bodyBorderTop.length > 0 && $window.width() > 1000 && $('body[data-hhun="1"]').length > 0) {
                $offsetHeight += $bodyBorderTop.height();
            }
            this.waypoint = new Waypoint($.extend({}, this.options, {
                element: this.wrapper,
                handler: $.proxy(function(direction) {
                    var shouldBeStuck = this.options.direction.indexOf(direction) > -1;
                    var wrapperHeight = shouldBeStuck ? this.$element.outerHeight(true) : '';
                    this.$wrapper.height(wrapperHeight);
                    if (shouldBeStuck) {
                        this.$element.addClass('no-trans').css('top', $offsetHeight).css('transform', 'translateY(0)').addClass('stuck');
                        var $that = this;
                        setTimeout(function() {
                            $that.$element.removeClass('no-trans');
                        }, 50);
                        this.$element.parents('.wpb_row').css('z-index', 10000);
                        if ($('#boxed').length > 0) {
                            var $negMargin = ($window.width() > 1000) ? $('.container-wrap').width() * 0.04 : 39;
                            this.$element.css({
                                'margin-left': '-' + $negMargin + 'px',
                                'width': $('.container-wrap').width()
                            });
                        }
                    } else {
                        this.$element.css('top', '0').removeClass('stuck');
                        if ($('#boxed').length > 0) this.$element.css({
                            'margin-left': '0px',
                            'width': '100%'
                        });
                    }
                    if (originalHandler) {
                        originalHandler.call(this, direction);
                    }
                }, this),
                offset: $offsetHeight
            }));
            var $that = this;
            setInterval(function() {
                if ($('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length > 0) {
                    var heightToAdjust = $headerOuterEl.outerHeight();
                    if ($headerSecondaryEl.length > 0) {
                        heightToAdjust -= nectarDOMInfo.secondaryHeaderHeight;
                    }
                    $that.waypoint.options.offset = $offsetHeight + heightToAdjust;
                } else {
                    $that.waypoint.options.offset = $offsetHeight;
                }
                Waypoint.refreshAll();
            }, 100);
        };
        Sticky.prototype.createWrapper = function() {
            if (this.options.wrapper) {
                this.$element.wrap(this.options.wrapper);
            }
            this.$wrapper = this.$element.parent();
            this.wrapper = this.$wrapper[0];
        };
        Sticky.prototype.destroy = function() {
            if (this.$element.parent()[0] === this.wrapper) {
                this.waypoint.destroy();
                this.$element.removeClass(this.options.stuckClass);
                if (this.options.wrapper) {
                    this.$element.unwrap();
                }
            }
        };
        Sticky.defaults = {
            wrapper: '<div class="sticky-wrapper" />',
            stuckClass: 'stuck',
            direction: 'down right'
        };
        Waypoint.Sticky = Sticky;
    }

    function pageSubmenuInit() {
        if ($('.page-submenu[data-sticky="true"]').length > 0 && $('#nectar_fullscreen_rows').length == 0) {
            stickyPageSubmenuInit();
            if ($('.page-submenu').parents('.span_12').find('> .wpb_column').length > 1) {
                var pageMenu = $('.page-submenu').clone(),
                    pageMenuParentRow = $('.page-submenu').parents('.wpb_row');
                $('.page-submenu').remove();
                pageMenuParentRow.before(pageMenu);
            }
            var sticky = new Waypoint.Sticky({
                element: $('.page-submenu[data-sticky="true"]')[0]
            });
        }
        if ($('#nectar_fullscreen_rows').length == 0) {
            $('.page-submenu').parents('.wpb_row').css('z-index', 10000);
        }
        $('.page-submenu .mobile-menu-link').on('click', function() {
            $(this).parents('.page-submenu').find('ul').stop(true).slideToggle(350);
            return false;
        });
        $('.page-submenu ul li a').on('click', function() {
            if ($('body.mobile').length > 0) {
                $(this).parents('.page-submenu').find('ul').stop(true).slideToggle(350);
            }
        });
    }

    function vcFullHeightRow() {
        var $element = $(".vc_row-o-full-height:first");
        if ($element.length) {
            var windowHeight, offsetTop, fullHeight;
            windowHeight = $window.height();
            $(".vc_row-o-full-height").each(function() {
                offsetTop = $(this).offset().top;
                if (offsetTop < windowHeight && $(this).hasClass('top-level') && !nectarDOMInfo.usingFrontEndEditor) {
                    fullHeight = 100 - offsetTop / (windowHeight / 100);
                    $(this).css("min-height", fullHeight + "vh");
                    $(this).find('> .col.span_12').css("min-height", fullHeight + "vh");
                } else {
                    $(this).css("min-height", windowHeight);
                    $(this).find('> .col.span_12').css("min-height", windowHeight);
                }
            });
        }
    }

    function vcFullHeightRowInit() {
        if ($('.vc_row-o-full-height').length > 0) {
            vcFullHeightRow();
            $window.on('smartresize', vcFullHeightRow);
        }
    }

    function fixIeFlexbox() {
        var ua = window.navigator.userAgent,
            msie = ua.indexOf("MSIE ");
        (msie > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
            "flex" === $(this).find('> .span_12').css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
        });
        if (msie > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) {
            fixIE11Images();
            $(window).on('resize', fixIE11Images);
        }
    }

    function fixIE11Images() {
        $('.img-with-aniamtion-wrap img.img-with-animation').each(function() {
            var $parentWrap = $(this).parents('.img-with-aniamtion-wrap');
            $parentWrap.css({
                'height': ''
            });
            var height = $(this).height();
            $parentWrap.css({
                'height': height
            });
        });
    }

    function recentPostsTitleOnlyEqualHeight() {
        function recentPostHeight() {
            $('.blog-recent[data-style="title_only"]').each(function() {
                if ($(this).find('> .col').length > 1) {
                    return false;
                }
                var $parentsSeletor = $(this).parent().parent().parent();
                if ($parentsSeletor.hasClass('vc_col-sm-3') || $parentsSeletor.hasClass('vc_col-sm-4') || $parentsSeletor.hasClass('vc_col-sm-6') || $parentsSeletor.hasClass('vc_col-sm-8') || $parentsSeletor.hasClass('vc_col-sm-9')) {
                    if ($('body.mobile').length == 0 && $(this).next('div').length == 0) {
                        var tallestColumn = 0;
                        $(this).find('> .col').css('padding', '50px 20px');
                        $(this).parents('.span_12').find(' > .wpb_column').each(function() {
                            if (Math.floor($(this).height()) > tallestColumn) {
                                tallestColumn = Math.floor($(this).height());
                            }
                        });
                        if (Math.floor($(this).find('> .col').outerHeight(true)) < Math.floor($(this).parents('.wpb_row').height()) - 1) {
                            $(this).find('> .col').css('padding-top', (tallestColumn - $(this).find('> .col').height()) / 2 + 'px');
                            $(this).find('> .col').css('padding-bottom', (tallestColumn - $(this).find('> .col').height()) / 2 + 'px');
                        }
                    } else {
                        $(this).find('> .col').css('padding', '50px 20px');
                    }
                }
            });
        }
        if ($('.blog-recent[data-style="title_only"]').length > 0) {
            recentPostHeight();
            $window.on('smartresize', recentPostHeight);
        }
    }

    function recentPostSliderHeight() {
        $('.nectar-recent-posts-slider').each(function() {
            var $minHeight = 250,
                $definedHeight = parseInt($(this).attr('data-height')),
                dif = ($('body[data-ext-responsive="true"]').length > 0) ? $window.width() / 1400 : $window.width() / 1100,
                $sliderSelectors = $(this).find('.nectar-recent-post-slide, .flickity-viewport');
            if (nectarDOMInfo.winW > 1000 && $('#boxed').length == 0) {
                if ($(this).parents('.full-width-content').length == 0) {
                    if ($('body[data-ext-responsive="true"]').length > 0 && nectarDOMInfo.winW >= 1400) {
                        $sliderSelectors.css('height', Math.ceil($definedHeight));
                    } else if ($('body[data-ext-responsive="true"]').length == 0 && nectarDOMInfo.winW >= 1100) {
                        $sliderSelectors.css('height', Math.ceil($definedHeight));
                    } else {
                        $sliderSelectors.css('height', Math.ceil($definedHeight * dif));
                    }
                } else {
                    $sliderSelectors.css('height', Math.ceil($definedHeight * dif));
                }
            } else {
                var $parentCol = ($(this).parents('.wpb_column').length > 0) ? $(this).parents('.wpb_column') : $(this).parents('.col');
                if ($parentCol.length == 0) {
                    $parentCol = $('.main-content');
                }
                if (!$parentCol.hasClass('vc_span12') && !$parentCol.hasClass('main-content') && !$parentCol.hasClass('span_12') && !$parentCol.hasClass('vc_col-sm-12')) {
                    var $parentColWidth = sliderColumnDesktopWidth($parentCol),
                        $aspectRatio = $definedHeight / $parentColWidth;
                    if ($aspectRatio * $parentCol.width() <= $minHeight) {
                        $sliderSelectors.css('height', $minHeight);
                    } else {
                        $sliderSelectors.css('height', $aspectRatio * $parentCol.width());
                    }
                } else {
                    if ($definedHeight * dif <= $minHeight) {
                        $sliderSelectors.css('height', $minHeight);
                    } else {
                        $sliderSelectors.css('height', Math.ceil($definedHeight * dif));
                    }
                }
            }
        });
    }

    function sliderColumnDesktopWidth(parentCol) {
        var $parentColWidth = 1100,
            $columnNumberParsed = $(parentCol).attr('class').match(/\d+/);
        if ($columnNumberParsed == '2') {
            $parentColWidth = 170
        } else if ($columnNumberParsed == '3') {
            $parentColWidth = 260
        } else if ($columnNumberParsed == '4') {
            $parentColWidth = 340
        } else if ($columnNumberParsed == '6') {
            $parentColWidth = 530
        } else if ($columnNumberParsed == '8') {
            $parentColWidth = 700
        } else if ($columnNumberParsed == '9') {
            $parentColWidth = 805
        } else if ($columnNumberParsed == '10') {
            $parentColWidth = 916.3
        } else if ($columnNumberParsed == '12') {
            $parentColWidth = 1100
        }
        return $parentColWidth;
    }

    function splitLineText() {
        $('.nectar-recent-posts-single_featured.multiple_featured').each(function() {
            var $slideClass = ($(this).find('.project-slides').length > 0) ? '.project-slide' : '.nectar-recent-post-slide',
                $slideInfoClass = ($(this).find('.project-slides').length > 0) ? '.project-info h1' : '.inner-wrap h2 a';
            $(this).find($slideClass).each(function() {
                $(this).find($slideInfoClass).each(function() {
                    var textArr = $(this).text();
                    textArr = textArr.trim();
                    textArr = textArr.split(' ');
                    $(this)[0].innerHTML = '';
                    for (var i = 0; i < textArr.length; i++) {
                        $(this)[0].innerHTML += '<span>' + textArr[i] + '</span> ';
                    }
                });
                $(this).find($slideInfoClass + ' > span').wrapInner('<span class="inner" />');
            });
        });
    }

    function splitLineHeadingMarkup() {
        $('.nectar-split-heading[data-animation-type="line-reveal-by-space"]').each(function() {
            $(this).find('> *').each(function() {
                var textArr = $(this).text();
                textArr = textArr.trim();
                textArr = textArr.split(' ');
                $(this)[0].innerHTML = '';
                for (var i = 0; i < textArr.length; i++) {
                    $(this)[0].innerHTML += '<span>' + textArr[i] + '</span> ';
                }
            });
            if (!$(this).hasClass('animated-in')) {
                $(this).find('> * > span').wrapInner('<span class="inner" />');
            } else {
                $(this).find('> * > span').wrapInner('<span class="inner animated" />');
            }
            $(this).addClass('markup-generated');
        });
        $('.nectar-split-heading[data-animation-type="letter-fade-reveal"]').each(function() {
            $(this).find('> *').each(function() {
                var textArr = $(this).text();
                textArr = textArr.trim();
                textArr = textArr.split(' ');
                $(this)[0].innerHTML = '';
                for (var i = 0; i < textArr.length; i++) {
                    $(this)[0].innerHTML += '<span>' + textArr[i] + '</span> ';
                }
            });
            $(this).find('span').each(function() {
                var $this = $(this);
                var textArr = $(this).text().split('');
                $this.empty();
                $.each(textArr, function(i, el) {
                    $this.append("<span>" + el + "</span");
                });
            });
            $(this).addClass('markup-generated');
        });
    }

    function splitLineHeadingInit() {
        if ($('.nectar-split-heading[data-animation-type="line-reveal-by-space"]').length > 0 || $('.nectar-split-heading[data-animation-type="letter-fade-reveal"]').length > 0) {
            splitLineHeadingMarkup();
        }
    }

    function recentPostsFlickityInit() {
        if ($('.nectar-recent-posts-slider-inner').length > 0) {
            var $rpFGroupCells = ($('.nectar-recent-posts-slider_multiple_visible').length > 0) ? '90%' : false;
            var $rpF = $('.nectar-recent-posts-slider-inner').flickity({
                contain: true,
                groupCells: $rpFGroupCells,
                draggable: true,
                lazyLoad: false,
                imagesLoaded: true,
                percentPosition: true,
                prevNextButtons: false,
                pageDots: true,
                resize: true,
                setGallerySize: true,
                wrapAround: true,
                accessibility: false
            });
            setTimeout(function() {
                $('.nectar-recent-posts-slider-inner').addClass('loaded');
            }, 1150);
            var flkty = $rpF.data('flickity');
            $rpF.on('dragStart.flickity', function() {
                $('.flickity-viewport').addClass('is-moving');
            });
            $rpF.on('dragEnd.flickity', function() {
                $('.flickity-viewport').removeClass('is-moving');
            });
            var $dragTimeout;
            $rpF.on('select.flickity', function() {
                $('.flickity-viewport').addClass('no-hover');
                clearTimeout($dragTimeout);
                $dragTimeout = setTimeout(function() {
                    $('.flickity-viewport').removeClass('no-hover');
                }, 400);
            });
            recentPostSliderHeight();
            $window.on('resize', recentPostSliderHeight);
            if (!nectarDOMInfo.usingMobileBrowser && !nectarDOMInfo.usingFrontEndEditor) {
                $window.on('resize', recentPostSliderParallaxMargins);
            }
        }

        function multipleLargeFeaturedInit() {
            $('.nectar-recent-posts-single_featured.multiple_featured').each(function(sliderIndex) {
                if ($(this).find('> .normal-container').length > 0) {
                    $(this).find('> .normal-container').remove();
                }
                $(this).append('<div class="normal-container container"> <ul class="controls" data-color="' + $(this).attr('data-button-color') + '" data-num="' + $(this).find('.nectar-recent-post-slide').length + '"></ul> </div>');
                var $that = $(this);
                var tallestFeaturedSlide = 0;
                var $slideClickTimeout;
                $nectarCustomSliderRotate[sliderIndex] = {
                    autorotate: ''
                };
                $(this).find('.nectar-recent-post-slide').each(function(i) {
                    if ($(this).find('.recent-post-container').height() > tallestFeaturedSlide) {
                        $(this).siblings().removeClass('tallest');
                        $(this).addClass('tallest');
                        tallestFeaturedSlide = $(this).find('.recent-post-container').height();
                    }
                    var $activeClass = (i == 0 && $(this).parents('.nectar-recent-posts-single_featured.multiple_featured[data-autorotate="none"]').length > 0) ? 'class="active"' : '';
                    $that.find('.controls').append('<li ' + $activeClass + '><span class="title">' + $(this).find('h2').text() + '</span></li>');
                });
                $(this).addClass('js-loaded');
                $(this).find('.controls li').on('click', function(e) {
                    if ($(this).hasClass('active')) {
                        return;
                    }
                    if (e.originalEvent !== undefined) {
                        $(this).parent().find('.active').addClass('trans-out');
                    }
                    var $index = $(this).index(),
                        $oldIndex = $(this).parent().find('.active').index(),
                        $that = $(this);
                    clearTimeout($slideClickTimeout);
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                    $slideClickTimeout = setTimeout(function() {
                        $that.parents('.multiple_featured').find('.nectar-recent-post-slide:not(:eq(' + $index + '))').css('opacity', '0').removeClass('active');
                        $that.parent().find('.trans-out').removeClass('trans-out');
                    }, 300);
                    $that.parents('.multiple_featured').find('.nectar-recent-post-slide:not(:eq(' + $index + '))').css('z-index', '10');
                    $that.parents('.multiple_featured').find('.nectar-recent-post-slide:eq(' + $oldIndex + ')').css('z-index', '15');
                    $(this).parents('.multiple_featured').find('.nectar-recent-post-slide').eq($index).css({
                        'opacity': '1',
                        'z-index': '20'
                    }).addClass('active');
                    if ($(this).parents('.multiple_featured').attr('data-autorotate') != 'none') {
                        nectarCustomSliderResetRotate($that.parents('.nectar-recent-posts-single_featured.multiple_featured'), sliderIndex);
                    }
                });
                $that = $(this);
                if ($(this).attr('data-autorotate').length > 0 && $(this).attr('data-autorotate') != 'none' && $('body.vc_editor').length == 0) {
                    setTimeout(function() {
                        var slide_interval = (parseInt($that.attr('data-autorotate')) < 100) ? 4000 : parseInt($that.attr('data-autorotate'));
                        $nectarCustomSliderRotate[sliderIndex].autorotate = setInterval(function() {
                            nectarCustomSliderRotate($that)
                        }, slide_interval);
                        $that.find('.controls > li:first-child').addClass('active');
                    }, 30);
                }
            });
            splitLineText();
            $window.on('resize', splitLineText);
        }
        multipleLargeFeaturedInit();
    }

    function recentPostSliderParallax() {
        $('.nectar-recent-posts-slider').each(function() {
            var $offset = parseInt($(this).find('.flickity-slider').position().left),
                $slides = $(this).find('.nectar-recent-post-slide'),
                $slideLength = $slides.length,
                $slideWidth = $slides.width(),
                $lastChildIndex = $(this).find('.nectar-recent-post-slide:last-child').index(),
                $slideFirstChildBG = $(this).find('.nectar-recent-post-slide:first-child .nectar-recent-post-bg'),
                $slideLastChildBG = $(this).find('.nectar-recent-post-slide:last-child .nectar-recent-post-bg');
            if ($offset >= -3) {
                $slideLastChildBG.css('margin-left', parseInt(Math.ceil($slideWidth / 3.5)) + 'px');
            } else {
                $slideLastChildBG.css('margin-left', '-' + parseInt(Math.ceil($slideWidth / 3.5 * $lastChildIndex)) + 'px');
            }
            if (Math.abs($offset) >= ($slideLength - 1) * $slideWidth) {
                $slideFirstChildBG.css('margin-left', '-' + parseInt(Math.ceil(($slideWidth / 3.5) * $slideLength)) + 'px');
            } else {
                $slideFirstChildBG.css('margin-left', '0px');
            }
            $(this).find('.nectar-recent-post-bg').css('transform', 'translateX(' + Math.ceil($(this).find('.flickity-slider').position().left / -3.5) + 'px)');
        });
        requestAnimationFrame(recentPostSliderParallax);
    }

    function recentPostSliderParallaxMargins() {
        $('.nectar-recent-posts-slider').each(function() {
            var $slideWidth = $(this).find('.nectar-recent-post-slide').width();
            $(this).find('.nectar-recent-post-slide').each(function(i) {
                $(this).find('.nectar-recent-post-bg').css('margin-left', '-' + parseInt(Math.ceil($slideWidth / 3.5) * i) + 'px');
            });
        });
    }

    function recentPostsInit() {
        recentPostsFlickityInit();
        $('.blog-recent[data-style="classic_enhanced_alt"] .inner-wrap').each(function() {
            $(this).find('.post-featured-img').each(function() {
                var $src = $(this).find('img').attr('src');
                $(this).css('background-image', 'url(' + $src + ')');
            });
        });
        $('.blog-recent[data-style="classic_enhanced"]').each(function() {
            if ($(this).find('.inner-wrap.has-post-thumbnail').length == 0) {
                $(this).addClass('no-thumbs');
            }
        });
        if (!nectarDOMInfo.usingMobileBrowser) {
            if ($('.nectar-recent-posts-slider').length > 0 && !nectarDOMInfo.usingFrontEndEditor) {
                window.requestAnimationFrame(recentPostSliderParallax);
            }
        }
        if (!nectarDOMInfo.usingMobileBrowser && !nectarDOMInfo.usingFrontEndEditor) {
            recentPostSliderParallaxMargins();
        }
    }

    function parallaxItemHoverEffect() {
        $('.style-5').each(function() {
            $(this).find('.sizer').insertBefore($(this).find('.parallaxImg'));
        });
        $('.style-5').parents('.wpb_row').css('z-index', '100');
        var d = document,
            bd = d.getElementsByTagName('body')[0],
            win = window,
            imgs = d.querySelectorAll('.parallaxImg'),
            totalImgs = imgs.length,
            supportsTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints;
        if (totalImgs <= 0) {
            return;
        }
        for (var l = 0; l < totalImgs; l++) {
            var thisImg = imgs[l],
                layerElems = thisImg.querySelectorAll('.parallaxImg-layer'),
                totalLayerElems = layerElems.length;
            if (totalLayerElems <= 0) {
                continue;
            }
            while (thisImg.firstChild) {
                thisImg.removeChild(thisImg.firstChild);
            }
            var lastMove = 0;
            var eventThrottle = $('html').hasClass('cssreflections') ? 1 : 80;
            if (eventThrottle == 80) {
                $body.addClass('cssreflections');
            }
            var containerHTML = d.createElement('div'),
                shineHTML = d.createElement('div'),
                shadowHTML = d.createElement('div'),
                layersHTML = d.createElement('div'),
                layers = [];
            thisImg.id = 'parallaxImg__' + l;
            containerHTML.className = 'parallaxImg-container';
            shadowHTML.className = 'parallaxImg-shadow';
            layersHTML.className = 'parallaxImg-layers';
            for (var i = 0; i < totalLayerElems; i++) {
                var layer = d.createElement('div'),
                    layerInner = d.createElement('div'),
                    imgSrc = layerElems[i].getAttribute('data-img');
                $(layer).html($(layerElems[i]).html());
                layer.className = 'parallaxImg-rendered-layer';
                layer.setAttribute('data-layer', i);
                if (i == 0 && $(thisImg).parents('.wpb_gallery').length == 0) {
                    layerInner.className = 'bg-img';
                    layerInner.style.backgroundImage = 'url(' + imgSrc + ')';
                    layer.appendChild(layerInner);
                }
                layersHTML.appendChild(layer);
                layers.push(layer);
            }
            containerHTML.appendChild(layersHTML);
            thisImg.appendChild(containerHTML);
            $(thisImg).wrap('<div class="parallaxImg-wrap" />');
            if (!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)) {
                $(thisImg).parent().append(shadowHTML);
            }
            if (supportsTouch && $('body.using-mobile-browser').length > 0) {} else {
                (function(_thisImg, _layers, _totalLayers, _shine) {
                    $(thisImg).parents('.style-5').on('mousemove', function(e) {
                        var parentEl = $(this);
                        var now = Date.now();
                        if (now > lastMove + eventThrottle) {
                            lastMove = now;
                            window.requestAnimationFrame(function() {
                                processMovement(e, false, _thisImg, _layers, _totalLayers, _shine, parentEl);
                            });
                        }
                    });
                    $(thisImg).parents('.style-5').on('mouseenter', function(e) {
                        processEnter(e, _thisImg, _layers, _totalLayers, _shine);
                    });
                    $(thisImg).parents('.style-5').on('mouseleave', function(e) {
                        processExit(e, _thisImg, _layers, _totalLayers, _shine);
                    });
                })(thisImg, layers, totalLayerElems, shineHTML);
            }
            (function(_thisImg, _layers, _totalLayers, _shine) {
                depths(false, _thisImg, _layers, _totalLayers, _shine);
                window.addEventListener('resize', function() {
                    depths(false, _thisImg, _layers, _totalLayers, _shine);
                });
            })(thisImg, layers, totalLayerElems, shineHTML);
        }

        function processMovement(e, touchEnabled, elem, layers, totalLayers, shine, parentEl) {
            if (!$(elem.firstChild).hasClass('over')) {
                processExit(e, elem, layers, totalLayers, shine);
                return false
            }
            var yMult = 0.03;
            var xMult = 0.063;
            if ($(elem).parents('.col.wide').length > 0) {
                yMult = 0.03;
                xMult = 0.063;
            } else if ($(elem).parents('.col.regular').length > 0 || $(elem).parents('.wpb_gallery').length > 0) {
                yMult = 0.045;
                xMult = 0.045;
            } else if ($(elem).parents('.col.tall').length > 0) {
                yMult = 0.05;
                xMult = 0.015;
            } else if ($(elem).parents('.col.wide_tall').length > 0) {
                yMult = 0.04;
                xMult = 0.04;
            } else if (parentEl.hasClass('nectar-fancy-box')) {
                yMult = 0.045;
                xMult = 0.022;
            } else {
                yMult = 0.045;
                xMult = 0.075;
            }
            var bdst = nectarDOMInfo.scrollTop,
                bdsl = bd.scrollLeft,
                pageX = (touchEnabled) ? e.touches[0].pageX : e.pageX,
                pageY = (touchEnabled) ? e.touches[0].pageY : e.pageY,
                offsets = elem.getBoundingClientRect(),
                w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth,
                h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight,
                wMultiple = 320 / w,
                offsetX = 0.52 - (pageX - offsets.left - bdsl) / w,
                offsetY = 0.52 - (pageY - offsets.top - bdst) / h,
                dy = (pageY - offsets.top - bdst) - h / 2,
                dx = (pageX - offsets.left - bdsl) - w / 2,
                yRotate = (offsetX - dx) * (yMult * wMultiple),
                xRotate = (dy - offsetY) * (xMult * wMultiple);
            var imgCSS;
            if ($(elem).parents('.wpb_gallery').length > 0) {
                imgCSS = ' perspective(' + w * 3 + 'px) rotateX(' + -xRotate * 1.9 + 'deg) rotateY(' + -yRotate * 1.3 + 'deg)';
            } else {
                if ($(elem).parents('.wide_tall').length == 0 && $(elem).parents('.wide').length == 0 && $(elem).parents('.tall').length == 0) {
                    var $scaleAmount = (parentEl.hasClass('nectar-fancy-box')) ? '1.06' : '1.03';
                    var $offsetAmount = (parentEl.hasClass('nectar-fancy-box')) ? '-2' : '-10';
                    imgCSS = ' perspective(' + w * 3 + 'px) rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)  translateY(' + offsetY * $offsetAmount + 'px) translateX(' + offsetX * $offsetAmount + 'px) scale(' + $scaleAmount + ')';
                } else {
                    imgCSS = ' perspective(' + w * 3 + 'px) rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)  translateY(' + offsetY * -10 + 'px) translateX(' + offsetX * -10 + 'px) scale(1.013)';
                }
            }
            $(elem).find('.parallaxImg-container').css('transform', imgCSS);
            if (!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)) {
                $(elem).parents('.parallaxImg-wrap').find('.parallaxImg-shadow').css('transform', imgCSS);
            }
        }

        function processEnter(e, elem) {
            elem.firstChild.className += ' over';
            elem.className += ' over';
            $(elem).addClass('transition');
            if ($(elem).parents('.wpb_gallery').length > 0) {
                setTimeout(function() {
                    $(elem).removeClass('transition');
                }, 450);
            } else {
                setTimeout(function() {
                    $(elem).removeClass('transition');
                }, 200);
            }
        }

        function processExit(e, elem) {
            var w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth;
            var container = elem.firstChild;
            container.className = container.className.replace(' over', '');
            elem.className = elem.className.replace(' over', '');
            $(container).css('transform', 'perspective(' + w * 3 + 'px) rotateX(0deg) rotateY(0deg) translateZ(0)');
            $(elem).parents('.parallaxImg-wrap').find('.parallaxImg-shadow').css('transform', 'perspective(' + w * 3 + 'px) rotateX(0deg) rotateY(0deg) translateZ(0)');
            $(elem).addClass('transition');
            setTimeout(function() {
                $(elem).removeClass('transition');
            }, 200);
        }

        function depths(touchEnabled, elem, layers, totalLayers) {
            var w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth;
            var container = elem.firstChild;
            for (var ly = 0; ly < totalLayers; ly++) {
                if (ly == 0) {
                    $(layers[ly]).css('transform', 'translateZ(0px)');
                } else {
                    $(layers[ly]).css('transform', 'translateZ(' + (w * 3) / 27 * (ly * 1.1) + 'px) ');
                }
            }
            totalLayers = totalLayers + 3;
            $(container).css('transform', 'perspective(' + w * 3 + 'px)');
        }
    }

    function nectarFancyBoxHover() {
        if ($('.nectar-fancy-box[data-style="hover_desc"]').length == 0) {
            return false;
        }
        var $hoverContentHeight = 0;
        $('body').on('mouseenter', '.nectar-fancy-box[data-style="hover_desc"]', function() {
            $hoverContentHeight = parseInt($(this).find('.hover-content').outerHeight(true));
            $(this).find('.heading-wrap').css('transform', 'translateY(-' + $hoverContentHeight + 'px)');
        });
        $('body').on('mouseleave', '.nectar-fancy-box[data-style="hover_desc"]', function() {
            $(this).find('.heading-wrap').css('transform', 'translateY(0)');
        });
    }

    function NectarMouseFollowIcon(el, iconSelector) {
        this.$el = el;
        this.$iconEl = this.$el.find(iconSelector);
        this.elX = 0;
        this.elY = 0;
        this.initialX = this.$el.width() / 2;
        this.initialY = this.$el.height() / 2;
        this.elX = 0;
        this.elY = 0;
        this.lastScroll = 0;
        this.scrollAdjust = 0;
        this.lastX = this.initialX;
        this.lastY = this.initialY;
        this.activeFollow = false;
        this.percentage = 0.13;
        this.percentageTimeout;
        $window.on('resize', this.resizeEvent.bind(this));
        this.mouseEvents();
        this.rafLoop();
    }
    NectarMouseFollowIcon.prototype.resizeEvent = function() {
        this.initialX = this.$el.width() / 2;
        this.initialY = this.$el.height() / 2;
    };
    NectarMouseFollowIcon.prototype.mouseEvents = function() {
        var that = this;
        that.$el.on('mouseenter', function(e) {
            that.activeFollow = true;
            that.elX = e.offsetX;
            that.elY = e.offsetY;
            that.lastScroll = 0;
            clearTimeout(that.percentageTimeout);
            that.percentageTimeout = setTimeout(function() {
                that.percentage = 0.2;
            }, 700);
        });
        that.$el.on('mouseleave', function() {
            that.activeFollow = false;
            that.lastScroll = 0;
            clearTimeout(that.percentageTimeout);
            that.percentage = 0.13;
        });
        that.$el.on('mousemove', function(e) {
            that.elX = e.offsetX;
            that.elY = e.offsetY;
            that.lastScroll = 0;
        });
        $(window).on('scroll', function() {
            if (that.activeFollow == true && that.lastScroll == 0) {
                that.lastScroll = nectarDOMInfo.scrollTop;
            }
        });
    };
    NectarMouseFollowIcon.prototype.rafLoop = function() {
        if (this.activeFollow == true) {
            this.scrollAdjust = (this.lastScroll > 0) ? nectarDOMInfo.scrollTop - this.lastScroll : 0;
            this.lastY = linearInterpolate(this.lastY, this.elY + this.scrollAdjust, this.percentage);
            this.lastX = linearInterpolate(this.lastX, this.elX, this.percentage);
        } else {
            this.lastY = linearInterpolate(this.lastY, this.initialY, 0.13);
            this.lastX = linearInterpolate(this.lastX, this.initialX, 0.13);
        }
        this.$iconEl.css({
            'transform': 'translateX(' + this.lastX + 'px) translateY(' + this.lastY + 'px)'
        });
        requestAnimationFrame(this.rafLoop.bind(this));
    };

    function nectarVideoLightbox() {
        iconMouseFollowArr = [];
        $body.on('mouseenter', '.nectar_video_lightbox[data-parent-hover="1"]', function() {
            var $parentRow = $(this).parents('.wpb_row');
            $parentRow.find('> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner').addClass('transition');
            $parentRow.find('> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner').css({
                'transform': 'scale(1.08)'
            });
        });
        $body.on('mouseleave', '.nectar_video_lightbox[data-parent-hover="1"]', function() {
            var $parentRow = $(this).parents('.wpb_row');
            $parentRow.find('> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner').css({
                'transform': 'scale(1)'
            });
        });
        $('.nectar-video-box').each(function(i) {
            if ($(this).find('.play_button_mouse_follow')) {
                var $that = $(this);
                $(this).imagesLoaded(function() {
                    if (!nectarDOMInfo.usingMobileBrowser) {
                        iconMouseFollowArr[i] = new NectarMouseFollowIcon($that, '.play_button_mouse_follow');
                    }
                    var $playColor = ($that.is('[data-mouse-icon-color]') && $that.attr('data-mouse-icon-color').length > 0) ? $that.attr('data-mouse-icon-color') : '#000';
                    if ($that.is('[data-mouse-style="solid_color"]')) {
                        $that.find('.play_button_mouse_follow').css({
                            'background-color': $playColor
                        });
                    }
                    $that.find('.play_button_mouse_follow').addClass('visible');
                });
            }
        });
    }

    function nectarCustomSliderRotate(slider) {
        if ($('body.vc_editor').length > 0) {
            return;
        }
        var $controlSelector = (slider.find('.project-slides').length > 0) ? '.dot-nav > span' : '.controls > li',
            $controlSelectorInd = (slider.find('.project-slides').length > 0) ? 'span' : ' li',
            $slideLength = slider.find($controlSelector).length,
            $currentSlide = slider.find($controlSelector + '.active').index();
        if ($currentSlide + 1 == $slideLength) {
            slider.find($controlSelector + ':first-child').trigger('click');
        } else {
            slider.find($controlSelector + '.active').next($controlSelectorInd).trigger('click');
        }
    }

    function nectarCustomSliderResetRotate(slider, index) {
        clearInterval($nectarCustomSliderRotate[index].autorotate);
        if (slider.attr('data-autorotate').length > 0) {
            var slide_interval = (parseInt(slider.attr('data-autorotate')) < 100) ? 4000 : parseInt(slider.attr('data-autorotate'));
            $nectarCustomSliderRotate[index].autorotate = setInterval(function() {
                nectarCustomSliderRotate(slider)
            }, slide_interval);
        }
    }

    function fsProjectSliderInit() {
        $fsProjectSliderArr = [];
        if (typeof SalientRecentProjectsFullScreen === 'undefined') {
            return;
        }
        $('.nectar_fullscreen_zoom_recent_projects').each(function(i) {
            $fsProjectSliderArr[i] = new SalientRecentProjectsFullScreen($(this));
        });
    }

    function portfolioSidebarFollow() {
        var sidebarFollow = $('.single-portfolio #sidebar').attr('data-follow-on-scroll');
        if ($('body.single-portfolio').length == 0 || $('#sidebar[data-follow-on-scroll]').length == 0) {
            return;
        }
        sidebarFollow = $('.single-portfolio #sidebar').attr('data-follow-on-scroll');
        if (sidebarFollow == 1 && !$body.hasClass('mobile') && parseInt($('#sidebar').height()) + 50 <= parseInt($('.post-area').height())) {
            var $ssExtraTopSpace = 50;
            if ($('#header-outer[data-remove-fixed="0"]').length > 0 && $('body[data-hhun="1"]').length == 0) {
                $ssExtraTopSpace += $headerOuterEl.outerHeight();
                if ($('#header-outer[data-shrink-num][data-header-resize="1"]').length > 0) {
                    var headerPadding2 = parseInt($headerOuterEl.attr('data-padding')) - parseInt($headerOuterEl.attr('data-padding')) / 1.8;
                    $ssExtraTopSpace -= logoShrinkNum;
                    $ssExtraTopSpace -= headerPadding2;
                }
                if ($('body.mobile').length == 0 && $('#header-outer[data-condense="true"]').length > 0) {
                    var $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
                    $ssExtraTopSpace = 50;
                    $ssExtraTopSpace += $headerOuterEl.height() - (parseInt($headerSpan9.position().top) - parseInt($('#header-outer #logo').css('margin-top'))) - parseInt(nectarDOMInfo.secondaryHeaderHeight);
                }
            }
            if ($wpAdminBar.length > 0) {
                $ssExtraTopSpace += $wpAdminBar.outerHeight();
            }
            $('.single-portfolio #sidebar').theiaStickySidebar({
                additionalMarginTop: $ssExtraTopSpace,
                updateSidebarHeight: false
            });
        }
    }

    function infiniteScrollInit() {
        if ($('.infinite_scroll').length > 0) {
            $('.portfolio-items.infinite_scroll').infinitescroll({
                navSelector: "div#pagination",
                nextSelector: "div#pagination a:first",
                itemSelector: ".portfolio-items.infinite_scroll .element",
                finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
                msgText: " ",
            }, function(newElements) {
                var $container = $('.portfolio-items.infinite_scroll:not(.carousel)'),
                    $newElems = $(newElements).css('opacity', 0);
                $newElems.imagesLoaded(function() {
                    $(newElements).css('opacity', 1);
                    $container.isotope('appended', $(newElements));
                    $(newElements).find('.work-item').addClass('ajax-loaded');
                    $(newElements).addClass('ajax-loaded');
                    $(newElements).find('.work-meta, .nectar-love-wrap').css({
                        'opacity': 1
                    });
                    if ($('.portfolio-filters-inline').length > 0 || $('.portfolio-filters').length > 0) {
                        var selector;
                        if ($('.portfolio-filters-inline').length > 0) {
                            selector = $('.portfolio-filters-inline a.active').attr('data-filter');
                        } else {
                            selector = $('.portfolio-filters a.active').attr('data-filter');
                        }
                        $('.portfolio-filters-inline a.active').attr('data-filter');
                        $container.isotope({
                            filter: selector
                        });
                    }
                    for (var i = 0; i < $portfolio_containers.length; i++) {
                        $portfolio_containers[i].reLayout();
                    }
                    if ($(newElements).find('.work-item.style-5').length > 0) {
                        parallaxItemHoverEffect();
                    }
                    if ($(newElements).find('.inner-wrap').attr('data-animation') == 'none') {
                        $('.portfolio-items .col .inner-wrap').removeClass('animated');
                    } else {
                        for (var i = 0; i < $portfolio_containers.length; i++) {
                            $portfolio_containers[i].masonryZindex();
                            $portfolio_containers[i].portfolioAccentColor();
                        }
                        $(newElements).each(function() {
                            var $portfolioOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '90%';
                            var $that = $(this);
                            var waypoint = new Waypoint({
                                element: $that,
                                handler: function() {
                                    var $portfolioAnimationDelay = ($that.is('[data-masonry-type="photography"].masonry-items')) ? 85 : 115;
                                    setTimeout(function() {
                                        $that.addClass("animated-in");
                                    }, $portfolioAnimationDelay * $that.attr('data-delay-amount'));
                                    waypoint.destroy();
                                },
                                offset: $portfolioOffsetPos
                            });
                        });
                    }
                    $('.portfolio-items').each(function() {
                        var $unique_id = uniqueIdGenerate();
                        $(this).find('a[rel^="prettyPhoto"], a.pretty_photo').attr('rel', 'prettyPhoto[' + $unique_id + '_gal]').removeClass('pretty_photo');
                    });
                    $('.portfolio-items').each(function() {
                        var $unique_id = uniqueIdGenerate();
                        $(this).find('a[data-fancybox^="group_"]').attr('data-fancybox', 'group_' + $unique_id);
                    });
                    lightBoxInit();
                    setTimeout(function() {
                        for (var i = 0; i < $portfolio_containers.length; i++) {
                            $portfolio_containers[i].masonryZindex();
                            $portfolio_containers[i].reLayout();
                            $portfolio_containers[i].isotopeCatSelection();
                        }
                        $(newElements).removeClass('ajax-loaded');
                    }, 700);
                    parallaxRowsBGCals();
                });
            });
            $('.post-area.infinite_scroll .posts-container').infinitescroll({
                navSelector: "div#pagination",
                nextSelector: "div#pagination a:first",
                itemSelector: ".post-area .posts-container .post",
                finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
                msgText: " "
            }, function(newElements) {
                if ($('.masonry.classic').length > 0 || $('.post-area:not(.masonry):not(.featured_img_left)').length > 0 || $('.post-area.standard-minimal').length > 0) {
                    flexsliderInit();
                    if ($().mediaelementplayer) {
                        $(newElements).find('.wp-audio-shortcode, .wp-video-shortcode').mediaelementplayer();
                    }
                    lightBoxInit();
                    if ($('.carousel').length > 0) {
                        standardCarouselInit();
                        clientsCarouselInit();
                    }
                    waypoints();
                    $('.testimonial_slider').animate({
                        'opacity': '1'
                    }, 800);
                    nectarTestimonialSliders();
                    nectarTestimonialSlidersEvents();
                    setTimeout(function() {
                        responsiveVideoIframesInit();
                        responsiveVideoIframes();
                        $window.trigger('resize');
                    }, 500);
                    parallaxRowsBGCals();
                    $window.trigger('resize');
                } else {
                    parallaxRowsBGCals();
                    $window.trigger('resize');
                }
                var $container = $('.posts-container');
                if ($container.parent().hasClass('masonry')) {
                    $(newElements).addClass('masonry-blog-item');
                }
                var $newElems = $(newElements);
                if ($newElems.find('img').length == 0) {
                    $newElems = $('body');
                }
                $newElems.imagesLoaded(function() {
                    if ($container.parent().hasClass('masonry') && !$container.parent().hasClass('auto_meta_overlaid_spaced')) {
                        $container.isotope('appended', $(newElements));
                    }
                    for (var i = 0; i < $nectarMasonryBlogs.length; i++) {
                        $nectarMasonryBlogs[i].flickityBlogInit();
                    }
                    $(newElements).addClass('ajax-loaded');
                    if ($container.parent().hasClass('classic_enhanced')) {
                        $container.find('.large_featured.has-post-thumbnail.ajax-loaded .post-featured-img, .wide_tall.has-post-thumbnail.ajax-loaded .post-featured-img').each(function() {
                            var $src = $(this).find('img').attr('src');
                            $(this).css('background-image', 'url(' + $src + ')');
                        });
                        $container.find('.large_featured.ajax-loaded .nectar-flickity, .wide_tall.ajax-loaded .nectar-flickity').each(function() {
                            $(this).find('.cell').each(function() {
                                var $src = $(this).find('img').attr('src');
                                $(this).css('background-image', 'url(' + $src + ')');
                            });
                        });
                    }
                    if ($(newElements).parents('.posts-container').attr('data-animation') == 'none') {
                        $(newElements).find('.inner-wrap').removeClass('animated');
                    } else {
                        for (var i = 0; i < $nectarMasonryBlogs.length; i++) {
                            $nectarMasonryBlogs[i].blogMasonryZindex();
                        }
                        $(newElements).each(function() {
                            var $that = $(this);
                            var waypoint = new Waypoint({
                                element: $that,
                                handler: function() {
                                    setTimeout(function() {
                                        $that.addClass("animated-in");
                                    }, 80 * $that.attr('data-delay-amount'));
                                    waypoint.destroy();
                                },
                                offset: '90%'
                            });
                        });
                    }
                    setTimeout(function() {
                        $(newElements).removeClass('ajax-loaded');
                    }, 700);
                });
            });
        }
    }

    function toTopBind() {
        if ($('#to-top').length > 0 && $window.width() > 1020 || $('#to-top').length > 0 && $('#to-top.mobile-enabled').length > 0) {
            if (nectarDOMInfo.scrollTop > 350) {
                $window.on('scroll', hideToTop);
            } else {
                $window.on('scroll', showToTop);
            }
        }
    }

    function showToTop() {
        if (nectarDOMInfo.scrollTop > 350 && !$offCanvasEl.is('.fullscreen.open')) {
            $('#to-top').stop().transition({
                'bottom': '17px'
            }, 350, 'easeInOutCubic');
            $window.off('scroll', showToTop);
            $window.on('scroll', hideToTop);
        }
    }

    function hideToTop() {
        if (nectarDOMInfo.scrollTop < 350 || $offCanvasEl.is('.fullscreen.open')) {
            var $animationTiming = ($('#slide-out-widget-area.fullscreen.open').length > 0) ? 1150 : 350;
            $('#to-top').stop().transition({
                'bottom': '-30px'
            }, $animationTiming, 'easeInOutQuint');
            $window.off('scroll', hideToTop);
            $window.on('scroll', showToTop);
        }
    }

    function scrollToTopInit() {
        if ($('.nectar-social.fixed').length == 0) {
            toTopBind();
        }
        if ($('body[data-button-style*="rounded"]').length > 0) {
            var $clone = $('#to-top .fa-angle-up').clone();
            $clone.addClass('top-icon');
            $('#to-top').prepend($clone);
        }
        $body.on('click', '#to-top, a[href="#top"]', function() {
            $('body,html').stop().animate({
                scrollTop: 0
            }, 800, 'easeOutQuad', function() {
                if ($('.nectar-box-roll').length > 0) {
                    $body.trigger('mousewheel', [1, 0, 0]);
                }
            });
            return false;
        });
    }

    function scrollSpyInit() {
        var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 0 : $headerOuterEl.outerHeight();
        if ($('.page-template-template-no-header-footer').length > 0 || $('.page-template-template-no-header').length > 0) {
            $headerNavSpace = 0;
        }
        $('header#top .sf-menu li a[href="#"]').on('click', function(e) {
            e.preventDefault();
        });
        if ($('#nectar_fullscreen_rows').length == 0 || $nectarFullPage.$usingFullScreenRows == false) {
            $('a.nectar-next-section').each(function() {
                if ($(this).parents('.wpb_row:not(.inner_row)').length > 0) {
                    var $parentRow = $(this).parents('.wpb_row:not(.inner_row)'),
                        $parentRowIndex = $(this).parents('.wpb_row:not(.inner_row)').index();
                    if ($parentRow.parent().find('> .wpb_row[id]:eq(' + ($parentRowIndex + 1) + ')').length > 0) {
                        var $nextRowID = $parentRow.parent().find('> .wpb_row:eq(' + ($parentRowIndex + 1) + ')').attr('id');
                        $(this).attr('href', '#' + $nextRowID);
                    }
                }
            });
        } else if ($().fullpage) {
            $('a.nectar-next-section').on('click', function() {
                $.fn.fullpage.moveSectionDown();
                return false;
            });
        }
        if ($('#slide-out-widget-area .off-canvas-menu-container').length > 0) {
            $('#slide-out-widget-area .off-canvas-menu-container').find("a[href*='" + location.pathname + "']").each(function() {
                var $href = $(this).attr('href');
                if ($href != '#' && $href.indexOf("#") != -1 && $('div' + $href.substr($href.indexOf("#"))).length > 0) {
                    $(this).attr('href', $href.substr($href.indexOf("#")));
                    $(this).parent().removeClass('current_page_item').removeClass('current-menu-item');
                }
                if ($('div[data-fullscreen-anchor-id="' + $href.substr($href.indexOf("#") + 1) + '"]').length > 0) {
                    $(this).parent().removeClass('current_page_item').removeClass('current-menu-item');
                }
            });
        }
        $("#header-outer").find("a[href*='" + location.pathname + "']").each(function() {
            var $href = $(this).attr('href');
            if ($href.indexOf("#") != -1 && $('div' + $href.substr($href.indexOf("#"))).length > 0) {
                $(this).attr('href', $href.substr($href.indexOf("#")));
                $(this).parent().removeClass('current_page_item').removeClass('current-menu-item');
            }
            if ($('div[data-fullscreen-anchor-id="' + $href.substr($href.indexOf("#") + 1) + '"]').length > 0) {
                $(this).parent().removeClass('current_page_item').removeClass('current-menu-item');
            }
        });
        var $target = ($('.page-submenu[data-sticky="true"]').length == 0) ? '#header-outer nav' : '.page-submenu';
        $body.scrollspy({
            target: $target,
            offset: $headerNavSpace + nectarDOMInfo.adminBarHeight + 40
        });
    }

    function pageLoadHash() {
        var $hash = window.location.hash;
        if ($hash && $hash.length > 0) {
            $hash = $hash.replace(/<|>/g, '');
        }
        var $hashSubstrng = ($hash && $hash.length > 0) ? $hash.substring(1, $hash.length) : 0,
            headerPadding2 = parseInt($headerOuterEl.attr('data-padding')) * 2,
            $hasSlashLength = 0;
        if ($hashSubstrng) {
            $hasSlashLength = $hashSubstrng.split("/");
            $hasSlashLength = $hasSlashLength.length;
        }
        if ($hashSubstrng && $hasSlashLength > 1) {
            $hashSubstrng = $hashSubstrng.replace(/\//g, "");
            $hash = $hash.replace(/\//g, "");
        }
        if ($hash && $('.main-content').find($hash).length > 0 || $hash && $('.main-content').find('[data-fullscreen-anchor-id="' + $hashSubstrng + '"]').length > 0) {
            var $hashObj = ($('.main-content').find($hash).length > 0) ? $('.main-content').find($hash) : $('.main-content').find('[data-fullscreen-anchor-id="' + $hashSubstrng + '"]'),
                $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 0 : $('#header-space').outerHeight();
            if ($('.page-template-template-no-header-footer').length > 0 || $('.page-template-template-no-header').length > 0) {
                $headerNavSpace = 0;
            }
            var $timeoutVar = 0;
            if ($('.nectar-box-roll').length > 0 && $('.container-wrap.bottomBoxOut').length > 0) {
                nectarBoxRoll.boxRoll(null, -1);
                $timeoutVar = 2050;
            }
            setTimeout(function() {
                var $scrollTopDistance;
                if ($('body[data-permanent-transparent="1"]').length == 0) {
                    if (!$body.hasClass('mobile')) {
                        var $resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(logoShrinkNum) + headerPadding2 * 2;
                        if ($('#header-outer[data-remove-fixed="1"]').length > 0) {
                            $headerNavSpace = 0;
                        }
                        $scrollTopDistance = $hashObj.offset().top - parseInt($headerNavSpace) + $resize + 3 - nectarDOMInfo.adminBarHeight;
                        if ($('body.mobile').length == 0 && $('#header-outer[data-condense="true"]').length > 0) {
                            var $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),
                                $headerHeightStored = $headerOuterEl.height(),
                                $headerHeightCondensed = $headerHeightStored - (parseInt($headerSpan9.height()) + parseInt($('#header-outer #logo').css('margin-top')));
                            $scrollTopDistance = $hashObj.offset().top - parseInt($headerNavSpace) + $headerHeightCondensed - nectarDOMInfo.adminBarHeight;
                        }
                    } else {
                        $scrollTopDistance = ($('#header-outer[data-mobile-fixed="1"]').length > 0) ? $hashObj.offset().top + 2 - $headerNavSpace + nectarDOMInfo.adminBarHeight : $hashObj.offset().top - nectarDOMInfo.adminBarHeight + 1;
                    }
                } else {
                    $scrollTopDistance = $hashObj.offset().top - nectarDOMInfo.adminBarHeight + 1;
                }
                if ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length == 0) {
                    if ($('#header-outer.detached').length == 0) {
                        $scrollTopDistance = $scrollTopDistance + $headerNavSpace;
                    }
                }
                var $pageSubMenu = ($('.page-submenu[data-sticky="true"]').length > 0) ? $('.page-submenu').height() : 0;
                var $headerSecondary;
                if ($('body.material').length > 0 && $headerSecondaryEl.length > 0 && $('body[data-hhun="1"]').length == 0 && $('#header-outer[data-remove-fixed="1"]').length == 0 && !$body.hasClass('mobile')) {
                    $headerSecondary = $headerSecondaryEl.height();
                } else {
                    $headerSecondary = 0;
                }
                nectar_scrollToY($scrollTopDistance - $pageSubMenu + $headerSecondary, 700, 'easeInOutQuint');
            }, $timeoutVar);
        }
    }

    function pageLoadHashInit() {
        if ($('body[data-animated-anchors="true"]').length > 0) {
            if ($('.nectar-box-roll').length == 0 && $('#nectar_fullscreen_rows').length == 0) {
                if (typeof nectarGetQueryParam['tab'] != 'undefined') {
                    setTimeout(function() {
                        pageLoadHash();
                    }, 800);
                } else {
                    pageLoadHash();
                }
            }
            if ($('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && $('.nectar-box-roll').length == 0 && nectarDOMInfo.usingMobileBrowser) {
                pageLoadHash();
            }
        }
    }

    function animatedAnchorLinks() {
        if ($('body[data-animated-anchors="true"]').length > 0 || $('.single-product [data-gallery-style="left_thumb_sticky"]').length > 0) {
            var headerPadding2 = headerPadding - headerPadding / 1.8;
            setTimeout(scrollSpyInit, 200);
            var $animatedScrollingTimeout;
            $body.on('click', '#header-outer nav .sf-menu a, #footer-outer .nectar-button, #mobile-menu li a, .container-wrap a:not(.wpb_tabs_nav a):not(.um-woo-view-order):not(.magnific):not([data-fancybox]):not(.woocommerce-tabs .tabs a):not(.slider-prev):not(.slider-next):not(.testimonial-next-prev a), .swiper-slide .button a, #slide-out-widget-area a, #slide-out-widget-area .inner div a', function(e) {
                var $hash = $(this).prop("hash");
                if (!$(this).hasClass('nectar-next-section')) {
                    $body.addClass('animated-scrolling');
                }
                clearTimeout($animatedScrollingTimeout);
                $animatedScrollingTimeout = setTimeout(function() {
                    $body.removeClass('animated-scrolling');
                }, 850);
                var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 0 : $('#header-space').outerHeight();
                if ($('.page-template-template-no-header-footer').length > 0 || $('.page-template-template-no-header').length > 0) {
                    $headerNavSpace = 0;
                }
                if ($hash && $body.find($hash).length > 0 && $hash != '#top' && $hash != '' && $(this).attr('href').indexOf(window.location.href.split("#")[0]) !== -1 || $(this).is('[href^="#"]') && $hash != '' && $body.find($hash).length > 0 && $hash != '#top') {
                    if (!$(this).hasClass('skip-hash')) {
                        if (history.pushState) {
                            history.pushState(null, null, $hash);
                        } else {
                            location.hash = $hash;
                        }
                    }
                    if ($(this).parents('ul').length > 0) {
                        $(this).parents('ul').find('li').removeClass('current-menu-item');
                    }
                    if ($(this).parents('#slide-out-widget-area').length > 0) {
                        if ($('body.material[data-slide-out-widget-area-style="slide-out-from-right"].material-ocm-open').length > 0) {
                            $('body > .slide_out_area_close').addClass('non-human-allowed').trigger('click');
                            var $clickedLinkStore = $(this);
                            setTimeout(function() {
                                $clickedLinkStore.trigger('click');
                            }, 1000);
                        } else {
                            $('#slide-out-widget-area .slide_out_area_close').addClass('non-human-allowed').trigger('click');
                        }
                        setTimeout(function() {
                            if ($('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0) {
                                $('body > .slide_out_area_close').removeClass('non-human-allowed');
                            } else {
                                $('#slide-out-widget-area .slide_out_area_close').removeClass('non-human-allowed');
                            }
                        }, 100);
                    }
                    if ($(this).parents('#mobile-menu').length > 0) {
                        $('.slide-out-widget-area-toggle.mobile-icon a').addClass('non-human-allowed').trigger('click');
                        setTimeout(function() {
                            $('.slide-out-widget-area-toggle.mobile-icon a').removeClass('non-human-allowed');
                        }, 100);
                    }
                    var $mobileMenuHeight = ($(this).parents('#mobile-menu').length > 0) ? $(this).parents('#mobile-menu').height() : null;
                    var $timeoutVar = 1;
                    var $that = $(this);
                    if ($('.nectar-box-roll').length > 0 && $('.container-wrap.bottomBoxOut').length > 0) {
                        nectarBoxRoll.boxRoll(null, -1);
                        $timeoutVar = 2050;
                    }
                    setTimeout(function() {
                        var $scrollTopDistance;
                        if ($('body[data-permanent-transparent="1"]').length == 0) {
                            if (!$body.hasClass('mobile')) {
                                var $resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(logoShrinkNum) + headerPadding2 * 2;
                                if ($('#header-outer[data-remove-fixed="1"]').length > 0) {
                                    $headerNavSpace = 0;
                                }
                                $scrollTopDistance = $($hash).offset().top - $mobileMenuHeight - parseInt($headerNavSpace) + $resize + 3 - nectarDOMInfo.adminBarHeight;
                                if ($('body.mobile').length == 0 && $('#header-outer[data-condense="true"]').length > 0) {
                                    var $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),
                                        $headerHeightStored = $headerOuterEl.height(),
                                        $headerHeightCondensed = $headerHeightStored - (parseInt($headerSpan9.height()) + parseInt($('#header-outer #logo').css('margin-top')));
                                    $scrollTopDistance = $($hash).offset().top - parseInt($headerNavSpace) + $headerHeightCondensed - nectarDOMInfo.adminBarHeight;
                                }
                            } else {
                                $scrollTopDistance = ($('#header-outer[data-mobile-fixed="1"]').length > 0) ? $($hash).offset().top + 2 - $headerNavSpace + nectarDOMInfo.adminBarHeight : $($hash).offset().top - $mobileMenuHeight - nectarDOMInfo.adminBarHeight + 1;
                            }
                        } else {
                            $scrollTopDistance = $($hash).offset().top - nectarDOMInfo.adminBarHeight + 1;
                        }
                        if ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length == 0) {
                            if ($('#header-outer.detached').length == 0 || $that.parents('.page-submenu[data-sticky="true"]').length > 0) {
                                $scrollTopDistance = $scrollTopDistance + $headerNavSpace;
                            }
                            if ($that.parents('.page-submenu[data-sticky="true"]').length > 0) {
                                $('#header-outer.detached').addClass('invisible');
                                $('.page-submenu').addClass('header-not-visible').css('transform', 'translateY(0px)');
                            }
                        }
                        var $pageSubMenu = ($that.parents('.page-submenu[data-sticky="true"]').length > 0) ? $that.parents('.page-submenu').height() : 0;
                        var $headerSecondary;
                        if ($('body.material').length > 0 && $headerSecondaryEl.length > 0 && $('body[data-hhun="1"]').length == 0 && $('#header-outer[data-remove-fixed="1"]').length == 0 && !$body.hasClass('mobile')) {
                            $headerSecondary = $headerSecondaryEl.height();
                        } else {
                            if ($('body[data-hhun="1"]').length > 0 && $headerSecondaryEl.length > 0 && !$body.hasClass('mobile') && $('#header-outer[data-remove-fixed="1"]').length == 0) {
                                $headerSecondary = $headerSecondaryEl.height();
                            } else {
                                $headerSecondary = 0;
                            }
                        }
                        nectar_scrollToY($scrollTopDistance - $pageSubMenu + $headerSecondary, 700, 'easeInOutQuint');
                    }, $timeoutVar);
                    e.preventDefault();
                }
                if ($hash == '#top') {
                    if ($(this).parents('#slide-out-widget-area').length > 0) {
                        $('#slide-out-widget-area .slide_out_area_close').trigger('click');
                    }
                }
            });
        }
    }

    function searchResultMasonry() {
        var $searchContainer = $('#search-results'),
            $dividerNum = ($searchContainer.is('[data-layout="masonry-no-sidebar"]')) ? 4 : 3;
        $searchContainer.imagesLoaded(function() {
            $searchContainer.isotope({
                itemSelector: '.result',
                layoutMode: 'packery',
                packery: {
                    columnWidth: $('#search-results').width() / $dividerNum
                }
            });
            $searchContainer.find('article').css('opacity', '1');
        });
        $window.on('resize', function() {
            $searchContainer.isotope({
                layoutMode: 'packery',
                packery: {
                    columnWidth: $('#search-results').width() / $dividerNum
                }
            });
        });
    }

    function searchResultMasonryInit() {
        if ($('body.search-results').length > 0 && $('#search-results article').length > 0 && $('#search-results[data-layout="list-no-sidebar"]').length == 0) {
            searchResultMasonry();
        }
    }

    function portfolioCustomColoring() {
        if ($('.portfolio-items .col .style-3-alt').length > 0 || $('.portfolio-items .col .style-3').length > 0 || $('.portfolio-items .col .style-2').length > 0 || $('.portfolio-items .col .style-5').length > 0) {
            var portfolioColorCss = '';
            $('.portfolio-items .col').each(function() {
                var $titleColor = $(this).attr('data-title-color'),
                    $subTitleColor = $(this).attr('data-subtitle-color');
                if ($titleColor.length > 0) {
                    portfolioColorCss += '.col[data-title-color="' + $titleColor + '"] .vert-center h3, .portfolio-items[data-ps="6"] .col[data-title-color="' + $titleColor + '"] .work-meta h4 { color: ' + $titleColor + '!important; } ';
                    portfolioColorCss += ' .portfolio-items[data-ps="8"] .col[data-title-color="' + $titleColor + '"] .line { background-color: ' + $titleColor + '; }';
                    portfolioColorCss += '.portfolio-items[data-ps="8"] .col[data-title-color="' + $titleColor + '"] .next-arrow line { stroke: ' + $titleColor + '; } ';
                }
                if ($subTitleColor.length > 0) {
                    portfolioColorCss += '.col[data-subtitle-color="' + $subTitleColor + '"] .vert-center p, .portfolio-items[data-ps="6"] .col[data-title-color="' + $titleColor + '"] .work-meta p { color: ' + $subTitleColor + '; } ';
                }
            });
            nectarCreateStyle(portfolioColorCss, 'nectar-portfolio-colors');
        }
    }

    function postMouseEvents() {
        $body.on('mouseover', '.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a', function() {
            $(this).parents('.grav-wrap').find('img').addClass('hovered');
        });
        $body.on('mouseleave', '.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a', function() {
            $(this).parents('.grav-wrap').find('img').removeClass('hovered');
        });
        $body.on('mouseleave', '.container-wrap[data-nav-pos="after_project_2"] #portfolio-nav ul li, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul li', function() {
            $(this).addClass('mouse-leaving');
        });
    }

    function masonryPortfolioInit() {
        $portfolio_containers = [];
        $('.portfolio-items:not(.carousel)').each(function(i) {
            $(this).attr('instance', i);
            $(this).parent().parent().find('div[class^=portfolio-filters]').attr('instance', i);
            if (typeof SalientPortfolio !== 'undefined') {
                $portfolio_containers[i] = new SalientPortfolio($(this), fullWidthContentColumns);
            }
        });
    }

    function updatePerspectiveOrigin() {
        if (nectarDOMInfo.winW > 690) {
            $('.posts-container[data-load-animation="perspective"]').css('perspective-origin', '50% ' + (nectarDOMInfo.scrollTop + nectarDOMInfo.winH) + 'px');
        }
        requestAnimationFrame(updatePerspectiveOrigin);
    }

    function updatePerspectiveOriginInit() {
        if ($('.posts-container[data-load-animation="perspective"]').length > 0) {
            requestAnimationFrame(updatePerspectiveOrigin);
        }
    }

    function blogLoadIn(post_container) {
        if (post_container.attr('data-load-animation') == 'none') {
            post_container.find('.inner-wrap').removeClass('animated');
        } else {
            post_container.find('article').each(function(i) {
                if ($(this).visible(true)) {
                    $(this).delay(110 * i).queue(function(next) {
                        $(this).addClass("animated-in");
                        next();
                    });
                } else {
                    var $that = $(this);
                    var waypoint = new Waypoint({
                        element: $that,
                        handler: function() {
                            setTimeout(function() {
                                $that.addClass("animated-in");
                            }, 80 * $that.attr('data-delay-amount'));
                            waypoint.destroy();
                        },
                        offset: '90%'
                    });
                }
            });
        }
    }

    function masonryBlogInit() {
        $nectarMasonryBlogs = [];
        $('.posts-container').each(function(i) {
            if ($(this).parent().hasClass('masonry') && !$(this).parent().hasClass('auto_meta_overlaid_spaced')) {
                if (typeof NectarMasonryBlog == 'undefined') {
                    return;
                }
                $nectarMasonryBlogs[i] = new NectarMasonryBlog($(this), fullWidthSections, blogLoadIn);
            } else {
                blogLoadIn($(this));
            }
        });
    }

    function stickySidebarInit() {
        if (!$().theiaStickySidebar) {
            return;
        }
        $('#sidebar[data-nectar-ss="true"], #sidebar[data-nectar-ss="1"]').each(function() {
            var $ssExtraTopSpace = 50;
            if ($('#header-outer[data-remove-fixed="0"]').length > 0 && $('body[data-hhun="1"]').length == 0 && $('#header-outer[data-format="left-header"]').length == 0) {
                $ssExtraTopSpace += $headerOuterEl.outerHeight();
                if ($('#header-outer[data-shrink-num][data-header-resize="1"]').length > 0) {
                    var headerPadding2 = parseInt($headerOuterEl.attr('data-padding')) - parseInt($headerOuterEl.attr('data-padding')) / 1.8;
                    $ssExtraTopSpace -= logoShrinkNum;
                    $ssExtraTopSpace -= headerPadding2;
                }
                if ($('body.mobile').length == 0 && $('#header-outer[data-condense="true"]').length > 0) {
                    var $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
                    $ssExtraTopSpace = 50;
                    $ssExtraTopSpace += $headerOuterEl.height() - (parseInt($headerSpan9.position().top) - parseInt($('#header-outer #logo').css('margin-top'))) - parseInt(nectarDOMInfo.secondaryHeaderHeight);
                }
            }
            if ($wpAdminBar.length > 0) {
                $ssExtraTopSpace += $wpAdminBar.outerHeight();
            }
            if ($(this).parents('.wpb_widgetised_column').length > 0) {
                if ($('body.vc_editor').length > 0) {} else {
                    $(this).parents('.wpb_column').theiaStickySidebar({
                        additionalMarginTop: $ssExtraTopSpace,
                        updateSidebarHeight: false
                    });
                }
            } else {
                $(this).theiaStickySidebar({
                    additionalMarginTop: $ssExtraTopSpace,
                    updateSidebarHeight: false
                });
            }
        });
    }

    function sectionDownArrowEvent() {
        var headerPadding2 = headerPadding - headerPadding / 1.8;
        $body.on('click', '.section-down-arrow, .scroll-down-wrap > .minimal-arrow', function() {
            if ($(this).parents('.nectar-box-roll').length > 0) {
                return false;
            }
            var $currentSection = $(this).parents('#page-header-bg'),
                $topDistance = $currentSection.height(),
                $offset = ($currentSection.parents('.first-section').length == 0 || $('body[data-transparent-header="false"]').length > 0) ? $currentSection.offset().top : 0,
                $bodyBorderSize = ($bodyBorderTop.length > 0 && $window.width() > 1000) ? $bodyBorderTop.height() : 0,
                $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0) ? 0 : $('#header-space').height(),
                $materialSecondary = 0;
            if ($('body.material').length > 0 && $headerSecondaryEl.length > 0) {
                $materialSecondary = $headerSecondaryEl.height();
            }
            if ($('body[data-permanent-transparent="1"]').length == 0) {
                if (!$body.hasClass('mobile')) {
                    if ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length == 0) {
                        $('body,html').stop().animate({
                            scrollTop: parseInt($topDistance) + $offset + 2 - $bodyBorderSize * 2
                        }, 1000, 'easeInOutCubic');
                    } else {
                        var $resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(logoShrinkNum) + headerPadding2 * 2;
                        if ($('#header-outer[data-remove-fixed="1"]').length > 0) {
                            $headerNavSpace = 0;
                            $offset = 0;
                        }
                        if ($('body.mobile').length == 0 && $('#header-outer[data-condense="true"]').length > 0) {
                            var $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
                            $headerNavSpace = $headerOuterEl.height() - (parseInt($headerSpan9.position().top) - parseInt($('#header-outer #logo').css('margin-top'))) - parseInt(nectarDOMInfo.secondaryHeaderHeight);
                        }
                        $('body,html').stop().animate({
                            scrollTop: parseInt($topDistance - $headerNavSpace) + $resize + 3 + $offset + $materialSecondary
                        }, 1000, 'easeInOutCubic');
                    }
                } else {
                    var $scrollPos;
                    if ($('#header-outer[data-mobile-fixed="1"]').length > 0) {
                        $scrollPos = parseInt($topDistance) - $headerNavSpace + parseInt($currentSection.offset().top) + 2;
                    } else {
                        $scrollPos = parseInt($topDistance) + parseInt($currentSection.offset().top) + 2;
                    }
                    $('body,html').stop().animate({
                        scrollTop: $scrollPos - $bodyBorderSize * 2
                    }, 1000, 'easeInOutCubic');
                }
            } else {
                $('body,html').stop().animate({
                    scrollTop: parseInt($topDistance) + parseInt($currentSection.offset().top) + 2 - $bodyBorderSize * 2
                }, 1000, 'easeInOutCubic');
            }
            return false;
        });
    }

    function nectarLiquidBGFP() {
        $('.nectar-liquid-bg').removeClass('animated-in');
        for (var k = 0; k < $liquidBG_EL.length; k++) {
            if ($liquidBG_EL[k].animationType == 'displace-filter-fade' && $($liquidBG_EL[k].canvasContainer).parents('.fp-section.active').length > 0) {
                if ($($liquidBG_EL[k].canvasContainer).find('.image-added-to-stage').length == 0) {
                    $liquidBG_EL[k].imgContainer.addChild($liquidBG_EL[k].bg);
                }
                $($liquidBG_EL[k].canvasContainer).find('.nectar-liquid-bg').addClass('image-added-to-stage');
                $liquidBG_EL[k].animateProps($liquidBG_EL[k]);
            }
        }
    }

    function nectarFullPageInit() {
        if ($('#nectar_fullscreen_rows').length > 0 && $().fullpage) {
            $fullscreenSelector = (window.vc_iframe) ? '.vc_element.vc_vc_row.active ' : '.wpb_row.active ';
            $nectarFullPage = new NectarFullScreenRows(waypoints, $mouseParallaxScenes, nectarLiquidBGFP, nectarDOMInfo, responsiveTooltips, $standAnimatedColTimeout, $svgIcons);
        }
    }

    function crossBrowserAdjust() {
        if (nectarDOMInfo.usingMobileBrowser) {
            $body.addClass('using-mobile-browser');
        }
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("Edge/");
        if (msie > 0) {
            $body.addClass('msie');
        }
        if ($('html.js').length == 0) {
            $('html').removeClass('no-js').addClass('js');
        }
        $('code').find('br').remove();
        $('.wpcf7-form p:has(input[type=submit])').css('padding-bottom', '0px');
        $('.full-width-content .wpcf7-submit').on('click', function() {
            setTimeout(function() {
                fullWidthContentColumns();
            }, 1000);
            setTimeout(function() {
                fullWidthContentColumns();
            }, 2000);
        });
        $('.gform_body').on('click', function() {
            setTimeout(function() {
                fullWidthContentColumns();
            }, 200);
        });
        $('.pum.pum-theme-salient-page-builder-optimized button.pum-close').wrapInner('<span />');
        if ($('#nectar_fullscreen_rows').length > 0 && $('.pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12').length > 0) {
            $('.pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12').unwrap();
        }
        if ($('.single .blog_next_prev_buttons').length > 0) {
            $('.container-wrap').css('padding-bottom', 0);
        }
        $('.full-width-section').each(function() {
            $(this).find('> .span_12 > div.col_last').last().css('margin-bottom', '0');
        });
        $('.full-width-content .col.boxed').removeClass('boxed');
        $('.wpb_column.neg-marg').parents('.wpb_row').css('z-index', '110');
    }

    function vcMobileColumns() {
        $('.wpb_row').each(function() {
            if (typeof $(this).find('.span_12').offset() != 'undefined') {
                $(this).find('[class*="vc_col-"]').each(function() {
                    var $firstChildOffset = $(this).parents('.span_12').offset().left;
                    $(this).removeClass('no-left-margin');
                    if ($(this).offset().left < $firstChildOffset + 27) {
                        $(this).addClass('no-left-margin');
                    } else {
                        $(this).removeClass('no-left-margin');
                    }
                });
            }
        });
    }

    function vcMobileColumnsInit() {
        var $winDOMWidth = nectarDOMInfo.winW,
            $winDOMHeight = nectarDOMInfo.winH,
            $orientChangeTrack = 0;
        if ($body.is('[data-flex-cols="true"]')) {
            return;
        }
        if ($('[class*="vc_col-xs-"], [class*="vc_col-md-"], [class*="vc_col-lg-"]').length > 0) {
            vcMobileColumns();
            if (!nectarDOMInfo.usingMobileBrowser) {
                $window.on('resize', vcMobileColumns);
            } else {
                window.addEventListener("orientationchange", function() {
                    $orientChangeTrack = 1;
                });
                $window.on('resize', function() {
                    if (($window.width() != $winDOMWidth && $window.height != $winDOMHeight) || $orientChangeTrack === 1) {
                        vcMobileColumns();
                        $winDOMWidth = nectarDOMInfo.winW;
                        $winDOMHeight = nectarDOMInfo.winH;
                        $orientChangeTrack = 0;
                    }
                });
            }
        }
    }

    function select2Init() {
        $('select:not(.state_select):not(.country_select):not(.comment-form-rating #rating):not(#tribe-bar-form select):not(.woocommerce-currency-switcher)').each(function() {
            var $minimumToSearch = (nectarDOMInfo.winW > 690) ? 7 : 200;
            if ($(this).parents('#buddypress').length == 0) {
                if ($(this).parents('.woocommerce-ordering').length == 0) {
                    $(this).select2({
                        minimumResultsForSearch: $minimumToSearch,
                        width: '100%'
                    });
                } else {
                    $(this).select2({
                        minimumResultsForSearch: $minimumToSearch,
                        dropdownAutoWidth: true
                    });
                }
            }
        });
    }

    function fancySelectStyling() {
        if ($('body[data-fancy-form-rcs="1"]').length > 0) {
            $('select:not(.comment-form-rating #rating)').each(function() {
                var $selector;
                if ($(this).parents('.wpcf7-form-control-wrap').length > 0) {
                    if ($(this).parents('.wpcf7-form-control-wrap').find('.select2-container').length > 0) {
                        $selector = $($(this).prev('.select2-container'));
                    } else {
                        $selector = $(this);
                    }
                    if ($selector.parents('.wpcf7-form-control-wrap').parent().find('label').length == 1) {
                        $selector.parents('.wpcf7-form-control-wrap').parent().wrapInner('<div class="fancy-select-wrap" />');
                    } else {
                        $selector.wrap('<div class="fancy-select-wrap" />');
                    }
                } else {
                    if ($(this).prev('.select2-container').length > 0) {
                        $selector = $(this).prev('.select2-container');
                    } else {
                        $selector = $(this);
                    }
                    if ($(this).parents('#buddypress').length == 0 && $(this).parents('.widget_categories').length == 0) {
                        if ($selector.prev('label').length == 1) {
                            $selector.prev('label').andSelf().wrapAll('<div class="fancy-select-wrap" />');
                        } else if ($selector.next('label').length == 1) {
                            $selector.next('label').andSelf().wrapAll('<div class="fancy-select-wrap" />');
                        } else {
                            $selector.wrap('<div class="fancy-select-wrap" />');
                        }
                    }
                }
            });
            select2Init();
        }
    }

    function bfCacheAssist() {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
            window.onpageshow = function(event) {
                if (event.persisted) {
                    $('.nectar-video-wrap, .nectar-slider-wrap .swiper-slide .video-wrap').each(function() {
                        if ($(this).find('video').length > 0) {
                            $(this).find('video')[0].play();
                        }
                    });
                    if ($('body.material-ocm-open').length > 0) {
                        $('body > .slide_out_area_close').addClass('non-human-allowed').trigger('click');
                        setTimeout(function() {
                            $('body > .slide_out_area_close').removeClass('non-human-allowed');
                        }, 100);
                    } else if ($('#slide-out-widget-area.slide-out-from-right-hover.open').length > 0 && navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                        OCM_mobileSlideOutRightHoverCloseCheck();
                    } else if ($('#slide-out-widget-area.fullscreen.open').length > 0 || $('#slide-out-widget-area.fullscreen-alt.open').length > 0 || $('#slide-out-widget-area.slide-out-from-right.open').length > 0) {
                        $('#slide-out-widget-area .slide_out_area_close').addClass('non-human-allowed');
                        $('.slide-out-widget-area-toggle:not(.std-menu) a.open').addClass('non-human-allowed').trigger('click');
                        setTimeout(function() {
                            $('#slide-out-widget-area .slide_out_area_close').removeClass('non-human-allowed');
                        }, 100);
                    }
                }
            };
        }
    }

    function addRowCtrls() {
        $('.wpb_row').removeClass('only-ns');
        $('.nectar-slider-wrap[data-full-width="true"], .page-submenu, .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), .blog-fullwidth-wrap').parents('.wpb_row').addClass('only-ns');
        $('body.vc_editor.compose-mode .wpb_row .vc_vc_column > .wpb_column > .vc_column-inner').each(function() {
            if ($(this).find('> .vc_element-container > div').length > 0) {
                if ($(this).find('> .vc_element-container > div:first-child').is('.vc_vc_row_inner')) {
                    $(this).find('> .vc_element-container > div:first-child').addClass('first-inner-row-el');
                } else {
                    $(this).find('> .vc_element-container > div:first-child').removeClass('first-inner-row-el');
                }
            }
        });
    }

    function convertFrontEndPadding() {
        $('.vc_element > .wpb_column[class*="padding-"][class*="-percent"]').each(function() {
            var $elPaddingPercent = 4;
            var elclassName = this.className.match(/padding-\d+/);
            if (elclassName) {
                $elPaddingPercent = elclassName[0].match(/\d+/);
                if ($elPaddingPercent) {
                    $elPaddingPercent = $elPaddingPercent[0] / 100;
                } else {
                    $elPaddingPercent = 0;
                }
            }
            if ($elPaddingPercent) {
                var $parentRowWidth = $(this).parents('.span_12').width();
                if ($(this).is('[data-padding-pos="all"]')) {
                    $(this).css('padding', $parentRowWidth * $elPaddingPercent);
                } else if ($(this).is('[data-padding-pos="top"]')) {
                    $(this).css('padding-top', $parentRowWidth * $elPaddingPercent);
                } else if ($(this).is('[data-padding-pos="bottom"]')) {
                    $(this).css('padding-bottom', $parentRowWidth * $elPaddingPercent);
                } else if ($(this).is('[data-padding-pos="left"]')) {
                    $(this).css('padding-left', $parentRowWidth * $elPaddingPercent);
                } else if ($(this).is('[data-padding-pos="right"]')) {
                    $(this).css('padding-right', $parentRowWidth * $elPaddingPercent);
                } else if ($(this).is('[data-padding-pos="top-bottom"]')) {
                    $(this).css({
                        'padding-top': $parentRowWidth * $elPaddingPercent,
                        'padding-bottom': $parentRowWidth * $elPaddingPercent,
                    });
                } else if ($(this).is('[data-padding-pos="top-right"]')) {
                    $(this).css({
                        'padding-top': $parentRowWidth * $elPaddingPercent,
                        'padding-right': $parentRowWidth * $elPaddingPercent,
                    });
                } else if ($(this).is('[data-padding-pos="bottom-right"]')) {
                    $(this).css({
                        'padding-right': $parentRowWidth * $elPaddingPercent,
                        'padding-bottom': $parentRowWidth * $elPaddingPercent,
                    });
                } else if ($(this).is('[data-padding-pos="bottom-left"]')) {
                    $(this).css({
                        'padding-left': $parentRowWidth * $elPaddingPercent,
                        'padding-bottom': $parentRowWidth * $elPaddingPercent,
                    });
                } else if ($(this).is('[data-padding-pos="left-right"]')) {
                    $(this).css({
                        'padding-left': $parentRowWidth * $elPaddingPercent,
                        'padding-right': $parentRowWidth * $elPaddingPercent,
                    });
                }
            }
        });
        $('.wpb_row[class*="vc_custom_"]').each(function() {
            $(this).parent().addClass('no-bottom-margin');
        });
    }

    function wpBakeryFrontendInit() {
        setTimeout(function() {
            if ($('body.compose-mode').length > 0) {
                $('.container-wrap').addClass('visible-editor-controls');
            }
            if (nectarDOMInfo.usingFrontEndEditor) {
                addRowCtrls();
                if (!$body.is('[data-flex-cols="true"]')) {
                    convertFrontEndPadding();
                    $window.smartresize(convertFrontEndPadding);
                }
            }
        }, 200);
        $window.on('vc_reload', function() {
            addRowCtrls();
            columnBGColors();
            coloredButtons();
            twentytwentyInit();
            parallaxRowsBGCals();
            flexsliderInit();
            accordionInit();
            ulCheckmarks();
            nectarFancyUlIcons();
            nectarFancyBoxHover();
            oneFourthClasses();
            carouselfGrabbingClass();
            nectarPostGridInit();
            splitLineHeadingInit();
            nectarVideoLightbox();
            nectarKeyframeAssist();
            nectarLazyImageLoading();
            if ($('.carousel').length > 0) {
                standardCarouselInit();
                clientsCarouselInit();
                carouselHeightCalcs();
            }
            if ($('.owl-carousel').length > 0) {
                $('.owl-carousel').each(function() {
                    $(this).trigger('destroy.owl.carousel').removeClass('owl-loaded');
                    $(this).find('.owl-stage-outer .owl-stage > *').unwrap();
                    $(this).find('.owl-stage-outer > *').unwrap();
                    $(this).find('.owl-item > *').unwrap();
                    $(this).find('.owl-dots').remove();
                    $(this).find('.owl-nav').remove();
                });
                owlCarouselInit();
            }
            if ($('.nectar_cascading_images').length > 0) {
                imagesLoaded($('.nectar_cascading_images'), function() {
                    cascadingImageBGSizing();
                });
            }
            fullWidthSections();
            fwsClasses();
            recentPostsInit();
            fullWidthRowPaddingAdjust();
            if ($flickitySliders.length > 0) {
                for (var i = 0; i < $flickitySliders.length; i++) {
                    $flickitySliders[i].reloadCells();
                    $flickitySliders[i].off('scroll.flickity');
                    $flickitySliders[i].off('dragStart.flickity');
                    $flickitySliders[i].off('dragEnd.flickity');
                }
            }
            flickityLazyInit();
            setTimeout(function() {
                flickityInit();
                if ($flickitySliders.length > 0) {
                    for (var i = 0; i < $flickitySliders.length; i++) {
                        $flickitySliders[i].reloadCells();
                        $flickitySliders[i].resize();
                    }
                }
            }, 100);
            if ($wooFlickityCarousels.length > 0) {
                for (var i = 0; i < $wooFlickityCarousels.length; i++) {
                    $wooFlickityCarousels[i].flickity('reloadCells');
                    $wooFlickityCarousels[i].off('scroll.flickity');
                    $wooFlickityCarousels[i].off('dragStart.flickity');
                    $wooFlickityCarousels[i].off('dragEnd.flickity');
                }
            }
            setTimeout(function() {
                if ($('.nectar-woo-flickity').length > 0) {
                    productCarouselInit();
                }
                if ($wooFlickityCarousels.length > 0) {
                    for (var i = 0; i < $wooFlickityCarousels.length; i++) {
                        $wooFlickityCarousels[i].flickity('reloadCells');
                        $wooFlickityCarousels[i].flickity('resize');
                    }
                }
            }, 100);
            nectarTestimonialSliders();
            for (var i = 0; i < $testimonialSliders.length; i++) {
                if ($testimonialSliders[i].type == 'multiple_visible' || $testimonialSliders[i].type == 'multiple_visible_minimal') {
                    $testimonialSliders[i].flickityEl.flickity('reloadCells');
                    $testimonialSliders[i].flickityEl.off('select.flickity');
                    nectarTestimonialSliders();
                    $testimonialSliders[i].flickityEl.resize();
                }
                $testimonialSliders[i].testimonialSliderHeight();
            }
            nectarTestimonialSlidersEvents();
            pricingTableHeight();
            nectarIconMatchColoring();
            lightBoxInit();
            imageWithHotspotEvents();
            largeIconHover();
            nectarBoxRollInit();
            midnightInit();
            responsiveVideoIframesInit();
            responsiveVideoIframes();
            fullWidthContentColumns();
            setTimeout(fullWidthContentColumns, 1000);
            videoBGInit();
            vcFullHeightRowInit();
            $window.off('scroll.parallaxSections').off('resize.parallaxSections');
            parallaxScrollInit();
            masonryBlogInit();
            masonryPortfolioInit();
            if ($portfolio_containers.length > 0) {
                for (var i = 0; i < $portfolio_containers.length; i++) {
                    $portfolio_containers[i].portfolioAccentColor();
                }
            }
            parallaxItemHoverEffect();
            fsProjectSliderInit();
            setTimeout(function() {
                if ($('.nectar_fullscreen_zoom_recent_projects').length > 0) {
                    if ($fsProjectSliderArr.length > 0) {
                        for (var i = 0; i < $fsProjectSliderArr.length; i++) {
                            $fsProjectSliderArr[i].sliderCalcs();
                        }
                    }
                }
            }, 300);
            $window.unbind('.infscr');
            infiniteScrollInit();
            mouseParallaxInit();
            $('.nectar-video-wrap').each(function() {
                if ($(this).find('video').length > 0) {
                    $(this).find('video').css('visibility', 'visible');
                }
            });
            $('.wpb_column[data-t-w-inherits]').each(function() {
                if ($(this).is('[data-t-w-inherits="small_desktop"]')) {
                    $(this).parent().addClass('inherits-s-desktop-col');
                } else {
                    $(this).parent().removeClass('inherits-s-desktop-col');
                }
            });
            if ($('#nectar_fullscreen_rows').length > 0) {
                if ($('#nectar_fullscreen_rows > .vc_element').length == 0) {
                    $('#nectar_fullscreen_rows').prepend('<div class="vc_element empty_placeholder" />');
                }
                if ($('#nectar_fullscreen_rows > .vc_element:not(.empty_placeholder)').length > 0) {
                    $('#nectar_fullscreen_rows >.vc_element.empty_placeholder').remove();
                }
                $.fn.fullpage.destroy('all');
                nectarFullPageInit();
                var nectarFPOffsets = [{
                    el: '',
                    offset: 0
                }];
                $('#nectar_fullscreen_rows > div.vc_element').each(function(i) {
                    nectarFPOffsets[i] = {
                        el: $(this),
                        offset: $(this).offset().top
                    };
                });
                if ($('#nectar_fullscreen_rows > div.vc_element').length === 1) {
                    $('#nectar_fullscreen_rows').css({
                        'transform': 'translate3d(0,0,0)'
                    });
                }
                $body.scrollTo(0, 0);
            } else {
                if ($('body .main-content > .row > .vc_element:first > .wpb_row[class*="full-width-"]').length > 0 || $('body .main-content > .row > .vc_element:first .nectar-slider-wrap[data-full-width="true"]').length > 0) {
                    $('.container-wrap').css({
                        'padding-top': '0',
                        'margin-top': '0'
                    });
                } else {
                    $('.container-wrap').css({
                        'padding-top': '40px'
                    });
                }
            }
            $svgIcons = [];
            $('.svg-icon-holder').removeClass('animated-in').removeClass('bound');
            if ($('.vc_nectar_gmap').length > 0) {
                setTimeout(function() {
                    if (typeof google === 'object' && typeof google.maps === 'object') {
                        window.mapAPI_Loaded();
                    } else {
                        if (window.nectarLove.mapApiKey.length > 0) {
                            $.getScript('https://maps.google.com/maps/api/js?sensor=false&key=' + window.nectarLove.mapApiKey + '&callback=mapAPI_Loaded');
                        }
                    }
                }, 100);
            }
            stickySidebarInit();
            if (typeof window.Waypoint != 'undefined') {
                Waypoint.destroyAll();
                waypoints();
            }
        });
    }

    function pageTransitionInit() {
        if ($('body[data-ajax-transitions="true"]').length > 0 && $('#ajax-loading-screen[data-method="standard"]').length > 0) {
            $('html').addClass('page-trans-loaded');
            if ($('#ajax-loading-screen[data-effect="standard"]').length > 0) {
                if ($('.nectar-particles').length == 0) {
                    $loadingScreenEl.transition({
                        'opacity': 0
                    }, 500, function() {
                        $(this).css({
                            'display': 'none'
                        });
                    });
                    $('#ajax-loading-screen .loading-icon').transition({
                        'opacity': 0
                    }, 500);
                }
                if ($('.nectar-box-roll').length == 0) {
                    setTimeout(function() {
                        waypoints();
                    }, 550);
                }
            } else {
                if ($('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0) {
                    setTimeout(function() {
                        $loadingScreenEl.addClass('loaded');
                    }, 60);
                }
                if ($('#page-header-wrap #page-header-bg[data-animate-in-effect="zoom-out"] .nectar-video-wrap').length == 0) {
                    setTimeout(function() {
                        $('#ajax-loading-screen:not(.loaded)').addClass('loaded');
                        setTimeout(function() {
                            $loadingScreenEl.addClass('hidden');
                        }, 1000);
                    }, 150);
                }
                if ($('.nectar-box-roll').length == 0 && $('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0) {
                    setTimeout(function() {
                        waypoints();
                    }, 750);
                } else if ($('.nectar-box-roll').length == 0) setTimeout(function() {
                    waypoints();
                }, 350);
            }
            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                window.onunload = function() {
                    $loadingScreenEl.stop().transition({
                        'opacity': 0
                    }, 800, function() {
                        $(this).css({
                            'display': 'none'
                        });
                    });
                    $('#ajax-loading-screen .loading-icon').transition({
                        'opacity': 0
                    }, 600);
                };
                window.onpageshow = function(event) {
                    if (event.persisted) {
                        $loadingScreenEl.stop().transition({
                            'opacity': 0
                        }, 800, function() {
                            $(this).css({
                                'display': 'none'
                            });
                        });
                        $('#ajax-loading-screen .loading-icon').transition({
                            'opacity': 0
                        }, 600);
                    }
                };
            } else if (navigator.userAgent.indexOf('Firefox') != -1) {
                window.onunload = function() {};
            }
            $('.portfolio-loading, .nectar-slider-loading .loading-icon').remove();
            if ($('#ajax-loading-screen[data-disable-fade-on-click="1"]').length == 0) {
                if ($('body.using-mobile-browser #ajax-loading-screen[data-method="standard"][data-disable-mobile="1"]').length == 0) {
                    var ignore_onbeforeunload = false;
                    $('a[href^="mailto"], a[href^="tel"]').on('click', function() {
                        ignore_onbeforeunload = true;
                    });
                    window.addEventListener('beforeunload', function() {
                        if (!ignore_onbeforeunload) {
                            $loadingScreenEl.addClass('set-to-fade');
                            transitionPage();
                        }
                        ignore_onbeforeunload = false;
                    });
                }
            }
        } else {
            if ($('.nectar-box-roll').length == 0 && !nectarDOMInfo.usingFrontEndEditor) {
                setTimeout(function() {
                    waypoints();
                }, 100);
            }
        }

        function transitionPage() {
            if ($('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0) {
                $loadingScreenEl.removeClass('loaded');
                $loadingScreenEl.addClass('in-from-right');
                setTimeout(function() {
                    $loadingScreenEl.addClass('loaded');
                }, 30);
            } else {
                if ($('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0) {
                    $loadingScreenEl.css('opacity', '0').css('display', 'block').transition({
                        'opacity': '1'
                    }, 450);
                } else {
                    $loadingScreenEl.show().transition({
                        'opacity': '1'
                    }, 450);
                }
            }
        }
    }
    jQuery(document).ready(function($) {
        nectarDOMInfo.init();
        nectarBoxRollInit();
        nectarFullPageInit();
        nectarLazyImageLoading();
        initSF();
        navigationSearchInit();
        centeredNavBottomBarInit();
        centeredLogoHeaderInit();
        headerNavPreInit();
        headerNavScrollInit();
        headerNavOffsetInit();
        salientPageBuilderElInit();
        columnBGColors();
        vcMobileColumnsInit();
        fullWidthSections();
        fwsClasses();
        fwCarouselLinkFix();
        fullWidthSectionsPreInit();
        firstFWSection();
        parallaxScrollInit();
        parallaxRowsBGCals();
        fullWidthRowPaddingAdjust();
        fullWidthContentColumns();
        oneFourthClasses();
        fixIeFlexbox();
        vcFullHeightRowInit();
        lightBoxInit();
        audioVideoVis();
        responsiveVideoIframesInit();
        responsiveVideoIframes();
        videoBGInit();
        blogSingle();
        mobileNavMegamenuCorrect();
        materialSkinOCM_Init();
        OCM_dropdownMarkup();
        OCM_dropdownIconPos();
        clickToggleSubmenus();
        OCM_init();
        pageHeaderInit();
        footerRevealInit();
        wooCommerceEvents();
        fancySelectStyling();
        infiniteScrollInit();
        scrollToTopInit();
        animatedAnchorLinks();
        updatePerspectiveOriginInit();
        sectionDownArrowEvent();
        crossBrowserAdjust();
        bfCacheAssist();
        wpBakeryFrontendInit();
        pageTransitionInit();
        $window.off('smartresize.srInit');
        $window.on('smartresize.srInit', smartResizeInit);
        $window.off('resize.srInit');
        $window.on('resize.srInit', resizeInit);
        $window.on('load', function() {
            if ($(window).scrollTop() == 0) {
                headerSpace();
            }
            $('video').css('visibility', 'visible');
            pageLoadHashInit();
            fullWidthContentColumns();
            parallaxRowsBGCals();
            resizeVideoToCover();
        });
    });
}(window.jQuery, window, document));

(function(d) {
    var m = "left",
        l = "right",
        c = "up",
        s = "down",
        b = "in",
        t = "out",
        j = "none",
        o = "auto",
        i = "swipe",
        p = "pinch",
        u = "tap",
        x = "horizontal",
        q = "vertical",
        g = "all",
        e = "start",
        h = "move",
        f = "end",
        n = "cancel",
        a = "ontouchstart" in window,
        v = "TouchSwipe";
    var k = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: 25,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "button, input, select, textarea, a, .noSwipe"
    };
    d.fn.swipe = function(A) {
        var z = d(this),
            y = z.data(v);
        if (y && typeof A === "string") {
            if (y[A]) {
                return y[A].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                d.error("Method " + A + " does not exist on jQuery.swipe")
            }
        } else {
            if (!y && (typeof A === "object" || !A)) {
                return r.apply(this, arguments)
            }
        }
        return z
    };
    d.fn.swipe.defaults = k;
    d.fn.swipe.phases = {
        PHASE_START: e,
        PHASE_MOVE: h,
        PHASE_END: f,
        PHASE_CANCEL: n
    };
    d.fn.swipe.directions = {
        LEFT: m,
        RIGHT: l,
        UP: c,
        DOWN: s,
        IN: b,
        OUT: t
    };
    d.fn.swipe.pageScroll = {
        NONE: j,
        HORIZONTAL: x,
        VERTICAL: q,
        AUTO: o
    };
    d.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: g
    };

    function r(y) {
        if (y && (y.allowPageScroll === undefined && (y.swipe !== undefined || y.swipeStatus !== undefined))) {
            y.allowPageScroll = j
        }
        if (y.click !== undefined && y.tap === undefined) {
            y.tap = y.click
        }
        if (!y) {
            y = {}
        }
        y = d.extend({}, d.fn.swipe.defaults, y);
        return this.each(function() {
            var A = d(this);
            var z = A.data(v);
            if (!z) {
                z = new w(this, y);
                A.data(v, z)
            }
        })
    }

    function w(S, ag) {
        var aJ = (a || !ag.fallbackToMouseEvents),
            az = aJ ? "touchstart" : "mousedown",
            U = aJ ? "touchmove" : "mousemove",
            av = aJ ? "touchend" : "mouseup",
            D = aJ ? null : "mouseleave",
            R = "touchcancel";
        var ad = 0,
            N = null,
            ah = 0,
            aF = 0,
            A = 0,
            aj = 1,
            aA = 0,
            aN = 0,
            Z = null;
        var H = d(S);
        var O = "start";
        var aI = 0;
        var ai = null;
        var I = 0,
            Y = 0,
            aD = 0,
            aP = 0;
        try {
            H.bind(az, at);
            H.bind(R, L)
        } catch (aG) {
            d.error("events not supported " + az + "," + R + " on jQuery.swipe")
        }
        this.enable = function() {
            H.bind(az, at);
            H.bind(R, L);
            return H
        };
        this.disable = function() {
            Q();
            return H
        };
        this.destroy = function() {
            Q();
            H.data(v, null);
            return H
        };
        this.option = function(aR, aQ) {
            if (ag[aR] !== undefined) {
                if (aQ === undefined) {
                    return ag[aR]
                } else {
                    ag[aR] = aQ
                }
            } else {
                d.error("Option " + aR + " does not exist on jQuery.swipe.options")
            }
        };

        function at(aS) {
            if (X()) {
                return
            }
            if (d(aS.target).closest(ag.excludedElements, H).length > 0) {
                return
            }
            var aT = aS.originalEvent ? aS.originalEvent : aS;
            var aR, aQ = a ? aT.touches[0] : aT;
            O = e;
            if (a) {
                aI = aT.touches.length
            } else {
                aS.preventDefault()
            }
            ad = 0;
            N = null;
            aN = null;
            ah = 0;
            aF = 0;
            A = 0;
            aj = 1;
            aA = 0;
            ai = T();
            Z = aE();
            z();
            if (!a || (aI === ag.fingers || ag.fingers === g) || ap()) {
                aO(0, aQ);
                I = B();
                if (aI == 2) {
                    aO(1, aT.touches[1]);
                    aF = A = aa(ai[0].start, ai[1].start)
                }
                if (ag.swipeStatus || ag.pinchStatus) {
                    aR = aH(aT, O)
                }
            } else {
                aR = false
            }
            if (aR === false) {
                O = n;
                aH(aT, O);
                return aR
            } else {
                ak(true)
            }
        }

        function P(aT) {
            var aW = aT.originalEvent ? aT.originalEvent : aT;
            if (O === f || O === n || af()) {
                return
            }
            var aS, aR = a ? aW.touches[0] : aW;
            var aU = V(aR);
            Y = B();
            if (a) {
                aI = aW.touches.length
            }
            O = h;
            if (aI == 2) {
                if (aF == 0) {
                    aO(1, aW.touches[1]);
                    aF = A = aa(ai[0].start, ai[1].start)
                } else {
                    V(aW.touches[1]);
                    A = aa(ai[0].end, ai[1].end);
                    aN = ao(ai[0].end, ai[1].end)
                }
                aj = y(aF, A);
                aA = Math.abs(aF - A)
            }
            if ((aI === ag.fingers || ag.fingers === g) || !a || ap()) {
                N = ar(aU.start, aU.end);
                C(aT, N);
                ad = G(aU.start, aU.end);
                ah = K();
                aK(N, ad);
                if (ag.swipeStatus || ag.pinchStatus) {
                    aS = aH(aW, O)
                }
                if (!ag.triggerOnTouchEnd || ag.triggerOnTouchLeave) {
                    var aQ = true;
                    if (ag.triggerOnTouchLeave) {
                        var aV = au(this);
                        aQ = aC(aU.end, aV)
                    }
                    if (!ag.triggerOnTouchEnd && aQ) {
                        O = aM(h)
                    } else {
                        if (ag.triggerOnTouchLeave && !aQ) {
                            O = aM(f)
                        }
                    }
                    if (O == n || O == f) {
                        aH(aW, O)
                    }
                }
            } else {
                O = n;
                aH(aW, O)
            }
            if (aS === false) {
                O = n;
                aH(aW, O)
            }
        }

        function ab(aS) {
            var aU = aS.originalEvent;
            if (a) {
                if (aU.touches.length > 0) {
                    aw();
                    return true
                }
            }
            if (af()) {
                aI = aP
            }
            aS.preventDefault();
            Y = B();
            if (ag.triggerOnTouchEnd || (ag.triggerOnTouchEnd == false && O === h)) {
                O = f;
                var aR = ((aI === ag.fingers || ag.fingers === g) || !a);
                var aQ = ai[0].end.x !== 0;
                var aT = aR && aQ && (an() || aB());
                if (aT) {
                    aH(aU, O)
                } else {
                    O = n;
                    aH(aU, O)
                }
            } else {
                if (!ag.triggerOnTouchEnd && ay()) {
                    O = f;
                    am(aU, O, u)
                } else {
                    if (O === h) {
                        O = n;
                        aH(aU, O)
                    }
                }
            }
            ak(false)
        }

        function L() {
            aI = 0;
            Y = 0;
            I = 0;
            aF = 0;
            A = 0;
            aj = 1;
            z();
            ak(false)
        }

        function W(aQ) {
            var aR = aQ.originalEvent;
            if (ag.triggerOnTouchLeave) {
                O = aM(f);
                aH(aR, O)
            }
        }

        function Q() {
            H.unbind(az, at);
            H.unbind(R, L);
            H.unbind(U, P);
            H.unbind(av, ab);
            if (D) {
                H.unbind(D, W)
            }
            ak(false)
        }

        function aM(aT) {
            var aS = aT;
            var aR = aq();
            var aQ = ae();
            if (!aR) {
                aS = n
            } else {
                if (aQ && aT == h && (!ag.triggerOnTouchEnd || ag.triggerOnTouchLeave)) {
                    aS = f
                } else {
                    if (!aQ && aT == f && ag.triggerOnTouchLeave) {
                        aS = n
                    }
                }
            }
            return aS
        }

        function aH(aS, aQ) {
            var aR = undefined;
            if (ac()) {
                aR = am(aS, aQ, i)
            }
            if (ap() && aR !== false) {
                aR = am(aS, aQ, p)
            }
            if (ay() && aR !== false) {
                aR = am(aS, aQ, u)
            }
            if (aQ === n) {
                L(aS)
            }
            if (aQ === f) {
                if (a) {
                    if (aS.touches.length == 0) {
                        L(aS)
                    }
                } else {
                    L(aS)
                }
            }
            return aR
        }

        function am(aT, aQ, aS) {
            var aR = undefined;
            if (aS == i) {
                H.trigger("swipeStatus", [aQ, N || null, ad || 0, ah || 0, aI]);
                if (ag.swipeStatus) {
                    aR = ag.swipeStatus.call(H, aT, aQ, N || null, ad || 0, ah || 0, aI);
                    if (aR === false) {
                        return false
                    }
                }
                if (aQ == f && aB()) {
                    H.trigger("swipe", [N, ad, ah, aI]);
                    if (ag.swipe) {
                        aR = ag.swipe.call(H, aT, N, ad, ah, aI);
                        if (aR === false) {
                            return false
                        }
                    }
                    switch (N) {
                        case m:
                            H.trigger("swipeLeft", [N, ad, ah, aI]);
                            if (ag.swipeLeft) {
                                aR = ag.swipeLeft.call(H, aT, N, ad, ah, aI)
                            }
                            break;
                        case l:
                            H.trigger("swipeRight", [N, ad, ah, aI]);
                            if (ag.swipeRight) {
                                aR = ag.swipeRight.call(H, aT, N, ad, ah, aI)
                            }
                            break;
                        case c:
                            H.trigger("swipeUp", [N, ad, ah, aI]);
                            if (ag.swipeUp) {
                                aR = ag.swipeUp.call(H, aT, N, ad, ah, aI)
                            }
                            break;
                        case s:
                            H.trigger("swipeDown", [N, ad, ah, aI]);
                            if (ag.swipeDown) {
                                aR = ag.swipeDown.call(H, aT, N, ad, ah, aI)
                            }
                            break
                    }
                }
            }
            if (aS == p) {
                H.trigger("pinchStatus", [aQ, aN || null, aA || 0, ah || 0, aI, aj]);
                if (ag.pinchStatus) {
                    aR = ag.pinchStatus.call(H, aT, aQ, aN || null, aA || 0, ah || 0, aI, aj);
                    if (aR === false) {
                        return false
                    }
                }
                if (aQ == f && an()) {
                    switch (aN) {
                        case b:
                            H.trigger("pinchIn", [aN || null, aA || 0, ah || 0, aI, aj]);
                            if (ag.pinchIn) {
                                aR = ag.pinchIn.call(H, aT, aN || null, aA || 0, ah || 0, aI, aj)
                            }
                            break;
                        case t:
                            H.trigger("pinchOut", [aN || null, aA || 0, ah || 0, aI, aj]);
                            if (ag.pinchOut) {
                                aR = ag.pinchOut.call(H, aT, aN || null, aA || 0, ah || 0, aI, aj)
                            }
                            break
                    }
                }
            }
            if (aS == u) {
                if (aQ === n || aQ === f) {
                    if ((aI === 1 || !a) && (isNaN(ad) || ad === 0)) {
                        H.trigger("tap", [aT.target]);
                        if (ag.tap) {
                            aR = ag.tap.call(H, aT, aT.target)
                        }
                    }
                }
            }
            return aR
        }

        function ae() {
            var aQ = true;
            if (ag.threshold !== null) {
                aQ = ad >= ag.threshold
            }
            if (aQ && ag.cancelThreshold !== null) {
                aQ = (M(N) - ad) < ag.cancelThreshold
            }
            return aQ
        }

        function al() {
            if (ag.pinchThreshold !== null) {
                return aA >= ag.pinchThreshold
            }
            return true
        }

        function aq() {
            var aQ;
            if (ag.maxTimeThreshold) {
                if (ah >= ag.maxTimeThreshold) {
                    aQ = false
                } else {
                    aQ = true
                }
            } else {
                aQ = true
            }
            return aQ
        }

        function C(aQ, aR) {
            if (ag.allowPageScroll === j || ap()) {
                aQ.preventDefault()
            } else {
                var aS = ag.allowPageScroll === o;
                switch (aR) {
                    case m:
                        if ((ag.swipeLeft && aS) || (!aS && ag.allowPageScroll != x)) {
                            aQ.preventDefault()
                        }
                        break;
                    case l:
                        if ((ag.swipeRight && aS) || (!aS && ag.allowPageScroll != x)) {
                            aQ.preventDefault()
                        }
                        break;
                    case c:
                        if ((ag.swipeUp && aS) || (!aS && ag.allowPageScroll != q)) {
                            aQ.preventDefault()
                        }
                        break;
                    case s:
                        if ((ag.swipeDown && aS) || (!aS && ag.allowPageScroll != q)) {
                            aQ.preventDefault()
                        }
                        break
                }
            }
        }

        function an() {
            return al()
        }

        function ap() {
            return !!(ag.pinchStatus || ag.pinchIn || ag.pinchOut)
        }

        function ax() {
            return !!(an() && ap())
        }

        function aB() {
            var aQ = aq();
            var aS = ae();
            var aR = aS && aQ;
            return aR
        }

        function ac() {
            return !!(ag.swipe || ag.swipeStatus || ag.swipeLeft || ag.swipeRight || ag.swipeUp || ag.swipeDown)
        }

        function E() {
            return !!(aB() && ac())
        }

        function ay() {
            return !!(ag.tap)
        }

        function aw() {
            aD = B();
            aP = event.touches.length + 1
        }

        function z() {
            aD = 0;
            aP = 0
        }

        function af() {
            var aQ = false;
            if (aD) {
                var aR = B() - aD;
                if (aR <= ag.fingerReleaseThreshold) {
                    aQ = true
                }
            }
            return aQ
        }

        function X() {
            return !!(H.data(v + "_intouch") === true)
        }

        function ak(aQ) {
            if (aQ === true) {
                H.bind(U, P);
                H.bind(av, ab);
                if (D) {
                    H.bind(D, W)
                }
            } else {
                H.unbind(U, P, false);
                H.unbind(av, ab, false);
                if (D) {
                    H.unbind(D, W, false)
                }
            }
            H.data(v + "_intouch", aQ === true)
        }

        function aO(aR, aQ) {
            var aS = aQ.identifier !== undefined ? aQ.identifier : 0;
            ai[aR].identifier = aS;
            ai[aR].start.x = ai[aR].end.x = aQ.pageX || aQ.clientX;
            ai[aR].start.y = ai[aR].end.y = aQ.pageY || aQ.clientY;
            return ai[aR]
        }

        function V(aQ) {
            var aS = aQ.identifier !== undefined ? aQ.identifier : 0;
            var aR = J(aS);
            aR.end.x = aQ.pageX || aQ.clientX;
            aR.end.y = aQ.pageY || aQ.clientY;
            return aR
        }

        function J(aR) {
            for (var aQ = 0; aQ < ai.length; aQ++) {
                if (ai[aQ].identifier == aR) {
                    return ai[aQ]
                }
            }
        }

        function T() {
            var aQ = [];
            for (var aR = 0; aR <= 5; aR++) {
                aQ.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return aQ
        }

        function aK(aQ, aR) {
            aR = Math.max(aR, M(aQ));
            Z[aQ].distance = aR
        }

        function M(aQ) {
            return Z[aQ].distance
        }

        function aE() {
            var aQ = {};
            aQ[m] = aL(m);
            aQ[l] = aL(l);
            aQ[c] = aL(c);
            aQ[s] = aL(s);
            return aQ
        }

        function aL(aQ) {
            return {
                direction: aQ,
                distance: 0
            }
        }

        function K() {
            return Y - I
        }

        function aa(aT, aS) {
            var aR = Math.abs(aT.x - aS.x);
            var aQ = Math.abs(aT.y - aS.y);
            return Math.round(Math.sqrt(aR * aR + aQ * aQ))
        }

        function y(aQ, aR) {
            var aS = (aR / aQ) * 1;
            return aS.toFixed(2)
        }

        function ao() {
            if (aj < 1) {
                return t
            } else {
                return b
            }
        }

        function G(aR, aQ) {
            return Math.round(Math.sqrt(Math.pow(aQ.x - aR.x, 2) + Math.pow(aQ.y - aR.y, 2)))
        }

        function F(aT, aR) {
            var aQ = aT.x - aR.x;
            var aV = aR.y - aT.y;
            var aS = Math.atan2(aV, aQ);
            var aU = Math.round(aS * 180 / Math.PI);
            if (aU < 0) {
                aU = 360 - Math.abs(aU)
            }
            return aU
        }

        function ar(aR, aQ) {
            var aS = F(aR, aQ);
            if ((aS <= 45) && (aS >= 0)) {
                return m
            } else {
                if ((aS <= 360) && (aS >= 315)) {
                    return m
                } else {
                    if ((aS >= 135) && (aS <= 225)) {
                        return l
                    } else {
                        if ((aS > 45) && (aS < 135)) {
                            return s
                        } else {
                            return c
                        }
                    }
                }
            }
        }

        function B() {
            var aQ = new Date();
            return aQ.getTime()
        }

        function au(aQ) {
            aQ = d(aQ);
            var aS = aQ.offset();
            var aR = {
                left: aS.left,
                right: aS.left + aQ.outerWidth(),
                top: aS.top,
                bottom: aS.top + aQ.outerHeight()
            };
            return aR
        }

        function aC(aQ, aR) {
            return (aQ.x > aR.left && aQ.x < aR.right && aQ.y > aR.top && aQ.y < aR.bottom)
        }
    }
})(jQuery);
! function(a) {
    "undefined" == typeof a.fn.each2 && a.extend(a.fn, {
        each2: function(b) {
            for (var c = a([0]), d = -1, e = this.length; ++d < e && (c.context = c[0] = this[d]) && b.call(c[0], d, c) !== !1;);
            return this
        }
    })
}(jQuery),
function(a, b) {
    "use strict";

    function c(b) {
        var c = a(document.createTextNode(""));
        b.before(c), c.before(b), c.remove()
    }

    function d(a) {
        function b(a) {
            return O[a] || a
        }
        return a.replace(/[^\u0000-\u007E]/g, b)
    }

    function e(a, b) {
        for (var c = 0, d = b.length; c < d; c += 1)
            if (g(a, b[c])) return c;
        return -1
    }

    function f() {
        var b = a(N);
        b.appendTo(document.body);
        var c = {
            width: b.width() - b[0].clientWidth,
            height: b.height() - b[0].clientHeight
        };
        return b.remove(), c
    }

    function g(a, c) {
        return a === c || a !== b && c !== b && (null !== a && null !== c && (a.constructor === String ? a + "" == c + "" : c.constructor === String && c + "" == a + ""))
    }

    function h(a, b, c) {
        var d, e, f;
        if (null === a || a.length < 1) return [];
        for (d = a.split(b), e = 0, f = d.length; e < f; e += 1) d[e] = c(d[e]);
        return d
    }

    function i(a) {
        return a.outerWidth(!1) - a.width()
    }

    function j(c) {
        var d = "keyup-change-value";
        c.on("keydown", function() {
            a.data(c, d) === b && a.data(c, d, c.val())
        }), c.on("keyup", function() {
            var e = a.data(c, d);
            e !== b && c.val() !== e && (a.removeData(c, d), c.trigger("keyup-change"))
        })
    }

    function k(c) {
        c.on("mousemove", function(c) {
            var d = L;
            d !== b && d.x === c.pageX && d.y === c.pageY || a(c.target).trigger("mousemove-filtered", c)
        })
    }

    function l(a, c, d) {
        d = d || b;
        var e;
        return function() {
            var b = arguments;
            window.clearTimeout(e), e = window.setTimeout(function() {
                c.apply(d, b)
            }, a)
        }
    }

    function m(a, b) {
        var c = l(a, function(a) {
            b.trigger("scroll-debounced", a)
        });
        b.on("scroll", function(a) {
            e(a.target, b.get()) >= 0 && c(a)
        })
    }

    function n(a) {
        a[0] !== document.activeElement && window.setTimeout(function() {
            var b, c = a[0],
                d = a.val().length;
            a.focus();
            var e = c.offsetWidth > 0 || c.offsetHeight > 0;
            e && c === document.activeElement && (c.setSelectionRange ? c.setSelectionRange(d, d) : c.createTextRange && (b = c.createTextRange(), b.collapse(!1), b.select()))
        }, 0)
    }

    function o(b) {
        b = a(b)[0];
        var c = 0,
            d = 0;
        if ("selectionStart" in b) c = b.selectionStart, d = b.selectionEnd - c;
        else if ("selection" in document) {
            b.focus();
            var e = document.selection.createRange();
            d = document.selection.createRange().text.length, e.moveStart("character", -b.value.length), c = e.text.length - d
        }
        return {
            offset: c,
            length: d
        }
    }

    function p(a) {
        a.preventDefault(), a.stopPropagation()
    }

    function q(a) {
        a.preventDefault(), a.stopImmediatePropagation()
    }

    function r(b) {
        if (!I) {
            var c = b[0].currentStyle || window.getComputedStyle(b[0], null);
            I = a(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: c.fontSize,
                fontFamily: c.fontFamily,
                fontStyle: c.fontStyle,
                fontWeight: c.fontWeight,
                letterSpacing: c.letterSpacing,
                textTransform: c.textTransform,
                whiteSpace: "nowrap"
            }), I.attr("class", "select2-sizer"), a(document.body).append(I)
        }
        return I.text(b.val()), I.width()
    }

    function s(b, c, d) {
        var e, f, g = [];
        e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each2(function() {
            0 === this.indexOf("select2-") && g.push(this)
        })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each2(function() {
            0 !== this.indexOf("select2-") && (f = d(this), f && g.push(f))
        })), b.attr("class", g.join(" "))
    }

    function t(a, b, c, e) {
        var f = d(a.toUpperCase()).indexOf(d(b.toUpperCase())),
            g = b.length;
        return f < 0 ? void c.push(e(a)) : (c.push(e(a.substring(0, f))), c.push("<span class='select2-match'>"), c.push(e(a.substring(f, f + g))), c.push("</span>"), void c.push(e(a.substring(f + g, a.length))))
    }

    function u(a) {
        var b = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
        };
        return String(a).replace(/[&<>"'\/\\]/g, function(a) {
            return b[a]
        })
    }

    function v(c) {
        var d, e = null,
            f = c.quietMillis || 100,
            g = c.url,
            h = this;
        return function(i) {
            window.clearTimeout(d), d = window.setTimeout(function() {
                var d = c.data,
                    f = g,
                    j = c.transport || a.fn.select2.ajaxDefaults.transport,
                    k = {
                        type: c.type || "GET",
                        cache: c.cache || !1,
                        jsonpCallback: c.jsonpCallback || b,
                        dataType: c.dataType || "json"
                    },
                    l = a.extend({}, a.fn.select2.ajaxDefaults.params, k);
                d = d ? d.call(h, i.term, i.page, i.context) : null, f = "function" == typeof f ? f.call(h, i.term, i.page, i.context) : f, e && "function" == typeof e.abort && e.abort(), c.params && (a.isFunction(c.params) ? a.extend(l, c.params.call(h)) : a.extend(l, c.params)), a.extend(l, {
                    url: f,
                    dataType: c.dataType,
                    data: d,
                    success: function(a) {
                        var b = c.results(a, i.page, i);
                        i.callback(b)
                    },
                    error: function(a, b, c) {
                        var d = {
                            hasError: !0,
                            jqXHR: a,
                            textStatus: b,
                            errorThrown: c
                        };
                        i.callback(d)
                    }
                }), e = j.call(h, l)
            }, f)
        }
    }

    function w(b) {
        var c, d, e = b,
            f = function(a) {
                return "" + a.text
            };
        a.isArray(e) && (d = e, e = {
            results: d
        }), a.isFunction(e) === !1 && (d = e, e = function() {
            return d
        });
        var g = e();
        return g.text && (f = g.text, a.isFunction(f) || (c = g.text, f = function(a) {
                return a[c]
            })),
            function(b) {
                var c, d = b.term,
                    g = {
                        results: []
                    };
                return "" === d ? void b.callback(e()) : (c = function(e, g) {
                    var h, i;
                    if (e = e[0], e.children) {
                        h = {};
                        for (i in e) e.hasOwnProperty(i) && (h[i] = e[i]);
                        h.children = [], a(e.children).each2(function(a, b) {
                            c(b, h.children)
                        }), (h.children.length || b.matcher(d, f(h), e)) && g.push(h)
                    } else b.matcher(d, f(e), e) && g.push(e)
                }, a(e().results).each2(function(a, b) {
                    c(b, g.results)
                }), void b.callback(g))
            }
    }

    function x(c) {
        var d = a.isFunction(c);
        return function(e) {
            var f = e.term,
                g = {
                    results: []
                },
                h = d ? c(e) : c;
            a.isArray(h) && (a(h).each(function() {
                var a = this.text !== b,
                    c = a ? this.text : this;
                ("" === f || e.matcher(f, c)) && g.results.push(a ? this : {
                    id: this,
                    text: this
                })
            }), e.callback(g))
        }
    }

    function y(b, c) {
        if (a.isFunction(b)) return !0;
        if (!b) return !1;
        if ("string" == typeof b) return !0;
        throw new Error(c + " must be a string, function, or falsy value")
    }

    function z(b, c) {
        if (a.isFunction(b)) {
            var d = Array.prototype.slice.call(arguments, 2);
            return b.apply(c, d)
        }
        return b
    }

    function A(b) {
        var c = 0;
        return a.each(b, function(a, b) {
            b.children ? c += A(b.children) : c++
        }), c
    }

    function B(a, c, d, e) {
        var f, h, i, j, k, l = a,
            m = !1;
        if (!e.createSearchChoice || !e.tokenSeparators || e.tokenSeparators.length < 1) return b;
        for (;;) {
            for (h = -1, i = 0, j = e.tokenSeparators.length; i < j && (k = e.tokenSeparators[i], h = a.indexOf(k), !(h >= 0)); i++);
            if (h < 0) break;
            if (f = a.substring(0, h), a = a.substring(h + k.length), f.length > 0 && (f = e.createSearchChoice.call(this, f, c), f !== b && null !== f && e.id(f) !== b && null !== e.id(f))) {
                for (m = !1, i = 0, j = c.length; i < j; i++)
                    if (g(e.id(f), e.id(c[i]))) {
                        m = !0;
                        break
                    }
                m || d(f)
            }
        }
        return l !== a ? a : void 0
    }

    function C() {
        var b = this;
        a.each(arguments, function(a, c) {
            b[c].remove(), b[c] = null
        })
    }

    function D(b, c) {
        var d = function() {};
        return d.prototype = new b, d.prototype.constructor = d, d.prototype.parent = b.prototype, d.prototype = a.extend(d.prototype, c), d
    }
    if (window.Select2 === b) {
        var E, F, G, H, I, J, K, L = {
                x: 0,
                y: 0
            },
            M = {
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                SPACE: 32,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                HOME: 36,
                END: 35,
                BACKSPACE: 8,
                DELETE: 46,
                isArrow: function(a) {
                    switch (a = a.which ? a.which : a) {
                        case M.LEFT:
                        case M.RIGHT:
                        case M.UP:
                        case M.DOWN:
                            return !0
                    }
                    return !1
                },
                isControl: function(a) {
                    var b = a.which;
                    switch (b) {
                        case M.SHIFT:
                        case M.CTRL:
                        case M.ALT:
                            return !0
                    }
                    return !!a.metaKey
                },
                isFunctionKey: function(a) {
                    return a = a.which ? a.which : a, a >= 112 && a <= 123
                }
            },
            N = "<div class='select2-measure-scrollbar'></div>",
            O = {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            };
        J = a(document), H = function() {
            var a = 1;
            return function() {
                return a++
            }
        }(), E = D(Object, {
            bind: function(a) {
                var b = this;
                return function() {
                    a.apply(b, arguments)
                }
            },
            init: function(c) {
                var d, e, g = ".select2-results";
                this.opts = c = this.prepareOpts(c), this.id = c.id, c.element.data("select2") !== b && null !== c.element.data("select2") && c.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = a(".select2-hidden-accessible"), 0 == this.liveRegion.length && (this.liveRegion = a("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("select2-hidden-accessible").appendTo(document.body)), this.containerId = "s2id_" + (c.element.attr("id") || "autogen" + H()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", c.element.attr("title")), this.body = a(document.body), s(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", c.element.attr("style")), this.container.css(z(c.containerCss, this.opts.element)), this.container.addClass(z(c.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", p), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), s(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(z(c.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", p), this.results = d = this.container.find(g), this.search = e = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", p), k(this.results), this.dropdown.on("mousemove-filtered", g, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", g, this.bind(function(a) {
                    this._touchEvent = !0, this.highlightUnderEvent(a)
                })), this.dropdown.on("touchmove", g, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", g, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function(a) {
                    this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
                })), m(80, this.results), this.dropdown.on("scroll-debounced", g, this.bind(this.loadMoreIfNeeded)), a(this.container).on("change", ".select2-input", function(a) {
                    a.stopPropagation()
                }), a(this.dropdown).on("change", ".select2-input", function(a) {
                    a.stopPropagation()
                }), a.fn.mousewheel && d.mousewheel(function(a, b, c, e) {
                    var f = d.scrollTop();
                    e > 0 && f - e <= 0 ? (d.scrollTop(0), p(a)) : e < 0 && d.get(0).scrollHeight - d.scrollTop() + e <= d.height() && (d.scrollTop(d.get(0).scrollHeight - d.height()), p(a))
                }), j(e), e.on("keyup-change input paste", this.bind(this.updateResults)), e.on("focus", function() {
                    e.addClass("select2-focused")
                }), e.on("blur", function() {
                    e.removeClass("select2-focused")
                }), this.dropdown.on("mouseup", g, this.bind(function(b) {
                    a(b.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(b), this.selectHighlighted(b))
                })), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(a) {
                    a.stopPropagation()
                }), this.lastSearchTerm = b, a.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== c.maximumInputLength && this.search.attr("maxlength", c.maximumInputLength);
                var h = c.element.prop("disabled");
                h === b && (h = !1), this.enable(!h);
                var i = c.element.prop("readonly");
                i === b && (i = !1), this.readonly(i), K = K || f(), this.autofocus = c.element.prop("autofocus"), c.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", c.searchInputPlaceholder)
            },
            destroy: function() {
                var a = this.opts.element,
                    c = a.data("select2"),
                    d = this;
                this.close(), a.length && a[0].detachEvent && d._sync && a.each(function() {
                    d._sync && this.detachEvent("onpropertychange", d._sync)
                }), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, c !== b && (c.container.remove(), c.liveRegion.remove(), c.dropdown.remove(), a.removeData("select2").off(".select2"), a.is("input[type='hidden']") ? a.css("display", "") : (a.show().prop("autofocus", this.autofocus || !1), this.elementTabIndex ? a.attr({
                    tabindex: this.elementTabIndex
                }) : a.removeAttr("tabindex"), a.show())), C.call(this, "container", "liveRegion", "dropdown", "results", "search")
            },
            optionToData: function(a) {
                return a.is("option") ? {
                    id: a.prop("value"),
                    text: a.text(),
                    element: a.get(),
                    css: a.attr("class"),
                    disabled: a.prop("disabled"),
                    locked: g(a.attr("locked"), "locked") || g(a.data("locked"), !0)
                } : a.is("optgroup") ? {
                    text: a.attr("label"),
                    children: [],
                    element: a.get(),
                    css: a.attr("class")
                } : void 0
            },
            prepareOpts: function(c) {
                var d, e, f, i, j = this;
                if (d = c.element, "select" === d.get(0).tagName.toLowerCase() && (this.select = e = c.element), e && a.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                        if (this in c) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                    }), c.debug = c.debug || a.fn.select2.defaults.debug, c.debug && console && console.warn && (null != c.id && console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"), null != c.text && console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"), null != c.sortResults && console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "), null != c.selectOnBlur && console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."), null != c.ajax && null != c.ajax.results && console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."), null != c.formatNoResults && console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."), null != c.formatSearching && console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."), null != c.formatInputTooShort && console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."), null != c.formatInputTooLong && console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."), null != c.formatLoading && console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."), null != c.formatSelectionTooBig && console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."), c.element.data("select2Tags") && console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")), null != c.element.data("tags")) {
                    var k = c.element.data("tags");
                    a.isArray(k) || (k = []), c.element.data("select2Tags", k)
                }
                if (null != c.sorter && (c.sortResults = c.sorter), null != c.selectOnClose && (c.selectOnBlur = c.selectOnClose), null != c.ajax && a.isFunction(c.ajax.processResults) && (c.ajax.results = c.ajax.processResults), null != c.language) {
                    var l = c.language;
                    a.isFunction(l.noMatches) && (c.formatNoMatches = l.noMatches), a.isFunction(l.searching) && (c.formatSearching = l.searching), a.isFunction(l.inputTooShort) && (c.formatInputTooShort = l.inputTooShort), a.isFunction(l.inputTooLong) && (c.formatInputTooLong = l.inputTooLong), a.isFunction(l.loadingMore) && (c.formatLoading = l.loadingMore), a.isFunction(l.maximumSelected) && (c.formatSelectionTooBig = l.maximumSelected)
                }
                if (c = a.extend({}, {
                        populateResults: function(d, e, f) {
                            var g, h = this.opts.id,
                                i = this.liveRegion;
                            (g = function(d, e, k) {
                                var l, m, n, o, p, q, r, s, t, u;
                                d = c.sortResults(d, e, f);
                                var v = [];
                                for (l = 0, m = d.length; l < m; l += 1) n = d[l], p = n.disabled === !0, o = !p && h(n) !== b, q = n.children && n.children.length > 0, r = a("<li></li>"), r.addClass("select2-results-dept-" + k), r.addClass("select2-result"), r.addClass(o ? "select2-result-selectable" : "select2-result-unselectable"), p && r.addClass("select2-disabled"), q && r.addClass("select2-result-with-children"), r.addClass(j.opts.formatResultCssClass(n)), r.attr("role", "presentation"), s = a(document.createElement("div")), s.addClass("select2-result-label"), s.attr("id", "select2-result-label-" + H()), s.attr("role", "option"), u = c.formatResult(n, s, f, j.opts.escapeMarkup), u !== b && (s.html(u), r.append(s)), q && (t = a("<ul></ul>"), t.addClass("select2-result-sub"), g(n.children, t, k + 1), r.append(t)), r.data("select2-data", n), v.push(r[0]);
                                e.append(v), i.text(c.formatMatches(d.length))
                            })(e, d, 0)
                        }
                    }, a.fn.select2.defaults, c), "function" != typeof c.id && (f = c.id, c.id = function(a) {
                        return a[f]
                    }), a.isArray(c.element.data("select2Tags"))) {
                    if ("tags" in c) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + c.element.attr("id");
                    c.tags = c.element.data("select2Tags")
                }
                if (e ? (c.query = this.bind(function(a) {
                        var c, e, f, g = {
                                results: [],
                                more: !1
                            },
                            h = a.term;
                        f = function(b, c) {
                            var d;
                            b.is("option") ? a.matcher(h, b.text(), b) && c.push(j.optionToData(b)) : b.is("optgroup") && (d = j.optionToData(b), b.children().each2(function(a, b) {
                                f(b, d.children)
                            }), d.children.length > 0 && c.push(d))
                        }, c = d.children(), this.getPlaceholder() !== b && c.length > 0 && (e = this.getPlaceholderOption(), e && (c = c.not(e))), c.each2(function(a, b) {
                            f(b, g.results)
                        }), a.callback(g)
                    }), c.id = function(a) {
                        return a.id
                    }) : "query" in c || ("ajax" in c ? (i = c.element.data("ajax-url"), i && i.length > 0 && (c.ajax.url = i), c.query = v.call(c.element, c.ajax)) : "data" in c ? c.query = w(c.data) : "tags" in c && (c.query = x(c.tags), c.createSearchChoice === b && (c.createSearchChoice = function(b) {
                        return {
                            id: a.trim(b),
                            text: a.trim(b)
                        }
                    }), c.initSelection === b && (c.initSelection = function(b, d) {
                        var e = [];
                        a(h(b.val(), c.separator, c.transformVal)).each(function() {
                            var b = {
                                    id: this,
                                    text: this
                                },
                                d = c.tags;
                            a.isFunction(d) && (d = d()), a(d).each(function() {
                                if (g(this.id, b.id)) return b = this, !1
                            }), e.push(b)
                        }), d(e)
                    }))), "function" != typeof c.query) throw "query function not defined for Select2 " + c.element.attr("id");
                if ("top" === c.createSearchChoicePosition) c.createSearchChoicePosition = function(a, b) {
                    a.unshift(b)
                };
                else if ("bottom" === c.createSearchChoicePosition) c.createSearchChoicePosition = function(a, b) {
                    a.push(b)
                };
                else if ("function" != typeof c.createSearchChoicePosition) throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
                return c
            },
            monitorSource: function() {
                var c, d = this.opts.element,
                    e = this;
                d.on("change.select2", this.bind(function(a) {
                    this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                })), this._sync = this.bind(function() {
                    var a = d.prop("disabled");
                    a === b && (a = !1), this.enable(!a);
                    var c = d.prop("readonly");
                    c === b && (c = !1), this.readonly(c), this.container && (s(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(z(this.opts.containerCssClass, this.opts.element))), this.dropdown && (s(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(z(this.opts.dropdownCssClass, this.opts.element)))
                }), d.length && d[0].attachEvent && d.each(function() {
                    this.attachEvent("onpropertychange", e._sync)
                }), c = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, c !== b && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new c(function(b) {
                    a.each(b, e._sync)
                }), this.propertyObserver.observe(d.get(0), {
                    attributes: !0,
                    subtree: !1
                }))
            },
            triggerSelect: function(b) {
                var c = a.Event("select2-selecting", {
                    val: this.id(b),
                    object: b,
                    choice: b
                });
                return this.opts.element.trigger(c), !c.isDefaultPrevented()
            },
            triggerChange: function(b) {
                b = b || {}, b = a.extend({}, b, {
                    type: "change",
                    val: this.val()
                }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(b), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
            },
            isInterfaceEnabled: function() {
                return this.enabledInterface === !0
            },
            enableInterface: function() {
                var a = this._enabled && !this._readonly,
                    b = !a;
                return a !== this.enabledInterface && (this.container.toggleClass("select2-container-disabled", b), this.close(), this.enabledInterface = a, !0)
            },
            enable: function(a) {
                a === b && (a = !0), this._enabled !== a && (this._enabled = a, this.opts.element.prop("disabled", !a), this.enableInterface())
            },
            disable: function() {
                this.enable(!1)
            },
            readonly: function(a) {
                a === b && (a = !1), this._readonly !== a && (this._readonly = a, this.opts.element.prop("readonly", a), this.enableInterface())
            },
            opened: function() {
                return !!this.container && this.container.hasClass("select2-dropdown-open")
            },
            positionDropdown: function() {
                var b, c, d, e, f, g = this.dropdown,
                    h = this.container,
                    i = h.offset(),
                    j = h.outerHeight(!1),
                    k = h.outerWidth(!1),
                    l = g.outerHeight(!1),
                    m = a(window),
                    n = m.width(),
                    o = m.height(),
                    p = m.scrollLeft() + n,
                    q = m.scrollTop() + o,
                    r = i.top + j,
                    s = i.left,
                    t = r + l <= q,
                    u = i.top - l >= m.scrollTop(),
                    v = g.outerWidth(!1),
                    w = function() {
                        return s + v <= p
                    },
                    x = function() {
                        return i.left + p + h.outerWidth(!1) > v
                    },
                    y = g.hasClass("select2-drop-above");
                y ? (c = !0, !u && t && (d = !0, c = !1)) : (c = !1, !t && u && (d = !0, c = !0)), d && (g.hide(), i = this.container.offset(), j = this.container.outerHeight(!1), k = this.container.outerWidth(!1), l = g.outerHeight(!1), p = m.scrollLeft() + n, q = m.scrollTop() + o, r = i.top + j, s = i.left, v = g.outerWidth(!1), g.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (f = a(".select2-results", g)[0], g.addClass("select2-drop-auto-width"), g.css("width", ""), v = g.outerWidth(!1) + (f.scrollHeight === f.clientHeight ? 0 : K.width), v > k ? k = v : v = k, l = g.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (b = this.body.offset(), r -= b.top, s -= b.left), !w() && x() && (s = i.left + this.container.outerWidth(!1) - v), e = {
                    left: s,
                    width: k
                }, c ? (this.container.addClass("select2-drop-above"), g.addClass("select2-drop-above"), l = g.outerHeight(!1), e.top = i.top - l, e.bottom = "auto") : (e.top = r, e.bottom = "auto", this.container.removeClass("select2-drop-above"), g.removeClass("select2-drop-above")), e = a.extend(e, z(this.opts.dropdownCss, this.opts.element)), g.css(e)
            },
            shouldOpen: function() {
                var b;
                return !this.opened() && (this._enabled !== !1 && this._readonly !== !0 && (b = a.Event("select2-opening"), this.opts.element.trigger(b), !b.isDefaultPrevented()))
            },
            clearDropdownAlignmentPreference: function() {
                this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
            },
            open: function() {
                return !!this.shouldOpen() && (this.opening(), J.on("mousemove.select2Event", function(a) {
                    L.x = a.pageX, L.y = a.pageY
                }), !0)
            },
            opening: function() {
                var b, d = this.containerEventName,
                    e = "scroll." + d,
                    f = "resize." + d,
                    g = "orientationchange." + d;
                this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), b = a("#select2-drop-mask"), 0 === b.length && (b = a(document.createElement("div")), b.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), b.hide(), b.appendTo(this.body), b.on("mousedown touchstart click", function(d) {
                    c(b);
                    var e, f = a("#select2-drop");
                    f.length > 0 && (e = f.data("select2"), e.opts.selectOnBlur && e.selectHighlighted({
                        noFocus: !0
                    }), e.close(), d.preventDefault(), d.stopPropagation())
                })), this.dropdown.prev()[0] !== b[0] && this.dropdown.before(b), a("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), b.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                var h = this;
                this.container.parents().add(window).each(function() {
                    a(this).on(f + " " + e + " " + g, function(a) {
                        h.opened() && h.positionDropdown()
                    })
                })
            },
            close: function() {
                if (this.opened()) {
                    var b = this.containerEventName,
                        c = "scroll." + b,
                        d = "resize." + b,
                        e = "orientationchange." + b;
                    this.container.parents().add(window).each(function() {
                        a(this).off(c).off(d).off(e)
                    }), this.clearDropdownAlignmentPreference(), a("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), J.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.search.removeAttr("aria-activedescendant"), this.opts.element.trigger(a.Event("select2-close"))
                }
            },
            externalSearch: function(a) {
                this.open(), this.search.val(a), this.updateResults(!1)
            },
            clearSearch: function() {},
            prefillNextSearchTerm: function() {
                if ("" !== this.search.val()) return !1;
                var a = this.opts.nextSearchTerm(this.data(), this.lastSearchTerm);
                return a !== b && (this.search.val(a), this.search.select(), !0)
            },
            getMaximumSelectionSize: function() {
                return z(this.opts.maximumSelectionSize, this.opts.element)
            },
            ensureHighlightVisible: function() {
                var b, c, d, e, f, g, h, i, j = this.results;
                if (c = this.highlight(), !(c < 0)) {
                    if (0 == c) return void j.scrollTop(0);
                    b = this.findHighlightableChoices().find(".select2-result-label"), d = a(b[c]), i = (d.offset() || {}).top || 0, e = i + d.outerHeight(!0), c === b.length - 1 && (h = j.find("li.select2-more-results"), h.length > 0 && (e = h.offset().top + h.outerHeight(!0))), f = j.offset().top + j.outerHeight(!1), e > f && j.scrollTop(j.scrollTop() + (e - f)), g = i - j.offset().top, g < 0 && "none" != d.css("display") && j.scrollTop(j.scrollTop() + g)
                }
            },
            findHighlightableChoices: function() {
                return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
            },
            moveHighlight: function(b) {
                for (var c = this.findHighlightableChoices(), d = this.highlight(); d > -1 && d < c.length;) {
                    d += b;
                    var e = a(c[d]);
                    if (e.hasClass("select2-result-selectable") && !e.hasClass("select2-disabled") && !e.hasClass("select2-selected")) {
                        this.highlight(d);
                        break
                    }
                }
            },
            highlight: function(b) {
                var c, d, f = this.findHighlightableChoices();
                return 0 === arguments.length ? e(f.filter(".select2-highlighted")[0], f.get()) : (b >= f.length && (b = f.length - 1), b < 0 && (b = 0), this.removeHighlight(), c = a(f[b]), c.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", c.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(c.text()), d = c.data("select2-data"), void(d && this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(d),
                    choice: d
                })))
            },
            removeHighlight: function() {
                this.results.find(".select2-highlighted").removeClass("select2-highlighted")
            },
            touchMoved: function() {
                this._touchMoved = !0
            },
            clearTouchMoved: function() {
                this._touchMoved = !1
            },
            countSelectableResults: function() {
                return this.findHighlightableChoices().length
            },
            highlightUnderEvent: function(b) {
                var c = a(b.target).closest(".select2-result-selectable");
                if (c.length > 0 && !c.is(".select2-highlighted")) {
                    var d = this.findHighlightableChoices();
                    this.highlight(d.index(c))
                } else 0 == c.length && this.removeHighlight()
            },
            loadMoreIfNeeded: function() {
                var a, b = this.results,
                    c = b.find("li.select2-more-results"),
                    d = this.resultsPage + 1,
                    e = this,
                    f = this.search.val(),
                    g = this.context;
                0 !== c.length && (a = c.offset().top - b.offset().top - b.height(), a <= this.opts.loadMorePadding && (c.addClass("select2-active"), this.opts.query({
                    element: this.opts.element,
                    term: f,
                    page: d,
                    context: g,
                    matcher: this.opts.matcher,
                    callback: this.bind(function(a) {
                        e.opened() && (e.opts.populateResults.call(this, b, a.results, {
                            term: f,
                            page: d,
                            context: g
                        }), e.postprocessResults(a, !1, !1), a.more === !0 ? (c.detach().appendTo(b).html(e.opts.escapeMarkup(z(e.opts.formatLoadMore, e.opts.element, d + 1))), window.setTimeout(function() {
                            e.loadMoreIfNeeded()
                        }, 10)) : c.remove(), e.positionDropdown(), e.resultsPage = d, e.context = a.context, this.opts.element.trigger({
                            type: "select2-loaded",
                            items: a
                        }))
                    })
                })))
            },
            tokenize: function() {},
            updateResults: function(c) {
                function d() {
                    j.removeClass("select2-active"), m.positionDropdown(), k.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? m.liveRegion.text(k.text()) : m.liveRegion.text(m.opts.formatMatches(k.find('.select2-result-selectable:not(".select2-selected")').length))
                }

                function e(a) {
                    k.html(a), d()
                }
                var f, h, i, j = this.search,
                    k = this.results,
                    l = this.opts,
                    m = this,
                    n = j.val(),
                    o = a.data(this.container, "select2-last-term");
                if ((c === !0 || !o || !g(n, o)) && (a.data(this.container, "select2-last-term", n), c === !0 || this.showSearchInput !== !1 && this.opened())) {
                    i = ++this.queryCount;
                    var p = this.getMaximumSelectionSize();
                    if (p >= 1 && (f = this.data(), a.isArray(f) && f.length >= p && y(l.formatSelectionTooBig, "formatSelectionTooBig"))) return void e("<li class='select2-selection-limit'>" + z(l.formatSelectionTooBig, l.element, p) + "</li>");
                    if (j.val().length < l.minimumInputLength) return e(y(l.formatInputTooShort, "formatInputTooShort") ? "<li class='select2-no-results'>" + z(l.formatInputTooShort, l.element, j.val(), l.minimumInputLength) + "</li>" : ""), void(c && this.showSearch && this.showSearch(!0));
                    if (l.maximumInputLength && j.val().length > l.maximumInputLength) return void e(y(l.formatInputTooLong, "formatInputTooLong") ? "<li class='select2-no-results'>" + z(l.formatInputTooLong, l.element, j.val(), l.maximumInputLength) + "</li>" : "");
                    l.formatSearching && 0 === this.findHighlightableChoices().length && e("<li class='select2-searching'>" + z(l.formatSearching, l.element) + "</li>"), j.addClass("select2-active"), this.removeHighlight(), h = this.tokenize(), h != b && null != h && j.val(h), this.resultsPage = 1, l.query({
                        element: l.element,
                        term: j.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: l.matcher,
                        callback: this.bind(function(f) {
                            var h;
                            if (i == this.queryCount) {
                                if (!this.opened()) return void this.search.removeClass("select2-active");
                                if (f.hasError !== b && y(l.formatAjaxError, "formatAjaxError")) return void e("<li class='select2-ajax-error'>" + z(l.formatAjaxError, l.element, f.jqXHR, f.textStatus, f.errorThrown) + "</li>");
                                if (this.context = f.context === b ? null : f.context, this.opts.createSearchChoice && "" !== j.val() && (h = this.opts.createSearchChoice.call(m, j.val(), f.results), h !== b && null !== h && m.id(h) !== b && null !== m.id(h) && 0 === a(f.results).filter(function() {
                                        return g(m.id(this), m.id(h))
                                    }).length && this.opts.createSearchChoicePosition(f.results, h)), 0 === f.results.length && y(l.formatNoMatches, "formatNoMatches")) return e("<li class='select2-no-results'>" + z(l.formatNoMatches, l.element, j.val()) + "</li>"), void(this.showSearch && this.showSearch(j.val()));
                                k.empty(), m.opts.populateResults.call(this, k, f.results, {
                                    term: j.val(),
                                    page: this.resultsPage,
                                    context: null
                                }), f.more === !0 && y(l.formatLoadMore, "formatLoadMore") && (k.append("<li class='select2-more-results'>" + l.escapeMarkup(z(l.formatLoadMore, l.element, this.resultsPage)) + "</li>"), window.setTimeout(function() {
                                    m.loadMoreIfNeeded()
                                }, 10)), this.postprocessResults(f, c), d(), this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: f
                                })
                            }
                        })
                    })
                }
            },
            cancel: function() {
                this.close()
            },
            blur: function() {
                this.opts.selectOnBlur && this.selectHighlighted({
                    noFocus: !0
                }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
            },
            focusSearch: function() {
                n(this.search)
            },
            selectHighlighted: function(a) {
                if (this._touchMoved) return void this.clearTouchMoved();
                var b = this.highlight(),
                    c = this.results.find(".select2-highlighted"),
                    d = c.closest(".select2-result").data("select2-data");
                d ? (this.highlight(b), this.onSelect(d, a)) : a && a.noFocus && this.close()
            },
            getPlaceholder: function() {
                var a;
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((a = this.getPlaceholderOption()) !== b ? a.text() : b)
            },
            getPlaceholderOption: function() {
                if (this.select) {
                    var c = this.select.children("option").first();
                    if (this.opts.placeholderOption !== b) return "first" === this.opts.placeholderOption && c || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                    if ("" === a.trim(c.text()) && "" === c.val()) return c
                }
            },
            initContainerWidth: function() {
                function b() {
                    var b, c, d, e, f, g;
                    if ("off" === this.opts.width) return null;
                    if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (b = this.opts.element.attr("style"), "string" == typeof b)
                            for (c = b.split(";"), e = 0, f = c.length; e < f; e += 1)
                                if (g = c[e].replace(/\s/g, ""), d = g.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== d && d.length >= 1) return d[1];
                        return "resolve" === this.opts.width ? (b = this.opts.element.css("width"), b.indexOf("%") > 0 ? b : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                    }
                    return a.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var c = b.call(this);
                null !== c && this.container.css("width", c)
            }
        }), F = D(E, {
            createContainer: function() {
                var b = a(document.createElement("div")).attr({
                    "class": "select2-container"
                }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
                return b
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
            },
            opening: function() {
                var b, c, d;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), b = this.search.get(0), b.createTextRange ? (c = b.createTextRange(), c.collapse(!1), c.select()) : b.setSelectionRange && (d = this.search.val().length, b.setSelectionRange(d, d))), this.prefillNextSearchTerm(), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(a.Event("select2-open"))
            },
            close: function() {
                this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            focus: function() {
                this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            isFocused: function() {
                return this.container.hasClass("select2-container-active")
            },
            cancel: function() {
                this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
            },
            destroy: function() {
                a("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), C.call(this, "selection", "focusser")
            },
            initContainer: function() {
                var b, d, e = this.container,
                    f = this.dropdown,
                    g = H();
                this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = b = e.find(".select2-choice"), this.focusser = e.find(".select2-focusser"), b.find(".select2-chosen").attr("id", "select2-chosen-" + g), this.focusser.attr("aria-labelledby", "select2-chosen-" + g), this.results.attr("id", "select2-results-" + g), this.search.attr("aria-owns", "select2-results-" + g), this.focusser.attr("id", "s2id_autogen" + g), d = a("label[for='" + this.opts.element.attr("id") + "']"), this.opts.element.on("focus.select2", this.bind(function() {
                    this.focus()
                })), this.focusser.prev().text(d.text()).attr("for", this.focusser.attr("id"));
                var h = this.opts.element.attr("title");
                this.opts.element.attr("title", h || d.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(a("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled() && 229 != a.keyCode) {
                        if (a.which === M.PAGE_UP || a.which === M.PAGE_DOWN) return void p(a);
                        switch (a.which) {
                            case M.UP:
                            case M.DOWN:
                                return this.moveHighlight(a.which === M.UP ? -1 : 1), void p(a);
                            case M.ENTER:
                                return this.selectHighlighted(), void p(a);
                            case M.TAB:
                                return void this.selectHighlighted({
                                    noFocus: !0
                                });
                            case M.ESC:
                                return this.cancel(a), void p(a)
                        }
                    }
                })), this.search.on("blur", this.bind(function(a) {
                    document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
                        this.opened() && this.results && this.results.length > 1 && this.search.focus()
                    }), 0)
                })), this.focusser.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled() && a.which !== M.TAB && !M.isControl(a) && !M.isFunctionKey(a) && a.which !== M.ESC) {
                        if (this.opts.openOnEnter === !1 && a.which === M.ENTER) return void p(a);
                        if (a.which == M.DOWN || a.which == M.UP || a.which == M.ENTER && this.opts.openOnEnter) {
                            if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return;
                            return this.open(), void p(a)
                        }
                        return a.which == M.DELETE || a.which == M.BACKSPACE ? (this.opts.allowClear && this.clear(), void p(a)) : void 0
                    }
                })), j(this.focusser), this.focusser.on("keyup-change input", this.bind(function(a) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (a.stopPropagation(), this.opened()) return;
                        this.open()
                    }
                })), b.on("mousedown touchstart", "abbr", this.bind(function(a) {
                    this.isInterfaceEnabled() && (this.clear(), q(a), this.close(), this.selection && this.selection.focus())
                })), this.supportsTouchEvents ? b.on("mousedown touchstart", this.bind(function(d) {
                    c(b), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), p(d)
                })) : b.on("mousedown", this.bind(function(d) {
                    c(b), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), p(d)
                })), f.on("mousedown touchstart", this.bind(function() {
                    this.opts.shouldFocusInput(this) && this.search.focus()
                })), b.on("focus", this.bind(function(a) {
                    p(a)
                })), this.focusser.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
                })).on("blur", this.bind(function() {
                    this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(a.Event("select2-blur")))
                })), this.search.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
                })), this.initContainerWidth(), this.opts.element.hide(), this.setPlaceholder()
            },
            clear: function(b) {
                var c = this.selection.data("select2-data");
                if (c) {
                    var d = a.Event("select2-clearing");
                    if (this.opts.element.trigger(d), d.isDefaultPrevented()) return;
                    var e = this.getPlaceholderOption();
                    this.opts.element.val(e ? e.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), b !== !1 && (this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(c),
                        choice: c
                    }), this.triggerChange({
                        removed: c
                    }))
                }
            },
            initSelection: function() {
                if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
                else {
                    var a = this;
                    this.opts.initSelection.call(null, this.opts.element, function(c) {
                        c !== b && null !== c && (a.updateSelection(c), a.close(), a.setPlaceholder(), a.lastSearchTerm = a.search.val())
                    })
                }
            },
            isPlaceholderOptionSelected: function() {
                var a;
                return this.getPlaceholder() !== b && ((a = this.getPlaceholderOption()) !== b && a.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === b || null === this.opts.element.val())
            },
            prepareOpts: function() {
                var b = this.parent.prepareOpts.apply(this, arguments),
                    c = this;
                return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                    var d = a.find("option").filter(function() {
                        return this.selected && !this.disabled
                    });
                    b(c.optionToData(d))
                } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                    var e = c.val(),
                        f = null;
                    b.query({
                        matcher: function(a, c, d) {
                            var h = g(e, b.id(d));
                            return h && (f = d), h
                        },
                        callback: a.isFunction(d) ? function() {
                            d(f)
                        } : a.noop
                    })
                }), b
            },
            getPlaceholder: function() {
                return this.select && this.getPlaceholderOption() === b ? b : this.parent.getPlaceholder.apply(this, arguments)
            },
            setPlaceholder: function() {
                var a = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && a !== b) {
                    if (this.select && this.getPlaceholderOption() === b) return;
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                }
            },
            postprocessResults: function(a, b, c) {
                var d = 0,
                    e = this;
                if (this.findHighlightableChoices().each2(function(a, b) {
                        if (g(e.id(b.data("select2-data")), e.opts.element.val())) return d = a, !1
                    }), c !== !1 && (b === !0 && d >= 0 ? this.highlight(d) : this.highlight(0)), b === !0) {
                    var f = this.opts.minimumResultsForSearch;
                    f >= 0 && this.showSearch(A(a.results) >= f)
                }
            },
            showSearch: function(b) {
                this.showSearchInput !== b && (this.showSearchInput = b, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !b), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !b), a(this.dropdown, this.container).toggleClass("select2-with-searchbox", b))
            },
            onSelect: function(a, b) {
                if (this.triggerSelect(a)) {
                    var c = this.opts.element.val(),
                        d = this.data();
                    this.opts.element.val(this.id(a)), this.updateSelection(a), this.opts.element.trigger({
                        type: "select2-selected",
                        val: this.id(a),
                        choice: a
                    }), this.lastSearchTerm = this.search.val(), this.close(), b && b.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), g(c, this.id(a)) || this.triggerChange({
                        added: a,
                        removed: d
                    })
                }
            },
            updateSelection: function(a) {
                var c, d, e = this.selection.find(".select2-chosen");
                this.selection.data("select2-data", a), e.empty(), null !== a && (c = this.opts.formatSelection(a, e, this.opts.escapeMarkup)), c !== b && e.append(c), d = this.opts.formatSelectionCssClass(a, e), d !== b && e.addClass(d), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== b && this.container.addClass("select2-allowclear")
            },
            val: function() {
                var a, c = !1,
                    d = null,
                    e = this,
                    f = this.data();
                if (0 === arguments.length) return this.opts.element.val();
                if (a = arguments[0], arguments.length > 1 && (c = arguments[1], this.opts.debug && console && console.warn && console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')), this.select) this.opts.debug && console && console.warn && console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'), this.select.val(a).find("option").filter(function() {
                    return this.selected
                }).each2(function(a, b) {
                    return d = e.optionToData(b), !1
                }), this.updateSelection(d), this.setPlaceholder(), c && this.triggerChange({
                    added: d,
                    removed: f
                });
                else {
                    if (!a && 0 !== a) return void this.clear(c);
                    if (this.opts.initSelection === b) throw new Error("cannot call val() if initSelection() is not defined");
                    this.opts.element.val(a), this.opts.initSelection(this.opts.element, function(a) {
                        e.opts.element.val(a ? e.id(a) : ""), e.updateSelection(a), e.setPlaceholder(), c && e.triggerChange({
                            added: a,
                            removed: f
                        })
                    })
                }
            },
            clearSearch: function() {
                this.search.val(""), this.focusser.val("")
            },
            data: function(a) {
                var c, d = !1;
                return 0 === arguments.length ? (c = this.selection.data("select2-data"), c == b && (c = null), c) : (this.opts.debug && console && console.warn && console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.'), arguments.length > 1 && (d = arguments[1]), a ? (c = this.data(), this.opts.element.val(a ? this.id(a) : ""), this.updateSelection(a), d && this.triggerChange({
                    added: a,
                    removed: c
                })) : this.clear(d), void 0)
            }
        }), G = D(E, {
            createContainer: function() {
                var b = a(document.createElement("div")).attr({
                    "class": "select2-container select2-container-multi"
                }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return b
            },
            prepareOpts: function() {
                var b = this.parent.prepareOpts.apply(this, arguments),
                    c = this;
                return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                    var d = [];
                    a.find("option").filter(function() {
                        return this.selected && !this.disabled
                    }).each2(function(a, b) {
                        d.push(c.optionToData(b))
                    }), b(d)
                } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                    var e = h(c.val(), b.separator, b.transformVal),
                        f = [];
                    b.query({
                        matcher: function(c, d, h) {
                            var i = a.grep(e, function(a) {
                                return g(a, b.id(h))
                            }).length;
                            return i && f.push(h), i
                        },
                        callback: a.isFunction(d) ? function() {
                            for (var a = [], c = 0; c < e.length; c++)
                                for (var h = e[c], i = 0; i < f.length; i++) {
                                    var j = f[i];
                                    if (g(h, b.id(j))) {
                                        a.push(j), f.splice(i, 1);
                                        break
                                    }
                                }
                            d(a)
                        } : a.noop
                    })
                }), b
            },
            selectChoice: function(a) {
                var b = this.container.find(".select2-search-choice-focus");
                b.length && a && a[0] == b[0] || (b.length && this.opts.element.trigger("choice-deselected", b), b.removeClass("select2-search-choice-focus"), a && a.length && (this.close(), a.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", a)))
            },
            destroy: function() {
                a("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), C.call(this, "searchContainer", "selection")
            },
            initContainer: function() {
                var b, c = ".select2-choices";
                this.searchContainer = this.container.find(".select2-search-field"), this.selection = b = this.container.find(c);
                var d = this;
                this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function(b) {
                    d.search[0].focus(), d.selectChoice(a(this))
                }), this.search.attr("id", "s2id_autogen" + H()), this.search.prev().text(a("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.opts.element.on("focus.select2", this.bind(function() {
                    this.focus()
                })), this.search.on("input paste", this.bind(function() {
                    this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
                })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var c = b.find(".select2-search-choice-focus"),
                            d = c.prev(".select2-search-choice:not(.select2-locked)"),
                            e = c.next(".select2-search-choice:not(.select2-locked)"),
                            f = o(this.search);
                        if (c.length && (a.which == M.LEFT || a.which == M.RIGHT || a.which == M.BACKSPACE || a.which == M.DELETE || a.which == M.ENTER)) {
                            var g = c;
                            return a.which == M.LEFT && d.length ? g = d : a.which == M.RIGHT ? g = e.length ? e : null : a.which === M.BACKSPACE ? this.unselect(c.first()) && (this.search.width(10), g = d.length ? d : e) : a.which == M.DELETE ? this.unselect(c.first()) && (this.search.width(10), g = e.length ? e : null) : a.which == M.ENTER && (g = null), this.selectChoice(g), p(a), void(g && g.length || this.open())
                        }
                        if ((a.which === M.BACKSPACE && 1 == this.keydowns || a.which == M.LEFT) && 0 == f.offset && !f.length) return this.selectChoice(b.find(".select2-search-choice:not(.select2-locked)").last()), void p(a);
                        if (this.selectChoice(null), this.opened()) switch (a.which) {
                            case M.UP:
                            case M.DOWN:
                                return this.moveHighlight(a.which === M.UP ? -1 : 1), void p(a);
                            case M.ENTER:
                                return this.selectHighlighted(), void p(a);
                            case M.TAB:
                                return this.selectHighlighted({
                                    noFocus: !0
                                }), void this.close();
                            case M.ESC:
                                return this.cancel(a), void p(a)
                        }
                        if (a.which !== M.TAB && !M.isControl(a) && !M.isFunctionKey(a) && a.which !== M.BACKSPACE && a.which !== M.ESC) {
                            if (a.which === M.ENTER) {
                                if (this.opts.openOnEnter === !1) return;
                                if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return
                            }
                            this.open(), a.which !== M.PAGE_UP && a.which !== M.PAGE_DOWN || p(a), a.which === M.ENTER && p(a)
                        }
                    }
                })), this.search.on("keyup", this.bind(function(a) {
                    this.keydowns = 0, this.resizeSearch()
                })), this.search.on("blur", this.bind(function(b) {
                    this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), b.stopImmediatePropagation(), this.opts.element.trigger(a.Event("select2-blur"))
                })), this.container.on("click", c, this.bind(function(b) {
                    this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.open(), this.focusSearch(), b.preventDefault()))
                })), this.container.on("focus", c, this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                })), this.initContainerWidth(), this.opts.element.hide(), this.clearSearch()
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
            },
            initSelection: function() {
                if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                    var a = this;
                    this.opts.initSelection.call(null, this.opts.element, function(c) {
                        c !== b && null !== c && (a.updateSelection(c), a.close(), a.clearSearch())
                    })
                }
            },
            clearSearch: function() {
                var a = this.getPlaceholder(),
                    c = this.getMaxSearchWidth();
                a !== b && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(a).addClass("select2-default"), this.search.width(c > 0 ? c : this.container.css("width"))) : this.search.val("").width(10)
            },
            clearPlaceholder: function() {
                this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
            },
            opening: function() {
                this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.prefillNextSearchTerm(), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(a.Event("select2-open"))
            },
            close: function() {
                this.opened() && this.parent.close.apply(this, arguments)
            },
            focus: function() {
                this.close(), this.search.focus()
            },
            isFocused: function() {
                return this.search.hasClass("select2-focused")
            },
            updateSelection: function(b) {
                var c = {},
                    d = [],
                    e = this;
                a(b).each(function() {
                    e.id(this) in c || (c[e.id(this)] = 0, d.push(this))
                }), this.selection.find(".select2-search-choice").remove(), this.addSelectedChoice(d), e.postprocessResults()
            },
            tokenize: function() {
                var a = this.search.val();
                a = this.opts.tokenizer.call(this, a, this.data(), this.bind(this.onSelect), this.opts), null != a && a != b && (this.search.val(a), a.length > 0 && this.open())
            },
            onSelect: function(a, b) {
                this.triggerSelect(a) && "" !== a.text && (this.addSelectedChoice(a), this.opts.element.trigger({
                    type: "selected",
                    val: this.id(a),
                    choice: a
                }), this.lastSearchTerm = this.search.val(), this.clearSearch(), this.updateResults(), !this.select && this.opts.closeOnSelect || this.postprocessResults(a, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.prefillNextSearchTerm() && this.updateResults(), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
                    added: a
                }), b && b.noFocus || this.focusSearch())
            },
            cancel: function() {
                this.close(), this.focusSearch()
            },
            addSelectedChoice: function(b) {
                var c = this.getVal(),
                    d = this;
                a(b).each(function() {
                    c.push(d.createChoice(this))
                }), this.setVal(c)
            },
            createChoice: function(c) {
                var d, e, f = !c.locked,
                    g = a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                    h = a("<li class='select2-search-choice select2-locked'><div></div></li>"),
                    i = f ? g : h,
                    j = this.id(c);
                return d = this.opts.formatSelection(c, i.find("div"), this.opts.escapeMarkup), d != b && i.find("div").replaceWith(a("<div></div>").html(d)), e = this.opts.formatSelectionCssClass(c, i.find("div")), e != b && i.addClass(e), f && i.find(".select2-search-choice-close").on("mousedown", p).on("click dblclick", this.bind(function(b) {
                    this.isInterfaceEnabled() && (this.unselect(a(b.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), p(b), this.close(), this.focusSearch())
                })).on("focus", this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                })), i.data("select2-data", c), i.insertBefore(this.searchContainer), j
            },
            unselect: function(b) {
                var c, d, f = this.getVal();
                if (b = b.closest(".select2-search-choice"), 0 === b.length) throw "Invalid argument: " + b + ". Must be .select2-search-choice";
                if (c = b.data("select2-data")) {
                    var g = a.Event("select2-removing");
                    if (g.val = this.id(c), g.choice = c, this.opts.element.trigger(g), g.isDefaultPrevented()) return !1;
                    for (;
                        (d = e(this.id(c), f)) >= 0;) f.splice(d, 1), this.setVal(f), this.select && this.postprocessResults();
                    return b.remove(), this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(c),
                        choice: c
                    }), this.triggerChange({
                        removed: c
                    }), !0
                }
            },
            postprocessResults: function(a, b, c) {
                var d = this.getVal(),
                    f = this.results.find(".select2-result"),
                    g = this.results.find(".select2-result-with-children"),
                    h = this;
                f.each2(function(a, b) {
                    var c = h.id(b.data("select2-data"));
                    e(c, d) >= 0 && (b.addClass("select2-selected"), b.find(".select2-result-selectable").addClass("select2-selected"))
                }), g.each2(function(a, b) {
                    b.is(".select2-result-selectable") || 0 !== b.find(".select2-result-selectable:not(.select2-selected)").length || b.addClass("select2-selected")
                }), this.highlight() == -1 && c !== !1 && this.opts.closeOnSelect === !0 && h.highlight(0), !this.opts.createSearchChoice && !f.filter(".select2-result:not(.select2-selected)").length > 0 && (!a || a && !a.more && 0 === this.results.find(".select2-no-results").length) && y(h.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + z(h.opts.formatNoMatches, h.opts.element, h.search.val()) + "</li>")
            },
            getMaxSearchWidth: function() {
                return this.selection.width() - i(this.search)
            },
            resizeSearch: function() {
                var a, b, c, d, e, f = i(this.search);
                a = r(this.search) + 10, b = this.search.offset().left, c = this.selection.width(), d = this.selection.offset().left, e = c - (b - d) - f, e < a && (e = c - f), e < 40 && (e = c - f), e <= 0 && (e = a), this.search.width(Math.floor(e))
            },
            getVal: function() {
                var a;
                return this.select ? (a = this.select.val(), null === a ? [] : a) : (a = this.opts.element.val(), h(a, this.opts.separator, this.opts.transformVal))
            },
            setVal: function(b) {
                if (this.select) this.select.val(b);
                else {
                    var c = [],
                        d = {};
                    a(b).each(function() {
                        this in d || (c.push(this), d[this] = 0)
                    }), this.opts.element.val(0 === c.length ? "" : c.join(this.opts.separator))
                }
            },
            buildChangeDetails: function(a, b) {
                for (var b = b.slice(0), a = a.slice(0), c = 0; c < b.length; c++)
                    for (var d = 0; d < a.length; d++)
                        if (g(this.opts.id(b[c]), this.opts.id(a[d]))) {
                            b.splice(c, 1), c--, a.splice(d, 1);
                            break
                        }
                return {
                    added: b,
                    removed: a
                }
            },
            val: function(c, d) {
                var e, f = this;
                if (0 === arguments.length) return this.getVal();
                if (e = this.data(), e.length || (e = []), !c && 0 !== c) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), void(d && this.triggerChange({
                    added: this.data(),
                    removed: e
                }));
                if (this.setVal(c), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), d && this.triggerChange(this.buildChangeDetails(e, this.data()));
                else {
                    if (this.opts.initSelection === b) throw new Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function(b) {
                        var c = a.map(b, f.id);
                        f.setVal(c), f.updateSelection(b), f.clearSearch(), d && f.triggerChange(f.buildChangeDetails(e, f.data()))
                    })
                }
                this.clearSearch()
            },
            onSortStart: function() {
                if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0), this.searchContainer.hide()
            },
            onSortEnd: function() {
                var b = [],
                    c = this;
                this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
                    b.push(c.opts.id(a(this).data("select2-data")))
                }), this.setVal(b), this.triggerChange()
            },
            data: function(b, c) {
                var d, e, f = this;
                return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function() {
                    return a(this).data("select2-data")
                }).get() : (e = this.data(), b || (b = []), d = a.map(b, function(a) {
                    return f.opts.id(a)
                }), this.setVal(d), this.updateSelection(b), this.clearSearch(), c && this.triggerChange(this.buildChangeDetails(e, this.data())), void 0)
            }
        }), a.fn.select2 = function() {
            var c, d, f, g, h, i = Array.prototype.slice.call(arguments, 0),
                j = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
                k = ["opened", "isFocused", "container", "dropdown"],
                l = ["val", "data"],
                m = {
                    search: "externalSearch"
                };
            return this.each(function() {
                if (0 === i.length || "object" == typeof i[0]) c = 0 === i.length ? {} : a.extend({}, i[0]), c.element = a(this), "select" === c.element.get(0).tagName.toLowerCase() ? h = c.element.prop("multiple") : (h = c.multiple || !1, "tags" in c && (c.multiple = h = !0)), d = h ? new window.Select2["class"].multi : new window.Select2["class"].single, d.init(c);
                else {
                    if ("string" != typeof i[0]) throw "Invalid arguments to select2 plugin: " + i;
                    if (e(i[0], j) < 0) throw "Unknown method: " + i[0];
                    if (g = b, d = a(this).data("select2"), d === b) return;
                    if (f = i[0], "container" === f ? g = d.container : "dropdown" === f ? g = d.dropdown : (m[f] && (f = m[f]), g = d[f].apply(d, i.slice(1))), e(i[0], k) >= 0 || e(i[0], l) >= 0 && 1 == i.length) return !1
                }
            }), g === b ? this : g
        }, a.fn.select2.defaults = {
            debug: !1,
            width: "copy",
            loadMorePadding: 0,
            closeOnSelect: !0,
            openOnEnter: !0,
            containerCss: {},
            dropdownCss: {},
            containerCssClass: "",
            dropdownCssClass: "",
            formatResult: function(a, b, c, d) {
                var e = [];
                return t(this.text(a), c.term, e, d), e.join("")
            },
            transformVal: function(b) {
                return a.trim(b)
            },
            formatSelection: function(a, c, d) {
                return a ? d(this.text(a)) : b
            },
            sortResults: function(a, b, c) {
                return a
            },
            formatResultCssClass: function(a) {
                return a.css
            },
            formatSelectionCssClass: function(a, c) {
                return b
            },
            minimumResultsForSearch: 0,
            minimumInputLength: 0,
            maximumInputLength: null,
            maximumSelectionSize: 0,
            id: function(a) {
                return a == b ? null : a.id
            },
            text: function(b) {
                return b && this.data && this.data.text ? a.isFunction(this.data.text) ? this.data.text(b) : b[this.data.text] : b.text
            },
            matcher: function(a, b) {
                return d("" + b).toUpperCase().indexOf(d("" + a).toUpperCase()) >= 0
            },
            separator: ",",
            tokenSeparators: [],
            tokenizer: B,
            escapeMarkup: u,
            blurOnChange: !1,
            selectOnBlur: !1,
            adaptContainerCssClass: function(a) {
                return a
            },
            adaptDropdownCssClass: function(a) {
                return null
            },
            nextSearchTerm: function(a, c) {
                return b
            },
            searchInputPlaceholder: "",
            createSearchChoicePosition: "top",
            shouldFocusInput: function(a) {
                var b = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
                return !b || !(a.opts.minimumResultsForSearch < 0)
            }
        }, a.fn.select2.locales = [], a.fn.select2.locales.en = {
            formatMatches: function(a) {
                return 1 === a ? "One result is available, press enter to select it." : a + " results are available, use up and down arrow keys to navigate."
            },
            formatNoMatches: function() {
                return "No matches found"
            },
            formatAjaxError: function(a, b, c) {
                return "Loading failed"
            },
            formatInputTooShort: function(a, b) {
                var c = b - a.length;
                return "Please enter " + c + " or more character" + (1 == c ? "" : "s")
            },
            formatInputTooLong: function(a, b) {
                var c = a.length - b;
                return "Please delete " + c + " character" + (1 == c ? "" : "s")
            },
            formatSelectionTooBig: function(a) {
                return "You can only select " + a + " item" + (1 == a ? "" : "s")
            },
            formatLoadMore: function(a) {
                return "Loading more results…"
            },
            formatSearching: function() {
                return "Searching…"
            }
        }, a.extend(a.fn.select2.defaults, a.fn.select2.locales.en), a.fn.select2.ajaxDefaults = {
            transport: a.ajax,
            params: {
                type: "GET",
                cache: !1,
                dataType: "json"
            }
        }, window.Select2 = {
            query: {
                ajax: v,
                local: w,
                tags: x
            },
            util: {
                debounce: l,
                markMatch: t,
                escapeMarkup: u,
                stripDiacritics: d
            },
            "class": {
                "abstract": E,
                single: F,
                multi: G
            }
        }
    }
}(jQuery);
/*! This file is auto-generated */
! function(c, d) {
    "use strict";
    var e = !1,
        n = !1;
    if (d.querySelector)
        if (c.addEventListener) e = !0;
    if (c.wp = c.wp || {}, !c.wp.receiveEmbedMessage)
        if (c.wp.receiveEmbedMessage = function(e) {
                var t = e.data;
                if (t)
                    if (t.secret || t.message || t.value)
                        if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                            for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) n[o].style.display = "none";
                            for (o = 0; o < s.length; o++)
                                if (r = s[o], e.source === r.contentWindow) {
                                    if (r.removeAttribute("style"), "height" === t.message) {
                                        if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                        else if (~~i < 200) i = 200;
                                        r.height = i
                                    }
                                    if ("link" === t.message)
                                        if (a = d.createElement("a"), i = d.createElement("a"), a.href = r.getAttribute("src"), i.href = t.value, i.host === a.host)
                                            if (d.activeElement === r) c.top.location.href = t.value
                                }
                        }
            }, e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);

    function t() {
        if (!n) {
            n = !0;
            for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) {
                if (!(e = i[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t);
                if (r || a)(t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e)
            }
        }
    }
}(window, document);
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function($) {
        "function" != typeof window.vc_js && (window.vc_js = function() {
            "use strict";
            vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
                var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = !0;
                0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
                    animation: sliderFx,
                    slideshow: slideshow,
                    slideshowSpeed: sliderTimeout,
                    sliderSpeed: 800,
                    smoothHeight: !0
                })
            })
        }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
            0 < jQuery(".wpb_googleplus").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
            0 < jQuery(".wpb_pinterest").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.find(".vc_single_bar").each(function(index) {
                        var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function() {
                            bar.css({
                                width: val + "%"
                            })
                        }, 200 * index)
                    })
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.addClass("wpb_start_animation animated")
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
            function event(e) {
                e && e.preventDefault && e.preventDefault();
                var element = jQuery(this).closest(".vc_toggle"),
                    content = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? content.slideUp({
                    duration: 300,
                    complete: function() {
                        element.removeClass("vc_toggle_active")
                    }
                }) : content.slideDown({
                    duration: 300,
                    complete: function() {
                        element.addClass("vc_toggle_active")
                    }
                })
            }
            $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").on("click", event) : $el.find(".vc_toggle_title").off("click").on("click", event) : jQuery(".vc_toggle_title").off("click").on("click", event)
        }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
            if (jQuery.ui) {
                var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
                    ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                    old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9;
                $call.each(function(index) {
                    var $tabs, interval = jQuery(this).attr("data-interval"),
                        tabs_array = [];
                    if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                            show: function(event, ui) {
                                wpb_prepare_tab_content(event, ui)
                            },
                            activate: function(event, ui) {
                                wpb_prepare_tab_content(event, ui)
                            }
                        }), interval && 0 < interval) try {
                        $tabs.tabs("rotate", 1e3 * interval)
                    } catch (err) {
                        window.console && window.console.warn && console.warn("tabs behaviours error", err)
                    }
                    jQuery(this).find(".wpb_tab").each(function() {
                        tabs_array.push(this.id)
                    }), jQuery(this).find(".wpb_tabs_nav li").on("click", function(e) {
                        return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                    }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function(e) {
                        var index, length;
                        e && e.preventDefault && e.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
                    })
                })
            }
        }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
            jQuery(".wpb_accordion").each(function(index) {
                var $tabs, active_tab, collapsible, $this = jQuery(this);
                $this.attr("data-interval"), collapsible = !1 === (active_tab = !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1) || "yes" === $this.data("collapsible"), $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                    header: "> div > h3",
                    autoHeight: !1,
                    heightStyle: "content",
                    active: active_tab,
                    collapsible: collapsible,
                    navigation: !0,
                    activate: vc_accordionActivate,
                    change: function(event, ui) {
                        void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                    }
                }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
            })
        }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
            var layout_modes = {
                fitrows: "fitRows",
                masonry: "masonry"
            };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
                var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
                }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function(e) {
                    e && e.preventDefault && e.preventDefault();
                    var $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                        filter: jQuery(this).attr("data-filter")
                    })
                }), jQuery(window).bind("load resize", function() {
                    $thumbs.isotope("layout")
                })
            })
        }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
                var $this = jQuery(this);
                if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
                    $this.data("carousel_enabled", !0);
                    getColumnsCount(jQuery(this));
                    jQuery(this).hasClass("columns_count_1") && 900;
                    var carousel_li = jQuery(this).find(".wpb_thumbnails-fluid li");
                    carousel_li.css({
                        "margin-right": carousel_li.css("margin-left"),
                        "margin-left": 0
                    });
                    var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
                    fluid_ul.width(fluid_ul.width() + 300), jQuery(window).on("resize", function() {
                        screen_size != (screen_size = getSizeName()) && window.setTimeout(function() {
                            location.reload()
                        }, 20)
                    })
                }
            })
        }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
            jQuery(".wpb_gallery_slides").each(function(index) {
                var $imagesGrid, this_element = jQuery(this);
                if (this_element.hasClass("wpb_slider_nivo")) {
                    var sliderTimeout = 1e3 * this_element.attr("data-interval");
                    0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                        effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                        slices: 15,
                        boxCols: 8,
                        boxRows: 4,
                        animSpeed: 800,
                        pauseTime: sliderTimeout,
                        startSlide: 0,
                        directionNav: !0,
                        directionNavHide: !0,
                        controlNav: !0,
                        keyboardNav: !1,
                        pauseOnHover: !0,
                        manualAdvance: !1,
                        prevText: "Prev",
                        nextText: "Next"
                    })
                } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                    $imagesGrid.isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows"
                    })
                }) : this_element.find(".wpb_image_grid_ul").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                }))
            })
        }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
            try {
                jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                    animationSpeed: "normal",
                    hook: "data-rel",
                    padding: 15,
                    opacity: .7,
                    showTitle: !0,
                    allowresize: !0,
                    counter_separator_label: "/",
                    hideflash: !1,
                    deeplinking: !1,
                    modal: !1,
                    callback: function() {
                        -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                    },
                    social_tools: ""
                })
            } catch (err) {
                window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
            }
        }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
            return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
        }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
            var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

            function fullWidthRow() {
                var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function(key, item) {
                    var $el = $(this);
                    $el.addClass("vc_hidden");
                    var $el_full = $el.next(".vc_row-full-width");
                    if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                        var padding, paddingRight, el_margin_left = parseInt($el.css("margin-left"), 10),
                            el_margin_right = parseInt($el.css("margin-right"), 10),
                            offset = 0 - $el_full.offset().left - el_margin_left,
                            width = $(window).width();
                        if ("rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                                position: "relative",
                                left: offset,
                                "box-sizing": "border-box",
                                width: width
                            }), !$el.data("vcStretchContent")) "rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({
                            "padding-left": padding + "px",
                            "padding-right": paddingRight + "px"
                        });
                        $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                            el: $el,
                            offset: offset,
                            marginLeft: el_margin_left,
                            marginRight: el_margin_right,
                            elFull: $el_full,
                            width: width
                        })
                    }
                }), $(document).trigger("vc-full-width-row", $elements)
            }

            function fullHeightRow() {
                var windowHeight, offsetTop, fullHeight, $element = $(".vc_row-o-full-height:first");
                $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh")));
                $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
                var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrSize - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
            }), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function() {
                    return !1
                }
            }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
        }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
        }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        });
        var screen_size = getSizeName();

        function getSizeName() {
            var screen_w = jQuery(window).width();
            return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
        }
        "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
            var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $line_charts = panel.find(".vc_line-chart"),
                $carousel = panel.find('[data-ride="vc_carousel"]');
            if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                    reload: !1
                }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                    reload: !1
                }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
                var $frame = $google_maps.find("iframe");
                $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
            }
            panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
                jQuery(this).isotope("layout")
            })
        }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function() {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
                var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
            })
        }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function(event, ui) {
            if (ui.newPanel.length && ui.newHeader.length) {
                var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
                    $round_charts = ui.newPanel.find(".vc_round-chart"),
                    $line_charts = ui.newPanel.find(".vc_line-chart"),
                    $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
                void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                    reload: !1
                }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                    reload: !1
                }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
                    jQuery(this).isotope("layout")
                })
            }
        }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function() {
            return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
        }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function() {
            jQuery("[data-vc-video-bg]").each(function() {
                var youtubeUrl, youtubeId, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeUrl)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
                    $element.has($grid).length && vcResizeVideoBackground($element)
                })) : $element.find(".vc_video-bg").remove()
            })
        }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++)
            }, 100);
            var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], {
                width: "100%",
                height: "100%",
                videoId: youtubeId,
                playerVars: {
                    playlist: youtubeId,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    wmode: "transparent"
                },
                events: {
                    onReady: function(event) {
                        event.target.mute().setLoop(!0)
                    }
                }
            }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function() {
                vcResizeVideoBackground($element)
            })
        }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            })
        }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function(url) {
            if (void 0 === url) return !1;
            var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            return null !== id && id[1]
        }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function() {
            var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function() {
                $("iframe", this).css("pointer-events", "auto")
            }), $wpbGmapsWidget.on("mouseleave", function() {
                $("iframe", this).css("pointer-events", "none")
            }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
        }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    perspective = 4 * $this.width() + "px";
                $this.css("perspective", perspective)
            })
        }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    hoverBoxInner = $this.find(".vc-hoverbox-inner");
                hoverBoxInner.css("min-height", 0);
                var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
                    backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
                    hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
                hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
            })
        }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function() {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
        }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).resize(window.vc_prepareHoverBox), jQuery(document).ready(function($) {
            window.vc_js()
        })
    }(window.jQuery);

"use strict";
! function() {
    function t(t) {
        if ("undefined" == typeof t) throw new Error('Pathformer [constructor]: "element" parameter is required');
        if (t.constructor === String && (t = document.getElementById(t), !t)) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
        if (!(t instanceof window.SVGElement || t instanceof window.SVGGElement || /^svg$/i.test(t.nodeName))) throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
        this.el = t, this.scan(t)
    }

    function e(t, e, n) {
        r(), this.isReady = !1, this.setElement(t, e), this.setOptions(e), this.setCallback(n), this.isReady && this.init()
    }
    t.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"], t.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"], t.prototype.scan = function(t) {
        for (var e, r, n, i, a = t.querySelectorAll(this.TYPES.join(",")), o = 0; o < a.length; o++) r = a[o], e = this[r.tagName.toLowerCase() + "ToPath"], n = e(this.parseAttr(r.attributes)), i = this.pathMaker(r, n), r.parentNode.replaceChild(i, r)
    }, t.prototype.lineToPath = function(t) {
        var e = {},
            r = t.x1 || 0,
            n = t.y1 || 0,
            i = t.x2 || 0,
            a = t.y2 || 0;
        return e.d = "M" + r + "," + n + "L" + i + "," + a, e
    }, t.prototype.rectToPath = function(t) {
        var e = {},
            r = parseFloat(t.x) || 0,
            n = parseFloat(t.y) || 0,
            i = parseFloat(t.width) || 0,
            a = parseFloat(t.height) || 0;
        if (t.rx || t.ry) {
            var o = parseInt(t.rx, 10) || -1,
                s = parseInt(t.ry, 10) || -1;
            o = Math.min(Math.max(0 > o ? s : o, 0), i / 2), s = Math.min(Math.max(0 > s ? o : s, 0), a / 2), e.d = "M " + (r + o) + "," + n + " L " + (r + i - o) + "," + n + " A " + o + "," + s + ",0,0,1," + (r + i) + "," + (n + s) + " L " + (r + i) + "," + (n + a - s) + " A " + o + "," + s + ",0,0,1," + (r + i - o) + "," + (n + a) + " L " + (r + o) + "," + (n + a) + " A " + o + "," + s + ",0,0,1," + r + "," + (n + a - s) + " L " + r + "," + (n + s) + " A " + o + "," + s + ",0,0,1," + (r + o) + "," + n
        } else e.d = "M" + r + " " + n + " L" + (r + i) + " " + n + " L" + (r + i) + " " + (n + a) + " L" + r + " " + (n + a) + " Z";
        return e
    }, t.prototype.polylineToPath = function(t) {
        var e, r, n = {},
            i = t.points.trim().split(" ");
        if (-1 === t.points.indexOf(",")) {
            var a = [];
            for (e = 0; e < i.length; e += 2) a.push(i[e] + "," + i[e + 1]);
            i = a
        }
        for (r = "M" + i[0], e = 1; e < i.length; e++) - 1 !== i[e].indexOf(",") && (r += "L" + i[e]);
        return n.d = r, n
    }, t.prototype.polygonToPath = function(e) {
        var r = t.prototype.polylineToPath(e);
        return r.d += "Z", r
    }, t.prototype.ellipseToPath = function(t) {
        var e = {},
            r = parseFloat(t.rx) || 0,
            n = parseFloat(t.ry) || 0,
            i = parseFloat(t.cx) || 0,
            a = parseFloat(t.cy) || 0,
            o = i - r,
            s = a,
            h = parseFloat(i) + parseFloat(r),
            l = a;
        return e.d = "M" + o + "," + s + "A" + r + "," + n + " 0,1,1 " + h + "," + l + "A" + r + "," + n + " 0,1,1 " + o + "," + l, e
    }, t.prototype.circleToPath = function(t) {
        var e = {},
            r = parseFloat(t.r) || 0,
            n = parseFloat(t.cx) || 0,
            i = parseFloat(t.cy) || 0,
            a = n - r,
            o = i,
            s = parseFloat(n) + parseFloat(r),
            h = i;
        return e.d = "M" + a + "," + o + "A" + r + "," + r + " 0,1,1 " + s + "," + h + "A" + r + "," + r + " 0,1,1 " + a + "," + h, e
    }, t.prototype.pathMaker = function(t, e) {
        var r, n, i = document.createElementNS("http://www.w3.org/2000/svg", "path");
        for (r = 0; r < t.attributes.length; r++) n = t.attributes[r], -1 === this.ATTR_WATCH.indexOf(n.name) && i.setAttribute(n.name, n.value);
        for (r in e) i.setAttribute(r, e[r]);
        return i
    }, t.prototype.parseAttr = function(t) {
        for (var e, r = {}, n = 0; n < t.length; n++) {
            if (e = t[n], -1 !== this.ATTR_WATCH.indexOf(e.name) && -1 !== e.value.indexOf("%")) throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
            r[e.name] = e.value
        }
        return r
    };
    var r, n, i, a;
    e.LINEAR = function(t) {
        return t
    }, e.EASE = function(t) {
        return -Math.cos(t * Math.PI) / 2 + .5
    }, e.EASE_OUT = function(t) {
        return 1 - Math.pow(1 - t, 3)
    }, e.EASE_IN = function(t) {
        return Math.pow(t, 3)
    }, e.EASE_OUT_BOUNCE = function(t) {
        var e = -Math.cos(.5 * t * Math.PI) + 1,
            r = Math.pow(e, 1.5),
            n = Math.pow(1 - t, 2),
            i = -Math.abs(Math.cos(2.5 * r * Math.PI)) + 1;
        return 1 - n + i * n
    }, e.prototype.setElement = function(t, e) {
        if ("undefined" == typeof t) throw new Error('Vivus [constructor]: "element" parameter is required');
        if (t.constructor === String && (t = document.getElementById(t), !t)) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
        if (this.parentEl = t, e && e.file) {
            var r = document.createElement("object");
            r.setAttribute("type", "image/svg+xml"), r.setAttribute("data", e.file), r.setAttribute("built-by-vivus", "true"), t.appendChild(r), t = r
        }
        switch (t.constructor) {
            case window.SVGSVGElement:
            case window.SVGElement:
            case window.SVGGElement:
                this.el = t, this.isReady = !0;
                break;
            case window.HTMLObjectElement:
                var n, i;
                i = this, n = function(e) {
                    if (!i.isReady) {
                        if (i.el = t.contentDocument && t.contentDocument.querySelector("svg"), !i.el && e) throw new Error("Vivus [constructor]: object loaded does not contain any SVG");
                        return i.el ? (t.getAttribute("built-by-vivus") && (i.parentEl.insertBefore(i.el, t), i.parentEl.removeChild(t), i.el.setAttribute("width", "100%"), i.el.setAttribute("height", "100%")), i.isReady = !0, i.init(), !0) : void 0
                    }
                }, n() || t.addEventListener("load", n);
                break;
            default:
                throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')
        }
    }, e.prototype.setOptions = function(t) {
        var r = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"],
            n = ["inViewport", "manual", "autostart"];
        if (void 0 !== t && t.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object');
        if (t = t || {}, t.type && -1 === r.indexOf(t.type)) throw new Error("Vivus [constructor]: " + t.type + " is not an existing animation `type`");
        if (this.type = t.type || r[0], t.start && -1 === n.indexOf(t.start)) throw new Error("Vivus [constructor]: " + t.start + " is not an existing `start` option");
        if (this.start = t.start || n[0], this.isIE = -1 !== window.navigator.userAgent.indexOf("MSIE") || -1 !== window.navigator.userAgent.indexOf("Trident/") || -1 !== window.navigator.userAgent.indexOf("Edge/"), this.duration = a(t.duration, 120), this.delay = a(t.delay, null), this.dashGap = a(t.dashGap, 1), this.forceRender = t.hasOwnProperty("forceRender") ? !!t.forceRender : this.isIE, this.reverseStack = !!t.reverseStack, this.selfDestroy = !!t.selfDestroy, this.onReady = t.onReady, this.map = [], this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null, this.ignoreInvisible = t.hasOwnProperty("ignoreInvisible") ? !!t.ignoreInvisible : !1, this.animTimingFunction = t.animTimingFunction || e.LINEAR, this.pathTimingFunction = t.pathTimingFunction || e.LINEAR, this.delay >= this.duration) throw new Error("Vivus [constructor]: delay must be shorter than duration")
    }, e.prototype.setCallback = function(t) {
        if (t && t.constructor !== Function) throw new Error('Vivus [constructor]: "callback" parameter must be a function');
        this.callback = t || function() {}
    }, e.prototype.mapping = function() {
        var t, e, r, n, i, o, s, h;
        for (h = o = s = 0, e = this.el.querySelectorAll("path"), t = 0; t < e.length; t++) r = e[t], this.isInvisible(r) || (i = {
            el: r,
            length: Math.ceil(r.getTotalLength())
        }, isNaN(i.length) ? window.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", r) : (this.map.push(i), r.style.strokeDasharray = i.length + " " + (i.length + 2 * this.dashGap), r.style.strokeDashoffset = i.length + this.dashGap, i.length += this.dashGap, o += i.length, this.renderPath(t)));
        for (o = 0 === o ? 1 : o, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (e.length > 1 ? e.length - 1 : 1), this.reverseStack && this.map.reverse(), t = 0; t < this.map.length; t++) {
            switch (i = this.map[t], this.type) {
                case "delayed":
                    i.startAt = this.delayUnit * t, i.duration = this.duration - this.delay;
                    break;
                case "oneByOne":
                    i.startAt = s / o * this.duration, i.duration = i.length / o * this.duration;
                    break;
                case "sync":
                case "async":
                case "nsync":
                    i.startAt = 0, i.duration = this.duration;
                    break;
                case "scenario-sync":
                    r = i.el, n = this.parseAttr(r), i.startAt = h + (a(n["data-delay"], this.delayUnit) || 0), i.duration = a(n["data-duration"], this.duration), h = void 0 !== n["data-async"] ? i.startAt : i.startAt + i.duration, this.frameLength = Math.max(this.frameLength, i.startAt + i.duration);
                    break;
                case "scenario":
                    r = i.el, n = this.parseAttr(r), i.startAt = a(n["data-start"], this.delayUnit) || 0, i.duration = a(n["data-duration"], this.duration), this.frameLength = Math.max(this.frameLength, i.startAt + i.duration)
            }
            s += i.length, this.frameLength = this.frameLength || this.duration
        }
    }, e.prototype.drawer = function() {
        var t = this;
        if (this.currentFrame += this.speed, this.currentFrame <= 0) this.stop(), this.reset();
        else {
            if (!(this.currentFrame >= this.frameLength)) return this.trace(), this.handle = n(function() {
                t.drawer()
            }), void 0;
            this.stop(), this.currentFrame = this.frameLength, this.trace(), this.selfDestroy && this.destroy()
        }
        this.callback(this), this.instanceCallback && (this.instanceCallback(this), this.instanceCallback = null)
    }, e.prototype.trace = function() {
        var t, e, r, n;
        for (n = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, t = 0; t < this.map.length; t++) r = this.map[t], e = (n - r.startAt) / r.duration, e = this.pathTimingFunction(Math.max(0, Math.min(1, e))), r.progress !== e && (r.progress = e, r.el.style.strokeDashoffset = Math.floor(r.length * (1 - e)), this.renderPath(t))
    }, e.prototype.renderPath = function(t) {
        if (this.forceRender && this.map && this.map[t]) {
            var e = this.map[t],
                r = e.el.cloneNode(!0);
            e.el.parentNode.replaceChild(r, e.el), e.el = r
        }
    }, e.prototype.init = function() {
        this.frameLength = 0, this.currentFrame = 0, this.map = [], new t(this.el), this.mapping(), this.starter(), this.onReady && this.onReady(this)
    }, e.prototype.starter = function() {
        switch (this.start) {
            case "manual":
                return;
            case "autostart":
                this.play();
                break;
            case "inViewport":
                var t = this,
                    e = function() {
                        t.isInViewport(t.parentEl, 1) && (t.play(), window.removeEventListener("scroll", e))
                    };
                window.addEventListener("scroll", e), e()
        }
    }, e.prototype.getStatus = function() {
        return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress"
    }, e.prototype.reset = function() {
        return this.setFrameProgress(0)
    }, e.prototype.finish = function() {
        return this.setFrameProgress(1)
    }, e.prototype.setFrameProgress = function(t) {
        return t = Math.min(1, Math.max(0, t)), this.currentFrame = Math.round(this.frameLength * t), this.trace(), this
    }, e.prototype.play = function(t, e) {
        if (this.instanceCallback = null, t && "function" == typeof t) this.instanceCallback = t, t = null;
        else if (t && "number" != typeof t) throw new Error("Vivus [play]: invalid speed");
        return e && "function" == typeof e && !this.instanceCallback && (this.instanceCallback = e), this.speed = t || 1, this.handle || this.drawer(), this
    }, e.prototype.stop = function() {
        return this.handle && (i(this.handle), this.handle = null), this
    }, e.prototype.destroy = function() {
        this.stop();
        var t, e;
        for (t = 0; t < this.map.length; t++) e = this.map[t], e.el.style.strokeDashoffset = null, e.el.style.strokeDasharray = null, this.renderPath(t)
    }, e.prototype.isInvisible = function(t) {
        var e, r = t.getAttribute("data-ignore");
        return null !== r ? "false" !== r : this.ignoreInvisible ? (e = t.getBoundingClientRect(), !e.width && !e.height) : !1
    }, e.prototype.parseAttr = function(t) {
        var e, r = {};
        if (t && t.attributes)
            for (var n = 0; n < t.attributes.length; n++) e = t.attributes[n], r[e.name] = e.value;
        return r
    }, e.prototype.isInViewport = function(t, e) {
        var r = this.scrollY(),
            n = r + this.getViewportH(),
            i = t.getBoundingClientRect(),
            a = i.height,
            o = r + i.top,
            s = o + a;
        return e = e || 0, n >= o + a * e && s >= r
    }, e.prototype.getViewportH = function() {
        var t = this.docElem.clientHeight,
            e = window.innerHeight;
        return e > t ? e : t
    }, e.prototype.scrollY = function() {
        return window.pageYOffset || this.docElem.scrollTop
    }, r = function() {
        e.prototype.docElem || (e.prototype.docElem = window.document.documentElement, n = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                return window.setTimeout(t, 1e3 / 60)
            }
        }(), i = function() {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                return window.clearTimeout(t)
            }
        }())
    }, a = function(t, e) {
        var r = parseInt(t, 10);
        return r >= 0 ? r : e
    }, "function" == typeof define && define.amd ? define([], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : window.Vivus = e
}();