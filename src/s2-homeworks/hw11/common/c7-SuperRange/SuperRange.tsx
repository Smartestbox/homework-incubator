import React from 'react'
import {Slider, SliderProps} from '@mui/material'



const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                '& .MuiSlider-track': {
                    color: "#00CC22"
                },
                '& .MuiSlider-rail': {
                    color: '#000000'
                },
                '& .MuiSlider-thumbColorPrimary': {
                    color: '#00CC22'
                },
            }}
            aria-label={''}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
