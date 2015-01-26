(function() {

  return {
    events: {
              'app.activated':'doSomething',
              'click  .refresh':       'doGetTicketPriority',
              'notification.notification':       'sendNotification'
            },

    requests:{
              getPriority:{
                            url: 'http://50.97.84.135:8881/ZendeskCallback?id=2',
                            type: 'GET',
                            dataType: 'json'
                          }
            },

sendNotification: function(msg) {
               services.notify(msg);
               services.notify('testFunc!');
             },

doSomething: function() {
               this.switchTo('body',null);
               this.popover({width:240,height:120});
               this.popover("hide");
               //services.notify('testFunc!'+this.id());
               //services.notify('testFunc!');
               //this.switchTo('main');
               //this.hide();
             },
doGetTicketPriority: function(){
                       this.ajax('getPriority')
                         .done(function() {
                           services.notify("get tickets priority success"); 
                         })
                         .fail(function() {
                           services.notify("get tickets priority error"); 
                         })
                         .always(function() {
                           services.notify("get tickets priority complete"); 
                           this.switchTo('body',null);
                         });
                       this.$('.refresh li').removeClass('re');
                       this.switchTo('wait',null);
                       //this.popover("hide");
                       //this.switchTo('iframe',null);
                       //this.switchTo('list',null);
                     }
  };

}());
