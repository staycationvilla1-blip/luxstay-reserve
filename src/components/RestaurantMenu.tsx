import { motion, type Variants } from "framer-motion";
import { UtensilsCrossed, Wine, Cake, Salad } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const childRise: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const menuCategories = [
  {
    id: "starters",
    label: "Starters",
    icon: Salad,
    items: [
      { name: "Truffle Bruschetta", description: "Sourdough, black truffle, aged parmesan", price: "$24" },
      { name: "Tuna Tartare", description: "Fresh ahi tuna, avocado, sesame, citrus soy", price: "$28" },
      { name: "Burrata Caprese", description: "Creamy burrata, heirloom tomatoes, basil oil", price: "$22" },
      { name: "Lobster Bisque", description: "Maine lobster, sherry cream, chives", price: "$26" },
    ],
  },
  {
    id: "mains",
    label: "Main Courses",
    icon: UtensilsCrossed,
    items: [
      { name: "Wagyu Beef Tenderloin", description: "A5 Japanese wagyu, truffle jus, seasonal vegetables", price: "$95" },
      { name: "Pan-Seared Dover Sole", description: "Brown butter, capers, lemon, haricot verts", price: "$68" },
      { name: "Lamb Rack", description: "Herb-crusted, mint pesto, roasted fingerlings", price: "$58" },
      { name: "Risotto ai Funghi", description: "Wild mushrooms, porcini, aged parmesan", price: "$42" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    icon: Cake,
    items: [
      { name: "Chocolate Soufflé", description: "Valrhona chocolate, vanilla bean ice cream", price: "$18" },
      { name: "Crème Brûlée", description: "Madagascar vanilla, caramelized sugar", price: "$15" },
      { name: "Tiramisu", description: "Espresso-soaked ladyfingers, mascarpone", price: "$16" },
      { name: "Cheese Selection", description: "Artisanal cheeses, honeycomb, seasonal fruits", price: "$24" },
    ],
  },
  {
    id: "wines",
    label: "Fine Wines",
    icon: Wine,
    items: [
      { name: "Dom Pérignon 2012", description: "Champagne, France", price: "$450" },
      { name: "Opus One 2019", description: "Napa Valley, California", price: "$550" },
      { name: "Château Margaux 2015", description: "Bordeaux, France", price: "$680" },
      { name: "Sassicaia 2018", description: "Tuscany, Italy", price: "$420" },
    ],
  },
];

export const RestaurantMenu = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div variants={childRise} className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Culinary Excellence
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            The{" "}
            <span className="text-gold">Restaurant</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Savor exquisite dishes crafted by our award-winning chefs using the finest seasonal ingredients.
          </p>
        </motion.div>

        <Tabs defaultValue="starters" className="w-full">
          <TabsList className="flex justify-center mb-12 bg-transparent gap-2">
            {menuCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-card text-muted-foreground data-[state=active]:bg-gold data-[state=active]:text-charcoal transition-all"
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-start p-6 bg-card rounded-xl shadow-soft hover:shadow-elegant transition-all"
                  >
                    <div className="flex-1">
                      <h3 className="font-display text-lg text-foreground mb-1">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-gold font-medium ml-4">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          variants={childRise}
          className="mt-16 p-8 bg-card rounded-2xl text-center shadow-soft"
        >
          <p className="text-muted-foreground mb-4">
            For reservations and special dietary requirements, please contact our concierge.
          </p>
          <p className="text-gold font-medium">
            Open Daily: Breakfast 7-11 AM | Lunch 12-3 PM | Dinner 6-11 PM
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantMenu;
