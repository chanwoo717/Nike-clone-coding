// const elDisSearch=document.querySelector('.disapp1'),
const elDisBtn=document.querySelector('.disapp2'),
    elMenu=document.querySelector('nav'),
    elIcon=document.querySelector('.icon'),
    elSearch=document.querySelector('.icon a'),
    elSearchTool=document.querySelector('.searchTool'),
    elSearchBtn=document.querySelector('.searchTool button'),
    elInput=document.querySelector('input');
    // elHeader=document.querySelector('header');

    // let status = {y:0, dy:0, state:true}
    // let down = window.pageYOffset;
    // status.y = down;
    // status.state = (status.dy < status.y) ? true : false ;
    // status.dy = status.y
    // console.log(down);
    
    // elDisBtn.addEventListener('click' , () => {
    //     elMenu.classList.toggle('active');
    // });
    elDisBtn.onclick = function(e) {
        e.preventDefault();
        elMenu.classList.toggle('active');
        elIcon.classList.toggle('active');
        elSearchTool.classList.remove('active');
        elInput.value=null;
        
    };
    elSearch.onclick = function(e) {
        e.preventDefault();
        elSearchTool.classList.toggle('active');
        elInput.focus();
        
    }
    elSearchBtn.onclick = function(e) {
        e.preventDefault();
        elInput.value=null;
        elInput.focus();
        elSearchTool.classList.remove('active');
    }
    // console.log(elHeader.getBoundingClientRect().top<60);
    // window.addEventListener('scroll', function(){
    //     if(elHeader.getBoundingClientRect().top>30){
    //         elDisBtn.style.position = 'sticky';
    //     }
    // })
    // elDisBtn.addEventListener('scroll' ,()=> {
    //     console.log(getBoundingClientRect().top<0);
    //     if(elFoot.getBoundingClientRect().bottom<0){
    //         elDisBtn.scrollIntoView({behavior:'smooth'});
    //     }
    // })
