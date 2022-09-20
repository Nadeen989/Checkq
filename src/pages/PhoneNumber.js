
import React from 'react'

const PhoneNumber = ({PhoneNumberadrees,phoneNumberspam}) => {
 




console.log(PhoneNumberadrees);
console.log(phoneNumberspam);



return(
    <>
    <div className="container  mt-5">
        <div class="row text-center">
            <h1>Enter the sender PhoneNumber  </h1>

        </div>
        <div class="row text-conter ">

        <div class="input-group w-50 mx-auto mt-3">
  <input type="text" class="form-control "/>
  <button class="btn btn-secondary" type="button">Check</button>
</div>
            </div>

            <div class="row text-center">
                <p> the result :</p>
                <hr/>
                <p> the Phoneadrees of it is : {PhoneNumberadrees}</p>
                <br/>
                <p>{phoneNumberspam}</p>

            </div>
</div >
</>
);


}

export default PhoneNumber;
