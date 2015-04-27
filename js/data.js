(function(window) {
     window.apps = [
        {
            name: "Facebook",
            imgUrl: 'img/facebook.png',
            issues: ['Excessive notifications', 'Irrelevant notifications'],
            writeup: "Facebook is a social networking app. Of all the applications we explored for this project, it received the largest number of complaints. However it’s difficult to say that facebook notifications are “bad,” as many of them are actionable or caused directly by people you follow.\n\nOften, it can be possible to cut down on the number of notifications that one receives by turning off notifications for groups that are no longer relevant. Similarly, annoying game requests can be removed by unselecting the “receive notifications about application requests” in the facebook app settings. The Facebook app also sends notifications about nearby friends, which many people also find annoying, and can similarly be turned off in the application settings.\n\nHowever, a large number of people turn notifications for the Facebook app off entirely, in the general settings menu. A good rule of thumb is if you already check Facebook at least once a day, it can be beneficial to turn off notifications.",
            link: "https://www.facebook.com/help/103859036372845 ",
        },
        {
            name: 'Twitter',
            imgUrl: 'img/twitter.png',
            issues: ['Excessive notifications', 'Ad-like notifications', 'Out-of-network notifications', 'Digest notifications'],
            writeup: "Twitter is a social networking app that sends notifications whenever users favorite or like a tweet created by you, or whenever someone directly messages you using the service. There are also other notifications, that notify you whenever a large number of people you follow favorite the same tweet, that can be excessive at times. Like all social networking apps, we recommend disabling notifications it sends if you already check it every day. We also recommend disabling all of the settings except for direct messages, and mentions.",
            link: "https://support.twitter.com/articles/20170803-managing-push-notifications-on-twitter-for-iphone",
        },
        {
            name: 'Pinterest',
            imgUrl: 'img/pinterest.png',
            issues: ['Excessive notifications', 'Out-of-network notifications', 'Digest notifications'],
            writeup: "Pinterest is a social app, however most of the notifications it generates are not from people in your network, and are often not notifications you need to take action on. Therefore, we recommend turning off all notifications in the general settings.",
            link: "https://help.pinterest.com/en/articles/notification-settings#Web",
            border: true,
        },
        {
            name: 'Timehop',
            imgUrl: 'img/timehop.jpg',
            issues: ['Digest notifications'],
            writeup: "Timehop is a utility app, but it sends daily notifications to check the timehop they’ve created. It’s not important to be notified about this, so we recommend turning notifications off in the general settings.",
        },
        {
            name: 'Words with Friends',
            imgUrl: 'img/wordswithfriends.jpg',
            issues: ['Excessive notifications', 'Irrelevant notifications', 'Ad-like notifications'],
            writeup: "Timehop is a utility app, but it sends daily notifications to check the timehop they’ve created. It’s not important to be notified about this, so we recommend turning notifications off in the general settings.",
        },
        {
            name: 'Shazam',
            imgUrl: 'img/shazam.jpg',
            issues: ['Ad-like notifications', 'Out-of-network notifications'],
            writeup: "Shazam is a utility app, but it sends notifications about trending and new music. It’s not important to be notified about this, so we recommend turning notifications off in the general settings.",
        },
        {
            name: "Soundcloud",
            imgUrl: 'img/soundcloud.png',
            issues: ["Irrelevant notifications", "Digest notifications"],
            writeup: "Soundcloud is a music sharing app, but it often notifies users about activity caused by people outside of their network. If knowing about new music from artists you follow is important to you, we recommend customizing the Soundcloud notification settings so that you only receive notifications when artists you follow. However, if this is not important to you, we recommend turning off all notifications in the general settings.",
        },
        {
            name: "Instagram",
            imgUrl: 'img/instagram.jpg',
            issues: ["Excessive Notifications"],
            writeup: "Instagram is a social network, and it notifies users whenever their Facebook friends join, when people you follow add a photo, and when other users like your photos. Most of these are not actionable, and can add up to a large number of notifications when a user is following many other users. Therefore, we recommend turning off notifications in the general settings, or customizing settings within the app so that less notifications are sent."
        },
        /*{
            name: "Mail",
            issues: ["Excessive notifications"],
            writeup: "Although many people receive a notification every time someone sends them an email, many people receive so many emails that the notifications can become annoying. If you already check your mail app every day, we recommend turning off notifications."
        },*/
        {
            name: "GroupMe",
            imgUrl: "img/groupme.jpg",
            issues: ["Excessive notifications"],
            writeup: "GroupMe is a social messaging app, and our research indicates that people join many messaging channels that, although they enjoy reading once in a while, are not important enough to merit regular notifications. We recommend turning off notifications on channels that are not important to you.",
            border: true,
        },
        {
            name: "Piazza",
            imgUrl: "img/piazza.jpg",
            issues: ["Irrelevant notifications", "Excessive notifications"],
            writeup: "Piazza is a course question and answer application. Although it can be convenient to be notified when an instructor answers your question, it can be annoying to be notified whenever a person in a course you are in posts a question. We recommend turning off notifications for this app, and only checking it when you’re actively working on a course’s homework."
        },
        {
            name: "Periscope",
            imgUrl: "img/periscope.jpg",
            issues: ["Out-of-network notifications"],
            writeup: "Periscope is a social live-streaming service. It notifies users when their friends are streaming, or when popular live streams are taking place. We recommend turning off notifications for most streams."
        },
        {
            name: "Tinder",
            imgUrl: 'img/tinder.jpg',
            issues: ["Excessive notifications", "Non-informative notifications"],
            writeup: "Tinder is a socially connected dating app. It sends notifications when you “match” with other users, and when users you’ve matched with message you. However, the notifications Tinder sends are often not informative, as they contain only the sender and not the content of the message. We recommend turning off notifications when you’re not actively using the app.",
            link: "http://www.wikihow.com/Adjust-Your-Tinder-Notification-Settings-on-iOS",
            border: true,
        },
        {
            name: "Snapchat",
            imgUrl: 'img/snapchat.jpg',
            issues: ['Ad-like notifications', 'Digest notifications', 'Non-informative notifications'],
            writeup: "Snapchat is a social messaging app. Although we did receive some complaints about Snapchat, the app does not offer any notification settings customization. The only way to change the number of notifications it sends is by disabling all notifications in the general application settings.",
        },
        {
            name: "Slack",
            imgUrl: 'img/slack.jpg',
            issues: ['Excessive notifications by default'],
            writeup: "Slack is a work messaging app, that allows users to subscribe to channels of communication in addition to the typical personal messages. We recommend turning off notifications for all but the most critical channels, as the number of notifications they generate can be excessive.",
            link: "https://slack.zendesk.com/hc/en-us/articles/201398457-Configuring-mobile-push-notifications",
        },
        {
            name: '8tracks',
            imgUrl: 'img/8tracks.jpg',
            issues: ['Ad-like notifications', 'Notifications from a utility app'],
            writeup: "8-tracks is a radio app that will send notifications to promote the service. We recommend turning off all notifications for the app in the general application settings.",
            link: "http://8tracks.com/faq"
        },
        {
            name: 'Are you smarter than a fifth grader',
            imgUrl: 'img/areyousmarter.jpg',
            issues: ['Ad-like notifications'],
            writeup: "Are You Smarter Than a Fifth Grader is a game app that will send notifications as reminders to use the app. We recommend turning off all notifications in the general settings menu.",
        },
        {
            name: 'Interval Timer',
            imgUrl: 'img/intervaltimer.jpg',
            issues: ['Ad-like notifications', 'Notifications in a utility app'],
            writeup: "Interval Timer is a utility app that sends notifications as a reminder to use the app. We recommend turning off all notifications in the general settings menu."
        },
        /*{
            name: 'Tips',
            issues: ['Notifications in a utility app'],
            writeup: "Tips is a utility app that teaches new iPhone users how to use the default installed applications. We recommend turning off all notifications from this app, which can be done in the general notifications settings menu.",
            link: "http://www.solveyourtech.com/turn-tips-notifications-iphone-5/"
        },*/
        {
            name: "UNO & Friends",
            imgUrl: 'img/unoandfriends.jpg',
            issues: ['Ad-like notifications'],
            writeup: "UNOFriends is an app that sends ad-like reminders to play. We recommend turning off all notifications for this app in the general notifications settings menu."
        },
        /*{
            name: "Messages",
            issues: ['Excessive notifications'],
            writeup: "Many people find the number of notifications sent by the default messages application to be excessive. Although the notifications can not be turned off entirely, conversations can be “snoozed” for certain amounts of time, which can give you some control over the notifications."
        },*/
        {
            name: "Facebook Messenger",
            imgUrl: "img/facebookmessenger.jpg",
            issues: ['Excessive notifications'],
            writeup: "Many people find the number of notifications sent by Facebook Messenger application to be excessive. Notifications for Facebook Messenger can be “muted” for certain lengths of time, which can give some control over the number of notifications sent.",
            border: true,
        },
        {
            name: "PopKey",
            imgUrl: "img/popkey.jpg",
            issues: ["Ad-like notifications"],
            writeup:"Popkey is a gif-based keyboard. As it is a utility app, it does not need notifications, and we would recommend turning them off.",
        },
        {
            name: "2048",
            imgUrl: 'img/2048.jpg',
            issues: ['Ad-like notifications'],
            writeup: "2048 is a game that sends ad-like reminders to play. We recommend turning off all notifications for this app in the general notifications settings menu."
        },
        {
            name: "Trivia Crack",
            imgUrl: 'img/triviacrack.jpg',
            issues: ['Ad-like notifications'],
            writeup: "Trivia Crack is a game that sends ad-like reminders to play. We recommend turning off all notifications for this app in the general notifications settings menu."
        },
        {
            name: "Pandora",
            imgUrl: 'img/pandora.jpg',
            issues: ['Notifications in a utility app', 'Irrelevant notifications'],
            writeup: "Pandora is a music streaming app that sends notifications when new music becomes available or when other users post on your profile. We recommend disabling notifications from Pandora in the general notifications settings menu.",
            link: "http://help.pandora.com/customer/portal/articles/1441660-push-notifications",
        },
        {
            name: "Spotify",
            imgUrl: 'img/spotify.jpg',
            issues: ["Notifications in a utility app"],
            writeup: "Spotify is a music streaming app that sends notifications when new music becomes available or when other users post on your profile. We recommend disabling notifications from Spotify the general notifications settings menu.",
            link: "http://www.solveyourtech.com/how-to-turn-off-spotify-notifications-on-the-iphone-5/"
        },
        {
            name: "Venmo",
            imgUrl: 'img/venmo.jpg',
            issues: ['Irrelevant notifications'],
            writeup: "Venmo is a social payments app that sends notifications when payments are conducted between friends. We recommend turning of several of their auxiliary notifications that are enabled by default, such as the notification sent when a friend joins Venmo, or the payments made by friends on Venmo.",
            link: "https://help.venmo.com/customer/portal/articles/1322628-you-keep-reminding-my-friends-and-i-to-join-venmo-how-do-i-stop-this-"
        },
        {
            name: "Candy Crush",
            imgUrl: 'img/candycrush.jpg',
            issues: ['Irrelevant notifications', 'Ad-like notifications'],
            writeup: "Like many games, Candy Crush sends notifications to encourage users to play. However, many notifications do not provide important or actionable information, and function mostly as ads for the game. We recommend disabling notifications from Candy Crush in the general notifications settings menu."
        },
        {
            name: "Real Racing",
            imgUrl: 'img/realracing.jpg',
            issues: ['Ad-like notifications'],
            writeup: "Like many games, Real Racing sends notifications to encourage users to play. However, many notifications do not provide important or actionable information, and function mostly as ads for the game. We recommend disabling notifications from Real Racing in the general notifications settings menu."
        }
    ];
})(window);
