export const siteConfig = {
  name: "Roots & Bowls",
  tagline: "Eat Clean. Feel Alive.",
  logo: "🌿",
  address: "12, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038",
  phone: "+91 98765 43210",
  email: "hello@rootsandbowls.in",
  hours: {
    weekdays: "7:30 AM – 10:00 PM",
    weekends: "8:00 AM – 10:30 PM",
  },
  social: {
    instagram: "https://instagram.com/rootsandbowls",
    zomato: "https://zomato.com/rootsandbowls",
    swiggy: "https://swiggy.com/rootsandbowls",
  },
  deliveryRadius: "8 km from Indiranagar",
  keywords: [
    "healthy restaurant Bengaluru",
    "salad bowl cafe Indiranagar",
    "vegan cafe Bangalore",
    "meal prep delivery Bengaluru",
    "clean eating cafe Bangalore",
  ],
};

export const menuCategories = [
  {
    slug: "signature-bowls",
    label: "Signature Bowls",
    description: "Our chef-crafted bowls — the stars of the show. Each built around a grain base, seasonal greens, and a house-made dressing.",
    items: [
      {
        id: "sb-1",
        name: "The Warrior Bowl",
        description: "Quinoa, roasted chickpeas, avocado, cherry tomatoes, cucumber ribbons, tahini-lemon dressing",
        price: 349,
        calories: 480,
        protein: 22,
        carbs: 52,
        fat: 18,
        tags: ["VG", "GF", "DF"],
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80",
        chefPick: true,
        allergens: "Sesame (tahini)",
        sourcing: "Quinoa from Rajasthan organic farms; avocados from Coorg",
      },
      {
        id: "sb-2",
        name: "Harvest Moon Bowl",
        description: "Brown rice, roasted sweet potato, kale, edamame, pickled red onion, ginger-miso dressing",
        price: 329,
        calories: 520,
        protein: 18,
        carbs: 68,
        fat: 12,
        tags: ["VG", "GF", "DF"],
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
        chefPick: false,
        allergens: "Soy (edamame, miso)",
        sourcing: "Brown rice from Tamil Nadu; kale from local vertical farms",
      },
      {
        id: "sb-3",
        name: "The Desi Vitality Bowl",
        description: "Millets, sprouted moong, roasted beets, mint chutney, pomegranate, chaat masala yogurt",
        price: 299,
        calories: 410,
        protein: 16,
        carbs: 58,
        fat: 9,
        tags: ["V", "GF"],
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
        chefPick: true,
        allergens: "Dairy (yogurt)",
        sourcing: "Heritage millets from Karnataka farmers collective",
      },
      {
        id: "sb-4",
        name: "The Protein Puncher",
        description: "Farro, grilled paneer, spinach, roasted peppers, pumpkin seeds, herb vinaigrette",
        price: 379,
        calories: 560,
        protein: 34,
        carbs: 48,
        fat: 20,
        tags: ["V", "LF"],
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80",
        chefPick: false,
        allergens: "Dairy (paneer), Gluten (farro)",
        sourcing: "Paneer from Nandini organic dairy",
      },
    ],
  },
  {
    slug: "build-your-own",
    label: "Build Your Own Bowl",
    description: "You're the chef. Pick your base, protein, toppings, and dressing. We'll make it happen.",
    items: [
      { id: "byo-base", name: "Base (choose 1)", description: "Quinoa / Brown Rice / Millets / Farro / Mixed Greens", price: 149, calories: 200, protein: 6, carbs: 38, fat: 2, tags: ["VG", "GF"], image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80", chefPick: false, allergens: "Gluten (farro)", sourcing: "All grains sourced from certified organic farms" },
      { id: "byo-protein", name: "Protein Add-on", description: "Grilled Chicken / Paneer Tikka / Tofu / Chickpeas / Eggs (+₹80–120)", price: 80, calories: 150, protein: 20, carbs: 4, fat: 7, tags: ["GF"], image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80", chefPick: false, allergens: "Varies by choice", sourcing: "Free-range chicken; organic tofu" },
      { id: "byo-toppings", name: "Toppings (any 4)", description: "Avocado, Roasted Veggies, Seeds, Fresh Herbs, Pickles, Sprouts, Nuts", price: 49, calories: 80, protein: 3, carbs: 8, fat: 5, tags: ["VG", "GF", "DF"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80", chefPick: false, allergens: "Tree nuts (optional)", sourcing: "Seasonal and local" },
      { id: "byo-dressing", name: "House Dressings", description: "Tahini-Lemon / Ginger-Miso / Herb Vinaigrette / Coconut-Lime / Mint Chutney", price: 39, calories: 60, protein: 1, carbs: 4, fat: 5, tags: ["VG", "GF", "DF"], image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=1200&q=80", chefPick: false, allergens: "Sesame (tahini), Soy (miso)", sourcing: "All dressings made fresh daily" },
    ],
  },
  {
    slug: "wraps-sandwiches",
    label: "Wraps & Sandwiches",
    description: "Whole wheat or lettuce wraps packed with nutrition, not empty carbs.",
    items: [
      { id: "ws-1", name: "Avocado Smash Wrap", description: "Whole wheat tortilla, smashed avocado, grilled veggies, micro greens, chipotle aioli", price: 259, calories: 420, protein: 14, carbs: 48, fat: 19, tags: ["V"], image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&q=80", chefPick: true, allergens: "Gluten, Eggs (aioli)", sourcing: "Avocados from Coorg" },
      { id: "ws-2", name: "Tofu Tikka Wrap", description: "Lettuce wrap, marinated tofu tikka, slaw, tamarind chutney", price: 239, calories: 340, protein: 18, carbs: 32, fat: 12, tags: ["VG", "GF", "DF"], image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=1200&q=80", chefPick: false, allergens: "Soy", sourcing: "Organic tofu" },
    ],
  },
  {
    slug: "soups",
    label: "Soups",
    description: "Slow-simmered broths and blended soups made fresh every morning.",
    items: [
      { id: "so-1", name: "Golden Turmeric Lentil Soup", description: "Red lentils, coconut milk, turmeric, ginger, coriander. Anti-inflammatory powerhouse.", price: 199, calories: 280, protein: 14, carbs: 36, fat: 8, tags: ["VG", "GF", "DF"], image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200&q=80", chefPick: true, allergens: "None", sourcing: "Organic red lentils from Madhya Pradesh" },
      { id: "so-2", name: "Roasted Tomato Basil Soup", description: "Vine tomatoes, fresh basil, garlic, olive oil, no cream added.", price: 179, calories: 180, protein: 5, carbs: 24, fat: 7, tags: ["VG", "GF", "DF"], image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=1200&q=80", chefPick: false, allergens: "None", sourcing: "Tomatoes from local Hesaraghatta farms" },
    ],
  },
  {
    slug: "cold-press-juices",
    label: "Cold-Press Juices",
    description: "No added sugar. No heat. Just plants, pressed fresh.",
    items: [
      { id: "cpj-1", name: "Roots Revival", description: "Beetroot, carrot, apple, ginger, lemon", price: 169, calories: 110, protein: 2, carbs: 26, fat: 0, tags: ["VG", "GF", "DF"], image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=1200&q=80", chefPick: true, allergens: "None", sourcing: "All produce from organic certified farms" },
      { id: "cpj-2", name: "Green Machine", description: "Cucumber, spinach, apple, celery, mint, lemon", price: 179, calories: 90, protein: 2, carbs: 21, fat: 0, tags: ["VG", "GF", "DF"], image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=1200&q=80", chefPick: false, allergens: "None", sourcing: "Farm-fresh greens" },
      { id: "cpj-3", name: "Citrus Sunrise", description: "Orange, pineapple, turmeric, black pepper", price: 159, calories: 130, protein: 1, carbs: 32, fat: 0, tags: ["VG", "GF", "DF"], image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=1200&q=80", chefPick: false, allergens: "None", sourcing: "Coorg oranges; local pineapple" },
    ],
  },
  {
    slug: "smoothies",
    label: "Smoothies",
    description: "Thick, creamy, and nutrient-dense. No ice cream, no syrups.",
    items: [
      { id: "sm-1", name: "Tropical Gut Reset", description: "Mango, banana, coconut water, chia seeds, probiotics", price: 189, calories: 220, protein: 5, carbs: 44, fat: 4, tags: ["VG", "GF", "DF"], image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=1200&q=80", chefPick: false, allergens: "None", sourcing: "Alphonso mangoes in season" },
      { id: "sm-2", name: "Peanut Butter Power", description: "Banana, natural peanut butter, oat milk, cacao, dates", price: 209, calories: 380, protein: 14, carbs: 48, fat: 14, tags: ["VG", "DF"], image: "https://images.unsplash.com/photo-1638176067000-9db4a04c4028?w=1200&q=80", chefPick: true, allergens: "Peanuts, Gluten (oats)", sourcing: "Natural PB, no palm oil" },
    ],
  },
  {
    slug: "healthy-desserts",
    label: "Healthy Desserts",
    description: "Guilt-free treats made without refined sugar or artificial flavours.",
    items: [
      { id: "hd-1", name: "Dark Chocolate Chia Pudding", description: "Oat milk, chia seeds, 70% cacao, maple syrup, berry compote", price: 149, calories: 210, protein: 6, carbs: 28, fat: 9, tags: ["VG", "GF", "DF"], image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200&q=80", chefPick: true, allergens: "None", sourcing: "Single-origin cacao" },
      { id: "hd-2", name: "Coconut Mango Mousse", description: "Coconut cream, Alphonso mango, lime zest, no added sugar", price: 139, calories: 180, protein: 2, carbs: 24, fat: 10, tags: ["VG", "GF", "DF"], image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=1200&q=80", chefPick: false, allergens: "None", sourcing: "Seasonal Alphonso mangoes" },
    ],
  },
];

export const mealPlans = [
  {
    id: "basic",
    name: "Basic Lunch Plan",
    tagline: "5 power lunches every week",
    price: 1499,
    perMeal: 300,
    meals: 5,
    includes: ["1 signature bowl daily", "1 cold-press juice", "Macro tracking sheet", "Free delivery"],
    colour: "#7C9070",
  },
  {
    id: "full-week",
    name: "Full Week Plan",
    tagline: "Lunch + dinner, sorted",
    price: 2799,
    perMeal: 280,
    meals: 10,
    includes: ["5 lunches + 5 dinners", "2 cold-press juices/day", "Weekly nutrition report", "Free delivery", "Chef's note with each meal"],
    colour: "#C1603D",
    popular: true,
  },
  {
    id: "fitness",
    name: "Fitness Plan",
    tagline: "Precision macros for your goals",
    price: 3499,
    perMeal: 350,
    meals: 10,
    includes: ["Custom macro targets", "High-protein bowl variants", "3 smoothies/week", "Priority delivery slots", "Bi-weekly nutritionist check-in"],
    colour: "#2C3B2A",
  },
];

export const blogPosts = [
  {
    slug: "why-millets-are-the-future",
    title: "Why Millets Are the Future of Indian Nutrition",
    excerpt: "Ancient grains that sustained civilisations are making a powerful comeback — and your gut will thank you.",
    author: "Priya Nair, Nutritionist & Co-founder",
    date: "2024-05-12",
    readTime: "5 min",
    category: "Nutrition Science",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80",
    content: `India grew up on millets. Before rice and wheat took over the plate, pearl millet (bajra), finger millet (ragi), sorghum (jowar), and little millet were the backbone of everyday cooking across the subcontinent. Somewhere in the 20th century, we traded them for refined grains and lost a century's worth of nutritional intelligence in the process.

At Roots & Bowls, our Desi Vitality Bowl was born from a simple question: what would a nutritionist cook for herself at home? The answer was almost always some form of millet — filling, complex in flavour, and astonishingly good for blood sugar management.

**Why millets work**

Millets have a glycemic index between 54–68, significantly lower than white rice (73) or white bread (75). This means slower glucose release, sustained energy, and fewer cravings through the afternoon. For Bengaluru's working population — office hours stretching past 7 PM, desk meals, constant stress — this is not a small thing.

They're also rich in magnesium, phosphorus, and B vitamins. Finger millet, in particular, has more calcium per gram than milk. For lactose-intolerant individuals or those exploring plant-based eating, this is a game-changer.

**Local and regenerative**

We source our millets from the Karnataka Farmers Collective — a group of 60+ smallholder farmers who've committed to chemical-free cultivation. Millets require 70% less water than rice and virtually no pesticides. They regenerate topsoil. Choosing them on your lunch plate is, quite literally, a climate action.

**How to eat more of them**

Start with a swap: replace your afternoon rice with a millet bowl twice a week. Try ragi porridge instead of oats at breakfast. Our Build Your Own Bowl lets you choose millets as your base — pair it with sprouted moong and a tahini dressing for a complete amino acid profile.

The future of Indian food is actually its past. And it tastes incredible.`,
    relatedSlugs: ["eating-clean-in-a-startup-city", "sourcing-story-hesaraghatta"],
  },
  {
    slug: "eating-clean-in-a-startup-city",
    title: "Eating Clean in a Startup City: The Bengaluru Dilemma",
    excerpt: "When your city never sleeps and the only options at 8 PM are pizza or biryani, how do you actually eat well?",
    author: "Arjun Sharma, Chef & Co-founder",
    date: "2024-04-28",
    readTime: "6 min",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    content: `Bengaluru is a city of contradictions. It has some of India's most health-conscious consumers — CrossFit boxes in every neighbourhood, a booming supplements industry, people who know the difference between omega-3 and omega-6. And yet, the food infrastructure hasn't caught up.

Walk through Indiranagar at 8:30 PM on a Tuesday. Your options, overwhelmingly, are: biryani, pizza, fried chicken, or a dosa that was cooked six hours ago. If you're on a specific nutrition goal, you're stuck either cooking at home (who has the time?) or compromising.

That gap is exactly why we started Roots & Bowls.

**The meal-prep revelation**

Arjun and I both lived through the startup-diet cycle before we built this cafe. The pattern is predictable: Monday motivation (salad from home), Wednesday breakdown (office canteen pasta), Friday surrender (late-night Zomato). The problem isn't willpower. It's infrastructure.

Meal prep changed everything. When Sunday evening means a fridge stocked with ready-to-assemble components — grains cooked, proteins marinated, dressings jarred — eating well during the week becomes effortless. You're not making decisions when you're tired and hungry; you're just assembling.

**What we learned about Bengaluru palates**

Our menu went through 11 iterations before we settled. We learned that Bengalureans want bold flavours, not diet food. They want chaat-spiced chickpeas, not bland boiled vegetables. They want tahini that actually tastes like tahini, not watered-down dressing. Health food in India failed for years because it was positioned as deprivation. We positioned it as upgrade.

The response from the fitness community, the startup crowd, and especially from working mothers has confirmed the hypothesis: people want to eat well, they just need it to be delicious and convenient.

If you're in Indiranagar and trying to eat clean, we've got you. And if you're outside our delivery radius, our meal prep subscription might be the answer.`,
    relatedSlugs: ["why-millets-are-the-future", "meal-prep-101"],
  },
  {
    slug: "sourcing-story-hesaraghatta",
    title: "From Hesaraghatta Farms to Your Bowl",
    excerpt: "A morning drive to our tomato supplier showed us why farm relationships matter more than any marketing claim.",
    author: "Priya Nair, Nutritionist & Co-founder",
    date: "2024-04-10",
    readTime: "4 min",
    category: "Sourcing",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    content: `It takes 45 minutes by car to reach Hesaraghatta from Indiranagar before Bengaluru's traffic wakes up. We make this drive every other Friday.

The farms we work with don't have flashy websites or sustainability reports. What they have is tomatoes that taste like tomatoes — vine-ripened, slightly imperfect, intensely flavoured. The kind your grandmother probably grew.

Our relationship with the Hesaraghatta Growers Association started with a cold call to their cooperative number. We explained what we were building: a cafe that would actually care about where the food came from, that would tell customers the name of the farm, that would commit to a weekly minimum order even in slow seasons.

It took four visits before they believed we were serious.

**Why direct sourcing changes everything**

The average tomato sold in a supermarket has changed hands six times before it reaches you. Every handoff adds cost, adds time, and adds pressure to pick earlier (before it's ripe) and refrigerate longer (past when it's good). The result is a fruit that looks like a tomato but has had the flavour bred out of it for shelf life.

When we buy direct, tomatoes are picked two days before they reach our kitchen. They're not waxed. They're not sprayed with ethylene gas to redden in a warehouse. They taste like something.

This matters for your health in ways that don't make the label. Vine-ripened tomatoes have significantly higher lycopene and vitamin C than commercially grown counterparts harvested early. You're not just eating something that tastes better — you're eating something that's actually more nutritious.

**The honest version of "farm-to-table"**

We're wary of greenwashing. Farm-to-table is a phrase that's been stretched to cover everything from genuinely local sourcing to a restaurant that once drove past a field. We try to be specific: when you eat our Roasted Tomato Basil Soup, the tomatoes came from Hesaraghatta. We can tell you the cooperative's name. We can show you the invoice.

That's the standard we hold ourselves to.`,
    relatedSlugs: ["why-millets-are-the-future", "eating-clean-in-a-startup-city"],
  },
  {
    slug: "meal-prep-101",
    title: "Meal Prep 101: How to Actually Stick to It",
    excerpt: "Most meal prep guides assume you have four hours on Sunday. Here's the version for people with real lives.",
    author: "Arjun Sharma, Chef & Co-founder",
    date: "2024-03-22",
    readTime: "7 min",
    category: "How-To",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80",
    content: `The meal prep content you've seen online usually involves a very organized person with a massive kitchen, sixteen identical glass containers, and apparently no job. It's aspirational to the point of being useless.

Here's a version that works for people with busy lives and small Bengaluru apartments.

**The 90-minute rule**

You don't need four hours. You need 90 focused minutes. The reason people quit meal prep isn't discipline — it's that the barrier to entry is too high. If Sunday prep means cleaning, chopping, cooking, and storing everything from scratch, it feels like a second job.

The 90-minute approach: cook two grains, roast one tray of vegetables, prep one protein, make one dressing. These components become multiple meals in different combinations throughout the week.

**The component approach**

Instead of making complete meals, make building blocks. A batch of cooked quinoa can become a breakfast bowl (with fruit and nuts), a lunch bowl (with roasted veggies and tahini), or a quick dinner base (with a fried egg and whatever's in the fridge).

We've designed our meal prep subscription around this principle. We send you components — not identical meals that become boring by Wednesday.

**What to actually prep**

Grains keep well for 4–5 days in the fridge. Roasted vegetables last 3–4 days. Dressings last a week. Raw greens and fresh herbs should be prepped day-of (they wilt). Proteins are best done 2–3 days at a time.

Our Fitness Plan includes a weekly component breakdown with our chef's suggestions for how to combine them across the week. Subscribers tell us this is the feature they didn't know they needed until they had it.

**When to outsource**

Here's the honest truth: some weeks, you're not going to meal prep. Work happens, life happens. Having a reliable delivery option — something genuinely healthy, not just "healthier than the alternative" — is part of the system, not a failure of it.

That's why we exist.`,
    relatedSlugs: ["eating-clean-in-a-startup-city", "sourcing-story-hesaraghatta"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Kavya Reddy",
    role: "Product Manager, Bengaluru",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
    quote: "I've tried every healthy delivery app in Bengaluru. Roots & Bowls is the only one where I actually look forward to what's coming. The Warrior Bowl has become my Tuesday ritual.",
    stars: 5,
    plan: "Full Week Plan subscriber",
  },
  {
    id: 2,
    name: "Rohit Menon",
    role: "Fitness Coach & Athlete",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    quote: "As someone who tracks every macro, I was skeptical. But the Fitness Plan's nutrition accuracy is genuinely impressive. My clients ask me what I'm eating — I send them here.",
    stars: 5,
    plan: "Fitness Plan subscriber",
  },
  {
    id: 3,
    name: "Ananya Krishnamurthy",
    role: "New mum, Indiranagar",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    quote: "With a six-month-old, cooking is the first thing that goes. The meal prep subscription saved my diet. Real food, no compromises, and it just shows up.",
    stars: 5,
    plan: "Basic Lunch Plan subscriber",
  },
  {
    id: 4,
    name: "Vikram Iyer",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    quote: "We ordered catering for our team's offsite — 40 people. Every single person asked for the contact. The corporate catering game in Bengaluru just got a serious upgrade.",
    stars: 5,
    plan: "Corporate Catering client",
  },
];

export const statsHighlights = [
  { value: "100%", label: "Fresh, daily prep" },
  { value: "60+", label: "Farm partners" },
  { value: "0", label: "Artificial preservatives" },
  { value: "500+", label: "Happy subscribers" },
];

export const faqs = [
  {
    q: "What is your delivery radius?",
    a: "We deliver within 8 km of our Indiranagar cafe. This covers most of East Bengaluru including Koramangala, HSR Layout, Domlur, Ulsoor, and Frazer Town. Check our order page for your exact pin.",
  },
  {
    q: "Can I customise items for allergies or preferences?",
    a: "Absolutely. Use the Build Your Own Bowl section, or add a note to your order. For serious allergies, please call us directly so our kitchen can take extra precautions.",
  },
  {
    q: "Where can I find full allergen information?",
    a: "Each menu item on our website and in-cafe menu lists allergens. Our most common ones are sesame (tahini), soy (edamame, miso, tofu), gluten (whole wheat wraps, farro), and dairy (paneer, yogurt). Everything else is marked.",
  },
  {
    q: "How do I cancel or pause my meal prep subscription?",
    a: "Log in to your account and go to Subscriptions. You can pause for up to 4 weeks or cancel anytime with 48 hours notice before your next delivery cycle. No hidden charges.",
  },
  {
    q: "What is the minimum order for corporate catering?",
    a: "Minimum 15 people for office catering. For wellness events and retreats, minimums vary by package. Contact us at hello@rootsandbowls.in for a custom quote.",
  },
];