import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { RiRefreshFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import websiteImg from "../assets/images/website.jpg";

export default function Lohaco() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-[#101204] min-h-screen">
        <div className="bg-[#22272B] py-2">
          <div className="flex items-center gap-20 text-white container m-auto">
            <h2 className="text-xl">Webサイト選択</h2>
            <select
              name=""
              id=""
              className="bg-[#1D2221] rounded-xl p-3 box-content"
            >
              <option value="">楽天市場、 楽天ブックス、 楽天ビック</option>
              <option value="">Yahoo!ショッピング</option>
              <option value="">LOHACO</option>
            </select>
          </div>
        </div>
        <div className="flex container m-auto rounded-full bg-[#22272B] px-5 py-2 mt-1 items-center gap-5 text-white">
          <div>
            <BsArrowLeftCircleFill className="text-3xl cursor-pointer" />
          </div>
          <div>
            <BsArrowRightCircleFill className="text-3xl cursor-pointer" />
          </div>
          <div>
            <RiRefreshFill className="text-4xl cursor-pointer" />
          </div>
          <div className="w-full">
            <input
              type="text"
              className="bg-[#101204] rounded-full px-5 py-3 w-full outline-none"
            />
          </div>
        </div>

        <div className="container m-auto">
          <img src={websiteImg} alt="websiteImg" className="w-full" />
        </div>

        <div className="bg-[#22272B] shadow-lg py-6 px-20 space-y-4 absolute bottom-5 right-5 left-5 rounded-3xl text-white">
          <div className="flex w-2/5 m-auto justify-between gap-5">
            <span className="text-[#BBBBBB] w-20">URL指定</span>
            <div className="border-b w-full">
              <input
                type="text"
                className="p-1 bg-[#101204] rounded-lg outline-none w-full"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-wrap gap-8">
              <div className="flex gap-3 items-center">
                <span className="text-[#BBBBBB]">アカウント</span>
                <select
                  name=""
                  id=""
                  className="p-1 bg-[#101204] rounded-lg outline-none"
                >
                  <option value="">1: sample@sample.com</option>
                </select>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#BBBBBB]">P.G.</span>
                <select
                  name=""
                  id=""
                  className="p-1 bg-[#101204] rounded-lg outline-none"
                >
                  <option value="">Proxyなし</option>
                </select>
              </div>
              <div className="flex gap-3 items-center">
                <input type="checkbox" />
                <span className="text-[#BBBBBB]">串ローテ</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#BBBBBB]">発売日時</span>
                <input
                  type="text"
                  className="p-1 px-2 bg-[#101204] rounded-lg outline-none"
                />
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#BBBBBB]">要求回数</span>
                <input
                  type="text"
                  className="p-1 px-2 bg-[#101204] rounded-lg outline-none w-20"
                />
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#BBBBBB]">要求間隔</span>
                <input
                  type="text"
                  className="p-1 px-2 bg-[#101204] rounded-lg outline-none w-20"
                />
              </div>
              <div>
                <span className="text-white bg-[#BC21B7] py-1 px-2 rounded-xl">
                  プルダウンメニュー読込
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#BBBBBB]">サイズ・色</span>
                <select
                  name=""
                  id=""
                  className="p-1 bg-[#101204] rounded-lg outline-none"
                >
                  <option value="">Proxyなし</option>
                </select>
              </div>
              <div className="flex gap-3 items-center">
                <input type="checkbox" />
                <span className="text-[#BBBBBB]">ランダム</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#BBBBBB]">検索ワード</span>
                <input
                  type="text"
                  className="p-1 px-2 bg-[#101204] rounded-lg outline-none"
                />
              </div>
              <div className="flex gap-3 items-center">
                <input type="checkbox" />
                <span className="text-[#BBBBBB]">Boost</span>
              </div>
              <div className="flex gap-3 items-center">
                <input type="checkbox" />
                <span className="text-[#BBBBBB]">事前ログイン</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#BBBBBB]">E.S.</span>
                <select
                  name=""
                  id=""
                  className="p-1 bg-[#101204] rounded-lg outline-none"
                >
                  <option value="">0 : なし</option>
                </select>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#BBBBBB]">アカウント</span>
                <select
                  name=""
                  id=""
                  className="p-1 bg-[#101204] rounded-lg outline-none"
                >
                  <option value="">時限商品のため監視しない</option>
                  <option value="">商品ページ監視から始める</option>
                  <option value="">カート挿入コマンドから始める</option>
                </select>
              </div>
              <div className="flex gap-3 items-center">
                <input type="checkbox" />
                <span className="text-[#BBBBBB]">お酒</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#BBBBBB]">数量.</span>
                <select
                  name=""
                  id=""
                  className="p-1 bg-[#101204] rounded-lg outline-none"
                >
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>
              </div>
              <div className="flex gap-3 items-center">
                <input type="checkbox" />
                <span className="text-[#BBBBBB]">ポイント優先使用</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <button
                className="bg-[#36C77054] text-[#18EE6D] hover:bg-[#36C770] hover:text-white text-xl w-52 rounded-lg shadow-lg block h-12"
                onClick={navigateHandler}
              >
                OK
              </button>
              <button
                className="bg-[#EA2E4554] text-[#ED1B34] hover:bg-[#EA2E45] hover:text-white text-xl w-52 rounded-lg shadow-lg block h-12"
                onClick={navigateHandler}
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
