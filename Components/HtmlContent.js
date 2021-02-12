import { Section } from '../utils/sections';
import { useTexture, useGLTF } from 'drei';

const Model = () => {
  const gltf = useGLTF('/scene.gltf', true);
  //   const gltf = useLoader(GLTFLoader, "/scene.gltf");
  console.log(gltf);
  return <primitive object={gltf.scene} dispose={null} scale={[100, 100, 100]} />;
};

const HTMLContent = () => {
  const [texture1] = useTexture(['/textures/12.jpg', '/textures/Pelle_baseColor.jpeg']);
  return (
    <Section factor={1.5} offset={1}>
      <group position={[10, 200, 0]}>
        <mesh position={[0, 20, 0]} material={texture1}>
          <Model>
            <meshMatcapMaterial matcap={texture1} attach="material" />
          </Model>
        </mesh>
        {/* <Html fullscreen>
          <div>
            <h1>Hello Im html element inside the canvas</h1>
          </div>
        </Html> */}
      </group>
    </Section>
  );
};

export default HTMLContent;
