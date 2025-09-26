document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов
    const animateElements = () => {
        const elements = document.querySelectorAll('.image-block, .table-container');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                el.style.transition = 'all 0.6s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    };

    // Специальная анимация для ГЛАВНОГО заголовка
    const mainTitle = document.querySelector('.title h1');
    
    // Усиливаем анимацию заголовка
    setInterval(() => {
        // Случайное изменение скорости
        const randomSpeed = (Math.random() * 2 + 2).toFixed(1);
        mainTitle.style.animationDuration = `${randomSpeed}s, ${randomSpeed * 0.6}s`;
        
        // Случайное мерцание
        if (Math.random() > 0.7) {
            mainTitle.style.filter = 'brightness(1.5)';
            setTimeout(() => {
                mainTitle.style.filter = 'brightness(1)';
            }, 200);
        }
    }, 3000);

    // Эффекты при наведении на картинки
    const imageBlocks = document.querySelectorAll('.image-block');
    
    imageBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });
        
        block.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });
    });

    // Эффекты при наведении на таблицу
    const tableRows = document.querySelectorAll('.bordered-table tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Инициализация анимаций
    setTimeout(animateElements, 500);

    console.log('Космическая карта объектов загружена! 🚀');
});

