const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
 
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            /* babel loader */
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    },
    /* plugin */
    plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            // Template di sana merupakan berkas rujukan bagi pembuatan berkas HTML yang dihasilkan HtmlWebpackPlugin.
            template: "./src/template.html",
            // Lalu nilai dari properti filename akan digunakan sebagai penamaan berkas HTML yang akan dihasilkan nanti.
            filename: "index.html"
        })
    ]
}

/* “Sebenarnya kita juga dapat melihat warning lain yang menunjukkan ukuran bundle.js sudah melampaui batas. 
Kita bisa lihat sendiri dengan membuka berkas bundle.js. Di sana kita akan menemukan banyak sekali kode yang 
dihasilkan dibandingkan dengan sebelumnya. 

Hal ini disebabkan kode yang kita tulis memiliki ketergantungan (dependencies) terhadap package JQuery dan Moment. 
Sehingga package tersebut perlu dibundel juga pada berkas bundle.js. karena itulah berkas bundle.js menjadi bengkak ukurannya. 

Ini merupakan salah satu alasan mengapa sebaiknya kita hindari penggunaan package pihak ketiga yang kita bawa hingga tingkat 
production. Membengkaknya berkas bundle.js, tentu akan berdampak terhadap performa web yang kita bangun nantinya.” */