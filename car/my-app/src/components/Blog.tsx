import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import travel from '../assets/air1.avif';

const Blog = () => {
  return (
    <div className="flex bg-gray-200">
      <div className="w-1/2">
        <img src={travel} alt="Blog Image" className="w-full" />
      </div>
      <div className="w-1/2 ml-3">
        <h1 className='text-black text-xl mt-3 mb-3 font-bold ml-3'>Things you need to know</h1>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography className='text-md text-black font-bold'>In which areas do you operate?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-sm'>We operate in the Tri-state area and all the adjacent states, such as <br />New York, New Jersey, Massachusetts, Connecticut, and Pennsylvania.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography className='text-xl text-black font-bold'>Are your drivers trained?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam ipsam incidunt iusto <br />illo similique eum, nihil ratione accusamus eveniet omnis quos saepe aliquid quasi dolore et quod soluta veniam.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography className='text-xl text-black font-bold'>Why should i choose you?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, provident ratione aliquam earum iusto corrupti!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography className='text-xl text-black font-bold'>How soon should I make my reservation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptatum.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography className='text-xl text-black font-bold'>Is smooking allowed in your vehicles?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut rem dolores quaerat, similique eius saepe.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography className='text-xl text-black font-bold'>I'm ready to book your vehicle.What's the next stop?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id quidem suscipit vero laboriosam distinctio.</Typography>
          </AccordionDetails>
        </Accordion>

        
      </div>
      
    </div>
  );
};

export default Blog;
