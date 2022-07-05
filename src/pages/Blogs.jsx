import React, { useState } from 'react'
import BlogCard from '../Components/blog/BlogCard';
import Data from '../Components/blog/Data';
import { Pagination, Stack } from '@mui/material';

// Section title style
const SectionTitleCss = {
  paddingTop: '110px',
  fontSize: '30px',
  fontWeight: 700,
  paddingBottom: 0,
  lineHeight: '1px',
  marginBottom: '0px',
  color: '#c2b7b1'
};

// P tage Style
const PtagStyle = {
  paddingBottom: '15px',
  marginBottom: '15px',
  position: 'relative',
  fontSize: '32px',
  fontWeight: 700,
  color: '#4e4039',
  display: 'flex',
  justifyContent: 'center'
};


const Blogs = () => {
  const [curentCards, setCurentCards] = useState(1)
  const cardsPerPage = 6;     // Cards par page
  let BlogDataLength = Data.BlogData.length;    // Blog Data Length
  let indexOfLastCards = curentCards * cardsPerPage;    // index of last 3 card
  let indexOfFirstCards = indexOfLastCards - cardsPerPage;    // index of first 3 cards
  let currentCards = Data.BlogData.slice(indexOfFirstCards, indexOfLastCards);    // curent cards Data

  // card page change function
  const paginate = (e, value) => {
    setCurentCards(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



  return (
    <div className="container py-4-lg-5">
      <div className="row g-3" data-aos="fade-up">
        <h2 className='section-title'
          style={SectionTitleCss}>Blogs</h2>
        <p style={PtagStyle}> Explore our Blogs </p>

        {currentCards.map((item, index) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 mt-3 pt-3 ">
              <BlogCard key={index} img={item.img} title={item.title} discription={item.discription} link={`/blogs/${item.id}`} />
            </div>
          )
        })}

        {/* Card Pagination */}
        <Stack alignItems='center' >
          {
            BlogDataLength > 6 && (
              <Pagination
                color="primary"
                defaultPage={1}
                count={Math.ceil(BlogDataLength / cardsPerPage)}
                page={curentCards}
                onChange={paginate}
              />
            )
          }
        </Stack>
      </div>
    </div >
  )
}

export default Blogs


/**---------------------
 * Route Not Working JSX Code *
 -----------------------*/

// <section id="blogs" className="py-4-lg-5 container" >
//   <div className="row justify-content-center" data-aos="fade-up">
//     <div className="section-title" style={{ paddingTop: '50px' }}>
//       <h2>Blogs</h2>
//       <p> Explore our Blogs </p>
//       <div className='d-flex flex-row'>
//         {BlogData.map((item, index) => {
//           console.log(item.img);
//           return (<BlogCard key={index} img={item.img} title={item.title} discription={item.discription} link="" />)
//         })}
//       </div>
//     </div>
//   </div>
// </section>