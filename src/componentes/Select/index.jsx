import React from 'react';
import { ConfigProvider, Select} from 'antd';

const { Option } = Select;
const SelectComponent = ({value, onChange, options}) => {

  const handleSelectChange = (valor)=>{
    onChange(valor);
  }
  return(
    <Select       
        value={value}
        onChange={handleSelectChange}     
        style={{borderRadius:'6px', border:'solid 2px #414ABA', width: '207px',
            height: '40px'}}      
        
      >
        {options.map(opcao => (
          <Option key={opcao.value} value={opcao.value}>
              {opcao.label}
          </Option> ))
        }
      </Select>
     )
    };
    export default SelectComponent;
   

