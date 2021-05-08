let time = document.querySelector('.time');
const timer = function (){
    const now = new Date();
    const hh = now.getHours();
    const mm = now.getMinutes();
    const ss = now.getSeconds();
    //const time = now.toTimeString();
    time.innerHTML = `<span class = "timestyling">${hh} :</span>
                      <span class = "timestyling">${mm} :</span>
                      <span class = "timestyling">${ss}</span>`;
};
setInterval(timer,1000);
