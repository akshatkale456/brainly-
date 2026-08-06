import { useGLTF, Center } from '@react-three/drei'

// This component loads your 0.glb file
export function MyIcon() {
  // Notice the path is exactly how it looks in your public folder
  const { scene } = useGLTF('/0.glb') 

  return (
    <Center>
      <primitive object={scene} rotation={[0, -Math.PI / 2, 0]} scale={1} position={[0, 0, -89]} />
    </Center>
  )
}