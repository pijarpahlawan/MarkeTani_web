
import style from '../assets/css/Home.module.css'
import { FaCartArrowDown } from "react-icons/fa";
import Card from '../components/Card';
export default function Home() {
  return (<main>
    <div className={style.category}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      
    </div>
    
</main>); 
  
}
