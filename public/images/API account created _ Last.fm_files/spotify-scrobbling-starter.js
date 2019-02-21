define(["require","social/spotify-scrobbling"],function(t){"use strict";var i=t("social/spotify-scrobbling"),s=function(t,i){this.$el=t,this.successPath=this.$el.data("spotify-scobbling-success-modal"),this.failPath=this.$el.data("spotify-scobbling-fail-modal"),this.modal=i.modal};return s.prototype.start=function(){this.$el.on("click.spotify-scrobbling-starter",this.click.bind(this))},s.prototype.stop=function(){this.$el.off(".spotify-scrobbling-starter")},s.prototype.click=function(t){t.preventDefault(),i.reauthenticate().then(this.success.bind(this)).catch(this.fail.bind(this))},s.prototype.success=function(){this.modal.open(this.successPath)},s.prototype.fail=function(){this.modal.open(this.failPath)},s});