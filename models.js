class spiceship {

    constructor() {
        this.el = document.createElement('div');
        this.x = document.body.offsetWidth / 2;
        this.y = document.body.offsetHeight - 100;
        this.el.className = "spiceship";
        document.body.insertBefore(this.el, document.body.firstChild);
    }
}