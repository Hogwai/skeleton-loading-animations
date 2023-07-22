const news = document.querySelector('.newsCards');
const card = document.querySelector('.card');

for (i = 0; i < 5; i++) {
    news.append(card.cloneNode(true));
}