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