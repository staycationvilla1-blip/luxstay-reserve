import { useEffect, useRef, useState } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import "@photo-sphere-viewer/core/index.css";
import "@photo-sphere-viewer/markers-plugin/index.css";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

import suiteBedroom from "@/assets/suite-bedroom-1.jpg";
import suiteLiving from "@/assets/suite-living.jpg";
import suiteDining from "@/assets/suite-dining.jpg";

interface Marker {
  id: string;
  longitude: number;
  latitude: number;
  label: string;
  description: string;
  linkedRoom?: string;
}

interface PanoramaRoom {
  id: string;
  name: string;
  panorama: string;
  thumbnail: string;
  markers: Marker[];
}

const panoramaRooms: PanoramaRoom[] = [
  {
    id: "bedroom",
    name: "Master Bedroom",
    panorama: suiteBedroom,
    thumbnail: suiteBedroom,
    markers: [
      { id: "bed", longitude: 0, latitude: -0.1, label: "King Size Bed", description: "Luxurious king-size bed with premium Egyptian cotton linens and memory foam mattress." },
      { id: "window", longitude: 1.5, latitude: 0.2, label: "Panoramic View", description: "Floor-to-ceiling windows offering stunning city views." },
      { id: "to-living", longitude: 3.14, latitude: 0, label: "Living Area", description: "Continue to the living room", linkedRoom: "living" },
    ],
  },
  {
    id: "living",
    name: "Living Room",
    panorama: suiteLiving,
    thumbnail: suiteLiving,
    markers: [
      { id: "sofa", longitude: 0, latitude: -0.1, label: "Designer Sofa", description: "Italian leather sofa with custom upholstery for ultimate comfort." },
      { id: "tv", longitude: -1.5, latitude: 0.1, label: "Entertainment", description: "65-inch OLED smart TV with premium sound system." },
      { id: "to-suite", longitude: 3.14, latitude: 0, label: "Suite View", description: "Continue to the suite", linkedRoom: "suite" },
      { id: "to-bedroom", longitude: -3.14, latitude: 0, label: "Bedroom", description: "Return to master bedroom", linkedRoom: "bedroom" },
    ],
  },
  {
    id: "suite",
    name: "Presidential Suite",
    panorama: suiteDining,
    thumbnail: suiteDining,
    markers: [
      { id: "balcony", longitude: 0, latitude: 0.3, label: "Private Balcony", description: "Exclusive balcony with stunning panoramic views." },
      { id: "dining", longitude: 2, latitude: -0.1, label: "Dining Area", description: "Elegant private dining space for intimate gatherings." },
      { id: "to-living", longitude: 3.14, latitude: 0, label: "Living Room", description: "Return to living room", linkedRoom: "living" },
    ],
  },
];

interface PanoramaViewerProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: string;
}

export const PanoramaViewer = ({ isOpen, onClose, initialRoom = "bedroom" }: PanoramaViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);
  const [currentRoom, setCurrentRoom] = useState<PanoramaRoom>(
    panoramaRooms.find(r => r.id === initialRoom) || panoramaRooms[0]
  );
  const [activeMarker, setActiveMarker] = useState<Marker | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigateToRoom = (roomId: string) => {
    const room = panoramaRooms.find(r => r.id === roomId);
    if (room) {
      setCurrentRoom(room);
      setActiveMarker(null);
    }
  };

  const currentIndex = panoramaRooms.findIndex(r => r.id === currentRoom.id);
  const prevRoom = panoramaRooms[(currentIndex - 1 + panoramaRooms.length) % panoramaRooms.length];
  const nextRoom = panoramaRooms[(currentIndex + 1) % panoramaRooms.length];

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    // Destroy existing viewer
    if (viewerRef.current) {
      viewerRef.current.destroy();
      viewerRef.current = null;
    }

    setIsLoading(true);

    // Create new viewer
    const viewer = new Viewer({
      container: containerRef.current,
      panorama: currentRoom.panorama,
      defaultYaw: 0,
      defaultPitch: 0,
      navbar: false,
      loadingImg: undefined,
      plugins: [
        [MarkersPlugin, {
          markers: currentRoom.markers.map(marker => ({
            id: marker.id,
            position: { yaw: marker.longitude, pitch: marker.latitude },
            html: `<div class="panorama-marker ${marker.linkedRoom ? 'nav-marker' : 'info-marker'}">
              <div class="marker-pulse"></div>
              <div class="marker-icon">${marker.linkedRoom ? '→' : 'i'}</div>
            </div>`,
            anchor: "center center",
            tooltip: marker.label,
            data: marker,
          })),
        }],
      ],
    });

    viewer.addEventListener("ready", () => {
      setIsLoading(false);
    });

    const markersPlugin = viewer.getPlugin<MarkersPlugin>(MarkersPlugin);
    
    markersPlugin?.addEventListener("select-marker", ({ marker }) => {
      const markerData = marker.data as Marker;
      if (markerData.linkedRoom) {
        navigateToRoom(markerData.linkedRoom);
      } else {
        setActiveMarker(markerData);
      }
    });

    viewerRef.current = viewer;

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [isOpen, currentRoom]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") navigateToRoom(prevRoom.id);
      if (e.key === "ArrowRight") navigateToRoom(nextRoom.id);
    };
    
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, prevRoom, nextRoom, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-charcoal"
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 py-4 flex items-center justify-between bg-gradient-to-b from-charcoal/90 to-transparent">
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
              360° Panorama
            </span>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-cream hover:text-gold hover:bg-gold/10"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Panorama Container */}
        <div 
          ref={containerRef} 
          className="w-full h-full"
        />

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-charcoal z-10">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin mb-4" />
              <p className="text-cream/70">Loading panorama...</p>
            </div>
          </div>
        )}

        {/* Marker Detail Panel */}
        <AnimatePresence>
          {activeMarker && !activeMarker.linkedRoom && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-80 p-6 bg-background/95 backdrop-blur-xl rounded-2xl shadow-luxury z-30"
            >
              <button
                onClick={() => setActiveMarker(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
              <MapPin className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-xl font-display text-foreground mb-2">
                {activeMarker.label}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activeMarker.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Room Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 bg-background/90 backdrop-blur-xl rounded-full shadow-elegant z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigateToRoom(prevRoom.id)}
            className="text-foreground hover:text-gold"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            {panoramaRooms.map((room) => (
              <button
                key={room.id}
                onClick={() => navigateToRoom(room.id)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentRoom.id === room.id
                    ? "bg-gold w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigateToRoom(nextRoom.id)}
            className="text-foreground hover:text-gold"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Room Thumbnails */}
        <div className="absolute bottom-24 left-6 p-4 bg-background/90 backdrop-blur-xl rounded-2xl shadow-elegant z-20">
          <p className="text-sm text-muted-foreground mb-3">Rooms</p>
          <div className="flex gap-2">
            {panoramaRooms.map((room) => (
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
                  src={room.thumbnail}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-charcoal/40 flex items-end p-1">
                  <span className="text-[10px] text-cream truncate">{room.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-6 right-6 text-xs text-cream/50 z-20">
          <p>Click and drag to look around • Click markers for details</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PanoramaViewer;
