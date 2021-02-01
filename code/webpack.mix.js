const mix = require('laravel-mix');

mix.js('src/js/*.js', 'public/js')
.sass('src/sass/style.scss', 'public/css')
.options({
    autoprefixer: {
        options: {
            browsers: [
                'last 6 versions',
            ]
        }
    }
})
.browserSync();

mix.browserSync({
    files: [
        "*.php",
        "public/**/*.*"
    ],
    proxy: {
        target: "http://192.168.33.11/",
    }
});
