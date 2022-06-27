class logg{
    constructor(login, password,)
    
    {        
    this.login = login;
    this.password = password;
    }
    
}

document.querySelector('.voity').onclick = 
() => {
    let login = document.getElementsByClassName('login').value;
    let password = document.getElementsByClassName('password').value;

    if(login === 'ivan' && password == '123123')
        console.log('добро пожаловать!')
    else if(login === 'alex' && password == '777')
        console.log('добро пожаловать!')
    else console.log('неверный пароль')
    // if(document.getElementsByClassName('.login', '.password')){
    // }
}

// let user = new logg(document.querySelector('.login'),document.querySelector('.password'))

// console.log(user)

// сделать так чтобы при нажатии кнопки Войти, пароль и логин отправлялись в консоль при помощи ООП