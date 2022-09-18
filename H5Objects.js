let ScriptUtil = {
    GetUserContext: function () {
        return {
            CONO,
            DIVI,
            DTFM,
            CurrentDivision,
            CurrentCompany
        }
    }
}

class MIRequest {
    program = '';
    transaction = '';
    record = {};
    outputFields = [];
    maxReturnedRecords = 0;
    includeMetadata = false;

}

class PositionElement {
    Top;
    Left;
    Width;
    Height;
}

class ButtonElement {
    Name = '';
    Value = '';
    IsEnabled = false;
    IsReadEnabled = false;
    TabIndex = 1;
    FieldHelp = '';
    ReferenceFile = '';
    ReferenceField = '';
    Position = new PositionElement();
    Constraint = '';
    Command= '';
    CommandValue = '';
}

class ListElement {
    Name = '';
    Value = '';
    IsEnabled = false;
    IsVisible = false;
    IsReadDisabled = false;
    TabIndex = 1;
    FieldHelp = '';
    ReferenceFile = '';
    ReferenceField = '';
    Position = new PositionElement();
    Constraint = '';
    MNEAI = '';
    Columns = [];
    Rows = [];
    SelectedRows = [];
}

let MIService = {
    executeRequest: function (requestObject) {
        return new Promise((resolve, reject)  => {

        })
    }
}

let scriptArgs = {
    controller:{
        GetMode: function(){},
        GetContentElement: function(){},

    },
    elem: '',
    args: '',
    log: ''

}


module.exports = {
    ScriptUtil, MIService, MIRequest,scriptArgs,ButtonElement,PositionElement

}



