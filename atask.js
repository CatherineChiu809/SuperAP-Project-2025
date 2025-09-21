class atask {
    constructor(s) {
        subject = s;
        clicked = false;
    }
    constructor(s,c) {
        subject = s;
        clicked = c
    }
    get sub(){
        return this.subject;
    }
    get click(){
        return this.clicked;
    }
    set clickPosition(on){
        if(on = true){
            clicked = true;
        }
        else if(on = false){
            clicked = false;
        }
    }
}