

function password(obj) {

    let numberOfKey = Object.keys(obj);
    let birthDaty = String(obj.birthYear);
    
    if(numberOfKey.length === 3 && birthDaty.length === 4){
        
        let letter = obj.siteName;
        letter = letter[0].toUpperCase() + letter.slice(1);
        let appPassword = letter + '#' + obj.name + '@' + obj.birthYear;
        
        return appPassword;
    }
    else{
        return 'invalid';
    }
}



let pass = {
    name: 'abu rahat',
    birthYear: '2000',
    siteName: 'facebook_google'
}
console.log(password(pass));