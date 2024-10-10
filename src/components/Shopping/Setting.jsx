import { useNavigate } from "react-router-dom";

export default function Setting({
  numberOfRqLabel,
  numberOfRq,
  setNumberOfRq,
  rqInterval,
  setRqInterval,
  monitoringHandler,
}) {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <div className="bg-[#22272B] shadow-lg pt-6 pb-8 px-20 space-y-4 absolute bottom-5 right-5 left-5 rounded-3xl text-white">
      <div className="flex w-4/5 m-auto pb-2 justify-center gap-2">
        <span className="text-[#BBBBBB] w-20">URL指定</span>
        <div className="border-b  w-[678px]">
          <input
            type="text"
            className="p-1 bg-[#101204] rounded-lg outline-none w-[678px] h-[34px]"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-wrap gap-8">
          <div className="flex gap-4 items-center">
            <span className="text-[#BBBBBB]">アカウント</span>
            <select
              name=""
              id=""
              className="p-1 bg-[#101204] rounded-lg outline-none w-[227px] h-[30px]"
            >
              <option value="">1: sample@sample.com</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#BBBBBB]">P.G.</span>
            <select
              name=""
              id=""
              className="p-1 bg-[#101204] rounded-lg outline-none w-[162px] h-[30px]"
            >
              <option value="">Proxyなし</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <input
              id="select-all"
              type="checkbox"
              className="w-4 h-4 bg-transparent border-2 border-[#BBBBBB] rounded appearance-none cursor-pointer checked:bg-[#BC21B7] checked:border-[#BC21B7] focus:ring-2 focus:ring-[#BC21B7] relative 
        after:content-['✓'] after:absolute after:text-white after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100 after:pointer-events-none"
            />
            <span className="text-[#BBBBBB]">串ローテ</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#BBBBBB]">発売日時</span>
            <input
              type="text"
              className="p-1 px-2 bg-[#101204] rounded-lg outline-none w-[227px] h-[30px]"
            />
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#BBBBBB]">{numberOfRqLabel}</span>
            <input
              type="text"
              value={numberOfRq}
              onChange={(e) => setNumberOfRq(e.target.value)}
              className="p-1 px-2 bg-[#101204] rounded-lg outline-none w-[96px] h-[30px]"
            />
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#BBBBBB]">要求間隔</span>
            <input
              type="text"
              value={rqInterval}
              onChange={(e) => setRqInterval(e.target.value)}
              className="p-1 px-2 bg-[#101204] rounded-lg outline-none  w-[96px] h-[30px]"
            />
          </div>
          <div>
            <span className="text-white bg-[#BC21B7] py-[3px] px-[11px] rounded-lg shadow-lg">
              プルダウンメニュー読込
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#BBBBBB]">サイズ・色</span>
            <select
              name=""
              id=""
              className="p-1 bg-[#101204] rounded-lg outline-none w-[370px] h-[30px]"
            ></select>
          </div>
          <div className="flex gap-4 items-center">
            <input
              id="select-all"
              type="checkbox"
              className="w-4 h-4 bg-transparent border-2 border-[#BBBBBB] rounded appearance-none cursor-pointer checked:bg-[#BC21B7] checked:border-[#BC21B7] focus:ring-2 focus:ring-[#BC21B7] relative 
        after:content-['✓'] after:absolute after:text-white after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100 after:pointer-events-none"
            />
            <span className="text-[#BBBBBB]">ランダム</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#BBBBBB]">検索ワード</span>
            <input
              type="text"
              className="p-1 px-2 bg-[#101204] rounded-lg outline-none w-[227px] h-[30px]"
            />
          </div>
          <div className="flex gap-4 items-center">
            <input
              id="select-all"
              type="checkbox"
              checked
              className="w-4 h-4 bg-transparent border-2 border-[#BBBBBB] rounded appearance-none cursor-pointer checked:bg-[#BC21B7] checked:border-[#BC21B7] focus:ring-2 focus:ring-[#BC21B7] relative 
        after:content-['✓'] after:absolute after:text-white after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100 after:pointer-events-none"
            />
            <span className="text-[#BBBBBB]">Boost</span>
          </div>
          <div className="flex gap-4 items-center">
            <input
              id="select-all"
              type="checkbox"
              className="w-4 h-4 bg-transparent border-2 border-[#BBBBBB] rounded appearance-none cursor-pointer checked:bg-[#BC21B7] checked:border-[#BC21B7] focus:ring-2 focus:ring-[#BC21B7] relative 
        after:content-['✓'] after:absolute after:text-white after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100 after:pointer-events-none"
            />
            <span className="text-[#BBBBBB]">事前ログイン</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#BBBBBB]">監視種別.</span>
            <select
              name=""
              id=""
              className="p-1 bg-[#101204] rounded-lg outline-none w-[261px] h-[30px]"
              onChange={monitoringHandler}
            >
              <option value="時限商品のため監視しない">
                時限商品のため監視しない
              </option>
              <option value="商品ページ監視から始める">
                商品ページ監視から始める
              </option>
              <option value="カート挿入コマンドから始める">
                カート挿入コマンドから始める
              </option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#BBBBBB]">支払い方法.</span>
            <select
              name=""
              id=""
              className="p-1 bg-[#101204] rounded-lg outline-none w-[193px] h-[30px]"
            >
              <option value="">登録済みクレカ</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#BBBBBB]">数量.</span>
            <select
              name=""
              id=""
              className="p-1 bg-[#101204] rounded-lg outline-none w-[115px] h-[30px]"
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
        </div>
        <div className="flex flex-col gap-5 pt-5">
          <button
            className="bg-[#36C77054] text-[#18EE6D] hover:bg-[#36C770] hover:text-white text-xl w-52 rounded-lg shadow-lg block h-[43px]"
            onClick={navigateHandler}
          >
            OK
          </button>
          <button
            className="bg-[#EA2E4554] text-[#ED1B34] hover:bg-[#EA2E45] hover:text-white text-xl w-52 rounded-lg shadow-lg block h-[43px]"
            onClick={navigateHandler}
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
}
