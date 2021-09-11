

const mockData = [
    {
        name: 'Peter',
        title: 'MVP Microsoft',
        imageURL: 'https://thumbs.dreamstime.com/b/old-man-suit-talking-portrait-senior-caucasian-businessman-white-isolated-background-old-man-suit-talking-113566335.jpg',
        description: 'Bekcham Professor of Entrepreneurial Legal studies ag Harvard Law School.'
    },
    {
        name: 'Alex',
        title: 'MVP Azure Certified',
        imageURL: 'https://thumbs.dreamstime.com/b/old-man-suit-talking-portrait-senior-caucasian-businessman-white-isolated-background-old-man-suit-talking-113566335.jpg',
        description: 'Bekcham Professor of Entrepreneurial Legal studies ag Harvard Law School.'
    }
]

const cardsContainer = document.querySelector('.presenters');

function loadCards(cardsData = mockData) {
    cardsData.forEach((element) => {
        const card = document.createElement('div');
        card.className = 'card mb-3 border-0 mw-500';
        const subCard = document.createElement('div');
        subCard.className = 'd-flex g-0 flex-nowrap';
        const imgContainer = document.createElement('div');
        imgContainer.className = 'card-chess';
        const img = document.createElement('img');
        img.className = 'card-speaker img-fluid rounded-start';
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const bodyTitle = document.createElement('h5');
        bodyTitle.className = 'card-title';
        bodyTitle.innerText = element.name;
        const bodyTextTitle = document.createElement('p');
        bodyTextTitle.className = 'card-text text-primary';
        bodyTextTitle.innerText = element.title;
        const bodyTextDescription = document.createElement('p');
        bodyTextDescription.className = 'card-text';
        bodyTextDescription.innerText = element.description;
        
        cardBody.appendChild(bodyTitle);
        cardBody.appendChild(bodyTextTitle);
        cardBody.appendChild(bodyTextDescription);

        img.src = element.imageURL;
        imgContainer.appendChild(img);

        subCard.appendChild(imgContainer);
        subCard.appendChild(cardBody);

        card.appendChild(subCard);

        cardsContainer.appendChild(card);
    });
}

window.onload = function () {
    loadCards();
}