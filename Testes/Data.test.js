import React from "react";
import SelecionarData from "../src/componentes/SelecionarData";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
 
jest.mock('antd/es/date-picker/locale/pt_BR', () => ({
    DatePicker: ({ onChange, placeholder, value }) => (
      <input
        data-testid="datepicker"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
  }));

  describe('Componente de seleção de data', () => {
    it('renderizar componente de Data', ()=>{
        render(<SelecionarData/>);
        expect(screen.getByText('Selecione a data')).toBeInTheDocument();
        expect(screen.getByText('Data')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Select date')).toBeInTheDocument();
    })
 
    it('Deve selecionar a data corretamente', () => {
      render(<SelecionarData/>);
 
      const datePicker = screen.getByPlaceholderText('Select date');
      fireEvent.change(datePicker, { target: { value: '2024/05/20' } });
 
      expect(datePicker.value).toBe('2024/05/20');
    });
  });


