import React from "react";
class Cards extends React.Component{
    render(){
return(
    <>
    
  <div >
  
    <div className="row">

<div className="col-md-4">
 

    <div className="profile-card-5">
        <img  src="assets/assets/img/IMGE.png" />

        <div className="profile-name" >EMAIL</div>

        <div className="profile-overview">
            <div className="profile-overview">
                <div className="row text-center p-3">
                    <div className="col-xs-4">
                        <h4>Click here to check if the sender of email is spam before replying to it</h4>
                        <a href="Email" className="btn btn-success">For Check</a>


                    </div>


                </div>
            </div>
        </div>
    </div>
</div>








<div className="col-md-4">
 

    <div className="profile-card-5">
    <img src="assets/assets/img/Num.png" />

    <div className="profile-name">PHONE NUMBER</div>

        <div className="profile-overview">
            <div className="profile-overview">
                <div className="row text-center p-3">
                    <div className="col-xs-4">
                    <h4>Click here to check if phone number is previously reported before answearing them</h4>
                    <a href="PhoneNumber" className="btn btn-success">For Check</a>

                    </div>


                </div>
            </div>
        </div>
    </div>
</div>




<div className="col-md-4">
 

    <div className="profile-card-5">
    <img src="assets/assets/img/URL.png" />

    <div className="profile-name">URL</div>

        <div className="profile-overview">
            <div className="profile-overview">
                <div className="row text-center p-3">
                    <div className="col-xs-4">
                    <h4>Click here to check if the URL is spam before you click on it    </h4>
                    <a href="Url" className="btn btn-success">For Check</a>

                    </div>


                </div>
            </div>
        </div>
    </div>
</div>






















    </div>
</div>

</>
);

}
}

export default Cards;