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
            'Steak': {
                image: 'assets/steak.png',
                description: 'A perfectly seared steak, rich and juicy, with a crispy, caramelized exterior that gives way to a tender, succulent interior. Each bite is a celebration of savory umami, enhanced with a hint of smokiness from the grill. Whether it’s a classic ribeye, fillet mignon, or a hearty T-bone, this dish is accompanied by a side of creamy mashed potatoes or fresh, grilled vegetables, offering a harmonious balance of flavors. The steak is seasoned simply with sea salt and cracked black pepper, allowing the natural richness of the meat to shine.'
            },
            'Seafood Paella': {
                image: 'assets/seafood.jpg',
                description: 'A vibrant and aromatic dish, seafood paella bursts with the freshest ocean flavors. A bed of saffron-infused rice, golden and slightly crispy at the edges, forms the base, topped with an abundant mix of succulent shrimp, tender squid, delicate mussels, and buttery clams. The seafood is lovingly cooked in a rich, flavorful broth spiced with paprika, garlic, and onions, and garnished with fresh herbs and a squeeze of zesty lemon. Each bite is a celebration of the sea, wrapped in the warmth of a comforting, well-seasoned rice medley.'
            },
            'Stinky Tofu': {
                image: 'assets/stinkytofu.jpg',
                description: 'This beloved street food is known for its distinctive aroma, which many find intriguing and irresistible. Deep-fried to golden perfection, the stinky tofu has a crispy, crunchy exterior that gives way to a soft, slightly fermented interior. The flavor is an adventurous blend of savory, earthy, and tangy notes, balanced by a kick of spice from accompanying chili sauce or pickled vegetables. Served on skewers or in a bowl, this dish is a bold and unforgettable experience that perfectly embodies the charm of traditional Taiwanese street food.'
            },
            'Chili Crab': {
                image: 'assets/chili crab.jpg',
                description: 'A truly indulgent dish that combines the sweetness of fresh crab with the fiery, mouth-watering heat of chili sauce. The tender crab meat is coated in a thick, aromatic sauce made from a blend of red chilies, garlic, ginger, and tomato, creating a perfect balance of spiciness and sweetness. Each bite of juicy crab is soaked in the rich, savory sauce, with a lingering heat that excites the taste buds. Served with a side of warm, fluffy buns to soak up the sauce, this dish is a messy, flavorful, and utterly satisfying experience.'
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