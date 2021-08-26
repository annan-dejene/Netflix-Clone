
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));


// Event Tab Item
function selectItem(e){
    // Remove Border from the others before applying to the one clicked
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');

    // Get clicked element by id
    let selected = document.querySelector(`#${this.id}-content`)
    selected.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(content => content.classList.remove('show'));
}
