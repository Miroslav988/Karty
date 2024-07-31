const password = prompt('Введите пароль:', '');

for (let i = 0; i <= password.length; i = i + 1) {
    /* допишите код здесь */
    if(password[i]==='?'){
    console.log('"?" есть в пароле на позиции ' + (i + 1));
    break;
    }
    /* и ещё допишите код здесь */
}
