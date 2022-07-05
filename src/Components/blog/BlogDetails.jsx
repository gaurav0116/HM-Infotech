import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import Data from './Data';
import BlogCard from './BlogCard';
import { Pagination, Stack } from '@mui/material';


const BlogDetails = () => {
    const [curentCards, setCurentCards] = useState(1)
    const cardsPerPage = 3;     // Cards par page
    let BlogDataLength = Data.BlogData.length;    // Blog Data Length
    let indexOfLastCards = curentCards * cardsPerPage;    // index of last 3 card
    let indexOfFirstCards = indexOfLastCards - cardsPerPage;    // index of first 3 cards
    let currentCards = Data.BlogData.slice(indexOfFirstCards, indexOfLastCards);    // curent cards
    
    // card page change function
    const paginate = (e, value) => {
        setCurentCards(value);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Other Blogs title style
    const OtherBlogTitleCss = {
        paddingBottom: '15px',
        marginBottom: '15px',
        position: 'relative',
        fontSize: '40px',
        fontWeight: 700,
        color: '#4e4039',
        display: 'flex',
        justifyContent: 'center'
    };

    // Access Id paramater
    const { id } = useParams();
    let getData = Data.BlogData[id - 1];


    return (
        <div className="container mt-5 pt-5">
            <div className="row">

                {/* Main Bolg Part*/}
                <div className="mainblog col-md-8">  
                        <div className="row align-middle " data-aos="fade-up">  
                            <img src={getData.img} style={{ width: '800px', height: '420px' }} alt="Blog image" className='ml-md-auto mb-3' />
                            <h1 style={{ fontWeight: '501' }} className="">{getData.title}</h1>
                            <p style={{ textAlign: 'justify', width: '800px', fontSize: "17px" }} className="mb">{getData.discription}</p>
                        </div>    
                </div>

                {/* Other Blog Part */}
                <div className="otherblogs col-6 col-md-4">
                    <h1 style={OtherBlogTitleCss}>Other Blogs</h1>
                    {
                        currentCards.map((item, index) => {
                            return (
                                <div className="mb-3 ml-md-auto" >
                                    <BlogCard key={index} img={item.img} title={item.title} discription={item.discription} link={`/blogs/${item.id}`} />
                                </div>
                            )
                        })
                    }

                    {/* Card Pagination */}
                    <Stack alignItems='center' >
                    {
                        BlogDataLength> 3 &&(
                            <Pagination
                                color="primary"
                                defaultPage={1}
                                count={Math.ceil(BlogDataLength/cardsPerPage)}
                                page={curentCards}
                                onChange={paginate}
                            />
                        )
                    }
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails


/**-------------------
 * Not Responsive Code
 --------------------*/

//  <div className="container col-md-6 offset-md-3 mt-5 pt-5 ml-md-auto">
//     <div className="row align-middle " data-aos="fade-up">
//         <img src={getData.img} style={{ width: '800px', height: '420px' }} alt="Blog image" className='ml-md-auto mb-3' />
//         <h1 style={{ fontWeight: '501' }} className="">{getData.title}</h1>
//         <p style={{ textAlign: 'justify', width: '800px', fontSize:"17px" }} className="mb">{getData.discription}</p>
//     </div>
// </div>

