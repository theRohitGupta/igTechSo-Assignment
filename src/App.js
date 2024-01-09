import { useEffect, useState } from 'react';
import './App.css';
import CoreFeatures from './components/core/CoreFeatures';
import FunctionWorks from './components/core/FunctionWorks';
import HeaderSection from './components/core/HeaderSection';
import Navbar from './components/core/Navbar';
import PopularCourses from './components/core/PopularCourses';
import PricingPlan from './components/core/PricingPlan';
import QualityFeatures from './components/core/QualityFeatures';
import FreeTutorial from './components/core/FreeTutorial';
import FrequentQuestion from './components/core/FrequentQuestion';
import ReadyToLearn from './components/core/ReadyToLearn';
import Footer from './components/core/Footer';

function App() {
  const [reviews, setReviews] = useState([])

  const fetchReviews = async() => {
      try {
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}/getReviews`, {
            method: "GET",
          });
          const result = await response.json();
          setReviews(result.data)
        } catch (error) {
          console.log("ERROR IN FETCHING REVIEWS")
          console.error("Error:", error);
        }
  } 
  useEffect(() => {
      fetchReviews()
  },[])

  return (
    <div className=' w-3/4 mx-auto font-dmSans'>
        <Navbar/>
        <HeaderSection/>
        <QualityFeatures reviews={reviews}/>
        <CoreFeatures/>
        <PopularCourses/>
        <FunctionWorks/>
        <PricingPlan/>
        <FreeTutorial reviews={reviews}/>
        <FrequentQuestion/>
        <ReadyToLearn/>
        <Footer/>
    </div>
  );
}

export default App;
