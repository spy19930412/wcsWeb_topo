window.Q = function(t, i, n) {
    "use strict";

    function e(t, i, n) {
        if (t.hasChildren()) {
            var s = t._fm || t[Gh]();
            if (s) { s = s._jk || s;
                for (var h = 0, r = s.length; r > h; h++)
                    if (i[zh](n, s[h]) === !1 || e(s[h], i, n) === !1) return !1;
                return !0 } } }

    function s(t) {
        if (!t[qh]()) return t instanceof LH ? t : null;
        for (var i, n = t._fm._jk, e = n[Yh] - 1; e >= 0;) {
            if (i = n[e], i = s(i)) return i;
            e-- }
        return null }

    function h(t, i, n, e) {
        return e ? r(t, i, n) : a(t, i, n) }

    function r(t, i, n) { t = t._jk || t;
        for (var e, s = 0, h = t.length; h > s; s++)
            if (e = t[s], e[qh]() && !r(e.children, i, n) || i[zh](n, e) === !1) return !1;
        return !0 }

    function a(t, i, n) { t = t._jk || t;
        for (var e, s = 0, h = t[Yh]; h > s; s++)
            if (e = t[s], i.call(n, e) === !1 || e[qh]() && !a(e[Hh], i, n)) return !1;
        return !0 }

    function o(t, i, n, e) {
        return e ? f(t, i, n) : c(t, i, n) }

    function f(t, i, n) { t = t._jk || t;
        for (var e, s = t[Yh], h = s - 1; h >= 0; h--)
            if (e = t[h], e[qh]() && !f(e.children, i, n) || i.call(n, e) === !1) return !1;
        return !0 }

    function c(t, i, n) { t = t._jk || t;
        for (var e, s = t.length, h = s - 1; h >= 0; h--)
            if (e = t[h], i[zh](n, e) === !1 || e[qh]() && !c(e[Hh], i, n)) return !1;
        return !0 }

    function u(t, i, n) {
        for (var e, s = (t._jk || t)[Uh](0); s.length;) { e = s[0], s = s.splice(1);
            var h = i[zh](n, e);
            if (h === !1) return !1;
            if (e[qh]()) {
                var r = e[Hh];
                r = r._jk || r, s = s.concat(r) } }
        return !0 }

    function _(t, i, n) {
        for (var e, s = (t._jk || t).slice(0); s[Yh];) { e = s[s.length - 1], s = s[Wh](0, s[Yh] - 1);
            var h = i[zh](n, e);
            if (h === !1) return !1;
            if (e.hasChildren()) {
                var r = e[Hh];
                r = r._jk || r, s = s[Vh](r) } }
        return !0 }

    function d(t, i) {
        function n(t, n) {
            for (var e = t.length, s = n[Yh], h = e + s, r = new Array(h), a = 0, o = 0, f = 0; h > f;) r[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return r }

        function e(t) {
            var i = t[Yh],
                s = Math[Xh](i / 2);
            return 1 >= i ? t : n(e(t[Uh](0, s)), e(t[Uh](s))) }
        return e(t) }

    function l(t, i, n, e) { t instanceof uz && (t = t._jk);
        for (var s = 0, h = (t._jk || t).length; h > s; s++) {
            var r = i[zh](n, t[s], s, e);
            if (r === !1) return !1 }
        return !0 }

    function v(t, i, n) {
        for (var e = t instanceof uz, s = t._jk || t, h = 0, r = s[Yh]; r > h; h++) {
            var a = s[h];
            i[zh](n, a) && (e ? t[Kh](a) : t[Wh](h, 1), h--, r--) } }

    function b(t, i, n, e) { t instanceof uz && (t = t._jk);
        for (var s = (t._jk || t).length - 1; s >= 0; s--) {
            var h = i.call(n, t[s], s, e);
            if (h === !1) return !1 }
        return !0 }

    function y(t) {
        if (t[Zh] instanceof Function) return t[Zh](!0);
        var i, n = [];
        return l(t, function(t) { i = t && t[Zh] instanceof Function ? t.clone() : t, n[Jh](i) }, this), n }

    function g(t, i, e) { e === n || 0 > e ? t[Jh](i) : t[Wh](e, 0, i) }

    function m(t, i) {
        var n = t[Qh](i);
        return 0 > n || n >= t[Yh] ? !1 : t.splice(n, 1) }

    function x(t, i) {
        var n = !1;
        return l(t, function(t) {
            return i == t ? (n = !0, !1) : void 0 }), n }

    function E(t, i) {
        var n = t;
        for (var e in i)
            if (i.__lookupGetter__) {
                var s = i.__lookupGetter__(e),
                    h = i.__lookupSetter__(e);
                s || h ? (s && n.__defineGetter__(e, s), h && n.__defineSetter__(e, h)) : n[e] = i[e] } else n[e] = i[e];
        return n }

    function p(t, i, n) {
        if (!(t instanceof Function)) throw new Error("subclass must be type of Function");
        var e = null;
        tr == typeof i && (e = i, i = t, t = function() { i[ir](this, arguments) });
        var s = t[nr],
            h = function() {};
        return h[nr] = i[nr], t[nr] = new h, t[er] = i[nr], t[er].constructor = i, E(t[nr], s), e && E(t[nr], e), n && E(t.prototype, n), t[nr][sr] = t, t }

    function w(t, i, n) {
        return T(t, i, "constructor", n) }

    function T(t, i, n, e) {
        var s = i.superclass;
        if (s) {
            var h = s[n];
            return h ? h[ir](t, e) : void 0 } }

    function k(t, i, n, e) {
        if ("constructor" == n) return M(t, i, e);
        if (i[hr] instanceof Function) {
            var s = i[hr][nr][n];
            return s instanceof Function ? s[ir](t, e) : void 0 } }

    function M(t, i, n) {
        return i[hr] instanceof Function ? i[hr].apply(t, n) : void 0 }

    function O(t, i) {
        return t[hr] = i, t.prototype = Object[rr](i[nr], { super_: { value: i, enumerable: !1 }, constructor: { value: t, enumerable: !1 } }), t }

    function I(t, i, n) {
        if (!(t instanceof Function) && t instanceof Object) { i = t[ar];
            var e;
            return t.hasOwnProperty("constructor") ? (e = t.constructor, delete t.constructor) : e = i ? function() { i[ir](this, arguments) } : function() {}, I(e, i, t) }
        if (i && !(i instanceof Function) && i instanceof Object) return I(t, i[ar], i);
        if (i && O(t, i), n) {
            var s = t[nr];
            for (var h in n) s[h] = n[h] }
        return t }

    function S(t, i, e, s, h) {
        if (s) return void Object[or](t, i, { value: e, enumerable: !0 });
        var r = { configurable: !0, enumerable: !0 },
            a = fr + i;
        e !== n && (t[a] = e), r.get = function() {
            return this[a] }, r.set = function(t) {
            var n = this[a];
            if (n == t) return !1;
            var e = new jz(this, i, t, n);
            return this[cr](e) ? (this[a] = t, h && h[zh](this, t, n), this[ur](e), !0) : !1 }, Object.defineProperty(t, i, r) }

    function j(t, i) {
        for (var n = 0, e = i[Yh]; e > n; n++) {
            var s = i[n];
            S(t, s[_r] || s, s[dr] || s[lr], s[vr], s.onSetting) } }

    function A(t, i, n) {
        return i instanceof Object ? t = t[br](i) : i && !n && (n = parseInt(i)), i && !n && (n = parseInt(i)), n ? setTimeout(t, n) : setTimeout(t) }

    function C(i, n) {
        return n && (i = i[br](n)), t[yr](i) }

    function L(t, i) {
        return t.className = i, t }

    function P(t, i) {
        if (!t.hasOwnProperty(gr)) {
            var n = t[mr](sr);
            if (!n) return L(t, i);
            for (var e = n.split(xr), s = 0, h = e[Yh]; h > s; s++)
                if (e[s] == i) return;
            return n += xr + i, L(t, n) }
        t[gr].add(i) }

    function R(t, i) {
        if (!t.hasOwnProperty(gr)) {
            var n = t[mr](sr);
            if (!n || !n[Qh](i)) return;
            for (var e = "", s = n.split(xr), h = 0, r = s[Yh]; r > h; h++) s[h] != i && (e += s[h] + xr);
            return L(t, e) }
        t[gr][Kh](i) }

    function D(t) {
        return !isNaN(t) && t instanceof Number || Er == typeof t }

    function N(t) {
        return t !== n && (t instanceof String || pr == typeof t) }

    function B(t) {
        return t !== n && (t instanceof Boolean || wr == typeof t) }

    function $(t) {
        return Array[Tr](t) }

    function F(i) { i || (i = t.event), i[kr] ? i[kr]() : i.returnValue = !1 }

    function G(i) { i || (i = t[Mr]), i[Or] ? i[Or]() : i[Ir] || (i[Ir] = !0) }

    function z(t) { F(t), G(t) }

    function q(t) {
        return Math[Sr](Math[jr]() * t) }

    function Y() {
        return Math[jr]() >= .5 }

    function H(t) {
        var i = !0;
        for (var n in t) { i = !1;
            break }
        return i }

    function U(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math[Sr](16777215 * Math[jr]());
            return Ar + (i >> 16 & 255) + Cr + (i >> 8 & 255) + Cr + (255 & i) + Cr + t[Lr](2) + Pr }
        return X(Math[Sr](16777215 * Math.random())) }

    function W(t) {
        return t > 0 ? Math[Sr](t) : Math[Xh](t) }

    function V(t) {
        return t > 0 ? Math.ceil(t) : Math.floor(t) }

    function X(t) {
        return 16777216 > t ? Rr + (Dr + t.toString(16))[Uh](-6) : Ar + (t >> 16 & 255) + Cr + (t >> 8 & 255) + Cr + (255 & t) + Cr + ((t >> 24 & 255) / 255).toFixed(2) + Pr }

    function K(t, i, n) { tr != typeof n || n.hasOwnProperty(Nr) || (n[Nr] = !0), Object[or](t, i, n) }

    function Z(t, i) {
        for (var n in i)
            if (Br != n[0]) {
                var e = i[n];
                tr != typeof e || e.hasOwnProperty(Nr) || (e[Nr] = !0) }
        Object[$r](t, i) }

    function J(i, n) { n || (n = t);
        for (var e = i.split(Fr), s = 0, h = e.length; h > s; s++) {
            var r = e[s];
            n = n[r] }
        return n }

    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t[Gr] !== n }

    function ti(i) { t.console && console.log(i) }

    function ii(i) { t.console && console[zr](i) }

    function ni(i) { t.console && console.error(i) }

    function ei(t, i, n) {
        var e, s, h;
        0 == t._n5 ? (e = -1, h = 0, s = i) : 0 == t._n7 ? (e = 0, h = 1, s = n) : (e = -1 / t._n5, s = (t._n5 - e) * i + t._n6, h = 1);
        var r = new bz;
        return r._n5 = e, r._n6 = s, r._n7 = h, r._n2 = i, r._n0 = n, r._kq = Math[qr](e, h), r[Yr] = Math.cos(r._kq), r[Hr] = Math.sin(r._kq), r }

    function si(t, i, n, e, s) {
        var h, r;
        i > e ? h = -1 : e > i && (h = 1), n > s ? r = -1 : s > n && (r = 1);
        var a, o;
        if (!h) return o = 0 > r ? t.y : t[Ur], { x: i, y: o };
        if (!r) return a = 0 > h ? t.x : t[Wr], { x: a, y: n };
        var f = (n - s) / (i - e),
            c = n - f * i,
            u = 0 > h ? i - t.x : i - t[Wr],
            _ = 0 > r ? n - t.y : n - t.bottom;
        return Math.abs(f) >= Math.abs(_ / u) ? (o = 0 > r ? t.y : t[Ur], a = (o - c) / f) : (a = 0 > h ? t.x : t.right, o = f * a + c), { x: a, y: o } }

    function hi(t, i, n, e, s, h, r, a) {
        return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? !1 : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h)) }

    function ri(t, i, n, e, s, h) {
        return s >= t && t + n >= s && h >= i && i + e >= h }

    function ai(t, i, n, e, s, h, r, a, o) {
        return o && (t -= o, i -= o, n += o + o, e += o + o), s >= t && h >= i && t + n >= s + r && i + e >= h + a }

    function oi(t, i, n, e, s, h, r, a) {
        var o = t;
        o += n;
        var f = i;
        f += e;
        var c = s;
        c += r;
        var u = h;
        return u += a, s > t && (t = s), h > i && (i = h), o > c && (o = c), f > u && (f = u), o -= t, f -= i, 0 > o || 0 > f ? null : new gz(t, i, o, f) }

    function fi(t, i, e) {
        if (N(t) && (t = xz[Vr](t)), !t) return { x: 0, y: 0 };
        if (t.x !== n) return { x: t.x, y: t.y };
        var s, h, r = t[Xr],
            a = t[Kr];
        switch (r) {
            case Ez:
                s = 0;
                break;
            case wz:
                s = i;
                break;
            default:
                s = i / 2 }
        switch (a) {
            case Tz:
                h = 0;
                break;
            case Mz:
                h = e;
                break;
            default:
                h = e / 2 }
        return { x: s, y: h } }

    function ci(t, i, n) { t[Hh].add(i, n), t.onChildAdd(i, n) }

    function ui(t, i) { t._fm && (t._fm.remove(i), t.onChildRemove(i)) }

    function _i(t) {
        return t[Zr](/^-ms-/, Jr)[Zr](/-([\da-z])/gi, function(t, i) {
            return i[Qr]() }) }

    function di(t) {
        return t.replace(/[A-Z]/g, function(t) {
            return ta + t[ia]() })[Zr](/^ms-/, na) }

    function li(t, i) {
        var n = t[ea];
        if (!n) return !1;
        var e, s;
        for (e in i) i.hasOwnProperty(e) && (s = Uz(e)) && (n[s] = i[e]);
        return t }

    function vi(t) {
        var i, n, e = "";
        for (i in t) t.hasOwnProperty(i) && (n = Uz(i)) && (e += di(n) + sa + t[i] + ha);
        return e ? e.substring(0, e[Yh] - 1) : e }

    function bi(t, i, n) {
        (i = Uz(i)) && (t[ea][i] = n) }

    function yi(t, i) {
        return Yz ? (i && !N(i) && (i = vi(i)), Yz.insertRule ? void Yz[ra](t + aa + i + oa, 0) : void(Yz[fa] && Yz[fa](t, i, 0))) : !1 }

    function gi(i, n) { i[Gr] && (i = i[ca] && i[ca][Yh] ? i[ca][0] : i.touches[0]);
        var e = n.getBoundingClientRect(),
            s = i[ua] || 0,
            h = i[_a] || 0;
        return oz && ez && (t[da] && s == i.pageX && (s -= t.pageXOffset), t[la] && h == i[va] && (h -= t.pageYOffset)), { x: s - e.left, y: h - e.top } }

    function mi(t, i, n) { this._m4 = t, this._scope = n, this[ba] = i, this[ya] = new Ei, this[ga]() }

    function xi(t) {
        return sz && t[ma] || !sz && t[xa] }

    function Ei() { this.points = [] }

    function pi(t, i, n, e, s) { Ti(t, function(e) {
            if (i) {
                var s = e[Ea];
                if (!s) return void(n || Tq)(pa + t + wa);
                i(s) } }, n, e, s) }

    function wi(t, i, n, e, s) { Ti(t, function(e) {
            if (i) {
                var s, h = e[Ta];
                if (!h) return (n || Tq)(pa + t + ka), s = new Error(pa + t + ka), i(h, s);
                try { h = JSON[Ma](h) } catch (r) {
                    (n || Tq)(r), s = r }
                i(h, s) } }, n, e, s) }

    function Ti(t, i, n, e, s) {
        (n === !1 || e === !1) && (s = !1);
        try {
            var h = new XMLHttpRequest,
                r = encodeURI(t);
            if (s !== !1) {
                var a;
                a = r[Qh](Oa) > 0 ? "&" : Oa, r += a + Ia + Date.now() }
            h[Sa](ja, r), h[Aa] = function() {
                return 4 == h[Ca] ? h[La] && 200 != h[La] ? void(n || Tq)(pa + t + Pa) : void(i && i(h)) : void 0 }, h[Ra](e) } catch (o) {
            (n || Tq)(pa + t + Pa, o) } }

    function hi(t, i, n, e, s, h, r, a) {
        return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? !1 : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h)) }

    function ai(t, i, n, e, s, h, r, a) {
        return s >= t && h >= i && t + n >= s + r && i + e >= h + a }

    function ki(t, i, n) {
        return t instanceof Object && t.x ? Oi(t, i, 0, 0) : Mi(t, i, n, 0, 0) }

    function Mi(t, i, n, e, s) {
        var h = Math.sin(n),
            r = Math.cos(n),
            a = t - e,
            o = i - s;
        return t = a * r - o * h + e, i = a * h + o * r + s, new lz(t, i, n) }

    function Oi(t, i, n, e) { n = n || 0, e = e || 0;
        var s = Math.sin(i),
            h = Math.cos(i),
            r = t.x - n,
            a = t.y - e;
        return t.x = r * h - a * s + n, t.y = r * s + a * h + e, t }

    function Ii(t, i, n) {
        return Si(t, i, n, 0, 0) }

    function Si(t, i, n, e, s) {
        var h = Mi(t.x, t.y, i, e, s),
            r = Mi(t.x + t[Da], t.y, i, e, s),
            a = Mi(t.x + t[Da], t.y + t.height, i, e, s),
            o = Mi(t.x, t.y + t[Na], i, e, s);
        return n ? n[Ba]() : n = new gz, n[$a](h), n[$a](r), n[$a](a), n[$a](o), n }

    function ji(t, i) {
        var n = this.ratio || 1;
        this[ea][Da] = t + Fa, this[ea][Na] = i + Fa, this.width = t * n, this[Na] = i * n }

    function Ai(t) {
        var i = t[Ga] || t[za] || t.msBackingStorePixelRatio || t[qa] || t.backingStorePixelRatio || 1;
        return Oq / i }

    function Ci(t, n, e) {
        var s = i[Ya](Ha);
        if (s.g = s[Ua](Wa), t !== !0 && !e) return t && n && (s[Da] = t, s[Na] = n), s;
        var h = s.g;
        return h.ratio = s[Va] = Ai(h), s[Xa] = ji, h._kt = function() { this[Ha][Da] = this.canvas.width }, t && n && s.setSize(t, n), s }

    function Li(t, i) {
        return Iq || (Iq = Ci()), t && i && (Iq[Da] = t, Iq[Na] = i), Iq.g }

    function Pi(t, i, n) {
        return (n || cz.FONT_STYLE) + xr + (i || cz.FONT_SIZE) + Ka + (t || cz.FONT_FAMILY) }

    function Ri(t, i, n, e, s, h, r, a, o, f) {
        if (t[Za](), t[Ja](n, e), Sq && jq > r) {
            var c = r / jq;
            t[Qa](c, c), r = jq, f = null }
        o || (o = cz.LINE_HEIGHT), r || (r = cz[to]), o *= r, t[io] = f || Pi(h, r, a), t[no] = s, t[eo] = so;
        for (var u = o / 2, _ = i.split(ho), d = 0, l = _[Yh]; l > d; d++) {
            var v = _[d];
            t[ro](v, 0, u), u += o }
        t[ao]() }

    function Di(t, i, n, e, s, h) {
        if (!t) return { width: 0, height: 0 };
        if (i || (i = cz.FONT_SIZE), Sq && jq > i) {
            var r = i / jq,
                a = Di(t, jq, n, e, s);
            return a[Da] *= r, a.height *= r, a }
        var o = Li();
        o[io] = h || Pi(n, i, e), s || (s = cz[oo]);
        for (var f = i * s, c = 0, u = 0, _ = t[fo](ho), d = 0, l = _[Yh]; l > d; d++) {
            var v = _[d];
            c = Math.max(o[co](v)[Da], c), u += f }
        return { width: c, height: u } }

    function Ni(t, i, n, e, s) {
        var h;
        if (KG) try { h = t[uo](i, n, e, s) } catch (r) {} else h = t.getImageData(i, n, e, s);
        return h }

    function Bi(t) {
        return Math.log(t + Math[_o](t * t + 1)) }

    function $i(t, i) { i = i || t(1);
        var n = 1 / i,
            e = .5 * n,
            s = Math.min(1, i / 100);
        return function(h) {
            if (0 >= h) return 0;
            if (h >= i) return 1;
            for (var r = h * n, a = 0; a++ < 10;) {
                var o = t(r),
                    f = h - o;
                if (Math.abs(f) <= s) return r;
                r += f * e }
            return r } }

    function Fi(t, i, n) {
        var e = 1 - t,
            s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
            h = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var r = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
                a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return { x: s, y: h, rotate: Math[qr](a, r) } }
        return { t: t, x: s, y: h } }

    function Gi(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e : -1 }

    function zi(t, i) { i.add(t[4], t[5]);
        var n = Gi(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = Fi(n, t);
            i.add(e.x, e.y) }
        var s = Gi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = Fi(s, t);
            i.add(e.x, e.y) }
        return i }

    function qi(t, i) {
        return Math.abs(t - i) < 1e-7 }

    function Yi(t) {
        if (qi(t[1], t[3]) && (qi(t[0], t[2]) || qi(t[1], t[5]))) {
            var i = t[0],
                n = t[1],
                e = t[4],
                s = t[5],
                h = Math[_o](Aq(i, n, e, s));
            return function(t) {
                return h * t } }
        var r = t[0],
            a = t[2],
            o = t[4],
            f = r - 2 * a + o,
            c = 2 * a - 2 * r;
        r = t[1], a = t[3], o = t[5];
        var u = r - 2 * a + o,
            _ = 2 * a - 2 * r,
            d = 4 * (f * f + u * u),
            l = 4 * (f * c + u * _),
            v = c * c + _ * _,
            h = 4 * d * v - l * l,
            b = 1 / h,
            y = .125 * Math.pow(d, -1.5),
            g = 2 * Math[_o](d),
            m = (h * Bi(l / Math[_o](h)) + 2 * Math[_o](d) * l * Math[_o](v)) * y;
        return function(t) {
            var i = l + 2 * t * d,
                n = i / Math[_o](h),
                e = i * i * b;
            return (h * Math.log(n + Math[_o](e + 1)) + g * i * Math[_o](v + t * l + t * t * d)) * y - m } }

    function Hi(t, i, n) {
        var e = 1 - t,
            s = i[0],
            h = i[2],
            r = i[4],
            a = i[6],
            o = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
        if (n) var f = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
        s = i[1], h = i[3], r = i[5], a = i[7];
        var c = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
        if (n) {
            var u = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
            return { x: o, y: c, rotate: Math[qr](u, f) } }
        return { x: o, y: c } }

    function Ui(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
        var h = 2 * t - 4 * i + 2 * n,
            r = i - t,
            a = h * h - 4 * s * r;
        return 0 > a ? void 0 : 0 == a ? [-h / (2 * s)] : (a = Math.sqrt(a), [(a - h) / (2 * s), (-a - h) / (2 * s)]) }

    function Wi(t, i) { i.add(t[6], t[7]);
        var n = Ui(t[0], t[2], t[4], t[6]);
        if (n)
            for (var e = 0; e < n.length; e++) {
                var s = n[e];
                if (!(0 >= s || s >= 1)) {
                    var h = Hi(s, t);
                    i.add(h.x, h.y) } }
        if (n = Ui(t[1], t[3], t[5], t[7]))
            for (var e = 0; e < n.length; e++) {
                var s = n[e];
                if (!(0 >= s || s >= 1)) {
                    var h = Hi(s, t);
                    i.add(h.x, h.y) } } }

    function Vi(t) {
        var i = { x: t[0], y: t[1] },
            n = { x: t[2], y: t[3] },
            e = { x: t[4], y: t[5] },
            s = { x: t[6], y: t[7] },
            h = i.x - 0,
            r = i.y - 0,
            a = n.x - 0,
            o = n.y - 0,
            f = e.x - 0,
            c = e.y - 0,
            u = s.x - 0,
            _ = s.y - 0,
            d = 3 * (-h + 3 * a - 3 * f + u),
            l = 6 * (h - 2 * a + f),
            v = 3 * (-h + a),
            b = 3 * (-r + 3 * o - 3 * c + _),
            y = 6 * (r - 2 * o + c),
            g = 3 * (-r + o),
            m = function(t) {
                var i = d * t * t + l * t + v,
                    n = b * t * t + y * t + g;
                return Math[_o](i * i + n * n) },
            x = (m(0) + 4 * m(.5) + m(1)) / 6;
        return x }

    function Xi(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e,
                h = 2 * t - 4 * i + 2 * n,
                r = i - t;
            return function(t) {
                return 3 * (s * t * t + h * t + r) } }

        function e(t, i) {
            var n = s(t),
                e = h(t);
            return Math.sqrt(n * n + e * e) * i }
        var s = n(t[0], t[2], t[4], t[6]),
            h = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var r = 1 / i;
        return function(t) {
            if (!t) return 0;
            for (var i, n = 0, s = 0;;) {
                if (i = n + r, i >= t) return s += e(n, i - n);
                s += e(n, r), n = i } } }

    function Ki(t, i, n) {
        return Aq(i, n, t.cx, t.cy) <= t[lo] + Cq }

    function Zi(t, i, n, e) {
        return n = n || Ji(t, i), new Qi((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e) }

    function Ji(t, i) {
        return vz(t.x, t.y, i.x, i.y) }

    function Qi(t, i, n, e, s, h, r) { this.cx = t, this.cy = i, this.r = n, this._squareR = n * n, this.p1 = e, this.p2 = s, this.p3 = h, this[vo] = r }

    function tn(t, i, n, e) { this.cx = t, this.cy = i, this.width = n, this[Na] = e }

    function nn(t) {
        var i = t[0],
            n = t[1],
            e = t[2],
            s = Qi._jhCircle(i, n, e);
        return sn(t, i, n, e, s) }

    function en(t, i) { i = i || hn(t);
        for (var n, e = i[Da] / i[Na], s = [], h = t.length, r = 0; h > r; r++) n = t[r], s[Jh]({ x: n.x, y: n.y * e });
        var a = nn(s);
        return a ? new tn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0 }

    function sn(t, i, n, e, s) {
        for (var h, r, a = t[Yh], o = s[lo], f = 0; a > f; f++)
            if (h = t[f], h != i && h != n && h != e) {
                var c = Aq(s.cx, s.cy, h.x, h.y);
                c - Cq > o && (o = c, r = h) }
        if (!r) return s;
        var u, _ = Qi._jhCircle(r, i, n),
            d = Qi[bo](r, i, e),
            l = Qi[bo](r, e, n);
        return Ki(_, e.x, e.y) && (u = _), Ki(d, n.x, n.y) && (!u || u.r > d.r) && (u = d), Ki(l, i.x, i.y) && (!u || u.r > l.r) && (u = l), i = u.p1, n = u.p2, e = u.p3 || u[vo], sn(t, i, n, e, u) }

    function hn(t) {
        for (var i, n = t[Yh], e = new gz, s = 0; n > s; s++) i = t[s], e.add(i.x, i.y);
        return e }

    function rn(t, i, n, e, s) { this._5x && this.validate();
        var h = s ? this.getBounds(s) : this[yo],
            r = n / h[Da],
            a = t - r * h.x,
            o = e / h[Na],
            f = i - o * h.y,
            c = this._fd,
            u = [];
        return l(c, function(t) {
            var i = t[Zh](),
                n = i.points;
            if (n && n[Yh]) {
                for (var e = n[Yh], s = [], h = 0; e > h; h++) {
                    var c = n[h];
                    h++;
                    var _ = n[h];
                    c = r * c + a, _ = o * _ + f, s.push(c), s[Jh](_) }
                i[go] = s }
            u.push(i) }, this), new fY(u) }

    function an(t, i, n, e, s, h) {
        if (s = s || 0, n = n || 0, !s && !h) return !1;
        if (!e) {
            var r = this.getBounds(s);
            if (!r.intersectsPoint(t, i, n)) return !1 }
        var a = Math.round(2 * n) || 1,
            o = Li(a, a),
            f = (o[Ha], -t + n),
            c = -i + n;
        if (o[mo](1, 0, 0, 1, f, c), !o[xo]) { this._lh(o), s && o[Eo](), h && o[po]();
            var u = Ni(o, 0, 0, a, a);
            if (!u) return !1;
            u = u.data;
            for (var _ = u.length / 4; _ > 0;) {
                if (u[4 * _ - 1] > oY) return !0;--_ }
            return !1 }
        return o[wo] = (s || 0) + 2 * n, this._lh(o), s && o[xo](n, n) ? !0 : h ? o[To](n, n) : !1 }

    function on(t, i, n) {
        if (!this._j3) return null;
        var e = this._fd;
        if (e.length < 2) return null;
        n === !1 && (t += this._j3);
        var s = e[0];
        if (0 >= t) return Fs(s.points[0], s.points[1], e[1].points[0], e[1][go][1], t, i);
        if (t >= this._j3) { s = e[e[Yh] - 1];
            var h, r, a = s.points,
                o = a[Yh],
                f = a[o - 2],
                c = a[o - 1];
            if (o >= 4) h = a[o - 4], r = a[o - 3];
            else { s = e[e.length - 2];
                var u = s.lastPoint;
                h = u.x, r = u.y }
            return Fs(f, c, f + f - h, c + c - r, t - this._j3, i) }
        for (var _, d = 0, l = 1, o = e[Yh]; o > l; l++)
            if (_ = e[l], _._j3) {
                if (!(d + _._j3 < t)) {
                    var v, u = s[ko];
                    if (_.type == hY) {
                        var b = _[go];
                        v = fn(t - d, _, u.x, u.y, b[0], b[1], b[2], b[3], _._r) } else {
                        if (!_._lf) return Fs(u.x, u.y, _[go][0], _[go][1], t - d, i);
                        var y = $i(_._lf, _._j3)(t - d),
                            b = _[go];
                        v = _.type == sY && 6 == b[Yh] ? Hi(y, [u.x, u.y].concat(b), !0) : Fi(y, [u.x, u.y][Vh](b), !0) }
                    return i && (v.x -= i * Math.sin(v[Mo] || 0), v.y += i * Math.cos(v[Mo] || 0)), v }
                d += _._j3, s = _ } else s = _ }

    function fn(t, i, n, e, s, h, r, a) {
        if (t <= i._l1) return Fs(n, e, s, h, t, t);
        if (t >= i._j3) return t -= i._j3, Fs(i[Oo], i._p2y, r, a, t, t);
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i[Io] && (o = -o);
            var f = Mi(i[So], i._p1y, o, i._o.x, i._o.y);
            return f[Mo] += i[jo] || 0, f[Mo] += Math.PI, f }
        return Fs(i[So], i._p1y, i[Oo], i._p2y, t, t) }

    function ei(t, i, n) {
        var e, s, h;
        0 == t._n5 ? (e = -1, h = 0, s = i) : 0 == t._n7 ? (e = 0, h = 1, s = n) : (e = -1 / t._n5, s = (t._n5 - e) * i + t._n6, h = 1);
        var r = new bz;
        return r._n5 = e, r._n6 = s, r._n7 = h, r._n2 = i, r._n0 = n, r }

    function cn(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t }

    function un(t, i, n, e, s, h, r, a) {
        var o = vz(i, n, e, s),
            f = vz(e, s, h, r);
        if (!o || !f) return t._d = 0, t._r = 0, t._l1 = o, t._l2 = f, t._j3 = 0;
        var c = dn(e, s, i, n),
            u = dn(e, s, h, r);
        t[jo] = c, t[Ao] = u;
        var _ = c - u;
        _ = cn(_), _ > Math.PI && (_ = 2 * Math.PI - _, t[Io] = !0);
        var d = Math.PI - _,
            l = Math.tan(_ / 2),
            v = a / l,
            b = Math.min(o, f);
        v > b && (v = b, a = l * v);
        var y, g = e + Math.cos(c) * v,
            m = s + Math.sin(c) * v,
            x = e + Math.cos(u) * v,
            E = s + Math.sin(u) * v,
            p = new bz(i, n, e, s),
            w = new bz(e, s, h, r),
            T = ei(p, g, m),
            k = ei(w, x, E),
            M = T._3o(k),
            O = Math[qr](m - M.y, g - M.x),
            I = Math.atan2(E - M.y, x - M.x);
        y = t[Io] ? I : O;
        for (var S, j = 0; 4 > j;) {
            var A = j * _z;
            if (cn(A - y) <= d) {
                var C, L;
                if (S ? S++ : S = 1, 0 == j ? (C = M.x + a, L = M.y) : 1 == j ? (C = M.x, L = M.y + a) : 2 == j ? (C = M.x - a, L = M.y) : (C = M.x, L = M.y - a), t[Co + S] = { x: C, y: L }, 2 == S) break }
            j++ }
        return t[So] = g, t[Lo] = m, t[Oo] = x, t[Po] = E, t._o = M, t._d = v, t._r = a, t._l1 = o - v, t._l2 = f - v, t._j3 = t._l1 + d * a }

    function _n(t, i, n, e, s, h, r) {
        var a = dn(n, e, t, i),
            o = dn(n, e, s, h),
            f = a - o;
        return r ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f) }

    function dn(t, i, n, e) {
        return Math.atan2(e - i, n - t) }

    function ln(t) {
        var i = Pq[Ro](t);
        if (i) return i[1];
        var n = t[Do](Fr);
        return n >= 0 && n < t[Yh] - 1 ? t.substring(n + 1) : void 0 }

    function vn(t) {
        if (!t) return null;
        if (t instanceof fY) return Gq;
        if (t.draw instanceof Function) return Fq;
        if (N(t)) {
            var i = ln(t);
            if (i) {
                if (!KG && Rq.test(i)) return $q;
                if (Dq[No](i)) return Bq }
            return Nq } }

    function bn(t, i, n) {
        if (this._m7 = vn(t), !this._m7) throw new Error("the image format is not supported", t);
        this._m5 = t, this[Bo] = i, this._8z = n, this[Da] = i || cz[$o], this[Na] = n || cz[Fo], this._jd = {} }

    function yn(t, i, n, e) {
        return i ? (Hq[t] = new bn(i, n, e), t) : void delete Hq[t] }

    function gn(t) {
        if (t._ky) return t._ky;
        var i = N(t);
        if (!i && !t.name) return t._ky = new bn(t);
        var n = t[_r] || t;
        return n in Hq ? Hq[n] : Hq[n] = new bn(t) }

    function mn(t) {
        return t in Hq }

    function xn(t, i, n) { n = n || {};
        var e = t[Go](n[wo]);
        if (!e.width || !e[Na]) return !1;
        var s = i[Ua](Wa),
            h = i[Va] || 1,
            r = n[zo] || qo,
            a = /full/i [No](r),
            o = /uniform/i [No](r),
            f = 1,
            c = 1;
        if (a) {
            var u = i[Da],
                _ = i[Na],
                d = n[Yo],
                l = 0,
                v = 0;
            if (d) {
                var b, y, g, m;
                D(d) ? b = y = g = m = d : (b = d.top || 0, y = d[Ur] || 0, g = d[Ho] || 0, m = d[Wr] || 0), u -= g + m, _ -= b + y, l += g, v += b }
            f = u / e[Da], c = _ / e[Na], o && (f > c ? (l += (u - c * e[Da]) / 2, f = c) : c > f && (v += (_ - f * e.height) / 2, c = f)), (l || v) && s.translate(l, v) }
        s[Ja](-e.x * f, -e.y * c), t[Uo](s, h, n, f, c, !0) }

    function En(t, i, n) {
        var e = gn(t);
        return e ? (e[Wo](), (e._m7 == $q || e._6c()) && e._n52(function(t) { t.source && (this[Da] = this.width, xn(t[Vo], this, n)) }, i), void xn(e, i, n)) : (kq.error(Xo + t), !1) }

    function pn(t, i, e, s) {
        var h = t[Yh];
        if (h && !(0 > h)) { s = s || 1;
            for (var r, a, o, f = [], c = 0; c++ < h;)
                if (r = t.getLocation(c, 0), r && vz(i, e, r.x, r.y) <= s) { a = c, o = r[Mo];
                    break }
            if (a !== n) {
                for (var r, u, _, d = 0, c = 0, l = t._fd[Yh]; l > c; c++) {
                    if (r = t._fd[c], !u && (d += r._j3 || 0, d > a))
                        if (u = !0, r[Ko] == nY || r.type == rY) f[Jh](new aY(nY, [i, e]));
                        else {
                            var v = Math.max(10, r._j3 / 6),
                                b = v * Math.sin(o),
                                y = v * Math.cos(o);
                            if (r[Ko] == sY) {
                                var g = r[go][0],
                                    m = r[go][1];
                                if (_) {
                                    var x = new bz(i, e, i + y, e + b),
                                        E = x._3o(new bz(_[ko].x, _[ko].y, r[go][0], r.points[1]));
                                    E.x !== n && (g = E.x, m = E.y) }
                                f[Jh](new aY(sY, [g, m, i - y, e - b, i, e])) } else f[Jh](new aY(eY, [i - y, e - b, i, e]));
                            if (r.points)
                                if (r.type == sY) { r.points[0] = i + y, r[go][1] = e + b;
                                    var x = new bz(i, e, i + y, e + b),
                                        E = x._3o(new bz(r[go][2], r[go][3], r[go][4], r[go][5]));
                                    E.x !== n && (r.points[2] = E.x, r[go][3] = E.y) } else if (r[Ko] == eY) { r[Ko] = sY, r[go] = [i + y, e + b][Vh](r[go]);
                                var x = new bz(i, e, i + y, e + b),
                                    E = x._3o(new bz(r[go][2], r[go][3], r[go][4], r[go][5]));
                                E.x !== n && (r[go][2] = E.x, r[go][3] = E.y) } else r[Ko] == nY && (r[Ko] = eY, r[go] = [i + y, e + b][Vh](r[go]), c == l - 1 && (r[Zo] = !0)) }
                    f[Jh](r), _ = r }
                return f } } }

    function wn(t) {
        var i = t[Da],
            n = t[Na],
            e = Ni(t.g, 0, 0, i, n);
        return e ? kn(e[Jo], i, n) : void 0 }

    function Tn(t, i, n) { this._10(t, i, n) }

    function kn(t, i, n) {
        return new Tn(t, i, n) }

    function Mn(t) {
        if (Rr == t[0]) {
            if (t = t.substring(1), 3 == t[Yh]) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
            else if (6 != t[Yh]) return;
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t] }
        if (/^rgb/i [No](t)) {
            var i = t.indexOf(Qo),
                n = t.indexOf(Pr);
            if (0 > i || i > n) return;
            if (t = t.substring(i + 1, n), t = t.split(Cr), t[Yh] < 3) return;
            var e = parseInt(t[0]),
                s = parseInt(t[1]),
                h = parseInt(t[2]),
                r = 3 == t.length ? 255 : parseInt(t[3]);
            return [e, s, h, r] } }

    function On(t, i, n) {
        return n || (n = cz[tf]), n == Mq[nf] ? t * i : n == Mq[ef] ? Math.min(t, i) : n == Mq[sf] ? 1 - (1 - i) / t : n == Mq[hf] ? t + i - 1 : n == Mq[rf] ? Math.max(t, i) : n == Mq[af] ? t + i - t * i : i }

    function In(t, i, n) {
        var e = Mn(i);
        if (!e) return void kq.error(of + i + ff);
        var s = Ni(t.g, 0, 0, t[Da], t.height);
        if (s) {
            var h = s.data;
            if (n instanceof Function) h = n(t, h, e) || h;
            else {
                var r = e[0] / 255,
                    a = e[1] / 255,
                    o = e[2] / 255;
                if (n == Mq.BLEND_MODE_GRAY)
                    for (var f = 0, c = h[Yh]; c > f; f += 4) {
                        var u = 77 * h[f] + 151 * h[f + 1] + 28 * h[f + 2] >> 8;
                        h[f] = u * r | 0, h[f + 1] = u * a | 0, h[f + 2] = u * o | 0 } else
                        for (var f = 0, c = h[Yh]; c > f; f += 4) h[f] = 255 * On(r, h[f] / 255, n) | 0, h[f + 1] = 255 * On(a, h[f + 1] / 255, n) | 0, h[f + 2] = 255 * On(o, h[f + 2] / 255, n) | 0 }
            var t = Ci(t[Da], t[Na]);
            return t.g[cf](s, 0, 0), t } }

    function Sn(t, i, n, e) {
        return 1 > n && (n = 1), jn(t - n, i - n, 2 * n, 2 * n, e) }

    function jn(t, i, n, e, s) { n = Math[uf](n) || 1, e = Math[uf](e) || 1;
        var h = Li(n, e);
        h[mo](1, 0, 0, 1, -t, -i), s.draw(h);
        var r = Ni(h, 0, 0, n, e);
        if (!r) return !1;
        r = r.data;
        for (var a = r[Yh] / 4; a-- > 0;)
            if (r[4 * a - 1] > oY) return !0;
        return !1 }

    function An(t, i, n, e, s, h) { t -= s.$x, i -= s.$y;
        var r = s._fo[_f](t, i, n, e);
        if (!r) return !1;
        t = r.x * h, i = r.y * h, n = r[Da] * h, e = r[Na] * h, n = Math[uf](n) || 1, e = Math[uf](e) || 1;
        var a = Li(),
            o = a.canvas;
        o.width < n || o.height < e ? (o.width = n, o.height = e) : (a[mo](1, 0, 0, 1, 0, 0), a[df](0, 0, n, e)), a[mo](1, 0, 0, 1, -t - s.$x * h, -i - s.$y * h), a[Qa](h, h), s._j7(a, 1);
        var f = Ni(a, 0, 0, n, e);
        if (!f) return !1;
        f = f.data;
        for (var c = f[Yh] / 4; c-- > 0;)
            if (f[4 * c - 1] > oY) return !0;
        return !1 }

    function Cn(t, i, n, e, s, h, r, a, o) {
        if (ri(t, i, n, e, a, o)) return null;
        var f, c, u, _ = new aY(nY, [t + n - s, i]),
            d = new aY(eY, [t + n, i, t + n, i + h]),
            l = new aY(nY, [t + n, i + e - h]),
            v = new aY(eY, [t + n, i + e, t + n - s, i + e]),
            b = new aY(nY, [t + s, i + e]),
            y = new aY(eY, [t, i + e, t, i + e - h]),
            g = new aY(nY, [t, i + h]),
            m = new aY(eY, [t, i, t + s, i]),
            x = (new aY(rY), [_, d, l, v, b, y, g, m]),
            E = new gz(t + s, i + h, n - s - s, e - h - h);
        t > a ? (f = Ez, u = 5) : a > t + n ? (f = wz, u = 1) : (f = pz, u = 0), i > o ? (c = Tz, f == Ez && (u = 7)) : o > i + e ? (c = Mz, f == wz ? u = 3 : f == pz && (u = 4)) : (c = kz, f == Ez ? u = 6 : f == wz && (u = 2));
        var p = Bn(u, t, i, n, e, s, h, r, a, o, E),
            w = p[0],
            T = p[1],
            k = new fY,
            M = k._fd;
        M[Jh](new aY(iY, [w.x, w.y])), M[Jh](new aY(nY, [a, o])), M.push(new aY(nY, [T.x, T.y])), T._mh && (M.push(T._mh), T[lf]++);
        for (var O = T[lf] % 8, I = w[lf]; M.push(x[O]), ++O, O %= 8, O != I;);
        return w._mh && M.push(w._mh), k[vf](), k }

    function Ln(t, i, e, s, h, r, a, o, f, c, u, _, d, l) {
        var v = new bz(_, d, e, s),
            b = new bz(i[0], i[1], i[4], i[5]),
            y = b._3o(v, u),
            g = y[0],
            m = y[1];
        if (g._rest !== n) { g._mhNO = (t - 1) % 8, m._mhNO = (t + 1) % 8;
            var x = g[bf];
            7 == t ? (g.y = r + c + Math.min(l[Na], x), m.x = h + f + Math.min(l[Da], x)) : 5 == t ? (g.x = h + f + Math.min(l[Da], x), m.y = r + o - c - Math.min(l[Na], x)) : 3 == t ? (g.y = r + o - c - Math.min(l[Na], x), m.x = h + a - f - Math.min(l[Da], x)) : 1 == t && (g.x = h + a - f - Math.min(l[Da], x), m.y = r + c + Math.min(l[Na], x)) } else { v._mq(v._n2, v._n0, g.x, g.y), g = v._$c(i), v._mq(v._n2, v._n0, m.x, m.y), m = v._$c(i);
            var E = $n(i, [g, m]),
                p = E[0],
                w = E[2];
            g[lf] = t, m[lf] = t, g._mh = new aY(eY, p.slice(2)), m._mh = new aY(eY, w.slice(2)) }
        return [g, m] }

    function Pn(t, i, n, e, s, h, r, a, o, f) {
        var c, u;
        if (o - a >= i + h) c = { y: n, x: o - a }, c[lf] = 0;
        else { c = { y: n + r, x: Math.max(i, o - a) };
            var _ = [i, n + r, i, n, i + h, n],
                d = new bz(o, f, c.x, c.y);
            if (c = d._$c(_)) { $(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = $n(_, [c]);
                l = l[0], l && (c._mh = new aY(eY, l[Uh](2))), c[lf] = 7 } else c = { y: n, x: i + h }, c[lf] = 0 }
        if (i + e - h >= o + a) u = { y: n, x: o + a }, u[lf] = 0;
        else { u = { y: n + r, x: Math.min(i + e, o + a) };
            var v = [i + e - h, n, i + e, n, i + e, n + r],
                d = new bz(o, f, u.x, u.y);
            if (u = d._$c(v)) { $(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = $n(v, [u]);
                l && l[l[Yh] - 1] && (u._mh = new aY(eY, l[l[Yh] - 1].slice(2))), u._mhNO = 1 } else u = { y: n, x: i + e - h }, u[lf] = 0 }
        return [c, u] }

    function Rn(t, i, n, e, s, h, r, a, o, f) {
        var c, u;
        if (f - a >= n + r) c = { x: i + e, y: f - a }, c._mhNO = 2;
        else { c = { x: i + e - h, y: Math.max(n, f - a) };
            var _ = [i + e - h, n, i + e, n, i + e, n + r],
                d = new bz(o, f, c.x, c.y);
            if (c = d._$c(_)) { $(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = $n(_, [c]);
                l = l[0], l && (c._mh = new aY(eY, l[Uh](2))), c[lf] = 1 } else c = { x: i + e, y: n + r }, c._mhNO = 2 }
        if (n + s - r >= f + a) u = { x: i + e, y: f + a }, u[lf] = 2;
        else { u = { x: i + e - h, y: Math.min(n + s, f + a) };
            var v = [i + e, n + s - r, i + e, n + s, i + e - h, n + s],
                d = new bz(o, f, u.x, u.y);
            if (u = d._$c(v)) { $(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = $n(v, [u]);
                l[1] && (u._mh = new aY(eY, l[1][Uh](2))), u[lf] = 3 } else u = { x: i + e, y: n + s - r }, u[lf] = 2 }
        return [c, u] }

    function Dn(t, i, n, e, s, h, r, a, o, f) {
        var c, u;
        if (o - a >= i + h) u = { y: n + s, x: o - a }, u[lf] = 4;
        else { u = { y: n + s - r, x: Math.max(i, o - a) };
            var _ = [i + h, n + s, i, n + s, i, n + s - r],
                d = new bz(o, f, u.x, u.y);
            if (u = d._$c(_)) { $(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = $n(_, [u]);
                l = l[l[Yh] - 1], l && (u._mh = new aY(eY, l[Uh](2))), u._mhNO = 5 } else u = { y: n + s, x: i + h }, u._mhNO = 4 }
        if (i + e - h >= o + a) c = { y: n + s, x: o + a }, c._mhNO = 4;
        else { c = { y: n + s - r, x: Math.min(i + e, o + a) };
            var v = [i + e, n + s - r, i + e, n + s, i + e - h, n + s],
                d = new bz(o, f, c.x, c.y);
            if (c = d._$c(v)) { $(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = $n(v, [c]);
                l[0] && (c._mh = new aY(eY, l[0].slice(2))), c[lf] = 3 } else c = { y: n + s, x: i + e - h }, c[lf] = 4 }
        return [c, u] }

    function Nn(t, i, n, e, s, h, r, a, o, f) {
        var c, u;
        if (f - a >= n + r) u = { x: i, y: f - a }, u[lf] = 6;
        else { u = { x: i + h, y: Math.max(n, f - a) };
            var _ = [i, n + r, i, n, i + h, n],
                d = new bz(o, f, u.x, u.y);
            if (u = d._$c(_)) { $(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = $n(_, [u]);
                l = l[l.length - 1], l && (u._mh = new aY(eY, l.slice(2))) } else u = { x: i, y: n + r };
            u[lf] = 7 }
        if (n + s - r >= f + a) c = { x: i, y: f + a }, c[lf] = 6;
        else { c = { x: i + h, y: Math.min(n + s, f + a) };
            var v = [i + h, n + s, i, n + s, i, n + s - r],
                d = new bz(o, f, c.x, c.y);
            if (c = d._$c(v)) { $(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = $n(v, [c]);
                l[0] && (c._mh = new aY(eY, l[0][Uh](2))), c[lf] = 5 } else c = { x: i, y: n + s - r }, c._mhNO = 6 }
        return [c, u] }

    function Bn(t, i, n, e, s, h, r, a, o, f, c) {
        var u = a / 2;
        switch (h = h || 1e-4, r = r || 1e-4, t) {
            case 7:
                var _ = [i, n + r, i, n, i + h, n],
                    d = i + h,
                    l = n + r;
                return Ln(t, _, d, l, i, n, e, s, h, r, a, o, f, c);
            case 5:
                return _ = [i + h, n + s, i, n + s, i, n + s - r], d = i + h, l = n + s - r, Ln(t, _, d, l, i, n, e, s, h, r, a, o, f, c);
            case 3:
                return _ = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = i + e - h, l = n + s - r, Ln(t, _, d, l, i, n, e, s, h, r, a, o, f, c);
            case 1:
                return _ = [i + e - h, n, i + e, n, i + e, n + r], d = i + e - h, l = n + r, Ln(t, _, d, l, i, n, e, s, h, r, a, o, f, c);
            case 0:
                return Pn(t, i, n, e, s, h, r, u, o, f, c);
            case 2:
                return Rn(t, i, n, e, s, h, r, u, o, f, c);
            case 4:
                return Dn(t, i, n, e, s, h, r, u, o, f, c);
            case 6:
                return Nn(t, i, n, e, s, h, r, u, o, f, c) } }

    function $n(t, i) {
        for (var e, s, h, r, a, o, f = t[0], c = t[1], u = t[2], _ = t[3], d = t[4], l = t[5], v = [], b = 0; b < i.length; b++) a = i[b], o = a.t, 0 != o && 1 != o ? (e = f + (u - f) * o, s = c + (_ - c) * o, h = u + (d - u) * o, r = _ + (l - _) * o, v[Jh]([f, c, e, s, a.x, a.y]), f = a.x, c = a.y, u = h, _ = r) : v[Jh](null);
        return h !== n && v.push([a.x, a.y, h, r, d, l]), v }

    function Fn(t) {
        return this[yf] && this._n57 && (t.x -= this[gf].x, t.y -= this[gf].y), this[mf] && Oi(t, this[mf]), t.x += this.$offsetX || 0, t.y += this[xf] || 0, this.$rotatable && this[Ef] ? Oi(t, this[Ef]) : t }

    function Gn(t) {
        return this[pf] && this[Ef] && Oi(t, -this.$_hostRotate), t.x -= this[wf] || 0, t.y -= this[xf] || 0, this.$rotate && Oi(t, -this[mf]), this.$layoutByAnchorPoint && this[gf] && (t.x += this[gf].x, t.y += this._n57.y), t }

    function zn() {
        var t = this.$invalidateSize;
        this[Tf] && (this[Tf] = !1, this.$invalidateAnchorPoint = !0, this._7m[kf](this._ja), this[Mf] && this._7m[Of](this[Mf]), this.$border && this._7m[Of](this[If]));
        var i = this._$o();
        if (i) var n = this[Sf] && this[jf];
        return this[Af] && this[yf] && (this[Af] = !1, n && (t = !0), this[gf] = fi(this.$anchorPosition, this._7m[Da], this._7m[Na]), this._n57.x += this._7m.x, this._n57.y += this._7m.y), i ? (t && (this._n6ackgroundGradientInvalidateFlag = !0, qn[zh](this, n)), this[Cf] && (this[Cf] = !1, this[Lf] = this[Pf] && this[Rf] && this._ljShape[yo] ? Uq.prototype.generatorGradient.call(this[Pf], this[Rf][yo]) : null), t) : (this.__mdPointer = !1, t) }

    function qn(t) {
        var i = this._7m.x + this[If] / 2,
            n = this._7m.y + this[If] / 2,
            e = this._7m.width - this[If],
            s = this._7m.height - this[If],
            h = 0,
            r = 0;
        if (this[Df] && (D(this[Df]) ? h = r = this[Df] : (h = this[Df].x || 0, r = this[Df].y || 0), h = Math.min(h, e / 2), r = Math.min(r, s / 2)), t && (this[Nf] = this._n57.x - this[wf] + this[Bf], this[$f] = this[gf].y - this[xf] + this[Ff], !this._7m[Gf](this[Nf], this[$f]))) {
            var a = new uY(i, n, e, s, h, r, this.$pointerWidth, this[Nf], this[$f]);
            return this[Rf] = a._mh, this[Rf][yo].set(i, n, e, s), void(this[zf] = !0) }
        this[Rf] && this[Rf][Ba](), this[Rf] = RH[qf](i, n, e, s, h, r, this._ljShape), this[Rf][yo].set(i, n, e, s) }

    function Yn(t, i, n, e) {
        return e && (t.width < 0 || t.height < 0) ? (t.x = i, t.y = n, void(t[Da] = t[Na] = 0)) : (i < t.x ? (t[Da] += t.x - i, t.x = i) : i > t.x + t.width && (t[Da] = i - t.x), void(n < t.y ? (t[Na] += t.y - n, t.y = n) : n > t.y + t.height && (t[Na] = n - t.y))) }

    function Hn(t, i, e) {
        var s, h = t[Yf],
            r = t[Hf] === n ? this.layoutByPath : t[Hf];
        return this.$data instanceof fY && r ? (s = Lq._n68(h, this[Uf], this.lineWidth, i, e), s.x *= this._jq, s.y *= this._ji) : (s = fi(h, this._7m[Da], this._7m[Na]), s.x += this._7m.x, s.y += this._7m.y), Fn.call(this, s) }

    function Un(t, i) {
        if (i)
            if (i._7m[Wf]()) t.$x = i.$x, t.$y = i.$y;
            else {
                var n = Hn[zh](i, t);
                t.$x = n.x, t.$y = n.y, t[Vf] = n[Mo] }
        else t.$x = 0, t.$y = 0;
        t[Xf] && lY[zh](t) }

    function Wn(t) {
        if (t[Kf] === n) {
            var i, e;
            if (t[Zf]) i = t.getLineDash, e = t[Zf];
            else {
                var s;
                if (t[Jf] !== n) s = Jf;
                else {
                    if (t[Qf] === n) return !1;
                    s = Qf }
                e = function(t) { this[s] = t }, i = function() {
                    return this[s] } }
            K(t, Kf, { get: function() {
                    return i[zh](this) }, set: function(t) { e[zh](this, t) } }) }
        if (t.lineDashOffset === n) {
            var h;
            if (t[tc] !== n) h = tc;
            else {
                if (t[ic] === n) return;
                h = ic }
            K(t, nc, { get: function() {
                    return this[h] }, set: function(t) { this[h] = t } }) } }

    function Vn(t, i, n, e, s) {
        var h, r, a, o, f, c, u, _, d = function(t) {
                return function(i) { t(i) } },
            l = function() { r = null, a = null, o = f, f = null, c = null },
            v = function(t) { h = t, u || (u = Ci()), u[Da] = h[Da], u[Na] = h.height, i.width = h[Da], i[Na] = h.height },
            b = function(t) { y(), l(), r = t[ec] ? t[sc] : null, a = 10 * t[hc], f = t[rc] },
            y = function() {
                if (c) {
                    var t = c.getImageData(0, 0, h[Da], h[Na]),
                        n = { data: t, _pixels: kn(t[Jo], h[Da], h[Na]), delay: a };
                    s.call(i, n) } },
            g = function(t) { c || (c = u[Ua](Wa));
                var i = t.lctFlag ? t.lct : h.gct,
                    n = c[uo](t.leftPos, t[ac], t[Da], t[Na]);
                t[oc].forEach(function(t, e) { r !== t ? (n[Jo][4 * e + 0] = i[t][0], n[Jo][4 * e + 1] = i[t][1], n[Jo][4 * e + 2] = i[t][2], n.data[4 * e + 3] = 255) : (2 === o || 3 === o) && (n[Jo][4 * e + 3] = 0) }), c[df](0, 0, h[Da], h[Na]), c[cf](n, t[fc], t[ac]) },
            m = function() {},
            x = { hdr: d(v), gce: d(b), com: d(m), app: { NETSCAPE: d(m) }, img: d(g, !0), eof: function() { y(), n[zh](i) } },
            E = new XMLHttpRequest;
        KG || E[cc]("text/plain; charset=x-user-defined"), E[uc] = function() { _ = new mY(E[Ta]);
            try { EY(_, x) } catch (t) { e[zh](i, Ma) } }, E[_c] = function() { e[zh](i, dc) }, E.open(ja, t, !0), E[Ra]() }

    function Xn(t) {
        var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 99, 110, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 57, 50, 54, 55, 54, 49, 48, 53, 50, 50, 48, 10, 10, 10];
        return i.forEach(function(n, e) { i[e] = t(n) }), i[lc]("") }

    function Kn(t, i) {
        try {
            if (null == t || t.length < 8) return;
            if (null == i || i.length <= 0) return;
            for (var n = "", e = 0; e < i[Yh]; e++) n += i[vc](e).toString();
            var s = Math[Sr](n[Yh] / 5),
                h = parseInt(n[bc](s) + n.charAt(2 * s) + n[bc](3 * s) + n[bc](4 * s) + n[bc](5 * s), 10),
                r = Math[uf](i[Yh] / 2),
                a = Math.pow(2, 31) - 1,
                o = parseInt(t.substring(t[Yh] - 8, t.length), 16);
            for (t = t.substring(0, t[Yh] - 8), n += o; n.length > 10;) n = (parseInt(n[yc](0, 10), 10) + parseInt(n.substring(10, n[Yh]), 10)).toString();
            n = (h * n + r) % a;
            for (var f = "", c = "", e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math[Sr](n / a * 255), 10), c += String[gc](f), n = (h * n + r) % a;
            return 0 | c[0] ? JY = OY[mc + jY + xc](c) : null } catch (u) {} }

    function Zn() {
        var t = wY;
        if (!t) return void(sH = !0);
        ZY = t;
        var i;
        t = t.split(Cr);
        for (var n = 0; n < t[Yh] && (i = Kn(t[n], kY), !(i && i[fo](ho)[Yh] >= 8));) 1 == t[Yh] && (i = Kn(t[n], Ec)), n++;
        if (!i || i.split(ho)[Yh] < 8) return iH = !0, "" === kY || kY == pc + PY + wc + RY + Tc || kY == kc + LY + Mc ? (nH = oH, sH = !1, rH = !1, void(KY = !1)) : (nH = oH, void(sH = !0));
        KY = i.split(ho);
        var e = KY[3];
        if (e != _W) return iH = !0, void(rH = !0);
        sH = !1, rH = !1;
        var s = KY[0];
        (Oc == s || Ic == s) && (iH = !1);
        var h = KY[5];
        eH = h;
        var r = KY[6];
        nH = r }

    function Jn() {
        var t = ZY;
        if (t) {
            var i;
            t = t[fo](Cr);
            for (var n = 0; n < t[Yh] && (i = fH(t[n], kY), !(i && i[fo](ho)[Yh] >= 8));) 1 == t[Yh] && (i = fH(t[n], Ec)), n++;
            if (i[fo](ho)[Yh] >= 8) return void(hH = !1) }
        return kY && kY != pc + PY + wc + RY + Tc && kY != kc + LY + Mc ? void(hH = !0) : void(hH = !1)
    }

    function Qn() {
        if (iH) {
            var t = oh[FY + Ko]._j7,
                i = tH;
            oh[FY + Ko]._j7 = function() { t.apply(this, arguments), i.call(this[Sc], this.g) };
            var n = wH[FY + Ko]._fq;
            wH[FY + Ko]._fq = function(t) { n[ir](this, arguments), i[zh](this, t) } } }

    function te() {
        if (eH !== !0 && eH) {
            var t = eH[fo](Fr);
            if (3 != t.length) return void(NH[nr]._j7 = null);
            var i = parseInt(t[0], 10),
                n = parseInt(t[1], 10),
                e = parseInt(t[2], 10),
                s = 3,
                h = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            TY > h && (NH.prototype._j7 = null) } }

    function ie() {
        var t = 0 | nH;
        t && (uz[FY + Ko]._kh = function(i, e) {
            var s = i.id;
            return s === n || this.containsById(s) ? !1 : this._jk.length > t ? !1 : (g(this._jk, i, e), this._lm[s] = i, i) }) }

    function ne() { sH && (uz[FY + Ko]._kh = uz[FY + Ko]._h8) }

    function ee() { hH && (wH[FY + Ko]._j7 = wH[FY + Ko][jc]) }

    function se() { aH && (OH[nr]._gf = OH[nr]._ez) }

    function he() { rH && (pH[FY + Ko].render = wH[FY + Ko]._j7) }

    function re() { KY === n && (wH[FY + Ko]._j0 = gz.equals) }

    function ae(t) {
        var i = Ci(!0);
        return Wn(i.g), i[Ac] = function() {
            return !1 }, t[Cc](i), i[Lc] = lH, i }

    function d(t, i) {
        function n(t, n) {
            for (var e = t[Yh], s = n[Yh], h = e + s, r = new Array(h), a = 0, o = 0, f = 0; h > f;) r[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return r }

        function e(t) {
            var i = t[Yh],
                s = Math.ceil(i / 2);
            return 1 >= i ? t : n(e(t.slice(0, s)), e(t[Uh](s))) }
        return e(t) }

    function oe(t) { t[Da] = t[Da] }

    function fe(t) { xH || (xH = "imageSmoothingEnabled" in CanvasRenderingContext2D[nr] ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled" in CanvasRenderingContext2D[nr] ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled" in CanvasRenderingContext2D[nr] ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"), t[xH] = !1 }

    function ce(t, i, n, e, s) { e = V(i + e) - (i = W(i)), s = V(n + s) - (n = W(n)), t[df](i, n, e, s), t[Pc](i, n, e, s) }

    function W(t) {
        return Math.floor(t) }

    function V(t) {
        return Math[Xh](t) }

    function ue(t) {
        var i = [];
        return t[Rc](function(t) { i[Jh](-t) }), i }

    function _e(t) {
        return t %= kH, 0 > t && (t += kH), t }

    function de(t, i, n, e, s, h, r, a) {
        var o = ((t * e - i * n) * (s - r) - (t - n) * (s * a - h * r)) / ((t - n) * (h - a) - (i - e) * (s - r)),
            f = ((t * e - i * n) * (h - a) - (i - e) * (s * a - h * r)) / ((t - n) * (h - a) - (i - e) * (s - r));
        if (isNaN(o) || isNaN(f)) return !1;
        if (t >= n) {
            if (!(o >= n && t >= o)) return !1 } else if (!(o >= t && n >= o)) return !1;
        if (i >= e) {
            if (!(f >= e && i >= f)) return !1 } else if (!(f >= i && e >= f)) return !1;
        if (s >= r) {
            if (!(o >= r && s >= o)) return !1 } else if (!(o >= s && r >= o)) return !1;
        if (h >= a) {
            if (!(f >= a && h >= f)) return !1 } else if (!(f >= h && a >= f)) return !1;
        return !0 }

    function le(t, i) {
        for (var n = 0, e = t[Yh]; e > n;) {
            for (var s = t[n], h = t[(n + 1) % e], r = 0; 4 > r;) {
                var a = i[r],
                    o = i[(r + 1) % e];
                if (de(s[0], s[1], h[0], h[1], a[0], a[1], o[0], o[1])) return !0;
                r++ }
            n++ }
        return !1 }

    function ve(t, i, n, e) {
        return [t * e - i * n, t * n + i * e] }

    function be(t) {
        return t[Dc] ? (t = t[Dc], t._dq ? t._dq : t instanceof DH && t._fg === !1 ? t : null) : null }

    function ye(t, i, n) {
        if (n = n || i[Nc], n == t) return !1;
        var e = t.getEdgeBundle(n);
        return e || (e = new iW(t, n), t[Bc][n.id] = e), e._i6(i, t) }

    function ge(t, i, n) {
        if (n = n || i.toAgent, n == t) return !1;
        var e = t.getEdgeBundle(n);
        return e ? e._dd(i, t) : void 0 }

    function me(t, i, e) {
        return e === n && (e = i.toAgent), e != t ? (t._7s || (t._7s = new uz), t._7s.add(i) === !1 ? !1 : void t._9i++) : void 0 }

    function xe(t, i, n) {
        return t._7s && t._7s[Kh](i) !== !1 ? (t._9i--, void ge(t, i, n)) : !1 }

    function Ee(t, i) {
        return i[$c] != t ? (t._8t || (t._8t = new uz), t._8t.add(i) === !1 ? !1 : void t._n59++) : void 0 }

    function pe(t, i) {
        return t._8t && t._8t[Kh](i) !== !1 ? (t._n59--, void ge(i[$c], i, t)) : !1 }

    function we(t, i) {
        if (i === n && (i = t instanceof CH), i) {
            if (t[Fc]()) return null;
            var e = we(t[Gc], !1);
            if (t.isLooped()) return e;
            for (var s = we(t.to, !1); null != e && null != s;) {
                if (e == s) return e;
                if (e.isDescendantOf(s)) return s;
                if (s[zc](e)) return e;
                e = we(e, !1), s = we(s, !1) }
            return null }
        for (var h = t[Dc]; null != h;) {
            if (h._ia()) return h;
            h = h[Dc] }
        return null }

    function Te(t, i, n) { t._ia() && t[qh]() && t[Hh].forEach(function(t) { t instanceof LH && i.add(t) && Te(t, i, n) }, this), t[qc]() && t._do[Rc](function(t) {
            (null == n || n[Yc](t)) && i.add(t) && Te(t, i, n) }) }

    function ke(t, i) { i[Dc] ? i[Dc].setChildIndex(i, i[Dc][Hc] - 1) : t[Uc][Wc](i, t[Uc][Yh] - 1) }

    function Me(t, i) {
        if (i instanceof CH) return void(i[Fc]() || Ie(t, i));
        for (ke(t, i); i = i.parent;) ke(t, i) }

    function Oe(t, i) {
        if (i instanceof CH) return void(i.isInvalid() || Ie(t, i));
        for (ke(t, i); i = i[Dc];) ke(t, i) }

    function Ie(t, i) {
        var n = i[$c];
        if (i.isLooped()) ke(t, n);
        else {
            var e = i[Nc];
            ke(t, n), ke(t, e) } }

    function Se(t, i) {
        return t._9i++, t._g1 ? (i._in = t._hq, t._hq._ib = i, void(t._hq = i)) : (t._g1 = i, void(t._hq = i)) }

    function je(t, i) { t._9i--, t._hq == i && (t._hq = i._in), i._in ? i._in._ib = i._ib : t._g1 = i._ib, i._ib && (i._ib._in = i._in), i._in = null, i._ib = null, ge(t, i, i.$to) }

    function Ae(t, i) {
        return t[Vc]++, t._ht ? (i._k2 = t._jf, t._jf._k4 = i, void(t._jf = i)) : (t._ht = i, void(t._jf = i)) }

    function Ce(t, i) { t[Vc]--, t._jf == i && (t._jf = i._k2), i._k2 ? i._k2._k4 = i._k4 : t._ht = i._k4, i._k4 && (i._k4._k2 = i._k2), i._k2 = null, i._k4 = null }

    function Le(t, i) {
        return i = i || new uz, t.forEachEdge(function(t) { i.add({ id: t.id, edge: t, fromAgent: t[Xc]._dq, toAgent: t.$to._dq }) }), t.forEachChild(function(t) { t instanceof LH && Le(t, i) }), i }

    function Pe(t, i, n) {
        return De(t, i, n) === !1 ? !1 : Re(t, i, n) }

    function Re(t, i, n) {
        if (t._g1)
            for (var e = t._g1; e;) {
                if (i[zh](n, e) === !1) return !1;
                e = e._ib } }

    function De(t, i, n) {
        if (t._ht)
            for (var e = t._ht; e;) {
                if (i[zh](n, e) === !1) return !1;
                e = e._k4 } }

    function Ne(t, i, e, s, h, r, a) {
        return r || a ? (r = r || 0, a = a === n ? r : a || 0, r = Math.min(r, s / 2), a = Math.min(a, h / 2), t[Kc](i + r, e), t.lineTo(i + s - r, e), t[Zc](i + s, e, i + s, e + a), t.lineTo(i + s, e + h - a), t.quadTo(i + s, e + h, i + s - r, e + h), t.lineTo(i + r, e + h), t[Zc](i, e + h, i, e + h - a), t.lineTo(i, e + a), t[Zc](i, e, i + r, e), t.closePath(), t) : (t[Kc](i, e), t[Jc](i + s, e), t.lineTo(i + s, e + h), t.lineTo(i, e + h), t[vf](), t) }

    function Be(t, i) {
        var n = i.r || 1,
            e = i.cx || 0,
            s = i.cy || 0,
            h = n * Math.tan(Math.PI / 8),
            r = n * Math.sin(Math.PI / 4);
        t[Kc](e + n, s), t.quadTo(e + n, s + h, e + r, s + r), t[Zc](e + h, s + n, e, s + n), t[Zc](e - h, s + n, e - r, s + r), t[Zc](e - n, s + h, e - n, s), t[Zc](e - n, s - h, e - r, s - r), t[Zc](e - h, s - n, e, s - n), t[Zc](e + h, s - n, e + r, s - r), t.quadTo(e + n, s - h, e + n, s) }

    function $e(t, i, n, e, s) { i instanceof tn && (e = i[Da], s = i.height, n = i.cy - s / 2, i = i.cx - e / 2);
        var h = .5522848,
            r = e / 2 * h,
            a = s / 2 * h,
            o = i + e,
            f = n + s,
            c = i + e / 2,
            u = n + s / 2;
        return t[Kc](i, u), t.curveTo(i, u - a, c - r, n, c, n), t.curveTo(c + r, n, o, u - a, o, u), t[Qc](o, u + a, c + r, f, c, f), t[Qc](c - r, f, i, u + a, i, u), t }

    function Fe(t, i, n, e, s) {
        var h = 2 * e,
            r = 2 * s,
            a = i + e / 2,
            o = n + s / 2;
        return t.moveTo(a - h / 4, o - r / 12), t.lineTo(i + .306 * e, n + .579 * s), t[Jc](a - h / 6, o + r / 4), t[Jc](i + e / 2, n + .733 * s), t.lineTo(a + h / 6, o + r / 4), t[Jc](i + .693 * e, n + .579 * s), t[Jc](a + h / 4, o - r / 12), t[Jc](i + .611 * e, n + .332 * s), t[Jc](a + 0, o - r / 4), t[Jc](i + .388 * e, n + .332 * s), t[vf](), t }

    function Ge(t, i, n, e, s) {
        return t[Kc](i, n), t[Jc](i + e, n + s / 2), t[Jc](i, n + s), t[vf](), t }

    function ze(t, i, n, e, s) {
        return t[Kc](i, n + s / 2), t.lineTo(i + e / 2, n), t[Jc](i + e, n + s / 2), t[Jc](i + e / 2, n + s), t[vf](), t }

    function qe(t, i, n, e, s, h) {
        return t[Kc](i, n), t[Jc](i + e, n + s / 2), t[Jc](i, n + s), h || (t[Jc](i + .25 * e, n + s / 2), t[vf]()), t }

    function Ye(t, i, n, e, s) {
        if (!t || 3 > t) throw new Error("edge number must greater than 2");
        t = 0 | t, e = e || 50, s = s || 0, i = i || 0, n = n || 0;
        for (var h, r, a = 0, o = 2 * Math.PI / t, f = new fY; t > a;) h = i + e * Math.cos(s), r = n + e * Math.sin(s), a ? f[Jc](h, r) : f[Kc](h, r), ++a, s += o;
        return f.closePath(), f }

    function He() {
        var t = new fY;
        return t.moveTo(75, 40), t.curveTo(75, 37, 70, 25, 50, 25), t[Qc](20, 25, 20, 62.5, 20, 62.5), t[Qc](20, 80, 40, 102, 75, 120), t.curveTo(110, 102, 130, 80, 130, 62.5), t[Qc](130, 62.5, 130, 25, 100, 25), t[Qc](85, 25, 75, 37, 75, 40), t }

    function Ue() {
        var t = new fY;
        return t[Kc](20, 0), t.lineTo(80, 0), t[Jc](100, 100), t[Jc](0, 100), t[vf](), t }

    function We() {
        var t = new fY;
        return t.moveTo(100, 0), t.lineTo(100, 80), t[Jc](0, 100), t[Jc](0, 20), t.closePath(), t }

    function Ve() {
        var t = new fY;
        return t[Kc](20, 0), t.lineTo(100, 0), t[Jc](80, 100), t.lineTo(0, 100), t[vf](), t }

    function Xe() {
        var t = new fY;
        return t[Kc](43, 23), t[Jc](28, 10), t[Jc](37, 2), t[Jc](63, 31), t[Jc](37, 59), t[Jc](28, 52), t[Jc](44, 38), t[Jc](3, 38), t[Jc](3, 23), t.closePath(), t }

    function Ke() {
        var t = new fY;
        return t.moveTo(1, 8), t[Jc](7, 2), t[Jc](32, 26), t[Jc](7, 50), t.lineTo(1, 44), t[Jc](18, 26), t.closePath(), t.moveTo(27, 8), t.lineTo(33, 2), t.lineTo(57, 26), t[Jc](33, 50), t[Jc](27, 44), t[Jc](44, 26), t.closePath(), t }

    function Ze() {
        var t = new fY;
        return t[Kc](0, 15), t.lineTo(23, 15), t[Jc](23, 1), t[Jc](47, 23), t.lineTo(23, 43), t[Jc](23, 29), t[Jc](0, 29), t[vf](), t }

    function Je() {
        var t = new fY;
        return t[Kc](0, 21), t[Jc](30, 21), t[Jc](19, 0), t.lineTo(25, 0), t[Jc](47, 25), t[Jc](25, 48), t[Jc](19, 48), t.lineTo(30, 28), t[Jc](0, 28), t[vf](), t }

    function Qe() {
        var t = new fY;
        return t.moveTo(0, 0), t.lineTo(34, 24), t[Jc](0, 48), t.lineTo(14, 24), t[vf](), t }

    function ts() {
        var t = new fY;
        return t[Kc](20, 0), t[Jc](34, 14), t[Jc](20, 28), t.lineTo(22, 18), t[Jc](1, 25), t[Jc](10, 14), t[Jc](1, 3), t[Jc](22, 10), t[vf](), t }

    function is() {
        var t = new fY;
        return t.moveTo(4, 18), t[Jc](45, 18), t[Jc](37, 4), t[Jc](83, 25), t[Jc](37, 46), t[Jc](45, 32), t.lineTo(4, 32), t[vf](), t }

    function ns() {
        var t = new fY;
        return t[Kc](17, 11), t[Jc](27, 11), t[Jc](42, 27), t[Jc](27, 42), t.lineTo(17, 42), t[Jc](28, 30), t[Jc](4, 30), t.lineTo(4, 23), t[Jc](28, 23), t[vf](), t }

    function es() { RH.register(Mq[tu], $e(new fY, 0, 0, 100, 100)), RH.register(Mq[iu], Ne(new fY, 0, 0, 100, 100)), RH[nu](Mq[eu], Ne(new fY, 0, 0, 100, 100, 20, 20)), RH[nu](Mq.SHAPE_STAR, Fe(new fY, 0, 0, 100, 100)), RH.register(Mq[su], Ge(new fY, 0, 0, 100, 100)), RH.register(Mq[hu], Ye(5)), RH[nu](Mq[ru], Ye(6)), RH[nu](Mq[au], ze(new fY, 0, 0, 100, 100)), RH[nu](Mq[ou], He()), RH[nu](Mq[fu], Ue()), RH[nu](Mq[cu], We()), RH.register(Mq[uu], Ve());
        var t = new fY;
        t[Kc](20, 0), t[Jc](40, 0), t.lineTo(40, 20), t.lineTo(60, 20), t[Jc](60, 40), t.lineTo(40, 40), t[Jc](40, 60), t[Jc](20, 60), t[Jc](20, 40), t[Jc](0, 40), t[Jc](0, 20), t.lineTo(20, 20), t[vf](), RH[nu](Mq[_u], t), RH.register(Mq[du], qe(new fY, 0, 0, 100, 100)), RH.register(Mq.SHAPE_ARROW_1, Xe()), RH.register(Mq[lu], Ke()), RH.register(Mq[vu], Ze()), RH.register(Mq[bu], Je()), RH.register(Mq[yu], Qe()), RH[nu](Mq.SHAPE_ARROW_6, ts()), RH.register(Mq[gu], is()), RH[nu](Mq[mu], ns()), RH[nu](Mq[xu], qe(new fY, 0, 0, 100, 100, !0)) }

    function ss() { w(this, ss, arguments), this[Eu] = !0 }

    function hs() { w(this, hs), this._$t = new Dz }

    function rs() {
        if (this._fg === !0) {
            var t = this._7s,
                i = this._8t;
            if (t)
                for (t = t._jk; t.length;) {
                    var n = t[0];
                    xe(this, n, n[Nc]) }
            if (i)
                for (i = i._jk; i[Yh];) {
                    var n = i[0];
                    pe(this, n, n[$c]) }
            return void this[pu](function(t) { t._ia() && rs[zh](t) }) }
        var e = Le(this);
        e[Rc](function(t) { t = t[wu];
            var i = t[Xc],
                n = t.$to,
                e = i[zc](this),
                s = n[zc](this);
            e && !s ? (me(this, t), ye(this, t)) : s && !e && (Ee(this, t), ye(t[$c], t, this)) }, this) }

    function as() { w(this, as, arguments), this.$image = null }

    function os(t, i, n, e) {
        return t[i] = n, e ? { get: function() {
                return this[i] }, set: function(t) {
                if (t !== this[i]) { this[i] = t, !this[Tu], this._1f = !0;
                    for (var n = e[Yh]; --n >= 0;) this[e[n]] = !0 } } } : { get: function() {
                return this[i] }, set: function(t) { t !== this[i] && (this[i] = t) } } }

    function fs(t, i) {
        var n = {},
            e = {};
        for (var s in i) {
            var h = i[s];
            h[ku] && h[ku][Rc](function(t, i, n) { n[i] = Mu + t, e[t] = !0 }), n[s] = os(t, fr + s, h[lr], h[ku]) }
        for (var r in e) t[Mu + r] = !0;
        Object[$r](t, n) }

    function cs(t, i, n, e) {
        if (Array[Tr](i))
            for (var s = i[Yh]; --s >= 0;) cs(t, i[s], n, e);
        else {
            var h = i.target;
            if (h) {
                if (h instanceof NH || (h = t[h]), !h) return } else h = t;
            if (e || (e = t.getProperty(i[Ou], n)), i[Iu] && (h[i[Iu]] = e), i.callback) {
                var r = i[Su];
                r instanceof Function || (r = t[r]), r instanceof Function && r.call(t, e, h) } } }

    function us() { BH.forEach(function(t) { this[t] = {} }, this) }

    function _s(t, i, n, e) {
        return e == Mq[ju] ? void(t[n] = i) : e == Mq.PROPERTY_TYPE_CLIENT ? void t.set(n, i) : e == Mq[Au] ? void t.setStyle(n, i) : !1 }

    function ds() { w(this, ds, arguments) }

    function ls() { w(this, ls, arguments) }

    function vs(t, i, n, e) {
        var s = bs(t, i, n, e),
            h = [];
        if (xs(t)) ys(s, i, n, h, e[Cu]($H[Lu]));
        else { js(t, i, n, h, s, e);
            var r = gs(t, e),
                a = r ? ks(t, s, i, n, e.getStyle($H[Pu])) : e.getStyle($H[Ru]);
            0 == a && (s = !s) }
        return h }

    function bs(t, i, n) {
        if (null != t) {
            if (t == Mq[Du] || t == Mq[Nu] || t == Mq[Bu] || t == Mq[$u] || t == Mq.EDGE_TYPE_EXTEND_RIGHT) return !0;
            if (t == Mq[Fu] || t == Mq.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == Mq.EDGE_TYPE_VERTICAL_HORIZONTAL || t == Mq[Gu] || t == Mq[zu]) return !1 }
        var e = ws(i, n),
            s = Ts(i, n);
        return e >= s }

    function ys(t, i, n, e, s) { t ? Rs(i, n, e, s) : Ds(i, n, e, s) }

    function gs(t, i) {
        return i[Cu]($H[qu]) }

    function ms(t) {
        return null != t && (t == Mq[Gu] || t == Mq[$u] || t == Mq[zu] || t == Mq.EDGE_TYPE_EXTEND_RIGHT) }

    function xs(t) {
        return t && (t == Mq.EDGE_TYPE_ELBOW || t == Mq[Du] || t == Mq.EDGE_TYPE_ELBOW_VERTICAL) }

    function Es(t, i, n, e, s) {
        if (t == Mq[Bu] || t == Mq[Yu]) return new lz(e.x + e[Da] / 2, e.y + e[Na] / 2);
        var h;
        if (ms(t)) {
            var r = Math.min(n.y, e.y),
                a = Math.min(n.x, e.x),
                o = Math.max(n[Ur], e[Ur]),
                f = Math.max(n.right, e[Wr]);
            if (h = s[Cu]($H[Lu]), t == Mq[Gu]) return new lz((a + f) / 2, r - h);
            if (t == Mq.EDGE_TYPE_EXTEND_LEFT) return new lz(a - h, (r + o) / 2);
            if (t == Mq.EDGE_TYPE_EXTEND_BOTTOM) return new lz((a + f) / 2, o + h);
            if (t == Mq.EDGE_TYPE_EXTEND_RIGHT) return new lz(f + h, (r + o) / 2) }
        var c = gs(t, s);
        if (h = c ? ks(t, i, n, e, s[Cu]($H[Pu])) : s.getStyle($H[Ru]), h == Number[Hu] || h == Number[Uu]) return new lz(e.x + e[Da] / 2, e.y + e.height / 2);
        if (0 == h) return new lz(n.x + n[Da] / 2, n.y + n.height / 2);
        if (i) {
            var u = n.x + n[Wr] < e.x + e[Wr];
            return new lz(Is(u, h, n.x, n[Da]), n.y + n[Na] / 2) }
        var _ = n.y + n.bottom < e.y + e[Ur];
        return new lz(n.x + n[Da] / 2, Is(_, h, n.y, n[Na])) }

    function ps(t, i, n, e) {
        var s = Math.max(i, e) - Math.min(t, n);
        return s - (i - t + e - n) }

    function ws(t, i) {
        var n = Math.max(t.x + t.width, i.x + i.width) - Math.min(t.x, i.x);
        return n - t[Da] - i[Da] }

    function Ts(t, i) {
        var n = Math.max(t.y + t[Na], i.y + i[Na]) - Math.min(t.y, i.y);
        return n - t.height - i.height }

    function ks(t, i, n, e, s) {
        var h = Ms(s, i, n, e, null);
        return h * s }

    function Ms(t, i, n, e) {
        return i ? Os(t, n.x, n[Wr], e.x, e[Wr]) : Os(t, n.y, n[Ur], e.y, e[Ur]) }

    function Os(t, i, n, e, s) {
        var h = ps(i, n, e, s),
            r = e + s > i + n;
        if (h > 0) {
            if (1 == t) return h + (s - e) / 2;
            if (t >= 0 && 1 > t) return h;
            if (0 > t) return r ? e - i : n - s }
        return Math.abs(r && t > 0 || !r && 0 > t ? n - s : i - e) }

    function Is(t, i, n, e) {
        return t == i > 0 ? n + e + Math.abs(i) : n - Math.abs(i) }

    function Ss(t, i) {
        var n = t.length;
        if (!(3 > n)) {
            var e = i[Cu]($H[Wu]);
            if (e != Mq.EDGE_CORNER_NONE) {
                var s = i[Cu]($H.EDGE_CORNER_RADIUS),
                    h = 0,
                    r = 0;
                s && (D(s) ? h = r = s : (h = s.x || 0, r = s.y || 0));
                for (var a, o, f, c, u = t[0], _ = t[1], d = null, l = 2; n > l; l++) {
                    var v = t[l],
                        b = _.x - u.x,
                        y = _.y - u.y,
                        x = v.x - _.x,
                        E = v.y - _.y,
                        p = !b || b > -Cq && Cq > b,
                        w = !y || y > -Cq && Cq > y,
                        T = !x || x > -Cq && Cq > x,
                        k = !E || E > -Cq && Cq > E,
                        M = w;
                    (p && k || w && T) && (M ? (a = Math.min(2 == l ? Math.abs(b) : Math.abs(b) / 2, h), o = Math.min(l == n - 1 ? Math.abs(E) : Math.abs(E) / 2, r), f = new lz(_.x - (b > 0 ? a : -a), _.y), c = new lz(_.x, _.y + (E > 0 ? o : -o))) : (a = Math.min(l == n - 1 ? Math.abs(x) : Math.abs(x) / 2, h), o = Math.min(2 == l ? Math.abs(y) : Math.abs(y) / 2, r), f = new lz(_.x, _.y - (y > 0 ? o : -o)), c = new lz(_.x + (x > 0 ? a : -a), _.y)), m(t, _), l--, n--, (f.x != u.x || f.y != u.y) && (g(t, f, l), l++, n++), e == Mq[Vu] ? (g(t, c, l), l++, n++) : e == Mq[Xu] && (g(t, [_, c], l), l++, n++)), u = _, _ = v }
                null != d && c.x == _.x && c.y == _.y && m(t, _) } } }

    function js(t, i, n, e, s, h) {
        var r = h.getStyle($H[Ku]),
            a = null == r;
        if (null != r) {
            var o = (new gz).union(i).union(n);
            o[Zu](r) || (s = As(r.x, r.y, o.y, o.x, o[Ur], o.right)) } else r = Es(t, s, i, n, h);
        s ? Ps(i, n, r, e, a) : Ls(i, n, r, e, a) }

    function As(t, i, n, e, s, h) {
        return n > i && n - i > e - t && n - i > t - h || i > s && i - s > e - t && i - s > t - h ? !1 : !0 }

    function Cs(t, i, n) {
        return i >= t.x && i <= t[Wr] && n >= t.y && n <= t.bottom }

    function Ls(t, i, n, e, s) {
        var h = Math.max(t.y, i.y),
            r = Math.min(t.y + t[Na], i.y + i[Na]),
            a = null != n ? n.y : r + (h - r) / 2,
            o = t.x + t[Da] / 2,
            f = i.x + i.width / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[Da] && (o = n.x), n.x >= i.x && n.x <= i.x + i[Da] && (f = n.x)), Cs(i, o, a) || Cs(t, o, a) || e.push(new lz(o, a)), Cs(i, f, a) || Cs(t, f, a) || e[Jh](new lz(f, a)), 0 == e[Yh])
            if (null != n) Cs(i, n.x, a) || Cs(t, n.x, a) || e.push(new lz(n.x, a));
            else {
                var c = Math.max(t.x, i.x),
                    u = Math.min(t.x + t[Da], i.x + i.width);
                e[Jh](new lz(c + (u - c) / 2, a)) } }

    function Ps(t, i, n, e, s) {
        var h = Math.max(t.x, i.x),
            r = Math.min(t.x + t.width, i.x + i[Da]),
            a = null != n ? n.x : r + (h - r) / 2,
            o = t.y + t[Na] / 2,
            f = i.y + i[Na] / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[Na] && (o = n.y), n.y >= i.y && n.y <= i.y + i[Na] && (f = n.y)), Cs(i, a, o) || Cs(t, a, o) || e[Jh](new lz(a, o)), Cs(i, a, f) || Cs(t, a, f) || e[Jh](new lz(a, f)), 0 == e[Yh])
            if (null != n) Cs(i, a, n.y) || Cs(t, a, n.y) || e[Jh](new lz(a, n.y));
            else {
                var c = Math.max(t.y, i.y),
                    u = Math.min(t.y + t[Na], i.y + i[Na]);
                e.push(new lz(a, c + (u - c) / 2)) } }

    function Rs(t, i, n, e) {
        var s = i.x + i[Da] < t.x,
            h = t.x + t[Da] < i.x,
            r = s ? t.x : t.x + t[Da],
            a = t.y + t[Na] / 2,
            o = h ? i.x : i.x + i[Da],
            f = i.y + i[Na] / 2,
            c = e,
            u = s ? -c : c,
            _ = new lz(r + u, a);
        u = h ? -c : c;
        var d = new lz(o + u, f);
        if (s == h) {
            var l = s ? Math.min(r, o) - e : Math.max(r, o) + e;
            n[Jh](new lz(l, a)), n[Jh](new lz(l, f)) } else if (_.x < d.x == s) {
            var v = a + (f - a) / 2;
            n.push(_), n[Jh](new lz(_.x, v)), n[Jh](new lz(d.x, v)), n[Jh](d) } else n.push(_), n[Jh](d) }

    function Ds(t, i, n, e) {
        var s = i.y + i[Na] < t.y,
            h = t.y + t[Na] < i.y,
            r = t.x + t[Da] / 2,
            a = s ? t.y : t.y + t[Na],
            o = i.x + i[Da] / 2,
            f = h ? i.y : i.y + i[Na],
            c = e,
            u = s ? -c : c,
            _ = new lz(r, a + u);
        u = h ? -c : c;
        var d = new lz(o, f + u);
        if (s == h) {
            var l = s ? Math.min(a, f) - e : Math.max(a, f) + e;
            n[Jh](new lz(r, l)), n[Jh](new lz(o, l)) } else if (_.y < d.y == s) {
            var v = r + (o - r) / 2;
            n[Jh](_), n[Jh](new lz(v, _.y)), n[Jh](new lz(v, d.y)), n.push(d) } else n[Jh](_), n.push(d) }

    function Ns(t) {
        return t == Mq[Ju] || t == Mq[Nu] || t == Mq[Bu] || t == Mq[Qu] || t == Mq.EDGE_TYPE_VERTICAL_HORIZONTAL || t == Mq[Gu] || t == Mq.EDGE_TYPE_EXTEND_LEFT || t == Mq[zu] || t == Mq.EDGE_TYPE_EXTEND_RIGHT || t == Mq[t_] || t == Mq.EDGE_TYPE_ELBOW_HORIZONTAL || t == Mq[Fu] }

    function Bs(t, i) {
        var n, e;
        i && i[Da] && i[Na] ? (n = i.width, e = i[Na]) : n = e = isNaN(i) ? cz[i_] : i;
        var s = RH[n_](t, -n, -e / 2, n, e);
        return s || (s = new fY, s.moveTo(-n, -e / 2), s.lineTo(0, 0), s[Jc](-n, e / 2)), s }

    function $s(t, i) {
        var n = Math.sin(i),
            e = Math.cos(i),
            s = t.x,
            h = t.y;
        return t.x = s * e - h * n, t.y = s * n + h * e, t }

    function Fs(t, i, n, e, s, h) {
        var r = Math.atan2(e - i, n - t),
            a = new lz(s, h);
        return a[Mo] = r, $s(a, r), a.x += t, a.y += i, a }

    function Gs(t, i, e, s, h) { i = si(s, i.x, i.y, e.x, e.y), e = si(h, e.x, e.y, i.x, i.y);
        var r = Math.PI / 2 + Math[qr](e.y - i.y, e.x - i.x),
            a = t * Math.cos(r),
            o = t * Math.sin(r),
            f = e.x - i.x,
            c = e.y - i.y,
            u = i.x + .25 * f,
            _ = i.y + .25 * c,
            d = i.x + .75 * f,
            l = i.y + .75 * c;
        return [new aY(sY, [u + a, _ + o, d + a, l + o, n, n])] }

    function zs(t, i, e) {
        if (g(t, new aY(iY, [i.x, i.y]), 0), e) {
            if (t[Yh] > 1) {
                var s = t[t[Yh] - 1];
                if (eY == s.type && (s[Zo] || s[go][2] === n || null === s.points[2])) return s[go][2] = e.x, s.points[3] = e.y, void(s.invalidTerminal = !0);
                if (sY == s[Ko] && (s[Zo] || s[go][4] === n || null === s.points[4])) return s.points[4] = e.x, s.points[5] = e.y, void(s.invalidTerminal = !0) }
            t[Jh](new aY(nY, [e.x, e.y])) } }

    function qs(t, i, n, e, s, h, r, a) {
        return i.hasPathSegments() ? void(n._fd = i._9d[e_]()) : e == s ? void t[s_](n, e, h, r) : void t[h_](n, e, s, h, r, a) }

    function Ys(t, i, n, e, s) {
        var h = e == s,
            r = t[r_][a_](e),
            a = h ? r : t.graph.getUI(s);
        if (r && a) {
            var o = i.edgeType,
                f = r[o_].clone(),
                c = h ? f : a.bodyBounds.clone(),
                u = t[Cu]($H[f_]),
                _ = t[Cu]($H[c_]);
            u && (f.x += u.x || 0, f.y += u.y || 0), _ && (c.x += _.x || 0, c.y += _.y || 0);
            var d = i[u_]();
            if (!h && !o && !d) {
                var l = e[Eu],
                    v = s[Eu];
                if (l != v) {
                    var b, y, g, m, x = i[__];
                    l ? (b = r, y = f, g = a, m = c) : (b = a, y = c, g = r, m = f);
                    var E = Ks(y, b, l, g, m, x);
                    if (E && 2 == E[Yh]) {
                        var p = E[0],
                            w = E[1];
                        return n[Kc](p.x, p.y), w.x == p.x && w.y == p.y && (w.y += .01), n[Jc](w.x, w.y), void(n._5x = !0) } } }
            qs(t, i, n, r, a, o, f, c), (!h || d) && Hs(t, i, n, r, a, o, f, c), n._5x = !0 } }

    function Hs(t, i, e, s, h, r, a, o) {
        var f = a.center,
            c = o.center,
            u = t.fromAtEdge,
            _ = t.toAtEdge;
        if (!u && !_) return void zs(e._fd, f, c);
        var d = e._fd;
        if (d[Yh]) {
            if (u) {
                var l = d[0],
                    v = l.firstPoint;
                a[d_](v.x, v.y) && (l[Ko] == sY ? (f = v, v = { x: l[go][2], y: l[go][3] }, l[go] = l.points[Uh](2), l[Ko] = eY) : l.type == eY && (f = v, v = { x: l[go][0], y: l[go][1] }, l.points = l.points[Uh](2), l[Ko] = nY)), Us(s, a, v, f, n, n) }
            if (_) {
                var b, y = d[d[Yh] - 1],
                    g = y[ko],
                    m = y[go][Yh],
                    x = g.x === n || g.y === n;
                m >= 4 && (x || o[d_](g.x, g.y)) && (x || (c = g), b = !0, g = { x: y[go][m - 4], y: y.points[m - 3] }, o[d_](g.x, g.y) && (c = g, m >= 6 ? (g = { x: y.points[m - 6], y: y[go][m - 5] }, y[go] = y.points[Uh](0, 4), y[Ko] = eY) : 1 == d[Yh] ? (g = { x: f.x, y: f.y }, y.points = y[go][Uh](0, 2), y[Ko] = nY) : (y = d[d[Yh] - 2], g = y.lastPoint))), Us(h, o, g, c, n, n), b && (m = y[go][Yh], y.points[m - 2] = c.x, y.points[m - 1] = c.y, c = null) } } else {
            var E = Math[qr](c.y - f.y, c.x - f.x),
                p = Math.cos(E),
                w = Math.sin(E);
            u && Us(s, a, c, f, p, w), _ && Us(h, o, f, c, -p, -w) }
        zs(e._fd, f, c) }

    function Us(t, i, e, s, h, r) {
        if (h === n) {
            var a = Math[qr](e.y - s.y, e.x - s.x);
            h = Math.cos(a), r = Math.sin(a) }
        for (e = { x: e.x, y: e.y }, i[d_](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y));;) {
            if (!i.contains(e.x, e.y)) return s;
            if (t[l_](e.x - h, e.y - r, cz.LOOKING_EDGE_ENDPOINT_TOLERANCE)) { s.x = e.x - h / 2, s.y = e.y - r / 2;
                break }
            e.x -= h, e.y -= r }
        return s }

    function Ws(t, i, n, e, s, h, r, a) {
        if (i[u_]()) return i._9d;
        var o = i[v_];
        if (Ns(o)) {
            var f = vs(o, n, e, t, s, h);
            if (!f || !f[Yh]) return null;
            g(f, r, 0), f[Jh](a), o != Mq[t_] && Ss(f, t);
            for (var c = [], u = f[Yh], _ = 1; u - 1 > _; _++) {
                var d = f[_];
                c[Jh]($(d) ? new aY(eY, [d[0].x, d[0].y, d[1].x, d[1].y]) : new aY(nY, [d.x, d.y])) }
            return c }
        if (i[b_]) {
            var l = t._1y();
            if (!l) return;
            return Gs(l, r, a, n, e) } }

    function Vs(t, i, n) {
        var e = t.getStyle($H[y_]),
            s = t._1y(),
            h = e + .2 * s,
            r = i.x + i[Da] - h,
            a = i.y,
            o = i.x + i.width,
            f = i.y + h;
        e += s;
        var c = .707,
            u = -.707,
            _ = i.x + i[Da],
            d = i.y,
            l = _ + c * e,
            v = d + u * e,
            b = { x: r, y: a },
            y = { x: l, y: v },
            g = { x: o, y: f },
            m = b.x,
            x = y.x,
            E = g.x,
            p = b.y,
            w = y.y,
            T = g.y,
            k = ((T - p) * (w * w - p * p + x * x - m * m) + (w - p) * (p * p - T * T + m * m - E * E)) / (2 * (x - m) * (T - p) - 2 * (E - m) * (w - p)),
            M = ((E - m) * (x * x - m * m + w * w - p * p) + (x - m) * (m * m - E * E + p * p - T * T)) / (2 * (w - p) * (E - m) - 2 * (T - p) * (x - m)),
            h = Math.sqrt((m - k) * (m - k) + (p - M) * (p - M)),
            O = Math[qr](b.y - M, b.x - k),
            I = Math.atan2(g.y - M, g.x - k),
            S = I - O;
        return 0 > S && (S += 2 * Math.PI), Xs(k, M, O, S, h, h, !0, n) }

    function Xs(t, i, n, e, s, h, r, a) {
        var o, f, c, u, _, d, l, v, b, y, g;
        if (Math.abs(e) > 2 * Math.PI && (e = 2 * Math.PI), _ = Math[Xh](Math.abs(e) / (Math.PI / 4)), o = e / _, f = o, c = n, _ > 0) { d = t + Math.cos(c) * s, l = i + Math.sin(c) * h, moveTo ? a.moveTo(d, l) : a.lineTo(d, l);
            for (var m = 0; _ > m; m++) c += f, u = c - f / 2, v = t + Math.cos(c) * s, b = i + Math.sin(c) * h, y = t + Math.cos(u) * (s / Math.cos(f / 2)), g = i + Math.sin(u) * (h / Math.cos(f / 2)), a.quadTo(y, g, v, b) } }

    function Ks(t, i, e, s, h, r) {
        var a = h.cx,
            o = h.cy,
            f = a < t.x,
            c = a > t[Wr],
            u = o < t.y,
            _ = o > t.bottom,
            d = t.cx,
            l = t.cy,
            v = f || c,
            b = u || _,
            y = r === n || null === r;
        y && (r = Math[qr](o - l, a - d), v || b || (r += Math.PI));
        var g = Math.cos(r),
            m = Math.sin(r),
            x = Js(i, t, { x: a, y: o }, -g, -m);
        x || (r = Math.atan2(o - l, a - d), v || b || (r += Math.PI), g = Math.cos(r), m = Math.sin(r), x = Js(i, t, { x: a, y: o }, -g, -m) || { x: d, y: l });
        var E = Js(s, h, { x: x.x, y: x.y }, -x[g_] || g, -x.perY || m, !1) || { x: a, y: o };
        return e ? [x, E] : [E, x] }

    function Zs(t, i, n, e, s, h) {
        var r = i < t.x,
            a = i > t[Wr],
            o = n < t.y,
            f = n > t[Ur];
        if (r && e > 0) {
            var c = t.x - i,
                u = n + c * s / e;
            if (u >= t.y && u <= t[Ur]) return { x: t.x, y: u, perX: e, perY: s } }
        if (a && 0 > e) {
            var c = t[Wr] - i,
                u = n + c * s / e;
            if (u >= t.y && u <= t[Ur]) return { x: t[Wr], y: u, perX: e, perY: s } }
        if (o && s > 0) {
            var _ = t.y - n,
                d = i + _ * e / s;
            if (d >= t.x && d <= t[Wr]) return { x: d, y: t.y, perX: e, perY: s } }
        if (f && 0 > s) {
            var _ = t[Ur] - n,
                d = i + _ * e / s;
            if (d >= t.x && d <= t[Wr]) return { x: d, y: t[Ur], perX: e, perY: s } }
        return h !== !1 ? Zs(t, i, n, -e, -s, !1) : void 0 }

    function Js(t, i, n, e, s, h) {
        if (!i[d_](n.x, n.y)) {
            if (n = Zs(i, n.x, n.y, e, s, h), !n) return;
            return Qs(t, i, n, n[g_], n[m_]) }
        return h === !1 ? Qs(t, i, n, e, s) : Qs(t, i, { x: n.x, y: n.y, perX: e, perY: s }, e, s) || Qs(t, i, n, -e, -s) }

    function Qs(t, i, n, e, s) {
        for (;;) {
            if (!i[d_](n.x, n.y)) return;
            if (t[l_](n.x + e, n.y + s)) break;
            n.x += e, n.y += s }
        return n }

    function th(t) {
        return mn(t) ? t : t[x_](/.(gif|jpg|jpeg|png)$/gi) ? t : (t = J(t), t instanceof Object && t[Uo] ? t : void 0) }

    function ih(t) {
        for (var i = t[Dc]; i;) {
            if (i[E_]) return i;
            i = i[Dc] }
        return null }

    function nh() { w(this, nh, arguments) }

    function eh(t, n, e, s, h, r, a) {
        var o = i.createElement(p_);
        o[Lc] = w_, li(o, eU), n && li(o, n);
        var f = i[Ya](T_);
        return r && (oz && (f[k_] = r), Qz || (f.onclick = r)), f[_r] = a, f.src = e, li(f, sU), h && li(f, h), s && bi(f, M_, O_), o._img = f, o.appendChild(f), t[Cc](o), o }

    function sh(t, n) { this._navPane = i[Ya](p_), this._navPane.className = I_, li(this[S_], { "background-color": j_, overflow: A_, "user-select": C_, position: L_ }), this[P_] = eh(this._navPane, { width: R_ }, cz[D_], !1, null, n, N_), this[B_] = eh(this[S_], { height: R_ }, cz[$_], !1, hU, n, Ho), this._right = eh(this._navPane, { height: R_, right: F_ }, cz[$_], !0, hU, n, Wr), this._n6ottom = eh(this._navPane, { width: R_, bottom: F_ }, cz[D_], !0, null, n, Ur), t[Cc](this._navPane) }

    function hh(t, i) {
        if (!cz[$_]) {
            var n = Ci(20, 40),
                e = n.g;
            e[Qa](e[Va], e.ratio), e[Kc](16, 4), e.lineTo(4, 20), e[Jc](16, 36), e.lineWidth = 3, e.lineCap = uf, e.lineJoin = uf, e.strokeStyle = G_, e[z_] = q_, e.shadowBlur = 5, e.stroke(), cz.NAVIGATION_IMAGE_LEFT = n[Y_]();
            var s = Ci(n[Na], n[Da], !1);
            s.g[Ja](s.width, 0), s.g[Mo](Math.PI / 2), s.g[H_](n, 0, 0), cz[D_] = s[Y_]() }
        this[Sc] = t;
        var h = function(i) { z(i);
            var n, e, s = i.target,
                h = s[_r];
            if (Ho == h) n = 1;
            else if (Wr == h) n = -1;
            else if (N_ == h) e = 1;
            else {
                if (Ur != h) return;
                e = -1 }
            oz && (s.className = U_, setTimeout(function() { s[Lc] = "" }, 100)), z(i), t._kl._92(n, e) };
        sh[zh](this, i, h), this._3b(i.clientWidth, i.clientHeight) }

    function rh(t, i) { this[Sc] = t, this[W_](i, t) }

    function ah() { w(this, ah, arguments) }

    function oh(t, i) { this._n6aseCanvas = t, this._j1 = ae(i), this.g = this._j1.g, this._9q = new uz }

    function fh(t) {
        var i = t[V_],
            n = [];
        return t[X_].forEach(function(i) { t[K_](i) && t[Z_](i) && n.push(i) }), i.set(n) }

    function ch(t, i, n) {
        var e = t[yo];
        n = n || e, i = i || 1;
        var s = null;
        s && n[Da] * n[Na] * i * i > s && (i = Math.sqrt(s / n[Da] / n[Na]));
        var h = Ci();
        Wn(h.g), h[Da] = n[Da] * i, h[Na] = n[Na] * i, t._7x._fq(h.g, i, n);
        var r = null;
        try { r = h[Y_](J_) } catch (a) { kq.error(a) }
        return { canvas: h, data: r, width: h[Da], height: h.height } }

    function uh(t) { this[r_] = t, this[Q_] = t.topCanvas }

    function _h(t, i) { this.interactions = t, this[td] = i || id }

    function dh() { w(this, dh, arguments) }

    function lh(t, i) {
        if (!t) return i;
        var e = {};
        for (var s in t) e[s] = t[s];
        for (var s in i) e[s] === n && (e[s] = i[s]);
        return e }

    function vh() { w(this, vh, arguments) }

    function bh() { w(this, bh, arguments) }

    function yh() { w(this, yh, arguments) }

    function gh() { w(this, gh, arguments) }

    function mh(i, n, e) { i += t.pageXOffset, n += t[la];
        var s = e.getBoundingClientRect();
        return { x: i + s[Ho], y: n + s.top } }

    function xh(t, i, n) {
        var e = t[nd],
            s = t[ed];
        t.style[Ho] = i - e / 2 + Fa, t[ea].top = n - s / 2 + Fa }

    function Eh(t) {
        var n = i[Ya](Ha),
            e = n.getContext(Wa),
            s = getComputedStyle(t, null),
            h = s.font;
        h || (h = s.fontStyle + xr + s[sd] + xr + s.fontFamily), e.font = h;
        var r = t.value,
            a = r[fo](ho),
            o = parseInt(s[sd]),
            f = 0,
            c = 0;
        return kq[Rc](a, function(t) {
            var i = e.measureText(t)[Da];
            i > f && (f = i), c += 1.2 * o }), { width: f, height: c } }

    function ph(t, n) {
        if (Er == typeof t.selectionStart && Er == typeof t[hd]) {
            var e = t[lr],
                s = t[rd];
            t[lr] = e[Uh](0, s) + n + e[Uh](t.selectionEnd), t[hd] = t[rd] = s + n[Yh] } else if (ad != typeof i.selection) {
            var h = i.selection[od]();
            h[fd] = n, h[cd](!1), h[ud]() } }

    function wh(i) {
        if (KG) {
            var n = t[_d] || t[da],
                e = t.scrollY || t.pageYOffset;
            return i.select(), void t[dd](n, e) }
        i[ud]() }

    function Th() {}

    function kh(t) { this[r_] = t, this.topCanvas = t[Q_], this[ld] = oz ? 8 : 5 }

    function Mh(t) {
        return t[Ko] == eY || t[Ko] == sY }

    function Oh(t) { this[r_] = t, this.topCanvas = t[Q_], this.handlerSize = oz ? 8 : 4, this[vd] = oz ? 30 : 20 }

    function Ih(t, i) {
        var n = new gz;
        return n[$a](Fn[zh](t, { x: i.x, y: i.y })), n[$a](Fn[zh](t, { x: i.x + i[Da], y: i.y })), n[$a](Fn[zh](t, { x: i.x + i[Da], y: i.y + i.height })), n[$a](Fn[zh](t, { x: i.x, y: i.y + i[Na] })), n }

    function Sh(t) { t %= 2 * Math.PI;
        var i = Math[uf](t / oU);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : bd }

    function jh(n, e, s) {
        var h = i[yd],
            r = new kq[gd](t[da], t[la], h.clientWidth - 2, h[md] - 2),
            a = n.offsetWidth,
            o = n[ed];
        e + a > r.x + r[Da] && (e = r.x + r[Da] - a), s + o > r.y + r[Na] && (s = r.y + r[Na] - o), e < r.x && (e = r.x), s < r.y && (s = r.y), n[ea][Ho] = e + Fa, n[ea].top = s + Fa }

    function Ah(t, i, n, e, s) { this.source = t, this.type = xd, this[Ed] = i, this[Mr] = n, this[Jo] = e, this[pd] = s }

    function Ch(t) { this._47 = {}, this._kl = t, this._kl._1h.addListener(this._9c, this), this.currentMode = Mq.INTERACTION_MODE_DEFAULT }

    function Lh(t) {
        return t >= 100 && 200 > t }

    function Ph(t) {
        return t == OU || t == RU || t == PU || t == jU || t == BU || t == $U }

    function Rh() {
        var t, i, n = {},
            e = [],
            s = 0,
            h = {},
            r = 0;
        this.graph[Rc](function(a) {
            if (this[wd](a))
                if (a instanceof LH) {
                    var o = { node: a, id: a.id, x: a.x, y: a.y };
                    for (this.appendNodeInfo && this.appendNodeInfo(a, o), n[a.id] = o, e[Jh](o), s++, i = a.parent; i instanceof DH;) { t || (t = {});
                        var f = t[i.id];
                        f || (f = t[i.id] = { id: i.id, children: [] }), f[Hh].push(o), i = i[Dc] } } else if (a instanceof CH && !a.isLooped() && a[$c] && a[Nc]) {
                var o = { edge: a };
                h[a.id] = o, r++ } }, this);
        var a = {};
        for (var o in h) {
            var f = h[o],
                c = f[wu],
                u = c[$c],
                _ = c[Nc],
                d = u.id + ta + _.id,
                l = _.id + ta + u.id;
            if (n[u.id] && n[_.id] && !a[d] && !a[l]) {
                var v = n[u.id],
                    b = n[_.id];
                f[Gc] = v, f.to = b, a[d] = f, this.appendEdgeInfo && this[Td](c, f) } else delete h[o], r-- }
        return { groups: t, nodesArray: e, nodes: n, nodeCount: s, edges: h, edgeCount: r, minEnergy: this.minEnergyFunction(s, r) } }

    function Dh(t) { this[r_] = t, this.currentMovingNodes = {} }

    function Nh() { w(this, Nh, arguments) }

    function Bh(t, i, n, e, s) { e ? t.forEachEdge(function(e) {
            var h = e.otherNode(t);
            h != n && h._marker != s && i(h, t) }, this, !0) : t[kd](function(e) {
            var h = e[Nc];
            h != n && h[Md] != s && i(h, t) }) }
    var $h = "268aeb8d58db7fc1a08f48eb15c391da065565af09eab83ad4e62b01086328773d4ec8fc70af8cc4ed313081f3597c9db51d624b32f15fd2268b5e6eb720d8dbf4de968006f33ac89b867572972b6a4cddad6acb8fdaf46527cc9f94aca4337964c62159be32fad4b97530afdf58063556c92c4ec4b56042573596fabf25e13b699a87b5b49e7091449de32614be192017a779b6171c623e94d64db1056f7ef3b75b1104cc299a9358eb595a038a1e445c8629440e4fa03c66e8cfe1257c173fb1860a8794a42cd98cb0b1b64f2b3bdd1c2d14d3e134c592066d476ee4d6c0bc67752c742994c29708179b8e020ab5a183de2a9f722b0466179da71344c734b79ff423517e4a7fea8924d87615dff9ca639a3053bc1b7bdf31f8f955dfb5f974c8d9a10a4592ee6095792ab0006c84bf9eae2d5b3b90d7af57702fc7eb11ec5f1231997b38b91c6cf1ca737dec819101c95481fb1da16ac84d6d33ad66dcf45aa3b53b6812226e817445ee81d016bc26f400e430b7db455415ee83953c5ed88a1f01386528b4a5ed63464626abe6174e5a803df45b2f78d3a9a09729a6f330b9b31a567a2f9253c81af65f770f5ba9047cfc0b7a8e0fb37efec6a116c20b774294b7e6e13b4cda7b1ee91e3e15dd39971bc06173e32d9d3b19fcdf8a0fcdca03b87d599708c8398c27d880690675f4312b5687676e336ba8c9feac13a178eddfaecebea0a111d3841608dccc24b99e5aa56077aaabc4d9b615a0f66b097872711facc65b4af42a3bf0d39bba0bb42eb4759a120073c96f5ae4dccd75831ed62d74c51835363ec9c7bb7d9bd1f126707fa77000d48ea5f11cf422cd6e7b27a86e6c2914fe72f650f50412aa6bf79760f454f9e0db7a9a37955cbfd09c6c4dc8b3b3a1d5d167da072e06a664125cd35294f0599c986cd6efdaeec481b0380de23d6ebc1435e7ff952f256bac30639952c86d23aa7fec34d675cac25ca51a44c6d70198b657df8fa779aea51ca2c6a976a20df22182afddd8e71de20af3abb24da38a12ac3b7e4519b1b0c54ccd8e7ddccf6c79fe2372b4e84aa993ff9c1e66d7aef53d5c5c5280b4ff82c69518a9b611960231c6b8d5e3cf93ee0e17fb267a386488c8b6a76a37b5e0ded7f613f8154841b72dd3a47206226cfb65a89dec2ba0d666d1a5495c92de4600044d837bea7a5ef5002a498decee6fe6f224d750dde7836f6d438c95d2021bced15647a3d2d8838a4fccaf4d908106ffd641519f6f5c8824c0d1512cad2e78ab85dbb17d77581558dce994b10eaa5fbf0396ccb9aa0492580fdd027622c4a97fa9ac1bee805fbf6ce923de76ef4b2aba0cdc08d67276b2cbb34ebdebb7e05bcea0d0fbdc656bcff6e3cfb9981ef631ca52c3b8b86f862667c90f16ba93192be676146aed332a58808284f7dca2f381df7ccca2fb3bd5cb79afac137af918fb084ee9f9a2d503a12659017d91d8248602258f34823fd8d27470cf4e77077da0c21f9099fdbde06c01867b363e4652221f339b56f695929f76c071cbc2c7764a5070a343740e53bc844d4bd2e78444b435d8cfe76fae229d670cb92cfdb60e21de8bea37980bbac16725064cdf0aa406f7ede5dfb599896ba518c7f56fa6d15e8b0911c87b7d72ad426c70cbb8b04ad2a2979adc09fef06d0148c1497bd54cdbdf135b1330e644ff06ed01396d67249e92d1e6ad464ba8255c21b3ef90333d831dec0df1cafa2f4ab272303c40c6062a7612072477a851fad9ae687b18464046c0d7f68b360ec85669b6c5e0a0bf0054666c70fe87ff49cf7d2b25b406285f352a1560b7b5a263436d1fde5a35b9d6e4dc7033659d641a897c914e05f09f23c0b17b0967c9c7ba36663647b69a2c4e358d3e169f52367238d915399c0fa307ac8615c9632e9aab145764f6c70697957c970bd7581ff9776f7da87cc57994f0e7f800bd7e44f0629d75efb69a9fea4394caf5ecdb3bc39b7bb6d0d8212cbce9073e3589acc0fcae8f2bbb066a655efd4b6007e07a34e2c0ed708dcef9d09d17b19e8fc0412ad9da84fe96f5de81d529bac9d63b02c8e4754838b01b1ba2192cd0df99476238e843095da94d9ad0c1ec8e376c57106c1c981160fbbe956a9089dd3902fc1133bb32c9be70764612fe13179cbfd55f7b9d7ced949128a9b1477d1dc4b05ff1e3d69c689307bd93657267c7af9159232b7796576d9c92e00e79319b5240f7005a390e604aecf9d2ba253c4af8b853e28ec82f3acaac9965f45324f089b492ebe326ea5ae512b6b31e65b7e845b5bd2c339f85a7c8e4088577de5e0faa6aea77448595a9d8c8428eeeb3823823c6401e9a2049cef0a46b400cd9b38741da76faa40334c97b1274cf29c0fd7b74700c0f183526ec80b9038c85539c3a1519cf4423f6dba9c92454d8b05eaff2861b8fdfe54417c1ea7beeab0ace3ef6a44db37bd9b2d1263c75269b5aac34afc774f819176b6886e863e31a3f0836ebfceb5925a22eb195a9c868ce4c7b99cab38aa04c7912dfe318afed5e77bb4eb8fcc23b4d93f13aaec83e64ec7be7b2200d0832fb0beac9abef3e50fe9ea8ea8a1795583aa407def6121450391691bee375808eeef0f53938de26dffa759807915e6f66c279c0d022f433adba0df27d24540687fe89f5329c1512547742bb7006187f4faa9b99ba771c6d38d85f4743b7c7890bbb6fb1aee940b1efb000a775386a4fd6e85c5797fb770c8e250020374537f8a38b0e6453ed37e6dfd9399db463e6f8cfc6e5fd99d0674bf78c00bd6a48a6a100388dc8bb35f4d3b6f5c8fe0832bc01be191c2c7a55c553921f852c391d237aa2b89a19f90c58c6ffc7e2d3543312ded26441f253375c706b2a878ce7b75ab280437fcb16a12ca3d98537a1158901ebcbf7e1513a58a4784d50597df84e2db0649cf0f63c6b50a38806ca961f85faff460646d2400f6cfa2de86f2ba78694ad30293a1d219f213f08c8574e1c11f55b3ee0360de0bb0dc93a526f08165dfaa009d5957ba1691b41b103b80e26a9c0f8f4bf3ed6b5d96531b0156cd6e6d811d96efe35df575ef929a962074ebebcf152788c1f8953e49a86396c8f321f0d8f2eae888e3ca1dadbc3d957cc08e026d0cc2b9f0346286cb5ecbc4718ae946ea2817a9e6da9e0578f7e05dc48ea7a7902b91e1915a5d618f83a3f87f5893e5ea99b4e55f859cef751e03a8e76cc9f1bb344726ab5087ab98c9b0b46c48ea19b7166c4958236027427904188ca36e18929142d537dd1eebca27f771f64e6d85c2bbf7cdc03a405037e12844636413e0c50bbf17e0b75543bcf1ce3f57d8a90eb188a63924864bb646679e862fedbfeb5dc57ea63234717ad15914735e09ea1f3582b6220210ee868ae3b6dee1527ae865eb2d7389a2572ef74c9c9a4e412014f98d6e39ff90f9e31e8738b641fcbfeca2fb8d586f42decfec7f3a87a4ff629f2eb6d627f4f7ede15faebbb9ec08e35d66d165350769eaade28aefc4cc59ca66f6cf1d430b2910111005208110ad570f9c40ea2056bce78e8b88af83a0a4e3bd7f2879df4ddd90b7879d059d201a14128e8907309b2bb3a0fbad0180c1b4dfda0306d840fd9774e3b0f8093586595f8b0c815c0d5af65672a6c8fb7c518c26acb2c02fce44997c8871aca27038c8780d00e295fba68be83895dfc54e918f2c5a1183c2257eeb9d65692452982891ba58c646f3ca385e1775dcbc0678efb8d8aa2550a35ce217101387557dcca86de4a760e123a456022e97e4564ef14106f3895f0a0f65af0e7fcbbae0c5050ab3197a742ffec491bc378901d8ac5adf4343b101cb72b08980b22293a7d3e064f052146d82d47e0b642c00b8940886f43d1b3f45febb8863961302302f9cc2b781de15fccd8c09887adb4be14d3bdc47c79f1a5fee4da4947c0551cd6fca7b839721851f7f70ccd283a953ba7daf4cb2c5b7c944dde8cb92cf73e6272bbdd5fb5765d9ce1683c1bb99ac4e76379c30b4a069dd2d31fa41f794adc18c0d025a95116ad867060b7fa158bc71ce7d6a26ee07b8510586dea2488fb591ed83633b00b5e9b0302d6580fd03b68b21a1bc3d6b9dbf998040b50fdb3a17e0166ca7734592047fa5692785bed83eb09abca08870caa317e1836b64a39cb65be8e668c8cbe408f9455b894b10bfcb52bccb6c5c0da650ea778607e0866a86335f232a39e98486492b9efcf9b835980e786348247f37360acd94ef5e224a8e1915448c0fa911ec8351f50e6a34df3de1a8dbf88e84d6f2422076215aeba6926b514ee153bb0b2f4ffa3d5f97d5d64b51b5b76c9c3d4581094c39fa07234280f41748790b67493fe27094e394afa2322df698a319f47e76d8be178dd402e26053386acf809e6d4611f9f289a6dcdd4070295b393289665e1d9b5dfd2c83430374b2bbeaaceeb8c5fffa5708150736e2eca1b851cca4c79de66b48e4d94d8d2380d51ce47263bb14e243e2f8d198e39f7e6eb80301c9ee5c4c89f30930bdbaa800823e44c92e1b203aff3d7be6b6ee90113034e9588cd4061cc81cafa972d17a0805d70499d452d96cd7df3c560ce22eaa6232da12064ca3deb373b3e915859d88748aafa784e5b492bfb5b6facc8409170adf627deed574a23a30c992c9f5b72b0f2a2a12ca13b94fde1e1f0569003ede9db03854567ea4a1b04edaaf3b2a0f7db0ac67392a508d1b1d24598908cc4ae92aa7e5a5a860033565caea615f9a8bdd653a1d47d4196d97cacfa2c15ba98a3fa865e48e65a562d789fbd13fd218266592125d844e6c38b4a3cca678d93853bed120ebbe68b80c9ef8f3dbc3bf442619eaba47c7ba999eed93567853e1310cbe2b763765b600eb6b72f6dc5372146e502203d22d2c238235289e2dd7ce0bf7ce16689d1ccb2f4c840b765871b6faa21fd9c04e51985d418818774414352c852798f7e0237295aca7dd2d756f8c4c04c6356752cbccd9db3e0b37a8b756da9cbe7fc46fb2c18c1f53d79599797d1d791f59b95a235347e98768cb66d9b1a6ba6c7dc2c5a58a884d4b22b12ae533aa8ec238776347fe8ad2c4029fc382177cbf15aa66715bbeac4efd0008d9760533c7e6144b481102b2d136846672c4cbba8a407f550b15ab681c15f030f2aaf5ff0a412639db5512009dbfeb630fefa210dc0569fd7fc257e644a31c3e621c5997ae93b27a75f89a5d8326d9e8d2407e3e3461d2fcb065629e63e5f220a647aa38d1be0ac01a558c9c1179d6730822a1b367c2eb62c03b5ac0129dbe7debfed1b3ab35335f14f8be9a4b8ca97de29869252d63fdff1f0b240cb14b9f2ec414ca23465e4a5a7b450eaa9af433bfc274a6d142e7ff41b30dc750c09f155acf652ca5e950d7ee162987cef9d6633d1b7f60c1f7dc0bd603369d23386f708af5d54bb85cbf5ef40a7d85f49ac07e8090d93b09d153c6ff312869df0fb66a31adc88cacb2c33c40aff03b6a4f2034be894855ec193c9fdc9e0f445bd9c877c4ba382735d893fbfc3e2ba768373b9a9e9baea49408292c9e925ef33c5d7ae0d3ea7530623765966bbfa5602756dde11c19d8d0aaab995da05dd1ce4c1c972c8a8326c94876192e44bf493e09e01d264a2cfb3006a1b95e0351b81ab278790ed6b6938f700bfcc9bf9ca0d645e869f6156786846ef9e592a8dd2375e7670ef9a9822afdae8baaacd1103a65a0785be2bf263a71825c3bb3aa5cfa1bcfd8adcfc61995e928f999063e4bfec94bb68fa2a226d77d65c5fbbdc8f95e8490abdcafee8bef10309be02d466e89e106f78c746d5d465013648cb0a7fea3e8bd91e8beb7c1d9e52babf531d9e6f710bc7e260b48beb094905af6791d80364fdd5751ac650f8fc195fccbecc479f2778fef8c2a048c6f7a1e679dbbe32e5d16449d74e6f076d4be106beb6cbaf20b499e7938053af8ba29c17f81894ac448053fa2f88f1151daac17c95a3ef197efde6f462f84b7916b04bdd135e1bc66f0545724e7dcacf86f831afd04f09ce88ea05d19237cf78f587dc8ddebc4b77458c921a549d3aa4c87a6e43dfc28c53bf045ff5ddda6bbea5db7d979a9e7c9b91f9d85e842dfbf101b24f8bddb58b6855c25ffb1b764e572025d2efd049f122cfe9f1afa05a76f92b32261ec24d01a8b6b63975a323038b5495f1cc6b6fcacb8fb4a3ce267e800c528f33830da6b50c69896a2029dd32c4c7960cc82a0ca0d3dc490cb9b69eb24f264c4c340b5a3d27558d04f7ca7f3f8f46980b3003d9fad4d143fdd78686d6ab49863b40955513e18dd6ff9fe9a613c30df5c388bc190cc780290d6b0f22d2bf746bfdb4c4efe9d1ec23d7d8bb80cd0019a18531ecce6b67fe573bdde01630855d85fee8eaf9d9407993e30b298871497ba2b528f54eaac459db4c41c26c57dfa0b7c6d290b730d46c9c4f185e6cac50d006f64b2c7d201685401b0be2db2e476e96fe915df14523f1cf2469e1946b90c416d45ad32dd3f7655c8affc560463114f12633eb517b057a496cc92c1a52e11c7d81f1581cfbbc39ad7ac3df04bd75e6804b880302caf90f953d193dd11e3538353553b18f399134b80b62799ae75936b1e08365d7ffd761038a2cf2b7661b5e1d474f8bbbe8aa52673e1b2c087994d884cc7f11003962720a06235b3fc315397ff60b7babced68e018ea1e65223d91cf2bef21fec6d3fba266b8fb399a9c6795a2626d5dbafae25d769e6678c73b4f48b562fa3267b189da47846ff3bec7e3908d613f95f6c86f20b10984f90f797852feb97bf5e8e6d780eeef71dde96fc0a42c905021e4d7f42207f2ca49b8103f990994f517ca73af360471b9f08790ebc5974a381fe81b65e22a9027a7f8fccc08c2d2dd2c89aba1fd3829463eda48f410facf3c34be01c7f23d0ec1fb78a18637a2247906c93be774dbdce1d11e638dd3883997ce1e0942ee80509c53f9e8d5c4e254aaeca5022cf8d8a5758dd101baf35c75baf4005a2c3d9b13755bc8a4b9cc4919d4b8720d76a638c07435fd8c6f417ce9091cb9752ae5e9fd8b2124e008c1a2857f01f31bf73178d1c47100dffa6c5bb85aa3573ad84f7e4f0020356547a8bdbd99cc060747e06901f4106082ed1dac8e21059d0266af744a56898c683240e7c22ba4c09c1ad6cce993f30c07c4598aabb42863a53c8ad41f482c54c4aced9a3daafd3bafaac066fd2ced778815afcf0b1c3a6d12c94557b416a48c436fd90b26b2e5b0bb6216aaea423fd3d7872fb0ce7f8b7bd52eca98e54e80ac52a71505f33f903ec3f68c88f87196ec9fe8768757261a27324a5c75a0c5db86ae4b5493da698e90eec7e0f70c6ed59e05be88553390a117688db6037aa1a71459b29b5f0c358183524eef9cb9a0229c5ad82ee27b79e957547f0e03223bb2babf659e20c94d23b9ec1207b464394c0abacb8a053afa6d292ab6d2152aff9cae9877b820afcb6a1a1a7f0f94eea439bd568b7b3776043abbc2b6afd2e4aa2c309da5f1be10f0cd827cfbf9ab9ec6db4c320f39582b1fcb9603f082940b0af2d383303066c652f062a59b2ea44030cea696e600e71f457403b24d9ea89a57a1528d9b8cbe9eb98bfadda7ff79a81d7cbea20f2f004fe3f17acb787f22c9b2ffe61c5b13b29d8c3c394d46b8b23f270aa8245601f9b182ca6722c04ac5be62f65535ea26ae453a04573c67f2af6da2dedc3bc50ab72106a60f99832b1d5178d198cc304eb0ea89e8e45833a6b3120e2769c76f02aaee97a48e1723d51584cc913be2d6a49cd1c09f152d6df46ff1abc8dde351943d03cc25cf478dc77daf21826d55d3995ac76fc5d04c4bab45eb47bfb182a3807fe25199f644ccb4a1c6eb0c43ea952178f2b3ff4d3749835760807dd46256db81ccc8460e2737bf6c53670d28ff824699b4819eaf6a66a40c4d6d3f0162ac464e978e879de484629b38046122a7e2ea5fe7a5a6f511dd7db69028140f34015c00ec89bf8f6a81c7c29b00940b56bd23fa485cab1b159efee0a81ff303c2ac5d791afe17823e27859b249a4d3a90feb36d1156cc65f30595fef8ea7a81f9410beb0863d0e3111e755dba18b94ee19e194fe4614b49a4a8184b7df5e503a42ef2968ddc00587a04a9a531ff0525985e1e7f8a892be02240462641a54c573a9d7b7aac131614dda56113a97e1ce3ac5775b80824c87d829070563b244aa764c9d22f156c07dc67f10c7c68bd0e616c122463471925569d129514ea956e8954d57120cf6e26acb52d2862656c72e28d74d7c717bd36da1282a9d02f37ed663c34ccaf02441f1893869529cd557ea9bcd22f202283bc980aaf22758c767e4b0ed90c15f7b9ba7ad5ef852a4f7bed511eda4904480beeabab680d4e05940831e859cdfcb6f484198b971ae65d420ce2cead7edd30f2a6361f33c3d886fa4451aa26b07f08d52fd5b9295c5431294de6285862bfb583eb18807e92749b915b80a16817a697552fbb1fd9d63eb621fa6fdf034a33de9a2d2efdc790ef5da0608e7c663d0dce28419afeba9e426b956f43af6d7a867e428fbfe20cc10c45a79824bda77bec2b9902d6736fa9b8ef058307437f81c142fa4dac2017e0ab716e3facbe01d071510f050e0f0327f6bdc49b71729bd8198cf2ccbd126e8a5a201ab2910374f185eac08ad3d09f68efdf07a6b6c3c7400b28bd9c9fe9033976979b02a9d0f7fd825754d037d4866edf81c48834bbabfc4651913e8ef2b6bdfeabf31be7fc30ade1986f410a072c062b47386c2c5decf9944bcfaf264647b6465546e90237b1ef72acf295e6501bd8ec3ed52b0443597ad9ea6ef8b7e24c02f199a8d6e6577bd28dfffffe818e2fdedb2c6f4c6b4e8502b2e494e76bcd09f8df9eb487b3719d08b1fa06d5c71f5babb2e677f5a5e01aede4d73a37821c2941806fcbe19fdff17ecbf9757b25be782e07a608f15dcea936c0264cc3606ddedeb1bf8e951b800c5ac231ee538ced9c98c6dd9932f547465a48094626424250f7a69e9172fd4f1a31c3f62a0c9a90cf889c4773bb0ef9e6a5fd69ed6b719e0974c527d11268b9f994ede24c13554f2e41c682d913a5977ffc968b62a8fc271c8772905edf0b7fb383bf8ee4da3b4f6486890941f77622cddaef8d38c93ab4ffe5e547e7eec1386b9de1a3b315f80eb05ca7c077df298b1b2cfc690cb9ebc54e442825e4a9469137d005552c56622554a75f3776a8dd3bf992b5d2f9b44cb98a43417183a7c0cf4c8f741e35844086fac65a5cf90cae164afb852ce7b80bda2fc4c570ec59a8ee8aae5ac769390b7f83bd1045db699126537470ae7350be1d4d2bd3c5f363f1f7726b40f2e67c6441507c8a7d864db0d1fdb5682fd86e4b1813c24ff4aa08dad02354417d4443a9d0b856c098e3a90e739d80b640fc62ed12d5666e056ec6e3d0e646ca9e05321dabb57154b600320b6b0a938c96b8eaf78144459dee32952ff257ab8b2b08c5c923d6a0c3ccab820ab36ee1d0762a060d2b711f053a585c5e4fdefce174525f7f415397f03414c111bfb13161ed33ed909062d308678e14c78cb059121d5be0033edb89a729180bd62d82a2e7c65d6a724390b6525667609dba7bd78ee53baf2269f7745f55f039ed162a8ab2833be71e12f99be98ceb0f1d92c2f16c122432620a40cc650095f9e3fe40154483266c8fa7b557460007c2d21af7c1674b042e6a4ae11ee8c4e038e851b7fa505b3ad1d25a4d97cbbe961234de1d85f9f701e5d72fc541bf6c02f082ecf47333ecc84d5aa9babaf9b5b5352ffb06f337f99e6f19b5f0bede75621e8fb67bb6b783449ecfa9bac846b99983db95293d4235f068fd060180c512f3024eb7d48384fe111dd34886bae13a37be4a7aab1f2aa755f325122211b2c2c0fe4ada74bde66ae2041801181149d65527e2444cd8dedc327b4faf85561e3e8eac642fb0d597abc7062cd402488ed2dbda954bdeb89ab2612acef497a0d44bc309e6046bc4bc088cb0ab902b99d9466f2fbea2c2603c86caaf41ebfca1c2252ac5ffa551c693a76126aa9e6ed211778ac04d16e95ade7ff154bf2631dbfd553ebfe3b766f51b21d70f7a872853abafbbebfabdffac43f2f4beb06f9da8f1f0ad041b0869952844db8424535ae36d01a7a2bfe9ec462ec752f33a4f5e86d3d8faa549be3473094116db9e0d7b796c2d1c8fefbb1800dee24940f2654a11b4f527863239e85e0cc4bdfb3be841ff952e6b690eadb7ba158b908cf3ceea2daac65b941714c8af9ab3c72b40acf9d06fec2896162448110a116f34c4e452042f39590e7cd100c8d4c996a613eefc8580785da1ef2b34888e6377cf92ddf15ca61f264ebb5e47e0e38e102c76d89b75517a11caed62b18a5faecff39e2c1cd87017bf351fd13a2573872c3910a4077eda3992e5ac8c1627a1fe0c64a2a24fc24840f6d9a3e1a0463ece5f14648151f18e22c61c3afbb15989793d7c9a4c14774953c23644305c350618484ebc4caeee4a7c9cf0b4e28e56d4c92b201e84463f7cb8564a9dbc628ef1e2831afd54fae0f9385fbfd2595d039b00413033f669d6cf7e8f96f9f9016e703d7dcd371ab9491d76b07c51b76f201dd72f26d36a991f91b7c768326271f0ec6a1c95ba18e1c572df2f995b91e023c669756933c8c66377bc2b9667aefcb5a2b441f68ade5de2d444ff433a8017c340bb73e9427747f4161889d3de5474b0f0c0ecc6eb8cedecbb199434a30491aad0fccdaf10eea9e5c0d4a3d5d901dbb353744baaa887c138a17d7427e164bef09a900144119392f202fe7f11ed8dfae25d9932214a1eccb0b0b9d080879063c429dafbe3a4b46cb006a97a8d76a2031b7070e5832c19facf2d2b58e781d58b14fc6b09a41178838cbc671adff761c858cdcd0c9d9df230c9079ea073daa24f43fc43c4e0d6ecf8b38e70d6fe5ea76eb69a599d09c8a3337f176f746579b934362d94335280ad510a96e813810cce436c3ad32b1e36cbcc154f10c9a2254c2bb28bb66b8104b0ddf7e50e18e3afd31214e1b35c2a6d51429170c8b6607a49d6edf1e4cba83d09f27e154906e0abbcae53d3aaad1057b14f19b8384b3404a891b7890c64313fe5315af252920e5241b1f8e33022571e96a84ee35b299ae9ff86d706ec63f04eefd5d76d6d20cb129f21d8caf7edb072b7f742dcf1917e5b68b665b232f811fdacf736033928168e580af9d2b7de7873d2296c5e733209b839cffe0bd6f78001e04bc751f98ed14c4bd4a60c1017483fe3924a0c6e22349da7af3fdd7751175c914c6ecb63289891f48732b33df5aaf280162690abac69073ca07c40c69d4d3d7bb71a4e4d1c8a89adec7530b6413f7a4136e1e9a02acab6bd66e964dc09b7732822f2479751c6f4d62394b5a736b6cfe478d6d3e30993815b6f9788146552fa7013c98084b61aa49ba6c1117e9491237ffa9084132f7caefd1f9d2ed783bf092493c581ed37ccd1f73a5d91739640396045776b5fc3a3e59629ef8ec16d4ee801a81c6e2a8d62630331b2040329909407a88c616f1ceff347e1cb71684b26d7d0f1f79a08334d8500cee5a79030b8117dde6afe452c3b4e37afc5724a5fcd9432d11206cfd7a39f97f0c8de084f58c72e90c68d26c732ab17b1e784458c61fa01df2310d6d6bfe66cb69e2ac2f9098825f03ab4d8526fb94a202e3c31b514f412f88462d852ae8e9de375b781110406fbf88a1e7ee33f88823f8baf9f6b55dbda5fb4b669c880d584a65eb0f194b93538ee0509b5f74109b754360682f2cb38145d6d6506c6c407232e83ca1a7decd3eb72a381d4ec2ce5ce63ccaa37193273985dc2e55cea33e85eac461bf96e1fb814caed31a5edf28f1c257cc03337c6812a94cf14c05309e46568623030d072dfe3c0e6106246b2b874ac98c58390871346618cdea2ad0df1cc8f72ede8ad9bc6a15ed159df34f89eacaac367c6f2e3afeeb41634d4e0dc89d95bbef8d0d2fe9dedbe7f9fc66d28c47c7348bb305c9ff51b09b91c9eafc43ef700bba475e6aab49cf61a1b7e1ae281a21a151169eb3810a3ff9988e7475a2063b4de9f9a358c119fe2b1df6f041016f3504d7dcd038d45c663d1b9d74693b2b1cd2c715ce6a13b85ec1b7c88fc231eaa56a7cfb10fcb298891e7b6f914a198d68c9b5afee2f6b67307276cfca12aada1d9a2d426bf2c3e3448fde50c438480cc1d18d932cd704888edaa176f0391c5e1a03ead3c02c87deec919d34504e4526cacb2c18baa26ba941fc01dd4da55a3ee69b62e2c6c15908aae2bb3fd58a47a9e19d670961bd17e0d143e5e1f160e8d780e738064ed2a718bb5ba8c9e777794a270964acf74d0b01813d3b78ef813a9874fce5f689e21e28f82cb7ee4fed6ba7f87058463881d366a60f02ba18253e8cdec26cb0886c0070891e2367706cf70fb4f4341647e868b57709c1ea1da77c1ddce481371b12b6691a19fb7f4eb6ae5b3dbb3c4faaf2dbc7f676085599837fac7b8aecef0be8c2af278429912c2005d1d065d69f688116ca81e68fb87d067f14b0cec82d4d5932d43a32cd5d9fff398cb906d1d4443f79d7cbb7bba2cd434a77b5b0af2f0c2617c3382f7e7761c0b449398cd1db28ca6a1e4ae1db25dca7f0f68d4c932c478042ff1da63f3fbdf61b4ccadd7d980f310e76e45f2f28f1555ac938eaae4b8f04d1297fd2f5edd9c7cd1b80994565c87de9381d42b32183c0e7bcc15ded4867fd9807f5677f4ea3fb8adead4ee3223ef25c1f19aec2d90e6a39b86fca43d194555be188deffdea2924087e23c3d3705f563477cdc68e1467888b7a268e456c78f0b072f774a5c4cbaf1eb5c47bcefe8290480cef0da8f6a8942158f2216c16409293e00b516710aaf0e17e5407269e0c198dd1f937028e2c2102f2acd0af1bc7f51175d6a585c3571894d7b238e69dc48d5038bab612886c10852eff3cff76e832e7b903d998c27a646bdda134927a05210bbcdfbf7253ee9a4105bb0b39e46459534c20970919d3252009052605c8a54b0415e49462cd591c3c2b8df1eaa21e12c9c819a3dfb2af20f1991b50d1c7f6847c5759ccc956e50ff6c3f82ba619fbef2717d03de8f089c27e2e149b1a37aa0afcdb5bba9f8e51dc304c278223221526407a2137954bdba50d1a438b52b5f08c7ea444adee8f8090520ddb1ba00abc53dabccf64e115aeb53d349aa4f50107256f2f3b0b7032a3f6cfeafcb3f8da593bdcec72105805feb094c90af8735d6f855e2f17548e75300dae6cffe1bf1e08ef6ea1a9b96b6acb1db0e770a271b4fc99e509d2c910e781f8e7111ca2cf0b29565b217ff02b9478e1de3b40ec5870f77b7a7cba834d0bfdbd602cd8d505d4ae29bce6c45fcec1dddd855ab564467814bf3e1b5198ef0ed2ed6e97f605bd513b3e02e4e79359452ca40143606ecde864a3f6e016fcc2672ac965544936221febb4df0bb5b857e54f0603e9d996603eeee911b87a2e631370a8e0b5540a4fd396434210b5bea950c9ae00c1bb25f9b519190fa7cc199ba03e0b65e31fbbe3ad8c3e39dfe1e68b32aebaac6af2f804718b4b3af1faf954d57d2c10025965f80c7a2ecd15bc8d59dbef26aba46a0e6398009a4d84cd5a69ab85464261faa9cb4ffcd3e583465f89c575abc194b9d6857a9b9e12f38a6246a3813fc20ca5ac8b1d697269789b2d4a2fb3d908d87971ec4042ec10417ac231e82c3a17eb72e638cd13c2620b85cd85f7dd7bb8955a191f3c2c847063591d7cb4734db3fe426bf86ad6ff8f19c8c6faa193cf8bf9d04e5fc4902eb9e9edda70722a445e468060f0d6638a086b1eb67fb5dbbb2096fb80c80afeb533106878e41097d76286dc48b6d6034306ba2869376e1a4e5feab288a26bc6f6a9de1f55f7fdbe2f542aa03fee3ee6d28ff538b74e6d8065bba3a5ca1465a75670576a3c47b44f6eb8f817f1a5c105c3b70245dad81091c0a52035c5fe4e9f809fa37177cdc289a36146005dfdf6336af417b7c103838482048bb3f4c074287f8bb649d1b546eafd2dcc9efb65346ccef814969ac17fa206486d533cf6dbd036a0f928c09f669cc1a8dae6dc25e89a91843707387e4d862f79a9b9070098978432bf32793ac5b14bdd62e9e2be98c25a4b0c3cb0c94fce13916c0ad273cb0460fba879f10a61a806761210ac219ef56ec6338ffcb6f1dd9a959b424ad2a39935e76a9190a62f5f5f3728a2755a37e9d047878edeb59932039dddc9c69dea3e98ab326dea862579d812fc1011881b1d8cb0163602cdc431b497224788faa1e1255d605ff8e3d9e26bc5c98e799cc1b8ad557cf42856e5bddde7a614e8ad6de435b62b611911748aaab7ef811f596c5d8272c48ea4a338e2acdd38bf9e1cd7d06d6f401d0f4fe327f73dcb69f510aa93ab940b537f5c70a60f7d28d0a26e8c0720d1b610bf2335fbdb90824c1058d482511b0824df613c0df9538b3d686f2c28ffbed83de2606ee665db53751e52a7bb5ef92c3f80b31a9f463720219fcb94c277f2dbecd9447469be733ab3c9f31060f4a1b705c9549b21d742a1d98d14dd8ee4f68897f60666a1b1abc54642121bb9075bd192b47dcb82b547fc4f864cb7077e8172bf33c457e848871ec0737bb589c00109dcf6c3c7c75102598ac6f3136f16efd73b6e5ed8c82d64c335cbb1751d7977143c499699a9b9b0a0c76d3edc1e1731e030d21d0d4674208235120090c97f52a24bd7e5d4445394b09a118c3fc6224634c41fd26a6c4913f3ab12f74c0902f4224787d7d070a64cfb6e220249ef6ed2080c8537e31541439a38492a16c2b673447af926c9e76268c895c8d3bebef2beca54ed3af321a9296c17261f8da6c476ca346b8a47229d970a4de7b9c192da671b5ecebe3086a22f779b8b305b90af15c7cd64e97a34111e79ff8182ac5bcdffa6e5af6ba981f1a1cf6e8c704050bbd50954e40e17c83a8fc5540c2cb4fb33e700b6c2b1fa578d2558e775a396c75fb74808e36e9b83fbf9fba3d5a23ffef2e697d43d4f0b2222a46369f6fba3c162c132d46dbfea508e2501a8f9b34c8eb97f29d8ea9af7ccd55439fc0532e9d852530d1a20b8493d73a5f9d5e16000d44935fd176da26e26b5d295d04566cd33aa92665c53e3c7a3191572b6a20f887df174ac8226c49aaab734a0de55957d411edb8b2570f488e1de4e74b6ebb01a651b4f160cca5cacb3c69a755cb9e4783241e6ad5c26948374fdfc9e82ca99834cf7f3a1a62a6bdbece0901381733307bf48ed6125c6b37ec0adf77b793db918c1857e10edf3230a36a64bfff76b8c489b7b9d33e1be93c3c216cd9b202ccc822e643344e64e603c5971066ea75ec633db107a105409b2ce16a84e748b423fb78638bd2dbcbee6740998062f70789af8bfc04b7ca11b95e5d4c77065865b1aa58a3ea15b02ffa27c77d10dd141b6991815333903d3a9b39ac9d5f75f59749913924979fa4130b079aa9e4cb191e73075bbfc1ab4de18b16bcdf33bcf609c056a1aff8d2c9497abd56fd8faffbdad8bb97908b5cf71726c805da54f6f17d6696d4cd1c7b2466354adcb1820a80fa635e754490106076e8152cdb384f262491b00d61d7b85e9b91a141691f09a314e7cddfde34b9d8cfd1bf42c30753b9c1de0d6106ebdc7b67d4f4053d01a6",
        Fh = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
    ! function(t) {
        function i(t, i) {
            for (var n = "", e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
            var s = Math.floor(n.length / 5),
                h = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
                r = Math.round(i.length / 2),
                a = Math.pow(2, 31) - 1,
                o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), n += o; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
            n = (h * n + r) % a;
            for (var f = "", c = "", e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)), c += String.fromCharCode(f), n = (h * n + r) % a;
            return c }
        t = i(t, "QUNEE"), Fh = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93)) }($h);
    var Gh = Fh[0] + Fh[1] + Fh[2],
        zh = Fh[3],
        qh = Fh[4] + Fh[1] + Fh[2],
        Yh = Fh[5],
        Hh = Fh[6],
        Uh = Fh[7],
        Wh = Fh[8],
        Vh = Fh[9],
        Xh = Fh[10],
        Kh = Fh[11],
        Zh = Fh[12],
        Jh = Fh[13],
        Qh = Fh[14] + Fh[15] + Fh[16],
        tr = Fh[17],
        ir = Fh[18],
        nr = Fh[19],
        er = Fh[20],
        sr = Fh[21],
        hr = Fh[22] + Fh[23],
        rr = Fh[24],
        ar = Fh[22],
        or = Fh[25] + Fh[26] + Fh[27],
        fr = Fh[28],
        cr = Fh[29] + Fh[30] + Fh[31],
        ur = Fh[32] + Fh[30] + Fh[31],
        _r = Fh[33],
        dr = Fh[34] + Fh[35] + Fh[36],
        lr = Fh[37],
        vr = Fh[38] + Fh[15] + Fh[39],
        br = Fh[40],
        yr = Fh[41] + Fh[42] + Fh[43] + Fh[44] + Fh[45],
        gr = Fh[21] + Fh[46] + Fh[47],
        mr = Fh[0] + Fh[42] + Fh[48],
        xr = Fh[49],
        Er = Fh[50],
        pr = Fh[51],
        wr = Fh[52],
        Tr = Fh[53] + Fh[42] + Fh[54],
        kr = Fh[55] + Fh[56] + Fh[57],
        Mr = Fh[58],
        Or = Fh[59] + Fh[26] + Fh[60],
        Ir = Fh[61] + Fh[62] + Fh[63],
        Sr = Fh[64],
        jr = Fh[65],
        Ar = Fh[66] + Fh[67],
        Cr = Fh[68],
        Lr = Fh[69] + Fh[44] + Fh[70],
        Pr = Fh[71],
        Rr = Fh[72],
        Dr = Fh[73],
        Nr = Fh[74],
        Br = Fh[23],
        $r = Fh[25] + Fh[26] + Fh[75],
        Fr = Fh[76],
        Gr = Fh[77],
        zr = Fh[78],
        qr = Fh[79] + Fh[80],
        Yr = Fh[23] + Fh[81] + Fh[82] + Fh[83],
        Hr = Fh[23] + Fh[84],
        Ur = Fh[85],
        Wr = Fh[86],
        Vr = Fh[87] + Fh[88] + Fh[89],
        Xr = Fh[90] + Fh[26] + Fh[91],
        Kr = Fh[92] + Fh[26] + Fh[91],
        Zr = Fh[93],
        Jr = Fh[94] + Fh[95],
        Qr = Fh[69] + Fh[96] + Fh[97] + Fh[1] + Fh[98],
        ta = Fh[95],
        ia = Fh[69] + Fh[46] + Fh[99] + Fh[1] + Fh[98],
        na = Fh[95] + Fh[94] + Fh[95],
        ea = Fh[100],
        sa = Fh[101],
        ha = Fh[102],
        ra = Fh[103] + Fh[104] + Fh[105],
        aa = Fh[106],
        oa = Fh[107],
        fa = Fh[108] + Fh[104] + Fh[105],
        ca = Fh[109] + Fh[110] + Fh[111],
        ua = Fh[112] + Fh[113],
        _a = Fh[112] + Fh[114],
        da = Fh[115] + Fh[116] + Fh[117],
        la = Fh[115] + Fh[118] + Fh[117],
        va = Fh[115] + Fh[114],
        ba = Fh[23] + Fh[119],
        ya = Fh[23] + Fh[120] + Fh[26] + Fh[121],
        ga = Fh[23] + Fh[122],
        ma = Fh[123] + Fh[124] + Fh[125],
        xa = Fh[126] + Fh[124] + Fh[125],
        Ea = Fh[127] + Fh[128],
        pa = Fh[129],
        wa = Fh[130] + Fh[128] + Fh[49] + Fh[131] + Fh[49] + Fh[132] + Fh[76],
        Ta = Fh[127] + Fh[110] + Fh[133],
        ka = Fh[130] + Fh[134] + Fh[49] + Fh[131] + Fh[49] + Fh[132] + Fh[76],
        Ma = Fh[135],
        Oa = Fh[136],
        Ia = Fh[137] + Fh[138] + Fh[139],
        Sa = Fh[140],
        ja = Fh[141],
        Aa = Fh[142],
        Ca = Fh[143] + Fh[88] + Fh[144],
        La = Fh[145],
        Pa = Fh[130] + Fh[146] + Fh[49] + Fh[132],
        Ra = Fh[147],
        Da = Fh[148],
        Na = Fh[149],
        Ba = Fh[150],
        $a = Fh[108] + Fh[26] + Fh[151],
        Fa = Fh[152],
        Ga = Fh[153] + Fh[62] + Fh[154] + Fh[88] + Fh[155] + Fh[26] + Fh[156] + Fh[104] + Fh[157],
        za = Fh[158] + Fh[62] + Fh[154] + Fh[88] + Fh[155] + Fh[26] + Fh[156] + Fh[104] + Fh[157],
        qa = Fh[159] + Fh[62] + Fh[154] + Fh[88] + Fh[155] + Fh[26] + Fh[156] + Fh[104] + Fh[157],
        Ya = Fh[24] + Fh[30] + Fh[160],
        Ha = Fh[161],
        Ua = Fh[0] + Fh[1] + Fh[162],
        Wa = Fh[80] + Fh[163],
        Va = Fh[164],
        Xa = Fh[165] + Fh[88] + Fh[166],
        Ka = Fh[152] + Fh[49],
        Za = Fh[167],
        Ja = Fh[168],
        Qa = Fh[169],
        to = Fh[170] + Fh[23] + Fh[171],
        io = Fh[172],
        no = Fh[173] + Fh[42] + Fh[174],
        eo = Fh[173] + Fh[62] + Fh[175],
        so = Fh[176],
        ho = Fh[177],
        ro = Fh[178] + Fh[110] + Fh[133],
        ao = Fh[179],
        oo = Fh[180] + Fh[23] + Fh[181],
        fo = Fh[182],
        co = Fh[183] + Fh[110] + Fh[133],
        uo = Fh[0] + Fh[184] + Fh[185] + Fh[56] + Fh[186],
        _o = Fh[187],
        lo = Fh[23] + Fh[188] + Fh[104],
        vo = Fh[23] + Fh[189] + Fh[26] + Fh[151],
        bo = Fh[23] + Fh[190] + Fh[1] + Fh[191],
        yo = Fh[192],
        go = Fh[193],
        mo = Fh[165] + Fh[110] + Fh[194],
        xo = Fh[53] + Fh[26] + Fh[151] + Fh[184] + Fh[81] + Fh[88] + Fh[195],
        Eo = Fh[196],
        po = Fh[178],
        wo = Fh[197] + Fh[198] + Fh[199],
        To = Fh[53] + Fh[26] + Fh[151] + Fh[184] + Fh[81] + Fh[26] + Fh[200],
        ko = Fh[201] + Fh[26] + Fh[151],
        Mo = Fh[202],
        Oo = Fh[23] + Fh[203] + Fh[80] + Fh[204],
        Io = Fh[23] + Fh[205],
        So = Fh[23] + Fh[203] + Fh[206] + Fh[204],
        jo = Fh[23] + Fh[81] + Fh[207],
        Ao = Fh[23] + Fh[81] + Fh[208],
        Co = Fh[28] + Fh[209] + Fh[26] + Fh[151],
        Lo = Fh[23] + Fh[203] + Fh[206] + Fh[210],
        Po = Fh[23] + Fh[203] + Fh[80] + Fh[210],
        Ro = Fh[211],
        Do = Fh[201] + Fh[184] + Fh[212] + Fh[15] + Fh[16],
        No = Fh[213],
        Bo = Fh[23] + Fh[81] + Fh[214],
        $o = Fh[215] + Fh[23] + Fh[216],
        Fo = Fh[215] + Fh[23] + Fh[181],
        Go = Fh[0] + Fh[62] + Fh[217],
        zo = Fh[169] + Fh[218] + Fh[219],
        qo = Fh[220] + Fh[76] + Fh[221],
        Yo = Fh[222],
        Ho = Fh[223],
        Uo = Fh[224],
        Wo = Fh[225],
        Vo = Fh[226],
        Xo = Fh[224] + Fh[49] + Fh[227] + Fh[49] + Fh[132] + Fh[228],
        Ko = Fh[229],
        Zo = Fh[230] + Fh[110] + Fh[231],
        Jo = Fh[232],
        Qo = Fh[67],
        tf = Fh[233] + Fh[23] + Fh[234],
        nf = Fh[233] + Fh[23] + Fh[234] + Fh[23] + Fh[235],
        ef = Fh[233] + Fh[23] + Fh[234] + Fh[23] + Fh[236],
        sf = Fh[233] + Fh[23] + Fh[234] + Fh[23] + Fh[237] + Fh[23] + Fh[238],
        hf = Fh[233] + Fh[23] + Fh[234] + Fh[23] + Fh[239] + Fh[23] + Fh[238],
        rf = Fh[233] + Fh[23] + Fh[234] + Fh[23] + Fh[240],
        af = Fh[233] + Fh[23] + Fh[234] + Fh[23] + Fh[241],
        of = Fh[242] + Fh[49] + Fh[132] + Fh[243],
        ff = Fh[244],
        cf = Fh[245] + Fh[184] + Fh[185] + Fh[56] + Fh[186],
        uf = Fh[246],
        _f = Fh[247],
        df = Fh[150] + Fh[104] + Fh[248],
        lf = Fh[23] + Fh[249] + Fh[250],
        vf = Fh[251] + Fh[26] + Fh[200],
        bf = Fh[23] + Fh[252],
        yf = Fh[28] + Fh[253] + Fh[62] + Fh[210] + Fh[42] + Fh[254] + Fh[26] + Fh[151],
        gf = Fh[23] + Fh[81] + Fh[255],
        mf = Fh[28] + Fh[202],
        xf = Fh[28] + Fh[256] + Fh[114],
        Ef = Fh[257] + Fh[258] + Fh[104] + Fh[259],
        pf = Fh[28] + Fh[260],
        wf = Fh[28] + Fh[256] + Fh[113],
        Tf = Fh[28] + Fh[261] + Fh[88] + Fh[166],
        kf = Fh[165] + Fh[62] + Fh[210] + Fh[104] + Fh[248],
        Mf = Fh[28] + Fh[222],
        Of = Fh[262],
        If = Fh[28] + Fh[263],
        Sf = Fh[264] + Fh[26] + Fh[265],
        jf = Fh[28] + Fh[266] + Fh[198] + Fh[199],
        Af = Fh[28] + Fh[261] + Fh[42] + Fh[254] + Fh[26] + Fh[151],
        Cf = Fh[23] + Fh[81] + Fh[267] + Fh[268] + Fh[269] + Fh[270] + Fh[184] + Fh[271] + Fh[44] + Fh[272],
        Lf = Fh[23] + Fh[81] + Fh[267] + Fh[268] + Fh[269] + Fh[270],
        Pf = Fh[273] + Fh[269] + Fh[270],
        Rf = Fh[23] + Fh[274] + Fh[88] + Fh[275],
        Df = Fh[28] + Fh[263] + Fh[104] + Fh[276],
        Nf = Fh[23] + Fh[266] + Fh[113],
        Bf = Fh[28] + Fh[266] + Fh[113],
        $f = Fh[23] + Fh[266] + Fh[114],
        Ff = Fh[28] + Fh[266] + Fh[114],
        Gf = Fh[277] + Fh[26] + Fh[151],
        zf = Fh[137] + Fh[278] + Fh[26] + Fh[265],
        qf = Fh[0] + Fh[104] + Fh[248],
        Yf = Fh[279],
        Hf = Fh[253] + Fh[62] + Fh[210] + Fh[26] + Fh[200],
        Uf = Fh[28] + Fh[232],
        Wf = Fh[53] + Fh[30] + Fh[280],
        Vf = Fh[23] + Fh[258] + Fh[104] + Fh[259],
        Xf = Fh[28] + Fh[261] + Fh[104] + Fh[259],
        Kf = Fh[197] + Fh[56] + Fh[281],
        Zf = Fh[165] + Fh[46] + Fh[282] + Fh[56] + Fh[281],
        Jf = Fh[158] + Fh[56] + Fh[281],
        Qf = Fh[153] + Fh[46] + Fh[282] + Fh[56] + Fh[281],
        tc = Fh[158] + Fh[56] + Fh[281] + Fh[15] + Fh[117],
        ic = Fh[153] + Fh[46] + Fh[282] + Fh[56] + Fh[281] + Fh[15] + Fh[117],
        nc = Fh[197] + Fh[56] + Fh[281] + Fh[15] + Fh[117],
        ec = Fh[283] + Fh[269] + Fh[284],
        sc = Fh[283] + Fh[184] + Fh[212],
        hc = Fh[285] + Fh[110] + Fh[286],
        rc = Fh[287] + Fh[218] + Fh[288],
        ac = Fh[289] + Fh[26] + Fh[83],
        oc = Fh[290],
        fc = Fh[223] + Fh[26] + Fh[83],
        cc = Fh[291] + Fh[218] + Fh[286] + Fh[110] + Fh[292],
        uc = Fh[293],
        _c = Fh[294],
        dc = Fh[295],
        lc = Fh[296],
        vc = Fh[297] + Fh[1] + Fh[219] + Fh[42] + Fh[298],
        bc = Fh[297] + Fh[42] + Fh[298],
        yc = Fh[299],
        gc = Fh[87] + Fh[1] + Fh[300] + Fh[1] + Fh[219],
        mc = Fh[301] + Fh[96],
        xc = Fh[302],
        Ec = Fh[303],
        pc = Fh[304],
        wc = Fh[305],
        Tc = Fh[298],
        kc = Fh[306],
        Mc = Fh[307] + Fh[76] + Fh[307] + Fh[76] + Fh[206],
        Oc = Fh[80],
        Ic = Fh[308],
        Sc = Fh[23] + Fh[81] + Fh[267] + Fh[98] + Fh[1] + Fh[309],
        jc = Fh[310],
        Ac = Fh[311],
        Cc = Fh[312] + Fh[1] + Fh[313],
        Lc = Fh[21] + Fh[314] + Fh[315],
        Pc = Fh[316],
        Rc = Fh[317] + Fh[30] + Fh[318],
        Dc = Fh[319],
        Nc = Fh[69] + Fh[42] + Fh[320],
        Bc = Fh[23] + Fh[321] + Fh[314] + Fh[322],
        $c = Fh[87] + Fh[42] + Fh[320],
        Fc = Fh[53] + Fh[184] + Fh[323],
        Gc = Fh[87],
        zc = Fh[53] + Fh[56] + Fh[324] + Fh[15] + Fh[16],
        qc = Fh[4] + Fh[44] + Fh[325],
        Yc = Fh[326],
        Hc = Fh[6] + Fh[1] + Fh[327],
        Uc = Fh[328],
        Wc = Fh[165] + Fh[184] + Fh[212],
        Vc = Fh[23] + Fh[81] + Fh[329],
        Xc = Fh[28] + Fh[87],
        Kc = Fh[330] + Fh[110] + Fh[159],
        Zc = Fh[331] + Fh[110] + Fh[159],
        Jc = Fh[197] + Fh[110] + Fh[159],
        Qc = Fh[332] + Fh[110] + Fh[159],
        tu = Fh[333] + Fh[23] + Fh[334],
        iu = Fh[333] + Fh[23] + Fh[335],
        nu = Fh[336],
        eu = Fh[333] + Fh[23] + Fh[337],
        su = Fh[333] + Fh[23] + Fh[338],
        hu = Fh[333] + Fh[23] + Fh[339],
        ru = Fh[333] + Fh[23] + Fh[340],
        au = Fh[333] + Fh[23] + Fh[341],
        ou = Fh[333] + Fh[23] + Fh[342],
        fu = Fh[333] + Fh[23] + Fh[343],
        cu = Fh[333] + Fh[23] + Fh[344],
        uu = Fh[333] + Fh[23] + Fh[345],
        _u = Fh[333] + Fh[23] + Fh[346],
        du = Fh[333] + Fh[23] + Fh[347] + Fh[23] + Fh[348],
        lu = Fh[333] + Fh[23] + Fh[347] + Fh[23] + Fh[80],
        vu = Fh[333] + Fh[23] + Fh[347] + Fh[23] + Fh[308],
        bu = Fh[333] + Fh[23] + Fh[347] + Fh[23] + Fh[349],
        yu = Fh[333] + Fh[23] + Fh[347] + Fh[23] + Fh[350],
        gu = Fh[333] + Fh[23] + Fh[347] + Fh[23] + Fh[82],
        mu = Fh[333] + Fh[23] + Fh[347] + Fh[23] + Fh[351],
        xu = Fh[333] + Fh[23] + Fh[347] + Fh[23] + Fh[352],
        Eu = Fh[353] + Fh[46] + Fh[354],
        pu = Fh[317] + Fh[30] + Fh[318] + Fh[1] + Fh[313],
        wu = Fh[355],
        Tu = Fh[23] + Fh[81] + Fh[350] + Fh[356],
        ku = Fh[225] + Fh[44] + Fh[357],
        Mu = Fh[28] + Fh[261],
        Ou = Fh[358],
        Iu = Fh[359] + Fh[26] + Fh[27],
        Su = Fh[360],
        ju = Fh[361] + Fh[23] + Fh[362] + Fh[23] + Fh[363],
        Au = Fh[361] + Fh[23] + Fh[362] + Fh[23] + Fh[364],
        Cu = Fh[0] + Fh[88] + Fh[365],
        Lu = Fh[366] + Fh[23] + Fh[367],
        Pu = Fh[366] + Fh[23] + Fh[368] + Fh[23] + Fh[369],
        Ru = Fh[366] + Fh[23] + Fh[368] + Fh[23] + Fh[370],
        Du = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[371] + Fh[23] + Fh[372],
        Nu = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[373] + Fh[23] + Fh[372],
        Bu = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[372] + Fh[23] + Fh[374],
        $u = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[367] + Fh[23] + Fh[375],
        Fu = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[371] + Fh[23] + Fh[374],
        Gu = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[367] + Fh[23] + Fh[376],
        zu = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[367] + Fh[23] + Fh[377],
        qu = Fh[366] + Fh[23] + Fh[368] + Fh[23] + Fh[378] + Fh[23] + Fh[369],
        Yu = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[374] + Fh[23] + Fh[372],
        Hu = Fh[379] + Fh[23] + Fh[380],
        Uu = Fh[381] + Fh[23] + Fh[380],
        Wu = Fh[366] + Fh[23] + Fh[382],
        Vu = Fh[366] + Fh[23] + Fh[382] + Fh[23] + Fh[383],
        Xu = Fh[366] + Fh[23] + Fh[382] + Fh[23] + Fh[384],
        Ku = Fh[366] + Fh[23] + Fh[385] + Fh[23] + Fh[386],
        Zu = Fh[277],
        Ju = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[373],
        Qu = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[373] + Fh[23] + Fh[374],
        t_ = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[371],
        i_ = Fh[347] + Fh[23] + Fh[171],
        n_ = Fh[0] + Fh[88] + Fh[275],
        e_ = Fh[69] + Fh[56] + Fh[387],
        s_ = Fh[224] + Fh[46] + Fh[388] + Fh[30] + Fh[389],
        h_ = Fh[224] + Fh[30] + Fh[389],
        r_ = Fh[390],
        a_ = Fh[0] + Fh[391],
        o_ = Fh[392] + Fh[62] + Fh[217],
        f_ = Fh[366] + Fh[23] + Fh[393] + Fh[23] + Fh[394],
        c_ = Fh[366] + Fh[23] + Fh[395] + Fh[23] + Fh[394],
        u_ = Fh[4] + Fh[26] + Fh[200] + Fh[88] + Fh[396],
        __ = Fh[397],
        d_ = Fh[398],
        l_ = Fh[399] + Fh[110] + Fh[400],
        v_ = Fh[355] + Fh[110] + Fh[292],
        b_ = Fh[28] + Fh[401] + Fh[30] + Fh[402],
        y_ = Fh[366] + Fh[23] + Fh[403] + Fh[23] + Fh[404],
        g_ = Fh[405] + Fh[113],
        m_ = Fh[405] + Fh[114],
        x_ = Fh[406],
        E_ = Fh[407] + Fh[88] + Fh[408] + Fh[314] + Fh[409],
        p_ = Fh[410],
        w_ = Fh[411] + Fh[95] + Fh[269] + Fh[412] + Fh[95] + Fh[314] + Fh[413] + Fh[95] + Fh[62] + Fh[414],
        T_ = Fh[415],
        k_ = Fh[416],
        M_ = Fh[417],
        O_ = Fh[202] + Fh[67] + Fh[418] + Fh[419] + Fh[71],
        I_ = Fh[411] + Fh[95] + Fh[269] + Fh[412] + Fh[95] + Fh[314] + Fh[413],
        S_ = Fh[23] + Fh[420] + Fh[26] + Fh[421],
        j_ = Fh[66] + Fh[67] + Fh[307] + Fh[422] + Fh[307] + Fh[422] + Fh[307] + Fh[422] + Fh[307] + Fh[71],
        A_ = Fh[423],
        C_ = Fh[424],
        L_ = Fh[425],
        P_ = Fh[23] + Fh[289],
        R_ = Fh[426] + Fh[427],
        D_ = Fh[428] + Fh[23] + Fh[215] + Fh[23] + Fh[376],
        N_ = Fh[289],
        B_ = Fh[23] + Fh[223],
        $_ = Fh[428] + Fh[23] + Fh[215] + Fh[23] + Fh[375],
        F_ = Fh[307] + Fh[152],
        G_ = Fh[72] + Fh[429],
        z_ = Fh[430] + Fh[1] + Fh[431],
        q_ = Fh[72] + Fh[432],
        Y_ = Fh[69] + Fh[56] + Fh[186] + Fh[433],
        H_ = Fh[224] + Fh[184] + Fh[185],
        U_ = Fh[434],
        W_ = Fh[435],
        V_ = Fh[436] + Fh[218] + Fh[437],
        X_ = Fh[390] + Fh[218] + Fh[437],
        K_ = Fh[53] + Fh[35] + Fh[438],
        Z_ = Fh[53] + Fh[88] + Fh[439],
        J_ = Fh[227] + Fh[440] + Fh[441],
        Q_ = Fh[289] + Fh[1] + Fh[309],
        td = Fh[34] + Fh[1] + Fh[442],
        id = Fh[34],
        nd = Fh[256] + Fh[198] + Fh[199],
        ed = Fh[256] + Fh[443] + Fh[444],
        sd = Fh[172] + Fh[88] + Fh[166],
        hd = Fh[436] + Fh[30] + Fh[445],
        rd = Fh[436] + Fh[88] + Fh[446],
        ad = Fh[447],
        od = Fh[24] + Fh[104] + Fh[448],
        fd = Fh[173],
        cd = Fh[449],
        ud = Fh[450],
        _d = Fh[451] + Fh[113],
        dd = Fh[451] + Fh[110] + Fh[159],
        ld = Fh[119] + Fh[88] + Fh[166],
        vd = Fh[23] + Fh[202] + Fh[443] + Fh[452] + Fh[46] + Fh[453],
        bd = Fh[454] + Fh[95] + Fh[455],
        yd = Fh[456] + Fh[30] + Fh[160],
        gd = Fh[104] + Fh[248],
        md = Fh[112] + Fh[443] + Fh[444],
        xd = Fh[457],
        Ed = Fh[458],
        pd = Fh[459],
        wd = Fh[53] + Fh[46] + Fh[460],
        Td = Fh[312] + Fh[30] + Fh[389] + Fh[184] + Fh[461],
        kd = Fh[317] + Fh[30] + Fh[318] + Fh[15] + Fh[462] + Fh[30] + Fh[389],
        Md = Fh[23] + Fh[463],
        Od = Fh[464],
        Id = Fh[465] + Fh[42] + Fh[320],
        Sd = Fh[153] + Fh[104] + Fh[466] + Fh[42] + Fh[43] + Fh[44] + Fh[45],
        jd = Fh[158] + Fh[104] + Fh[466] + Fh[42] + Fh[43] + Fh[44] + Fh[45],
        Ad = Fh[94] + Fh[104] + Fh[466] + Fh[42] + Fh[43] + Fh[44] + Fh[45],
        Cd = Fh[165] + Fh[110] + Fh[467],
        Ld = Fh[158] + Fh[1] + Fh[468] + Fh[42] + Fh[43] + Fh[44] + Fh[45],
        Pd = Fh[159] + Fh[1] + Fh[468] + Fh[42] + Fh[43] + Fh[44] + Fh[45],
        Rd = Fh[94] + Fh[1] + Fh[468] + Fh[42] + Fh[43] + Fh[44] + Fh[45],
        Dd = Fh[72] + Fh[469],
        Nd = Fh[23] + Fh[172] + Fh[88] + Fh[365],
        Bd = Fh[470],
        $d = Fh[23] + Fh[172] + Fh[88] + Fh[166],
        Fd = Fh[23] + Fh[172] + Fh[44] + Fh[471],
        Gd = Fh[23] + Fh[172] + Fh[1] + Fh[472],
        zd = Fh[23] + Fh[172],
        qd = Fh[170] + Fh[23] + Fh[364],
        Yd = Fh[170] + Fh[23] + Fh[473],
        Hd = Fh[0] + Fh[62] + Fh[210] + Fh[184] + Fh[212],
        Ud = Fh[398] + Fh[62] + Fh[210] + Fh[184] + Fh[163],
        Wd = Fh[130] + Fh[474] + Fh[49] + Fh[475],
        Vd = Fh[0] + Fh[62] + Fh[210] + Fh[184] + Fh[163],
        Xd = Fh[23] + Fh[81] + Fh[476],
        Kd = Fh[11] + Fh[62] + Fh[210] + Fh[184] + Fh[163],
        Zd = Fh[477] + Fh[30] + Fh[160] + Fh[1] + Fh[313],
        Jd = Fh[478] + Fh[314] + Fh[315],
        Qd = Fh[479] + Fh[88] + Fh[480],
        tl = Fh[479] + Fh[30] + Fh[160] + Fh[88] + Fh[480],
        il = Fh[481] + Fh[110] + Fh[292],
        nl = Fh[26] + Fh[151] + Fh[67],
        el = Fh[422],
        sl = Fh[482],
        hl = Fh[88] + Fh[166] + Fh[67],
        rl = Fh[277] + Fh[104] + Fh[248],
        al = Fh[108] + Fh[104] + Fh[248],
        ol = Fh[483] + Fh[23] + Fh[370],
        fl = Fh[484],
        cl = Fh[485],
        ul = Fh[486] + Fh[314] + Fh[315],
        _l = Fh[487],
        dl = Fh[488],
        ll = Fh[489],
        vl = Fh[490],
        bl = Fh[491],
        yl = Fh[375] + Fh[23] + Fh[376],
        gl = Fh[375] + Fh[23] + Fh[377],
        ml = Fh[492] + Fh[23] + Fh[376],
        xl = Fh[492] + Fh[23] + Fh[493],
        El = Fh[492] + Fh[23] + Fh[377],
        pl = Fh[494] + Fh[23] + Fh[376],
        wl = Fh[494] + Fh[23] + Fh[493],
        Tl = Fh[494] + Fh[23] + Fh[377],
        kl = Fh[375] + Fh[23] + Fh[493],
        Ml = Fh[495],
        Ol = Fh[496],
        Il = Fh[226] + Fh[497],
        Sl = Fh[422] + Fh[229] + Fh[497],
        jl = Fh[422] + Fh[458] + Fh[497],
        Al = Fh[498] + Fh[35] + Fh[36],
        Cl = Fh[358] + Fh[110] + Fh[292],
        Ll = Fh[358] + Fh[76] + Fh[499],
        Pl = Fh[422] + Fh[358] + Fh[314] + Fh[315] + Fh[497],
        Rl = Fh[422] + Fh[498] + Fh[35] + Fh[36] + Fh[497],
        Dl = Fh[422] + Fh[37] + Fh[497],
        Nl = Fh[358] + Fh[314] + Fh[315],
        Bl = Fh[500] + Fh[184] + Fh[212],
        $l = Fh[498] + Fh[184] + Fh[212],
        Fl = Fh[0] + Fh[1] + Fh[313] + Fh[184] + Fh[212],
        Gl = Fh[501] + Fh[76] + Fh[108],
        zl = Fh[501] + Fh[76] + Fh[11],
        ql = Fh[501],
        Yl = Fh[501] + Fh[76] + Fh[14],
        Hl = Fh[502],
        Ul = Fh[503],
        Wl = Fh[504],
        Vl = Fh[505],
        Xl = Fh[11] + Fh[46] + Fh[506],
        Kl = Fh[507],
        Zl = Fh[14],
        Jl = Fh[422] + Fh[232] + Fh[497],
        Ql = Fh[422] + Fh[14] + Fh[497],
        tv = Fh[422] + Fh[498] + Fh[184] + Fh[212] + Fh[497],
        iv = Fh[508] + Fh[23] + Fh[509],
        nv = Fh[108],
        ev = Fh[508] + Fh[23] + Fh[510],
        sv = Fh[508] + Fh[23] + Fh[511],
        hv = Fh[14] + Fh[76] + Fh[499],
        rv = Fh[23] + Fh[81] + Fh[350] + Fh[163],
        av = Fh[23] + Fh[81] + Fh[82] + Fh[81],
        ov = Fh[32] + Fh[1] + Fh[313] + Fh[42] + Fh[512],
        fv = Fh[69] + Fh[1] + Fh[2],
        cv = Fh[32] + Fh[1] + Fh[2] + Fh[1] + Fh[513],
        uv = Fh[0] + Fh[184] + Fh[163],
        _v = Fh[508] + Fh[23] + Fh[514] + Fh[23] + Fh[515],
        dv = Fh[23] + Fh[516],
        lv = Fh[23] + Fh[517] + Fh[351],
        vv = Fh[518],
        bv = Fh[507] + Fh[1] + Fh[519] + Fh[56] + Fh[520],
        yv = Fh[436] + Fh[1] + Fh[519] + Fh[56] + Fh[520],
        gv = Fh[23] + Fh[436] + Fh[218] + Fh[437],
        mv = Fh[232] + Fh[1] + Fh[519] + Fh[56] + Fh[520],
        xv = Fh[29] + Fh[56] + Fh[186] + Fh[26] + Fh[27] + Fh[1] + Fh[519],
        Ev = Fh[32] + Fh[56] + Fh[186] + Fh[26] + Fh[27] + Fh[1] + Fh[472],
        pv = Fh[319] + Fh[1] + Fh[519] + Fh[56] + Fh[520],
        wv = Fh[501] + Fh[184] + Fh[212] + Fh[1] + Fh[519] + Fh[56] + Fh[520],
        Tv = Fh[28] + Fh[328],
        kv = Fh[23] + Fh[81] + Fh[82] + Fh[487] + Fh[184] + Fh[212] + Fh[44] + Fh[272],
        Mv = Fh[521],
        Ov = Fh[137] + Fh[350] + Fh[204],
        Iv = Fh[232] + Fh[522],
        Sv = Fh[108] + Fh[46] + Fh[506],
        jv = Fh[23] + Fh[81] + Fh[267] + Fh[523] + Fh[1] + Fh[519] + Fh[46] + Fh[506],
        Av = Fh[524],
        Cv = Fh[110] + Fh[194],
        Lv = Fh[24] + Fh[26] + Fh[525],
        Pv = Fh[173] + Fh[440] + Fh[526],
        Rv = Fh[303] + Fh[95] + Fh[527],
        Dv = Fh[528],
        Nv = Fh[108] + Fh[30] + Fh[31] + Fh[46] + Fh[506],
        Bv = Fh[11] + Fh[30] + Fh[31] + Fh[46] + Fh[506],
        $v = Fh[529] + Fh[23] + Fh[530] + Fh[23] + Fh[531] + Fh[23] + Fh[532],
        Fv = Fh[533] + Fh[23] + Fh[534] + Fh[23] + Fh[531],
        Gv = Fh[535] + Fh[68] + Fh[536] + Fh[68] + Fh[537] + Fh[68] + Fh[538],
        zv = Fh[539],
        qv = Fh[540] + Fh[541] + Fh[88] + Fh[542],
        Yv = Fh[543] + Fh[68] + Fh[544] + Fh[68] + Fh[545] + Fh[68] + Fh[546] + Fh[68] + Fh[547] + Fh[68] + Fh[548] + Fh[68] + Fh[549] + Fh[68] + Fh[550] + Fh[68],
        Hv = Fh[68] + Fh[535] + Fh[68] + Fh[536] + Fh[68] + Fh[537] + Fh[68] + Fh[538],
        Uv = Fh[110] + Fh[551] + Fh[30] + Fh[31],
        Wv = Fh[552] + Fh[35] + Fh[36],
        Vv = Fh[34] + Fh[26] + Fh[553],
        Xv = Fh[23] + Fh[81] + Fh[82] + Fh[554] + Fh[184] + Fh[555],
        Kv = Fh[23] + Fh[32] + Fh[198] + Fh[556] + Fh[218] + Fh[541] + Fh[218] + Fh[557],
        Zv = Fh[23] + Fh[32] + Fh[198] + Fh[556] + Fh[218] + Fh[541] + Fh[96] + Fh[203],
        Jv = Fh[137] + Fh[558],
        Qv = Fh[548],
        tb = Fh[545],
        ib = Fh[138] + Fh[88] + Fh[559],
        nb = Fh[137] + Fh[81] + Fh[350] + Fh[560],
        eb = Fh[23] + Fh[81] + Fh[350] + Fh[560],
        sb = Fh[23] + Fh[69] + Fh[561] + Fh[31],
        hb = Fh[23] + Fh[562] + Fh[30] + Fh[31],
        rb = Fh[23] + Fh[32] + Fh[30] + Fh[31],
        ab = Fh[32],
        ob = Fh[137] + Fh[563] + Fh[26] + Fh[564] + Fh[110] + Fh[565],
        fb = Fh[137] + Fh[32] + Fh[46] + Fh[566] + Fh[26] + Fh[564] + Fh[44] + Fh[567],
        cb = Fh[23] + Fh[568] + Fh[30] + Fh[31],
        ub = Fh[137] + Fh[81] + Fh[82] + Fh[468] + Fh[1] + Fh[569],
        _b = Fh[570],
        db = Fh[571] + Fh[80],
        lb = Fh[571],
        vb = Fh[572],
        bb = Fh[137] + Fh[573] + Fh[110] + Fh[551] + Fh[30] + Fh[31],
        yb = Fh[137] + Fh[574] + Fh[1] + Fh[327] + Fh[1] + Fh[519],
        gb = Fh[137] + Fh[568] + Fh[46] + Fh[566] + Fh[26] + Fh[564],
        mb = Fh[137] + Fh[568] + Fh[218] + Fh[575] + Fh[110] + Fh[551] + Fh[30] + Fh[31],
        xb = Fh[23] + Fh[169],
        Eb = Fh[576] + Fh[88] + Fh[577],
        pb = Fh[137] + Fh[578],
        wb = Fh[579],
        Tb = Fh[23] + Fh[580],
        kb = Fh[581],
        Mb = Fh[582],
        Ob = Fh[23] + Fh[583],
        Ib = Fh[137] + Fh[584],
        Sb = Fh[23] + Fh[585],
        jb = Fh[23] + Fh[562] + Fh[110] + Fh[551] + Fh[30] + Fh[31],
        Ab = Fh[544],
        Cb = Fh[23] + Fh[586],
        Lb = Fh[546],
        Pb = Fh[23] + Fh[285] + Fh[1] + Fh[569] + Fh[30] + Fh[31],
        Rb = Fh[547],
        Db = Fh[543],
        Nb = Fh[587],
        Bb = Fh[588] + Fh[56] + Fh[589],
        $b = Fh[590],
        Fb = Fh[591],
        Gb = Fh[592],
        zb = Fh[23] + Fh[505],
        qb = Fh[593],
        Yb = Fh[594] + Fh[113],
        Hb = Fh[594] + Fh[114],
        Ub = Fh[23] + Fh[568] + Fh[56] + Fh[595] + Fh[56] + Fh[596],
        Wb = Fh[23] + Fh[597],
        Vb = Fh[137] + Fh[81] + Fh[82] + Fh[569] + Fh[110] + Fh[565],
        Xb = Fh[598],
        Kb = Fh[137] + Fh[599],
        Zb = Fh[584],
        Jb = Fh[586] + Fh[80],
        Qb = Fh[586],
        ty = Fh[23] + Fh[81] + Fh[82] + Fh[468] + Fh[46] + Fh[566] + Fh[26] + Fh[564] + Fh[110] + Fh[565],
        iy = Fh[585] + Fh[80],
        ny = Fh[585],
        ey = Fh[600] + Fh[80],
        sy = Fh[600],
        hy = Fh[597] + Fh[80],
        ry = Fh[597],
        ay = Fh[0] + Fh[1] + Fh[554] + Fh[88] + Fh[601],
        oy = Fh[583] + Fh[80],
        fy = Fh[583],
        cy = Fh[0] + Fh[30] + Fh[160] + Fh[62] + Fh[210] + Fh[218] + Fh[541] + Fh[30] + Fh[31],
        uy = Fh[0] + Fh[602] + Fh[210] + Fh[218] + Fh[541] + Fh[30] + Fh[31],
        _y = Fh[23] + Fh[603] + Fh[46] + Fh[604],
        dy = Fh[32] + Fh[30] + Fh[160] + Fh[104] + Fh[605],
        ly = Fh[32] + Fh[1] + Fh[513],
        vy = Fh[23] + Fh[606] + Fh[607],
        by = Fh[23] + Fh[608] + Fh[351] + Fh[184] + Fh[609],
        yy = Fh[23] + Fh[81] + Fh[82] + Fh[610] + Fh[184] + Fh[611] + Fh[46] + Fh[604],
        gy = Fh[23] + Fh[612] + Fh[88] + Fh[613],
        my = Fh[137] + Fh[32] + Fh[30] + Fh[31],
        xy = Fh[137] + Fh[562] + Fh[30] + Fh[31],
        Ey = Fh[614],
        py = Fh[23] + Fh[608] + Fh[351] + Fh[184] + Fh[611],
        wy = Fh[23] + Fh[568] + Fh[113],
        Ty = Fh[615],
        ky = Fh[616] + Fh[113],
        My = Fh[616] + Fh[114],
        Oy = Fh[23] + Fh[568] + Fh[114],
        Iy = Fh[617] + Fh[56] + Fh[589] + Fh[113],
        Sy = Fh[95] + Fh[153] + Fh[95] + Fh[618] + Fh[95] + Fh[619],
        jy = Fh[95] + Fh[153] + Fh[95] + Fh[618] + Fh[95] + Fh[620],
        Ay = Fh[95] + Fh[153] + Fh[95] + Fh[621],
        Cy = Fh[95] + Fh[153] + Fh[95] + Fh[622],
        Ly = Fh[95] + Fh[158] + Fh[95] + Fh[618] + Fh[95] + Fh[619],
        Py = Fh[95] + Fh[158] + Fh[95] + Fh[618] + Fh[95] + Fh[620],
        Ry = Fh[95] + Fh[158] + Fh[95] + Fh[621],
        Dy = Fh[95] + Fh[158] + Fh[95] + Fh[622],
        Ny = Fh[623],
        By = Fh[330],
        $y = Fh[624] + Fh[67] + Fh[232] + Fh[101] + Fh[227] + Fh[440] + Fh[625] + Fh[102] + Fh[626] + Fh[627] + Fh[68] + Fh[608] + Fh[628] + Fh[356] + Fh[307] + Fh[629] + Fh[630] + Fh[631] + Fh[517] + Fh[632] + Fh[633] + Fh[634] + Fh[16] + Fh[351] + Fh[440] + Fh[635] + Fh[517] + Fh[636] + Fh[491] + Fh[80] + Fh[637] + Fh[307] + Fh[163] + Fh[80] + Fh[44] + Fh[210] + Fh[638] + Fh[635] + Fh[608] + Fh[639] + Fh[491] + Fh[640] + Fh[81] + Fh[641] + Fh[487] + Fh[642] + Fh[350] + Fh[643] + Fh[644] + Fh[645] + Fh[314] + Fh[646] + Fh[440] + Fh[26] + Fh[647] + Fh[26] + Fh[356] + Fh[218] + Fh[648] + Fh[649] + Fh[16] + Fh[650] + Fh[210] + Fh[651] + Fh[81] + Fh[440] + Fh[652] + Fh[653] + Fh[654] + Fh[655] + Fh[645] + Fh[42] + Fh[656] + Fh[269] + Fh[633] + Fh[113] + Fh[349] + Fh[657] + Fh[658] + Fh[659] + Fh[490] + Fh[660] + Fh[356] + Fh[206] + Fh[1] + Fh[661] + Fh[662] + Fh[487] + Fh[42] + Fh[206] + Fh[210] + Fh[42] + Fh[349] + Fh[663] + Fh[124] + Fh[517] + Fh[114] + Fh[356] + Fh[62] + Fh[664] + Fh[665] + Fh[666] + Fh[667] + Fh[668] + Fh[669] + Fh[633] + Fh[670] + Fh[633] + Fh[671] + Fh[351] + Fh[517] + Fh[440] + Fh[349] + Fh[672] + Fh[673] + Fh[674] + Fh[675] + Fh[350] + Fh[676] + Fh[677] + Fh[351] + Fh[49] + Fh[351] + Fh[68] + Fh[623],
        Fy = Fh[678] + Fh[15] + Fh[462],
        Gy = Fh[23] + Fh[81] + Fh[82] + Fh[679],
        zy = Fh[23] + Fh[41] + Fh[680],
        qy = Fh[61] + Fh[42] + Fh[43] + Fh[44] + Fh[45],
        Yy = Fh[23] + Fh[32] + Fh[88] + Fh[681],
        Hy = Fh[23] + Fh[81] + Fh[82] + Fh[652],
        Uy = Fh[23] + Fh[490] + Fh[80],
        Wy = Fh[307] + Fh[76] + Fh[307],
        Vy = Fh[53] + Fh[110] + Fh[551] + Fh[88] + Fh[682],
        Xy = Fh[53] + Fh[683],
        Ky = Fh[398] + Fh[104] + Fh[248],
        Zy = Fh[26] + Fh[151],
        Jy = Fh[30] + Fh[31],
        Qy = Fh[26] + Fh[27] + Fh[1] + Fh[519] + Fh[30] + Fh[31],
        tg = Fh[46] + Fh[47] + Fh[30] + Fh[31],
        ig = Fh[443] + Fh[684],
        ng = Fh[56] + Fh[520],
        eg = Fh[56] + Fh[186],
        sg = Fh[88] + Fh[685] + Fh[218] + Fh[437],
        hg = Fh[56] + Fh[186] + Fh[218] + Fh[437],
        rg = Fh[686] + Fh[506],
        ag = Fh[146] + Fh[128],
        og = Fh[146] + Fh[134],
        fg = Fh[53] + Fh[218] + Fh[687] + Fh[124] + Fh[125],
        cg = Fh[688],
        ug = Fh[108] + Fh[689] + Fh[105],
        _g = Fh[690],
        dg = Fh[691],
        lg = Fh[263] + Fh[76] + Fh[316],
        vg = Fh[263],
        bg = Fh[430],
        yg = Fh[692],
        gg = Fh[692] + Fh[76] + Fh[443],
        mg = Fh[692] + Fh[76] + Fh[35],
        xg = Fh[693],
        Eg = Fh[693] + Fh[76] + Fh[443],
        pg = Fh[693] + Fh[76] + Fh[35],
        wg = Fh[693] + Fh[76] + Fh[443] + Fh[76] + Fh[35],
        Tg = Fh[693] + Fh[76] + Fh[35] + Fh[76] + Fh[443],
        kg = Fh[694] + Fh[76] + Fh[289],
        Mg = Fh[694] + Fh[76] + Fh[223],
        Og = Fh[694] + Fh[76] + Fh[85],
        Ig = Fh[694] + Fh[76] + Fh[86],
        Sg = Fh[695],
        jg = Fh[696],
        Ag = Fh[697],
        Cg = Fh[698],
        Lg = Fh[699],
        Pg = Fh[700],
        Rg = Fh[701],
        Dg = Fh[702],
        Ng = Fh[703],
        Bg = Fh[704],
        $g = Fh[705],
        Fg = Fh[706],
        Gg = Fh[707],
        zg = Fh[708],
        qg = Fh[709],
        Yg = Fh[710],
        Hg = Fh[711] + Fh[76] + Fh[712],
        Ug = Fh[711] + Fh[76] + Fh[206],
        Wg = Fh[711] + Fh[76] + Fh[80],
        Vg = Fh[711] + Fh[76] + Fh[308],
        Xg = Fh[711] + Fh[76] + Fh[349],
        Kg = Fh[711] + Fh[76] + Fh[350],
        Zg = Fh[711] + Fh[76] + Fh[267],
        Jg = Fh[711] + Fh[76] + Fh[82],
        Qg = Fh[711] + Fh[76] + Fh[351],
        tm = Fh[711] + Fh[76] + Fh[140],
        im = Fh[180] + Fh[23] + Fh[713] + Fh[23] + Fh[362] + Fh[23] + Fh[714],
        nm = Fh[715],
        em = Fh[180] + Fh[23] + Fh[713] + Fh[23] + Fh[362] + Fh[23] + Fh[384],
        sm = Fh[188],
        hm = Fh[180] + Fh[23] + Fh[716] + Fh[23] + Fh[362] + Fh[23] + Fh[384],
        rm = Fh[180] + Fh[23] + Fh[716] + Fh[23] + Fh[362] + Fh[23] + Fh[717],
        am = Fh[718],
        om = Fh[719] + Fh[23] + Fh[362],
        fm = Fh[719] + Fh[23] + Fh[362] + Fh[23] + Fh[720],
        cm = Fh[719] + Fh[23] + Fh[721],
        um = Fh[719] + Fh[23] + Fh[720] + Fh[23] + Fh[722],
        _m = Fh[719] + Fh[23] + Fh[237],
        dm = Fh[721] + Fh[23] + Fh[723],
        lm = Fh[724] + Fh[23] + Fh[216],
        vm = Fh[215] + Fh[23] + Fh[483] + Fh[23] + Fh[171],
        bm = Fh[725] + Fh[26] + Fh[156] + Fh[104] + Fh[157],
        ym = Fh[24] + Fh[1] + Fh[309],
        gm = Fh[256],
        mm = Fh[726] + Fh[110] + Fh[159],
        xm = Fh[28] + Fh[209] + Fh[26] + Fh[151] + Fh[206],
        Em = Fh[28] + Fh[209] + Fh[26] + Fh[151] + Fh[80],
        pm = Fh[483] + Fh[23] + Fh[727] + Fh[23] + Fh[728],
        wm = Fh[132],
        Tm = Fh[23] + Fh[729],
        km = Fh[319] + Fh[314] + Fh[219],
        Mm = Fh[184] + Fh[185] + Fh[49] + Fh[146] + Fh[49] + Fh[132] + Fh[228],
        Om = Fh[23] + Fh[290],
        Im = Fh[730],
        Sm = Fh[392],
        jm = Fh[731],
        Am = Fh[23] + Fh[149],
        Cm = Fh[178] + Fh[88] + Fh[365],
        Lm = Fh[72] + Fh[732],
        Pm = Fh[733],
        Rm = Fh[470] + Fh[49],
        Dm = Fh[196] + Fh[88] + Fh[365],
        Nm = Fh[196] + Fh[110] + Fh[133],
        Bm = Fh[72] + Fh[734],
        $m = Fh[430] + Fh[62] + Fh[735],
        Fm = Fh[430] + Fh[15] + Fh[117] + Fh[113],
        Gm = Fh[430] + Fh[15] + Fh[117] + Fh[114],
        zm = Fh[46] + Fh[736] + Fh[737],
        qm = Fh[310] + Fh[1] + Fh[431],
        Ym = Fh[30] + Fh[738] + Fh[737],
        Hm = Fh[310] + Fh[1] + Fh[431] + Fh[62] + Fh[739] + Fh[218] + Fh[219],
        Um = Fh[23] + Fh[34] + Fh[1] + Fh[740],
        Wm = Fh[741] + Fh[88] + Fh[577],
        Vm = Fh[227],
        Xm = Fh[146],
        Km = Fh[336] + Fh[184] + Fh[185],
        Zm = Fh[4] + Fh[184] + Fh[185],
        Jm = Fh[742],
        Qm = Fh[743],
        tx = Fh[744] + Fh[23] + Fh[362] + Fh[23] + Fh[239],
        ix = Fh[24] + Fh[46] + Fh[745] + Fh[269] + Fh[270],
        nx = Fh[744] + Fh[23] + Fh[362] + Fh[23] + Fh[746],
        ex = Fh[24] + Fh[104] + Fh[747] + Fh[269] + Fh[270],
        sx = Fh[108] + Fh[1] + Fh[431] + Fh[88] + Fh[289],
        hx = Fh[239] + Fh[23] + Fh[744] + Fh[23] + Fh[372],
        rx = Fh[746] + Fh[23] + Fh[744],
        ax = Fh[748] + Fh[23] + Fh[239] + Fh[23] + Fh[744],
        ox = Fh[748] + Fh[23] + Fh[239] + Fh[23] + Fh[744] + Fh[23] + Fh[374],
        fx = Fh[661],
        cx = Fh[749],
        ux = Fh[658],
        _x = Fh[750] + Fh[23] + Fh[180] + Fh[23] + Fh[395],
        dx = Fh[750] + Fh[23] + Fh[751] + Fh[23] + Fh[395],
        lx = Fh[750] + Fh[23] + Fh[752] + Fh[23] + Fh[395],
        vx = Fh[750] + Fh[23] + Fh[753],
        bx = Fh[26] + Fh[200] + Fh[88] + Fh[754],
        yx = Fh[436] + Fh[88] + Fh[755] + Fh[62] + Fh[735],
        gx = Fh[436] + Fh[1] + Fh[431],
        mx = Fh[436] + Fh[88] + Fh[755] + Fh[15] + Fh[117] + Fh[114],
        xx = Fh[719] + Fh[23] + Fh[362] + Fh[23] + Fh[721],
        Ex = Fh[756],
        px = Fh[436] + Fh[62] + Fh[757],
        wx = Fh[197] + Fh[1] + Fh[758],
        Tx = Fh[197] + Fh[759] + Fh[760],
        kx = Fh[436] + Fh[110] + Fh[292],
        Mx = Fh[756] + Fh[88] + Fh[365],
        Ox = Fh[66] + Fh[67] + Fh[307] + Fh[68] + Fh[307] + Fh[68] + Fh[307] + Fh[68] + Fh[307] + Fh[71],
        Ix = Fh[178] + Fh[1] + Fh[431],
        Sx = Fh[178] + Fh[269] + Fh[270],
        jx = Fh[23] + Fh[178] + Fh[269] + Fh[270],
        Ax = Fh[197] + Fh[56] + Fh[281] + Fh[1] + Fh[758],
        Cx = Fh[197] + Fh[56] + Fh[281] + Fh[759] + Fh[760],
        Lx = Fh[761] + Fh[26] + Fh[200],
        Px = Fh[23] + Fh[148],
        Rx = Fh[23] + Fh[762] + Fh[88] + Fh[166],
        Dx = Fh[23] + Fh[763] + Fh[26] + Fh[764] + Fh[198] + Fh[199],
        Nx = Fh[23] + Fh[763] + Fh[26] + Fh[764],
        Bx = Fh[765],
        $x = Fh[766],
        Fx = Fh[242] + Fh[76] + Fh[767],
        Gx = Fh[768] + Fh[76] + Fh[767],
        zx = Fh[769],
        qx = Fh[594],
        Yx = Fh[233] + Fh[23] + Fh[234] + Fh[23] + Fh[770],
        Hx = Fh[771],
        Ux = Fh[72] + Fh[206] + Fh[1] + Fh[267] + Fh[62] + Fh[635] + Fh[56],
        Wx = Fh[72] + Fh[772],
        Vx = Fh[72] + Fh[773] + Fh[30] + Fh[351] + Fh[62],
        Xx = Fh[72] + Fh[774] + Fh[62] + Fh[775],
        Kx = Fh[72] + Fh[774] + Fh[42] + Fh[776],
        Zx = Fh[72] + Fh[777] + Fh[1] + Fh[778],
        Jx = Fh[72] + Fh[779],
        Qx = Fh[72] + Fh[206] + Fh[56] + Fh[267] + Fh[1] + Fh[635] + Fh[44],
        tE = Fh[72] + Fh[780] + Fh[62] + Fh[307],
        iE = Fh[72] + Fh[781] + Fh[782],
        nE = Fh[72] + Fh[206] + Fh[44] + Fh[267] + Fh[783] + Fh[80],
        eE = Fh[72] + Fh[774] + Fh[42] + Fh[784],
        sE = Fh[72] + Fh[785],
        hE = Fh[786] + Fh[1] + Fh[787] + Fh[110] + Fh[159],
        rE = Fh[72] + Fh[80] + Fh[645] + Fh[351] + Fh[788],
        aE = Fh[72] + Fh[789],
        oE = Fh[718] + Fh[46] + Fh[790],
        fE = Fh[72] + Fh[791] + Fh[56] + Fh[778],
        cE = Fh[72] + Fh[792],
        uE = Fh[72] + Fh[206] + Fh[44] + Fh[793] + Fh[42] + Fh[349],
        _E = Fh[72] + Fh[794] + Fh[795] + Fh[80],
        dE = Fh[72] + Fh[796] + Fh[797],
        lE = Fh[72] + Fh[206] + Fh[30] + Fh[267] + Fh[798] + Fh[307],
        vE = Fh[72] + Fh[799],
        bE = Fh[72] + Fh[16] + Fh[82] + Fh[16] + Fh[351] + Fh[16] + Fh[351],
        yE = Fh[72] + Fh[267] + Fh[42] + Fh[800],
        gE = Fh[72] + Fh[349] + Fh[44] + Fh[349] + Fh[1] + Fh[349] + Fh[62],
        mE = Fh[72] + Fh[801],
        xE = Fh[72] + Fh[802],
        EE = Fh[72] + Fh[267] + Fh[44] + Fh[267] + Fh[30] + Fh[267] + Fh[44],
        pE = Fh[72] + Fh[349] + Fh[1] + Fh[803],
        wE = Fh[72] + Fh[804],
        TE = Fh[72] + Fh[82] + Fh[56] + Fh[82] + Fh[56] + Fh[82] + Fh[56],
        kE = Fh[72] + Fh[805],
        ME = Fh[72] + Fh[806],
        OE = Fh[72] + Fh[807],
        IE = Fh[72] + Fh[635] + Fh[30] + Fh[635] + Fh[56] + Fh[635] + Fh[56],
        SE = Fh[72] + Fh[42] + Fh[82] + Fh[42] + Fh[350] + Fh[42] + Fh[349],
        jE = Fh[72] + Fh[42] + Fh[635] + Fh[42] + Fh[267] + Fh[42] + Fh[350],
        AE = Fh[72] + Fh[42] + Fh[82] + Fh[42] + Fh[349] + Fh[42] + Fh[308],
        CE = Fh[72] + Fh[808],
        LE = Fh[72] + Fh[30] + Fh[635] + Fh[809],
        PE = Fh[72] + Fh[635] + Fh[810] + Fh[307] + Fh[749] + Fh[307],
        RE = Fh[811] + Fh[1] + Fh[787] + Fh[110] + Fh[159],
        DE = Fh[72] + Fh[488] + Fh[635] + Fh[812],
        NE = Fh[72] + Fh[308] + Fh[645] + Fh[308] + Fh[749] + Fh[813],
        BE = Fh[72] + Fh[62] + Fh[80] + Fh[814],
        $E = Fh[72] + Fh[80] + Fh[30] + Fh[351] + Fh[815],
        FE = Fh[816] + Fh[42] + Fh[817],
        GE = Fh[72] + Fh[818],
        zE = Fh[72] + Fh[491] + Fh[350] + Fh[491] + Fh[350] + Fh[491] + Fh[267],
        qE = Fh[411] + Fh[95],
        YE = Fh[23] + Fh[81] + Fh[82] + Fh[740],
        HE = Fh[23] + Fh[81] + Fh[819],
        UE = Fh[23] + Fh[81] + Fh[267] + Fh[488],
        WE = Fh[23] + Fh[81] + Fh[267] + Fh[820] + Fh[184] + Fh[185],
        VE = Fh[821],
        XE = Fh[38] + Fh[62] + Fh[822],
        KE = Fh[38],
        ZE = Fh[38] + Fh[96] + Fh[823],
        JE = Fh[184] + Fh[323] + Fh[49] + Fh[824] + Fh[49] + Fh[825] + Fh[76],
        QE = Fh[826],
        tp = Fh[314] + Fh[827] + Fh[49] + Fh[749] + Fh[49] + Fh[826] + Fh[49] + Fh[828] + Fh[76],
        ip = Fh[38] + Fh[62] + Fh[829],
        np = Fh[830] + Fh[44] + Fh[272],
        ep = Fh[831],
        sp = Fh[242] + Fh[104] + Fh[832],
        hp = Fh[833],
        rp = Fh[830] + Fh[88] + Fh[166],
        ap = Fh[834] + Fh[1] + Fh[431],
        op = Fh[762] + Fh[42] + Fh[835] + Fh[104] + Fh[157],
        fp = Fh[836],
        cp = Fh[465] + Fh[184] + Fh[837],
        up = Fh[838],
        _p = Fh[839],
        dp = Fh[840] + Fh[443] + Fh[841],
        lp = Fh[840] + Fh[56] + Fh[186],
        vp = Fh[842],
        bp = Fh[843],
        yp = Fh[844],
        gp = Fh[845] + Fh[56] + Fh[186],
        mp = Fh[846],
        xp = Fh[847] + Fh[1] + Fh[219],
        Ep = Fh[848],
        pp = Fh[133] + Fh[110] + Fh[292],
        wp = Fh[849],
        Tp = Fh[850],
        kp = Fh[851],
        Mp = Fh[845],
        Op = Fh[852] + Fh[44] + Fh[272],
        Ip = Fh[852] + Fh[88] + Fh[166],
        Sp = Fh[853] + Fh[218] + Fh[619] + Fh[1] + Fh[219] + Fh[88] + Fh[166],
        jp = Fh[854],
        Ap = Fh[133],
        Cp = Fh[855],
        Lp = Fh[96] + Fh[856] + Fh[49] + Fh[857] + Fh[497] + Fh[307] + Fh[204],
        Pp = Fh[549],
        Rp = Fh[831] + Fh[124] + Fh[125],
        Dp = Fh[858] + Fh[1] + Fh[219],
        Np = Fh[177] + Fh[35] + Fh[859] + Fh[228],
        Bp = Fh[860],
        $p = Fh[177] + Fh[26] + Fh[861] + Fh[49] + Fh[56] + Fh[862] + Fh[228],
        Fp = Fh[863] + Fh[56] + Fh[862],
        Gp = Fh[864],
        zp = Fh[865],
        qp = Fh[16] + Fh[866] + Fh[491] + Fh[349] + Fh[645] + Fh[867] + Fh[868] + Fh[82] + Fh[749] + Fh[869] + Fh[645] + Fh[870] + Fh[488] + Fh[308] + Fh[871] + Fh[635] + Fh[872] + Fh[873] + Fh[874] + Fh[875] + Fh[876] + Fh[307] + Fh[491] + Fh[350] + Fh[16] + Fh[877] + Fh[749] + Fh[878] + Fh[879] + Fh[880] + Fh[488] + Fh[881] + Fh[882] + Fh[308] + Fh[883] + Fh[307] + Fh[884] + Fh[885] + Fh[491] + Fh[886] + Fh[887] + Fh[888] + Fh[889] + Fh[308] + Fh[645] + Fh[890] + Fh[16] + Fh[891] + Fh[892] + Fh[267] + Fh[491] + Fh[893] + Fh[16] + Fh[894] + Fh[895] + Fh[635] + Fh[896] + Fh[476] + Fh[16] + Fh[635] + Fh[488] + Fh[350] + Fh[163] + Fh[206] + Fh[645] + Fh[349] + Fh[645] + Fh[897] + Fh[491] + Fh[80] + Fh[163] + Fh[880] + Fh[898] + Fh[351] + Fh[163] + Fh[308] + Fh[645] + Fh[68] + Fh[899] + Fh[206] + Fh[749] + Fh[900] + Fh[163] + Fh[901] + Fh[749] + Fh[902] + Fh[16] + Fh[903] + Fh[879] + Fh[904] + Fh[905] + Fh[906] + Fh[907] + Fh[349] + Fh[908] + Fh[909] + Fh[910] + Fh[606] + Fh[749] + Fh[82] + Fh[911] + Fh[308] + Fh[488] + Fh[307] + Fh[912] + Fh[913] + Fh[914] + Fh[915] + Fh[645] + Fh[916] + Fh[917] + Fh[307] + Fh[488] + Fh[918] + Fh[919] + Fh[255] + Fh[899] + Fh[920] + Fh[921] + Fh[922] + Fh[488] + Fh[307] + Fh[923] + Fh[924] + Fh[925] + Fh[926] + Fh[488] + Fh[927] + Fh[928] + Fh[635] + Fh[491] + Fh[929] + Fh[488] + Fh[930] + Fh[931] + Fh[267] + Fh[932] + Fh[933] + Fh[749] + Fh[934] + Fh[645] + Fh[206] + Fh[935] + Fh[936] + Fh[937] + Fh[351] + Fh[488] + Fh[819] + Fh[645] + Fh[938] + Fh[931] + Fh[68] + Fh[351] + Fh[939] + Fh[635] + Fh[16] + Fh[80] + Fh[16] + Fh[940] + Fh[645] + Fh[941] + Fh[889] + Fh[942] + Fh[887] + Fh[206] + Fh[488] + Fh[943] + Fh[645] + Fh[349] + Fh[944] + Fh[945] + Fh[163] + Fh[946] + Fh[947] + Fh[948] + Fh[949] + Fh[950] + Fh[951] + Fh[952] + Fh[491] + Fh[635] + Fh[898] + Fh[813] + Fh[488] + Fh[953] + Fh[16] + Fh[954] + Fh[491] + Fh[350] + Fh[512] + Fh[955] + Fh[645] + Fh[956] + Fh[16] + Fh[957] + Fh[749] + Fh[308] + Fh[488] + Fh[635] + Fh[749] + Fh[958] + Fh[959] + Fh[960] + Fh[749] + Fh[961] + Fh[749] + Fh[962] + Fh[963] + Fh[964] + Fh[965] + Fh[966] + Fh[488] + Fh[967] + Fh[488] + Fh[968] + Fh[491] + Fh[351] + Fh[491] + Fh[969] + Fh[882] + Fh[970] + Fh[488] + Fh[308] + Fh[163] + Fh[971] + Fh[896] + Fh[936] + Fh[16],
        Yp = Fh[177] + Fh[46] + Fh[972] + Fh[49] + Fh[69] + Fh[497],
        Hp = Fh[427] + Fh[973] + Fh[974] + Fh[427] + Fh[308] + Fh[42] + Fh[427] + Fh[973] + Fh[975] + Fh[76] + Fh[303] + Fh[76] + Fh[850] + Fh[427] + Fh[80] + Fh[1] + Fh[976] + Fh[76] + Fh[303] + Fh[76] + Fh[850] + Fh[427] + Fh[80] + Fh[1] + Fh[977] + Fh[76] + Fh[303] + Fh[76] + Fh[850],
        Up = Fh[978],
        Wp = Fh[979],
        Vp = Fh[980],
        Xp = Fh[165] + Fh[110],
        Kp = Fh[981],
        Zp = Fh[82] + Fh[76],
        Jp = Fh[937],
        Qp = Fh[83],
        tw = Fh[982],
        iw = Fh[1] + Fh[309],
        nw = Fh[104] + Fh[983],
        ew = Fh[1] + Fh[984],
        sw = Fh[985],
        hw = Fh[986],
        rw = Fh[987],
        aw = Fh[988],
        ow = Fh[989],
        fw = Fh[990],
        cw = Fh[991],
        uw = Fh[992],
        _w = Fh[467],
        dw = Fh[993],
        lw = Fh[994],
        vw = Fh[411] + Fh[995],
        bw = Fh[49] + Fh[317] + Fh[49] + Fh[996] + Fh[350],
        yw = Fh[997],
        gw = Fh[998],
        mw = Fh[999],
        xw = Fh[1e3] + Fh[198] + Fh[556],
        Ew = Fh[1001],
        pw = Fh[1002] + Fh[76] + Fh[880] + Fh[76] + Fh[206],
        ww = Fh[11] + Fh[1] + Fh[313],
        Tw = Fh[88] + Fh[89],
        kw = Fh[1003],
        Mw = Fh[30] + Fh[160],
        Ow = Fh[315],
        Iw = Fh[1004],
        Sw = Fh[1005] + Fh[198] + Fh[556],
        jw = Fh[1006],
        Aw = Fh[133] + Fh[80] + Fh[56],
        Cw = Fh[487] + Fh[110] + Fh[133],
        Lw = Fh[1007],
        Pw = Fh[307] + Fh[49] + Fh[307],
        Rw = Fh[411] + Fh[95] + Fh[1] + Fh[309],
        Dw = Fh[411] + Fh[95] + Fh[1] + Fh[309] + Fh[26] + Fh[1008],
        Nw = Fh[411] + Fh[95] + Fh[269] + Fh[412],
        Bw = Fh[23] + Fh[81] + Fh[267] + Fh[487],
        $w = Fh[23] + Fh[81] + Fh[82] + Fh[633],
        Fw = Fh[23] + Fh[350] + Fh[1009],
        Gw = Fh[261],
        zw = Fh[23] + Fh[81] + Fh[82] + Fh[487],
        qw = Fh[1010],
        Yw = Fh[1011],
        Hw = Fh[23] + Fh[652] + Fh[82] + Fh[1012] + Fh[680],
        Uw = Fh[23] + Fh[81] + Fh[82] + Fh[489],
        Ww = Fh[23] + Fh[81] + Fh[82] + Fh[203],
        Vw = Fh[23] + Fh[81] + Fh[350] + Fh[1013],
        Xw = Fh[1014],
        Kw = Fh[23] + Fh[81] + Fh[961],
        Zw = Fh[23] + Fh[1011],
        Jw = Fh[137] + Fh[981],
        Qw = Fh[23] + Fh[81] + Fh[267] + Fh[81],
        tT = Fh[23] + Fh[1015] + Fh[46] + Fh[47],
        iT = Fh[23] + Fh[81] + Fh[350] + Fh[491],
        nT = Fh[486],
        eT = Fh[658] + Fh[184] + Fh[212],
        sT = Fh[1016] + Fh[62] + Fh[523],
        hT = Fh[23] + Fh[81] + Fh[82] + Fh[1017],
        rT = Fh[23] + Fh[81] + Fh[267] + Fh[1018],
        aT = Fh[23] + Fh[81] + Fh[82] + Fh[487] + Fh[1] + Fh[309] + Fh[88] + Fh[166] + Fh[44] + Fh[272],
        oT = Fh[1019] + Fh[110] + Fh[194],
        fT = Fh[23] + Fh[81] + Fh[82] + Fh[554] + Fh[218] + Fh[1020],
        cT = Fh[1021] + Fh[218] + Fh[1020],
        uT = Fh[137] + Fh[81] + Fh[82] + Fh[1022] + Fh[218] + Fh[1020],
        _T = Fh[1014] + Fh[67],
        dT = Fh[1023],
        lT = Fh[0] + Fh[30] + Fh[160] + Fh[62] + Fh[210] + Fh[184] + Fh[163],
        vT = Fh[23] + Fh[81] + Fh[267] + Fh[159],
        bT = Fh[1024] + Fh[184] + Fh[212],
        yT = Fh[719] + Fh[23] + Fh[1025],
        gT = Fh[1026] + Fh[184] + Fh[163],
        mT = Fh[137] + Fh[1027],
        xT = Fh[23] + Fh[81] + Fh[267] + Fh[1028],
        ET = Fh[23] + Fh[81] + Fh[82] + Fh[487] + Fh[62] + Fh[217] + Fh[44] + Fh[272],
        pT = Fh[317] + Fh[30] + Fh[318] + Fh[104] + Fh[1029],
        wT = Fh[69] + Fh[46] + Fh[1030],
        TT = Fh[168] + Fh[110] + Fh[159],
        kT = Fh[112] + Fh[198] + Fh[199],
        MT = Fh[0] + Fh[269] + Fh[1031] + Fh[62] + Fh[217],
        OT = Fh[23] + Fh[1011] + Fh[1] + Fh[1032],
        IT = Fh[161] + Fh[62] + Fh[217],
        ST = Fh[428] + Fh[23] + Fh[1033],
        jT = Fh[1034] + Fh[76] + Fh[570],
        AT = Fh[428] + Fh[23] + Fh[1035],
        CT = Fh[1034] + Fh[76] + Fh[1036],
        LT = Fh[428] + Fh[23] + Fh[362],
        PT = Fh[23] + Fh[652] + Fh[82],
        RT = Fh[23] + Fh[289] + Fh[1] + Fh[309],
        DT = Fh[23] + Fh[349] + Fh[298],
        NT = Fh[23] + Fh[981] + Fh[44] + Fh[1037],
        BT = Fh[53] + Fh[46] + Fh[388],
        $T = Fh[53] + Fh[62] + Fh[1038] + Fh[30] + Fh[402],
        FT = Fh[0] + Fh[30] + Fh[389] + Fh[62] + Fh[1038],
        GT = Fh[1026] + Fh[62] + Fh[217],
        zT = Fh[23] + Fh[350] + Fh[356],
        qT = Fh[23] + Fh[308] + Fh[491],
        YT = Fh[23] + Fh[1039] + Fh[42] + Fh[1040],
        HT = Fh[23] + Fh[608] + Fh[351] + Fh[1041],
        UT = Fh[23] + Fh[1042],
        WT = Fh[23] + Fh[351] + Fh[645] + Fh[1] + Fh[472],
        VT = Fh[1043] + Fh[76] + Fh[192],
        XT = Fh[23] + Fh[1011] + Fh[1] + Fh[472],
        KT = Fh[137] + Fh[308] + Fh[995],
        ZT = Fh[310] + Fh[88] + Fh[577],
        JT = Fh[1044],
        QT = Fh[261] + Fh[104] + Fh[1045],
        tk = Fh[1026] + Fh[1] + Fh[1046],
        ik = Fh[1047],
        nk = Fh[23] + Fh[81] + Fh[350] + Fh[81],
        ek = Fh[23] + Fh[355] + Fh[62] + Fh[1038] + Fh[184] + Fh[271] + Fh[44] + Fh[272],
        sk = Fh[225] + Fh[30] + Fh[389] + Fh[62] + Fh[1038],
        hk = Fh[23] + Fh[81] + Fh[1048],
        rk = Fh[137] + Fh[487] + Fh[349],
        ak = Fh[4] + Fh[30] + Fh[389],
        ok = Fh[317] + Fh[30] + Fh[318] + Fh[30] + Fh[389],
        fk = Fh[0] + Fh[184] + Fh[212] + Fh[62] + Fh[210] + Fh[184] + Fh[163],
        ck = Fh[391] + Fh[522],
        uk = Fh[130] + Fh[474] + Fh[49] + Fh[1049],
        _k = Fh[165] + Fh[184] + Fh[212] + Fh[42] + Fh[1050],
        dk = Fh[1051],
        lk = Fh[23] + Fh[81] + Fh[267] + Fh[1052] + Fh[218],
        vk = Fh[23] + Fh[816] + Fh[62] + Fh[217],
        bk = Fh[165] + Fh[88] + Fh[365],
        yk = Fh[261] + Fh[35] + Fh[1053],
        gk = Fh[1026],
        mk = Fh[23] + Fh[81] + Fh[82] + Fh[490],
        xk = Fh[28] + Fh[33],
        Ek = Fh[411] + Fh[76] + Fh[30] + Fh[160],
        pk = Fh[1054],
        wk = Fh[245] + Fh[88] + Fh[1055],
        Tk = Fh[1056] + Fh[269] + Fh[1057],
        kk = Fh[411] + Fh[76] + Fh[30] + Fh[389],
        Mk = Fh[23] + Fh[81] + Fh[1058],
        Ok = Fh[1059],
        Ik = Fh[401] + Fh[30] + Fh[402],
        Sk = Fh[1060] + Fh[76] + Fh[1061],
        jk = Fh[1062] + Fh[26] + Fh[200] + Fh[1] + Fh[519],
        Ak = Fh[108] + Fh[26] + Fh[200] + Fh[88] + Fh[754],
        Ck = Fh[53] + Fh[314] + Fh[1063],
        Lk = Fh[1064],
        Pk = Fh[69],
        Rk = Fh[28] + Fh[227],
        Dk = Fh[411] + Fh[95] + Fh[481],
        Nk = Fh[23] + Fh[81] + Fh[82] + Fh[517],
        Bk = Fh[28] + Fh[1065],
        $k = Fh[1065],
        Fk = Fh[258],
        Gk = Fh[69] + Fh[44] + Fh[325],
        zk = Fh[23] + Fh[258],
        qk = Fh[411] + Fh[76] + Fh[314] + Fh[219],
        Yk = Fh[1066] + Fh[76] + Fh[108],
        Hk = Fh[1066] + Fh[76] + Fh[11],
        Uk = Fh[1067] + Fh[26] + Fh[91],
        Wk = Fh[1060],
        Vk = Fh[1068] + Fh[23] + Fh[1069],
        Xk = Fh[347] + Fh[23] + Fh[395],
        Kk = Fh[411] + Fh[76] + Fh[88] + Fh[275] + Fh[314] + Fh[219],
        Zk = Fh[11] + Fh[26] + Fh[200] + Fh[88] + Fh[754],
        Jk = Fh[1070],
        Qk = Fh[88] + Fh[275] + Fh[314] + Fh[219],
        tM = Fh[1071],
        iM = Fh[411] + Fh[76] + Fh[62] + Fh[1072],
        nM = Fh[1073] + Fh[88] + Fh[408] + Fh[314] + Fh[409],
        eM = Fh[1074] + Fh[23] + Fh[362],
        sM = Fh[1074] + Fh[23] + Fh[362] + Fh[23] + Fh[335],
        hM = Fh[1074] + Fh[23] + Fh[1075],
        rM = Fh[261] + Fh[44] + Fh[272],
        aM = Fh[28] + Fh[1076] + Fh[110] + Fh[292],
        oM = Fh[1074] + Fh[23] + Fh[1077],
        fM = Fh[28] + Fh[1078] + Fh[88] + Fh[166],
        cM = Fh[1074] + Fh[23] + Fh[1079] + Fh[23] + Fh[171],
        uM = Fh[411] + Fh[76] + Fh[269] + Fh[1057],
        _M = Fh[1078] + Fh[88] + Fh[166],
        dM = Fh[1076] + Fh[110] + Fh[292],
        lM = Fh[1076] + Fh[184] + Fh[185],
        vM = Fh[269] + Fh[1057],
        bM = Fh[411] + Fh[76] + Fh[110] + Fh[133],
        yM = Fh[261] + Fh[56] + Fh[186],
        gM = Fh[72] + Fh[1080],
        mM = Fh[28] + Fh[1067] + Fh[26] + Fh[151],
        xM = Fh[436] + Fh[88] + Fh[755] + Fh[15] + Fh[117] + Fh[113],
        EM = Fh[436] + Fh[62] + Fh[268] + Fh[1] + Fh[431],
        pM = Fh[196] + Fh[104] + Fh[248],
        wM = Fh[1081] + Fh[88] + Fh[685],
        TM = Fh[1081] + Fh[88] + Fh[685] + Fh[88] + Fh[1055],
        kM = Fh[28] + Fh[1082],
        MM = Fh[256] + Fh[113],
        OM = Fh[256] + Fh[114],
        IM = Fh[719] + Fh[23] + Fh[362] + Fh[23] + Fh[721] + Fh[23] + Fh[335],
        SM = Fh[23] + Fh[1083],
        jM = Fh[263] + Fh[46] + Fh[282] + Fh[56] + Fh[281] + Fh[15] + Fh[117],
        AM = Fh[28] + Fh[273] + Fh[1] + Fh[431],
        CM = Fh[28] + Fh[273] + Fh[269] + Fh[270],
        LM = Fh[28] + Fh[261] + Fh[56] + Fh[186],
        PM = Fh[225] + Fh[88] + Fh[166],
        RM = Fh[32] + Fh[62] + Fh[217] + Fh[1] + Fh[472],
        DM = Fh[28] + Fh[261] + Fh[46] + Fh[1084],
        NM = Fh[28] + Fh[261] + Fh[35] + Fh[1053],
        BM = Fh[28] + Fh[1023],
        $M = Fh[28] + Fh[264] + Fh[30] + Fh[280],
        FM = Fh[1085] + Fh[35] + Fh[1086],
        GM = Fh[1085] + Fh[443] + Fh[1087] + Fh[110] + Fh[400],
        zM = Fh[32] + Fh[56] + Fh[186] + Fh[1] + Fh[472],
        qM = Fh[23] + Fh[81] + Fh[350] + Fh[489],
        YM = Fh[35] + Fh[1053],
        HM = Fh[46] + Fh[1084],
        UM = Fh[42] + Fh[254] + Fh[26] + Fh[151],
        WM = Fh[88] + Fh[166],
        VM = Fh[62] + Fh[268] + Fh[269] + Fh[270],
        XM = Fh[104] + Fh[259],
        KM = Fh[361] + Fh[23] + Fh[362] + Fh[23] + Fh[1088],
        ZM = Fh[436] + Fh[76] + Fh[242],
        JM = Fh[436] + Fh[76] + Fh[263],
        QM = Fh[719] + Fh[23] + Fh[720] + Fh[23] + Fh[394] + Fh[23] + Fh[114],
        tO = Fh[436] + Fh[76] + Fh[229],
        iO = Fh[310] + Fh[76] + Fh[242],
        nO = Fh[1089] + Fh[23] + Fh[237] + Fh[23] + Fh[233] + Fh[23] + Fh[234],
        eO = Fh[1082],
        sO = Fh[720] + Fh[23] + Fh[722],
        hO = Fh[430] + Fh[76] + Fh[1090],
        rO = Fh[720] + Fh[23] + Fh[237],
        aO = Fh[430] + Fh[76] + Fh[242],
        oO = Fh[720] + Fh[23] + Fh[394] + Fh[23] + Fh[113],
        fO = Fh[430] + Fh[76] + Fh[256] + Fh[76] + Fh[204],
        cO = Fh[430] + Fh[76] + Fh[256] + Fh[76] + Fh[210],
        uO = Fh[333] + Fh[23] + Fh[1091],
        _O = Fh[1092] + Fh[76] + Fh[196],
        dO = Fh[333] + Fh[23] + Fh[1091] + Fh[23] + Fh[364],
        lO = Fh[1092] + Fh[76] + Fh[196] + Fh[76] + Fh[100],
        vO = Fh[1092] + Fh[76] + Fh[197] + Fh[76] + Fh[1093],
        bO = Fh[333] + Fh[23] + Fh[1094] + Fh[23] + Fh[237],
        yO = Fh[1092] + Fh[76] + Fh[178] + Fh[76] + Fh[242],
        gO = Fh[333] + Fh[23] + Fh[1094] + Fh[23] + Fh[744],
        mO = Fh[1092] + Fh[76] + Fh[178] + Fh[76] + Fh[1095],
        xO = Fh[333] + Fh[23] + Fh[1096],
        EO = Fh[1092] + Fh[76] + Fh[756],
        pO = Fh[333] + Fh[23] + Fh[1096] + Fh[23] + Fh[364],
        wO = Fh[1092] + Fh[76] + Fh[756] + Fh[76] + Fh[100],
        TO = Fh[1097] + Fh[23] + Fh[378] + Fh[23] + Fh[1098],
        kO = Fh[253] + Fh[76] + Fh[1099] + Fh[76] + Fh[1060],
        MO = Fh[273] + Fh[76] + Fh[242],
        OO = Fh[1100] + Fh[23] + Fh[744],
        IO = Fh[273] + Fh[76] + Fh[1095],
        SO = Fh[721],
        jO = Fh[263] + Fh[76] + Fh[148],
        AO = Fh[721] + Fh[23] + Fh[237],
        CO = Fh[263] + Fh[76] + Fh[242],
        LO = Fh[721] + Fh[23] + Fh[180] + Fh[23] + Fh[1101],
        PO = Fh[263] + Fh[76] + Fh[197] + Fh[76] + Fh[1093],
        RO = Fh[721] + Fh[23] + Fh[180] + Fh[23] + Fh[1101] + Fh[23] + Fh[394],
        DO = Fh[263] + Fh[76] + Fh[495],
        NO = Fh[1077],
        BO = Fh[180] + Fh[23] + Fh[713],
        $O = Fh[197] + Fh[76] + Fh[1102],
        FO = Fh[180] + Fh[23] + Fh[716],
        GO = Fh[197] + Fh[76] + Fh[296],
        zO = Fh[197] + Fh[76] + Fh[1093] + Fh[76] + Fh[1102],
        qO = Fh[197] + Fh[76] + Fh[1093] + Fh[76] + Fh[296],
        YO = Fh[215] + Fh[23] + Fh[1100] + Fh[23] + Fh[237],
        HO = Fh[215] + Fh[23] + Fh[1100] + Fh[23] + Fh[744],
        UO = Fh[215] + Fh[23] + Fh[721],
        WO = Fh[227] + Fh[76] + Fh[263] + Fh[76] + Fh[148],
        VO = Fh[215] + Fh[23] + Fh[721] + Fh[23] + Fh[237],
        XO = Fh[227] + Fh[76] + Fh[263] + Fh[76] + Fh[100],
        KO = Fh[215] + Fh[23] + Fh[721] + Fh[23] + Fh[180] + Fh[23] + Fh[1101],
        ZO = Fh[215] + Fh[23] + Fh[721] + Fh[23] + Fh[723],
        JO = Fh[227] + Fh[76] + Fh[495],
        QO = Fh[227] + Fh[76] + Fh[222],
        tI = Fh[215] + Fh[23] + Fh[637] + Fh[23] + Fh[514],
        iI = Fh[227] + Fh[76] + Fh[658] + Fh[76] + Fh[14],
        nI = Fh[215] + Fh[23] + Fh[1103],
        eI = Fh[227] + Fh[76] + Fh[1104],
        sI = Fh[215] + Fh[23] + Fh[1105],
        hI = Fh[227] + Fh[76] + Fh[1082],
        rI = Fh[1106] + Fh[23] + Fh[1107],
        aI = Fh[848] + Fh[76] + Fh[202],
        oI = Fh[1106] + Fh[23] + Fh[1108],
        fI = Fh[848] + Fh[76] + Fh[279],
        cI = Fh[1106] + Fh[23] + Fh[1109],
        uI = Fh[848] + Fh[76] + Fh[1023],
        _I = Fh[1106] + Fh[23] + Fh[1110] + Fh[23] + Fh[1108],
        dI = Fh[1106] + Fh[23] + Fh[237],
        lI = Fh[848] + Fh[76] + Fh[242],
        vI = Fh[1106] + Fh[23] + Fh[170] + Fh[23] + Fh[171],
        bI = Fh[848] + Fh[76] + Fh[172] + Fh[76] + Fh[1010],
        yI = Fh[1106] + Fh[23] + Fh[170] + Fh[23] + Fh[473],
        gI = Fh[848] + Fh[76] + Fh[172] + Fh[76] + Fh[1111],
        mI = Fh[1106] + Fh[23] + Fh[170] + Fh[23] + Fh[364],
        xI = Fh[848] + Fh[76] + Fh[172] + Fh[76] + Fh[100],
        EI = Fh[848] + Fh[76] + Fh[222],
        pI = Fh[848] + Fh[76] + Fh[266] + Fh[76] + Fh[148],
        wI = Fh[1106] + Fh[23] + Fh[724],
        TI = Fh[848] + Fh[76] + Fh[266],
        kI = Fh[1106] + Fh[23] + Fh[723],
        MI = Fh[848] + Fh[76] + Fh[495],
        OI = Fh[1106] + Fh[23] + Fh[394] + Fh[23] + Fh[113],
        II = Fh[848] + Fh[76] + Fh[256] + Fh[76] + Fh[204],
        SI = Fh[1106] + Fh[23] + Fh[394] + Fh[23] + Fh[114],
        jI = Fh[848] + Fh[76] + Fh[256] + Fh[76] + Fh[210],
        AI = Fh[1106] + Fh[23] + Fh[171],
        CI = Fh[848] + Fh[76] + Fh[1010],
        LI = Fh[1106] + Fh[23] + Fh[1112] + Fh[23] + Fh[1108],
        PI = Fh[848] + Fh[76] + Fh[1113] + Fh[76] + Fh[279],
        RI = Fh[848] + Fh[76] + Fh[263],
        DI = Fh[1106] + Fh[23] + Fh[721] + Fh[23] + Fh[364],
        NI = Fh[848] + Fh[76] + Fh[263] + Fh[76] + Fh[100],
        BI = Fh[1106] + Fh[23] + Fh[1100] + Fh[23] + Fh[744],
        $I = Fh[1106] + Fh[23] + Fh[1114],
        FI = Fh[848] + Fh[76] + Fh[260],
        GI = Fh[1106] + Fh[23] + Fh[720] + Fh[23] + Fh[722],
        zI = Fh[848] + Fh[76] + Fh[430] + Fh[76] + Fh[1090],
        qI = Fh[1106] + Fh[23] + Fh[720] + Fh[23] + Fh[237],
        YI = Fh[848] + Fh[76] + Fh[430] + Fh[76] + Fh[242],
        HI = Fh[1106] + Fh[23] + Fh[720] + Fh[23] + Fh[394] + Fh[23] + Fh[113],
        UI = Fh[1106] + Fh[23] + Fh[720] + Fh[23] + Fh[394] + Fh[23] + Fh[114],
        WI = Fh[1106] + Fh[23] + Fh[637] + Fh[23] + Fh[514],
        VI = Fh[848] + Fh[76] + Fh[658] + Fh[76] + Fh[14],
        XI = Fh[1106] + Fh[23] + Fh[1115] + Fh[23] + Fh[376],
        KI = Fh[848] + Fh[76] + Fh[32] + Fh[76] + Fh[289],
        ZI = Fh[1074] + Fh[23] + Fh[1100] + Fh[23] + Fh[237],
        JI = Fh[1074] + Fh[23] + Fh[1100] + Fh[23] + Fh[744],
        QI = Fh[1074] + Fh[23] + Fh[1091],
        tS = Fh[1076] + Fh[76] + Fh[196],
        iS = Fh[1074] + Fh[23] + Fh[1091] + Fh[23] + Fh[364],
        nS = Fh[1076] + Fh[76] + Fh[196] + Fh[76] + Fh[242],
        eS = Fh[1074] + Fh[23] + Fh[1091] + Fh[23] + Fh[180] + Fh[23] + Fh[1101],
        sS = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[1107],
        hS = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[1108],
        rS = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[1110] + Fh[23] + Fh[1108],
        aS = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[170] + Fh[23] + Fh[171],
        oS = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[170] + Fh[23] + Fh[364],
        fS = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[1077],
        cS = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[723],
        uS = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[394] + Fh[23] + Fh[113],
        _S = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[721],
        dS = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[721] + Fh[23] + Fh[364],
        lS = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[1100] + Fh[23] + Fh[237],
        vS = Fh[366] + Fh[23] + Fh[216],
        bS = Fh[355] + Fh[76] + Fh[148],
        yS = Fh[355] + Fh[76] + Fh[242],
        gS = Fh[355] + Fh[76] + Fh[756],
        mS = Fh[366] + Fh[23] + Fh[1096] + Fh[23] + Fh[364],
        xS = Fh[355] + Fh[76] + Fh[756] + Fh[76] + Fh[100],
        ES = Fh[366] + Fh[23] + Fh[180] + Fh[23] + Fh[1101],
        pS = Fh[355] + Fh[76] + Fh[197] + Fh[76] + Fh[1093],
        wS = Fh[366] + Fh[23] + Fh[180] + Fh[23] + Fh[1101] + Fh[23] + Fh[394],
        TS = Fh[355] + Fh[76] + Fh[87] + Fh[76] + Fh[256],
        kS = Fh[355] + Fh[76] + Fh[69] + Fh[76] + Fh[256],
        MS = Fh[366] + Fh[23] + Fh[1094] + Fh[23] + Fh[237],
        OS = Fh[355] + Fh[76] + Fh[178] + Fh[76] + Fh[242],
        IS = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1117],
        SS = Fh[355] + Fh[76] + Fh[401] + Fh[76] + Fh[1118],
        jS = Fh[355] + Fh[76] + Fh[1119] + Fh[76] + Fh[1120],
        AS = Fh[355] + Fh[76] + Fh[694],
        CS = Fh[355] + Fh[76] + Fh[1121] + Fh[76] + Fh[1122],
        LS = Fh[355] + Fh[76] + Fh[182] + Fh[76] + Fh[1123],
        PS = Fh[355] + Fh[76] + Fh[182] + Fh[76] + Fh[37],
        RS = Fh[355] + Fh[76] + Fh[1124],
        DS = Fh[366] + Fh[23] + Fh[382] + Fh[23] + Fh[723],
        NS = Fh[355] + Fh[76] + Fh[1124] + Fh[76] + Fh[495],
        BS = Fh[366] + Fh[23] + Fh[393] + Fh[23] + Fh[1125] + Fh[23] + Fh[366],
        $S = Fh[355] + Fh[76] + Fh[87] + Fh[76] + Fh[1126] + Fh[76] + Fh[355],
        FS = Fh[366] + Fh[23] + Fh[395] + Fh[23] + Fh[1125] + Fh[23] + Fh[366],
        GS = Fh[355] + Fh[76] + Fh[69] + Fh[76] + Fh[1126] + Fh[76] + Fh[355],
        zS = Fh[347] + Fh[23] + Fh[393],
        qS = Fh[711] + Fh[76] + Fh[87],
        YS = Fh[711] + Fh[76] + Fh[87] + Fh[76] + Fh[1010],
        HS = Fh[347] + Fh[23] + Fh[393] + Fh[23] + Fh[394],
        US = Fh[711] + Fh[76] + Fh[87] + Fh[76] + Fh[256],
        WS = Fh[711] + Fh[76] + Fh[87] + Fh[76] + Fh[196],
        VS = Fh[347] + Fh[23] + Fh[393] + Fh[23] + Fh[1091] + Fh[23] + Fh[364],
        XS = Fh[347] + Fh[23] + Fh[393] + Fh[23] + Fh[1096],
        KS = Fh[711] + Fh[76] + Fh[87] + Fh[76] + Fh[756],
        ZS = Fh[347] + Fh[23] + Fh[393] + Fh[23] + Fh[180] + Fh[23] + Fh[1101],
        JS = Fh[711] + Fh[76] + Fh[87] + Fh[76] + Fh[197] + Fh[76] + Fh[1093],
        QS = Fh[347] + Fh[23] + Fh[393] + Fh[23] + Fh[180] + Fh[23] + Fh[1101] + Fh[23] + Fh[394],
        tj = Fh[347] + Fh[23] + Fh[393] + Fh[23] + Fh[1094] + Fh[23] + Fh[237],
        ij = Fh[347] + Fh[23] + Fh[393] + Fh[23] + Fh[1094] + Fh[23] + Fh[744],
        nj = Fh[711] + Fh[76] + Fh[87] + Fh[76] + Fh[197] + Fh[76] + Fh[1102],
        ej = Fh[711] + Fh[76] + Fh[87] + Fh[76] + Fh[197] + Fh[76] + Fh[296],
        sj = Fh[711] + Fh[76] + Fh[69],
        hj = Fh[347] + Fh[23] + Fh[395] + Fh[23] + Fh[171],
        rj = Fh[711] + Fh[76] + Fh[69] + Fh[76] + Fh[1010],
        aj = Fh[347] + Fh[23] + Fh[395] + Fh[23] + Fh[394],
        oj = Fh[711] + Fh[76] + Fh[69] + Fh[76] + Fh[256],
        fj = Fh[711] + Fh[76] + Fh[69] + Fh[76] + Fh[196],
        cj = Fh[347] + Fh[23] + Fh[395] + Fh[23] + Fh[1091] + Fh[23] + Fh[364],
        uj = Fh[711] + Fh[76] + Fh[69] + Fh[76] + Fh[756],
        _j = Fh[347] + Fh[23] + Fh[395] + Fh[23] + Fh[180] + Fh[23] + Fh[1101],
        dj = Fh[711] + Fh[76] + Fh[69] + Fh[76] + Fh[197] + Fh[76] + Fh[1093],
        lj = Fh[347] + Fh[23] + Fh[395] + Fh[23] + Fh[1094] + Fh[23] + Fh[237],
        vj = Fh[711] + Fh[76] + Fh[69] + Fh[76] + Fh[178] + Fh[76] + Fh[242],
        bj = Fh[347] + Fh[23] + Fh[395] + Fh[23] + Fh[180] + Fh[23] + Fh[713],
        yj = Fh[711] + Fh[76] + Fh[69] + Fh[76] + Fh[197] + Fh[76] + Fh[1102],
        gj = Fh[711] + Fh[76] + Fh[69] + Fh[76] + Fh[197] + Fh[76] + Fh[296],
        mj = Fh[242],
        xj = Fh[263] + Fh[1] + Fh[431],
        Ej = Fh[1106] + Fh[23] + Fh[1100] + Fh[23] + Fh[237],
        pj = Fh[273] + Fh[1] + Fh[431],
        wj = Fh[264] + Fh[15] + Fh[81] + Fh[110] + Fh[1127],
        Tj = Fh[720] + Fh[23] + Fh[394] + Fh[23] + Fh[114],
        kj = Fh[172] + Fh[44] + Fh[471],
        Mj = Fh[172] + Fh[88] + Fh[365],
        Oj = Fh[1113] + Fh[26] + Fh[91],
        Ij = Fh[1106] + Fh[23] + Fh[1077],
        Sj = Fh[1106] + Fh[23] + Fh[724] + Fh[23] + Fh[216],
        jj = Fh[266] + Fh[198] + Fh[199],
        Aj = Fh[263] + Fh[104] + Fh[276],
        Cj = Fh[260],
        Lj = Fh[23] + Fh[80] + Fh[489],
        Pj = Fh[1100] + Fh[23] + Fh[237],
        Rj = Fh[263] + Fh[46] + Fh[282] + Fh[56] + Fh[281],
        Dj = Fh[23] + Fh[81] + Fh[82] + Fh[356],
        Nj = Fh[1104] + Fh[110] + Fh[292],
        Bj = Fh[333] + Fh[23] + Fh[180] + Fh[23] + Fh[1101] + Fh[23] + Fh[394],
        $j = Fh[215] + Fh[23] + Fh[1077],
        Fj = Fh[215] + Fh[23] + Fh[721] + Fh[23] + Fh[180] + Fh[23] + Fh[1101] + Fh[23] + Fh[394],
        Gj = Fh[1128] + Fh[62] + Fh[1129],
        zj = Fh[23] + Fh[207],
        qj = Fh[1092],
        Yj = Fh[1074] + Fh[23] + Fh[1091] + Fh[23] + Fh[180] + Fh[23] + Fh[1101] + Fh[23] + Fh[394],
        Hj = Fh[23] + Fh[308] + Fh[995],
        Uj = Fh[366] + Fh[23] + Fh[237],
        Wj = Fh[87] + Fh[42] + Fh[1130],
        Vj = Fh[69] + Fh[42] + Fh[1130],
        Xj = Fh[180] + Fh[23] + Fh[1101] + Fh[23] + Fh[713],
        Kj = Fh[197] + Fh[44] + Fh[1131] + Fh[1] + Fh[431],
        Zj = Fh[87] + Fh[42] + Fh[298] + Fh[30] + Fh[389],
        Jj = Fh[69] + Fh[42] + Fh[298] + Fh[30] + Fh[389],
        Qj = Fh[87] + Fh[42] + Fh[1130] + Fh[88] + Fh[166],
        tA = Fh[87] + Fh[42] + Fh[1130] + Fh[15] + Fh[117],
        iA = Fh[347] + Fh[23] + Fh[393] + Fh[23] + Fh[1091],
        nA = Fh[87] + Fh[42] + Fh[1130] + Fh[88] + Fh[195],
        eA = Fh[87] + Fh[42] + Fh[1130] + Fh[88] + Fh[195] + Fh[88] + Fh[365],
        sA = Fh[87] + Fh[42] + Fh[1130] + Fh[15] + Fh[1132],
        hA = Fh[87] + Fh[42] + Fh[1130] + Fh[44] + Fh[1131] + Fh[1] + Fh[431],
        rA = Fh[87] + Fh[42] + Fh[1130] + Fh[46] + Fh[282] + Fh[56] + Fh[281],
        aA = Fh[347] + Fh[23] + Fh[393] + Fh[23] + Fh[180] + Fh[23] + Fh[716],
        oA = Fh[87] + Fh[42] + Fh[1130] + Fh[46] + Fh[282] + Fh[759] + Fh[760],
        fA = Fh[347] + Fh[23] + Fh[393] + Fh[23] + Fh[180] + Fh[23] + Fh[713],
        cA = Fh[87] + Fh[42] + Fh[1130] + Fh[46] + Fh[282] + Fh[1] + Fh[758],
        uA = Fh[69] + Fh[42] + Fh[1130] + Fh[88] + Fh[166],
        _A = Fh[69] + Fh[42] + Fh[1130] + Fh[15] + Fh[117],
        dA = Fh[347] + Fh[23] + Fh[395] + Fh[23] + Fh[1091],
        lA = Fh[69] + Fh[42] + Fh[1130] + Fh[88] + Fh[195],
        vA = Fh[69] + Fh[42] + Fh[1130] + Fh[88] + Fh[195] + Fh[88] + Fh[365],
        bA = Fh[69] + Fh[42] + Fh[1130] + Fh[15] + Fh[1132],
        yA = Fh[347] + Fh[23] + Fh[395] + Fh[23] + Fh[1096] + Fh[23] + Fh[364],
        gA = Fh[69] + Fh[42] + Fh[1130] + Fh[15] + Fh[1132] + Fh[88] + Fh[365],
        mA = Fh[69] + Fh[42] + Fh[1130] + Fh[44] + Fh[1131] + Fh[1] + Fh[431],
        xA = Fh[347] + Fh[23] + Fh[395] + Fh[23] + Fh[1094] + Fh[23] + Fh[744],
        EA = Fh[69] + Fh[42] + Fh[1130] + Fh[44] + Fh[1131] + Fh[269] + Fh[270],
        pA = Fh[69] + Fh[42] + Fh[1130] + Fh[46] + Fh[282] + Fh[56] + Fh[281],
        wA = Fh[347] + Fh[23] + Fh[395] + Fh[23] + Fh[180] + Fh[23] + Fh[1101] + Fh[23] + Fh[394],
        TA = Fh[347] + Fh[23] + Fh[395] + Fh[23] + Fh[180] + Fh[23] + Fh[716],
        kA = Fh[69] + Fh[42] + Fh[1130] + Fh[46] + Fh[282] + Fh[759] + Fh[760],
        MA = Fh[69] + Fh[42] + Fh[1130] + Fh[46] + Fh[282] + Fh[1] + Fh[758],
        OA = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[237],
        IA = Fh[401] + Fh[46] + Fh[1133],
        SA = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[1114],
        jA = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[724] + Fh[23] + Fh[216],
        AA = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1106] + Fh[23] + Fh[724],
        CA = Fh[261] + Fh[88] + Fh[275],
        LA = Fh[180] + Fh[23] + Fh[1101] + Fh[23] + Fh[716],
        PA = Fh[333] + Fh[23] + Fh[180] + Fh[23] + Fh[1094] + Fh[23] + Fh[237],
        RA = Fh[333] + Fh[23] + Fh[180] + Fh[23] + Fh[1101],
        DA = Fh[347] + Fh[23] + Fh[393] + Fh[23] + Fh[171],
        NA = Fh[261] + Fh[1] + Fh[2] + Fh[184] + Fh[212],
        BA = Fh[261] + Fh[88] + Fh[166],
        $A = Fh[28] + Fh[261] + Fh[1] + Fh[313],
        FA = Fh[23] + Fh[81] + Fh[267] + Fh[356],
        GA = Fh[32] + Fh[62] + Fh[1134] + Fh[26] + Fh[27] + Fh[1] + Fh[519],
        zA = Fh[435] + Fh[46] + Fh[1133],
        qA = Fh[435] + Fh[62] + Fh[1134] + Fh[26] + Fh[75],
        YA = Fh[359] + Fh[26] + Fh[75],
        HA = Fh[108] + Fh[62] + Fh[1134],
        UA = Fh[1135],
        WA = Fh[225] + Fh[1] + Fh[2],
        VA = Fh[183],
        XA = Fh[28] + Fh[436] + Fh[62] + Fh[757],
        KA = Fh[28] + Fh[430] + Fh[15] + Fh[117] + Fh[113],
        ZA = Fh[28] + Fh[436] + Fh[88] + Fh[755] + Fh[15] + Fh[117] + Fh[113],
        JA = Fh[28] + Fh[436] + Fh[88] + Fh[755] + Fh[62] + Fh[735],
        QA = Fh[23] + Fh[81] + Fh[267] + Fh[1129],
        tC = Fh[28] + Fh[310] + Fh[1] + Fh[431],
        iC = Fh[28] + Fh[310] + Fh[1] + Fh[431] + Fh[62] + Fh[739] + Fh[218] + Fh[219],
        nC = Fh[28] + Fh[430] + Fh[1] + Fh[431],
        eC = Fh[28] + Fh[430] + Fh[62] + Fh[735],
        sC = Fh[28] + Fh[430] + Fh[15] + Fh[117] + Fh[114],
        hC = Fh[399] + Fh[110] + Fh[400] + Fh[1] + Fh[2],
        rC = Fh[28] + Fh[261] + Fh[62] + Fh[217],
        aC = Fh[392] + Fh[1] + Fh[472],
        oC = Fh[391] + Fh[23] + Fh[1136] + Fh[23] + Fh[1137],
        fC = Fh[28] + Fh[1010],
        cC = Fh[28] + Fh[261] + Fh[88] + Fh[577],
        uC = Fh[23] + Fh[763] + Fh[62] + Fh[217],
        _C = Fh[165] + Fh[218] + Fh[1138] + Fh[62] + Fh[217],
        dC = Fh[28] + Fh[261] + Fh[44] + Fh[1131] + Fh[269] + Fh[270],
        lC = Fh[28] + Fh[1104] + Fh[110] + Fh[292],
        vC = Fh[28] + Fh[197] + Fh[198] + Fh[199],
        bC = Fh[28] + Fh[178] + Fh[1] + Fh[431],
        yC = Fh[28] + Fh[178] + Fh[269] + Fh[270],
        gC = Fh[88] + Fh[577],
        mC = Fh[44] + Fh[1131] + Fh[269] + Fh[270],
        xC = Fh[1112] + Fh[23] + Fh[1108],
        EC = Fh[28] + Fh[172] + Fh[88] + Fh[166],
        pC = Fh[28] + Fh[172] + Fh[44] + Fh[471],
        wC = Fh[28] + Fh[172] + Fh[88] + Fh[365],
        TC = Fh[44] + Fh[984],
        kC = Fh[28] + Fh[261] + Fh[44] + Fh[984],
        MC = Fh[28] + Fh[172],
        OC = Fh[1060] + Fh[62] + Fh[217],
        IC = Fh[28] + Fh[261] + Fh[44] + Fh[1139] + Fh[42] + Fh[1130],
        SC = Fh[28] + Fh[261] + Fh[110] + Fh[159] + Fh[42] + Fh[1130],
        jC = Fh[225] + Fh[110] + Fh[159] + Fh[42] + Fh[1130],
        AC = Fh[28] + Fh[87] + Fh[42] + Fh[1130],
        CC = Fh[28] + Fh[87] + Fh[42] + Fh[1130] + Fh[15] + Fh[117],
        LC = Fh[87] + Fh[42] + Fh[1130] + Fh[46] + Fh[1084],
        PC = Fh[0] + Fh[46] + Fh[1084],
        RC = Fh[28] + Fh[87] + Fh[42] + Fh[1130] + Fh[88] + Fh[275],
        DC = Fh[87] + Fh[42] + Fh[1130] + Fh[88] + Fh[1055],
        NC = Fh[87] + Fh[42] + Fh[1130] + Fh[44] + Fh[1131] + Fh[269] + Fh[270],
        BC = Fh[269] + Fh[270],
        $C = Fh[28] + Fh[69] + Fh[42] + Fh[1130],
        FC = Fh[28] + Fh[69] + Fh[42] + Fh[1130] + Fh[15] + Fh[117],
        GC = Fh[28] + Fh[69] + Fh[42] + Fh[1130] + Fh[88] + Fh[275],
        zC = Fh[28] + Fh[69] + Fh[42] + Fh[1130] + Fh[88] + Fh[166],
        qC = Fh[69] + Fh[42] + Fh[1130] + Fh[88] + Fh[1055],
        YC = Fh[1071] + Fh[269] + Fh[270],
        HC = Fh[69] + Fh[42] + Fh[1130] + Fh[46] + Fh[1084],
        UC = Fh[42] + Fh[1130] + Fh[88] + Fh[195],
        WC = Fh[42] + Fh[1130] + Fh[88] + Fh[195] + Fh[88] + Fh[365],
        VC = Fh[42] + Fh[1130] + Fh[88] + Fh[1055],
        XC = Fh[42] + Fh[1130] + Fh[46] + Fh[282] + Fh[56] + Fh[281],
        KC = Fh[42] + Fh[1130] + Fh[46] + Fh[282] + Fh[56] + Fh[281] + Fh[15] + Fh[117],
        ZC = Fh[42] + Fh[1130] + Fh[44] + Fh[1131] + Fh[1] + Fh[431],
        JC = Fh[42] + Fh[1130] + Fh[44] + Fh[1131] + Fh[269] + Fh[270],
        QC = Fh[42] + Fh[1130] + Fh[46] + Fh[282] + Fh[1] + Fh[758],
        tL = Fh[42] + Fh[1130] + Fh[46] + Fh[282] + Fh[759] + Fh[760],
        iL = Fh[42] + Fh[1130] + Fh[15] + Fh[1132],
        nL = Fh[42] + Fh[1130] + Fh[15] + Fh[1132] + Fh[88] + Fh[365],
        eL = Fh[224] + Fh[42] + Fh[1130],
        sL = Fh[44] + Fh[1139] + Fh[42] + Fh[1130],
        hL = Fh[110] + Fh[159] + Fh[42] + Fh[1130],
        rL = Fh[108] + Fh[1] + Fh[313],
        aL = Fh[1140] + Fh[62] + Fh[1141],
        oL = Fh[0] + Fh[118] + Fh[117],
        fL = Fh[53] + Fh[26] + Fh[1142] + Fh[15] + Fh[1143],
        cL = Fh[0] + Fh[62] + Fh[1038] + Fh[46] + Fh[1133],
        uL = Fh[24] + Fh[62] + Fh[1038] + Fh[46] + Fh[1133],
        _L = Fh[1144],
        dL = Fh[225] + Fh[26] + Fh[121],
        lL = Fh[224] + Fh[104] + Fh[1145] + Fh[46] + Fh[282],
        vL = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[1146],
        bL = Fh[694] + Fh[76],
        yL = Fh[366] + Fh[23] + Fh[362] + Fh[23] + Fh[367] + Fh[23] + Fh[494],
        gL = Fh[1060] + Fh[88] + Fh[396],
        mL = Fh[23] + Fh[81] + Fh[350] + Fh[607],
        xL = Fh[72] + Fh[1147],
        EL = Fh[72] + Fh[1148] + Fh[1149] + Fh[350],
        pL = Fh[72] + Fh[1150] + Fh[30] + Fh[307],
        wL = Fh[23] + Fh[1151],
        TL = Fh[455],
        kL = Fh[1152],
        ML = Fh[1153],
        OL = Fh[59] + Fh[30] + Fh[31],
        IL = Fh[232] + Fh[110] + Fh[1154],
        SL = Fh[0] + Fh[56] + Fh[1155] + Fh[184] + Fh[461],
        jL = Fh[0] + Fh[56] + Fh[186],
        AL = Fh[816] + Fh[110] + Fh[159] + Fh[46] + Fh[1156],
        CL = Fh[1157] + Fh[42] + Fh[560],
        LL = Fh[314] + Fh[219],
        PL = Fh[110] + Fh[133],
        RL = Fh[24] + Fh[110] + Fh[133],
        DL = Fh[24] + Fh[88] + Fh[275] + Fh[314] + Fh[219],
        NL = Fh[23] + Fh[1158] + Fh[218] + Fh[437],
        BL = Fh[23] + Fh[81] + Fh[267] + Fh[517],
        $L = Fh[1159],
        FL = Fh[112] + Fh[26] + Fh[75],
        GL = Fh[527],
        zL = Fh[32] + Fh[30] + Fh[160] + Fh[1] + Fh[1160],
        qL = Fh[1161] + Fh[23] + Fh[1162],
        YL = Fh[32] + Fh[184] + Fh[611] + Fh[30] + Fh[31],
        HL = Fh[1163],
        UL = Fh[1164],
        WL = Fh[1165],
        VL = Fh[1166],
        XL = Fh[1140] + Fh[46] + Fh[1167] + Fh[110] + Fh[159],
        KL = Fh[108] + Fh[30] + Fh[160],
        ZL = Fh[0] + Fh[56] + Fh[57] + Fh[88] + Fh[365],
        JL = Fh[1168] + Fh[62] + Fh[217],
        QL = Fh[1011] + Fh[62] + Fh[217],
        tP = Fh[59] + Fh[42] + Fh[43],
        iP = Fh[23] + Fh[81] + Fh[82] + Fh[1169] + Fh[62] + Fh[217],
        nP = Fh[3] + Fh[46] + Fh[1170],
        eP = Fh[618] + Fh[42] + Fh[298],
        sP = Fh[169] + Fh[88] + Fh[681],
        hP = Fh[618] + Fh[15] + Fh[462],
        rP = Fh[1078] + Fh[88] + Fh[577],
        aP = Fh[23] + Fh[81] + Fh[350] + Fh[995],
        oP = Fh[53] + Fh[184] + Fh[271],
        fP = Fh[572] + Fh[110] + Fh[159],
        cP = Fh[618] + Fh[110] + Fh[159] + Fh[15] + Fh[1171],
        uP = Fh[618] + Fh[42] + Fh[43],
        _P = Fh[1172] + Fh[23] + Fh[1173],
        dP = Fh[23] + Fh[1174] + Fh[42] + Fh[43],
        lP = Fh[161] + Fh[26] + Fh[1008],
        vP = Fh[1175],
        bP = Fh[1176],
        yP = Fh[165] + Fh[46] + Fh[1084],
        gP = Fh[53] + Fh[218] + Fh[1177],
        mP = Fh[23] + Fh[1164] + Fh[44] + Fh[1037],
        xP = Fh[1019] + Fh[30] + Fh[1178],
        EP = Fh[108] + Fh[1] + Fh[610] + Fh[184] + Fh[611],
        pP = Fh[11] + Fh[1] + Fh[610] + Fh[184] + Fh[611],
        wP = Fh[1179],
        TP = Fh[1180],
        kP = Fh[56] + Fh[1181] + Fh[49] + Fh[30] + Fh[1182] + Fh[228],
        MP = Fh[1161] + Fh[23] + Fh[1183],
        OP = Fh[88] + Fh[275],
        IP = Fh[46] + Fh[282],
        SP = Fh[88] + Fh[1055],
        jP = Fh[24] + Fh[30] + Fh[389],
        AP = Fh[30] + Fh[389],
        CP = Fh[457] + Fh[26] + Fh[75],
        LP = Fh[1184] + Fh[30] + Fh[280] + Fh[46] + Fh[1133],
        PP = Fh[46] + Fh[1133] + Fh[49] + Fh[1] + Fh[1185] + Fh[129] + Fh[298] + Fh[49] + Fh[30] + Fh[280],
        RP = Fh[1186],
        DP = Fh[1187] + Fh[30] + Fh[1188],
        NP = Fh[1189],
        BP = Fh[23] + Fh[81] + Fh[82] + Fh[554] + Fh[218] + Fh[219],
        $P = Fh[1073] + Fh[218] + Fh[219],
        FP = Fh[457] + Fh[218] + Fh[219],
        GP = Fh[358] + Fh[1] + Fh[519] + Fh[56] + Fh[520],
        zP = Fh[23] + Fh[1011] + Fh[62] + Fh[217],
        qP = Fh[23] + Fh[1168] + Fh[62] + Fh[217],
        YP = Fh[1190] + Fh[23] + Fh[1191],
        HP = Fh[1192] + Fh[104] + Fh[1193],
        UP = Fh[220] + Fh[104] + Fh[1194],
        WP = Fh[1074] + Fh[23] + Fh[1079] + Fh[23] + Fh[216],
        VP = Fh[23] + Fh[81] + Fh[1195],
        XP = Fh[1074] + Fh[23] + Fh[362] + Fh[23] + Fh[334],
        KP = Fh[1074] + Fh[23] + Fh[362] + Fh[23] + Fh[698],
        ZP = Fh[1074] + Fh[23] + Fh[1079] + Fh[23] + Fh[181],
        JP = Fh[1196] + Fh[1028],
        QP = Fh[269] + Fh[1057] + Fh[391],
        tR = Fh[1197] + Fh[152],
        iR = Fh[1198] + Fh[49] + Fh[307] + Fh[76] + Fh[80] + Fh[607] + Fh[49] + Fh[1199] + Fh[95] + Fh[619],
        nR = Fh[857],
        eR = Fh[76] + Fh[411] + Fh[95] + Fh[269] + Fh[412] + Fh[95] + Fh[314] + Fh[413] + Fh[49] + Fh[415],
        sR = Fh[1198] + Fh[101] + Fh[206] + Fh[102] + Fh[273] + Fh[95] + Fh[242] + Fh[497] + Fh[66] + Fh[67] + Fh[307] + Fh[422] + Fh[307] + Fh[422] + Fh[307] + Fh[422] + Fh[307] + Fh[76] + Fh[350] + Fh[71],
        hR = Fh[76] + Fh[411] + Fh[95] + Fh[269] + Fh[412] + Fh[95] + Fh[314] + Fh[413],
        rR = Fh[1198] + Fh[101] + Fh[307] + Fh[102],
        aR = Fh[1200],
        oR = Fh[101] + Fh[1198] + Fh[49] + Fh[308] + Fh[607] + Fh[49] + Fh[1201] + Fh[95] + Fh[786] + Fh[67] + Fh[307] + Fh[76] + Fh[351] + Fh[422] + Fh[307] + Fh[422] + Fh[307] + Fh[76] + Fh[351] + Fh[422] + Fh[206] + Fh[71],
        fR = Fh[76] + Fh[411] + Fh[95] + Fh[269] + Fh[412] + Fh[95] + Fh[314] + Fh[413] + Fh[101] + Fh[434],
        cR = Fh[1198] + Fh[101] + Fh[206] + Fh[102],
        uR = Fh[101] + Fh[1198] + Fh[49] + Fh[307] + Fh[76] + Fh[308] + Fh[607] + Fh[49] + Fh[768],
        _R = Fh[23] + Fh[86],
        dR = Fh[23] + Fh[415],
        lR = Fh[76] + Fh[411] + Fh[95] + Fh[269] + Fh[412] + Fh[95] + Fh[88] + Fh[542] + Fh[62] + Fh[1202],
        vR = Fh[1203] + Fh[497] + Fh[80] + Fh[152] + Fh[1204] + Fh[279] + Fh[497] + Fh[1007] + Fh[102] + Fh[1205] + Fh[95] + Fh[1206] + Fh[497] + Fh[263] + Fh[95] + Fh[1205] + Fh[102] + Fh[1205] + Fh[95] + Fh[430] + Fh[1207] + Fh[429] + Fh[49] + Fh[307] + Fh[152] + Fh[49] + Fh[307] + Fh[152] + Fh[49] + Fh[206] + Fh[152] + Fh[1204] + Fh[273] + Fh[95] + Fh[242] + Fh[497] + Fh[66] + Fh[67] + Fh[1208] + Fh[68] + Fh[1208] + Fh[68] + Fh[1208] + Fh[68] + Fh[307] + Fh[76] + Fh[308] + Fh[1209] + Fh[263] + Fh[95] + Fh[495] + Fh[497] + Fh[349] + Fh[152] + Fh[102] + Fh[1203] + Fh[497] + Fh[206] + Fh[152] + Fh[102],
        bR = Fh[76] + Fh[411] + Fh[95] + Fh[269] + Fh[412] + Fh[95] + Fh[88] + Fh[542] + Fh[62] + Fh[1202] + Fh[76] + Fh[434] + Fh[1210] + Fh[411] + Fh[95] + Fh[269] + Fh[412] + Fh[95] + Fh[88] + Fh[542] + Fh[62] + Fh[1202] + Fh[101] + Fh[434],
        yR = Fh[1203] + Fh[95] + Fh[85] + Fh[497] + Fh[351] + Fh[152] + Fh[102],
        gR = Fh[1203] + Fh[95] + Fh[86] + Fh[497] + Fh[351] + Fh[152] + Fh[102],
        mR = Fh[76] + Fh[411] + Fh[95] + Fh[269] + Fh[412] + Fh[95] + Fh[88] + Fh[542] + Fh[26] + Fh[421],
        xR = Fh[101] + Fh[1198] + Fh[49] + Fh[308] + Fh[607] + Fh[49] + Fh[1201] + Fh[95] + Fh[786] + Fh[67] + Fh[307] + Fh[76] + Fh[351] + Fh[422] + Fh[307] + Fh[422] + Fh[307] + Fh[76] + Fh[351] + Fh[422] + Fh[206] + Fh[1209],
        ER = Fh[23] + Fh[92] + Fh[56] + Fh[595] + Fh[88] + Fh[682],
        pR = Fh[23] + Fh[90] + Fh[56] + Fh[595] + Fh[88] + Fh[682],
        wR = Fh[411] + Fh[95] + Fh[269] + Fh[412] + Fh[95] + Fh[88] + Fh[542] + Fh[26] + Fh[421],
        TR = Fh[23] + Fh[81] + Fh[350] + Fh[159],
        kR = Fh[62] + Fh[1211],
        MR = Fh[1212] + Fh[23] + Fh[1213],
        OR = Fh[1212] + Fh[23] + Fh[362],
        IR = Fh[137] + Fh[285] + Fh[104] + Fh[1045],
        SR = Fh[1214] + Fh[104] + Fh[1193],
        jR = Fh[32] + Fh[42] + Fh[43] + Fh[88] + Fh[446],
        AR = Fh[32] + Fh[42] + Fh[43] + Fh[30] + Fh[445],
        CR = Fh[23] + Fh[87] + Fh[1215],
        LR = Fh[23] + Fh[69] + Fh[1215],
        PR = Fh[23] + Fh[87] + Fh[1216],
        RR = Fh[23] + Fh[69] + Fh[1216],
        DR = Fh[23] + Fh[87] + Fh[88] + Fh[577],
        NR = Fh[23] + Fh[69] + Fh[88] + Fh[577],
        BR = Fh[1217],
        $R = Fh[741] + Fh[110] + Fh[286],
        FR = Fh[1218] + Fh[110] + Fh[292],
        GR = Fh[1219] + Fh[23] + Fh[1220] + Fh[23] + Fh[171] + Fh[23] + Fh[1221],
        zR = Fh[1219] + Fh[23] + Fh[1107] + Fh[23] + Fh[1220] + Fh[23] + Fh[171] + Fh[23] + Fh[1222],
        qR = Fh[1043],
        YR = Fh[23] + Fh[1223] + Fh[184] + Fh[163],
        HR = Fh[1224],
        UR = Fh[56] + Fh[1225] + Fh[184] + Fh[611],
        WR = Fh[1226],
        VR = Fh[224] + Fh[26] + Fh[151],
        XR = Fh[100] + Fh[56] + Fh[1227],
        KR = Fh[108] + Fh[56] + Fh[1225],
        ZR = Fh[616],
        JR = Fh[1085] + Fh[56] + Fh[1227],
        QR = Fh[24] + Fh[30] + Fh[389] + Fh[62] + Fh[210] + Fh[184] + Fh[611],
        tD = Fh[1140] + Fh[46] + Fh[1167] + Fh[44] + Fh[1139],
        iD = Fh[1228],
        nD = Fh[69] + Fh[46] + Fh[1030] + Fh[26] + Fh[151],
        eD = Fh[1229],
        sD = Fh[23] + Fh[81] + Fh[1230],
        hD = Fh[1073] + Fh[26] + Fh[151],
        rD = Fh[1231],
        aD = Fh[23] + Fh[81] + Fh[267] + Fh[658],
        oD = Fh[1] + Fh[1232] + Fh[30] + Fh[389] + Fh[184] + Fh[611],
        fD = Fh[24] + Fh[88] + Fh[275] + Fh[62] + Fh[210] + Fh[184] + Fh[611],
        cD = Fh[1] + Fh[1232] + Fh[88] + Fh[275] + Fh[184] + Fh[611],
        uD = Fh[24] + Fh[46] + Fh[282] + Fh[62] + Fh[210] + Fh[184] + Fh[611],
        _D = Fh[1] + Fh[1232] + Fh[46] + Fh[282] + Fh[184] + Fh[611],
        dD = Fh[30] + Fh[389] + Fh[391],
        lD = Fh[1] + Fh[1232] + Fh[88] + Fh[1233] + Fh[30] + Fh[389] + Fh[184] + Fh[611],
        vD = Fh[1234],
        bD = Fh[411] + Fh[95] + Fh[46] + Fh[1133] + Fh[30] + Fh[1235],
        yD = Fh[1236] + Fh[1237] + Fh[1238] + Fh[30] + Fh[49] + Fh[206] + Fh[152],
        gD = Fh[350] + Fh[152],
        mD = Fh[1205] + Fh[88] + Fh[755],
        xD = Fh[1239],
        ED = Fh[32] + Fh[35] + Fh[36] + Fh[1] + Fh[519],
        pD = Fh[1240],
        wD = Fh[61] + Fh[30] + Fh[1241],
        TD = Fh[1242],
        kD = Fh[1243] + Fh[124] + Fh[125],
        MD = Fh[59] + Fh[30] + Fh[1241],
        OD = Fh[32] + Fh[88] + Fh[166] + Fh[1] + Fh[519],
        ID = Fh[1106] + Fh[23] + Fh[1244] + Fh[23] + Fh[1245] + Fh[23] + Fh[1246] + Fh[23] + Fh[1247] + Fh[23] + Fh[1248],
        SD = Fh[24] + Fh[996],
        jD = Fh[59] + Fh[30] + Fh[1241] + Fh[198] + Fh[1249] + Fh[1] + Fh[569] + Fh[15] + Fh[81] + Fh[198] + Fh[556],
        AD = Fh[32] + Fh[1] + Fh[569] + Fh[15] + Fh[81] + Fh[198] + Fh[556],
        CD = Fh[53] + Fh[30] + Fh[1250],
        LD = Fh[46] + Fh[1133] + Fh[30] + Fh[1235],
        PD = Fh[848] + Fh[30] + Fh[1235],
        RD = Fh[53] + Fh[30] + Fh[1251],
        DD = Fh[69] + Fh[1] + Fh[309],
        ND = Fh[616] + Fh[46] + Fh[1133] + Fh[30] + Fh[1241],
        BD = Fh[4] + Fh[30] + Fh[389] + Fh[62] + Fh[1038],
        $D = Fh[366] + Fh[23] + Fh[1116],
        FD = Fh[456],
        GD = Fh[1252] + Fh[49] + Fh[227] + Fh[228],
        zD = Fh[49] + Fh[204] + Fh[49],
        qD = Fh[558] + Fh[30] + Fh[1182],
        YD = Fh[1073] + Fh[56] + Fh[1253] + Fh[30] + Fh[160],
        HD = Fh[53] + Fh[88] + Fh[1254],
        UD = Fh[1161] + Fh[23] + Fh[1255] + Fh[23] + Fh[1256],
        WD = Fh[1161] + Fh[23] + Fh[1257],
        VD = Fh[330] + Fh[30] + Fh[1182],
        XD = Fh[317] + Fh[30] + Fh[318] + Fh[104] + Fh[1029] + Fh[35] + Fh[438] + Fh[391],
        KD = Fh[321] + Fh[198] + Fh[1258],
        ZD = Fh[1161] + Fh[23] + Fh[1255] + Fh[23] + Fh[1259],
        JD = Fh[1260] + Fh[23] + Fh[1256],
        QD = Fh[163] + Fh[88] + Fh[577],
        tN = Fh[232] + Fh[26] + Fh[27] + Fh[1] + Fh[519] + Fh[56] + Fh[520],
        iN = Fh[23] + Fh[1261],
        nN = Fh[23] + Fh[1262] + Fh[26] + Fh[1263],
        eN = Fh[23] + Fh[81] + Fh[82] + Fh[1185] + Fh[30] + Fh[1241],
        sN = Fh[224] + Fh[46] + Fh[282] + Fh[184] + Fh[163],
        hN = Fh[11] + Fh[56] + Fh[1225],
        rN = Fh[72] + Fh[1264],
        aN = Fh[23] + Fh[81] + Fh[350] + Fh[488],
        oN = Fh[750] + Fh[23] + Fh[1255] + Fh[23] + Fh[395],
        fN = Fh[53] + Fh[1] + Fh[1265] + Fh[26] + Fh[151],
        cN = Fh[11] + Fh[26] + Fh[200] + Fh[88] + Fh[754] + Fh[62] + Fh[210] + Fh[184] + Fh[212],
        uN = Fh[53] + Fh[104] + Fh[1266],
        _N = Fh[53] + Fh[44] + Fh[1139],
        dN = Fh[498] + Fh[26] + Fh[121],
        lN = Fh[576] + Fh[88] + Fh[754],
        vN = Fh[479] + Fh[88] + Fh[754],
        bN = Fh[498] + Fh[314] + Fh[133] + Fh[26] + Fh[121],
        yN = Fh[1122],
        gN = Fh[23] + Fh[81] + Fh[82] + Fh[163],
        mN = Fh[1061],
        xN = Fh[53] + Fh[30] + Fh[445] + Fh[26] + Fh[151],
        EN = Fh[386] + Fh[23] + Fh[1257],
        pN = Fh[386] + Fh[23] + Fh[1255] + Fh[23] + Fh[1259],
        wN = Fh[719] + Fh[23] + Fh[1267] + Fh[23] + Fh[1094] + Fh[23] + Fh[237],
        TN = Fh[23] + Fh[1268] + Fh[184] + Fh[163],
        kN = Fh[1269] + Fh[23] + Fh[1256],
        MN = Fh[23] + Fh[1042] + Fh[110] + Fh[565],
        ON = Fh[1269] + Fh[23] + Fh[1259],
        IN = Fh[719] + Fh[23] + Fh[1267] + Fh[23] + Fh[1091],
        SN = Fh[23] + Fh[983],
        jN = Fh[317] + Fh[30] + Fh[318] + Fh[35] + Fh[438] + Fh[391],
        AN = Fh[1269] + Fh[23] + Fh[1270],
        CN = Fh[407] + Fh[104] + Fh[1271] + Fh[88] + Fh[685] + Fh[62] + Fh[210] + Fh[104] + Fh[1272] + Fh[62] + Fh[414],
        LN = Fh[1273],
        PN = Fh[1274],
        RN = Fh[23] + Fh[490] + Fh[350] + Fh[26] + Fh[27] + Fh[1] + Fh[519] + Fh[46] + Fh[1275],
        DN = Fh[23] + Fh[202] + Fh[26] + Fh[151],
        NN = Fh[1276] + Fh[95] + Fh[455],
        BN = Fh[1277] + Fh[95] + Fh[455],
        $N = Fh[1278] + Fh[95] + Fh[455],
        FN = Fh[66] + Fh[67] + Fh[307] + Fh[422] + Fh[1279] + Fh[422] + Fh[307] + Fh[422] + Fh[206] + Fh[71],
        GN = Fh[72] + Fh[1280] + Fh[307],
        zN = Fh[23] + Fh[1281],
        qN = Fh[53] + Fh[104] + Fh[1282],
        YN = Fh[23] + Fh[81] + Fh[1283],
        HN = Fh[763] + Fh[62] + Fh[217],
        UN = Fh[1284],
        WN = Fh[1285],
        VN = Fh[1286] + Fh[23] + Fh[1259],
        XN = Fh[104] + Fh[1287] + Fh[184] + Fh[611],
        KN = Fh[1019] + Fh[88] + Fh[1288],
        ZN = Fh[1269],
        JN = Fh[1289] + Fh[88] + Fh[1288] + Fh[42] + Fh[1290],
        QN = Fh[450] + Fh[42] + Fh[1290],
        tB = Fh[1291] + Fh[23] + Fh[1292],
        iB = Fh[1291] + Fh[23] + Fh[1293],
        nB = Fh[411] + Fh[95] + Fh[110] + Fh[1294],
        eB = Fh[72] + Fh[1295],
        sB = Fh[206] + Fh[152] + Fh[49] + Fh[1236] + Fh[1237] + Fh[56] + Fh[635] + Fh[56] + Fh[635] + Fh[56] + Fh[635],
        hB = Fh[80] + Fh[152] + Fh[49] + Fh[349] + Fh[152],
        rB = Fh[23] + Fh[81] + Fh[1296],
        aB = Fh[23] + Fh[435] + Fh[110] + Fh[565],
        oB = Fh[23] + Fh[81] + Fh[267] + Fh[749],
        fB = Fh[0] + Fh[110] + Fh[1294],
        cB = Fh[1054] + Fh[110] + Fh[292],
        uB = Fh[1297] + Fh[1298] + Fh[1299],
        _B = Fh[173] + Fh[1] + Fh[1300],
        dB = Fh[1301] + Fh[996],
        lB = Fh[23] + Fh[1302] + Fh[110] + Fh[565],
        vB = Fh[1054] + Fh[56] + Fh[1303],
        bB = Fh[23] + Fh[81] + Fh[267] + Fh[645],
        yB = Fh[407] + Fh[110] + Fh[1294],
        gB = Fh[407] + Fh[198] + Fh[1304] + Fh[637] + Fh[1305],
        mB = Fh[618] + Fh[62] + Fh[210] + Fh[218] + Fh[541] + Fh[30] + Fh[31],
        xB = Fh[1043] + Fh[76] + Fh[330] + Fh[76] + Fh[616],
        EB = Fh[1043] + Fh[76] + Fh[1306],
        pB = Fh[1043] + Fh[76] + Fh[330] + Fh[76] + Fh[983],
        wB = Fh[1043] + Fh[76] + Fh[1307],
        TB = Fh[1043] + Fh[76] + Fh[1308],
        kB = Fh[1122] + Fh[76] + Fh[330] + Fh[76] + Fh[616],
        MB = Fh[1122] + Fh[76] + Fh[1306],
        OB = Fh[1122] + Fh[76] + Fh[330] + Fh[76] + Fh[983],
        IB = Fh[455] + Fh[76] + Fh[616],
        SB = Fh[1309],
        jB = Fh[455] + Fh[76] + Fh[983],
        AB = Fh[1310],
        CB = Fh[1107] + Fh[23] + Fh[1259],
        LB = Fh[202] + Fh[76] + Fh[983],
        PB = Fh[1174] + Fh[76] + Fh[616],
        RB = Fh[1260] + Fh[23] + Fh[1259],
        DB = Fh[1174] + Fh[76] + Fh[983],
        NB = Fh[1076] + Fh[76] + Fh[1047],
        BB = Fh[355] + Fh[76] + Fh[401],
        $B = Fh[450] + Fh[76] + Fh[616],
        FB = Fh[450] + Fh[76] + Fh[1311],
        GB = Fh[450] + Fh[76] + Fh[983],
        zB = Fh[533] + Fh[23] + Fh[530],
        qB = Fh[563] + Fh[76] + Fh[546],
        YB = Fh[23] + Fh[457] + Fh[88] + Fh[682],
        HB = Fh[23] + Fh[32] + Fh[30] + Fh[160] + Fh[104] + Fh[605],
        UB = Fh[23] + Fh[32] + Fh[30] + Fh[160] + Fh[1] + Fh[513],
        WB = Fh[23] + Fh[1312] + Fh[184] + Fh[611],
        VB = Fh[23] + Fh[94] + Fh[1] + Fh[610] + Fh[184] + Fh[611] + Fh[46] + Fh[506],
        XB = Fh[23] + Fh[1313] + Fh[1] + Fh[610] + Fh[184] + Fh[611] + Fh[46] + Fh[506],
        KB = Fh[1073] + Fh[184] + Fh[611] + Fh[218] + Fh[219],
        ZB = Fh[0] + Fh[184] + Fh[611] + Fh[184] + Fh[1314],
        JB = Fh[336] + Fh[184] + Fh[609],
        QB = Fh[1219] + Fh[23] + Fh[234] + Fh[23] + Fh[1315],
        t$ = Fh[1316],
        i$ = Fh[1219] + Fh[23] + Fh[234] + Fh[23] + Fh[719],
        n$ = Fh[436],
        e$ = Fh[1219] + Fh[23] + Fh[234] + Fh[23] + Fh[1317],
        s$ = Fh[1318],
        h$ = Fh[1219] + Fh[23] + Fh[234] + Fh[23] + Fh[1319],
        r$ = Fh[1320],
        a$ = Fh[24] + Fh[76] + Fh[1321] + Fh[76] + Fh[355],
        o$ = Fh[24] + Fh[76] + Fh[355],
        f$ = Fh[1219] + Fh[23] + Fh[234] + Fh[23] + Fh[1322] + Fh[23] + Fh[333],
        c$ = Fh[24] + Fh[76] + Fh[1092],
        u$ = Fh[1219] + Fh[23] + Fh[234] + Fh[23] + Fh[1322] + Fh[23] + Fh[180],
        _$ = Fh[24] + Fh[76] + Fh[197],
        d$ = Fh[26] + Fh[1185] + Fh[184] + Fh[611],
        l$ = Fh[88] + Fh[685] + Fh[184] + Fh[611],
        v$ = Fh[198] + Fh[1304] + Fh[637] + Fh[1305] + Fh[184] + Fh[611],
        b$ = Fh[30] + Fh[1323] + Fh[184] + Fh[611],
        y$ = Fh[110] + Fh[1294] + Fh[184] + Fh[611],
        g$ = Fh[104] + Fh[1271] + Fh[88] + Fh[685] + Fh[184] + Fh[611],
        m$ = Fh[46] + Fh[1324],
        x$ = Fh[0] + Fh[602] + Fh[217],
        E$ = Fh[1325],
        p$ = Fh[1326],
        w$ = Fh[481],
        T$ = Fh[1099] + Fh[42] + Fh[1327],
        k$ = Fh[0] + Fh[46] + Fh[354] + Fh[104] + Fh[1328],
        M$ = Fh[1329] + Fh[23] + Fh[494],
        O$ = Fh[1329] + Fh[23] + Fh[375],
        I$ = Fh[1329] + Fh[23] + Fh[492],
        S$ = Fh[1329] + Fh[23] + Fh[376],
        j$ = Fh[1329] + Fh[23] + Fh[494] + Fh[23] + Fh[376],
        A$ = Fh[1329] + Fh[23] + Fh[494] + Fh[23] + Fh[377],
        C$ = Fh[1329] + Fh[23] + Fh[375] + Fh[23] + Fh[377],
        L$ = Fh[1329] + Fh[23] + Fh[377] + Fh[23] + Fh[375],
        P$ = Fh[1329] + Fh[23] + Fh[377] + Fh[23] + Fh[494],
        R$ = Fh[1329] + Fh[23] + Fh[376] + Fh[23] + Fh[375],
        D$ = Fh[1329] + Fh[23] + Fh[376] + Fh[23] + Fh[494],
        N$ = Fh[1330],
        B$ = Fh[1331] + Fh[76] + Fh[1332],
        $$ = Fh[1330] + Fh[76] + Fh[517],
        F$ = Fh[1330] + Fh[76] + Fh[1028],
        G$ = Fh[1097] + Fh[23] + Fh[362] + Fh[23] + Fh[1333],
        z$ = Fh[1097] + Fh[23] + Fh[362] + Fh[23] + Fh[1333] + Fh[23] + Fh[372],
        q$ = Fh[1097] + Fh[23] + Fh[362] + Fh[23] + Fh[1333] + Fh[23] + Fh[374],
        Y$ = Fh[1097] + Fh[23] + Fh[362] + Fh[23] + Fh[1334] + Fh[23] + Fh[1335],
        H$ = Fh[53] + Fh[443] + Fh[1336] + Fh[56] + Fh[1337],
        U$ = Fh[34] + Fh[88] + Fh[166],
        W$ = Fh[0] + Fh[314] + Fh[219] + Fh[88] + Fh[166],
        V$ = Fh[319] + Fh[1] + Fh[2] + Fh[56] + Fh[1337],
        X$ = Fh[0] + Fh[1338] + Fh[758],
        K$ = Fh[0] + Fh[1339] + Fh[758],
        Z$ = Fh[0] + Fh[46] + Fh[354] + Fh[110] + Fh[292],
        J$ = Fh[517] + Fh[269] + Fh[758],
        Q$ = Fh[1028] + Fh[269] + Fh[758],
        tF = Fh[253] + Fh[110] + Fh[292],
        iF = Fh[23] + Fh[81] + Fh[1340],
        nF = Fh[1341],
        eF = Fh[1342],
        sF = Fh[1085] + Fh[46] + Fh[354],
        hF = Fh[319] + Fh[62] + Fh[217],
        rF = Fh[23] + Fh[81] + Fh[82] + Fh[995],
        aF = Fh[23] + Fh[1343],
        oF = Fh[258] + Fh[1344],
        fF = Fh[258] + Fh[1345],
        cF = Fh[23] + Fh[1346] + Fh[26] + Fh[1347] + Fh[1] + Fh[2] + Fh[56] + Fh[1337],
        uF = Fh[481] + Fh[113],
        _F = Fh[481] + Fh[114],
        dF = Fh[23] + Fh[81] + Fh[350] + Fh[210],
        lF = Fh[23] + Fh[81] + Fh[350] + Fh[487],
        vF = Fh[23] + Fh[81] + Fh[350] + Fh[254] + Fh[46] + Fh[1084],
        bF = Fh[23] + Fh[81] + Fh[82] + Fh[298],
        yF = Fh[1073] + Fh[218] + Fh[1348] + Fh[314] + Fh[322],
        gF = Fh[253] + Fh[56] + Fh[387],
        mF = Fh[261] + Fh[46] + Fh[354] + Fh[56] + Fh[387],
        xF = Fh[1349],
        EF = Fh[59],
        pF = Fh[1350] + Fh[46] + Fh[354] + Fh[56] + Fh[387],
        wF = Fh[0] + Fh[218] + Fh[1351] + Fh[184] + Fh[1352],
        TF = Fh[481] + Fh[1] + Fh[327],
        kF = Fh[355] + Fh[1] + Fh[327],
        MF = Fh[1353],
        OF = Fh[1354],
        IF = Fh[23] + Fh[1355],
        SF = Fh[1356],
        jF = Fh[616] + Fh[42] + Fh[1357],
        AF = Fh[62] + Fh[1358] + Fh[46] + Fh[1324],
        CF = Fh[1359],
        LF = Fh[1360],
        PF = Fh[221],
        RF = Fh[1361],
        DF = Fh[1362] + Fh[23] + Fh[1363] + Fh[23] + Fh[1364],
        NF = Fh[1362] + Fh[23] + Fh[1363] + Fh[23] + Fh[1365],
        BF = Fh[723] + Fh[23] + Fh[234] + Fh[23] + Fh[1366],
        $F = Fh[723] + Fh[23] + Fh[234] + Fh[23] + Fh[1367],
        FF = Fh[23] + Fh[81] + Fh[885],
        GF = Fh[0] + Fh[269] + Fh[758],
        zF = Fh[1368],
        qF = Fh[397] + Fh[88] + Fh[1369],
        YF = Fh[495] + Fh[218] + Fh[219],
        HF = Fh[481] + Fh[80],
        UF = Fh[366] + Fh[23] + Fh[1116] + Fh[23] + Fh[1075],
        WF = Fh[481] + Fh[206],
        VF = Fh[23] + Fh[81] + Fh[82] + Fh[487] + Fh[62] + Fh[1370] + Fh[44] + Fh[272],
        XF = Fh[1371] + Fh[30] + Fh[389],
        KF = Fh[1372],
        ZF = Fh[1373] + Fh[184] + Fh[1374],
        JF = Fh[1375],
        QF = Fh[1376],
        tG = Fh[1376] + Fh[113],
        iG = Fh[1376] + Fh[114],
        nG = Fh[53] + Fh[184] + Fh[1377],
        eG = Fh[1350],
        sG = Fh[1079] + Fh[23] + Fh[370],
        hG = Fh[1378],
        rG = Fh[23] + Fh[81] + Fh[82] + Fh[210],
        aG = Fh[1379],
        oG = Fh[253] + Fh[218] + Fh[1380],
        fG = Fh[253] + Fh[30] + Fh[1381],
        cG = Fh[1382],
        uG = Fh[23] + Fh[1383] + Fh[44] + Fh[1384],
        _G = Fh[1353] + Fh[42] + Fh[54],
        dG = Fh[1385],
        lG = Fh[1386],
        vG = Fh[1078] + Fh[30] + Fh[1387],
        bG = Fh[138] + Fh[88] + Fh[681],
        yG = Fh[1073] + Fh[30] + Fh[1387],
        gG = Fh[88] + Fh[1388] + Fh[46] + Fh[1324],
        mG = Fh[498] + Fh[46] + Fh[1389],
        xG = Fh[23] + Fh[81] + Fh[350] + Fh[1327],
        EG = Fh[23] + Fh[1390] + Fh[110] + Fh[292],
        pG = Fh[23] + Fh[1391],
        wG = Fh[4] + Fh[184] + Fh[81] + Fh[30] + Fh[389],
        TG = Fh[317] + Fh[30] + Fh[318] + Fh[62] + Fh[210] + Fh[110] + Fh[1392] + Fh[62] + Fh[1393] + Fh[44] + Fh[1394] + Fh[88] + Fh[1395],
        kG = Fh[23] + Fh[87],
        MG = Fh[69] + Fh[1] + Fh[431],
        OG = Fh[53] + Fh[269] + Fh[1396],
        IG = Fh[53] + Fh[88] + Fh[1397],
        SG = Fh[53] + Fh[1] + Fh[1398],
        jG = Fh[53] + Fh[218] + Fh[1399],
        AG = Fh[56] + Fh[57] + Fh[88] + Fh[1055],
        CG = Fh[269] + Fh[412],
        LG = Fh[62] + Fh[98] + Fh[391],
        PG = Fh[30] + Fh[160] + Fh[391],
        RG = Fh[314] + Fh[219] + Fh[391],
        DG = Fh[184] + Fh[185] + Fh[391],
        NG = Fh[88] + Fh[1400],
        BG = Fh[26] + Fh[200],
        $G = Fh[184] + Fh[611] + Fh[30] + Fh[31],
        FG = Fh[30] + Fh[389] + Fh[62] + Fh[1038],
        GG = Fh[411] + Fh[1401] + Fh[49] + Fh[317] + Fh[49] + Fh[996] + Fh[350],
        zG = Fh[80] + Fh[76] + Fh[307],
        qG = Fh[80] + Fh[76] + Fh[267] + Fh[76] + Fh[206] + Fh[76] + Fh[80],
        YG = Fh[411] + Fh[1401] + Fh[228] + Fh[56] + Fh[1402] + Fh[49] + Fh[1] + Fh[1403] + Fh[49] + Fh[317] + Fh[49] + Fh[996] + Fh[350] + Fh[440] + Fh[1] + Fh[309],
        HG = Fh[680] + Fh[1225],
        UG = Fh[267] + Fh[440] + Fh[267] + Fh[440] + Fh[1404],
        WG = 0;
    if (t[Od]) {
        var VG = navigator[Id],
            XG = /opera/i [No](VG),
            KG = !XG && /msie/i [No](VG),
            ZG = /rv:11.0/i [No](VG),
            JG = /MSIE 10./i [No](VG);
        if (ZG && (KG = !0), /msie\s[6,7,8]/i.test(VG)) throw new Error("your browser is not supported");
        var QG = /webkit|khtml/i.test(VG),
            tz = !QG && /gecko/i [No](VG),
            iz = /firefox\//i.test(VG),
            nz = /Chrome\//i.test(VG),
            ez = !nz && /Safari\//i [No](VG),
            sz = /Macintosh;/i [No](VG),
            hz = /(iPad|iPhone|iPod)/g [No](VG),
            rz = /Android/g [No](VG),
            az = /Windows Phone/g [No](VG),
            oz = (hz || rz || az) && k_ in t,
            fz = VG[x_](/AppleWebKit\/([0-9\.]*)/);
        if (fz && fz.length > 1) { parseFloat(fz[1]) }
        rz && parseFloat(VG[x_](/Android\s([0-9\.]*)/)[1]) }
    t.requestAnimationFrame || (t.requestAnimationFrame = t[Sd] || t[jd] || t.oRequestAnimationFrame || t[Ad] || function(i) {
        return t[Cd](function() { i() }, 1e3 / 60) }), t.cancelAnimationFrame || (t.cancelAnimationFrame = t.webkitCancelAnimationFrame || t[Ld] || t[Pd] || t[Rd] || function(i) {
        return t.clearTimeout(i) });
    var cz = { SELECTION_TOLERANCE: oz ? 5 : 2, LABEL_COLOR: Dd };
    Z(cz, { FONT_STYLE: { get: function() {
                return this[Nd] || (this[Nd] = Bd) }, set: function(t) { this._fontStyle != t && (this[Nd] = t, this._fontChanged = !0) } }, FONT_SIZE: { get: function() {
                return this[$d] || (this[$d] = 12) }, set: function(t) { this[$d] != t && (this[$d] = t, this._fontChanged = !0) } }, FONT_FAMILY: { get: function() {
                return this[Fd] || (this[Fd] = "Verdana,helvetica,arial,sans-serif") }, set: function(t) { this[Fd] != t && (this[Fd] = t, this._fontChanged = !0) } }, FONT: { get: function() {
                return (this._fontChanged || this[Gd] === n) && (this._fontChanged = !1, this[zd] = this[qd] + xr + this[to] + Ka + this[Yd]), this[zd] } } });
    var uz = function(t) { this._jk = [], this._lm = {}, t && this.add(t) };
    uz[nr] = { _jk: null, _lm: null, get: function(t) {
            return this[Hd](t) }, getById: function(t) {
            return this._lm[t] }, getByIndex: function(t) {
            return this._jk[t] }, forEach: function(t, i, n) {
            return l(this._jk, t, i, n) }, forEachReverse: function(t, i, n) {
            return b(this._jk, t, i, n) }, size: function() {
            return this._jk[Yh] }, contains: function(t) {
            return this[Ud](t.id) }, containsById: function(t) {
            return this._lm.hasOwnProperty(t) }, setIndex: function(t, i) {
            var n = this._jk.indexOf(t);
            if (0 > n) throw new Error(pa + t.id + Wd);
            return n == i ? !1 : (this._jk.splice(n, 1), this._jk[Wh](i, 0, t), !0) }, setIndexAfter: function(t, i) {
            var n = this._jk.indexOf(t);
            if (0 > n) throw new Error(pa + t.id + Wd);
            return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._jk[Wh](n, 1), this._jk[Wh](i, 0, t), i) }, setIndexBefore: function(t, i) {
            var n = this._jk[Qh](t);
            if (0 > n) throw new Error(pa + t.id + Wd);
            return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._jk[Wh](n, 1), this._jk[Wh](i, 0, t), i) }, indexOf: function(t) {
            return this._jk[Qh](t) }, getIndexById: function(t) {
            var i = this[Vd](t);
            return i ? this._jk[Qh](i) : -1 }, add: function(t, i) {
            return $(t) ? this._ha(t, i) : this._kh(t, i) }, addFirst: function(t) {
            return this.add(t, 0) }, _ha: function(t, i) {
            if (0 == t[Yh]) return !1;
            var e = !1,
                s = i >= 0;
            t = t._jk || t;
            for (var h = 0, r = t[Yh]; r > h; h++) {
                var a = t[h];
                null !== a && a !== n && this._kh(a, i, !0) && (e = !0, s && i++) }
            return e }, _kh: function(t, i) {
            var e = t.id;
            return e === n || this.containsById(e) ? !1 : (g(this._jk, t, i), this._lm[e] = t, t) }, remove: function(t) {
            return $(t) ? this[Xd](t) : t.id ? this._h8(t.id, t) : this[Kd](t) }, _n67: function(t) {
            if (0 == t[Yh]) return !1;
            var i = !1;
            t = t._jk || t;
            for (var e = 0, s = t[Yh]; s > e; e++) {
                var h = t[e];
                if (null !== h && h !== n) { h.id === n && (h = this._lm[h]);
                    var r = h.id;
                    this._h8(r, h, !0) && (i = !0) } }
            return i }, _h8: function(t, i) {
            return t !== n && this.containsById(t) ? ((null === i || i === n) && (i = this.getById(t)), delete this._lm[t], m(this._jk, i), !0) : !1 }, removeById: function(t) {
            var i = this._lm[t];
            return i ? this._h8(t, i) : !1 }, set: function(t) {
            if (!t || 0 == t) return void this[Ba]();
            if (this[Wf]() || !$(t)) return this.clear(), this.add(t);
            var i = [],
                n = {},
                e = 0;
            if (l(t, function(t) { this._lm[t.id] ? (n[t.id] = t, e++) : i[Jh](t) }, this), e != this[Yh]) {
                var s = [];
                this[Rc](function(t) { n[t.id] || s[Jh](t) }, this), s[Yh] && this[Xd](s) }
            return i[Yh] && this._ha(i), !0 }, clear: function() {
            return this.isEmpty() ? !1 : (this._jk[Yh] = 0, this._lm = {}, !0) }, toDatas: function() {
            return this._jk.slice(0) }, isEmpty: function() {
            return 0 == this._jk.length }, valueOf: function() {
            return this._jk[Yh] }, clone: function(t) {
            var i = new uz;
            return i.add(t ? y(this._jk) : this.toDatas()), i } }, Z(uz[nr], { datas: { get: function() {
                return this._jk } }, random: { get: function() {
                return this._jk && this._jk[Yh] ? this._jk[q(this._jk[Yh])] : null } }, length: { get: function() {
                return this._jk ? this._jk.length : 0 } } });
    var _z = (2 * Math.PI, .5 * Math.PI),
        dz = function(t, i) { i = i[Qr]();
            for (var n = KG ? t.firstChild : t[Zd]; n && (1 != n.nodeType || n[Jd] && n[Jd][Qr]() != i);) n = KG ? n[Qd] : n[tl];
            return n && 1 == n[il] && n.tagName && n[Jd][Qr]() == i ? n : null },
        lz = function(t, i, n) { t instanceof lz && (i = t.y, t = t.x, n = t[Mo]), this.set(t, i, n) },
        vz = function(t, i, n, e) {
            var s = t - n,
                h = i - e;
            return Math[_o](s * s + h * h) };
    lz[nr] = { x: 0, y: 0, rotate: n, set: function(t, i, n) { this.x = t || 0, this.y = i || 0, this.rotate = n || 0 }, negate: function() { this.x = -this.x, this.y = -this.y }, offset: function(t, i) { this.x += t, this.y += i }, equals: function(t) {
            return this.x == t.x && this.y == t.y }, distanceTo: function(t) {
            return vz(this.x, this.y, t.x, t.y) }, toString: function() {
            return nl + this.x + el + this.y + Pr }, clone: function() {
            return new lz(this.x, this.y) } }, Object[or](lz[nr], sl, { get: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y) } });
    var bz = function(t, i, e, s) { t !== n && this._mq(t, i, e, s) };
    bz[nr] = { _n2: null, _n0: null, _my: null, _n4: null, _n5: null, _n6: null, _n7: 1, _mq: function(t, i, n, e) { this._n2 = t, this._n0 = i, this._my = n, this._n4 = e, t == n ? (this._n5 = -1, this._n7 = 0, this._n6 = t) : (this._n5 = (i - e) / (t - n), this._n6 = i - this._n5 * t, this._n7 = 1), this._kq = Math[qr](this._n4 - this._n0, this._my - this._n2), this[Yr] = Math.cos(this._kq), this._sin = Math.sin(this._kq) }, _n6y: function(t) {
            return 0 == this._n7 ? Number.NaN : this._n5 * t + this._n6 }, _n7f: function(t) {
            return 0 == this._n5 ? Number.NaN : (t - this._n6) / this._n5 }, _$c: function(t) {
            var i, n, e, s, h, r = t[0],
                a = t[2],
                o = t[4],
                f = t[1],
                c = t[3],
                u = t[5],
                _ = this._n5,
                d = this._n6,
                l = this._n7;
            if (0 == l ? (e = Math.sqrt((-_ * _ * r - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * r), s = -_ * a + _ * r, h = _ * o - 2 * _ * a + _ * r) : (e = Math[_o]((-f + _ * r + d) * u + c * c + (-2 * _ * a - 2 * d) * c + (_ * o + d) * f + (-_ * _ * r - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * r), s = -c + f + _ * a - _ * r, h = u - 2 * c + f - _ * o + 2 * _ * a - _ * r), 0 != h) { i = (e + s) / h, n = (-e + s) / h;
                var v, b;
                return i >= 0 && 1 >= i && (v = Fi(i, t)), n >= 0 && 1 >= n && (b = Fi(n, t)), v && b ? [v, b] : v ? v : b ? b : void 0 } }, _3o: function(t, i, n) {
            if (this._n5 == t._n5 || 0 == this._n7 && 0 == t._n7) return null;
            var e, s;
            if (e = 0 == this._n7 ? this._n6 : 0 == t._n7 ? t._n6 : (t._n6 - this._n6) / (this._n5 - t._n5), s = 0 == this._n5 ? this._n6 : 0 == t._n5 ? t._n6 : this._n7 ? this._n5 * e + this._n6 : t._n5 * e + t._n6, !i) return { x: e, y: s };
            var h, r, a;
            if (n) h = -i / 2, r = -h;
            else { h = -vz(this._n2, this._n0, e, s), r = vz(this._my, this._n4, e, s);
                var o = -h + r;
                if (o > i) {
                    var f = i / o;
                    h *= f, r *= f } else a = (i - o) / 2 }
            var c = this._79(e, s, h),
                u = this._79(e, s, r);
            return a && (c[bf] = a, u[bf] = a), [c, u] }, _79: function(t, i, n) {
            return 0 == this._n7 ? { x: t, y: i + n } : { x: t + n * this._n7os, y: i + n * this[Hr] } } };
    var yz = function(t, i) { this[Da] = t, this[Na] = i };
    yz.prototype = { width: 0, height: 0, isEmpty: function() {
            return this[Da] <= 0 || this[Na] <= 0 }, clone: function() {
            return new yz(this[Da], this[Na]) }, toString: function() {
            return hl + this[Da] + el + this[Na] + Pr } };
    var gz = function(t, i, e, s) { t instanceof Object && !D(t) && (i = t.y, e = t[Da], s = t.height, t = t.x), e === n && (e = -1), s === n && (s = -1), this.x = t || 0, this.y = i || 0, this[Da] = e, this[Na] = s };
    gz[nr] = { x: 0, y: 0, width: -1, height: -1, setByRect: function(t) { this.x = t.x || 0, this.y = t.y || 0, this[Da] = t[Da] || 0, this[Na] = t[Na] || 0 }, set: function(t, i, n, e) { this.x = t || 0, this.y = i || 0, this[Da] = n || 0, this.height = e || 0 }, offset: function(t, i) {
            return this.x += t, this.y += i, this }, contains: function(t, i) {
            return t instanceof gz ? ai(this.x, this.y, this[Da], this.height, t.x, t.y, t[Da], t.height, i) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this[Na] }, intersectsPoint: function(t, i, n) {
            return this.width <= 0 && this.height <= 0 ? !1 : n ? this.intersectsRect(t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this[Da] && i >= this.y && i <= this.y + this.height }, intersectsRect: function(t, i, n, e) {
            return hi(this.x, this.y, this[Da], this[Na], t, i, n, e) }, intersects: function(t, i) {
            return D(t[Da]) ? this[rl](t.x, t.y, t[Da], t[Na]) : this.intersectsPoint(t, i) }, intersection: function(t, i, n, e) {
            var s = this.x,
                h = this.y,
                r = s;
            r += this[Da];
            var a = h;
            a += this.height;
            var o = t;
            o += n;
            var f = i;
            return f += e, t > s && (s = t), i > h && (h = i), r > o && (r = o), a > f && (a = f), r -= s, a -= h, 0 > r || 0 > a ? null : new gz(s, h, r, a) }, addPoint: function(t) { this.add(t.x, t.y) }, add: function(t, i) {
            if (D(t[Da])) return this[al](t.x, t.y, t.width, t[Na]);
            if (D(t.x) && (i = t.y, t = t.x), this[Da] < 0 || this[Na] < 0) return this.x = t, this.y = i, void(this.width = this.height = 0);
            var n = this.x,
                e = this.y,
                s = this[Da],
                h = this.height;
            s += n, h += e, n > t && (n = t), e > i && (e = i), t > s && (s = t), i > h && (h = i), s -= n, h -= e, s > Number[ol] && (s = Number.MAX_VALUE), h > Number[ol] && (h = Number[ol]), this.set(n, e, s, h) }, addRect: function(t, i, n, e) {
            var s = this[Da],
                h = this[Na];
            (0 > s || 0 > h) && this.set(t, i, n, e);
            var r = n,
                a = e;
            if (!(0 > r || 0 > a)) {
                var o = this.x,
                    f = this.y;
                s += o, h += f;
                var c = t,
                    u = i;
                r += c, a += u, o > c && (o = c), f > u && (f = u), r > s && (s = r), a > h && (h = a), s -= o, h -= f, s > Number[ol] && (s = Number[ol]), h > Number[ol] && (h = Number[ol]), this.set(o, f, s, h) } }, shrink: function(t, i, n, e) {
            return D(t) ? 1 == arguments.length ? e = i = n = t || 0 : 2 == arguments[Yh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t.left || 0, n = t.bottom || 0, e = t[Wr] || 0, t = t.top || 0), this.x += i, this.y += t, this.width -= i + e, this[Na] -= t + n, this }, grow: function(t, i, n, e) {
            return D(t) ? 1 == arguments.length ? e = i = n = t || 0 : 2 == arguments[Yh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[Ho] || 0, n = t[Ur] || 0, e = t[Wr] || 0, t = t.top || 0), this.x -= i, this.y -= t, this[Da] += i + e, this.height += t + n, this }, scale: function(t) {
            return this.x *= t, this.y *= t, this.width *= t, this[Na] *= t, this }, isEmpty: function() {
            return this[Da] <= 0 && this[Na] <= 0 }, toString: function() {
            return this.x + fl + this.y + fl + this.width + fl + this.height }, union: function(t) {
            var i = this.width,
                n = this.height;
            if (0 > i || 0 > n) return new gz(t.x, t.y, t.width, t[Na]);
            var e = t.width,
                s = t[Na];
            if (0 > e || 0 > s) return new gz(this.x, this.y, this[Da], this[Na]);
            var h = this.x,
                r = this.y;
            i += h, n += r;
            var a = t.x,
                o = t.y;
            return e += a, s += o, h > a && (h = a), r > o && (r = o), e > i && (i = e), s > n && (n = s), i -= h, n -= r, i > Number[ol] && (i = Number[ol]), n > Number[ol] && (n = Number.MAX_VALUE), new gz(h, r, i, n) }, clear: function() { this.set(0, 0, -1, -1) }, equals: function(t) {
            return t && this.x == t.x && this.y == t.y && this[Da] == t.width && this.height == t[Na] }, clone: function(t, i) {
            return new gz(this.x + (t || 0), this.y + (i || 0), this[Da], this.height) }, toArray: function() {
            return [this.x, this.y, this[Da], this.height] }, getIntersectionPoint: function(t, i, n, e) {
            return si(this, t, i, n, e) } }, p(gz, yz), gz[cl] = function(t, i) {
        return t == i || t && i && t.x == i.x && t.y == i.y && t[Da] == i.width && t.height == i.height }, Z(gz[nr], { left: { get: function() {
                return this.x } }, top: { get: function() {
                return this.y } }, bottom: { get: function() {
                return this.y + this.height } }, right: { get: function() {
                return this.x + this[Da] } }, cx: { get: function() {
                return this.x + this[Da] / 2 } }, cy: { get: function() {
                return this.y + this[Na] / 2 } }, center: { get: function() {
                return new lz(this.cx, this.cy) } } }), gz[Zu] = hi, gz.intersection = oi, gz[Gf] = ri;
    var mz = function(t, i, n, e) { 1 == arguments[Yh] ? i = n = e = t : 2 == arguments.length && (n = t, e = i), this.set(t, i, n, e) };
    mz.prototype = { top: 0, bottom: 0, left: 0, right: 0, set: function(t, i, n, e) { this.top = t || 0, this[Ho] = i || 0, this[Ur] = n || 0, this[Wr] = e || 0 }, clone: function() {
            return new mz(this.top, this[Ho], this[Ur], this[Wr]) }, equals: function(t) {
            return t && this.top == t.top && this.bottom == t[Ur] && this.left == t[Ho] && this[Wr] == t[Wr] } };
    var xz = function(t, i) { this[Xr] = t, this[Kr] = i };
    xz[nr] = { verticalPosition: !1, horizontalPosition: !1, toString: function() {
            return (this[Xr] || "") + (this[Kr] || "") } }, K(xz[nr], ul, { get: function() {
            return (this[Xr] || "") + (this[Kr] || "") } });
    var Ez = _l,
        pz = dl,
        wz = ll,
        Tz = Tc,
        kz = vl,
        Mz = bl;
    xz[yl] = new xz(Ez, Tz), xz.LEFT_MIDDLE = new xz(Ez, kz), xz[gl] = new xz(Ez, Mz), xz[ml] = new xz(pz, Tz), xz[xl] = new xz(pz, kz), xz[El] = new xz(pz, Mz), xz[pl] = new xz(wz, Tz), xz[wl] = new xz(wz, kz), xz[Tl] = new xz(wz, Mz);
    var Oz = [xz[yl], xz[kl], xz[gl], xz[ml], xz[xl], xz[El], xz[pl], xz.RIGHT_MIDDLE, xz[Tl]];
    K(xz, jr, { get: function() {
            return Oz[q(Oz.length)] } }), xz[Vr] = function(t) {
        for (var i in xz) {
            var n = xz[i];
            if (n && jr != i && n instanceof xz && n.toString() == t) return n } };
    var Iz = function(t, i, n, e, s) { this.set(t, i, n, e), this[Ml] = s };
    Iz[nr] = { radius: 0, classify: function(t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4 }, intersectsRect: function(t, i, n, e) {
            if (T(this, Iz, rl, arguments) === !1) return !1;
            var s = this.x,
                h = this.y,
                r = s + this[Da],
                a = h + this[Na],
                o = 2 * radius,
                f = 2 * radius,
                c = Math.min(this[Da], Math.abs(o)) / 2,
                u = Math.min(this[Na], Math.abs(f)) / 2,
                _ = this[Ol](t, s, r, c),
                d = this.classify(t + n, s, r, c),
                l = this.classify(i, h, a, u),
                v = this.classify(i + e, h, a, u);
            return 2 == _ || 2 == d || 2 == l || 2 == v ? !0 : 2 > _ && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + c) : t -= r - c, i = 1 == v ? i = i + e - (h + u) : i -= a - u, t /= c, i /= u, 1 >= t * t + i * i) }, intersectsPoint: function(t, i) {
            if (T(this, Iz, Gf, arguments) === !1) return !1;
            var n = this.x,
                e = this.y,
                s = n + this.width,
                h = e + this.height;
            if (n > t || e > i || t >= s || i >= h) return !1;
            var r = 2 * radius,
                a = 2 * radius,
                o = Math.min(this[Da], Math.abs(r)) / 2,
                f = Math.min(this[Na], Math.abs(a)) / 2;
            return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = h - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i) }, clone: function() {
            return new Iz(this.x, this.y, this.width, this[Na], this.radius) } }, p(Iz, gz);
    var Sz = function(t, i, n, e) { this[Vo] = t, this[Ko] = i, this.kind = n, this.value = e };
    Sz.prototype = { source: null, type: null, kind: null, value: null, toString: function() {
            return Il + this[Vo] + Sl + this[Ko] + jl + this[Ed] } };
    var jz = function(t, i, n, e, s) { this[Vo] = t, this.kind = i, this[Al] = e, this.value = n, this[Cl] = s };
    jz.prototype = { type: Ll, propertyType: null, toString: function() {
            return Il + this.source + Sl + this.type + Pl + this.kind + Rl + this[Al] + Dl + this.value } }, p(jz, Sz), K(jz[nr], Nl, { get: function() {
            return this[Ed] }, set: function(t) { this[Ed] = t } });
    var Az = function(t, i, n) { this[Vo] = t, this[Al] = t[Dc], this[lr] = i, this[Bl] = n, this[Al] && (this[$l] = this[Al][Fl](t)) };
    Az[nr] = { kind: Dc }, p(Az, jz);
    var Cz = function(t, i) { this[Vo] = t, this.value = i };
    Cz[nr][Ed] = Gl, p(Cz, jz);
    var Lz = function(t, i) { this[Vo] = t, this.value = i };
    Lz.prototype.kind = zl, p(Lz, jz);
    var Pz = function(t, i, n, e) { this.source = i, this[Al] = n, this[lr] = e, this[Dc] = t, this[ql] = i, this.oldIndex = n, this.newIndex = e };
    Pz[nr].kind = Yl, p(Pz, jz);
    var Rz = function() {};
    Rz[nr] = { listener: null, beforeEvent: function(t) {
            return null != this[Hl] && this[Hl].beforeEvent ? this[Hl][cr](t) : !0 }, onEvent: function(t) { null != this.listener && this.listener[ur] && this.listener[ur](t) } };
    var Dz = function() { w(this, Dz, arguments), this[Ul] = {}, this[Wl] = [] },
        Nz = function(t, i) { this.listener = t, this.scope = i, t instanceof Function ? this.onEvent = t : (this[ur] = t.onEvent, this[cr] = t[cr]), this.equals = function(t) {
                return t && this[Hl] == t.listener && this.scope == t[Vl] } };
    Nz[nr] = { equals: function(t) {
            return t && this[Hl] == t[Hl] && this.scope == t[Vl] }, destroy: function() { delete this.scope, delete this.listener } }, Dz[nr] = { listeners: null, _n6c: function() {
            return this[Wl] && this[Wl][Yh] > 0 }, _7c: function(t, i) {
            return t instanceof Dz ? t : new Nz(t, i) }, _9t: function(t, i) {
            if (t instanceof Dz) return this.listeners[Qh](t);
            for (var n = this[Wl], e = 0, s = n[Yh]; s > e; e++) {
                var h = n[e];
                if (h.listener == t && h[Vl] == i) return e }
            return -1 }, contains: function(t, i) {
            return this._9t(t, i) >= 0 }, addListener: function(t, i) {
            return this[d_](t, i) ? !1 : void this[Wl][Jh](this._7c(t, i)) }, removeListener: function(t, i) {
            var n = this._9t(t, i);
            n >= 0 && this[Wl].splice(n, 1) }, on: function(t, i) { this.addListener(t, i) }, un: function(t, i, n) { this[Xl](t, i, n) }, onEvent: function(t) {
            return this[Wl] ? void l(this[Wl], function(i) { i[ur] && (i[Vl] ? i[ur][zh](i[Vl], t) : i[ur](t)) }, this) : !1 }, beforeEvent: function(t) {
            return this[Wl] ? l(this[Wl], function(i) {
                return i[cr] ? i[Vl] ? i.beforeEvent[zh](i[Vl], t) : i[cr](t) : !0 }, this) : !0 }, _di: function(t) {
            return this[cr](t) === !1 ? !1 : (this[ur](t), !0) }, clear: function() { this[Wl] = [] }, destroy: function() { this[Ba]() } }, p(Dz, Rz);
    var Bz = { onEvent: function() {}, beforeEvent: function() {} },
        $z = function(t, i, n, e, s) { this[Vo] = t, this[Ko] = Kl, this[Ed] = i, this.data = n, this[Zl] = e, this[$l] = s };
    $z[nr] = { index: -1, oldIndex: -1, toString: function() {
            return Il + this[Vo] + Sl + this[Ko] + jl + this.kind + Jl + this.data + Ql + this[Zl] + tv + this.oldIndex } }, p($z, Sz), $z[iv] = nv, $z[ev] = Kh, $z[sv] = Ba, $z.KIND_INDEX_CHANGE = hv;
    var Fz = function() { this.id = ++WG, this._n7n = {} };
    Fz.prototype = { _n7n: null, id: null, get: function(t) {
            return this._n7n[t] }, set: function(t, i) {
            var n = this.get(t);
            if (n === i) return !1;
            var e = new jz(this, t, i, n);
            return e[Cl] = Mq.PROPERTY_TYPE_CLIENT, this[rv](t, i, e, this[av]) }, _n5d: function(t, i, e, s) {
            return this.beforeEvent(e) === !1 ? !1 : (s || (s = this[av]), i === n ? delete s[t] : s[t] = i, this[ur](e), !0) }, remove: function(t) { this.set(t, null) }, valueOf: function() {
            return this.id }, toString: function() {
            return this.id }, _dj: function(t, i) {
            if (i === n && (i = -1), this == t || t == this._jr) return !1;
            if (t && this == t._jr && !t._dj(null)) return !1;
            var e = new Az(this, t, i);
            if (!this[cr](e)) return !1;
            var s, h, r = this._jr;
            return t && (s = new Cz(t, this), !t[cr](s)) ? !1 : null == r || (h = new Lz(r, this), r[cr](h)) ? (this._jr = t, null != t && ci(t, this, i), null != r && ui(r, this), this[ur](e), null != t && t[ur](s), null != r && r.onEvent(h), this.onParentChanged(r, t), !0) : !1 }, addChild: function(t, i) {
            var n = t._dj(this, i);
            return n && this[ov](t, i), n }, onChildAdd: function() {}, removeChild: function(t) {
            if (!this._fm || !this._fm[d_](t)) return !1;
            var i = t._dj(null);
            return this.onChildRemove(t), i }, onChildRemove: function() {}, toChildren: function() {
            return this._fm ? this._fm[e_]() : null }, clearChildren: function() {
            if (this._fm && this._fm[Yh]) {
                var t = this[fv]();
                l(t, function(t) { t._dj(null) }, this), this[cv](t) } }, forEachChild: function(t, i) {
            return this[qh]() ? this._fm[Rc](t, i) : !1 }, onChildrenClear: function() {}, getChildIndex: function(t) {
            return this._fm && this._fm[Yh] ? this._fm.indexOf(t) : -1 }, setChildIndex: function(t, i) {
            if (!this._fm || !this._fm[Yh]) return !1;
            var n = this._fm[Qh](t);
            if (0 > n || n == i) return !1;
            var e = new Pz(this, t, n, i);
            return this[cr](e) === !1 ? !1 : (this._fm[Kh](t) && this._fm.add(t, i), this.onEvent(e), !0) }, hasChildren: function() {
            return this._fm && this._fm[Yh] > 0 }, getChildAt: function(t) {
            return null == this._fm ? null : this._fm._jk[t] }, isDescendantOf: function(t) {
            if (!t[qh]()) return !1;
            for (var i = this[Dc]; null != i;) {
                if (t == i) return !0;
                i = i[Dc] }
            return !1 }, onParentChanged: function() {}, firePropertyChangeEvent: function(t, i, n, e) { this[ur](new jz(this, t, i, n, e)) } }, p(Fz, Rz), Z(Fz[nr], { childrenCount: { get: function() {
                return this._fm ? this._fm.length : 0 } }, children: { get: function() {
                return this._fm || (this._fm = new uz), this._fm } }, parent: { get: function() {
                return this._jr }, set: function(t) { this._dj(t, -1) } }, properties: { get: function() {
                return this._n7n }, set: function(t) { this[av] != t && (this[av] = t) } } });
    var Gz = function() { this._jk = [], this._lm = {}, this._1h = new Dz };
    Gz[nr] = { beforeEvent: function(t) {
            return null != this._1h && this._1h[cr] ? this._1h[cr](t) : !0 }, onEvent: function(t) {
            return this._1h instanceof Function ? void this._1h(t) : void(null != this._1h && this._1h.onEvent && this._1h.onEvent(t)) }, _1h: null, setIndex: function(t, i) {
            if (!this[d_](t)) throw new Error(pa + t[uv]() + Wd);
            var n = this[Qh](t);
            if (n == i) return !1;
            var e = new $z(this, $z[_v], t, i, n);
            return this[cr](e) === !1 ? !1 : (this._jk.remove(t) >= 0 && this._jk.add(i, t), this.onEvent(e), !0) }, _ha: function(t, i) {
            if (0 == t[Yh]) return !1;
            var e = !1,
                s = i >= 0,
                h = new $z(this, $z[iv], t, i);
            if (this[cr](h) === !1) return !1;
            var r = [];
            t = t._jk || t;
            for (var a = 0, o = t[Yh]; o > a; a++) {
                var f = t[a];
                null !== f && f !== n && this._kh(f, i, !0) && (r.push(f), e = !0, s && i++) }
            return h[Jo] = r, this.onEvent(h), e }, _kh: function(t, i, n) {
            if (this.accept(t) === !1) return !1;
            if (n) return T(this, Gz, dv, arguments);
            var e = new $z(this, $z[iv], t, i);
            return this[cr](e) === !1 ? !1 : T(this, Gz, dv, arguments) ? (this._kj(t, e), t) : !1 }, _kj: function(t, i) { this[ur](i) }, _n67: function(t) {
            if (0 == t[Yh]) return !1;
            var i = new $z(this, $z.KIND_REMOVE, t);
            if (this[cr](i) === !1) return !1;
            var e = [],
                s = !1;
            t = t._jk || t;
            for (var h = 0, r = t[Yh]; r > h; h++) {
                var a = t[h];
                if (null !== a && a !== n) {
                    var o = a.id || a;
                    a.id === n && (a = null), this._h8(o, a, !0) && (e.push(a), s = !0) } }
            return i[Jo] = e, this.onEvent(i), s }, _h8: function(t, i, n) {
            if (n) return T(this, Gz, lv, arguments);
            var e = new $z(this, $z[ev], i);
            return this.beforeEvent(e) === !1 ? !1 : T(this, Gz, lv, arguments) ? (this[ur](e), !0) : !1 }, clear: function() {
            if (this[Wf]()) return !1;
            var t = new $z(this, $z[sv], this.toDatas());
            return this.beforeEvent(t) === !1 ? !1 : T(this, Gz, Ba) ? (this[ur](t), !0) : !1 }, accept: function(t) {
            return this[vv] && this[vv](t) === !1 ? !1 : !0 } }, p(Gz, uz), K(Gz[nr], bv, { get: function() {
            return this._1h } });
    var zz = function() { w(this, zz, arguments), this[yv] = new Dz, this._selectionModel = new qz(this), this[gv]._1h = this[yv], this.dataChangeDispatcher = new Dz, this[mv].addListener({ beforeEvent: this[xv], onEvent: this[Ev] }, this), this[pv] = new Dz, this[wv] = new Dz, this[Tv] = new uz;
        var t = this;
        this[Tv].setIndex = function(i, n) {
            if (!t.$roots.contains(i)) throw new Error(pa + i.id + Wd);
            var e = t[Tv]._jk[Qh](i);
            if (e == n) return !1;
            t[Tv]._jk.splice(e, 1), t.$roots._jk[Wh](n, 0, i), t[kv] = !0;
            var s = new Pz(t, i, e, n);
            return t._29(s), !0 } };
    zz.prototype = { selectionModel: null, selectionChangeDispatcher: null, dataChangeDispatcher: null, parentChangeDispatcher: null, roots: null, _kj: function(t, i) { t[Hl] = this[mv], t[Dc] || this[Tv].add(t), this.onEvent(i) }, _h8: function(t, i) {
            if (T(this, zz, lv, arguments)) {
                if (i instanceof CH) i[Mv]();
                else if (i instanceof LH) {
                    var n = i.getEdges();
                    this[Kh](n) }
                var e = i[Dc];
                return null == e ? this[Tv][Kh](i) : (e.removeChild(i), e[Ov] = !0), i[qh]() && this[Kh](i.toChildren()), i[Hl] = null, !0 }
            return !1 }, _4v: function(t) {
            var i = t[Vo];
            this.contains(i) && (null == i[Dc] ? this.$roots.add(i) : null == t[Al] && this[Tv][Kh](i), this[pv][ur](t)) }, _29: function(t) { this.childIndexChangeDispatcher[ur](t) }, beforeDataPropertyChange: function(t) {
            return t instanceof Az ? this[pv][cr](t) : !0 }, onDataPropertyChanged: function(t) {
            return t instanceof Az ? (this._n7lIndexFlag = !0, t[Vo]._n7lIndexFlag = !0, void this._4v(t)) : void(t instanceof Pz && (this[kv] = !0, t.source[kv] = !0, this._29(t))) }, toRoots: function() {
            return this[Tv][e_]() }, _he: function(t) {
            var i, n = t._jr;
            i = n ? n._fm : this[Tv];
            var e = i[Qh](t);
            if (0 > e) throw new Error(Iv + t + "' not exist in the box");
            return 0 == e ? n : i[Hd](e - 1) }, _hc: function(t) {
            var i, n = t._jr;
            i = n ? n._fm : this.$roots;
            var e = i[Qh](t);
            if (0 > e) throw new Error(Iv + t + "' not exist in the box");
            return e == i.length - 1 ? n ? this._hc(n) : null : i[Hd](e + 1) }, forEachByDepthFirst: function(t, i, n) {
            return this[Tv].length ? h(this[Tv], t, i, n) : !1 }, forEachByDepthFirstReverse: function(t, i, n) {
            return this.$roots[Yh] ? o(this[Tv], t, i, n) : !1 }, forEachByBreadthFirst: function(t, i) {
            return this[Tv].length ? u(this[Tv], t, i) : !1 }, forEachByBreadthFirstReverse: function(t, i) {
            return this.$roots[Yh] ? _(this[Tv], t, i) : !1 }, clear: function() {
            return T(this, zz, Ba) ? (this.$roots[Ba](), this.selectionModel[Ba](), !0) : !1 } }, p(zz, Gz), Z(zz[nr], { selectionModel: { get: function() {
                return this._selectionModel } }, roots: { get: function() {
                return this[Tv] } } });
    var qz = function(t) { w(this, qz), this.box = t, this._n6oxChangeListener = { onEvent: function(t) { $z[ev] == t[Ed] ? null != t[Jo] ? this[Kh](t[Jo]) : null != t[pd] && this[Kh](t[pd]) : $z[sv] == t[Ed] && this[Ba]() } }, this.box[bv][Sv](this[jv], this) };
    qz[nr] = { box: null, isSelected: function(t) {
            return this[Ud](t.id || t) }, select: function(t) {
            return this.add(t) }, unselect: function(t) {
            return this.remove(t) }, reverseSelect: function(t) {
            return this[d_](t) ? this[Kh](t) : this.add(t) }, accept: function(t) {
            return this.box[d_](t) } }, p(qz, Gz);
    var Yz = null,
        Hz = null,
        Uz = function() {
            if (!i.createElement) return function(t) {
                return t };
            var t = i[Ya](p_),
                e = t[ea],
                s = {};
            return function(t) {
                if (s[t]) return s[t];
                var i = _i(t);
                return e[i] !== n || Hz && e[i = _i(Hz + i)] !== n ? (s[t] = i, i) : t } }(),
        Wz = {};
    ! function() {
        if (!i[Av]) return !1;
        for (var e = i[Av], s = "Webkit Moz O ms Khtml" [fo](xr), h = 0; h < s[Yh]; h++)
            if (e[ea][s[h] + Cv] !== n) { Hz = ta + s[h].toLowerCase() + ta;
                break }
        var r = i[Ya](ea);
        t[Lv] || r.appendChild(i.createTextNode("")), r.type = Pv, r.id = Rv, e[Cc](r), Yz = r.sheet;
        var a, o;
        for (var f in Wz) {
            var c = Wz[f];
            a = f, o = "";
            for (var u in c) o += Uz(u) + sa + c[u] + Dv;
            yi(a, o) } }();
    var Vz = function(t, i, n, e, s) {
            if (s) {
                var h = function(t) { h.handle.call(h[Vl], t) };
                return h[Vl] = s, h.handle = n, t[Nv](i, h, e), h }
            return t[Nv](i, n, e), n },
        Xz = function(t, i, n) { t[Bv](i, n) };
    if (cz[$v] = 200, cz[Fv] = 800, t[Od] && navigator.userAgent) {
        var Kz, Zz = /mobile|tablet|ip(ad|hone|od)|android/i,
            Jz = k_ in t,
            Qz = Jz && Zz[No](navigator[Id]);
        if (Qz) Kz = Gv;
        else {
            var tq = zv in t ? "mousewheel" : qv;
            Kz = Yv + tq, Jz && (Kz += Hv) }
        Kz = Kz.split(/[\s,]+/);
        var iq = function(i) {
                return t.TouchEvent && i instanceof t[Uv] },
            nq = function() {
                return cz[$v] },
            eq = function() {
                return cz[Fv] },
            F = function(t) { t.preventDefault ? t[kr]() : t[Wv] = !1 },
            G = function(t) { t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0 },
            z = function(t) { F(t), G(t) },
            sq = function(t) {
                return t[Vv] || t[Wv] === !1 },
            hq = function(t) { uq[Xv] && uq[Xv][Kv](t) },
            rq = function(t) {
                if (uq[Xv]) {
                    var i = uq[Xv];
                    i[Zv](t), aq(null) } },
            aq = function(t) { uq._n7urrentItem != t && (uq[Xv] && (uq[Xv][Jv] = !1), uq[Xv] = t) },
            oq = function(i, n) { Kz[Rc](function(t) { i[Nv](t, n, !1) }), oz || uq[Tu] || (uq._n5w = !0, t.addEventListener(Qv, hq, !0), t[Nv](tb, rq, !0)) },
            fq = function(t, i) { Kz[Rc](function(n) { t.removeEventListener(n, i, !1) }) },
            cq = function(t) {
                return t.touches ? { timeStamp: t.timeStamp, x: t.cx, y: t.cy } : { timeStamp: t[ib], x: t[ua], y: t[_a] } };
        mi[nr] = { _install: function() { this[nb] || (this[nb] = function(t) { this[eb](t) }.bind(this), oq(this._m4, this.__n5ction)) }, _uninstall: function() { this[nb] && fq(this._m4, this[nb]) }, _n5ction: function(t) { t = this[sb](t);
                var i = t.type;
                this[hb](t, i) === !1 && this[rb](t, ab + i) }, _n7ancelLongPressTimer: function() { this[ob] && (clearTimeout(this[ob]), this[ob] = null) }, __kvLongPress: function(t) { this.__onLongPressFunction || (this[fb] = function() { this[cb] && (this[ub] = !0, this[cb][_b] ? this._onEvent(this._kvEvent, db) : this[rb](this[cb], lb)) }[br](this)), this._n7ancelLongPressTimer(), this[ob] = setTimeout(this.__onLongPressFunction, eq(t)) }, __fixTouchEvent: function(t) {
                for (var i, n, e = 0, s = 0, h = t[Gr][Yh], r = 0; h > r;) {
                    var a = t[Gr][r++],
                        o = a.clientX,
                        f = a.clientY;
                    if (2 == r) {
                        var c = n[0] - o,
                            u = n[1] - f;
                        i = Math[_o](c * c + u * u) }
                    n = [o, f], e += o, s += f }
                t.cx = e / h, t.cy = s / h, t[vb] = { x: t.cx, y: t.cy, clientX: t.cx, clientY: t.cy }, t[sl] = i }, __touchCountChange: function(t) { this._dragPoints.clear(), this._9o = cq(t) }, _handleTouchEvent: function(t, i) {
                switch (i) {
                    case "touchstart":
                        G(t), this[bb](t), this[yb](t);
                        var n = t.touches[Yh];
                        this[cb] || (this[cb] = t, this._onstart(t), this[ub] = !1, this[gb](t)), 1 == n && (this[mb] = null), n >= 2 && !this[mb] && (this.__kvMulTouchEvent = { cx: t.cx, cy: t.cy, distance: t[sl] });
                        break;
                    case "touchmove":
                        z(t), this[bb](t);
                        var n = t[Gr].length;
                        if (n >= 2 && this[mb]) {
                            var e = this[mb][sl];
                            t._scale = t[sl] / e, t.dScale = this[mb].prevScale ? t[xb] / this[mb][Eb] : t._scale, this[mb][Eb] = t[xb], this[pb] || (this.__pinching = !0, this._onEvent(t, wb)) }
                        this.__dragging || (this[Jv] = !0, this[Tb](t)), this._ondrag(t), this[pb] && this._onEvent(t, kb);
                        break;
                    case "touchend":
                        z(t);
                        var n = t.touches.length;
                        n && (this[bb](t), this.__touchCountChange(t)), 1 >= n && (this[pb] && (this.__pinching = !1, this._onEvent(t, Mb)), this.__kvMulTouchEvent = null), 0 == n && (this[Jv] ? (this[Ob](t), this[Jv] = !1) : t[ib] - this[cb][ib] < .8 * nq(t) && this[Ib](this[cb]), this[Sb](t));
                        break;
                    case "touchcancel":
                        this[Jv] = !1, this[pb] = !1, this[mb] = null }
                return !1 }, _handleEvent: function(t, i) {
                if (iq(t)) return this[jb](t, i);
                if (Ab == i) G(t), aq(this), this._9o = cq(t), this._kvEvent || (this._kvEvent = t, this[Cb](t)), this[ub] = !1, this[gb](t);
                else if (tb == i) aq(), this[Sb](t);
                else if (Lb == i) {
                    if (this[Pb]) return this.__onclick(t), !0 } else if (Rb == i) {
                    if (this[Pb]) return !0 } else {
                    if (Db == i) return this._onEvent(t, Nb), this[cb] && sq(t) && aq(this), !0;
                    if (i == tq) {
                        var e = t[Bb];
                        if (e !== n ? e /= 120 : e = -t[$b], !e) return;
                        return t[Fb] = e, this[rb](t, zv) } }
                return !1 }, _onEvent: function(t, i) {
                if (this._handler) {
                    var n = this._handler;
                    if (i = i || t.type, n instanceof Function) return n(t, i);
                    if (!(n.accept instanceof Function && n[Yc](i, t) === !1)) return n[Gb] instanceof Function && n[Gb](i, t, this[zb] || this._m4), n[i] instanceof Function ? n[i][zh](n, t, this[zb] || this._m4) : void 0 } }, _toQEvent: function(t) {
                return t }, _onWindowMouseUp: function(t) { this.__dragging && (z(t), this[Jv] = !1, t = this[sb](t), this[Ob](t), this[Sb](t), this._onEvent(t, qb)) }, _kvDragDistance: 4, _onWindowMouseMove: function(t) {
                if (this[cb]) {
                    if (z(t), !this.__dragging) {
                        var i = this[cb][Yb] - t[Yb],
                            n = this._kvEvent[Hb] - t[Hb];
                        if (i * i + n * n < this[Ub]) return;
                        this.__dragging = !0, this._kvdrag(t) }
                    this[Wb](this._toQEvent(t)) } }, _delayClickEvent: !0, __onclick: function(t) {
                if (!this[ub]) {
                    var i = nq(t);
                    this[Vb] ? this.__dblclicked || (clearTimeout(this.__n7lickTimer), this.__n7lickTimer = null, this._onEvent(t, Xb), this[Kb] = !0) : (this[Kb] = !1, this[Vb] = setTimeout(function(t) { this.__n7lickTimer = null, this[Kb] || this[rb](t, Zb) }[br](this, t, i), i)) } }, _onstart: function(t) { t.button ? this[rb](t, Jb) : this[rb](t, Qb) }, _onrelease: function(t) { this[cb] && (this[ty](), t[_b] ? this._onEvent(t, iy) : this[rb](t, ny), this._kvEvent = null, this._9o = null) }, _n5ppendDragInfo: function(t) {
                var i = this._9o;
                this._9o = cq(t), this[ya].add(i, this._9o, t) }, _kvdrag: function() { this[ub] = !0, this._n7ancelLongPressTimer(), this[cb][_b] ? this._onEvent(this[cb], ey) : this[rb](this._kvEvent, sy) }, _ondrag: function(t) { this._n5ppendDragInfo(t), this._kvEvent[_b] ? this[rb](t, hy) : this[rb](t, ry) }, _enddrag: function(t) {
                if (t.timeStamp - this._9o.timeStamp < 100) {
                    var i = this[ya][ay]();
                    i && (t.vx = i.x, t.vy = i.y) }
                this._kvEvent[_b] ? this[rb](t, oy) : this[rb](t, fy), this[ya].clear() }, _i8: function() { this._ktStatus() }, _ktStatus: function() { uq[Xv] == this && delete uq[Xv], this[ty](), delete this._9o, this[cb] && (delete this._kvEvent.getData, delete this[cb].getUI, delete this[cb]) } };
        var uq = I(function(t) { this._kl = t, mi[ir](this, [t.canvasPanel, null, t]) }, { "super": mi, _mvData: function(t) {
                return this._kl[cy](t) }, _lg: function(t) {
                return this._kl[uy](t) }, _toQEvent: function(i) {
                return (i instanceof MouseEvent || t.TouchEvent && i instanceof t[Uv]) && (i.getData = this._mvData[br](this, i), i.getUI = this._lg[br](this, i)), i }, _onElementRemoved: function(t) { this[_y](function(i) { i[dy] instanceof Function && i.onElementRemoved(t, this._kl) }) }, _onElementClear: function() { this[_y](function(t) { t.onClear instanceof Function && t[ly](this._kl) }) }, _i8: function(t) { this[vy] && this[by](this._24s, t), this._n7ustomInteractionListeners && this[by](this[yy], t), this[gy]() }, _kl: null, _24s: null, _n7ustomInteractionListeners: null, _mqInteraction: function(t) {
                return this._24s == t ? !1 : (this[vy] && this[vy][Yh] && this[by](this._24s), void(this._24s = t)) }, _msCustomInteractionListener: function(t) { this[yy] || (this._n7ustomInteractionListeners = []), this._n7ustomInteractionListeners[Jh](t) }, _kcCustomInteractionListener: function(t) { this[yy] && 0 != this._n7ustomInteractionListeners[Yh] && m(this[yy], t) }, _onEvent: function(t, i, n) { this._kl[i] instanceof Function && this._kl[i][zh](this._kl, t, n), this._24s && this[my](t, i, this[vy], n), this[yy] && this[my](t, i, this._n7ustomInteractionListeners, n) }, _iuListeners: function(t) { this[vy] && l(this._24s, t, this), this._n7ustomInteractionListeners && l(this[yy], t, this) }, __onEvent: function(t, i, n, e) {
                if (!$(n)) return void this.__handleEvent(t, i, n, e);
                for (var s = 0; s < n.length; s++) {
                    var h = n[s];
                    this[xy](t, i, h, e) } }, __handleEvent: function(t, i, n, e) {
                if (!(n[Yc] instanceof Function && n.accept(i, t, this._kl, e) === !1)) { n[Gb] instanceof Function && n[Gb](i, t, this._kl, e);
                    var s = n[i];
                    s instanceof Function && s[zh](n, t, this._kl, e) } }, _i8Interaction: function(t) { t.destroy instanceof Function && t[Ey][zh](t, this._kl) }, _i8Interactions: function(t, i) {
                if (!$(t)) return void this[py](t, i);
                for (var n = 0; n < t.length; n++) {
                    var e = t[n];
                    e && this[py](e, i) } } }) }
    Ei.prototype = { limitCount: 10, points: null, add: function(t, i, n) { 0 == this[go][Yh] && (this[wy] = t.x, this._kvY = t.y);
            var e = i.timeStamp - t[ib] || 1;
            n[Ty] = e;
            var s = i.x - t.x,
                h = i.y - t.y;
            n.dx = s, n.dy = h, n[ky] = this[wy], n[My] = this[Oy], n[Iy] = i.x - this[wy], n.totalDeltaY = i.y - this[Oy], this.points.splice(0, 0, { interval: e, dx: s, dy: h }), this[go][Yh] > this.limitCount && this[go].pop() }, getCurrentSpeed: function() {
            if (!this[go].length) return null;
            for (var t = 0, i = 0, n = 0, e = 0, s = this[go][Yh]; s > e; e++) {
                var h = this.points[e],
                    r = h.interval;
                if (r > 150) { t = 0;
                    break }
                if (t += r, i += h.dx, n += h.dy, t > 300) break }
            return 0 == t || 0 == i && 0 == n ? null : { x: i / t, y: n / t } }, clear: function() { this[go] = [] } };
    var _q, dq, lq, vq;
    QG ? (_q = Sy, dq = jy, lq = Ay, vq = Cy) : tz ? (_q = Ly, dq = Py, lq = Ry, vq = Dy) : (_q = Ny, dq = Ny, lq = id, vq = By);
    var bq = $y,
        yq = Math.PI,
        gq = Math.pow,
        mq = Math.sin,
        xq = 1.70158,
        Eq = {
            swing: function(t) {
                return -Math.cos(t * yq) / 2 + .5 },
            easeNone: function(t) {
                return t },
            easeIn: function(t) {
                return t * t },
            easeOut: function(t) {
                return (2 - t) * t },
            easeBoth: function(t) {
                return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2)) },
            easeInStrong: function(t) {
                return t * t * t * t },
            easeOutStrong: function(t) {
                return 1 - --t * t * t * t },
            easeBothStrong: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t) },
            elasticIn: function(t) {
                var i = .3,
                    n = i / 4;
                return 0 === t || 1 === t ? t : -(gq(2, 10 * (t -= 1)) * mq(2 * (t - n) * yq / i)) },
            elasticOut: function(t) {
                var i = .3,
                    n = i / 4;
                return 0 === t || 1 === t ? t : gq(2, -10 * t) * mq(2 * (t - n) * yq / i) + 1 },
            elasticBoth: function(t) {
                var i = .45,
                    n = i / 4;
                return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * gq(2, 10 * (t -= 1)) * mq(2 * (t - n) * yq / i) : gq(2, -10 * (t -= 1)) * mq(2 * (t - n) * yq / i) * .5 + 1 },
            backIn: function(t) {
                return 1 === t && (t -= .001), t * t * ((xq + 1) * t - xq) },
            backOut: function(t) {
                return (t -= 1) * t * ((xq + 1) * t + xq) + 1 },
            backBoth: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * (((xq *= 1.525) + 1) * t - xq) : .5 * ((t -= 2) * t * (((xq *= 1.525) + 1) * t + xq) + 2) },
            bounceIn: function(t) {
                return 1 - Eq[Fy](1 - t) },
            bounceOut: function(t) {
                var i, n = 7.5625;
                return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375 },
            bounceBoth: function(t) {
                return .5 > t ? .5 * Eq.bounceIn(2 * t) : .5 * Eq[Fy](2 * t - 1) + .5
            }
        },
        pq = function(t) { this._jt = t };
    pq[nr] = { _jt: null, _83: function() { this[Gy] instanceof Function && (this[Gy](), this[Gy] = null) }, _kv: function(t) {
            var i = Date.now();
            this._m2(), this[Gy] = t, this._requestID = requestAnimationFrame(function n() {
                var t = Date.now(),
                    e = t - i;
                return !e || this._jt && this._jt(e) !== !1 ? (i = t, void(this[zy] = requestAnimationFrame(n.bind(this)))) : void this._m2() }[br](this)) }, _6b: function() {}, _m2: function() {
            return this[zy] ? (this._6b(), this._83(), t[qy](this[zy]), void delete this[zy]) : !1 }, _ds: function() {
            return null != this[zy] } };
    var wq = function(t, i, n, e) { this[Yy] = t, this[zb] = i || this, this._3g = e, n && n > 0 && (this._if = n) };
    wq[nr] = { _if: 1e3, _3g: null, _dw: 0, _m2: function() {
            return this._dw = 0, this[Hy] = 0, T(this, wq, Uy) }, _n7j: 0, _jt: function(t) {
            if (this._dw += t, this._dw >= this._if) return this[Yy][zh](this[zb], 1, (1 - this[Hy]) * this._if, t, this._if), !1;
            var i = this._dw / this._if;
            return this._3g && (i = this._3g(i)), this._onStep[zh](this[zb], i, (i - this._n7j) * this._if, t, this._if) === !1 ? !1 : void(this._n7j = i) } }, p(wq, pq);
    var Tq = function(t) { ni(t) },
        kq = { version: Wy, extend: p, doSuperConstructor: w, doSuper: T, createFunction: function(t, i) {
                return i[br](t) }, setClass: L, appendClass: P, removeClass: R, forEach: l, forEachReverse: b, isNumber: D, isString: N, isBoolean: B, isArray: $, eventPreventDefault: F, eventStopPropagation: G, stopEvent: z, callLater: A, nextFrame: C, forEachChild: e, forEachByDepthFirst: h, forEachByDepthFirstReverse: o, forEachByBreadthFirst: u, randomInt: q, randomBool: Y, randomColor: U, addEventListener: Vz, getFirstElementChildByTagName: dz };
    kq[Vy] = oz, kq[Xy] = hz, kq[Gf] = ri, kq[Ky] = ai, kq.Rect = gz, kq.Size = yz, kq[Zy] = lz, kq.Insets = mz, kq[Jy] = Sz, kq[Qy] = jz, kq[tg] = $z, kq[ig] = Rz, kq[ng] = Dz, kq.Position = xz, kq[eg] = Fz, kq[sg] = qz, kq[hg] = zz, kq[rg] = Bz, kq.loadURL = Ti, kq[ag] = pi, kq[og] = wi, kq[fg] = xi, kq.calculateDistance = vz, kq.HashList = uz, kq.DragSupport = mi, kq[cg] = function(t) { alert(t) }, kq.prompt = function(t, i, n, e) {
        var s = prompt(t, i);
        return s != i && n ? n[zh](e, s) : s }, kq.confirm = function(t, i, n) {
        var e = confirm(t);
        return e && i ? i.call(n) : e }, kq[ug] = yi;
    var Mq = { IMAGE_ADJUST_FLIP: _g, IMAGE_ADJUST_MIRROR: dg, SELECTION_TYPE_BORDER_RECT: lg, SELECTION_TYPE_BORDER: vg, SELECTION_TYPE_SHADOW: bg, NS_SVG: "http://www.w3.org/2000/svg", PROPERTY_TYPE_ACCESSOR: 0, PROPERTY_TYPE_STYLE: 1, PROPERTY_TYPE_CLIENT: 2, EDGE_TYPE_DEFAULT: null, EDGE_TYPE_ELBOW: yg, EDGE_TYPE_ELBOW_HORIZONTAL: gg, EDGE_TYPE_ELBOW_VERTICAL: mg, EDGE_TYPE_ORTHOGONAL: xg, EDGE_TYPE_ORTHOGONAL_HORIZONTAL: Eg, EDGE_TYPE_ORTHOGONAL_VERTICAL: pg, EDGE_TYPE_HORIZONTAL_VERTICAL: wg, EDGE_TYPE_VERTICAL_HORIZONTAL: Tg, EDGE_TYPE_EXTEND_TOP: kg, EDGE_TYPE_EXTEND_LEFT: Mg, EDGE_TYPE_EXTEND_BOTTOM: Og, EDGE_TYPE_EXTEND_RIGHT: Ig, EDGE_TYPE_ZIGZAG: Sg, EDGE_CORNER_NONE: C_, EDGE_CORNER_ROUND: uf, EDGE_CORNER_BEVEL: jg, GROUP_TYPE_RECT: Pc, GROUP_TYPE_CIRCLE: Ag, GROUP_TYPE_ELLIPSE: Cg, SHAPE_CIRCLE: Lg, SHAPE_RECT: Pc, SHAPE_ROUNDRECT: Pg, SHAPE_STAR: Rg, SHAPE_TRIANGLE: Dg, SHAPE_HEXAGON: Ng, SHAPE_PENTAGON: Bg, SHAPE_TRAPEZIUM: $g, SHAPE_RHOMBUS: Fg, SHAPE_PARALLELOGRAM: Gg, SHAPE_HEART: zg, SHAPE_DIAMOND: qg, SHAPE_CROSS: Yg, SHAPE_ARROW_STANDARD: Hg, SHAPE_ARROW_1: Ug, SHAPE_ARROW_2: Wg, SHAPE_ARROW_3: Vg, SHAPE_ARROW_4: Xg, SHAPE_ARROW_5: Kg, SHAPE_ARROW_6: Zg, SHAPE_ARROW_7: Jg, SHAPE_ARROW_8: Qg, SHAPE_ARROW_OPEN: tm };
    Mq[im] = nm, Mq[em] = uf, Mq.LINE_CAP_TYPE_SQUARE = sm, Mq.LINE_JOIN_TYPE_BEVEL = jg, Mq[hm] = uf, Mq[rm] = am, cz[om] = Mq[fm], cz.SELECTION_TOLERANCE = Qz ? 8 : 3, cz[cm] = 2, cz[um] = 7, cz[_m] = X(3422561023), cz.SELECTION_TYPE = Mq[fm], cz[dm] = 10, cz[lm] = 10, cz[i_] = 10, cz[vm] = 200, cz[oo] = 1.2;
    var Oq = t[bm] || 1;
    1 > Oq && (Oq = 1);
    var Iq;
    kq[ym] = Ci;
    var Sq = nz && !oz,
        jq = 9,
        Aq = function(t, i, n, e) {
            var s = t - n,
                h = i - e;
            return s * s + h * h };
    Qi[nr] = { equals: function(t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r } }, Qi[bo] = function(t, i, n) {
        if (!n) return Zi(t, i);
        var e = Aq(t.x, t.y, i.x, i.y),
            s = Aq(t.x, t.y, n.x, n.y),
            h = Aq(n.x, n.y, i.x, i.y);
        if (e + Cq >= s + h) return Zi(t, i, 0, n);
        if (s + Cq >= e + h) return Zi(t, n, 0, i);
        if (h + Cq >= e + s) return Zi(i, n, 0, t);
        var r;
        Math.abs(n.y - i.y) < 1e-4 && (r = t, t = i, i = r), r = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
        var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * r),
            o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
        return new Qi(a, o, vz(a, o, t.x, t.y), t, i, n) };
    var Cq = .01,
        Lq = { _n68: function(t, i, e, s, h) {
                if (N(t) && (t = xz[Vr](t)), !t) return { x: 0, y: 0 };
                var r = 0,
                    a = 0,
                    o = i._j3;
                if (e = e || 0, t.x === n) {
                    var f = t[Xr],
                        c = t.verticalPosition,
                        u = !0;
                    switch (f) {
                        case wz:
                            u = !1;
                            break;
                        case pz:
                            r += o / 2 }
                    switch (c) {
                        case Tz:
                            a -= e / 2;
                            break;
                        case Mz:
                            a += e / 2 } } else r = t.x, a = t.y, Math.abs(r) > 0 && Math.abs(r) < 1 && (r *= o);
                h && null != s && (a += s.y, r += Math.abs(s.x) < 1 ? s.x * o : s.x);
                var _ = on[zh](i, r, a, u);
                return _ ? (h || null == s || _[gm](s), _) : { x: 0, y: 0 } }, _lh: function(t, i) {
                var n = i[Ko],
                    e = i[go];
                switch (n) {
                    case hY:
                        t[mm](e[0], e[1], e[2], e[3], i._r);
                        break;
                    case iY:
                        t[Kc](e[0], e[1]);
                        break;
                    case nY:
                        t[Jc](e[0], e[1]);
                        break;
                    case eY:
                        t.quadraticCurveTo(e[0], e[1], e[2], e[3]);
                        break;
                    case sY:
                        t.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]);
                        break;
                    case rY:
                        t[vf]() } }, _55: function(t, i, n, e) {
                var s = i[Ko];
                if (s != iY && s != rY) {
                    var h = n.lastPoint,
                        r = i[go];
                    switch (n[Ko] == iY && t.add(h.x, h.y), s) {
                        case hY:
                            un(i, h.x, h.y, r[0], r[1], r[2], r[3], r[4]), t.add(r[0], r[1]), t.add(i._p1x, i[Lo]), t.add(i[Oo], i[Po]), i[xm] && t.add(i[xm].x, i[xm].y), i.$boundaryPoint2 && t.add(i.$boundaryPoint2.x, i[Em].y);
                            break;
                        case nY:
                            t.add(r[0], r[1]);
                            break;
                        case eY:
                            zi([h.x, h.y].concat(r), t);
                            break;
                        case sY:
                            Wi([h.x, h.y][Vh](r), t);
                            break;
                        case rY:
                            e && t.add(e.points[0], e[go][1]) } } }, _4m: function(t, i, n) {
                var e = t[Ko];
                if (e == iY) return 0;
                var s = i[ko],
                    h = t[go];
                switch (e == sY && 4 == h[Yh] && (e = eY), e) {
                    case nY:
                        return vz(h[0], h[1], s.x, s.y);
                    case hY:
                        return t._j3;
                    case eY:
                        var r = Yi([s.x, s.y].concat(h));
                        return t._lf = r, r(1);
                    case sY:
                        var r = Xi([s.x, s.y][Vh](h));
                        return t._lf = r, r(1) || Vi([s.x, s.y][Vh](h));
                    case rY:
                        if (s && n) return t.points = n[go], vz(n.points[0], n[go][1], s.x, s.y) }
                return 0 } },
        Pq = /^data:image\/(\w+);base64,/i,
        Rq = /^gif/i,
        Dq = /^svg/i,
        Nq = 10,
        Bq = 11,
        $q = 12,
        Fq = 20,
        Gq = 30;
    cz[$o] = 50, cz[Fo] = 30, cz[pm] = 1e6;
    var zq = 1,
        qq = 2,
        Yq = 3;
    bn[nr] = { _jb: 0, _5x: !0, _ky: null, _j1: null, _m5: null, _m7: null, _n53: n, _8z: n, _6c: function() {
            return this._jb == zq }, getBounds: function(t) {
            return this._m7 == Gq ? this._m5.getBounds(t) : (this._5x && this._fu(), this) }, validate: function() { this._5x && this._fu() }, _fu: function() {
            if (this._5x = !1, this._m7 == Gq) return this._m5[Wo](), void this[kf](this._m5[yo]);
            if (this._m7 == Fq) return void this._94();
            if (this._jb != zq) try { this._dy() } catch (t) { this._jb = Yq, kq[wm](t) } }, _58: function() { this._di(), this[Tm][Ba](), delete this[Tm] }, _hv: function(t) { this._ky && this._ky[km] && this._ky.parentNode.removeChild(this._ky), this._jb = Yq, kq[wm](Mm + this._m5), this[Om] = null, this._j1 = null, this._ky = null, t !== !1 && this._58() }, _dy: function() {
            var t = this._m5;
            if (this._jb = zq, this[Tm] = new Dz, this._m7 == $q) {
                for (var n in bY) this[n] = bY[n];
                return void Vn(this._m5, this, this._n7o, this._hv, this._ec) }
            this._ky || (this._ky = i.createElement(T_), KG && (this._ky[ea][Im] = A_, i[Sm][Cc](this._ky))), this._ky.src = t, this._ky[Da] && (this.width = this._ky[Da], this.height = this._ky.height), this._ky.onload = KG ? function(t) { setTimeout(this._7i.bind(this, t), 100) }[br](this) : this._7i[br](this), this._ky[_c] = this._hv[br](this) }, _7i: function() { this._jb = qq;
            var t = this._ky[Da],
                i = this._ky[Na];
            if (this._ky.parentNode && this._ky.parentNode.removeChild(this._ky), !t || !i) return void this._hv();
            this.width = t, this.height = i;
            var n = this._e0();
            n.width = t, n[Na] = i, n.g[H_](this._ky, 0, 0, t, i), this._pixels = KG && this._m7 == Bq ? null : wn(n), this._58() }, _94: function() {
            var t = this._m5;
            if (!(t[Uo] instanceof Function)) return void this._hv(!1);
            if (t[jm] === !1 && t[Da] && t[Na]) return this[Da] = t[Da], void(this[Na] = t[Na]);
            var i = t[Da] || cz.IMAGE_MAX_SIZE,
                n = t[Na] || cz.IMAGE_MAX_SIZE,
                e = this._e0();
            e[Da] = i, e[Na] = n;
            var s = e.g;
            t[Uo](s);
            var h = Ni(s, 0, 0, i, n);
            if (h) {
                var r = kn(h.data, i, n);
                this.x = r._x, this.y = r._y, this[Da] = r._width, this[Na] = r[Am], e[Da] = this[Da], e.height = this[Na], s.putImageData(h, -this.x, -this.y), this[Om] = r } }, _e0: function() {
            return this._j1 || (this._j1 = Ci()) }, _66: function(t, i, n, e, s, h) { i.save(), i[Pc](0, 0, e, s), i[Cm] = h || Lm, i.fill(), i[Pm](), i[no] = vb, i[eo] = so, i[Cm] = q_;
            var r = 6 * (i[Ha][Va] || 1);
            i[io] = Rm + r + "px Verdana,helvetica,arial,sans-serif", i[Dm] = G_, i[wo] = 1, i[Nm](t, e / 2 + .5, s / 2 + .5), i[Dm] = Bm, i[Nm](t, e / 2 - .5, s / 2 - .5), i[ro](t, e / 2, s / 2), i[ao]() }, draw: function(t, i, n, e, s, h) {
            if (this[Da] && this.height) { i = i || 1, e = e || 1, s = s || 1;
                var r = this[Da] * e,
                    a = this[Na] * s;
                if (h && n.shadowColor && (t[z_] = n[z_], t.shadowBlur = (n[$m] || 0) * i, t[Fm] = (n[Fm] || 0) * i, t[Gm] = (n[Gm] || 0) * i), this._jb == zq) return this._66(zm, t, i, r, a, n[qm]);
                if (this._jb == Yq) return this._66(Ym, t, i, r, a, n[qm]);
                if (this._m7 == Gq) return t[Qa](e, s), void this._m5[Uo](t, i, n);
                var o = this._gk(i, e, s);
                return o ? ((this.x || this.y) && t[Ja](this.x * e, this.y * s), t[Qa](e / o[Qa], s / o[Qa]), void o._lh(t, n[qm], n[Hm])) : void this._j0(t, i, e, s, this[Da] * e, this[Na] * s, n) } }, _j0: function(t, i, n, e, s, h, r) {
            if (this._m7 == Fq) return 1 != n && 1 != e && t[Qa](n, e), void this._m5.draw(t, r);
            if (this._ky) {
                if (!iz) return void t[H_](this._ky, 0, 0, s, h);
                var n = i * s / this[Da],
                    e = i * h / this[Na];
                t.scale(1 / n, 1 / e), t.drawImage(this._ky, 0, 0, s * n, h * e) } }, _jd: null, _gk: function(t, i, n) {
            if (this._m7 == Fq && this._m5[jm] === !1) return null;
            if (this._m7 == Nq || (t *= Math.max(i, n)) <= 1) return this[Um] || (this[Um] = this._gt(this._j1 || this._ky, 1)), this[Um];
            var e = this._jd[Wm] || 0;
            if (t = Math[Xh](t), e >= t) {
                for (var s = t, h = this._jd[s]; !h && ++s <= e;) h = this._jd[s];
                if (h) return h }
            t % 2 && t++;
            var r = this[Da] * t,
                a = this[Na] * t;
            if (r * a > cz[pm]) return null;
            var o = Ci(r, a);
            return (this.x || this.y) && o.g.translate(-this.x * t, -this.y * t), this._j0(o.g, 1, t, t, r, a), this._gt(o, t) }, _gt: function(t, i) {
            var n = new cY(t, i);
            return this._jd[i] = n, this._jd[Wm] = i, n }, hitTest: function(t, i, n) {
            if (this._m7 == Gq) return this._m5[l_][ir](this._m5, arguments);
            if (!(this[Om] || this._ky && this._ky._pixels)) return !0;
            var e = this[Om] || this._ky._pixels;
            return e._ii(t, i, n) }, _di: function() { this._dispatcher && this._dispatcher[ur](new Sz(this, Vm, Xm, this._ky)) }, _n52: function(t, i) { this[Tm] && this[Tm][Sv](t, i) }, _64: function(t, i) { this[Tm] && this[Tm][Xl](t, i) }, _n73: function(t) { this._jd = {}, (t || this.width * this[Na] > 1e5) && (this._ky = null, this._j1 = null) } }, p(bn, gz);
    var Hq = {};
    kq[H_] = En, kq[Km] = yn, kq[Zm] = mn, kq.getAllImages = function() {
        var t = [];
        for (var i in Hq) t.push(i);
        return t };
    var Uq = function(t, i, n, e, s, h) { this[Ko] = t, this[Jm] = i, this[Qm] = n, this[__] = e || 0, this.tx = s || 0, this.ty = h || 0 };
    Mq.GRADIENT_TYPE_RADIAL = ll, Mq[tx] = _l, Uq[nr] = { type: null, colors: null, positions: null, angle: null, tx: 0, ty: 0, position: xz[xl], isEmpty: function() {
            return null == this[Jm] || 0 == this.colors.length }, _5v: function() {
            var t = this[Jm][Yh];
            if (1 == t) return [0];
            for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i[Jh](n * e);
            return this[Qm] || (this.positions = i), i }, generatorGradient: function(t) {
            if (null == this.colors || 0 == this[Jm][Yh]) return null;
            var i, n = Li();
            if (this[Ko] == Mq.GRADIENT_TYPE_LINEAR) {
                var e = this[__];
                e > Math.PI && (e -= Math.PI);
                var s;
                if (e <= Math.PI / 2) {
                    var h = Math[qr](t[Na], t.width),
                        r = Math.sqrt(t[Da] * t[Da] + t.height * t[Na]),
                        a = h - e;
                    s = Math.cos(a) * r } else {
                    var h = Math[qr](t.width, t[Na]),
                        r = Math[_o](t.width * t[Da] + t[Na] * t[Na]),
                        a = h - (e - Math.PI / 2);
                    s = Math.cos(a) * r }
                var o = s / 2,
                    f = o * Math.cos(e),
                    c = o * Math.sin(e),
                    u = t.x + t[Da] / 2 - f,
                    _ = t.y + t.height / 2 - c,
                    d = t.x + t[Da] / 2 + f,
                    l = t.y + t[Na] / 2 + c;
                i = n[ix](u, _, d, l) } else {
                if (!(this.type = Mq[nx])) return null;
                var v = fi(this[Yf], t.width, t[Na]);
                v.x += t.x, v.y += t.y, this.tx && (v.x += Math.abs(this.tx) < 1 ? t.width * this.tx : this.tx), this.ty && (v.y += Math.abs(this.ty) < 1 ? t[Na] * this.ty : this.ty);
                var b = vz(v.x, v.y, t.x, t.y);
                b = Math.max(b, vz(v.x, v.y, t.x, t.y + t[Na])), b = Math.max(b, vz(v.x, v.y, t.x + t[Da], t.y + t[Na])), b = Math.max(b, vz(v.x, v.y, t.x + t[Da], t.y)), i = n[ex](v.x, v.y, 0, v.x, v.y, b) }
            var y = this[Jm],
                g = this.positions;
            g && g[Yh] == y.length || (g = this._5v());
            for (var m = 0, x = y[Yh]; x > m; m++) i[sx](g[m], y[m]);
            return i } };
    var Wq = new Uq(Mq[tx], [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
        Vq = new Uq(Mq[tx], [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], 0),
        Xq = (new Uq(Mq[tx], [X(1154272460), X(1442840575)], [.1, .9], 0), new Uq(Mq[nx], [X(2298478591), X(1156509422), X(1720223880), X(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
        Kq = [X(0), X(4294901760), X(4294967040), X(4278255360), X(4278250239), X(4278190992), X(4294901958), X(0)],
        Zq = [0, .12, .28, .45, .6, .75, .8, 1],
        Jq = new Uq(Mq[tx], Kq, Zq),
        Qq = new Uq(Mq.GRADIENT_TYPE_LINEAR, Kq, Zq, Math.PI / 2),
        tY = new Uq(Mq[nx], Kq, Zq);
    Uq.LINEAR_GRADIENT_VERTICAL = Wq, Uq[hx] = Vq, Uq[rx] = Xq, Uq[ax] = Jq, Uq[ox] = Qq, Uq.RAINBOW_RADIAL_GRADIENT = tY;
    var iY = vl,
        nY = _l,
        eY = fx,
        sY = dl,
        hY = cx,
        rY = ux;
    Mq.SEGMENT_MOVE_TO = iY, Mq[_x] = nY, Mq[dx] = eY, Mq[lx] = sY, Mq.SEGMENT_ARC_TO = hY, Mq[vx] = rY;
    var aY = function(t, i) { this.id = ++WG, $(t) ? this.points = t : (this.type = t, this[go] = i) };
    aY[nr] = { toJSON: function() {
            var t = { type: this[Ko], points: this[go] };
            return this[Zo] && (t[Zo] = !0), t }, parseJSON: function(t) { this[Ko] = t[Ko], this[go] = t[go], this[Zo] = t[Zo] }, points: null, type: nY, clone: function() {
            return new aY(this[Ko], this[go] ? y(this.points) : null) }, move: function(t, i) {
            if (this[go])
                for (var n = 0, e = this[go][Yh]; e > n; n++) {
                    var s = this[go][n];
                    kq.isNumber(s) && (this[go][n] += n % 2 == 0 ? t : i) } } }, Z(aY[nr], { lastPoint: { get: function() {
                return this.type == hY ? { x: this[Oo], y: this._p2y } : { x: this[go][this[go][Yh] - 2], y: this[go][this[go][Yh] - 1] } } }, firstPoint: { get: function() {
                return { x: this[go][0], y: this[go][1] } } } }), kq[bx] = aY;
    var oY = 0,
        fY = function(t) { this[yo] = new gz, this._fd = t || [] };
    fY[nr] = { toJSON: function() {
            var t = [];
            return this._fd.forEach(function(i) { t[Jh](i.toJSON()) }), t }, parseJSON: function(t) {
            var i = this._fd;
            t[Rc](function(t) { i[Jh](new aY(t[Ko], t[go])) }) }, clear: function() { this._fd[Yh] = 0, this[yo][Ba](), this._j3 = 0, this._5x = !0 }, _dx: !0, _6x: function(t, i) { this._dx && 0 === this._fd[Yh] && t != iY && this._fd[Jh](new aY(iY, [0, 0])), this._fd.push(new aY(t, i)), this._5x = !0 }, add: function(t) { this._fd[Jh](t), this._5x = !0 }, removePathSegment: function(t) {
            return t >= this._fd[Yh] ? !1 : (this._fd[Wh](t, 1), void(this._5x = !0)) }, moveTo: function(t, i) { this._6x(iY, [t, i]) }, lineTo: function(t, i) { this._6x(nY, [t, i]) }, quadTo: function(t, i, n, e) { this._6x(eY, [t, i, n, e]) }, curveTo: function(t, i, n, e, s, h) { this._6x(sY, [t, i, n, e, s, h]) }, arcTo: function(t, i, n, e, s) { this._6x(hY, [t, i, n, e, s]) }, closePath: function() { this._6x(rY) }, _7k: function(t, i, n, e, s) {
            if (e.selectionColor) {
                if (n == Mq[fm]) {
                    if (!e[yx]) return;
                    return t[z_] = e[gx], t[$m] = e[yx] * i, t[Fm] = (e.selectionShadowOffsetX || 0) * i, void(t[Gm] = (e[mx] || 0) * i) }
                if (n == Mq[xx]) {
                    if (!e.selectionBorder) return;
                    t[Dm] = e[gx];
                    var h = s.lineWidth || 0;
                    s[Ex] && (h += 2 * s[Ex]), t.lineWidth = e[px] + h, this._lh(t), t.stroke() } } }, _5x: !0, _fd: null, _j3: 0, lineCap: nm, lineJoin: uf, draw: function(t, i, n, e, s) { t[wx] = n[wx] || this.lineCap, t[Tx] = n[Tx] || this.lineJoin, e && (s || (s = n), this._7k(t, i, s[kx], s, n));
            var h = e && s[kx] == Mq.SELECTION_TYPE_SHADOW;
            n[Mx] && (this._lh(t), t.lineWidth = n[wo] + 2 * (n[Ex] || 0), t.strokeStyle = n[Mx], t.stroke(), h && (h = !1, t[z_] = Ox)), t.lineWidth = 0, this._lh(t), n[Ix] && (t.fillStyle = n[qm] || n[Ix], t.fill()), n[Sx] && (t[Cm] = n[jx] || n[Sx], t[po]()), n[wo] && (t[wo] = n[wo], n[Kf] && (n.lineFillColor && (t[Dm] = n.lineFillColor, t.stroke(), h && (t[z_] = Ox)), t.lineCap = n[Ax] || t.lineCap, t[Tx] = n[Cx] || t[Tx], t[Kf] = n[Kf], t[nc] = n[nc]), t.strokeStyle = n.renderColor || n[Dm], t[Eo](), t.lineDash = []) }, _lh: function(t) { t[Lx]();
            for (var i, n, e = 0, s = this._fd.length; s > e; e++) i = this._fd[e], Lq._lh(t, i, n), n = i }, invalidate: function() { this._5x = !0 }, validate: function() {
            if (this._5x = !1, this[yo].clear(), this._j3 = 0, 0 != this._fd[Yh])
                for (var t, i, n = this._fd, e = 1, s = n[0], h = s, r = n[Yh]; r > e; e++) t = n[e], t[Ko] == iY ? h = t : (Lq._55(this[yo], t, s, h), i = Lq._4m(t, s, h), t._j3 = i, this._j3 += i), s = t }, getBounds: function(t, i) {
            if (this._5x && this[Wo](), i = i || new gz, t) {
                var n = t / 2;
                i.set(this[yo].x - n, this.bounds.y - n, this[yo][Da] + t, this.bounds[Na] + t) } else i.set(this[yo].x, this.bounds.y, this[yo][Da], this[yo][Na]);
            return i }, hitTest: function(t, i, n, e, s, h) {
            return an[zh](this, t, i, n, e, s, h) }, toSegments: function() {
            return [][Vh](this._fd) }, generator: function(t, i, n, e, s) {
            return rn[zh](this, t, i, n, e, s) }, getLocation: function(t, i) {
            return on.call(this, t, i || 0) } }, Z(fY[nr], { segments: { get: function() {
                return this._fd }, set: function(t) { this[Ba](), this._fd = t } }, length: { get: function() {
                return this._5x && this[Wo](), this._j3 } }, _empty: { get: function() {
                return 0 == this._fd[Yh] } } }), Tn[nr] = { _10: function(t, i) {
            var n, e, s, h, r, a = t[Yh],
                o = 0,
                f = 0;
            for (r = 0; a > r; r += 4)
                if (t[r + 3] > 0) { n = (r + 4) / i / 4 | 0;
                    break }
            for (r = a - 4; r >= 0; r -= 4)
                if (t[r + 3] > 0) { e = (r + 4) / i / 4 | 0;
                    break }
            for (o = 0; i > o; o++) {
                for (f = n; e > f; f++)
                    if (t[f * i * 4 + 4 * o + 3] > 0) { s = o;
                        break }
                if (s >= 0) break }
            for (o = i - 1; o >= 0; o--) {
                for (f = n; e > f; f++)
                    if (t[f * i * 4 + 4 * o + 3] > 0) { h = o;
                        break }
                if (h >= 0) break }
            this._x = s, this._y = n, this[Px] = h - s + 1, this[Am] = e - n + 1, this._ja = new gz(s, n, this[Px], this[Am]), this[Rx] = this[Px] * this[Am], this[Dx] = i, this[Nx] = t }, _f7: function(t, i) {
            return this._originalPixels[4 * (t + this._x + (this._y + i) * this[Dx]) + 3] }, _ii: function(t, i, n) {
            (!n || 1 >= n) && (n = 1), n = 0 | n, t = Math[uf](t - this._x) - n, i = Math.round(i - this._y) - n, n += n;
            for (var e = t, s = i; i + n > s;) {
                for (var e = t; t + n > e;) {
                    if (this._f7(e, s)) return !0;++e }++s }
            return !1 } }, Mq.BLEND_MODE_DARKEN = Bx, Mq.BLEND_MODE_MULTIPLY = $x, Mq[sf] = Fx, Mq[hf] = Gx, Mq[rf] = zx, Mq.BLEND_MODE_SCREEN = qx, Mq[Yx] = Hx, cz[tf] = Mq.BLEND_MODE_LINEAR_BURN;
    var cY = function(t, i, n) { this._j1 = t, this[Qa] = i || 1, t instanceof Image && (n = !1), this._id = n };
    cY.prototype = { scale: 1, _j1: null, _jd: null, _id: !0, _lh: function(t, i, n) {
            if (!i || this._id === !1) return void t.drawImage(this._j1, 0, 0);
            this._jd || (this._jd = {});
            var e = i + n,
                s = this._jd[e];
            if (s || (s = In(this._j1, i, n), s || (this._id = !1), this._jd[e] = s || this._j1), s)
                if (KG) try { t[H_](s, 0, 0) } catch (h) {} else t[H_](s, 0, 0) } };
    var uY = function(t, i, n, e, s, h, r, a, o) { this._mh = Cn(t, i, n, e, s, h, r, a, o) },
        _Y = {
            server: { draw: function(t) { t[Za](), t[Ja](0, 0), t[Lx](), t[Kc](0, 0), t[Jc](40, 0), t[Jc](40, 40), t[Jc](0, 40), t[vf](), t[Pm](), t[Ja](0, 0), t[Ja](0, 0), t[Qa](1, 1), t.translate(0, 0), t.strokeStyle = Ox, t[wx] = nm, t.lineJoin = am, t.miterLimit = 4, t[Za](), t.save(), t.restore(), t[Za](), t[ao](), t[Za](), t[ao](), t[Za](), t[ao](), t[Za](), t[ao](), t[Za](), t[ao](), t.save(), t[ao](), t[Za](), t[ao](), t[Za](), t[ao](), t[Za](), t[ao](), t.save(), t.restore(), t[Za](), t[ao](), t.save(), t.restore(), t[ao](), t.save();
                    var i = t[ix](6.75, 3.9033, 30.5914, 27.7447);
                    i.addColorStop(.0493, Ux), i[sx](.0689, Wx), i[sx](.0939, Vx), i[sx](.129, Xx), i.addColorStop(.2266, Kx), i[sx](.2556, Zx), i[sx](.2869, Jx), i[sx](.3194, Qx), i[sx](.3525, tE), i[sx](.3695, iE), i[sx](.5025, nE), i[sx](.9212, eE), i[sx](1, sE), t.fillStyle = i, t.beginPath(), t[Kc](25.677, 4.113), t[hE](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t[hE](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t.bezierCurveTo(12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t[hE](9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t[hE](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t[hE](5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t[hE](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t.bezierCurveTo(22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t[hE](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t[hE](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t.bezierCurveTo(25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t.bezierCurveTo(25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t.bezierCurveTo(25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t[hE](25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t.closePath(), t[po](), t.stroke(), t[ao](), t.save(), t[Za](), t[Cm] = rE, t[Lx](), t[Kc](19.763, 6.645), t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t.bezierCurveTo(20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t[hE](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t[hE](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t[Jc](21.398, 36.253), t[hE](21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t.bezierCurveTo(21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t[hE](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t[hE](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t[Jc](4.675, 37.877), t.bezierCurveTo(4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t[hE](3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t[hE](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t[hE](3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t[Jc](2.924, 8.431), t[hE](2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t[hE](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t.bezierCurveTo(4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t[Jc](19.763, 6.645), t[vf](), t[po](), t.stroke(), t[ao](), t.restore(), t[Za](), t.fillStyle = aE, t[Lx](), t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t.closePath(), t.fill(), t[Eo](), t[ao](), t[Za](), t[Cm] = rE, t[Lx](), t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t[vf](), t[po](), t[Eo](), t.restore(), t[Za](), t.fillStyle = aE, t[Lx](), t[Kc](19.377, 17.247), t.bezierCurveTo(19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t[Jc](5.882, 18.108999999999998), t[hE](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t[Jc](5.02, 11.144), t[hE](5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t.lineTo(18.516, 10.281), t[hE](18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t[Jc](19.377, 17.247), t[vf](), t[po](), t[Eo](), t[ao](), t[Za](), t[Za](), t[Cm] = rE, t[Lx](), t[Kc](18.536, 13.176), t[hE](18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794), t[Jc](6.479, 13.794), t[hE](6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176), t.lineTo(5.861, 11.84), t[hE](5.861, 11.498, 6.137, 11.221, 6.479, 11.221), t[Jc](17.918, 11.221), t[hE](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84), t[Jc](18.535, 13.176), t[vf](), t.fill(), t[Eo](), t.restore(), t[Za](), t[Cm] = rE, t[Lx](), t[Kc](18.536, 16.551), t.bezierCurveTo(18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997), t[Jc](6.479, 17.168999999999997), t[hE](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551), t.lineTo(5.861, 15.215999999999998), t[hE](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998), t.lineTo(17.918, 14.596999999999998), t[hE](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998), t.lineTo(18.535, 16.551), t[vf](), t[po](), t[Eo](), t.restore(), t.restore(), t[ao]() } },
            exchanger2: { draw: function(t) { t[Za](), t.translate(0, 0), t[Lx](), t.moveTo(0, 0), t.lineTo(40, 0), t[Jc](40, 40), t.lineTo(0, 40), t[vf](), t[Pm](), t[Ja](0, 0), t[Ja](0, 0), t.scale(1, 1), t[Ja](0, 0), t[Dm] = Ox, t[wx] = nm, t[Tx] = am, t[oE] = 4, t[Za](), t[Za](), t[ao](), t.save(), t[ao](), t.save(), t[ao](), t.save(), t.restore(), t[Za](), t[ao](), t[Za](), t[ao](), t[Za](), t[ao](), t.save(), t[ao](), t[Za](), t[ao](), t[Za](), t.restore(), t[ao](), t[Za]();
                    var i = t[ix](.4102, 24.3613, 39.5898, 24.3613);
                    i[sx](0, Ux), i[sx](.0788, Kx), i.addColorStop(.2046, fE), i[sx](.3649, cE), i.addColorStop(.5432, uE), i.addColorStop(.6798, _E), i[sx](.7462, dE), i.addColorStop(.8508, lE), i[sx](.98, Zx), i.addColorStop(1, vE), t[Cm] = i, t[Lx](), t[Kc](.41, 16.649), t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t.bezierCurveTo(1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t[hE](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t.bezierCurveTo(26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t[hE](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t[hE](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t[hE](39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t[vf](), t[po](), t[Eo](), t[ao](), t[Za](), t[Za](), t[Cm] = rE, t[Lx](), t[Kc](16.4, 25.185), t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t[hE](3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t[hE](1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t[hE](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t[hE](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t[hE](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t.bezierCurveTo(40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t[hE](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t.bezierCurveTo(23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t[hE](13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t[vf](), t.fill(), t[Eo](), t[ao](), t[ao](), t.save(), t[Za](), t[Za](), t.save(), t[Za](), t.fillStyle = bE, t[Lx](), t.moveTo(5.21, 21.754), t[Jc](8.188, 17.922), t[Jc](9.53, 18.75), t[Jc](15.956, 16.004), t.lineTo(18.547, 17.523), t.lineTo(12.074, 20.334), t.lineTo(13.464, 21.204), t[Jc](5.21, 21.754), t.closePath(), t.fill(), t.stroke(), t[ao](), t[ao](), t[ao](), t[Za](), t.save(), t[Za](), t[Cm] = bE, t[Lx](), t[Kc](17.88, 14.61), t[Jc](9.85, 13.522), t[Jc](11.703, 12.757), t[Jc](7.436, 10.285), t[Jc](10.783, 8.942), t[Jc](15.091, 11.357), t[Jc](16.88, 10.614), t[Jc](17.88, 14.61), t.closePath(), t.fill(), t[Eo](), t[ao](), t[ao](), t[Za](), t[Za](), t.fillStyle = bE, t[Lx](), t[Kc](17.88, 14.61), t[Jc](9.85, 13.522), t.lineTo(11.703, 12.757), t[Jc](7.436, 10.285), t[Jc](10.783, 8.942), t.lineTo(15.091, 11.357), t[Jc](16.88, 10.614), t[Jc](17.88, 14.61), t[vf](), t.fill(), t.stroke(), t.restore(), t[ao](), t[ao](), t[Za](), t[Za](), t[Za](), t.fillStyle = bE, t[Lx](), t[Kc](23.556, 15.339), t.lineTo(20.93, 13.879), t[Jc](26.953, 11.304), t[Jc](25.559, 10.567), t.lineTo(33.251, 9.909), t[Jc](31.087, 13.467), t[Jc](29.619, 12.703), t[Jc](23.556, 15.339), t.closePath(), t.fill(), t[Eo](), t[ao](), t[ao](), t[ao](), t[Za](), t[Za](), t.save(), t[Cm] = bE, t.beginPath(), t[Kc](30.028, 23.383), t[Jc](24.821, 20.366), t[Jc](22.915, 21.227), t[Jc](21.669, 16.762), t[Jc](30.189, 17.942), t[Jc](28.33, 18.782), t[Jc](33.579, 21.725), t[Jc](30.028, 23.383), t.closePath(), t[po](), t[Eo](), t[ao](), t.restore(), t[Za](), t[Za](), t[Cm] = bE, t[Lx](), t.moveTo(30.028, 23.383), t[Jc](24.821, 20.366), t[Jc](22.915, 21.227), t[Jc](21.669, 16.762), t[Jc](30.189, 17.942), t[Jc](28.33, 18.782), t.lineTo(33.579, 21.725), t[Jc](30.028, 23.383), t[vf](), t.fill(), t[Eo](), t[ao](), t[ao](), t[ao](), t[ao](), t.restore(), t.restore() } },
            exchanger: { draw: function(t) { t[Za](), t[Ja](0, 0), t.beginPath(), t[Kc](0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t[Jc](0, 40), t[vf](), t[Pm](), t[Ja](0, 0), t.translate(0, 0), t.scale(1, 1), t[Ja](0, 0), t.strokeStyle = Ox, t[wx] = nm, t[Tx] = am, t[oE] = 4, t[Za](), t[Za](), t[ao](), t[Za](), t.restore(), t[Za](), t.restore(), t[Za](), t[ao](), t.save(), t[ao](), t[Za](), t[ao](), t[Za](), t[ao](), t.restore(), t.save();
                    var i = t[ix](.2095, 20.7588, 39.4941, 20.7588);
                    i[sx](0, yE), i[sx](.0788, gE), i[sx](.352, mE), i[sx](.6967, xE), i[sx](.8916, EE), i[sx](.9557, pE), i[sx](1, wE), t[Cm] = i, t[Lx](), t[Kc](39.449, 12.417), t[Jc](39.384, 9.424), t.bezierCurveTo(39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t[hE](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t[hE](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t[hE](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t[hE](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t[hE](34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t.bezierCurveTo(37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t[Jc](37.711, 30.316999999999997), t[Jc](39.281, 16.498999999999995), t[hE](39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t[hE](39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t.closePath(), t[po](), t[Eo](), t[ao](), t[Za](), t.save(), t[Za](), t[Za](), t[ao](), t[Za](), t.restore(), t[Za](), t.restore(), t.save(), t.restore(), t[Za](), t[ao](), t[Za](), t[ao](), t[Za](), t[ao](), t.save(), t[ao](), t[Za](), t.restore(), t.restore(), t[Za]();
                    var i = t[ix](19.8052, 7.7949, 19.8052, 24.7632);
                    i[sx](0, TE), i.addColorStop(.1455, kE), i[sx](.2975, ME), i.addColorStop(.4527, OE), i[sx](.6099, IE), i[sx](.7687, SE), i[sx](.9268, jE), i.addColorStop(.9754, AE), i[sx](1, CE), t.fillStyle = i, t[Lx](), t.moveTo(33.591, 24.763), t.bezierCurveTo(23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t.bezierCurveTo(3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t[hE](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t[hE](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t.bezierCurveTo(6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t.bezierCurveTo(16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t[hE](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t[hE](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t[hE](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t[hE](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t[hE](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t[hE](37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t[hE](37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t[vf](), t[po](), t[Eo](), t[ao](), t.restore(), t[ao](), t.save(), t[Za](), t.save(), t[Cm] = bE, t[Lx](), t[Kc](10.427, 19.292), t[Jc](5.735, 16.452), t[Jc](12.58, 13.8), t[Jc](12.045, 15.07), t[Jc](20.482, 15.072), t.lineTo(19.667, 17.887), t[Jc](11.029, 17.851), t[Jc](10.427, 19.292), t.closePath(), t[po](), t[Eo](), t[ao](), t[ao](), t.save(), t.save(), t.fillStyle = bE, t[Lx](), t[Kc](13.041, 13.042), t[Jc](8.641, 10.73), t.lineTo(14.82, 8.474), t.lineTo(14.373, 9.537), t[Jc](22.102, 9.479), t[Jc](21.425, 11.816), t[Jc](13.54, 11.85), t[Jc](13.041, 13.042), t.closePath(), t.fill(), t[Eo](), t.restore(), t[ao](), t[Za](), t.save(), t.fillStyle = bE, t[Lx](), t.moveTo(29.787, 16.049), t.lineTo(29.979, 14.704), t.lineTo(21.51, 14.706), t.lineTo(22.214, 12.147), t.lineTo(30.486, 12.116), t[Jc](30.653, 10.926), t.lineTo(36.141, 13.4), t[Jc](29.787, 16.049), t.closePath(), t[po](), t.stroke(), t.restore(), t[ao](), t[Za](), t[Za](), t[Cm] = bE, t[Lx](), t[Kc](28.775, 23.14), t[Jc](29.011, 21.49), t[Jc](19.668, 21.405), t[Jc](20.523, 18.295), t[Jc](29.613, 18.338), t.lineTo(29.815, 16.898), t.lineTo(35.832, 19.964), t.lineTo(28.775, 23.14), t.closePath(), t[po](), t[Eo](), t[ao](), t[ao](), t.restore(), t[ao]() } },
            cloud: { draw: function(t) { t[Za](), t[Lx](), t[Kc](0, 0), t[Jc](90.75, 0), t[Jc](90.75, 62.125), t.lineTo(0, 62.125), t[vf](), t[Pm](), t[Dm] = Ox, t[wx] = nm, t[Tx] = am, t.miterLimit = 4, t[Za]();
                    var i = t.createLinearGradient(44.0054, 6.4116, 44.0054, 51.3674);
                    i.addColorStop(0, "rgba(159, 160, 160, 0.7)"), i[sx](.9726, LE), t[Cm] = i, t[Lx](), t[Kc](57.07, 20.354), t[hE](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t.bezierCurveTo(54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t[hE](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t.bezierCurveTo(18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t.bezierCurveTo(14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t.bezierCurveTo(29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t[hE](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t.bezierCurveTo(43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t.bezierCurveTo(49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t.bezierCurveTo(66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t.bezierCurveTo(73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t[vf](), t[po](), t[Eo](), t[ao](), t[ao]() } },
            node: {
                width: 60,
                height: 100,
                draw: function(t) {
                    t[Za](), t[Ja](0, 0), t.beginPath(), t[Kc](0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t.closePath(), t[Pm](), t[Ja](0, 0), t.translate(0, 0), t.scale(1, 1), t[Ja](0, 0), t[Dm] = Ox, t[wx] = nm, t[Tx] = am, t[oE] = 4, t[Za](), t[Cm] = PE, t[Lx](), t[Kc](13.948, 31.075), t.lineTo(25.914, 31.075), t[RE](25.914, 31.075, 25.914, 31.075), t[Jc](25.914, 34.862), t.quadraticCurveTo(25.914, 34.862, 25.914, 34.862), t[Jc](13.948, 34.862), t[RE](13.948, 34.862, 13.948, 34.862), t[Jc](13.948, 31.075), t[RE](13.948, 31.075, 13.948, 31.075), t[vf](), t[po](), t.stroke(), t[ao](), t[Za](), t.fillStyle = DE, t[Lx](), t.moveTo(29.679, 35.972), t.bezierCurveTo(29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t[Jc](11.456, 37.244), t[hE](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t.lineTo(10.183, 36.136), t[hE](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t[Jc](28.407, 34.863), t[hE](29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t.lineTo(29.678, 35.972), t[vf](), t.fill(), t[Eo](), t.restore(), t.save(), t[Cm] = DE, t[Lx](), t.moveTo(.196, 29.346), t[hE](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t[Jc](37.936, 31.075), t[hE](38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t[Jc](39.665, 27.174), t.lineTo(.196, 27.174), t[Jc](.196, 29.346), t[vf](), t[po](), t[Eo](), t[ao](), t.save(), t[Cm] = NE, t[Lx](), t[Kc](37.937, 3.884), t.lineTo(1.926, 3.884), t[hE](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t[Jc](.19699999999999984, 27.12), t[Jc](39.666000000000004, 27.12), t[Jc](39.666000000000004, 5.615), t[hE](39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t[vf](), t[po](), t.stroke(), t[ao](), t[Za](), t.save(), t[ao](), t[Za](), t.restore(), t[ao](), t.save();
                    var i = t[ix](6.9609, 2.9341, 32.9008, 28.874);
                    i[sx](0, BE), i.addColorStop(1, $E), t[Cm] = i, t[Lx](), t[Kc](35.788, 6.39), t[Jc](4.074, 6.39), t[hE](3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t[Jc](2.702, 24.616), t.lineTo(37.159, 24.616), t[Jc](37.159, 7.763), t[hE](37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t[vf](), t.fill(), t.stroke(), t[ao](), t[ao]()
                }
            },
            group: { draw: function(t) { t.save(), t[Ja](0, 0), t[Lx](), t[Kc](0, 0), t[Jc](47.75, 0), t.lineTo(47.75, 40), t[Jc](0, 40), t[vf](), t[Pm](), t[Ja](0, 0), t[Ja](0, 0), t.scale(1, 1), t[Ja](0, 0), t[Dm] = Ox, t.lineCap = nm, t.lineJoin = am, t.miterLimit = 4, t[Za](), t[Za](), t.fillStyle = PE, t.beginPath(), t.moveTo(10.447, 26.005), t.lineTo(18.847, 26.005), t[RE](18.847, 26.005, 18.847, 26.005), t[Jc](18.847, 28.663), t[RE](18.847, 28.663, 18.847, 28.663), t[Jc](10.447, 28.663), t[RE](10.447, 28.663, 10.447, 28.663), t[Jc](10.447, 26.005), t[RE](10.447, 26.005, 10.447, 26.005), t[vf](), t[po](), t[Eo](), t[ao](), t[Za](), t[Cm] = DE, t[Lx](), t[Kc](21.491, 29.443), t[hE](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t[Jc](8.698, 30.338), t[hE](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t[Jc](7.8020000000000005, 29.557000000000002), t[hE](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t.lineTo(20.597, 28.662000000000003), t[hE](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t[Jc](21.491, 29.443), t.closePath(), t[po](), t[Eo](), t.restore(), t[Za](), t.fillStyle = DE, t.beginPath(), t[Kc](.789, 24.79), t.bezierCurveTo(.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t[Jc](27.289, 26.005), t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t[Jc](28.504, 23.267), t.lineTo(.789, 23.267), t[Jc](.789, 24.79), t.closePath(), t[po](), t[Eo](), t.restore(), t[Za](), t[Cm] = NE, t[Lx](), t[Kc](27.289, 6.912), t[Jc](2.006, 6.912), t.bezierCurveTo(1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t[Jc](.7889999999999997, 23.227), t[Jc](28.503999999999998, 23.227), t[Jc](28.503999999999998, 8.126), t[hE](28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t.closePath(), t.fill(), t[Eo](), t.restore(), t[Za](), t[Za](), t[ao](), t[Za](), t[ao](), t.restore(), t[Za]();
                    var i = t[ix](5.54, 6.2451, 23.7529, 24.458);
                    i.addColorStop(0, BE), i[sx](1, $E), t[Cm] = i, t[Lx](), t[Kc](25.78, 8.671), t[Jc](3.514, 8.671), t[hE](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t.lineTo(2.549, 21.466), t[Jc](26.743, 21.466), t[Jc](26.743, 9.636), t.bezierCurveTo(26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t.closePath(), t[po](), t[Eo](), t[ao](), t[ao](), t[Za](), t[Za](), t[Cm] = PE, t.beginPath(), t[Kc](27.053, 33.602), t[Jc](36.22, 33.602), t.quadraticCurveTo(36.22, 33.602, 36.22, 33.602), t[Jc](36.22, 36.501), t[RE](36.22, 36.501, 36.22, 36.501), t.lineTo(27.053, 36.501), t[RE](27.053, 36.501, 27.053, 36.501), t.lineTo(27.053, 33.602), t[RE](27.053, 33.602, 27.053, 33.602), t[vf](), t.fill(), t.stroke(), t[ao](), t[Za](), t[Cm] = DE, t[Lx](), t[Kc](39.104, 37.352), t[hE](39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t.lineTo(25.143, 38.327), t[hE](24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t[Jc](24.166, 37.477999999999994), t[hE](24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t.lineTo(38.131, 36.501), t.bezierCurveTo(38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t[Jc](39.105, 37.352), t[vf](), t[po](), t[Eo](), t[ao](), t[Za](), t[Cm] = DE, t.beginPath(), t[Kc](16.514, 32.275), t[hE](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t[Jc](45.433, 33.601), t[hE](46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t[Jc](46.758, 30.607999999999997), t.lineTo(16.514, 30.607999999999997), t[Jc](16.514, 32.275), t.closePath(), t[po](), t[Eo](), t.restore(), t[Za](), t.fillStyle = NE, t[Lx](), t.moveTo(45.433, 12.763), t[Jc](17.839, 12.763), t[hE](17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t[Jc](16.514, 30.57), t[Jc](46.757999999999996, 30.57), t.lineTo(46.757999999999996, 14.088), t[hE](46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t[vf](), t.fill(), t.stroke(), t[ao](), t[Za](), t.save(), t[ao](), t[Za](), t[ao](), t[ao](), t[Za](), i = t[ix](21.6973, 12.0352, 41.5743, 31.9122), i.addColorStop(0, BE), i[sx](1, $E), t[Cm] = i, t.beginPath(), t.moveTo(43.785, 14.683), t[Jc](19.486, 14.683), t[hE](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t[Jc](44.837, 28.649), t[Jc](44.837, 15.734), t[hE](44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t[vf](), t[po](), t.stroke(), t.restore(), t.restore(), t[Za](), t[FE] = .5, t[Lx](), t[Kc](23.709, 36.33), t.lineTo(4.232, 36.33), t[Jc](4.232, 27.199), t[Jc](5.304, 27.199), t[Jc](5.304, 35.259), t.lineTo(23.709, 35.259), t[Jc](23.709, 36.33), t[vf](), t.fill(), t.stroke(), t[ao](), t[ao]() } },
            subnetwork: { draw: function(t) { t[Za](), t[Ja](0, 0), t[Lx](), t.moveTo(0, 0), t[Jc](60.75, 0), t[Jc](60.75, 42.125), t[Jc](0, 42.125), t[vf](), t.clip(), t.translate(0, .26859504132231393), t[Qa](.6694214876033058, .6694214876033058), t.translate(0, 0), t[Dm] = Ox, t[wx] = nm, t[Tx] = am, t[oE] = 4, t[Za](), t.save(), t[ao](), t.save(), t[ao](), t[ao](), t[Za]();
                    var i = t[ix](43.6724, -2.7627, 43.6724, 59.3806);
                    i[sx](0, "rgba(159, 160, 160, 0.7)"), i[sx](.9726, LE), t[Cm] = i, t.beginPath(), t.moveTo(61.732, 16.509), t[hE](61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t[hE](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t[hE](9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t.bezierCurveTo(2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t[hE](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t[hE](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t[hE](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t[hE](74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t[hE](85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t[vf](), t[po](), t[Eo](), t.restore(), t[Za](), t[Za](), t.fillStyle = PE, t.beginPath(), t[Kc](34.966, 44.287), t[Jc](45.112, 44.287), t.quadraticCurveTo(45.112, 44.287, 45.112, 44.287), t.lineTo(45.112, 47.497), t[RE](45.112, 47.497, 45.112, 47.497), t[Jc](34.966, 47.497), t[RE](34.966, 47.497, 34.966, 47.497), t.lineTo(34.966, 44.287), t[RE](34.966, 44.287, 34.966, 44.287), t[vf](), t[po](), t[Eo](), t[ao](), t[Za](), t[Cm] = GE, t.beginPath(), t.moveTo(48.306, 48.439), t[hE](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t[Jc](32.854, 49.52), t[hE](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t.lineTo(31.771, 48.578), t.bezierCurveTo(31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t.lineTo(47.226, 47.497), t[hE](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t[Jc](48.306, 48.439), t[vf](), t[po](), t[Eo](), t.restore(), t[Za](), t.fillStyle = zE, t.beginPath(), t[Kc](23.302, 42.82), t[hE](23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t.lineTo(55.308, 44.287), t[hE](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t.lineTo(56.775, 40.98), t[Jc](23.302, 40.98), t[Jc](23.302, 42.82), t.closePath(), t[po](), t.stroke(), t[ao](), t[Za](), t[Cm] = NE, t[Lx](), t[Kc](55.307, 21.229), t[Jc](24.771, 21.229), t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t[Jc](23.301000000000002, 40.933), t[Jc](56.774, 40.933), t[Jc](56.774, 22.695), t[hE](56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t[vf](), t.fill(), t.stroke(), t[ao](), t.save(), t[Za](), t.restore(), t[Za](), t[ao](), t[ao](), t[Za](), i = t.createLinearGradient(29.04, 20.4219, 51.0363, 42.4181), i[sx](0, BE), i.addColorStop(1, $E), t[Cm] = i, t.beginPath(), t[Kc](53.485, 23.353), t.lineTo(26.592, 23.353), t.bezierCurveTo(25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t.lineTo(25.427, 38.807), t[Jc](54.647, 38.807), t[Jc](54.647, 24.517000000000003), t.bezierCurveTo(54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t.closePath(), t[po](), t[Eo](), t[ao](), t.restore(), t[ao]() } }
        };
    for (var dY in _Y) yn(qE + dY, _Y[dY]);
    var lY = function() { this.$invalidateRotate = !1;
            var t = this._fo;
            t[Ba]();
            var i = this[If] || 0,
                n = this._7m.x + i / 2,
                e = this._7m.y + i / 2,
                s = this._7m[Da] - i,
                h = this._7m[Na] - i,
                r = Fn[zh](this, { x: n, y: e });
            Yn(t, r.x, r.y, !0), r = Fn.call(this, { x: n + s, y: e }), Yn(t, r.x, r.y), r = Fn[zh](this, { x: n + s, y: e + h }), Yn(t, r.x, r.y), r = Fn[zh](this, { x: n, y: e + h }), Yn(t, r.x, r.y), this[zf] && (r = Fn[zh](this, { x: this[Nf], y: this[$f] }), Yn(t, r.x, r.y)), i && t[Of](i / 2) },
        vY = 20,
        bY = { _gq: !1, _kb: null, _n79: 0, _l4: -1, _l5: null, _ec: function(t) { this._kb || (this._kb = [], this._jb = qq), this._kb.push(t), this._ee(), this._kv() }, _kv: function() {
                if (!this._l5) {
                    var t = this;
                    this._l5 = setTimeout(function i() {
                        return t._ee() !== !1 ? void(t._l5 = setTimeout(i, t._gn())) : void delete t._l5 }, this._gn()) } }, _gn: function() {
                return Math.max(vY, this._kb[this._l4].delay) }, _ee: function() {
                return this._gm(this._l4 + 1) }, _gm: function(t) {
                if (this._gq) t %= this._n79;
                else if (t >= this._kb.length) return !1;
                if (this._l4 == t) return !1;
                this._l4 = t;
                var i = this._kb[this._l4],
                    n = i[YE];
                return n || (i._n7ache = n = Ci(this.width, this[Na]), n.g[cf](i.data, 0, 0), n._pixels = i[Om]), this._ky = n, this[Tf] = !0, this._di() }, _n7o: function() {
                return this._kb ? (this._gq = !0, this[HE] = this._kb[Yh], 1 == this[HE] ? this._di() : void this._kv()) : void this._hv() }, _m2: function() { this._l5 && (clearTimeout(this._l5), delete this._l5) }, _di: function() {
                var t = this[Tm][Wl];
                if (!t || !t.length) return !1;
                for (var i = new Sz(this, Vm, Xm, this._ky), n = 0, e = t[Yh]; e > n; n++) {
                    var s = t[n];
                    s.scope._jr && s.scope._jr._i8ed ? (t[Wh](n, 1), n--, e--) : s[ur][zh](s[Vl], i) }
                return t.length > 0 }, _n52: function(t, i) { this[Tm].addListener(t, i), this._gq && !this._l5 && this._kv() }, _64: function(t, i) { this[Tm][Xl](t, i), this[Tm][UE]() || this._m2() }, _i8: function() { this._m2(), this[Tm].clear() }, _gk: function() {
                var t = this._ky[WE];
                return t || (this._ky[WE] = t = new cY(this._ky, 1)), t } },
        yY = function(t) {
            return t[VE](function(t, i) {
                return 2 * t + i }, 0) },
        gY = function(t) {
            for (var i = [], n = 7; n >= 0; n--) i[Jh](!!(t & 1 << n));
            return i },
        mY = function(t) { this[Jo] = t, this.len = this[Jo][Yh], this.pos = 0, this.readByte = function() {
                if (this.pos >= this.data.length) throw new Error("Attempted to read past end of stream.");
                return 255 & t[vc](this.pos++) }, this[XE] = function(t) {
                for (var i = [], n = 0; t > n; n++) i[Jh](this.readByte());
                return i }, this[KE] = function(t) {
                for (var i = "", n = 0; t > n; n++) i += String.fromCharCode(this.readByte());
                return i }, this[ZE] = function() {
                var t = this[XE](2);
                return (t[1] << 8) + t[0] } },
        xY = function(t, i) {
            for (var n, e, s = 0, h = function(t) {
                    for (var n = 0, e = 0; t > e; e++) i[vc](s >> 3) & 1 << (7 & s) && (n |= 1 << e), s++;
                    return n }, r = [], a = 1 << t, o = a + 1, f = t + 1, c = [], u = function() { c = [], f = t + 1;
                    for (var i = 0; a > i; i++) c[i] = [i];
                    c[a] = [], c[o] = null };;)
                if (e = n, n = h(f), n !== a) {
                    if (n === o) break;
                    if (n < c.length) e !== a && c.push(c[e][Vh](c[n][0]));
                    else {
                        if (n !== c[Yh]) throw new Error(JE);
                        c.push(c[e][Vh](c[e][0])) }
                    r[Jh][ir](r, c[n]), c[Yh] === 1 << f && 12 > f && f++ } else u();
            return r },
        EY = function(t, i) { i || (i = {});
            var n = function(i) {
                    for (var n = [], e = 0; i > e; e++) n[Jh](t.readBytes(3));
                    return n },
                e = function() {
                    var i, n;
                    n = "";
                    do i = t.readByte(), n += t[KE](i); while (0 !== i);
                    return n },
                s = function() {
                    var e = {};
                    if (e.sig = t[KE](3), e.ver = t[KE](3), QE !== e.sig) throw new Error(tp);
                    e[Da] = t.readUnsigned(), e[Na] = t.readUnsigned();
                    var s = gY(t[ip]());
                    e[np] = s[ep](), e[sp] = yY(s.splice(0, 3)), e[hp] = s[ep](), e[rp] = yY(s[Wh](0, 3)), e[ap] = t[ip](), e[op] = t[ip](), e.gctFlag && (e.gct = n(1 << e.gctSize + 1)), i.hdr && i.hdr(e) },
                h = function(n) {
                    var s = function(n) {
                            var e = (t.readByte(), gY(t[ip]()));
                            n[fp] = e[Wh](0, 3), n[rc] = yY(e.splice(0, 3)), n[cp] = e[ep](), n[ec] = e.shift(), n[hc] = t[ZE](), n.transparencyIndex = t[ip](), n[up] = t[ip](), i.gce && i.gce(n) },
                        h = function(t) { t[_p] = e(), i.com && i.com(t) },
                        r = function(n) { t[ip](), n[dp] = t[XE](12), n[lp] = e(), i.pte && i.pte(n) },
                        a = function(n) {
                            var s = function(n) { t.readByte(), n[vp] = t[ip](), n[bp] = t.readUnsigned(), n[up] = t.readByte(), i.app && i.app[yp] && i.app[yp](n) },
                                h = function(t) { t[gp] = e(), i.app && i.app[t[mp]] && i.app[t.identifier](t) };
                            switch (t[ip](), n[mp] = t[KE](8), n[xp] = t[KE](3), n[mp]) {
                                case "NETSCAPE":
                                    s(n);
                                    break;
                                default:
                                    h(n) } },
                        o = function(t) { t[Jo] = e(), i.unknown && i[vp](t) };
                    switch (n.label = t[ip](), n[Ep]) {
                        case 249:
                            n[pp] = wp, s(n);
                            break;
                        case 254:
                            n[pp] = Tp, h(n);
                            break;
                        case 1:
                            n[pp] = kp, r(n);
                            break;
                        case 255:
                            n.extType = Mp, a(n);
                            break;
                        default:
                            n.extType = vp, o(n) } },
                r = function(s) {
                    var h = function(t, i) {
                        for (var n = new Array(t.length), e = t[Yh] / i, s = function(e, s) {
                                var h = t.slice(s * i, (s + 1) * i);
                                n[Wh].apply(n, [e * i, i][Vh](h)) }, h = [0, 4, 2, 1], r = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++)
                            for (var f = h[o]; e > f; f += r[o]) s(f, a), a++;
                        return n };
                    s[fc] = t[ZE](), s[ac] = t.readUnsigned(), s.width = t[ZE](), s[Na] = t.readUnsigned();
                    var r = gY(t[ip]());
                    s[Op] = r.shift(), s.interlaced = r.shift(), s[hp] = r[ep](), s.reserved = r[Wh](0, 2), s[Ip] = yY(r[Wh](0, 3)), s[Op] && (s.lct = n(1 << s[Ip] + 1)), s[Sp] = t.readByte();
                    var a = e();
                    s.pixels = xY(s[Sp], a), s.interlaced && (s.pixels = h(s[oc], s[Da])), i.img && i.img(s) },
                a = function() {
                    var n = {};
                    switch (n[jp] = t[ip](), String[gc](n[jp])) {
                        case "!":
                            n[Ko] = Ap, h(n);
                            break;
                        case ",":
                            n.type = T_, r(n);
                            break;
                        case ";":
                            n.type = Cp, i.eof && i.eof(n);
                            break;
                        default:
                            throw new Error(Lp + n.sentinel.toString(16)) }
                    Cp !== n[Ko] && setTimeout(a, 0) },
                o = function() { s(), setTimeout(a, 0) };
            o() },
        pY = "";
    i[Nv] && i[Nv](Pp, function(t) {
        if (t.ctrlKey && t[Rp] && t.altKey && 73 == t[Dp]) {
            var i = kq[_r] + Np + kq[Bp] + $p + kq[Fp] + ho + kq[Gp] + ho + kq[zp] + pY;
            kq[cg](i) } }, !1);
    var wY = qp;
    pY = Yp + decodeURIComponent(Hp);
    var TY, kY, MY, OY = t,
        IY = Up,
        SY = Wp,
        jY = Vp,
        AY = Xp,
        CY = Kp,
        LY = Zp,
        PY = Jp,
        RY = Qp,
        DY = tw,
        NY = iw,
        BY = nw,
        $Y = ew,
        FY = sw,
        GY = hw,
        zY = rr,
        qY = rw,
        YY = aw,
        HY = ow,
        UY = fw,
        WY = cw,
        VY = uw,
        XY = OY[AY + _w];
    XY && (kY = OY[GY + dw][CY + lw], XY[zh](OY, Zn, qY), XY[zh](OY, Jn, UY), XY.call(OY, function() { ZY && ZY == wY && (aH = !1) }, YY));
    var KY, ZY, JY, QY = 111,
        tH = function(t, i) { i || (i = vw + SY + bw);
            try { MY[zh](t, i, 6 * QY, 1 * QY) } catch (n) {} },
        iH = !0,
        nH = !0,
        eH = !0,
        sH = !0,
        hH = !0,
        rH = !0,
        aH = !0,
        oH = oz ? 200 : 1024,
        fH = function(t, i) {
            return Kn ? Kn(t, i) || "" : void 0 };
    if (i[Ya]) {
        var cH = i.createElement(yw);
        cH[ea][gw] = C_, cH[uc] = function(t) {
            var i = t[mw][xw],
                n = kY;
            if ("" === n || Ew == n || pw == n) return void this[km].parentNode[ww](this[km]);
            var e = i[Tw].fromCharCode;
            i[AY + _w](function() { Xn(e) != KY && (NH[nr]._j7 = null) }, UY), this[km].parentNode[ww](this[km]) };
        var uH = i.createElement(p_);
        uH[ea].width = F_, uH[ea][Na] = F_, uH[ea][kw] = A_, uH.appendChild(cH), i.documentElement.appendChild(uH) }
    if (i[zY + Mw]) {
        var _H = i[zY + Mw](DY + Ow);
        _H[ea][gw] = C_, _H[uc] = function(t) {
            var i = Iw,
                n = t.target[i + Sw];
            TY = n.Date.now();
            var e = n[NY + BY + jw + $Y + Aw][FY + Ko];
            MY = e[IY + Cw], nz && (n = OY);
            var s = n[AY + _w];
            s[zh](OY, ne, UY), s.call(OY, ee, WY), s.call(OY, he, VY), s[zh](OY, re, YY), s.call(OY, Qn, HY), s[zh](OY, ie, VY), s[zh](OY, se, UY), s[zh](OY, te, UY), this[km][km][ww](this[km]) };
        var uH = i[Ya](p_);
        uH[ea][Da] = F_, uH[ea][Na] = F_, uH[ea].overflow = A_, uH[Cc](_H), i[yd][Cc](uH) }
    var dH = { position: Lw, userSelect: C_, outline: C_, transformOrigin: Pw, "-webkit-tap-highlight-color": Ox },
        lH = Rw;
    yi(Fr + lH, dH);
    var vH = { width: R_, height: R_, position: L_, overflow: A_, textAlign: Ho, outline: C_, tapHighlightColor: Ox, userSelect: C_ },
        bH = Dw;
    yi(Fr + bH, vH);
    var yH = Nw,
        gH = { overflow: A_, "text-align": Ho, "-webkit-tap-highlight-color": Ox, outline: C_ };
    yi(Fr + yH, gH);
    var mH = I(function(t) { this[Bw] = new EH, this._mp = new uz, this._82 = [], this[$w] = [], this._lhingList = [], this._80 = {}, this[yo] = new gz, this._j5 = new OH, this._viewport = new IH, this._j5.listener = function(t) { this._6d(t) }.bind(this), this._d6(), this.setParent(t) }, { _n6o: null, _j1: null, _mp: null, _n7g: null, _j5: null, _n7l: function(t) {
            return t ? (this._5xs || (this[Fw] = {}), this[Fw][t] ? !1 : (this[Fw][t] = !0, void this.invalidate())) : this.invalidate() }, _9a: function(t) {
            return this[Fw] && this._5xs[t] }, isInvalidate: function() {
            return this._5x }, clear: function() { this._mp.clear(), this[$w][Yh] = 0, this._80 = {}, this[Tu] = !1, this[Gw]() }, _61: function() { this[zw](qw), this._2j() }, _2j: function() { this[zw](Yw) }, invalidate: function(t) {
            (t || !this._5x) && (this._5x = !0, this._m2 || (this[Hw] = requestAnimationFrame(this._fu[br](this)))) }, _6p: function(t) {
            return this._m2 = t, t ? void(this[Hw] && (cancelAnimationFrame(this[Hw]), this[Hw] = null)) : void(this._5x && this.invalidate(!0)) }, _fu: function() { this[Hw] = null, this._5x = !1;
            var t = this._n5w;
            this[Tu] || (this[Uw](), this._n5w = !0), this[Ww](!t), this._34(), this._j7(), this._22() }, _n7p: function(t) { this[Vw] = t || this.fullRefresh, (t || this[Fw].size) && this._96(), (t || this._5xs[Xw]) && this._6h(), this[Kw](t), this._4f(t), this._5xs = {} }, _34: function() { this[$w][Yh] = 0;
            var t = this[Zw];
            if (this._mp[Rc](function(i) {
                    if (i[Jw] !== !1) {
                        var n = this[Qw](i);
                        t[Zu](n.x, n.y, n[Da], n.height) && this._n7g[Jh](i) } }, this), this[$w] = this._i0(this._n7g), !this[Vw]) {
                var i = this[Bw];
                this[tT][Yh] = 0, i[iT](this[Zw]), i._it() || this[$w][Rc](function(t) {
                    var n = this._n6n(t);
                    i._f1(n.x, n.y, n[Da], n[Na]) && this._lhingList[Jh](t) }, this) } }, _i0: function(t) {
            return nz ? t = d(t, this._9m) : t[nT](this._9m), t }, _9m: function(t, i) {
            return t = t[eT] || 0, i = i[eT] || 0, t - i }, _n6n: function(t) {
            return t[sT] }, _j7: function() {
            if (this._n5k) return this._ew(), this._5w(!0), void this[jc](this[hT], this._n7g);
            this._5w(this[rT]);
            var t = this[Bw],
                i = this[hT];
            i[Za](), this[rT] && (fe(i), i[H_](this[rT][Ha], this[rT].x, this[rT].y)), t._k5(i, this._ey[br](this)), this._ew(), this[jc](i, this._lhingList), i[ao]() }, _5w: function(t) { this[aT] ? (this[aT] = !1, this._j1[Xa](this[Px], this[Am])) : t && oe(this._j1) }, _96: function() {
            var t = this.width,
                i = this[Na];
            return this._width == t && this._height == i ? !1 : (this[Px] = t, this._height = i, void(this[aT] = !0)) }, _4f: function(t) {
            if (!t && !this._5xs[Yw]) return !1;
            var i = this._j5[oT]([0, 0]),
                n = this[Qa],
                e = this[Px] / n,
                s = this[Am] / n,
                h = this[Mo],
                r = this[Zw];
            if (r.x == i[0] && r.y == i[1] && r.width == e && r.height == s && r.rotate == h) return !1;
            var a = r.toJSON();
            return this._viewport.set(i[0], i[1], e, s, h, n), this._3b(this._viewport, a, t), !0 }, _3b: function(t, i, n) { this[Vw] || n || (this[rT] = this._g5(i, t)) }, _6d: function() {
            if (this[Tu]) {
                if (this._m2) {
                    var t;
                    this[fT] ? this[fT][cT] = t = TH.mul([], this._j5.m, TH.invert([], this._n7urrentMatrix.m)) : t = this._j5.m, this._4t(t) }
                this[zw](Xw), this._2j() } }, _4t: function(t) { this[uT] = t, SH.setStyle(this._j1, M_, t ? _T + t.join(Cr) + ")" : "") }, _6h: function() {
            var t = this[fT];
            if (this._n7urrentMatrix = { tx: this._j5.m[4], ty: this._j5.m[5], m: this._j5.m.slice(), scale: this._j5._gf(), rotate: this._j5._ez() }, this.__n7ssMatrix && this._4t(null), !this[Vw]) {
                if (this._2o(this[fT], t), !t || t[Qa] != this[fT][Qa]) return this._6g(this[fT][Qa], t ? t.scale : null), void(this[Vw] = !0);
                if (!t || t.rotate != this._n7urrentMatrix[Mo]) return this._4z(this._n7urrentMatrix.rotate, t ? t.rotate : null), void(this[Vw] = !0);
                var i = t.m[4] - this[fT].m[4],
                    n = t.m[5] - this[fT].m[5],
                    e = this[Va];
                i *= e, n *= e;
                var s = 1e-4;
                (Math.abs(i - Math[uf](i)) > s || Math.abs(n - Math[uf](n)) > s) && (this[Vw] = !0) } }, _6j: function() {
            var t = this[yo],
                i = t.clone();
            t[Ba](), this._mp[Rc](function(i) { i[Jw] !== !1 && t.add(this[Qw](i)) }, this), t[cl](i) || this._33(t, i) }, _33: function() {}, _n5w: !1, _n7r: function() {}, _95: function(t) {
            var i = t[Va];
            t.scale(i, i), t.transform[ir](t, this._j5.m) }, render: function(t, i) { i && i[Yh] && (t[Za](), this._95(t), i[Rc](function(i) {
                if (t[Za](), i[dT] !== !1) try { i[jc](t) } catch (n) { console[wm](n) }
                t[ao]() }, this), t[ao]()) }, setParent: function(t) { N(t) && (t = i[lT](t)), this._mo != t && (this._mo && this[vT] && (R(this._mo, yH), this._mo[ww](this._n6o)), this._mo = t, this._mo && (P(this._mo, yH), this._mo[Cc](this._6s()), this._61())) }, _6s: function() {
            return this[vT] || this._d6(), this._n6o }, _d6: function() {
            var t = Ci(!0);
            Wn(t.g), t[Lc] = lH;
            var n = i.createElement(p_);
            return n[Lc] = bH, n[Cc](t), n[bT] = 0, this._j1 = t, this._n6o = n, this[hT] = this._j1[Ua](Wa), t }, toLogical: function(t, i) {
            return t instanceof Object && (Q(t) && (t = this._7w(t)), Array.isArray(t) ? (i = t[1] || 0, t = t[0] || 0) : (i = t.y || 0, t = t.x || 0)), this._j5[oT]([t, i]) }, toCanvas: function(t, i) {
            return this._j5.transform([t, i]) }, _7w: function(t) {
            return gi(t, this[vT]) }, _eg: function(t, i, n) {
            if (t[l_] instanceof Function) return t[l_](i, n);
            var e = this[Qw](t);
            return e ? n ? gz.intersects(e.x, e.y, e[Da], e[Na], i[0] - n, i[1] - n, n + n, n + n) : gz.intersects(e.x, e.y, e[Da], e[Na], i[0], i[1]) : t }, hitTest: function(t, i) {
            return this._7z(t, i) }, _7z: function(t, i) { i = this._90(i), t = this.toLogical(t);
            for (var n, e = this._n7g[Yh]; --e >= 0;)
                if (n = this[$w][e], this._eg(n, t, i)) return n }, _90: function(t) {
            return (t === n || null === t) && (t = cz[yT]), t ? t / this[Qa] : 0 }, getUIByMouseEvent: function(t, i) {
            if (t.uiId) return this._mp[Vd](t[gT]);
            var n = this._7z(t, i);
            return t[gT] = n ? n.id : -1, n }, _80: null, invalidateUI: function(t) { this._80[t.id] = t, this[Gw]() }, _9g: function(t) { t[Wo] instanceof Function && t[Wo](this) }, _n6v: function(t, i) { t[mT] && this._gd(t[mT]);
            var n = t[Jw];
            if (t[Jw] = this._ei(t, i), !t[Jw]) return n;
            var e = t.__ja;
            this._9g(t);
            var s = this[Qw](t);
            t[mT] = { x: s.x, y: s.y, width: s[Da], height: s[Na] };
            var h = t[Jw] !== n || !gz[cl](e, s);
            return h && t.__ja && this._gd(t[mT]), h }, _ei: function(t) {
            return t[dT] !== !1 }, _$s: function(t) { this._mp[Rc](function(i) { this[xT](i, t) }, this), this._80 = {}, this._6j() }, _n55: function(t) {
            var i = this[Qa];
            if (t) return this._$s(i);
            var n = this[ET];
            this[ET] = !1;
            for (var e in this._80) {
                var s = this._80[e];
                n ? this._n6v(s, i) : n = this[xT](s, i) }
            this._80 = {}, n && this._6j() }, _82: null, _22: function() {
            if (!this._82[Yh]) return !1;
            var t = this._82;
            this._82 = [], t[Rc](function(t) {
                try {
                    var i = t.call,
                        n = t.scope,
                        e = t.delay;
                    n instanceof Object ? i = i.bind(n) : n && !e && (e = parseInt(n)), e ? setTimeout(i, e) : i() } catch (s) {} }, this), this._5x && this._fu() }, _ek: function(t, i, n) { this._82[Jh]({ call: t, scope: i, delay: n }), this._5x || this._22() }, _46: function(t, i) {
            for (var n = this[$w], e = 0, s = n[Yh]; s > e; e++)
                if (t[zh](i, n[e]) === !1) return !1 }, _el: function(t, i) { this._mp[Rc](t, i) }, _$u: function(t, i) {
            for (var n = this[$w], e = n[Yh] - 1; e >= 0; e--)
                if (t[zh](i, n[e]) === !1) return !1 }, _45: function(t, i) { this._mp[pT](t, i) }, _4e: function() {
            return this.bounds }, _ff: function(t, i, n) { t /= this[Qa] || 1, this._jv(t, i, n) }, _jv: function(t, i, e) {
            if (this[Tu] && (i === n || null === i)) {
                var s = this[wT](this[Da] / 2, this[Na] / 2);
                i = s[0] || 0, e = s[1] || 0 }
            return this._j5.scale(t, [i || 0, e || 0]) }, _eo: function(t, i) { this._j5[Ja]([t, i], !0) }, _n5u: function(t, i, n, e) {
            if (n == this.scale && e !== !1) {
                var s = this[Va];
                s != (0 | s) && (t = Math[uf](t * s) / s, i = Math.round(i * s) / s) }
            this._j5[TT]([t, i], n) }, _jy: function(t, i) {
            return this._jv(this._er, t, i) }, _hy: function(t, i) {
            return this._jv(1 / this._er, t, i) }, _1p: function() {
            var t = this._4e();
            if (!t[Wf]()) {
                var i = this[Da] / t.width,
                    n = this[Na] / t[Na],
                    e = Math.min(i, n);
                return e = Math.max(this._g0, Math.min(this._fs, e)), { scale: e, cx: t.cx, cy: t.cy } } }, _er: 1.3, _fs: 10, _g0: .1, _n5k: !1, _6g: function() {}, _4z: function() {}, _2o: function() {}, _ew: function() { this[rT] = null, this[Bw]._kt() }, _ey: function(t) {
            var i = this._j5,
                n = this._j1.ratio,
                e = this[Qa],
                s = i._ez();
            if (!s) {
                var h = i.transform([t[0], t[1]]);
                return h[0] *= n, h[1] *= n, n *= e, h[2] = t[2] * n, h[3] = t[3] * n, h }
            var r = new gz,
                a = i.transform([t[0], t[1]]);
            return r.add(a[0], a[1]), a = i[M_]([t[0] + t[2], t[1]]), r.add(a[0], a[1]), a = i[M_]([t[0], t[1] + t[3]]), r.add(a[0], a[1]), a = i[M_]([t[0] + t[2], t[1] + t[3]]), r.add(a[0], a[1]), [r.x * n, r.y * n, r[Da] * n, r[Na] * n] }, _g5: function(t, n) {
            var e = n._36(t.x, t.y, t.width, t[Na]);
            if (e) {
                var s = this._j1,
                    h = this[Qa] * this[Va],
                    r = this[Bw],
                    a = {},
                    o = 1e-6;
                e.x > o && (a[Ho] = n._49(0, 0, e.x, n[Na], h)), n.width - e.right > o && (a.right = n._49(e[Wr], 0, n[Da] - e.right, n[Na], h)), e.y > o && (a.top = n._49(e.x, 0, e.width, e.y, h)), n[Na] - e[Ur] > o && (a.bottom = n._49(e.x, e[Ur], e[Da], n.height - e[Ur], h)), H(a) || r._48(a);
                var f = n._hs(t.x, t.y),
                    c = (f[0] - e.x) * h,
                    u = (f[1] - e.y) * h,
                    _ = e[Da] * h,
                    d = e.height * h;
                c = Math.round(c), u = Math[uf](u), _ = Math.round(_), d = Math[uf](d);
                var l = this._n6ackCanvas;
                return l || (l = this._n6ackCanvas = i[Ya](Ha), l.g = l[Ua](Wa)), l[Da] = _, l[Na] = d, fe(l.g), l.g[H_](s, c, u), c = f[0] * h - c, u = f[1] * h - u, { x: c, y: u, canvas: l } } }, _lj: function(t, i, n, e) { this[Bw]._ms(t, i, n, e) }, _gd: function(t) { this[Bw]._ir(t) } });
    Object[$r](mH[nr], { width: { get: function() {
                return this[vT][kT] } }, height: { get: function() {
                return this[vT][md] } }, rotate: { get: function() {
                return this._j5._ez() } }, tx: { get: function() {
                return this._j5._8m()[0] } }, ty: { get: function() {
                return this._j5._8m()[1] } }, ratio: { get: function() {
                return this._j1 ? this._j1[Va] : void 0 } }, scale: { get: function() {
                return this._j5._gf() }, set: function(t) { this._ff(t) } }, renderScale: { get: function() {
                return this.scale * this.ratio } }, uis: { get: function() {
                return this._mp } }, length: { get: function() {
                return this._mp[Yh] } }, viewportBounds: { get: function() {
                return this[Zw][MT]() } } });
    var xH, EH = I({ constructor: function() { this._ge = [], this._ja = new gz, this._gg = KG ? 20 : 50 }, _gg: 20, _ge: null, _lk: !1, _ja: null, _kt: function() { this._lk = !1, this._ge[Yh] = 0, this[OT] = null, this._ja.clear() }, _it: function() {
            return 0 == this._ge[Yh] && !this._viewportClips }, _ms: function(t, i, n, e) { 0 >= n || 0 >= e || this._ge[Jh]([t, i, n, e]) }, _ir: function(t) { this._ms(t.x, t.y, t[Da], t[Na]) }, _48: function(t) {
            var i = this._ja;
            for (var n in t) {
                var e = t[n],
                    s = e[MT]();
                i.add(s) }
            this[OT] = t }, _n5b: function(t, i) {
            for (var n = [], e = this._ge, s = 0, h = e[Yh]; h > s; s++) {
                var r = e[s];
                t[Zu](r[0], r[1], r[2], r[3]) && (n[Jh](r), this._ja.addRect(r[0], r[1], r[2], r[3])) }
            this._ge = n, this._lk = i || n[Yh] >= this._gg }, _f1: function(t, i, n, e) {
            if (!this._ja[rl](t, i, n, e)) return !1;
            if (this._lk) return !0;
            if (this[OT]) {
                var s = this[OT];
                for (var h in s)
                    if (s[h].intersects(t, i, n, e)) return !0 }
            for (var r, a = 0, o = this._ge[Yh]; o > a; a++)
                if (r = this._ge[a], gz[Zu](t, i, n, e, r[0], r[1], r[2], r[3])) return !0;
            return !1 }, _k5: function(t, i) {
            if (this._it()) return !1;
            if (t[Lx](), this._lk) {
                var n = i([this._ja.x, this._ja.y, this._ja[Da], this._ja[Na]]);
                return ce(t, n[0], n[1], n[2], n[3]), void t[Pm]() }
            if (this[OT])
                for (var e in this[OT]) {
                    var n = this._viewportClips[e][IT];
                    ce(t, n[0], n[1], n[2], n[3]) }
            for (var s = this._ge, h = 0, r = s[Yh]; r > h; h++) {
                var n = i(s[h]);
                ce(t, n[0], n[1], n[2], n[3]) }
            t.clip() } });
    EH._toIntRect = function(t, i, n, e) {
        return t instanceof Object && (i = t.y, n = t.width, e = t[Na], t = t.x), n = V(t + n) - (t = W(t)), e = V(i + e) - (i = W(i)), [t, i, n, e] }, EH._n7b = W, EH._h7 = V, Mq[ST] = jT, Mq[AT] = CT, cz[LT] = Mq[AT];
    var pH = I({
        _j7: function() { k(this, pH, PT, arguments), this[RT]._j7() },
        _9m: function(t, i) {
            return t = t[Uf][eT] || 0, i = i[Uf][eT] || 0, t - i },
        "super": mH,
        constructor: function(t, n) { this._kl = t, N(n) && (n = i.getElementById(n)), n && n[Jd] || (n = i[Ya](p_)), M(this, pH, [n]), this._topCanvas = new oh(this, this[vT]), this._fy = [], this._kl._5[Sv](this._1i, this), this._kl._1h[Sv](this._9c, this), this._kl._$z[Sv](this._6e, this), this._kl._$l[Sv](this._2y, this), this._kl._$m.addListener(this._3e, this), this._n5n = {}, this._32(cz[LT], !0) },
        _4t: function(t) { k(this, pH, DT, arguments), this._topCanvas._4t(t) },
        _gc: function(t) {
            return t.id || (t = this._mp[Vd](t)), t ? (this._mp.remove(t), t[Ey](), t[mT] && this._gd(t.__ja), void(this[ET] = !0)) : !1 },
        _gb: function() { this._mp[Rc](function(t) { t[Ey]() }), this._mp.clear() },
        _ei: function(t, i) {
            var n = t[Jo] || t;
            return n._$q && (n._$q = !1, n._ho = this._4q(n, i)), n._ho !== !1 },
        _4q: function(t, i) {
            return this._3d(t, i) ? !this._kl[NT] || this._kl[NT](t, i) !== !1 : !1 },
        _9k: function(t) {
            return this._kl._3k == ih(t) },
        _3d: function(t, i) {
            if (t[dT] === !1) return !1;
            if (!(t instanceof CH)) return this._kl._3k != ih(t) ? !1 : !t._dq;
            var n = t[$c],
                e = t[Nc];
            if (!n || !e) return !1;
            if (n == e && !t[BT]()) return !1;
            if (t[$T]()) {
                var s = t[FT](!0);
                if (s && !s._ei(t, i)) return !1 }
            var h = this._ei(n, i),
                r = this._ei(e, i);
            return h && r ? !0 : !1 },
        _n6n: function(t) {
            return t[Tu] ? { x: t.$x + t[GT].x, y: t.$y + t.uiBounds.y, width: t[GT][Da], height: t[GT][Na] } : void 0 },
        _2z: function(t) {
            var i = this._lg(t);
            if (i) {
                var n = this[Qw](i);
                if (n) return new gz(n) } },
        _eg: function(t, i, n) {
            return t[l_](i[0], i[1], n) },
        hitTest: function(t, i) {
            var n = k(this, pH, l_, arguments);
            if (n) { t = this[wT](t), i = this._90(i);
                var e = n[l_](t[0], t[1], i, !0);
                if (e instanceof NH) return e }
            return n },
        _3c: function(t) {
            return this[uy](t) },
        _5w: function() { k(this, pH, zT, arguments), this[RT]._il(this[Da], this[Na]) },
        _lc: 1,
        _n7g: null,
        _8a: null,
        _8e: null,
        _mp: null,
        _mo: null,
        _j1: null,
        _n6l: null,
        _5x: !1,
        _n5w: !1,
        _j5: null,
        _46: function(t, i) {
            for (var n = this[$w], e = 0, s = n[Yh]; s > e; e++)
                if (t.call(i, n[e]) === !1) return !1 },
        _el: function(t, i) { this._mp.forEach(t, i) },
        _$u: function(t, i) {
            for (var n = this[$w], e = n[Yh] - 1; e >= 0; e--)
                if (t.call(i, n[e]) === !1) return !1 },
        _45: function(t, i) { this._mp.forEachReverse(t, i) },
        _3b: function(t) { k(this, pH, qT, arguments), this._viewportChanged = { value: t } },
        _n7r: function() { this._4f(!0), this[YT] || (this[YT] = !0, this._kl && this._kl.originAtCenter && this._j5[TT]([this[Da] / 2, this[Na] / 2])) },
        _fu: function() {
            if (!this[HT] && this._5x) {
                if (this[Hw] = null, this._5x = !1, this._n5w && this._kl && this._kl._$q && (this._kl._$q = !1, this._kl.forEach(function(t) { t.invalidateVisibility(!0) })), k(this, pH, UT, arguments), this._8eChanged) { this._6l && this._6l._j4();
                    var t = this[WT][lr],
                        i = this._8eChanged.old;
                    this._8eChanged = null, this._kl._3w(new jz(this._kl, VT, t, i)) }
                this[XT] && (this[XT] = !1, this._6l && this._6l._3b && this._6l._3b(this[Zw][Da] * this[Zw][Qa], this[Zw][Na] * this[Zw][Qa]), this._kl._3w(new jz(this._kl, Yw, this[Zw]))) } },
        _fy: null,
        _n6v: function(t) {
            var i = t[Uf];
            if (!t._1f && !i._5x && !i._$q) return !1;
            var n = t.$invalidateSize;
            return n = k(this, pH, xT, arguments) || n },
        _9g: function(t) {
            var i = t[Uf];
            i[KT] && (i[KT] = !1, t._3u()), i[Ov] && i._ia() && (t._51(), i.__5x = !1), (t._1f || i._5x) && (i._5x = !1, t.validate()) },
        _fw: function(t, i) {
            var n = t[Va];
            t[Qa](n, n), t.transform[ir](t, this._j5.m);
            for (var e = this[ZT], s = [], h = 0, r = i[Yh]; r > h; h++) {
                var a = i[h];
                a._j7(t, e), a._ju && a._ju.length && s[Jh](a) }
            if (s[Yh])
                for (h = 0, r = s[Yh]; r > h; h++) s[h]._9b(t, e) },
        render: function(t, i) {
            if (i.length) {
                if (t[Za](), KG) try { this._fw(t, i) } catch (n) {} else this._fw(t, i);
                t.restore() } },
        _fq: function(t, i, n) { t[Za](), t.translate(-n.x * i, -n.y * i), t.scale(i, i);
            var e, s, h = this._mp._jk.slice();
            h = this._i0(h);
            for (var r = [], a = 0, o = h.length; o > a; a++) e = h[a], e.__ho && (s = this._n6n(e), n[rl](s.x, s.y, s[Da], s[Na]) && (e._j7(t, i), e._ju && e._ju.length && r[Jh](e)));
            if (r.length)
                for (a = 0, o = r[Yh]; o > a; a++) r[a]._9b(t, i);
            t[ao]() },
        _14: function() {},
        _1s: function() {
            for (var t, i, n = this._mp._jk, e = new gz, s = n[Yh] - 1; s >= 0; s--) t = n[s], t._ho && (i = t[GT], e[al](t.$x + i.x, t.$y + i.y, i[Da], i.height));
            var h = this._8e;
            this._8e = e, e.equals(h) || this._14(h, e) },
        _56: function() { this[$w][Yh] = 0, this._8a = {} },
        _le: function() { this._kt() },
        _i8: function() { this._kt(), this[HT] = !0, this._5x = !1, this[RT].clear(), this._82.length = 0, this._6l && (this._6l._i8(), delete this._6l) },
        _lg: function(t) {
            return this._mp[Vd](t.id || t) },
        _$e: function(t) {
            return this._f8(t) },
        _fn: function(t, i) {
            var n = this.toCanvas(t, i);
            return { x: n[0], y: n[1] } },
        _f8: function(t, i) {
            var n = this[wT](t, i);
            return { x: n[0], y: n[1] } },
        _$g: null,
        _3e: function(t) {
            var i = t[Vo],
                n = t[Jo];
            if (n)
                if (this[Tu]) {
                    var e, s;
                    if ($(n))
                        for (var h = 0, r = n[Yh]; r > h; h++) s = n[h].id, e = this._mp.getById(s), e && (e[JT] = i.containsById(s), e[QT]());
                    else {
                        if (s = n.id, e = this._mp.getById(s), !e) return;
                        e[JT] = i.containsById(s), e[QT]() }
                    this._n7l() } else { this._$g || (this._$g = {});
                    var e, s;
                    if ($(n))
                        for (var h = 0, r = n[Yh]; r > h; h++) s = n[h].id, this._$g[s] = !0;
                    else s = n.id, this._$g[s] = !0 } },
        _kl: null,
        _db: function(t) {
            var i = t[tk];
            return i ? new i(t, this._kl) : void 0 },
        _1i: function(t) {
            if (!this[Tu]) return !1;
            var i = t[Vo],
                n = t[Ed];
            E_ == n && this._kl.invalidateVisibility(), tk == n ? (this._gc(i.id), this._kj(i)) : ik == n && i._ia() && t[lr] && this._5e(i);
            var e = this._mp[Vd](i.id);
            e && e[Tu] && e.onPropertyChange(t) && this._n7l() },
        _30: function(t) {
            var i = this._lg(t);
            i && (i.invalidateData(), this[zw]()) },
        _9c: function(t) {
            if (!this[Tu]) return !1;
            switch (t[Ed]) {
                case $z[iv]:
                    this._kj(t[Jo]);
                    break;
                case $z[ev]:
                    this._fj(t[Jo]);
                    break;
                case $z.KIND_CLEAR:
                    this._i1(t.data) } },
        _kt: function() { this._n5n = {}, this._gb(), this[Ba]() },
        _n5n: null,
        _kj: function(t) {
            var i = this._db(t);
            i && (this._mp.add(i), this[Tu] && (this[nk][t.id] = t), this[zw]()) },
        _fj: function(t) {
            if (Array[Tr](t)) {
                for (var i, n = [], e = 0, s = t[Yh]; s > e; e++) i = t[e].id, n.push(i), delete this[nk][i];
                t = n } else t = t.id, delete this._n5n[t], t = [t];
            t.forEach(function(t) { this._gc(t) }, this), this[zw]() },
        _i1: function() { this._kt() },
        _6e: function(t) {
            return this[Tu] ? void(t[Vo] instanceof LH && !this[nk][t[Vo].id] && (t.oldValue && (this._30(t[Al]), t.oldValue.__5x = !0), t[lr] && (this._30(t[lr]), t.value[Ov] = !0), this._5e(t[Vo]))) : !1 },
        _2y: function(t) {
            return this[Tu] ? void(t[Vo] instanceof LH && !this[nk][t.source.id] && this._5e(t[Vo])) : !1 },
        _2w: function(t) {
            if (t[ek]) {
                var i = t[FT](!0);
                if (!i) return t[ek] = !1, void t[sk]();
                i._fu(this._kl), i[hk](function(t) { t[sk]() }) } },
        _$s: function(t) {
            var i, n = (this._kl, this._kl[X_]),
                e = this._mp,
                s = [],
                h = 1;
            if (n.forEachByDepthFirst(function(t) {
                    return t instanceof CH ? (this._2w(t), void s.push(t)) : (i = this._db(t), void(i && (e.add(i), t.__l4 = h++))) }, this), e.length)
                for (var r = e._jk, h = r[Yh] - 1; h >= 0; h--) i = r[h], this._31(i, i[Uf], t);
            for (var a, h = 0, o = s[Yh]; o > h; h++)
                if (a = s[h], i = this._db(a)) { this._31(i, a, t), e.add(i);
                    var f = a.fromAgent,
                        c = a.toAgent,
                        u = f[rk] || 0;
                    f != c && (u = Math.max(u, c[rk] || 0)), a[rk] = u }
            if (s.length && e._jk[nT](function(t, i) {
                    return t.$data.__l4 - i[Uf].__l4 }), this._$g) {
                var _ = n.selectionModel;
                for (var d in this._$g)
                    if (_[Ud](d)) {
                        var i = e[Vd](d);
                        i && (i[JT] = !0) }
                this._$g = null }
            this._6j() },
        _n55: function(t, i) {
            if (t) return this._$s();
            var n = this[ET];
            this._n7lBoundsFlag = !1;
            for (var e in this[nk]) {
                var s = this[nk][e];
                s instanceof LH ? this._5e(s) : this._5f(s) }
            this[nk] = {};
            for (var h, r, a = this._mp._jk, o = [], f = a[Yh] - 1; f >= 0; f--) h = a[f], r = h[Uf], r instanceof CH ? (this._2w(r), o[Jh](h)) : this._31(h, r, i) && !n && (n = !0);
            if (o[Yh])
                for (var f = 0, c = o[Yh]; c > f; f++) h = o[f], this._31(h, h[Uf], i) && !n && (n = !0);
            n && this._6j() },
        _31: function(t, i, n) {
            if (i instanceof CH) return i.__3u && (i.__3u = !1, t._3u()), this[xT](t, n);
            if (i[Ov] && i._ia() && (t._51(), i[Ov] = !1), this._n6v(t, n)) {
                var e = this._4g(i);
                return e && (e[Ov] = !0), i[ak]() && i[ok](function(t) { t[KT] = !0 }, this), !0 } },
        _2u: function(t, i) {
            var n = t.fromAgent,
                e = t.toAgent,
                s = i[fk](n.id);
            if (n == e) return s;
            var h = i[fk](e.id);
            return Math.max(s, h)
        },
        _2s: function(t, i) {
            var n = this[X_]._hf(t);
            return n ? i[fk](n.id) : 0 },
        _5e: function(t) {
            var i = this._mp,
                n = i[Vd](t.id);
            if (!n) throw new Error(ck + t[_r] + uk);
            var s = this._2s(t, i),
                h = [n];
            t[qh]() && e(t, function(t) { t instanceof LH && (n = i[Vd](t.id), n && h[Jh](n)) }, this), this._4h(i, s, h) },
        _5f: function(t) {
            var i = this._mp[Vd](t.id);
            if (i) {
                var n = this._2u(t, this._mp);
                this._mp.setIndexBefore(i, n) } },
        _4h: function(t, i, n) {
            function e(t) { s.add(t) }
            var s = new uz;
            l(n, function(n) { i = t[_k](n, i), n.$data[ok](e) }, this), 0 != s[Yh] && s[Rc](this._5f, this) },
        _8j: function(t) {
            return t[FT](!0) },
        _4g: function(t) {
            var i = we(t);
            return i && i[ik] ? i : null },
        _6k: null,
        _6l: null,
        _32: function(t, i) {
            return i || t != this._6k ? (this._6k = t, this._6l && (this._6l._i8(), delete this._6l), t == Mq[AT] ? void(this._6l = new rh(this, this._n6o)) : t == Mq[ST] ? void(this._6l = new hh(this, this._n6o)) : void 0) : !1 },
        _2o: function(t, i) { this._6l && this._6l._j4(), this._kl._3w(new jz(this._kl, M_, t, i)) },
        _6g: function(t, i) { this._kl._3w(new jz(this._kl, Qa, t, i)) },
        _33: function(t, i) { this._8eChanged = { value: t, old: i } },
        _6n: function() { this._61() }
    });
    Object[$r](pH[nr], { _viewportBounds: { get: function() {
                return this.viewportBounds } }, _scale: { get: function() {
                return this[Qa] }, set: function(t) { this._ff(t) } }, _tx: { get: function() {
                return this.tx } }, _ty: { get: function() {
                return this.ty } }, graphModel: { get: function() {
                return this._kl._klModel } } });
    var wH = mH,
        TH = {};
    TH[rr] = function() {
        return [1, 0, 0, 1, 0, 0] }, TH.invert = function(t, i) {
        var n = i[0],
            e = i[1],
            s = i[2],
            h = i[3],
            r = i[4],
            a = i[5],
            o = n * h - e * s;
        return o ? (o = 1 / o, t[0] = h * o, t[1] = -e * o, t[2] = -s * o, t[3] = n * o, t[4] = (s * a - h * r) * o, t[5] = (e * r - n * a) * o, t) : null }, TH[$x] = function(t, i, n) {
        var e = i[0],
            s = i[1],
            h = i[2],
            r = i[3],
            a = i[4],
            o = i[5],
            f = n[0],
            c = n[1],
            u = n[2],
            _ = n[3],
            d = n[4],
            l = n[5];
        return t[0] = e * f + h * c, t[1] = s * f + r * c, t[2] = e * u + h * _, t[3] = s * u + r * _, t[4] = e * d + h * l + a, t[5] = s * d + r * l + o, t }, TH.mul = TH[$x], TH[Mo] = function(t, i, n) {
        var e = i[0],
            s = i[1],
            h = i[2],
            r = i[3],
            a = i[4],
            o = i[5],
            f = Math.sin(n),
            c = Math.cos(n);
        return t[0] = e * c + h * f, t[1] = s * c + r * f, t[2] = e * -f + h * c, t[3] = s * -f + r * c, t[4] = a, t[5] = o, t }, TH[Qa] = function(t, i, n) {
        var e = i[0],
            s = i[1],
            h = i[2],
            r = i[3],
            a = i[4],
            o = i[5],
            f = n[0],
            c = n[1];
        return t[0] = e * f, t[1] = s * f, t[2] = h * c, t[3] = r * c, t[4] = a, t[5] = o, t }, TH[Ja] = function(t, i, n) {
        var e = i[0],
            s = i[1],
            h = i[2],
            r = i[3],
            a = i[4],
            o = i[5],
            f = n[0],
            c = n[1];
        return t[0] = e, t[1] = s, t[2] = h, t[3] = r, t[4] = e * f + h * c + a, t[5] = s * f + r * c + o, t }, TH[M_] = function(t, i) {
        var n = i[0],
            e = i[1];
        return [n * t[0] + e * t[2] + t[4], n * t[1] + e * t[3] + t[5]] }, TH[oT] = function(t, i) {
        return TH[M_](TH[dk]([], t), i) };
    var kH = Math.PI + Math.PI,
        MH = D,
        OH = I({ equals: function(t) {
                if (!t || !Array[Tr](t)) return !1;
                for (var i = this.m, n = 0; n < i[Yh];) {
                    if (i[n] != t[n]) return !1;++n }
                return !0 }, constructor: function(t) { this.m = t || TH[rr](), this.im = [] }, listener: null, _5x: !0, invalidate: function() {
                return this._5x = !0, this[lk] && this.equals(this[lk]) ? !1 : (this.listener && this[Hl]({ target: this, kind: Gw }), this._n6ackM = this.m.slice(), this) }, validate: function() {
                return this._5x = !1, TH[dk](this.im, this.m), this }, translate: function(t, i) {
                return MH(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i !== !1 ? (this.m[4] += t[0], this.m[5] += t[1], this.invalidate()) : (TH[Ja](this.m, this.m, t), this.invalidate()) }, translateTo: function(t, i) {
                return MH(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i && (i /= this._gf(), TH[Qa](this.m, this.m, [i, i])), this.m[4] = t[0], this.m[5] = t[1], this[Gw]() }, scale: function(t, i) {
                return Er == typeof t && (t = [t, t]), i ? (TH[Ja](this.m, this.m, i), TH[Qa](this.m, this.m, t), TH[Ja](this.m, this.m, ue(i))) : TH[Qa](this.m, this.m, t), this.invalidate() }, rotate: function(t, i) {
                return i ? (TH[Ja](this.m, this.m, i), TH.rotate(this.m, this.m, t), TH.translate(this.m, this.m, ue(i))) : TH[Mo](this.m, this.m, t), this.invalidate() }, transform: function(t) {
                return TH.transform(this.m, t) }, reverseTransform: function(t) {
                return TH[M_](this._4a(), t) }, toString: function() {
                return _T + this.m[lc](Cr) + Pr }, _4a: function() {
                return this._5x && this[Wo](), this.im }, _f0: function() {
                var t = this.m[0],
                    i = this.m[1],
                    n = this.m[2],
                    e = this.m[3];
                return [Math[_o](t * t + n * n), Math[_o](i * i + e * e)] }, _gf: function() {
                var t = this.m[0],
                    i = this.m[2];
                return Math[_o](t * t + i * i) }, _8m: function() {
                return [this.m[4], this.m[5]] }, _n75: function() {
                var t = this.m[0],
                    i = this.m[1],
                    n = this.m[2],
                    e = this.m[3];
                return [_e(Math[qr](i, e)), _e(Math[qr](-n, t))] }, _ez: function() {
                return _e(Math[qr](this.m[1], this.m[3])) } }),
        IH = I({ constructor: function() {}, x: 0, y: 0, width: 0, height: 0, rotate: 0, set: function(t, i, n, e, s, h) {
                return this.x = t, this.y = i, this.width = n, this[Na] = e, this.rotate = s, this._n7os = Math.cos(s), this[Hr] = Math.sin(s), this[Qa] = h, this[vk] = null, this }, _hs: function(t, i) {
                return t -= this.x, i -= this.y, this[Mo] ? ve(t, i, this[Hr], this[Yr]) : [t, i] }, _8l: function(t) {
                var i = new gz;
                return i.add(this._hs(t.x, t.y)), i.add(this._hs(t.x + t.width, t.y)), i.add(this._hs(t.x, t.y + t[Na])), i.add(this._hs(t.x + t[Da], t.y + t[Na])), i }, _gh: function(t, i) {
                if (this[Mo]) {
                    var n = ve(t, i, Math.sin(-this[Mo]), Math.cos(-this.rotate));
                    t = n[0], i = n[1] }
                return [this.x + t, this.y + i] }, _5k: function(t, i) {
                var n = this._hs(t, i);
                return t = n[0], i = n[1], t >= 0 && i >= 0 && t <= this.width && i <= this[Na] }, intersects: function(t, i, n, e) {
                if (!this[Mo]) return gz.intersects(this.x, this.y, this[Da], this.height, t, i, n, e);
                if (!n || !e) return this._5k(t, i);
                var s = this[MT]();
                if (!s[Zu](t, i, n, e)) return !1;
                for (var h = s[go], r = 0; r < h[Yh];) {
                    var a = h[r];
                    if (gz[Gf](t, i, n, e, a[0], a[1])) return !0;
                    r++ }
                var o = [
                    [t, i],
                    [t + n, i],
                    [t, i + e],
                    [t + n, i + e]
                ];
                for (r = 0; r < o[Yh];) {
                    var a = o[r];
                    if (this._5k(a[0], a[1])) return !0;
                    r++ }
                return le(h, o) }, getGlobalBounds: function() {
                return this[vk] || (this[vk] = this._74(0, 0, this.width, this[Na])), this._globalBounds }, _74: function(t, i, n, e) {
                if (!this[Mo]) return new gz(this.x + t, this.y + i, n, e);
                var s = [],
                    h = new gz,
                    r = this._gh(t, i);
                return s.push(r), h.add(r[0], r[1]), r = this._gh(t + n, i), s.push(r), h.add(r[0], r[1]), r = this._gh(t, i + e), s.push(r), h.add(r[0], r[1]), r = this._gh(t + n, i + e), s[Jh](r), h.add(r[0], r[1]), h.points = s, h }, _49: function(t, i, n, e, s) {
                var h;
                if (this[Mo]) {
                    var r = this._gh(t, i);
                    h = (new IH).set(r[0], r[1], n, e, this.rotate, this[Qa]) } else h = (new IH).set(this.x + t, this.y + i, n, e, 0, this[Qa]);
                return h[IT] = [Math[uf](s * t), Math[uf](s * i), Math[uf](s * n), Math.round(s * e)], h }, _36: function(t, i, n, e) {
                if (!this[Mo]) {
                    var s = gz[_f](this.x, this.y, this[Da], this[Na], t, i, n, e);
                    return s && s[gm](-this.x, -this.y), s }
                var h = this._hs(t, i);
                return t = h[0], i = h[1], gz[_f](0, 0, this[Da], this.height, h[0], h[1], n, e) }, equals: function(t) {
                return this.x == t.x && this.y == t.y && this[Da] == t[Da] && this[Na] == t[Na] && this[Mo] == t.rotate }, toString: function() {
                return this.x + Cr + this.y + Cr + this[Da] + Cr + this[Na] + Cr + this[Mo] }, toJSON: function() {
                return { x: this.x, y: this.y, width: this[Da], height: this[Na], rotate: this[Mo], scale: this.scale } } }),
        SH = { setStyle: bi, setStyles: li, addRule: yi, pre: Uz },
        jH = function(t, i, n, e) { this.source = t, this[Ed] = i, this[Al] = e, this[lr] = n, this[Cl] = Mq.PROPERTY_TYPE_STYLE };
    p(jH, jz);
    var AH = function(t) { this.id = ++WG, this[av] = {}, this._j8 = {}, t && (this.$name = t) };
    AH[nr] = { _j8: null, getStyle: function(t) {
            return this._j8[t] }, setStyle: function(t, i) {
            var n = this._j8[t];
            return n === i || n && i && n[cl] && n.equals(i) ? !1 : this[rv](t, i, new jH(this, t, i, n), this._j8) }, putStyles: function(t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._j8[n] = e : this[bk](n, e) } }, _$q: !0, invalidateVisibility: function(t) { this._$q = !0, t || (this instanceof LH && this[ak]() && this[ok](function(t) { t._$q = !0 }), this._ia() && this[qh]() && this[pu](function(t) { t[yk]() })) }, onParentChanged: function() { this[yk]() }, _ia: function() {
            return !this._3p && this instanceof DH }, invalidate: function() { this[ur](new Sz(this, gk, Gw)) }, _n7m: null, addUI: function(t, i) {
            if (this._n7m || (this._n7m = new uz), t.id || (t.id = ++WG), this[mk].containsById(t.id)) return !1;
            var n = { id: t.id, ui: t, bindingProperties: i };
            this[mk].add(n);
            var e = new Sz(this, gk, nv, n);
            return this[ur](e) }, removeUI: function(t) {
            if (!this[mk]) return !1;
            var i = this[mk][Vd](t.id);
            return i ? (this[mk][Kh](i), void this[ur](new Sz(this, gk, Kh, i))) : !1 }, toString: function() {
            return this[xk] || this.id }, type: Ek, _3p: !1, _ho: !0, inGroup: function(t) {
            var i = we(this);
            return i == t || i && t instanceof DH && i[zc](t) } }, p(AH, Fz), j(AH[nr], [tk, _r, eT, pk]), Z(AH[nr], { enableSubNetwork: { get: function() {
                return this._3p }, set: function(t) {
                if (this._3p != t) {
                    var i = this._3p;
                    this._3p = t, this instanceof LH && this._$x(), this.onEvent(new jz(this, E_, t, i)) } } }, bindingUIs: { get: function() {
                return this._n7m } }, styles: { get: function() {
                return this._j8 }, set: function(t) {
                if (this._j8 != t) {
                    for (var i in this._j8) i in t || (t[i] = n);
                    this[wk](t), this._j8 = t } } } }), kq[Tk] = we;
    var CH = function(t, i, n) { this.id = ++WG, this[av] = {}, this._j8 = {}, n && (this[xk] = n), this[Xc] = t, this.$to = i, this.connect() };
    CH[nr] = { $uiClass: ds, _k2: null, _in: null, _k4: null, _ib: null, _ev: !1, type: kk, otherNode: function(t) {
            return t == this[Gc] ? this.to : t == this.to ? this[Gc] : void 0 }, connect: function() {
            if (this._ev) return !1;
            if (!this[Xc] || !this.$to) return !1;
            if (this._ev = !0, this[Xc] == this.$to) return void this[Xc]._hz(this);
            Ae(this.$to, this), Se(this[Xc], this), ye(this[Xc], this, this.$to);
            var t = this[$c],
                i = this[Nc];
            if (t != i) {
                var n;
                this[Xc]._dq && (me(t, this, i), n = !0), this.$to._dq && (Ee(i, this, t), n = !0), n && ye(t, this, i) } }, disconnect: function() {
            if (!this._ev) return !1;
            if (this._ev = !1, this.$from == this.$to) return void this[Xc][Mk](this);
            je(this.$from, this), Ce(this.$to, this), ge(this[Xc], this, this.$to);
            var t = this.fromAgent,
                i = this[Nc];
            if (t != i) {
                var n;
                this[Xc]._dq && (xe(t, this, i), n = !0), this.$to._dq && (pe(i, this, t), n = !0), n && ge(t, this, i) } }, isConnected: function() {
            return this._ev }, isInvalid: function() {
            return !this[Xc] || !this.$to }, isLooped: function() {
            return this[Xc] == this.$to }, getEdgeBundle: function(t) {
            return t ? this._2k() : this.isLooped() ? this[Xc]._3z : this[Xc].getEdgeBundle(this.$to) }, hasEdgeBundle: function() {
            var t = this[FT](!0);
            return t && t[Ok][Yh] > 1 }, _2k: function() {
            var t = this[$c],
                i = this[Nc];
            return t == i ? this.$from._dq || this.$to._dq ? null : this[Xc]._3z : this.fromAgent[FT](this.toAgent) }, _9d: null, hasPathSegments: function() {
            return this._9d && !this._9d[Wf]() }, isBundleEnabled: function() {
            return this[Ik] && !this[u_]() }, firePathChange: function(t) { this[ur](new jz(this, Sk, t)) }, addPathSegment: function(t, i, n) {
            var e = new aY(i || nY, t);
            this._9d || (this._9d = new uz), this._9d.add(e, n), this[jk](e) }, addPathSegement: function() {
            return kq.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this[Ak][ir](this, arguments) }, removePathSegmentByIndex: function(t) {
            if (!this._9d) return !1;
            var i = this._9d.getByIndex(t);
            i && (this._9d[Kh](i), this[jk](i)) }, removePathSegment: function(t) {
            return this._9d ? (this._9d[Kh](t), void this[jk](t)) : !1 }, movePathSegment: function(t, i, n) {
            if (!this._9d) return !1;
            if (t = t || 0, i = i || 0, kq[Ck](n)) {
                var e = this._9d.getByIndex(n);
                return e ? (e[By](t, i), void this[jk]()) : !1 }
            l(function(n) { n.move(t, i) }), this.firePathChange() }, move: function(t, i) {
            return this._9d ? (this._9d[Rc](function(n) { n.move(t, i) }, this), void this[jk]()) : !1 }, validateEdgeBundle: function() {} }, p(CH, AH), Z(CH[nr], { pathSegments: { get: function() {
                return this._9d }, set: function(t) { kq[Tr](t) && (t = new uz(t)), this._9d = t, this[jk]() } }, from: { get: function() {
                return this[Xc] }, set: function(t) {
                if (this.$from != t) {
                    var i = new jz(this, Gc, t, this[Xc]);
                    this.beforeEvent(i) !== !1 && (this[Mv](), this.$from = t, this[Lk](), this[ur](i)) } } }, to: { get: function() {
                return this.$to }, set: function(t) {
                if (this.$to != t) {
                    var i = new jz(this, Pk, t, this.$to);
                    this[cr](i) !== !1 && (this[Mv](), this.$to = t, this.connect(), this[ur](i)) } } }, fromAgent: { get: function() {
                return this[Xc] ? this[Xc]._dq || this[Xc] : null } }, toAgent: { get: function() {
                return this.$to ? this.$to._dq || this.$to : null } } }), j(CH[nr], [v_, { name: Ik, value: !0 }, __]);
    var LH = function(t, i, n) { 2 == arguments[Yh] && D(t) && (n = i, i = t, t = null), this.id = ++WG, this[av] = {}, this._j8 = {}, t && (this.$name = t), this[Rk] = Dk, this.$anchorPosition = xz.CENTER_MIDDLE, this.$location = { x: i || 0, y: n || 0 }, this[Bc] = {} };
    LH[nr] = { $uiClass: ls, _dq: null, forEachEdge: function(t, i, n) {
            return !n && this._km && this._km.forEach(t, i) === !1 ? !1 : Pe(this, t, i) }, forEachOutEdge: function(t, i) {
            return Re(this, t, i) }, forEachInEdge: function(t, i) {
            return De(this, t, i) }, getEdges: function() {
            var t = [];
            return this.forEachEdge(function(i) { t[Jh](i) }), t }, _ht: null, _g1: null, _jf: null, _hq: null, _n59: 0, _9i: 0, hasInEdge: function() {
            return null != this._ht }, hasOutEdge: function() {
            return null != this._g1 }, hasEdge: function() {
            return null != this._ht || null != this._g1 || this.hasLoops() }, linkedWith: function(t) {
            return t[Gc] == this || t.to == this || t[$c] == this || t.toAgent == this }, hasEdgeWith: function(t) {
            var i = this[FT](t);
            return i && i.edges.length > 0 }, _km: null, _3z: null, hasLoops: function() {
            return this._km && this._km.length > 0 }, _hz: function(t) {
            return this._km || (this._km = new uz, this._3z = new iW(this, this, this._km)), this._3z._i6(t) }, _n77: function(t) {
            return this._3z ? this._3z._dd(t) : void 0 }, getEdgeBundle: function(t) {
            return t == this ? this._3z : this[Bc][t.id] || t[Bc][this.id] }, _62: function() {
            return this._8t && this._8t[Yh] }, _4w: function() {
            return this._7s && this._7s[Yh] }, _9l: function() {
            return this._62() || this._4w() }, _7s: null, _8t: null, _n7h: function() {
            var t = this._dq,
                i = be(this);
            if (t != i) {
                var n = Le(this);
                this._8x(i), n[Rc](function(t) {
                    var i = t[$c],
                        n = t[Nc],
                        t = t[wu],
                        e = t[Xc]._dq,
                        s = t.$to._dq;
                    i != n && (i && xe(i, t, n || t.$to), n && pe(n, t, i || t[Xc])), e != s && (e && me(e, t, s || t.$to), s && Ee(s, t, e || t[Xc]), ye(e || t[Xc], t, s || t.$to)) }, this) } }, onParentChanged: function() { this[yk](), this[Nk]() }, _7q: null, _$x: function() {
            var t;
            if (this._3p ? t = null : (t = this._dq, t || this._fg !== !1 || (t = this)), this._7q == t) return !1;
            if (this._7q = t, this._fm && this._fm._jk[Yh])
                for (var i, n = this._fm._jk, e = 0, s = n.length; s > e; e++) i = n[e], i instanceof LH && i._8x(t) }, setLocation: function(t, i) {
            if (this.$location && this.$location.x == t && this.$location.y == i) return !1;
            var n;
            n = this[Bk] ? { x: this[Bk].x, y: this[Bk].y } : this[Bk];
            var e = new jz(this, $k, n, { x: t, y: i });
            return this[cr](e) === !1 ? !1 : (this[Bk] ? (this.$location.x = t, this.$location.y = i) : this[Bk] = new lz(t, i), this[ur](e), !0) }, _do: null, addFollower: function(t) {
            return null == t ? !1 : t.host = this }, removeFollower: function(t) {
            return this._do && this._do[d_](t) ? t[Fk] = null : !1 }, hasFollowers: function() {
            return this._do && !this._do[Wf]() }, toFollowers: function() {
            return this.hasFollowers() ? this._do.toDatas() : null }, clearFollowers: function() { this[qc]() && (this[Gk](), l(this.toFollowers(), function(t) { t[Fk] = null })) }, getFollowerIndex: function(t) {
            return this._do && this._do[d_](t) ? this._do.indexOf(t) : -1 }, setFollowerIndex: function(t, i) {
            return this._do && this._do.contains(t) ? void this._do[Wc](t, i) : -1 }, getFollowerCount: function() {
            return this._do ? this._do.length : 0 }, _8v: function() {
            return this._do ? this._do : (this._do = new uz, this._do) }, isFollow: function(t) {
            if (!t || !this._host) return !1;
            for (var i = this[zk]; i;) {
                if (i == t) return !0;
                i = i._host }
            return !1 }, _8x: function(t) {
            return t == this._dq ? !1 : (this._dq = t, this[yk](), void this._$x()) }, type: qk }, p(LH, AH), Z(LH.prototype, { loops: { get: function() {
                return this._km } }, edgeCount: { get: function() {
                return this[Vc] + this._9i } }, agentNode: { get: function() {
                return this._dq || this } }, host: { set: function(t) {
                if (this == t || t == this._host) return !1;
                var i = new jz(this, Fk, this[zk], t);
                if (!1 === this[cr](i)) return !1;
                var n = null,
                    e = null,
                    s = this._host;
                if (null != t && (n = new jz(t, Yk, null, this), !1 === t[cr](n))) return !1;
                if (null != s && (e = new jz(s, Hk, null, this), !1 === s.beforeEvent(e))) return !1;
                if (this[zk] = t, null != t) {
                    var h = t._8v();
                    h.add(this) }
                if (null != s) {
                    var h = s._8v();
                    h[Kh](this) }
                return this[ur](i), null != t && t[ur](n), null != s && s.onEvent(e), !0 }, get: function() {
                return this[zk] } } }), j(LH[nr], [$k, qw, Vm, Mo, Uk]), Z(LH[nr], { x: { get: function() {
                return this[$k].x }, set: function(t) { t != this[$k].x && (this[$k] = new lz(t, this[$k].y)) } }, y: { get: function() {
                return this.location.y }, set: function(t) { t != this[$k].y && (this[$k] = new lz(this[$k].x, t)) } } });
    var PH = function(t, i) { t instanceof fY && (i = t, t = n), w(this, PH, [t]), this[Wk] = i || new fY, this[Uk] = null, this[tk] = ah, cz[Vk] || (cz.SHAPENODE_STYLES = {}, cz[Vk][$H[Xk]] = !1), this[wk](cz.SHAPENODE_STYLES) };
    PH[nr] = { $uiClass: ah, type: Kk, moveTo: function(t, i) { this.path[Kc](t, i), this[jk]() }, lineTo: function(t, i) { this.path.lineTo(t, i), this.firePathChange() }, quadTo: function(t, i, n, e) { this[Wk][Zc](t, i, n, e), this[jk]() }, curveTo: function(t, i, n, e, s, h) { this[Wk][Qc](t, i, n, e, s, h), this[jk]() }, arcTo: function(t, i, n, e, s) { this[Wk].arcTo(t, i, n, e, s), this[jk]() }, closePath: function() { this[Wk][vf](), this.firePathChange() }, clear: function() { this[Wk][Ba](), this[jk]() }, removePathSegmentByIndex: function(t) { this[Wk][Zk](t) !== !1 && this.firePathChange() }, firePathChange: function() { this[Wk]._5x = !0, this[ur](new jz(this, Sk)) } }, p(PH, LH), Z(PH[nr], { path: { get: function() {
                return this.image }, set: function(t) { this[Vm] = t } }, pathSegments: { get: function() {
                return this.path.segments }, set: function(t) { this.path[Jk] = t || [], this.firePathChange() } }, length: { get: function() {
                return this.path[Yh] } } }), kq[Qk] = PH;
    var RH = { _jo: {}, register: function(t, i) { RH._jo[t] = i }, getShape: function(t, i, e, s, h, r) { s === n && (s = i, h = e, i = 0, e = 0), s || (s = 50), h || (h = 50);
            var a = RH._jo[t];
            return a ? a[tM] instanceof Function ? a[tM](i, e, s, h, r) : a : void 0 }, getRect: function(t, i, n, e, s, h, r) {
            return t instanceof Object && Da in t && (i = t.y, n = t[Da], e = t[Na], s = t.rx, h = t.ry, r = t.path, t = t.x), Ne(r || new fY, t, i, n, e, s, h) }, getAllShapes: function(t, i, n, e, s) {
            var h = {};
            for (var r in RH._jo) {
                var a = RH.getShape(r, t, i, n, e, s);
                a && (h[r] = a) }
            return h }, createRegularShape: function(t, i, n, e, s) {
            return Ye(t, i, n, e, s) } };
    es(), ss[nr] = { type: iM }, p(ss, PH), kq.Bus = ss, hs[nr] = { _hf: function(t) {
            var i, n = t._jr;
            i = n ? n._fm : this.$roots;
            var e = i[Qh](t);
            if (0 > e) throw new Error(Iv + t + "' not exist in the box");
            for (; e >= 0;) {
                if (0 == e) return n instanceof LH ? n : null;
                e -= 1;
                var h = i.getByIndex(e);
                if (h = s(h)) return h }
            return null }, forEachNode: function(t, i) { this[Rc](function(n) {
                return n instanceof LH && t[zh](i, n) === !1 ? !1 : void 0 }) }, _3k: null }, p(hs, zz), Z(hs.prototype, { propertyChangeDispatcher: { get: function() {
                return this._$t } }, currentSubNetwork: { get: function() {
                return this._3k }, set: function(t) {
                if (t && !t[E_] && (t = null), this._3k != t) {
                    var i = this._3k;
                    this._3k = t, this._$t[ur](new jz(this, nM, t, i)) } } } }), cz[eM] = Mq[sM], cz.GROUP_PADDING = 5, cz[hM] = !0, cz.GROUP_MIN_SIZE = { width: 60, height: 60 };
    var DH = function(t, i, e) { w(this, DH, arguments), (i === n || e === n) && (this[Bk][rM] = !0), this[aM] = cz[eM], this[Mf] = cz[oM], this[Rk] = _Y.group, this[fM] = cz[cM], this.expanded = cz[hM] };
    DH.prototype = { type: uM, $uiClass: nh, _8u: function() {
            return !this._fg && !this._dq }, forEachOutEdge: function(t, i, n) {
            return Re(this, t, i) === !1 ? !1 : !n && this._8u() && this._7s ? this._7s.forEach(t, i) : void 0 }, forEachInEdge: function(t, i, n) {
            return De(this, t, i) === !1 ? !1 : !n && this._8u() && this._8t ? this._8t[Rc](t, i) : void 0 }, forEachEdge: function(t, i, n) {
            return T(this, DH, ok, arguments) === !1 ? !1 : n || n || !this._8u() ? void 0 : this._8t && this._8t[Rc](t, i) === !1 ? !1 : this._7s ? this._7s.forEach(t, i) : void 0 }, hasInEdge: function(t) {
            return t ? null != this._ht : null != this._ht || this._62() }, hasOutEdge: function(t) {
            return t ? null != this._g1 : null != this._g1 || this._4w() }, hasEdge: function(t) {
            return t ? null != this._ht || null != this._g1 : null != this._ht || null != this._g1 || this._9l() } }, p(DH, LH), Z(DH.prototype, { expanded: { get: function() {
                return this._fg }, set: function(t) {
                if (this._fg != t) {
                    var i = new jz(this, ik, t, this._fg);
                    this[cr](i) !== !1 && (this._fg = t, this._$x(), this[ur](i), this._dq || rs.call(this)) } } } }), j(DH[nr], [_M, dM, Yo, lM]), kq[vM] = DH, as[nr].type = bM, p(as, LH), kq.Text = as;
    var NH = function(t) { this._ja = new gz, this._7m = new gz, this._fo = new gz, this.id = ++WG, t && (this[Jo] = t) };
    NH.prototype = { invalidate: function() { this[yM]() }, _1f: !0, _ja: null, _7m: null, _fo: null, _n5w: !1, _jq: 1, _ji: 1, _ho: !0, _7p: 0, _5t: 0, _jr: null, _n57: null, borderColor: gM, borderLineDash: null, borderLineDashOffset: null, syncSelection: !0, syncSelectionStyles: !0, _15: function() { this[mM] = fi(this.anchorPosition, this._7p, this._5t) }, setMeasuredBounds: function(t, i, n, e) {
            return t instanceof Object && (n = t.x, e = t.y, i = t[Na], t = t.width), this._ja.width == t && this._ja[Na] == i && this._ja.x == n && this._ja.y == e ? !1 : void this._ja.set(n || 0, e || 0, t || 0, i || 0) }, initialize: function() {}, measure: function() {}, draw: function() {}, _7k: function(t, i, n) { n[kx] == Mq[fm] ? (t[z_] = n[gx], t[$m] = n[yx] * i, t[Fm] = (n[xM] || 0) * i, t.shadowOffsetY = (n[mx] || 0) * i) : this._1u(t, i, n) }, _1u: function(t, i, n) {
            var e = n[px] || 0;
            n[EM] && (t[Cm] = n[EM], t.fillRect(this._7m.x - e / 2, this._7m.y - e / 2, this._7m[Da] + e, this._7m[Na] + e)), t[Dm] = n.selectionColor, t[wo] = e, t[pM](this._7m.x - e / 2, this._7m.y - e / 2, this._7m[Da] + e, this._7m[Na] + e) }, _j7: function(t, i, n, e) {
            if (!this._ho) return !1;
            if (this[wM] || (n = this[JT]), (n && !this[TM] || !e) && (e = this), t[Za](), 1 != this.$alpha && (t[FE] = this[kM]), t[Ja](this.$x, this.$y), this.$rotatable && this[Ef] && t[Mo](this[Ef]), (this[MM] || this[OM]) && t[Ja](this[MM], this[OM]), this[mf] && t.rotate(this[mf]), this.$layoutByAnchorPoint && this[gf] && t.translate(-this[gf].x, -this[gf].y), this[z_] && (t.shadowColor = this.shadowColor, t[$m] = this[$m] * i, t[Fm] = this[Fm] * i, t[Gm] = this.shadowOffsetY * i), n && e[kx] == Mq[IM] && (this._1u(t, i, e), n = !1), this._$o() && this._ljShape && !this[Rf][SM]) { this[Rf][Wo]();
                var s = { lineWidth: this[If], strokeStyle: this.borderColor, lineDash: this.borderLineDash, lineDashOffset: this[jM], fillColor: this[AM], fillGradient: this._n6ackgroundGradient, lineCap: nm, lineJoin: uf };
                this[Rf][Uo](t, i, s, n, e), n = !1, t[z_] = Ox }
            t.beginPath(), this[Uo](t, i, n, e), t[ao]() }, invalidateData: function() { this.$invalidateData = !0, this.$invalidateSize = !0, this._1f = !0 }, invalidateSize: function() { this[Tf] = !0, this._1f = !0 }, invalidateRender: function() { this._1f = !0 }, _4q: function() {}, _$o: function() {
            return this[AM] || this[CM] || this[If] }, _3t: function() {
            return this[AM] || this[CM] }, doValidate: function() {
            return this[LM] && (this[LM] = !1, this.measure() !== !1 && (this[Tf] = !0)), this.$invalidateSize && this.validateSize && this[PM](), zn[zh](this) ? (this.$invalidateRotate = !0, this[RM] && this.onBoundsChanged(), !0) : this[DM] ? (this.$invalidateRotate = !0, this[DM] = !1, !0) : void 0 }, validate: function() {
            var t = this._ho;
            return this[NM] && (this[NM] = !1, this._ho = this[BM], !this._ho || (this.$data || this[$M]) && this._4q() !== !1 || (this._ho = !1)), this._ho ? (this._1f = !1, this[Tu] || (this.initialize(), this[Tu] = !0), this[FM]()) : t != this._ho }, _hs: function(t, i) {
            return t -= this.$x, i -= this.$y, Gn[zh](this, { x: t, y: i }) }, hitTest: function(t, i, n, e) {
            if (t -= this.$x, i -= this.$y, !this._fo[Gf](t, i, n)) return !1;
            var s = Gn[zh](this, { x: t, y: i });
            return t = s.x, i = s.y, !e && this._$o() && this[Rf] && this._ljShape[l_](t, i, n, !1, this.$border, this.$backgroundColor || this[CM]) ? !0 : this[GM](t, i, n) }, doHitTest: function(t, i, n) {
            return this._ja.intersectsPoint(t, i, n) }, hitTestByBounds: function(t, i, n, e) {
            var s = this._hs(t, i);
            return !e && this._$o() && this[Rf] && this[Rf][l_](t, i, n, !1, this[If], this[AM] || this.$backgroundGradient) ? !0 : this._ja.intersectsPoint(s.x, s.y, n) }, onDataChanged: function() { this[LM] = !0, this._1f = !0, this[NM] = !0 }, getBounds: function() {
            var t = this._fo[Zh]();
            return t[gm](this.x, this.y), this[Dc] && (this.parent[Mo] && Ii(t, this[Dc].rotate, t), t[gm](this[Dc].x || 0, this[Dc].y || 0)), t }, destroy: function() { this[HT] = !0 }, _dh: !1 }, Z(NH[nr], { originalBounds: { get: function() {
                return this._ja } }, data: { get: function() {
                return this[Uf] }, set: function(t) {
                if (this[Uf] != t) {
                    var i = this[Uf];
                    this[Uf] = t, this[zM](t, i) } } }, parent: { get: function() {
                return this._jr } }, showOnTop: { get: function() {
                return this._dh }, set: function(t) { t != this._dh && (this._dh = t, this._1f = !0, this._jr && this._jr[qM] && this._jr[qM](this)) } } }), fs(NH.prototype, { visible: { value: !0, validateFlags: [YM, HM] }, showEmpty: { validateFlags: [YM] }, anchorPosition: { value: xz[xl], validateFlags: [UM, HM] }, position: { value: xz[xl], validateFlags: [HM] }, offsetX: { value: 0, validateFlags: [HM] }, offsetY: { value: 0, validateFlags: [HM] }, layoutByAnchorPoint: { value: !0, validateFlags: [WM, UM, HM] }, padding: { value: 0, validateFlags: [WM] }, border: { value: 0, validateFlags: [WM] }, borderRadius: { value: cz.BORDER_RADIUS }, showPointer: { value: !1, validateFlags: [WM] }, pointerX: { value: 0, validateFlags: [WM] }, pointerY: { value: 0, validateFlags: [WM] }, pointerWidth: { value: cz.POINTER_WIDTH }, backgroundColor: { validateFlags: [WM] }, backgroundGradient: { validateFlags: [WM, VM] }, selected: { value: !1, validateFlags: [WM] }, selectionBorder: { value: cz[cm], validateFlags: [WM] }, selectionShadowBlur: { value: cz[um], validateFlags: [WM] }, selectionColor: { value: cz[_m], validateFlags: [WM] }, selectionType: { value: cz[om], validateFlags: [WM] }, selectionShadowOffsetX: { value: 0, validateFlags: [WM] }, selectionShadowOffsetY: { value: 0, validateFlags: [WM] }, shadowBlur: { value: 0, validateFlags: [WM] }, shadowColor: { validateFlags: [WM] }, shadowOffsetX: { value: 0, validateFlags: [WM] }, shadowOffsetY: { value: 0, validateFlags: [WM] }, renderColorBlendMode: {}, renderColor: {}, x: { value: 0, validateFlags: [HM] }, y: { value: 0, validateFlags: [HM] }, rotatable: { value: !0, validateFlags: [XM, WM] }, rotate: { value: 0, validateFlags: [XM, WM] }, _hostRotate: { validateFlags: [XM] }, lineWidth: { value: 0, validateFlags: [eg] }, alpha: { value: 1 } });
    var BH = [Mq.PROPERTY_TYPE_ACCESSOR, Mq.PROPERTY_TYPE_STYLE, Mq[KM]];
    us[nr] = { removeBinding: function(t) {
            for (var i = BH[Yh]; --i >= 0;) {
                var n = BH[i],
                    e = this[n];
                for (var s in e) {
                    var h = e[s];
                    Array.isArray(h) ? (v(h, function(i) {
                        return i.target == t }, this), h[Yh] || delete e[s]) : h.target == t && delete e[s] } } }, _26: function(t, i, n) {
            if (!n && (n = this[i[Cl] || Mq.PROPERTY_TYPE_ACCESSOR], !n)) return !1;
            var e = n[t];
            e ? (Array.isArray(e) || (n[t] = e = [e]), e[Jh](i)) : n[t] = i }, _2d: function(t, i, n, e, s, h) { t = t || Mq[ju];
            var r = this[t];
            if (!r) return !1;
            var a = { property: i, propertyType: t, bindingProperty: e, target: n, callback: s, invalidateSize: h };
            this._26(i, a, r) }, onBindingPropertyChange: function(t, i, n, e) {
            var s = this[n || Mq[ju]];
            if (!s) return !1;
            var h = s[i];
            return h ? (t._1f = !0, cs(t, h, n, e), !0) : !1 }, initBindingProperties: function(t, i) {
            for (var e = BH[Yh]; --e >= 0;) {
                var s = BH[e],
                    h = this[s];
                for (var r in h) {
                    var a = h[r];
                    if (a[Iu]) {
                        var o = a[mw];
                        if (o) {
                            if (!(o instanceof NH || (o = t[o]))) continue } else o = t;
                        var f;
                        f = i === !1 ? t.getProperty(a[Ou], s) : s == Mq[Au] ? t[r_][Cu](t[Uf], a.property) : t[Uf][a[Ou]], f !== n && (o[a[Iu]] = f) } } } } };
    var $H = {};
    $H[_m] = ZM, $H[cm] = JM, $H.SELECTION_SHADOW_BLUR = "selection.shadow.blur", $H.SELECTION_SHADOW_OFFSET_X = "selection.shadow.offset.x", $H[QM] = "selection.shadow.offset.y", $H[om] = tO, $H.RENDER_COLOR = iO, $H[nO] = "render.color.blend.mode", $H.ALPHA = eO, $H[sO] = hO, $H[rO] = aO, $H[oO] = fO, $H.SHADOW_OFFSET_Y = cO, $H[uO] = _O, $H[dO] = lO, $H.SHAPE_LINE_FILL_COLOR = "shape.stroke.fill.color", $H.SHAPE_LINE_DASH = vO, $H.SHAPE_LINE_DASH_OFFSET = "shape.line.dash.offset", $H[bO] = yO, $H[gO] = mO, $H[xO] = EO, $H[pO] = wO, $H[TO] = kO, $H.BACKGROUND_COLOR = MO, $H[OO] = IO, $H[SO] = jO, $H[AO] = CO, $H[LO] = PO, $H[RO] = "border.line.dash.offset", $H[dm] = DO, $H[NO] = Yo, $H[BO] = $O, $H[FO] = GO, $H.LINE_DASH_CAP = zO, $H.LINE_DASH_JOIN = qO, $H[YO] = "image.background.color", $H[HO] = "image.background.gradient", $H[UO] = WO, $H.IMAGE_BORDER_STYLE = $H[VO] = XO, $H[KO] = "image.border.line.dash", $H.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset", $H.IMAGE_RADIUS = $H[ZO] = JO, $H.IMAGE_PADDING = QO, $H[tI] = iI, $H[nI] = eI, $H[sI] = hI, $H[rI] = aI, $H[oI] = fI, $H[cI] = uI, $H[_I] = "label.anchor.position", $H[dI] = lI, $H[vI] = bI, $H[yI] = gI, $H[mI] = xI, $H.LABEL_PADDING = EI, $H.LABEL_POINTER_WIDTH = pI, $H[wI] = TI, $H[kI] = MI, $H[OI] = II, $H[SI] = jI, $H[AI] = CI, $H[LI] = PI, $H.LABEL_BORDER = RI, $H[DI] = NI, $H.LABEL_BACKGROUND_COLOR = "label.background.color", $H[BI] = "label.background.gradient", $H[$I] = FI, $H[GI] = zI, $H[qI] = YI, $H[HI] = "label.shadow.offset.x", $H[UI] = "label.shadow.offset.y", $H[WI] = VI, $H[XI] = KI, $H[ZI] = "group.background.color", $H[JI] = "group.background.gradient", $H[QI] = tS, $H[iS] = nS, $H[eS] = "group.stroke.line.dash", $H.GROUP_STROKE_LINE_DASH_OFFSET = "group.stroke.line.dash.offset", $H[sS] = "edge.bundle.label.rotate", $H[hS] = "edge.bundle.label.position", $H[rS] = "edge.bundle.label.anchor.position", $H.EDGE_BUNDLE_LABEL_COLOR = "edge.bundle.label.color", $H[aS] = "edge.bundle.label.font.size", $H.EDGE_BUNDLE_LABEL_FONT_FAMILY = "edge.bundle.label.font.family", $H[oS] = "edge.bundle.label.font.style", $H[fS] = "edge.bundle.label.padding", $H.EDGE_BUNDLE_LABEL_POINTER_WIDTH = "edge.bundle.label.pointer.width", $H.EDGE_BUNDLE_LABEL_POINTER = "edge.bundle.label.pointer", $H[cS] = "edge.bundle.label.radius", $H[uS] = "edge.bundle.label.offset.x", $H.EDGE_BUNDLE_LABEL_OFFSET_Y = "edge.bundle.label.offset.y", $H[_S] = "edge.bundle.label.border", $H[dS] = "edge.bundle.label.border.color", $H[lS] = "edge.bundle.label.background.color", $H.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient", $H.EDGE_BUNDLE_LABEL_ROTATABLE = "edge.bundle.label.rotatable", $H[vS] = bS, $H.EDGE_COLOR = yS, $H.EDGE_OUTLINE = gS, $H[mS] = xS, $H[ES] = pS, $H[wS] = "edge.line.dash.offset", $H[f_] = TS, $H[c_] = kS, $H[MS] = OS, $H[IS] = SS, $H[y_] = jS, $H.EDGE_EXTEND = AS, $H[Ku] = CS, $H[qu] = "edge.split.by.percent", $H[Pu] = LS, $H[Ru] = PS, $H[Wu] = RS, $H[DS] = NS, $H[BS] = $S, $H[FS] = GS, $H[zS] = qS, $H.ARROW_FROM_SIZE = YS, $H[HS] = US, $H.ARROW_FROM_STROKE = WS, $H[VS] = "arrow.from.stroke.style", $H[XS] = KS, $H.ARROW_FROM_OUTLINE_STYLE = "arrow.from.outline.style", $H[ZS] = JS, $H[QS] = "arrow.from.line.dash.offset", $H[tj] = "arrow.from.fill.color", $H[ij] = "arrow.from.fill.gradient", $H.ARROW_FROM_LINE_CAP = nj, $H.ARROW_FROM_LINE_JOIN = ej, $H[Xk] = sj, $H[hj] = rj, $H[aj] = oj, $H.ARROW_TO_STROKE = fj, $H[cj] = "arrow.to.stroke.style", $H.ARROW_TO_OUTLINE = uj, $H.ARROW_TO_OUTLINE_STYLE = "arrow.to.outline.style", $H[_j] = dj, $H.ARROW_TO_LINE_DASH_OFFSET = "arrow.to.line.dash.offset", $H[lj] = vj, $H.ARROW_TO_FILL_GRADIENT = "arrow.to.fill.gradient", $H[bj] = yj, $H.ARROW_TO_LINE_JOIN = gj;
    var FH = new us,
        GH = Mq.PROPERTY_TYPE_ACCESSOR,
        zH = Mq[Au],
        qH = !1;
    FH._2d(zH, $H[om], null, kx), FH._2d(zH, $H[cm], null, px), FH._2d(zH, $H[um], null, yx), FH._2d(zH, $H[_m], null, gx), FH._2d(zH, $H.SELECTION_SHADOW_OFFSET_X, null, "selectionShadowOffsetX"), FH._2d(zH, $H[QM], null, "selectionShadowOffsetY"), FH._2d(GH, _r, Ep, Jo), FH._2d(zH, $H[cI], Ep, dT), FH._2d(zH, $H[oI], Ep, Yf), FH._2d(zH, $H[_I], Ep, Uk), FH._2d(zH, $H[dI], Ep, mj), FH._2d(zH, $H.LABEL_FONT_SIZE, Ep, sd), FH._2d(zH, $H.LABEL_BORDER, Ep, vg), FH._2d(zH, $H.LABEL_BORDER_STYLE, Ep, xj), FH._2d(zH, $H[Ej], Ep, pj), FH._2d(zH, $H[XI], Ep, wj), qH || (FH._2d(zH, $H[sO], null, $m), FH._2d(zH, $H[rO], null, z_), FH._2d(zH, $H.SHADOW_OFFSET_X, null, Fm), FH._2d(zH, $H[Tj], null, Gm), FH._2d(zH, $H[yI], Ep, kj), FH._2d(zH, $H[mI], Ep, Mj), FH._2d(zH, $H.LABEL_ALIGN_POSITION, Ep, Oj), FH._2d(zH, $H[rI], Ep, Mo), FH._2d(zH, $H[Ij], Ep, Yo), FH._2d(zH, $H[Sj], Ep, jj), FH._2d(zH, $H.LABEL_POINTER, Ep, Sf), FH._2d(zH, $H.LABEL_RADIUS, Ep, Aj), FH._2d(zH, $H[OI], Ep, MM), FH._2d(zH, $H.LABEL_OFFSET_Y, Ep, OM), FH._2d(zH, $H[$I], Ep, Cj), FH._2d(zH, $H[BI], Ep, Pf), FH._2d(zH, $H.LABEL_SIZE, Ep, qw), FH._2d(zH, $H[GI], Ep, $m), FH._2d(zH, $H[qI], Ep, z_), FH._2d(zH, $H[HI], Ep, Fm), FH._2d(zH, $H[UI], Ep, Gm), FH._2d(zH, $H[WI], Ep, eT), FH._2d(zH, $H.RENDER_COLOR, null, qm), FH._2d(zH, $H[nO], null, Hm), FH._2d(zH, $H.ALPHA, null, eO));
    var YH = new us;
    YH._2d(GH, $k), YH._2d(GH, Uk, null, Lj), YH._2d(GH, Mo, null, Mo), qH || (YH._2d(zH, $H[Pj], null, pj), YH._2d(zH, $H.BACKGROUND_GRADIENT, null, Pf), YH._2d(zH, $H[NO], null, Yo), YH._2d(zH, $H[SO], null, vg), YH._2d(zH, $H.BORDER_RADIUS, null, Aj), YH._2d(zH, $H.BORDER_COLOR, null, xj), YH._2d(zH, $H.BORDER_LINE_DASH, null, Rj), YH._2d(zH, $H[RO], null, jM)), YH._2d(GH, Vm, Vm, Jo, Dj), YH._2d(GH, qw, Vm, qw), YH._2d(zH, $H[uO], Vm, wo), YH._2d(zH, $H[dO], Vm, Dm), YH._2d(zH, $H[bO], Vm, Ix), YH._2d(zH, $H[TO], Vm, Hf), qH || (YH._2d(zH, $H[nI], Vm, Nj), YH._2d(zH, $H[xO], Vm, Ex), YH._2d(zH, $H[pO], Vm, Mx), YH._2d(zH, $H[gO], Vm, Sx), YH._2d(zH, $H.SHAPE_LINE_DASH, Vm, Kf), YH._2d(zH, $H[Bj], Vm, nc), YH._2d(zH, $H.LINE_CAP, Vm, wx), YH._2d(zH, $H[FO], Vm, Tx), YH._2d(zH, $H[YO], Vm, pj), YH._2d(zH, $H[HO], Vm, Pf), YH._2d(zH, $H[$j], Vm, Yo), YH._2d(zH, $H[UO], Vm, vg), YH._2d(zH, $H.IMAGE_BORDER_RADIUS, Vm, Aj), YH._2d(zH, $H[VO], Vm, xj), YH._2d(zH, $H.IMAGE_BORDER_LINE_DASH, Vm, Rj), YH._2d(zH, $H[Fj], Vm, jM), YH._2d(zH, $H[tI], Vm, eT), YH._2d(zH, $H[sI], Vm, eO)), YH._2d(GH, ik, null, null, Gj), YH._2d(GH, E_, null, null, Gj);
    var HH = new us;
    HH._2d(GH, dM, null, null, zj), HH._2d(GH, lM, null, null, zj), HH._2d(GH, _M, null, null, zj), HH._2d(GH, Yo, null, null, zj), HH._2d(zH, $H[ZI], qj, Ix), HH._2d(zH, $H[JI], qj, Sx), HH._2d(zH, $H.GROUP_STROKE, qj, wo), HH._2d(zH, $H[iS], qj, Dm), HH._2d(zH, $H.GROUP_STROKE_LINE_DASH, qj, Kf), HH._2d(zH, $H[Yj], qj, nc);
    var UH = new us;
    UH._2d(GH, Gc, qj, null, Hj), UH._2d(GH, Pk, qj, null, Hj), UH._2d(GH, v_, qj, null, Hj), UH._2d(zH, $H[Lu], qj, null, Hj), UH._2d(zH, $H[vS], qj, wo), UH._2d(zH, $H[Uj], qj, Dm), UH._2d(zH, $H[zS], qj, Wj), UH._2d(zH, $H[Xk], qj, Vj), qH || (UH._2d(zH, $H[Xj], qj, Ax), UH._2d(zH, $H.LINE_DASH_JOIN, qj, Cx), UH._2d(zH, $H[MS], qj, Kj), UH._2d(zH, $H[BS], null, Zj, Hj), UH._2d(zH, $H[FS], null, Jj, Hj), UH._2d(zH, $H.EDGE_OUTLINE, qj, Ex), UH._2d(zH, $H[mS], qj, Mx), UH._2d(zH, $H.EDGE_LINE_DASH, qj, Kf), UH._2d(zH, $H.EDGE_LINE_DASH_OFFSET, qj, nc), UH._2d(zH, $H[Ku], qj, null, Hj), UH._2d(zH, $H.EDGE_FROM_OFFSET, qj, null, Hj), UH._2d(zH, $H[c_], qj, null, Hj), UH._2d(zH, $H[BO], qj, wx), UH._2d(zH, $H.LINE_JOIN, qj, Tx), UH._2d(GH, Sk, null, null, Hj, !0), UH._2d(GH, __, null, null, Hj, !0), UH._2d(zH, $H.ARROW_FROM_SIZE, qj, Qj), UH._2d(zH, $H[HS], qj, tA), UH._2d(zH, $H[iA], qj, nA), UH._2d(zH, $H.ARROW_FROM_STROKE_STYLE, qj, eA), UH._2d(zH, $H[XS], qj, sA), UH._2d(zH, $H.ARROW_FROM_OUTLINE_STYLE, qj, "fromArrowOutlineStyle"), UH._2d(zH, $H[tj], qj, hA), UH._2d(zH, $H[ij], qj, "fromArrowFillGradient"), UH._2d(zH, $H[ZS], qj, rA), UH._2d(zH, $H.ARROW_FROM_LINE_DASH_OFFSET, qj, "fromArrowLineDashOffset"), UH._2d(zH, $H[aA], qj, oA), UH._2d(zH, $H[fA], qj, cA), UH._2d(zH, $H[hj], qj, uA), UH._2d(zH, $H.ARROW_TO_OFFSET, qj, _A), UH._2d(zH, $H[dA], qj, lA), UH._2d(zH, $H[cj], qj, vA), UH._2d(zH, $H.ARROW_TO_OUTLINE, qj, bA), UH._2d(zH, $H[yA], qj, gA), UH._2d(zH, $H[lj], qj, mA), UH._2d(zH, $H[xA], qj, EA), UH._2d(zH, $H[_j], qj, pA), UH._2d(zH, $H[wA], qj, "toArrowLineDashOffset"), UH._2d(zH, $H[TA], qj, kA), UH._2d(zH, $H[bj], qj, MA));
    var WH = new us;
    WH._2d(zH, $H[OA], IA, mj), WH._2d(zH, $H[hS], IA, Yf), WH._2d(zH, $H[rS], IA, Uk), WH._2d(zH, $H[aS], IA, sd), WH._2d(zH, $H[SA], IA, Cj), qH || (WH._2d(zH, $H.EDGE_BUNDLE_LABEL_ROTATE, IA, Mo), WH._2d(zH, $H.EDGE_BUNDLE_LABEL_FONT_FAMILY, IA, kj), WH._2d(zH, $H.EDGE_BUNDLE_LABEL_FONT_STYLE, IA, Mj), WH._2d(zH, $H.EDGE_BUNDLE_LABEL_PADDING, IA, Yo), WH._2d(zH, $H[jA], IA, jj), WH._2d(zH, $H[AA], IA, Sf), WH._2d(zH, $H[cS], IA, Aj), WH._2d(zH, $H.EDGE_BUNDLE_LABEL_OFFSET_X, IA, MM), WH._2d(zH, $H.EDGE_BUNDLE_LABEL_OFFSET_Y, IA, OM), WH._2d(zH, $H[_S], IA, vg), WH._2d(zH, $H.EDGE_BUNDLE_LABEL_BORDER_STYLE, IA, xj), WH._2d(zH, $H[lS], IA, pj), WH._2d(zH, $H.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT, IA, Pf));
    var VH = new us;
    VH._2d(GH, $k), VH._2d(zH, $H.BACKGROUND_COLOR, null, pj), VH._2d(zH, $H[OO], null, Pf), VH._2d(zH, $H.PADDING, null, Yo), VH._2d(zH, $H[SO], null, vg), VH._2d(zH, $H[dm], null, Aj), VH._2d(zH, $H[AO], null, xj), VH._2d(zH, $H[LO], null, Rj), VH._2d(zH, $H[RO], null, jM), VH._2d(GH, Mo, null, Mo), VH._2d(GH, Sk, null, null, CA), VH._2d(GH, Wk, Vm, Jo), VH._2d(GH, qw, Vm, qw), VH._2d(zH, $H.SHAPE_STROKE, Vm, wo), VH._2d(zH, $H.SHAPE_STROKE_STYLE, Vm, Dm), VH._2d(zH, $H.SHAPE_FILL_COLOR, Vm, Ix), VH._2d(zH, $H[gO], Vm, Sx), qH || (VH._2d(zH, $H[Xj], Vm, Ax), VH._2d(zH, $H[LA], Vm, Cx), VH._2d(zH, $H[PA], Vm, Kj), VH._2d(zH, $H[xO], Vm, Ex), VH._2d(zH, $H[pO], Vm, Mx), VH._2d(zH, $H[RA], Vm, Kf), VH._2d(zH, $H[Bj], Vm, nc), VH._2d(zH, $H.LINE_CAP, Vm, wx), VH._2d(zH, $H[FO], Vm, Tx), VH._2d(zH, $H[TO], Vm, Hf), VH._2d(zH, $H[YO], Vm, pj), VH._2d(zH, $H[HO], Vm, Pf), VH._2d(zH, $H[$j], Vm, Yo), VH._2d(zH, $H[UO], Vm, vg), VH._2d(zH, $H.IMAGE_BORDER_RADIUS, Vm, Aj), VH._2d(zH, $H[VO], Vm, xj), VH._2d(zH, $H[KO], Vm, Rj), VH._2d(zH, $H.IMAGE_BORDER_LINE_DASH_OFFSET, Vm, jM), VH._2d(zH, $H[zS], Vm, Wj), VH._2d(zH, $H[DA], Vm, Qj), VH._2d(zH, $H[HS], Vm, tA), VH._2d(zH, $H.ARROW_FROM_STROKE, Vm, nA), VH._2d(zH, $H[VS], Vm, eA), VH._2d(zH, $H.ARROW_FROM_FILL_COLOR, Vm, hA), VH._2d(zH, $H[ij], Vm, "fromArrowFillGradient"), VH._2d(zH, $H[ZS], Vm, rA), VH._2d(zH, $H[QS], Vm, "fromArrowLineDashOffset"), VH._2d(zH, $H[aA], Vm, oA), VH._2d(zH, $H[fA], Vm, cA), VH._2d(zH, $H[hj], Vm, uA), VH._2d(zH, $H.ARROW_TO_OFFSET, Vm, _A), VH._2d(zH, $H.ARROW_TO, Vm, Vj), VH._2d(zH, $H[dA], Vm, lA), VH._2d(zH, $H.ARROW_TO_STROKE_STYLE, Vm, vA), VH._2d(zH, $H[lj], Vm, mA), VH._2d(zH, $H.ARROW_TO_FILL_GRADIENT, Vm, EA), VH._2d(zH, $H.ARROW_TO_LINE_DASH, Vm, pA), VH._2d(zH, $H[wA], Vm, "toArrowLineDashOffset"), VH._2d(zH, $H.ARROW_TO_LINE_JOIN, Vm, kA), VH._2d(zH, $H[bj], Vm, MA));
    var XH = function(t, i) {
            return t = t[eT], i = i.zIndex, t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0) },
        KH = function(t, i) { this[GT] = new gz, w(this, KH, arguments), this.id = this[Uf].id, this[r_] = i, this._fm = [], this._n6w = new us };
    KH[nr] = { syncSelection: !1, graph: null, layoutByAnchorPoint: !1, _n6w: null, _fm: null, addChild: function(t, i) { t._jr = this, i !== n ? g(this._fm, t, i) : this._fm[Jh](t), t._dh && this._n5r(t), this[NA](), this[BA](), this.$invalidateChild = !0 }, removeChild: function(t) { this._n6w.removeBinding(t), t._jr = null, m(this._fm, t), this._ju && this._ju[Kh](t), this.invalidateSize(), this[$A] = !0 }, getProperty: function(t, i) {
            return i == Mq[Au] ? this.graph[Cu](this.$data, t) : i == Mq[KM] ? this.$data.get(t) : this[Uf][t] }, getStyle: function(t) {
            return this[r_][Cu](this.$data, t) }, _$v: function(t, i, n) {
            var e = this[FA].onBindingPropertyChange(this, t, i, n);
            return FH[GA](this, t, i, n) || e }, onPropertyChange: function(t) {
            if (eT == t[Ed]) return this[QT](), !0;
            if (gk == t.type) {
                if (Gw == t.kind) return this[Gw](), !0;
                var i = t[lr];
                return i && i.ui ? (nv == t.kind ? this._8s(i) : Kh == t[Ed] && this[ww](i.ui), !0) : !1 }
            return this._$v(t[Ed], t[Cl] || GH, t[lr]) }, label: null, initLabel: function() {
            var t = new JH;
            t[_r] = Ep, this.addChild(t), this[Ep] = t }, initialize: function() { this[zA](), this[Uf][mk] && this[Uf]._n7m[Rc](this._8s, this), FH[qA](this), this._n6w[qA](this, !1) }, addBinding: function(t, i) {
            return i[Ou] ? (i[mw] = t, void this[FA]._26(i.property, i)) : !1 }, _gv: function(t, i) {
            var n = this[Uf];
            if (!n._n7m) return !1;
            var e = n._n7m[Vd](t.id);
            if (!e || !e[YA]) return !1;
            var s = e[YA];
            if ($(s)) {
                var h = !1;
                return l(s, function(t) {
                    return Jo == t[Iu] ? (h = _s(n, i, t[Ou], t[Cl]), !1) : void 0 }, this), h }
            return Jo == s.bindingProperty ? _s(n, i, s.property, s[Cl]) : !1 }, _8s: function(t) {
            var i = t.ui;
            if (i) {
                var n = t[YA];
                n && (Array.isArray(n) ? n[Rc](function(t) { this[HA](i, t) }, this) : this[HA](i, n)), this.addChild(i) } }, validate: function() {
            return this._n5w || (this[UA](), this[Tu] = !0), this[FM]() }, _$a: !0, invalidateChildrenIndex: function() { this._$a = !0 }, doValidate: function() {
            if (this._1f && (this._1f = !1, this[WA]() && (this[VA](), this[Tf] = !0), this._$a && (this._$a = !1, nz ? this._fm = d(this._fm, XH) : this._fm[nT](XH))), zn.call(this) && (this[Xf] = !0), this[Xf]) { lY[zh](this), this[GT][kf](this._fo);
                var t = this[XA] || 0,
                    i = Math.max(this[XA] || 0, this[KA] || 0, this[ZA] || 0),
                    n = Math.max(this.$shadowOffsetY || 0, this.$selectionShadowOffsetY || 0),
                    e = Math.max(2 * t, this.$shadowBlur, this[JA]);
                e += cz.UI_BOUNDS_GROW || 0;
                var s = e - i,
                    h = e + i,
                    r = e - n,
                    a = e + n;
                return 0 > s && (s = 0), 0 > h && (h = 0), 0 > r && (r = 0), 0 > a && (a = 0), this.uiBounds[Of](r, s, a, h), this[RM] && this[RM](), this.$invalidateBounds = !0, !0 } }, validateChildren: function() {
            var t = this.$invalidateChild;
            this[$A] = !1;
            var i = this[QA],
                n = this.bodyChanged;
            i && (i[tC] = this[tC], i[iC] = this[iC], i[nC] = this[nC], i[eC] = this[eC], i.$shadowOffsetX = this.$shadowOffsetX, i[sC] = this[sC]), this.bodyChanged = !1, i && i._1f && (n = i[Wo]() || n, i.$x = 0, i.$y = 0, i[Xf] && lY.call(i), t = !0);
            for (var e = 0, s = this._fm.length; s > e; e++) {
                var h = this._fm[e];
                if (h != i) {
                    var r = h._1f && h[Wo]();
                    (r || n) && h._ho && Un(h, i, this), !t && r && (t = !0) } }
            return t }, measure: function() { this._ja[Ba]();
            for (var t, i, n = 0, e = this._fm[Yh]; e > n; n++) t = this._fm[n], t._ho && (i = t._fo, i.width <= 0 || i.height <= 0 || this._ja[al](t.$x + i.x, t.$y + i.y, i[Da], i[Na])) }, _ju: null, _n5r: function(t) {
            if (!this._ju) {
                if (!t.showOnTop) return;
                return this._ju = new uz, this._ju.add(t) }
            return t.showOnTop ? this._ju.add(t) : this._ju[Kh](t) }, draw: function(t, i, n) {
            for (var e, s = 0, h = this._fm[Yh]; h > s; s++) e = this._fm[s], e._ho && !e[wj] && e._j7(t, i, n, this) }, _9b: function(t, i) {
            if (!this._ho || !this._ju || !this._ju.length) return !1;
            t[Za](), t[Ja](this.$x, this.$y), this.$rotatable && this[Ef] && t.rotate(this[Ef]), (this[MM] || this[OM]) && t[Ja](this[MM], this.offsetY), this[mf] && t.rotate(this[mf]), this[yf] && this._n57 && t.translate(-this[gf].x, -this._n57.y), this[z_] && (t.shadowColor = this[z_], t[$m] = this[$m] * i, t.shadowOffsetX = this.shadowOffsetX * i, t[Gm] = this[Gm] * i), t[Lx]();
            for (var n, e = 0, s = this._fm[Yh]; s > e; e++) n = this._fm[e], n._ho && n.showOnTop && n._j7(t, i, this.selected, this);
            t.restore() }, doHitTest: function(t, i, n) {
            if (n) {
                if (!this._ja[rl](t - n, i - n, 2 * n, 2 * n)) return !1 } else if (!this._ja[Gf](t, i)) return !1;
            return this[hC](t, i, n) }, hitTestChildren: function(t, i, n) {
            for (var e, s = this._fm[Yh] - 1; s >= 0; s--)
                if (e = this._fm[s], e._ho && e[l_](t, i, n)) return e;
            return !1 }, destroy: function() { this._i8ed = !0;
            for (var t, i = this._fm[Yh] - 1; i >= 0; i--) t = this._fm[i], t[Ey]() } }, p(KH, NH), Z(KH[nr], { renderColorBlendMode: { get: function() {
                return this.$renderColorBlendMode }, set: function(t) { this[iC] = t, this._1f = !0, this.body && (this[Sm][Hm] = this[iC]) } }, renderColor: { get: function() {
                return this.$renderColor }, set: function(t) { this[tC] = t, this._1f = !0, this[Sm] && (this.body[qm] = this[tC]) } }, bodyBounds: { get: function() {
                if (this[rC]) { this.$invalidateBounds = !1;
                    var t, i = this.body;
                    t = i && i._ho && !this._$o() ? i._fo[Zh]() : this._fo[Zh](), this[Mo] && Ii(t, this[Mo], t), t.x += this.$x, t.y += this.$y, this._dc = t }
                return this._dc } }, bounds: { get: function() {
                return new gz((this.$x || 0) + this[GT].x, (this.$y || 0) + this[GT].y, this[GT].width, this[GT].height) } }, body: { get: function() {
                return this._n6ody }, set: function(t) { t && this._n6ody != t && (this[QA] = t, this[aC] = !0, this[BA]()) } } }), cz[oC] = 1;
    var ZH = function() { w(this, ZH, arguments) };
    ZH.prototype = { strokeStyle: Bm, lineWidth: 0, fillColor: null, fillGradient: null, _jq: 1, _ji: 1, outline: 0, onDataChanged: function(t) { T(this, ZH, zM, arguments), this._ky && this._7i && this._ky._64(this._7i, this), t && this[Dj](t) }, _n7w: function(t) { this._ky = gn(t), this._ky[Wo](), (this._ky._m7 == $q || this._ky._6c()) && (this._7i || (this._7i = function() { this[yM](), this._jr && this._jr.graph && (this._jr.invalidateSize(), this._jr.graph[Gw]()) }), this._ky[Ao](this._7i, this)) }, _ky: null, initialize: function() { this._n7w(this[Uf]) }, _4q: function() {
            return this._ky && this._ky.draw }, _96: function(t) {
            if (!t || t.width <= 0 || t[Na] <= 0 || !this[fC] || !(this.size instanceof Object)) return this._jq = 1, void(this._ji = 1);
            var i = this[qw][Da],
                e = this[qw].height;
            if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._jq = 1, void(this._ji = 1);
            var s, h, r = t.width,
                a = t[Na];
            i >= 0 && (s = i / r), e >= 0 && (h = e / a), 0 > i ? s = h : 0 > e && (h = s), this._jq = s, this._ji = h }, validateSize: function() {
            if (this.$invalidateScale) { this[cC] = !1;
                var t = this[uC];
                this._jq, this._ji, this._96(t), this[_C](t[Da] * this._jq, t[Na] * this._ji, t.x * this._jq, t.y * this._ji) } }, measure: function() {
            var t = this._ky[Go](this.lineWidth + this[Ex]);
            return t ? (this[cC] = !0, void(this[uC] = t[Zh]())) : void this._ja.set(0, 0, 0, 0) }, onBoundsChanged: function() { this[dC] = !0 }, _1m: function() { this.$invalidateFillGradient = !1, this._fillGradient = this[Sx] ? Uq[nr].generatorGradient[zh](this.$fillGradient, this._7m) : null }, _jw: function(t) {
            var i, n;
            if (_g == this[lC]) i = 1, n = -1;
            else {
                if (dg != this.$adjustType) return;
                i = -1, n = 1 }
            var e = this._ja.cx,
                s = this._ja.cy;
            t[Ja](e, s), t[Qa](i, n), t[Ja](-e, -s) }, draw: function(t, i, n, e) {
            if (this._jq && this._ji) {
                if (this[dC] && this._1m(), t[Za](), this[lC] && this._jw(t), this._ky._m7 == Gq) return t[Qa](this._jq, this._ji), this._ky._m5[Uo](t, i, this, n, e || this), void t[ao]();
                n && this._7k(t, i, e), this._ky[Uo](t, i, this, this._jq, this._ji), t.restore() } }, doHitTest: function(t, i, n) {
            if (this._ky[l_]) {
                if (_g == this[lC]) {
                    var e = this._ja.cy;
                    i = 2 * e - i } else if (dg == this.$adjustType) {
                    var s = this._ja.cx;
                    t = 2 * s - t }
                t /= this._jq, i /= this._ji;
                var h = (this._jq + this._ji) / 2;
                return h > 1 && (n /= h, n = 0 | n), this._ky._m5 instanceof fY ? this._ky._m5[l_](t, i, n, !0, this[vC], this[bC] || this[yC]) : this._ky.hitTest(t, i, n) }
            return !0 }, $invalidateScale: !0, $invalidateFillGradient: !0 }, p(ZH, NH), fs(ZH[nr], { adjustType: {}, fillColor: {}, size: { validateFlags: [WM, gC] }, fillGradient: { validateFlags: [mC] } }), Z(ZH[nr], { originalBounds: { get: function() {
                return this[uC] } } }), cz[xC] = xz[xl];
    var JH = function() { w(this, JH, arguments), this[mj] = cz.LABEL_COLOR };
    JH[nr] = { color: cz[dI], showPointer: !0, fontSize: null, fontFamily: null, fontStyle: null, _hn: null, alignPosition: null, measure: function() { this[io];
            var t = Di(this[Uf], this[EC], this[pC], this[wC], cz.LINE_HEIGHT, this.$font);
            if (this._hn = t, this[fC]) {
                var i = this[fC][Da] || 0,
                    n = this[fC].height || 0;
                return this[_C](i > t.width ? i : t[Da], n > t.height ? n : t.height) }
            return this.setMeasuredBounds(t[Da], t[Na]) }, doHitTest: function(t, i, n) {
            return this.$data ? Sn(t, i, n, this) : !1 }, draw: function(t, i, n, e) {
            if (n && this._7k(t, i, e), this[EC] || cz[to], this[pf] && this[Ef]) {
                var s = cn(this[Ef]);
                s > _z && 3 * _z > s && (t[Ja](this._ja.width / 2, this._ja.height / 2), t[Mo](Math.PI), t.translate(-this._ja[Da] / 2, -this._ja[Na] / 2)) }
            var h = this[Oj] || cz[xC],
                r = h[Xr],
                a = h[Kr],
                o = 0;
            r == pz ? (r = vb, o += this._ja[Da] / 2) : r == wz ? (r = Wr, o += this._ja[Da]) : r = Ho;
            var f = 0;
            a == kz ? f = (this._ja[Na] - this._hn[Na]) / 2 : a == Mz && (f = this._ja[Na] - this._hn[Na]), t[Cm] = this[mj], Ri(t, this[Uf], o, f, r, this[pC], this[EC], this[wC], cz.LINE_HEIGHT, this.$font) }, _4q: function() {
            return null != this[Uf] || this.$size }, $invalidateFont: !0 }, p(JH, NH), fs(JH[nr], { size: { validateFlags: [eg] }, fontStyle: { validateFlags: [eg, TC] }, fontSize: { validateFlags: [eg, TC] }, fontFamily: { validateFlags: [eg, TC] } }), Z(JH[nr], { font: { get: function() {
                return this[kC] && (this[kC] = !1, this.$font = (this[wC] || cz[qd]) + xr + (this.$fontSize || cz.FONT_SIZE) + Ka + (this[pC] || cz[Yd])), this[MC] } } });
    var QH = function(t) { t = t || new fY, this[OC] = new gz, w(this, QH, [t]) };
    QH.prototype = { layoutByPath: !0, layoutByAnchorPoint: !1, measure: function() { this[IC] = !0, this[SC] = !0, this[Uf][Go](this[vC] + this.$outline, this.pathBounds), this[_C](this[OC]) }, validateSize: function() {
            if (this.$invalidateFromArrow || this[SC]) {
                var t = this.pathBounds[Zh]();
                if (this[IC]) { this[IC] = !1;
                    var i = this.validateFromArrow();
                    i && t.add(i) }
                if (this[SC]) { this[SC] = !1;
                    var i = this[jC]();
                    i && t.add(i) }
                this.setMeasuredBounds(t) } }, validateFromArrow: function() {
            if (!this[Uf]._j3 || !this[AC]) return void(this.$fromArrowShape = null);
            var t = this[Uf],
                i = 0,
                n = 0,
                e = this[CC];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._j3)), this[LC] = t[PC](i, n), this[LC].rotate = Math.PI + this.fromArrowLocation.rotate || 0, this.$fromArrowShape = Bs(this[AC], this.$fromArrowSize);
            var s = this[RC].getBounds(this[DC].lineWidth + this.fromArrowStyles.outline);
            return this[NC] instanceof kq[BC] ? this[DC][jx] = Uq.prototype.generatorGradient[zh](this[NC], s) : this.fromArrowStyles && (this[DC][jx] = null), s.offset(this[LC].x, this[LC].y), Si(s, this.fromArrowLocation[Mo], s, this[LC].x, this[LC].y), s }, validateToArrow: function() {
            if (!this[Uf]._j3 || !this[$C]) return void(this.$toArrowShape = null);
            var t = this[Uf],
                i = 0,
                n = 0,
                e = this[FC];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0), 0 > i && i > -1 && (i *= t._j3), i += t._j3, this.toArrowLocation = t[PC](i, n), this[GC] = Bs(this.$toArrow, this[zC]);
            var s = this[GC].getBounds(this[qC][wo] + this[qC][Ex]);
            return this[EA] instanceof kq[BC] ? this[qC][jx] = Uq[nr][YC][zh](this[EA], s) : this[qC] && (this.toArrowStyles._fillGradient = null), s.offset(this[HC].x, this[HC].y), Si(s, this.toArrowLocation[Mo], s, this[HC].x, this[HC].y), s }, _20: function(t) {
            var i = t ? "from" : Pk,
                e = this[i + UC];
            e === n && (e = this[vC]);
            var s = this[i + WC];
            s === n && (s = this.strokeStyle);
            var h = this[i + VC];
            h || (this[i + VC] = h = {}), h.lineWidth = e, h[Dm] = s, h[Kf] = this[i + XC], h[nc] = this[i + KC], h[Ix] = this[i + ZC], h.fillGradient = this[i + JC], h.lineCap = this[i + QC], h[Tx] = this[i + tL], h[Ex] = this[i + iL] || 0, h[Mx] = this[i + nL] }, doValidate: function() {
            return this[AC] && this._20(!0), this[$C] && this._20(!1), T(this, QH, FM) }, drawArrow: function(t, i, n, e) {
            if (this[AC] && this.$fromArrowShape) { t[Za]();
                var s = this[LC],
                    h = s.x,
                    r = s.y,
                    a = s.rotate;
                t[Ja](h, r), a && t[Mo](a), this[RC][Uo](t, i, this.fromArrowStyles, n, e), t.restore() }
            if (this[$C] && this.$toArrowShape) { t[Za]();
                var s = this[HC],
                    h = s.x,
                    r = s.y,
                    a = s[Mo];
                t[Ja](h, r), a && t.rotate(a), this[GC][Uo](t, i, this.toArrowStyles, n, e), t[ao]() } }, outlineStyle: null, outline: 0, onBoundsChanged: function() { this[dC] = !0 }, _1m: function() { this[dC] = !1, this[jx] = this[yC] ? Uq[nr][YC].call(this[yC], this._7m) : null }, draw: function(t, i, n, e) { this[dC] && this._1m(), this[Uf][Uo](t, i, this, n, e), this[eL](t, i, n, e) }, doHitTest: function(t, i, n) {
            if (this.$data[l_](t, i, n, !0, this.$lineWidth + this.$outline, this[bC] || this.$fillGradient)) return !0;
            if (this[$C] && this[GC]) {
                var e = t - this[HC].x,
                    s = i - this[HC].y;
                if (this[HC][Mo]) {
                    var h = ki(e, s, -this[HC].rotate);
                    e = h.x, s = h.y }
                var r = this[qC][Ix] || this[qC][Sx];
                if (this[GC][l_](e, s, n, !0, this.toArrowStyles[wo], r)) return !0 }
            if (this[AC] && this[RC]) {
                var e = t - this.fromArrowLocation.x,
                    s = i - this[LC].y;
                if (this[LC][Mo]) {
                    var h = ki(e, s, -this[LC].rotate);
                    e = h.x, s = h.y }
                var r = this[DC][Ix] || this[DC][Sx];
                if (this[RC][l_](e, s, n, !0, this[DC][wo], r)) return !0 }
            return !1 }, $fromArrowOutline: 0, $toArrowOutline: 0, $invalidateFillGradient: !0, $invalidateFromArrow: !0, $invalidateToArrow: !0 }, p(QH, NH), fs(QH[nr], { strokeStyle: { validateFlags: [sL, hL] }, fillColor: {}, fillGradient: { validateFlags: [mC] }, fromArrowOffset: { validateFlags: [sL, WM] }, fromArrowSize: { validateFlags: [sL, WM] }, fromArrow: { validateFlags: [sL, WM] }, fromArrowOutline: { validateFlags: [sL, WM] }, fromArrowStroke: { validateFlags: [sL, WM] }, fromArrowStrokeStyle: { validateFlags: [sL] }, toArrowOffset: { validateFlags: [hL, WM] }, toArrowSize: { validateFlags: [hL, WM] }, toArrow: { validateFlags: [hL, WM] }, toArrowOutline: { validateFlags: [hL, WM] }, toArrowStroke: { validateFlags: [hL, WM] }, toArrowStrokeStyle: { validateFlags: [hL] }, outline: { value: 0, validateFlags: [eg] } }), Z(QH.prototype, { length: { get: function() {
                return this.data[Yh] } } }), ds.prototype = { shape: null, path: null, initialize: function() { T(this, ds, UA), this[Wk] = new fY, this.path._dx = !1, this[qj] = new QH(this[Wk]), this[rL](this.shape, 0), this._n6ody = this[qj], UH[qA](this) }, _1q: !0, _5c: null, _$o: function() {
            return !1 }, _3t: function() {
            return !1 }, validatePoints: function() { this[qj][yM]();
            var t = this.$data,
                i = this[Wk];
            i[Ba]();
            var n = t[$c],
                e = t[Nc];
            n && e && Ys(this, t, i, n, e) }, drawLoopedEdge: function(t, i, n, e) { Vs(this, e, t) }, drawEdge: function(t, i, n, e, s, h) {
            var r = s.center,
                a = h[vb];
            if (e == Mq.EDGE_TYPE_ZIGZAG) {
                var o = (r.x + a.x) / 2,
                    f = (r.y + a.y) / 2,
                    c = r.x - a.x,
                    u = r.y - a.y,
                    _ = Math[_o](c * c + u * u),
                    d = Math.atan2(u, c);
                d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
                var l = Math.cos(d) * _,
                    v = Math.sin(d) * _;
                return t[Jc](o - v, f + l), void t[Jc](o + v, f - l) }
            var b = Ws(this, this[Jo], s, h, i, n, r, a);
            b && (t._fd = b) }, _1y: function() {
            if (!this.$data[$T]()) return null;
            var t = this[r_]._7x._8j(this[Uf]);
            if (!t || !t[aL](this.graph) || !t._fg) return null;
            var i = t[oL](this);
            return t[fL](this[Uf]) || (i = -i), i }, checkBundleLabel: function() {
            var t = this[cL]();
            return t ? (this[IA] || this[uL](), this.bundleLabel._ho = !0, void(this[IA][Jo] = t)) : void(this[IA] && (this[IA]._ho = !1, this[IA][Jo] = null)) }, createBundleLabel: function() {
            var t = new JH;
            t[_L] = !1, this[IA] = t, this[rL](this[IA]), WH[qA](this) }, getBundleLabel: function() {
            return this.graph[cL](this[Jo]) }, doValidate: function() {
            return this._1q && (this._1q = !1, this[dL]()), this.checkBundleLabel(), T(this, ds, FM) }, _3u: function() { this._1q = !0, this.invalidateSize() }, _$v: function(t, i, n) {
            var e = this[FA][GA](this, t, i, n);
            return e = FH[GA](this, t, i, n) || e, this[IA] && this.bundleLabel[Uf] && (e = WH[GA](this, t, i, n) || e), UH.onBindingPropertyChange(this, t, i, n) || e } }, p(ds, KH), ds[lL] = function(t, i, n, e) {
        if (t[Kc](i.x, i.y), !e || e == Mq[vL]) return void t[Jc](n.x, n.y);
        if (e == Mq.EDGE_TYPE_VERTICAL_HORIZONTAL) t[Jc](i.x, n.y);
        else if (e == Mq.EDGE_TYPE_HORIZONTAL_VERTICAL) t.lineTo(n.x, i.y);
        else if (0 == e[Qh](Mq[Ju])) {
            var s;
            s = e == Mq.EDGE_TYPE_ORTHOGONAL_HORIZONTAL ? !0 : e == Mq[Qu] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
            var h = (i.x + n.x) / 2,
                r = (i.y + n.y) / 2;
            s ? (t[Jc](h, i.y), t.lineTo(h, n.y)) : (t.lineTo(i.x, r), t.lineTo(n.x, r)) } else if (0 == e[Qh](Mq.EDGE_TYPE_ELBOW)) {
            var s, a = tU[$H[Lu]] || 0;
            s = e == Mq.EDGE_TYPE_ELBOW_HORIZONTAL ? !0 : e == Mq.EDGE_TYPE_ELBOW_VERTICAL ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y), s ? (t[Jc](i.x + a, i.y), t.lineTo(n.x - a, n.y)) : (t[Jc](i.x, i.y + a), t[Jc](n.x, n.y - a)) } else if (0 == e[Qh](bL)) {
            var a = tU[$H[Lu]] || 0;
            if (e == Mq.EDGE_TYPE_EXTEND_TOP) {
                var o = Math.min(i.y, n.y) - a;
                t[Jc](i.x, o), t[Jc](n.x, o) } else if (e == Mq.EDGE_TYPE_EXTEND_BOTTOM) {
                var o = Math.max(i.y, n.y) + a;
                t[Jc](i.x, o), t[Jc](n.x, o) } else if (e == Mq[$u]) {
                var f = Math.min(i.x, n.x) - a;
                t[Jc](f, i.y), t[Jc](f, n.y) } else if (e == Mq[yL]) {
                var f = Math.max(i.x, n.x) + a;
                t[Jc](f, i.y), t[Jc](f, n.y) } } else if (e == Mq.EDGE_TYPE_ZIGZAG) {
            var h = (i.x + n.x) / 2,
                r = (i.y + n.y) / 2,
                c = i.x - n.x,
                u = i.y - n.y,
                _ = Math[_o](c * c + u * u),
                d = Math.atan2(u, c);
            d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
            var l = Math.cos(d) * _,
                v = Math.sin(d) * _;
            t[Jc](h - v, r + l), t[Jc](h + v, r - l) }
        t[Jc](n.x, n.y) }, Z(ds.prototype, { length: { get: function() {
                return this[Wk] ? this[Wk][Yh] : 0 } } }), ds[nr].addPoint = function(t, i, n) {
        var e = pn(this[Wk], t, i, n);
        if (e && e[Yh] > 2) {
            var s = this[Jo],
                h = e[e.length - 1];
            s[gL] = h[Ko] == nY ? e[Wh](1, e[Yh] - 2) : e[Wh](1, e.length - 1) } }, ls[nr] = { _2r: null, image: null, initialize: function() { T(this, ls, UA), this[mL](), YH[qA](this) }, _n7w: function() { this.data[Vm] ? this[Vm] && (this[Sm] = this[Vm]) : this[Ep] && (this.body = this.label) }, _n5s: function() { this.image = new ZH, this.addChild(this[Vm], 0), this[Dj]() }, doValidate: function() { this[Sm] && (this instanceof nh && !this.$data[lM] && this._4y() ? this.body.$layoutByAnchorPoint = !1 : (this[Sm][yf] = null != this._2r, this[Sm].anchorPosition = this._2r));
            var t = this.$data[Bk],
                i = 0,
                n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this.$invalidateBounds = !0), this.$x = i, this.$y = n, KH[nr][FM].call(this) || e }, _$v: function(t, i, n) {
            var e = this._n6w.onBindingPropertyChange(this, t, i, n);
            return e = FH.onBindingPropertyChange(this, t, i, n) || e, YH[GA](this, t, i, n) || e } }, p(ls, KH);
    var tU = {};
    tU[$H[_m]] = cz.SELECTION_COLOR, tU[$H[cm]] = cz[cm], tU[$H[um]] = cz[um], tU[$H[om]] = Mq[fm], tU[$H.SELECTION_SHADOW_OFFSET_X] = 2, tU[$H[QM]] = 2, tU[$H[dI]] = cz[dI], tU[$H.LABEL_POSITION] = xz[El], tU[$H[_I]] = xz[ml], tU[$H.LABEL_PADDING] = new mz(0, 2), tU[$H[Sj]] = 8, tU[$H[kI]] = 8, tU[$H[wI]] = !0, tU[$H.LABEL_BORDER] = 0, tU[$H[DI]] = Bm, tU[$H[$I]] = !0, tU[$H[Ej]] = null, tU[$H.LABEL_BACKGROUND_GRADIENT] = null, tU[$H.EDGE_COLOR] = xL, tU[$H.EDGE_WIDTH] = 1.5, tU[$H[BS]] = !0, tU[$H[FS]] = !0, tU[$H[ZI]] = X(3438210798), tU[$H[QI]] = 1, tU[$H.GROUP_STROKE_STYLE] = Bm, tU[$H[Xk]] = !0, tU[$H[DA]] = cz[i_], tU[$H[hj]] = cz.ARROW_SIZE, tU[$H[y_]] = 10, tU[$H[DS]] = 8, tU[$H[Wu]] = Mq[Xu], tU[$H.EDGE_SPLIT_BY_PERCENT] = !0, tU[$H.EDGE_EXTEND] = 20, tU[$H.EDGE_SPLIT_PERCENT] = .5, tU[$H[Ru]] = 20, tU[$H[IS]] = 20, tU[$H.EDGE_BUNDLE_LABEL_ANCHOR_POSITION] = xz.CENTER_BOTTOM, tU[$H[hS]] = xz[ml], tU[$H[OA]] = EL, tU[$H[uO]] = 1, tU[$H.SHAPE_STROKE_STYLE] = pL, tU[$H[nO]] = cz[tf], tU[$H.ALPHA] = 1, cz.LOOKING_EDGE_ENDPOINT_TOLERANCE = 2;
    var iU = function(i, n) { this._$t = new Dz, this._$t.on(function(t) { nM == t[Ed] && this.invalidateVisibility() }, this), this._1h = new Dz, this._1h[Sv](function(t) {!this[nM] || t[Ed] != $z[sv] && t.kind != $z[ev] || this[X_][d_](this[nM]) || (this.currentSubNetwork = null) }, this), this._5 = new Dz, this._$z = new Dz, this._$l = new Dz, this._$m = new Dz, this[X_] = n || new hs, this._7x = new pH(this, i), this._2h = new Ch(this), this._19 = new Dz, this[wL] = Vz(t, TL, function() { this.updateViewport() }, !1, this), this._7x[vT][kL] = function(t) { this[kL](t) }[br](this), this._7x[vT][ML] = function(t) { this[ML](t) }[br](this) };
    iU[nr] = { originAtCenter: !0, editable: !1, ondragover: function(t) { kq[OL](t) }, getDropInfo: function(t, i) {
            var n = null;
            if (i) try { n = JSON[Ma](i) } catch (e) {}
            return n }, ondrop: function(t) {
            var i = t[IL];
            if (i) {
                var n = i.getData(fd),
                    e = this[SL](t, n);
                e || (e = {}, e.image = i[jL](Vm), e[Ko] = i[jL](Ko), e.label = i[jL](Ep), e.groupImage = i[jL](lM));
                var s = this[AL](t);
                if (s = this[wT](s.x, s.y), !(this[CL] instanceof Function && this[CL][zh](this, t, s, e) === !1) && (e[Vm] || e.label || e[Ko])) {
                    var h = e.image,
                        r = e.type,
                        a = e.label,
                        o = e.groupImage;
                    kq.stopEvent(t);
                    var f;
                    if (r && LL != r ? PL == r ? f = this[RL](a, s.x, s.y) : Qk == r ? f = this[DL](a, s.x, s.y) : vM == r ? (f = this.createGroup(a, s.x, s.y), o && (o = th(o), o && (f.groupImage = o))) : (r = J(r), r instanceof Function && r[nr] instanceof LH && (f = new r, f.name = a, f[$k] = new lz(s.x, s.y), this[NL].add(f))) : f = this.createNode(a, s.x, s.y), f) {
                        if (h && (h = th(h), h && (f[Vm] = h)), t[Rp]) {
                            var c = this[cy](t);
                            c && this[BL](c) && (f.parent = c) }
                        if (e[$L])
                            for (var u in e[$L]) f[u] = e[$L][u];
                        if (e.clientProperties)
                            for (var u in e.clientProperties) f.set(u, e[FL][u]);
                        if (e[GL] && f[wk](e[GL]), this[zL](f, t, e) === !1) return !1;
                        var _ = new Ah(this, Ah[qL], t, f);
                        return this[YL](_), f } } } }, _n6h: function(t) {
            return t[E_] || t instanceof DH || t[HL] }, enableDoubleClickToOverview: !0, _7x: null, _$t: null, _1h: null, _5: null, _$m: null, _$z: null, _$l: null, _1o: function(t) {
            return this._$t[cr](t) }, _3w: function(t) { this._$t[ur](t), Yw == t.kind && this.checkLimitedBounds() }, isVisible: function(t) {
            return this._7x._ei(t) }, isMovable: function(t) {
            return (t instanceof LH || t instanceof CH && t[u_]()) && t[UL] !== !1 }, isSelectable: function(t) {
            return t.selectable !== !1 }, isEditable: function(t) {
            return t[_L] !== !1 }, isRotatable: function(t) {
            return t[Cj] !== !1 }, isResizable: function(t) {
            return t[WL] !== !1 }, canLinkFrom: function(t) {
            return t[VL] !== !1 && t.canLinkFrom !== !1 }, canLinkTo: function(t) {
            return t[VL] !== !1 && t[XL] !== !1 }, createNode: function(t, i, n) {
            var e = new LH(t, i, n);
            return this[NL].add(e), e }, createText: function(t, i, n) {
            var e = new as(t, i, n);
            return this[NL].add(e), e }, createShapeNode: function(t, i, n, e) { D(i) && (e = n, n = i, i = null);
            var s = new PH(t, i);
            return s[Bk] = new lz(n, e), this[NL].add(s), s }, createGroup: function(t, i, n) {
            var e = new DH(t, i, n);
            return this[NL].add(e), e }, createEdge: function(t, i, n) {
            if (t instanceof LH) {
                var e = n;
                n = i, i = t, t = e }
            var s = new CH(i, n);
            return t && (s.$name = t), this._klModel.add(s), s }, addElement: function(t, i) { this._klModel.add(t), i && t[qh]() && t.forEachChild(function(t) { this[KL](t, i) }, this) }, removeElement: function(t) { this[NL].remove(t) }, clear: function() { this._klModel.clear() }, getStyle: function(t, i) {
            var e = t._j8[i];
            return e !== n ? e : this[ZL](i) }, getDefaultStyle: function(t) {
            if (this._j8) {
                var i = this._j8[t];
                if (i !== n) return i }
            return tU[t] }, _2b: function(t, i) {
            if (!this[JL] || this.limitedBounds[d_](this[QL])) return i && i(), !1;
            t = this._1w(), this[tP]();
            var n, e, s, h = this[QL],
                r = this[JL],
                a = h[Da] / this.limitedBounds[Da],
                o = h.height / this[JL][Na];
            if (1 >= a && 1 >= o) return n = r[Ho] > h[Ho] ? r.left : r.right < h[Wr] ? h[Ho] - (h[Wr] - r[Wr]) : h.left, e = r.top > h.top ? r.top : r.bottom < h[Ur] ? h.top - (h[Ur] - r[Ur]) : h.top, void this[TT](-n * this[Qa], -e * this[Qa], this.scale, !1, i);
            var f = a > o;
            s = Math.max(a, o), f ? (n = r.x, e = r.y + (h.top - r.top) * (1 - s) / s, e >= r.y ? e = r.y : e < r.bottom - h[Na] / s && (e = r[Ur] - h[Na] / s)) : (e = r.y, n = r.x + (h[Ho] - r[Ho]) * (1 - s) / s, n >= r.x ? n = r.x : n < r.right - h[Da] / s && (n = r[Wr] - h.width / s)), s *= this[Qa], n *= s, e *= s, this.translateTo(-n, -e, s, t, i) }, checkLimitedBounds: function(t) {
            return this[iP] || !this[JL] || this.limitedBounds[d_](this.viewportBounds) ? !1 : (this._n7heckingBounds = !0, void this[nP](function() { this._2b(t, function() { this._n7heckingBounds = !1 }.bind(this)) }, this)) }, zoomByMouseEvent: function(t, i, n, e) {
            var s = this[AL](t);
            return D(i) ? this[eP](Math.pow(this[sP], i), s.x, s.y, n, e) : i ? this.zoomIn(s.x, s.y, n, e) : this[hP](s.x, s.y, n, e) }, resetScale: 1, translate: function(t, i, n) {
            return this[TT](this.tx + t, this.ty + i, this[Qa], n) }, translateTo: function(t, i, n, e, s) {
            if (n && (n = Math.min(this[Wm], Math.max(this[rP], n))), e) {
                var h = this._5h();
                return void h._kw(t, i, n, e, s) }
            var r = this._7x[aP](t, i, n);
            return s && s(), r }, centerTo: function(t, i, e, s, h) {
            return (!e || 0 >= e) && (e = this[Qa]), s === n && (s = this._1w()), this[TT](this.width / 2 - t * e, this[Na] / 2 - i * e, e, s, h) }, moveToCenter: function(t, i) {
            if (arguments[2] === !1 || !this._7x[oP]()) {
                var n = this[yo];
                return void this[fP](n.cx, n.cy, t, i) }
            return this._7x[Tu] || (i = !1), this[nP](this.moveToCenter[br](this, t, i, !1)) }, zoomToOverview: function(t, i) {
            if (arguments[2] === !1 || !this._7x[oP]()) {
                var n = this._7x._1p();
                return void(n && (i && (n[Qa] = Math.min(n.scale, i)), this.centerTo(n.cx, n.cy, n.scale, t))) }
            return this._7x[Tu] || (t = !1), this.callLater(this[cP].bind(this, t, i, !1)) }, _1w: function() {
            return this._7x[Tu] ? this[uP] === n || null === this[uP] ? cz[_P] : this.zoomAnimation : !1 }, zoomAt: function(t, i, e, s, h) { s === n && (s = this._1w()), i === n && (i = this[Da] / 2), i = i || 0, e === n && (e = this[Na] / 2), e = e || 0;
            var r = this[Qa];
            return t = Math.min(this[Wm], Math.max(this.minScale, r * t)), i = t * (this.tx - i) / r + i, e = t * (this.ty - e) / r + e, this[TT](i, e, t, s, h) }, zoomOut: function(t, i, n, e) {
            return this[eP](1 / this.scaleStep, t, i, n, e) }, zoomIn: function(t, i, n, e) {
            return this.zoomAt(this[sP], t, i, n, e) }, _5h: function() {
            return this[dP] || (this[dP] = new aU(this)), this[dP] }, onAnimationStart: function() {}, onAnimationEnd: function() {}, isAnimating: function() {
            return this[dP] && this._panAnimation._ds() }, enableInertia: !0, _92: function(t, i) {
            var n = this._5h();
            return n._h5(t || 0, i || 0) }, stopAnimation: function() { this[dP] && this[dP]._m2() }, getUI: function(t) {
            return Q(t) ? this._7x._3c(t) : this._7x._lg(t) }, getUIByMouseEvent: function(t) {
            return this._7x._3c(t) }, hitTest: function(t) {
            return this._7x.hitTest(t) }, globalToLocal: function(t) {
            return this._7x._7w(t) }, toCanvas: function(t, i) {
            return this._7x._fn(t, i) }, toLogical: function(t, i) {
            return Q(t) ? this._7x._$e(t) : this._7x._f8(t, i) }, getElementByMouseEvent: function(t) {
            var i = this._7x._3c(t);
            return i ? i.$data : void 0 }, getElement: function(t) {
            if (Q(t)) {
                var i = this._7x._3c(t);
                return i ? i[Uf] : null }
            return this[NL][Vd](t) }, invalidate: function() { this._7x[zw]() }, invalidateUI: function(t) { t.invalidate(), this.invalidate() }, invalidateElement: function(t) { this._7x._30(t) }, getUIBounds: function(t) {
            return this._7x._2z(t) }, forEachVisibleUI: function(t, i) {
            return this._7x._46(t, i) }, forEachReverseVisibleUI: function(t, i) {
            return this._7x._$u(t, i) }, forEachUI: function(t, i) {
            return this._7x._el(t, i) }, forEachReverseUI: function(t, i) {
            return this._7x._45(t, i) }, forEach: function(t, i) {
            return this[NL][Rc](t, i) }, getElementByName: function(t) {
            var i;
            return this[Rc](function(n) {
                return n[_r] == t ? (i = n, !1) : void 0 }), i }, focus: function(i) {
            if (i) {
                var n = t.scrollX || t[da],
                    e = t.scrollY || t[la];
                return this[lP][vP](), void t[dd](n, e) }
            this[lP][vP]() }, callLater: function(t, i, n) { this._7x._ek(t, i, n) }, exportImage: function(t, i) {
            return ch(this, t, i) }, setSelection: function(t) {
            return this._klModel[gv].set(t) }, select: function(t) {
            return this[NL][gv][ud](t) }, unselect: function(t) {
            return this[NL][gv][bP](t) }, reverseSelect: function(t) {
            return this._klModel._selectionModel.reverseSelect(t) }, selectAll: function() { fh(this) }, unSelectAll: function() { this[V_][Ba]() }, unselectAll: function() { this.unSelectAll() }, isSelected: function(t) {
            return this._klModel[gv].contains(t) }, sendToTop: function(t) { Me(this[NL], t) }, sendToBottom: function(t) { Oe(this[NL], t) }, moveElements: function(t, i, n) {
            var e = [],
                s = new uz;
            return l(t, function(t) { t instanceof LH ? e[Jh](t) : t instanceof CH && s.add(t) }), this._dl(e, i, n, s) }, _dl: function(t, i, n, e) {
            if (0 == i && 0 == n || 0 == t[Yh] && 0 == e[Yh]) return !1;
            if (0 != t[Yh]) {
                var s = this._4k(t);
                e = this._4i(s, e), l(s, function(t) {
                    var e = t.$location;
                    e ? t.setLocation(e.x + i, e.y + n) : t[yP](i, n) }) }
            return e && e[Yh] && this._dm(e, i, n), !0 }, _dm: function(t, i, n) { t.forEach(function(t) { t[By](i, n) }) }, _4i: function(t, i) {
            return this.graphModel.forEach(function(n) { n instanceof CH && this[gP](n) && t[d_](n[$c]) && t.contains(n[Nc]) && i.add(n) }, this), i }, _4k: function(t) {
            var i = new uz;
            return l(t, function(t) {!this.isMovable(t), i.add(t), Te(t, i, this[mP]) }, this), i }, reverseExpanded: function(t) {
            if (!t[$T]()) return !1;
            var i = t[FT](!0);
            return i ? i[xP]() !== !1 ? (this[Gw](), !0) : void 0 : !1 }, _2h: null, _19: null, beforeInteractionEvent: function(t) {
            return this._19[cr](t) }, onInteractionEvent: function(t) { this._19[ur](t) }, addCustomInteraction: function(t) { this._2h[EP](t) }, removeCustomInteraction: function(t) { this._2h[pP](t) }, enableWheelZoom: !0, enableTooltip: !0, getTooltip: function(t) {
            return t[pk] || t[_r] }, updateViewport: function() { this._7x._6n() }, destroy: function() { this._3w(new jz(this, Ey, !0, this[HT])), this[HT] = !0, Xz(t, TL, this[wL]), this._2h[Ey](), this[X_] = new hs;
            var i = this[wP];
            this._7x._i8(), i && (i.innerHTML = "") }, onPropertyChange: function(t, i, n) { this._$t.addListener(function(e) { e.kind == t && i.call(n, e) }) }, removeSelection: function() {
            var t = this.selectionModel._jk;
            return t && 0 != t.length ? (t = t[Uh](), this._klModel.remove(t), t) : !1 }, removeSelectionByInteraction: function(t) {
            var i = this[V_][pd];
            return i && 0 != i[Yh] ? void kq[TP](kP + i[Yh], function() {
                var i = this.removeSelection();
                if (i) {
                    var n = new Ah(this, Ah[MP], t, i);
                    this[YL](n) } }, this) : !1 }, createShapeByInteraction: function(t, i, n, e) {
            var s = new fY(i);
            i[Yh] > 2 && s[vf]();
            var h = this[DL](OP, s, n, e);
            this[zL](h, t);
            var r = new Ah(this, Ah[qL], t, h);
            return this.onInteractionEvent(r), h }, createLineByInteraction: function(t, i, n, e) {
            var s = new fY(i),
                h = this.createShapeNode(IP, s, n, e);
            h[bk](kq[SP].SHAPE_FILL_COLOR, null), h[bk](kq[SP][gO], null), h[bk](kq[SP][TO], !0), this.onElementCreated(h, t);
            var r = new Ah(this, Ah.ELEMENT_CREATED, t, h);
            return this[YL](r), h }, createEdgeByInteraction: function(t, i, n, e) {
            var s = this[jP](AP, t, i);
            if (e) s._9d = e;
            else {
                var h = this.edgeUIClass,
                    r = this.edgeType;
                this[CP] && (h = this[CP][tk] || h, r = this[CP][v_] || r), h && (s[tk] = h), r && (s.edgeType = r) }
            this[zL](s, n);
            var a = new Ah(this, Ah[qL], n, s);
            return this[YL](a), s }, onElementCreated: function(t) {!t.parent && this.currentSubNetwork && (t[Dc] = this[nM]) }, allowEmptyLabel: !1, startLabelEdit: function(t, i, n, e) {
            var s = this;
            n.startEdit(e.x, e.y, i[Jo], this[Cu](t, $H[vI]), function(n) {
                return s.onLabelEdit(t, i, n, i.parent) }) }, onLabelEdit: function(t, i, n, e) {
            return n || this[LP] ? void(Ep == i[_r] ? t.name = n : e._gv(i, n) === !1 && (i.data = n, this.invalidateElement(t))) : (kq[cg](PP), !1) }, setInteractionMode: function(t, i) { this.interactionMode = t, this[CP] = i }, upSubNetwork: function() {
            return this._3k ? this.currentSubNetwork = ih(this._3k) : !1 }, _$q: !1, invalidateVisibility: function() { this._$q = !0, this[Gw]() }, getBundleLabel: function(t) {
            var i = t.getEdgeBundle(!0);
            return i && i.agentEdge == t ? RP + i[DP][Yh] : null }, zoomAnimation: null, pauseRendering: function(t, i) {
            (this.delayedRendering || i) && this._7x._6p(t) }, _3x: n, enableRectangleSelectionByRightButton: !0 }, Z(iU[nr], {
        center: { get: function() {
                return this[wT](this[wP].clientWidth / 2, this[wP][md] / 2) } },
        visibleFilter: { get: function() {
                return this._hoFilter }, set: function(t) { this[NT] = t, this[yk]() } },
        topCanvas: { get: function() {
                return this._7x[RT] } },
        propertyChangeDispatcher: { get: function() {
                return this._$t } },
        listChangeDispatcher: { get: function() {
                return this._1h } },
        dataPropertyChangeDispatcher: { get: function() {
                return this._5 } },
        selectionChangeDispatcher: { get: function() {
                return this._$m } },
        parentChangeDispatcher: { get: function() {
                return this._$z } },
        childIndexChangeDispatcher: { get: function() {
                return this._$l } },
        interactionDispatcher: { get: function() {
                return this._19 } },
        cursor: { set: function(t) { this[lP][ea][NP] = t || this._2h.defaultCursor }, get: function() {
                return this[lP][ea].cursor } },
        interactionMode: { get: function() {
                return this._2h[BP] }, set: function(t) {
                var i = this.interactionMode;
                i != t && (this._2h[$P] = t, this._3w(new jz(this, FP, t, i))) } },
        scaleStep: { get: function() {
                return this._7x._er }, set: function(t) { this._7x._er = t } },
        maxScale: { get: function() {
                return this._7x._fs }, set: function(t) { this._7x._fs = t } },
        minScale: { get: function() {
                return this._7x._g0 }, set: function(t) { this._7x._g0 = t } },
        scale: { get: function() {
                return this._7x[xb] }, set: function(t) {
                return this._7x[xb] = t } },
        tx: {
            get: function() {
                return this._7x._tx
            }
        },
        ty: { get: function() {
                return this._7x._ty } },
        styles: { get: function() {
                return this._j8 }, set: function(t) { this._j8 = t } },
        selectionModel: { get: function() {
                return this[NL][gv] } },
        graphModel: { get: function() {
                return this[NL] }, set: function(t) {
                if (this[NL] == t) return !1;
                var i = this._klModel,
                    n = new jz(this, X_, i, t);
                return this._1o(n) === !1 ? !1 : (null != i && (i[GP][Xl](this._$t, this), i[bv].removeListener(this._1h, this), i[mv].removeListener(this._5, this), i.parentChangeDispatcher[Xl](this._$z, this), i[wv][Xl](this._$l, this), i[yv][Xl](this._$m, this)), this._klModel = t, this._klModel && (this._klModel[GP].addListener(this._$t, this), this[NL][bv].addListener(this._1h, this), this._klModel.dataChangeDispatcher[Sv](this._5, this), this[NL][pv].addListener(this._$z, this), this[NL][wv][Sv](this._$l, this), this._klModel[yv].addListener(this._$m, this)), this._7x && this._7x._le(), void this._3w(n)) } },
        count: { get: function() {
                return this[NL][Yh] } },
        width: { get: function() {
                return this[wP].clientWidth } },
        height: { get: function() {
                return this[wP].clientHeight } },
        viewportBounds: { get: function() {
                return this._7x[zP] } },
        bounds: { get: function() {
                return this._7x._4e() } },
        canvasPanel: { get: function() {
                return this._7x._n6o } },
        html: { get: function() {
                return this._7x[vT].parentNode } },
        navigationType: { get: function() {
                return this._7x._6k }, set: function(t) { this._7x._32(t) } },
        _3k: { get: function() {
                return this[NL]._3k } },
        currentSubNetwork: { get: function() {
                return this._klModel[nM] }, set: function(t) { this[NL][nM] = t } },
        limitedBounds: { get: function() {
                return this[qP] }, set: function(t) {
                return gz.equals(t, this[qP]) ? !1 : t ? void(this._limitedBounds = new gz(t)) : void(this[qP] = null) } },
        ratio: { get: function() {
                return this._7x[Va] } },
        delayedRendering: { get: function() {
                return this._3x === n ? cz[YP] : this._3x }, set: function(t) { t != this[HP] && (this._3x = t, this.pauseRendering(!1, !0)) } },
        fullRefresh: { get: function() {
                return this._7x.fullRefresh }, set: function(t) { this._7x[UP] = t } }
    }), cz[YP] = !0, cz[WP] = 60, cz.GROUP_MIN_HEIGHT = 60, nh[nr] = { initialize: function() { T(this, nh, UA), this[Gj]() }, _n60: function() { this._mh = new fY, this[qj] = new ZH(this._mh), this[qj].layoutByPath = !1, this[rL](this[qj], 0), this[Sm] = this[qj] }, checkBody: function() {
            return this._4y() ? (this._21 = !0, this[qj] ? (this.shape[dT] = !0, this.body = this.shape) : (this[VP](), HH[qA](this)), void(this[Vm] && (this.image[dT] = !1))) : (this[Vm] ? (this[Vm][dT] = !0, this[Sm] = this[Vm]) : this._n5s(), void(this[qj] && (this[qj].visible = !1))) }, _4y: function() {
            return this.$data._ia() && this.$data.expanded }, _mh: null, _21: !0, _51: function() { this._1f = !0, this._21 = !0 }, doValidate: function() {
            if (this._21 && this._4y()) {
                if (this._21 = !1, this.shape.invalidateData(), this[Uf][lM]) { this.shape[Jo] = this[Uf].groupImage;
                    var t = this._1z();
                    return this.shape.offsetX = t.x + t[Da] / 2, this[qj].offsetY = t.y + t.height / 2, this[qj].size = { width: t.width, height: t.height }, ls.prototype[FM].call(this) }
                this.shape[MM] = 0, this[qj].offsetY = 0;
                var i = this._8g(this.$data.groupType);
                this._mh[Ba](), i instanceof gz ? Ne(this._mh, i.x, i.y, i[Da], i.height, i.rx, i.ry) : i instanceof Qi ? Be(this._mh, i) : i instanceof tn && $e(this._mh, i), this._mh._5x = !0, this.shape[yM]() }
            return ls[nr].doValidate[zh](this) }, _7e: function(t, i, n, e, s) {
            switch (Er != typeof e && (e = -i / 2), Er != typeof s && (s = -n / 2), t) {
                case Mq[XP]:
                    var h = Math.max(i, n) / 2;
                    return new Qi(e + i / 2, s + n / 2, h);
                case Mq[KP]:
                    return new tn(e + i / 2, s + n / 2, i, n);
                default:
                    return new gz(e, s, i, n) } }, _1z: function() {
            return this._8g(null) }, _8g: function(t) {
            var i, e, s = this[Jo],
                h = s.padding,
                r = s[_M],
                a = cz[WP],
                o = cz[ZP];
            if (r && (Er == typeof r[Da] && (a = r[Da]), Er == typeof r.height && (o = r.height), i = r.x, e = r.y), !s.hasChildren()) return this._7e(t, a, o, i, e);
            var f, c = this.$data._fm._jk;
            (t == Mq[XP] || t == Mq.GROUP_TYPE_ELLIPSE) && (f = []);
            for (var u, _, d, l, v = new gz, b = 0, y = c.length; y > b; b++) {
                var g = c[b];
                if (this[r_].isVisible(g)) {
                    var m = this[r_][a_](g);
                    m && (u = m.$x + m._fo.x, _ = m.$y + m._fo.y, d = m._fo[Da], l = m._fo.height, v[al](u, _, d, l), f && (f[Jh]({ x: u, y: _ }), f[Jh]({ x: u + d, y: _ }), f[Jh]({ x: u + d, y: _ + l }), f[Jh]({ x: u, y: _ + l }))) } }
            if (v.isEmpty()) return this._7e(t, a, o, i, e);
            var x = this[Uf][Bk];
            x ? x[rM] && (x[rM] = !1, i === n && (x.x = v.cx), e === n && (x.y = v.cy)) : x = this.$data.$location = { x: v.cx, y: v.cy }, h && v[Of](h), Er == typeof i && i + x.x < v.x && (v[Da] += v.x - (i + x.x), v.x = i + x.x, f && f[Jh]({ x: v.x, y: v.cy })), Er == typeof e && e + x.y < v.y && (v[Na] += v.y - (v.y, e + x.y), v.y = e + x.y, f && f[Jh]({ x: v.cx, y: v.y }));
            var E, i = x.x,
                e = x.y;
            if (t == Mq.GROUP_TYPE_CIRCLE) { E = nn(f), E.cx -= i, E.cy -= e;
                var p = Math.max(a, o) / 2;
                return E.r < p && (E.cx += p - E.r, E.cy += p - E.r, E.r = p), E }
            return t == Mq[KP] ? (E = en(f, v), E.cx -= i, E.cy -= e, E.width < a && (E.cx += (a - E[Da]) / 2, E[Da] = a), E.height < o && (E.cy += (o - E[Na]) / 2, E[Na] = o), E) : (E = v, v[Da] < a && (v[Da] = a), v[Na] < o && (v[Na] = o), v.offset(-i, -e), E) }, _$v: function(t, i, n) {
            if (!this._4y()) return T(this, nh, JP, arguments);
            var e = this[FA][GA](this, t, i, n);
            return e = FH.onBindingPropertyChange(this, t, i, n) || e, e = YH[GA](this, t, i, n) || e, HH[GA](this, t, i, n) || e } }, p(nh, ls), kq[QP] = nh;
    var nU = { draw: function() {} };
    cz[$_] = null, cz[D_] = null;
    var eU = { position: Lw, "text-align": vb },
        sU = { padding: tR, transition: iR },
        hU = { position: L_, display: nR };
    yi(eR, "opacity:0.7;vertical-align:middle;"), yi(".Q-Graph-Nav img:hover,img.hover", sR), oz || (yi(hR, rR + Uz(aR) + oR), yi(fR, cR + Uz(aR) + uR)), hh[nr] = { _d7: function(t, i) {
            return t._ho == i ? !1 : (t._ho = i, void(t[ea][Im] = i ? "visible" : A_)) }, _3b: function(t, i) {
            var n = i / 2 - this[B_]._img[md] / 2 + Fa;
            this[B_]._img[ea].top = n, this[_R][dR][ea].top = n, this[S_].style.width = t + Fa, this[S_][ea][Na] = i + Fa }, _9v: function(t, i, n, e) { this._d7(this[P_], t), this._d7(this._left, i), this._d7(this._n6ottom, n), this._d7(this[_R], e) }, _i8: function() {
            var t = this._navPane[km];
            t && t[ww](this[S_]) }, _j4: function() {
            var t = this[Sc]._kl;
            if (t) {
                var i = t[yo];
                if (i[Wf]()) return void this._9v(!1, !1, !1, !1);
                var n = t[QL],
                    e = n.y > i.y + 1,
                    s = n.x > i.x + 1,
                    h = n[Ur] < i.bottom - 1,
                    r = n[Wr] < i[Wr] - 1;
                this._9v(e, s, h, r) } } };
    var rU = 10;
    yi(lR, vR), yi(bR, "background-color: #7E7E7E;" + Uz(aR) + ": background-color 0.2s linear;"), yi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), yi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), yi(".Q-Graph-ScrollBar--V.Both", yR), yi(".Q-Graph-ScrollBar--H.Both", gR), oz || (yi(mR, rR + Uz(aR) + xR), yi(".Q-Graph:hover .Q-Graph-ScrollPane", cR + Uz(aR) + ":opacity 0.3s linear;")), rh.prototype = { _i8: function() { this[ER]._i8(), this[pR]._i8(), delete this._verticalDragSupport, delete this[pR], this._m4[km] && this._m4[km][ww](this._m4) }, _m4: null, _n5o: null, _86: null, init: function(t) {
            var n = i[Ya](p_);
            n.className = wR, li(n, { width: R_, height: R_, position: L_ });
            var e = i[Ya](p_);
            e[Lc] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = i[Ya](p_);
            s[Lc] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", n[Cc](e), n[Cc](s), t.appendChild(n), this._m4 = n, this._86 = s, this[TR] = e, s.isH = !0;
            var h = this,
                r = { onstart: function(t, i) { i[gr].add(U_) }, onrelease: function(t, i) { i[gr][Kh](U_) }, ondrag: function(t, i) {
                        var n = h[Sc]._kl;
                        if (n) {
                            var e = i.isH,
                                s = e ? t.dx : t.dy;
                            if (s && i[Qa]) {
                                var r = n[Qa] / i[Qa];
                                e ? n[Ja](-r * s, 0) : n.translate(0, -r * s), kq[OL](t) } } }, enddrag: function(t, i) {
                        var n = h[Sc]._kl;
                        if (n && n.enableInertia) {
                            var e = i.isH,
                                s = e ? t.vx : t.vy;
                            if (Math.abs(s) > .1) {
                                var r = n[Qa] / i[Qa];
                                s *= r, e ? n._92(-s, 0) : n._92(0, -s) } } } };
            this[ER] = new mi(e, r), this[pR] = new mi(s, r) }, _3b: function() {
            var t = this[Sc]._kl;
            t && t[nP](this._j4[br](this)) }, _j4: function() {
            var t = this[Sc]._kl;
            if (t) {
                var i = t[yo];
                if (i[Wf]()) return this._3r(!1), void this._4j(!1);
                var n = t[QL],
                    e = t[Da],
                    s = t[Na],
                    h = t.scale,
                    r = 1 / h,
                    a = n.x > i.x + r || n[Wr] < i.right - r,
                    o = n.y > i.y + r || n.bottom < i[Ur] - r,
                    f = a && o;
                f ? (P(this[TR], kR), P(this._86, kR)) : (R(this[TR], kR), R(this._86, kR)), this._3r(a, n, i, f ? e - rU : e), this._4j(o, n, i, f ? s - rU : s) } }, _3r: function(t, i, n, e) {
            if (!t) return this._86.style[gw] = C_, void(this._86[Qa] = 0);
            var s = Math.min(i.x, n.x),
                h = Math.max(i.right, n[Wr]),
                r = h - s,
                a = e / r;
            this._86[Qa] = a, this._86.style[Ho] = parseInt((i.x - s) * a) + Fa, this._86[ea].right = parseInt((h - i.right) * a) + Fa, this._86[ea][gw] = "" }, _4j: function(t, i, n, e) {
            if (!t) return this[TR][ea][gw] = C_, void(this[TR][Qa] = 0);
            var s = Math.min(i.y, n.y),
                h = Math.max(i[Ur], n.bottom),
                r = h - s,
                a = e / r;
            this[TR][Qa] = a, this[TR][ea].top = parseInt((i.y - s) * a) + Fa, this._n5o[ea][Ur] = parseInt((h - i.bottom) * a) + Fa, this[TR][ea][gw] = "" } }, ah[nr] = { shape: null, initialize: function() { T(this, ah, UA), this[mL](), VH[qA](this) }, _n5s: function() { this[Vm] = new QH(this[Uf].path), this.addChild(this[Vm], 0), this.body = this[Vm] }, invalidateShape: function() { this.image[yM](), this[QT]() }, _$v: function(t, i, n) {
            var e = this[FA][GA](this, t, i, n);
            return e = FH[GA](this, t, i, n) || e, VH[GA](this, t, i, n) || e }, doValidate: function() { this[Sm] && (this.image[Jo] = this.data[Wk], this.body.$layoutByAnchorPoint = null != this._2r, this[Sm][Uk] = this._2r);
            var t = this.$data[Bk],
                i = 0,
                n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this.$invalidateBounds = !0), this.$x = i, this.$y = n, KH.prototype[FM].call(this) || e } }, p(ah, KH), Z(ah.prototype, { path: { get: function() {
                return this.data[Wk] } }, length: { get: function() {
                return this.data[Yh] } } }), ah.prototype[$a] = function(t, i, n) {
        var e = this._hs(t, i),
            s = this[Jo],
            h = pn(s[Wk], e.x, e.y, n);
        h && (s[gL] = h) }, oh[nr] = { _md: function() { this._j1.style[Im] = dT }, _jm: function() { this._j1[ea][Im] = A_ }, clear: function() { this._9q[Ba](), this._n7l() }, contains: function(t) {
            return t instanceof Object && t.id && (t = t.id), this._9q[Ud](t) }, _4t: function(t) { SH[bk](this._j1, M_, t ? _T + t[lc](Cr) + ")" : "") }, addDrawable: function(t, i) {
            if (i) {
                var n = { id: ++WG, drawable: t, scope: i };
                return this._9q.add(n), n }
            return t.id || (t.id = ++WG), this._9q.add(t), t }, removeDrawable: function(t) {
            return t.id ? void this._9q[Kh](t) : this._9q.removeById(t) }, _9q: null, invalidate: function() { this[zw]() }, _n7l: function() { this[Sc]._5x || this._j7() }, _il: function(t, i) { this._j1[Xa](t, i) }, _j7: function() {
            var t = this[Sc]._scale,
                i = this.g;
            i._kt(), i[Za](), this[Sc]._95(i);
            for (var n = this._9q._jk, e = 0, s = n[Yh]; s > e; e++) i[Za](), i[Lx](), this._hk(i, n[e], t), i[ao]();
            i[ao]() }, _hk: function(t, i, n) {
            return i instanceof Function ? void i(t, n) : void(i.drawable instanceof Function && i.scope && i.drawable[zh](i.scope, t, n)) } }, cz[_P] = !0;
    var aU = function(t) { this._kl = t };
    cz[MR] = 600, cz[OR] = Eq.easeOut, aU[nr] = { _kl: null, _du: null, _h5: function(t, i, n) { this._m2();
            var e = Math.abs(t / 2),
                s = Math.abs(i / 2),
                h = Math.min(cz[MR], .6 * Math.max(e, s) * 1e3);
            if (10 > h) return !1;
            var r = function(t) {
                    return -(2 * Math.pow(t, 1.5) - 3 * t) },
                a = t * h / 3,
                o = i * h / 3;
            this._kw(this._kl.tx + a, this._kl.ty + o, 0, { duration: h, animationType: r }, n) }, _6y: function(t, i, n, e, s) { this._du && this._du._m2(), s && (this[IR] = !0, this._kl[SR](!0)), this._42(), this._du = new wq(t, this, i, n), this._du._6b = this._6b[br](this), this._du._kv(e) }, _42: function() { this._kl[jR]() }, _6b: function() { this.__delayRender && (this._kl[SR](!1), delete this[IR]), this._kl[AR]() }, _ds: function() {
            return this._du && this._du._ds() }, _m2: function() { this._du && this._du._m2() }, _ic: function(t) {
            var i = this[CR] + (this[LR] - this[CR]) * t,
                n = this[PR] + (this[RR] - this[PR]) * t,
                e = this[DR] + (this[NR] - this._fromScale) * t;
            this._kl.translateTo(i, n, e, this.toInt) }, _kw: function(t, i, n, e, s) { this._m2();
            var h = this._kl,
                r = h.scale;
            if (0 >= n && (n = r), t != h.tx || i != h.ty || n != r) {
                var a, o, f;
                e instanceof Object && (a = e[BR], o = e[$R], f = e[FR]);
                var c = h.tx,
                    u = h.ty;
                if (!a)
                    if (n != r) {
                        var _ = n > r ? n / r : r / n;
                        _ = Math.log(_) / Math.log(1.3), a = 60 * _ } else {
                        var d = vz(t, i, c, u);
                        a = d / 2 }
                o = o || cz[MR], f = f || cz.ANIMATION_TYPE, a = Math.min(o, a), this[CR] = c, this[PR] = u, this[DR] = r, this[LR] = t, this[RR] = i, this[NR] = n, this._6y(this._ic, a, f, s, n != r) } } }, cz.INTERACTION_HANDLER_SIZE_TOUCH = 8, cz[GR] = 4, cz[zR] = 30, cz.INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP = 20;
    var oU = Math.PI / 4;
    uh[nr] = { onElementRemoved: function(t, i) { this[qR] && (t == this[qR] || $(t) && x(t, this[qR])) && this[Ey](i) }, onClear: function(t) { this[qR] && this[Ey](t) }, destroy: function() { delete this[qR], this.removeDrawable() }, invalidate: function() { this[Q_][Gw]() }, removeDrawable: function() { this[YR] && (this[Q_].removeDrawable(this._gyId), delete this[YR], this[Gw]()) }, addDrawable: function() { this._gyId || (this[YR] = this[Q_].addDrawable(this.doDraw, this).id, this[Gw]()) }, doDraw: function() {}, escapable: !0, onkeydown: function(t, i) { this[HR] && 27 == t[Dp] && (z(t), this.destroy(i)) } }, kq[UR] = uh, _h[nr] = { defaultCursor: id, getInteractionInstances: function(t) {
            if (!this.interactions) return null;
            for (var i = [], n = 0, e = this[WR][Yh]; e > n; n++) {
                var s = this.interactions[n];
                s instanceof Function ? i[Jh](new s(t)) : s instanceof Object && i[Jh](s) }
            return i } }, dh.prototype = { _e4: null, _jz: null, destroy: function() { T(this, dh, Ey, arguments), delete this._jz, delete this._9o, delete this._e4 }, doDraw: function(t) {
            var i = this[go];
            i && (i.forEach(function(i) { this[VR](t, i) }, this), this.isClosePath && t.closePath(), this[XR](t)) }, styleDraw: function(t) {
            var i = lh(this[r_].interactionProperties, this.getDefaultDrawStyles(this[r_]));
            i.lineWidth && (t[wo] = i[wo], i[wx] && (t[wx] = i[wx]), i.lineJoin && (t[Tx] = i[Tx]), i[Kf] && (t[Kf] = i.lineDash, t[nc] = i[nc] || 0), t[Dm] = i[Dm], t[Eo]()), i[Cm] && (t[Cm] = i.fillStyle, t.fill()) }, drawPoint: function(t, i, n) {
            if (n) return void t[Kc](i.x, i.y);
            if (kq.isArray(i)) {
                var e = i[0],
                    s = i[1];
                t[RE](e.x, e.y, s.x, s.y) } else t.lineTo(i.x, i.y) }, setCurrentPoint: function(t) { this.currentPoint = t }, addPoint: function(t) { this._jz || (this._jz = [], this[KR]()), this._jz.push(t), this.invalidate() } }, p(dh, uh), Z(dh.prototype, { currentPoint: { get: function() {
                return this._9o }, set: function(t) { this._9o = t, this[Gw]() } }, prevPoint: { get: function() {
                return this._jz && this._jz[Yh] ? this._jz[this._jz[Yh] - 1] : null } }, points: { get: function() {
                return this._9o && this._jz && this._jz[Yh] ? this._jz[Vh](this._9o) : void 0 } } }), kq.DrawPathInteraction = dh, vh[nr] = { destroy: function() { T(this, vh, Ey, arguments), delete this[ZR], this._l5 && (clearTimeout(this._l5), delete this._l5) }, doDraw: function(t, i) {
            return this._jz ? this._jz.length <= 1 ? gh[nr][JR][zh](this, t, i) : void T(this, vh, JR, arguments) : void 0 }, ondblclick: function(t, i) { this[Ey](i) }, finish: function(t, i, n) {
            var e;
            this._jz && this._jz.length >= 2 && (this._jz.shift(), e = new uz, l(this._jz, function(t) {
                if (kq[Tr](t)) {
                    var i = t[0],
                        n = t[1];
                    e.add(new aY(Mq.SEGMENT_QUAD_TO, [i.x, i.y, n.x, n.y])) } else e.add(new aY(Mq[_x], [t.x, t.y])) }, this)), i[QR](this[ZR], n, t, e), this[Ey](i) }, _n65: function(t, i) {
            return t instanceof LH && i[tD](t) }, _e8: function(t, i) {
            return t instanceof LH && i[XL](t, this[ZR]) }, _9p: function(t, i) {
            var n = i[a_](t);
            return n && n[o_] ? n[o_][vb] : t.location }, onstart: function(t, i) {
            if (this[ZR]) {
                var n = t[jL]();
                return this._e8(n, i) ? void this[iD](t, i, n) : void this[$a](this[nD](t)) } }, startdrag: function(t, i) {
            if (!this[ZR] && !t[eD]) {
                var n = t.getData();
                n && this[sD](n, i) && (t[eD] = !0, this.start = n, this.addPoint(this._9p(n, i))) } }, _n6z: function(t) { this._l5 && (clearTimeout(this._l5), delete this._l5), this._l5 = setTimeout(function(t) {
                if (delete this._l5, this.start && this[hD]) {
                    var i = t.x - this[hD].x,
                        n = t.y - this[hD].y;
                    Math[_o](i * i + n * n) * this[r_][Qa] <= 2 && this[$a](this.currentPoint) } }[br](this, this[nD](t)), cz[Fv]) }, ondrag: function(t, i) { this[rD](t, i) }, enddrag: function(t, i) {
            if (this.start) {
                var n = t[jL]();
                this._e8(n, i) && this.finish(t, i, n) } }, onrelease: function(t, i) { iq(t) && this[Ey](i) }, onmousemove: function(t, i) { this.start && (this[hD] = this.toLogicalPoint(t), iq(t) && this[aD](t, i)) }, toLogicalPoint: function(t) {
            return this[r_].toLogical(t) }, getDefaultDrawStyles: function() {
            return { lineWidth: this[r_][ZL]($H[vS]), strokeStyle: this[r_][ZL]($H[Uj]), lineDash: this[r_][ZL]($H[ES]), lineDashOffset: this[r_][ZL]($H[wS]), lineCap: this[r_].getDefaultStyle($H.LINE_CAP), lineJoin: this[r_].getDefaultStyle($H[FO]) } } }, p(vh, dh), kq[oD] = vh, bh.prototype = { getDefaultDrawStyles: function() {
            return { lineWidth: this[r_][ZL]($H[uO]), strokeStyle: this.graph[ZL]($H.SHAPE_STROKE_STYLE), fillStyle: this[r_][ZL]($H[bO]) } }, finish: function(t, i) {
            if (this._jz && this._jz[Yh]) {
                var n = this._jz,
                    e = 0,
                    s = 0,
                    h = 0;
                n[Rc](function(t) {
                    return kq[Tr](t) ? void t[Rc](function() { e += t.x, s += t.y, h++ }) : (e += t.x, s += t.y, void h++) }), e /= h, s /= h;
                var r = [];
                n[Rc](function(t, i) {
                    if (0 == i) return void r[Jh](new aY(Mq.SEGMENT_MOVE_TO, [t.x - e, t.y - s]));
                    if (kq.isArray(t)) {
                        var n = t[0],
                            h = t[1];
                        r[Jh](new aY(Mq[dx], [n.x - e, n.y - s, h.x - e, h.y - s])) } else r[Jh](new aY(Mq[_x], [t.x - e, t.y - s])) }), this[Ya](t, r, e, s), this[Ey](i) } }, startdrag: function(t) { t[eD] = !0 }, createElement: function(t, i, n, e) {
            return this[r_][fD](t, i, n, e) }, onstart: function(t, i) {
            var n = i.toLogical(t);
            this._e4 = n, this.addPoint(n) }, onmousemove: function(t, i) { this._e4 && (this.currentPoint = i[wT](t)) }, ondblclick: function(t, i) {
            if (this._e4) {
                if (this._jz[Yh] < 3) return void this[Ey](i);
                delete this._jz[this._jz[Yh] - 1], this[iD](t, i) } }, isClosePath: !0 }, p(bh, dh), kq[cD] = bh, yh[nr] = { isClosePath: !1, createElement: function(t, i, n, e) {
            return this[r_][uD](t, i, n, e) }, getDefaultDrawStyles: function() {
            return { lineWidth: tU[$H[uO]], strokeStyle: tU[$H[dO]], lineDash: this[r_][ZL]($H.SHAPE_LINE_DASH), lineDashOffset: this.graph[ZL]($H[Bj]), lineCap: this[r_][ZL]($H[BO]), lineJoin: this.graph[ZL]($H.LINE_JOIN) } } }, p(yh, bh), kq[_D] = yh, gh.prototype = { destroy: function(t) { T(this, gh, Ey, arguments), t[NP] = "", this.start = null }, doDraw: function(t) {
            if (this[ZR] && this.currentPoint) {
                var i, n;
                this[r_][CP] && (i = this.graph[CP][tk], n = this[r_][CP][v_]), i = i || this[r_].edgeUIClass || kq[dD], n = n || this.graph[v_];
                var e = i[lL] || kq[dD][lL],
                    s = this.graph[a_](this[ZR]);
                s && s[o_] && (s = s[o_][vb], e(t, s, this.currentPoint, n), this[XR](t)) } }, canLinkFrom: function(t, i) {
            return t instanceof LH && i.canLinkFrom(t) }, canLinkTo: function(t, i) {
            return t instanceof LH && i[XL](t, this[ZR]) }, startdrag: function(t, i) {
            var n = t[jL]();
            this[tD](n, i) && (t[eD] = !0, this[ZR] = n, i.cursor = Ny, this.addDrawable()) }, ondrag: function(t, i) { this[ZR] && (kq[OL](t), this[hD] = i[wT](t), this.invalidate()) }, enddrag: function(t, i) {
            if (this.start) { this[Gw]();
                var n = t.getData();
                this.canLinkTo(n, i) && i[QR](this[ZR], n, t), this[Ey](i) } }, getDefaultDrawStyles: function() {
            return { lineWidth: this[r_][ZL]($H[vS]), strokeStyle: this[r_].getDefaultStyle($H[Uj]), lineDash: this[r_][ZL]($H[ES]), lineDashOffset: this.graph[ZL]($H.EDGE_LINE_DASH_OFFSET), lineCap: this[r_][ZL]($H.LINE_CAP), lineJoin: this[r_][ZL]($H[FO]) } } }, p(gh, dh), kq[lD] = gh, cz.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS = !1, Th[nr] = { html: null, createHTML: function() {
            var t = i[Ya](vD);
            t[Lc] = bD, t[ea][Yf] = Lw, t[ea][no] = vb, t[ea].border = yD, t[ea].padding = gD, t[ea][mD] = "0px 0px 10px rgba(40, 85, 184, 0.75)", t.style[gw] = C_, t[ea][kw] = A_;
            var n = this;
            return t[xD] = function(t) { n[ED](t) }, t[pD] = function(t) {
                return 27 == t[Dp] ? void n[wD]() : void 0 }, t[TD] = function(i) {
                if (13 == i[Dp] || 10 == i.keyCode) {
                    if (i[kr](), i[kD] || i[xa] || i[Rp]) return ph(t, ho), void n[ED](i);
                    n[MD]() } }, i[Sm].appendChild(t), t }, setText: function(t, i) { this[wP][lr] = t || "", i && (this[wP][ea][sd] = i), wh(this.html), this[OD](this[wP]) }, onSizeChange: function(t) {
            var i = (t[nd], t[ed], Eh(t));
            return t[ea][Da] = i.width + 30 + Fa, t[ea][Na] = i[Na] + 10 + Fa, i }, onValueChange: function(t) {
            var i = t[mw];
            this[OD](i), i[ea][Ho] = i.x - i[nd] / 2 + Fa }, onClickOnWindow: function(t) { t[mw] != this.html && (cz[ID] ? this[MD]() : this[wD]()) }, startEdit: function(i, n, e, s, h) { this.html || (this.html = this[SD]()), this[jD] || (this[jD] = function(t) { this[AD](t) }.bind(this)), t[Nv](Ab, this[jD], !0), this.callback = h, this[wP].x = i, this.html.y = n, this.html[ea][gw] = nR, xh(this[wP], i, n), this.setText(e, s || 10), xh(this[wP], i, n) }, isEditing: function() {
            return C_ != this[wP][ea][gw] }, cancelEdit: function() { this.stopEdit(!0) }, stopEdit: function(i) {
            if (this[CD]()) { t[Bv](Ab, this[jD]);
                var n = this[wP][lr];
                if (!i && this.callback && this.callback(n) === !1) return !1;
                this[wP][ea][gw] = C_, this[wP][lr] = null, this[Su] = null } }, destroy: function() { this.html && i[Sm][ww](this[wP]) } }, kq[LD] = Th;
    var fU = function(t) { this[r_] = t };
    fU[nr] = { destroy: function(t) { t[PD] && (t[PD].destroy(), delete t[PD]) }, ondblclick: function(t, i) {
            var n = t[jL]();
            if (n) {
                if (n.dblclickable !== !1) {
                    if (i[_L] && i[RD](n)) {
                        var e = i[l_](t);
                        if (e instanceof JH && e[_L] !== !1) {
                            var s = i.labelEditor;
                            s || (i[PD] = s = new Th);
                            var h = e[Go]();
                            return h = i[DD](h.x + h.width / 2, h.y + h.height / 2), h = mh(h.x, h.y, i[wP]), void i[ND](n, e, s, h) } }
                    var r = n instanceof DH,
                        a = n instanceof CH && n[BD]();
                    return n._3p && (xi(t) || !r && !a) ? void(i[nM] = n) : r ? (n[ik] = !n[ik], void this[r_][YL](new Ah(this[r_], Ah.GROUP_EXPANDED, t, n))) : void(a && this[r_][xP](n) && this[r_][YL](new Ah(this.graph, Ah[$D], t, n))) } } else {
                if (i.currentSubNetwork) return void i.upSubNetwork();
                if (i.enableDoubleClickToOverview) {
                    var o = i.resetScale || 1;
                    Math.abs(i[Qa] - o) < 1e-4 ? i[cP]() : i.moveToCenter(o) } } } };
    var cU = function(t) { this[r_] = t };
    cU[nr] = { onkeydown: function(t, i) {
            if (i[_L]) {
                var n = t[Dp];
                if (8 == n || 46 == n || 127 == n) return i.removeSelectionByInteraction(t), void F(t);
                if (xi(t)) {
                    if (67 == n);
                    else if (86 == n);
                    else if (90 == n);
                    else if (89 != n) return;
                    F(t) } } } }, kq.EditInteraction = cU;
    var uU = function(t) { this.graph = t };
    uU[nr] = { onkeydown: function(i, n) {
            if (i.metaKey && 83 == i[Dp]) {
                var e = n.exportImage(n.scale, n[QL]),
                    s = t[Sa](),
                    h = s[FD];
                h.title = GD + e[Da] + zD + e[Na];
                var r = h.createElement(T_);
                r.src = e.data, h[Sm].appendChild(r), F(i) } } };
    var _U = function(t) { this.graph = t };
    _U[nr] = { destroy: function() { delete this[qD], delete this.currentDraggingElement }, _1t: function(t) {
            var i = new uz;
            return t[V_].forEach(function(n) { t[gP](n) && t.isVisible(n) && i.add(n) }, this), i }, onstart: function(t, i) { this[YD] && this.destroy(i) }, startdrag: function(t, i) {
            if (!(t[eD] || t[Gr] && 1 != t[Gr][Yh])) {
                var n = t[jL]();
                if (!n || !i[HD](n) || !i[gP](n)) return void this.destroy(i);
                t[eD] = !0, this.currentDraggingElement = n, this.draggingElements = this._1t(i);
                var e = new Ah(i, Ah[UD], t, this[YD], this[qD][pd]);
                return i.beforeInteractionEvent(e) === !1 ? void this[Ey](i) : void i[YL](e) } }, ondrag: function(t, i) {
            if (this[YD]) {
                if (t[Gr] && 1 != t.touches.length) return void this[fy](t, i);
                z(t);
                var n = t.dx,
                    e = t.dy,
                    s = i[Qa];
                n /= s, e /= s;
                var h = new Ah(i, Ah[WD], t, this[YD], this[qD][pd]);
                i[VD](this.draggingElements[pd], n, e), i[YL](h) } }, enddrag: function(t, i) {
            if (this.currentDraggingElement) {
                if (this[qD] && this[qD][Yh]) {
                    if (t.shiftKey) {
                        var n, e = i[wT](t),
                            s = e.x,
                            h = e.y;
                        i[XD](function(t) {
                            var i = t[Jo];
                            if (!this[qD][d_](i) && t[GT][Gf](s - t.x, h - t.y) && t[l_](s, h, 1)) {
                                if (i instanceof kq[AP]) {
                                    if (!i[E_]) return;
                                    for (var e = this.draggingElements[Yh]; e-- > 0;) {
                                        var r = this[qD].get(e);
                                        if (r instanceof kq.Node && r[KD](i)) return }
                                    return n = i, !1 }
                                return (i.enableSubNetwork || i._ia() && i[ik]) && (n = i), !1 } }, this), n && this[qD][Rc](function(t) {
                            for (var i = t.parent; i;) {
                                if (this.draggingElements.contains(i)) return;
                                i = i.parent }
                            t[Dc] = n }, this) }
                    var r = new Ah(i, Ah.ELEMENT_MOVE_END, t, this[YD], this[qD][pd]);
                    i.onInteractionEvent(r) }
                this[Ey](i) } }, onpinch: function(t, i) { this[YD] && this[fy](t, i) }, step: 1, onkeydown: function(t, i) {
            if (xi(t)) {
                var n, e;
                if (37 == t[Dp] ? n = -1 : 39 == t.keyCode ? n = 1 : 38 == t[Dp] ? e = -1 : 40 == t.keyCode && (e = 1), n || e) {
                    var s = this._1t(i)[pd];
                    if (0 != s[Yh]) { F(t), n = n || 0, e = e || 0;
                        var h = this.step / i[Qa],
                            r = new Ah(i, Ah[ZD], t, null, s);
                        i.moveElements(s, n * h, e * h), i[YL](r) } } } } };
    var dU = function(t) { this[r_] = t };
    dU[nr] = { onkeydown: function(t, i) { xi(t) || (37 == t[Dp] ? (this._5l(i, 1, 0), F(t)) : 39 == t[Dp] ? (this._5l(i, -1, 0), F(t)) : 38 == t[Dp] ? (this._5l(i, 0, 1), F(t)) : 40 == t[Dp] && (this._5l(i, 0, -1), F(t))) }, _5l: function(t, i, n) { t._92(i, n) }, onstart: function(t, i) { this._kv && this.destroy(i) }, _kv: !1, startdrag: function(t, i) {
            if (!t[eD]) { t.responded = !0, this._kv = !0, i.cursor = vq;
                var n = new Ah(i, Ah[JD], t);
                i[YL](n) } }, ondrag: function(t, i) { this._kv && i.translate(t.dx || 0, t.dy || 0) }, enddrag: function(t, i) {
            if (this._kv) {
                if (i.enableInertia !== !1) {
                    var n = t.vx,
                        e = t.vy;
                    (Math.abs(n) > .1 || Math.abs(e) > .1) && i._92(n, e) }
                this.destroy(i);
                var s = new Ah(i, Ah.PAN_END, t);
                i.onInteractionEvent(s) } }, startpinch: function(t, i) { i[SR](!0) }, onpinch: function(t, i) { this._kv = !0;
            var n = t[QD];
            if (n) {
                var e = i.globalToLocal(t[vb]);
                i[eP](n, e.x, e.y, !1) } }, endpinch: function(t, i) { i[SR](!1) }, destroy: function(t) { this._kv = !1, t.cursor = null } }, kh[nr] = { _1i: function(t) { this.element && t[Vo] == this[qR] && this[r_][nP](function() { this._j4() }, this) }, _4: function() { this._m5PropertyChangeListing || (this._m5PropertyChangeListing = !0, this[r_][tN].addListener(this._1i, this)) }, _3: function() { this._m5PropertyChangeListing = !1, this[r_][tN][Xl](this._1i, this) }, onElementRemoved: function(t, i) { this[qR] && (t == this[qR] || Array[Tr](t) && x(t, this[qR])) && this[Ey](i) }, onClear: function(t) { this.element && this[Ey](t) }, destroy: function() { this.graph.cursor = null, this[qR] && delete this.element[iN], this[nN] = !1, delete this[qR], delete this._9d, delete this._9o, delete this[eN], this._78(), this._3() }, _78: function() { this[sN] && (this.topCanvas[hN](this[sN]), delete this.drawLineId, this[Q_][Gw]()) }, _n5c: function() { this[sN] && this.topCanvas[d_](this[sN]) || (this.drawLineId = this[Q_][KR](this.drawLine, this).id, this[Q_][Gw]()) }, _9d: null, _4o: function(t) { this._9d = t, this[Gw]() }, _e6: function(t, i, n) { t[Lx](), i.isControlPoint ? t.rect(i.x - this[ld] / n, i.y - this[ld] / n, this[ld] / n * 2, this.handlerSize / n * 2) : t.arc(i.x, i.y, this[ld] / n, 0, 2 * Math.PI, !1), t.lineWidth = 1 / n, t[Kf] = [], t[Dm] = q_, t[Cm] = "rgba(255, 255, 0, 0.8)", t.stroke(), t[po]() }, _gy: function(t, i, n, e) { e ? t[Kc](i, n) : t.lineTo(i, n) }, drawLine: function(t, i) {
            if (this._9d && this._9d[Yh]) { t[Za]();
                var n = this[qR] instanceof PH;
                n && (t.translate(this[qR].x, this[qR].y), this[qR][Mo] && t[Mo](this[qR][Mo]));
                var e, s = [];
                t[Lx](), this._9d[Yh], this._9d[Rc](function(i) {
                    if (i[Ko] != Mq[vx])
                        for (var n = 0, h = i[go]; n + 1 < h[Yh];) {
                            var r = h[n],
                                a = h[n + 1],
                                o = { x: r, y: a, isControlPoint: this._7a(i, n) };
                            s[Jh](o), this._gy(t, o.x, o.y, null == e), e = o, n += 2 } }, this), t[wo] = 1 / i, t[Kf] = [2 / i, 3 / i], t.strokeStyle = rN, t.stroke(), s[Rc](function(n) { this._e6(t, n, i) }, this), t[ao]() } }, invalidate: function() { this[Q_][Gw]() }, _39: function(t) {
            if (this[qR] != t && (this.element && this[Ey](), t && this.isEditable(t))) {
                var i = this._5n(t, this.graph);
                i && (this[qR] = t, t[iN] = !0, this[eN] = !0, this._4o(i), this._4(), this[aN]()) } }, _j4: function() {
            if (this.drawLineId && this[qR]) {
                var t = this._5n(this[qR], this[r_]);
                return t ? void this._4o(t) : void this[Ey](this.graph) } }, _5n: function(t, i) {
            if (i[RD](t)) {
                var n = t[gL] || [];
                n instanceof uz && (n = n[e_]());
                var e = i.getUI(t);
                if (e instanceof kq[dD]) {
                    var s = t[$c],
                        h = t[Nc],
                        r = i[a_](s),
                        a = i[a_](h),
                        o = r[o_][Zh](),
                        f = a[o_].clone(),
                        c = o[vb],
                        u = f[vb],
                        _ = e.getStyle(kq.Styles.EDGE_FROM_OFFSET),
                        d = e[Cu](kq[SP][c_]);
                    _ && (c.x += _.x || 0, c.y += _.y || 0), d && (u.x += d.x || 0, u.y += d.y || 0), n[Wh](0, 0, new kq[bx](Mq[oN], [c.x, c.y])), n[Jh](new kq[bx](Mq.SEGMENT_MOVE_TO, [u.x, u.y])) }
                return n } }, _hs: function(t, i) { t -= this[qR].x, i -= this.element.y;
            var n = { x: t, y: i };
            return this[qR][Mo] && $s(n, -this[qR][Mo]), n }, onclick: function(t, i) {
            if (i.editable && t.altKey && this[qR]) {
                var n = this._gs(t, i);
                if (n && n[fN]) return void this[qR][cN](n[Zl]);
                if (this[qR] == t[jL]()) {
                    var e = i[wT](t),
                        s = i[a_](this.element);
                    s.addPoint(e.x, e.y, this[ld] || 2) } } }, isEditable: function(t) {
            return this[r_].isEditable(t) && (t instanceof PH || t instanceof CH && (!t.isLooped() || t.hasPathSegments())) }, ondblclick: function(t, i) {
            if (!i[_L]) return void(this[qR] && this[Ey](i));
            var n = t.getData();
            return !n || n == this.element || n[iN] ? void this[Ey](i) : void this._39(n) }, onstart: function(t, i) {
            if (this._mousePressed = !0, !i.editable) return void(this[qR] && this.destroy(i));
            if (!t[eD]) {
                if (this[qR] && this._gs(t, i)) return void(t.responded = !0);
                var n = t[jL]();
                return n && i[uN](n) && n instanceof PH ? void(this[qR] && n != this[qR] && this.destroy()) : void this._39(n) } }, onrelease: function() { this[nN] = !1, this.element && (this[eN] = !0) }, _9o: null, _gs: function(t, i) {
            var n = i[wT](t);
            this.element instanceof PH && (n = this._hs(n.x, n.y));
            var e, s = i.scale,
                h = this[ld] / s,
                r = this._9d,
                a = r[Yh],
                o = this[qR] instanceof kq.Edge;
            return r[Rc](function(t, s) {
                for (var f = 0, c = t.points; f + 1 < c[Yh];) {
                    var u = c[f],
                        _ = c[f + 1],
                        d = vz(n.x, n.y, u, _);
                    if (h > d) {
                        if (e = { oldPoints: c[Uh](0), segment: t, index: s, pointIndex: f }, o && (e[Zl] -= 1), o && !Mh(t) && (0 == s || s == r.length - 1)) { e.isEndPoint = !0;
                            var l = 0 == s;
                            e[_N] = l;
                            var v = l ? kq[SP].EDGE_FROM_OFFSET : kq[SP][c_],
                                b = i[Cu](this.element, v) || {};
                            e[dN] = [b.x || 0, b.y || 0] }
                        return this._7a(t, f) && (e[fN] = !0, s > 0 && (e[lN] = r instanceof uz ? r[Hd](s - 1) : r[s - 1]), a > s + 1 && (e.nextSegment = r instanceof uz ? r[Hd](s + 1) : r[s + 1], e[vN][go] && (e[bN] = e[vN].points[Uh](0)))), !1 }
                    f += 2 } }, this), e }, _7a: function(t, i) {
            return i == t[go].length - 2 }, startdrag: function(t, i) {
            if (this[qR] && this._n7anEdit && (this._9o = this._gs(t, i), this._9o)) { this._78(), t[eD] = !0;
                var n = new Ah(i, Ah.POINT_MOVE_START, t, this[qR]);
                n[yN] = this._9o, i[YL](n) } }, onkeyup: function(t, i) { this._mousePressed && 16 != !t.keyCode && this[qR] && this._9o && this._9o[Fb] && this[gN](this._9o.delta.x, this._9o[Fb].y, i, t, !1) }, onkeydown: function(t, i) { this._mousePressed && this[qR] && this._9o && t[Rp] && this._9o[Fb] && this[gN](this._9o[Fb].x, this._9o[Fb].y, i, t, !0) }, _n7d: function(t, i, n, e, s) {
            var h = this._9o,
                r = this[qR],
                a = h[dN],
                o = h[mN];
            if (h[xN]) {
                var f = h[_N] ? kq.Styles.EDGE_FROM_OFFSET : kq[SP][c_],
                    c = { x: a[0] + t, y: a[1] + i };
                return void r[bk](f, c) }
            if (s && h[fN]) {
                var u = { x: a[a[Yh] - 2] + t, y: a[a.length - 1] + i },
                    _ = h.prevSegment,
                    d = h[vN],
                    l = 20 / n[Qa],
                    v = Number[ol],
                    b = v,
                    y = v,
                    g = v;
                _ && (_ = _[ko], v = Math.abs(u.x - _.x), y = Math.abs(u.y - _.y)), d && (d = d[ko], b = Math.abs(u.x - d.x), g = Math.abs(u.y - d.y)), l > v && b > v ? t += _.x - u.x : l > b && v > b && (t += d.x - u.x), l > y && g > y ? i += _.y - u.y : l > g && y > g && (i += d.y - u.y) }
            if (h[fN] && Mh(o)) {
                for (var m = o[go][Yh] - 4; m < o[go].length;) {
                    var x = a[m] + t,
                        E = a[m + 1] + i;
                    o[go][m] = x, o[go][m + 1] = E, m += 2 }
                if (h[vN] && Mh(h[vN])) {
                    var p = h.oldNextPoints,
                        x = p[0] + t,
                        E = p[1] + i;
                    h[vN][go][0] = x, h[vN][go][1] = E } } else {
                var m = h.pointIndex,
                    x = a[m] + t,
                    E = a[m + 1] + i;
                o[go][m] = x, o[go][m + 1] = E }
            r.firePathChange();
            var w = new Ah(n, Ah[EN], e, r);
            w[yN] = h, n.onInteractionEvent(w) }, ondrag: function(t, i) {
            if (this.element && this._9o) {
                var n = this._9o,
                    e = this[qR],
                    s = t[Iy],
                    h = t.totalDeltaY,
                    r = i[Qa];
                if (s /= r, h /= r, e[Mo]) {
                    var a = { x: s, y: h };
                    $s(a, -e[Mo]), s = a.x, h = a.y }
                n[Fb] = { x: s, y: h }, this._n7d(s, h, i, t, t.shiftKey) } }, enddrag: function(t, i) {
            if (this[qR] && this._9o) { this._n5c(), this._j4();
                var n = new Ah(i, Ah[pN], t, this.element);
                n[yN] = this._9o, i[YL](n) } }, onmousemove: function(t, i) { this[qR] && (i[NP] = t[kD] && (this._gs(t, i) || this.element == t[jL]()) ? "crosshair" : null) } }, cz.SELECTION_RECTANGLE_STROKE = 1, cz.SELECTION_RECTANGLE_STROKE_COLOR = X(3724541951), cz[wN] = X(1430753245);
    var lU = function(t) { this[r_] = t, this[Q_] = t._7x[RT] };
    lU.prototype = { onstart: function(t, i) { this._kv && this[Ey](i) }, startdrag: function(t, i) { t.responded || (t[eD] = !0, this._kv = i[wT](t), i[NP] = Ny, this[TN] = this.topCanvas[KR](this._11, this).id) }, ondrag: function(t, i) {
            if (this._kv) { z(t), this._end = i[wT](t), this[Gw]();
                var n = new Ah(i, Ah[kN], t, i.selectionModel);
                i.onInteractionEvent(n) } }, enddrag: function(t, i) {
            if (this._kv) { this[MN] && (clearTimeout(this[MN]), this[MN] = null), this._fu(!0), this[Ey](i);
                var n = new Ah(i, Ah[ON], t, i[V_]);
                i.onInteractionEvent(n) } }, onpinch: function(t, i) { this._kv && this[fy](t, i) }, _11: function(t, i) { t.strokeStyle = cz.SELECTION_RECTANGLE_STROKE_COLOR, t.fillStyle = cz.SELECTION_RECTANGLE_FILL_COLOR, t[wo] = cz[IN] / i;
            var n = this._kv.x,
                e = this._kv.y;
            t[Pc](n, e, this[SN].x - n, this._end.y - e), t[po](), t.stroke() }, invalidate: function() {
            return this[rM] ? void this[Q_][Gw]() : (this[rM] = !0, void(this[MN] = setTimeout(this._fu[br](this), 100))) }, _fu: function(t) {
            if (this[rM] = !1, this[MN] = null, !this._kv || JG && !t) return void this[Q_][Gw]();
            var i = Math.min(this._kv.x, this[SN].x),
                n = Math.min(this._kv.y, this[SN].y),
                e = Math.abs(this._kv.x - this[SN].x),
                s = Math.abs(this._kv.y - this._end.y);
            if (!e || !s) return void this.graph.selectionModel[Ba]();
            var h, r = [],
                a = this[r_].scale;
            if (this[r_][jN](function(t) { t._ho && this[r_][Z_](t[Uf]) && (h = t._fo, (ai(i, n, e, s, h.x + t._x, h.y + t._y, h[Da], h.height) || An(i, n, e, s, t, a)) && r[Jh](t[Uf])) }, this), this[r_].selectionModel.set(r), this.topCanvas[Gw](), !t) {
                var o = new Ah(this[r_], Ah[AN], null, this.graph[V_]);
                this.graph[YL](o) } }, destroy: function(t) { this._kv = null, t.cursor = null, this[TN] && (this[Q_][hN](this[TN]), delete this[TN], this[Q_].invalidate()) } };
    var vU = I({ "super": lU, onstart: null, startdrag: null, ondrag: null, enddrag: null, accept: function(t, i, n) {
                return n[CN] !== !1 }, oncontextmenu: function(t, i) { i.popupmenu || z(t) }, onstart2: function() { lU[nr][Qb][ir](this, arguments) }, startdrag2: function(t, i) { t[eD] || (i[LN] && i[LN][PN] instanceof Function && i[LN][PN](), lU[nr][sy][ir](this, arguments)) }, ondrag2: function() { lU.prototype[ry].apply(this, arguments) }, enddrag2: function() { lU[nr][fy].apply(this, arguments) } }),
        oU = Math.PI / 4;
    Oh[nr] = {
        _e9: !1,
        _ea: !1,
        _1i: function(t) { this[qR] && t[Vo] == this[qR] && this.graph[nP](function() { this._9y() }, this) },
        _4: function() { this._m5PropertyChangeListing || (this[RN] = !0, this[r_][tN].addListener(this._1i, this)) },
        _3: function() { this[RN] = !1, this.graph[tN][Xl](this._1i, this) },
        onElementRemoved: function(t, i) { this[qR] && (t == this[qR] || $(t) && x(t, this.element)) && this.destroy(i) },
        onClear: function(t) { this[qR] && this[Ey](t) },
        ondblclick: function(t, i) { this.element && this[Ey](i) },
        destroy: function(t) { t[NP] = null, delete this.element, delete this._dc, delete this._n6ody, delete this._9o, delete this._n7anEdit, delete this._jz, delete this[DN], delete this._ea, delete this._e9, delete this._insets, this._78(), this._3() },
        _78: function() { this[YR] && (this[Q_][hN](this[YR]), delete this[YR], this.topCanvas[Gw]()) },
        _n5c: function() { this[YR] && this[Q_][d_](this._gyId) || (this[YR] = this[Q_].addDrawable(this._gy, this).id, this[Q_][Gw]()) },
        _dc: null,
        _jz: null,
        _7u: function(t) {
            this._dc = t;
            var i = this._dc.x,
                n = this._dc.y,
                e = this._dc[Da],
                s = this._dc.height;
            if (this[qR] instanceof DH && this[qR][ik], this._ea) {
                var h = [];
                h.push({ x: i, y: n, p: xz[yl], cursor: NN, rotate: 5 * oU }), h[Jh]({ x: i + e / 2, y: n, p: xz[ml], cursor: BN, rotate: 6 * oU }), h.push({ x: i + e, y: n, p: xz.RIGHT_TOP, cursor: bd, rotate: 7 * oU }), h[Jh]({ x: i, y: n + s / 2, p: xz.LEFT_MIDDLE, cursor: $N, rotate: 4 * oU }), h[Jh]({ x: i, y: n + s, p: xz[gl], cursor: bd, rotate: 3 * oU }), h.push({ x: i + e, y: n + s / 2, p: xz[wl], cursor: $N, rotate: 0 }), h[Jh]({ x: i + e / 2, y: n + s, p: xz.CENTER_BOTTOM, cursor: BN, rotate: 2 * oU }), h.push({ x: i + e, y: n + s, p: xz[Tl], cursor: NN, rotate: oU }), this._jz = h
            }
            this[DN] = this._e9 ? { x: i + e / 2, y: n, cursor: bq } : null, this._n7l()
        },
        _e6: function(t, i, n, e) { t[Lx]();
            var s = (this[ld] - 1) / e;
            t[Pc](i - s, n - s, 2 * s, 2 * s), t[wo] = 1 / e, t.lineDash = [], t[Dm] = q_, t[Cm] = "rgba(255, 255, 255, 0.8)", t[Eo](), t[po]() },
        _5p: function(t, i, n, e, s, h) { s = s || this[ld], h = h || FN, t.beginPath(), s /= e, t.arc(i, n, s, 0, 2 * Math.PI, !1), t[wo] = 1 / e, t.lineDash = [], t[Dm] = q_, t[Cm] = h, t.stroke(), t.fill() },
        _hs: function(t, i) { t -= this.element.x, i -= this[qR].y;
            var n = { x: t, y: i };
            return this.element.rotate && $s(n, -this[qR].rotate), n },
        _gy: function(t, i) {
            if (this._dc) {
                if (t.save(), t[Ja](this[qR].x, this[qR].y), this[qR][Mo] && t.rotate(this[qR].rotate), this[DN]) { this._5p(t, 0, 0, i, 3, GN);
                    var n = this._rotatePoint.x,
                        e = this[DN].y - this[vd] / i;
                    t[Lx](), t[Kc](n, this[DN].y), t[Jc](n, e), t.lineWidth = 1 / i, t[Dm] = rN, t[Eo](), this._5p(t, n, e, i) }
                if (this._jz) {
                    var s = this._dc.x,
                        h = this._dc.y,
                        r = this._dc[Da],
                        a = this._dc.height;
                    t.beginPath(), t[Pc](s, h, r, a), t[wo] = 1 / i, t[Kf] = [2 / i, 3 / i], t[Dm] = rN, t.stroke(), l(this._jz, function(n) { this._e6(t, n.x, n.y, i) }, this) }
                t.restore() } },
        _n7l: function() { this[Q_][Gw]() },
        _39: function(t, i, n, e) { this[qR] = t, this[aN]();
            var s = i[a_](t);
            this[QA] = s[Sm], this._ea = n, this._e9 = e, this._9y(), this._4() },
        _9y: function() {
            if (this[YR]) {
                var t = Ih(this._n6ody, this._n6ody._ja),
                    i = Ih(this[QA], this._n6ody._7m);
                this[zN] = new mz(t.y - i.y, t.x - i.x, i[Ur] - t.bottom, i[Wr] - t[Wr]), this._7u(i) } },
        _n6q: function(t, i) {
            return i[uN](t) },
        _n6s: function(t, i) {
            return (!t._ia() || !t[ik]) && i[qN](t) },
        _d5: function(t, i) {
            return t instanceof LH && i[RD](t) },
        onstart: function(t, i) {
            if (!i[_L]) return void(this.element && this[Ey](i));
            if (!t[eD]) {
                var n = i.getUI(t),
                    e = t[jL]();
                if (e != this[qR]) {
                    if (this[qR]) {
                        if (this._gs(t, i)) return void(t[eD] = !0);
                        this.destroy(i) }
                    if (e && !e[iN] && this._d5(e, i)) {
                        var s = this._n6q(e, i, n),
                            h = this._n6s(e, i, n);
                        (s || h) && this._39(e, i, s, h) } } } },
        onrelease: function(t, i) { this[qR] && (this._n7anEdit = !0, this[aN](), i[nP](function() { this._9y() }, this)) },
        _9o: null,
        _gs: function(t, i) {
            var n = i[wT](t);
            n = this._hs(n.x, n.y);
            var e = i[Qa],
                s = this.handlerSize / e;
            if (this[DN]) {
                var h = this[DN].x,
                    r = this[DN].y - this[vd] / e;
                if (vz(n.x, n.y, h, r) < s) return this._rotatePoint }
            if (this._jz && this._jz[Yh]) {
                var a;
                return l(this._jz, function(t) {
                    return vz(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0 }, this), a } },
        onmousemove: function(t, i) {
            if (this.element) {
                var n = this._gs(t, i);
                if (!n) return void(i[NP] = null);
                if (n != this[DN] && this[qR][Mo]) {
                    var e = n[Mo] + this.element.rotate;
                    return void(i[NP] = Sh(e)) }
                i[NP] = n[NP] } },
        startdrag: function(t, i) {
            if (this.element && (this._78(), this[eN] && (this._9o = this._gs(t, i), this._9o))) {
                if (t[eD] = !0, this._9o == this[DN]) return this._9o[ZR] = i[wT](t), void(this._9o.rotate = this[qR][Mo] || 0);
                var n = new Ah(i, Ah.RESIZE_START, t, this.element);
                n[yN] = this._9o, i[YL](n) } },
        _7g: function(t, i, n, e, s, h) {
            var r = this._dc,
                a = r.x,
                o = r.y,
                f = r[Da],
                c = r.height;
            if (h) {
                var u = e != f;
                u ? s = e * c / f : e = s * f / c }
            var _ = t[Wk]._fd,
                d = e / f,
                l = s / c,
                v = -a * d + i,
                b = -o * l + n;
            _[Rc](function(t) {
                if (t.type != Mq[vx]) {
                    var e = t[go];
                    if (e && e[Yh])
                        for (var s = 0, h = e[Yh]; h > s; s += 2) {
                            var r = e[s],
                                f = e[s + 1];
                            e[s] = (r - a) * d + i - v, e[s + 1] = (f - o) * l + n - b } } }), this._dc.set(i - v, n - b, e, s), t.setLocation(t.x + v, t.y + b), t.firePathChange() },
        _n50: function(t, i, n, e, s) { this._dc.set(i, n, e, s), t.minSize = { x: i, y: n, width: e, height: s } },
        _4d: function(t, i, n, e, s) {
            if (this[qR] instanceof DH) return this[YN](this[qR], t, i, n, e, s);
            if (this.element instanceof PH) return this._7g(this[qR], t, i, n, e, s);
            var h = this[QA] instanceof JH;
            if (!h && s) {
                var r = this._dc,
                    a = this[QA][HN],
                    o = n != r[Da];
                o ? e = n * a.height / a[Da] : n = e * a[Da] / a.height }
            var f = this[qR][Uk],
                c = new yz(n - this._insets.left - this[zN][Wr], e - this[zN].top - this._insets[Ur]);
            if (c[Da] < 1 && (n = this[zN][Ho] + this[zN][Wr] + 1, c[Da] = 1), c.height < 1 && (e = this[zN].top + this[zN][Ur] + 1, c.height = 1), h ? this[qR].setStyle($H[AI], c) : this[qR].size = c, f) {
                var u = fi(f, n, e),
                    _ = u.x + t - (this[QA][MM] || 0),
                    d = u.y + i - (this[QA][OM] || 0);
                if (this._dc.set(t - _, i - d, n, e), this[qR][Mo]) {
                    var u = $s({ x: _, y: d }, this[qR][Mo]);
                    _ = u.x, d = u.y }
                this[qR].x += _, this[qR].y += d } else {
                var _ = this._dc.x * n / this._dc[Da] - t,
                    d = this._dc.y * e / this._dc.height - i;
                if (this._dc.set(t + _, i + d, n, e), this[qR][Mo]) {
                    var u = $s({ x: _, y: d }, this[qR][Mo]);
                    _ = u.x, d = u.y }
                this[qR].x -= _, this[qR].y -= d } },
        ondrag: function(t, i) {
            if (this[qR] && this._9o)
                if (this._9o != this._rotatePoint) {
                    var n = t.dx,
                        e = t.dy,
                        s = i[Qa];
                    if (n /= s, e /= s, this.element.rotate) {
                        var h = { x: n, y: e };
                        $s(h, -this[qR][Mo]), n = h.x, e = h.y }
                    var r = this._9o.p,
                        a = this._dc,
                        o = a.x,
                        f = a.y,
                        c = a[Da],
                        u = a.height;
                    r[Xr] == Ez ? n >= c ? (o += c, c = n - c || 1) : (o += n, c -= n) : r[Xr] == wz && (-n >= c ? (c = -n - c || 1, o -= c) : c += n), r[Kr] == Tz ? e >= u ? (f += u, u = e - u || 1) : (f += e, u -= e) : r[Kr] == Mz && (-e >= u ? (u = -e - u || 1, f -= u) : u += e), this._4d(o, f, c, u, t[Rp]);
                    var _ = new Ah(i, Ah[UN], t, this[qR]);
                    _[yN] = this._9o, i[YL](_) } else {
                    var h = i[wT](t),
                        d = _n(h.x, h.y, this[qR].x, this[qR].y, this._9o.start.x, this._9o.start.y, !0);
                    d += this._9o.rotate || 0, t.shiftKey && (d = Math[uf](d / Math.PI * 4) * Math.PI / 4), this[qR][Mo] = d % (2 * Math.PI);
                    var _ = new Ah(i, Ah[WN], t, this[qR]) } },
        enddrag: function(t, i) {
            if (this[qR] && this._9o && this._9o != this[DN]) {
                var n = new Ah(i, Ah[VN], t, this[qR]);
                n[yN] = this._9o, i[YL](n) } }
    }, kq[XN] = Oh;
    var bU = function(t) { this[r_] = t };
    bU[nr] = { onstart2: function(t, i) { this[Qb](t, i) }, onstart: function(t, i) {
            if (!t.responded) {
                var n = t[jL]();
                if (n && !i[Z_](n) && (n = null), n && xi(t)) { i[KN](n);
                    var e = new Ah(i, Ah[ZN], t, i.selectionModel);
                    return void i[YL](e) }
                if (!n || !i[V_].isSelected(n)) { n ? (i.setSelection(n), i.sendToTop(n)) : i.setSelection(null);
                    var e = new Ah(i, Ah.SELECT, t, i[V_]);
                    i[YL](e) } } }, onkeydown: function(t, i) {
            return 27 == t[Dp] ? void i[JN]() : void(xi(t) && 65 == t.keyCode && (i[QN](), F(t))) } };
    var yU = 0,
        gU = 15;
    cz[tB] = 3e3, cz[iB] = 1e3;
    var mU = nB;
    yi(Fr + mU, { "background-color": eB, overflow: A_, "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)", color: Bm, "pointer-events": C_, border: sB, padding: hB, display: nR, position: Lw });
    var xU = function(t) { this[r_] = t, this[rB] = {} };
    xU[nr] = { _n61: null, _n6a: null, _n6e: function() { delete this[aB], this[rB][Jo] && (this._n6a || (this._n6a = i[Ya](p_), this[oB][Lc] = mU), this[oB][km] || i[Sm][Cc](this[oB]), this._d2(this[r_], this[rB][Jo])) }, _d2: function(t, i) {
            var n = t[fB](i),
                e = fd == i[cB];
            n && !e && (n = n[Zr](/\n/g, uB)), e ? this[oB][_B] = n || "" : this._n6a[dB] = n || "";
            var s = this[rB].evt.pageX + yU,
                h = this._n61.evt[va] + gU;
            jh(this[oB], s, h), this[lB] && (clearTimeout(this[lB]), delete this._deleteTimer), this[lB] = setTimeout(this._8c.bind(this), t.tooltipDuration || cz.TOOLTIP_DURATION) }, _8c: function() { delete this[lB], this[oB] && this[oB][km] && this._n6a[km][ww](this[oB]), delete this[oB], this[rB] = {} }, _e2: function(t, i, n, e) {
            if (!this._n6a) {
                var s = e[vB];
                return isNaN(s) && (s = cz[iB]), void(this[aB] = setTimeout(this[bB][br](this), s)) }
            this._d2(e, t) }, onstart: function(t, i) { this[Ey](i) }, onmousemove: function(t, i) {
            if (i[yB]) {
                var n = t[jL]();
                if (this[rB].evt = t, this._n61[Jo] != n && (this._n61.data = n, this[aB] && (clearTimeout(this[aB]), delete this._initTimer), n)) {
                    var e = i[fB](n);
                    e && this._e2(n, e, t, i) } } }, destroy: function() { this[aB] && (clearTimeout(this._initTimer), delete this[aB]), this._deleteTimer && (clearTimeout(this[lB]), delete this[lB]), this._n6a && this._8c(), this[rB] = {} } };
    var EU = function(t) { this[r_] = t };
    EU.prototype = { _fu: function() { delete this._l5 }, destroy: function(t) { this._l5 && this._fu(t) }, onmousewheel: function(t, i) {
            if (i[gB] !== !1 && t[Fb]) {
                var n = t[Fb] > 0,
                    e = i[Qa];
                if (!(n && i[Wm] - e < 1e-4 || !n && e - i.minScale < 1e-4)) { z(t);
                    var s = Math[_o](Math.abs(t.delta));
                    n || (s = -s), this._l5 && clearTimeout(this._l5), this._l5 = setTimeout(this._fu[br](this, i), 100), i[mB](t, s) } } } };
    var pU = function(t) { this.graph = t };
    pU[nr] = { onclick: function(t, i) { i[mB](t, !xi(t)) } };
    var wU = function(t) { this[r_] = t };
    wU[nr] = { onclick: function(t, i) { i[mB](t, xi(t)) } }, p(Ah, Sz), Ah[UD] = xB, Ah[WD] = EB, Ah[ZD] = pB, Ah.ELEMENT_CREATED = wB, Ah[MP] = TB, Ah.POINT_MOVE_START = kB, Ah.POINT_MOVING = MB, Ah[pN] = OB, Ah.RESIZE_START = IB, Ah.RESIZING = SB, Ah[VN] = jB, Ah.ROTATING = AB, Ah[CB] = LB, Ah[JD] = PB, Ah[RB] = DB, Ah.GROUP_EXPANDED = NB, Ah[$D] = BB, Ah[ZN] = ud, Ah[kN] = $B, Ah[AN] = FB, Ah[ON] = GB, Ah[zB] = qB, Ch[nr] = { _9c: function(t) {
            if (this._interactionSupport) switch (t[Ed]) {
                case $z.KIND_REMOVE:
                    this[YB][HB](t[Jo]);
                    break;
                case $z.KIND_CLEAR:
                    this[YB][UB](t.data) } }, destroy: function() { delete this._kl, delete this._47, this[YB] && (this[YB]._i8(), delete this._interactionSupport) }, _kl: null, _47: null, defaultMode: null, _hl: function(t, i, n) { this._47[t] = new _h(i, n), t == this.currentMode && this[YB][WB](i) }, addCustomInteraction: function(t) { this[YB][VB](t) }, removeCustomInteraction: function(t) { this[YB][XB](t) }, _mv: function(t) {
            var i = this._47[t];
            return i ? i : TU[t] } }, Z(Ch[nr], { defaultCursor: { get: function() {
                return this[KB] ? this.currentInteractionMode[td] : void 0 } }, currentMode: { get: function() {
                return this[BP] }, set: function(t) { this[BP] != t && (this._n7urrentMode, this[YB] || (this._interactionSupport = new uq(this._kl)), this[BP] = t, this.currentInteractionMode = this._mv(this[BP]), this._kl[NP] = this[td], this._interactionSupport[WB](this[KB] ? this[KB][ZB](this._kl) : [])) } } });
    var TU = {};
    cz[JB] = function(t, i, n) {
        var e = new _h(i, n);
        TU[t] = e }, Mq[QB] = t$, Mq.INTERACTION_MODE_DEFAULT = id, Mq[i$] = n$, Mq[e$] = s$, Mq[h$] = r$, Mq.INTERACTION_MODE_CREATE_SIMPLE_EDGE = a$, Mq.INTERACTION_MODE_CREATE_EDGE = o$, Mq[f$] = c$, Mq[u$] = _$, cz[JB](Mq[QB], [bU, dU, EU, uU, fU, xU, vU]), cz[JB](Mq.INTERACTION_MODE_CREATE_SIMPLE_EDGE, [cU, gh, bU, dU, EU, uU, xU]), cz.registerInteractions(Mq.INTERACTION_MODE_CREATE_EDGE, [cU, kh, bU, vh, dU, EU, uU, xU]), cz.registerInteractions(Mq[f$], [cU, bh, bU, dU, EU, uU, xU]), cz[JB](Mq[u$], [yh, bU, dU, EU, uU, xU]), cz.registerInteractions(Mq.INTERACTION_MODE_DEFAULT, [cU, Oh, kh, bU, _U, dU, EU, uU, fU, xU, vU]), cz[JB](Mq[i$], [cU, Oh, kh, bU, _U, lU, dU, EU, uU, fU, xU]), cz[JB](Mq[e$], [EU, uU, pU], _q), cz.registerInteractions(Mq[h$], [EU, uU, wU], dq), kq[d$] = dU, kq[l$] = bU, kq.MoveInteraction = _U, kq[v$] = EU, kq.DoubleClickInteraction = fU, kq[b$] = uU, kq[y$] = xU, kq[g$] = lU, kq.RectangleSelectionInteractionByRightButton = vU, kq.PointsInteraction = kh;
    var kU = function(t) { this.graph = t };
    kq[m$] = kU, kU[nr] = { getNodeBounds: function(t) {
            return this[r_][x$](t) }, isLayoutable: function(t) {
            return this.graph[K_](t) && t.layoutable !== !1 }, getLayoutResult: function() {}, updateLocations: function(t, i, n, e, s) {
            if (i === !0) {
                if (this.animate || (this[E$] = new hW), n && (this.animate[BR] = n), e && (this.animate[FR] = e), this.animate[p$] = t, s) {
                    var h = s,
                        r = this;
                    s = function() { h.call(r, t) } }
                return void this[E$].start(s) }
            for (var a in t) {
                var o = t[a],
                    f = o[w$];
                f[yP](o.x, o.y) }
            s && s.call(this, t) }, _g9: function(t) {
            var i, n, e, s = null;
            t && (i = t[T$], s = t[Su], n = t[BR], e = t.animationType);
            var h = this[k$](t);
            return h ? (this.updateLocations(h, i, n, e, s), h) : !1 }, doLayout: function(t, i) {
            return this[r_] && i !== !0 ? void this[r_][nP](function() { this._g9(t) }, this) : this._g9(t) } };
    var MU = 110,
        OU = 120,
        IU = 130,
        SU = 210,
        jU = 220,
        AU = 230,
        CU = 111,
        LU = 112,
        PU = 121,
        RU = 122,
        DU = 211,
        NU = 212,
        BU = 221,
        $U = 222;
    Mq[M$] = MU, Mq[O$] = OU, Mq[I$] = IU, Mq.DIRECTION_BOTTOM = SU, Mq[S$] = jU, Mq.DIRECTION_MIDDLE = AU, Mq[j$] = CU, Mq[A$] = LU, Mq.DIRECTION_LEFT_TOP = PU, Mq[C$] = RU, Mq[L$] = DU, Mq[P$] = NU, Mq[R$] = BU, Mq[D$] = $U;
    var FU = N$,
        GU = B$,
        zU = $$,
        qU = F$;
    Mq[G$] = FU, Mq[z$] = zU, Mq[q$] = qU, Mq[Y$] = GU, kq[H$] = Lh;
    var YU = function(t) { this[r_] = t };
    YU[nr] = { hGap: 50, vGap: 50, parentChildrenDirection: SU, layoutType: FU, defaultSize: { width: 50, height: 60 }, getNodeSize: function(t) {
            if (this[r_]._7x[Tu]) {
                var i = this[r_].getUI(t);
                if (i) return i._fo }
            return t.image && t.image.bounds ? { width: t[Vm][yo][Da], height: t.image[yo][Na] } : this[U$] }, _n71: function(t, i) {
            if (this[wd](t)) {
                var n, e = this[W$](t);
                n = e instanceof gz ? [-e.x, -e.y] : [e[Da] / 2, e[Na] / 2];
                var s = t.id,
                    h = (t[V$], i ? this._98[i.id] : this._n63);
                this._98[s] = new HU(this[X$](t), this[K$](t), this[Z$](t), t[V$], h, t, e[Da], e.height, n) } }, getHGap: function(t) {
            return t && D(t[J$]) ? t[J$] : this.hGap }, getVGap: function(t) {
            return t && D(t[Q$]) ? t[Q$] : this[Q$] }, getLayoutType: function(t) {
            return t && t[tF] ? t[tF] : this[tF] }, _98: null, _n63: null, _kt: function() { this._98 = null, this[iF] = null }, getLayoutResult: function(t) {
            var i, n, e, s, h = this[r_];
            t instanceof Object && (i = t.x, n = t.y, h = t[nF] || this[r_], e = t.bounds, s = t[eF]), this._98 = {}, this._n63 = new HU, this[iF]._mq(this[J$], this.vGap, this[V$], this[tF]);
            var r = {},
                a = oW(h, this._n71, this, !1, s);
            return a && (this[iF]._g9(i || 0, n || 0, r), e && e.set(this[iF].x, this[iF].y, this[iF][Da], this[iF][Na])), this._kt(), r }, doLayout: function(t, i) {
            if (D(t)) {
                var n = t,
                    e = 0;
                D(i) && (e = i), t = { x: n, y: e }, i = !0 }
            return T(this, YU, sF, [t, i]) } }, p(YU, kU);
    var HU = function(t, i, n, e, s, h, r, a, o) { this._m9 = t || 0, this._ma = i || 0, this[tF] = n, this.parentChildrenDirection = e, this[hF] = s, s && s._fh(this), this[w$] = h, this._et = r, this._n7u = a, this._n5nchorLocation = o };
    HU[nr] = { _mq: function(t, i, n, e) { this._m9 = t, this._ma = i, this.parentChildrenDirection = n, this[tF] = e }, _88: function() { this._fm = [] }, _m9: 0, _ma: 0, _fm: null, _et: 0, _n7u: 0, layoutType: null, parentChildrenDirection: null, _fh: function(t) { this._fm || (this._fm = []), this._fm[Jh](t) }, _n7t: function(t, i, n, e) {
            var s = new gz;
            return n(this._fm, function(n) { n._37(t, i), s.add(n), e ? t += n.width + this._m9 : i += n[Na] + this._ma }, this), s }, _8h: function(t, i, n, e, s) {
            var h, r = e ? this._m9 : this._ma,
                a = e ? this._ma : this._m9,
                o = e ? "width" : Na,
                f = e ? "height" : Da,
                c = e ? "_et" : rF,
                u = e ? "_n7u" : aF,
                _ = e ? "hostDX" : oF,
                d = e ? "hostDY" : fF,
                v = new gz,
                b = 0,
                y = 0,
                g = [],
                m = 0,
                x = 0;
            n(this._fm, function(n) {
                var s = x >= y;
                n[cF] = s ? e ? OU : jU : e ? MU : SU, n._37(t, i), s ? (g.push(n), b = Math.max(b, n[o]), y += n[f] + a) : (h || (h = []), h[Jh](n), m = Math.max(m, n[o]), x += n[f] + a) }, this), y -= a, x -= a;
            var E = Math.max(y, x),
                p = r,
                w = 0;
            this.node && (s && (p += this[c] + r, E > this[u] ? this[d] = (E - this[u]) / 2 : w = (this[u] - E) / 2), this[_] = b + p / 2 - this[c] / 2);
            var T = 0,
                k = w;
            return l(g, function(t) { e ? t[gm](b - t[o], k) : t[gm](k, b - t[o]), k += a + t[f], v.add(t) }, this), h ? (k = w, T = b + p, l(h, function(t) { e ? t[gm](T, k) : t.offset(k, T), k += a + t[f], v.add(t) }, this), v) : v }, offset: function(t, i) { this.x += t, this.y += i, this[uF] += t, this[_F] += i, this._75(t, i) }, _n5y: function(t, i) {
            return 2 * this.cx - t - i - t }, _n5l: function(t, i) {
            return 2 * this.cy - t - i - t }, _mc: function(t) {
            if (this._fm && 0 != this._fm[Yh]) {
                if (t) return this[w$] && (this[uF] += this[dF](this[uF], this._et)), void l(this._fm, function(t) { t[gm](this[dF](t.x, t[Da]), 0) }, this);
                this[w$] && (this[_F] += this[lF](this[_F], this._n7u)), l(this._fm, function(t) { t.offset(0, this[lF](t.y, t[Na])) }, this) } }, _75: function(t, i) { this._fm && l(this._fm, function(n) { n[gm](t, i) }, this) }, _37: function(t, i) {
            return this.x = t || 0, this.y = i || 0, this._fm && 0 != this._fm[Yh] ? void this._1k(this.x, this.y, this.layoutType) : void(this.node && (this.width = this._et, this[Na] = this._n7u, this[uF] = this.x, this.nodeY = this.y)) }, _72: function(t) {
            if (this.node) {
                var i = this[vF],
                    n = i[0],
                    e = i[1];
                t[this[w$].id] = { node: this[w$], x: this[uF] + n, y: this[_F] + e, left: this.nodeX, top: this[_F], width: this._et, height: this._n7u } }
            this._fm && l(this._fm, function(i) { i._72(t) }, this) }, _g9: function(t, i, n) { this._37(t, i), this._72(n) }, _1k: function(t, i, e) {
            var s, h = t,
                r = i;!this[V$] && this[hF] && (this[V$] = this[cF] || this.parentBounds[V$]);
            var a = this[V$],
                o = Lh(a);
            if (this[w$]) { s = a == IU || a == AU;
                var f = Ph(a);
                s || (o ? t += this._et + this._m9 : i += this[rF] + this._ma) }
            var c, u = this.node && this[w$].layoutReverse ? b : l;
            if (e == GU) c = this._8h(t, i, u, !o, s);
            else {
                var _;
                _ = e == FU ? !o : e == zU, c = this[bF](t, i, u, _, s) }
            var d = 0,
                v = 0;
            if (c && !c[Wf]() && (d = c.width, v = c[Na], this.add(c)), this.node) {
                if (this[uF] = h, this[_F] = r, this.hostDX !== n || this[oF] !== n) this.nodeX += this.hostDX || 0, this[_F] += this[oF] || 0;
                else {
                    var y;
                    y = a == SU || a == jU || a == OU || a == MU ? 1 : a == NU || a == $U || a == RU || a == LU ? 0 : 2, o ? 1 == y ? this[_F] += v / 2 - this[rF] / 2 : 2 == y && (this[_F] += v - this._n7u) : 1 == y ? this[uF] += d / 2 - this._et / 2 : 2 == y && (this[uF] += d - this._et) }
                this.addRect(this[uF], this[_F], this._et, this[rF]), f && this._mc(o) } }, node: null, uiBounds: null }, p(HU, gz), Dh[nr] = { layoutDatas: null, isMovable: function(t) {
            return !this[yF][t.id] }, _77: !1, _38: function() { this._77 = !0, this[r_]._1h.addListener(this._9u, this), this.graph._19[Sv](this._24, this) }, _1d: function() { this._77 = !1, this[r_]._1h[Xl](this._9u, this), this.graph._19[Xl](this._24, this) }, invalidateFlag: !0, invalidateLayoutDatas: function() { this.invalidateFlag = !0 }, resetLayoutDatas: function() {
            return this.invalidateFlag = !1, this[gF] = Rh[zh](this) }, _24: function(t) { Ah[UD] == t[Ed] ? (this[yF] = {}, t.datas.forEach(function(t) { this.currentMovingNodes[t.id] = t }, this)) : Ah.ELEMENT_MOVE_END == t[Ed] && (this.currentMovingNodes = {}) }, _9u: function() { this[mF]() }, isRunning: function() {
            return this[xF] && this[xF]._ds() }, getLayoutResult: function() { this[EF](), this[pF]();
            for (var t = this[wF](this[gF][TF] || 0, this.layoutDatas[kF] || 0), i = 0; t > i && this.step(!1) !== !1; i++);
            var n = this[gF][MF];
            return this[OF](), n }, _mj: function() {
            return !1 }, step: function(t) {
            if (t === !1) return this._mj(this.timeStep);
            (this[rM] || !this[gF]) && this[pF]();
            var i = this._mj(t),
                n = this[gF][MF];
            for (var e in n) {
                var s = n[e],
                    h = s[w$];
                this[gP](h) ? h[yP](s.x, s.y) : (s.x = h.x, s.y = h.y, s.vx = 0, s.vy = 0) }
            return i }, onstop: function() { delete this.layoutDatas }, start: function(t) {
            if (this.isRunning()) return !1;
            this._77 || this._38(), this[IF] || (this[IF] = function(t) {
                return this[SF](t) }.bind(this)), this[mF](), this.timer = new pq(this[IF]);
            var i = this;
            return this[xF]._kv(function() { i[OF](), t && t() }), !0 }, stop: function() { this[xF] && (this.timer._m2(), this[OF]()) }, getMaxIterations: function(t) {
            return Math.min(1e3, 3 * t + 10) }, minEnergyFunction: function(t, i) {
            return 10 + Math.pow(t + i, 1.4) }, resetGraph: function() { this._77 || this._38(), this[pF]() }, destroy: function() { this[EF](), this._1d() } }, p(Dh, kU);
    var UU = function(t, i, n, e) { this[r_] = t, D(i) && (this.radius = i), D(n) && (this.gap = n), D(e) && (this[jF] = e) };
    kq[AF] = UU;
    var WU = CF,
        VU = LF,
        XU = PF,
        KU = RF;
    Mq[DF] = WU, Mq[NF] = VU, Mq[BF] = XU, Mq[$F] = KU, UU[nr] = { angleSpacing: WU, radiusMode: KU, gap: 4, radius: 50, startAngle: 0, _98: null, _n63: null, _kt: function() { this._98 = null, this[iF] = null }, getLayoutResult: function(t) {
            var i, n = 0,
                e = 0,
                s = this.graph;
            t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t[nF] || this[r_], i = t[yo]), this._98 = {}, this._n63 = new QU(this);
            var h = {},
                r = fW(s, this[FF], this);
            return r && (this[iF]._fm && 1 == this[iF]._fm.length && (this._n63 = this._n63._fm[0]), this[iF]._fc(!0), this[iF]._5j(n, e, this[jF], h, i)), this._kt(), h }, _n71: function(t, i) {
            if (this[wd](t)) {
                var n = i ? this._98[i.id] : this[iF];
                this._98[t.id] = new QU(this, t, n) } }, defaultSize: 40, getRadius: function() {
            return this[Ml] }, getNodeSize: function(t) {
            if (this[r_]._7x._n5w) {
                var i = this[r_][a_](t);
                if (i) return (i._fo.width + i._fo[Na]) / 2 }
            return this.defaultSize }, getGap: function() {
            return this.gap }, _2p: function(t, i, n) {
            return this[W$](t, i, n) + this[GF](t, i, n) } };
    var ZU = function(t) {
            var i, n = this._fm.length,
                e = 0,
                s = 0;
            if (l(this._fm, function(t) {
                    var n = t._fc();
                    1 > n && (n = 1), s += n, n > e && (e = n, i = t) }, this), n > 1) {
                var h = 0,
                    r = {},
                    a = s / n / 3;
                s = 0, l(this._fm, function(t) {
                    var i = t._mf;
                    a > i && (i = a), r[t.id] = i, s += i }, this);
                var o = kH / s;
                l(this._fm, function(i, n) {
                    var e = r[i.id],
                        s = e * o;
                    0 === n && (h = t ? -s / 2 : -s), i._kq = h + s / 2, i._ks = s, h += s }, this) }
            return [e, i._ks] },
        JU = function(t) {
            var i = this._8q,
                n = 2 * Math.PI / i,
                e = 0,
                s = t ? 0 : i > 1 ? -n / 2 : 0;
            return l(this._fm, function(t) { t._kq = s % kH, s += n, t._ks = n;
                var i = t._fc();
                i > e && (e = i) }, this), [e, n] },
        QU = function(t, i, n) { this[zF] = t, i && (this._mg = i, this.id = i.id), n && (n._fh(this), n._me = !1, this._ko = n._ko + 1) },
        kH = 2 * Math.PI;
    QU[nr] = { _ks: 0, _kq: 0, _k1: 0, _f3: 0, _de: 0, _ko: 0, _me: !0, _mf: 0, _fp: 0, _fm: null, _mg: null, _fh: function(t) { this._fm || (this._fm = []), this._fm[Jh](t), t[Dc] = this }, _h2: function(t) {
            if (this._kq = (this._kq + t) % kH, this._fm) {
                var i = this._fm[Yh];
                if (1 == i) return void this._fm[0]._h2(this._kq);
                t = this._kq + Math.PI, l(this._fm, function(i) { i._h2(t) }, this) } }, _8q: 0, _6t: function(t) {
            return this._mg && (this._fp = this[zF]._2p(this._mg, this._ko, this._me) / 2), this._fm ? (this._fp, this._8q = this._fm[Yh], this._8q <= 2 || this[zF][qF] == VU ? JU[zh](this, t) : ZU.call(this, t)) : null }, _fc: function(t) {
            var i = this._6t(t);
            if (!i) return this._mf = this._fp;
            var n = i[0],
                e = i[1],
                s = this[zF].getRadius(this._mg, this._ko);
            if (s < this._fp && (s = this._fp), this._f3 = s, this._fp + n > s && (s = this._fp + n), n && this._8q > 1 && e < Math.PI) {
                var h = n / Math.sin(e / 2);
                h > s && (s = h) }
            return this._k1 = s, this._mf = s + n, this._mg && this._fm && this[zF][YF] == KU && l(this._fm, function(t) {
                var i = t._mf;
                1 == t._8q && (i /= 2);
                var n = this._fp + i,
                    e = t._ks;
                if (e && e < Math.PI) {
                    var s = Math.sin(e / 2),
                        h = i / s;
                    h > i && (i = h) }
                n > i && (i = n), t._de = i }, this), (!this._mg || t) && this._h2(0), this._mf }, _5j: function(t, i, n, e, s) {
            if (this._mg && (e[this._mg.id] = { x: t, y: i, node: this._mg }, s && s[al](t - this._fp / 2, i - this._fp / 2, this._fp, this._fp)), this._fm) {
                if (!this._mg && 1 == this._fm.length) return void this._fm[0]._5j(t, i, n, e, s);
                n = n || 0;
                var h = this._k1,
                    r = this._f3;
                l(this._fm, function(a) {
                    var o = h;
                    a._de && (o = Math.max(r, a._de));
                    var f = a._kq + n,
                        c = t + o * Math.cos(f),
                        u = i + o * Math.sin(f);
                    a._5j(c, u, n, e, s) }, this) } } }, p(UU, kU);
    var tW = function() { w(this, tW, arguments) };
    p(tW, Nh);
    var iW = function(t, i) { this.node1 = t, this[HF] = i, t == i ? (this[BT] = !0, this._kn = t._km) : this._kn = new uz, this._8o = [], this._fg = cz[UF] };
    cz[UF] = !0, iW.prototype = { node1: null, node2: null, _kn: null, _fg: cz[UF], _8o: null, _fi: null, agentEdge: null, _n69: function(t, i, n) { this._kn.forEach(function(e) {
                return n && e[Xc] != n && e[$c] != n ? void 0 : t[zh](i, e) }) }, _5b: 0, _59: 0, _i6: function(t, i) {
            return this._kn.add(t) === !1 ? !1 : (i == this[WF] ? this._5b++ : this._59++, this._n5w ? void this._12(t) : void(this[Tu] = !0)) }, _dd: function(t, i) {
            return this._kn.remove(t) === !1 ? !1 : (i == this[WF] ? this._5b-- : this._59--, this._12(t), void this._kn[Rc](function(t) { t[ek] = !0, t[KT] = !0 }, this)) }, _12: function(t) { this._n7lBindableFlag = !0, this._5x = !0, t._edgeBundleInvalidateFlag = !0, t.__3u = !0 }, _n7l: function() { this._5x || (this._5x = !0, this._kn[Rc](function(t) { t[ek] = !0 })) }, isEmpty: function() {
            return this._kn.isEmpty() }, isPositiveOrder: function(t) {
            return this.node1 == t.$from || this[WF] == t.fromAgent }, canBind: function(t) {
            return t && this._5x && this._fu(t), this._kn[Yh] > 1 && this._8o[Yh] > 1 }, _i3: function(t) {
            return this._8o.indexOf(t) }, getYOffset: function(t) {
            return this._fi[t.id] }, _41: function(t) {
            if (!this[aL]()) return void(this._fi = {});
            var i = {},
                n = this._8o[Yh];
            if (!(2 > n)) {
                var e = 0,
                    s = this._8o[0];
                i[s.id] = 0;
                for (var h = 1; n > h; h++) { s = this._8o[h];
                    var r = t[Cu](s, $H[IS]) || tU[$H[IS]];
                    e += r, i[s.id] = e }
                if (!this[BT])
                    for (var a = e / 2, h = 0; n > h; h++) s = this._8o[h], i[s.id] -= a;
                this._fi = i } }, _n6f: function(t) {
            return this._fg == t ? !1 : (this._fg = t, this[zw](), !0) }, reverseExpanded: function() {
            return this._n6f(!this._fg) }, _17: function() { this[VF] = !1, this._8o.length = 0;
            var t;
            this._kn[Rc](function(i) {
                if (i[$T]()) {
                    if (!this[fL](i)) return t || (t = []), void t.push(i);
                    this._8o[Jh](i) } }, this), t && (this._8o = t.concat(this._8o)) }, _ei: function(t) {
            return t == this[XF] || !this[aL]() || this._fg }, _fu: function(t) { this._5x = !1, this._kn[Rc](function(t) { t[ek] = !1 }), this[VF] && this._17();
            var i = this._fg,
                n = this.canBind(),
                e = !n || i;
            l(this._8o, function(t) { t._$q = !0, t._hoInBundle = e, e && (t[KT] = !0) }, this), e ? this._9f(null, t) : (this._9f(this._8o[0], t), this[XF]._hoInBundle = !0, this[XF].__3u = !0), e && this._41(t) }, _9f: function(t, i) {
            if (t != this[XF]) {
                var n = this.agentEdge;
                return this.agentEdge = t, i && i._3w(new jz(this, XF, t, n)), !0 } } }, Z(iW[nr], { bindableEdges: { get: function() {
                return this._8o } }, edges: { get: function() {
                return this._kn._jk } }, length: { get: function() {
                return this._kn ? this._kn[Yh] : 1 } }, expanded: { get: function() {
                return this._fg }, set: function(t) {
                return this._fg == t ? !1 : (this._fg = t, void this[zw]()) } } });
    var nW = function() {
            function t(t, i) { this[w$] = t, this[Sm] = i }

            function i() { this[KF] = [], this[ZF] = 0 }
            var n = -1e6,
                e = .8;
            i.prototype = { isEmpty: function() {
                    return 0 === this[ZF] }, push: function(i, n) {
                    var e = this[KF][this[ZF]];
                    e ? (e[w$] = i, e[Sm] = n) : this.stack[this[ZF]] = new t(i, n), ++this[ZF] }, pop: function() {
                    return this[ZF] > 0 ? this[KF][--this[ZF]] : void 0 }, reset: function() { this[ZF] = 0 } };
            var s = [],
                h = new i,
                r = function() { this.body = null, this[JF] = [], this[QF] = 0, this[tG] = 0, this[iG] = 0, this[Ho] = 0, this.top = 0, this[Ur] = 0, this.right = 0, this[nG] = !1 },
                a = [],
                o = 0,
                f = function() {
                    var t;
                    return a[o] ? (t = a[o], t[JF][0] = null, t.quads[1] = null, t[JF][2] = null, t.quads[3] = null, t[Sm] = null, t[QF] = t[tG] = t[iG] = 0, t[Ho] = t[Wr] = t.top = t.bottom = 0, t.isInternal = !1) : (t = new r, a[o] = t), ++o, t },
                c = f(),
                u = function(t, i) {
                    var n = Math.abs(t.x - i.x),
                        e = Math.abs(t.y - i.y);
                    return 1e-8 > n && 1e-8 > e },
                _ = function(t) {
                    for (h[eG](), h.push(c, t); !h[Wf]();) {
                        var i = h.pop(),
                            n = i[w$],
                            e = i[Sm];
                        if (n.isInternal) {
                            var s = e.x,
                                r = e.y;
                            n[QF] = n[QF] + e.mass, n[tG] = n[tG] + e[QF] * s, n.massY = n[iG] + e.mass * r;
                            var a = 0,
                                o = n[Ho],
                                _ = (n.right + o) / 2,
                                d = n.top,
                                l = (n.bottom + d) / 2;
                            if (s > _) { a += 1;
                                var v = o;
                                o = _, _ += _ - v }
                            if (r > l) { a += 2;
                                var b = d;
                                d = l, l += l - b }
                            var y = n[JF][a];
                            y || (y = f(), y[Ho] = o, y.top = d, y[Wr] = _, y[Ur] = l, n.quads[a] = y), h.push(y, e) } else if (n[Sm]) {
                            var g = n.body;
                            if (n[Sm] = null, n[nG] = !0, u(g, e)) {
                                if (n[Wr] - n[Ho] < 1e-8) return;
                                do {
                                    var m = Math.random(),
                                        x = (n.right - n[Ho]) * m,
                                        E = (n[Ur] - n.top) * m;
                                    g.x = n.left + x, g.y = n.top + E } while (u(g, e)) }
                            h[Jh](n, g), h[Jh](n, e) } else n[Sm] = e } },
                d = function(t) {
                    var i, h, r, a, o = s,
                        f = 1,
                        u = 0,
                        _ = 1;
                    for (o[0] = c; f;) {
                        var d = o[u],
                            l = d[Sm];
                        f -= 1, u += 1, l && l !== t ? (h = l.x - t.x, r = l.y - t.y, a = Math[_o](h * h + r * r), 0 === a && (h = (Math.random() - .5) / 50, r = (Math[jr]() - .5) / 50, a = Math[_o](h * h + r * r)), i = n * l.mass * t[QF] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (h = d[tG] / d[QF] - t.x, r = d[iG] / d[QF] - t.y, a = Math.sqrt(h * h + r * r), 0 === a && (h = (Math[jr]() - .5) / 50, r = (Math[jr]() - .5) / 50, a = Math.sqrt(h * h + r * r)), (d.right - d.left) / a < e ? (i = n * d[QF] * t[QF] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (d[JF][0] && (o[_] = d[JF][0], f += 1, _ += 1), d[JF][1] && (o[_] = d[JF][1], f += 1, _ += 1), d[JF][2] && (o[_] = d[JF][2], f += 1, _ += 1), d.quads[3] && (o[_] = d[JF][3], f += 1, _ += 1))) } },
                l = function(t, i) { n = i;
                    var e, s = Number[ol],
                        h = Number[ol],
                        r = Number.MIN_VALUE,
                        a = Number[sG],
                        u = t,
                        d = u[Yh];
                    for (e = d; e--;) {
                        var l = u[e].x,
                            v = u[e].y;
                        s > l && (s = l), l > r && (r = l), h > v && (h = v), v > a && (a = v) }
                    var b = r - s,
                        y = a - h;
                    for (b > y ? a = h + b : r = s + y, o = 0, c = f(), c[Ho] = s, c[Wr] = r, c.top = h, c[Ur] = a, e = d; e--;) _(u[e], c) };
            return { init: l, update: d } },
        eW = function(t) { t.fx -= t.x * this[hG], t.fy -= t.y * this[hG] },
        sW = function(t) {
            if (0 != t.k) {
                var i = this[rG],
                    n = t[Gc],
                    e = t.to,
                    s = e.x - n.x,
                    h = e.y - n.y,
                    r = s * s + h * h,
                    a = Math[_o](r) || .1,
                    o = (a - i) * t.k * this[aG];
                o /= a;
                var f = o * s,
                    c = o * h;
                e.fx -= f, e.fy -= c, n.fx += f, n.fy += c } };
    Nh[nr] = { appendNodeInfo: function(t, i) { i[QF] = t[oG] || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0 }, appendEdgeInfo: function(t, i) { i.k = t[fG] || 1 }, setMass: function(t, i) { t[oG] = i, this[gF] && this.layoutDatas[MF] && (t = this[gF].nodes[t.id], t && (t[QF] = i)) }, setElasticity: function(t, i) { t[fG] = i, this[gF] && this[gF].edges && (t = this[gF][Ok][t.id], t && (t.k = i)) }, _n7y: 50, _iv: .5, timeStep: .15, repulsion: 50, attractive: .1, elastic: 3, _mk: 1e3, _k7: function(t) {
            return this._mk + .3 * (t - this._mk) }, _mj: function(t, i) {
            var n = (Date.now(), this.layoutDatas[MF]);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math[jr]() - .5, s.y += Math[jr]() - .5), eW[zh](this, s) }
            var h = this.layoutDatas[cG];
            if (h)
                for (var e in h) {
                    var r = h[e],
                        a = r.children,
                        o = 0,
                        f = 0;
                    a[Rc](function(t) { o += t.x, f += t.y }), o /= a[Yh], f /= a[Yh];
                    var c = 10 * this.attractive;
                    a[Rc](function(t) { t.fx -= (t.x - o) * c, t.fy -= (t.y - f) * c }) }
            var u = this[uG];
            u || (u = this[uG] = nW()), u[W_](this.layoutDatas[_G], -this[dG] * this[dG] * this[dG]);
            for (var e in n) u[lG](n[e]);
            if (this[aG]) {
                var _ = this.layoutDatas[Ok];
                for (var e in _) sW[zh](this, _[e]) }
            return this._mm(t) }, _mm: function(t) {
            var i = this[gF][vG],
                n = (this.layoutDatas.currentEnergy, this[gF][MF]),
                t = this[bG],
                e = 0,
                s = this._iv;
            for (var h in n) {
                var r = n[h],
                    a = r.fx / r.mass,
                    o = r.fy / r[QF],
                    f = r.vx += a * t,
                    c = r.vy += o * t;
                r.x += f * t, r.y += c * t, i > e && (e += 2 * (f * f + c * c)), r.fx = 0, r.fy = 0, r.vx *= s, r.vy *= s }
            return this[gF][yG] = e, e >= i } }, p(Nh, Dh), kq[gG] = Nh;
    var hW = function(t) { this[p$] = t };
    hW.prototype = { oldLocations: null, _f5: null, duration: 700, animationType: Eq.easeOutStrong, _5z: function(t) {
            if (this._f5 = t, this.oldLocations = {}, t)
                for (var i in t) {
                    var n = t[i],
                        e = n[w$];
                    this[mG][i] = { x: e.x, y: e.y } } }, setLocation: function(t, i, n) { t[yP](i, n) }, forEach: function(t, i) {
            for (var n in this[p$]) {
                var e = this[mG][n],
                    s = this[p$][n];
                t.call(i, e, s) } }, _k3: function(t) { this[Rc](function(i, n) {
                var e = n[w$],
                    s = i.x + (n.x - i.x) * t,
                    h = i.y + (n.y - i.y) * t;
                this[yP](e, s, h) }, this) }, stop: function() { this[xG] && this._n5nimate._m2() }, start: function(t) { this._n5nimate ? (this[xG]._m2(), this._n5nimate._if = this[BR], this._n5nimate[EG] = this[FR], this[xG]._onfinish = this[pG]) : this[xG] = new wq(this._k3, this, this[BR], this[FR]), this._n5nimate._kv(t) } }, Z(hW.prototype, { locations: { get: function() {
                return this._f5 }, set: function(t) { this._f5 != t && this._5z(t) } } });
    var rW = function(t) {
            var i, n = new uz;
            return t[Rc](function(t) { t instanceof LH && (t[wG]() ? !i && t.hasOutEdge() && (i = t) : n.add(t)) }), n.isEmpty() && i && n.add(i), n },
        aW = function(t, i, n, e, s, h) {
            if (i instanceof Fz) return t(i, n, e, s, h), i;
            if (i instanceof iU) {
                var r = new uz;
                i[NL].forEach(function(t) {
                    return i[K_](t) ? t._ia() && t._fg && t.hasChildren() ? void(t.$location && (t[Bk][rM] = !1)) : void r.add(t) : void 0 }), i = r }
            var i = rW(i, e);
            return l(i, function(i) { t(i, n, e, s, h) }), i },
        oW = function(t, i, n, e, s) {
            return aW(cW, t, i, n, e, s) },
        fW = function(t, i, n, e, s) {
            return aW(uW, t, i, n, e, s) };
    hs.prototype.forEachByTopoDepthFirstSearch = function(t, i, n, e) { oW(this, t, i, n, e) }, hs[nr][TG] = function(t, i, n, e) { t instanceof Object && 1 == arguments[Yh] && (i = t[Vl]), fW(this, t, i, n, e) }, kq.forEachByTopoDepthFirstSearch = oW, kq.forEachByTopoBreadthFirstSearch = fW;
    var cW = function(t, i, n, e, s) {
            function h(t, i, n, e, s, r, a, o) { t[Md] = r, e || i[zh](n, t, o, a), Bh(t, function(o) { h(o, i, n, e, s, r, a + 1, t) }, o, s, r, n), e && i[zh](n, t, o, a) }
            h(t, i, n, e, s, {}, 0) },
        uW = function(t, i, n, e, s) {
            function h(t, i, n, e, s, r, a) {
                var o, f = t[Yh];
                t[Rc](function(t, h) {
                    var c = t.v;
                    c._marker = r, e || i.call(n, c, t[kG], a, h, f), Bh(c, function(t) { o || (o = []), t[Md] = r, o[Jh]({ v: t, _from: c }) }, c, s, r, n) }), o && h(o, i, n, e, s, r, a + 1), e && t[Rc](function(t, e) { i.call(n, t.v, t._from, a, e, f) }) }
            h([{ v: t }], i, n, e, s, {}, 0) };
    kq[MG] = X, kq.log = ti, kq[wm] = ni, kq.trace = ii, kq.isIE = KG, kq.isOpera = XG, kq.isWebkit = QG, kq[OG] = tz, kq.isFirefox = iz, kq[IG] = ez, kq[SG] = nz, kq[jG] = sz, kq[AG] = tU, kq.Defaults = cz, kq[SP] = $H, kq.Consts = Mq, kq.Graphs = _Y, kq[CG] = iU, kq[LG] = NH, kq[PG] = KH, kq[RG] = ls, kq[dD] = ds, kq.LabelUI = JH, kq[DG] = ZH, kq[NG] = RH, kq[BG] = fY, kq.Gradient = Uq, kq[$G] = Ah, kq.Element = AH, kq[LL] = LH, kq[AP] = CH, kq.GraphModel = hs, kq[FG] = iW, kq.TreeLayouter = YU, kq[_r] = GG;
    var _W = zG;
    return kq.version = qG, kq[Gp] = YG, kq[zp] = "Copyright Â© 2017 Qunee.com", kq.css = li, kq[HG] = nU, ti = function() {}, kq.publishDate = UG, kq
}(window, document);
