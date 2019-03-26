// function addFavorite (product, clicked_id){
    // if(clicked_id.value == 'Favorite')
    // {
        // var utype = product.attributes.unit
        // if(typeof(product) !== 'undefined' && product.attributes.unit === 'oz' || product.attributes.unit === 'lbs' || product.attributes.unit === 'g')
        // {
            // console.log(product)
        // }
    // }

// }

// $("button").click(function() {
    // alert(this.id); // or alert($(this).attr('id'));
// });

import React from "react"

const Favorite = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            Qty: <input style={{width: '50px'}} type="text" onChange={props.onChange}/>
            <input type='submit' value="Add to Cart" className="btn"/>
            <input type='button' value="Favorite" className="btn"/>
        </form>
    )
}

export default Favorite