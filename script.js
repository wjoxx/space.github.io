document.addEventListener('DOMContentLoaded', function() {
    const animateElements = () => {
        const elements = document.querySelectorAll('.image-block, .table-container, .images-container.vertical img');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    };
    setTimeout(animateElements, 500);

    // Эффекты при наведении на картинки
    const images = document.querySelectorAll('.images-container.vertical img');
    
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.transition = 'transform 0.3s ease';
        });
    });

    // таблица
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

    // Дополнительные эффекты для заголовка
    const mainTitle = document.querySelector('.title h1');
    
    if (mainTitle) {
        // Периодическое изменение скорости анимации
        setInterval(() => {
            const speeds = [6, 8, 10, 12];
            const randomSpeed = speeds[Math.floor(Math.random() * speeds.length)];
            mainTitle.style.animationDuration = `${randomSpeed}s`;
            
            // Случайное усиление свечения
            if (Math.random() > 0.5) {
                mainTitle.style.textShadow = '0 0 20px currentColor';
                setTimeout(() => {
                    mainTitle.style.textShadow = '0 0 15px rgba(255, 255, 255, 0.3)';
                }, 500);
            }
        }, 5000);

        
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        
        const circle = document.querySelector('.circle');
        const circle2 = document.querySelector('.circle-2');
        
        if (circle) {
            circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
        if (circle2) {
            circle2.style.transform = `translate(${-moveX * 0.7}px, ${-moveY * 0.7}px)`;
        }
    });
        
    images.forEach((img, index) => {
        if (!img.complete) {
            img.addEventListener('load', function() {
                console.log(`Картинка ${index + 1} загружена`);
            });
            
            img.addEventListener('error', function() {
                console.error(`Ошибка загрузки картинки ${index + 1}`);
                // Заменяем на placeholder если картинка не загрузилась
                this.src = 'https://via.placeholder.com/400x200/1a237e/4fc3f7?text=Space+' + (index + 1);
                this.alt = 'Запасное космическое изображение ' + (index + 1);
            });
        }
    });

    console.log('Космическая карта объектов загружена! 🚀');
    console.log('Найдено картинок:', images.length);
});

// мерцание звезд
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

window.addEventListener('load', createStars);



