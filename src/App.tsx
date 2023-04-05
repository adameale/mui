import React from 'react';
import {LocalizationProvider} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import './App.css';
import MuiButton from './component/MuiButton';
import Typographyy from './component/Typographyy';
import TextFieldd from './component/TextFieldd'
import Muiselect from './component/Muiselect';
import MuiRadiob from './component/MuiRadiob';
import Muicheckbox from './component/Muicheckbox';
import Muiswich from './component/Muiswich';
import MuiRating from './component/MuiRating';
import AUtocomplatee from './component/AUtocomplatee';
import Muilayout from './component/Muilayout';
import MuiCard from './component/MuiCard';
import MuiAccordion from './component/MuiAccordion';
import MuiImagelist from './component/MuiImagelist';
import MuiNavbar from './component/MuiNavbar';
import Muibody from './component/Muibody';
import MuiBotNav from './component/MuiBotNav';
import Muibreadcrumbs from './component/Muibreadcrumbs';
import Muidrawer from './component/Muidrawer';
import MuiSpeeddail from './component/MuiSpeeddail';
import MUiAvatar from './component/MUiAvatar';
import MuiList from './component/MuiList';
import MuiCheck from './component/MuiCheck';
import MuiTooltip from './component/MuiTooltip';
import MuiTabe from './component/MuiTabe';
import MuiAlet from './component/MuiAlet';
import MuiSnackBar from './component/MuiSnackBar';
import Muidialog from './component/Muidialog';
import MuiProgress from './component/MuiProgress';
import MuiSkeleton from './component/MuiSkeleton';
import Muiloadingbutton from './component/Muiloadingbutton';
import MuiDatePicker from './component/MuiDatePicker';
import MuiTabs from './component/MuiTabs';
function App() {
  return (
     <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">

      {/* <Typographyy /> */}
      {/* <MuiButton /> */}
      {/* <TextFieldd /> */}
      {/* <Muiselect /> */}
      {/* <MuiRadiob /> */}
      {/* < Muicheckbox/> */}
         {/* < Muiswich /> */}
         {/* <MuiRating /> */}
         {/* < AUtocomplatee/>*/}
         {/* < Muilayout/> */}
         {/* <MuiCard /> */}
         {/* <MuiAccordion /> */}
         {/* <MuiImagelist /> */}
        < MuiNavbar />
        {/* < MuiTabe /> */}
         <MuiTooltip/>
        <Muibreadcrumbs />
        <Muidrawer/> 
       {/* < Muibody /> */}
       {/* <MuiBotNav /> */}
       {/* < MuiAlet/>
       < MuiSpeeddail/>
       < MUiAvatar/>
       < MuiList/>
       <MuiCheck/> */}
       {/* <MuiSnackBar/>
       <Muidialog  />
       <MuiProgress/> */}
       {/* <MuiSkeleton/> */}
       {/* < Muiloadingbutton/> */}
       {/* < MuiTabs/> */}
       <MuiDatePicker/>

    </div>
     </LocalizationProvider>
  );
}

export default App;
