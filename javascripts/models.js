var File = Backbone.Model.extend({
    
});

var Directory = Backbone.Collection.extend({
    model: File
});

var root = new Directory();
