import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

class Gridcomponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products1:[
              {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
              {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
              {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
              {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
              {"id": "1004","code": "h456wer53","name": "Bracelet","description": "Product Description","image": "bracelet.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
              {"id": "1005","code": "av2231fwg","name": "Brown Purse","description": "Product Description","image": "brown-purse.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4}
          ],
            editingRows: {}
        };

        this.columns = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'quantity', header: 'Quantity' },
            { field: 'price', header: 'Price' }
        ];

        this.statuses = [
            { label: 'In Stock', value: 'INSTOCK' },
            { label: 'Low Stock', value: 'LOWSTOCK' },
            { label: 'Out of Stock', value: 'OUTOFSTOCK' }
        ];
    }

    textEditor(options) {
      return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
  }

  priceEditor(options) {
    return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
}

    cellEditor(options) {
      if (options.field === 'price')
          return this.priceEditor(options);
      else
          return this.textEditor(options);
  }


  cellEditor(options) {
    if (options.field === 'price')
        return this.priceEditor(options);
    else
        return this.textEditor(options);
  }

  priceBodyTemplate(rowData) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
}

onCellEditComplete(e) {
  let { rowData, newValue, field, originalEvent: event } = e;

  switch (field) {
      case 'quantity':
      case 'price':
          if (this.isPositiveInteger(newValue))
              rowData[field] = newValue;
          else
              event.preventDefault();
          break;

      default:
          if (newValue.trim().length > 0)
              rowData[field] = newValue;
          else
              event.preventDefault();
          break;
  }
}

    render() {
        return (
            <div className="datatable-editing-demo">
                <Toast ref={(el) => this.toast = el} />

                <div className="card p-fluid tablearea">
                    <DataTable value={this.state.products1} editMode="cell" className="editable-cells-table" responsiveLayout="scroll">
                        {
                            this.columns.map(({ field, header }) => {
                                return <Column key={field} field={field} header={header} style={{ width: '25%' }} body={field === 'price' && this.priceBodyTemplate}
                                    editor={(options) => this.cellEditor(options)} onCellEditComplete={this.onCellEditComplete} />
                            })
                        }
                    </DataTable>
                </div>
            </div>
        );
    }
}

export default Gridcomponent;