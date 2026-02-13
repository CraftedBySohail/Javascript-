

'use strict';
const user = {
    name : "Rohit",
    greet : function(){
        function meet(){
            console.log(this);
        }

        meet();
    }
}

user.greet();

