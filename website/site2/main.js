setInterval(() => {
    let date = new Date();
    let clock = document.querySelector('.clock');
    
    clock.innerHTML = 
    date.getHours() + ':' +
    date.getMinutes() + ':' +
    date.getSeconds();
},1000)