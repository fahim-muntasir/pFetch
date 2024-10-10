import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { RiRefreshFill } from "react-icons/ri";
import websiteImg from "../assets/images/website.jpg";
import Setting from "../components/Shopping/Setting";

export default function Yahoo() {
  const [numberOfRq, setNumberOfRq] = useState(5);
  const [numberOfRqLabel, setNumberOfRqLabel] = useState("要求回数");
  const [rqInterval, setRqInterval] = useState(30);

  const monitoringHandler = (e) => {
    switch (e.target.value) {
      case "時限商品のため監視しない":
        setNumberOfRq(5);
        setNumberOfRqLabel("要求回数");
        break;
      case "商品ページ監視から始める":
        setNumberOfRq(1);
        setNumberOfRqLabel("持続時間（分)");
        break;
      case "カート挿入コマンドから始める":
        setNumberOfRq(1);
        setNumberOfRqLabel("要求回数");
        break;

      default:
        break;
    }
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
              <option value="" selected>Yahoo!ショッピング</option>
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

        <Setting
          monitoringHandler={monitoringHandler}
          numberOfRq={numberOfRq}
          numberOfRqLabel={numberOfRqLabel}
          rqInterval={rqInterval}
          setRqInterval={setRqInterval}
          setNumberOfRq={setNumberOfRq}
        />
      </div>
    </>
  );
}
