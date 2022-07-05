import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
    
// GoTo Top fuction
  const goToTop = () => {
    window.scrollTo(0,0);
  };

//  Card Text CSS
  const cardTextCss = {
    fontSize:'19px', 
    height:'27px', 
    textAlign:'justify', 
    whiteSpace: 'nowrap', 
    overflow: 'hidden', 
    textOverflow: 'ellipsis'
  };

    return (
            <div className="card shadow">
                <img src={props.img} alt="Blog-image" className='card-img-top' width="295" height='230' />
                <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: '501' }}>{props.title}</h5>
                    <p className="card-text" style={cardTextCss}>{props.discription}</p>
                    <Link to={props.link} onClick={goToTop} className="btn btn-primary">Details</Link>
                </div>
            </div>
    )
}

export default BlogCard


/**---------------------
 * Route Not Working JSX Code *
 -----------------------*/

// <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4 ms-4 me-4' style={{ marginTop: '50px' }}>
//     <div className="card p-0 overflow-hidden h-100 shadow" style={{ width: "18rem" }}>
//         <img className="card-img-top" src={props.img} alt="Card image cap" />
//         <div className="card-body">
//             <h5 className="card-title" style={{ fontWeight: 'bold' }}>{props.title}</h5>
//             <p className="card-text" style={{ fontSize: "17px", fontWeight: 'normal' }}>{props.discription}</p>
//             {/* <Route>
//                 <Link to={props.link} className="btn btn-primary">Details</Link>
//             </Route> */}
//         </div>
//     </div>
// </div>