import { motion } from "framer-motion";
import { 
  Play, 
  MessageSquare, 
  Pin as PushPinIcon, 
  CheckCircle, 
  Clock,
  Check,
  Circle,
  Send
} from "lucide-react";
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Bounds } from '@react-three/drei'
import React, { Suspense } from 'react'
import { MyIcon } from "./3d";

// Catch errors inside the 3D canvas so it doesn't break everything
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="red" />
        </mesh>
      );
    }
    return this.props.children;
  }
}

export function Base() {
  return (
    <div id="features" className="w-full bg-zinc-950 text-white py-24 md:py-32 px-6 md:px-16 lg:px-24 border-b border-zinc-900 relative">


      <div className="w-full h-[400px] md:h-[500px]">
        <Canvas orthographic camera={{ position: [0, 0, 5], zoom: 150 }}>
        {/* Basic lights to ensure the model is visible regardless of material */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Suspense is required because the 3D file takes a moment to load */}
        <Suspense fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        }>
          <CanvasErrorBoundary>
            {/* Environment gives it realistic studio reflections */}
            <Environment preset="city" />
            
            {/* Bounds automatically scales and centers the camera to fit whatever is inside it! */}
            <Bounds fit clip observe margin={1.2}>
              {/* Here is your 3D model! */}
              <MyIcon />
            </Bounds>
            
          </CanvasErrorBoundary>
        </Suspense>

        {/* 
          We changed this! 
          - enableZoom={false} stops zooming 
          - minPolarAngle / maxPolarAngle locks it perfectly straight up and down
          - autoRotate is removed so it stops spinning automatically
        */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={false} // This completely locks it! You cannot spin it to see the edges.
        />
        
      </Canvas>
      </div>
    </div>
  );
}
