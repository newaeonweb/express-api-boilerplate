var mongo = require('mongodb');
// Import port from config
var config = require('./config/config.js');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

// Connect to MongoDB
var server = new Server('192.168.99.100', 32830, {auto_reconnect: true});
// Create a new DB
db = new Db('speakerdb', server, {safe: true});
// Open db and check for a collection
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'speakerdb' database");

        // Create a collection
        var collection = db.collection('speakers');
        // Populate new db
        insertDataIntoCollection();

    } else {
        console.log(err);
    }
});

var insertDataIntoCollection = function() {

    var speakers = [
        {
            name: "Joel Sant Mirs",
            company: "Sadistico Records",
            country: "Mexico",
            title: "MongoDB and Node.js.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Fernando Monteiro",
            company: "newaeonweb",
            country: "Brazil",
            title: "JavaScript Performance",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Phillip A",
            company: "NoSQL Now",
            country: "USA",
            title: "Analog between SQL and NoSQL",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Mary Sunshine Brett",
            company: "InNm",
            country: "USA",
            title: "Impressive Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Jeremy Ashkenas",
            company: "BB",
            country: "USA",
            title: "Backbone, Backbone, Backbone",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Antonip Trivalle Cavets",
            company: "Slim Co.",
            country: "Italy",
            title: "Whats on PHP 5 ",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Catherine Sillas",
            company: "Brunette Visual",
            country: "France",
            title: "Perfromance on MongoDB",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Bruce Armandi",
            company: "Interactive",
            country: "France",
            title: "Building an API with Rails",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Martin Exx.",
            company: "Code Now",
            country: "USA",
            title: "Starting with Rails",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "John Doe",
            company: "Design for Future",
            country: "USA",
            title: "User Experience on Mobile",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Ricco Friggas",
            company: "Friggas Studio",
            country: "Argentina",
            title: "Web now",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Clare Notree Mar",
            company: "Build Co.",
            country: "France",
            title: "Sales on IT",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Silvester Joshua",
            company: "Build Co.",
            country: "Norway",
            title: "RWD and Mobile First",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Cliff B",
            company: "Metal Media",
            country: "Spain",
            title: "Single Page Application how to",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Mark Miller",
            company: "Miller",
            country: "Spain",
            title: "Do first and do better",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Oliver Marshall",
            company: "Studio A",
            country: "USA",
            title: "HTML5 API",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "John Krammer",
            company: "Krammer Coding",
            country: "USA",
            title: "SASS and Compass",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "João Macedo",
            company: "newaeonweb",
            country: "Brazil",
            title: "Design for people",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Alex J. B.",
            company: "Freelancer",
            country: "USA",
            title: "Building Frameworks the right way",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Joe",
            company: "MD5",
            country: "USA",
            title: "Introdution to DART",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Diva Jones",
            company: "Make 4 people",
            country: "USA",
            title: "What is Design?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Allan Van K.",
            company: "VanK Code",
            country: "France",
            title: "How to use Ember.js",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Eggberg",
            company: "Angular X",
            country: "New Zealand",
            title: "Angular.js in action",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        },
        {
            name: "Billy Haiss",
            company: "Freelancer",
            country: "USA",
            title: "Flex-box now",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            picture: "sample-image.jpg"
        }];

    db.collection('speakers', function(err, collection) {
        console.log('Inserting data into speakerdb');
        collection.insert(speakers, {safe:true}, function(err, result) {
            if(!err) {
                console.log(result);
                console.log('Great now you have your first collection on speakerdb');
            }
        });
    });

};
