/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $06bdd16cbb4a41b3$var$t = globalThis, $06bdd16cbb4a41b3$export$b4d10f6001c083c2 = $06bdd16cbb4a41b3$var$t.ShadowRoot && (void 0 === $06bdd16cbb4a41b3$var$t.ShadyCSS || $06bdd16cbb4a41b3$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $06bdd16cbb4a41b3$var$s = Symbol(), $06bdd16cbb4a41b3$var$o = new WeakMap;
class $06bdd16cbb4a41b3$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $06bdd16cbb4a41b3$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($06bdd16cbb4a41b3$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $06bdd16cbb4a41b3$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $06bdd16cbb4a41b3$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $06bdd16cbb4a41b3$export$8d80f9cac07cdb3 = (t)=>new $06bdd16cbb4a41b3$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $06bdd16cbb4a41b3$var$s), $06bdd16cbb4a41b3$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $06bdd16cbb4a41b3$export$505d1e8739bad805(o, t, $06bdd16cbb4a41b3$var$s);
}, $06bdd16cbb4a41b3$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($06bdd16cbb4a41b3$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $06bdd16cbb4a41b3$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $06bdd16cbb4a41b3$export$ee69dfd951e24778 = $06bdd16cbb4a41b3$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $06bdd16cbb4a41b3$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $375b48187e686ca2$var$i, defineProperty: $375b48187e686ca2$var$e, getOwnPropertyDescriptor: $375b48187e686ca2$var$h, getOwnPropertyNames: $375b48187e686ca2$var$r, getOwnPropertySymbols: $375b48187e686ca2$var$o, getPrototypeOf: $375b48187e686ca2$var$n } = Object, $375b48187e686ca2$var$a = globalThis, $375b48187e686ca2$var$c = $375b48187e686ca2$var$a.trustedTypes, $375b48187e686ca2$var$l = $375b48187e686ca2$var$c ? $375b48187e686ca2$var$c.emptyScript : "", $375b48187e686ca2$var$p = $375b48187e686ca2$var$a.reactiveElementPolyfillSupport, $375b48187e686ca2$var$d = (t, s)=>t, $375b48187e686ca2$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $375b48187e686ca2$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $375b48187e686ca2$export$53a6892c50694894 = (t, s)=>!$375b48187e686ca2$var$i(t, s), $375b48187e686ca2$var$b = {
    attribute: !0,
    type: String,
    converter: $375b48187e686ca2$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $375b48187e686ca2$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $375b48187e686ca2$var$a.litPropertyMetadata ??= new WeakMap;
class $375b48187e686ca2$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $375b48187e686ca2$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $375b48187e686ca2$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $375b48187e686ca2$var$h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $375b48187e686ca2$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($375b48187e686ca2$var$d("elementProperties"))) return;
        const t = $375b48187e686ca2$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($375b48187e686ca2$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($375b48187e686ca2$var$d("properties"))) {
            const t = this.properties, s = [
                ...$375b48187e686ca2$var$r(t),
                ...$375b48187e686ca2$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $06bdd16cbb4a41b3$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $06bdd16cbb4a41b3$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $06bdd16cbb4a41b3$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $375b48187e686ca2$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $375b48187e686ca2$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i, e = !1, h) {
        if (void 0 !== t) {
            const r = this.constructor;
            if (!1 === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? $375b48187e686ca2$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$375b48187e686ca2$export$c7c07a37856565d.elementStyles = [], $375b48187e686ca2$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $375b48187e686ca2$export$c7c07a37856565d[$375b48187e686ca2$var$d("elementProperties")] = new Map, $375b48187e686ca2$export$c7c07a37856565d[$375b48187e686ca2$var$d("finalized")] = new Map, $375b48187e686ca2$var$p?.({
    ReactiveElement: $375b48187e686ca2$export$c7c07a37856565d
}), ($375b48187e686ca2$var$a.reactiveElementVersions ??= []).push("2.1.2");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $d33ef1320595a3ac$var$t = globalThis, $d33ef1320595a3ac$var$i = (t)=>t, $d33ef1320595a3ac$var$s = $d33ef1320595a3ac$var$t.trustedTypes, $d33ef1320595a3ac$var$e = $d33ef1320595a3ac$var$s ? $d33ef1320595a3ac$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $d33ef1320595a3ac$var$h = "$lit$", $d33ef1320595a3ac$var$o = `lit$${Math.random().toFixed(9).slice(2)}$`, $d33ef1320595a3ac$var$n = "?" + $d33ef1320595a3ac$var$o, $d33ef1320595a3ac$var$r = `<${$d33ef1320595a3ac$var$n}>`, $d33ef1320595a3ac$var$l = document, $d33ef1320595a3ac$var$c = ()=>$d33ef1320595a3ac$var$l.createComment(""), $d33ef1320595a3ac$var$a = (t)=>null === t || "object" != typeof t && "function" != typeof t, $d33ef1320595a3ac$var$u = Array.isArray, $d33ef1320595a3ac$var$d = (t)=>$d33ef1320595a3ac$var$u(t) || "function" == typeof t?.[Symbol.iterator], $d33ef1320595a3ac$var$f = "[ \t\n\f\r]", $d33ef1320595a3ac$var$v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $d33ef1320595a3ac$var$_ = /-->/g, $d33ef1320595a3ac$var$m = />/g, $d33ef1320595a3ac$var$p = RegExp(`>|${$d33ef1320595a3ac$var$f}(?:([^\\s"'>=/]+)(${$d33ef1320595a3ac$var$f}*=${$d33ef1320595a3ac$var$f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $d33ef1320595a3ac$var$g = /'/g, $d33ef1320595a3ac$var$$ = /"/g, $d33ef1320595a3ac$var$y = /^(?:script|style|textarea|title)$/i, $d33ef1320595a3ac$var$x = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $d33ef1320595a3ac$export$c0bb0b647f701bb5 = $d33ef1320595a3ac$var$x(1), $d33ef1320595a3ac$export$7ed1367e7fa1ad68 = $d33ef1320595a3ac$var$x(2), $d33ef1320595a3ac$export$47d5b44d225be5b4 = $d33ef1320595a3ac$var$x(3), $d33ef1320595a3ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $d33ef1320595a3ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $d33ef1320595a3ac$var$C = new WeakMap, $d33ef1320595a3ac$var$P = $d33ef1320595a3ac$var$l.createTreeWalker($d33ef1320595a3ac$var$l, 129);
function $d33ef1320595a3ac$var$V(t, i) {
    if (!$d33ef1320595a3ac$var$u(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $d33ef1320595a3ac$var$e ? $d33ef1320595a3ac$var$e.createHTML(i) : i;
}
const $d33ef1320595a3ac$var$N = (t, i)=>{
    const s = t.length - 1, e = [];
    let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $d33ef1320595a3ac$var$v;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, f = 0;
        for(; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);)f = c.lastIndex, c === $d33ef1320595a3ac$var$v ? "!--" === u[1] ? c = $d33ef1320595a3ac$var$_ : void 0 !== u[1] ? c = $d33ef1320595a3ac$var$m : void 0 !== u[2] ? ($d33ef1320595a3ac$var$y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = $d33ef1320595a3ac$var$p) : void 0 !== u[3] && (c = $d33ef1320595a3ac$var$p) : c === $d33ef1320595a3ac$var$p ? ">" === u[0] ? (c = n ?? $d33ef1320595a3ac$var$v, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $d33ef1320595a3ac$var$p : '"' === u[3] ? $d33ef1320595a3ac$var$$ : $d33ef1320595a3ac$var$g) : c === $d33ef1320595a3ac$var$$ || c === $d33ef1320595a3ac$var$g ? c = $d33ef1320595a3ac$var$p : c === $d33ef1320595a3ac$var$_ || c === $d33ef1320595a3ac$var$m ? c = $d33ef1320595a3ac$var$v : (c = $d33ef1320595a3ac$var$p, n = void 0);
        const x = c === $d33ef1320595a3ac$var$p && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $d33ef1320595a3ac$var$v ? s + $d33ef1320595a3ac$var$r : d >= 0 ? (e.push(a), s.slice(0, d) + $d33ef1320595a3ac$var$h + s.slice(d) + $d33ef1320595a3ac$var$o + x) : s + $d33ef1320595a3ac$var$o + (-2 === d ? i : x);
    }
    return [
        $d33ef1320595a3ac$var$V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        e
    ];
};
class $d33ef1320595a3ac$var$S {
    constructor({ strings: t, _$litType$: i }, e){
        let r;
        this.parts = [];
        let l = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $d33ef1320595a3ac$var$N(t, i);
        if (this.el = $d33ef1320595a3ac$var$S.createElement(f, e), $d33ef1320595a3ac$var$P.currentNode = this.el.content, 2 === i || 3 === i) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $d33ef1320595a3ac$var$P.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($d33ef1320595a3ac$var$h)) {
                    const i = v[a++], s = r.getAttribute(t).split($d33ef1320595a3ac$var$o), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: l,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $d33ef1320595a3ac$var$I : "?" === e[1] ? $d33ef1320595a3ac$var$L : "@" === e[1] ? $d33ef1320595a3ac$var$z : $d33ef1320595a3ac$var$H
                    }), r.removeAttribute(t);
                } else t.startsWith($d33ef1320595a3ac$var$o) && (d.push({
                    type: 6,
                    index: l
                }), r.removeAttribute(t));
                if ($d33ef1320595a3ac$var$y.test(r.tagName)) {
                    const t = r.textContent.split($d33ef1320595a3ac$var$o), i = t.length - 1;
                    if (i > 0) {
                        r.textContent = $d33ef1320595a3ac$var$s ? $d33ef1320595a3ac$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)r.append(t[s], $d33ef1320595a3ac$var$c()), $d33ef1320595a3ac$var$P.nextNode(), d.push({
                            type: 2,
                            index: ++l
                        });
                        r.append(t[i], $d33ef1320595a3ac$var$c());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $d33ef1320595a3ac$var$n) d.push({
                    type: 2,
                    index: l
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($d33ef1320595a3ac$var$o, t + 1));)d.push({
                        type: 7,
                        index: l
                    }), t += $d33ef1320595a3ac$var$o.length - 1;
                }
            }
            l++;
        }
    }
    static createElement(t, i) {
        const s = $d33ef1320595a3ac$var$l.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $d33ef1320595a3ac$var$M(t, i, s = t, e) {
    if (i === $d33ef1320595a3ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $d33ef1320595a3ac$var$a(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $d33ef1320595a3ac$var$M(t, h._$AS(t, i.values), h, e)), i;
}
class $d33ef1320595a3ac$var$R {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $d33ef1320595a3ac$var$l).importNode(i, !0);
        $d33ef1320595a3ac$var$P.currentNode = e;
        let h = $d33ef1320595a3ac$var$P.nextNode(), o = 0, n = 0, r = s[0];
        for(; void 0 !== r;){
            if (o === r.index) {
                let i;
                2 === r.type ? i = new $d33ef1320595a3ac$var$k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new $d33ef1320595a3ac$var$Z(h, this, t)), this._$AV.push(i), r = s[++n];
            }
            o !== r?.index && (h = $d33ef1320595a3ac$var$P.nextNode(), o++);
        }
        return $d33ef1320595a3ac$var$P.currentNode = $d33ef1320595a3ac$var$l, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $d33ef1320595a3ac$var$k {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $d33ef1320595a3ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $d33ef1320595a3ac$var$M(this, t, i), $d33ef1320595a3ac$var$a(t) ? t === $d33ef1320595a3ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $d33ef1320595a3ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $d33ef1320595a3ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $d33ef1320595a3ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $d33ef1320595a3ac$var$d(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $d33ef1320595a3ac$export$45b790e32b2810ee && $d33ef1320595a3ac$var$a(this._$AH) ? this._$AA.nextSibling.data = t : this.T($d33ef1320595a3ac$var$l.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $d33ef1320595a3ac$var$S.createElement($d33ef1320595a3ac$var$V(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $d33ef1320595a3ac$var$R(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $d33ef1320595a3ac$var$C.get(t.strings);
        return void 0 === i && $d33ef1320595a3ac$var$C.set(t.strings, i = new $d33ef1320595a3ac$var$S(t)), i;
    }
    k(t) {
        $d33ef1320595a3ac$var$u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $d33ef1320595a3ac$var$k(this.O($d33ef1320595a3ac$var$c()), this.O($d33ef1320595a3ac$var$c()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, s) {
        for(this._$AP?.(!1, !0, s); t !== this._$AB;){
            const s = $d33ef1320595a3ac$var$i(t).nextSibling;
            $d33ef1320595a3ac$var$i(t).remove(), t = s;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $d33ef1320595a3ac$var$H {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $d33ef1320595a3ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $d33ef1320595a3ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $d33ef1320595a3ac$var$M(this, t, i, 0), o = !$d33ef1320595a3ac$var$a(t) || t !== this._$AH && t !== $d33ef1320595a3ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $d33ef1320595a3ac$var$M(this, e[s + n], i, n), r === $d33ef1320595a3ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$d33ef1320595a3ac$var$a(r) || r !== this._$AH[n], r === $d33ef1320595a3ac$export$45b790e32b2810ee ? t = $d33ef1320595a3ac$export$45b790e32b2810ee : t !== $d33ef1320595a3ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $d33ef1320595a3ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $d33ef1320595a3ac$var$I extends $d33ef1320595a3ac$var$H {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $d33ef1320595a3ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $d33ef1320595a3ac$var$L extends $d33ef1320595a3ac$var$H {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $d33ef1320595a3ac$export$45b790e32b2810ee);
    }
}
class $d33ef1320595a3ac$var$z extends $d33ef1320595a3ac$var$H {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $d33ef1320595a3ac$var$M(this, t, i, 0) ?? $d33ef1320595a3ac$export$45b790e32b2810ee) === $d33ef1320595a3ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $d33ef1320595a3ac$export$45b790e32b2810ee && s !== $d33ef1320595a3ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $d33ef1320595a3ac$export$45b790e32b2810ee && (s === $d33ef1320595a3ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $d33ef1320595a3ac$var$Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $d33ef1320595a3ac$var$M(this, t);
    }
}
const $d33ef1320595a3ac$export$8613d1ca9052b22e = {
    M: $d33ef1320595a3ac$var$h,
    P: $d33ef1320595a3ac$var$o,
    A: $d33ef1320595a3ac$var$n,
    C: 1,
    L: $d33ef1320595a3ac$var$N,
    R: $d33ef1320595a3ac$var$R,
    D: $d33ef1320595a3ac$var$d,
    V: $d33ef1320595a3ac$var$M,
    I: $d33ef1320595a3ac$var$k,
    H: $d33ef1320595a3ac$var$H,
    N: $d33ef1320595a3ac$var$L,
    U: $d33ef1320595a3ac$var$z,
    B: $d33ef1320595a3ac$var$I,
    F: $d33ef1320595a3ac$var$Z
}, $d33ef1320595a3ac$var$B = $d33ef1320595a3ac$var$t.litHtmlPolyfillSupport;
$d33ef1320595a3ac$var$B?.($d33ef1320595a3ac$var$S, $d33ef1320595a3ac$var$k), ($d33ef1320595a3ac$var$t.litHtmlVersions ??= []).push("3.3.2");
const $d33ef1320595a3ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $d33ef1320595a3ac$var$k(i.insertBefore($d33ef1320595a3ac$var$c(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $528e4332d1e3099e$var$s = globalThis;
class $528e4332d1e3099e$export$3f2f9f5909897157 extends (0, $375b48187e686ca2$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $d33ef1320595a3ac$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $d33ef1320595a3ac$export$9c068ae9cc5db4e8;
    }
}
$528e4332d1e3099e$export$3f2f9f5909897157._$litElement$ = !0, $528e4332d1e3099e$export$3f2f9f5909897157["finalized"] = !0, $528e4332d1e3099e$var$s.litElementHydrateSupport?.({
    LitElement: $528e4332d1e3099e$export$3f2f9f5909897157
});
const $528e4332d1e3099e$var$o = $528e4332d1e3099e$var$s.litElementPolyfillSupport;
$528e4332d1e3099e$var$o?.({
    LitElement: $528e4332d1e3099e$export$3f2f9f5909897157
});
const $528e4332d1e3099e$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($528e4332d1e3099e$var$s.litElementVersions ??= []).push("4.2.2");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $56239b0c931b817c$export$6acf61af03e62db = !1;





const $31ddf566cad37533$export$9dd6ff9ea0189349 = (0, $06bdd16cbb4a41b3$export$dbf350e5966cf602)`
  .bus-card {
    margin-bottom: 10px;
  }

  .bus-card .bus-card-alert {
    color: #ffb752ff;
  }

  .line-number {
    background-color: #ff793f;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bus-card-head {
    display: flex;
    gap: 10px;
  }

  .live-time {
    color: #33d9b2;
  }

  .bus-card.changed .live-time {
    color: #ff5252;
  }

  .bus-card.canceled .live-time {
    color: #ff5252;
    text-decoration: line-through;
  }

  .bus-card-head svg {
    stroke: #33d9b2;
  }

  .bus-card.changed .bus-card-head svg,
  .bus-card.canceled .bus-card-head svg {
    stroke: #ff5252;
  }

  .bus-card-details {
    flex: 1;
  }

  .bus-time {
    font-weight: bold;
  }

  .bus-card.changed .bus-time,
  .bus-card.canceled .bus-time {
    font-weight: normal;
    text-decoration: line-through;
  }

  .bus-time-changed {
    font-weight: bold;
    color: #ff5252;
    display: none;
  }

  .bus-card.changed .bus-time-changed {
    display: inline-block;
  }

  .bus-time-canceled {
    font-weight: bold;
    color: #ff5252;
    display: none;
  }

  .bus-card.canceled .bus-time-canceled {
    display: inline-block;
  }

  .stop-text-second {
    font-style: italic;
  }
`;
const $31ddf566cad37533$export$c89915e2373763c7 = (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M12 6V12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16.24 16.24L12 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`;


class $2388023d729b4380$export$5365bfeef88eca6f extends (0, $528e4332d1e3099e$export$3f2f9f5909897157) {
    static styles = (0, $31ddf566cad37533$export$9dd6ff9ea0189349);
    static get properties() {
        return {
            stops: {
                type: Array,
                state: true
            },
            entity: {
                type: String
            },
            amount: {
                type: String
            },
            _hass: {
                type: Object
            },
            valid_entity: {
                type: Boolean,
                state: true
            },
            stop_name: {
                type: String,
                state: true
            },
            available: {
                type: Boolean,
                state: true
            },
            lastUpdated: {
                type: String,
                state: true
            }
        };
    }
    constructor(){
        super();
        this.stops = [];
        this.available = false;
        this.valid_entity = false;
    }
    static getStubConfig(hass) {
        const firstSensor = Object.keys(hass.entities).find((entityId)=>entityId.startsWith("sensor.bus_stop_"));
        return {
            entity: firstSensor || "",
            amount: 8
        };
    }
    setConfig(config) {
        this.entity = config.entity;
        this.amount = config.amount < 1 ? 1 : config.amount > 10 ? 10 : config.amount;
    }
    set hass(hass) {
        this._hass = hass;
        // Validate entity
        this.valid_entity = this.entity.includes("bus_stop_");
        if (!this.valid_entity) return;
        // Get state attributes
        const state = hass["states"]?.[this.entity];
        if (!state) return;
        this.stop_name = state["attributes"]["friendly_name"];
        this.stops = state["attributes"]["stops"];
        this.lastUpdated = state["last_updated"];
        // Check availability
        this.available = state["state"] != "unavailable";
    }
    static getConfigForm() {
        return {
            schema: [
                {
                    name: "entity",
                    required: true,
                    selector: {
                        entity: {
                            domain: "sensor"
                        }
                    }
                },
                {
                    name: "amount",
                    required: true,
                    selector: {
                        text: {
                            type: "number"
                        }
                    }
                }
            ],
            computeHelper: (schema)=>{
                switch(schema.name){
                    case "entity":
                        return "Busstop";
                    case "amount":
                        return "Aantal opkomende stops weergeven (minimaal 1, maximaal 10)";
                }
                return undefined;
            }
        };
    }
    render() {
        if (!this.valid_entity) return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<div>Ongeldige entity. Zorg ervoor dat je een sensor met het juiste formaat gebruikt.</div>`;
        if (this.available === false) return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<div>Geen busgegevens beschikbaar. Controleer je internetverbinding.</div>`;
        if (!this.stop_name) return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<div>Halte naam niet beschikbaar. Controleer of de haltecode goed in je configuratie staat.</div>`;
        if (this.stop_name.endsWith("None")) return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<div>Deze halte is niet gevonden. Controleer of de haltecode goed in je configuratie staat.</div>`;
        if (!this.stops || this.stops.length === 0) return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<div>Er zijn momenteel geen aankomende bussen voor deze halte.</div>`;
        return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
      <div>
        ${this.stops.slice(0, this.amount).map((stop)=>{
            let className = "bus-card";
            if (stop.cancelled) className += " canceled";
            else if (stop.delay > 0) className += " changed";
            return (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`
            <div class="${className}">
              <div class="bus-card-head">
                <span class="line-number">${stop["bus_number"]}</span>

                <div class="bus-card-details">
                  <span class="bus-time">${stop["departure_time"].slice(0, 5)}</span>
                  <span class="bus-time-changed">${stop["computed_time"]}</span>
                  <span class="bus-time-canceled">Geannuleerd</span>
                  <span class="stop-text">${stop["name"]}</span>
                  ${stop["trip_name"] ? (0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<span class="stop-text-second">(${stop["trip_name"]})</span>` : ""}
                  <div class="bus-card-alert">${stop.alerts.map((alert)=>(0, $d33ef1320595a3ac$export$c0bb0b647f701bb5)`<span class="alert-text">${alert}</span>`)}</div>
                </div>
                <span class="live-time">${Math.floor(stop["seconds"] / 60)} min</span>
                ${0, $31ddf566cad37533$export$c89915e2373763c7}
              </div>
            </div>
          `;
        })}
      </div>
    `;
    }
}


customElements.define("busvertrektijden-card", (0, $2388023d729b4380$export$5365bfeef88eca6f));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "busvertrektijden-card",
    name: "Bus vertrektijden Card",
    description: "Shows upcoming bus departures"
});


