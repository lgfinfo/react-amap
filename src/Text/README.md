Text 文本标注
===

点标记是用来标示某个位置点信息的一种地图要素，本章介绍如何在地图图面使用点标记。

```jsx
import { Text } from '@uiw/react-amap';
```

### 基本用法

<!--DemoStart,bgWhite,noScroll--> 
```jsx
import React, { useState, useRef } from 'react';
import { Map, APILoader, Text } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '300px' }}>
        <Map zoom={13} center={[116.4, 39.92]}>
          <Text
            text="纯文本标记"
            anchor="center"
            draggable={true}
            cursor="pointer"
            angle={10}
            visiable={show}
            style={{
              'padding': '.75rem 1.25rem',
              'margin-bottom': '1rem',
              'border-radius': '.25rem',
              'background-color': 'white',
              'width': '15rem',
              'border-width': 0,
              'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
              'text-align': 'center',
              'font-size': '20px',
              'color': 'blue'
            }}
            // title="北京市"
            position={new AMap.LngLat(116.396923,39.918203)}
          />
        </Map>
      </div>
    </>
  );
}

ReactDOM.render((
  <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Example />
  </APILoader>
), _mount_);
```
<!--End-->

### Props

[更多参数设置](https://github.com/uiwjs/react-amap/blob/268303d/src/types/overlay.d.ts#L8-L111)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 覆盖物是否可见。 | `boolean` | - |

### 事件

[事件类型文档](https://github.com/uiwjs/react-amap/blob/268303d/src/types/overlay.d.ts#L112-L182)

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- |
| onClick | 鼠标左键单击事件 | `(event: MapsEvent): void;` |
| onDblClick | 鼠标左键双击事件 | `(event: MapsEvent): void;` |
| onRightClick | 鼠标右键单击事件 | `(event: MapsEvent): void;` |
| onMouseMove | 鼠标移动 | `(event: MapsEvent): void;` |
| onMouseOver | 鼠标移近点标记时触发事件 | `(event: MapsEvent): void;` |
| onMouseOut | 鼠标移出点标记时触发事件 | `(event: MapsEvent): void;` |
| onMouseDown | 鼠标在点标记上按下时触发事件 | `(event: MapsEvent): void;` |
| onMouseUp | 鼠标在点标记上按下后抬起时触发事件 | `(event: MapsEvent): void;` |
| onDragStart | 开始拖拽点标记时触发事件 | `(event: MapsEvent): void;` |
| onDragging | 鼠标拖拽移动点标记时触发事件 | `(event: MapsEvent): void;` |
| onDragEnd | 点标记拖拽移动结束触发事件 | `(event: MapsEvent): void;` |
| onMoving | 点标记在执行 | `(obj: { passedPath:Array<LngLat> }): void;` |
| onMoveEnd | 点标记执行moveTo动画结束时触发事件，也可以由moveAlong方法触发 | `(): void;` |
| onMoveAlong | 点标记执行moveAlong动画一次后触发事件 | `(): void;` |
| onTouchStart | 触摸开始时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchMove | 触摸移动进行中时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |
| onTouchEnd | 触摸结束时触发事件，仅适用移动设备 | `(event: MapsEvent): void;` |