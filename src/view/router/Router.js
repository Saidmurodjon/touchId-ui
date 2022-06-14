import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Bajaruvchi from '../bajaruvchilar/Bajaruvchilar'
import BajaruvchiQoshish from '../bajaruvchilar/BajaruvchiQoshish'
import Bolim from '../bolimlar/Bolimlar'
import BolimQoshish from '../bolimlar/BolimlarQoshish'
import Buyurtmalar from '../buyurtmalar/Buyurtmalar'
import BuyurtmalarQoshish from '../buyurtmalar/BuyurtmaQoshish'
import Hisobot from '../hisobot/Hisobot'
import Ishlar from '../ishlarroyhati/IshlarRoyhati'
import IshlarKategoriya from '../ishlarroyhati/IshKategoriyaQoshish'
import IshlarKategoriyaUpdate from '../ishlarroyhati/IshKategoriyaUpdate'
import Lavozim from '../lavozimlar/Lavozimlar'
import LavozimQoshish from '../lavozimlar/LavozimQoshish'
import QurilmaToifa from '../qurilmalar/QurilmaToifa'
import QurilmaQoshish from '../qurilmalar/QurilmaQoshish'
import QurilmaKategoriya from '../qurilmalar/QurilmaKategoriya'
import Statistika from '../statistika/Statistika'
import Tashkilot from '../tashkilotlar/Tashkilotlar'
import TashkilotQoshish from '../tashkilotlar/TashkilotQoshish'
import Xona from '../xonalar/Xonalar'
import XonaQoshish from '../xonalar/Xonalar'
import XonaUpdate from '../xonalar/Xonalar'


function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bajaruvchi" element={<Bajaruvchi />} />
        <Route path="/bajaruvchiqoshish" element={<BajaruvchiQoshish />} />
        <Route path="/bolim" element={<Bolim />} />
        <Route path="/bolimqoshish" element={<BolimQoshish />} />
        <Route path="/buyurtma" element={<Buyurtmalar />} />
        <Route path="/buyurtmaqoshish" element={<BuyurtmalarQoshish />} />
        <Route path="/hisobot" element={<Hisobot />} />
        <Route path="/ishlar" element={<Ishlar />} />
        <Route path="/ishkategoriya" element={<IshlarKategoriya />} />
        <Route path="/ishyangilash/:id" element={<IshlarKategoriyaUpdate />} />
        <Route path="/lavozim" element={<Lavozim />} />
        <Route path="/lavozimqoshish" element={<LavozimQoshish />} />
        <Route path="/qurilmatoifa" element={<QurilmaToifa />} />
        <Route path="/qurilmakategoriya" element={<QurilmaKategoriya />} />
        <Route path="/qurilmaqoshish" element={<QurilmaQoshish />} />
        <Route path="/statistika" element={<Statistika />} />
        <Route path="/tashkilot" element={<Tashkilot />} />
        <Route path="/tashkilotqoshish" element={<TashkilotQoshish />} />
        <Route path="/kabinet" element={<Xona />} />
        <Route path="/kabinetqoshish" element={<XonaQoshish />} />
        <Route path="/kabinetyangilash" element={<XonaUpdate />} />
      </Routes>
    </>
  );
}
export default Router;
