import banner2 from "../assets/images/banner2.jpg";

export default function Shopping() {
  return (
    <div className="relative h-screen w-full">
      {/* Banner Image */}
      <img
        src={banner2}
        alt="banner1"
        className="h-screen w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Centered Box */}
      <div className="bg-[#22272BB0] w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl text-center text-white ">
        <div className="text-xl w-3/4 m-auto text-left my-12">
          <h2 className="mb-3">
            事前にログインから購入までの流れを作っておくことで、
            購入手続きを高速化するための準備を行います。購入したい商品と同じショップの商品を最大50個まで登録できます。
          </h2>
          <h3 className="bg-[#EB2E45BD] inline-block">
            ※編集時の入力確定はEnterキーを押してください。
          </h3>
        </div>
        <div className="px-10 w-full mb-12">
          <table className="w-full">
            <tbody className="text-xl text-left">
              <tr className="mb-4">
                {" "}
                {/* Use mb-4 for margin bottom */}
                <td className="text-[#BBBBBB] pb-4">
                  Yahoo!: 3万円以下の商品URL
                </td>{" "}
                {/* Add padding bottom */}
                <td className="pb-4">
                  <select name="" id="" className="bg-[#1D2221] rounded-xl p-3 w-full">
                    <option value="" selected>
                      10:
                      https://store.shopping.yahoo.co.jp/hit-market/01013085.html
                    </option>
                  </select>
                </td>
              </tr>
              <tr className="mb-4">
                <td className="text-[#BBBBBB] pb-4">
                  Yahoo!: 3万円以上の商品UR
                </td>
                <td className="pb-4">
                  <select name="" id="" className="bg-[#1D2221] rounded-xl p-3 w-full">
                    <option value="" selected>
                      10:
                      https://store.shopping.yahoo.co.jp/hit-market/01013085.html
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="text-[#BBBBBB]">LOHACO: 商品URL</td>
                <td>
                  <select name="" id="" className="bg-[#1D2221] rounded-xl p-3 w-full">
                    <option value="">
                      10:
                      https://store.shopping.yahoo.co.jp/hit-market/01013085.html
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
