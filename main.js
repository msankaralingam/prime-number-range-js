var a=prompt("enter the number");
	
    for ( let i=2; i<=a; i++){
		var b=0;
		for( let j=2; j<=i; j++){
			
			if(i%j==0){
				
				b++;
			
			}
		}
	if(b==1){
	console.log(i);	
}
}

// define prime number
var a =prompt("Enter a positive number");
var b = 0;

 if (a>1) {


    for (let i = 2; i <=a; i++) {
        if (a % i == 0) {
            
            b++;
        }
    }

    if (b==1) {
        console.log(" prime number");
    } 
	else {
        console.log("not prime number");
    }
}


else {
    console.log("composite number.");
}
