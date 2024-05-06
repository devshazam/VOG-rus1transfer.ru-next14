"use client"
import React from 'react';
import { Button, Result } from 'antd';

export default function NotFound() {

  return (
    <div className="w-full h-screen bg-white">
      <Result
          status="404"
          title="404"
          subTitle="Такой страницы не существует!"
          extra={<Button type="primary"><a href="/">На главную</a></Button>}
      />
    </div>
  );
}
