import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

const CardComponent = ({ title, description, imageUrl, linkUrl}) => {
  return (
    <MDBCard style={{ maxWidth: "400px" }}>
      <MDBCardImage src={imageUrl} alt="Card image" position="top" />
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>{description}</MDBCardText>
        <MDBBtn href={linkUrl} style={{display: "flex", justifyContent: "center"}}>Read More</MDBBtn>
        <MDBBtn href="/feedback" style={{display: "flex", justifyContent: "center", margin: "2px"}}>FeedBack Form</MDBBtn>
      </MDBCardBody>

      {/* Line Separator */}
      <hr style={{ margin: "10px 0" }} />

      {/* Share it on */}
      <span style={{ display: "block", textAlign: "center" }}>
        {" "}
        Share it with others!
      </span>

      {/* Social Media Logos */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MDBBtn
          tag="a"
          href="https://www.instagram.com/"
          target="_blank"
          social="ins"
          style={{ margin: "5px", backgroundColor: "#d200da" }}
        >
          <MDBIcon fab icon="instagram" size="lg" />
        </MDBBtn>

        <MDBBtn
          tag="a"
          href="https://www.facebook.com/"
          target="_blank"
          social="fb"
          style={{ margin: "5px" }}
        >
          <MDBIcon fab icon="facebook" size="lg" />
        </MDBBtn>

        <MDBBtn
          tag="a"
          href="https://www.twitter.com/"
          target="_blank"
          social="tw"
          style={{ margin: "5px", backgroundColor: "#1ca0f2" }}
        >
          <MDBIcon fab icon="twitter" size="lg" />
        </MDBBtn>
      </div>
    </MDBCard>
  );
};

export default CardComponent;