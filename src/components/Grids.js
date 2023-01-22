import React, { Component } from 'react';
import { ColumnDirective, ColumnsDirective, Edit, Freeze, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import Loader from "./Loader.js";
import { registerLicense } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
registerLicense('Mgo+DSMBaFt/QHRqVVhjVFpGaV1DQmFJfFBmTWlde1R1fUU3HVdTRHRcQlxhS35bckBjWX5XcHQ=;Mgo+DSMBPh8sVXJ0S0J+XE9HflRAQmFIYVF2R2BJd1R0cF9DaUwgOX1dQl9gSX9RdEVrXXpecHZUR2A=;ORg4AjUWIQA/Gnt2VVhkQlFadVdJX3xLf0x0RWFab1Z6cFFMZVVBNQtUQF1hSn5SdEdjUXtbcHRXRGVc;OTgzNDUwQDMyMzAyZTM0MmUzMFhjUURDS1dENnJhZ0pQaFdlYm11OVI5ZHRxNGdOTE1ma2VYUWxRTkdNZHc9;OTgzNDUxQDMyMzAyZTM0MmUzMGdObEplSU5pVWxKZENrQTZhTkRoU3l4cGVJQ2MweTV4RWJHVnppY2lkM0E9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmFWfFJpR2NbfE54flFCallYVAciSV9jS31Td0dhWXdadXRVRGheUQ==;OTgzNDUzQDMyMzAyZTM0MmUzMGtablRabjlJR3Q4Y1A1SnptZGVXWDVPeU1oSnFVWDhjMUl3OFRNekYwZVE9;OTgzNDU0QDMyMzAyZTM0MmUzMGR0V05INWRmYktXYlFzS1RxL2hwSVQ2N2lUN2RDbWl0UnFMb2lxSjMrSk09;Mgo+DSMBMAY9C3t2VVhkQlFadVdJX3xLf0x0RWFab1Z6cFFMZVVBNQtUQF1hSn5SdEdjUXtbcHRWQmFb;OTgzNDU2QDMyMzAyZTM0MmUzMFB6VC9BbVV6WnBBTTZVV1R3SFFYYnJvNWd2cVNYZlBOQyt4ekdNT1hZck09;OTgzNDU3QDMyMzAyZTM0MmUzMFg4OWtUaVc2YXcwdStFY3J2RC9TZUN0M3pCanNSUm5uaFdNSmViSmZLak09;OTgzNDU4QDMyMzAyZTM0MmUzMGtablRabjlJR3Q4Y1A1SnptZGVXWDVPeU1oSnFVWDhjMUl3OFRNekYwZVE9');
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