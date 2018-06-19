export default {
    inserted(el, binding) {
        var color = Math.floor(Math.random()*1000000);

        let divEle = document.createElement('div');
        divEle.className = 'test-div';
        divEle.innerHTML = 'test-div';
        el.style.backgroundColor = `#${color}`;
        el.style.display = 'flex';
        
        el.style.width = `100%`;
        el.style.height = `200px`;
        el.appendChild(divEle);
        
        var img = new Image();
        img.src = binding.value;
        
        img.onload = function() {
            divEle.style.backgroundImage = `url(${binding.value})`;
        }
    }
}