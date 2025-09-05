import dive from "../assets/divder.png";

const WaveDivider = () => {
  return (
    <div className=" mt-[-400px] h-[150px] py-0 ">
      <img
        src={dive}
        alt="Wave Divider"
        className="w-full object-cover opacity-40"
      />
    </div>
  );
};

export default WaveDivider;
