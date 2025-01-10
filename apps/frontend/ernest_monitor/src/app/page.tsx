
// import ReportThreatForm from "./report/ReportThreatForm";
// import ModeratorPanel from "./ModeratorPanel";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './components/NavScroll';
import Footer from './components/Footer';
import Map from './components/Map';
import Table from './components/Table';
import SurvivalNews from './components/SurvivalNews';



export default function Home() {
  return (
    <div >
      <NavScroll />
      <Map />
      <Table />
      <SurvivalNews />
      <Footer />
    </div>
  );
}