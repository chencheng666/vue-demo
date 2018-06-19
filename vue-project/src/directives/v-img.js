export default {
    bind(el,binding){
        console.log('bind~~~');
    },
    inserted(el, binding) {
        console.log('inserted~~~');

        var color = Math.floor(Math.random()*1000000);

        let divEle = document.createElement('img');
        divEle.className = 'test-img';
        divEle.src = binding.value;
        el.style.backgroundColor = `#${color}`;
        el.style.display = 'flex';
        
        el.style.width = `auto`;
        el.style.height = `200px`;
        el.appendChild(divEle);
        
        // var img = new Image();
        // img.src = binding.value;
        
        // img.onload = function() {
        //     divEle.style.backgroundImage = `url(${binding.value})`;
        // }
    },
    update(el,binding) {
        console.log('update~~~');
    },
    componentUpdated(el,binding) {
        console.log('componentUpdated~~~');
    },
    unbing(el,binding) {
        console.log('unbing~~~');
    },
}