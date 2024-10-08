import banner4 from "../assets/images/banner4.jpg";
import logo2 from "../assets/images/logo2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function WebsiteSelection() {
  const navigate = useNavigate();

  const websiteHandler = (e) => {
    switch (e.target.value) {
      case "楽天市場、 楽天ブックス、 楽天ビック":
        navigate("/rakuten");
        break;
      case "Yahoo!ショッピング":
        navigate("/yahoo");
        break;
      case "LOHACO":
        navigate("/lohaco");
        break;

      default:
        break;
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* Banner Image */}
      <img
        src={banner4}
        alt="banner1"
        className="h-screen w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Box */}
      <div className="bg-[#22272BB0] h-2/4 w-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl text-center text-white flex items-center justify-center">
        <div className="flex items-center">
          <div className="w-1/2 pr-10">
            <Link to={"/"}>
              <img src={logo2} alt="logo2" />
            </Link>
          </div>
          <div className="w-1/2 pl-10 border-l-2 py-20 border-gray-400">
            <h2 className="text-3xl mb-20 font-semibold">Webサイト選択</h2>
            <select
              name=""
              id=""
              className="bg-[#1D2221] rounded-xl p-3 box-content"
              onChange={websiteHandler}
            >
              <option value="">Select website</option>
              <option value="楽天市場、 楽天ブックス、 楽天ビック">
                楽天市場、 楽天ブックス、 楽天ビック
              </option>
              <option value="Yahoo!ショッピング">Yahoo!ショッピング</option>
              <option value="LOHACO">LOHACO</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
