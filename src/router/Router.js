import { Route, Routes } from "react-router-dom";
// import Home from "../view/home/Home";
import Bajaruvchi from "../view/bajaruvchilar/Bajaruvchilar";
import BajaruvchiQoshish from "../view/bajaruvchilar/BajaruvchiQoshish";
import BajaruvchiYangilash from "../view/bajaruvchilar/BajaruvchiYangilash";
import Bolim from "../view/bolimlar/Bolimlar";
import BolimQoshish from "../view/bolimlar/BolimlarQoshish";
import Buyurtmalar from "../view/buyurtmalar/Buyurtmalar";
import BuyurtmalarYangilash from "../view/buyurtmalar/BuyrtmachiYangilash";
import BuyurtmalarQoshish from "../view/buyurtmalar/BuyurtmaQoshish";
import Hisobot from "../view/hisobot/Hisobot";
import Ishlar from "../view/ishlarroyhati/IshlarRoyhati";
import IshlarKategoriya from "../view/ishlarroyhati/IshKategoriyaQoshish";
import IshlarKategoriyaUpdate from "../view/ishlarroyhati/IshKategoriyaUpdate";
import Lavozim from "../view/lavozimlar/Lavozimlar";
import LavozimUpdate from "../view/lavozimlar/LavozimUpdate";
import LavozimQoshish from "../view/lavozimlar/LavozimQoshish";
import QurilmaToifa from "../view/qurilmalar/QurilmaToifa";
import QurilmaQoshish from "../view/qurilmalar/QurilmaQoshish";
import AddDevice from "../view/qurilmalar/AddDevice";
import Tashkilot from "../view/tashkilotlar/Tashkilotlar";
import TashkilotQoshish from "../view/tashkilotlar/TashkilotQoshish";
import Xona from "../view/xonalar/Xonalar";
import XonaQoshish from "../view/xonalar/XonaQoshish";
import XonaUpdate from "../view/xonalar/XonaUpdate";
import BoshSahifa from "../view/boshsahifa/BoshSahifa";
import BolimlarEdit from "../view/bolimlar/BolimlarEdit";
import TashkilotUpdate from "../view/tashkilotlar/TashkilotUpdate";
import Login from "../view/login/Login";
import NotFound from "../components/notFound/NotFound";
import UpdateDevice from "../view/qurilmalar/UpdateDevice";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<BoshSahifa />} />
        <Route path="/bajaruvchi" element={<Bajaruvchi />} />
        <Route path="/bajaruvchiqoshish" element={<BajaruvchiQoshish />} />
        <Route path="/bajaruvchi/:id" element={<BajaruvchiYangilash />} />
        <Route path="/bolim" element={<Bolim />} />
        <Route path="/bolim/:id" element={<BolimlarEdit />} />
        <Route path="/bolimqoshish" element={<BolimQoshish />} />
        <Route path="/buyrtma" element={<Buyurtmalar />} />
        <Route path="/buyrtma/:id" element={<BuyurtmalarYangilash />} />
        <Route path="/buyrtmaqoshish" element={<BuyurtmalarQoshish />} />
        <Route path="/hisobot" element={<Hisobot />} />
        <Route path="/ishlar" element={<Ishlar />} />
        <Route path="/ishkategoriya" element={<IshlarKategoriya />} />
        <Route path="/ishlar/:id" element={<IshlarKategoriyaUpdate />} />
        <Route path="/lavozim" element={<Lavozim />} />
        <Route path="/lavozim/:id" element={<LavozimUpdate />} />
        <Route path="/lavozimqoshish" element={<LavozimQoshish />} />
        <Route path="/qurilmatoifa" element={<QurilmaToifa />} />
        <Route path="/qurilmakategoriya/:id" element={<AddDevice />} />
        <Route path="/qurilmayangilash/:id" element={<UpdateDevice />} />
        <Route path="/qurilmaqoshish" element={<QurilmaQoshish />} />
        <Route path="/tashkilot" element={<Tashkilot />} />
        <Route path="/tashkilotqoshish" element={<TashkilotQoshish />} />
        <Route path="/kabinet" element={<Xona />} />
        <Route path="/kabinetqoshish" element={<XonaQoshish />} />
        <Route path="/kabinetyangilash" element={<XonaUpdate />} />
        <Route path="/tashkilot/:id" element={<TashkilotUpdate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default Router;
