"use client";

import { Input } from 'antd';
import { useState } from 'react';

interface Props {
    nombre: string;
    edad: number;
    mayor_edad: boolean;
}
interface IconSliderProps {
    max: number;
    min: number;
}

import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import { Slider } from 'antd';
const Componente1 = (props: IconSliderProps) => {

    const { max, min } = props;
    const [value, setValue] = useState(0);

    const mid = Number(((max - min) / 2).toFixed(5));
    const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';

    return (
        <>
            <FrownOutlined className={preColorCls} />
            <Slider {...props} onChange={setValue} value={value} />
            <SmileOutlined className={nextColorCls} />
            <Input placeholder="Basic usage" />
        </>
    )
}

export default Componente1;