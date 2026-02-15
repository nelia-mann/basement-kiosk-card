/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$h, getOwnPropertyNames: $19fe8e3abedf4df0$var$r, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
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
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$b = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $19fe8e3abedf4df0$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $19fe8e3abedf4df0$var$h(this.prototype, t) ?? {
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
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$r(t),
                ...$19fe8e3abedf4df0$var$o(t)
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
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
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
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
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
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i, e = !1, h) {
        if (void 0 !== t) {
            const r = this.constructor;
            if (!1 === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return;
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
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.1.2");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = (t)=>t, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$e = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$h = "$lit$", $f58f44579a4747ac$var$o = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$n = "?" + $f58f44579a4747ac$var$o, $f58f44579a4747ac$var$r = `<${$f58f44579a4747ac$var$n}>`, $f58f44579a4747ac$var$l = document, $f58f44579a4747ac$var$c = ()=>$f58f44579a4747ac$var$l.createComment(""), $f58f44579a4747ac$var$a = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$u = Array.isArray, $f58f44579a4747ac$var$d = (t)=>$f58f44579a4747ac$var$u(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$f = "[ \t\n\f\r]", $f58f44579a4747ac$var$v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$_ = /-->/g, $f58f44579a4747ac$var$m = />/g, $f58f44579a4747ac$var$p = RegExp(`>|${$f58f44579a4747ac$var$f}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$f}*=${$f58f44579a4747ac$var$f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$g = /'/g, $f58f44579a4747ac$var$$ = /"/g, $f58f44579a4747ac$var$y = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$x = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$x(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$x(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$x(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$C = new WeakMap, $f58f44579a4747ac$var$P = $f58f44579a4747ac$var$l.createTreeWalker($f58f44579a4747ac$var$l, 129);
function $f58f44579a4747ac$var$V(t, i) {
    if (!$f58f44579a4747ac$var$u(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$e ? $f58f44579a4747ac$var$e.createHTML(i) : i;
}
const $f58f44579a4747ac$var$N = (t, i)=>{
    const s = t.length - 1, e = [];
    let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$v;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, f = 0;
        for(; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);)f = c.lastIndex, c === $f58f44579a4747ac$var$v ? "!--" === u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[1] ? c = $f58f44579a4747ac$var$m : void 0 !== u[2] ? ($f58f44579a4747ac$var$y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$p) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$p ? ">" === u[0] ? (c = n ?? $f58f44579a4747ac$var$v, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$p : '"' === u[3] ? $f58f44579a4747ac$var$$ : $f58f44579a4747ac$var$g) : c === $f58f44579a4747ac$var$$ || c === $f58f44579a4747ac$var$g ? c = $f58f44579a4747ac$var$p : c === $f58f44579a4747ac$var$_ || c === $f58f44579a4747ac$var$m ? c = $f58f44579a4747ac$var$v : (c = $f58f44579a4747ac$var$p, n = void 0);
        const x = c === $f58f44579a4747ac$var$p && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$v ? s + $f58f44579a4747ac$var$r : d >= 0 ? (e.push(a), s.slice(0, d) + $f58f44579a4747ac$var$h + s.slice(d) + $f58f44579a4747ac$var$o + x) : s + $f58f44579a4747ac$var$o + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        e
    ];
};
class $f58f44579a4747ac$var$S {
    constructor({ strings: t, _$litType$: i }, e){
        let r;
        this.parts = [];
        let l = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$N(t, i);
        if (this.el = $f58f44579a4747ac$var$S.createElement(f, e), $f58f44579a4747ac$var$P.currentNode = this.el.content, 2 === i || 3 === i) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$P.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$h)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$o), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: l,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$I : "?" === e[1] ? $f58f44579a4747ac$var$L : "@" === e[1] ? $f58f44579a4747ac$var$z : $f58f44579a4747ac$var$H
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$o) && (d.push({
                    type: 6,
                    index: l
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$y.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$o), i = t.length - 1;
                    if (i > 0) {
                        r.textContent = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)r.append(t[s], $f58f44579a4747ac$var$c()), $f58f44579a4747ac$var$P.nextNode(), d.push({
                            type: 2,
                            index: ++l
                        });
                        r.append(t[i], $f58f44579a4747ac$var$c());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$n) d.push({
                    type: 2,
                    index: l
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$o, t + 1));)d.push({
                        type: 7,
                        index: l
                    }), t += $f58f44579a4747ac$var$o.length - 1;
                }
            }
            l++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$l.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$M(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$a(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$M(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$R {
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
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$l).importNode(i, !0);
        $f58f44579a4747ac$var$P.currentNode = e;
        let h = $f58f44579a4747ac$var$P.nextNode(), o = 0, n = 0, r = s[0];
        for(; void 0 !== r;){
            if (o === r.index) {
                let i;
                2 === r.type ? i = new $f58f44579a4747ac$var$k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new $f58f44579a4747ac$var$Z(h, this, t)), this._$AV.push(i), r = s[++n];
            }
            o !== r?.index && (h = $f58f44579a4747ac$var$P.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$P.currentNode = $f58f44579a4747ac$var$l, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$k {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
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
        t = $f58f44579a4747ac$var$M(this, t, i), $f58f44579a4747ac$var$a(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$d(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$a(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$l.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$S.createElement($f58f44579a4747ac$var$V(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$R(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$C.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$C.set(t.strings, i = new $f58f44579a4747ac$var$S(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$k(this.O($f58f44579a4747ac$var$c()), this.O($f58f44579a4747ac$var$c()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, s) {
        for(this._$AP?.(!1, !0, s); t !== this._$AB;){
            const s = $f58f44579a4747ac$var$i(t).nextSibling;
            $f58f44579a4747ac$var$i(t).remove(), t = s;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$H {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$M(this, t, i, 0), o = !$f58f44579a4747ac$var$a(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$M(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$a(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$H {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$H {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$z extends $f58f44579a4747ac$var$H {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$M(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$M(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$h,
    P: $f58f44579a4747ac$var$o,
    A: $f58f44579a4747ac$var$n,
    C: 1,
    L: $f58f44579a4747ac$var$N,
    R: $f58f44579a4747ac$var$R,
    D: $f58f44579a4747ac$var$d,
    V: $f58f44579a4747ac$var$M,
    I: $f58f44579a4747ac$var$k,
    H: $f58f44579a4747ac$var$H,
    N: $f58f44579a4747ac$var$L,
    U: $f58f44579a4747ac$var$z,
    B: $f58f44579a4747ac$var$I,
    F: $f58f44579a4747ac$var$Z
}, $f58f44579a4747ac$var$B = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$B?.($f58f44579a4747ac$var$S, $f58f44579a4747ac$var$k), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.3.2");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$k(i.insertBefore($f58f44579a4747ac$var$c(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ab210b2da7b39b9d$var$s = globalThis;
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
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
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, $ab210b2da7b39b9d$var$s.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$o = $ab210b2da7b39b9d$var$s.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$o?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($ab210b2da7b39b9d$var$s.litElementVersions ??= []).push("4.2.2");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;





/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}


/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $19f464fcda7d2482$var$n = "important", $19f464fcda7d2482$var$i = " !" + $19f464fcda7d2482$var$n, $19f464fcda7d2482$export$1e5b4ce2fa884e6a = (0, $107bb7d062dde330$export$99b43ad1ed32e735)(class extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(t){
        if (super(t), t.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).ATTRIBUTE || "style" !== t.name || t.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return Object.keys(t).reduce((e, r)=>{
            const s = t[r];
            return null == s ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
        }, "");
    }
    update(e, [r]) {
        const { style: s } = e.element;
        if (void 0 === this.ft) return this.ft = new Set(Object.keys(r)), this.render(r);
        for (const t of this.ft)null == r[t] && (this.ft.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = null);
        for(const t in r){
            const e = r[t];
            if (null != e) {
                this.ft.add(t);
                const r = "string" == typeof e && e.endsWith($19f464fcda7d2482$var$i);
                t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? $19f464fcda7d2482$var$n : "") : s[t] = e;
            }
        }
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
});







/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { I: $311430566e21b48b$var$t } = (0, $f58f44579a4747ac$export$8613d1ca9052b22e), $311430566e21b48b$var$i = (o)=>o, $311430566e21b48b$export$c3825b437cbdea5c = (o)=>null === o || "object" != typeof o && "function" != typeof o, $311430566e21b48b$export$80c36ae3cab9881d = {
    HTML: 1,
    SVG: 2,
    MATHML: 3
}, $311430566e21b48b$export$6b6d145ec2a44ca9 = (o, t)=>void 0 === t ? void 0 !== o?._$litType$ : o?._$litType$ === t, $311430566e21b48b$export$6a0e8de894d2fcca = (o)=>null != o?._$litType$?.h, $311430566e21b48b$export$2f448fec17d50a3e = (o)=>void 0 !== o?._$litDirective$, $311430566e21b48b$export$f28e31de6a6eaf32 = (o)=>o?._$litDirective$, $311430566e21b48b$export$7f431ad0fff82fd9 = (o)=>void 0 === o.strings, $311430566e21b48b$var$s = ()=>document.createComment(""), $311430566e21b48b$export$291b2338ad9b0b30 = (o, n, e)=>{
    const l = o._$AA.parentNode, d = void 0 === n ? o._$AB : n._$AA;
    if (void 0 === e) {
        const i = l.insertBefore($311430566e21b48b$var$s(), d), n = l.insertBefore($311430566e21b48b$var$s(), d);
        e = new $311430566e21b48b$var$t(i, n, o, o.options);
    } else {
        const t = e._$AB.nextSibling, n = e._$AM, c = n !== o;
        if (c) {
            let t;
            e._$AQ?.(o), e._$AM = o, void 0 !== e._$AP && (t = o._$AU) !== n._$AU && e._$AP(t);
        }
        if (t !== d || c) {
            let o = e._$AA;
            for(; o !== t;){
                const t = $311430566e21b48b$var$i(o).nextSibling;
                $311430566e21b48b$var$i(l).insertBefore(o, d), o = t;
            }
        }
    }
    return e;
}, $311430566e21b48b$export$cb8bf9562088e9f4 = (o, t, i = o)=>(o._$AI(t, i), o), $311430566e21b48b$var$m = {}, $311430566e21b48b$export$ea70d9dd5965b1c8 = (o, t = $311430566e21b48b$var$m)=>o._$AH = t, $311430566e21b48b$export$59e9bce518cde500 = (o)=>o._$AH, $311430566e21b48b$export$3133b3144bbba267 = (o)=>{
    o._$AR(), o._$AA.remove();
}, $311430566e21b48b$export$7f600b8138c094dc = (o)=>{
    o._$AR();
};


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $6db6ff6394e885e6$var$u = (e, s, t)=>{
    const r = new Map;
    for(let l = s; l <= t; l++)r.set(e[l], l);
    return r;
}, $6db6ff6394e885e6$export$76d90c956114f2c2 = (0, $107bb7d062dde330$export$99b43ad1ed32e735)(class extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(e){
        if (super(e), e.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).CHILD) throw Error("repeat() can only be used in text expressions");
    }
    dt(e, s, t) {
        let r;
        void 0 === t ? t = s : void 0 !== s && (r = s);
        const l = [], o = [];
        let i = 0;
        for (const s of e)l[i] = r ? r(s, i) : i, o[i] = t(s, i), i++;
        return {
            values: o,
            keys: l
        };
    }
    render(e, s, t) {
        return this.dt(e, s, t).values;
    }
    update(s, [t, r, c]) {
        const d = (0, $311430566e21b48b$export$59e9bce518cde500)(s), { values: p, keys: a } = this.dt(t, r, c);
        if (!Array.isArray(d)) return this.ut = a, p;
        const h = this.ut ??= [], v = [];
        let m, y, x = 0, j = d.length - 1, k = 0, w = p.length - 1;
        for(; x <= j && k <= w;)if (null === d[x]) x++;
        else if (null === d[j]) j--;
        else if (h[x] === a[k]) v[k] = (0, $311430566e21b48b$export$cb8bf9562088e9f4)(d[x], p[k]), x++, k++;
        else if (h[j] === a[w]) v[w] = (0, $311430566e21b48b$export$cb8bf9562088e9f4)(d[j], p[w]), j--, w--;
        else if (h[x] === a[w]) v[w] = (0, $311430566e21b48b$export$cb8bf9562088e9f4)(d[x], p[w]), (0, $311430566e21b48b$export$291b2338ad9b0b30)(s, v[w + 1], d[x]), x++, w--;
        else if (h[j] === a[k]) v[k] = (0, $311430566e21b48b$export$cb8bf9562088e9f4)(d[j], p[k]), (0, $311430566e21b48b$export$291b2338ad9b0b30)(s, d[x], d[j]), j--, k++;
        else if (void 0 === m && (m = $6db6ff6394e885e6$var$u(a, k, w), y = $6db6ff6394e885e6$var$u(h, x, j)), m.has(h[x])) {
            if (m.has(h[j])) {
                const e = y.get(a[k]), t = void 0 !== e ? d[e] : null;
                if (null === t) {
                    const e = (0, $311430566e21b48b$export$291b2338ad9b0b30)(s, d[x]);
                    (0, $311430566e21b48b$export$cb8bf9562088e9f4)(e, p[k]), v[k] = e;
                } else v[k] = (0, $311430566e21b48b$export$cb8bf9562088e9f4)(t, p[k]), (0, $311430566e21b48b$export$291b2338ad9b0b30)(s, d[x], t), d[e] = null;
                k++;
            } else (0, $311430566e21b48b$export$3133b3144bbba267)(d[j]), j--;
        } else (0, $311430566e21b48b$export$3133b3144bbba267)(d[x]), x++;
        for(; k <= w;){
            const e = (0, $311430566e21b48b$export$291b2338ad9b0b30)(s, v[w + 1]);
            (0, $311430566e21b48b$export$cb8bf9562088e9f4)(e, p[k]), v[k++] = e;
        }
        for(; x <= j;){
            const e = d[x++];
            null !== e && (0, $311430566e21b48b$export$3133b3144bbba267)(e);
        }
        return this.ut = a, (0, $311430566e21b48b$export$ea70d9dd5965b1c8)(s, v), $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
});



var $24833e213e3419f0$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
    ha-card {
        padding: 25px;
        padding-top: 5px;
        margin: 0px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        height: 570px;
        width: 900px;
        outline: solid;
        border-radius: 0px;
    }

    .content {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        height: 520px;
        width: 100%;
    }

    .button-row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 50px;
        margin: 0px;
        padding: 0px;
    }

    .button {
        height: 100%;
        width: 160px;
        padding: 0px;
        border: none;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

`;



var $65e9333b9a0c9dfd$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`

    * {
        font-family: "Roboto", "Noto", sans-serif;
        ---mdc-icon-size: 20px;
    }

    .small-heading {
        font-weight: 700;
        font-size: 105%;
        margin: 0px;
        padding: 0px;
    }

    .large-heading {
        font-weight: 600;
        font-size: 200%;
        margin: 0px;
        padding: 0px;
    }

    .sub-info {
        padding: 0px;
        margin: 0px;
        font-weight: 400;
        font-size: 85%;
    }

    .outlined {
        outline-offset: 0px;
        border-radius: 8px;
    }

    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .outlined {
        outline: .5px solid rgba(0, 0, 0, .1);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .inner-slider {
        border-top: solid 2px rgba(0, 0, 0, .1);
        border-bottom: solid 2px rgba(0, 0, 0, .1);
    }

    .shown-level {
        background: rgba(0, 0, 0, 1);
    }

    @media (prefers-color-scheme: dark) {
        * {
            color: #ffffff;
        }

        .outlined {
            outline: .5px solid rgba(255, 255, 255, .1);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 .5px 2px rgba(255, 255, 255, 0.1) inset;
        }

        .inner-slider {
            border-top: solid 2px rgba(255, 255, 255, .1);
            border-bottom: solid 2px rgba(255, 255, 255, .1);
        }

        .shown-level {
            background: rgba(255, 255, 255, 1);
        }

        dialog {
            background: #191919;
        }

        .slider {
            background: #191919;
        }
    }

`;


const $d66841a16b153167$export$a004fc522c1a4845 = [
    255,
    193,
    7
]; // color in rgb (yellow)
const $d66841a16b153167$export$e59310e5bf013385 = [
    127,
    97,
    3
]; // should be black-ish yellow
const $d66841a16b153167$export$173de64b5ad0d5b4 = [
    158,
    158,
    158
]; // color in rgb (gray)
const $d66841a16b153167$export$f353bac13bc8bab2 = [
    68,
    115,
    158
]; // color in rgb (steel blue)
const $d66841a16b153167$export$af126f6aeedfb296 = [
    41,
    0,
    255
]; // blue color
function $d66841a16b153167$var$getTempRed(temp) {
    let red;
    if (temp <= 6600) red = 255;
    else {
        red = temp / 100 - 60;
        red = Math.round(329.698727446 * red ** -0.1332047592);
    }
    red < 0 && (red = 0);
    red > 255 && (red = 255);
    return red;
}
function $d66841a16b153167$var$getTempGreen(temp) {
    let green;
    if (temp <= 6600) {
        green = temp / 100;
        green = Math.round(99.4708025861 * Math.log(green) - 161.1195681661);
    } else {
        green = temp / 100 - 60;
        green = Math.round(288.1221695283 * green ** -0.0755148492);
    }
    green < 0 && (green = 0);
    green > 255 && (green = 255);
    return green;
}
function $d66841a16b153167$var$getTempBlue(temp) {
    let blue;
    if (temp > 6600) blue = 255;
    else if (temp <= 1900) blue = 0;
    else {
        blue = temp / 100 - 10;
        blue = Math.round(138.5177312231 * Math.log(blue) - 305.0447927307);
    }
    blue < 0 && (blue = 0);
    blue > 255 && (blue = 255);
    return blue;
}
function $d66841a16b153167$export$c18f11e95ff36b0c(temp) {
    return [
        $d66841a16b153167$var$getTempRed(temp),
        $d66841a16b153167$var$getTempGreen(temp),
        $d66841a16b153167$var$getTempBlue(temp)
    ];
}
function $d66841a16b153167$export$5b5356aa7e20fd72(minTemp, maxTemp, steps) {
    let output = `linear-gradient(to top`;
    for(let step = 0; step <= steps; step++){
        const temp = (minTemp * (steps - step) + maxTemp * step) / steps;
        const rgb = $d66841a16b153167$export$c18f11e95ff36b0c(temp);
        const result = $d66841a16b153167$export$4e46ac54fc82cf3b(rgb, 1);
        const percent = Math.round(step * 100 / steps);
        output = output + `, ` + result + ` ${percent}%`;
    }
    output = output + `)`;
    return output;
}
function $d66841a16b153167$export$475133aea461e763(steps) {
    let output = 'radial-gradient(circle at center, white 0%, transparent 100%), ';
    output = output + 'conic-gradient( from 0deg';
    for(let step = 0; step <= steps; step++){
        const angle = Math.round(step * 360 / steps);
        output = output + `, hsl(${angle}, 100%, 50%)`;
    }
    output = output + `)`;
    return output;
}
function $d66841a16b153167$var$setScale(a, b, t) {
    let result = a;
    if (t > 1) result = b;
    else if (t < 0) result = a;
    else result = a + (b - a) * t;
    return result;
}
function $d66841a16b153167$export$4e46ac54fc82cf3b(rgbArray, opacity) {
    return `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, ${opacity})`;
}
function $d66841a16b153167$export$dd0fba3206c57e56(rgbA, rgbB, t) {
    const red = $d66841a16b153167$var$setScale(rgbA[0], rgbB[0], t);
    const green = $d66841a16b153167$var$setScale(rgbA[1], rgbB[1], t);
    const blue = $d66841a16b153167$var$setScale(rgbA[2], rgbB[2], t);
    return [
        red,
        green,
        blue
    ];
}






class $ba7585aafb473e34$export$14461509c6f1f877 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    _structure = {};
    _entityIds = [];
    _initialized = false;
    static get properties() {
        return {
            _states: {
                state: true
            },
            _changedEntityIds: {
                state: true
            },
            _isSelected: {
                state: true
            }
        };
    }
    /************* lifecycle ***********************************************/ // when first constructed
    constructor(){
        super();
    }
    // each time an update occurs resulting in rerendering
    update(changedProps) {
        super.update(changedProps);
    }
    // determines if an update should occur
    shouldUpdate(changedProps) {
        return !this._initialized || this.hasRelevantChanges() || changedProps.has("_isSelected");
    }
    // runs after the first update
    firstUpdated() {
        this._initialized = true;
    }
    // runs after every update
    updated() {}
    // helper to determine if should update
    hasRelevantChanges() {
        return this._entityIds.some((entityId)=>this._changedEntityIds.has(entityId));
    }
    /*************************************************************************/ isSolo(lightId) {
        return !this._states[lightId].attributes.entity_id;
    }
    getLightData() {
        let on = 0;
        let tot = 0;
        this._entityIds.forEach((lightId)=>{
            if (this.isSolo(lightId)) {
                tot = tot + 1;
                const state = this._states[lightId].state;
                state === "on" && (on = on + 1);
            }
        });
        return [
            on,
            tot
        ];
    }
    // determines the shade of color associated with a particular floor id, based on
    // the fraction of the lights that are on.
    getRGB(opacity) {
        const onTot = this.getLightData();
        const rgb = (0, $d66841a16b153167$export$dd0fba3206c57e56)((0, $d66841a16b153167$export$173de64b5ad0d5b4), (0, $d66841a16b153167$export$a004fc522c1a4845), onTot[0] / onTot[1]);
        return (0, $d66841a16b153167$export$4e46ac54fc82cf3b)(rgb, opacity);
    }
    getStyles() {
        let styles = {
            'background-color': this.getRGB(0.5)
        };
        if (this._isSelected) {
            styles['outline'] = `solid ${this.getRGB(1)}`;
            styles['outline-offset'] = '-4px';
        }
        return styles;
    }
    onClick() {
        this._isSelected = true;
        this.dispatchEvent(new CustomEvent('select'));
    }
    static styles = [
        (0, $24833e213e3419f0$export$2e2bcd8739ae039),
        (0, $65e9333b9a0c9dfd$export$2e2bcd8739ae039)
    ];
    render() {
        if (this._initialized) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                <div
                    class="button outlined"
                    @click=${()=>this.onClick()}
                    style=${styleMap(this.getStyles())}
                >
                    <div class="small-heading"> Lighting </div>
                    <div class="sub-info"> sub-info </div>
                </div>`;
    }
}
customElements.define("light-button", $ba7585aafb473e34$export$14461509c6f1f877);


class $b161f025c07cf354$export$7fe46a8978a1b23d extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    // private properties
    _hass;
    _OPTIONS = [
        "lighting",
        "climate"
    ];
    _entityIds = [];
    _floorId = "basement";
    _structure = {};
    // internal reactive states
    static get properties() {
        return {
            _option: {
                state: true
            }
        };
    }
    /******************************* lifecycle *****************************/ constructor(){
        super();
        this._option = "lighting";
    }
    // establish config information for card
    setConfig() {}
    // gets the hass, and then creates the light bundles to be passed around.
    set hass(hass) {
        this._hass = hass;
        this.setStructures();
        console.log(this._entityIds);
    }
    /******************************* structure logic ***********************/ getAreaIds() {
        const areas = this._hass.areas;
        const areaIds = Object.keys(areas).filter((areaId)=>{
            return areas[areaId].floor_id === this._floorId;
        });
        return areaIds;
    }
    setEntityIds() {
        const entities = this._hass.entities;
        const areaIds = this.getAreaIds();
        const entityIds = Object.keys(entities).filter((entityId)=>{
            const entity = entities[entityId];
            const areaId = entity.area_id;
            return areaIds.includes(areaId);
        });
        this._entityIds = entityIds;
    }
    setStructures() {
        this.setEntityIds();
    }
    /**********************************************************************/ onClick(option) {
        this._option = option;
    }
    getButtonStyle(option) {
        const rgb = [
            100,
            100,
            100
        ]; // placeholder for fancy coloring choice
        let styles = {
            'background-color': (0, $d66841a16b153167$export$4e46ac54fc82cf3b)(rgb, .5)
        };
        if (this._option === option) {
            styles['outline'] = `solid ${(0, $d66841a16b153167$export$4e46ac54fc82cf3b)(rgb, 1)}`;
            styles['outline-offset'] = '-4px';
        }
        return styles;
    }
    button(option) {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div
            class="button outlined"
            @click=${()=>this.onClick(option)}
            style=${(0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)(this.getButtonStyle(option))}
        >
            <div class="small-heading"> ${option} </div>
            <div class="sub-info"> sub-info </div>
        </div>`;
    }
    buttonRow() {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="button-row">
                ${(0, $6db6ff6394e885e6$export$76d90c956114f2c2)(this._OPTIONS, (option)=>option, (option)=>this.button(option))}
            </div>
        `;
    }
    content() {
        let panel = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
        switch(this._option){
            case "lighting":
                panel = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div> Lighting Placeholder </div>`;
                break;
            case "climate":
                panel = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div> Climate Placeholder </div>`;
                break;
        }
        return panel;
    }
    static styles = [
        (0, $24833e213e3419f0$export$2e2bcd8739ae039),
        (0, $65e9333b9a0c9dfd$export$2e2bcd8739ae039)
    ];
    // return html
    render() {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-card>
                <div class="content">${this.content()}</div>
                ${this.buttonRow()}
            </ha-card>
        `;
    }
    // set card size parameters for ha
    getCardSize() {
        return 8;
    }
    getGridOptions() {
        return {
            rows: 9,
            columns: 24,
            min_rows: 9,
            max_rows: 9
        };
    }
}


customElements.define("my-basement-kiosk-card", (0, $b161f025c07cf354$export$7fe46a8978a1b23d));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "my-basement-kiosk-card",
    name: "my basement kiosk card",
    description: "Basement Kiosk Card"
});


//# sourceMappingURL=card.js.map
