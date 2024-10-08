import banner3 from "../assets/images/banner3.jpg";

export default function GoogleAccount() {
  return (
    <div className="relative h-screen w-full">
      {/* Banner Image */}
      <img
        src={banner3}
        alt="banner1"
        className="h-screen w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay2"></div>

      {/* Centered Box */}
      <div className="bg-[#22272BB0] h-2/4 w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl text-center text-white flex items-center justify-center">
        <div>
          <h2 className="text-2xl">
            YouTube動画を再生するURLリンクを入力してください。
          </h2>
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5E33D7] via-[#F216C2] to-[#F216C2] custom-stoke my-20">
            Google Account
          </h3>
          <input
            type="text"
            className="bg-transparent border-b w-full outline-none px-5 py-3 text-sm"
          />
        </div>
      </div>
    </div>
  );
}
