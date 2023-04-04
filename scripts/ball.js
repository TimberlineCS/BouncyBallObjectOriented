var b, xPos, yPos, speed, score;


class ball{
    
    constructor(){
        this.xPos = Math.floor(Math.random()*window.innerWidth);
        this.yPos = Math.floor(Math.random()*window.innerHeight);
        this.b = document.createElement("div");
        this.dim = Math.floor(Math.random()*100 + 5);
        this.b.style.width = this.dim + "px";
        this.b.style.height = this.dim + "px";
        this.b.style.position = "absolute";
        this.b.style.left = this.xPos + "px";
        this.b.style.top = this.yPos + "px";
        this.b.style.borderRadius = "50%";
        this.speedX = Math.floor(Math.random()*10 - 5);
        this.speedY = Math.floor(Math.random()*10 - 5);
        this.red = Math.floor(Math.random()*256);
        this.green = Math.floor(Math.random()*256);        
        this.blue = Math.floor(Math.random()*256);   
        this.b.style.backgroundColor = "blue";
        this.customColor = "RGB("+this.red+","+this.green+","+this.blue+")";
        this.b.style.backgroundColor = this.customColor;
        this.b.value = 110 - this.dim;
        this.score = 0;
        this.b.innerHTML = this.score;
        this.b.style.textAlign = "center";
        document.body.append(this.b);
    }

    moveBall(){
        
        this.xPos = this.xPos + this.speedX;
        this.yPos = this.yPos + this.speedY;
        this.b.style.left = this.xPos + "px";
        this.b.style.top = this.yPos + "px";
        if(this.xPos > window.innerWidth || this.xPos < 0){
            this.speedX *= -1;
        }
        if(this.yPos > window.innerHeight || this.yPos < 0){
            this.speedY *= -1;
        }
    }

    getBall(){
        return this.b;
    }
}

