/**
 * Created by Administrator on 2017/6/6.
 */
var waveObj=function () {
    this.x=[];
    this.y=[];
    this.alive=[];
    this.r=[];
}
waveObj.prototype.num=10;
waveObj.prototype.init=function () {
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.r[i]=0;
    }
}
waveObj.prototype.draw=function () {
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            //draw
            this.r[i]+=deltaTime*0.05;
            if(this.r[i]>50){
                this.alive[i]=false;
                break;
            }

            var alpha=1-this.r[i]/60;
            ctx1.save();
            ctx1.lineWidth=2;
            ctx1.shadowBlur=10;
            ctx1.shadowColor="white";
            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
            ctx1.closePath();
            ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
            ctx1.stroke();
        }
    }
}
waveObj.prototype.born=function (x,y) {
    for(var i=0;i<this.num;i++){
        if(!this.alive[i]){
            //born
            this.alive[i]=true;
            this.r[i]=5;
            this.x[i]=x;
            this.y[i]=y;
            return;
        }
    }
}