import React from 'react'
// import { ResponsiveLine } from '@nivo/line'
// import {Fdata} from './forexdata'
import { ResponsiveChord } from '@nivo/chord'
import { LineData } from './forexdata'
import { useTheme } from "@mui/material";


const Forex = ({ Fdata }) => {
    const theme = useTheme()
    return (
        <div>
            <div className='container ' style={{ color: theme.palette.secondary.light }}>
                <div className='row mx-5 p-3'>
                    <div className='col-3 chart-row2 m-3' style={{ height: '350px', width: '450px', border: '1px solid black',color: theme.palette.primary.dark }}>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '300px', width: '450px' }} >
                            <ResponsiveChord
                                data={LineData}
                                keys={['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim']}
                                margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                                valueFormat=".2f"
                                padAngle={0.02}
                                innerRadiusRatio={0.96}
                                innerRadiusOffset={0.02}
                                inactiveArcOpacity={0.25}
                                arcBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                activeRibbonOpacity={0.75}
                                inactiveRibbonOpacity={0.25}
                                ribbonBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                labelRotation={-90}
                                labelTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1
                                        ]
                                    ]
                                }}
                                colors={{ scheme: 'nivo' }}
                                motionConfig="stiff"
                                legends={[
                                    {
                                        anchor: 'bottom',
                                        direction: 'row',
                                        justify: false,
                                        translateX: 0,
                                        translateY: 70,
                                        itemWidth: 80,
                                        itemHeight: 14,
                                        itemsSpacing: 0,
                                        itemTextColor: '#999',
                                        itemDirection: 'left-to-right',
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemTextColor: '#000'
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />

                        </div>

                    </div>
                    <div className='col-3 m-3 chart-row2' style={{ height: '350px', width: '450px', border: '1px solid black' }}>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '300px', width: '450px' }} >
                            <ResponsiveChord
                                data={LineData}
                                keys={['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim']}
                                margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                                valueFormat=".2f"
                                padAngle={0.02}
                                innerRadiusRatio={0.96}
                                innerRadiusOffset={0.02}
                                inactiveArcOpacity={0.25}
                                arcBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                activeRibbonOpacity={0.75}
                                inactiveRibbonOpacity={0.25}
                                ribbonBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                labelRotation={-90}
                                labelTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1
                                        ]
                                    ]
                                }}
                                colors={{ scheme: 'nivo' }}
                                motionConfig="stiff"
                                legends={[
                                    {
                                        anchor: 'bottom',
                                        direction: 'row',
                                        justify: false,
                                        translateX: 0,
                                        translateY: 70,
                                        itemWidth: 80,
                                        itemHeight: 14,
                                        itemsSpacing: 0,
                                        itemTextColor: '#999',
                                        itemDirection: 'left-to-right',
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemTextColor: '#000'
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />

                        </div>

                    </div>
                    <div className='col-3 m-3 chart-row2' style={{ height: '350px', width: '450px', border: '1px solid black' }}>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '300px', width: '450px' }} >
                            <ResponsiveChord
                                data={LineData}
                                keys={['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim']}
                                margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                                valueFormat=".2f"
                                padAngle={0.02}
                                innerRadiusRatio={0.96}
                                innerRadiusOffset={0.02}
                                inactiveArcOpacity={0.25}
                                arcBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                activeRibbonOpacity={0.75}
                                inactiveRibbonOpacity={0.25}
                                ribbonBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                labelRotation={-90}
                                labelTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1
                                        ]
                                    ]
                                }}
                                colors={{ scheme: 'nivo' }}
                                motionConfig="stiff"
                                legends={[
                                    {
                                        anchor: 'bottom',
                                        direction: 'row',
                                        justify: false,
                                        translateX: 0,
                                        translateY: 70,
                                        itemWidth: 80,
                                        itemHeight: 14,
                                        itemsSpacing: 0,
                                        itemTextColor: '#999',
                                        itemDirection: 'left-to-right',
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemTextColor: '#000'
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />

                        </div>

                    </div>
                    <div className='col-3 m-3 chart-row2' style={{ height: '350px', width: '450px', border: '1px solid black' }}>
                        <h2>Closure</h2>
                        <h3>Chart</h3>
                        <div style={{ height: '300px', width: '450px' }} >
                            <ResponsiveChord
                                data={LineData}
                                keys={['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim']}
                                margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                                valueFormat=".2f"
                                padAngle={0.02}
                                innerRadiusRatio={0.96}
                                innerRadiusOffset={0.02}
                                inactiveArcOpacity={0.25}
                                arcBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                activeRibbonOpacity={0.75}
                                inactiveRibbonOpacity={0.25}
                                ribbonBorderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            0.6
                                        ]
                                    ]
                                }}
                                labelRotation={-90}
                                labelTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1
                                        ]
                                    ]
                                }}
                                colors={{ scheme: 'nivo' }}
                                motionConfig="stiff"
                                legends={[
                                    {
                                        anchor: 'bottom',
                                        direction: 'row',
                                        justify: false,
                                        translateX: 0,
                                        translateY: 70,
                                        itemWidth: 80,
                                        itemHeight: 14,
                                        itemsSpacing: 0,
                                        itemTextColor: '#999',
                                        itemDirection: 'left-to-right',
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemTextColor: '#000'
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )

}

export default Forex;