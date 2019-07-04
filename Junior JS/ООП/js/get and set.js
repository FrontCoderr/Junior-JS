//смотреть консоль в браузере
 const jar = {
    numberOfCookies: 0, 
    get cookies(){
        return this.numberOfCookies;
    },   
    set cookies(val){
        if(val >= 0 && val <= 5){
            this.numberOfCookies = val;
        }
        else{
            console.log('можно положить только 5 печенек');
        }     
    }
 };

 console.log(jar.cookies);

 jar.cookies = 15;

 console.log(jar.cookies);


