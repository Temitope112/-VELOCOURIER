
"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";
import * as THREE from "three";

/* ---------------------------------------------
   Shared types
--------------------------------------------- */

type Vector3Tuple = [number, number, number];
type GroupRef = RefObject<THREE.Group | null>;

interface RodProps {
  start: Vector3Tuple;
  end: Vector3Tuple;
  radius: number;
  color: string;
}

interface WheelProps {
  position: Vector3Tuple;
}

/* ---------------------------------------------
   Reusable 3D rod
--------------------------------------------- */

function Rod({ start, end, radius, color }: RodProps) {
  const geometry = useMemo(() => {
    const from = new THREE.Vector3(...start);
    const to = new THREE.Vector3(...end);
    const direction = new THREE.Vector3().subVectors(to, from);

    const quaternion = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.clone().normalize(),
    );

    return {
      position: from.clone().add(to).multiplyScalar(0.5),
      quaternion,
      length: direction.length(),
    };
  }, [start, end]);

  return (
    <mesh
      position={geometry.position}
      quaternion={geometry.quaternion}
      castShadow
    >
      <cylinderGeometry args={[radius, radius, geometry.length, 12]} />
      <meshStandardMaterial
        color={color}
        metalness={0.55}
        roughness={0.35}
      />
    </mesh>
  );
}

/* ---------------------------------------------
   Animated motorcycle wheels
--------------------------------------------- */

function Wheel({ position }: WheelProps) {
  const wheelRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!wheelRef.current) return;
    wheelRef.current.rotation.z -= delta * 8;
  });

  return (
    <group position={position} rotation={[0, Math.PI / 2, 0]}>
      <group ref={wheelRef}>
        <mesh castShadow receiveShadow>
          <torusGeometry args={[0.38, 0.09, 16, 40]} />
          <meshStandardMaterial color="#15171B" roughness={0.8} />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.19, 0.19, 0.13, 24]} />
          <meshStandardMaterial
            color="#FF6B1A"
            metalness={0.65}
            roughness={0.3}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.075, 0.075, 0.15, 20]} />
          <meshStandardMaterial
            color="#B8C0CC"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      </group>
    </group>
  );
}

/* ---------------------------------------------
   Procedural motorcycle
--------------------------------------------- */

function Motorcycle() {
  return (
    <group rotation={[0, -0.25, 0]}>
      <Wheel position={[0, 0.48, -1.08]} />
      <Wheel position={[0, 0.48, 1.08]} />

      <Rod
        start={[0, 0.5, 1.08]}
        end={[0, 0.88, 0.12]}
        radius={0.055}
        color="#555B65"
      />

      <Rod
        start={[0, 0.5, -1.08]}
        end={[0, 0.88, 0.12]}
        radius={0.055}
        color="#555B65"
      />

      <Rod
        start={[0, 0.88, 0.12]}
        end={[0, 0.62, 0.82]}
        radius={0.06}
        color="#FF6B1A"
      />

      <Rod
        start={[0, 0.5, -1.08]}
        end={[0, 1.25, -0.5]}
        radius={0.045}
        color="#D1D5DB"
      />

      <Rod
        start={[0.055, 0.5, -1.08]}
        end={[0.055, 1.25, -0.5]}
        radius={0.025}
        color="#FF6B1A"
      />

      <mesh position={[0, 0.68, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[0.42, 0.42, 0.48]} />
        <meshStandardMaterial
          color="#30343C"
          metalness={0.7}
          roughness={0.38}
        />
      </mesh>

      <mesh
        position={[0, 1.02, -0.12]}
        rotation={[0.08, 0, 0]}
        castShadow
      >
        <capsuleGeometry args={[0.23, 0.35, 6, 12]} />
        <meshStandardMaterial
          color="#FF6B1A"
          metalness={0.35}
          roughness={0.28}
        />
      </mesh>

      <mesh
        position={[0, 1.03, 0.55]}
        rotation={[0.05, 0, 0]}
        castShadow
      >
        <boxGeometry args={[0.38, 0.12, 0.58]} />
        <meshStandardMaterial color="#17191F" roughness={0.7} />
      </mesh>

      <Rod
        start={[-0.38, 1.28, -0.48]}
        end={[0.38, 1.28, -0.48]}
        radius={0.035}
        color="#A6ADB8"
      />

      <mesh
        position={[0, 1.19, -0.53]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.13, 0.13, 0.08, 24]} />
        <meshStandardMaterial
          color="#FFF1CF"
          emissive="#FFB86B"
          emissiveIntensity={2}
          roughness={0.2}
        />
      </mesh>

      <pointLight
        position={[0, 1.18, -0.75]}
        color="#FFD6A5"
        intensity={4}
        distance={5}
        decay={2}
      />

      <mesh position={[0, 1.38, 0.82]} castShadow>
        <boxGeometry args={[0.68, 0.48, 0.56]} />
        <meshStandardMaterial
          color="#FF6B1A"
          roughness={0.4}
          metalness={0.15}
        />
      </mesh>

      <mesh position={[0, 1.63, 0.82]}>
        <boxGeometry args={[0.69, 0.07, 0.57]} />
        <meshStandardMaterial color="#FF8A45" roughness={0.4} />
      </mesh>

      <mesh position={[0, 1.4, 0.535]}>
        <boxGeometry args={[0.5, 0.045, 0.012]} />
        <meshStandardMaterial
          color="#FFF1CF"
          emissive="#FF6B1A"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

/* ---------------------------------------------
   Imported delivery rider
--------------------------------------------- */

function RiderAsset() {
  const { scene } = useGLTF("/models/delivery-rider.glb");

  const model = useMemo(() => {
    const cloned = clone(scene);

    cloned.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }

      // Hide the handheld prop while keeping the backpack.
      if (child.name.toLowerCase().includes("prop")) {
        child.visible = false;
      }
    });

    
    // Inspect whether the rider model has finger bones.
 
  
   
    cloned.traverse((child) => {
      if (!(child instanceof THREE.SkinnedMesh)) return;

      if (child.name === "food-delivery-riderbody") {
        console.log("[Rider Body Rig]", {
          bones: child.skeleton.bones.map((bone, index) => ({
            index,
            name: bone.name,
          })),
          attributes: Object.keys(child.geometry.attributes),
          hasSkinIndex: Boolean(child.geometry.attributes.skinIndex),
          hasSkinWeight: Boolean(child.geometry.attributes.skinWeight),
        });
      }
    });





    const rotateBone = (
      name: string,
      x: number,
      y: number,
      z: number,
    ) => {
      const bone = cloned.getObjectByName(name);

      if (bone instanceof THREE.Bone) {
        bone.rotation.x += x;
        bone.rotation.y += y;
        bone.rotation.z += z;
      } else {
        console.warn(`[RiderAsset] Bone not found: ${name}`);
      }
    };

    // Lean the upper body slightly toward the handlebars.
    rotateBone("mixamorigSpine", -0.06, 0, 0);
    rotateBone("mixamorigSpine1", -0.10, 0, 0);
    rotateBone("mixamorigSpine2", -0.06, 0, 0);

    // Position the arms toward the handlebars.
    rotateBone("mixamorigLeftShoulder", 0, 0, -0.18);
    rotateBone("mixamorigLeftArm", 0.05, -0.90, -0.42);
    rotateBone("mixamorigLeftForeArm", 0.90, 0, -0.10);
    rotateBone("mixamorigLeftHand", 0, 0, -0.05);

    rotateBone("mixamorigRightShoulder", 0, 0, 0.18);
    rotateBone("mixamorigRightArm", 0.05, 0.90, 0.42);
    rotateBone("mixamorigRightForeArm", 0.90, 0, 0.10);
    rotateBone("mixamorigRightHand", 0, 0, 0.05);

    // Slightly lower each hand in its parent bone's local space.
    const lowerHand = (name: string, amount: number) => {
      const bone = cloned.getObjectByName(name);

      if (bone instanceof THREE.Bone) {
        bone.position.y -= amount;
      }
    };

    lowerHand("mixamorigLeftHand", 0.04);
    lowerHand("mixamorigRightHand", 0.04);

    // Bring the thighs forward into a seated position.
    rotateBone("mixamorigLeftUpLeg", 0.95, 0, 0.08);
    rotateBone("mixamorigRightUpLeg", 0.95, 0, -0.08);

    // Bend the knees.
    rotateBone("mixamorigLeftLeg", -1.15, 0, 0);
    rotateBone("mixamorigRightLeg", -1.15, 0, 0);

    // Angle the feet toward the motorcycle footrests.
    rotateBone("mixamorigLeftFoot", 0.15, 0, 0);
    rotateBone("mixamorigRightFoot", 0.15, 0, 0);

    return cloned;
  }, [scene]);

  const placement = useMemo(() => {
    model.updateMatrixWorld(true);

    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());

    const scale = 1.65 / Math.max(size.y, 0.001);

    return {
      scale,
      position: [
        -center.x * scale,
        0.48 - bounds.min.y * scale,
        -center.z * scale,
      ] as Vector3Tuple,
    };
  }, [model]);

  return (
    <group rotation={[0, Math.PI - 0.25, 0]}>
      <primitive
        object={model}
        position={placement.position}
        scale={placement.scale}
      />
    </group>
  );
}




useGLTF.preload("/models/delivery-rider.glb");

/* ---------------------------------------------
   Road segment
--------------------------------------------- */

function RoadSegment() {
  return (
    <group>
      <mesh
        position={[0, 0.002, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[4.5, 40]} />
        <meshStandardMaterial
          color="#17191F"
          roughness={0.92}
          metalness={0.05}
        />
      </mesh>

      {Array.from({ length: 16 }, (_, index) => (
        <mesh
          key={index}
          position={[
            index % 2 === 0 ? -1.35 : 1.35,
            0.012,
            -17.5 + Math.floor(index / 2) * 5,
          ]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.055, 0.9]} />
          <meshBasicMaterial
            color="#E5E7EB"
            transparent
            opacity={0.65}
          />
        </mesh>
      ))}

      {[-2.08, 2.08].map((x) => (
        <mesh
          key={x}
          position={[x, 0.009, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.025, 39.5]} />
          <meshBasicMaterial
            color="#FF6B1A"
            transparent
            opacity={0.65}
          />
        </mesh>
      ))}
    </group>
  );
}

function RoadSegments({ riderRef }: { riderRef: GroupRef }) {
  const roadRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!roadRef.current || !riderRef.current) return;

    const riderZ = riderRef.current.position.z;

    for (const segment of roadRef.current.children) {
      if (segment.position.z > riderZ + 20) {
        segment.position.z -= 120;
      }
    }
  });

  return (
    <group ref={roadRef}>
      <group position={[0, 0, 0]}>
        <RoadSegment />
      </group>
      <group position={[0, 0, -40]}>
        <RoadSegment />
      </group>
      <group position={[0, 0, -80]}>
        <RoadSegment />
      </group>
    </group>
  );
}

/* ---------------------------------------------
   Moving urban environment
--------------------------------------------- */

function RoadsideEnvironment({ riderRef }: { riderRef: GroupRef }) {
  const environmentRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!environmentRef.current || !riderRef.current) return;

    const riderZ = riderRef.current.position.z;

    for (const row of environmentRef.current.children) {
      if (row.position.z > riderZ + 15) {
        row.position.z -= 40;
      }
    }
  });

  return (
    <group ref={environmentRef}>
      {Array.from({ length: 8 }, (_, index) => (
        <group key={index} position={[0, 0, -30 + index * 5]}>
          <mesh position={[-3.1, 1.5, 0]} castShadow>
            <cylinderGeometry args={[0.035, 0.06, 3, 8]} />
            <meshStandardMaterial
              color="#343943"
              metalness={0.6}
              roughness={0.4}
            />
          </mesh>

          <mesh position={[3.1, 1.5, 0]} castShadow>
            <cylinderGeometry args={[0.035, 0.06, 3, 8]} />
            <meshStandardMaterial
              color="#343943"
              metalness={0.6}
              roughness={0.4}
            />
          </mesh>

          <mesh position={[-3.1, 3.05, 0]}>
            <sphereGeometry args={[0.12, 12, 12]} />
            <meshBasicMaterial color="#FF6B1A" />
          </mesh>

          <mesh position={[3.1, 3.05, 0]}>
            <sphereGeometry args={[0.12, 12, 12]} />
            <meshBasicMaterial color="#FF6B1A" />
          </mesh>

          <mesh position={[-5.3, 1.7, 0]} castShadow>
            <boxGeometry args={[2.2, 3.4, 2.8]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? "#191D28" : "#20212A"}
              roughness={0.85}
            />
          </mesh>

          <mesh position={[5.3, 2.2, -0.5]} castShadow>
            <boxGeometry args={[2.5, 4.4, 3]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? "#20212A" : "#191D28"}
              roughness={0.85}
            />
          </mesh>

          {Array.from({ length: 3 }, (_, windowIndex) => (
            <mesh
              key={windowIndex}
              position={[-5.3, 1.5 + windowIndex * 0.65, 1.411]}
            >
              <planeGeometry args={[0.28, 0.35]} />
              <meshBasicMaterial
                color={windowIndex === 1 ? "#FF6B1A" : "#61708A"}
                transparent
                opacity={0.7}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

/* ---------------------------------------------
   Rider and motorcycle assembly
--------------------------------------------- */

function DeliveryModel({ riderRef }: { riderRef: GroupRef }) {
  return (
    <group ref={riderRef}>
      <mesh
        position={[0, 0.012, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.15, 1.85, 1]}
      >
        <circleGeometry args={[0.55, 32]} />
        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.42}
          depthWrite={false}
        />
      </mesh>

      <Motorcycle />
      <RiderAsset />
    </group>
  );
}

/* ---------------------------------------------
   Camera tracking and rider motion
--------------------------------------------- */

function CinematicWorld({ riderRef }: { riderRef: GroupRef }) {
  const lookTarget = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ camera, clock }, delta) => {
    const rider = riderRef.current;
    if (!rider) return;

    const time = clock.elapsedTime;

    // Keep movement independent of frame rate.
    rider.position.z -= 3.2 * delta;
    rider.position.y = Math.sin(time * 12) * 0.009;
    rider.rotation.y = Math.sin(time * 0.65) * 0.035;
    rider.rotation.z = Math.sin(time * 0.8) * 0.018;

    // Keep the camera at a consistent offset from the rider.
    camera.position.set(
      rider.position.x + 4.5,
      rider.position.y + 3.2,
      rider.position.z + 5.5,
    );

    lookTarget.set(
      rider.position.x,
      rider.position.y + 1.05,
      rider.position.z - 0.55,
    );

    camera.lookAt(lookTarget);
  });

  return (
    <>
      <RoadSegments riderRef={riderRef} />
      <RoadsideEnvironment riderRef={riderRef} />
      <DeliveryModel riderRef={riderRef} />
    </>
  );
}

/* ---------------------------------------------
   Ground follows the rider
--------------------------------------------- */

function FollowingGround({ riderRef }: { riderRef: GroupRef }) {
  const groundRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!groundRef.current || !riderRef.current) return;

    groundRef.current.position.z = riderRef.current.position.z - 30;
  });

  return (
    <mesh
      ref={groundRef}
      position={[0, -0.025, -30]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[200, 240]} />
      <meshStandardMaterial color="#090A0D" roughness={0.95} />
    </mesh>
  );
}

/* ---------------------------------------------
   Complete cinematic delivery scene
--------------------------------------------- */

export default function DeliveryScene() {
  const riderRef = useRef<THREE.Group>(null);

  useEffect(() => {
    console.log("[DeliveryScene] Mounted");
  }, []);

  return (
    <div className="h-[380px] w-full overflow-hidden rounded-2xl sm:h-[480px] lg:h-[620px]">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{
          position: [4.5, 3.2, 5.5],
          fov: 38,
          near: 0.1,
          far: 180,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#090A0D"]} />
        <fog attach="fog" args={["#090A0D", 16, 65]} />

        <ambientLight intensity={0.65} />
        <hemisphereLight args={["#DDE8FF", "#17111B", 1.2]} />

        <spotLight
          position={[-3, 5, 3]}
          angle={0.7}
          penumbra={0.8}
          intensity={65}
          distance={16}
          decay={2}
          color="#FF6B1A"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <directionalLight
          position={[3, 4, -4]}
          intensity={2}
          color="#668BFF"
        />

        <pointLight
          position={[-2, 2.5, 1]}
          intensity={8}
          distance={8}
          decay={2}
          color="#FF6B1A"
        />

        <CinematicWorld riderRef={riderRef} />
        <FollowingGround riderRef={riderRef} />
      </Canvas>
    </div>
  );
}
