document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов
    const animateElements = () => {
        const elements = document.querySelectorAll('.image-block, .table-container');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    };

    // Инициализация анимаций
    setTimeout(animateElements, 500);

    // Эффекты при наведении на таблицу
    const tableRows = document.querySelectorAll('.bordered-table tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.zIndex = '10';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
        });
    });

    // Параллакс эффект для фоновых элементов
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        
        document.querySelector('.circle').style.transform = 
            `translate(${moveX}px, ${moveY}px)`;
        document.querySelector('.circle-2').style.transform = 
            `translate(${-moveX * 0.7}px, ${-moveY * 0.7}px)`;
    });

    console.log('Космическая карта объектов загружена! 🚀');
});

// Добавляем динамическое мерцание звезд
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'dynamic-stars';
    starsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3}px;
            height: ${Math.random() * 3}px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.7 + 0.3};
            animation: twinkle ${Math.random() * 5 + 3}s infinite alternate;
        `;
        starsContainer.appendChild(star);
    }
    
    document.body.appendChild(starsContainer);
}

// Запускаем создание звезд после загрузки
window.addEventListener('load', createStars);
