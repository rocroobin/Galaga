class Stars {

    constructor() {
        this.el = document.createElement('div');
        this.speed = 10;
        this.x = Math.round(Math.random() * (document.body.offsetWidth));
        this.y = Math.round(Math.random() * (document.body.offsetHeight));
        this.el.className = "stars";
        document.body.insertBefore(this.el, document.body.firstChild);
    }

    move() {
        this.y = this.y + this.speed;
        if (this.y > document.body.clientHeight) {
          this.x = Math.round(Math.random() * (document.body.offsetWidth));
          this.y = -3;
        }
    }

    draw() {
        this.el.style.top = this.y;
        this.el.style.left = this.x;
    }
}