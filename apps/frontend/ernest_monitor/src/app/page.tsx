
// import ReportThreatForm from "./report/ReportThreatForm";
// import ModeratorPanel from "./ModeratorPanel";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './shared_components/Navbar';
import Footer from './shared_components/Footer';
import Map from './components/Map';
import Table from './components/Table';
import SurvivalNews from './components/SurvivalNews';



export default function Home() {
  return (
    <div >
      <Map />
      <Table />
      <SurvivalNews />
    </div>
  );
}