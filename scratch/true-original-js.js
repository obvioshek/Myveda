(function(){
"use strict";
var D=document, W=window, R=D.documentElement;
var reduce = W.matchMedia && W.matchMedia("(prefers-reduced-motion: reduce)").matches;
/* a phone asking to save data, or one with very little memory, gets the same
   sky without the perpetual motion */
var NAV=W.navigator||{}, LITE=!!((NAV.connection&&NAV.connection.saveData)||(NAV.deviceMemory&&NAV.deviceMemory<=2));
var STILL=false; try{ STILL=localStorage.getItem("mvv.still")==="1"; }catch(e){}
if(STILL) R.classList.add("still");
R.classList.add("has-js");
/* JS takes over anchor scrolling, so the CSS fallback must get out of the way */
R.style.scrollBehavior="auto";
function easeIO(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2}
D.addEventListener("click",function(e){
  var a=e.target.closest&&e.target.closest('a[href^="#"]'); if(!a) return;
  var id=a.getAttribute("href").slice(1); if(!id) return;
  var el=D.getElementById(id); if(!el) return;
  e.preventDefault();
  var to=Math.max(0,Math.min(el.getBoundingClientRect().top+W.scrollY-6,
                             D.documentElement.scrollHeight-W.innerHeight));
  if(reduce||Math.abs(to-W.scrollY)<2){ W.scrollTo(0,to); history.replaceState(null,"","#"+id); return; }
  var from=W.scrollY, dist=Math.abs(to-from),
      dur=Math.max(520,Math.min(1250,500+Math.sqrt(dist)*9)), t0=null, done=false;
  /* frames can stall — a tab backgrounded mid-jump, a throttled embed. The
     journey is decoration; arriving is not, so a plain timer guarantees it. */
  var land=setTimeout(function(){ if(!done){ W.scrollTo(0,to); history.replaceState(null,"","#"+id); } },dur+450);
  requestAnimationFrame(function step(ts){
    if(t0===null)t0=ts;
    var k=Math.min(1,(ts-t0)/dur);
    W.scrollTo(0,from+(to-from)*easeIO(k));
    if(k<1){ requestAnimationFrame(step); }
    else { done=true; clearTimeout(land); history.replaceState(null,"","#"+id); }
  });
});
function $(s,c){return (c||D).querySelector(s)}
function $$(s,c){return Array.prototype.slice.call((c||D).querySelectorAll(s))}
function clamp(v,a,b){return v<a?a:v>b?b:v}
function lerp(a,b,t){return a+(b-a)*t}

/* ══════════════════════════════════════════════════════════════════════
   0. FACES
   Every person in this product has a face, and none of them is a stock
   photograph or an empty grey circle. Each is a small rosette generated
   from the name itself — same name, same face, forever — built from the
   geometry a temple ceiling uses: a ring, a count of petals, a centre.
   Nothing is fetched, nothing is stored, and nobody's likeness is used.
   ══════════════════════════════════════════════════════════════════════ */
var AV_INK=["#E0A063","#C98BA0","#9FD6C8","#A3B0EE","#F0B36B","#D98A5F","#C7B27A","#B9A2D6"];
var AV_BG =["#2E211A","#28202F","#2C2420","#222A29","#312718"];
function hash(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
var AVN=0;   /* one id per rendering, so the same face twice never shares a gradient */
function avatar(name){
  /* A rosette, not a portrait: nobody here is asked for their face. It has to
     survive being 32px wide, which the old ring of sub-pixel dots did not, so
     the mark is now three readable rings — a lit ground, radial petals, and a
     point at the centre. */
  var h=hash(name),
      ink=AV_INK[h%AV_INK.length],
      bg=AV_BG[(h>>4)%AV_BG.length],
      petals=5+((h>>8)%4),          /* 5..8 */
      rot=(h>>12)%72,
      id="av"+h.toString(36)+"-"+(AVN++),
      o='<svg viewBox="0 0 40 40" aria-hidden="true">'+
        '<defs><radialGradient id="'+id+'" cx="50%" cy="32%" r="78%">'+
          '<stop offset="0" stop-color="'+ink+'" stop-opacity=".40"/>'+
          '<stop offset="62%" stop-color="'+ink+'" stop-opacity=".13"/>'+
          '<stop offset="100%" stop-color="'+bg+'"/></radialGradient></defs>'+
        '<rect width="40" height="40" fill="'+bg+'"/>'+
        '<rect width="40" height="40" fill="url(#'+id+')"/>'+
        '<g transform="rotate('+rot+' 20 20)">'+
        '<circle cx="20" cy="20" r="15" fill="none" stroke="'+ink+'" stroke-opacity=".38" stroke-width="1.1"/>';
  for(var j=0;j<petals;j++){
    var b=j/petals*6.2832-1.5708,
        cx=(20+Math.cos(b)*10.2), cy=(20+Math.sin(b)*10.2),
        dg=(b*57.2958).toFixed(1);
    o+='<ellipse cx="'+cx.toFixed(2)+'" cy="'+cy.toFixed(2)+'" rx="3.9" ry="2.5" fill="'+ink+'" fill-opacity=".9"'+
       ' transform="rotate('+dg+' '+cx.toFixed(2)+' '+cy.toFixed(2)+')"/>';
  }
  return o+'<circle cx="20" cy="20" r="5.6" fill="none" stroke="'+ink+'" stroke-opacity=".55" stroke-width="1.1"/>'+
           '<circle cx="20" cy="20" r="2.6" fill="'+ink+'"/></g></svg>';
}
/* ══════════════════════════════════════════════════════════════════════
   1. ONE SKY, SHARED BY THE WHOLE PAGE

   No section owns a colour. Every colour is a live variable rewritten from
   the scroll position, so the whole visible page always sits in one moment
   of one dawn and moving between sections is a cross-fade, never a step.

   The sky travels a full night. Its morning is the Bolo palette used in
   order — terracotta at the horizon, then gerua, then turmeric light, then
   parchment — because those five tones are a sunrise if you lay them out in
   sequence. What that palette has no colour for is night, so the night is a
   deep warm violet: the hour that already has the warmth in it, before there
   is any sun to explain it.

   Content NEVER trades readability for the effect. Every section sits on a
   veil, and the veil keeps it dark and its ink light the whole way down. The
   morning is only ever let through where there is nothing to read — the
   closing zone and the footer. The veil also THINS as you descend, because
   the koshas are sheaths and by the end there is no sheath left.
   ══════════════════════════════════════════════════════════════════════ */
function smooth(a,b,x){x=clamp((x-a)/(b-a),0,1);return x*x*(3-2*x)}
function mix(a,b,x){return a+(b-a)*x}
function lerpRGB(a,b,x){return[Math.round(a[0]+(b[0]-a[0])*x),Math.round(a[1]+(b[1]-a[1])*x),Math.round(a[2]+(b[2]-a[2])*x)]}
function rgbs(c){return "rgb("+c[0]+","+c[1]+","+c[2]+")"}
function rgbas(c,a){return "rgba("+c[0]+","+c[1]+","+c[2]+","+a.toFixed(3)+")"}

var SKY=[
/* t      sky            veil          vA    ink            ink-2          ink-3          accent         edge          */
 [0,    [22,16,34],   [17,12,22],   .70, [245,233,214], [224,208,190], [201,183,155], [248,201,79],  [186,150,168]],
 [.30,  [31,19,38],   [25,16,25],   .68, [245,233,214], [224,208,190], [201,183,155], [248,201,79],  [196,154,158]],
 [.58,  [47,26,36],   [37,22,22],   .68, [246,235,217], [226,210,192], [203,186,158], [249,203,84],  [206,160,146]],
 [.80,  [78,44,31],   [49,28,19],   .74, [248,238,221], [229,213,194], [206,189,161], [250,206,90],  [216,170,138]],
 /* terracotta at the horizon — the first of the five tones to arrive */
 [.90,  [155,73,44],  [48,28,18],   .84, [251,242,227], [232,217,198], [210,193,166], [251,208,96],  [224,180,144]],
 /* gerua, the tone the whole palette was named for, at full strength */
 [.965, [224,122,47], [46,27,17],   .88, [254,247,235], [236,222,204], [214,198,172], [253,212,108], [230,190,150]],
 /* and then parchment: full morning, and the last swatch on the card */
 [1,    [245,233,214],[42,25,16],   .90, [255,250,242], [238,224,208], [216,200,176], [254,214,116], [236,198,158]]
];
/* MORNING drives only how far the veil is allowed to lift. Nothing inverts:
   see the note above .night in the stylesheet for why that was abandoned. */
var lastSky=-1, MORNING=0;

/* The sunrise begins exactly when the last readable thing clears the screen —
   measured from where the closing zone actually starts, not guessed, so it
   holds at any viewport and any content length. */
/* recomputed in measure(), never during a scroll or a frame */
var DAWN=.90;
function dawnStart(){ return DAWN; }
/* remap scroll so the night occupies everything up to that point, and the
   whole sunrise happens inside the quiet zone at the foot of the page */
function phaseOf(t){var d=DAWN;return t<d?(t/d)*.8:.8+((t-d)/(1-d))*.2}

function skyAt(t){
  var i=0; while(i<SKY.length-2&&t>SKY[i+1][0])i++;
  var a=SKY[i],b=SKY[i+1],x=clamp((t-a[0])/(b[0]-a[0]),0,1);
  x=x*x*(3-2*x);                                   /* ease every crossing */
  return {sky:lerpRGB(a[1],b[1],x),veil:lerpRGB(a[2],b[2],x),vA:a[3]+(b[3]-a[3])*x,
          ink:lerpRGB(a[4],b[4],x),ink2:lerpRGB(a[5],b[5],x),ink3:lerpRGB(a[6],b[6],x),
          acc:lerpRGB(a[7],b[7],x),edge:lerpRGB(a[8],b[8],x)};
}
var ATINT=[30,35,40,42,45,50,65,70,80,85,90];
var themeMeta=$('meta[name="theme-color"]'), skyCache={};
function setVar(k,v){ if(skyCache[k]!==v){ skyCache[k]=v; R.style.setProperty(k,v); } }
function paintSky(t){
  if(Math.abs(t-lastSky)<.0015) return;            /* only repaint on real change */
  lastSky=t;
  var p=phaseOf(t), c=skyAt(p);
  /* flips late and fast, inside the last stretch of the sunrise, so the
     closing ink is never a mid-tone standing on a mid-tone ground */
  MORNING=smooth(.93,.999,p);
  setVar("--void",rgbs(c.sky));
  setVar("--scrim",rgbas(c.veil,c.vA));
  setVar("--scrim-soft",rgbas(c.veil,c.vA*.82));
  setVar("--scrim-thin",rgbas(c.veil,c.vA*.46));
  /* nothing reads on this one — it is the strip the morning is let through */
  setVar("--scrim-thinner",rgbas(c.veil,c.vA*.20*(1-MORNING)+.03*MORNING));
  /* The chrome never crosses over. It keeps a dark bar and light text the
     whole way, because a bar fading through mid-grey on a mid ground is
     unreadable at exactly the halfway point — and a dark bar standing on
     morning is no hardship at all. */
  setVar("--chrome",rgbas(c.veil,Math.max(.80,c.vA)));
  setVar("--ink",rgbs(c.ink));
  setVar("--ink-2",rgbs(c.ink2));
  setVar("--ink-3",rgbs(c.ink3));
  setVar("--accent",rgbs(c.acc));
  ATINT.forEach(function(a){ setVar("--a"+a, rgbas(c.acc, a/100)); });
  setVar("--line",rgbas(c.edge,.26));
  setVar("--line-2",rgbas(c.edge,.13));
  setVar("--panel",rgbas(c.ink,.045));
  setVar("--panel-2",rgbas(c.ink,.075));
  setVar("--warm",p.toFixed(2));
  if(themeMeta) themeMeta.setAttribute("content",rgbs(lerpRGB(c.veil,c.sky,1-c.vA)));
}

/* ══════════════════════════════════════════════════════════════════════
   2. THE JOURNEY — a point becomes a field, and the field becomes a hum.

   One singularity opens into a sky while the page is still talking about the
   outer, public layers, and draws back in as it descends toward the private
   core: the same movement as the koshas, at cosmic scale. What it gathers
   into is the chandrabindu — the bowl and the point of light, which is the
   mark, the lamp and the cooling-off timer. Then rings leave it, which is
   what a chandrabindu means: the resonance that carries on after the word.

   Drawn as light rather than as type — three layers, blurred at build time,
   composited at descending alpha — so it never depends on a webfont arriving
   and never falls back to a missing glyph.
   ══════════════════════════════════════════════════════════════════════ */
var cvs=$("#cosmos"), cctx=cvs?cvs.getContext("2d"):null,
    stars=[], bloomImg=null, coreImg=null, waveImg=null, waveGerua=null,
    binduL=null, binduD=null, BINDU_INK=.90, CW=0, CH=0;

/* ── the twenty-seven nakshatras ──
   The moon crosses all 27 lunar mansions in about 27.3 days, so the page is
   laid out as one full cycle: top to bottom walks the whole month, one
   mansion at a time. Each carries its traditional figure. Deliberately
   unlabelled — a figure you notice and wonder about is better company than
   one that announces itself. The names stay here as the record of what is
   being drawn, which is the same bargain the silent engine makes. */
var NAK=[
 ["Ashwini","20,70 50,30 78,62"],["Bharani","50,25 22,75 78,75"],
 ["Krittika","30,40 46,29 59,44 40,57 67,60 52,69"],["Rohini","22,66 50,26 78,66 34,80 68,80"],
 ["Mrigashirsha","34,64 50,32 68,62"],["Ardra","50,50"],
 ["Punarvasu","26,66 40,34 60,34 74,66"],["Pushya","50,28 30,66 70,66"],
 ["Ashlesha","24,72 36,46 54,34 70,48 66,72"],["Magha","26,72 26,44 50,30 74,44 74,72"],
 ["Purva Phalguni","36,42 64,66"],["Uttara Phalguni","36,66 64,42"],
 ["Hasta","24,62 38,38 52,30 66,38 76,60"],["Chitra","50,50"],["Swati","50,48"],
 ["Vishakha","26,72 32,40 68,40 74,72"],["Anuradha","50,28 28,54 72,54 50,74"],
 ["Jyeshtha","50,28 34,60 66,60"],["Mula","50,22 38,40 62,40 28,58 50,58 72,58 34,78 50,84 66,78"],
 ["Purva Ashadha","38,38 62,68"],["Uttara Ashadha","38,68 62,38"],
 ["Shravana","30,70 50,50 70,30"],["Dhanishtha","32,34 68,34 32,70 68,70"],
 ["Shatabhisha","50,50"],["Purva Bhadrapada","40,32 60,70"],
 ["Uttara Bhadrapada","40,70 60,32"],["Revati","26,52 38,36 56,32 72,44 74,60 56,70 38,66 30,60"]
];
NAK.forEach(function(n){n[2]=n[1].split(" ").map(function(p){var a=p.split(",");return[+a[0]/100,+a[1]/100]})});

function sprite(size,stops){
  var s=D.createElement("canvas"); s.width=s.height=size;
  var g=s.getContext("2d"),grd=g.createRadialGradient(size/2,size/2,0,size/2,size/2,size/2);
  stops.forEach(function(st){grd.addColorStop(st[0],st[1])});
  g.fillStyle=grd; g.fillRect(0,0,size,size); return s;
}
/* the chandrabindu, as light. Same geometry as the logo, so the thing the
   journey resolves into is literally the mark on the header. */
function buildBindu(fill,S,blurFrac){
  var c=D.createElement("canvas"); c.width=c.height=S;
  var g=c.getContext("2d"), k=S/100;
  if(blurFrac) g.filter="blur("+(S*blurFrac).toFixed(1)+"px)";
  g.strokeStyle=fill; g.fillStyle=fill; g.lineCap="round"; g.lineJoin="round";
  g.scale(k,k);
  g.lineWidth=2.4; g.globalAlpha=.45;                 /* the echo — resonance */
  g.beginPath(); g.moveTo(7,43); g.bezierCurveTo(7,87,93,87,93,43); g.stroke();
  g.globalAlpha=1; g.lineWidth=8;                     /* the bowl */
  g.beginPath(); g.moveTo(21,49); g.bezierCurveTo(21,80,79,80,79,49); g.stroke();
  g.beginPath(); g.arc(50,25,10,0,6.2832); g.fill();  /* the point of light */
  return c;
}
function binduSet(fill){return[buildBindu(fill,256,.085),buildBindu(fill,384,.028),buildBindu(fill,576,.004)]}
var BW=[.34,.5,1];
function drawBindu(set,Dm,a,cx,cy){
  if(!set||a<=.002) return;
  for(var i=0;i<3;i++){cctx.globalAlpha=a*BW[i];cctx.drawImage(set[i],cx-Dm/2,cy-Dm/2,Dm,Dm)}
}
/* Density scales with viewport area — a fixed count that reads as a field on
   a laptop disappears entirely on a wide monitor. */
function buildField(){
  var n=Math.round(Math.min(330,Math.max(64,(W.innerWidth*W.innerHeight)/5200)));
  stars=[];
  for(var i=0;i<n;i++) stars.push({
    a:Math.random()*6.2832,
    /* floor the radius: stars at r≈0 would park on the dead-centre pixel for
       the whole open-field phase, sitting behind the body text */
    r:.14+Math.pow(Math.random(),.62)*.86,
    /* height above the plane, biased toward it, so the field is a thick disc
       rather than a ball — a galaxy, not a swarm */
    hz:(Math.random()*2-1)*Math.pow(Math.random(),.5),
    s:Math.random()*1.5+.7, w:Math.random()*.5+.5, k:Math.random()*.5+.82,
    tw:Math.random()<.55, ph:Math.random()*6.28,
    br:.00009+Math.random()*.00022, ba:.006+Math.random()*.016,
    tr:.0007+Math.random()*.0012, warm:Math.random()<.12
  });
}
function sizeCosmos(){
  if(!cctx) return;
  var dpr=(W.innerWidth<760||LITE)?1:Math.min(W.devicePixelRatio||1,2);
  CW=W.innerWidth; CH=W.innerHeight;
  cvs.width=Math.round(CW*dpr); cvs.height=Math.round(CH*dpr);
  cvs.style.width=CW+"px"; cvs.style.height=CH+"px";
  cctx.setTransform(dpr,0,0,dpr,0,0);
}

function drawCosmos(t,time,br){
  if(!cctx) return;
  var w=CW,h=CH,cx=w/2,cy=h/2,mind=Math.min(w,h);
  cctx.clearRect(0,0,w,h);
  t=phaseOf(t);
  var grow=smooth(.02,.38,t),        /* the expansion */
      pull=smooth(.55,.80,t),        /* the gathering back in */
      /* rise, a real plateau at full presence, then a release. The pale mark
         lives entirely against the night and lets go completely; a darker one
         returns once the light has settled and stays — so the foot of the page
         is somewhere to be, not somewhere the page stops. */
      rise=smooth(.76,.86,t),
      binduLA=rise*(1-smooth(.925,.975,t)),
      binduDA=smooth(.965,1,t)*.34,
      diss=smooth(.86,1,t),
      spread=grow*(1-pull)+diss*.95,
      coreI=Math.max(Math.pow(1-grow,1.6),Math.pow(pull,2.2)*Math.max(0,1-diss*1.25)),
      /* everything born of the singularity keeps orbiting it. About three
         a revolution: slow enough to rest against, fast enough that you can
         actually watch a star travel while the page sits still. Nothing here
         is driven by scrolling; scrolling only changes where the sky IS. */
      rot=t*1.15+time*.00013,
      /* the sunrise waits until the mark has had its moment in the dark — a
         pale glyph and a dark one cross-fading over a mid ground cancel each
         other out, so the two events are separated in time instead */
      dawn=smooth(.90,.998,t),
      /* The sky is a volume, not a picture of one. Everything sits somewhere
         real in it and is projected with perspective, so near things are
         larger, brighter and sweep faster. The elevation opens as you descend:
         you begin looking along the plane and slowly rise above it. */
      elev=mix(.61,1.08,smooth(0,.75,t)),
      cosE=Math.cos(elev), sinE=Math.sin(elev), focal=mind*2.1;

  /* the halo — wide, and only a few levels above the void */
  var bR=mix(.22,1.34,spread)*mind*(1+br*.03);
  cctx.globalAlpha=mix(.6,.26,spread)*(.92+br*.12)*(1-dawn*.8);
  cctx.drawImage(bloomImg,cx-bR,cy-bR,bR*2,bR*2);

  /* the field — rises out of the singularity, draws in, then returns */
  var starA=smooth(.03,.18,t)*(1-smooth(.82,.92,t)*.8);
  starA=Math.min(1,starA+diss*.9);
  if(starA>.004){
    for(var i=0;i<stars.length;i++){
      var st=stars[i],
          bob=Math.sin(time*st.br+st.ph)*st.ba,
          rad=st.r*spread*mind*.8*(1+bob)+2,
          /* inner orbits run faster than outer ones, the way real ones do —
             rigid rotation reads as a spinning picture, not as a sky */
          ang=st.a+rot*st.k*(1.55-st.r*.85)+Math.sin(time*st.br*.7+st.ph)*.014,
          wx=Math.cos(ang)*rad, wz=Math.sin(ang)*rad, wy=st.hz*spread*mind*.3,
          ry=wy*cosE-wz*sinE, rz=wy*sinE+wz*cosE,
          persp=focal/(focal+rz);
      if(persp<=.06) continue;                       /* behind the eye */
      var x=cx+wx*persp, y=cy+ry*persp,
          tw=st.tw?(.6+.4*Math.sin(time*st.tr+st.ph)):1,
          near=Math.min(1.3,Math.max(.42,persp)),
          sz=st.s*Math.min(1.85,Math.max(.55,persp)),
          a=starA*st.w*tw*near*(1-dawn);
      cctx.fillStyle=st.warm?"#f6bd7c":"#f5ecd8";
      if(sz>1.75){cctx.globalAlpha=a*.22;cctx.fillRect(x-1.5,y-1.5,sz+3,sz+3)}
      cctx.globalAlpha=a; cctx.fillRect(x,y,sz,sz);
    }
  }

  /* the nakshatra currently overhead — drawn where the moon would be standing
     in the cycle, riding the same tilted plane as the rest of the field */
  var nakI=Math.min(NAK.length-1,Math.floor(t*NAK.length)), nakP=t*NAK.length-nakI,
      nakA=Math.min(smooth(0,.22,nakP),1-smooth(.78,1,nakP))*(1-dawn)*.62;
  if(nakA>.004&&starA>.05){
    var pts=NAK[nakI][2],
        seat=(nakI/NAK.length)*6.2832+time*.00011+rot*.5,
        orbit=mind*(.33+.05*Math.sin(time*.000031+nakI)),
        nwx=Math.cos(seat)*orbit, nwz=Math.sin(seat)*orbit, nwy=-mind*.05,
        nry=nwy*cosE-nwz*sinE, nrz=nwy*sinE+nwz*cosE,
        nP=Math.max(.4,focal/(focal+nrz)),
        nx=cx+nwx*nP, ny=cy+nry*nP,
        size=mind*(.30+.022*Math.sin(time*.00006+nakI*.7))*nP;
    nakA*=Math.min(1.15,nP);
    cctx.save(); cctx.translate(nx,ny); cctx.rotate(time*.000028+nakI*.9);
    cctx.strokeStyle="#f7e4c6"; cctx.fillStyle="#fff5e0"; cctx.lineWidth=1.4;
    if(pts.length>1){
      cctx.globalAlpha=nakA*.42; cctx.beginPath();
      for(var q=0;q<pts.length;q++){
        var px=(pts[q][0]-.5)*size, py=(pts[q][1]-.5)*size;
        if(q===0)cctx.moveTo(px,py); else cctx.lineTo(px,py);
      }
      cctx.stroke();
    }
    for(var q2=0;q2<pts.length;q2++){
      var qx=(pts[q2][0]-.5)*size, qy=(pts[q2][1]-.5)*size,
          twk=.68+.32*Math.sin(time*.0011+q2*1.7+nakI);
      cctx.globalAlpha=nakA*twk*.55; cctx.beginPath(); cctx.arc(qx,qy,4.4,0,6.2832); cctx.fill();
      cctx.globalAlpha=nakA*twk;     cctx.beginPath(); cctx.arc(qx,qy,2.3,0,6.2832); cctx.fill();
    }
    cctx.restore();
  }

  /* the point itself — small and hot, never a wash */
  if(coreI>.012){
    var cR=mix(mind*.035,mind*.10,coreI);
    cctx.globalAlpha=Math.min(1,coreI)*(1-dawn*.55);
    cctx.drawImage(coreImg,cx-cR,cy-cR,cR*2,cR*2);
  }

  /* sunrise — a wash of morning rising over everything above it, so the field
     does not vanish so much as get outshone. Terracotta and gerua first, and
     only then does the light give up colour for parchment. */
  if(dawn>.002){
    var whiten=smooth(.945,1,t),
        sun=cctx.createRadialGradient(cx,cy+h*.12,0,cx,cy+h*.12,mind*1.5),
        GER=[[248,201,79,.98],[224,122,47,.94],[180,75,42,.86],[120,52,32,.70]],
        PAR=[[255,252,246,.99],[250,240,222,.97],[245,233,214,.92],[238,222,200,.82]],
        ST=[0,.34,.72,1];
    for(var si=0;si<4;si++){
      var a1=GER[si],b1=PAR[si];
      sun.addColorStop(ST[si],"rgba("+Math.round(mix(a1[0],b1[0],whiten))+","+
        Math.round(mix(a1[1],b1[1],whiten))+","+Math.round(mix(a1[2],b1[2],whiten))+","+
        mix(a1[3],b1[3],whiten).toFixed(3)+")");
    }
    cctx.globalAlpha=dawn*(.94+br*.06);
    cctx.fillStyle=sun; cctx.fillRect(0,0,w,h);
  }

  /* the mark, ink-centred, swelling and thinning as it lets go. Two sprites
     cross-fade so it stays legible as the ground turns from night to morning. */
  if(binduLA>.002||binduDA>.002){
    /* it breathes a half-cycle out of step with the halo, so the two are
       never at their fullest at the same moment */
    var mb=1-br,
        Dm=(mind*(.50+diss*.12))/BINDU_INK*(.983+mb*.034),
        bA=.90+mb*.2;
    drawBindu(binduL,Dm,binduLA*.26*bA,cx,cy);
    drawBindu(binduD,Dm*.82,binduDA*.44*bA,cx,cy+h*.26);
  }

  /* the resonance — concentric rings leaving centre, carrying the sound back
     out into the field it came from. Two rings, not three, and slow: emptiness
     is most of what makes this calm, and Shunyata applies to motion too. */
  if(diss>.004&&waveImg){
    for(var v=0;v<3;v++){
      var pw=((time/13000)+v/3)%1, wR=(.08+pw*1.32)*mind, wA=diss*Math.pow(1-pw,1.45)*1.05;
      if(dawn<.995){cctx.globalAlpha=wA*(1-dawn);cctx.drawImage(waveImg,cx-wR,cy-wR,wR*2,wR*2)}
      if(dawn>.005&&waveGerua){cctx.globalAlpha=Math.min(1,wA*dawn*1.5);cctx.drawImage(waveGerua,cx-wR,cy-wR,wR*2,wR*2)}
    }
  }
  cctx.globalAlpha=1;
}

if(cctx){
  bloomImg=sprite(512,[[0,"rgba(158,110,48,.55)"],[.32,"rgba(124,82,34,.22)"],
                       [.68,"rgba(78,50,18,.07)"],[1,"rgba(0,0,0,0)"]]);
  coreImg=sprite(256,[[0,"rgba(255,236,184,1)"],[.10,"rgba(255,226,160,.86)"],
                      [.34,"rgba(240,164,74,.20)"],[1,"rgba(224,122,47,0)"]]);
  waveImg=sprite(512,[[0,"rgba(0,0,0,0)"],[.60,"rgba(0,0,0,0)"],
                      [.76,"rgba(226,182,124,.34)"],[.86,"rgba(255,236,190,.78)"],
                      [.93,"rgba(226,182,124,.22)"],[1,"rgba(0,0,0,0)"]]);
  waveGerua=sprite(512,[[0,"rgba(0,0,0,0)"],[.60,"rgba(0,0,0,0)"],
                        [.76,"rgba(210,104,34,.42)"],[.86,"rgba(236,142,46,.92)"],
                        [.93,"rgba(180,75,42,.28)"],[1,"rgba(0,0,0,0)"]]);
  binduL=binduSet("#ffe9c4");     /* against the night */
  binduD=binduSet("#8a5a3a");     /* the quiet mark that returns on morning */
  buildField(); sizeCosmos();
  W.addEventListener("resize",function(){sizeCosmos();buildField();roomCanvasSize();drawCosmos(tSeen,0,.5)},{passive:true});
}
/* ══════════════════════════════════════════════════════════════════════
   4. WAYFINDING — six stops, and the page says where you are in them.
   A line in the header fills as you read; the nav marks the part of the
   product you are looking at; on a phone the menu button counts the stops.
   The lamp rail this replaces was hidden on most screens and repeated the nav.
   ══════════════════════════════════════════════════════════════════════ */
var SECS=["explore","why","how","communities","house","principles","join"];
var NAVOF={explore:"explore",how:"how",communities:"communities",house:"house",principles:"principles"};
var segEls=$$("#segbar i"), stopNow=$("#stopNow"), sheetLinks=$$("#sheet .sheet-l a"),
    navLinks=$$(".top nav a"), hprog=$("#hprog"), litCount=-2, progV=-1;
var SECTOP=[];                       /* filled by measure(), read by wayfind() */
function wayfind(){
  var p=Math.round(journey*500)/500;
  if(p!==progV&&hprog){ progV=p; hprog.style.transform="scaleX("+p+")"; }
  var mid=W.scrollY+W.innerHeight*0.42, cur=-1;
  for(var i=0;i<SECTOP.length;i++){ if(SECTOP[i]<=mid) cur=i; }
  if(cur===litCount) return;
  litCount=cur;
  segEls.forEach(function(s,i){s.classList.toggle("on",i<=cur)});
  if(stopNow) stopNow.textContent=cur<0?"Menu":(cur+1)+" / "+SECS.length;
  sheetLinks.forEach(function(a,i){a.classList.toggle("on",i===cur)});
  var here=cur<0?"":NAVOF[SECS[cur]]||"";
  navLinks.forEach(function(a){
    var on=a.getAttribute("href")==="#"+here;
    a.classList.toggle("on",on);
    if(on) a.setAttribute("aria-current","true"); else a.removeAttribute("aria-current");
  });
}

/* ══════════════════════════════════════════════════════════════════════
   5. THE SOURCE OF TRUTH, AND THE LOOP

   Scroll tracking deliberately does NOT depend on requestAnimationFrame.
   Where rAF is throttled — a background tab, some embeds — the easing loop
   stops, and the sky would otherwise freeze at the singularity forever. The
   loop is an enhancement; this handler is the truth.

   The loop eases toward the scroll position rather than tracking it 1:1.
   That lag is most of what makes the sky read as drift rather than a scrub.
   ══════════════════════════════════════════════════════════════════════ */
var journey=0, tSeen=0, lastLoop=-1e6, lastT=0, docMax=0, running=false, lastDraw=0, skyT=0;
/* The one place in the whole page that is allowed to force a layout. */
function measure(){
  docMax=D.documentElement.scrollHeight-W.innerHeight;
  var f=$(".end");
  DAWN=(f&&docMax>0)?Math.min(.95,Math.max(.5,(f.offsetTop-W.innerHeight*1.5)/docMax)):.90;
  SECTOP=SECS.map(function(id){var e=D.getElementById(id);return e?e.offsetTop:1e9});
}
function onScroll(){
  journey=docMax>0?clamp(W.scrollY/docMax,0,1):0;
  wayfind();
  /* the loop owns the sky; this only takes over when frames are not running */
  if(reduce||performance.now()-lastLoop>400){
    tSeen=journey;
    paintSky(tSeen);
    drawCosmos(tSeen,reduce?0:skyT,.5);
  }
  wake();
}
W.addEventListener("scroll",onScroll,{passive:true});

function ambientOn(){ return !(LITE||STILL); }
function wake(){ if(running||reduce) return; running=true; lastT=0; requestAnimationFrame(frame); }
function frame(t){
  lastLoop=t;
  if(!lastT)lastT=t;
  var dt=Math.min(t-lastT,80); lastT=t;
  if(docMax>0){ var j=clamp(W.scrollY/docMax,0,1); if(j!==journey){ journey=j; wayfind(); } }
  var gap=journey-tSeen, easing=Math.abs(gap)>.0006, amb=ambientOn();
  /* the lag is most of what makes the sky drift rather than scrub; it is
     frame-rate independent now, so 30 frames ease exactly like 60 */
  tSeen = easing ? tSeen+gap*(1-Math.pow(.925,dt/16.7)) : journey;
  if(amb) skyT=t;
  if(easing || (amb && t-lastDraw>=32)){
    lastDraw=t;
    paintSky(tSeen);
    drawCosmos(tSeen, skyT, amb?(1-Math.cos(t/11000*6.2832))/2:.5);
  }
  if(amb) roomAmbient(dt);
  coolTick(t);
  if(easing||amb||coolEnd) requestAnimationFrame(frame);
  else running=false;          /* asleep until the next scroll, press or resize */
}
/* measure first: onScroll reads the cache, so the cache has to exist before
   the first paint — otherwise a page opened at a #hash starts on the wrong
   moment of the sky. Re-run once the late modules have injected their content
   and the document has its final height. */
function resync(){ measure(); onScroll(); }
resync();
W.addEventListener("resize",resync,{passive:true});
/* layout changes (fonts arriving, a demo growing) re-measure, instead of a forced read every 45 frames */
if("ResizeObserver" in W){ new ResizeObserver(function(){ measure(); wake(); }).observe(D.body); }
setTimeout(resync,300); setTimeout(resync,1400);
if(reduce) drawCosmos(tSeen,0,.5); else wake();

/* ══════════════════════════════════════════════════════════════════════
   6. LIT, not slid in.
   ══════════════════════════════════════════════════════════════════════ */
if("IntersectionObserver" in W){
  var io=new IntersectionObserver(function(en){
    en.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add("lit");io.unobserve(e.target);}
    });
  },{rootMargin:"0px 0px -12% 0px",threshold:.12});
  $$(".rv,.stag").forEach(function(el){io.observe(el)});
}else{ $$(".rv,.stag").forEach(function(el){el.classList.add("lit")}); }
W.__mvvOK=true;   /* the head watchdog stands down: reveals are wired */

/* ══════════════════════════════════════════════════════════════════════
   8. ARRIVAL — four moves
   ══════════════════════════════════════════════════════════════════════ */
(function(){
  var tabs=$$("#stepPick button"), panes=$$(".pane"), bar=$("#stepBar"),
      prev=$("#sPrev"), next=$("#sNext"), cur=0;
  function go(i){
    cur=clamp(i,0,tabs.length-1);
    tabs.forEach(function(b,n){b.setAttribute("aria-selected",n===cur?"true":"false")});
    panes.forEach(function(p,n){p.classList.toggle("on",n===cur)});
    bar.style.width=((cur+1)/tabs.length*100)+"%";
    prev.disabled=cur===0; next.disabled=cur===tabs.length-1;
  }
  tabs.forEach(function(b,n){b.addEventListener("click",function(){go(n)})});
  prev.addEventListener("click",function(){go(cur-1)});
  next.addEventListener("click",function(){go(cur+1)});
  go(0);
})();

/* ═══════════════════════════════════════════════════════════════════
   10c. THE DOOR
   Set JOIN_ENDPOINT to a URL and this POSTs {email} as JSON; the server is
   expected to send one confirmation message (double opt-in) and keep nothing
   until it is clicked. Left empty, the form says plainly that nothing was
   saved. The address is never stored in the browser and never echoed back,
   because a shared family phone would show it to the next person.
   ═════════════════════════════════════════════════════════════════ */
var JOIN_ENDPOINT="";
(function(){
  var f=$("#joinform"), inp=$("#joinmail"), say=$("#joinsay"), btn=f?f.querySelector("button"):null;
  if(!f) return;
  try{ localStorage.removeItem("mvv.lamp"); }catch(e){}   /* an earlier draft of this page kept it */
  function tell(t,ok){ say.textContent=t; say.classList.add("on"); say.classList.toggle("ok",!!ok);
    inp.setAttribute("aria-invalid",ok?"false":"true"); }
  function valid(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }
  f.addEventListener("submit",function(e){
    e.preventDefault();
    var v=(inp.value||"").trim();
    if(!valid(v)){ tell("That does not look like an email address — have another go.",false); inp.focus(); return; }
    btn.disabled=true;
    if(JOIN_ENDPOINT){
      fetch(JOIN_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:v})})
        .then(function(r){ if(!r.ok) throw 0; inp.value=""; btn.disabled=false;
          tell("Check your inbox: one message asks you to confirm. Nothing is kept until you do.",true); ping(5); })
        .catch(function(){ btn.disabled=false; tell("That did not go through. Try again in a moment.",false); });
    }else{
      inp.value=""; btn.disabled=false;
      tell("Thank you. The list is not open yet, so nothing was saved — not here, and not on a server.",true); ping(5);
    }
  });
})();

/* ══════════════════════════════════════════════════════════════════════
   11. FIVE ROOMS, FIVE PHYSICS
   Not a tab switcher with different copy. Vayu really does let go of its
   messages while you watch, and Akash really has no way to speak.
   ══════════════════════════════════════════════════════════════════════ */
var roomTimer=null, amb=$("#amb"), ax=amb?amb.getContext("2d"):null, AW=0,AH=0,P=[],ambCfg=null;
var ROOM={
  prithvi:{n:"Reading Circle",c:"var(--terra-lit)",ic:"#i-prithvi",
    meta:"Reading Circle · kept over time · 2,140 notes", mode:"Shared record",
    note:"Useful contributions stay easy to find and build on.",
    speech:"Written, searchable",mem:"Kept over time",pace:"Thoughtful by design",who:"Everyone in the community",
    say:{on:true,t:"What you add here stays easy to find for whoever reads the book next."},
    msgs:[["Lakshmi","Added notes from chapter six. The part about memory and home stayed with me all week.","#2138"],
          ["Ruth","Logged two readings of the same passage. We disagreed usefully, so I kept both.","#2139"],
          ["Neha","Wrote a short summary so anyone joining next month can catch up.","#2140"]],
    amb:{n:16,vy:.02,vx:0,r:1.4,a:.13,col:"217,138,95"}},
  jal:{n:"Local Community",c:"var(--indigo)",ic:"#i-jal",
    meta:"Local Community · kept 30 days · 41 here now", mode:"Everyday conversation",
    note:"Held for thirty days, and then it lets go.",
    speech:"Casual, written",mem:"Thirty days",pace:"Easy",who:"Everyone in the community",
    say:{on:true,t:"Ask the small, practical question. That is what this space is for."},
    msgs:[["Nandita","Does anyone know a quiet place to study near the library after six?","·"],
          ["Harpreet","The reading room upstairs stays open until eight.","·"],
          ["Tsering","Organising a Sunday clean-up by the lake. Bring gloves if you have them.","·"]],
    amb:{n:22,vy:0,vx:.16,r:1.1,a:.14,col:"163,176,238"}},
  vayu:{n:"Young Founders",c:"#9FD6C8",ic:"#i-vayu",
    meta:"Young Founders · live session · gone in 24 hours", mode:"Live, not kept",
    note:"Watch — these messages disappear while you read them.",
    speech:"Spoken, unrecorded",mem:"Twenty-four hours",pace:"Fast",who:"Everyone in the community",
    say:{on:true,t:"Nothing said here is saved. Ask the honest question."},
    msgs:[["Navneet","Live now: a Q&A on finding your first ten customers. The link is in the header.","~"],
          ["Samyak","How did you decide on pricing before you had any data?","~"],
          ["Rukmini","This space closes tonight, so ask the question you would never put in writing.","~"]],
    amb:{n:30,vy:.1,vx:.5,r:1,a:.2,col:"159,214,200"}},
  akash:{n:"Language & Culture",c:"#C9B79B",ic:"#i-akash",
    meta:"Language & Culture · announcements · 12,400 members", mode:"Announcements",
    note:"There is no reply box here. Conversations happen in the discussion threads.",
    speech:"None — you read",mem:"Kept",pace:"Rare",who:"Stewards only",
    say:{on:false,t:"This space is for updates. Replies happen in the discussion threads."},
    msgs:[["Stewards","This month's language-exchange pairs are up: 120 people matched with a conversation partner.","◦"],
          ["Appeal review","Appeal 0114 was upheld. The full reasoning is attached, signed by all five reviewers.","◦"]],
    amb:{n:12,vy:.012,vx:.01,r:1,a:.16,col:"201,183,155"}}
};
function roomCanvasSize(){
  if(!amb) return;
  var r=amb.parentElement; if(!r) return;
  AW=r.clientWidth; AH=r.clientHeight;
  var d=(W.innerWidth<760||LITE)?1:Math.min(W.devicePixelRatio||1,2);
  amb.width=AW*d; amb.height=AH*d; amb.style.width=AW+"px"; amb.style.height=AH+"px";
  ax.setTransform(d,0,0,d,0,0);
}
function seedAmb(cfg){
  ambCfg=cfg; ambCfg.css="rgb("+cfg.col+")";   /* parsed once, not per particle */
  P=[];
  for(var i=0;i<cfg.n;i++)P.push({x:Math.random()*AW,y:Math.random()*AH,o:.3+Math.random()*.7,ph:Math.random()*6.28});
}
var roomSeen=false;
function roomAmbient(dt){
  if(!ambCfg||!AW||!ax||!roomSeen) return;   /* nothing to draw when off-screen */
  ax.clearRect(0,0,AW,AH);
  ax.fillStyle=ambCfg.css;
  var k=reduce?0:dt/16;
  for(var i=0;i<P.length;i++){
    var p=P[i];
    p.y-=ambCfg.vy*k; p.x+=ambCfg.vx*k; p.ph+=.01*k;
    if(p.y<-6)p.y=AH+6; if(p.x>AW+6)p.x=-6; if(p.x<-6)p.x=AW+6;
    ax.globalAlpha=ambCfg.a*p.o*(.6+.4*Math.sin(p.ph));
    ax.beginPath();ax.arc(p.x,p.y,ambCfg.r,0,6.2832);ax.fill();
  }
  ax.globalAlpha=1;
}
if("IntersectionObserver" in W){
  var rio=new IntersectionObserver(function(en){roomSeen=en[0].isIntersecting},{rootMargin:"200px"});
  setTimeout(function(){var r=$("#room"); if(r) rio.observe(r);},50);
}else{ roomSeen=true; }
function msgEl(m){
  var d=D.createElement("div"); d.className="msg";
  d.innerHTML='<div class="av">'+avatar(m[0])+'</div><div class="bd"><div class="nmx"><span>'+m[0]+'</span><span class="ix">'+m[2]+'</span></div><div class="tx">'+m[1]+'</div></div>';
  return d;
}
function setRoom(key){
  var r=ROOM[key], box=$("#room"), body=$("#rBody");
  if(roomTimer){clearInterval(roomTimer);roomTimer=null;}
  box.dataset.el=key; box.style.setProperty("--rc",r.c);
  $("#rIconUse").setAttribute("href",r.ic);
  $("#rName").textContent=r.n; $("#rMeta").textContent=r.meta;
  $("#rMode").textContent=r.mode; $("#rNote").textContent=r.note;
  $("#rSpeech").textContent=r.speech; $("#rMem").textContent=r.mem;
  $("#rPace").textContent=r.pace; $("#rWho").textContent=r.who;
  body.innerHTML="";
  r.msgs.forEach(function(m){body.appendChild(msgEl(m))});
  var bar=D.createElement("div");
  bar.className="saybar"+(r.say.on?"":" mute");
  bar.innerHTML=(r.say.on
    ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4.4 10.5C4.4 17.5 19.6 17.5 19.6 10.5" stroke-linecap="round"/><circle cx="12" cy="5.6" r="2.2" fill="currentColor" stroke="none"/></svg>'
    : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M6 18 18 6" stroke-linecap="round"/></svg>')+'<span>'+r.say.t+'</span>';
  body.appendChild(bar);
  roomCanvasSize(); seedAmb(r.amb);

  /* Vayu genuinely lets go. Nothing is archived, and you can watch it happen. */
  if(key==="vayu"&&!reduce){
    var pool=[["Jonah","Twenty minutes left, and then this room is gone.","~"],
              ["Navneet","Someone note that pricing tip, because this room will not keep it.","~"],
              ["Samyak","That is the trade. Nothing kept, everything present.","~"],
              ["Rukmini","If this were recorded, I would never have asked my basic question.","~"]],n=0;
    roomTimer=setInterval(function(){
      if($("#room").dataset.el!=="vayu"){clearInterval(roomTimer);roomTimer=null;return;}
      /* nothing disappears while someone is reading or focused in it (2.2.2) */
      var rm=$("#room"); if(rm.matches(":hover")||rm.contains(D.activeElement)) return;
      var first=body.querySelector(".msg");
      if(first){first.classList.add("fading");setTimeout(function(){first.remove()},2600);}
      body.insertBefore(msgEl(pool[n++%pool.length]),bar);
    },3600);
  }
}
$$("#roomPick button").forEach(function(b){
  b.addEventListener("click",function(){
    $$("#roomPick button").forEach(function(x){x.setAttribute("aria-pressed","false")});
    b.setAttribute("aria-pressed","true"); setRoom(b.dataset.r); ping(1);
  });
});
setTimeout(function(){setRoom("prithvi")},60);

/* ══════════════════════════════════════════════════════════════════════
   12. THE BOWL — the middle way, made of light instead of a lock.
   ══════════════════════════════════════════════════════════════════════ */
var coolEnd=0, CIRC=207.345;
(function(){
  var input=$("#cin"), post=$("#cpost"), thread=$("#thread"),
      comp=$("#composer"), cool=$("#cool"), fil=$("#fil"), hits=[], draft="";
  if(!input) return;
  function say(){
    var v=input.value.trim(); if(!v){input.focus();return;}
    var d=D.createElement("div"); d.className="bub mine";
    var by=D.createElement("span"); by.className="by"; by.textContent="You · just now";
    d.appendChild(by); d.appendChild(D.createTextNode(v));
    thread.appendChild(d); input.value=""; ping(3);
    var now=Date.now(); hits.push(now); hits=hits.filter(function(t){return now-t<20000});
    if(hits.length>=3){hits=[];draft="";open();}
  }
  function open(){
    coolEnd=performance.now()+15000; wake();
    comp.classList.add("hide"); cool.classList.add("on");
    /* rAF stops in a backgrounded tab; the room must still hand itself back */
    clearTimeout(W.__coolFall);
    W.__coolFall=setTimeout(function(){if(coolEnd){ping(4);W.__closeCool();}},15400);
  }
  W.__closeCool=function(){
    clearTimeout(W.__coolFall);
    comp.classList.remove("hide"); cool.classList.remove("on");
    fil.setAttribute("stroke-dashoffset",CIRC);
    $("#ctime").textContent="15s"; input.value=draft; coolEnd=0;
  };
  W.__coolFil=fil;
  post.addEventListener("click",say);
  input.addEventListener("keydown",function(e){if(e.key==="Enter")say()});
})();
function coolTick(t){
  if(!coolEnd) return;
  var left=coolEnd-t;
  if(left<=0){ping(4);W.__closeCool();return;}
  W.__coolFil.setAttribute("stroke-dashoffset",(CIRC*(left/15000)).toFixed(2));
  var s=Math.ceil(left/1000), el=$("#ctime");
  if(el.textContent!==s+"s") el.textContent=s+"s";
}

/* ══════════════════════════════════════════════════════════════════════
   13. THE PROFILE CARD — presence you declare, and a record written in words.
   ══════════════════════════════════════════════════════════════════════ */
(function(){
  var G={
    sattva:{c:"var(--indigo)",s:"Reflective",e:"Open to a thoughtful conversation. Slower conversations can be surfaced without pretending everything is urgent."},
    rajas:{c:"var(--gerua-lit)",s:"Building",e:"Making something, with others. Collaboration gets through; everything else waits its turn."},
    tamas:{c:"#A08A72",s:"Taking a break",e:"Not available, and not apologising for it. Nothing pings, and nobody is shown that you were away."},
    chardi:{c:"var(--accent)",s:"Here to help",e:"Room to spare for somebody else. Newcomer welcomes and source requests are offered, never assigned."}
  };
  var pf=$("#gprofile"), av=$("#gav");
  if(!pf) return;
  if(av) av.innerHTML=avatar("Ananya Krishnan");
  $$("#gunaPick button").forEach(function(b){
    b.addEventListener("click",function(){
      $$("#gunaPick button").forEach(function(x){x.setAttribute("aria-pressed","false")});
      b.setAttribute("aria-pressed","true");
      var g=G[b.dataset.g];
      pf.style.setProperty("--st",g.c);
      $("#gstate").textContent=g.s; $("#geff").textContent=g.e;
      ping(2);
    });
  });
  /* numbers for you, stories for others, rankings for nobody — shown, not said */
  var vb=$$("#viewPick button");
  vb.forEach(function(b){
    b.addEventListener("click",function(){
      vb.forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});
      pf.setAttribute("data-view",b.dataset.v); ping(3);
    });
  });
})();

/* ══════════════════════════════════════════════════════════════════════
   14. THE FIVE SHEATHS — the explainer and the sandbox are one object.
   ══════════════════════════════════════════════════════════════════════ */
(function(){
  var stage=$("#stage"), node=$("#node"), rings=$$(".ring",stage),
      list=$$("#klist li"), out=$("#readout"), layer=0, ang=-Math.PI/2;
  if(!stage) return;
  var NAME=["Your public profile","Your availability","Your posts and communities","Your drafts & working notes","Your private space"];
  var SEEN=["anyone","people you have met","your communities — 23 people","a small group of 4","only you"];
  var TAIL=["the outermost layer","the second layer","the third layer","the fourth layer","the innermost layer"];
  var BAND=[.442,.345,.245,.148,.055], EDGE=[.50,.395,.295,.195,.10];
  function place(){
    var r=BAND[layer]*stage.clientWidth;
    node.style.transform="translate("+(Math.cos(ang)*r).toFixed(1)+"px,"+(Math.sin(ang)*r).toFixed(1)+"px)";
  }
  function render(){
    rings.forEach(function(rg,i){rg.classList.toggle("on",i===layer);rg.classList.toggle("in",i<layer)});
    list.forEach(function(li,i){li.classList.toggle("on",i===layer)});
    node.classList.toggle("deep",layer>=3);
    node.setAttribute("aria-valuenow",layer+1);
    node.setAttribute("aria-valuetext",NAME[layer]+", visible to "+SEEN[layer]);
    out.innerHTML='<b>'+NAME[layer]+' — '+TAIL[layer]+'</b><span>“Weekend cooking notes” is visible to <span class="cnt">'+SEEN[layer]+'</span>.</span>';
  }
  function set(i){layer=clamp(i,0,4);render();place()}
  var drag=false;
  node.addEventListener("pointerdown",function(e){drag=true;node.setPointerCapture(e.pointerId);e.preventDefault()});
  node.addEventListener("pointermove",function(e){
    if(!drag) return;
    var b=stage.getBoundingClientRect(), dx=e.clientX-(b.left+b.width/2), dy=e.clientY-(b.top+b.height/2);
    var d=Math.sqrt(dx*dx+dy*dy)/stage.clientWidth;
    ang=Math.atan2(dy,dx);
    var cap=Math.min(d,EDGE[0]-.015)*stage.clientWidth;
    node.style.transform="translate("+(Math.cos(ang)*cap).toFixed(1)+"px,"+(Math.sin(ang)*cap).toFixed(1)+"px)";
    var l=0; for(var i=4;i>=0;i--){ if(d<=EDGE[i]){l=i;break;} }
    if(l!==layer){layer=l;render();ping(layer);}
  });
  function stop(){if(!drag)return;drag=false;place()}
  node.addEventListener("pointerup",stop); node.addEventListener("pointercancel",stop);
  node.addEventListener("keydown",function(e){
    var k=e.key;
    if(k==="ArrowRight"||k==="ArrowUp"){set(layer+1);ping(layer);e.preventDefault();}
    else if(k==="ArrowLeft"||k==="ArrowDown"){set(layer-1);ping(layer);e.preventDefault();}
    else if(k==="Home"){set(0);e.preventDefault();}
    else if(k==="End"){set(4);e.preventDefault();}
  });
  list.forEach(function(li,i){
    li.addEventListener("click",function(){set(i);ping(i)});
    li.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){set(i);ping(i);e.preventDefault();}});
  });
  W.addEventListener("resize",place,{passive:true});
  set(0);
})();

/* ══════════════════════════════════════════════════════════════════════
   21. THE PURVAPAKSA GATE
   The classical order is purvapaksa, then uttarapaksa, then siddhanta: the
   opponent's view stated fairly, then the reply, then what is settled. Most
   software lets you skip straight to the middle one. Here the reply box is
   genuinely inert until the other person has agreed that your version of
   their argument is one they would sign.
   ══════════════════════════════════════════════════════════════════════ */
(function(){
  var ta=$("#pvText"), ask=$("#pvAsk"), cnt=$("#pvCnt"),
      s1=$("#gs1"), s2=$("#gs2"), s3=$("#gs3"), box=$("#rebutBox"),
      h3=$("#gs3h"), p3=$("#gs3p"), rb=$("#rbText"), post=$("#rbPost"), note=$("#rbNote");
  if(!ta) return;
  var MIN=12, asked=false;
  function words(){ return ta.value.trim().split(/\s+/).filter(Boolean).length; }
  /* length alone is trivially gamed; the restatement has to meet her reason */
  var REASON=/pause|catch|recipe|seat|table|week|belong/i;
  function tick(){
    var w=words(), left=Math.max(0,MIN-w), meets=REASON.test(ta.value);
    cnt.textContent = w + (w===1?" word":" words") + (left?" · "+left+" to go":
                      meets?" · and it meets her reason":" · now name her reason, not only her conclusion");
    cnt.classList.toggle("ok",left===0&&meets);
    ask.disabled = left>0 || !meets || asked;
  }
  ta.addEventListener("input",tick); tick();
  ask.addEventListener("click",function(){
    if(asked) return;
    asked=true; ask.disabled=true; ta.readOnly=true;
    s2.classList.remove("now"); s2.classList.add("done");
    s3.classList.remove("wait"); s3.classList.add("now");
    h3.textContent="Devika is reading it…";
    p3.textContent="She sees only your restatement. Your reply is still sealed.";
    ping(2);
    setTimeout(function(){
      s3.classList.remove("now"); s3.classList.add("done");
      h3.textContent="“Yes — that's my position.”";
      p3.innerHTML="Accepted, so the reply box is open. Had she sent it back, you would be rewriting it, not arguing.";
      box.classList.add("open");
      ping(5);
      setTimeout(function(){ try{ rb.focus({preventScroll:true}); }catch(e){} },120);
    },1900);
  });
  post.addEventListener("click",function(){
    if(!box.classList.contains("open")) return;
    var v=(rb.value||"").trim();
    note.textContent = v ? "Published — her position first, then yours." : "Write something first.";
    note.classList.toggle("ok",!!v);
    if(v){ post.disabled=true; rb.readOnly=true; ping(4); }
  });
})();

/* ══════════════════════════════════════════════════════════════════════
   23. SAMVAD — the calm inbox
   Three predictable delivery windows a day. The evidence is specific: batching
   beat real-time delivery, and it also beat switching notifications off, which
   raised anxiety and fear of missing out. Calm is a rhythm, not an absence.
   ══════════════════════════════════════════════════════════════════════ */
(function(){
  var at=$("#winAt"), inn=$("#winIn"), sw=$("#maunaSw"), row=$("#mauna"), tx=$("#maunaTx"),
      why=$("#inboxWhy"), now=$("#sendNow"), keep=$("#keepBatched");
  if(!at) return;
  $$("#inboxBody .av").forEach(function(el){ el.innerHTML=avatar(el.dataset.av); });
  var WINDOWS=[9,13,18];                    /* 9am, 1pm, 6pm */
  function nextWindow(){
    var d=new Date(), h=d.getHours(), m=d.getMinutes(), s2=d.getSeconds();
    for(var i=0;i<WINDOWS.length;i++){ if(WINDOWS[i]>h||(WINDOWS[i]===h&&m===0&&s2===0)) return {h:WINDOWS[i],day:0}; }
    return {h:WINDOWS[0],day:1};
  }
  function label(h){ var ap=h>=12?"pm":"am", hh=h%12||12; return hh+":00 "+ap; }
  function tick(){
    var w=nextWindow(), d=new Date(),
        t=new Date(d.getFullYear(),d.getMonth(),d.getDate()+w.day,w.h,0,0),
        ms=Math.max(0,t-d), mins=Math.floor(ms/60000), hrs=Math.floor(mins/60);
    at.textContent=label(w.h);
    inn.textContent = hrs>0 ? hrs+"h "+(mins%60)+"m" : (mins+1)+"m";
  }
  tick(); setInterval(tick,20000);

  var on=false;
  function paint(){
    row.classList.toggle("on",on);
    sw.setAttribute("aria-checked",on?"true":"false");
    tx.textContent = on ? "Quiet mode is on — messages are held until you come back"
                        : "Quiet mode is off—messages arrive at the next window";
    why.textContent = on ? "Nobody is told you are in quiet mode. There is no “away” badge to perform."
                         : "Read receipts are off by design. There is no pressure to be instantly available.";
  }
  sw.addEventListener("click",function(){ on=!on; paint(); ping(on?1:3); });
  paint();
  now.addEventListener("click",function(){ why.textContent="Sent. The window is a default, never a wall."; ping(4); });
  keep.addEventListener("click",function(){ why.textContent="Held. It will go out with the rest at the next window."; ping(2); });
})();

/* ══════════════════════════════════════════════════════════════════════
   17. SOUND — silent until asked, every time.
   Synthesised rather than fetched, so nothing is downloaded and nothing can
   play before a deliberate click: a low drone, a fifth above it, and slow
   bells over the top — the shape of a bowl still ringing.

   Bhupali, the major pentatonic, chosen because a pentatonic cannot produce
   a harsh interval: whichever notes land together, the result is consonant.
   Serene by construction, and bright rather than solemn, which a bare drone
   never manages.
   ══════════════════════════════════════════════════════════════════════ */
var BHUPALI=[261.63,293.66,329.63,392.00,440.00,523.25,587.33,659.26,783.99,880.00];
var ACTX=null, master=null, nodes=[], soundOn=false, bellTimer=null;
function voice(f,len,peak,dest){
  var t0=ACTX.currentTime, o=ACTX.createOscillator(), g=ACTX.createGain(),
      o2=ACTX.createOscillator(), g2=ACTX.createGain();
  o.type="sine"; o.frequency.value=f;
  g.gain.setValueAtTime(.0001,t0);
  g.gain.exponentialRampToValueAtTime(peak,t0+.05);
  g.gain.exponentialRampToValueAtTime(.0001,t0+len);
  /* a quiet octave above gives it the shimmer of a struck bowl */
  o2.type="sine"; o2.frequency.value=f*2.01;
  g2.gain.setValueAtTime(.0001,t0);
  g2.gain.exponentialRampToValueAtTime(peak*.26,t0+.04);
  g2.gain.exponentialRampToValueAtTime(.0001,t0+len*.55);
  o.connect(g); g.connect(dest); o2.connect(g2); g2.connect(dest);
  o.start(t0); o2.start(t0); o.stop(t0+len+.2); o2.stop(t0+len+.2);
}
function bell(){
  if(!soundOn||!ACTX) return;
  var dest=master;
  if(ACTX.createStereoPanner){
    var pan=ACTX.createStereoPanner();
    pan.pan.value=(Math.random()*2-1)*.55; pan.connect(master); dest=pan;
  }
  voice(BHUPALI[Math.floor(Math.random()*BHUPALI.length)],4.5+Math.random()*2.5,.5,dest);
  bellTimer=setTimeout(bell,2200+Math.random()*4200);
}
/* a single struck note when you touch something — the same scale, so it can
   never disagree with whatever the bed happens to be doing */
function ping(i){
  if(!soundOn||!ACTX||!master) return;
  voice(BHUPALI[(Math.abs(i|0)%5)+3],1.8,.22,master);
}
function soundStart(){
  var AC=W.AudioContext||W.webkitAudioContext; if(!AC) return false;
  if(!ACTX) ACTX=new AC();
  if(ACTX.state==="suspended") ACTX.resume();
  master=ACTX.createGain();
  master.gain.setValueAtTime(.0001,ACTX.currentTime);
  master.gain.exponentialRampToValueAtTime(.16,ACTX.currentTime+3);
  var filter=ACTX.createBiquadFilter();
  filter.type="lowpass"; filter.frequency.value=2600; filter.Q.value=.4;
  master.connect(filter); filter.connect(ACTX.destination);
  /* a tanpura-ish bed: tonic and fifth, barely there, gently detuned against
     each other so the pair never sits perfectly still */
  [130.81,196.00,261.63].forEach(function(f,i){
    var o=ACTX.createOscillator(), g=ACTX.createGain();
    o.type="triangle"; o.frequency.value=f*(i===2?1.001:1);
    g.gain.value=i===0?.085:(i===1?.05:.035);
    var lfo=ACTX.createOscillator(), lg=ACTX.createGain();
    lfo.frequency.value=.04+i*.015; lg.gain.value=.3;
    lfo.connect(lg); lg.connect(g.gain);
    o.connect(g); g.connect(master);
    o.start(); lfo.start(); nodes.push(o,lfo);
  });
  soundOn=true;
  bellTimer=setTimeout(bell,900);
  return true;
}
function soundStop(){
  soundOn=false;
  if(bellTimer){clearTimeout(bellTimer);bellTimer=null;}
  if(!ACTX||!master) return;
  var t=ACTX.currentTime;
  master.gain.cancelScheduledValues(t);
  master.gain.setValueAtTime(master.gain.value,t);
  master.gain.exponentialRampToValueAtTime(.0001,t+1.6);
  var dying=nodes.slice(); nodes=[];
  setTimeout(function(){dying.forEach(function(n){try{n.stop()}catch(e){}})},1900);
}
(function(){
  var btn=$("#tone"), label=$("#toneLabel");
  if(!btn) return;
  btn.addEventListener("click",function(){
    if(soundOn){ soundStop(); }
    else if(!soundStart()){ label.textContent="No sound here"; return; }
    btn.setAttribute("aria-pressed",soundOn?"true":"false");
    label.textContent=soundOn?"Sound on":"Sound off";
  });
})();
/* ══════════════════════════════════════════════════════════════════════
   18. PICTURES WITHOUT PHOTOGRAPHS
   Every image on this page is generated from a seed rather than fetched.
   Nothing is a stock photo pretending to be someone's afternoon, nothing
   ships a megabyte, and nothing has to be licensed. Warm bands, one light
   source, a little grit — the palette doing landscape.
   ══════════════════════════════════════════════════════════════════════ */
var SC_INK=[["#3A2130","#7A3B24","#E07A2F","#F8C94F"],["#241C2E","#5A3350","#B44B2A","#F0B36B"],
            ["#1E2430","#3B4A52","#9FD6C8","#F5E9D6"],["#2A1D2E","#4A2A22","#D98A5F","#F8C94F"],
            ["#1F1A2E","#403257","#A3B0EE","#E8DCC6"]];
function scene(seed,w,h){
  var r=hash(seed), pal=SC_INK[r%SC_INK.length],
      sunX=((r>>5)%70+15)/100*w, sunY=((r>>11)%40+14)/100*h,
      id="sg"+(r%99999), o='<defs><linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1">'+
      '<stop offset="0" stop-color="'+pal[0]+'"/><stop offset="55%" stop-color="'+pal[1]+'"/>'+
      '<stop offset="100%" stop-color="'+pal[0]+'"/></linearGradient>'+
      '<radialGradient id="'+id+'r"><stop offset="0" stop-color="'+pal[3]+'" stop-opacity=".85"/>'+
      '<stop offset="100%" stop-color="'+pal[2]+'" stop-opacity="0"/></radialGradient></defs>'+
      '<rect width="'+w+'" height="'+h+'" fill="url(#'+id+')"/>'+
      '<circle cx="'+sunX.toFixed(0)+'" cy="'+sunY.toFixed(0)+'" r="'+(h*.42).toFixed(0)+'" fill="url(#'+id+'r)"/>'+
      '<circle cx="'+sunX.toFixed(0)+'" cy="'+sunY.toFixed(0)+'" r="'+(h*.055).toFixed(0)+'" fill="'+pal[3]+'" fill-opacity=".9"/>';
  /* ridge lines, receding */
  for(var i=0;i<4;i++){
    var base=h*(.58+i*.13), amp=h*(.10-i*.018), ph=((r>>(i*3+2))%100)/100*6.28,
        d="M0 "+h+" L0 "+base.toFixed(1);
    for(var x=0;x<=w;x+=w/10){
      d+=" L"+x.toFixed(1)+" "+(base+Math.sin(x/w*3.1+ph+i)*amp).toFixed(1);
    }
    d+=" L"+w+" "+h+"Z";
    o+='<path d="'+d+'" fill="'+pal[i%2?0:1]+'" fill-opacity="'+(0.5+i*.13).toFixed(2)+'"/>';
  }
  for(var s=0;s<10;s++){
    var sx=((r>>(s+1))%1000)/1000*w, sy=((r>>(s+6))%1000)/1000*h*.5;
    o+='<circle cx="'+sx.toFixed(1)+'" cy="'+sy.toFixed(1)+'" r="'+(0.7+(s%3)*.4)+'" fill="'+pal[3]+'" fill-opacity=".35"/>';
  }
  return o;
}

$$("[data-av]:empty").forEach(function(el){ el.innerHTML=avatar(el.dataset.av); });

/* ══════════════════════════════════════════════════════════════════════
   19. THE FEED
   The comparison is the argument. The same three posts, once with the
   scoreboard and once without — and the version without is the default,
   because the numbers are the thing being removed, not the feature.
   ══════════════════════════════════════════════════════════════════════ */
var KIND={q:["k-q","Question"],int:["k-int","Interpretation"],ctx:["k-ctx","Context"],fact:["k-fact","Fact"],
          exp:["k-exp","Experience"],trad:["k-trad","Tradition"],bel:["k-bel","Belief"],spec:["k-spec","Speculation"]};
function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]}); }
function kindTag(k){ return '<span class="kind '+KIND[k][0]+'">'+KIND[k][1]+'</span>'; }
var DISH='<svg viewBox="0 0 320 180" role="img" aria-label="A plate of rajma, rice, a roti and salad on a wooden table">'+
  '<defs><radialGradient id="dsT" cx="50%" cy="45%" r="75%"><stop offset="0" stop-color="#5A3A2A"/><stop offset="100%" stop-color="#241712"/></radialGradient></defs>'+
  '<rect width="320" height="180" fill="url(#dsT)"/><path d="M0 40h320M0 92h320M0 144h320" stroke="#3A2418" stroke-opacity=".55"/>'+
  '<ellipse cx="160" cy="94" rx="104" ry="72" fill="#D9D2C4"/><ellipse cx="160" cy="94" rx="92" ry="62" fill="#EEE8DC"/>'+
  '<circle cx="126" cy="80" r="30" fill="#B8B0A2"/><circle cx="126" cy="80" r="25" fill="#7A2E1E"/>'+
  '<g fill="#551B12"><circle cx="116" cy="74" r="3.4"/><circle cx="129" cy="70" r="3.2"/><circle cx="136" cy="84" r="3.4"/><circle cx="120" cy="88" r="3"/><circle cx="128" cy="80" r="3"/></g>'+
  '<path d="M150 120c10-16 44-20 62-6 4 10-6 20-30 20s-34-4-32-14Z" fill="#FBF6EA"/>'+
  '<circle cx="204" cy="72" r="24" fill="#D6A86A"/><g fill="#9A6A34" fill-opacity=".55"><circle cx="196" cy="66" r="2.2"/><circle cx="210" cy="78" r="2.6"/><circle cx="214" cy="64" r="1.8"/></g>'+
  '<circle cx="98" cy="120" r="9" fill="#C84B3A"/><circle cx="112" cy="128" r="7" fill="#7FA35A"/><path d="M84 127h14" stroke="#E9E2C8" stroke-width="3" stroke-linecap="round"/>'+
  '<path d="M116 44c-4-6 4-10 0-16M130 42c-4-6 4-10 0-16" fill="none" stroke="#F5E9D6" stroke-opacity=".35" stroke-width="2" stroke-linecap="round"/></svg>';
var POSTS=[
 {who:"Simran Kaur",topic:"Food",type:"Image",k:"exp",when:"1 hour ago",
  title:"Made this at home for the first time.",
  body:"My mother's rajma, cooked over a video call with her correcting me at every step. Two hours, one slightly burnt pan, and completely worth it.",
  art:"dish",cap:"Photo · taken by Simran",
  rp:[["Sneha Kulkarni","exp","The burnt pan is how you know it was really made at home. My first try at my grandmother's sambar went exactly the same way."],
      ["Siddharth Kamble","q","Did she let you skip soaking the beans overnight, or is that non-negotiable?"]],
  said:["Sneha","Siddharth","Harleen","Samyak"],n:"2.3K"},
 {who:"Karan Mehta",topic:"Cities",type:"Question",k:"q",when:"3 hours ago",
  title:"What is one local problem your city should fix?",
  body:"Mine: footpaths that disappear halfway down the road. I walk to work and spend half the walk on the edge of traffic. What would you fix first where you live?",
  rp:[["Ananya Krishnan","exp","Streetlights near bus stops. People on our road wait in the dark after eight."],
      ["Parth Kothari","ctx","Many city wards publish their budgets online. Worth checking before proposing a fix, because some repairs are already approved and simply delayed."]],
  said:["Ananya","Parth","Sarah"],n:"8.4K"},
 {who:"Rachel Divekar",topic:"Education",type:"Poll",k:"q",when:"5 hours ago",
  title:"Should we teach financial literacy in school?",
  body:"Budgets, loans, and saving came up in my first job, not in any classroom. Where should it be taught?",
  poll:[["Yes, as its own subject",46],["Yes, inside maths classes",29],["It is better learned at home",15],["Not sure yet",10]],
  said:["Daniel","Neha"],n:"12K"},
 {who:"Daniel Kolet",topic:"Books",type:"Text",k:"exp",when:"yesterday",
  title:"Finally finished this book. Here's what stayed with me.",
  body:"A novel about three generations of one family in Kolkata, read in short evening sittings over four months. What stayed with me: most of the arguments in it were really about someone feeling unheard.",
  rp:[["Lakshmi Rao","int","I read it the same way. Almost every fight in the book softens the moment someone asks a question instead of defending themselves."],
      ["Imran Sheikh","q","Adding it to my list. Does the ending feel earned?"]],
  said:["Lakshmi","Imran","Pema"],n:"431"},
 {who:"Sonam Dorjee",topic:"Everyday life",type:"Image",k:"exp",when:"yesterday",
  title:"Learned to swim at thirty-four. Here's what surprised me.",
  body:"The hardest part was not the water. It was being the only adult in a beginners' class. By week three two more had joined, and one told me they signed up after seeing me there.",
  art:"swim-dawn",sgi:true,
  rp:[["Meera Iyer","exp","I started learning the sitar at forty. Being a beginner in public takes its own small courage."]],
  said:["Meera","Ezra"],n:"5.1K"}
];
/* pages are not people: invented organisations, shown in their own
   division, labelled by kind, and never ranked above anyone's post */
var ORGS=[
 {name:"Morning Ledger India",kind:"News & media",mark:"ML",topic:"Cities",type:"Link",k:"fact",when:"2 hours ago",
  title:"Why do footpaths in growing cities stop halfway?",
  body:"We read three years of ward budget documents. Most gaps are not unplanned: repairs are approved, then split across departments that finish at different times.",
  src:"Ward budget documents, 2023–2025",why:"Because you follow Cities",n:"41K"},
 {name:"Amaltas Group",kind:"Company",mark:"AG",topic:"Education",type:"Text",k:"fact",when:"6 hours ago",
  title:"We are funding money-basics workshops in 40 government schools.",
  body:"Budgeting, saving, and how loans work, taught by the schools' own teachers. No logos in classrooms, and the full curriculum is open for anyone to use.",
  src:"Curriculum and list of schools",why:"Because you follow Education",n:"9.2K"},
 {name:"Handi Kitchen Foods",kind:"Brand",mark:"HK",topic:"Food",type:"Video",k:"exp",when:"yesterday",
  title:"Rajma three ways, from Jammu, Punjab, and Himachal.",
  body:"Our test kitchen cooked all three alongside home cooks from each region. The biggest difference was not the spices. It was how long the beans were soaked.",
  why:"Because you follow Food",n:"22K"},
 {name:"Pustak Setu Public Library",kind:"Public library",mark:"PS",topic:"Books",type:"Text",k:"ctx",when:"yesterday",
  title:"Longer weekend hours, and this month's reading picks.",
  body:"The reading room now stays open until nine on Saturdays and Sundays. Three novels and one book of essays are on the shared shelf by the entrance.",
  why:"Because you follow Books",n:"3.4K"}
];
(function(){
  var list=$("#feedList");
  if(!list) return;
  list.innerHTML=POSTS.map(function(p,pi){
    var art = p.art==="dish" ? '<div class="art">'+DISH+'</div>'
            : p.art ? '<div class="art"><svg viewBox="0 0 320 180" aria-hidden="true">'+scene(p.art,320,180)+'</svg></div>' : '';
    var poll = p.poll ? '<div class="poll" data-i="'+pi+'">'+p.poll.map(function(o,oi){
        return '<button type="button" aria-pressed="false" data-o="'+oi+'"><i></i><span>'+esc(o[0])+'</span><em>'+o[1]+'%</em></button>'; }).join("")+
        '<span class="poll-n">Tap to vote. Results appear after you choose.</span></div>' : '';
    var rp = p.rp ? '<div class="replies">'+p.rp.map(function(r){
        return '<div class="rp"><div class="av">'+avatar(r[0])+'</div><p><b>'+esc(r[0].split(" ")[0])+'</b>'+kindTag(r[1])+esc(r[2])+'</p></div>'; }).join("")+'</div>' : '';
    return '<article class="post" data-topic="'+p.topic+'">'+
      '<div class="post-h"><div class="av">'+avatar(p.who)+'</div>'+
      '<div><div class="who">'+esc(p.who)+'</div><div class="mt">'+p.topic+' · <span class="ptype">'+p.type+'</span> · '+p.when+'</div></div></div>'+
      '<b class="ptitle">'+(p.k?kindTag(p.k):'')+esc(p.title)+'</b>'+(p.body?'<div class="body">'+esc(p.body)+'</div>':'')+
      art+(p.cap?'<span class="pcap">'+esc(p.cap)+'</span>':'')+
      (p.sgi?'<span class="sgi"><svg width="12" height="12" aria-hidden="true"><use href="#i-tag"/></svg>Illustration is AI-assisted · declared by the author</span>':'')+
      poll+rp+
      '<div class="post-f">'+
        '<span class="reacted">'+p.said.map(function(n){return '<i>'+avatar(n)+'</i>'}).join("")+'</span>'+
        '<span class="said">'+p.said[0]+' and '+(p.said.length-1)+(p.said.length===2?' other':' others')+' replied</span>'+
        '<span class="metric">♥ '+p.n+' · '+Math.round(hash(p.who)%900+40)+' shares</span>'+
        '<span class="act"><a href="#respond">Reply</a><button type="button" aria-pressed="false" data-toggle data-on="Saved" data-off="Save">Save</button><a href="#share">Share with your take</a></span>'+
      '</div></article>';
  }).join("");
  var olist=$("#orgList"), OC=["#D98A5F","#A8C58C","#E6C9A2","#C9B79B"];
  if(olist) olist.innerHTML=ORGS.map(function(o,i){
    return '<article class="post org" data-topic="'+o.topic+'">'+
      '<div class="post-h"><div class="omark" aria-hidden="true" style="--oc:'+OC[i%OC.length]+'">'+esc(o.mark)+'</div>'+
      '<div><div class="who">'+esc(o.name)+'<span class="okind">'+o.kind+'</span></div><div class="mt">'+o.topic+' · <span class="ptype">'+o.type+'</span> · '+o.when+'</div></div></div>'+
      '<b class="ptitle">'+(o.k?kindTag(o.k):'')+esc(o.title)+'</b><div class="body">'+esc(o.body)+'</div>'+
      (o.src?'<div class="post-ctx"><span class="tag src">Source: '+esc(o.src)+'</span></div>':'')+
      '<div class="post-f">'+
        '<span class="said">'+o.why+' · no paid reach</span>'+
        '<span class="metric">♥ '+o.n+' · '+Math.round(hash(o.name)%3000+200)+' shares</span>'+
        '<span class="act"><button type="button" aria-pressed="false" data-toggle data-on="Saved" data-off="Save">Save</button><a href="#share">Share with your take</a></span>'+
      '</div></article>';
  }).join("");
  $$(".poll",list).forEach(function(pl){
    $$("button",pl).forEach(function(b){
      b.addEventListener("click",function(){
        if(pl.classList.contains("voted")) return;
        pl.classList.add("voted"); b.setAttribute("aria-pressed","true");
        var P=POSTS[+pl.dataset.i].poll;
        $$("button",pl).forEach(function(x,i){ $("i",x).style.width=P[i][1]+"%"; });
        $(".poll-n",pl).textContent="Your vote is private. This is a snapshot of opinion, not a ranking of people.";
        ping(3);
      });
    });
  });
  $$("#feedPick button").forEach(function(b){
    b.addEventListener("click",function(){
      $$("#feedPick button").forEach(function(x){x.setAttribute("aria-pressed","false")});
      b.setAttribute("aria-pressed","true");
      list.classList.toggle("counts",b.dataset.f==="on");
      if(olist) olist.classList.toggle("counts",b.dataset.f==="on");
      ping(b.dataset.f==="on"?1:4);
    });
  });
  var tf=$$("#topicF button");
  tf.forEach(function(b){
    b.addEventListener("click",function(){
      tf.forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});
      var t=b.dataset.t;
      $$("#feedList .post, #orgList .post").forEach(function(p){ p.hidden=!(t==="all"||p.dataset.topic===t); });
      var of=$("#orgFeed"); if(of) of.hidden=!$$("#orgList .post").some(function(p){ return !p.hidden; });
      ping(2);
    });
  });
})();

/* ══════════════════════════════════════════════════════════════════════
   20. WATCH — the stack has a bottom, and the bar at the top is the stack
   rather than your progress through an endless one.
   ══════════════════════════════════════════════════════════════════════ */
var REELS=[
 ["A two-minute stretch for long workdays","Health · 48s"],
 ["One budgeting rule that actually sticks","Money · 1:01"],
 ["Why some families still greet elders differently","Culture · 39s"],
 ["Procrastination without the self-judgment","Psychology · 55s"],
 ["Is AI changing how we create?","Technology · 44s"],
 ["A family recipe, and why it gets passed on","Food · 52s"],
 ["What makes a good first-time manager?","Work · 1:10"],
 ["Photographing your street in morning light","Photography · 36s"],
 ["Three stories worth reading with children","Books · 47s"],
 ["Why shared meals still matter","Everyday life · 33s"],
 ["How one neighbourhood fixed its streetlights","Cities · 58s"],
 ["Listening before replying: a small experiment","Ideas · 1:04"]
];
(function(){
  var sc=$("#reelScene"), cap=$("#reelCap"), st=$("#reelStack"), cnt=$("#reelCount"),
      prev=$("#reelPrev"), next=$("#reelNext"), end=$("#reelEnd"), i=0;
  if(!sc) return;
  st.innerHTML=REELS.map(function(){return "<i></i>"}).join("");
  var bars=$$("#reelStack i");
  function show(n){
    if(n>=REELS.length){ end.classList.add("on"); next.disabled=true; cnt.textContent="the bottom"; ping(5); return; }
    end.classList.remove("on");
    i=clamp(n,0,REELS.length-1);
    sc.innerHTML=scene("reel"+i,180,320);
    cap.innerHTML='<b>'+REELS[i][0]+'</b><span>'+REELS[i][1]+'</span>';
    bars.forEach(function(b,k){b.classList.toggle("on",k<=i)});
    cnt.textContent=(i+1)+" of "+REELS.length;
    prev.disabled=i===0; next.disabled=false;
  }
  next.addEventListener("click",function(){ if(end.classList.contains("on"))return; show(i+1===REELS.length?REELS.length:i+1); if(!end.classList.contains("on"))ping(i); });
  prev.addEventListener("click",function(){ show(i-1); ping(i); });
  $("#reel").addEventListener("click",function(e){ if(e.target.closest(".reel-end"))return; next.click(); });
  show(0);

  /* chapter marks, not a watch-time bar: the divisions are where the
     argument turns, and they are proportional to the real chapter lengths */
  var CH=[4.17,7.42,6.45,5.96], total=CH.reduce(function(a,b){return a+b},0), s=$("#scrub");
  s.innerHTML=CH.map(function(c,k){return '<i style="flex:'+(c/total).toFixed(3)+'"'+(k===0?' class="seen"':'')+'></i>'}).join("");
  $$("#scrub i").forEach(function(b,k){
    b.addEventListener("click",function(){ $$("#scrub i").forEach(function(x,n){x.classList.toggle("seen",n<=k)}); ping(k); });
  });
})();
/* ═══════════════════════════════════════════════════════════════════
   27. STILLNESS — independent of the device setting. It stops the sky's
   travel, the breathing and the frieze, and remembers the choice.
   ═════════════════════════════════════════════════════════════════ */
function setStill(on){
  STILL=on; R.classList.toggle("still",on);
  try{ localStorage.setItem("mvv.still",on?"1":"0"); }catch(e){}
  [$("#still"),$("#sheetStill")].forEach(function(b){ if(b) b.setAttribute("aria-pressed",on?"true":"false"); });
  var l=$("#stillLabel"); if(l) l.textContent=on?"Motion off":"Motion on";
  var s=$("#sheetStill"); if(s) s.textContent="Motion: "+(on?"off":"on");
  wake();
}
(function(){
  var b=$("#still"), s=$("#sheetStill"), t=$("#sheetTone"), tone=$("#tone");
  if(b) b.addEventListener("click",function(){ setStill(!STILL); });
  if(s) s.addEventListener("click",function(){ setStill(!STILL); });
  if(t&&tone) t.addEventListener("click",function(){
    tone.click();
    t.setAttribute("aria-pressed",soundOn?"true":"false"); t.textContent="Sound: "+(soundOn?"on":"off");
  });
  setStill(STILL);
})();

/* 28. THE STOPS, ON A PHONE — a real dialog: focus goes in, Tab stays in,
   Escape and the scrim close it, and focus comes back where it was. */
(function(){
  var btn=$("#stopBtn"), sh=$("#sheet");
  if(!btn||!sh) return;
  function open(){
    sh.hidden=false; btn.setAttribute("aria-expanded","true");
    D.body.style.overflow="hidden";
    var a=$(".sheet-l a.on",sh)||$(".sheet-l a",sh); if(a) a.focus();
  }
  function close(back){
    sh.hidden=true; btn.setAttribute("aria-expanded","false"); D.body.style.overflow="";
    if(back){ try{ btn.focus({preventScroll:true}); }catch(e){} }
  }
  btn.addEventListener("click",open);
  sh.addEventListener("click",function(e){
    if(e.target.closest("[data-close]")) close(true);
    else if(e.target.closest(".sheet-l a")) close(false);
  });
  sh.addEventListener("keydown",function(e){
    if(e.key==="Escape"){ close(true); return; }
    if(e.key!=="Tab") return;
    var f=$$("a,button",sh), i=f.indexOf(D.activeElement);
    if(e.shiftKey&&i<=0){ f[f.length-1].focus(); e.preventDefault(); }
    else if(!e.shiftKey&&i===f.length-1){ f[0].focus(); e.preventDefault(); }
  });
})();

/* ═══════════════════════════════════════════════════════════════════
   25. KEEPING THE PROMISES THE MARKUP MAKES

   role="tablist" is a contract: whoever lands on one of these expects the
   arrow keys to move between tabs, Home and End to reach the ends, and the
   group to hold ONE stop in the tab order rather than four. All three
   tablists on this page declared the role and implemented none of it.

   Selection itself is left exactly where it was. Each tablist already owns
   its own click handling and its own idea of what selecting means, so this
   watches aria-selected rather than driving it — the keyboard just clicks
   the right button and the existing code does the rest.
   ═════════════════════════════════════════════════════════════════ */
function wireTabs(list){
  if(!list) return;
  function tabs(){ return $$("button",list); }
  function current(){
    var b=tabs(), i;
    for(i=0;i<b.length;i++){ if(b[i].getAttribute("aria-selected")==="true") return i; }
    return 0;
  }
  /* one stop in the tab order, on the selected tab — the roving pattern */
  function rove(){ var b=tabs(), c=current(); b.forEach(function(x,i){ x.tabIndex = i===c ? 0 : -1; }); }
  list.addEventListener("keydown",function(e){
    var b=tabs(); if(!b.length) return;
    var c=current(), n=null;
    if(e.key==="ArrowRight"||e.key==="ArrowDown") n=(c+1)%b.length;
    else if(e.key==="ArrowLeft"||e.key==="ArrowUp") n=(c-1+b.length)%b.length;
    else if(e.key==="Home") n=0;
    else if(e.key==="End") n=b.length-1;
    else return;
    e.preventDefault();
    b[n].click();
    b[n].tabIndex=0; b[n].focus();
  });
  new MutationObserver(rove).observe(list,{subtree:true,childList:true,attributes:true,attributeFilter:["aria-selected"]});
  rove();
}
wireTabs($("#stepPick"));
wireTabs($("#ptype"));
$$("#stepPick button").forEach(function(b,i){ var p=$$(".pane")[i]; if(!p) return;
  b.id="step-t"+i; p.id="step-p"+i; b.setAttribute("aria-controls",p.id);
  p.setAttribute("role","tabpanel"); p.setAttribute("aria-labelledby",b.id); });

/* ═══════════════════════════════════════════════════════════════════
   30. FOLLOW TOPICS — interests, not identities. Counted for you alone.
   ═════════════════════════════════════════════════════════════════ */
(function(){
  var bs=$$("#topics button"), say=$("#topicSay");
  if(!bs.length||!say) return;
  function upd(){
    var n=bs.filter(function(b){return b.getAttribute("aria-pressed")==="true"}).length;
    say.textContent = n ? "Following "+n+(n===1?" topic":" topics")+". Your feed draws from these and the people you follow — plus one clearly labelled perspective you have not met."
                        : "Follow a topic or two and your feed starts there.";
  }
  bs.forEach(function(b){ b.addEventListener("click",function(){
    b.setAttribute("aria-pressed",b.getAttribute("aria-pressed")==="true"?"false":"true"); upd(); ping(1); }); });
  upd();
})();

/* ═══════════════════════════════════════════════════════════════════
   31. THE COMPOSER — one extra tap: say what kind of post this is. A fact
   cannot post without a source. The preview is built from text nodes, so
   nothing typed ever becomes markup.
   ═════════════════════════════════════════════════════════════════ */
(function(){
  var tabs=$$("#ptype button"), form=$("#composeForm"), title=$("#ctitle"), body=$("#cbody"), extra=$("#cextra"),
      kinds=$$("#ckind button"), src=$("#csrc"), srcin=$("#csrcin"), topics=$$("#ctopic button"),
      go=$("#cgo"), hint=$("#chint"), prev=$("#cprev");
  if(!form||!title) return;
  var TYPE="question", SEL=null, TOPIC="Everyday life", youAv=avatar("You");
  var PH={question:["What is one local problem your city should fix?","What made you think of it?"],
          text:["Sometimes listening is more useful than winning an argument","Say it in a few lines"],
          image:["Made this at home for the first time","What is the story behind it?"],
          poll:["Should we teach financial literacy in school?","Why are you asking?"],
          video:["Three minutes on taking better photos on a walk","What will it help people notice?"],
          link:["An essay on building a better morning routine","Why is it worth reading?"]};
  var EX={poll:'<input class="cin" type="text" aria-label="Option one" placeholder="Option one"><input class="cin" type="text" aria-label="Option two" placeholder="Option two">',
          image:'<div class="cdrop">Add an image—and a short description for people who cannot see it</div>',
          video:'<div class="cdrop">Add a short video—captions are required</div>',
          link:'<input class="cin" type="url" aria-label="Link" placeholder="https://">'};
  var TNAME={question:"Question",text:"Text",image:"Image",poll:"Poll",video:"Video",link:"Link"};
  function pick(k){ SEL=k; kinds.forEach(function(x){x.setAttribute("aria-pressed",x.dataset.k===k?"true":"false")}); src.hidden=k!=="fact"; }
  tabs.forEach(function(b,i){
    b.id="ptype-t"+i; b.setAttribute("aria-controls","composeForm");
    b.addEventListener("click",function(){
      tabs.forEach(function(x){x.setAttribute("aria-selected",x===b?"true":"false")});
      TYPE=b.dataset.p; form.setAttribute("aria-labelledby",b.id);
      title.placeholder=PH[TYPE][0]; body.placeholder=PH[TYPE][1];
      extra.innerHTML=EX[TYPE]||"";
      if(TYPE==="question") pick("q");
      render(); ping(1);
    });
  });
  form.setAttribute("aria-labelledby","ptype-t0");
  kinds.forEach(function(b){ b.addEventListener("click",function(){ pick(b.dataset.k); render(); ping(2); }); });
  topics.forEach(function(b){ b.addEventListener("click",function(){
    topics.forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")}); TOPIC=b.dataset.t; render(); }); });
  [title,body,srcin].forEach(function(el){ el.addEventListener("input",render); });
  function node(tag,cls,txt){ var e=D.createElement(tag); if(cls) e.className=cls; if(txt!=null) e.textContent=txt; return e; }
  function render(){
    var t=title.value.trim(), needSrc=SEL==="fact"&&!srcin.value.trim(), ok=t.length>=6&&!!SEL&&!needSrc;
    go.disabled=!ok;
    hint.textContent = !t ? "Start with a clear title" : t.length<6 ? "Add a little more to the title" : !SEL ? "Now add the kind of contribution it is"
                     : needSrc ? "A factual post needs a source—where is it from?" : "Ready. It goes to people who follow "+TOPIC+".";
    hint.classList.toggle("ok",ok);
    prev.textContent="";
    var h=node("div","post-h"), av=node("div","av"), meta=node("div");
    av.innerHTML=youAv;
    meta.appendChild(node("div","who","You")); meta.appendChild(node("div","mt",TOPIC+" · "+TNAME[TYPE]+" · just now"));
    h.appendChild(av); h.appendChild(meta); prev.appendChild(h);
    var tt=node("b","ptitle");
    if(SEL) tt.appendChild(node("span","kind "+KIND[SEL][0],KIND[SEL][1]));
    tt.appendChild(D.createTextNode(t||"Your title appears here"));
    prev.appendChild(tt);
    if(body.value.trim()) prev.appendChild(node("div","body",body.value.trim()));
    if(SEL==="fact"&&srcin.value.trim()){ var c=node("div","post-ctx"); c.appendChild(node("span","tag src","Source: "+srcin.value.trim())); prev.appendChild(c); }
  }
  go.addEventListener("click",function(){
    if(go.disabled) return;
    hint.textContent="This is a preview, so nothing was published. In the product, "+(TYPE==="question"?"a welcomer makes sure every question gets a real answer.":"people who follow "+TOPIC+" would see it.");
    go.disabled=true; ping(5);
  });
  pick("q"); render();
})();

/* ═══════════════════════════════════════════════════════════════════
   32. SHARE WITH YOUR TAKE — a reshare needs a few words of your own; a
   save is private and never becomes a count.
   ═════════════════════════════════════════════════════════════════ */
(function(){
  var opts=$$("#shareOpt button"), ta=$("#stake"), lab=$("#stakeLab"), go=$("#sgo"), gotx=$("#sgoTx"),
      hint=$("#shint"), take=$("#sprevTake"), head=$("#sprevH"), who=$("#sprevWho");
  if(!ta) return;
  var MODE="take";
  var MD={take:{lab:"Your take",ph:"What do you think—and why is it useful to share?",min:5,btn:"Share",head:"What others see",who:"Ananya Krishnan shared",done:"Shared with the original attached."},
          quote:{lab:"The line you are quoting, and why it matters",ph:"“The next useful action” is the part I keep coming back to.",min:5,btn:"Quote",head:"What others see",who:"Ananya Krishnan quoted",done:"Quoted. The original context stays attached."},
          send:{lab:"A note for your friend — optional",ph:"Thought of you when I read this",min:0,btn:"Send",head:"What your friend sees",who:"From Ananya",done:"Sent. It will arrive in their next message window."},
          save:{lab:"",ph:"",min:0,btn:"Save",head:"Only you see this",who:"Saved to Read later",done:"Saved. Only you can see it."}};
  function words(){ return ta.value.trim().split(/\s+/).filter(Boolean).length; }
  function upd(){
    var m=MD[MODE], left=Math.max(0,m.min-words());
    lab.textContent=m.lab; lab.hidden=ta.hidden=(MODE==="save"); ta.placeholder=m.ph;
    gotx.textContent=m.btn; head.textContent=m.head; who.textContent=m.who;
    go.disabled=left>0;
    hint.textContent = MODE==="save" ? "Private, always." : left ? "Add "+left+" more word"+(left===1?"":"s")+" of your own"
                     : m.min ? "Ready—your words go first, and the original travels with them" : "Ready";
    hint.classList.toggle("ok",!left);
    take.textContent = MODE==="save" ? "Saved posts live in a private list. There is no public save count."
                     : (ta.value.trim()||"Your words appear here, above the original.");
  }
  opts.forEach(function(b){ b.addEventListener("click",function(){
    opts.forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")}); MODE=b.dataset.s; upd(); ping(1); }); });
  ta.addEventListener("input",upd);
  go.addEventListener("click",function(){ if(go.disabled) return; hint.textContent=MD[MODE].done; hint.classList.add("ok"); ping(4); });
  upd();
})();

/* the bottom of the feed: three deliberate doors, one of them out */
(function(){
  var go=$("#feGo"), say=$("#feSay"); if(!go) return;
  var T={path:"Karan replied to your comment about footpaths. It will be here when you are ready.",
         hello:"Rukmini asked her first question in First-time managers. One thoughtful welcome is enough.",
         close:"Good. It will still be here tomorrow. Nothing piles up while you are away."};
  $$("button",go).forEach(function(b){ b.addEventListener("click",function(){ say.textContent=T[b.dataset.k]; ping(4); }); });
})();

/* ═══════════════════════════════════════════════════════════════════
   26. THE REEL TAKES A THUMB

   Buttons under a phone-shaped thing are not how anyone moves through
   reels. The card tracks the pointer one-to-one, goes heavy at the two
   ends so the top and the bottom of the stack are felt rather than
   announced, and either carries through or springs back.

   Vertical scrolling is never taken: touch-action pan-y hands the y-axis
   back to the page, and a gesture that is mostly vertical is let go on the
   first move rather than fought over.
   ═════════════════════════════════════════════════════════════════ */
(function(){
  var reel=$("#reel"), nextB=$("#reelNext"), prevB=$("#reelPrev"), endB=$("#reelEnd");
  if(!reel||!nextB) return;
  var x0=0, y0=0, dx=0, w=260, down=false, live=false, gave=false, moved=false;

  function set(v,o){ reel.style.setProperty("--dx",v.toFixed(1)+"px");
                     reel.style.setProperty("--dop",o.toFixed(3)); }
  function atEnd(){ return nextB.disabled || endB.classList.contains("on"); }
  function step(dir){
    var btn = dir<0 ? nextB : prevB;
    if(btn.disabled) return false;
    if(reduce){ btn.click(); return true; }
    reel.classList.add("settling"); set(dir*w*.62, 0);
    setTimeout(function(){
      btn.click();
      reel.classList.remove("settling"); set(-dir*w*.5, 0);
      requestAnimationFrame(function(){ requestAnimationFrame(function(){
        reel.classList.add("settling"); set(0,1);
      })});
    }, 210);
    return true;
  }
  function home(){ reel.classList.add("settling"); set(0,1); }
  function used(){ var ph=reel.closest(".reelphone"); if(ph) ph.classList.add("used"); }

  reel.addEventListener("pointerdown",function(e){
    if(e.target.closest(".reel-end")) return;
    down=true; live=false; gave=false; moved=false;
    x0=e.clientX; y0=e.clientY; dx=0; w=reel.clientWidth||260;
    reel.classList.remove("settling");
  });
  reel.addEventListener("pointermove",function(e){
    if(!down||gave) return;
    var ax=e.clientX-x0, ay=e.clientY-y0;
    if(!live){
      if(Math.abs(ax)<4 && Math.abs(ay)<4) return;
      /* mostly vertical: this was a page scroll, not a swipe */
      if(Math.abs(ay)>Math.abs(ax)){ gave=true; return; }
      live=true; reel.classList.add("dragging"); used();
      try{ reel.setPointerCapture(e.pointerId); }catch(err){}
    }
    moved=true; dx=ax;
    /* resistance at the two ends of the stack */
    if((dx>0&&prevB.disabled)||(dx<0&&atEnd())) dx*=.3;
    set(dx, 1-Math.min(1,Math.abs(dx)/w)*.4);
  });
  function release(){
    if(!down) return;
    down=false;
    if(!live){ return; }
    live=false; reel.classList.remove("dragging");
    var far=Math.abs(dx)>Math.max(38,w*.2);
    if(!far || !step(dx<0?-1:1)) home();
    setTimeout(function(){ moved=false; },60);
  }
  reel.addEventListener("pointerup",release);
  reel.addEventListener("pointercancel",function(){ down=false; live=false;
    reel.classList.remove("dragging"); home(); });
  /* a swipe must not also read as the tap that advances the reel */
  reel.addEventListener("click",function(e){ if(moved){ e.stopPropagation(); e.preventDefault(); } },true);

  reel.addEventListener("keydown",function(e){
    if(e.key==="ArrowRight"||e.key==="ArrowLeft") used();
    if(e.key==="ArrowRight"){ if(!nextB.disabled){ step(-1)||nextB.click(); } e.preventDefault(); }
    else if(e.key==="ArrowLeft"){ if(!prevB.disabled){ step(1)||prevB.click(); } e.preventDefault(); }
  });
})();

/* ═══════════════════════════════════════════════════════════════════
   33. SAVE AND REACT — small toggles, private by design: a save or a
   reaction never becomes a public number.
   ═════════════════════════════════════════════════════════════════ */
D.addEventListener("click",function(e){
  var b=e.target.closest("[data-toggle]"); if(!b) return;
  var on=b.getAttribute("aria-pressed")!=="true";
  b.setAttribute("aria-pressed",on?"true":"false");
  if(b.dataset.on){ var l=$(".tl",b)||b; l.textContent=on?b.dataset.on:b.dataset.off; }
  ping(on?2:1);
});

/* 34. SIGN IN — not open yet, and the page says so rather than pretending. */
(function(){
  var b=$("#signin"), p=$("#signinPop"); if(!b||!p) return;
  function set(on,back){
    p.hidden=!on; b.setAttribute("aria-expanded",on?"true":"false");
    if(on){ var a=$("a",p); if(a){ try{ a.focus({preventScroll:true}); }catch(err){ a.focus(); } } }
    else if(back){ b.focus(); }
  }
  b.addEventListener("click",function(){ set(p.hidden); });
  D.addEventListener("click",function(e){ if(!p.hidden && !p.contains(e.target) && !b.contains(e.target)) set(false); });
  p.addEventListener("click",function(e){ if(e.target.closest("a")) set(false); });
  D.addEventListener("keydown",function(e){ if(e.key==="Escape" && !p.hidden) set(false,true); });
})();
})();
</script>