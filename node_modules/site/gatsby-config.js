require('dotenv').config();

module.exports = {
    plugins: [
        // Telll gatsby which theme you will be using, because 
        {
            resolve: "agency-theme",
            options: {
                wordPressUrl: `${ process.env.SITE_URL }`
            }
        }
    ]
}