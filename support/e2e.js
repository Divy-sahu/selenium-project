// support/e2e.js

// अगर custom commands नहीं हैं, तो सिर्फ यह लाइन रखो:
import 'cypress-mochawesome-reporter/register';

// अगर तुम्हारे पास commands.js भी है, तो ये दोनों लाइनें रखो:
import './commands';
import 'cypress-mochawesome-reporter/register';
