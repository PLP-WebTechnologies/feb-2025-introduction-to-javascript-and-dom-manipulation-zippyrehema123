document.addEventListener('DOMContentLoaded', function() {
    // Text Content Manipulation
    const changeTextBtn = document.getElementById('changeTextBtn');
    const dynamicText = document.getElementById('dynamicText');
    const texts = [
        'JavaScript can change content dynamically!',
        'DOM manipulation is powerful!',
        'This text was changed using JavaScript.',
        'You can update content without reloading the page.'
    ];
    let textIndex = 0;

    changeTextBtn.addEventListener('click', function() {
        textIndex = (textIndex + 1) % texts.length;
        dynamicText.textContent = texts[textIndex];
        dynamicText.classList.toggle('highlight');
    });

    // CSS Style Manipulation
    const colorBox = document.getElementById('colorBox');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const changeSizeBtn = document.getElementById('changeSizeBtn');
    const colors = ['blue', 'red', 'green', 'purple', 'orange'];
    let colorIndex = 0;
    let isLarge = false;

    changeColorBtn.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        colorBox.style.backgroundColor = colors[colorIndex];
    });

    changeSizeBtn.addEventListener('click', function() {
        isLarge = !isLarge;
        if (isLarge) {
            colorBox.style.width = '200px';
            colorBox.style.height = '200px';
            colorBox.style.borderRadius = '50%';
        } else {
            colorBox.style.width = '100px';
            colorBox.style.height = '100px';
            colorBox.style.borderRadius = '0';
        }
    });

    // Adding & Removing Elements
    const itemContainer = document.getElementById('itemContainer');
    const addItemBtn = document.getElementById('addItemBtn');
    const removeItemBtn = document.getElementById('removeItemBtn');
    let itemCount = 0;

    addItemBtn.addEventListener('click', function() {
        itemCount++;
        const newItem = document.createElement('div');
        newItem.className = 'item';
        newItem.textContent = `Item ${itemCount}`;
        itemContainer.appendChild(newItem);
    });

    removeItemBtn.addEventListener('click', function() {
        const items = itemContainer.querySelectorAll('.item');
        if (items.length > 0) {
            itemContainer.removeChild(items[items.length - 1]);
            itemCount = Math.max(0, itemCount - 1);
        }
    });

    // Interactive Element
    const hoverText = document.getElementById('hoverText');
    
    hoverText.addEventListener('mouseover', function() {
        this.style.color = 'white';
        this.style.backgroundColor = '#333';
        this.style.padding = '10px';
        this.textContent = 'The style changed!';
    });

    hoverText.addEventListener('mouseout', function() {
        this.style.color = '';
        this.style.backgroundColor = '';
        this.style.padding = '';
        this.textContent = 'Hover here!';
    });
});