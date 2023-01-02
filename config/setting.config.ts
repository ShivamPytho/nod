'use strict';
export const textToSpeech = require('@google-cloud/text-to-speech');
export const ttsClient = new textToSpeech.TextToSpeechClient({
    projectId: 'your-project-id',
    keyFilename: './rmg-dialer-216800-d34497254035.json',
});
export class Setting {
    KEY = "/etc/httpd/conf/ca.key";
    CERT = "/etc/httpd/conf/ca.crt";
    HTTPS = false;
    PORT = 4227;
    DOMAIN = "localhost";
}
// export class stripePaymentKeys {
//     publishable_key = 'pk_test_d0HlS1Sj71gqj74d9kArjGAS00EoWoUsC8';
//     secret_key = 'sk_test_ADJ6thce101bxBTFPbSZmnfE00QMQp4Yw0';
// }



export class DataBaseConfig {
    HOST = "localhost";
    USER = "root";
    PASS = "";
    NAME = "ecom";
    PORT = "3306";
}


export class MongoConfig {
    public HOST: string = "142.54.169.82";
    public USER: string = "gvadmin";
    public PASS: string = "2012GventureAdmin2021";
    public NAME: string = "ca_dialer";
    public PORT: string = "27017";
}

export class VoiceServer {
    TYPE = "none";
    HOST = "127.0.0.1";
    USER = "";
    PASS = "ClueCon";
    NAME = "agentstraining";
    PORT = "8021";
    IVR = "";
    CALLERID = '9145806758';
    GATEWAY_PREFIX = '31425366*';
    GATEWAY_NAME = 'flowroute';
}

export class API { }

export class UploadDirectory {
    // public UPLOADSDIR = 'C:/Users/user/Desktop/fortress_dialer/trunk/node/node2/uploads';
    // public UPLOADPATH = 'C:/Users/user/Desktop/fortress_dialer/trunk/node/node2/uploads';

    public UPLOADSDIR = '/home/dell/projects/fortress_dialer/trunk/node/node2/uploads/';
    public UPLOADPATH = '/home/dell/projects/fortress_dialer/trunk/node/node2/uploads/';
    public SCRIPTPATH = '/var/www/html/scripts/';
    public CRMSETTINGDIR = '/home/dell/projects/trunk/angular/src/assets/'
    public AUDIOPATH = '/home/dell/projects/fortress_dialer/trunk/angular/src/assets/audio/'
    public AVTARPATH = '/home/dell/projects/fortress_dialer/trunk/angular/src/assets/avatarfile/'


    
}

export class downloadUrl {
    // public MYSQLDIR = '/var/www/html/downloads/';
    public MYSQLDIR = '/home/dell/projects/trunk/downloads/';
}

export class AssetsPath {
    public SAMPLECSV = "/home/dell/projects/trunk/node/assets/"
}

export const sipDomain = 'http://app.nexcon.com/';

export const sipDomainwithouthttp = 'app.nexcon.com';