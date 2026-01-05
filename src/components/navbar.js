function Navbar() {
    return(
        <div id="navbar">
        <div id="navbar__s1">
            <div id="navbar__s1__title">Udemy</div>
        </div>
        <div id="navbar__s2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search anything Tech,Books and etc.....,,"/>
           
        </div>
        <div id="navbar__s3">
          <p>Courses</p>
           <div id="mylearning">
                <p>Mylearning</p>
                <div id="mylearning__popup">
                    <p>You did not purchase anything yet!!</p>
                </div>
            </div>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-person"></i>
            <div id="menubar">
            <i class="fa-solid fa-bars"></i> 
        </div>   
        

        </div>

     </div>
    )
}
export default Navbar