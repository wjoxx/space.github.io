document.addEventListener('DOMContentLoaded', function() {
    // Добавляем нумерацию строк
    const table = document.querySelector('.cosmic-table');
    const rows = table.querySelectorAll('tbody tr');
    
    // Создаем колонку для номеров
    const headerRow = table.querySelector('thead tr');
    const numberHeader = document.createElement('th');
    numberHeader.textContent = '#';
    numberHeader.className = 'col-number';
    numberHeader.style.cssText = `
        background: linear-gradient(135deg, #001a33 0%, #003366 100%);
        color: #00f0ff;
        text-align: center;
        border-right: 1px solid #0044aa;
        min-width: 60px;
    `;
    headerRow.insertBefore(numberHeader, headerRow.firstChild);
    
    // Добавляем номера к строкам
    rows.forEach((row, index) => {
        const numberCell = document.createElement('td');
        numberCell.textContent = index + 1;
        numberCell.style.cssText = `
            text-align: center;
            font-weight: bold;
            color: #00a2ff;
            background: rgba(0, 20, 40, 0.7);
            border-right: 1px solid #003366;
            min-width: 60px;
        `;
        row.insertBefore(numberCell, row.firstChild);
    });
    
    // Анимация появления таблицы
    gsap.fromTo('.cosmic-table', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    
    // Эффект при наведении на строки
    rows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                x: 10,
                backgroundColor: 'rgba(0, 60, 120, 0.3)',
                ease: "power2.out"
            });
        });
        
        row.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                x: 0,
                backgroundColor: 'transparent',
                ease: "power2.out"
            });
        });
    });
    
    // Периодическое мерцание заголовков
    setInterval(() => {
        const headers = document.querySelectorAll('.cosmic-table th');
        headers.forEach(header => {
            gsap.to(header, {
                duration: 0.5,
                textShadow: '0 0 15px #00f0ff',
                yoyo: true,
                repeat: 1
            });
        });
    }, 3000);
    
    // Автопрокрутка с паузой
    let scrollInterval;
    
    function startAutoScroll() {
        const tableWrapper = document.querySelector('.table-wrapper');
        scrollInterval = setInterval(() => {
            if (tableWrapper.scrollTop + tableWrapper.clientHeight >= tableWrapper.scrollHeight - 10) {
                // Достигли конца - плавно возвращаемся наверх
                gsap.to(tableWrapper, {
                    duration: 2,
                    scrollTop: 0,
                    ease: "power2.inOut"
                });
            } else {
                // Плавно прокручиваем вниз
                tableWrapper.scrollTop += 1;
            }
        }, 50);
    }
    
    function stopAutoScroll() {
        clearInterval(scrollInterval);
    }
    
    // Запускаем автопрокрутку через 3 секунды после загрузки
    setTimeout(startAutoScroll, 3000);
    
    // Останавливаем при наведении мыши
    document.querySelector('.table-wrapper').addEventListener('mouseenter', stopAutoScroll);
    document.querySelector('.table-wrapper').addEventListener('mouseleave', startAutoScroll);
    
    console.log('Космическая таблица инициализирована! 🚀');
});

// Простой полифилл для GSAP анимаций
if (typeof gsap === 'undefined') {
    const gsap = {
        to: (element, options) => {
            if (options.opacity !== undefined) {
                element.style.opacity = options.opacity;
            }
            if (options.y !== undefined) {
                element.style.transform = `translateY(${options.y}px)`;
            }
            if (options.x !== undefined) {
                element.style.transform = `translateX(${options.x}px)`;
            }
            if (options.backgroundColor) {
                element.style.backgroundColor = options.backgroundColor;
            }
            if (options.textShadow) {
                element.style.textShadow = options.textShadow;
            }
            if (options.scrollTop !== undefined) {
                element.scrollTop = options.scrollTop;
            }
        },
        fromTo: (element, from, to) => {
            Object.keys(from).forEach(key => {
                if (key === 'opacity') element.style.opacity = from.opacity;
                if (key === 'y') element.style.transform = `translateY(${from.y}px)`;
            });
            
            setTimeout(() => {
                Object.keys(to).forEach(key => {
                    if (key === 'opacity') element.style.opacity = to.opacity;
                    if (key === 'y') element.style.transform = `translateY(${to.y}px)`;
                });
            }, 10);
        }
    };
}



