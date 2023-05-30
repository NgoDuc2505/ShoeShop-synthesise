import { Empty } from 'antd'
import React from 'react'

function EmptyDataDisplay() {
    const style = {
        width: '100%'
    }
  return (
    <div className="empty_antd" style={style}><Empty
                  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                  imageStyle={{
                    height: 60,
                  }}
                  description={
                    <span>
                      Empty
                    </span>
                  }
                >
                </Empty></div>
  )
}

export default EmptyDataDisplay