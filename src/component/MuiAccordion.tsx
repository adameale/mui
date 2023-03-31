import React from 'react'
import {Accordion, AccordionSummary,
    AccordionDetails,
Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {useState} from 'react'
const MuiAccordion = () => {
    const [expanded,setexpanded]=useState<string  | false>(false)
    const handlChange=(isExpanded:boolean,panel:string) =>{
        setexpanded(isExpanded ? panel:false)
    }
  return (
    <>
    <Accordion expanded={expanded === 'panel1'}
    onChange={(event,isExpanded)=> handlChange(isExpanded,'panel1')}>
      <AccordionSummary id='panel1-header'
      aria-controls='panel1-content'
      expandIcon={<ExpandMoreIcon/>}>
        <Typography> Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>A react card component is a content container. It incorporates options for images, headers, and footers, a wide variety of content, contextual background colors, and excellent display options.
        
      </AccordionDetails>
    </Accordion>

<Accordion expanded={expanded === 'panel2'}
    onChange={(event,isExpanded)=> handlChange(isExpanded,'panel2')}>
<AccordionSummary id='panel2-header'
aria-controls='panel2-content'
expandIcon={<ExpandMoreIcon/>}>
  <Typography> Accordion 2</Typography>
</AccordionSummary>
<AccordionDetails>A react card component is a content container. It incorporates options for images, headers, and footers, a wide variety of content, contextual background colors, and excellent display options.
  
</AccordionDetails>
</Accordion>

<Accordion  expanded={expanded === 'panel3'}
    onChange={(event,isExpanded)=> handlChange(isExpanded,'panel3')}>
      <AccordionSummary id='pane3-header'
      aria-controls='panel3-content'
      expandIcon={<ExpandMoreIcon/>}>
        <Typography> Accordion 3</Typography>
      </AccordionSummary>
      <AccordionDetails>A react card component is a content container. It incorporates options for images, headers, and footers, a wide variety of content, contextual background colors, and excellent display options.
        
      </AccordionDetails>
    </Accordion>
    </>
  )

  
}

export default MuiAccordion
