import vector from "../../assets/vector.png";

export default function Banner({ progress, resolved }) {
  return (
    <div className="w-10/12 mx-auto flex flex-col md:flex-row gap-6 mt-10 mb-6">
      
      {/* In Progress */}
      <div
        className="flex-1 rounded-2xl flex flex-col items-center justify-center text-white h-[250px] relative overflow-hidden"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#422AD5",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <p className="text-sm md:text-2xl z-10">In-Progress</p>
        <span className="text-3xl md:text-6xl font-semibold z-10">
          {progress.length}
        </span>
      </div>

      {/* Resolved */}
      <div
        className="flex-1 rounded-2xl flex flex-col items-center justify-center text-white h-[250px] relative overflow-hidden"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#54CF68",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <p className="text-sm md:text-2xl z-10">Resolved</p>
        <span className="text-3xl md:text-6xl font-semibold z-10">
          {resolved.length}
        </span>
      </div>
    </div>
  );
};