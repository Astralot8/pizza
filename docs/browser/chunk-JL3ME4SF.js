import{f as Bt}from"./chunk-YS7IAZ4G.js";import{l as Ut}from"./chunk-DZ3GLSQK.js";import{$ as ut,B as C,Bb as y,Cc as Ot,D as ot,E as St,Eb as O,Fa as Nt,Gc as Rt,Hc as wt,Ic as K,Ja as P,Jc as Lt,Ma as $,O as yt,Oc as M,Pa as I,Qa as Dt,Qb as j,Sb as _t,W as x,X as Tt,Z as at,Za as vt,_ as st,a as d,b as D,ba as Mt,f as It,g as U,ha as V,j as At,ka as u,l as it,m as z,ma as ct,na as o,q as v,sc as Ct,ta as Et,u as _,zb as b,zc as bt}from"./chunk-WTHNNU3O.js";var J=class e{constructor(){}isLogged$=new At;isLogged=!1;logIn(){this.isLogged=!0,this.isLogged$.next(this.isLogged)}logOut(){this.isLogged=!1,this.isLogged$.next(this.isLogged)}getToken(){return"test"}isLoggedIn(){return this.isLogged}static \u0275fac=function(n){return new(n||e)};static \u0275prov=V({token:e,factory:e.\u0275fac})};var Pt=class e{constructor(t,n){this.authService=t;this.router=n}canActivate(t,n){return this.authService.isLoggedIn()?!0:(this.router.navigate(["/"]),!1)}static \u0275fac=function(n){return new(n||e)(ct(J),ct(Ut))};static \u0275prov=V({token:e,factory:e.\u0275fac})};var qe=parseInt(bt.major,10)>=19?{}:{allowSignalWrites:!0},Ft={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},tn=new Dt;var en=()=>{},nn=D(d({},Ft),{toJSON:()=>Ft}),rn=()=>!1,on=()=>!0;var an={acceptNode(e){return"ownerSVGElement"in e?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}},F="\xA0",Gt="\u2013";function E(e,t,n){return Math.min(n,Math.max(t,e))}function G(e,t,n){return e>=t&&e<n}function X(e,t,n){return Number.isNaN(e)||e<=t?t:e>=n?n:Math.round(e)}function mn(e,t){return e.slice(0,Math.max(t,0)).concat(e.slice(Math.max(t+1,0)))}function c(e){return l(()=>e)}function l(e){return e?new u("",{factory:e}):new u("")}function Wt(e){return typeof e=="string"}var oe="position: fixed; visibility: hidden; pointer-events: none",ae="height: fit-content; line-height: 1em;";function pn(e,t=window){let n=t.document.createElement("iframe"),r=()=>{let{innerWidth:s,outerWidth:m,devicePixelRatio:p}=t;n.width=`${s===m?s:s/p}`};t.document.body.append(n),t.addEventListener("resize",r);let i=n.contentWindow?.document,a=new ResizeObserver(()=>e(i?.body.offsetHeight||0));return n.setAttribute("style",oe),i?.documentElement.style.setProperty("font","-apple-system-body"),i?.body.setAttribute("style",ae),i?.body.insertAdjacentText("beforeend",".".repeat(1e3)),a.observe(i?.body||n),r(),()=>{a.disconnect(),n.remove(),t.removeEventListener("resize",r)}}function Yt(e){return e!=null}function lt(e,t,n=!1){return{provide:e,useExisting:t,multi:n}}function dt(e,t,n){return{provide:e,useFactory:()=>d(d({},o(e,{optional:!0,skipSelf:!0})||n),o(t,{optional:!0})||t)}}function se(e){let t=[],n=!1,r;return function(...a){return n&&t.length===a.length&&a.every((m,p)=>m===t[p])||(t=a,r=e.apply(this,a),n=!0),r}}function Ht(e,t,n=!0){return function(){let i=e.call(this);return Object.defineProperty(this,t,{enumerable:n,value:i}),i}}function fn(e,t,n){if(typeof e=="function"){let p=t;if(p.kind==="getter")return Ht(e,p.name);if(p.kind==="method")return se(e);throw new Q}let{get:r,enumerable:i,value:a}=n,s=t;if(r)return{configurable:!0,enumerable:i,get:Ht(r,s,i)};if(typeof a!="function")throw new Q;let m=a;return{configurable:!0,enumerable:i,get(){let p=[],W=!1,N,L=(...B)=>(W&&p.length===B.length&&B.every((Y,k)=>Y===p[k])||(p=B,N=m.apply(this,B),W=!0),N);return Object.defineProperty(this,s,{configurable:!0,value:L}),L}}}var Q=class extends Error{constructor(){super("")}};function hn(e){return`${e}px`}var ue=l(()=>{let e=new Map;return o(Nt).onDestroy(()=>e.forEach(t=>t.destroy())),e});function R(e){let t=o(ue),n=o(Et);t.has(e)||t.set(e,Lt(e,{environmentInjector:n}))}function A(e,t,n={}){return C(e,t,n)}function bn(e){return A(e===e.ownerDocument.documentElement?e.ownerDocument:e,"scroll")}var On={now:z.now.bind(z),schedule(e,t,n){return z.schedule(function(r){return wt(()=>e.call(this,r))},t,n)}};function Rn(e=o(Ot)){return Mt(()=>e.markForCheck())}function ce(e=o(P)){return t=>new U(n=>t.subscribe({next:r=>e.run(()=>n.next(r)),error:r=>e.run(()=>n.error(r)),complete:()=>e.run(()=>n.complete())}))}function le(e=o(P)){return t=>new U(n=>e.runOutsideAngular(()=>t.subscribe(n)))}function wn(e=o(P)){return It(le(e),ce(e))}var mt=class{constructor(t,n=it){this.zoneConditionFn=t,this.scheduler=n}now(){return this.scheduler.now()}schedule(...t){return this.zoneConditionFn(()=>this.scheduler.schedule(...t))}};function Ln(e=o(P),t=it){return new mt(e.runOutsideAngular.bind(e),t)}var q=new u("[WA_WINDOW]",{factory:()=>{let{defaultView:e}=o(M);if(!e)throw new Error("Window is not available");return e}}),f=q,Gn=new u("[WA_ANIMATION_FRAME]",{factory:()=>{let{requestAnimationFrame:e,cancelAnimationFrame:t}=o(f);return new U(r=>{let i=NaN,a=s=>{r.next(s),i=e(a)};return i=e(a),()=>{t(i)}}).pipe(x())}});var Hn=new u("[WA_CACHES]",{factory:()=>o(f).caches});var Wn=new u("[WA_CRYPTO]",{factory:()=>o(f).crypto});var Yn=new u("[WA_CSS]",{factory:()=>o(f).CSS??{escape:e=>e,supports:()=>!1}});var kn=new u("[WA_HISTORY]",{factory:()=>o(f).history});var kt=new u("[WA_LOCAL_STORAGE]",{factory:()=>o(f).localStorage});var zn=new u("[WA_LOCATION]",{factory:()=>o(f).location});var zt=new u("[WA_NAVIGATOR]",{factory:()=>o(f).navigator}),xt=zt,xn=new u("[WA_MEDIA_DEVICES]",{factory:()=>o(xt).mediaDevices});var Vn=new u("[WA_NETWORK_INFORMATION]",{factory:()=>o(zt).connection||null});var $n=new u("[WA_PAGE_VISIBILITY]",{factory:()=>{let e=o(M);return C(e,"visibilitychange").pipe(at(0),_(()=>e.visibilityState!=="hidden"),yt(),Tt({refCount:!1,bufferSize:1}))}});var jn=new u("[WA_PERFORMANCE]",{factory:()=>o(f).performance});var Kn=new u("[WA_SCREEN]",{factory:()=>o(f).screen});var Jn=new u("[WA_SESSION_STORAGE]",{factory:()=>o(f).sessionStorage});var Zn=new u("[WA_SPEECH_RECOGNITION]: [SPEECH_RECOGNITION]",{factory:()=>{let e=o(f);return e.speechRecognition||e.webkitSpeechRecognition||null}});var Xn=new u("[WA_SPEECH_SYNTHESIS]",{factory:()=>o(f).speechSynthesis});var Qn=new u("[WA_USER_AGENT]",{factory:()=>o(xt).userAgent});var w=12,tt=1,pt=0,et=11,ft=0,ht=9999,de=2099,me=`${F}${Gt}${F}`,pe=1e3,fe=60,he=60,ge=24,Ie=pe*fe,Ae=Ie*he,nr=Ae*ge,Se=10,rr=2*Se+me.length,nt={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},S={January:0,February:1,March:2,April:3,May:4,June:5,July:6,August:7,September:8,October:9,November:10,December:11},g=class e{constructor(t){this.year=t}static isValidYear(t){return Number.isInteger(t)&&G(t,ft,ht+1)}static isLeapYear(t){return t%400===0||t%4===0&&t%100!==0}static getAbsoluteLeapYears(t){return Math.ceil(t/400)+(Math.ceil(t/4)-Math.ceil(t/100))}static lengthBetween(t,n){return n.year-t.year}static normalizeYearPart(t){return X(t,ft,ht)}get formattedYear(){return String(this.year).padStart(4,"0")}get isLeapYear(){return e.isLeapYear(this.year)}get absoluteLeapYears(){return e.getAbsoluteLeapYears(this.year)}yearBefore({year:t}){return this.year<t}yearSameOrBefore({year:t}){return this.year<=t}yearSame({year:t}){return this.year===t}yearSameOrAfter({year:t}){return this.year>=t}yearAfter({year:t}){return this.year>t}append({year:t=0}){let n=this.year+t;return new e(n)}toString(){return this.formattedYear}valueOf(){return this.year}[Symbol.toPrimitive](t){return Date.prototype[Symbol.toPrimitive].call(this,t)}toJSON(){return this.formattedYear}},h=class e extends g{constructor(t,n){super(t),this.month=n}static isValidMonth(t,n){return g.isValidYear(t)&&e.isValidMonthPart(n)}static getMonthDaysCount(t,n){switch(t){case S.April:case S.June:case S.November:case S.September:return 30;case S.February:return n?29:28;default:return 31}}static currentLocal(){let t=new Date;return new e(t.getFullYear(),t.getMonth())}static currentUtc(){let t=new Date;return new e(t.getUTCFullYear(),t.getUTCMonth())}static lengthBetween(t,n){let r=t.month+t.year*12;return n.month+n.year*12-r}static normalizeMonthPart(t){return X(t,pt,et)}static isValidMonthPart(t){return Number.isInteger(t)&&G(t,pt,et+1)}get formattedMonthPart(){return String(this.month+1).padStart(2,"0")}get daysCount(){return e.getMonthDaysCount(this.month,this.isLeapYear)}monthBefore(t){return this.yearBefore(t)||this.yearSame(t)&&this.month<t.month}monthSameOrBefore(t){return this.yearBefore(t)||this.yearSame(t)&&this.month<=t.month}monthSame(t){return this.yearSame(t)&&this.month===t.month}monthSameOrAfter(t){return this.yearAfter(t)||this.yearSame(t)&&this.month>=t.month}monthAfter(t){return this.yearAfter(t)||this.yearSame(t)&&this.month>t.month}append({year:t=0,month:n=0}){let r=(this.year+t)*w+this.month+n;return new e(Math.floor(r/w),r%w)}toString(){return`${this.formattedMonthPart}.${this.formattedYear}`}valueOf(){return this.toLocalNativeDate().valueOf()}toJSON(){return`${super.toJSON()}-${this.formattedMonthPart}`}toLocalNativeDate(){return new Date(this.year,this.month)}toUtcNativeDate(){return new Date(Date.UTC(this.year,this.month))}},H=class e extends h{constructor(t,n,r){super(t,n),this.day=r}static fromLocalNativeDate(t){return new e(t.getFullYear(),t.getMonth(),t.getDate())}static fromUtcNativeDate(t){return new e(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())}static isValidDay(t,n,r){return h.isValidMonth(t,n)&&Number.isInteger(r)&&G(r,tt,h.getMonthDaysCount(n,g.isLeapYear(t))+1)}static currentLocal(){let t=new Date,n=t.getFullYear(),r=t.getMonth(),i=t.getDate();return new e(n,r,i)}static currentUtc(){let t=new Date,n=t.getUTCFullYear(),r=t.getUTCMonth(),i=t.getUTCDate();return new e(n,r,i)}static normalizeOf(t,n,r){let i=g.normalizeYearPart(t),a=h.normalizeMonthPart(n),s=e.normalizeDayPart(r,a,i);return new e(i,a,s)}static lengthBetween(t,n){return Math.round((n.toLocalNativeDate().getTime()-t.toLocalNativeDate().getTime())/(1e3*60*60*24))}static parseRawDateString(t,n="DMY"){switch(n){case"MDY":return{day:parseInt(t.slice(3,5),10),month:parseInt(t.slice(0,2),10)-1,year:parseInt(t.slice(6,10),10)};case"YMD":return{day:parseInt(t.slice(8,10),10),month:parseInt(t.slice(5,7),10)-1,year:parseInt(t.slice(0,4),10)};case"DMY":default:return{day:parseInt(t.slice(0,2),10),month:parseInt(t.slice(3,5),10)-1,year:parseInt(t.slice(6,10),10)}}}static normalizeParse(t,n="DMY"){let{day:r,month:i,year:a}=this.parseRawDateString(t,n);return e.normalizeOf(a,i,r)}static jsonParse(t){let{day:n,month:r,year:i}=this.parseRawDateString(t,"YMD");if(!h.isValidMonth(i,r)||!Number.isInteger(n)||!G(n,tt,h.getMonthDaysCount(r,g.isLeapYear(i))+1))throw new gt(i,r,n);return new e(i,r,n)}static normalizeDayPart(t,n,r){let i=h.getMonthDaysCount(n,g.isLeapYear(r));return X(t,1,i)}get formattedDayPart(){return String(this.day).padStart(2,"0")}get isWeekend(){let t=this.dayOfWeek(!1);return t===nt.Saturday||t===nt.Sunday}dayOfWeek(t=!0){let n=t?this.toLocalNativeDate().getDay()-1:this.toLocalNativeDate().getDay();return n<0?6:n}dayBefore(t){return this.monthBefore(t)||this.monthSame(t)&&this.day<t.day}daySameOrBefore(t){return this.monthBefore(t)||this.monthSame(t)&&this.day<=t.day}daySame(t){return this.monthSame(t)&&this.day===t.day}daySameOrAfter(t){return this.monthAfter(t)||this.monthSame(t)&&this.day>=t.day}dayAfter(t){return this.monthAfter(t)||this.monthSame(t)&&this.day>t.day}dayLimit(t,n){return t!==null&&this.dayBefore(t)?t:n!==null&&this.dayAfter(n)?n:this}append({year:t=0,month:n=0,day:r=0}){let i=(this.year+t)*w+this.month+n,a=Math.floor(i/w),s=i%w,m=Math.min(this.day,h.getMonthDaysCount(s,g.isLeapYear(a)))+r;for(;m>h.getMonthDaysCount(s,g.isLeapYear(a));)m-=h.getMonthDaysCount(s,g.isLeapYear(a)),s===S.December?(a++,s=S.January):s++;for(;m<tt;)s===S.January?(a--,s=S.December):s--,m+=h.getMonthDaysCount(s,g.isLeapYear(a));return new e(a,s,m)}getFormattedDay(t,n){let r=this.formattedDayPart,i=this.formattedMonthPart,a=this.formattedYear;switch(t){case"MDY":return`${i}${n}${r}${n}${a}`;case"YMD":return`${a}${n}${i}${n}${r}`;case"DMY":default:return`${r}${n}${i}${n}${a}`}}toString(t="DMY",n="."){return this.getFormattedDay(t,n)}toJSON(){return`${super.toJSON()}-${this.formattedDayPart}`}toLocalNativeDate(){return new Date(this.year,this.month,this.day)}toUtcNativeDate(){return new Date(Date.UTC(this.year,this.month,this.day))}},gt=class extends Error{constructor(t,n,r){super("")}};var ir=new H(ft,pt,tt),or=new H(ht,et,31),ar=new H(de,et,31);var ye={cardNumber:["Number","Card number"],cardExpiry:["Expires","Valid through"]},Te={colorSelectorModeNames:["Solid color","Gradient"],toolbarTools:{undo:"Undo",redo:"Redo",font:"Font",fontStyle:"Font style",fontSize:"Font size",bold:"Bold",italic:"Italic",underline:"Underline",strikeThrough:"Strike through",justify:"Justify",justifyLeft:"Justify left",justifyCenter:"Justify center",justifyRight:"Justify right",justifyFull:"Justify full",list:"List",indent:"Indent",outdent:"Outdent",unorderedList:"Unordered list",orderedList:"Ordered list",quote:"Quote",foreColor:"Color",backColor:"Background color",hiliteColor:"Highlight color",clear:"Clear",link:"Link",attach:"Attach file",tex:"Insert TeX",code:"Code",image:"Insert image",insertHorizontalRule:"Insert horizontal rule",superscript:"Superscript",subscript:"Subscript",insertTable:"Insert table",insertGroup:"Insert group",hiliteGroup:"Hilite group",removeGroup:"Remove group",insertAnchor:"Insert anchor",mergeCells:"Merge cells",splitCells:"Split cells",rowsColumnsManaging:"Managing rows and columns",cellColor:"Cell color",setDetails:"Details",removeDetails:"Remove details"},editorEditLink:{urlExample:"example.com",anchorExample:"anchor"},editorTableCommands:[["Insert column before","Insert column after"],["Insert row before","Insert row after"],["Delete column","Delete row"]],editorCodeOptions:["Code in the text","Code in block"],editorFontOptions:{small:"Small",large:"Large",normal:"Normal",title:"Title",subtitle:"Subtitle"}},Me={showHideText:"Show/Hide",paginationTexts:{pages:"Pages",linesPerPage:"Lines per page",of:"of"}},Ee={AD:"Andorra",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua & Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AO:"Angola",AR:"Argentina",AT:"Austria",AU:"Australia",AW:"Aruba",AZ:"Azerbaijan",BA:"Bosnia & Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"St. Barth\xE9lemy",BM:"Bermuda",BN:"Brunei",BO:"Bolivia",BQ:"Caribbean Netherlands",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CD:"Congo - Kinshasa",CF:"Central African Republic",CG:"Congo - Brazzaville",CH:"Switzerland",CI:"C\xF4te d\u2019Ivoire",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cape Verde",CW:"Cura\xE7ao",CY:"Cyprus",CZ:"Czechia",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Federated States of Micronesia",FR:"France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GT:"Guatemala",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IN:"India",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JM:"Jamaica",JO:"Jordan",JP:"Japan",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KM:"Comoros",KN:"St. Kitts & Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"St. Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"St. Martin",MG:"Madagascar",MK:"North Macedonia",ML:"Mali",MM:"Myanmar (Burma)",MN:"Mongolia",MO:"Macao",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NZ:"New Zealand",OM:"Oman",PA:"Panama",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Qatar",RE:"R\xE9union",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"St. Helena",SI:"Slovenia",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",ST:"S\xE3o Tom\xE9 & Pr\xEDncipe",SV:"El Salvador",SX:"Sint Maarten",SY:"Syria",SZ:"Eswatini",TC:"Turks & Caicos Islands",TD:"Chad",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"T\xFCrkiye",TT:"Trinidad & Tobago",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VC:"St. Vincent & Grenadines",VE:"Venezuela",VG:"British Virgin Islands",VN:"Vietnam",VU:"Vanuatu",WS:"Samoa",XK:"Kosovo",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",AC:"Ascension Island",AS:"American Samoa",AX:"\xC5land Islands",CC:"Cocos (Keeling) Islands",CK:"Cook Islands",CX:"Christmas Island",EH:"Western Sahara",FO:"Faroe Islands",GG:"Guernsey",GU:"Guam",IM:"Isle of Man",JE:"Jersey",IO:"British Indian Ocean Territory",KI:"Kiribati",MH:"Marshall Islands",MP:"Northern Mariana Islands",NF:"Norfolk Island",NR:"Nauru",NU:"Niue",PM:"Saint Pierre and Miquelon",PR:"Puerto Rico",PS:"Palestine",SJ:"Svalbard and Jan Mayen",SS:"South Sudan",TA:"Tristan da Cunha",TK:"Tokelau",TV:"Tuvalu",VA:"Holy See",VI:"Virgin Islands",WF:"Wallis and Futuna"},Ne={months:["January","February","March","April","May","June","July","August","September","October","November","December"],close:"Close",clear:"Clear",nothingFoundMessage:"Nothing found",defaultErrorMessage:"Value is invalid",spinTexts:["Previous","Next"],shortWeekDays:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],countries:Ee},De={cancel:"Cancel",done:"Done",more:"More",otherDate:"Other date...",showAll:"Show all",hide:"Hide",mobileCalendarTexts:["Choose day","Choose range","Choose days"],range:["from","to"],countTexts:["Plus","Minus"],time:{"HH:MM":"HH:MM","HH:MM AA":"HH:MM AA","HH:MM:SS":"HH:MM:SS","HH:MM:SS AA":"HH:MM:SS AA","HH:MM:SS.MSS":"HH:MM:SS.MSS","HH:MM:SS.MSS AA":"HH:MM:SS.MSS AA"},dateTexts:{DMY:"dd.mm.yyyy",MDY:"mm.dd.yyyy",YMD:"yyyy.mm.dd"},digitalInformationUnits:["B","KiB","MiB"],passwordTexts:["Show password","Hide password"],copyTexts:["Copy","Copied"],shortCalendarMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],pagination:["Previous page","Next page"],fileTexts:{loadingError:"Upload failed",preview:"Preview",remove:"Remove"},inputFileTexts:{defaultLabelSingle:"or drop\xA0it\xA0here",defaultLabelMultiple:"or drop\xA0them\xA0here",defaultLinkSingle:"Choose a file",defaultLinkMultiple:"Choose files",maxSizeRejectionReason:"File is larger than",formatRejectionReason:"Wrong file type",drop:"Drop file here",dropMultiple:"Drop files here"},multiSelectTexts:{all:"Select all",none:"Select none"},confirm:{yes:"Yes",no:"No"},previewTexts:{rotate:"Rotate"},zoomTexts:{zoomOut:"Zoom out",zoomIn:"Zoom in",reset:"Reset"},phoneSearch:"Type country or code"},ve={inputSearch:{popular:"Popular",history:"Recent",placeholder:"Type query",hotkey:"to search",all:"All",empty:"Nothing found"}},Vt=d(d(d(d(d(d({name:"english"},Ne),De),Me),ye),Te),ve);var $t=l(()=>Vt),jt=l(()=>v(o($t))),_e=c(),Ce=c("tuiLanguage");function T(e){return()=>o(jt).pipe(_(t=>t[e]))}var be=l(()=>o(M).defaultView?.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1),Fr=l(()=>o(be)?0:1),Oe=c("assets/taiga-ui/icons");var Re={check:"@tui.check",close:"@tui.x",error:"@tui.circle-alert",more:"@tui.chevron-right",search:"@tui.search",ellipsis:"@tui.ellipsis"},Gr=c(Re);var we="tuiDark",Le=c(we),Hr=l(()=>{let e=!0,t=o(kt),n=o(Le),r=t.getItem(n),i=o(q).matchMedia("(prefers-color-scheme: dark)"),a=I(!!((r&&JSON.parse(r))??i.matches));return C(i,"change").pipe(St(()=>!t.getItem(n)),Bt()).subscribe(()=>{e=!0,a.set(i.matches)}),K(()=>{let s=String(a());e?e=!1:t.setItem(n,s)}),Object.assign(a,{reset:()=>{t.removeItem(n),e=!0,a.set(i.matches)}})}),Be={mode:"DMY",separator:"."},Wr=c(v(Be));var Yr=c(e=>e.isWeekend?"weekend":"weekday"),kr=c(nt.Monday),zr=l(T("months")),xr=l(T("close")),Vr=l(T("clear")),$r=l(T("nothingFoundMessage")),jr=l(T("defaultErrorMessage")),Kr=l(T("spinTexts")),Jr=l(T("shortWeekDays")),Kt=c(""),Jt=c(""),Ue=c({});var Pe=l(()=>{let e=o(Oe);return t=>`${e}/${t.replace("@tui.","").split(".").join("/")}.svg`});function Zt(){let e=o(Ue),t=o(Pe);return n=>!n||n.includes("/")?n:e[n]??t(n)}var Zr=c({mobile:768,desktopSmall:1024,desktopLarge:1280}),Fe={precision:NaN,decimalSeparator:".",thousandSeparator:F,rounding:"truncate",decimalMode:"pad"},Xr=c(v(Fe));var Qr=l(()=>new $(o(M).documentElement)),qr=l(()=>{let e=o(M);return ot(A(e,"selectionchange"),A(e,"mouseup"),A(e,"mousedown").pipe(st(()=>A(e,"mousemove").pipe(ut(A(e,"mouseup"))))),A(e,"keydown"),A(e,"keyup")).pipe(x())}),ti=c({decrement:"@tui.chevron-left",increment:"@tui.chevron-right"}),ei=c("Taiga UI"),ni=l(()=>{let e=o(q);return{type:"viewport",getClientRect(){let t={top:0,left:0,right:e.innerWidth,bottom:e.innerHeight,width:e.innerWidth,height:e.innerHeight,x:0,y:0};return D(d({},t),{toJSON:()=>JSON.stringify(t)})}}});function ui(e,t){try{return e.contains(t)||!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}catch{return!1}}function ci(e){return!!e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function Ge(e){let t=e?.ownerDocument.defaultView;return!!e&&!!t&&e instanceof t.HTMLElement}function li(e){return e.composedPath()[0]}function He(e){return"getRootNode"in e&&e.isConnected?e.getRootNode():e.ownerDocument}function di(e){let{ownerDocument:t}=e;if(!t?.defaultView||!e.getBoundingClientRect)return null;let{innerWidth:n,innerHeight:r}=t.defaultView,i=He(e),a=e.getBoundingClientRect();if(a.width===0&&a.height===0)return null;let s=E(Math.round(a.left)+2,0,n),m=E(Math.round(a.top)+2,0,r),p=E(Math.round(a.right)-2,0,n),W=E(Math.round(a.bottom)-2,0,r),N=E(Math.round(a.left+a.width/2),0,n),L=E(Math.round(a.top+a.height/2),0,r),rt=[i.elementFromPoint(N,m),i.elementFromPoint(N,W),i.elementFromPoint(s,L),i.elementFromPoint(p,L)].filter(Yt);if(!rt.length)return[];let Y=rt.filter(k=>!e.contains(k)&&!k.contains(e));return Y.length===4?Y:null}function mi(e,t){let{offsetTop:n,offsetLeft:r,offsetParent:i}=t;for(;Ge(i)&&i!==e;)n+=i.offsetTop,r+=i.offsetLeft,i=i.offsetParent;return{offsetTop:n,offsetLeft:r}}function Xt(){return o($).nativeElement}function pi(e=0,t=0){let n={x:e,y:t,left:e,right:e,top:t,bottom:t,width:0,height:0};return D(d({},n),{toJSON:()=>n})}var We={appearance:""},Qt=c(We);function qt(e){return lt(Qt,e)}var Ye=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=b({type:e,selectors:[["ng-component"]],hostAttrs:[1,"tui-appearance"],decls:0,vars:0,template:function(r,i){},styles:[`[tuiAppearance]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border,border-radius}[tuiAppearance].tui-appearance-initializing{transition:none!important}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][tuiWrapper]._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}
`],encapsulation:2,changeDetection:0})}}return e})(),ke=(()=>{class e{constructor(){this.el=Xt(),this.nothing=R(Ye),this.modes=Rt((n=this.mode())=>!n||Wt(n)?n:n.join(" ")),this.appearance=I(o(Qt).appearance),this.state=I(null),this.focus=I(null),this.mode=I(null),vt(()=>{this.el.classList.toggle("tui-appearance-initializing",!!this.el.offsetWidth&&!1)})}set tuiAppearance(n){this.appearance.set(n)}set tuiAppearanceState(n){this.state.set(n)}set tuiAppearanceFocus(n){this.focus.set(n)}set tuiAppearanceMode(n){this.mode.set(n)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275dir=y({type:e,selectors:[["","tuiAppearance",""]],hostAttrs:["tuiAppearance","",1,"tui-appearance-initializing"],hostVars:4,hostBindings:function(r,i){r&2&&j("data-appearance",i.appearance())("data-state",i.state())("data-focus",i.focus())("data-mode",i.modes())},inputs:{tuiAppearance:"tuiAppearance",tuiAppearanceState:"tuiAppearanceState",tuiAppearanceFocus:"tuiAppearanceFocus",tuiAppearanceMode:"tuiAppearanceMode"}})}}return e})();var te=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275dir=y({type:e,features:[O([{directive:ke,inputs:["tuiAppearance","appearance","tuiAppearanceState","tuiAppearanceState","tuiAppearanceFocus","tuiAppearanceFocus","tuiAppearanceMode","tuiAppearanceMode"]}])]})}}return e})();var xe=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=b({type:e,selectors:[["ng-component"]],hostAttrs:[1,"tui-icons"],decls:0,vars:0,template:function(r,i){},styles:[`[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-icon-start) no-repeat center / contain;mask:var(--t-icon-start) no-repeat center / contain}[tuiIcons]:after{display:var(--t-icon-end);-webkit-mask:var(--t-icon-end) no-repeat center / contain;mask:var(--t-icon-end) no-repeat center / contain}
`],encapsulation:2,changeDetection:0})}}return e})(),Ve=(()=>{class e{constructor(){this.nothing=R(xe),this.resolver=Zt(),this.iconStart=o(Kt,{self:!0,optional:!0})||"",this.iconEnd=o(Jt,{self:!0,optional:!0})||""}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275dir=y({type:e,hostAttrs:["tuiIcons",""],hostVars:4,hostBindings:function(r,i){r&2&&_t("--t-icon-start",i.iconStart?"url("+i.resolver(i.iconStart.toString())+")":null)("--t-icon-end",i.iconEnd?"url("+i.resolver(i.iconEnd)+")":null)},inputs:{iconStart:"iconStart",iconEnd:"iconEnd"}})}}return e})(),ee=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275dir=y({type:e,features:[O([{directive:Ve,inputs:["iconStart","iconStart","iconEnd","iconEnd"]}])]})}}return e})();function ne(e){let t=c(e);return[t,n=>dt(t,n,e)]}var je={appearance:"primary",size:"l"},[re,Vi]=ne(je),Ke=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=b({type:e,selectors:[["ng-component"]],hostAttrs:[1,"tui-button"],decls:0,vars:0,template:function(r,i){},styles:[`[tuiButton],[tuiIconButton]{--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, var(--t-0, 0rem)) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-font-text-m);font-weight:700}[tuiButton]>img,[tuiIconButton]>img,[tuiButton]>tui-svg,[tuiIconButton]>tui-svg,[tuiButton]>tui-icon,[tuiIconButton]>tui-icon,[tuiButton]>tui-avatar,[tuiIconButton]>tui-avatar,[tuiButton]>tui-badge,[tuiIconButton]>tui-badge,[tuiButton]>[tuiBadge],[tuiIconButton]>[tuiBadge],[tuiButton]>[tuiRadio],[tuiIconButton]>[tuiRadio],[tuiButton]>[tuiSwitch],[tuiIconButton]>[tuiSwitch],[tuiButton]>[tuiCheckbox],[tuiIconButton]>[tuiCheckbox],[tuiButton][tuiIcons]:before,[tuiIconButton][tuiIcons]:before,[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{margin:var(--t-margin)}[tuiButton]>.t-loader,[tuiIconButton]>.t-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}[tuiButton]>.t-loader .t-text,[tuiIconButton]>.t-loader .t-text{position:absolute}[tuiButton][data-size=xs],[tuiIconButton][data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=xs] tui-svg,[tuiIconButton][data-size=xs] tui-svg,[tuiButton][data-size=xs] tui-icon,[tuiIconButton][data-size=xs] tui-icon,[tuiButton][data-size=xs]:before,[tuiIconButton][data-size=xs]:before{font-size:1rem}[tuiButton][data-size=s],[tuiIconButton][data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=s] tui-svg,[tuiIconButton][data-size=s] tui-svg,[tuiButton][data-size=s] tui-icon,[tuiIconButton][data-size=s] tui-icon,[tuiButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before,[tuiIconButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before{font-size:1rem}[tuiButton][data-size=m],[tuiIconButton][data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-font-text-m);font-weight:700}[tuiButton][data-size=m]:after,[tuiIconButton][data-size=m]:after{margin-inline-end:-.125rem}[tuiButton]._loading,[tuiIconButton]._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]._loading>*,[tuiIconButton]._loading>*,[tuiButton]._loading:before,[tuiIconButton]._loading:before,[tuiButton]._loading:after,[tuiIconButton]._loading:after{opacity:0}[tuiButton]._loading>.t-loader,[tuiIconButton]._loading>.t-loader{opacity:1}[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{font-size:1rem}[tuiButton][tuiButtonVertical],[tuiIconButton][tuiButtonVertical]{--t-line-height: 1rem;--t-margin: var(--t-0, 0rem) !important;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-font-text-ui-s)}[tuiButton][tuiButtonVertical]>*,[tuiIconButton][tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiIconButton]{gap:0;inline-size:var(--t-size);font-size:0!important;padding:0}[tuiIconButton][data-size=l]:after{margin:0}[tuiIconButton][tuiIconButton][style*="--t-icon-start:"]:after{display:none}
`],encapsulation:2,changeDetection:0})}}return e})(),$i=(()=>{class e{constructor(){this.options=o(re),this.nothing=R(Ke),this.size=this.options.size}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275dir=y({type:e,selectors:[["a","tuiButton",""],["button","tuiButton",""],["a","tuiIconButton",""],["button","tuiIconButton",""]],hostVars:1,hostBindings:function(r,i){r&2&&j("data-size",i.size)},inputs:{size:"size"},features:[Ct([qt(re)]),O([te,ee])]})}}return e})();export{E as a,en as b,nn as c,rn as d,on as e,an as f,mn as g,c as h,l as i,pn as j,lt as k,fn as l,hn as m,ui as n,ci as o,Ge as p,li as q,He as r,di as s,mi as t,Xt as u,pi as v,q as w,f as x,Gn as y,zt as z,Qn as A,A as B,bn as C,Rn as D,le as E,wn as F,Ln as G,be as H,Fr as I,Zr as J,Qr as K,ei as L,ni as M,ne as N,$i as O,J as P,Pt as Q};
