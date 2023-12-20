"use client";
import React, { useState } from 'react';
import { Button, Col, ColorPicker, Row } from 'antd';

export default function Drawer() {


    return (
        <>

            <ColorPicker onChange={(value, hex) => {
                console.log(value, hex)
            }} />
            <Row gutter={[0, 0]}>
                <Col span={12} className='bg-danger'>
                    <p className='bg-info'>Columna1</p>
                </Col>
                <Col span={12} className='bg-success'>
                    <p className='bg-white'>
                        Columna2
                    </p>
                </Col>
            </Row>
        </>
    )
}
