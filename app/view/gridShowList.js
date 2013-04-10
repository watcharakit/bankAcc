/*
 * File: app/view/gridShowList.js
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

Ext.define('MyApp.view.gridShowList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridShowList',

    height: 484,
    id: 'gridShowList',
    width: 1001,
    title: 'My Grid Panel',
    store: 'bankListStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'id',
                    text: 'ID'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'BankAccount',
                    text: 'Bank Account'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'Date',
                    text: 'Date'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Dep_no',
                    text: 'Dep_no'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'Withdrawal',
                    text: 'Withdrawal'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'Deposit',
                    text: 'Deposit'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Mach_no',
                    text: 'mach_no'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Member_id',
                    text: 'Member_id'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Transaction_no',
                    text: 'Transaction_no'
                },
                {
                    xtype: 'actioncolumn',
                    sortable: true,
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                this.fireEvent('itemclick', this, 'Record', view, rowIndex, colIndex, item, e);
                            },
                            icon: 'resourse/icons/fam/delete.gif',
                            tooltip: 'Delete'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});