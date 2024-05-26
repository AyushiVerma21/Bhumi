import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackHeader from "./Components/Feedback/FeedbackHeader";
import FeedbackWrapper from "./Components/Feedback/FeedbackWrapper";
import FeedbackFooter from "./Components/Feedback/FeedbackFooter";
import Card from "./Components/Donation/Card";

import "./App.css";
import SignUp from "./Components/Donation/Signup";
import Login from "./Components/Donation/Login";
import AdminForm from "./Components/Donation/admin_form";
import Testimonial from "./Components/Donation/Testimonial";
import DonationFooter from "./Components/Donation/DonationFooter";
import DonationHeader from "./Components/Donation/DonationHeader";
import Visualise from "./Components/Visualise/Visualise";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/feedback"
            element={
              <div className="feedback-container">
                <FeedbackHeader />
                <div className="feedback-wrapper">
                  <FeedbackWrapper />
                </div>
                <FeedbackFooter />
              </div>
            }
          />
          <Route path="/feedback/signup" element={<SignUp />} />
          <Route path="/feedback/login" element={<Login />} />
          <Route path="/feedback/admin-form" element={<AdminForm />} />
          <Route path="/feedback/visualise" element={<Visualise />} />
          <Route
            path="/donation"
            element={
              <div>
                <DonationHeader />
                <div className="cards my-5">
                  <Card
                    title="Seed-Ball Programme"
                    description="Living under the constant threat of natural disasters, it becomes vital for us to take protective measures. We need to focus our efforts on saving and conserving resources while giving back to the society through the restoration of the green cover."
                    imageUrl="https://bhumi.ngo/wp-content/uploads/2020/12/IMG_4154-1-scaled.jpg"
                    linkUrl="https://bhumi.ngo/programmes/catalyse/seed-ball/"
                  />
                  <Card
                    title="Think Green"
                    description="In efforts of defending the natural habitat by identifying environmental abuse, championing responsible solutions and enabling local communities to advocate and act for change, Think Green was brought into being. Our movement is inclusive and people-led."
                    imageUrl="https://bhumi.ngo/wp-content/uploads/2021/02/601a3ac1609b0-1.jpg"
                    linkUrl="https://bhumi.ngo/programmes/catalyse/"
                  />
                  <Card
                    title="RTE 25 - Right To Education Awareness"
                    description="We plan to tackle this problem by engaging our volunteers in creating awareness among these communities and helping them benefit from this transformational opportunity. We plan to tackle this problem by engaging our volunteers in creating awareness. "
                    imageUrl="https://bhumi.ngo/wp-content/uploads/2020/12/5fb61b9e38052.jpg"
                    linkUrl="https://bhumi.ngo/programmes/catalyse/rte/"
                  />
                </div>
                <Testimonial />
                <DonationFooter />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
