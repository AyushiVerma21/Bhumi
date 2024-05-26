import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      company: 'ABC Company',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel elit eget mi blandit volutpat. Aliquam vel aliquam neque.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'XYZ Corporation',
      testimonial:
        'Fusce vitae elit in nulla sollicitudin venenatis. Integer tincidunt justo quis libero fermentum, at semper neque euismod.',
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Testimonials</h2>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-item ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
          >
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
            <p className="testimonial-info">
              <strong className="testimonial-name">{testimonial.name}</strong> -{' '}
              <span className="testimonial-company">{testimonial.company}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;