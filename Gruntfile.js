const input = "src/js/index.js";
const output = "dist/js/index.js";

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

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    browserify: {
      once: {
        src: input,
        dest: output,
        options: {
          transform: transform
        }
      },
      watch: {
        src: input,
        dest: output,
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
        files: ((output) => {
          let o = {};
          o[output] = output;
          return o;
        })
      }
    }

  });

  return grunt.registerTask("default", [
    "browserify:once",
    "uglify:once"
  ]);

};