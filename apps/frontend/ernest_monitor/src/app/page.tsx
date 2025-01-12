
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './home/Map';
import Table from './home/Table';
import SurvivalNews from './home/SurvivalNews';



export default function Home() {
  return (
    <div >
      <Map />
      <Table />
      <SurvivalNews />
    </div>
  );
}