const javaScriptInput = "src/js/index.js";
const javaScriptOutput = "dist/index.js";

const sassInput = "src/sass/index.scss";
const sassOutput = "dist/index.css";

const transform = [
  ["babelify",
    {
      "presets": ["es2015"]
    }
  ]
];

module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-sass");

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    browserify: {
      once: {
        src: javaScriptInput,
        dest: javaScriptOutput,
        options: {
          transform: transform
        }
      },
      watch: {
        src: javaScriptInput,
        dest: javaScriptOutput,
        options: {
          transform: transform,
          watch: true,
          keepAlive: true
        }
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      once: {
        files: ((javaScriptOutput) => {
          let o = {};
          o[javaScriptOutput] = javaScriptOutput;
          return o;
        })(javaScriptOutput)
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: ((sassInput, sassOutput) => {
          let o = {};
          o[sassOutput] = sassInput;
          return o;
        })(sassInput, sassOutput)
      }
    }

  });

  return grunt.registerTask("default", [
    "browserify:once",
    "uglify:once",
    "sass"
  ]);

};