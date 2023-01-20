// class keyword introduced in ES6
//In order to create objects we used function

class Training
{
    constructor(T_name, T_duration, T_cost)
    {
        this.T_name = T_name;
        this.T_duration = T_duration;
        this.T_cost = T_cost;
    }

    display=()=>{
    console.log(`Training name: ${this.T_name}\n
    Training duration: ${this.T_duration} hours\n
    Training cost : ${this.T_cost}`)
    }
}

let obj1 = new Training("React",40,3000)
obj1.display();