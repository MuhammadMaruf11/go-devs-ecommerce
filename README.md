## `All Pages`

- [x] Home Page
- [x] About Page `New Create`
- [x] Service Page `New Create`
- [x] Team Page `New Create`
- [x] Contact Us Page `New Create`

```<button type="button" class="btn btn_primary">
	<span class="btn__txt">Purple button</span>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
</button>

<button type="button" class="btn btn_success">
	<span class="btn__txt">Green button</span>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
</button>

<button type="button" class="btn btn_danger">
	<span class="btn__txt">Red button</span>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
</button>

<button type="button" class="btn btn_info">
	<span class="btn__txt">Blue button</span>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
</button>


<button type="button" class="btn btn_warning">
	<span class="btn__txt">Yellow button</span>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
</button>
```

```
.btn {
  background: hsl(var(--hue), 98%, 80%);
  border: none;
  border-radius: 7px;
  cursor: pointer;
  color: black;
  font: 600 1.05rem/1 "Nunito", sans-serif;
  letter-spacing: 0.05em;
  overflow: hidden;
  padding: 1.15em 3.5em;
  min-height: 3.3em;
  position: relative;
  text-transform: lowercase;
}
.btn_warning {
  --hue: 46;
}
.btn_success {
  --hue: 163;
}
.btn_primary {
  --hue: 244;
}
.btn_danger {
  --hue: 0;
}
.btn_info {
  --hue: 210;
}
.btn:active, .btn:focus {
  outline: 3px solid hsl(calc(var(--hue) + 90), 98%, 80%);
}
.btn + .btn {
  margin-top: 2.5em;
}
.btn__txt {
  position: relative;
  z-index: 2;
}
.btn__bg {
  background: hsl(var(--hueBg), 98%, 80%);
  border-radius: 50%;
  display: block;
  height: 0;
  left: 50%;
  margin: -50% 0 0 -50%;
  padding-top: 100%;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: scale(0);
  transform-origin: 50% 50%;
  transition: transform 0.175s cubic-bezier(0.5, 1, 0.89, 1);
  z-index: 1;
}
.btn__bg:nth-of-type(1) {
  --hueBg: calc(var(--hue) - 90);
  transition-delay: 0.1725s;
}
.btn__bg:nth-of-type(2) {
  --hueBg: calc(var(--hue) - 180);
  transition-delay: 0.115s;
}
.btn__bg:nth-of-type(3) {
  --hueBg: calc(var(--hue) - 270);
  transition-delay: 0.0575s;
}
.btn__bg:nth-of-type(4) {
  --hueBg: calc(var(--hue) - 360);
  transition-delay: 0s;
}
.btn:hover .btn__bg, .btn:focus .btn__bg, .btn:active .btn__bg {
  transform: scale(1.5);
  transition: transform 0.35s cubic-bezier(0.11, 0, 0.5, 0);
}
.btn:hover .btn__bg:nth-of-type(1), .btn:focus .btn__bg:nth-of-type(1), .btn:active .btn__bg:nth-of-type(1) {
  transition-delay: 0.115s;
}
.btn:hover .btn__bg:nth-of-type(2), .btn:focus .btn__bg:nth-of-type(2), .btn:active .btn__bg:nth-of-type(2) {
  transition-delay: 0.23s;
}
.btn:hover .btn__bg:nth-of-type(3), .btn:focus .btn__bg:nth-of-type(3), .btn:active .btn__bg:nth-of-type(3) {
  transition-delay: 0.345s;
}
.btn:hover .btn__bg:nth-of-type(4), .btn:focus .btn__bg:nth-of-type(4), .btn:active .btn__bg:nth-of-type(4) {
  transition-delay: 0.46s;
}
```
