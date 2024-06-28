import React from 'react';
import { ConfigProvider, Select} from 'antd';


const SelectComponent = () => (
  <>
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorPrimary: '#00b96b',
            padding:'8px 12px 8px 12px',
            colorInfoBorderHover: '#fff',
            colorBorder:'#fff',
            
          },
          
        },
      }}
    >
    <Select       
        defaultValue="ensolarado"     
        style={{borderRadius:'6px', border:'solid 2px #414ABA', width: '207px',
            height: '40px'}}      
        options={[{value: 'ensolarado',label: 'Ensolarado'},
]}/> 
    </ConfigProvider>
  </>
);

export default SelectComponent;