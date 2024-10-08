import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";
import Shopping from "./pages/Shopping";
import GoogleAccount from "./pages/GoogleAccount";
import MarketTable from "./pages/MarketTable";
import ShoppingTable from "./pages/ShoppingTable";
import LohacoTable from "./pages/LohacoTable";
import CreditCardTable from "./pages/CreditCardTable";
import ProxyTable from "./pages/ProxyTable";
import WebsiteSelection from "./pages/WebsiteSelection";
import Rakuten from "./pages/Rakuten";
import Yahoo from "./pages/Yahoo";
import Lohaco from "./pages/Lohaco";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="サイト毎の設定/楽天市場、楽天ブックス、楽天ビック"
            element={<Market />}
          />
          <Route
            path="サイト毎の設定/Yahoo!ショッピング、LOHACO"
            element={<Shopping />}
          />
          <Route
            path="サイト毎の設定/GoogleAccount"
            element={<GoogleAccount />}
          />

          <Route
            path="アカウント一覧/楽天市場、楽天ブックス、楽天ビック"
            element={<MarketTable />}
          />
          <Route
            path="アカウント一覧/Yahoo!ショッピング"
            element={<ShoppingTable />}
          />
          <Route path="アカウント一覧/LOHACO" element={<LohacoTable />} />

          <Route path="クレジットカード一覧" element={<CreditCardTable />} />
          <Route path="Proxy一覧" element={<ProxyTable />} />
        </Route>
        <Route path="Webサイト選択" element={<WebsiteSelection />} />
        <Route path="rakuten" element={<Rakuten />} />
        <Route path="yahoo" element={<Yahoo />} />
        <Route path="lohaco" element={<Lohaco />} />
      </Routes>
    </Router>
  );
}

export default App;
