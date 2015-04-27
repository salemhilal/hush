(function(window) {
    console.log('data loading');
     window.apps = [
        {
            name: 'Facebook',
            imgUrl: 'img/facebook.png',
        },
        {
            name: 'Twitter',
            imgUrl: 'img/twitter.png',
        },
        {
            name: 'Pinterest',
            imgUrl: 'img/pinterest.png'
        },
        {
            name: 'Instagram',
            imgUrl: 'img/instagram.png',
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
            issues: ['Ad-like notifications', 'Out-of-network notifications']
        }
    ];
})(window);
console.log('hi');
