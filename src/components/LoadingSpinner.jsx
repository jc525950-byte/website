import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

/**
 * 页面加载状态指示器
 * 用于代码分割时的加载状态显示
 */
const LoadingSpinner = ({ size = 'large', tip = '页面加载中...' }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      <Spin 
        indicator={antIcon} 
        size={size}
      />
      {tip ? (
        <span
          style={{
            color: '#666',
            fontSize: 14,
            letterSpacing: '0.3px'
          }}
        >
          {tip}
        </span>
      ) : null}
    </div>
  );
};

export default LoadingSpinner;
