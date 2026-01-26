import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    // եթե value-ն զանգված է՝ դա double range է
    const isRange = Array.isArray(props.value)

    return (
        <Slider
            {...props}
            sx={{
                width: 147,
                height: 4,
                color: isRange ? '#00CC22' : '#88888B',
                borderRadius: '10px',
                '& .MuiSlider-thumb': {
                    width: 16,
                    height: 16,
                    backgroundColor: '#fff',
                    border: `2px solid ${isRange ? '#00CC22' : '#88888B'}`,
                    '&:hover': {
                        boxShadow: isRange
                            ? '0 0 0 6px rgba(0,204,34,0.16)'
                            : '0 0 0 6px rgba(136,136,139,0.16)',
                    },
                },
                '& .MuiSlider-rail': {
                    opacity: 0.4,
                },
            }}
        />
    )
}

export default SuperRange
