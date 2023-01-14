function changebackground(){
    var colors = ["red","green","blue","pink","white"];
    document.body.style.background = colors[colors.length * Math.random() | 0];
}
