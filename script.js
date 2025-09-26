// Простой скрипт для добавления интерактивности
document.addEventListener('DOMContentLoaded', function() {
    const table = document.querySelector('.space-table');
    const rows = table.querySelectorAll('tbody tr');
    
    // Добавляем нумерацию строк
    rows.forEach((row, index) => {
        const numberCell = document.createElement('td');
        numberCell.textContent = index + 1;
        numberCell.style.cssText = `
            font-weight: bold;
            color: #7f8c8d;
            text-align: center;
            border-right: 1px solid #ecf0f1;
            background: #f8f9fa;
        `;
        row.insertBefore(numberCell, row.firstChild);
    });
    
    // Добавляем заголовок для нумерации
    const headerRow = table.querySelector('thead tr');
    const numberHeader = document.createElement('th');
    numberHeader.textContent = '#';
    numberHeader.style.cssText = `
        background: linear-gradient(135deg, #3498db, #2980b9);
        color: white;
        text-align: center;
        border-right: 1px solid rgba(255,255,255,0.1);
    `;
    headerRow.insertBefore(numberHeader, headerRow.firstChild);
    
    // Подсветка при наведении с задержкой
    rows.forEach(row => {
        let hoverTimeout;
        
        row.addEventListener('mouseenter', function() {
            hoverTimeout = setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
                this.style.zIndex = '1';
                this.style.position = 'relative';
            }, 50);
        });
        
        row.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            this.style.zIndex = '0';
        });
    });
    
    // Автоматическая прокрутка к началу при загрузке
    setTimeout(() => {
        document.querySelector('.table-container').scrollTop = 0;
    }, 100);
    
    // Обновляем счетчик в футере
    const objectCount = rows.length;
    document.querySelector('footer p').textContent = 
        `Каталог космических объектов Солнечной системы • Всего объектов: ${objectCount}`;
    
    console.log(`Таблица загружена. Всего объектов: ${objectCount}`);
});

