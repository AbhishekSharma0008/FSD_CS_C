async function  orderfood(name, time) {
    return new Promise((resolve, reject)=>{
        if(name=="Burger") reject("Burger not available");
        setTimeout(()=>{
            resolve("Order for " + name + "has been prepared");
        },time);
    });
    
}

async function restaurant() {
    console.log("Order Food");
    let pizza=await orderfood("Pizza", 2000);
    console.log(pizza);
    try {
        let burger=await orderfood("Burger", 3000);
        console.log(burger)
        
    } catch (error) {
        console.log(error);
        
    }
    
    let noodles = await orderfood("Noodles", 4000);
    console.log(noodles);
    console.log("All order orepared");
    
}
restaurant();