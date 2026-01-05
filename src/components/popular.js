import pop1 from "../asset2/images/Popular image1.jpg";
import pop2 from "../asset2/images/Popular image2.jpg";
import pop3 from "../asset2/images/Popular image3.png";
import pop4 from "../asset2/images/Popular image4.jpg";

function Popular() {
    return(
        <div id="popular">
        <h3>Most popular</h3>
        <p>Pick the Best fit</p>
        <div id="popular__container">
            <div class="mostpopular">
                <img src= {pop1} alt="Popularimg1"/>
                <h4>Python Data Visualisation Masterclass</h4>
                <p>col steels</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
             </div>
                <div class="mostpopular">
                <img src= {pop2} alt="Popularimg2"/>
                <h4>Web Development bootcamp</h4>
                <p>col steels</p>
                <p>4.2⭐⭐⭐⭐</p>
                <p>799 <del>1999</del></p>

            </div>
               <div class="mostpopular">
                <img src= {pop3} alt="Popularimg3"/>
                <h4>Master UI/UX Designer</h4>
                <p>col steels</p>
                <p>4.1⭐⭐⭐⭐</p>
                <p>699 <del>2499</del></p>

            </div>
               <div class="mostpopular">
                <img src= {pop4} alt="Popularimg4"/>
                <h4>Python Data Visualisation Masterclass</h4>
                <p>col steels</p>
                <p>3.8⭐⭐⭐</p>
                <p>499 <del>1499</del></p>

            </div>

        </div>
      </div>
    )
}
export default Popular