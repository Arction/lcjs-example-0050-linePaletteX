(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const o=a(89),{lightningChart:s,PalettedFill:l,LUT:r,ColorRGBA:i,AxisTickStrategies:n,Themes:h}=o,d=s({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:h[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("ECG chart with color highlighted heart beats"),c=d.getDefaultAxisX().setTickStrategy(n.Time);d.getDefaultAxisY().setTitle("mV"),fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/0050/data.json").then((e=>e.json())).then((e=>{const t=d.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}).addArrayY(e),a=[];let o,s,n;for(let t=0;t<e.length;t+=1){const l=e[t];void 0===s?l>700&&l<o&&(s=t):void 0===n&&l<-700&&l>o&&(n=t,a.push({iStart:s-40,iEnd:n+120}),s=void 0,n=void 0),o=l}const h=t.getStrokeStyle().getFillStyle().getColor(),g=new i(0,255,0),u=new l({lookUpProperty:"x",lut:new r({interpolate:!1,steps:[{value:0,color:h},...a.map((e=>[{value:e.iStart,color:g},{value:e.iEnd,color:h}])).flat()]})});t.setStrokeStyle((e=>e.setFillStyle(u))),c.setStrokeStyle((e=>e.setFillStyle(u)))}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);