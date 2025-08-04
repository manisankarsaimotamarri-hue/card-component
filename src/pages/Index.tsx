import Card from '@/components/Card';
import ThemeToggle from '@/components/ThemeToggle';
import { Sparkles } from 'lucide-react';

// Import images
import workspaceImg from '@/assets/workspace.jpg';
import mountainImg from '@/assets/mountain.jpg';
import coffeeShopImg from '@/assets/coffee-shop.jpg';
import startupImg from '@/assets/startup.jpg';
import cityImg from '@/assets/city.jpg';
import designStudioImg from '@/assets/design-studio.jpg';

// Sample card data
const cardData = [
  {
    id: 1,
    title: "Modern Workspace Design",
    image: workspaceImg,
    description: "Discover the art of creating a productive and inspiring workspace that boosts creativity and efficiency.",
    details: "Creating the perfect workspace is more than just arranging furniture—it's about designing an environment that inspires productivity and creativity. This modern workspace combines clean lines, natural lighting, and thoughtful organization to create a space where ideas flow freely. From the carefully chosen wooden desk that brings warmth to the minimalist aesthetic, to the strategic placement of plants that improve air quality and mental well-being, every element serves a purpose. The integration of technology remains seamless, with cables hidden and surfaces clean, allowing for focus without distraction. Natural light plays a crucial role, reducing eye strain and maintaining circadian rhythms for better work-life balance."
  },
  {
    id: 2,
    title: "Mountain Escape",
    image: mountainImg,
    description: "Experience the breathtaking beauty of mountain landscapes and the serenity they bring to the soul.",
    details: "Mountain landscapes offer more than just visual beauty—they provide a sanctuary for the soul and a reminder of nature's grandeur. This stunning sunset scene captures the perfect moment when day transitions to night, painting the sky in vibrant purples and oranges that reflect perfectly on the still lake below. The mountains stand as silent sentinels, their peaks reaching toward the heavens while their reflection creates a mirror image of tranquility. These natural environments have been proven to reduce stress, lower blood pressure, and improve mental clarity. The clean mountain air, free from urban pollutants, rejuvenates both body and mind. Whether you're planning your next hiking adventure or simply seeking inspiration for your home decor, mountain landscapes remind us of the importance of connecting with nature."
  },
  {
    id: 3,
    title: "Cozy Coffee Culture",
    image: coffeeShopImg,
    description: "Explore the warm atmosphere of local coffee shops and their role in building community connections.",
    details: "Coffee shops have evolved beyond simple beverage service to become community hubs, creative spaces, and sanctuaries for digital nomads and local residents alike. This cozy interior showcases the perfect balance of industrial and warm elements—exposed brick walls that tell stories of the building's history, combined with soft wooden furniture that invites guests to stay and connect. The warm lighting creates an intimate atmosphere that encourages conversation and collaboration, while the presence of plants adds life and improves the indoor environment. These spaces serve as modern-day town squares, where strangers become friends over shared tables and the aroma of freshly brewed coffee creates a sensory experience that transcends the simple act of caffeine consumption. The careful curation of background music, comfortable seating, and reliable WiFi makes these spaces essential to urban life."
  },
  {
    id: 4,
    title: "Startup Innovation Hub",
    image: startupImg,
    description: "Step into the dynamic world of tech startups where innovation meets collaboration in modern office spaces.",
    details: "The modern startup environment represents the evolution of workplace design, where traditional corporate hierarchies give way to collaborative innovation. This bright, airy office space embodies the startup philosophy of breaking down barriers—literally and figuratively. Glass walls maintain transparency while allowing for focused work, standing desks promote health and energy, and multiple monitors enable complex problem-solving and multitasking. The open layout encourages spontaneous collaboration and idea sharing, while still providing quiet zones for deep work. These spaces are designed to attract top talent by creating an environment that values work-life balance, creativity, and personal growth. The presence of natural light and plants isn't just aesthetic—it's scientifically proven to boost productivity and employee satisfaction. This is where the next generation of world-changing ideas are born."
  },
  {
    id: 5,
    title: "Urban Twilight",
    image: cityImg,
    description: "Witness the magical transformation of city skylines as day turns to night in metropolitan landscapes.",
    details: "Urban landscapes at twilight capture the pulse of city life in its most beautiful form. As the sun sets and artificial lights begin to illuminate the skyline, cities transform into glittering displays of human achievement and ambition. This metropolitan view showcases modern architecture reaching toward the sky, each building a testament to engineering prowess and design innovation. The purple and blue hues of the twilight sky create a natural backdrop that softens the hard edges of concrete and steel, reminding us that even in our most constructed environments, we remain connected to natural rhythms. Cities at this hour buzz with energy—professionals heading home, restaurants coming alive, and night workers beginning their shifts. The view from above offers perspective on the complexity of urban life, where millions of individual stories intersect daily. These skylines represent humanity's greatest collaborative achievements, from transportation networks to communication systems."
  },
  {
    id: 6,
    title: "Creative Design Studio",
    image: designStudioImg,
    description: "Dive into the colorful world of design studios where imagination takes physical form through art and innovation.",
    details: "Design studios are where imagination meets reality, where abstract concepts transform into tangible creations that influence culture and commerce. This vibrant creative workspace showcases the beautiful chaos of the design process—colorful sketches line the walls like windows into the creative mind, while art supplies and design tools stand ready to bring new ideas to life. The mood boards serve as visual inspiration, collecting colors, textures, and concepts that will eventually coalesce into cohesive design solutions. These spaces must balance organization with creative freedom, providing structure without stifling spontaneity. The presence of both digital and traditional tools reflects the modern designer's toolkit, where hand-drawn concepts merge seamlessly with digital execution. Natural light is crucial for accurate color work, while the arrangement of materials and references creates an environment where inspiration can strike at any moment. This is where brands are born, products are conceived, and visual communication bridges the gap between ideas and audiences."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PostCards
              </h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Discover Amazing
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Stories & Ideas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our curated collection of inspiring content, beautiful visuals, and engaging stories 
            that spark creativity and fuel imagination.
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                image={card.image}
                description={card.description}
                details={card.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS • Designed for inspiration
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
