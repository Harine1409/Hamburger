import React, { Component } from 'react';
import { ColumnDirective, ColumnsDirective, Edit, Freeze, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import Loader from "./Loader.js";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
class Gridcomponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }

    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ loading: false })

        }, 1000);
    };
 addRow = () => {
        let instance = document.getElementById('Grid').ej2_instances[0];
        instance.addRecord({ OrderID: 3232, CustomerID: 'ALKIT', EmployeeID: 6, Freight: 40, ShipName: 'Belgium' }, 2);
    };
    render() {
        const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
        let data = [
            {
                OrderID: 'Legal Requirements', CustomerID: ''
            },
            {
                OrderID: 'Size restriction', CustomerID: '1.2mm'
            },
            {
                OrderID: 'The word Ingredient', CustomerID: 'GB2'
            },
            {
                OrderID: 'Ingredients(Tea)', CustomerID: ''
            },
            {
                OrderID: 'Net Weight(Grams&Oz)', CustomerID: 'GB1 3 mm'
            },
            {
                OrderID: 'Packing Date ', CustomerID: 'GB3'
            },
            {
                OrderID: 'Best before ', CustomerID: 'GB4'
            },
            {
                OrderID: 'Blend Name ', CustomerID: 'GB99'
            },
            {
                OrderID: 'Tea Information ', CustomerID: ''
            },
            {
                OrderID: 'No. of teabags ', CustomerID: 'GB22'
            },

        ];
        return (
            <>
                {this.state.loading ? <Loader color={'#3d5e61'} background={'rgba(255,255,255,.5)'} /> : ""}

                <div className='gridmain'>
                    <GridComponent dataSource={data} editSettings={editOptions} height={315}>
                        <ColumnsDirective>
                            <ColumnDirective field='OrderID' headerText='' width='100' textAlign="Right" isPrimaryKey={true} />
                            <ColumnDirective field='CustomerID' headerText='GB' width='120' />
                            <ColumnDirective field='CustomerID' headerText='FR' width='100' textAlign="Right" isPrimaryKey={true} />

                        </ColumnsDirective>
                        <Inject services={[Edit]} />
                    </GridComponent></div></>
        );
    }
}

export default Gridcomponent;