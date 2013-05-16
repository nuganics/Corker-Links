CloudFlare.define( "seolinks",

    [ "seolinks/config", "cloudflare/jquery1.7" ],

    function( config, $ )
    {
        $( document ).ready( function() {
            $( 'a[href^="http://"]' ).filter( function() {
                return this.hostname && this.hostname !== location.hostname;
            }).attr({
                target: '_blank',
                rel: 'nofollow'
            });
        });
    }
)
