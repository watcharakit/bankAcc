/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',

    onButtonClick1: function(button, e, eOpts) {
        this.editStore();
    },

    onButtonClick: function(button, e, eOpts) {
        var store= Ext.getStore('bankListStore'),
            model= MyApp.model.banklist,
            //console.log(store);

            addType = Ext.getCmp('type').rawValue;

        //console.log(form.getValues());
        this.fnSelectAdd(addType);

        //this.fnSelect(addType);

        /*banklistStore.add(new banklist({
        Date:'12/10/1111',
        Dep_no:'2222',
        Witdrawal:'2000'
        }));*/

        /*console.log(Ext.getCmp('bankacc').rawValue);
        console.log(Ext.getCmp('date').value);
        console.log(Ext.getCmp('depno').value);
        console.log(Ext.getCmp('withdrawal').value);
        console.log(Ext.getCmp('amount').value);*/

        //var form = Ext.getCmp("fromList").getForm().getValue();
    },

    clickcolumn: function(column,action,view, rowIndex, colIndex, item, e) {
        var store =  Ext.getStore('bankListStore');
        //var rec = view.getRecords(view.getNodes())[rowIndex];
        store.removeAt(rowIndex); 
    },

    loedWindow: function(rowmodel, record, index, eOpts) {
        this.loadWindown(record);
    },

    fnSelectAdd: function(type) {
        var store= Ext.getStore('bankListStore'),
            model= MyApp.model.banklist,
            addAmount=Ext.getCmp('amount').value,
            //form = Ext.getCmp("fromList").getForm();
            addName = Ext.getCmp('bankacc').rawValue,
            addDate = Ext.getCmp('date').value,
            addDepno= Ext.getCmp('depno').value,
            addMachNo=Ext.getCmp('matchno').value,
            addAmount=Ext.getCmp('amount').value;

        if(type == 'Deposit'){
            var list = new model({
                BankAccount:addName,
                Date:addDate,
                Dep_no:addDepno,
                Deposit:addAmount,
                Withdrawal:'0.00',
                Mach_no:addMachNo
            });
            store.add(list);
        }else{
            var list = new model({
                BankAccount:addName,
                Date:addDate,
                Dep_no:addDepno,
                Deposit:'0.00',
                Withdrawal:addAmount,
                Mach_no:addMachNo
            });
            store.add(list);
        }

        /*var form = Ext.getCmp('fromList').getForm().getValues();
        store.add(form);*/
    },

    loadWindown: function(window) {
        var Window = MyApp.view.window,
            showWindown = new Window;

        showWindown.show();
        for (prop in window.raw){
            //console.log(prop);
            if(prop != 'id'&& prop != 'Withdrawal' && prop != 'Deposit')
            Ext.getCmp(prop).setValue(window.data[prop]);
        }
    },

    editStore: function() {
        for (prop in window.raw){

        }


    },

    init: function(application) {
        this.control({
            "Window #Save": {
                click: this.onButtonClick1
            },
            "#add": {
                click: this.onButtonClick
            },
            "gridShowList actioncolumn": {
                itemclick: this.clickcolumn
            },
            "gridShowList": {
                select: this.loedWindow
            }
        });
    }

});