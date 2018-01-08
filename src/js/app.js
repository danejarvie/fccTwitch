
var channelList = [ "freecodecamp", "nl_Kripp", "HSdogdog", "itsHafu", "BobRoss", "sentdex", "DisguisedToastHS", "Tizzleroo"];
var twitchClientID = "nocu78lvcal2ijvy6slyc2soz3qqmo";
//var channelApi = "https://wind-bow.gomix.me/twitch-api/channels/"; //freecodecamp workaround
var channelApi = "https://api.twitch.tv/helix/users?login="; //latest url
//var channelApi = "https://api.twitch.tv/kraken/channels/twitch"; //v5 url
//var streamApi = "https://wind-bow.gomix.me/twitch-api/streams/";
//var streamApi = "https://api.twitch.tv/kraken/streams/";
var streamApi = "https://api.twitch.tv/helix/streams?user_id=81119098";
var jsonpSuffix = "?callback=?";
var channelHTML = "";
var myHeaders = new Headers({
    'Content-type': 'application/json',
    'Client-ID': twitchClientID
});
var myInit = { method: 'GET',
               headers: myHeaders
               //mode: 'cors',
               //cache: 'default' 
            };


angular.module("app", [])
    .controller("app", function($scope) {
        
        $scope.liveChannels = [];
        $scope.offlineChannels = [];
        /*
        channelList.forEach(function(value) {
            console.log(value);
            fetch(channelApi + value, myInit)
                .then(function(response){

                });

            
        });*/
        fetch(streamApi, myInit)
                .then(function(response){

                });


        


    });