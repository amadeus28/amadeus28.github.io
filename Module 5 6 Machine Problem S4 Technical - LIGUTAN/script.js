        const restaurantCards = document.querySelectorAll('.restaurant-card');
        const detailCard = document.getElementById('detailCard');
        const menuBtn = document.getElementById('menuBtn');
        const overlay = document.getElementById('overlay');
        const menuContainer = document.getElementById('menuContainer');
        const detailTitle = document.getElementById('detailTitle');
        const detailTitle2 = document.getElementById('detailTitle2');
        const detailImage = document.getElementById('detailImage');
        const detailCategory = document.getElementById('detailCategory');
        const detailDescription = document.getElementById('detailDescription');

        const foodDetails = {
            'Crinkle Cheesecake': {
                image: 'img/Crinkle Cheesecake.jpg',
                description: 'Homemade fudgy crinkle cake, layered with cheesecake & textured with cookie brittles.'
            },
            'Mango Bravo': {
                image: 'img/Mango Bravo.jpg',
                description: 'Layers of crunchy wafers filled with chocolate mousse, cream and mango cubes.'
            },
            'Sans Rival': {
                image: 'img/Sans Rival.jpg',
                description: 'Layers of chewy wafers filled with butter icing and cashew nuts.'
            },
            'Turtle Pie': {
                image: 'img/Turtle Pie.jpg',
                description: 'Chocolate pie with salted caramel-walnut filling, rich chocolate cream, chunky brownie, and chocolate mallows, topped with walnuts, whipped cream, and chocolate drizzle.'
            }
        };

        restaurantCards.forEach(card => {
            card.addEventListener('click', () => {
                const food = card.dataset.food;
                const details = foodDetails[food];

                overlay.style.display = 'block';
                menuContainer.style.display = 'none';
                
                detailCard.style.display = 'block';
                menuBtn.style.display = 'block';

                detailTitle.textContent = food;
                detailTitle2.textContent = food;
                detailImage.src = details.image;
                detailDescription.textContent = details.description;
            });
        });

        menuBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
            menuContainer.style.display = 'block';
            detailCard.style.display = 'none';
            menuBtn.style.display = 'none';
        });