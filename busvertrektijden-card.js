/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $b1fa9b0acaf40b20$var$t = globalThis, $b1fa9b0acaf40b20$export$b4d10f6001c083c2 = $b1fa9b0acaf40b20$var$t.ShadowRoot && (void 0 === $b1fa9b0acaf40b20$var$t.ShadyCSS || $b1fa9b0acaf40b20$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $b1fa9b0acaf40b20$var$s = Symbol(), $b1fa9b0acaf40b20$var$o = new WeakMap;
class $b1fa9b0acaf40b20$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $b1fa9b0acaf40b20$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($b1fa9b0acaf40b20$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $b1fa9b0acaf40b20$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $b1fa9b0acaf40b20$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $b1fa9b0acaf40b20$export$8d80f9cac07cdb3 = (t)=>new $b1fa9b0acaf40b20$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $b1fa9b0acaf40b20$var$s), $b1fa9b0acaf40b20$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $b1fa9b0acaf40b20$export$505d1e8739bad805(o, t, $b1fa9b0acaf40b20$var$s);
}, $b1fa9b0acaf40b20$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($b1fa9b0acaf40b20$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $b1fa9b0acaf40b20$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $b1fa9b0acaf40b20$export$ee69dfd951e24778 = $b1fa9b0acaf40b20$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $b1fa9b0acaf40b20$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $b7da6541276cd110$var$i, defineProperty: $b7da6541276cd110$var$e, getOwnPropertyDescriptor: $b7da6541276cd110$var$h, getOwnPropertyNames: $b7da6541276cd110$var$r, getOwnPropertySymbols: $b7da6541276cd110$var$o, getPrototypeOf: $b7da6541276cd110$var$n } = Object, $b7da6541276cd110$var$a = globalThis, $b7da6541276cd110$var$c = $b7da6541276cd110$var$a.trustedTypes, $b7da6541276cd110$var$l = $b7da6541276cd110$var$c ? $b7da6541276cd110$var$c.emptyScript : "", $b7da6541276cd110$var$p = $b7da6541276cd110$var$a.reactiveElementPolyfillSupport, $b7da6541276cd110$var$d = (t, s)=>t, $b7da6541276cd110$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $b7da6541276cd110$var$l : null;
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
}, $b7da6541276cd110$export$53a6892c50694894 = (t, s)=>!$b7da6541276cd110$var$i(t, s), $b7da6541276cd110$var$b = {
    attribute: !0,
    type: String,
    converter: $b7da6541276cd110$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $b7da6541276cd110$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $b7da6541276cd110$var$a.litPropertyMetadata ??= new WeakMap;
class $b7da6541276cd110$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $b7da6541276cd110$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $b7da6541276cd110$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $b7da6541276cd110$var$h(this.prototype, t) ?? {
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
        return this.elementProperties.get(t) ?? $b7da6541276cd110$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($b7da6541276cd110$var$d("elementProperties"))) return;
        const t = $b7da6541276cd110$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($b7da6541276cd110$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($b7da6541276cd110$var$d("properties"))) {
            const t = this.properties, s = [
                ...$b7da6541276cd110$var$r(t),
                ...$b7da6541276cd110$var$o(t)
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
            for (const s of e)i.unshift((0, $b1fa9b0acaf40b20$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $b1fa9b0acaf40b20$export$ee69dfd951e24778)(s));
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
        return (0, $b1fa9b0acaf40b20$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
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
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $b7da6541276cd110$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $b7da6541276cd110$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            const e = this.constructor, h = this[t];
            if (i ??= e.getPropertyOptions(t), !((i.hasChanged ?? $b7da6541276cd110$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(e._$Eu(t, i)))) return;
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
$b7da6541276cd110$export$c7c07a37856565d.elementStyles = [], $b7da6541276cd110$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $b7da6541276cd110$export$c7c07a37856565d[$b7da6541276cd110$var$d("elementProperties")] = new Map, $b7da6541276cd110$export$c7c07a37856565d[$b7da6541276cd110$var$d("finalized")] = new Map, $b7da6541276cd110$var$p?.({
    ReactiveElement: $b7da6541276cd110$export$c7c07a37856565d
}), ($b7da6541276cd110$var$a.reactiveElementVersions ??= []).push("2.1.1");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ad0512c2874d4e1a$var$t = globalThis, $ad0512c2874d4e1a$var$i = $ad0512c2874d4e1a$var$t.trustedTypes, $ad0512c2874d4e1a$var$s = $ad0512c2874d4e1a$var$i ? $ad0512c2874d4e1a$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $ad0512c2874d4e1a$var$e = "$lit$", $ad0512c2874d4e1a$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $ad0512c2874d4e1a$var$o = "?" + $ad0512c2874d4e1a$var$h, $ad0512c2874d4e1a$var$n = `<${$ad0512c2874d4e1a$var$o}>`, $ad0512c2874d4e1a$var$r = document, $ad0512c2874d4e1a$var$l = ()=>$ad0512c2874d4e1a$var$r.createComment(""), $ad0512c2874d4e1a$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $ad0512c2874d4e1a$var$a = Array.isArray, $ad0512c2874d4e1a$var$u = (t)=>$ad0512c2874d4e1a$var$a(t) || "function" == typeof t?.[Symbol.iterator], $ad0512c2874d4e1a$var$d = "[ \t\n\f\r]", $ad0512c2874d4e1a$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $ad0512c2874d4e1a$var$v = /-->/g, $ad0512c2874d4e1a$var$_ = />/g, $ad0512c2874d4e1a$var$m = RegExp(`>|${$ad0512c2874d4e1a$var$d}(?:([^\\s"'>=/]+)(${$ad0512c2874d4e1a$var$d}*=${$ad0512c2874d4e1a$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $ad0512c2874d4e1a$var$p = /'/g, $ad0512c2874d4e1a$var$g = /"/g, $ad0512c2874d4e1a$var$$ = /^(?:script|style|textarea|title)$/i, $ad0512c2874d4e1a$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $ad0512c2874d4e1a$export$c0bb0b647f701bb5 = $ad0512c2874d4e1a$var$y(1), $ad0512c2874d4e1a$export$7ed1367e7fa1ad68 = $ad0512c2874d4e1a$var$y(2), $ad0512c2874d4e1a$export$47d5b44d225be5b4 = $ad0512c2874d4e1a$var$y(3), $ad0512c2874d4e1a$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $ad0512c2874d4e1a$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $ad0512c2874d4e1a$var$A = new WeakMap, $ad0512c2874d4e1a$var$C = $ad0512c2874d4e1a$var$r.createTreeWalker($ad0512c2874d4e1a$var$r, 129);
function $ad0512c2874d4e1a$var$P(t, i) {
    if (!$ad0512c2874d4e1a$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $ad0512c2874d4e1a$var$s ? $ad0512c2874d4e1a$var$s.createHTML(i) : i;
}
const $ad0512c2874d4e1a$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $ad0512c2874d4e1a$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $ad0512c2874d4e1a$var$f ? "!--" === u[1] ? c = $ad0512c2874d4e1a$var$v : void 0 !== u[1] ? c = $ad0512c2874d4e1a$var$_ : void 0 !== u[2] ? ($ad0512c2874d4e1a$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $ad0512c2874d4e1a$var$m) : void 0 !== u[3] && (c = $ad0512c2874d4e1a$var$m) : c === $ad0512c2874d4e1a$var$m ? ">" === u[0] ? (c = r ?? $ad0512c2874d4e1a$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $ad0512c2874d4e1a$var$m : '"' === u[3] ? $ad0512c2874d4e1a$var$g : $ad0512c2874d4e1a$var$p) : c === $ad0512c2874d4e1a$var$g || c === $ad0512c2874d4e1a$var$p ? c = $ad0512c2874d4e1a$var$m : c === $ad0512c2874d4e1a$var$v || c === $ad0512c2874d4e1a$var$_ ? c = $ad0512c2874d4e1a$var$f : (c = $ad0512c2874d4e1a$var$m, r = void 0);
        const x = c === $ad0512c2874d4e1a$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $ad0512c2874d4e1a$var$f ? s + $ad0512c2874d4e1a$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $ad0512c2874d4e1a$var$e + s.slice(d) + $ad0512c2874d4e1a$var$h + x) : s + $ad0512c2874d4e1a$var$h + (-2 === d ? i : x);
    }
    return [
        $ad0512c2874d4e1a$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $ad0512c2874d4e1a$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $ad0512c2874d4e1a$var$V(t, s);
        if (this.el = $ad0512c2874d4e1a$var$N.createElement(f, n), $ad0512c2874d4e1a$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $ad0512c2874d4e1a$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($ad0512c2874d4e1a$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($ad0512c2874d4e1a$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $ad0512c2874d4e1a$var$H : "?" === e[1] ? $ad0512c2874d4e1a$var$I : "@" === e[1] ? $ad0512c2874d4e1a$var$L : $ad0512c2874d4e1a$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($ad0512c2874d4e1a$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($ad0512c2874d4e1a$var$$.test(r.tagName)) {
                    const t = r.textContent.split($ad0512c2874d4e1a$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $ad0512c2874d4e1a$var$i ? $ad0512c2874d4e1a$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $ad0512c2874d4e1a$var$l()), $ad0512c2874d4e1a$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $ad0512c2874d4e1a$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $ad0512c2874d4e1a$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($ad0512c2874d4e1a$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $ad0512c2874d4e1a$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $ad0512c2874d4e1a$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $ad0512c2874d4e1a$var$S(t, i, s = t, e) {
    if (i === $ad0512c2874d4e1a$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $ad0512c2874d4e1a$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $ad0512c2874d4e1a$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $ad0512c2874d4e1a$var$M {
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
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $ad0512c2874d4e1a$var$r).importNode(i, !0);
        $ad0512c2874d4e1a$var$C.currentNode = e;
        let h = $ad0512c2874d4e1a$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $ad0512c2874d4e1a$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $ad0512c2874d4e1a$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $ad0512c2874d4e1a$var$C.nextNode(), o++);
        }
        return $ad0512c2874d4e1a$var$C.currentNode = $ad0512c2874d4e1a$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $ad0512c2874d4e1a$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $ad0512c2874d4e1a$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
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
        t = $ad0512c2874d4e1a$var$S(this, t, i), $ad0512c2874d4e1a$var$c(t) ? t === $ad0512c2874d4e1a$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $ad0512c2874d4e1a$export$45b790e32b2810ee && this._$AR(), this._$AH = $ad0512c2874d4e1a$export$45b790e32b2810ee) : t !== this._$AH && t !== $ad0512c2874d4e1a$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $ad0512c2874d4e1a$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $ad0512c2874d4e1a$export$45b790e32b2810ee && $ad0512c2874d4e1a$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($ad0512c2874d4e1a$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $ad0512c2874d4e1a$var$N.createElement($ad0512c2874d4e1a$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $ad0512c2874d4e1a$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $ad0512c2874d4e1a$var$A.get(t.strings);
        return void 0 === i && $ad0512c2874d4e1a$var$A.set(t.strings, i = new $ad0512c2874d4e1a$var$N(t)), i;
    }
    k(t) {
        $ad0512c2874d4e1a$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $ad0512c2874d4e1a$var$R(this.O($ad0512c2874d4e1a$var$l()), this.O($ad0512c2874d4e1a$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $ad0512c2874d4e1a$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $ad0512c2874d4e1a$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $ad0512c2874d4e1a$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $ad0512c2874d4e1a$var$S(this, t, i, 0), o = !$ad0512c2874d4e1a$var$c(t) || t !== this._$AH && t !== $ad0512c2874d4e1a$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $ad0512c2874d4e1a$var$S(this, e[s + n], i, n), r === $ad0512c2874d4e1a$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$ad0512c2874d4e1a$var$c(r) || r !== this._$AH[n], r === $ad0512c2874d4e1a$export$45b790e32b2810ee ? t = $ad0512c2874d4e1a$export$45b790e32b2810ee : t !== $ad0512c2874d4e1a$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $ad0512c2874d4e1a$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $ad0512c2874d4e1a$var$H extends $ad0512c2874d4e1a$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $ad0512c2874d4e1a$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $ad0512c2874d4e1a$var$I extends $ad0512c2874d4e1a$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $ad0512c2874d4e1a$export$45b790e32b2810ee);
    }
}
class $ad0512c2874d4e1a$var$L extends $ad0512c2874d4e1a$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $ad0512c2874d4e1a$var$S(this, t, i, 0) ?? $ad0512c2874d4e1a$export$45b790e32b2810ee) === $ad0512c2874d4e1a$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $ad0512c2874d4e1a$export$45b790e32b2810ee && s !== $ad0512c2874d4e1a$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $ad0512c2874d4e1a$export$45b790e32b2810ee && (s === $ad0512c2874d4e1a$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $ad0512c2874d4e1a$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $ad0512c2874d4e1a$var$S(this, t);
    }
}
const $ad0512c2874d4e1a$export$8613d1ca9052b22e = {
    M: $ad0512c2874d4e1a$var$e,
    P: $ad0512c2874d4e1a$var$h,
    A: $ad0512c2874d4e1a$var$o,
    C: 1,
    L: $ad0512c2874d4e1a$var$V,
    R: $ad0512c2874d4e1a$var$M,
    D: $ad0512c2874d4e1a$var$u,
    V: $ad0512c2874d4e1a$var$S,
    I: $ad0512c2874d4e1a$var$R,
    H: $ad0512c2874d4e1a$var$k,
    N: $ad0512c2874d4e1a$var$I,
    U: $ad0512c2874d4e1a$var$L,
    B: $ad0512c2874d4e1a$var$H,
    F: $ad0512c2874d4e1a$var$z
}, $ad0512c2874d4e1a$var$j = $ad0512c2874d4e1a$var$t.litHtmlPolyfillSupport;
$ad0512c2874d4e1a$var$j?.($ad0512c2874d4e1a$var$N, $ad0512c2874d4e1a$var$R), ($ad0512c2874d4e1a$var$t.litHtmlVersions ??= []).push("3.3.1");
const $ad0512c2874d4e1a$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $ad0512c2874d4e1a$var$R(i.insertBefore($ad0512c2874d4e1a$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $bef0b097a0201904$var$s = globalThis;
class $bef0b097a0201904$export$3f2f9f5909897157 extends (0, $b7da6541276cd110$export$c7c07a37856565d) {
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
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $ad0512c2874d4e1a$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $ad0512c2874d4e1a$export$9c068ae9cc5db4e8;
    }
}
$bef0b097a0201904$export$3f2f9f5909897157._$litElement$ = !0, $bef0b097a0201904$export$3f2f9f5909897157["finalized"] = !0, $bef0b097a0201904$var$s.litElementHydrateSupport?.({
    LitElement: $bef0b097a0201904$export$3f2f9f5909897157
});
const $bef0b097a0201904$var$o = $bef0b097a0201904$var$s.litElementPolyfillSupport;
$bef0b097a0201904$var$o?.({
    LitElement: $bef0b097a0201904$export$3f2f9f5909897157
});
const $bef0b097a0201904$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($bef0b097a0201904$var$s.litElementVersions ??= []).push("4.2.1");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $598b32bcd6f02e31$export$6acf61af03e62db = !1;





const $31ddf566cad37533$export$9dd6ff9ea0189349 = (0, $b1fa9b0acaf40b20$export$dbf350e5966cf602)`
  .bus-card {
    margin-bottom: 10px;
  }

  .bus-card .bus-card-alert {
    color: #ff5252;
    font-weight: bold;
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
    align-items: center;
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
`;
const $31ddf566cad37533$export$c89915e2373763c7 = (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
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


class $2388023d729b4380$export$5365bfeef88eca6f extends (0, $bef0b097a0201904$export$3f2f9f5909897157) {
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
        if (!this.valid_entity) return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<div>Ongeldige entity. Zorg ervoor dat je een sensor met het juiste formaat gebruikt.</div>`;
        if (this.available === false) return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<div>Geen busgegevens beschikbaar. Controleer je internetverbinding.</div>`;
        if (!this.stop_name) return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<div>Halte naam niet beschikbaar. Controleer of de haltecode goed in je configuratie staat.</div>`;
        if (this.stop_name.endsWith("None")) return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<div>Deze halte is niet gevonden. Controleer of de haltecode goed in je configuratie staat.</div>`;
        if (!this.stops || this.stops.length === 0) return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`<div>Er zijn momenteel geen aankomende bussen voor deze halte.</div>`;
        return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
      <div>
        ${this.stops.slice(0, this.amount).map((stop)=>{
            let className = "bus-card";
            if (stop.tripUpdate.cancelled) className += " canceled";
            else if (stop.tripUpdate.delay > 0) className += " changed";
            return (0, $ad0512c2874d4e1a$export$c0bb0b647f701bb5)`
            <div class="${className}">
              <div class="bus-card-head">
                <span class="line-number">${stop.stopTime.routeShortName}</span>

                <div class="bus-card-details">
                  <span class="bus-time">${stop.stopTime.arrivalTime}</span>
                  <span class="bus-time-changed">${stop.tripUpdate.calculatedArrivalTime}</span>
                  <span class="bus-time-canceled">Geannuleerd</span>
                  <span class="stop-text">${stop.stopTime.stopHeadSign}</span>
                  <div class="bus-card-details-time">
                    <span class="bus-direction">${stop.stopTime.routeLongName}</span>
                  </div>
                  <div class="bus-card-alert">
                    <span>${stop.alert?.message || stop.alert?.title || ""}</span>
                  </div>
                </div>
                <span class="live-time">${stop.tripUpdate.minutesUntill} min</span>
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


