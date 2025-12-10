import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, RotateCcw, MapPin, ChevronLeft, ChevronRight, Maximize2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

import suite1 from "@/assets/suite-bedroom-1.jpg";
import suite2 from "@/assets/suite-living.jpg";
import suite3 from "@/assets/suite-dining.jpg";
import suiteKitchen from "@/assets/suite-kitchen.jpg";
import suiteCozy from "@/assets/suite-cozy.jpg";
import suiteBedroom2 from "@/assets/suite-bedroom-2.jpg";

interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
  linkedRoom?: string;
}

interface Room {
  id: string;
  name: string;
  image: string;
  hotspots: Hotspot[];
}

const rooms: Room[] = [
  {
    id: "bedroom",
    name: "Master Bedroom",
    image: suite1,
    hotspots: [
      { id: "bed", x: 50, y: 60, label: "King Size Bed", description: "Luxurious king-size bed with premium Egyptian cotton linens and memory foam mattress." },
      { id: "window", x: 75, y: 35, label: "Panoramic View", description: "Floor-to-ceiling windows offering stunning city views." },
      { id: "to-living", x: 15, y: 50, label: "Living Area", description: "Continue to the living room", linkedRoom: "living" },
    ],
  },
  {
    id: "living",
    name: "Living Room",
    image: suite2,
    hotspots: [
      { id: "sofa", x: 45, y: 55, label: "Designer Sofa", description: "Italian leather sofa with custom upholstery for ultimate comfort." },
      { id: "tv", x: 70, y: 40, label: "Entertainment", description: "65-inch OLED smart TV with premium sound system." },
      { id: "to-dining", x: 85, y: 50, label: "Dining Area", description: "Continue to the dining room", linkedRoom: "dining" },
      { id: "to-bedroom", x: 10, y: 50, label: "Bedroom", description: "Return to master bedroom", linkedRoom: "bedroom" },
    ],
  },
  {
    id: "dining",
    name: "Dining Area",
    image: suite3,
    hotspots: [
      { id: "table", x: 50, y: 55, label: "Dining Table", description: "Elegant mahogany dining table seating up to 6 guests." },
      { id: "chandelier", x: 50, y: 20, label: "Crystal Chandelier", description: "Hand-crafted Swarovski crystal chandelier." },
      { id: "to-kitchen", x: 80, y: 50, label: "Kitchen", description: "Continue to the kitchen", linkedRoom: "kitchen" },
      { id: "to-living", x: 15, y: 50, label: "Living Room", description: "Return to living area", linkedRoom: "living" },
    ],
  },
  {
    id: "kitchen",
    name: "Gourmet Kitchen",
    image: suiteKitchen,
    hotspots: [
      { id: "appliances", x: 60, y: 50, label: "Premium Appliances", description: "State-of-the-art Miele appliances including espresso machine." },
      { id: "counter", x: 35, y: 60, label: "Marble Counter", description: "Italian Carrara marble countertops with breakfast bar." },
      { id: "to-cozy", x: 85, y: 50, label: "Reading Nook", description: "Continue to the cozy corner", linkedRoom: "cozy" },
      { id: "to-dining", x: 10, y: 50, label: "Dining Area", description: "Return to dining area", linkedRoom: "dining" },
    ],
  },
  {
    id: "cozy",
    name: "Reading Nook",
    image: suiteCozy,
    hotspots: [
      { id: "chair", x: 45, y: 55, label: "Reading Chair", description: "Handcrafted leather armchair with ottoman." },
      { id: "bookshelf", x: 70, y: 40, label: "Curated Library", description: "Collection of classic literature and art books." },
      { id: "to-bedroom2", x: 85, y: 50, label: "Guest Bedroom", description: "Continue to guest bedroom", linkedRoom: "bedroom2" },
      { id: "to-kitchen", x: 10, y: 50, label: "Kitchen", description: "Return to kitchen", linkedRoom: "kitchen" },
    ],
  },
  {
    id: "bedroom2",
    name: "Guest Bedroom",
    image: suiteBedroom2,
    hotspots: [
      { id: "bed2", x: 50, y: 55, label: "Queen Bed", description: "Plush queen-size bed with luxury bedding." },
      { id: "closet", x: 20, y: 45, label: "Walk-in Closet", description: "Spacious walk-in closet with custom organization." },
      { id: "to-cozy", x: 85, y: 50, label: "Reading Nook", description: "Return to reading nook", linkedRoom: "cozy" },
    ],
  },
];

interface VirtualTourProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialRoom?: string;
}

export const VirtualTour = ({ isOpen = true, onClose, initialRoom = "bedroom" }: VirtualTourProps) => {
  const [currentRoom, setCurrentRoom] = useState<Room>(rooms.find(r => r.id === initialRoom) || rooms[0]);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [showMinimap, setShowMinimap] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setRotation(prev => prev + deltaX * 0.2);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleReset = () => {
    setZoom(1);
    setRotation(0);
  };

  const navigateToRoom = (roomId: string) => {
    const room = rooms.find(r => r.id === roomId);
    if (room) {
      setCurrentRoom(room);
      setActiveHotspot(null);
      handleReset();
    }
  };

  const currentIndex = rooms.findIndex(r => r.id === currentRoom.id);
  const prevRoom = rooms[(currentIndex - 1 + rooms.length) % rooms.length];
  const nextRoom = rooms[(currentIndex + 1) % rooms.length];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) onClose();
      if (e.key === "ArrowLeft") navigateToRoom(prevRoom.id);
      if (e.key === "ArrowRight") navigateToRoom(nextRoom.id);
      if (e.key === "+") handleZoomIn();
      if (e.key === "-") handleZoomOut();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevRoom, nextRoom, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-xl"
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 py-4 flex items-center justify-between bg-gradient-to-b from-charcoal/80 to-transparent">
          <div className="flex items-center gap-4">
            <motion.h2 
              key={currentRoom.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-display text-cream"
            >
              {currentRoom.name}
            </motion.h2>
            <span className="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full">
              360° View
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMinimap(!showMinimap)}
              className="text-cream hover:text-gold hover:bg-gold/10"
            >
              <Maximize2 className="w-5 h-5" />
            </Button>
            {onClose && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-cream hover:text-gold hover:bg-gold/10"
              >
                <X className="w-6 h-6" />
              </Button>
            )}
          </div>
        </div>

        {/* Main Viewer */}
        <div
          ref={containerRef}
          className="absolute inset-0 overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <motion.div
            className="w-full h-full relative"
            style={{
              transform: `scale(${zoom}) rotateY(${rotation}deg)`,
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
            transition={{ type: "spring", damping: 20 }}
          >
            <img
              src={currentRoom.image}
              alt={currentRoom.name}
              className="w-full h-full object-cover select-none"
              draggable={false}
            />

            {/* Hotspots */}
            {currentRoom.hotspots.map((hotspot) => (
              <motion.button
                key={hotspot.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute group"
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (hotspot.linkedRoom) {
                    navigateToRoom(hotspot.linkedRoom);
                  } else {
                    setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot);
                  }
                }}
              >
                <motion.div
                  className={`relative flex items-center justify-center w-12 h-12 rounded-full ${
                    hotspot.linkedRoom 
                      ? "bg-gold/80 hover:bg-gold" 
                      : "bg-cream/80 hover:bg-cream"
                  } shadow-elegant transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {hotspot.linkedRoom ? (
                    <ChevronRight className="w-6 h-6 text-charcoal" />
                  ) : (
                    <Info className="w-5 h-5 text-charcoal" />
                  )}
                  
                  {/* Pulse animation */}
                  <span className="absolute inset-0 rounded-full animate-ping bg-gold/30" />
                </motion.div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-charcoal/90 text-cream text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {hotspot.label}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Hotspot Detail Panel */}
        <AnimatePresence>
          {activeHotspot && !activeHotspot.linkedRoom && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-80 p-6 bg-background/95 backdrop-blur-xl rounded-2xl shadow-luxury"
            >
              <button
                onClick={() => setActiveHotspot(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
              <MapPin className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-xl font-display text-foreground mb-2">
                {activeHotspot.label}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activeHotspot.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 bg-background/90 backdrop-blur-xl rounded-full shadow-elegant">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigateToRoom(prevRoom.id)}
            className="text-foreground hover:text-gold"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="w-px h-8 bg-border" />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleZoomOut}
            className="text-foreground hover:text-gold"
          >
            <ZoomOut className="w-5 h-5" />
          </Button>
          
          <span className="text-sm text-muted-foreground min-w-[3rem] text-center">
            {Math.round(zoom * 100)}%
          </span>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleZoomIn}
            className="text-foreground hover:text-gold"
          >
            <ZoomIn className="w-5 h-5" />
          </Button>
          
          <div className="w-px h-8 bg-border" />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReset}
            className="text-foreground hover:text-gold"
          >
            <RotateCcw className="w-5 h-5" />
          </Button>
          
          <div className="w-px h-8 bg-border" />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigateToRoom(nextRoom.id)}
            className="text-foreground hover:text-gold"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Room Navigation Minimap */}
        <AnimatePresence>
          {showMinimap && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-24 left-6 p-4 bg-background/90 backdrop-blur-xl rounded-2xl shadow-elegant"
            >
              <p className="text-sm text-muted-foreground mb-3">Navigate Rooms</p>
              <div className="grid grid-cols-3 gap-2">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => navigateToRoom(room.id)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all ${
                      currentRoom.id === room.id
                        ? "ring-2 ring-gold"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-charcoal/40 flex items-end p-1">
                      <span className="text-[10px] text-cream truncate">{room.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions */}
        <div className="absolute bottom-6 right-6 text-xs text-cream/50">
          <p>Drag to rotate • Scroll to navigate • Click hotspots for details</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VirtualTour;
