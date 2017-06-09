/**
 * Created by Administrator on 2017/6/1.
 */
var aneobj=function () {
    //start point,end point,control point,end point(sin)
    this.rootx=[];
    this.headx=[];
    this.heady=[];
    this.amp=[];
    this.alpha=0;
}
aneobj.prototype.num=50;
aneobj.prototype.init=function () {
    for(var i=0;i<this.num;i++){
        this.rootx[i]=i*16+Math.random()*20;
        this.headx[i]=this.rootx[i];
        this.heady[i]=canHeight-240+Math.random()*50;
        this.amp[i]=Math.random()*50+30;
    }

}
aneobj.prototype.draw=function () {
    this.alpha+=deltaTime*0.0008;
    var l=Math.sin(this.alpha);
    ctx2.save();
    ctx2.globalAlpha=0.6;
    //ctx2.strokeStyle = "rgba(255,0,0,0.5)";
    ctx2.lineWidth=20;
    ctx2.lineCap="round";
    ctx2.strokeStyle="#3b154e";
    for(var i=0;i<this.num;i++){
        //beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canHeight);
        this.headx[i]=this.rootx[i]+l*this.amp[i];
        ctx2.quadraticCurveTo(this.rootx[i],canHeight-160,this.headx[i]+l*this.amp[i],this.heady[i]);
        ctx2.stroke();
    }
    ctx2.restore();
}