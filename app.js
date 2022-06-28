const wrapper = document.querySelector('.slideWrapper');
const menuItems = document.querySelector('.menuItem');

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        console.log("you clicked!" + index);
    });
});

// https://youtu.be/b3Gqq_k-g24?t=1691