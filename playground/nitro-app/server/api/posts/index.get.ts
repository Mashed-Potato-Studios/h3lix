export default defineEventHandler(async (event) => {
    // Api Call from data base
    const post = [
        {
            "title": "The Ultimate Chocolate Chip Cookie Recipe",
            "date": "2024-05-01",
            "author": "Jane Doe",
            "content": "Discover the secret to baking the perfect chocolate chip cookies. These cookies are crispy on the edges and chewy in the middle, loaded with gooey chocolate chips. Follow this easy recipe for a crowd-pleasing treat that’s perfect for any occasion.",
            "ingredients": [
                "1 cup unsalted butter, melted",
                "1 cup brown sugar",
                "1/2 cup granulated sugar",
                "2 large eggs",
                "2 tsp vanilla extract",
                "2 1/2 cups all-purpose flour",
                "1 tsp baking soda",
                "1/2 tsp salt",
                "2 cups semisweet chocolate chips"
            ],
            "steps": [
                "Preheat your oven to 350°F (175°C).",
                "In a large bowl, mix the melted butter, brown sugar, and granulated sugar until well combined.",
                "Add the eggs and vanilla extract, and mix until smooth.",
                "In a separate bowl, whisk together the flour, baking soda, and salt.",
                "Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
                "Fold in the chocolate chips.",
                "Drop spoonfuls of dough onto a baking sheet lined with parchment paper.",
                "Bake for 10-12 minutes, or until the edges are golden brown.",
                "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely."
            ],
            "tags": ["dessert", "cookies", "chocolate"]
        },
        {
            "title": "A Simple and Delicious Margherita Pizza",
            "date": "2024-04-28",
            "author": "John Smith",
            "content": "Margherita pizza is a classic that never goes out of style. This recipe uses fresh ingredients to create a delicious, homemade pizza that’s sure to impress. With a crispy crust, flavorful tomato sauce, and fresh mozzarella, this pizza is a must-try.",
            "ingredients": [
                "1 1/2 cups warm water",
                "1 tsp sugar",
                "1 packet active dry yeast",
                "4 cups all-purpose flour",
                "1 tsp salt",
                "2 tbsp olive oil",
                "1 cup tomato sauce",
                "8 oz fresh mozzarella, sliced",
                "Fresh basil leaves",
                "Salt and pepper to taste"
            ],
            "steps": [
                "In a small bowl, combine warm water, sugar, and yeast. Let sit for 5 minutes until foamy.",
                "In a large bowl, mix flour and salt. Make a well in the center and add the yeast mixture and olive oil.",
                "Mix until a dough forms. Knead on a floured surface for about 10 minutes until smooth and elastic.",
                "Place the dough in a greased bowl, cover with a damp cloth, and let rise in a warm place for about 1 hour.",
                "Preheat your oven to 475°F (245°C).",
                "Punch down the dough and divide it into two pieces. Roll out each piece into a thin circle.",
                "Place the dough on a baking sheet or pizza stone. Spread tomato sauce over the dough, leaving a small border around the edges.",
                "Arrange mozzarella slices on top and season with salt and pepper.",
                "Bake for 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned.",
                "Garnish with fresh basil leaves before serving."
            ],
            "tags": ["main course", "pizza", "Italian"]
        },
        {
            "title": "Refreshing Summer Berry Salad",
            "date": "2024-05-15",
            "author": "Alice Johnson",
            "content": "This summer berry salad is the perfect way to cool down on a hot day. Packed with fresh berries, leafy greens, and a zesty lemon dressing, it’s both healthy and delicious. It’s a great side dish or light meal that captures the flavors of the season.",
            "ingredients": [
                "2 cups mixed greens (spinach, arugula, etc.)",
                "1 cup strawberries, sliced",
                "1 cup blueberries",
                "1/2 cup raspberries",
                "1/4 cup crumbled feta cheese",
                "1/4 cup sliced almonds",
                "1/4 cup red onion, thinly sliced",
                "For the dressing:",
                "1/4 cup olive oil",
                "2 tbsp lemon juice",
                "1 tbsp honey",
                "Salt and pepper to taste"
            ],
            "steps": [
                "In a large bowl, combine the mixed greens, strawberries, blueberries, raspberries, feta cheese, almonds, and red onion.",
                "In a small bowl, whisk together the olive oil, lemon juice, honey, salt, and pepper.",
                "Pour the dressing over the salad and toss to combine.",
                "Serve immediately and enjoy this refreshing summer treat."
            ],
            "tags": ["salad", "healthy", "summer"]
        }
    ]
    setResponseStatus(event, 200)
    return post
})