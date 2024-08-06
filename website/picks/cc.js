const players = [
    { name: 'Лионель Месси', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1324/product/media/images/prod/QC/20240520/20/72039e0b-e1fd-3bd9-8d8d-d69b6453331e/1_org.jpg' },
    { name: 'Криштиану Роналду', img: 'https://cdn.dsmcdn.com/mnresize/500/-/ty1441/product/media/images/prod/QC/20240726/01/adde5c2f-9c92-3c4b-9f1b-4d359044be85/1_org.jpg' },
    { name: 'Кевин Де Брёйне', img: 'https://cdn.dsmcdn.com/ty1328/product/media/images/prod/QC/20240523/19/5313e21e-2fde-360a-a383-679d7e21abf7/1_org_zoom.jpg' },
    { name: 'Неймар', img: 'https://cdn.dsmcdn.com/mnresize/600/-/ty1348/product/media/images/prod/QC/20240603/21/a7828795-7fb1-3306-b6a2-c4828bc97f29/1_org_zoom.jpg' },
    { name: 'Килиан Мбаппе', img: 'https://cdn.dsmcdn.com/ty1285/product/media/images/prod/SPM/PIM/20240430/21/56979c62-3fed-3d55-a51e-26d9bbaaa879/1_org_zoom.jpg' },
    { name: 'Серхио Рамос', img: 'https://cdn.futwiz.com/img/cards?playerid=1525636231&evoplayer' },
    { name: 'Роберт Левандовский', img: 'https://game-assets.fut.gg/2024/cards/futgg-cards/100851841.webp?quality=80&width=200' },
    { name: 'Мохаммед Салах', img: 'https://cdn.futwiz.com/assets/img/fc24/social/cards/22033_skills.png?v=043914.png' },
    { name: 'Садио Мане', img: 'https://game-assets.fut.gg/2024/cards/futgg-cards/100872018.webp?quality=80&width=200' },
    { name: 'Эрлинг Холанн', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1327/product/media/images/prod/QC/20240523/18/6d89a36c-62e8-3d2d-ac67-94388ac84554/1_org.jpg' }
];

const pack = document.getElementById('pack');
const playerList = document.getElementById('player-list');
function openPack() {
    playerList.innerHTML = ''; // Очистка списка перед добавлением новых игроков
    for (let i = 0; i < 3; i++) { // Выбираем 3 случайных игрока
        const randomPlayer = players[Math.floor(Math.random() * players.length)];
        const listItem = document.createElement('li');
        const playerImg = document.createElement('img');
        playerImg.src = randomPlayer.img;
        playerImg.alt = randomPlayer.name;
        listItem.appendChild(playerImg);
        playerList.appendChild(listItem);
    }
    playerList.classList.remove('hidden');
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        openPack();
    }
});