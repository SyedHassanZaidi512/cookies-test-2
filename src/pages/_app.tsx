import "@/styles/globals.css";
import Cookies from 'js-cookie';


export default function App() {
  const handleClick = () => {
    console.log(">>>handleClick");
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);

    Cookies.set('idToken',"abc", {
      sameSite:  'none',
      secure: true,
      expires: expiryDate
    });

    window.location.href = "http://localhost:3003"

  }
  return <>
    <div onClick={handleClick} style={{width:'300px', height:'200px'}}>
      click here to navigate
    </div>
  </>;
}
