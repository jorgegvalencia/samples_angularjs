module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            app: {
                files: [{
                    expand: true,
                    cwd: 'scripts/',
                    src: ['**/*.js'],
                    dest: 'src/'
                }]
            }
        },

        'string-replace': {
            dist: {
                options: {
                    replacements: [{
                        pattern: /["']ngInject["'];*/g,
                        replacement: ''
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.js',
                    dest: 'src/'
                }]
            }
        },

        concat: {
            options: {
                separator: '\n;',
                process: false,
                stripBanners: {
                    block: true
                }
            },
            app: {
                src: [
                    'bower_components/moment/moment.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-sanitize/angular-sanitize.js',
                    'src/**/*.js',
                    'src/*.js'
                ],
                dest: 'dist/app.js'
            }
        },

        uglify: {
            options: {
                sourceMap: true
            },
            built: {
                files: {
                    'dist/app.min.js': ['dist/app.js']
                }
            }
        },

        less: {
            build: {
                files: {
                    "dist/style.css": "bower_components/bootstrap/less/bootstrap.less",
                }
            }
        },

        watch: {
            js: {
                files: ['scripts/**/*.js', 'scripts/*.js'],
                tasks: ['concat']
            }
        }

    });

    // plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-string-replace');

    // default task(s).
    grunt.registerTask('default', ['less', 'concat', 'watch']);
    //grunt.registerTask('prod', ['less', 'concat', 'uglify']);
    grunt.registerTask('prod', ['less', 'ngAnnotate','string-replace', 'concat', 'uglify']);

};
