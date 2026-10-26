# DRIP BURGERS KENYA — PREMIUM MULTI-LOCATION WEBSITE

You are an expert **senior frontend engineer, full-stack developer, UI/UX designer, motion designer, and digital brand designer**.

Your task is to design and build a **production-quality, premium website for Drip Burgers Kenya**.

This should NOT look like a generic restaurant website or a standard Tailwind template.

The goal is to create a website that feels like a **premium Kenyan food + lifestyle brand**, with a strong visual identity, immersive interactions, excellent mobile UX, and a sophisticated ordering experience.

The core concept is:

# BURGER. BUT MAKE IT DRIP.

---

# 1. BRAND

Brand:

**Drip Burgers**

Drip Burgers is a Kenyan fast-food brand known for:

- Juicy smash burgers
- Double smash burgers
- Loaded fries
- Chicken
- Thick milkshakes
- Bold food presentation
- Youthful/urban culture
- Social-media-friendly food

Known locations include:

- Mombasa Road
- Kilimani
- Lavington
- Karen
- Parklands
- Kiambu Road
- Nyali, Mombasa

The website should communicate:

**Bold. Urban. Premium. Fun. Kenyan. Hungry-inducing.**

---

# 2. MOST IMPORTANT BRAND RULE

## ONE BRAND. DIFFERENT LOCATION EXPERIENCES.

The color scheme and core branding MUST remain consistent across every location.

Do NOT create different color schemes for individual branches.

For example:

❌ Karen = green
❌ Nyali = blue
❌ Parklands = gold
❌ Kilimani = red

That is NOT what I want.

Instead:

**Every location uses the exact same Drip Burgers brand palette.**

What changes between locations is the:

- UI composition
- Layout
- Photography
- Animation
- Image treatment
- Section ordering
- Grid system
- Typography scale
- Interaction style
- Storytelling
- Visual rhythm

Think of each branch as a **different creative experience inside the same brand system**.

The visitor should immediately recognize:

> "This is Drip Burgers."

But when visiting another location, they should feel:

> "This branch has its own personality."

---

# 3. MASTER DESIGN SYSTEM

Create a centralized Drip Burgers design system.

Use a consistent palette built around:

- Deep black / near-black
- White
- Drip Burgers signature red
- Warm cream
- Dark charcoal
- Subtle neutral grey

Use the same palette everywhere.

Create centralized design tokens for:

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Buttons
- Cards
- Transitions
- Breakpoints

For example:

```
const theme = {
  colors: {
    background: "...",
    surface: "...",
    primary: "...",
    accent: "...",
    text: "...",
    muted: "..."
  }
}

```

The exact final colors should be selected to create a strong, premium burger-brand identity.

Do not scatter colors throughout the codebase.

---

# 4. VISUAL DIRECTION

The website should combine:

- Premium burger branding
- Nairobi street culture
- Modern editorial design
- Streetwear aesthetics
- High-end food photography
- Bold typography
- Motion design
- Modern e-commerce UX

Use inspiration from premium food brands and modern lifestyle brands, but do NOT copy existing websites.

Avoid:

- Generic restaurant templates
- Corporate layouts
- Excessive rounded cards
- Pastel restaurant aesthetics
- Boring white backgrounds
- Generic Bootstrap designs
- Excessive gradients
- Overly complicated interfaces

The website should look like it was designed by a **top Nairobi creative/digital agency**.

---

# 5. TECHNOLOGY STACK

Use:

### Frontend

**React.js + Vite**

### Styling

**Tailwind CSS**

### Routing

**React Router**

### Animation

**Framer Motion**

Use GSAP only where it provides a meaningful advantage.

### Icons

**Lucide React**

### State

Use React Context or another lightweight state solution for:

- Cart
- Location
- User ordering state

### Backend-ready architecture

Structure the project so it can later connect to:

- Flask/FastAPI
- Firebase
- PostgreSQL
- MongoDB

For the first implementation, use clean mock/local data and a service layer.

Do NOT place API logic directly inside UI components.

---

# 6. PROJECT ARCHITECTURE

Use a professional structure similar to:

```
src/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── menu/
│   ├── locations/
│   ├── promotions/
│   ├── gallery/
│   ├── cart/
│   └── common/
│
├── pages/
│   ├── Home/
│   ├── Menu/
│   ├── Locations/
│   ├── Location/
│   ├── Deals/
│   ├── About/
│   ├── Contact/
│   ├── Cart/
│   └── Checkout/
│
├── layouts/
├── data/
├── services/
├── hooks/
├── context/
├── utils/
├── assets/
└── styles/

```

Keep components reusable and maintainable.

---

# 7. HOMEPAGE

Create an extremely strong homepage.

The first screen should immediately make the visitor hungry.

## HERO

Use a cinematic, full-screen hero.

Show an oversized, high-quality burger.

Large headline:

# BURGER.

# BUT MAKE IT DRIP.

Supporting text:

**Smash burgers. Loaded fries. Thick shakes. Zero boring bites.**

Primary CTA:

**ORDER NOW**

Secondary CTA:

**EXPLORE MENU**

Include subtle motion:

- Food image entrance
- Text reveal
- Scroll indicator
- Small floating UI elements
- Parallax where appropriate

Do not make the hero feel like a template.

---

# 8. NAVIGATION

Desktop navigation:

**DRIP BURGERS**

MENU
LOCATIONS
DEALS
ABOUT
CONTACT

Right side:

**ORDER NOW**

The navigation should remain visually clean.

Consider a transparent hero navigation that transitions into a solid/sticky navigation when scrolling.

Mobile navigation should become a premium full-screen menu.

Include:

- Menu
- Locations
- Deals
- About
- Contact
- Order Now

---

# 9. FIND YOUR DRIP

Immediately after the hero, create an interactive location discovery section.

Headline:

# FIND YOUR DRIP.

Show the available locations:

- Mombasa Road
- Kilimani
- Lavington
- Karen
- Parklands
- Kiambu Road
- Nyali

Each location should have:

- Branch name
- Image
- Short description
- Address
- Order button

Hovering/clicking should produce a strong visual interaction.

The location selector should feel like part of the brand experience, not a boring list.

---

# 10. LOCATION SYSTEM

Create a reusable location architecture.

Routes:

```
/locations
/locations/mombasa-road
/locations/kilimani
/locations/lavington
/locations/karen
/locations/parklands
/locations/kiambu-road
/locations/nyali

```

Every location page should contain:

- Location hero
- Branch information
- Featured food
- Menu
- Promotions
- Gallery
- Opening hours
- Contact information
- Map
- Ordering CTA

But the **UI design of each location should be different**.

---

# 11. LOCATION DESIGN VARIANTS

Create seven distinct visual UI experiences.

Remember:

## SAME COLORS.

## SAME BRAND.

## DIFFERENT UI DESIGN.

---

## MOMBASA ROAD — DYNAMIC

Personality:

**Fast. Urban. Industrial. High-energy.**

Use:

- Layered hero
- Large typography
- Diagonal image compositions
- Dynamic scrolling
- Strong food photography
- Fast transitions
- Asymmetrical layouts

Hero concept:

# BIG FLAVOUR.

# NO BRAKES.

---

## KILIMANI — EDITORIAL

Personality:

**Trendy. Youthful. Fashion-forward.**

Use:

- Magazine/editorial layout
- Oversized typography
- Asymmetrical grids
- Horizontal scrolling
- Street photography
- Bold product cards
- Fast micro-interactions

Hero concept:

# KEEP IT DRIPPY.

---

## LAVINGTON — LUXURY

Personality:

**Premium. Sophisticated. Stylish.**

Use:

- Split-screen hero
- Large cinematic food photography
- Spacious layouts
- Editorial typography
- Floating menu cards
- Elegant transitions
- Luxury magazine-inspired sections

Hero concept:

# YOUR BURGER.

# ELEVATED.

---

## KAREN — CINEMATIC

Personality:

**Relaxed. Premium. Lifestyle-focused.**

Use:

- Full-screen cinematic hero
- Large lifestyle imagery
- Slow image transitions
- Spacious sections
- Storytelling layouts
- Large food photography
- Smooth scroll effects

Hero concept:

# GOOD FOOD.

# GOOD MOOD.

---

## PARKLANDS — ARCHITECTURAL

Personality:

**Contemporary. Structured. Bold.**

Use:

- Strong grid system
- Geometric compositions
- Sharp typography
- Large blocks
- Product-focused sections
- Interactive menu layouts
- Structured gallery

Hero concept:

# PARKLANDS.

# MAKE IT DRIP.

---

## KIAMBU ROAD — PLAYFUL

Personality:

**Fun. Energetic. Social.**

Use:

- Oversized typography
- Playful layouts
- Dynamic cards
- Horizontal scrolling
- Interactive food elements
- Strong motion design
- Social-media-inspired sections

Hero concept:

# KIAMBU ROAD

# IS DRIPPING.

---

## NYALI — IMMERSIVE

Personality:

**Coastal. Vibrant. Lifestyle-driven.**

IMPORTANT:

Do NOT change the Drip Burgers color palette to blue or tropical colors.

Create the coastal identity through:

- Photography
- Layout
- Motion
- Image composition
- Typography
- Storytelling

Use:

- Cinematic imagery
- Full-screen sections
- Horizontal storytelling
- Large product photography
- Smooth transitions
- Immersive scroll effects

Hero concept:

# THE COAST

# GOT DRIP.

---

# 12. LOCATION DATA ARCHITECTURE

Create a centralized location data structure.

Example:

```
const locations = [
  {
    id: "kilimani",
    name: "Kilimani",
    address: "B Arcade Mall / Westfield Hub",
    phone: "0751 000 020",
    designVariant: "editorial",
    heroLayout: "split",
    menuLayout: "horizontal",
    galleryLayout: "masonry",
    animationStyle: "fast"
  }
]

```

The location configuration should control the UI variant.

Do NOT duplicate entire pages for every branch.

Create reusable location components that change their presentation based on the selected design variant.

---

# 13. CURRENT LOCATION INFORMATION

Use this initial information:

### Mombasa Road

Thermoteq Centre

0750 000 100

### Kilimani

B Arcade Mall / Westfield Hub

0751 000 020

### Lavington

Lavington Corner Mall

0752 000 100

### Karen

Hass Petrol Station

0750 000 200

Also create placeholder data for:

- Parklands
- Kiambu Road
- Nyali

Make these easy to update later with:

- Address
- Phone
- Coordinates
- Opening hours
- Images
- Promotions

---

# 14. MENU

Create a dedicated menu experience.

Categories:

- Smash Burgers
- Chicken
- Loaded Fries
- Sides
- Milkshakes
- Drinks
- Combos

Initial products:

### Smash Burger

KSh 1,250

### Double Smash Burger

KSh 1,550

### The Big Smokin' Burger

KSh 1,700

### All In Burger

Beef & Chicken

KSh 1,650

### Chicken Loaded Fries

KSh 1,150

### Milkshakes

Vanilla
Snickers
Lotus

KSh 750–1,150

Treat these as initial seed data.

---

# 15. MENU DATA STRUCTURE

Do not hard-code menu items inside components.

Create a centralized structure:

```
{
  id,
  name,
  description,
  price,
  category,
  image,
  featured,
  bestseller,
  spicy,
  availableLocations
}

```

This will allow the menu to eventually be controlled by an admin dashboard.

---

# 16. MENU EXPERIENCE

The menu should feel like a premium food-ordering interface.

Food cards should contain:

- Large image
- Name
- Description
- Price
- Category
- Bestseller indicator
- Add button

Hover interactions:

- Image zoom
- Slight movement
- CTA reveal
- Subtle motion

On mobile:

- Swipeable categories
- Large food images
- Easy quantity controls
- Sticky cart

---

# 17. SIGNATURE BURGERS

Create:

# THE DRIP CLASSICS

Highlight:

- Smash Burger
- Double Smash Burger
- Big Smokin' Burger
- All In Burger

Use large visual storytelling.

Example:

Large burger image on one side.

On the other:

**DOUBLE SMASH**

Two smashed beef patties.

**KSh 1,550**

**ORDER NOW**

Repeat with different compositions rather than using identical cards.

---

# 18. LOADED FRIES

Create a dedicated section:

# FRIES DON'T HAVE TO BE BORING.

Feature:

**CHICKEN LOADED FRIES**

KSh 1,150

Use oversized photography and animation.

CTA:

**GET THE FRIES**

---

# 19. MILKSHAKES

Create a playful visual section:

# THICK. COLD. DRIPPY.

Feature:

- Vanilla
- Snickers
- Lotus

Use large shake imagery.

Create subtle animations that make the section feel indulgent.

---

# 20. DEALS

Create:

# WHAT'S DRIPPING?

Display promotions such as:

- Burger combos
- Student deals
- Weekend offers
- New menu launches
- Limited-time products
- Branch-specific promotions

Create a dynamic promotion structure:

```
{
  id,
  title,
  description,
  image,
  startDate,
  endDate,
  locations,
  active
}

```

---

# 21. SOCIAL SECTION

Create:

# SEEN THE DRIP?

Build a visual Instagram/TikTok-inspired gallery.

Use:

- Food photography
- Customer content
- Burger close-ups
- Lifestyle photography
- Short video placeholders

CTA:

**FOLLOW THE DRIP**

Include social links.

Do not scrape social media without an API.

Use mock data initially.

---

# 22. ORDERING FLOW

Build a functional frontend ordering experience.

Flow:

```
Select Location
      ↓
Browse Menu
      ↓
Add Items
      ↓
Cart
      ↓
Pickup / Delivery
      ↓
Customer Details
      ↓
Checkout
      ↓
Order Confirmation

```

If the user clicks:

**ORDER NOW**

without selecting a location:

display:

# WHERE ARE YOU GETTING YOUR DRIP?

Then show the seven locations.

Once selected, take the user into that branch's ordering experience.

---

# 23. LOCATION DETECTION

Optionally request browser location permission.

If accepted:

Show:

# YOU'RE CLOSE TO KILIMANI.

"Want to order from Kilimani?"

Buttons:

**YES, LET'S GO**

**CHOOSE ANOTHER LOCATION**

Never force location permissions.

Manual branch selection must always be available.

---

# 24. CART

Create a beautiful cart drawer.

Display:

- Product
- Image
- Quantity
- Price
- Subtotal
- Delivery/pickup
- Selected branch
- Total

Actions:

**CHECKOUT**

**CONTINUE SHOPPING**

Use smooth Framer Motion transitions.

---

# 25. CHECKOUT

Build the frontend checkout interface.

Fields:

- Name
- Phone number
- Email
- Location
- Pickup/delivery
- Delivery address if applicable
- Order notes

Payment architecture should be designed so **M-Pesa integration can be added later**.

Do NOT fake successful payments.

Use a mock checkout state until a real payment backend exists.

---

# 26. ADMIN-READY ARCHITECTURE

The initial website does not need a full admin dashboard unless practical.

However, structure the application so an admin system can eventually manage:

- Locations
- Menu items
- Prices
- Product availability
- Promotions
- Orders
- Opening hours
- Branch information
- Images
- Featured products

Keep frontend data access behind a clean service layer.

---

# 27. RESPONSIVE DESIGN

Mobile is extremely important.

Do NOT simply shrink the desktop version.

Create intentionally designed mobile layouts.

Mobile should include:

- Sticky Order button
- Sticky cart
- Swipeable menu categories
- Large food photography
- Touch-friendly controls
- Mobile navigation
- Fast transitions
- Location selection
- Easy checkout

The website should feel almost like a mobile food-ordering application.

---

# 28. ANIMATION SYSTEM

Use Framer Motion for:

- Hero entrance
- Text reveal
- Image reveal
- Scroll animations
- Menu transitions
- Location transitions
- Cart drawer
- Modal animations
- Page transitions

Animations should feel premium.

Avoid excessive effects.

Performance is more important than showing off animations.

---

# 29. IMAGE SYSTEM

Centralize all images.

Example:

```
const images = {
  hero: "...",
  smashBurger: "...",
  doubleSmash: "...",
  loadedFries: "...",
  milkshake: "...",

  locations: {
    kilimani: "...",
    karen: "...",
    lavington: "...",
    mombasaRoad: "...",
    parklands: "...",
    kiambuRoad: "...",
    nyali: "..."
  }
}

```

If real Drip Burgers photography is unavailable, use suitable placeholders.

Make it extremely easy to replace the placeholders with real brand photography later.

Do not scatter image URLs throughout the codebase.

---

# 30. SEO

Implement proper SEO.

Include:

- Page titles
- Meta descriptions
- Open Graph metadata
- Semantic HTML
- Location-specific metadata
- Menu item metadata
- Structured restaurant/business data where appropriate

Examples:

**Drip Burgers Kilimani**

**Drip Burgers Karen**

**Drip Burgers Mombasa Road**

**Drip Burgers Nyali**

---

# 31. PERFORMANCE

Optimize for:

- Mobile
- Fast loading
- Lazy-loaded images
- Responsive images
- Code splitting
- Good Core Web Vitals
- Minimal unnecessary JavaScript
- Efficient animations

Do not use huge unoptimized images.

---

# 32. ACCESSIBILITY

Implement:

- Semantic HTML
- Keyboard navigation
- Proper contrast
- Alt text
- Focus states
- ARIA labels where appropriate
- Accessible buttons
- Accessible forms

---

# 33. FOOTER

Create a strong branded footer.

Logo:

**DRIP BURGERS**

Tagline:

**Burger. But make it drip.**

Links:

Menu
Locations
Deals
About
Contact

Locations:

Mombasa Road
Kilimani
Lavington
Karen
Parklands
Kiambu Road
Nyali

Social:

Instagram
TikTok
Facebook

Contact information.

---

# 34. DESIGN SYSTEM RULE

Create reusable components, but allow controlled design variants.

For example:

```
LocationPage
    ↓
LocationHero
    ↓
designVariant
    ├── dynamic
    ├── editorial
    ├── luxury
    ├── cinematic
    ├── architectural
    ├── playful
    └── immersive

```

The components should share:

- Colors
- Typography
- Buttons
- Icons
- Navigation
- Brand elements

But differ in:

- Layout
- Composition
- Animation
- Image treatment
- Section arrangement

This is the core architectural requirement of the project.

---

# 35. WHAT THE FINAL WEBSITE SHOULD FEEL LIKE

When someone opens the homepage:

They should immediately think:

**"I want that burger."**

The website should feel:

**Bold**
**Premium**
**Urban**
**Kenyan**
**Modern**
**Interactive**
**Fast**
**Social**
**Hungry-inducing**

It should feel like a **brand experience**, not simply a restaurant information page.

---

# 36. FINAL QUALITY BAR

The website should have the polish of a high-end international food brand while maintaining a distinct Kenyan identity.

Use the UX quality of major food brands as inspiration, but create an original Drip Burgers identity.

Do not copy:

- Layouts
- Branding
- Logos
- Typography
- Content
- Designs

from other companies.

---

# 37. DEVELOPMENT INSTRUCTIONS

Do not just give me a design explanation.

Actually build the project.

Start by providing:

1. Project architecture
2. Design system
3. Theme configuration
4. Data models
5. Routes
6. Reusable components
7. Location variants
8. Homepage
9. Menu
10. Location pages
11. Cart
12. Checkout
13. Responsive layouts
14. Animations

Then implement the actual code.

Do not replace implementation with vague descriptions.

Do not use pseudo-code where real implementation is expected.

Do not leave major sections as:

```
// implement later

```

Build functional versions.

If the response becomes too large, continue in logical parts and preserve the existing architecture.

---

# 38. FINAL BRAND PRINCIPLE

The entire project must follow this principle:

# ONE BRAND.

# ONE COLOR SYSTEM.

# ONE DESIGN LANGUAGE.

# SEVEN DIFFERENT EXPERIENCES.

# ONE DRIP.

The locations should never look like seven different companies.

They should look like **seven different expressions of Drip Burgers.**