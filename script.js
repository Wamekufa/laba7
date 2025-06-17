document.addEventListener('DOMContentLoaded', function() {
    const bounceBtn = document.getElementById('bounceBtn');
    const rotateBtn = document.getElementById('rotateBtn');
    const walkBtn = document.getElementById('walkBtn');
    
    const ball = document.querySelector('.ball');
    const character = document.querySelector('.character');
    const walkingCharacter = document.querySelector('.walking-character');
    
    // Анимация прыгающего мяча
    bounceBtn.addEventListener('click', function() {
        resetAnimations();
        ball.classList.add('bounce');
    });
    
    // Анимация вращающегося персонажа
    rotateBtn.addEventListener('click', function() {
        resetAnimations();
        character.classList.add('rotate');
    });
    
    // Анимация идущего персонажа
    walkBtn.addEventListener('click', function() {
        resetAnimations();
        character.classList.add('swing-arms', 'walk-legs');
        walkingCharacter.classList.add('walk');
    });
    
    // Сброс всех анимаций
    function resetAnimations() {
        ball.classList.remove('bounce');
        character.classList.remove('rotate', 'swing-arms', 'walk-legs');
        walkingCharacter.classList.remove('walk');
    }
    
    // Фоновая анимация облаков
    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        const randomDelay = Math.random() * 20;
        cloud.style.animationDelay = `-${randomDelay}s`;
    });
});