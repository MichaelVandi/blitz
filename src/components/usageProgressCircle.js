import React, { useEffect, useState, useRef } from 'react';
import Title from './title';
import './ProgressBar.css';


// create a component
function UsageProgressCircle (props) {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const { 
        size, 
        progress, 
        strokeWidth, 
        circleOneStroke, 
        circleTwoStroke,
        usedGB,
        totalGB,
    } = props;
    
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
    }, [setOffset, circumference, progress, offset]);

    return (
        <div style ={styles.container}>
            <svg width={size} height={size}>
                <circle
                    className="svg-circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className="svg-circle"
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />

                <text 
                fontStyle='normal'
                    x={`${center}`} 
                    y={`${center - 35}`} 
                    className="svg-circle-text">
                        
                    {usedGB} { "GB"}
                </text>

                <text
                    x={`${center}`} 
                    y={`${center}`} 
                    className="svg-circle-text">
                    {"out of "} {totalGB} {"GB"}
                </text>

                <text
                    x={`${center}`} 
                    y={`${center + 35}`} 
                    className="svg-circle-text-used">
                    Used
                    
                </text>

            </svg>

        </div>
    );
};

const styles = {
    container: {
        width: '100%',
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'space-between',
    }
}


//make this component available to the app
export default UsageProgressCircle;
