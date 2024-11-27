
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';



export default function Time() {
  return (
    <div className="w-full top-[111%] z-50   absolute flex items-center justify-center ">
     <div className="md:w-[60%] p-4 m-2 rounded-xl  bg-gray-900 text-center">
     <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }}  sx={{ 
                input: { color: 'white' },  // Change text color of input
                 label :{
                        color:"white"
                }
              }}/>
      </DemoContainer>
    </LocalizationProvider>


        
     </div>
    </div>
  )
}
