import Sidebaar from "@/dashcomponent/Sidebar";
import "@/assest/css/dash.css"

export default function({children}){
return(

<div>
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
<input type="checkbox" id="menu-toggle"  />
<div className="sidebar"><Sidebaar/></div>
<div className="main-content">{children}</div>
</div>


)



}