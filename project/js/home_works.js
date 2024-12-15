const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'ok';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.innerHTML = 'not ok';
        gmailResult.style.color = 'red';
    }
};


const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

const maxWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const maxHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

let direction = 'right';

const moveBlock = () => {
    if (direction === 'right') {
        if (positionX < maxWidth) {
            positionX++;
        } else {
            direction = 'down';
        }
    } else if (direction === 'down') {
        if (positionY < maxHeight) {
            positionY++;
        } else {
            direction = 'left';
        }
    } else if (direction === 'left') {
        if (positionX > 0) {
            positionX--;
        } else {
            direction = 'up';
        }
    } else if (direction === 'up') {
        if (positionY > 0) {
            positionY--;
        } else {
            direction = 'right';
        }
    }

    childBlock.style.top = `${positionY}px`;
    childBlock.style.left = `${positionX}px`;

    requestAnimationFrame(moveBlock);
};

moveBlock();

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
    const secondsDisplay = document.getElementById('seconds');

    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval;

    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };

    const updateDisplay = () => {
        const seconds = Math.floor(elapsedTime / 1000);
        secondsDisplay.textContent = formatTime(seconds);
    };

    const startTimer = () => {
        if (!timerInterval) {
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(() => {
                elapsedTime = Date.now() - startTime;
                updateDisplay();
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(timerInterval);
        timerInterval = null;
    };

    const resetTimer = () => {
        stopTimer();
        elapsedTime = 0;
        updateDisplay();
    };

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});

// characters
const characters = [
    {
        "name": "Леонардо",
        "age": 16,
        "photo_url": "https://avatars.mds.yandex.net/i?id=b9b4c81809553637c93312bb91b12cbe_l-8366204-images-thumbs&n=13"
    },
    {
        "name": "Донателло",
        "age": 16,
        "photo_url": "https://avatars.mds.yandex.net/i?id=fd1909f64f7c24322c3faf8c2a497a45d0959175-4964214-images-thumbs&n=13"
    },
    {
        "name": "Рафаэль",
        "age": 16,
        "photo_url": "https://i.pinimg.com/736x/66/b0/2f/66b02ff19af336f3028c6d0f1c2034ac.jpg"
    },
    {
        "name": "Микеланджело",
        "age": 16,
        "photo_url": "https://avatars.mds.yandex.net/i?id=3211711def6b9bda3e7d17b5f1c624ed7947a069-10122172-images-thumbs&n=13"
    }
];

const charactersList = document.querySelector('.characters-list');

characters.forEach(character => {
    // Create a character card
    const card = document.createElement('div');
    card.classList.add('character-card');

    // Create character photo container
    const photoContainer = document.createElement('div');
    photoContainer.classList.add('character-photo');

    // Create character photo
    const photo = document.createElement('img');
    photo.src = character.photo_url;
    photo.alt = character.name;

    // Create character name
    const name = document.createElement('div');
    name.classList.add('character-name');
    name.textContent = character.name;

    // Create character age
    const age = document.createElement('div');
    age.classList.add('character-age');
    age.textContent = `Возраст: ${character.age}`;

    // Append elements to the card
    photoContainer.appendChild(photo);
    card.appendChild(photoContainer);
    card.appendChild(name);
    card.appendChild(age);

    // Append the card to the characters list
    charactersList.appendChild(card);
});


// any
const anyItems = [
    {
        "name": "Автомобиль",
        "age": "Современный",
        "photo_url": "https://i.imgur.com/1z9gq0u.png"
    },
    {
        "name": "Велосипед",
        "age": "Старинный",
        "photo_url": "https://i.imgur.com/2z8w9vq.png"
    },
    {
        "name": "Самолет",
        "age": "Современный",
        "photo_url": "https://i.imgur.com/3z7x0wq.png"
    },
    {
        "name": "Лодка",
        "age": "Классический",
        "photo_url": "https://i.imgur.com/4z6y1vq.png"
    }
];

const anyList = document.querySelector('.any-list');

anyItems.forEach(item => {
    // Create an any card
    const card = document.createElement('div');
    card.classList.add('any-card');

    // Create any photo container
    const photoContainer = document.createElement('div');
    photoContainer.classList.add('any-photo');

    // Create any photo
    const photo = document.createElement('img');
    photo.src = item.photo_url;
    photo.alt = item.name;

    // Create any name
    const name = document.createElement('div');
    name.classList.add('any-name');
    name.textContent = item.name;

    // Create any age
    const age = document.createElement('div');
    age.classList.add('any-age');
    age.textContent = `Тип: ${item.age}`;

    // Append elements to the card
    photoContainer.appendChild(photo);
    card.appendChild(photoContainer);
    card.appendChild(name);
    card.appendChild(age);

    // Append the card to the any list
    anyList.appendChild(card);
});