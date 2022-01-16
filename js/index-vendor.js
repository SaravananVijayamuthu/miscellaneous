(function(g, f) {
	typeof exports === 'object' && typeof module !== 'undefined' ? f(exports) : typeof define === 'function' && define.amd ? define(['exports'], f) : (g = typeof globalThis !== 'undefined' ? globalThis : g || self, f(g.twind = {}));
}(this, (function(exports) {
	'use strict';
	var zt = Object.prototype.hasOwnProperty;
	var Je = Object.getOwnPropertySymbols,
		Dt = Object.prototype.propertyIsEnumerable;
	var a = Object.assign;
	var Xe = (e, t) => {
		var n = {};
		for (var r in e) zt.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (e != null && Je)
			for (var r of Je(e)) t.indexOf(r) < 0 && Dt.call(e, r) && (n[r] = e[r]);
		return n
	};
	var p = (e, t) => !!~e.indexOf(t),
		g = (e, t = "-") => e.join(t),
		ne = (e, t) => g(e.filter(Boolean), t),
		u = (e, t = 1) => e.slice(t),
		Qe = e => e,
		me = () => {},
		j = e => e[0].toUpperCase() + u(e),
		re = e => e.replace(/[A-Z]/g, "-$&").toLowerCase(),
		W = (e, t) => {
			for (; typeof e == "function";) e = e(t);
			return e
		},
		be = (e, t) => {
			e.size > t && e.delete(e.keys().next().value);
		},
		$e = (e, t) => !p("@:&", e[0]) && (p("rg", (typeof t)[5]) || Array.isArray(t)),
		ie = (e, t, n) => t ? Object.keys(t).reduce((r, s) => {
			let o = W(t[s], n);
			return $e(s, o) ? r[re(s)] = o : r[s] = s[0] == "@" && p("figa", s[1]) ? (r[s] || []).concat(o) : ie(r[s] || {}, o, n), r
		}, e) : e,
		he = typeof CSS != "undefined" && CSS.escape || (e => e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& ")),
		U = e => (Array.isArray(e) || (e = [e]), "@media " + g(e.map(t => (typeof t == "string" && (t = {
			min: t
		}), t.raw || g(Object.keys(t).map(n => `(${n}-width:${t[n]})`), " and "))), ",")),
		oe = e => {
			for (var t = 9, n = e.length; n--;) t = Math.imul(t ^ e.charCodeAt(n), 1597334677);
			return "tw-" + ((t ^ t >>> 9) >>> 0).toString(36)
		},
		qe = (e, t) => {
			for (var n = 0, r = e.length; n < r;) {
				let s = r + n >> 1;
				e[s] <= t ? n = s + 1 : r = s;
			}
			return r
		};
	var I, Z, V = (e = "") => (I.push(e), ""),
		Pe = e => {
			I.length = Math.max(I.lastIndexOf("") + ~~e, 0);
		},
		Mt = e => e && !p("!:", e[0]),
		Ot = e => e[0] == ":",
		Ze = (e, t) => {
			Z.push({
				v: I.filter(Ot),
				d: e,
				n: t,
				i: p(I, "!"),
				$: ""
			});
		},
		et = e => {
			let t = e[0] == "-";
			t && (e = u(e));
			let n = g(I.filter(Mt));
			return Ze(e == "&" ? n : (n && n + "-") + e, t), ""
		},
		se = (e, t) => {
			let n = "";
			for (let r, s = !1, o = 0; r = e[o++];) {
				if (s || r == "[") {
					n += r, s = r != "]";
					continue
				}
				switch (r) {
					case ":":
						n = n && V(":" + (e[o] == r ? e[o++] : "") + n);
						break;
					case "(":
						n = n && V(n), V();
						break;
					case "!":
						V(r);
						break;
					case ")":
					case " ":
					case " ":
					case `
`:
					case "\r":
						n = n && et(n), Pe(r !== ")");
						break;
					default:
						n += r;
				}
			}
			n && (t ? V(":" + n) : n.slice(-1) == "-" ? V(n.slice(0, -1)) : et(n));
		},
		tt = e => {
			V(), xe(e), Pe();
		},
		jt = (e, t) => {
			if (t) {
				V();
				let n = p("tbu", (typeof t)[1]);
				se(e, n), n && tt(t), Pe();
			}
		},
		xe = e => {
			switch (typeof e) {
				case "string":
					se(e);
					break;
				case "function":
					Ze(e);
					break;
				case "object":
					Array.isArray(e) ? e.forEach(tt) : e && Object.keys(e).forEach(t => {
						jt(t, e[t]);
					});
			}
		},
		nt = new WeakMap,
		Wt = e => {
			let t = nt.get(e);
			if (!t) {
				let n = NaN,
					r = "";
				t = e.map((s, o) => {
					if (n !== n && (s.slice(-1) == "[" || p(":-(", (e[o + 1] || "")[0])) && (n = o), o >= n) return d => {
						o == n && (r = ""), r += s, p("rg", (typeof d)[5]) ? r += d : d && (se(r), r = "", xe(d)), o == e.length - 1 && se(r);
					};
					let l = Z = [];
					se(s);
					let f = [...I];
					return Z = [], d => {
						Z.push(...l), I = [...f], d && xe(d);
					}
				}), nt.set(e, t);
			}
			return t
		},
		ae = e => (I = [], Z = [], Array.isArray(e[0]) && Array.isArray(e[0].raw) ? Wt(e[0]).forEach((t, n) => t(e[n + 1])) : xe(e), Z);
	var Ee, Lt = (e, t) => (typeof t == "function" && (Ee = !1), t),
		It = e => {
			Ee = !0;
			let t = JSON.stringify(e, Lt);
			return Ee && t
		},
		rt = new WeakMap,
		le = (e, t) => {
			let n = It(t),
				r;
			if (n) {
				var s = rt.get(e);
				s || rt.set(e, s = new Map), r = s.get(n);
			}
			return r || (r = Object.defineProperty((o, l) => (l = Array.isArray(o) ? l : o, W(e(t, l), l)), "toJSON", {
				value: () => n || t
			}), s && (s.set(n, r), be(s, 1e4))), r
		};
	var _t = (e, {
			css: t
		}) => t(ae(e)),
		Fe = (...e) => le(_t, e);
	var it = e => (t, n, r, s) => {
			if (t) {
				let o = n && e(n);
				if (o && o.length > 0) return o.reduce((l, f) => (l[ne([r, f, s])] = t, l), {})
			}
		},
		ot = it(e => ({
			t: ["top-left", "top-right"],
			r: ["top-right", "bottom-right"],
			b: ["bottom-left", "bottom-right"],
			l: ["bottom-left", "top-left"],
			tl: ["top-left"],
			tr: ["top-right"],
			bl: ["bottom-left"],
			br: ["bottom-right"]
		})[e]),
		ce = e => {
			let t = ({
				x: "lr",
				y: "tb"
			} [e] || e || "").split("").sort();
			for (let n = t.length; n--;)
				if (!(t[n] = {
						t: "top",
						r: "right",
						b: "bottom",
						l: "left"
					} [t[n]])) return;
			if (t.length) return t
		},
		ye = it(ce);
	var i, J, h, we = e => e == "cols" ? "columns" : "rows",
		de = e => (t, n, r) => ({
			[e]: r + ((i = g(t)) && "-" + i)
		}),
		w = (e, t) => (n, r, s) => (i = g(n, t)) && {
			[e || s]: i
		},
		v = e => (t, {
			theme: n
		}, r) => (i = n(e || r, t)) && {
			[e || r]: i
		},
		Se = (e, t) => (n, {
			theme: r
		}, s) => (i = r(e || s, n, g(n, t))) && {
			[e || s]: i
		},
		L = (e, t) => (n, r) => e(n, r, t),
		_ = de("display"),
		ge = de("position"),
		ee = de("textTransform"),
		te = de("textDecoration"),
		Ce = de("fontStyle"),
		B = e => (t, n, r) => ({
			["--tw-" + e]: r,
			fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
		}),
		Te = (e, {
			theme: t
		}, n) => (i = t("inset", e)) && {
			[n]: i
		},
		ue = (e, t, n, r = n) => (i = t(r + "Opacity", u(e))) && {
			[`--tw-${n}-opacity`]: i
		},
		ze = (e, t) => Math.round(parseInt(e, 16) * t),
		Re = (e, t, n) => e && e[0] == "#" && (i = (e.length - 1) / 3) && (h = [17, 1, .062272][i - 1]) ? `rgba(${ze(e.substr(1,i),h)},${ze(e.substr(1+i,i),h)},${ze(e.substr(1+2*i,i),h)},${t?`var(--tw-${t}${n?","+n:""})`:n||1})` : e,
		ve = (e, t, n) => n && typeof n == "string" ? (i = Re(n, t + "-opacity")) && i !== n ? {
			[`--tw-${t}-opacity`]: "1",
			[e]: [n, i]
		} : {
			[e]: n
		} : void 0,
		st = e => (h = Re(e, "", "0")) == i ? "transparent" : h,
		at = (e, {
			theme: t
		}, n, r, s, o) => (i = {
			x: ["right", "left"],
			y: ["bottom", "top"]
		} [e[0]]) && (h = `--tw-${n}-${e[0]}-reverse`) ? e[1] == "reverse" ? {
			[h]: "1"
		} : {
			[h]: "0",
			[ne([s, i[0], o])]: (J = t(r, u(e))) && `calc(${J} * var(${h}))`,
			[ne([s, i[1], o])]: J && [J, `calc(${J} * calc(1 - var(${h})))`]
		} : void 0,
		lt = (e, t) => t[0] && {
			[e]: (p("wun", (t[0] || "")[3]) ? "space-" : "") + t[0]
		},
		De = e => t => p(["start", "end"], t[0]) ? {
			[e]: "flex-" + t[0]
		} : lt(e, t),
		ct = e => (t, {
			theme: n
		}) => {
			if (i = n("grid" + j(e), t, "")) return {
				["grid-" + e]: i
			};
			switch (t[0]) {
				case "span":
					return t[1] && {
						["grid-" + e]: `span ${t[1]} / span ${t[1]}`
					};
				case "start":
				case "end":
					return (i = n("grid" + j(e) + j(t[0]), u(t), g(u(t)))) && {
						[`grid-${e}-${t[0]}`]: i
					}
			}
		},
		dt = (e, {
			theme: t
		}, n) => {
			switch (e[0]) {
				case "solid":
				case "dashed":
				case "dotted":
				case "double":
				case "none":
					return w("borderStyle")(e);
				case "collapse":
				case "separate":
					return w("borderCollapse")(e);
				case "opacity":
					return ue(e, t, n)
			}
			return (i = t(n + "Width", e, "")) ? {
				borderWidth: i
			} : ve("borderColor", n, t(n + "Color", e))
		},
		Me = e => (e ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))",
		Oe = (e, t, n) => e[0] && (i = t.theme(n, e[1] || e[0])) && {
			[`--tw-${n}-x`]: e[0] !== "y" && i,
			[`--tw-${n}-y`]: e[0] !== "x" && i,
			transform: [`${n}${e[1]?e[0].toUpperCase():""}(${i})`, Me()]
		},
		gt = e => (t, n, r) => r[1] ? ye(n.theme(e, t), r[1], e) : v(e)(t, n, r),
		X = gt("padding"),
		Q = gt("margin"),
		ut = (e, {
			theme: t
		}, n) => (i = {
			w: "width",
			h: "height"
		} [e[0]]) && {
			[i = `${n}${j(i)}`]: t(i, u(e))
		},
		M = (e, {
			theme: t
		}, n) => {
			let r = n.split("-"),
				s = r[0] == "backdrop" ? r[0] + "-" : "";
			if (s || e.unshift(...r), e[0] == "filter") {
				let o = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", s && "opacity", "saturate", "sepia", !s && "drop-shadow"].filter(Boolean);
				return e[1] == "none" ? {
					[s + "filter"]: "none"
				} : o.reduce((l, f) => (l["--tw-" + s + f] = "var(--tw-empty,/*!*/ /*!*/)", l), {
					[s + "filter"]: o.map(l => `var(--tw-${s}${l})`).join(" ")
				})
			}
			return h = e.shift(), p(["hue", "drop"], h) && (h += j(e.shift())), (i = t(s ? "backdrop" + j(h) : h, e)) && {
				["--tw-" + s + h]: (Array.isArray(i) ? i : [i]).map(o => `${re(h)}(${o})`).join(" ")
			}
		},
		ft = {
			group: (e, {
				tag: t
			}, n) => t(g([n, ...e])),
			hidden: L(_, "none"),
			inline: _,
			block: _,
			contents: _,
			flow: _,
			table: (e, t, n) => p(["auto", "fixed"], e[0]) ? {
				tableLayout: e[0]
			} : _(e, t, n),
			flex(e, t, n) {
				switch (e[0]) {
					case "row":
					case "col":
						return {
							flexDirection: g(e[0] == "col" ? ["column", ...u(e)] : e)
						};
					case "nowrap":
					case "wrap":
						return {
							flexWrap: g(e)
						};
					case "grow":
					case "shrink":
						return i = t.theme("flex" + j(e[0]), u(e), e[1] || 1), i != null && {
							["flex-" + e[0]]: "" + i
						}
				}
				return (i = t.theme("flex", e, "")) ? {
					flex: i
				} : _(e, t, n)
			},
			grid(e, t, n) {
				switch (e[0]) {
					case "cols":
					case "rows":
						return (i = t.theme("gridTemplate" + j(we(e[0])), u(e), e.length == 2 && Number(e[1]) ? `repeat(${e[1]},minmax(0,1fr))` : g(u(e)))) && {
							["gridTemplate-" + we(e[0])]: i
						};
					case "flow":
						return e.length > 1 && {
							gridAutoFlow: g(e[1] == "col" ? ["column", ...u(e, 2)] : u(e), " ")
						}
				}
				return _(e, t, n)
			},
			auto: (e, {
				theme: t
			}) => p(["cols", "rows"], e[0]) && (i = t("gridAuto" + j(we(e[0])), u(e), g(u(e)))) && {
				["gridAuto-" + we(e[0])]: i
			},
			static: ge,
			fixed: ge,
			absolute: ge,
			relative: ge,
			sticky: ge,
			visible: {
				visibility: "visible"
			},
			invisible: {
				visibility: "hidden"
			},
			antialiased: {
				WebkitFontSmoothing: "antialiased",
				MozOsxFontSmoothing: "grayscale"
			},
			"subpixel-antialiased": {
				WebkitFontSmoothing: "auto",
				MozOsxFontSmoothing: "auto"
			},
			truncate: {
				overflow: "hidden",
				whiteSpace: "nowrap",
				textOverflow: "ellipsis"
			},
			"sr-only": {
				position: "absolute",
				width: "1px",
				height: "1px",
				padding: "0",
				margin: "-1px",
				overflow: "hidden",
				whiteSpace: "nowrap",
				clip: "rect(0,0,0,0)",
				borderWidth: "0"
			},
			"not-sr-only": {
				position: "static",
				width: "auto",
				height: "auto",
				padding: "0",
				margin: "0",
				overflow: "visible",
				whiteSpace: "normal",
				clip: "auto"
			},
			resize: e => ({
				resize: {
					x: "horizontal",
					y: "vertical"
				} [e[0]] || e[0] || "both"
			}),
			box: e => e[0] && {
				boxSizing: e[0] + "-box"
			},
			appearance: w(),
			cursor: Se(),
			float: w(),
			clear: w(),
			decoration: w("boxDecorationBreak"),
			isolate: {
				isolation: "isolate"
			},
			isolation: w(),
			"mix-blend": w("mixBlendMode"),
			top: Te,
			right: Te,
			bottom: Te,
			left: Te,
			inset: (e, {
				theme: t
			}) => (i = ce(e[0])) ? ye(t("inset", u(e)), e[0]) : (i = t("inset", e)) && {
				top: i,
				right: i,
				bottom: i,
				left: i
			},
			underline: te,
			"line-through": te,
			"no-underline": L(te, "none"),
			"text-underline": L(te, "underline"),
			"text-no-underline": L(te, "none"),
			"text-line-through": L(te, "line-through"),
			uppercase: ee,
			lowercase: ee,
			capitalize: ee,
			"normal-case": L(ee, "none"),
			"text-normal-case": L(ee, "none"),
			italic: Ce,
			"not-italic": L(Ce, "normal"),
			"font-italic": L(Ce, "italic"),
			"font-not-italic": L(Ce, "normal"),
			font: (e, t, n) => (i = t.theme("fontFamily", e, "")) ? {
				fontFamily: i
			} : v("fontWeight")(e, t, n),
			items: e => e[0] && {
				alignItems: p(["start", "end"], e[0]) ? "flex-" + e[0] : g(e)
			},
			"justify-self": w(),
			"justify-items": w(),
			justify: De("justifyContent"),
			content: De("alignContent"),
			self: De("alignSelf"),
			place: e => e[0] && lt("place-" + e[0], u(e)),
			overscroll: e => e[0] && {
				["overscrollBehavior" + (e[1] ? "-" + e[0] : "")]: e[1] || e[0]
			},
			col: ct("column"),
			row: ct("row"),
			duration: v("transitionDuration"),
			delay: v("transitionDelay"),
			tracking: v("letterSpacing"),
			leading: v("lineHeight"),
			z: v("zIndex"),
			opacity: v(),
			ease: v("transitionTimingFunction"),
			p: X,
			py: X,
			px: X,
			pt: X,
			pr: X,
			pb: X,
			pl: X,
			m: Q,
			my: Q,
			mx: Q,
			mt: Q,
			mr: Q,
			mb: Q,
			ml: Q,
			w: v("width"),
			h: v("height"),
			min: ut,
			max: ut,
			fill: v(),
			order: v(),
			origin: Se("transformOrigin", " "),
			select: w("userSelect"),
			"pointer-events": w(),
			align: w("verticalAlign"),
			whitespace: w("whiteSpace"),
			"normal-nums": {
				fontVariantNumeric: "normal"
			},
			ordinal: B("ordinal"),
			"slashed-zero": B("slashed-zero"),
			"lining-nums": B("numeric-figure"),
			"oldstyle-nums": B("numeric-figure"),
			"proportional-nums": B("numeric-spacing"),
			"tabular-nums": B("numeric-spacing"),
			"diagonal-fractions": B("numeric-fraction"),
			"stacked-fractions": B("numeric-fraction"),
			overflow: (e, t, n) => p(["ellipsis", "clip"], e[0]) ? w("textOverflow")(e) : e[1] ? {
				["overflow-" + e[0]]: e[1]
			} : w()(e, t, n),
			transform: e => e[0] == "none" ? {
				transform: "none"
			} : {
				"--tw-translate-x": "0",
				"--tw-translate-y": "0",
				"--tw-rotate": "0",
				"--tw-skew-x": "0",
				"--tw-skew-y": "0",
				"--tw-scale-x": "1",
				"--tw-scale-y": "1",
				transform: Me(e[0] == "gpu")
			},
			rotate: (e, {
				theme: t
			}) => (i = t("rotate", e)) && {
				"--tw-rotate": i,
				transform: [`rotate(${i})`, Me()]
			},
			scale: Oe,
			translate: Oe,
			skew: Oe,
			gap: (e, t, n) => (i = {
				x: "column",
				y: "row"
			} [e[0]]) ? {
				[i + "Gap"]: t.theme("gap", u(e))
			} : v("gap")(e, t, n),
			stroke: (e, t, n) => (i = t.theme("stroke", e, "")) ? {
				stroke: i
			} : v("strokeWidth")(e, t, n),
			outline: (e, {
				theme: t
			}) => (i = t("outline", e)) && {
				outline: i[0],
				outlineOffset: i[1]
			},
			"break-normal": {
				wordBreak: "normal",
				overflowWrap: "normal"
			},
			"break-words": {
				overflowWrap: "break-word"
			},
			"break-all": {
				wordBreak: "break-all"
			},
			text(e, {
				theme: t
			}, n) {
				switch (e[0]) {
					case "left":
					case "center":
					case "right":
					case "justify":
						return {
							textAlign: e[0]
						};
					case "uppercase":
					case "lowercase":
					case "capitalize":
						return ee([], i, e[0]);
					case "opacity":
						return ue(e, t, n)
				}
				let r = t("fontSize", e, "");
				return r ? typeof r == "string" ? {
					fontSize: r
				} : a({
					fontSize: r[0]
				}, typeof r[1] == "string" ? {
					lineHeight: r[1]
				} : r[1]) : ve("color", "text", t("textColor", e))
			},
			bg(e, {
				theme: t
			}, n) {
				switch (e[0]) {
					case "fixed":
					case "local":
					case "scroll":
						return w("backgroundAttachment", ",")(e);
					case "bottom":
					case "center":
					case "left":
					case "right":
					case "top":
						return w("backgroundPosition", " ")(e);
					case "no":
						return e[1] == "repeat" && w("backgroundRepeat")(e);
					case "repeat":
						return p("xy", e[1]) ? w("backgroundRepeat")(e) : {
							backgroundRepeat: e[1] || e[0]
						};
					case "opacity":
						return ue(e, t, n, "background");
					case "clip":
					case "origin":
						return e[1] && {
							["background-" + e[0]]: e[1] + (e[1] == "text" ? "" : "-box")
						};
					case "blend":
						return w("background-blend-mode")(u(e));
					case "gradient":
						if (e[1] == "to" && (i = ce(e[2]))) return {
							backgroundImage: `linear-gradient(to ${g(i," ")},var(--tw-gradient-stops))`
						}
				}
				return (i = t("backgroundPosition", e, "")) ? {
					backgroundPosition: i
				} : (i = t("backgroundSize", e, "")) ? {
					backgroundSize: i
				} : (i = t("backgroundImage", e, "")) ? {
					backgroundImage: i
				} : ve("backgroundColor", "bg", t("backgroundColor", e))
			},
			from: (e, {
				theme: t
			}) => (i = t("gradientColorStops", e)) && {
				"--tw-gradient-from": i,
				"--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${st(i)})`
			},
			via: (e, {
				theme: t
			}) => (i = t("gradientColorStops", e)) && {
				"--tw-gradient-stops": `var(--tw-gradient-from),${i},var(--tw-gradient-to,${st(i)})`
			},
			to: (e, {
				theme: t
			}) => (i = t("gradientColorStops", e)) && {
				"--tw-gradient-to": i
			},
			border: (e, t, n) => ce(e[0]) ? ye(t.theme("borderWidth", u(e)), e[0], "border", "width") : dt(e, t, n),
			divide: (e, t, n) => (i = at(e, t, n, "divideWidth", "border", "width") || dt(e, t, n)) && {
				"&>:not([hidden])~:not([hidden])": i
			},
			space: (e, t, n) => (i = at(e, t, n, "space", "margin")) && {
				"&>:not([hidden])~:not([hidden])": i
			},
			placeholder: (e, {
				theme: t
			}, n) => (i = e[0] == "opacity" ? ue(e, t, n) : ve("color", "placeholder", t("placeholderColor", e))) && {
				"&::placeholder": i
			},
			shadow: (e, {
				theme: t
			}) => (i = t("boxShadow", e)) && {
				":global": {
					"*": {
						"--tw-shadow": "0 0 transparent"
					}
				},
				"--tw-shadow": i == "none" ? "0 0 transparent" : i,
				boxShadow: [i, "var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)"]
			},
			animate: (e, {
				theme: t,
				tag: n
			}) => {
				if (h = t("animation", e)) {
					let r = h.split(" ");
					return (i = t("keyframes", r[0], J = {})) !== J ? (h = n(r[0])) && {
						animation: h + " " + g(u(r), " "),
						["@keyframes " + h]: i
					} : {
						animation: h
					}
				}
			},
			ring(e, {
				theme: t
			}, n) {
				switch (e[0]) {
					case "inset":
						return {
							"--tw-ring-inset": "inset"
						};
					case "opacity":
						return ue(e, t, n);
					case "offset":
						return (i = t("ringOffsetWidth", u(e), "")) ? {
							"--tw-ring-offset-width": i
						} : {
							"--tw-ring-offset-color": t("ringOffsetColor", u(e))
						}
				}
				return (i = t("ringWidth", e, "")) ? {
					"--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
					"--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${i} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
					boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)",
					":global": {
						"*": {
							"--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
							"--tw-ring-offset-width": t("ringOffsetWidth", "", "0px"),
							"--tw-ring-offset-color": t("ringOffsetColor", "", "#fff"),
							"--tw-ring-color": Re(t("ringColor", "", "#93c5fd"), "ring-opacity", t("ringOpacity", "", "0.5")),
							"--tw-ring-offset-shadow": "0 0 transparent",
							"--tw-ring-shadow": "0 0 transparent"
						}
					}
				} : {
					"--tw-ring-opacity": "1",
					"--tw-ring-color": Re(t("ringColor", e), "ring-opacity")
				}
			},
			object: (e, t, n) => p(["contain", "cover", "fill", "none", "scale-down"], g(e)) ? {
				objectFit: g(e)
			} : Se("objectPosition", " ")(e, t, n),
			list: (e, t, n) => g(e) == "item" ? _(e, t, n) : p(["inside", "outside"], g(e)) ? {
				listStylePosition: e[0]
			} : Se("listStyleType")(e, t, n),
			rounded: (e, t, n) => ot(t.theme("borderRadius", u(e), ""), e[0], "border", "radius") || v("borderRadius")(e, t, n),
			"transition-none": {
				transitionProperty: "none"
			},
			transition: (e, {
				theme: t
			}) => ({
				transitionProperty: t("transitionProperty", e),
				transitionTimingFunction: t("transitionTimingFunction", ""),
				transitionDuration: t("transitionDuration", "")
			}),
			container: (e, {
				theme: t
			}) => {
				let {
					screens: n = t("screens"),
					center: r,
					padding: s
				} = t("container"), o = l => (i = s && (typeof s == "string" ? s : s[l] || s.DEFAULT)) ? {
					paddingRight: i,
					paddingLeft: i
				} : {};
				return Object.keys(n).reduce((l, f) => ((h = n[f]) && typeof h == "string" && (l[U(h)] = {
					"&": a({
						"max-width": h
					}, o(f))
				}), l), a(a({
					width: "100%"
				}, r ? {
					marginRight: "auto",
					marginLeft: "auto"
				} : {}), o("xs")))
			},
			filter: M,
			blur: M,
			brightness: M,
			contrast: M,
			grayscale: M,
			"hue-rotate": M,
			invert: M,
			saturate: M,
			sepia: M,
			"drop-shadow": M,
			backdrop: M
		};
	var pt = e => ({
		":root": {
			tabSize: 4
		},
		"body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": {
			margin: "0"
		},
		button: {
			backgroundColor: "transparent",
			backgroundImage: "none"
		},
		'button,[type="button"],[type="reset"],[type="submit"]': {
			WebkitAppearance: "button"
		},
		"button:focus": {
			outline: ["1px dotted", "5px auto -webkit-focus-ring-color"]
		},
		"fieldset,ol,ul,legend": {
			padding: "0"
		},
		"ol,ul": {
			listStyle: "none"
		},
		html: {
			lineHeight: "1.5",
			WebkitTextSizeAdjust: "100%",
			fontFamily: e("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif")
		},
		body: {
			fontFamily: "inherit",
			lineHeight: "inherit"
		},
		"*,::before,::after": {
			boxSizing: "border-box",
			border: `0 solid ${e("borderColor.DEFAULT","currentColor")}`
		},
		hr: {
			height: "0",
			color: "inherit",
			borderTopWidth: "1px"
		},
		img: {
			borderStyle: "solid"
		},
		textarea: {
			resize: "vertical"
		},
		"input::placeholder,textarea::placeholder": {
			opacity: "1",
			color: e("placeholderColor.DEFAULT", e("colors.gray.400", "#a1a1aa"))
		},
		'button,[role="button"]': {
			cursor: "pointer"
		},
		table: {
			textIndent: "0",
			borderColor: "inherit",
			borderCollapse: "collapse"
		},
		"h1,h2,h3,h4,h5,h6": {
			fontSize: "inherit",
			fontWeight: "inherit"
		},
		a: {
			color: "inherit",
			textDecoration: "inherit"
		},
		"button,input,optgroup,select,textarea": {
			fontFamily: "inherit",
			fontSize: "100%",
			margin: "0",
			padding: "0",
			lineHeight: "inherit",
			color: "inherit"
		},
		"button,select": {
			textTransform: "none"
		},
		"::-moz-focus-inner": {
			borderStyle: "none",
			padding: "0"
		},
		":-moz-focusring": {
			outline: "1px dotted ButtonText"
		},
		":-moz-ui-invalid": {
			boxShadow: "none"
		},
		progress: {
			verticalAlign: "baseline"
		},
		"::-webkit-inner-spin-button,::-webkit-outer-spin-button": {
			height: "auto"
		},
		'[type="search"]': {
			WebkitAppearance: "textfield",
			outlineOffset: "-2px"
		},
		"::-webkit-search-decoration": {
			WebkitAppearance: "none"
		},
		"::-webkit-file-upload-button": {
			WebkitAppearance: "button",
			font: "inherit"
		},
		summary: {
			display: "list-item"
		},
		"abbr[title]": {
			textDecoration: "underline dotted"
		},
		"b,strong": {
			fontWeight: "bolder"
		},
		"pre,code,kbd,samp": {
			fontFamily: e("fontFamily", "mono", "ui-monospace,monospace"),
			fontSize: "1em"
		},
		"sub,sup": {
			fontSize: "75%",
			lineHeight: "0",
			position: "relative",
			verticalAlign: "baseline"
		},
		sub: {
			bottom: "-0.25em"
		},
		sup: {
			top: "-0.5em"
		},
		"img,svg,video,canvas,audio,iframe,embed,object": {
			display: "block",
			verticalAlign: "middle"
		},
		"img,video": {
			maxWidth: "100%",
			height: "auto"
		}
	});
	var mt = {
		dark: "@media (prefers-color-scheme:dark)",
		sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
		"motion-reduce": "@media (prefers-reduced-motion:reduce)",
		"motion-safe": "@media (prefers-reduced-motion:no-preference)",
		first: "&:first-child",
		last: "&:last-child",
		even: "&:nth-child(2n)",
		odd: "&:nth-child(odd)",
		children: "&>*",
		siblings: "&~*",
		sibling: "&+*",
		override: "&&"
	};
	var bt = "__twind",
		ht = e => {
			let t = self[bt];
			return t || (t = document.head.appendChild(document.createElement("style")), t.id = bt, e && (t.nonce = e), t.appendChild(document.createTextNode(""))), t
		};
	var je = ({
			nonce: e,
			target: t = ht(e).sheet
		} = {}) => {
			let n = t.cssRules.length;
			return {
				target: t,
				insert: (r, s) => t.insertRule(r, n + s)
			}
		},
		We = () => ({
			target: null,
			insert: me
		});
	var ke = e => ({
			unknown(t, n = [], r, s) {
				r || this.report({
					id: "UNKNOWN_THEME_VALUE",
					key: t + "." + g(n)
				}, s);
			},
			report(r) {
				var {
					id: t
				} = r, n = Xe(r, ["id"]);
				return e(`[${t}] ${JSON.stringify(n)}`)
			}
		}),
		Ae = ke(e => console.warn(e)),
		Le = ke(e => {
			throw new Error(e)
		}),
		Ie = ke(me);
	var Ht = new Map([
		["align-self", "-ms-grid-row-align"],
		["color-adjust", "-webkit-print-color-adjust"],
		["column-gap", "grid-column-gap"],
		["gap", "grid-gap"],
		["grid-template-columns", "-ms-grid-columns"],
		["grid-template-rows", "-ms-grid-rows"],
		["justify-self", "-ms-grid-column-align"],
		["margin-inline-end", "-webkit-margin-end"],
		["margin-inline-start", "-webkit-margin-start"],
		["overflow-wrap", "word-wrap"],
		["padding-inline-end", "-webkit-padding-end"],
		["padding-inline-start", "-webkit-padding-start"],
		["row-gap", "grid-row-gap"],
		["scroll-margin-bottom", "scroll-snap-margin-bottom"],
		["scroll-margin-left", "scroll-snap-margin-left"],
		["scroll-margin-right", "scroll-snap-margin-right"],
		["scroll-margin-top", "scroll-snap-margin-top"],
		["scroll-margin", "scroll-snap-margin"],
		["text-combine-upright", "-ms-text-combine-horizontal"]
	]);

	function xt(e) {
		return Ht.get(e)
	}

	function yt(e) {
		var t = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|(?:mask(?:$|-[ispro]|-cl)))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(e);
		return t ? t[1] ? 1 : t[2] ? 2 : t[3] ? 3 : 5 : 0
	}

	function wt(e, t) {
		var n = /^(?:(pos)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(e);
		return n ? n[1] ? /^sti/i.test(t) ? 1 : 0 : n[2] ? /^image-/i.test(t) ? 1 : 0 : n[3] ? t[3] === "-" ? 2 : 0 : /^(inline-)?grid$/i.test(t) ? 4 : 0 : 0
	}
	var O = (e, t, n) => `${e}:${t}${n?" !important":""}`,
		_e = (e, t, n) => {
			let r = "",
				s = xt(e);
			s && (r += `${O(s,t,n)};`);
			let o = yt(e);
			return o & 1 && (r += `-webkit-${O(e,t,n)};`), o & 2 && (r += `-moz-${O(e,t,n)};`), o & 4 && (r += `-ms-${O(e,t,n)};`), o = wt(e, t), o & 1 && (r += `${O(e,`-webkit-${t}`,n)};`), o & 2 && (r += `${O(e,`-moz-${t}`,n)};`), o & 4 && (r += `${O(e,`-ms-${t}`,n)};`), r += O(e, t, n), r
		};
	var fe = (e, t) => {
			let n = {};
			do
				for (let r = 1; r < e; r++) n[`${r}/${e}`] = Number((r / e * 100).toFixed(6)) + "%"; while (++e <= t);
			return n
		},
		G = (e, t, n = 0) => {
			let r = {};
			for (; n <= e; n = n * 2 || 1) r[n] = n + t;
			return r
		},
		E = (e, t = "", n = 1, r = 0, s = 1, o = {}) => {
			for (; r <= e; r += s) o[r] = r / n + t;
			return o
		},
		x = e => t => t(e),
		Nt = (e, {
			theme: t
		}) => t(...e),
		Ut = (...e) => le(Nt, e),
		Vt = {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px"
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				black: "#000",
				white: "#fff",
				gray: {
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					400: "#9ca3af",
					500: "#6b7280",
					600: "#4b5563",
					700: "#374151",
					800: "#1f2937",
					900: "#111827"
				},
				red: {
					50: "#fef2f2",
					100: "#fee2e2",
					200: "#fecaca",
					300: "#fca5a5",
					400: "#f87171",
					500: "#ef4444",
					600: "#dc2626",
					700: "#b91c1c",
					800: "#991b1b",
					900: "#7f1d1d"
				},
				yellow: {
					50: "#fffbeb",
					100: "#fef3c7",
					200: "#fde68a",
					300: "#fcd34d",
					400: "#fbbf24",
					500: "#f59e0b",
					600: "#d97706",
					700: "#b45309",
					800: "#92400e",
					900: "#78350f"
				},
				green: {
					50: "#ecfdf5",
					100: "#d1fae5",
					200: "#a7f3d0",
					300: "#6ee7b7",
					400: "#34d399",
					500: "#10b981",
					600: "#059669",
					700: "#047857",
					800: "#065f46",
					900: "#064e3b"
				},
				blue: {
					50: "#eff6ff",
					100: "#dbeafe",
					200: "#bfdbfe",
					300: "#93c5fd",
					400: "#60a5fa",
					500: "#3b82f6",
					600: "#2563eb",
					700: "#1d4ed8",
					800: "#1e40af",
					900: "#1e3a8a"
				},
				indigo: {
					50: "#eef2ff",
					100: "#e0e7ff",
					200: "#c7d2fe",
					300: "#a5b4fc",
					400: "#818cf8",
					500: "#6366f1",
					600: "#4f46e5",
					700: "#4338ca",
					800: "#3730a3",
					900: "#312e81"
				},
				purple: {
					50: "#f5f3ff",
					100: "#ede9fe",
					200: "#ddd6fe",
					300: "#c4b5fd",
					400: "#a78bfa",
					500: "#8b5cf6",
					600: "#7c3aed",
					700: "#6d28d9",
					800: "#5b21b6",
					900: "#4c1d95"
				},
				pink: {
					50: "#fdf2f8",
					100: "#fce7f3",
					200: "#fbcfe8",
					300: "#f9a8d4",
					400: "#f472b6",
					500: "#ec4899",
					600: "#db2777",
					700: "#be185d",
					800: "#9d174d",
					900: "#831843"
				}
			},
			spacing: a(a(a(a(a({
				px: "1px",
				0: "0px"
			}, E(4, "rem", 4, .5, .5)), E(12, "rem", 4, 5)), {
				14: "3.5rem"
			}), E(64, "rem", 4, 16, 4)), {
				72: "18rem",
				80: "20rem",
				96: "24rem"
			}),
			durations: {
				75: "75ms",
				100: "100ms",
				150: "150ms",
				200: "200ms",
				300: "300ms",
				500: "500ms",
				700: "700ms",
				1e3: "1000ms"
			},
			animation: {
				none: "none",
				spin: "spin 1s linear infinite",
				ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
				pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				bounce: "bounce 1s infinite"
			},
			backdropBlur: x("blur"),
			backdropBrightness: x("brightness"),
			backdropContrast: x("contrast"),
			backdropGrayscale: x("grayscale"),
			backdropHueRotate: x("hueRotate"),
			backdropInvert: x("invert"),
			backdropOpacity: x("opacity"),
			backdropSaturate: x("saturate"),
			backdropSepia: x("sepia"),
			backgroundColor: x("colors"),
			backgroundImage: {
				none: "none"
			},
			backgroundOpacity: x("opacity"),
			backgroundSize: {
				auto: "auto",
				cover: "cover",
				contain: "contain"
			},
			blur: {
				0: "0",
				sm: "4px",
				DEFAULT: "8px",
				md: "12px",
				lg: "16px",
				xl: "24px",
				"2xl": "40px",
				"3xl": "64px"
			},
			brightness: a(a(a({}, E(200, "", 100, 0, 50)), E(110, "", 100, 90, 5)), {
				75: "0.75",
				125: "1.25"
			}),
			borderColor: e => a(a({}, e("colors")), {
				DEFAULT: e("colors.gray.200", "currentColor")
			}),
			borderOpacity: x("opacity"),
			borderRadius: {
				none: "0px",
				sm: "0.125rem",
				DEFAULT: "0.25rem",
				md: "0.375rem",
				lg: "0.5rem",
				xl: "0.75rem",
				"2xl": "1rem",
				"3xl": "1.5rem",
				"1/2": "50%",
				full: "9999px"
			},
			borderWidth: a({
				DEFAULT: "1px"
			}, G(8, "px")),
			boxShadow: {
				sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
				DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
				md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
				lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
				xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
				"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
				inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
				none: "none"
			},
			contrast: a(a({}, E(200, "", 100, 0, 50)), {
				75: "0.75",
				125: "1.25"
			}),
			divideColor: x("borderColor"),
			divideOpacity: x("borderOpacity"),
			divideWidth: x("borderWidth"),
			dropShadow: {
				sm: "0 1px 1px rgba(0,0,0,0.05)",
				DEFAULT: ["0 1px 2px rgba(0, 0, 0, 0.1)", "0 1px 1px rgba(0, 0, 0, 0.06)"],
				md: ["0 4px 3px rgba(0, 0, 0, 0.07)", "0 2px 2px rgba(0, 0, 0, 0.06)"],
				lg: ["0 10px 8px rgba(0, 0, 0, 0.04)", "0 4px 3px rgba(0, 0, 0, 0.1)"],
				xl: ["0 20px 13px rgba(0, 0, 0, 0.03)", "0 8px 5px rgba(0, 0, 0, 0.08)"],
				"2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
				none: "0 0 #0000"
			},
			fill: {
				current: "currentColor"
			},
			grayscale: {
				0: "0",
				DEFAULT: "100%"
			},
			hueRotate: {
				0: "0deg",
				15: "15deg",
				30: "30deg",
				60: "60deg",
				90: "90deg",
				180: "180deg"
			},
			invert: {
				0: "0",
				DEFAULT: "100%"
			},
			flex: {
				1: "1 1 0%",
				auto: "1 1 auto",
				initial: "0 1 auto",
				none: "none"
			},
			fontFamily: {
				sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
				serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
				mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
			},
			fontSize: {
				xs: ["0.75rem", "1rem"],
				sm: ["0.875rem", "1.25rem"],
				base: ["1rem", "1.5rem"],
				lg: ["1.125rem", "1.75rem"],
				xl: ["1.25rem", "1.75rem"],
				"2xl": ["1.5rem", "2rem"],
				"3xl": ["1.875rem", "2.25rem"],
				"4xl": ["2.25rem", "2.5rem"],
				"5xl": ["3rem", "1"],
				"6xl": ["3.75rem", "1"],
				"7xl": ["4.5rem", "1"],
				"8xl": ["6rem", "1"],
				"9xl": ["8rem", "1"]
			},
			fontWeight: {
				thin: "100",
				extralight: "200",
				light: "300",
				normal: "400",
				medium: "500",
				semibold: "600",
				bold: "700",
				extrabold: "800",
				black: "900"
			},
			gridTemplateColumns: {},
			gridTemplateRows: {},
			gridAutoColumns: {
				min: "min-content",
				max: "max-content",
				fr: "minmax(0,1fr)"
			},
			gridAutoRows: {
				min: "min-content",
				max: "max-content",
				fr: "minmax(0,1fr)"
			},
			gridColumn: {
				auto: "auto",
				"span-full": "1 / -1"
			},
			gridRow: {
				auto: "auto",
				"span-full": "1 / -1"
			},
			gap: x("spacing"),
			gradientColorStops: x("colors"),
			height: e => a(a(a({
				auto: "auto"
			}, e("spacing")), fe(2, 6)), {
				full: "100%",
				screen: "100vh"
			}),
			inset: e => a(a(a({
				auto: "auto"
			}, e("spacing")), fe(2, 4)), {
				full: "100%"
			}),
			keyframes: {
				spin: {
					from: {
						transform: "rotate(0deg)"
					},
					to: {
						transform: "rotate(360deg)"
					}
				},
				ping: {
					"0%": {
						transform: "scale(1)",
						opacity: "1"
					},
					"75%,100%": {
						transform: "scale(2)",
						opacity: "0"
					}
				},
				pulse: {
					"0%,100%": {
						opacity: "1"
					},
					"50%": {
						opacity: ".5"
					}
				},
				bounce: {
					"0%, 100%": {
						transform: "translateY(-25%)",
						animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
					},
					"50%": {
						transform: "none",
						animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
					}
				}
			},
			letterSpacing: {
				tighter: "-0.05em",
				tight: "-0.025em",
				normal: "0em",
				wide: "0.025em",
				wider: "0.05em",
				widest: "0.1em"
			},
			lineHeight: a({
				none: "1",
				tight: "1.25",
				snug: "1.375",
				normal: "1.5",
				relaxed: "1.625",
				loose: "2"
			}, E(10, "rem", 4, 3)),
			margin: e => a({
				auto: "auto"
			}, e("spacing")),
			maxHeight: e => a(a({}, e("spacing")), {
				full: "100%",
				screen: "100vh"
			}),
			maxWidth: (e, {
				breakpoints: t
			}) => a({
				none: "none",
				0: "0rem",
				xs: "20rem",
				sm: "24rem",
				md: "28rem",
				lg: "32rem",
				xl: "36rem",
				"2xl": "42rem",
				"3xl": "48rem",
				"4xl": "56rem",
				"5xl": "64rem",
				"6xl": "72rem",
				"7xl": "80rem",
				full: "100%",
				min: "min-content",
				max: "max-content",
				prose: "65ch"
			}, t(e("screens"))),
			minHeight: {
				0: "0px",
				full: "100%",
				screen: "100vh"
			},
			minWidth: {
				0: "0px",
				full: "100%",
				min: "min-content",
				max: "max-content"
			},
			opacity: a(a({}, E(100, "", 100, 0, 10)), {
				5: "0.05",
				25: "0.25",
				75: "0.75",
				95: "0.95"
			}),
			order: a({
				first: "-9999",
				last: "9999",
				none: "0"
			}, E(12, "", 1, 1)),
			outline: {
				none: ["2px solid transparent", "2px"],
				white: ["2px dotted white", "2px"],
				black: ["2px dotted black", "2px"]
			},
			padding: x("spacing"),
			placeholderColor: x("colors"),
			placeholderOpacity: x("opacity"),
			ringColor: e => a({
				DEFAULT: e("colors.blue.500", "#3b82f6")
			}, e("colors")),
			ringOffsetColor: x("colors"),
			ringOffsetWidth: G(8, "px"),
			ringOpacity: e => a({
				DEFAULT: "0.5"
			}, e("opacity")),
			ringWidth: a({
				DEFAULT: "3px"
			}, G(8, "px")),
			rotate: a(a(a({}, G(2, "deg")), G(12, "deg", 3)), G(180, "deg", 45)),
			saturate: E(200, "", 100, 0, 50),
			scale: a(a(a({}, E(150, "", 100, 0, 50)), E(110, "", 100, 90, 5)), {
				75: "0.75",
				125: "1.25"
			}),
			sepia: {
				0: "0",
				DEFAULT: "100%"
			},
			skew: a(a({}, G(2, "deg")), G(12, "deg", 3)),
			space: x("spacing"),
			stroke: {
				current: "currentColor"
			},
			strokeWidth: E(2),
			textColor: x("colors"),
			textOpacity: x("opacity"),
			transitionDuration: e => a({
				DEFAULT: "150ms"
			}, e("durations")),
			transitionDelay: x("durations"),
			transitionProperty: {
				none: "none",
				all: "all",
				DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
				colors: "background-color,border-color,color,fill,stroke",
				opacity: "opacity",
				shadow: "box-shadow",
				transform: "transform"
			},
			transitionTimingFunction: {
				DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
				linear: "linear",
				in: "cubic-bezier(0.4,0,1,1)",
				out: "cubic-bezier(0,0,0.2,1)",
				"in-out": "cubic-bezier(0.4,0,0.2,1)"
			},
			translate: e => a(a(a({}, e("spacing")), fe(2, 4)), {
				full: "100%"
			}),
			width: e => a(a(a(a({
				auto: "auto"
			}, e("spacing")), fe(2, 6)), fe(12, 12)), {
				screen: "100vw",
				full: "100%",
				min: "min-content",
				max: "max-content"
			}),
			zIndex: a({
				auto: "auto"
			}, E(50, "", 1, 0, 10))
		},
		St = (e, t = {}, n = []) => (Object.keys(e).forEach(r => {
			let s = e[r];
			r == "DEFAULT" && (t[g(n)] = s, t[g(n, ".")] = s);
			let o = [...n, r];
			t[g(o)] = s, t[g(o, ".")] = s, s && typeof s == "object" && St(s, t, o);
		}, t), t),
		Bt = {
			negative: () => ({}),
			breakpoints: e => Object.keys(e).filter(t => typeof e[t] == "string").reduce((t, n) => (t["screen-" + n] = e[n], t), {})
		},
		Gt = (e, t) => (t = t[0] == "[" && t.slice(-1) == "]" && t.slice(1, -1)) && p(e, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(t) && (p(t, "calc(") ? t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : t),
		Ct = e => {
			let t = new Map,
				n = a(a({}, Vt), e),
				r = (o, l) => {
					let f = o && o[l],
						d = typeof f == "function" ? f(s, Bt) : f;
					return d && l == "colors" ? St(d) : d
				},
				s = (o, l, f) => {
					let d = o.split(".");
					o = d[0], d.length > 1 && (f = l, l = g(u(d), "."));
					let S = t.get(o);
					if (S || (t.set(o, S = a({}, r(n, o))), Object.assign(S, r(n.extend, o))), l != null) {
						l = (Array.isArray(l) ? g(l) : l) || "DEFAULT";
						let H = Gt(o, l) || S[l];
						return H == null ? f : Array.isArray(H) && !p(["fontSize", "outline", "dropShadow"], o) ? g(H, ",") : H
					}
					return S
				};
			return s
		};
	var Tt = (e, t) => (n, r) => {
		if (typeof n.d == "function") return n.d(t);
		let s = n.d.split(/-(?![^[]*])/g);
		if (!r && s[0] == "tw" && n.$ == n.d) return n.$;
		for (let o = s.length; o; o--) {
			let l = g(s.slice(0, o)),
				f = e[l];
			if (f) return typeof f == "function" ? f(u(s, o), t, l) : typeof f == "string" ? t[r ? "css" : "tw"](f) : f
		}
	};
	var pe, He = /^:(group(?:(?!-focus).+?)*)-(.+)$/,
		Ne = /^(:not)-(.+)/,
		Ue = e => e[1] == "[" ? u(e) : e,
		Rt = (e, t, {
			theme: n,
			tag: r
		}) => {
			let s = (o, l) => (pe = n("screens", u(l), "")) ? {
				[U(pe)]: o
			} : l == ":dark" && e == "class" ? {
				".dark &": o
			} : (pe = He.exec(l)) ? {
				[`.${he(r(pe[1]))}:${pe[2]} &`]: o
			} : {
				[t[u(l)] || "&" + l.replace(Ne, (f, d, S) => d + "(" + Ue(":" + S) + ")")]: o
			};
			return (o, l) => l.v.reduceRight(s, o)
		};
	var P, Ve = e => (((P = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(e)) ? +P[1] / (P[2] ? 15 : 1) / 10 : 0) & 31) << 22,
		vt = e => {
			P = 0;
			for (let t = e.length; t--;) P += p("-:,", e[t]);
			return P
		},
		Be = e => (vt(e) & 15) << 18,
		Yt = ["rst", "st", "en", "d", "nk", "sited", "pty", "ecked", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "ad-on", "tiona", "quire"],
		Kt = e => 1 << (~(P = Yt.indexOf(e.replace(He, ":$2").slice(3, 8))) ? P : 17),
		kt = (e, t) => (n, r) => n | ((P = e("screens", u(r), "")) ? 1 << 27 | Ve(U(P)) : r == ":dark" ? 1 << 30 : (P = t[r] || r.replace(Ne, ":$2"))[0] == "@" ? Be(P) : Kt(r)),
		At = e => e[0] == "-" ? 0 : vt(e) + ((P = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(e)) ? +!!P[1] || -!!P[2] : 0) + 1;
	var Ge = (e, t) => t + "{" + e + "}",
		$t = (e, t, n) => {
			let {
				theme: r,
				tag: s
			} = n, o = (C, R) => "--" + s(R), l = C => `${C}`.replace(/--(tw-[\w-]+)\b/g, o), f = (C, R, k) => (C = l(C), Array.isArray(R) ? g(R.filter(Boolean).map(T => e(C, l(T), k)), ";") : e(C, l(R), k)), d, S = (C, R, k, T, F) => {
				if (Array.isArray(T)) {
					T.forEach(b => b && S(C, R, k, b, F));
					return
				}
				let Y = "",
					N = 0,
					q = 0;
				T["@apply"] && (T = ie(W(Fe(T["@apply"]), n), a(a({}, T), {
					"@apply": void 0
				}), n)), Object.keys(T).forEach(b => {
					let A = W(T[b], n);
					if ($e(b, A)) {
						if (A !== "" && b.length > 1) {
							let $ = re(b);
							q += 1, N = Math.max(N, At($)), Y = (Y && Y + ";") + f($, A, F);
						}
					} else if (A)
						if (b == ":global" && (b = "@global"), b[0] == "@")
							if (b[1] == "g") S([], "", 0, A, F);
							else if (b[1] == "f") S([], b, 0, A, F);
					else if (b[1] == "k") {
						let $ = d.length;
						S([], "", 0, A, F);
						let z = d.splice($, d.length - $);
						d.push({
							r: Ge(g(z.map(c => c.r), ""), b),
							p: z.reduce((c, m) => c + m.p, 0)
						});
					} else b[1] == "i" ? (Array.isArray(A) ? A : [A]).forEach($ => $ && d.push({
						p: 0,
						r: `${b} ${$};`
					})) : (b[2] == "c" && (b = U(n.theme("screens", u(b, 8).trim()))), S([...C, b], R, k | Ve(b) | Be(b), A, F));
					else S(C, R ? g(R.split(/,(?![^[]*])/g).map($ => g(b.split(/,(?![^[]*])/g).map(z => p(z, "&") ? z.replace(/&/g, $) : ($ && $ + " ") + z), ",")), ",") : b, k, A, F);
				}), q && d.push({
					r: C.reduceRight(Ge, Ge(Y, R)),
					p: k * (1 << 8) + ((Math.max(0, 15 - q) & 15) << 4 | (N || 15) & 15)
				});
			}, H = kt(r, t);
			return (C, R, k, T = 0) => (T <<= 28, d = [], S([], R ? "." + he(R) : "", k ? k.v.reduceRight(H, T) : T, C, k && k.i), d)
		};
	var Pt = (e, t, n, r) => {
		let s;
		n((l = []) => s = l);
		let o;
		return n((l = new Set) => o = l), ({
			r: l,
			p: f
		}) => {
			if (!o.has(l)) {
				o.add(l);
				let d = qe(s, f);
				try {
					e.insert(l, d), s.splice(d, 0, f);
				} catch (S) {
					/:-[mwo]/.test(l) || t.report({
						id: "INJECT_CSS_ERROR",
						css: l,
						error: S
					}, r);
				}
			}
		}
	};
	var Ye = (e, t, n, r = t) => e === !1 ? n : e === !0 ? r : e || t,
		Jt = e => (typeof e == "string" ? {
			t: Le,
			a: Ae,
			i: Ie
		} [e[1]] : e) || Ae,
		Xt = (e, t) => e + (t[1] == ":" ? u(t, 2) + ":" : u(t)) + ":",
		Et = (e, t = e.d) => typeof t == "function" ? "" : e.v.reduce(Xt, "") + (e.i ? "!" : "") + (e.n ? "-" : "") + t,
		Qt = {
			_: {
				value: "",
				writable: !0
			}
		},
		Ft = (e = {}) => {
			let t = Ct(e.theme),
				n = Jt(e.mode),
				r = Ye(e.hash, !1, !1, oe),
				s = e.important,
				o = {
					v: []
				},
				l = 0,
				f = [],
				d = {
					tw: (...c) => $(c),
					theme: (c, m, y) => {
						var K;
						let D = (K = t(c, m, y)) != null ? K : n.unknown(c, m == null || Array.isArray(m) ? m : m.split("."), y != null, d);
						return o.n && D && p("rg", (typeof D)[5]) ? `calc(${D} * -1)` : D
					},
					tag: c => r ? r(c) : c,
					css: c => {
						l++;
						let m = f.length;
						try {
							(typeof c == "string" ? ae([c]) : c).forEach(A);
							let y = Object.create(null, Qt);
							for (let D = m; D < f.length; D++) {
								let K = f[D];
								if (K) switch (typeof K) {
									case "object":
										ie(y, K, d);
										break;
									case "string":
										y._ += (y._ && " ") + K;
								}
							}
							return y
						} finally {
							f.length = m, l--;
						}
					}
				},
				S = Tt(a(a({}, ft), e.plugins), d),
				H = c => {
					let m = o;
					o = c;
					try {
						return W(S(c), d)
					} finally {
						o = m;
					}
				},
				C = a(a({}, mt), e.variants),
				R = Rt(e.darkMode || "media", C, d),
				k = $t(Ye(e.prefix, _e, O), C, d),
				T = e.sheet || (typeof window == "undefined" ? We() : je(e)),
				{
					init: F = c => c()
				} = T,
				Y = Pt(T, n, F, d),
				N;
			F((c = new Map) => N = c);
			let q = new WeakMap,
				b = (c, m) => c == "_" ? void 0 : typeof m == "function" ? JSON.stringify(W(m, d), b) : m,
				A = c => {
					!l && o.v.length && (c = a(a({}, c), {
						v: [...o.v, ...c.v],
						$: ""
					})), c.$ || (c.$ = Et(c, q.get(c.d)));
					let m = l ? null : N.get(c.$);
					if (m == null) {
						let y = H(c);
						if (c.$ || (c.$ = oe(JSON.stringify(y, b)), q.set(c.d, c.$), c.$ = Et(c, c.$)), y && typeof y == "object")
							if (c.v = c.v.map(Ue), s && (c.i = s), y = R(y, c), l) f.push(y);
							else {
								let D = typeof c.d == "function" ? typeof y._ == "string" ? 1 : 3 : 2;
								m = r || typeof c.d == "function" ? (r || oe)(D + c.$) : c.$, k(y, m, c, D).forEach(Y), y._ && (m += " " + y._);
							}
						else typeof y == "string" ? m = y : (m = c.$, n.report({
							id: "UNKNOWN_DIRECTIVE",
							rule: m
						}, d)), l && typeof c.d != "function" && f.push(m);
						l || (N.set(c.$, m), be(N, 3e4));
					}
					return m
				},
				$ = c => g(ae(c).map(A).filter(Boolean), " "),
				z = Ye(e.preflight, Qe, !1);
			if (z) {
				let c = pt(t),
					m = k(typeof z == "function" ? W(z(c, d), d) || c : a(a({}, c), z));
				F((y = (m.forEach(Y), !0)) => y);
			}
			return {
				init: () => n.report({
					id: "LATE_SETUP_CALL"
				}, d),
				process: $
			}
		};
	var Ke = e => {
		let t = o => (n(), t(o)),
			n = o => {
				({
					process: t,
					init: n
				} = Ft(o));
			};
		e && n(e);
		let r;
		return {
			tw: Object.defineProperties((...o) => t(o), {
				theme: {
					get: (o => () => (r || t([l => (r = l, "")]), r[o]))("theme")
				}
			}),
			setup: o => n(o)
		}
	};
	var {
		tw: qt,
		setup: Zt
	} = Ke();
	exports.apply = Fe;
	exports.autoprefix = _e;
	exports.create = Ke;
	exports.cssomSheet = je;
	exports.directive = le;
	exports.hash = oe;
	exports.mode = ke;
	exports.noprefix = O;
	exports.setup = Zt;
	exports.silent = Ie;
	exports.strict = Le;
	exports.theme = Ut;
	exports.tw = qt;
	exports.voidSheet = We;
	exports.warn = Ae;
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
}))); //# sourceMappingURL=twind.umd.js.map

(function(g, f) {
	typeof exports === 'object' && typeof module !== 'undefined' ? f(exports, require('twind')) : typeof define === 'function' && define.amd ? define(['exports', 'twind'], f) : (g = typeof globalThis !== 'undefined' ? globalThis : g || self, f(g.twindObserve = {}, g.twind));
}(this, (function(exports, twind) {
	'use strict';
	var l = (e, t) => {
		e.size > t && e.delete(e.keys().next().value);
	};
	var p = new WeakMap,
		S = e => {
			let t = p.get(e);
			return t || (t = new Map, p.set(e, t)), t
		},
		g = (e, t, i) => i.indexOf(e) == t,
		f = ({
			tw: e = twind.tw
		} = {}) => {
			if (typeof MutationObserver == "function") {
				let t = S(e),
					i = ({
						target: n,
						addedNodes: d
					}) => {
						var c;
						let s = (c = n.getAttribute) == null ? void 0 : c.call(n, "class");
						if (s) {
							let r = t.get(s);
							r || (r = e(s).split(/ +/g).filter(g).join(" "), t.set(s, r), t.set(r, r), l(t, 3e4)), s !== r && n.setAttribute("class", r);
						}
						for (let r = d.length; r--;) {
							let u = d[r];
							o([{
								target: u,
								addedNodes: u.children || []
							}]);
						}
					},
					o = n => {
						n.forEach(i), n = a.takeRecords(), n && n.forEach(i);
					},
					a = new MutationObserver(o);
				return {
					observe(n) {
						return o([{
							target: n,
							addedNodes: [n]
						}]), a.observe(n, {
							attributes: !0,
							attributeFilter: ["class"],
							subtree: !0,
							childList: !0
						}), this
					},
					disconnect() {
						return a.disconnect(), this
					}
				}
			}
			return {
				observe() {
					return this
				},
				disconnect() {
					return this
				}
			}
		};

	function h(e, t = typeof this == "function" ? void 0 : this) {
		return f(t).observe(e)
	}
	Object.keys(twind).forEach(function(k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function() {
				return twind[k];
			}
		});
	});
	exports.createObserver = f;
	exports.observe = h;
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
})));

t = twind.apply;
h = twind.directive;

(function(g, f) {
	typeof exports === 'object' && typeof module !== 'undefined' ? f(exports, require('twind')) : typeof define === 'function' && define.amd ? define(['exports', 'twind'], f) : (g = typeof globalThis !== 'undefined' ? globalThis : g || self, f(g.twindAspectRatio = {}, g.twind));
}(this, (function(exports, twind) {
	'use strict';
	var u = () => ({
			paddingBottom: "calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%)"
		}),
		n = (e, {
			theme: s,
			tag: i
		}) => e === "none" ? twind.apply`static pb-0 children:(static h-auto w-auto inset-auto)` : {
			"--tw-aspect-w": e.w && e.w !== "ratio" && s("aspectRatio", "" + e.w, "" + e.w),
			"--tw-aspect-h": e.h && s("aspectRatio", "" + e.h, "" + e.h),
			_: e.h && e.w !== "ratio" ? i("aspect-ratio") : void 0,
			":global": {
				["." + i("aspect-ratio")]: twind.apply`relative ${u} children:(absolute h-full w-full inset-0)`
			}
		},
		a = (e, s) => {
			if (Array.isArray(e)) switch (e[0]) {
				case "w":
					return twind.directive(n, {
						w: e[1]
					});
				case "h":
					return twind.directive(n, {
						h: e[1]
					});
				case "none":
					return twind.directive(n, e[0]);
				default:
					return e.length === 1 && (e = e[0].split("/")), twind.directive(n, {
						w: e[0],
						h: e[1]
					})
			}
			if (e === "none") return twind.directive(n, e);
			if (typeof e == "object") return twind.directive(n, e);
			if (s !== void 0) return twind.directive(n, {
				w: e,
				h: s
			});
			let [i, c] = e.split("/");
			return twind.directive(n, {
				w: i,
				h: c
			})
		};
	exports.aspectRatio = a;
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
})));

var x = e => {
		switch (e) {
			case "%20":
				return " ";
			case "%3D":
				return "=";
			case "%3A":
				return ":";
			case "%2F":
				return "/";
			default:
				return e.toLowerCase()
		}
	},
	o = e => "data:image/svg+xml," + encodeURIComponent(e.trim().replace(/\s+/g, " ").replace(/"/g, "'")).replace(/%[\dA-F]{2}/g, x),
	n = ({
		theme: e
	}) => ({
		"&::placeholder": {
			opacity: "1",
			color: e("placeholderColor.DEFAULT", e("colors.gray.400", "#a1a1aa"))
		}
	}),
	i = ({
		theme: e
	}) => ({
		backgroundImage: "initial",
		backgroundPosition: "initial",
		backgroundRepeat: "unset",
		backgroundSize: "initial",
		paddingRight: e("spacing.3"),
		colorAdjust: "unset"
	}),
	c = ({
		theme: e
	}) => ({
		"background-image": `url("${o(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${e("colors.gray.500")}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`)}")`,
		backgroundPosition: `right ${e("spacing.2")} center`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "1.5em 1.5em",
		paddingRight: e("spacing.10"),
		colorAdjust: "exact"
	}),
	r = t`
  appearance-none bg-white border(& gray-500) rounded-none
  py-2 px-3 text-base
  focus:(outline-none ring(1 blue-600) border-blue-600)
`,
	l = e => ({
		[e + "::-webkit-datetime-edit-fields-wrapper"]: t`p-0`,
		[e + "::-webkit-date-and-time-value"]: {
			minHeight: "1.5em"
		}
	}),
	w = t(r, n, () => ({
		...l("&"),
		"&[multiple]": i
	})),
	k = t(r, n),
	S = t(r, c, () => ({
		"&[multiple]": i
	})),
	a = () => ({
		"&": t`
    appearance-none p-0 inline-block align-middle select-none
    flex-shrink-0 h-4 w-4 text-blue-600 bg-white border(& gray-500)
    ${()=>({colorAdjust:"exact",backgroundOrigin:"border-box"})}
  `,
		"&:focus": t`outline-none ring(2 blue-600) border-gray-500`,
		"&:checked": t`border-transparent bg(current center no-repeat) ${()=>({backgroundSize:"100% 100%"})}`,
		"&:checked:hover,&:checked:focus": t`border-transparent bg-current`
	}),
	d = () => ({
		"&": t`rounded-none`,
		"&:checked": {
			backgroundImage: `url("${o('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>')}")`
		},
		"&:indeterminate": t`border-transparent bg(current center no-repeat) ${()=>({backgroundImage:`url("${o('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>')}")`,backgroundSize:"100% 100%"})}`,
		"&:indeterminate:hover,&:indeterminate:focus": t`border-transparent bg-current`
	}),
	u = () => ({
		"&": t`rounded-full`,
		"&:checked": {
			backgroundImage: `url("${o('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>')}")`
		}
	}),
	f = t(a, d),
	y = t(a, u),
	p = () => ({
		"&": {
			background: "unset",
			borderColor: "inherit",
			borderWidth: "0",
			borderRadius: "0",
			padding: "0",
			fontSize: "unset",
			lineHeight: "inherit"
		},
		"&:focus": {
			outline: ["1px solid ButtonText", "1px auto -webkit-focus-ring-color"]
		}
	}),
	C = t(p),
	g = e => ({
		[`[type="text"],[type="email"],[type="url"],[type="password"],[type="number"],[type="date"],[type="datetime-local"],[type="month"],[type="search"],[type="tel"],[type="time"],[type="week"],[multiple],${e}textarea,${e}select`]: r,
		[`${e}input,${e}textarea`]: n,
		...l(""),
		[`${e}select`]: c,
		"[multiple]": i,
		'[type="checkbox"],[type="radio"]': a,
		'[type="checkbox"]': d,
		'[type="radio"]': u,
		'[type="file"]': p
	}),
	v = h(() => g(""), void 0),
	R = e => (b, m) => {
		let s = {
			...b,
			...g("html ")
		};
		return typeof e == "function" ? e(s, m) : {
			...s,
			...e
		}
	};

(function(g, f) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = f() : typeof define === 'function' && define.amd ? define(f) : (g = typeof globalThis !== 'undefined' ? globalThis : g || self, g.twindTypography = f());
}(this, (function() {
	'use strict';
	var i = t => t.toFixed(7).replace(/(\.\d+?)0+$/, "$1").replace(/\.0$/, ""),
		r = t => `${i(t/16)}rem`,
		o = (t, n) => `${i(t/n)}em`,
		h = ({
			theme: t,
			tag: n
		}) => ({
			DEFAULT: {
				css: [{
					color: t("colors", ["gray", "700"]),
					maxWidth: "65ch",
					[`[class~="${n("lead")}"]`]: {
						color: t("colors", ["gray", "600"])
					},
					a: {
						color: t("colors", ["gray", "900"]),
						textDecoration: "underline",
						fontWeight: "500"
					},
					strong: {
						color: t("colors", ["gray", "900"]),
						fontWeight: "600"
					},
					ol: {
						counterReset: "list-counter"
					},
					"ol > li": {
						position: "relative",
						counterIncrement: "list-counter"
					},
					"ol > li::before": {
						content: 'counter(list-counter) "."',
						position: "absolute",
						fontWeight: "400",
						color: t("colors", ["gray", "500"])
					},
					"ul > li": {
						position: "relative"
					},
					"ul > li::before": {
						content: '""',
						position: "absolute",
						backgroundColor: t("colors", ["gray", "300"]),
						borderRadius: "50%"
					},
					hr: {
						borderColor: t("colors", ["gray", "200"]),
						borderTopWidth: "1"
					},
					blockquote: {
						fontWeight: "500",
						fontStyle: "italic",
						color: t("colors", ["gray", "900"]),
						borderLeftWidth: "0.25rem",
						borderLeftColor: t("colors", ["gray", "200"]),
						quotes: '"\\201C""\\201D""\\2018""\\2019"'
					},
					"blockquote p:first-of-type::before": {
						content: "open-quote"
					},
					"blockquote p:last-of-type::after": {
						content: "close-quote"
					},
					h1: {
						color: t("colors", ["gray", "900"]),
						fontWeight: "800"
					},
					h2: {
						color: t("colors", ["gray", "900"]),
						fontWeight: "700"
					},
					h3: {
						color: t("colors", ["gray", "900"]),
						fontWeight: "600"
					},
					h4: {
						color: t("colors", ["gray", "900"]),
						fontWeight: "600"
					},
					"figure figcaption": {
						color: t("colors", ["gray", "500"])
					},
					code: {
						color: t("colors", ["gray", "900"]),
						fontWeight: "600"
					},
					"code::before": {
						content: '"`"'
					},
					"code::after": {
						content: '"`"'
					},
					"a code": {
						color: t("colors", ["gray", "900"])
					},
					pre: {
						color: t("colors", ["gray", "200"]),
						backgroundColor: t("colors", ["gray", "800"]),
						overflowX: "auto"
					},
					"pre code": {
						backgroundColor: "transparent",
						borderWidth: "0",
						borderRadius: "0",
						padding: "0",
						fontWeight: "400",
						color: "inherit",
						fontSize: "inherit",
						fontFamily: "inherit",
						lineHeight: "inherit"
					},
					"pre code::before": {
						content: '""'
					},
					"pre code::after": {
						content: '""'
					},
					table: {
						width: "100%",
						tableLayout: "auto",
						textAlign: "left",
						marginTop: o(32, 16),
						marginBottom: o(32, 16)
					},
					thead: {
						color: t("colors", ["gray", "900"]),
						fontWeight: "600",
						borderBottomWidth: "1px",
						borderBottomColor: t("colors", ["gray", "300"])
					},
					"thead th": {
						verticalAlign: "bottom"
					},
					"tbody tr": {
						borderBottomWidth: "1px",
						borderBottomColor: t("colors", ["gray", "200"])
					},
					"tbody tr:last-child": {
						borderBottomWidth: "0"
					},
					"tbody td": {
						verticalAlign: "top"
					}
				}, {
					fontSize: r(16),
					lineHeight: i(28 / 16),
					p: {
						marginTop: o(20, 16),
						marginBottom: o(20, 16)
					},
					[`[class~="${n("lead")}"]`]: {
						fontSize: o(20, 16),
						lineHeight: i(32 / 20),
						marginTop: o(24, 20),
						marginBottom: o(24, 20)
					},
					blockquote: {
						marginTop: o(32, 20),
						marginBottom: o(32, 20),
						paddingLeft: o(20, 20)
					},
					h1: {
						fontSize: o(36, 16),
						marginTop: "0",
						marginBottom: o(32, 36),
						lineHeight: i(40 / 36)
					},
					h2: {
						fontSize: o(24, 16),
						marginTop: o(48, 24),
						marginBottom: o(24, 24),
						lineHeight: i(32 / 24)
					},
					h3: {
						fontSize: o(20, 16),
						marginTop: o(32, 20),
						marginBottom: o(12, 20),
						lineHeight: i(32 / 20)
					},
					h4: {
						marginTop: o(24, 16),
						marginBottom: o(8, 16),
						lineHeight: i(24 / 16)
					},
					img: {
						marginTop: o(32, 16),
						marginBottom: o(32, 16)
					},
					video: {
						marginTop: o(32, 16),
						marginBottom: o(32, 16)
					},
					figure: {
						marginTop: o(32, 16),
						marginBottom: o(32, 16)
					},
					"figure > *": {
						marginTop: "0",
						marginBottom: "0"
					},
					"figure figcaption": {
						fontSize: o(14, 16),
						lineHeight: i(20 / 14),
						marginTop: o(12, 14)
					},
					code: {
						fontSize: o(14, 16)
					},
					"h2 code": {
						fontSize: o(21, 24)
					},
					"h3 code": {
						fontSize: o(18, 20)
					},
					pre: {
						fontSize: o(14, 16),
						lineHeight: i(24 / 14),
						marginTop: o(24, 14),
						marginBottom: o(24, 14),
						borderRadius: r(6),
						paddingTop: o(12, 14),
						paddingRight: o(16, 14),
						paddingBottom: o(12, 14),
						paddingLeft: o(16, 14)
					},
					ol: {
						marginTop: o(20, 16),
						marginBottom: o(20, 16)
					},
					ul: {
						marginTop: o(20, 16),
						marginBottom: o(20, 16)
					},
					li: {
						marginTop: o(8, 16),
						marginBottom: o(8, 16)
					},
					"ol > li": {
						paddingLeft: o(28, 16)
					},
					"ol > li::before": {
						left: "0"
					},
					"ul > li": {
						paddingLeft: o(28, 16)
					},
					"ul > li::before": {
						width: o(6, 16),
						height: o(6, 16),
						top: `calc(${o(28/2,16)} - ${o(3,16)})`,
						left: o(4, 16)
					},
					"> ul > li p": {
						marginTop: o(12, 16),
						marginBottom: o(12, 16)
					},
					"> ul > li > *:first-child": {
						marginTop: o(20, 16)
					},
					"> ul > li > *:last-child": {
						marginBottom: o(20, 16)
					},
					"> ol > li > *:first-child": {
						marginTop: o(20, 16)
					},
					"> ol > li > *:last-child": {
						marginBottom: o(20, 16)
					},
					"ul ul, ul ol, ol ul, ol ol": {
						marginTop: o(12, 16),
						marginBottom: o(12, 16)
					},
					hr: {
						marginTop: o(48, 16),
						marginBottom: o(48, 16)
					},
					"hr + *": {
						marginTop: "0"
					},
					"h2 + *": {
						marginTop: "0"
					},
					"h3 + *": {
						marginTop: "0"
					},
					"h4 + *": {
						marginTop: "0"
					},
					table: {
						fontSize: o(14, 16),
						lineHeight: i(24 / 14)
					},
					"thead th": {
						paddingRight: o(8, 14),
						paddingBottom: o(8, 14),
						paddingLeft: o(8, 14)
					},
					"thead th:first-child": {
						paddingLeft: "0"
					},
					"thead th:last-child": {
						paddingRight: "0"
					},
					"tbody td": {
						paddingTop: o(8, 14),
						paddingRight: o(8, 14),
						paddingBottom: o(8, 14),
						paddingLeft: o(8, 14)
					},
					"tbody td:first-child": {
						paddingLeft: "0"
					},
					"tbody td:last-child": {
						paddingRight: "0"
					}
				}, {
					"> :first-child": {
						marginTop: "0"
					},
					"> :last-child": {
						marginBottom: "0"
					}
				}]
			},
			sm: {
				css: [{
					fontSize: r(14),
					lineHeight: i(24 / 14),
					p: {
						marginTop: o(16, 14),
						marginBottom: o(16, 14)
					},
					[`[class~="${n("lead")}"]`]: {
						fontSize: o(18, 14),
						lineHeight: i(28 / 18),
						marginTop: o(16, 18),
						marginBottom: o(16, 18)
					},
					blockquote: {
						marginTop: o(24, 18),
						marginBottom: o(24, 18),
						paddingLeft: o(20, 18)
					},
					h1: {
						fontSize: o(30, 14),
						marginTop: "0",
						marginBottom: o(24, 30),
						lineHeight: i(36 / 30)
					},
					h2: {
						fontSize: o(20, 14),
						marginTop: o(32, 20),
						marginBottom: o(16, 20),
						lineHeight: i(28 / 20)
					},
					h3: {
						fontSize: o(18, 14),
						marginTop: o(28, 18),
						marginBottom: o(8, 18),
						lineHeight: i(28 / 18)
					},
					h4: {
						marginTop: o(20, 14),
						marginBottom: o(8, 14),
						lineHeight: i(20 / 14)
					},
					img: {
						marginTop: o(24, 14),
						marginBottom: o(24, 14)
					},
					video: {
						marginTop: o(24, 14),
						marginBottom: o(24, 14)
					},
					figure: {
						marginTop: o(24, 14),
						marginBottom: o(24, 14)
					},
					"figure > *": {
						marginTop: "0",
						marginBottom: "0"
					},
					"figure figcaption": {
						fontSize: o(12, 14),
						lineHeight: i(16 / 12),
						marginTop: o(8, 12)
					},
					code: {
						fontSize: o(12, 14)
					},
					"h2 code": {
						fontSize: o(18, 20)
					},
					"h3 code": {
						fontSize: o(16, 18)
					},
					pre: {
						fontSize: o(12, 14),
						lineHeight: i(20 / 12),
						marginTop: o(20, 12),
						marginBottom: o(20, 12),
						borderRadius: r(4),
						paddingTop: o(8, 12),
						paddingRight: o(12, 12),
						paddingBottom: o(8, 12),
						paddingLeft: o(12, 12)
					},
					ol: {
						marginTop: o(16, 14),
						marginBottom: o(16, 14)
					},
					ul: {
						marginTop: o(16, 14),
						marginBottom: o(16, 14)
					},
					li: {
						marginTop: o(4, 14),
						marginBottom: o(4, 14)
					},
					"ol > li": {
						paddingLeft: o(22, 14)
					},
					"ol > li::before": {
						left: "0"
					},
					"ul > li": {
						paddingLeft: o(22, 14)
					},
					"ul > li::before": {
						height: o(5, 14),
						width: o(5, 14),
						top: `calc(${o(24/2,14)} - ${o(2.5,14)})`,
						left: o(3, 14)
					},
					"> ul > li p": {
						marginTop: o(8, 14),
						marginBottom: o(8, 14)
					},
					"> ul > li > *:first-child": {
						marginTop: o(16, 14)
					},
					"> ul > li > *:last-child": {
						marginBottom: o(16, 14)
					},
					"> ol > li > *:first-child": {
						marginTop: o(16, 14)
					},
					"> ol > li > *:last-child": {
						marginBottom: o(16, 14)
					},
					"ul ul, ul ol, ol ul, ol ol": {
						marginTop: o(8, 14),
						marginBottom: o(8, 14)
					},
					hr: {
						marginTop: o(40, 14),
						marginBottom: o(40, 14)
					},
					"hr + *": {
						marginTop: "0"
					},
					"h2 + *": {
						marginTop: "0"
					},
					"h3 + *": {
						marginTop: "0"
					},
					"h4 + *": {
						marginTop: "0"
					},
					table: {
						fontSize: o(12, 14),
						lineHeight: i(18 / 12)
					},
					"thead th": {
						paddingRight: o(12, 12),
						paddingBottom: o(8, 12),
						paddingLeft: o(12, 12)
					},
					"thead th:first-child": {
						paddingLeft: "0"
					},
					"thead th:last-child": {
						paddingRight: "0"
					},
					"tbody td": {
						paddingTop: o(8, 12),
						paddingRight: o(12, 12),
						paddingBottom: o(8, 12),
						paddingLeft: o(12, 12)
					},
					"tbody td:first-child": {
						paddingLeft: "0"
					},
					"tbody td:last-child": {
						paddingRight: "0"
					}
				}, {
					"> :first-child": {
						marginTop: "0"
					},
					"> :last-child": {
						marginBottom: "0"
					}
				}]
			},
			lg: {
				css: [{
					fontSize: r(18),
					lineHeight: i(32 / 18),
					p: {
						marginTop: o(24, 18),
						marginBottom: o(24, 18)
					},
					[`[class~="${n("lead")}"]`]: {
						fontSize: o(22, 18),
						lineHeight: i(32 / 22),
						marginTop: o(24, 22),
						marginBottom: o(24, 22)
					},
					blockquote: {
						marginTop: o(40, 24),
						marginBottom: o(40, 24),
						paddingLeft: o(24, 24)
					},
					h1: {
						fontSize: o(48, 18),
						marginTop: "0",
						marginBottom: o(40, 48),
						lineHeight: i(48 / 48)
					},
					h2: {
						fontSize: o(30, 18),
						marginTop: o(56, 30),
						marginBottom: o(32, 30),
						lineHeight: i(40 / 30)
					},
					h3: {
						fontSize: o(24, 18),
						marginTop: o(40, 24),
						marginBottom: o(16, 24),
						lineHeight: i(36 / 24)
					},
					h4: {
						marginTop: o(32, 18),
						marginBottom: o(8, 18),
						lineHeight: i(28 / 18)
					},
					img: {
						marginTop: o(32, 18),
						marginBottom: o(32, 18)
					},
					video: {
						marginTop: o(32, 18),
						marginBottom: o(32, 18)
					},
					figure: {
						marginTop: o(32, 18),
						marginBottom: o(32, 18)
					},
					"figure > *": {
						marginTop: "0",
						marginBottom: "0"
					},
					"figure figcaption": {
						fontSize: o(16, 18),
						lineHeight: i(24 / 16),
						marginTop: o(16, 16)
					},
					code: {
						fontSize: o(16, 18)
					},
					"h2 code": {
						fontSize: o(26, 30)
					},
					"h3 code": {
						fontSize: o(21, 24)
					},
					pre: {
						fontSize: o(16, 18),
						lineHeight: i(28 / 16),
						marginTop: o(32, 16),
						marginBottom: o(32, 16),
						borderRadius: r(6),
						paddingTop: o(16, 16),
						paddingRight: o(24, 16),
						paddingBottom: o(16, 16),
						paddingLeft: o(24, 16)
					},
					ol: {
						marginTop: o(24, 18),
						marginBottom: o(24, 18)
					},
					ul: {
						marginTop: o(24, 18),
						marginBottom: o(24, 18)
					},
					li: {
						marginTop: o(12, 18),
						marginBottom: o(12, 18)
					},
					"ol > li": {
						paddingLeft: o(30, 18)
					},
					"ol > li::before": {
						left: "0"
					},
					"ul > li": {
						paddingLeft: o(30, 18)
					},
					"ul > li::before": {
						width: o(6, 18),
						height: o(6, 18),
						top: `calc(${o(32/2,18)} - ${o(3,18)})`,
						left: o(4, 18)
					},
					"> ul > li p": {
						marginTop: o(16, 18),
						marginBottom: o(16, 18)
					},
					"> ul > li > *:first-child": {
						marginTop: o(24, 18)
					},
					"> ul > li > *:last-child": {
						marginBottom: o(24, 18)
					},
					"> ol > li > *:first-child": {
						marginTop: o(24, 18)
					},
					"> ol > li > *:last-child": {
						marginBottom: o(24, 18)
					},
					"ul ul, ul ol, ol ul, ol ol": {
						marginTop: o(16, 18),
						marginBottom: o(16, 18)
					},
					hr: {
						marginTop: o(56, 18),
						marginBottom: o(56, 18)
					},
					"hr + *": {
						marginTop: "0"
					},
					"h2 + *": {
						marginTop: "0"
					},
					"h3 + *": {
						marginTop: "0"
					},
					"h4 + *": {
						marginTop: "0"
					},
					table: {
						fontSize: o(16, 18),
						lineHeight: i(24 / 16)
					},
					"thead th": {
						paddingRight: o(12, 16),
						paddingBottom: o(12, 16),
						paddingLeft: o(12, 16)
					},
					"thead th:first-child": {
						paddingLeft: "0"
					},
					"thead th:last-child": {
						paddingRight: "0"
					},
					"tbody td": {
						paddingTop: o(12, 16),
						paddingRight: o(12, 16),
						paddingBottom: o(12, 16),
						paddingLeft: o(12, 16)
					},
					"tbody td:first-child": {
						paddingLeft: "0"
					},
					"tbody td:last-child": {
						paddingRight: "0"
					}
				}, {
					"> :first-child": {
						marginTop: "0"
					},
					"> :last-child": {
						marginBottom: "0"
					}
				}]
			},
			xl: {
				css: [{
					fontSize: r(20),
					lineHeight: i(36 / 20),
					p: {
						marginTop: o(24, 20),
						marginBottom: o(24, 20)
					},
					[`[class~="${n("lead")}"]`]: {
						fontSize: o(24, 20),
						lineHeight: i(36 / 24),
						marginTop: o(24, 24),
						marginBottom: o(24, 24)
					},
					blockquote: {
						marginTop: o(48, 30),
						marginBottom: o(48, 30),
						paddingLeft: o(32, 30)
					},
					h1: {
						fontSize: o(56, 20),
						marginTop: "0",
						marginBottom: o(48, 56),
						lineHeight: i(56 / 56)
					},
					h2: {
						fontSize: o(36, 20),
						marginTop: o(56, 36),
						marginBottom: o(32, 36),
						lineHeight: i(40 / 36)
					},
					h3: {
						fontSize: o(30, 20),
						marginTop: o(48, 30),
						marginBottom: o(20, 30),
						lineHeight: i(40 / 30)
					},
					h4: {
						marginTop: o(36, 20),
						marginBottom: o(12, 20),
						lineHeight: i(32 / 20)
					},
					img: {
						marginTop: o(40, 20),
						marginBottom: o(40, 20)
					},
					video: {
						marginTop: o(40, 20),
						marginBottom: o(40, 20)
					},
					figure: {
						marginTop: o(40, 20),
						marginBottom: o(40, 20)
					},
					"figure > *": {
						marginTop: "0",
						marginBottom: "0"
					},
					"figure figcaption": {
						fontSize: o(18, 20),
						lineHeight: i(28 / 18),
						marginTop: o(18, 18)
					},
					code: {
						fontSize: o(18, 20)
					},
					"h2 code": {
						fontSize: o(31, 36)
					},
					"h3 code": {
						fontSize: o(27, 30)
					},
					pre: {
						fontSize: o(18, 20),
						lineHeight: i(32 / 18),
						marginTop: o(36, 18),
						marginBottom: o(36, 18),
						borderRadius: r(8),
						paddingTop: o(20, 18),
						paddingRight: o(24, 18),
						paddingBottom: o(20, 18),
						paddingLeft: o(24, 18)
					},
					ol: {
						marginTop: o(24, 20),
						marginBottom: o(24, 20)
					},
					ul: {
						marginTop: o(24, 20),
						marginBottom: o(24, 20)
					},
					li: {
						marginTop: o(12, 20),
						marginBottom: o(12, 20)
					},
					"ol > li": {
						paddingLeft: o(36, 20)
					},
					"ol > li::before": {
						left: "0"
					},
					"ul > li": {
						paddingLeft: o(36, 20)
					},
					"ul > li::before": {
						width: o(7, 20),
						height: o(7, 20),
						top: `calc(${o(36/2,20)} - ${o(3.5,20)})`,
						left: o(5, 20)
					},
					"> ul > li p": {
						marginTop: o(16, 20),
						marginBottom: o(16, 20)
					},
					"> ul > li > *:first-child": {
						marginTop: o(24, 20)
					},
					"> ul > li > *:last-child": {
						marginBottom: o(24, 20)
					},
					"> ol > li > *:first-child": {
						marginTop: o(24, 20)
					},
					"> ol > li > *:last-child": {
						marginBottom: o(24, 20)
					},
					"ul ul, ul ol, ol ul, ol ol": {
						marginTop: o(16, 20),
						marginBottom: o(16, 20)
					},
					hr: {
						marginTop: o(56, 20),
						marginBottom: o(56, 20)
					},
					"hr + *": {
						marginTop: "0"
					},
					"h2 + *": {
						marginTop: "0"
					},
					"h3 + *": {
						marginTop: "0"
					},
					"h4 + *": {
						marginTop: "0"
					},
					table: {
						fontSize: o(18, 20),
						lineHeight: i(28 / 18)
					},
					"thead th": {
						paddingRight: o(12, 18),
						paddingBottom: o(16, 18),
						paddingLeft: o(12, 18)
					},
					"thead th:first-child": {
						paddingLeft: "0"
					},
					"thead th:last-child": {
						paddingRight: "0"
					},
					"tbody td": {
						paddingTop: o(16, 18),
						paddingRight: o(12, 18),
						paddingBottom: o(16, 18),
						paddingLeft: o(12, 18)
					},
					"tbody td:first-child": {
						paddingLeft: "0"
					},
					"tbody td:last-child": {
						paddingRight: "0"
					}
				}, {
					"> :first-child": {
						marginTop: "0"
					},
					"> :last-child": {
						marginBottom: "0"
					}
				}]
			},
			"2xl": {
				css: [{
					fontSize: r(24),
					lineHeight: i(40 / 24),
					p: {
						marginTop: o(32, 24),
						marginBottom: o(32, 24)
					},
					[`[class~="${n("lead")}"]`]: {
						fontSize: o(30, 24),
						lineHeight: i(44 / 30),
						marginTop: o(32, 30),
						marginBottom: o(32, 30)
					},
					blockquote: {
						marginTop: o(64, 36),
						marginBottom: o(64, 36),
						paddingLeft: o(40, 36)
					},
					h1: {
						fontSize: o(64, 24),
						marginTop: "0",
						marginBottom: o(56, 64),
						lineHeight: i(64 / 64)
					},
					h2: {
						fontSize: o(48, 24),
						marginTop: o(72, 48),
						marginBottom: o(40, 48),
						lineHeight: i(52 / 48)
					},
					h3: {
						fontSize: o(36, 24),
						marginTop: o(56, 36),
						marginBottom: o(24, 36),
						lineHeight: i(44 / 36)
					},
					h4: {
						marginTop: o(40, 24),
						marginBottom: o(16, 24),
						lineHeight: i(36 / 24)
					},
					img: {
						marginTop: o(48, 24),
						marginBottom: o(48, 24)
					},
					video: {
						marginTop: o(48, 24),
						marginBottom: o(48, 24)
					},
					figure: {
						marginTop: o(48, 24),
						marginBottom: o(48, 24)
					},
					"figure > *": {
						marginTop: "0",
						marginBottom: "0"
					},
					"figure figcaption": {
						fontSize: o(20, 24),
						lineHeight: i(32 / 20),
						marginTop: o(20, 20)
					},
					code: {
						fontSize: o(20, 24)
					},
					"h2 code": {
						fontSize: o(42, 48)
					},
					"h3 code": {
						fontSize: o(32, 36)
					},
					pre: {
						fontSize: o(20, 24),
						lineHeight: i(36 / 20),
						marginTop: o(40, 20),
						marginBottom: o(40, 20),
						borderRadius: r(8),
						paddingTop: o(24, 20),
						paddingRight: o(32, 20),
						paddingBottom: o(24, 20),
						paddingLeft: o(32, 20)
					},
					ol: {
						marginTop: o(32, 24),
						marginBottom: o(32, 24)
					},
					ul: {
						marginTop: o(32, 24),
						marginBottom: o(32, 24)
					},
					li: {
						marginTop: o(12, 24),
						marginBottom: o(12, 24)
					},
					"ol > li": {
						paddingLeft: o(40, 24)
					},
					"ol > li::before": {
						left: "0"
					},
					"ul > li": {
						paddingLeft: o(40, 24)
					},
					"ul > li::before": {
						width: o(8, 24),
						height: o(8, 24),
						top: `calc(${o(40/2,24)} - ${o(4,24)})`,
						left: o(6, 24)
					},
					"> ul > li p": {
						marginTop: o(20, 24),
						marginBottom: o(20, 24)
					},
					"> ul > li > *:first-child": {
						marginTop: o(32, 24)
					},
					"> ul > li > *:last-child": {
						marginBottom: o(32, 24)
					},
					"> ol > li > *:first-child": {
						marginTop: o(32, 24)
					},
					"> ol > li > *:last-child": {
						marginBottom: o(32, 24)
					},
					"ul ul, ul ol, ol ul, ol ol": {
						marginTop: o(16, 24),
						marginBottom: o(16, 24)
					},
					hr: {
						marginTop: o(72, 24),
						marginBottom: o(72, 24)
					},
					"hr + *": {
						marginTop: "0"
					},
					"h2 + *": {
						marginTop: "0"
					},
					"h3 + *": {
						marginTop: "0"
					},
					"h4 + *": {
						marginTop: "0"
					},
					table: {
						fontSize: o(20, 24),
						lineHeight: i(28 / 20)
					},
					"thead th": {
						paddingRight: o(12, 20),
						paddingBottom: o(16, 20),
						paddingLeft: o(12, 20)
					},
					"thead th:first-child": {
						paddingLeft: "0"
					},
					"thead th:last-child": {
						paddingRight: "0"
					},
					"tbody td": {
						paddingTop: o(16, 20),
						paddingRight: o(12, 20),
						paddingBottom: o(16, 20),
						paddingLeft: o(12, 20)
					},
					"tbody td:first-child": {
						paddingLeft: "0"
					},
					"tbody td:last-child": {
						paddingRight: "0"
					}
				}, {
					"> :first-child": {
						marginTop: "0"
					},
					"> :last-child": {
						marginBottom: "0"
					}
				}]
			}
		});
	var s = ({
			className: t = "prose"
		} = {}) => ({
			lead: (n, {
				tag: g
			}) => g("lead"),
			[t]: (n, g) => {
				let e = g.theme("colors", [n[0], "600"], "");
				if (e) return {
					"& a": {
						color: e
					},
					"& a code": {
						color: e
					}
				};
				let f = h(g),
					{
						css: m
					} = f[n[0] || "DEFAULT"] || {};
				if (m) {
					let d = {};
					return m.forEach(p => Object.keys(p).forEach(l => {
						let a = p[l],
							c = a != null && typeof a == "object" && !Array.isArray(a) ? `& ${l}` : l;
						d[c] = a;
					})), d
				}
			}
		}),
		T = s;
	return T;
}))); //# sourceMappingURL=typography.umd.js.map

(function(g, f) {
	typeof exports === 'object' && typeof module !== 'undefined' ? f(exports, require('twind')) : typeof define === 'function' && define.amd ? define(['exports', 'twind'], f) : (g = typeof globalThis !== 'undefined' ? globalThis : g || self, f(g.twindContent = {}, g.twind));
}(this, (function(exports, twind) {
	'use strict';
	var c = new Set(["open-quote", "close-quote", "no-open-quote", "no-close-quote", "normal", "none", "inherit", "initial", "unset"]),
		n = t => t.join("-"),
		s = t => {
			switch (t[0]) {
				case "data":
					return `attr(${n(t)})`;
				case "attr":
				case "counter":
					return `${t[0]}(${n(t.slice(1))})`;
				case "var":
					return `var(--${n(t)})`;
				case void 0:
					return "attr(data-content)";
				default:
					return JSON.stringify(n(t))
			}
		},
		i = (t, {
			theme: r
		}) => {
			let e = Array.isArray(t) ? n(t) : t;
			return {
				content: e && r("content", [e], "") || c.has(e) && e || (Array.isArray(t) ? s(t) : e)
			}
		},
		u = (t, r) => Array.isArray(t) ? i(t, r) : twind.directive(i, t);
	exports.content = u;
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
}))); //# sourceMappingURL=content.umd.js.map


const {
	colors,
	components,
	theme
} = {
	"name": "Tailstrap Default",
	"fonts": ["Inter"],
	"theme": {
		"extend": {
			"colors": {
				"primary": {
					"50": "#eff6ff",
					"100": "#dbeafe",
					"200": "#bfdbfe",
					"300": "#93c5fd",
					"400": "#60a5fa",
					"500": "#3b82f6",
					"600": "#2563eb",
					"700": "#1d4ed8",
					"800": "#1e40af",
					"900": "#1e3a8a",
					"DEFAULT": "#2563eb"
				},
				"secondary": {
					"50": "#fdf2f8",
					"100": "#fce7f3",
					"200": "#fbcfe8",
					"300": "#f9a8d4",
					"400": "#f472b6",
					"500": "#ec4899",
					"600": "#db2777",
					"700": "#be185d",
					"800": "#9d174d",
					"900": "#831843",
					"DEFAULT": "#db2777"
				},
				"tertiary": {
					"50": "#f5f3ff",
					"100": "#ede9fe",
					"200": "#ddd6fe",
					"300": "#c4b5fd",
					"400": "#a78bfa",
					"500": "#8b5cf6",
					"600": "#7c3aed",
					"700": "#6d28d9",
					"800": "#5b21b6",
					"900": "#4c1d95",
					"DEFAULT": "#7c3aed"
				},
				"success": {
					"50": "#ecfdf5",
					"100": "#d1fae5",
					"200": "#a7f3d0",
					"300": "#6ee7b7",
					"400": "#34d399",
					"500": "#10b981",
					"600": "#059669",
					"700": "#047857",
					"800": "#065f46",
					"900": "#064e3b",
					"DEFAULT": "#10b981"
				},
				"info": "#60a5fa",
				"warning": {
					"50": "#fffbeb",
					"100": "#fef3c7",
					"200": "#fde68a",
					"300": "#fcd34d",
					"400": "#fbbf24",
					"500": "#f59e0b",
					"600": "#d97706",
					"700": "#b45309",
					"800": "#92400e",
					"900": "#78350f",
					"DEFAULT": "#f59e0b"
				},
				"danger": {
					"50": "#fef2f2",
					"100": "#fee2e2",
					"200": "#fecaca",
					"300": "#fca5a5",
					"400": "#f87171",
					"500": "#ef4444",
					"600": "#dc2626",
					"700": "#b91c1c",
					"800": "#991b1b",
					"900": "#7f1d1d",
					"DEFAULT": "#dc2626"
				},
				"light": "#f3f4f6",
				"dark": "#1f2937",
				"white": "white",
				"black": "black",
				"muted": "#374151"
			},
			"spacing": {
				"112": "28rem",
				"128": "32rem",
				"144": "36rem",
				"160": "40rem",
				"192": "48rem"
			},
			"fontFamily": {
				"sans": "Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\""
			},
			"backgroundImage": {
				"arrow-down": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")",
				"caret-down": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='currentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\");"
			}
		},
		"content": {
			"empty": "\"\""
		}
	},
	"author": "Versoly",
	"colors": {
		"dark": {
			"ghost": {
				"DEFAULT": "pink-100",
				"hover:bg": "pink-200"
			},
			"DEFAULT": {
				"text": "white",
				"DEFAULT": "gray-800",
				"hover:bg": "gray-900",
				"active:bg": "gray-800"
			}
		},
		"info": {
			"alert": {
				"bg": "blue-50",
				"text": "blue-600"
			},
			"ghost": {
				"hover:bg": "blue-100",
				"active:bg": "blue-200"
			},
			"DEFAULT": {
				"text": "white",
				"DEFAULT": "blue-400",
				"hover:bg": "blue-500",
				"active:bg": "blue-600"
			}
		},
		"black": {
			"DEFAULT": {
				"text": "white",
				"DEFAULT": "black"
			}
		},
		"light": {
			"alert": {
				"bg": "gray-50",
				"text": "gray-600"
			},
			"ghost": {
				"hover:bg": "gray-100",
				"active:bg": "gray-200"
			},
			"DEFAULT": {
				"text": "black",
				"DEFAULT": "gray-100",
				"hover:bg": "gray-200",
				"active:bg": "gray-300"
			}
		},
		"muted": {
			"DEFAULT": {
				"DEFAULT": "gray-700"
			}
		},
		"white": {
			"DEFAULT": {
				"text": "black",
				"DEFAULT": "white"
			}
		},
		"danger": {
			"alert": {
				"bg": "red-50",
				"text": "red-600"
			},
			"ghost": {
				"hover:bg": "red-100",
				"active:bg": "red-200"
			},
			"DEFAULT": {
				"text": "white",
				"DEFAULT": "red-600",
				"hover:bg": "red-700",
				"active:bg": "red-800"
			}
		},
		"primary": {
			"alert": {
				"bg": "blue-50",
				"text": "blue-600"
			},
			"ghost": {
				"hover:bg": "blue-100",
				"active:bg": "blue-200"
			},
			"DEFAULT": {
				"text": "white",
				"DEFAULT": "blue-600",
				"hover:bg": "blue-700",
				"active:bg": "blue-800"
			}
		},
		"success": {
			"alert": {
				"bg": "green-50",
				"text": "green-600"
			},
			"ghost": {
				"hover:bg": "green-100",
				"active:bg": "green-200"
			},
			"DEFAULT": {
				"text": "white",
				"DEFAULT": "green-500",
				"hover:bg": "green-600",
				"active:bg": "green-700"
			}
		},
		"warning": {
			"alert": {
				"bg": "yellow-50",
				"text": "yellow-600"
			},
			"ghost": {
				"hover:bg": "yellow-100",
				"active:bg": "yellow-200"
			},
			"DEFAULT": {
				"text": "white",
				"DEFAULT": "yellow-500",
				"hover:bg": "yellow-600",
				"active:bg": "yellow-700"
			}
		},
		"tertiary": {
			"alert": {
				"bg": "purple-50",
				"text": "purple-600"
			},
			"ghost": {
				"hover:bg": "purple-100",
				"active:bg": "purple-200"
			},
			"DEFAULT": {
				"text": "white",
				"DEFAULT": "purple-600",
				"hover:bg": "purple-700",
				"active:bg": "purple-800"
			}
		},
		"secondary": {
			"alert": {
				"bg": "pink-50",
				"text": "pink-600"
			},
			"ghost": {
				"hover:bg": "pink-100",
				"active:bg": "pink-200"
			},
			"DEFAULT": {
				"text": "white",
				"DEFAULT": "pink-600",
				"hover:bg": "pink-700",
				"active:bg": "pink-800"
			}
		}
	},
	"version": "0.0.5",
	"components": {
		".btn": "inline-flex flex-wrap items-center justify-center text-center cursor-pointer select-none border transition duration-200 ease-in-out flex-shrink-0 font-semibold py-2 px-4 rounded-md disabled:opacity-80 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-opacity-50 hover:no-underline border-0",
		".btn-cta": "bg-gradient-to-r from-primary to-secondary hover:from-primary-700 hover:to-secondary-700 border-0 text-white",
		"body": "font-sans bg-white",
		"a.text-white:not(.btn)": "text-white hover:text-gray-300",
		"a.text-dark:not(.btn)": "text-dark hover:text-gray-600 focus:text-gray-600",
		"a:not(.btn, .text-white, .text-dark, .accordion-header, .dropdown-item)": "text-primary hover:text-primary-800",
		"a:not(.btn, .accordion-header, .dropdown-item)": "transition-all duration-200 no-underline hover:no-underline",
		"a:not(.btn).nav-link.text-white, a:not(.btn).navbar-brand.text-white": "text-white hover:text-gray-300",
		"h1, h2, h3, h4, h5, p": "mb-3",
		"h1, .h1": "text-[calc(1.375rem+1.5vw)] xl:text-5xl",
		"h2, .h2": "text-[calc(1.325rem+0.9vw)] xl:text-4xl",
		"h3, .h3": "text-[calc(1.3rem+0.6vw)] xl:text-3xl",
		"h4, .h4": "text-[calc(1.275rem+0.3vw)] xl:text-2xl",
		"h5, .h5": "text-xl",
		".display-1": "text-[calc(1.625rem+4.5vw)] lg:text-[5rem] leading-[1.2] font-light",
		".display-2": "text-[calc(1.575rem+3.9vw)] lg:text-[4.5rem] leading-[1.2] font-light",
		".display-3": "text-[calc(1.525rem+3.3vw)] lg:text-[4rem] leading-[1.2] font-light",
		".display-4": "text-[calc(1.475rem+2.7vw)] lg:text-[3.5rem] leading-[1.2] font-light",
		".display-5": "text-[calc(1.425rem+2.1vw)] lg:text-[3rem] leading-[1.2] font-light",
		".display-6": "text-[calc(1.375rem+1.6vw)] lg:text-[2.5rem] leading-[1.2] font-light",
		".bg-{color}": "{bg=DEFAULT.DEFAULT}",
		".border-{color}": "{border=DEFAULT.DEFAULT}",
		".ring-{color}": "{ring=DEFAULT.DEFAULT}",
		".text-{color}": "{text=DEFAULT.DEFAULT}",
		".accordion-item": "flex flex-col bg-white rounded-lg p-4 mb-3",
		".accordion-header": "flex items-center text-xl w-full cursor-pointer font-semibold text-dark hover:text-primary-700",
		".accordion-header[aria-expanded=\"true\"]": "text-primary hover:text-primary-700",
		".accordion-collapse": "transition-all duration-300",
		".accordion-body": "py-3",
		".accordion-header::after": "flex-shrink-0 w-5 h-5 ml-auto transition-all duration-300 bg-arrow-down content-empty",
		".accordion-header[aria-expanded=\"true\"]::after": "rotate-180",
		".alert": "flex flex-row rounded-md px-3 py-2 text-white text-base text-gray-700 bg-gray-100 transition-opacity duration-300",
		".alert-{color}": "{text=alert.text} {bg=alert.bg}",
		".badge": "inline-block px-2 py-0.5 rounded text-xs text-white font-semibold",
		".badge-lg": "px-3 py-1 rounded text-sm text-white font-semibold",
		"btn-ani": "transform-all hover:-translate-y-0.5 duration-300 ease",
		".btn-group": "inline-flex",
		".btn-group .btn": "rounded-none",
		".btn-group > .btn:first-child": "rounded-l-md",
		".btn-group > .btn:last-child": "rounded-r-md",
		".btn-group > .btn:not(:first-child):not(:last-child)": "border-l-0 border-r-0",
		".btn-group > .btn-outline-{color}:not(:first-child):not(:last-child)": "border-r-1",
		".btn-group > .btn-outline-{color}:last-child": "border-l-0",
		".pagination > .btn": "px-3 py-1",
		".pagination > .btn-outline-{color}[aria-current=\"page\"]": "{bg=DEFAULT.DEFAULT} {text=DEFAULT.text}",
		".btn-group > .btn-ghost-{color}": "rounded",
		".btn-group.pagination > .btn-ghost-{color}[aria-current=\"page\"]": "{hover:text=ghost.hover:text} {bg=ghost.hover:bg} {text=DEFAULT.DEFAULT}",
		".btn-{color}": "{bg=DEFAULT.DEFAULT} {hover:bg=DEFAULT.hover:bg} {hover:text=DEFAULT.hover:text} {active:bg=DEFAULT.active:bg} {text=DEFAULT.text} {border=DEFAULT.DEFAULT} {hover:border=DEFAULT.hover:bg} {ring=DEFAULT.DEFAULT} {focus:ring=DEFAULT.active:bg}",
		".btn-outline-{color}": "bg-transparent {text=DEFAULT.DEFAULT} {hover:bg=DEFAULT.hover:bg} {active:bg=DEFAULT.active:bg} active:text-white hover:text-white {border=DEFAULT.DEFAULT} border {focus:ring=DEFAULT.active:bg}",
		".btn-link-{color}": "bg-transparent border-transparent {text=DEFAULT.DEFAULT} border-0 hover:underline {focus:ring=DEFAULT.active:bg}",
		".btn-ghost-{color}": "bg-transparent {hover:bg=ghost.hover:bg} {hover:text=ghost.hover:text} {active:bg=ghost.active:bg} {text=DEFAULT.DEFAULT} border-0 {focus:ring=DEFAULT.active:bg}",
		".btn-xs, .btn-group-xs>.btn": "py-1 px-1 text-xs",
		".btn-sm, .btn-group-sm>.btn": "py-1 px-2 text-sm",
		".btn-lg, .btn-group-lg>.btn": "py-3 px-5 text-lg",
		".btn-xl, .btn-group-xl>.btn": "py-4 px-6 text-xl",
		".modal": "fixed left-0 top-0 w-screen h-screen overflow-auto z-50 transition-opacity duration-500 opacity-0",
		".modal-bg": "fixed w-screen h-screen left-0 top-0 z-30 pt-16 bg-gray-900 overflow-auto transition-opacity duration-500 opacity-50",
		".modal-content": "relative m-auto mt-16 bg-gray-100 shadow-lg z-40 max-w-md",
		".modal-lg": "max-w-screen-md",
		".modal-sm": "max-w-sm",
		".modal-xl": "max-w-screen-xl",
		".disabled": "opacity-80 pointer-events-none",
		".form-checkbox": "rounded border-primary-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50",
		".form-checkbox[type=\"checkbox\"]": "rounded",
		".form-radio[type=\"radio\"]": "text-primary-600 ring-offset-2 focus:ring-2 focus:ring-primary-300",
		".form-input": "block mt-0 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50",
		".form-select": "block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50",
		".form-input-sm": "px-2 py-1 text-sm",
		".form-input-lg": "px-4 py-2 text-lg",
		".form-select-sm": "pl-2 py-1 text-sm",
		".form-select-lg": "pl-4 py-2 text-lg",
		".navbar": "z-20 py-3 relative",
		".navbar > .container-fluid, .navbar > .container": "flex flex-wrap justify-between md:flex-nowrap px-3 md:px-5",
		".navbar-dark .navbar-btn": "focus:ring-white",
		".navbar-btn": "w-6 mr-5 cursor-pointer select-none rounded md:hidden",
		".navbar-brand": "flex flex-row items-center space-x-3 ml-5 md:ml-0 text-primary font-bold text-xl",
		".navbar-col": "flex flex-col items-center mt-3 space-y-4 md:flex-row md:space-x-4 md:space-y-0 md:mt-0",
		".navbar-row": "hidden w-screen items-center md:flex md:flex-grow md:justify-between md:w-auto md:ml-4 transition transition-all transform duration-300 opacity-0 h-0 md:h-auto md:opacity-100 md:h-auto! md:overflow-visible",
		".navbar-row.show": "opacity-100",
		".dropdown-menu": "hidden transition transition-opacity duration-200 opacity-0 static w-max py-2 bg-white border border-gray-300 rounded md:absolute mt-2 min-w-[160px]",
		".dropdown-item": "bg-transparent py-1.5 px-4 hover:text-primary-800 focus:text-primary-800 hover:bg-primary-100 focus:bg-primary-100 focus:outline-none focus:shadow-outline",
		".dropdown-menu.show": "opacity-100 block",
		"[data-toggle=\"dropdown\"]": "flex items-center gap-x-1",
		"[data-toggle=\"dropdown\"]::after": "flex-shrink-0 w-4 h-4 bg-caret-down content-empty bg-no-repeat",
		".container": "override:max-w-full override:lg:max-w-[calc(min(100vw-60px,1220px))] mx-auto px-5",
		".container-fluid": "override:w-full override:max-w-full mx-auto px-5",
		".row": "flex flex-wrap flex-row -mx-5",
		".col": "relative w-full px-5",
		".progress": "flex w-full overflow-hidden bg-gray-200 rounded-full h-2.5",
		".progress-bar": "h-full",
		".progress-sm": "h-1.5",
		".progress-lg": "h-4",
		".progress-xl": "h-6",
		".card": "relative flex flex-col overflow-hidden shadow-md rounded-md bg-white",
		".card-body": "p-5 flex-grow",
		".card-header": "px-5 py-3 bg-gray-100",
		".card-footer": "px-5 py-3 bg-gray-100",
		".tab-list": "flex flex-wrap gap-x-2 mb-2 select-none",
		".tab-content": "py-2",
		".tab-pane": "",
		".tab": "px-4 py-2 border-b-2 hover:text-primary ring-0 focus:outline-none",
		"[aria-selected=\"true\"].tab": "border-primary text-primary",
		".tab-list-underline": "border-b-2 border-gray-300",
		".tab-underline": "px-3 py-2 text-muted hover:text-primary",
		"[aria-selected=\"true\"].tab-underline": "-mb-1 border border-0 border-b-2 border-primary text-primary",
		".prose > blockquote": "border-l-4 border-gray-600 my-3 py-3 pl-4 text-xl -ml-5",
		".prose ul": "list-disc list-inside",
		".prose ul ul": "list-circle",
		".prose ul ul ul": "list-square",
		".prose ol": "list-decimal list-inside",
		".prose ol ol, .prose ol ol ol, .prose ul ul, .prose ul ul ul": "ml-6",
		".prose h4": "text-lg",
		".fa-ul": "ml-6"
	},
	"TailstrapVersion": "0.0.5",
	"updatedAt": 1642357690991
};
const {
	apply,
	create
} = twind;
let preflight = {};

Object.entries(components).forEach(([cKey, cValue]) => {

	if (!cKey.includes('{color}')) {
		preflight['' + cKey] = apply(cValue)
		return null
	}

	Object.entries(colors).forEach(([key, value]) => {
		let compClasses = ''
		cValue.split(' ').forEach(classValue => {
			classValue = classValue.trim()

			if (!classValue.match(/{(.*?)}/g)) {
				compClasses += ' ' + classValue
				return null
			}

			let [k, v] = classValue.slice(1, classValue.length - 1).split('=')

			if (!v) {
				return null
			}

			if (v.includes("'")) {
				compClasses += ' ' + k + '-' + '[' + v.slice(1, v.length - 1) + ']'
				return null
			}

			let computedV = value
			v.split('.').forEach(vSplit => {
				computedV = computedV[vSplit] || computedV
			})

			if (!computedV.includes) {
				return null
			}

			compClasses += ' ' + k + '-' + computedV
		})
		preflight[cKey.replace('{color}', key)] = apply(compClasses)
	})
})

preflight = R(preflight)
// console.log(twindContent)
let plugins = {
	...twindTypography(),
	aspect: twindAspectRatio.aspectRatio,
	content: twindContent.content
}

twindObserve.observe(document.documentElement, create({
	theme,
	plugins,
	preflight,
	mode: "silent",
}));
document.documentElement.hidden = false;
window.innerWidth
