const Box = () => {
  return (
    <mesh>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
};

export default Box;
