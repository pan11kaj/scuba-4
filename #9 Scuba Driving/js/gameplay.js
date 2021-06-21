AFRAME.registerComponent('game', {
    schema: {
        elementId:{type:"string",default:"#coin1"}
    },

    init: function () {
        
    },
    update: function () {
        this.iscollided(this.data.elementId);
    },
    iscollided: function(elementid){
        let element = document.querySelector(elementid);
        element.addEventListener("collide",(e)=>{
            if(elementid.includes("#coin")){
                console.log("Coin collision");
            }
            if(elementid.includes("#fish")){
                console.log("FISH COLLISION");
            }
        });
    },


    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
