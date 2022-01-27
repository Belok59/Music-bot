module.exports = {
    app: {
        px: '-',
        token: 'ODg3NjMyMzM4MDYwNzE0MDQ1.YUG-CA.07r3s9WPIWqgvnMKf37ON3u27sk',
        playing: 'par Baylord Yama'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
