var boxData = document.getElementById('boxData'),
    Students = document.querySelectorAll('.item'),
    imgInfo = document.getElementById('img-info'),
    skillAnimation = document.querySelectorAll('.skill-degree');

    Students.forEach(stu => {
        stu.addEventListener('click', function(){
            boxData.style.display = 'flex';
            var imgSrc = this.querySelector('img').src;
            imgInfo.setAttribute('src', imgSrc);
            var dataH = stu.dataset.degreeh;
            var dataC = stu.dataset.degreec;
            var dataJ = stu.dataset.degreej;
    
            skillAnimation[0].style.width = dataH;
            skillAnimation[1].style.width = dataC;
            skillAnimation[2].style.width = dataJ;
        });
        

        stu.onclick = function(e) {
            e.stopPropagation();
        }
    })


    document.onclick = function(e){
        if(e.target !== boxData || e.target !== Students){
            boxData.style.display = 'none'
        }
    }
    boxData.onclick = function(e) {
        e.stopPropagation();
    }
    


