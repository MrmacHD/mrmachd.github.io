$(document).ready(function(){$(document).on("click","a[href*=#]",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);a=a.length&&a||$("[name="+this.hash.slice(1)+"]");if(a.length){var b=a.offset().top;$("html,body").animate({scrollTop:b},300);return false}}})});