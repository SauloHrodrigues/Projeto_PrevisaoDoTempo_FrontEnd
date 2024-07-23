
import React from "react";

import styled from "styled-components";

import { Breadcrumb as AntdBreadcrumb } from "antd";
 
const BreadcrumbContainer = styled.div`

    display: flex;

    align-items: center;

    gap: 8px;

    max-width: 100%;

    padding: 41px 0;

    margin-left: 121px;
 
    .ant-breadcrumb-separator {

        color: #414ABA;

    }
    margin: 40px 0 40px 120px;
    padding: 0;

`;
 
const CustomBreadcrumb = ({rota}) => {

    const breadcrumbItems = [

        {

            title: 'Inicio',

            style: {

                fontFamily: 'TT-Supermolot-Bold',

                fontSize: '18px',

                fontWeight: 'bold',

                lineHeight: '22.23px',

                color: '#414ABA',

            }

        },

        {

            title: rota,

            style: {

                fontFamily: 'TT-Supermolot-Regular',

                fontSize: '18px',

                fontWeight: 400,

                lineHeight: '22.14px',

                color: '#414ABA'

            }

        }

    ];
 
    return (

        <BreadcrumbContainer>

            <AntdBreadcrumb 

                items={breadcrumbItems}

                itemRender={(item) => {

                    const style = item.style;

                    return (

                        <span style={style}>{item.title}</span>

                    );

                }}

            />

        </BreadcrumbContainer>

    )

}
 
export default CustomBreadcrumb;